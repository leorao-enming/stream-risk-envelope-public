"""Baseline, transfer and coverage calculations for local validation.

The public demo uses invented observations, so its metrics illustrate behaviour
and do not establish performance on actual monitoring data.
"""

from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np
import pandas as pd
from sklearn.metrics import mean_absolute_error

from .model import DEFAULT_ALPHA, fit_conformal, make_estimator


@dataclass
class BaselineResult:
    model_mae: float
    mean_mae: float
    best_single_feature: str
    best_single_mae: float
    model_label: str = "model"
    n_features: int = 0

    @property
    def single_feature_comparison_is_vacuous(self) -> bool:
        """With one predictor the model *is* the best single feature."""
        return self.n_features <= 1

    @property
    def beats_mean(self) -> bool:
        return self.model_mae < self.mean_mae

    @property
    def beats_single(self) -> bool:
        return self.model_mae < self.best_single_mae

    def report(self) -> str:
        lines = [
            "Baseline comparison (leave-one-city-out MAE)",
            f"  {self.model_label:<38}: {self.model_mae:.4f}",
            f"  {'predict-the-mean':<38}: {self.mean_mae:.4f}",
        ]
        if self.single_feature_comparison_is_vacuous:
            # With one predictor the model *is* the best single predictor, so the
            # comparison would be with itself. Printing a failure there is noise,
            # and it is the first thing anyone running the build would see.
            lines.append(f"  {'best single feature':<38}: n/a - the model uses one")
            verdict = (
                "model beats the mean baseline"
                if self.beats_mean
                else "MODEL DOES NOT BEAT THE MEAN - report this, do not tune around it"
            )
        else:
            lines.append(
                f"  best single feature ({self.best_single_feature:<17}): "
                f"{self.best_single_mae:.4f}"
            )
            verdict = (
                "model beats both baselines"
                if self.beats_mean and self.beats_single
                else "MODEL DOES NOT BEAT BOTH BASELINES - report this, do not tune around it"
            )
        lines.append(f"  -> {verdict}")
        return "\n".join(lines)


@dataclass
class CityResult:
    city: str
    n: int
    mae: float


@dataclass
class TransferResult:
    per_city: list[CityResult] = field(default_factory=list)

    @property
    def overall_mae(self) -> float:
        total = sum(c.mae * c.n for c in self.per_city)
        return total / sum(c.n for c in self.per_city)

    def report(self) -> str:
        lines = ["Leave-one-city-out transfer (5 folds)"]
        for c in sorted(self.per_city, key=lambda x: x.city):
            lines.append(f"  held out {c.city:<11} n={c.n:<3} MAE={c.mae:.4f}")
        lines.append(f"  weighted overall                MAE={self.overall_mae:.4f}")
        return "\n".join(lines)


@dataclass
class CoverageResult:
    nominal: float
    empirical: float
    n: int
    mean_width: float

    def report(self) -> str:
        gap = self.empirical - self.nominal
        flag = "within tolerance" if abs(gap) <= 0.10 else "MISCALIBRATED"
        return (
            "Conformal envelope calibration (held-out)\n"
            f"  nominal coverage   : {self.nominal:.0%}\n"
            f"  empirical coverage : {self.empirical:.0%}  (n={self.n})\n"
            f"  mean envelope width: {self.mean_width:.4f}\n"
            f"  -> {flag}"
        )


def _loco_splits(meta: pd.DataFrame):
    for city in sorted(meta["city"].unique()):
        test = meta["city"] == city
        yield city, ~test.to_numpy(), test.to_numpy()


def baselines(
    x: pd.DataFrame,
    y: pd.Series,
    meta: pd.DataFrame,
    label: str | None = None,
) -> BaselineResult:
    model_pred = np.empty(len(y))
    mean_pred = np.empty(len(y))
    for _, train, test in _loco_splits(meta):
        est = make_estimator()
        est.fit(x[train], y[train])
        model_pred[test] = est.predict(x[test])
        mean_pred[test] = y[train].mean()

    model_mae = mean_absolute_error(y, model_pred)
    mean_mae = mean_absolute_error(y, mean_pred)

    best_name, best_mae = "", np.inf
    for column in x.columns:
        pred = np.empty(len(y))
        for _, train, test in _loco_splits(meta):
            est = make_estimator()
            est.fit(x.loc[train, [column]], y[train])
            pred[test] = est.predict(x.loc[test, [column]])
        mae = mean_absolute_error(y, pred)
        if mae < best_mae:
            best_name, best_mae = column, mae

    if label is None:
        label = (
            f"model ({x.columns[0]})" if len(x.columns) == 1
            else f"ridge over {len(x.columns)} features"
        )
    return BaselineResult(
        model_mae, mean_mae, best_name, best_mae, label, len(x.columns)
    )


