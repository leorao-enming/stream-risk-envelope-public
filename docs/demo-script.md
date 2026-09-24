# Final demo video: narration and exact recording actions

Target **4:10–4:40**, with a hard final length of **3–5 minutes**. Record the [live synthetic demo](https://leorao-enming.github.io/stream-risk-envelope-public/web/) or local web/index.html. Show only synthetic interface records and the synthetic CSV. Private evaluation numbers below are spoken aggregate retrospective results; they are not the numbers plotted on screen.

## Prepare

1. Reset demo decisions and reload. Confirm **80%**, **6 / 60**, and **0 of 6** saved dispositions. The new form needs an action, a reason, and **Save decision**; choosing an action alone does not save.
2. Keep the plot and selected-site panel legible. Close personal tabs and notifications. Rehearse once before recording.
3. Have these two reasons ready to paste:
   - At 90%: `Need repeated observations before assessing this record.`
   - At 80%: `Check the lab entry and suggest a duplicate sample.`
4. If showing the downloaded CSV, open only that synthetic file and hide other files. It is also sufficient to show the successful download and explain its contents. Do not display the private repository, source records, actual-data plots, API responses or correspondence.

## 0:00–0:35 — Start with the user problem; show the synthetic banner

> A stream-monitoring coordinator has limited time to re-check records. Stream Risk Envelope helps decide what deserves a second look, explains when the model cannot judge, and records the human next step. We developed and retrospectively evaluated the method using actual OneAquaHealth data in a private repository. Following project guidance, every record and chart in this public demonstration is independently generated synthetic data.

## 0:35–1:10 — Show the default 80% plot and six-record queue

> This is a Track 3 assessment aid. A ridge model predicts one indicator from another, and separate calibration records set its conformal interval. At this synthetic 80-percent setting, six of sixty records sit outside their envelopes. The reviewer can inspect each observation and interval. Our initial landscape model failed to beat a mean baseline, which led us to this narrower consistency-checking task.

## 1:10–2:00 — Move 80% → 50% → 90%; show the summary and Needs further assessment queue

> Changing the operating point changes the workload. At 50 percent, twenty-eight records enter the review queue. At 90 percent, no records are outside the envelope, but forty-eight cannot be assessed because their intervals are too wide. An empty exception queue therefore does not clear the dataset. These records appear separately under “Needs further assessment,” where a person can request information, suggest a re-check, or defer with a reason.

## 2:00–2:50 — Save one follow-up at 90%, then one re-check at 80%

At 90%, select the first **Needs further assessment** record → **Defer pending evidence** → paste reason 1 → **Save decision**. Return to 80%, select **DEMO-D03** → **Suggest field or lab re-check** → paste reason 2 → **Save decision**. Show **1 of 6**.

> I will defer this unassessable record until repeated observations are available. I choose an action, explain why, and save. Now I return to 80 percent and open DEMO-D03. Its illustrative value is 0.633, above the interval's upper end of 0.553. I record a lab-entry check and suggest a duplicate sample. The saved decision includes the operating point and evidence visible when I made it.

## 2:50–3:35 — Click Export saved decisions (CSV); show the handoff

> These two decisions can be exported as a review handoff. Each row includes the fictional site, saved operating point, interval, decision, reason and timestamp, with an explicit synthetic label. Changing the slider does not rewrite the saved evidence. Selecting a follow-up does not contact a field or laboratory team: the coordinator must arrange it. This prototype stores editable decisions locally; it does not provide authenticated reviewer identity or an audit history.

## 3:35–4:25 — Expand Inspect synthetic results, method and limitations; close on pilot needs

> Separately, our private retrospective evaluation held out each of five cities in turn. At the nominal 80-percent setting, intervals covered 82 percent of 96 actual records and queued 17. Coverage is not error-detection accuracy. Standard conformal guarantees require comparable calibration and test data; city differences can break that assumption. A pilot must test whether this queue improves re-check yield and reviewer effort. Today, the prototype demonstrates transparent triage, explicit uncertainty and a handoff a person can use.

## Edit, caption and submit

- Keep all six segments in one final video. Target 4:10–4:40; trim pauses if approaching five minutes.
- Use the actual recorded words for captions. Check 80% versus 82%, synthetic 6/60 versus private 17/96, and the 48 records that cannot be assessed at 90%.
- Use docs/submission-draft.md for Devpost. Add the final public video URL, repository and live demo links. Check all three without signing in.
- Submit formally and save the receipt; a draft is not a submission. Personal target: **25 September 2026**. Official deadline: **30 September 2026, 21:00 PDT / 1 October 2026, 12:00 Shanghai**.
- Optional before recording: ask one person unfamiliar with the demo to identify a queued record, explain what “not assessable” means, save a reason and export. Record actual difficulties; this is a small usability check, not a field-validation study.
