# Devpost submission draft — synthetic demonstration

## Project title
Stream Risk Envelope

## One-line description
An illustrative review queue that shows how calibrated intervals can prioritise stream-monitoring records while leaving the final decision to a person.

## What it does
The prototype compares two **synthetic** indicator values. A ridge model and split conformal calibration form an envelope. A record outside the envelope enters a ranked queue, where a reviewer can inspect the values and record a disposition. The confidence control shows the tradeoff between interval width and review workload.

## Data and evidence boundary
All sites, cities, values, charts and performance results in the public demo are fictional and independently generated. They are not OneAquaHealth measurements or evidence that this method performs well on actual project data. The included API client shows a local access pattern but no source data are redistributed. A OneAquaHealth representative asked that public repositories use a clearly labelled synthetic payload instead of extracted actual data.

## Technical approach
The Python code implements standardized ridge regression, leave-one-city-out evaluation and split conformal calibration. The browser presents an offline synthetic fixture, an accessible table and local-only human review decisions. The release checks fixture regeneration, the model invariants and the offline browser interaction.

## Limitations
A flag is not a finding of error, contamination or health risk. Conformal coverage is marginal under its assumptions; site-specific deployment requires local validation. This demo has no authenticated reviewer identity, audit trail or measured impact.

## Links to add
- Public repository: _add after clean publication_
- Demo video: _add after recording_
