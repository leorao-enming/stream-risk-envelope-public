"""Ridge and split conformal logic for a human review queue.

The committed demonstration uses only independently generated synthetic observations.
A flag is a request for human review, not a medical or causal conclusion.
"""

from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np
import pandas as pd
from sklearn.linear_model import RidgeCV
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

PATHOGEN = "scaledPathogenRisk"
FECAL = "scaledFecalRisk"
ARG = "scaledArgRisk"
COMPOSITE = "healthRiskScore"

# Candidate component pair for the illustrative review mechanism.
# The public demo does not make claims about the antibiotic-resistance indicator.
CHECKABLE = ((FECAL, PATHOGEN), (PATHOGEN, FECAL))
UNCHECKABLE = (ARG,)

CONSISTENT = "consistent"
OUTSIDE = "outside_envelope"
ABSTAIN = "insufficient_evidence"
NOT_CHECKABLE = "not_checkable"

DEFAULT_ALPHA = 0.20  # 80% envelope; see the operating curve for the trade-off
ABSTAIN_WIDTH_FRACTION = 0.50
SEED = 20260916

LABELS = {
    PATHOGEN: "pathogen indicator",
    FECAL: "faecal indicator",
    ARG: "antibiotic-resistance indicator",
    COMPOSITE: "composite health-risk score",
}


def make_estimator() -> Pipeline:
    return Pipeline(
        [("scale", StandardScaler()), ("ridge", RidgeCV(alphas=np.logspace(-2, 4, 40)))]
    )


@dataclass
class Verdict:
    site: str
    city: str
    target: str
    predictor: str
    observed: float
    predicted: float
    low: float
    high: float
    state: str
    # The verdict carries only the values needed to explain the synthetic check.
    others: dict[str, float] = field(default_factory=dict)

    @property
    def width(self) -> float:
        return self.high - self.low

    @property
    def distance_outside(self) -> float:
        if self.observed < self.low:
            return self.low - self.observed
        if self.observed > self.high:
            return self.observed - self.high
        return 0.0

    def as_dict(self) -> dict:
        return {
            "site": self.site,
            "city": self.city,
            "target": self.target,
            "predictor": self.predictor,
            "observed": round(self.observed, 4),
            "predicted": round(self.predicted, 4),
            "low": round(max(0.0, self.low), 4),
            "high": round(min(1.0, self.high), 4),
            "width": round(self.width, 4),
            "state": self.state,
            "distanceOutside": round(self.distance_outside, 4),
            "others": {k: round(v, 4) for k, v in self.others.items()},
        }


def fit_conformal(
    x_fit: pd.DataFrame,
    y_fit: pd.Series,
    *,
    alpha: float = DEFAULT_ALPHA,
    calib_fraction: float = 0.35,
    seed: int = SEED,
) -> tuple[Pipeline, float]:
    """Fit on a training split; calibrate the envelope radius on a held-out split."""
    rng = np.random.default_rng(seed)
    order = rng.permutation(len(x_fit))
    n_calib = max(8, int(round(calib_fraction * len(x_fit))))
    calib_idx, train_idx = order[:n_calib], order[n_calib:]

    estimator = make_estimator()
    estimator.fit(x_fit.iloc[train_idx], y_fit.iloc[train_idx])

    residuals = np.abs(
        y_fit.iloc[calib_idx].to_numpy() - estimator.predict(x_fit.iloc[calib_idx])
    )
    level = min(1.0, np.ceil((n_calib + 1) * (1 - alpha)) / n_calib)
    return estimator, float(np.quantile(residuals, level, method="higher"))


def _state(observed: float, low: float, high: float, span: float) -> str:
    if (high - low) > ABSTAIN_WIDTH_FRACTION * span:
        return ABSTAIN
    return CONSISTENT if low <= observed <= high else OUTSIDE


def check(
    frame: pd.DataFrame,
    target: str,
    predictor: str,
    *,
    alpha: float = DEFAULT_ALPHA,
) -> list[Verdict]:
    """Envelope every site, holding out its own city when fitting.

    Each site is judged by a model that never saw its city, so a verdict cannot
    be an artefact of the model having memorised that city.
    """
    span = float(frame[target].max() - frame[target].min())
    verdicts: list[Verdict] = []
    for city in sorted(frame["city"].unique()):
        held = frame["city"] == city
        train, test = frame[~held], frame[held]
        estimator, radius = fit_conformal(
            train[[predictor]], train[target], alpha=alpha
        )
        predictions = estimator.predict(test[[predictor]])
        for i, row in enumerate(test.itertuples()):
            predicted = float(predictions[i])
            low, high = predicted - radius, predicted + radius
            observed = float(getattr(row, target))
            verdicts.append(
                Verdict(
                    site=row.researchSiteCode,
                    city=row.city,
                    target=target,
                    predictor=predictor,
                    observed=observed,
                    predicted=predicted,
                    low=low,
                    high=high,
                    state=_state(observed, low, high, span),
                    others={predictor: float(getattr(row, predictor))},
                )
            )
    return verdicts


def operating_curve(
    frame: pd.DataFrame,
    target: str,
    predictor: str,
    alphas: tuple[float, ...] = (0.50, 0.40, 0.30, 0.20, 0.10),
) -> list[dict]:
    """Coverage, envelope width and review workload at each confidence level.

    This is the honest way to present a screening tool: the reviewer sets the
    operating point and sees what it costs, instead of trusting a hard-coded
    threshold.
    """
    span = float(frame[target].max() - frame[target].min())
    rows = []
    for alpha in alphas:
        verdicts = check(frame, target, predictor, alpha=alpha)
        covered = sum(1 for v in verdicts if v.low <= v.observed <= v.high)
        flagged = sum(1 for v in verdicts if v.state == OUTSIDE)
        width = float(np.mean([v.width for v in verdicts]))
        rows.append(
            {
                "nominal": round(1 - alpha, 2),
                "empirical": round(covered / len(verdicts), 3),
                "meanWidth": round(width, 4),
                "widthFractionOfRange": round(width / span, 3),
                "flagged": flagged,
                "reviewed": len(verdicts),
            }
        )
    return rows
