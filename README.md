# Stream Risk Envelope

**Synthetic demonstration for the OneAquaHealth IEEE Global Hackathon 2026, Track 3.**

Stream Risk Envelope illustrates a human review queue for stream-monitoring indicators. A ridge model predicts an illustrative faecal indicator from an illustrative pathogen indicator. Split conformal calibration sets an interval, and observations outside it are queued for a person to inspect. The reviewer can accept variation, request a field or lab re-check, or escalate context. A flag is not a diagnosis or a finding of contamination.

> **Data boundary:** Every observation, site code, city name, model result, count and chart in `web/` is generated from a fixed synthetic formula and random seed. None is an actual OneAquaHealth measurement or a transformed copy of one. Demo performance does not establish performance on real monitoring data.

## Open the demo

Open `web/index.html` in a browser. It works offline and makes no network requests. The page loads `web/data.js`, a deterministic synthetic fixture. For a fresh regeneration:

```bash
uv sync --locked --extra dev
uv run --locked python -m src.sre.build
```

`src/sre/synthetic.py` defines the entire fixture. It uses invented `DEMO-*` site codes and fictional `Demo City A` through `Demo City E`, then runs the same ridge and split conformal code used by the demonstration. Its results are illustrative by design.

## Method

1. Hold out each fictional city in turn.
2. Within the other cities, split observations into model-fit and calibration groups.
3. Fit a standardized ridge model and set an envelope from calibration residuals.
4. Compare each held-out observation with its envelope at the selected nominal level.
5. Rank observations outside the envelope for human review. Show the interval and preserve the reviewer's decision only in local browser storage.

`src/sre/model.py` contains the estimator and verdict logic. `src/sre/validate.py` contains baseline, transfer and coverage checks. The live interface recalculates the queue, operating table and accessible site table from the synthetic fixture. It makes no causal or health claim. Coverage is marginal, and a newly sampled monitoring regime needs its own validation.

The API client and data-join code are included to make the *access method* inspectable. They can request available OneAquaHealth services for authorised local analysis. Their cached responses live under ignored `cache/` and are never used to generate the committed demo. Do not commit API responses, actual site-level values, model outputs computed from them, or screenshots of them. The MIT licence in this repository covers this code, not OneAquaHealth data or reuse rights.

## Data and permission

On 23 September 2026, a OneAquaHealth representative confirmed by email that actual Resilience Map data should not be extracted and republished as a dataset in a separate application or public repository. The public hackathon repository may contain code, methodology and derived logic alongside a clearly labelled synthetic demo payload. This repository follows that direction. Any use of actual OneAquaHealth data remains subject to the project's access provisions. Technical reachability of an endpoint does not grant redistribution rights.

The previous private prototype and its Git history contain a real-data-derived snapshot. It remains private. This public-ready repository starts from a **new Git history** so the old snapshot cannot be reached through earlier commits.

## Verification

```bash
uv run --locked pytest -q
uv run --locked python scripts/acceptance.py
```

The acceptance runner regenerates the fixture, checks it is unchanged, then rehearses the offline browser flow in three fresh contexts. It checks that no network request occurs. These checks verify the synthetic demo and its presentation path; they do not validate claims about real OneAquaHealth measurements.

## Scope and limitations

- All plotted results are synthetic illustrations. No real-world calibration, cross-city transfer, time saving, re-check yield, environmental outcome or human-health outcome is claimed.
- A flag means a value is inconsistent with the *synthetic* training cohort. It is a prompt for human review, not proof that the value is wrong.
- The demo has no authenticated reviewer identity or audit trail. Decisions stay in the local browser only.
- A future pilot would require data governance, permitted access, appropriate local calibration and a responsible review team.

Data-source acknowledgement: OneAquaHealth is a Horizon Europe project under grant agreement 101086521. This code and synthetic demonstration are independent of any endorsement by the project or funders.
