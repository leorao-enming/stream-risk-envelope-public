"""Assemble the modelling matrix: landscape context plus antecedent weather.

Antecedent rainfall is included because it is a recognised driver of faecal and
pathogen loading in streams - washoff from the surrounding catchment. It gives
the model a mechanistically motivated signal that the static landscape
descriptors cannot carry on their own.
"""

from __future__ import annotations

from datetime import timedelta

import pandas as pd

from . import api, join

ANTECEDENT_DAYS = 14
WET_DAY_MM = 1.0

WEATHER_FEATURES = (
    "precipTotal14d",
    "precipMax1d14d",
    "wetDays14d",
    "t2mMean14d",
    "t2mMax14d",
    "rh2mMean14d",
)


def _summarise(rows: list[dict]) -> dict[str, float]:
    frame = pd.DataFrame(rows)
    return {
        "precipTotal14d": float(frame["precipTotalMm"].sum()),
        "precipMax1d14d": float(frame["precipTotalMm"].max()),
        "wetDays14d": float((frame["precipTotalMm"] > WET_DAY_MM).sum()),
        "t2mMean14d": float(frame["t2mMeanC"].mean()),
        "t2mMax14d": float(frame["t2mMaxC"].max()),
        "rh2mMean14d": float(frame["rh2mMeanPct"].mean()),
    }


def antecedent_weather(
    frame: pd.DataFrame, refresh: bool = False, verbose: bool = False
) -> pd.DataFrame:
    """One row per site: weather summary over the days preceding its sampling."""
    records = []
    missing = []
    for row in frame.itertuples():
        end = row.samplingDate.date()
        start = end - timedelta(days=ANTECEDENT_DAYS)
        rows = api.weather(
            row.researchSiteCode, start.isoformat(), end.isoformat(), refresh=refresh
        )
        if not rows:
            missing.append(row.researchSiteCode)
            continue
        records.append({"researchSiteCode": row.researchSiteCode, **_summarise(rows)})
        if verbose and len(records) % 20 == 0:
            print(f"  ... {len(records)} sites")

    if missing:
        print(f"  weather unavailable for {len(missing)} sites: {sorted(missing)[:8]}")
    return pd.DataFrame(records)


def build(refresh: bool = False, verbose: bool = False) -> tuple[pd.DataFrame, list[str], join.Coverage]:
    """Return (frame, feature_names, coverage) ready for modelling."""
    frame, coverage = join.load(refresh)
    landscape = join.check_features(frame)

    weather = antecedent_weather(frame, refresh=refresh, verbose=verbose)
    frame = frame.merge(weather, on="researchSiteCode", how="left", validate="1:1")

    weather_cols = [c for c in WEATHER_FEATURES if c in frame.columns]
    usable_weather = [c for c in weather_cols if not frame[c].isna().any()]
    dropped = sorted(set(weather_cols) - set(usable_weather))
    if dropped:
        print(f"  dropping incomplete weather features: {dropped}")

    return frame, landscape + usable_weather, coverage
