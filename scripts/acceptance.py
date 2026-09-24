"""Run acceptance and retain evidence even when a check fails.

python scripts/acceptance.py          # synthetic fixture and offline browser acceptance
python scripts/acceptance.py --demo-only  # offline shipped demo only
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import importlib.metadata
import json
import os
from pathlib import Path
import platform
import subprocess
import sys
import time
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "artifacts" / "acceptance"


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def git(*args):
    return subprocess.check_output(["git", *args], cwd=ROOT, text=True).strip()


def browser_check(label):
    """Fresh contexts, offline file:// loading, and actual browser execution."""
    report = {"label": label, "runs": [], "passed": False}
    try:
        from playwright.sync_api import Error as PlaywrightError, sync_playwright
        with sync_playwright() as p:
            try:
                browser_handle = p.chromium.launch()
            except PlaywrightError as exc:
                chrome = Path("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
                if "Executable doesn't exist" not in str(exc) or not chrome.is_file():
                    raise
                browser_handle = p.chromium.launch(executable_path=str(chrome))
            with browser_handle as browser:
                report["browser_version"] = browser.version
                for number in range(1, 4):
                    with browser.new_context(offline=True) as context:
                        page = context.new_page()
                        errors, network = [], []
                        page.on("pageerror", lambda error: errors.append(str(error)))
                        page.on("request", lambda request: network.append(request.url)
                                if request.url.startswith(("https://", "http://")) else None)
                        page.goto((ROOT / "web/index.html").as_uri(), wait_until="load")
                        page.add_script_tag(path=str(ROOT / "tests/rehearsal.js"))
                        failures = page.evaluate("window.__rehearse()")
                        # The existing rehearsal covers all levels, queue ordering,
                        # clicks, keyboard navigation and the table alternative.
                        page.evaluate("""() => { const el = document.querySelector("#lvl");
                            el.value = "4"; el.dispatchEvent(new Event("input", {bubbles:true})); }""")
                        if page.locator("circle.pt.insufficient_evidence").count() == 0:
                            failures.append("90% operating point did not demonstrate abstention")
                        # Verify a real downloaded handoff, persisted snapshots and free-text safety.
                        try:
                            page.locator('#lvl').evaluate("el => { el.value = '3'; el.dispatchEvent(new Event('input', {bubbles:true})); }")
                            page.locator('#queue button[data-site]').first.click()
                            site = page.locator('#queue button[aria-current="true"]').get_attribute('data-site')
                            page.locator('[data-review="recheck"]').click()
                            reason = '=HYPERLINK("example")\nReview <script>unsafe</script>, "quoted"'
                            page.locator('#review-reason').fill(reason)
                            page.locator('#save-decision').click()
                            page.reload()
                            if page.locator('#review-reason').input_value() != reason:
                                failures.append('saved reason did not survive reload as literal text')
                            page.locator('#lvl').evaluate("el => { el.value = '4'; el.dispatchEvent(new Event('input', {bubbles:true})); }")
                            page.locator('#abstain-queue button[data-site]').first.click()
                            page.locator('[data-review="defer"]').click()
                            page.locator('#review-reason').fill('Need repeated observations.')
                            page.locator('#save-decision').click()
                            page.locator('#review-reason').fill('Unsaved draft must not be exported.')
                            with page.expect_download() as info:
                                page.locator('#export-decisions').click()
                            download = info.value
                            export_path = OUT / f'handoff-{label}-{number}.csv'
                            download.save_as(export_path)
                            with export_path.open(encoding='utf-8-sig', newline='') as handle:
                                records = list(csv.DictReader(handle))
                            if len(records) != 2:
                                failures.append('export must include exactly two saved records across levels')
                            original = next(r for r in records if r['nominalLevel'] == '80')
                            deferred = next(r for r in records if r['nominalLevel'] == '90')
                            if original['site'] != site or original['reason'] != "'" + reason:
                                failures.append('CSV reason escaping or original record changed')
                            if original['state'] != 'outside_envelope' or deferred['state'] != 'insufficient_evidence':
                                failures.append('saved evidence was recomputed at the export operating point')
                            if not all(r['deliveryStatus'] == 'not sent — local recommendation only' and r['recommendation'] for r in records):
                                failures.append('CSV must label recommendations as not sent')
                            if deferred['reason'] != 'Need repeated observations.' or not all(r['synthetic'] == 'true' for r in records):
                                failures.append('export included unsaved draft or omitted synthetic labels')
                            page.locator('#reset-decisions').click()
                            page.reload()
                            if not page.locator('#export-decisions').is_disabled():
                                failures.append('reset decisions did not persist')
                        except Exception as exc:
                            failures.append(f'handoff interaction failed: {exc}')
                        report["runs"].append({"run": number, "failures": failures,
                                               "page_errors": errors, "network_requests": network})
        report["passed"] = len(report["runs"]) == 3 and all(
            not (run["failures"] or run["page_errors"] or run["network_requests"])
            for run in report["runs"])
    except Exception as exc:
        report["error"] = str(exc)
    (OUT / f"browser-{label}.json").write_text(json.dumps(report, indent=2)+"\n")
    return report["passed"]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--demo-only", action="store_true")
    args = parser.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    # Remove previous results so a failed run cannot inherit old green evidence.
    for old in OUT.iterdir():
        if old.is_file():
            old.unlink()
    os.chdir(ROOT)
    report = {
        "started_utc": datetime.now(timezone.utc).isoformat(),
        "scope": "offline-demo-only" if args.demo_only else "synthetic-demo",
        "commit": git("rev-parse", "HEAD"),
        "dirty_at_start": bool(git("status", "--porcelain")),
        "python": sys.version, "platform": platform.platform(),
        "ci_run_url": (f"https://github.com/{os.environ['GITHUB_REPOSITORY']}/actions/runs/"
                       f"{os.environ['GITHUB_RUN_ID']}" if os.getenv("GITHUB_RUN_ID") else None),
        "source_sha256": {name: digest(ROOT/name) for name in git("ls-files").splitlines()
                          if (ROOT/name).is_file()},
        "dependencies": {name: importlib.metadata.version(name) for name in
                         ("numpy", "pandas", "scikit-learn", "pytest", "playwright")},
        "steps": [], "passed": False,
    }
    generated = [ROOT / name for name in
                 ("web/data.js",)]
    originals = {path: path.read_bytes() if path.exists() else None for path in generated}
    started = time.monotonic()
    def step(name, command=None):
        print(f"Acceptance: {name}", flush=True)
        before = time.monotonic()
        if command:
            with (OUT / f"{name}.log").open("w") as log:
                try:
                    result = subprocess.run(command, stdout=log, stderr=subprocess.STDOUT,
                                            timeout=1200, cwd=ROOT)
                    passed = result.returncode == 0
                except subprocess.TimeoutExpired:
                    log.write("\nFAILED: 1200 second timeout\n")
                    passed = False
        else:
            passed = browser_check(name)
        report["steps"].append({"name": name, "passed": passed,
                                "seconds": round(time.monotonic()-before, 2)})
        print(f"  {'PASS' if passed else 'FAIL'}", flush=True)
        return passed
    try:
        step("shipped-demo")
        if not args.demo_only:
            step("pipeline-tests", [sys.executable, "-m", "pytest", "-q", "tests/",
                                    f"--junitxml={OUT / 'pytest.xml'}"])
            if step("build", [sys.executable, "-m", "src.sre.build"]):
                step("rebuilt-demo")
                report["rebuilt_payload_sha256"] = digest(ROOT / "web/data.js")
            else:
                report["steps"].append({"name": "rebuilt-demo", "passed": False,
                                        "reason": "blocked by failed build"})
        report["passed"] = all(s["passed"] for s in report["steps"])
    except Exception as exc:
        report["error"] = str(exc)
    finally:
        # Acceptance verifies a rebuild without changing the shipped assets.
        for path, original in originals.items():
            if original is None:
                path.unlink(missing_ok=True)
            else:
                path.write_bytes(original)
        report["seconds"] = round(time.monotonic()-started, 2)
        report["finished_utc"] = datetime.now(timezone.utc).isoformat()
        (OUT / "summary.json").write_text(json.dumps(report, indent=2)+"\n")
    print(f"Evidence: {OUT / 'summary.json'}", flush=True)
    return 0 if report["passed"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
