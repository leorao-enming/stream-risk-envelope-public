/* Demo rehearsal: drives the whole presentation path and reports what broke.
 *
 * The demo is the part of this project most likely to fail in front of someone,
 * and it is the part unit tests cannot reach. Run it in the browser console with
 * the page open, or paste it in after a reload:
 *
 *     JSON.stringify(window.__rehearse())
 *
 * An empty array means the run passed. Anything else is a failure to fix before
 * presenting. Three consecutive clean runs from a cold reload is the bar.
 */
window.__rehearse = function () {
  const fails = [];
  const ok = (cond, msg) => { if (!cond) fails.push(msg); };
  const g = id => document.getElementById(id);
  const all = sel => [...document.querySelectorAll(sel)];
  const setLevel = v => {
    g("lvl").value = v;
    g("lvl").dispatchEvent(new Event("input", { bubbles: true }));
  };

  // 1. the page came up with a clearly labelled synthetic fixture
  ok(!!window.__DATA, "data.js did not load");
  ok(window.__DATA?.meta.synthetic === true, "fixture is not marked synthetic");
  ok(document.querySelector(".synthetic-banner")?.textContent.includes("No OneAquaHealth measurements"), "synthetic banner missing");
  const n = window.__DATA?.meta.sites || 0;
  const defaultQueue = window.__DATA?.operatingCurve.find(r => Math.round(r.nominal * 100) === 80)?.flagged;
  ok(all("circle.pt").length === n, "expected " + n + " points, got " + all("circle.pt").length);
  ok(!!document.querySelector("path.band"), "envelope band missing");
  ok(g("foot").textContent.includes(`${n} invented sites`), "footer summary missing");
  ok(g("lims").children.length > 0, "limitations not rendered");
  ok(document.querySelector(".track").textContent.includes("Track 3"), "track alignment missing");
  ok(all(".workflow .step").length === 4, "human review workflow should have four steps");
  ok(document.querySelector(".scope").textContent.includes("invented values"),
     "evidence boundary missing");
  ok(document.querySelector(".deployment").children.length === 3, "deployment path missing");
  g("reset-decisions").click();

  // 2. at every operating point the readout, the table and the queue must agree
  const table = all("#oc tbody tr").map(tr => [...tr.children].map(td => td.textContent.trim()));
  ["0", "1", "2", "3", "4"].forEach(v => {
    setLevel(v);
    const lvl = g("r-nom").textContent.replace("%", "");
    const row = table.find(r => r[0].replace("%", "") === lvl);
    ok(!!row, "no operating-curve row for level " + lvl);
    if (row) {
      ok(g("r-emp").textContent === row[1],
         `level ${lvl}: readout coverage ${g("r-emp").textContent} != table ${row[1]}`);
      ok(g("r-flag").textContent === row[4],
         `level ${lvl}: readout queued ${g("r-flag").textContent} != table ${row[4]}`);
    }
    const listed = all("#queue button[data-site]").length;
    ok(String(listed) === g("r-flag").textContent,
       `level ${lvl}: queue lists ${listed}, readout says ${g("r-flag").textContent}`);
    ok(all("circle.pt").length === n, `level ${lvl}: point count changed`);
    const flagged = all("circle.pt.outside_envelope").length;
    ok(String(flagged) === g("r-flag").textContent,
       `level ${lvl}: plot shows ${flagged} flagged, readout says ${g("r-flag").textContent}`);
    const devs = all("#queue .dev").map(e => parseFloat(e.textContent));
    ok(devs.every((d, i) => i === 0 || devs[i - 1] >= d), `level ${lvl}: queue out of order`);
  });

  // 3. the click path a presenter actually walks
  setLevel("3");
  const top = document.querySelector("#queue button[data-site]");
  ok(!!top, "queue is empty at the default operating point");
  if (top) {
    const site = top.dataset.site;
    top.click();
    ok(g("detail").textContent.includes(site), "detail panel did not show " + site);
    ok(g("detail").textContent.includes("re-check"), "detail panel missing the verdict");
    ok(!!document.querySelector(`circle.pt.sel[data-site="${CSS.escape(site)}"]`),
       "selected site is not highlighted on the plot");
    const current = document.querySelector('#queue button[aria-current="true"]');
    ok(current && current.dataset.site === site, "queue selection not synced to the plot");
    const review = document.querySelector('#detail button[data-review="recheck"]');
    ok(!!review, "human disposition actions missing");
    if (review) {
      review.click();
      ok(g("review-progress").textContent.startsWith(`1 of ${defaultQueue}`),
         "review progress did not update after a disposition");
      const reviewedItem = document.querySelector(`#queue button[data-site="${CSS.escape(site)}"] .decision`);
      ok(reviewedItem && reviewedItem.textContent.includes("re-check requested"),
         "queue did not show the human disposition");
      let storageWorks = true, stored = {};
      try {
        localStorage.setItem("sre:rehearsal-probe", "1");
        localStorage.removeItem("sre:rehearsal-probe");
        stored = JSON.parse(localStorage.getItem("sre:synthetic-review-decisions:v1") || "{}");
      } catch (_) { storageWorks = false; }
      if (storageWorks) ok(stored[site] === "recheck", "human disposition did not persist locally");
    }
  }

  // 4. the keyboard path: one tab stop, arrows move, f jumps to the next flagged site
  const stops = all("circle.pt").filter(c => c.getAttribute("tabindex") === "0");
  ok(stops.length === 1, "plot should expose exactly one tab stop, found " + stops.length);
  if (stops.length === 1) {
    const before = stops[0].dataset.site;
    stops[0].focus();
    stops[0].dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));
    const moved = document.querySelector('circle.pt[tabindex="0"]');
    ok(moved && moved.dataset.site !== before, "ArrowRight did not move the selection");
    if (moved) {
      moved.focus();
      moved.dispatchEvent(new KeyboardEvent("keydown", { key: "f", bubbles: true }));
      const jumped = document.querySelector('circle.pt[tabindex="0"]');
      ok(jumped && jumped.classList.contains("outside_envelope"),
         "f did not land on a queued site");
    }
  }

  // 5. accessibility affordances that are cheap to regress and expensive to lose
  ok(!!document.querySelector("a.skip"), "skip link missing");
  ok(g("readout").getAttribute("aria-live") === "polite", "readout is not announced");
  ok(all("circle.pt").every(c => c.getAttribute("aria-label")), "a point has no aria-label");
  ok(all("#queue button[data-site]").every(b => b.getAttribute("aria-label")),
     "a queue button has no aria-label");
  ok(g("plot-desc").textContent.includes("sites at"), "plot text alternative is empty");
  // The SVG points carry ARIA, but assistive technology support for roles on SVG
  // shapes is uneven, so the table is the path that has to keep working.
  ok(all("#alltable tbody tr").length === n,
     "table alternative should list all " + n + " sites, found " + all("#alltable tbody tr").length);
  ok(!!document.querySelector("details.alt > summary"), "table alternative is not disclosable");
  ok(g("detail").getAttribute("aria-live") === "polite", "detail panel is not announced");
  ok(g("hero-queue").textContent === `${defaultQueue} / ${n}`, "hero workload evidence is out of sync");
  ok(g("hero-coverage").textContent === `${Math.round(window.__DATA.operatingCurve.find(r => Math.round(r.nominal * 100) === 80).empirical * 100)}%`, "hero coverage evidence is out of sync");

  // leave the page on the default operating point, ready to present
  g("reset-decisions").click();
  setLevel("3");
  return fails;
};