def transfer(x: pd.DataFrame, y: pd.Series, meta: pd.DataFrame) -> TransferResult:
    """Per-city error of the estimator the tool actually deploys.

    This fits through `fit_conformal`, which holds part of each training fold back
    for calibration, so the estimator here has seen exactly what the estimator
    behind the published envelopes has seen. Fitting on the full fold instead
    would report a model that is not the one shipped - and would disagree with the
    per-city figure in the README, which is how the discrepancy was noticed.
    """
    result = TransferResult()
    for city, train, test in _loco_splits(meta):
        estimator, _ = fit_conformal(x[train], y[train])
        mae = mean_absolute_error(y[test], estimator.predict(x[test]))
        result.per_city.append(CityResult(city, int(test.sum()), float(mae)))
    return result


def coverage(
    x: pd.DataFrame,
    y: pd.Series,
    meta: pd.DataFrame,
    alpha: float = DEFAULT_ALPHA,
) -> CoverageResult:
    """Does the nominal envelope actually cover, on cities never seen in fitting?"""
    covered, widths, total = 0, [], 0
    for _, train, test in _loco_splits(meta):
        est, radius = fit_conformal(x[train], y[train], alpha=alpha)
        pred = est.predict(x[test])
        low, high = pred - radius, pred + radius
        observed = y[test].to_numpy()
        covered += int(np.sum((observed >= low) & (observed <= high)))
        widths.extend([2 * radius] * int(test.sum()))
        total += int(test.sum())
    return CoverageResult(
        nominal=1 - alpha,
        empirical=covered / total,
        n=total,
        mean_width=float(np.mean(widths)),
    )


@dataclass
class Improvement:
    """How much better than predicting the mean, with a bootstrap interval."""

    model_mae: float
    mean_mae: float
    mean_improvement: float
    ci_low: float
    ci_high: float
    n_resamples: int

    @property
    def ratio(self) -> float:
        return self.model_mae / self.mean_mae

    @property
    def excludes_zero(self) -> bool:
        return self.ci_low > 0

    def report(self) -> str:
        verdict = (
            "excludes zero"
            if self.excludes_zero
            else "INCLUDES ZERO - the improvement is not significant"
        )
        return "\n".join(
            [
                "Improvement over the mean baseline (leave-one-city-out)",
                f"  model / baseline MAE : {self.model_mae:.4f} / {self.mean_mae:.4f}"
                f"  (ratio {self.ratio:.3f})",
                f"  mean improvement     : {self.mean_improvement:+.4f}",
                f"  bootstrap 95% CI     : [{self.ci_low:+.3f}, {self.ci_high:+.3f}]"
                f"  ({self.n_resamples} resamples)",
                f"  -> {verdict}",
            ]
        )


def improvement(
    x: pd.DataFrame,
    y: pd.Series,
    meta: pd.DataFrame,
    n_resamples: int = 5000,
    seed: int = 0,
) -> Improvement:
    """Bootstrap the per-site error reduction against predicting the mean.

    Resampling is over sites, and the seed is fixed.
    """
    model_pred = np.empty(len(y))
    mean_pred = np.empty(len(y))
    for _, train, test in _loco_splits(meta):
        estimator, _ = fit_conformal(x[train], y[train])
        model_pred[test] = estimator.predict(x[test])
        mean_pred[test] = y[train].mean()

    observed = y.to_numpy()
    model_err = np.abs(observed - model_pred)
    mean_err = np.abs(observed - mean_pred)
    gains = mean_err - model_err

    rng = np.random.default_rng(seed)
    draws = rng.integers(0, len(gains), size=(n_resamples, len(gains)))
    boot = gains[draws].mean(axis=1)
    low, high = np.percentile(boot, [2.5, 97.5])

    return Improvement(
        model_mae=float(model_err.mean()),
        mean_mae=float(mean_err.mean()),
        mean_improvement=float(gains.mean()),
        ci_low=float(low),
        ci_high=float(high),
        n_resamples=n_resamples,
    )


def run_all(x: pd.DataFrame, y: pd.Series, meta: pd.DataFrame) -> str:
    return "\n\n".join(
        [
            baselines(x, y, meta).report(),
            transfer(x, y, meta).report(),
            improvement(x, y, meta).report(),
            coverage(x, y, meta).report(),
        ]
    )
