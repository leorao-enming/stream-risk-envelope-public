# Final demo video: script and recording actions

Target **3:50–4:20**. The hackathon requires one **3–5 minute** video. Record only the synthetic public demo in web/index.html; never show the private repository, actual site-level values, the real-data plot, API responses, or the organiser's email. The private evaluation figures below are aggregate retrospective results, clearly separated from the invented figures on screen.

## Prepare the screen

1. Open the [live synthetic demo](https://leorao-enming.github.io/stream-risk-envelope-public/web/) or the public repository's web/index.html. Keep the full-width two-column layout visible. Increase browser zoom only as far as the right-hand site panel remains beside the plot; check readability in a 1080p export.
2. Close notifications, personal tabs and browser chrome that might expose private information. Turn off network access if convenient; the demo does not need it.
3. Click **Reset demo decisions**, reload, and verify the synthetic banner, default **80%**, **6 / 60** queued and **0 of 6** human dispositions.
4. Record the screen and narration in segments if necessary. Keep each change on screen for two seconds. Edit the segments into **one** video; the four exploratory recordings are source material, not the submission video.

## Shot list and exact English narration

The timestamps are targets, not cues to speak faster. Pause briefly after each UI change. If the final cut exceeds five minutes, shorten the first and last segments before cutting the interaction.

### 0:00–0:32 — Open at the top; keep the synthetic banner in view

> Stream Risk Envelope is a Track 3 review aid for stream-monitoring coordinators. We developed and retrospectively evaluated the method using OneAquaHealth Resilience Map data in a private repository. Following written guidance from a project representative, every site and result shown in this public interface is independently generated. No actual OneAquaHealth measurements appear in this demo.

### 0:32–1:02 — Point to the four-step workflow, then scroll to the plot

> Review time is limited, so the question is which record deserves another look. Our initial landscape-based model failed to beat a simple mean baseline on held-out cities. We kept that negative result and changed the task: check whether two indicators within a stream-monitoring record are consistent with the co-variation observed across a cohort. This is a consistency check, not a water-safety judgment.

### 1:02–1:43 — Show the default plot, envelope, six-item queue and selected-site panel

> Here is the synthetic example. A ridge model predicts one illustrative indicator from another. A separate calibration split sets this conformal envelope. At the default nominal 80-percent operating point, six of sixty fictional records enter the review queue. The orange points are outside the envelope. A reviewer can inspect each observed value, its interval and its distance outside. None of these plotted values is an actual measurement.

### 1:43–2:26 — Move the slider 80% → 50% → 90% → 80%; pause at 90%

> The reviewer chooses the operating point. A narrower envelope sends more records for review. A wider one can reduce the queue, but may become too broad to judge some records. The chart, interval width and workload change together. These on-screen counts are synthetic. Separately, in our private retrospective evaluation, the 80-percent setting covered 82 percent of 96 actual records and queued 17, with each of five cities held out in turn. Those summary results do not show that any flagged record was erroneous.

### 2:26–3:10 — Open DEMO-D03; show its interval; click Request field or lab re-check

> I'll open this fictional record. Its illustrative faecal value is 0.633, while its envelope ends at 0.553, so it sits 0.081 outside. I choose “Request field or lab re-check.” The disposition appears in the queue and stays in this browser. It does not change the measurement, retrain the model or declare contamination. The model proposes a priority; a person decides what happens next.

### 3:10–4:00 — Open Inspect synthetic results, method and limitations; show the operating table and limits

> The method fits on other cities and uses a separate calibration split to set each envelope. The private real-data analysis was a single-season retrospective cross-section. It does not establish that flagged records are wrong, that review time is saved, or that health outcomes improve. This proof of concept also lacks reviewer authentication and an audit trail. A real pilot would need permissioned data access, repeated local observations, city-specific calibration and an accountable review team. Stream Risk Envelope makes the uncertainty and workload visible before anyone acts.

## Edit and export

- Keep one continuous story with no repeated scrolling. Show a cursor only when it identifies a value or control.
- Add accurate English captions, especially for **private real-data evaluation** versus **synthetic public demonstration**. Never caption the on-screen **6 / 60** as a real-data result.
- Export one video between 3:00 and 5:00. Watch the exported file from beginning to end at normal speed and at a smaller player size. Confirm that narration, labels, synthetic disclaimer and decision result are readable.
- Do not call a queued point polluted, unsafe, wrong, a measured OneAquaHealth site, or a proven environmental or human-health risk.

## Submission actions

1. Use docs/submission-draft.md as the Devpost copy. Add the final public video URL, the public repository URL, and the live demo URL.
2. Confirm the live demo, repository and video all open without signing in. Confirm the repository still contains only the synthetic DEMO-* fixture; keep the private real-data repository private.
3. Submit the project on Devpost rather than leaving a draft. Save the confirmation/receipt and final public links.
4. Complete this before travel. The official deadline is **30 September 2026, 21:00 PDT** (**1 October 2026, 12:00 Shanghai**), but the planned personal deadline is **25 September 2026**.
