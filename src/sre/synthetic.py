"""Deterministic, wholly invented demo observations.

The fixture is generated from a fixed formula and seed. It never reads the
OneAquaHealth API, a local cache, or the private benchmark. All demo metrics
are recomputed from these invented observations with the same model code.
"""

from __future__ import annotations

import json
from pathlib import Path

import numpy as np
import pandas as pd

from . import model

SEED = 260923
VERSION = "synthetic-v1"
ALPHAS = (0.50, 0.40, 0.30, 0.20, 0.10)
OUTPUT = Path(__file__).resolve().parents[2] / "web" / "data.js"


def observations() -> pd.DataFrame:
    """Make 60 invented sites in five fictional demo cities."""
    rng = np.random.default_rng(SEED)
    rows = []
    for city_index, letter in enumerate("ABCDE"):
        for site_index in range(1, 13):
            pathogen = float(rng.uniform(0.08, 0.88))
            shift = (city_index - 2) * 0.012
            noise = float(rng.normal(0, 0.09))
            if site_index in (3, 10):
                noise += 0.17 if site_index == 3 else -0.17
            faecal = float(np.clip(0.17 + 0.68 * pathogen + shift + noise, 0.01, 0.99))
            rows.append({
                "researchSiteCode": f"DEMO-{letter}{site_index:02d}",
                "city": f"Demo City {letter}",
                model.PATHOGEN: pathogen,
                model.FECAL: faecal,
            })
    return pd.DataFrame(rows)


def build() -> dict:
    frame = observations()
    levels = {}
    for alpha in ALPHAS:
        key = str(round((1 - alpha) * 100))
        levels[key] = [v.as_dict() for v in model.check(
            frame, model.FECAL, model.PATHOGEN, alpha=alpha
        )]
    return {
        "meta": {
            "project": "Stream Risk Envelope",
            "synthetic": True,
            "fixtureVersion": VERSION,
            "source": "Deterministic synthetic fixture; no OneAquaHealth measurements",
            "sites": len(frame),
            "cities": sorted(frame["city"].unique().tolist()),
            "target": "illustrative faecal indicator",
            "predictor": "illustrative pathogen indicator",
            "defaultLevel": "80",
        },
        "limitations": [
            "Every observation and result on this page is synthetic. Values, city names, flags and coverage rates are illustrations, not OneAquaHealth findings.",
            "A flag prioritises a human re-check; it does not establish measurement error, contamination or human health risk.",
            "The demonstration uses one invented observation per site. It does not support a forecast or causal conclusion.",
            "Conformal coverage is marginal across the generated cohort; it does not guarantee coverage within each city.",
            "A real deployment would need permissioned data access, local validation, governance and an accountable review process.",
        ],
        "operatingCurve": model.operating_curve(
            frame, model.FECAL, model.PATHOGEN, ALPHAS
        ),
        "levels": levels,
    }


def write(path: Path = OUTPUT) -> Path:
    payload = build()
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        "// SYNTHETIC DEMO ONLY. No OneAquaHealth measurements.\n"
        + "window.__DATA = " + json.dumps(payload, indent=1) + ";\n",
        encoding="utf-8",
    )
    return path


if __name__ == "__main__":
    print(write())
