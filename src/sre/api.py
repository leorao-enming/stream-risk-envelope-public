"""Client for local access to available OneAquaHealth Resilience Map services.

The committed demo never calls this client. Responses are cached only in
git-ignored local storage; technical access does not grant reuse or redistribution.
"""

from __future__ import annotations

import json
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import requests

BASE_URL = "https://api.enora-oah.eu/api"
CACHE_DIR = Path(__file__).resolve().parents[2] / "cache"
TIMEOUT = 30

# Field names asserted on load. Upstream schema drift must fail loudly rather
# than silently producing wrong numbers.
HEALTH_RISK_FIELDS = {
    "researchSiteCode",
    "samplingDate",
    "scaledPathogenRisk",
    "scaledFecalRisk",
    "scaledArgRisk",
    "healthRiskScore",
}
# Only the fields the pipeline actually reads are asserted. The registry also
# returns names and coordinates; nothing here consumes them.
SITE_FIELDS = {"code"}
WEATHER_FIELDS = {
    "siteCode",
    "date",
    "t2mMeanC",
    "t2mMinC",
    "t2mMaxC",
    "rh2mMeanPct",
    "precipTotalMm",
}


class SchemaError(RuntimeError):
    """Upstream returned a payload that does not match the expected schema."""


def _cache_path(name: str) -> Path:
    return CACHE_DIR / f"{name}.json"


def _get(
    endpoint: str,
    *,
    cache_key: str,
    params: dict[str, str] | None = None,
    refresh: bool = False,
) -> Any:
    """GET an endpoint, serving from the disk cache when available."""
    path = _cache_path(cache_key)
    if path.exists() and not refresh:
        return json.loads(path.read_text(encoding="utf-8"))

    response = requests.get(f"{BASE_URL}{endpoint}", params=params, timeout=TIMEOUT)
    response.raise_for_status()
    payload = response.json()

    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload), encoding="utf-8")
    # Record when each cached response was retrieved, for provenance.
    _touch_manifest(cache_key, endpoint, params)
    return payload


def _touch_manifest(
    cache_key: str, endpoint: str, params: dict[str, str] | None
) -> None:
    manifest_path = CACHE_DIR / "_manifest.json"
    manifest: dict[str, Any] = {}
    if manifest_path.exists():
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    manifest[cache_key] = {
        "endpoint": endpoint,
        "params": params or {},
        "retrieved_utc": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "source": "OneAquaHealth Resilience Map API",
    }
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")


def _require_fields(rows: list[dict], required: set[str], label: str) -> None:
    if not rows:
        raise SchemaError(f"{label}: upstream returned zero rows")
    missing = required - set(rows[0])
    if missing:
        raise SchemaError(f"{label}: missing expected fields {sorted(missing)}")


def zoned(day: str, end_of_day: bool = False) -> str:
    """Format a YYYY-MM-DD date as the ISO-8601 instant the API requires.

    The backend binds these parameters to a Java ZonedDateTime; a bare date
    such as "2023-06-01" is rejected with HTTP 400.
    """
    suffix = "T23:59:59Z" if end_of_day else "T00:00:00Z"
    return f"{day}{suffix}"


def cities(refresh: bool = False) -> list[dict]:
    rows = _get("/cities/all", cache_key="cities", refresh=refresh)
    _require_fields(rows, {"id", "name"}, "cities")
    return rows


def sites(refresh: bool = False) -> list[dict]:
    rows = _get("/sites/all", cache_key="sites", refresh=refresh)
    _require_fields(rows, SITE_FIELDS, "sites")
    return rows




def health_risks(refresh: bool = False) -> list[dict]:
    """Measured stream health-risk scores. This is the target variable.

    Note the boundary: these are *environmental* pathogen / faecal / antibiotic
    resistance indicators for streams. They are not human health outcomes.
    """
    rows = _get(
        "/resilience-map/health-risks", cache_key="health_risks", refresh=refresh
    )
    _require_fields(rows, HEALTH_RISK_FIELDS, "health_risks")
    return rows


def urban_parameters(refresh: bool = False) -> list[dict]:
    """Landscape and urbanisation descriptors at nested buffer radii."""
    rows = _get(
        "/resilience-map/urban-parameters",
        cache_key="urban_parameters",
        refresh=refresh,
    )
    _require_fields(rows, {"researchSiteCode"}, "urban_parameters")
    return rows


def weather(site_code: str, start: str, end: str, refresh: bool = False) -> list[dict]:
    """Daily reanalysis weather for one site over an inclusive date range."""
    rows = _get(
        "/resilience-map/weather",
        cache_key=f"weather/{site_code}_{start}_{end}",
        params={
            "siteCode": site_code,
            "start": zoned(start),
            "end": zoned(end, end_of_day=True),
        },
        refresh=refresh,
    )
    if rows:
        _require_fields(rows, WEATHER_FIELDS, f"weather[{site_code}]")
    return rows


def fetch_all(refresh: bool = False, pause: float = 0.0) -> dict[str, int]:
    """Warm the cache for every core dataset. Returns row counts."""
    counts = {
        "cities": len(cities(refresh)),
        "sites": len(sites(refresh)),
        "health_risks": len(health_risks(refresh)),
        "urban_parameters": len(urban_parameters(refresh)),
    }
    if pause:
        time.sleep(pause)
    return counts
