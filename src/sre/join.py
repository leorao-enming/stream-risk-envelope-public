"""Local analysis join for data obtained through available project services.

This code is included for inspection; the public demo does not invoke it.
Responses and joined data must remain outside the public repository.
"""

from __future__ import annotations

from dataclasses import dataclass, field

import pandas as pd

from . import api

# Landscape descriptors are reported at these nested buffer radii, in metres.
BUFFER_RADII = (50, 100, 250, 500, 750, 1000, 1500, 2000)
BUFFER_FAMILIES = (
    "patchDensityVeg",
    "vegCoverFrac",
    "patchDensity",
    "humanDensityProxy",
    "urbanPct",
    "imperviousPct",
)
DISTANCE_FEATURES = (
    "distChampCulture",
    "distanceToHospitals",
    "distanceToLivingStreetRoad",
    "distanceToMotorwayRoad",
    "distanceToSewageStations",
)
TARGET = "healthRiskScore"
RISK_COMPONENTS = ("scaledPathogenRisk", "scaledFecalRisk", "scaledArgRisk")

CITY_BY_PREFIX = {
    "BN": "Benevento",
    "C": "Coimbra",
    "G": "Ghent",
    "O": "Oslo",
    "T": "Toulouse",
}


class CoverageError(RuntimeError):
    """The join lost rows that were expected to match."""


@dataclass
class Coverage:
    """What the join matched, and what it did not."""

    matched: int
    health_only: list[str] = field(default_factory=list)
    urban_only: list[str] = field(default_factory=list)
    by_city: dict[str, int] = field(default_factory=dict)

    def report(self) -> str:
        lines = [
            "Join coverage: health-risks -> urban-parameters",
            f"  matched sites            : {self.matched}",
            f"  health-risk sites unmatched: {len(self.health_only)}"
            + (f" {sorted(self.health_only)}" if self.health_only else " (none)"),
            f"  urban-only sites (no risk measurement): {len(self.urban_only)}"
            " - expected, not an error",
            "  matched sites per city   : "
            + ", ".join(f"{c}={n}" for c, n in sorted(self.by_city.items())),
        ]
        return "\n".join(lines)


def city_of(site_code: str) -> str:
    """Map a research site code such as 'BN12' to its city."""
    prefix = site_code.rstrip("0123456789")
    return CITY_BY_PREFIX.get(prefix, "Unknown")


def buffer_features() -> list[str]:
    return [f"{fam}{r}m" for fam in BUFFER_FAMILIES for r in BUFFER_RADII]


def landscape_features() -> list[str]:
    return list(DISTANCE_FEATURES) + buffer_features()


def load(refresh: bool = False) -> tuple[pd.DataFrame, Coverage]:
    """Return one row per measured site, with landscape context attached."""
    risks = pd.DataFrame(api.health_risks(refresh))
    urban = pd.DataFrame(api.urban_parameters(refresh))

    risk_codes = set(risks["researchSiteCode"])
    urban_codes = set(urban["researchSiteCode"])

    health_only = sorted(risk_codes - urban_codes)
    urban_only = sorted(urban_codes - risk_codes)

    if health_only:
        raise CoverageError(
            "Sites with a health-risk measurement have no landscape context: "
            f"{health_only}. Upstream data changed; re-check the join before "
            "modelling, and do not silently continue on a reduced sample."
        )

    urban = urban.drop(columns=[c for c in ("id", "samplingDate") if c in urban])
    frame = risks.merge(urban, on="researchSiteCode", how="inner", validate="1:1")

    # Every measured site must exist in the site registry, but nothing from the
    # registry is carried across. The interface has no map, so coordinates and
    # site names are never read, and data that is not used is not collected.
    registry = {row["code"] for row in api.sites(refresh)}
    unregistered = sorted(set(frame["researchSiteCode"]) - registry)
    if unregistered:
        raise CoverageError(
            "Measured sites missing from the site registry: "
            f"{unregistered}. Upstream data changed; re-check before modelling."
        )

    frame["city"] = frame["researchSiteCode"].map(city_of)
    frame["samplingDate"] = pd.to_datetime(frame["samplingDate"])

    coverage = Coverage(
        matched=len(frame),
        health_only=health_only,
        urban_only=urban_only,
        by_city=frame["city"].value_counts().to_dict(),
    )
    return frame, coverage


def check_features(frame: pd.DataFrame) -> list[str]:
    """Return the landscape feature list, asserting all are present and complete."""
    expected = landscape_features()
    missing = [c for c in expected if c not in frame.columns]
    if missing:
        raise CoverageError(f"Expected landscape features absent upstream: {missing}")
    incomplete = [c for c in expected if frame[c].isna().any()]
    if incomplete:
        raise CoverageError(f"Landscape features contain nulls: {incomplete}")
    return expected
