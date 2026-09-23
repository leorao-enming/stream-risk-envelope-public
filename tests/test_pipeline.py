"""Checks that the published fixture is invented, stable, and internally coherent."""

import json
import subprocess

from src.sre import model, synthetic


def test_fixture_is_deterministic_and_fictional():
    first = synthetic.observations()
    second = synthetic.observations()
    assert first.equals(second)
    assert len(first) == 60
    assert first["researchSiteCode"].str.startswith("DEMO-").all()
    assert set(first["city"]) == {f"Demo City {letter}" for letter in "ABCDE"}
    assert first[[model.FECAL, model.PATHOGEN]].ge(0).all().all()
    assert first[[model.FECAL, model.PATHOGEN]].le(1).all().all()


def test_payload_matches_synthetic_verdicts():
    payload = synthetic.build()
    assert payload["meta"]["synthetic"] is True
    assert "no OneAquaHealth measurements" in payload["meta"]["source"]
    assert set(payload["levels"]) == {"50", "60", "70", "80", "90"}
    widths = []
    for level, rows in payload["levels"].items():
        curve = next(r for r in payload["operatingCurve"] if round(r["nominal"] * 100) == int(level))
        assert len(rows) == 60
        assert all(row["site"].startswith("DEMO-") for row in rows)
        assert sum(row["state"] == model.OUTSIDE for row in rows) == curve["flagged"]
        assert all(0 <= row["observed"] <= 1 for row in rows)
        widths.append(curve["meanWidth"])
    assert widths == sorted(widths)
    assert any(row["state"] == model.OUTSIDE for row in payload["levels"]["80"])
    assert any(row["state"] == model.ABSTAIN for row in payload["levels"]["90"])


def test_shipped_fixture_rebuilds_byte_for_byte(tmp_path):
    output = tmp_path / "data.js"
    synthetic.write(output)
    shipped = synthetic.OUTPUT.read_bytes()
    assert output.read_bytes() == shipped
    text = shipped.decode()
    assert text.startswith("// SYNTHETIC DEMO ONLY.")
    payload = json.loads(text.split("window.__DATA = ", 1)[1].removesuffix(";\n"))
    assert payload["meta"]["synthetic"] is True


def test_public_tree_excludes_private_data_artifacts():
    root = synthetic.OUTPUT.parents[1]
    tracked = set(subprocess.check_output(
        ["git", "ls-files"], cwd=root, text=True
    ).splitlines())
    assert not any(path.startswith(("cache/", "private/", "artifacts/")) for path in tracked)
    assert not tracked.intersection({
        "web/results.json", "docs/calibration.svg", "docs/per-city.svg",
    })
    assert {path for path in tracked if path.startswith("web/")} == {
        "web/index.html", "web/data.js",
    }
