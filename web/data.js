// SYNTHETIC DEMO ONLY. No OneAquaHealth measurements.
window.__DATA = {
 "meta": {
  "project": "Stream Risk Envelope",
  "synthetic": true,
  "fixtureVersion": "synthetic-v1",
  "source": "Deterministic synthetic fixture; no OneAquaHealth measurements",
  "sites": 60,
  "cities": [
   "Demo City A",
   "Demo City B",
   "Demo City C",
   "Demo City D",
   "Demo City E"
  ],
  "target": "illustrative faecal indicator",
  "predictor": "illustrative pathogen indicator",
  "defaultLevel": "80"
 },
 "limitations": [
  "Every observation and result on this page is synthetic. Values, city names, flags and coverage rates are illustrations, not OneAquaHealth findings.",
  "A flag prioritises a human re-check; it does not establish measurement error, contamination or human health risk.",
  "The demonstration uses one invented observation per site. It does not support a forecast or causal conclusion.",
  "Standard conformal coverage requires exchangeable calibration and test records. Cross-city shift can violate this assumption; observed coverage here is descriptive, not a guarantee for a new city.",
  "A real deployment would need permissioned data access, local validation, governance and an accountable review process."
 ],
 "operatingCurve": [
  {
   "nominal": 0.5,
   "empirical": 0.533,
   "meanWidth": 0.1541,
   "widthFractionOfRange": 0.197,
   "flagged": 28,
   "reviewed": 60
  },
  {
   "nominal": 0.6,
   "empirical": 0.667,
   "meanWidth": 0.2369,
   "widthFractionOfRange": 0.302,
   "flagged": 20,
   "reviewed": 60
  },
  {
   "nominal": 0.7,
   "empirical": 0.767,
   "meanWidth": 0.2916,
   "widthFractionOfRange": 0.372,
   "flagged": 14,
   "reviewed": 60
  },
  {
   "nominal": 0.8,
   "empirical": 0.9,
   "meanWidth": 0.343,
   "widthFractionOfRange": 0.438,
   "flagged": 6,
   "reviewed": 60
  },
  {
   "nominal": 0.9,
   "empirical": 0.967,
   "meanWidth": 0.4074,
   "widthFractionOfRange": 0.52,
   "flagged": 0,
   "reviewed": 60
  }
 ],
 "levels": {
  "50": [
   {
    "site": "DEMO-A01",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5061,
    "predicted": 0.6349,
    "low": 0.5705,
    "high": 0.6994,
    "width": 0.1289,
    "state": "outside_envelope",
    "distanceOutside": 0.0644,
    "others": {
     "scaledPathogenRisk": 0.667
    }
   },
   {
    "site": "DEMO-A02",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3202,
    "predicted": 0.4409,
    "low": 0.3764,
    "high": 0.5053,
    "width": 0.1289,
    "state": "outside_envelope",
    "distanceOutside": 0.0562,
    "others": {
     "scaledPathogenRisk": 0.3836
    }
   },
   {
    "site": "DEMO-A03",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3426,
    "predicted": 0.2592,
    "low": 0.1947,
    "high": 0.3236,
    "width": 0.1289,
    "state": "outside_envelope",
    "distanceOutside": 0.019,
    "others": {
     "scaledPathogenRisk": 0.1182
    }
   },
   {
    "site": "DEMO-A04",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4729,
    "predicted": 0.3462,
    "low": 0.2818,
    "high": 0.4107,
    "width": 0.1289,
    "state": "outside_envelope",
    "distanceOutside": 0.0622,
    "others": {
     "scaledPathogenRisk": 0.2453
    }
   },
   {
    "site": "DEMO-A05",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5317,
    "predicted": 0.5358,
    "low": 0.4713,
    "high": 0.6002,
    "width": 0.1289,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5221
    }
   },
   {
    "site": "DEMO-A06",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2648,
    "predicted": 0.3332,
    "low": 0.2687,
    "high": 0.3976,
    "width": 0.1289,
    "state": "outside_envelope",
    "distanceOutside": 0.0039,
    "others": {
     "scaledPathogenRisk": 0.2262
    }
   },
   {
    "site": "DEMO-A07",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4283,
    "predicted": 0.3463,
    "low": 0.2818,
    "high": 0.4107,
    "width": 0.1289,
    "state": "outside_envelope",
    "distanceOutside": 0.0176,
    "others": {
     "scaledPathogenRisk": 0.2454
    }
   },
   {
    "site": "DEMO-A08",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8431,
    "predicted": 0.7408,
    "low": 0.6764,
    "high": 0.8053,
    "width": 0.1289,
    "state": "outside_envelope",
    "distanceOutside": 0.0378,
    "others": {
     "scaledPathogenRisk": 0.8216
    }
   },
   {
    "site": "DEMO-A09",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6608,
    "predicted": 0.6559,
    "low": 0.5915,
    "high": 0.7204,
    "width": 0.1289,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6976
    }
   },
   {
    "site": "DEMO-A10",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3988,
    "predicted": 0.5468,
    "low": 0.4824,
    "high": 0.6113,
    "width": 0.1289,
    "state": "outside_envelope",
    "distanceOutside": 0.0835,
    "others": {
     "scaledPathogenRisk": 0.5383
    }
   },
   {
    "site": "DEMO-A11",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3445,
    "predicted": 0.2729,
    "low": 0.2084,
    "high": 0.3373,
    "width": 0.1289,
    "state": "outside_envelope",
    "distanceOutside": 0.0072,
    "others": {
     "scaledPathogenRisk": 0.1382
    }
   },
   {
    "site": "DEMO-A12",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5077,
    "predicted": 0.5217,
    "low": 0.4572,
    "high": 0.5861,
    "width": 0.1289,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5015
    }
   },
   {
    "site": "DEMO-B01",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4304,
    "predicted": 0.4949,
    "low": 0.4178,
    "high": 0.572,
    "width": 0.1542,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4484
    }
   },
   {
    "site": "DEMO-B02",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4475,
    "predicted": 0.5121,
    "low": 0.435,
    "high": 0.5892,
    "width": 0.1542,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4734
    }
   },
   {
    "site": "DEMO-B03",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6407,
    "predicted": 0.4728,
    "low": 0.3957,
    "high": 0.5499,
    "width": 0.1542,
    "state": "outside_envelope",
    "distanceOutside": 0.0908,
    "others": {
     "scaledPathogenRisk": 0.4164
    }
   },
   {
    "site": "DEMO-B04",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4813,
    "predicted": 0.5152,
    "low": 0.4381,
    "high": 0.5923,
    "width": 0.1542,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4779
    }
   },
   {
    "site": "DEMO-B05",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2926,
    "predicted": 0.3022,
    "low": 0.2252,
    "high": 0.3793,
    "width": 0.1542,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1687
    }
   },
   {
    "site": "DEMO-B06",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4613,
    "predicted": 0.4318,
    "low": 0.3547,
    "high": 0.5088,
    "width": 0.1542,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3567
    }
   },
   {
    "site": "DEMO-B07",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2368,
    "predicted": 0.3468,
    "low": 0.2697,
    "high": 0.4239,
    "width": 0.1542,
    "state": "outside_envelope",
    "distanceOutside": 0.0329,
    "others": {
     "scaledPathogenRisk": 0.2334
    }
   },
   {
    "site": "DEMO-B08",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2755,
    "predicted": 0.2527,
    "low": 0.1756,
    "high": 0.3297,
    "width": 0.1542,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.0967
    }
   },
   {
    "site": "DEMO-B09",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2414,
    "predicted": 0.3937,
    "low": 0.3166,
    "high": 0.4707,
    "width": 0.1542,
    "state": "outside_envelope",
    "distanceOutside": 0.0751,
    "others": {
     "scaledPathogenRisk": 0.3014
    }
   },
   {
    "site": "DEMO-B10",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4902,
    "predicted": 0.5424,
    "low": 0.4653,
    "high": 0.6195,
    "width": 0.1542,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5174
    }
   },
   {
    "site": "DEMO-B11",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2158,
    "predicted": 0.3969,
    "low": 0.3198,
    "high": 0.474,
    "width": 0.1542,
    "state": "outside_envelope",
    "distanceOutside": 0.1039,
    "others": {
     "scaledPathogenRisk": 0.3061
    }
   },
   {
    "site": "DEMO-B12",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4167,
    "predicted": 0.5824,
    "low": 0.5053,
    "high": 0.6595,
    "width": 0.1542,
    "state": "outside_envelope",
    "distanceOutside": 0.0886,
    "others": {
     "scaledPathogenRisk": 0.5755
    }
   },
   {
    "site": "DEMO-C01",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5476,
    "predicted": 0.5159,
    "low": 0.4194,
    "high": 0.6123,
    "width": 0.193,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5094
    }
   },
   {
    "site": "DEMO-C02",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.657,
    "predicted": 0.5048,
    "low": 0.4083,
    "high": 0.6013,
    "width": 0.193,
    "state": "outside_envelope",
    "distanceOutside": 0.0557,
    "others": {
     "scaledPathogenRisk": 0.4936
    }
   },
   {
    "site": "DEMO-C03",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.9239,
    "predicted": 0.7408,
    "low": 0.6443,
    "high": 0.8373,
    "width": 0.193,
    "state": "outside_envelope",
    "distanceOutside": 0.0867,
    "others": {
     "scaledPathogenRisk": 0.8321
    }
   },
   {
    "site": "DEMO-C04",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7077,
    "predicted": 0.7657,
    "low": 0.6692,
    "high": 0.8622,
    "width": 0.193,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8679
    }
   },
   {
    "site": "DEMO-C05",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5695,
    "predicted": 0.3862,
    "low": 0.2897,
    "high": 0.4827,
    "width": 0.193,
    "state": "outside_envelope",
    "distanceOutside": 0.0868,
    "others": {
     "scaledPathogenRisk": 0.3234
    }
   },
   {
    "site": "DEMO-C06",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2909,
    "predicted": 0.2544,
    "low": 0.158,
    "high": 0.3509,
    "width": 0.193,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1344
    }
   },
   {
    "site": "DEMO-C07",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3825,
    "predicted": 0.3958,
    "low": 0.2993,
    "high": 0.4923,
    "width": 0.193,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3371
    }
   },
   {
    "site": "DEMO-C08",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3418,
    "predicted": 0.2371,
    "low": 0.1406,
    "high": 0.3336,
    "width": 0.193,
    "state": "outside_envelope",
    "distanceOutside": 0.0081,
    "others": {
     "scaledPathogenRisk": 0.1095
    }
   },
   {
    "site": "DEMO-C09",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4017,
    "predicted": 0.4538,
    "low": 0.3573,
    "high": 0.5503,
    "width": 0.193,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4204
    }
   },
   {
    "site": "DEMO-C10",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5464,
    "predicted": 0.5336,
    "low": 0.4371,
    "high": 0.6301,
    "width": 0.193,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5349
    }
   },
   {
    "site": "DEMO-C11",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3737,
    "predicted": 0.3253,
    "low": 0.2288,
    "high": 0.4218,
    "width": 0.193,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.236
    }
   },
   {
    "site": "DEMO-C12",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5689,
    "predicted": 0.5278,
    "low": 0.4313,
    "high": 0.6243,
    "width": 0.193,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5266
    }
   },
   {
    "site": "DEMO-D01",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6404,
    "predicted": 0.5995,
    "low": 0.5337,
    "high": 0.6653,
    "width": 0.1316,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5872
    }
   },
   {
    "site": "DEMO-D02",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3652,
    "predicted": 0.4582,
    "low": 0.3924,
    "high": 0.524,
    "width": 0.1316,
    "state": "outside_envelope",
    "distanceOutside": 0.0272,
    "others": {
     "scaledPathogenRisk": 0.4009
    }
   },
   {
    "site": "DEMO-D03",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6334,
    "predicted": 0.3892,
    "low": 0.3234,
    "high": 0.455,
    "width": 0.1316,
    "state": "outside_envelope",
    "distanceOutside": 0.1783,
    "others": {
     "scaledPathogenRisk": 0.31
    }
   },
   {
    "site": "DEMO-D04",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5945,
    "predicted": 0.7448,
    "low": 0.679,
    "high": 0.8106,
    "width": 0.1316,
    "state": "outside_envelope",
    "distanceOutside": 0.0846,
    "others": {
     "scaledPathogenRisk": 0.7787
    }
   },
   {
    "site": "DEMO-D05",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.231,
    "predicted": 0.3087,
    "low": 0.2429,
    "high": 0.3745,
    "width": 0.1316,
    "state": "outside_envelope",
    "distanceOutside": 0.0119,
    "others": {
     "scaledPathogenRisk": 0.2039
    }
   },
   {
    "site": "DEMO-D06",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6098,
    "predicted": 0.7816,
    "low": 0.7157,
    "high": 0.8474,
    "width": 0.1316,
    "state": "outside_envelope",
    "distanceOutside": 0.1059,
    "others": {
     "scaledPathogenRisk": 0.8271
    }
   },
   {
    "site": "DEMO-D07",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2127,
    "predicted": 0.2603,
    "low": 0.1945,
    "high": 0.3261,
    "width": 0.1316,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.14
    }
   },
   {
    "site": "DEMO-D08",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3947,
    "predicted": 0.6142,
    "low": 0.5484,
    "high": 0.68,
    "width": 0.1316,
    "state": "outside_envelope",
    "distanceOutside": 0.1536,
    "others": {
     "scaledPathogenRisk": 0.6064
    }
   },
   {
    "site": "DEMO-D09",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8058,
    "predicted": 0.7931,
    "low": 0.7273,
    "high": 0.8589,
    "width": 0.1316,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8423
    }
   },
   {
    "site": "DEMO-D10",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3364,
    "predicted": 0.3902,
    "low": 0.3244,
    "high": 0.456,
    "width": 0.1316,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3112
    }
   },
   {
    "site": "DEMO-D11",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.1403,
    "predicted": 0.2984,
    "low": 0.2326,
    "high": 0.3642,
    "width": 0.1316,
    "state": "outside_envelope",
    "distanceOutside": 0.0923,
    "others": {
     "scaledPathogenRisk": 0.1902
    }
   },
   {
    "site": "DEMO-D12",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5449,
    "predicted": 0.5328,
    "low": 0.467,
    "high": 0.5986,
    "width": 0.1316,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4992
    }
   },
   {
    "site": "DEMO-E01",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.1432,
    "predicted": 0.2842,
    "low": 0.2028,
    "high": 0.3656,
    "width": 0.1628,
    "state": "outside_envelope",
    "distanceOutside": 0.0596,
    "others": {
     "scaledPathogenRisk": 0.1572
    }
   },
   {
    "site": "DEMO-E02",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6208,
    "predicted": 0.6555,
    "low": 0.5741,
    "high": 0.7369,
    "width": 0.1628,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.679
    }
   },
   {
    "site": "DEMO-E03",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8716,
    "predicted": 0.7251,
    "low": 0.6437,
    "high": 0.8065,
    "width": 0.1628,
    "state": "outside_envelope",
    "distanceOutside": 0.0651,
    "others": {
     "scaledPathogenRisk": 0.7768
    }
   },
   {
    "site": "DEMO-E04",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5717,
    "predicted": 0.5535,
    "low": 0.4721,
    "high": 0.6349,
    "width": 0.1628,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5357
    }
   },
   {
    "site": "DEMO-E05",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4851,
    "predicted": 0.5067,
    "low": 0.4254,
    "high": 0.5881,
    "width": 0.1628,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.47
    }
   },
   {
    "site": "DEMO-E06",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5476,
    "predicted": 0.7411,
    "low": 0.6597,
    "high": 0.8225,
    "width": 0.1628,
    "state": "outside_envelope",
    "distanceOutside": 0.1122,
    "others": {
     "scaledPathogenRisk": 0.7993
    }
   },
   {
    "site": "DEMO-E07",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7372,
    "predicted": 0.6704,
    "low": 0.589,
    "high": 0.7518,
    "width": 0.1628,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6999
    }
   },
   {
    "site": "DEMO-E08",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7915,
    "predicted": 0.7531,
    "low": 0.6717,
    "high": 0.8345,
    "width": 0.1628,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8161
    }
   },
   {
    "site": "DEMO-E09",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2935,
    "predicted": 0.2678,
    "low": 0.1864,
    "high": 0.3492,
    "width": 0.1628,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1342
    }
   },
   {
    "site": "DEMO-E10",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3871,
    "predicted": 0.4233,
    "low": 0.3419,
    "high": 0.5047,
    "width": 0.1628,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3527
    }
   },
   {
    "site": "DEMO-E11",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2431,
    "predicted": 0.2954,
    "low": 0.214,
    "high": 0.3768,
    "width": 0.1628,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.173
    }
   },
   {
    "site": "DEMO-E12",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6356,
    "predicted": 0.6571,
    "low": 0.5757,
    "high": 0.7385,
    "width": 0.1628,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6813
    }
   }
  ],
  "60": [
   {
    "site": "DEMO-A01",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5061,
    "predicted": 0.6349,
    "low": 0.5337,
    "high": 0.7362,
    "width": 0.2024,
    "state": "outside_envelope",
    "distanceOutside": 0.0276,
    "others": {
     "scaledPathogenRisk": 0.667
    }
   },
   {
    "site": "DEMO-A02",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3202,
    "predicted": 0.4409,
    "low": 0.3397,
    "high": 0.5421,
    "width": 0.2024,
    "state": "outside_envelope",
    "distanceOutside": 0.0195,
    "others": {
     "scaledPathogenRisk": 0.3836
    }
   },
   {
    "site": "DEMO-A03",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3426,
    "predicted": 0.2592,
    "low": 0.158,
    "high": 0.3604,
    "width": 0.2024,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1182
    }
   },
   {
    "site": "DEMO-A04",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4729,
    "predicted": 0.3462,
    "low": 0.245,
    "high": 0.4474,
    "width": 0.2024,
    "state": "outside_envelope",
    "distanceOutside": 0.0255,
    "others": {
     "scaledPathogenRisk": 0.2453
    }
   },
   {
    "site": "DEMO-A05",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5317,
    "predicted": 0.5358,
    "low": 0.4346,
    "high": 0.637,
    "width": 0.2024,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5221
    }
   },
   {
    "site": "DEMO-A06",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2648,
    "predicted": 0.3332,
    "low": 0.2319,
    "high": 0.4344,
    "width": 0.2024,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2262
    }
   },
   {
    "site": "DEMO-A07",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4283,
    "predicted": 0.3463,
    "low": 0.2451,
    "high": 0.4475,
    "width": 0.2024,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2454
    }
   },
   {
    "site": "DEMO-A08",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8431,
    "predicted": 0.7408,
    "low": 0.6396,
    "high": 0.8421,
    "width": 0.2024,
    "state": "outside_envelope",
    "distanceOutside": 0.001,
    "others": {
     "scaledPathogenRisk": 0.8216
    }
   },
   {
    "site": "DEMO-A09",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6608,
    "predicted": 0.6559,
    "low": 0.5547,
    "high": 0.7571,
    "width": 0.2024,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6976
    }
   },
   {
    "site": "DEMO-A10",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3988,
    "predicted": 0.5468,
    "low": 0.4456,
    "high": 0.648,
    "width": 0.2024,
    "state": "outside_envelope",
    "distanceOutside": 0.0468,
    "others": {
     "scaledPathogenRisk": 0.5383
    }
   },
   {
    "site": "DEMO-A11",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3445,
    "predicted": 0.2729,
    "low": 0.1716,
    "high": 0.3741,
    "width": 0.2024,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1382
    }
   },
   {
    "site": "DEMO-A12",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5077,
    "predicted": 0.5217,
    "low": 0.4204,
    "high": 0.6229,
    "width": 0.2024,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5015
    }
   },
   {
    "site": "DEMO-B01",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4304,
    "predicted": 0.4949,
    "low": 0.3639,
    "high": 0.6259,
    "width": 0.2621,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4484
    }
   },
   {
    "site": "DEMO-B02",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4475,
    "predicted": 0.5121,
    "low": 0.3811,
    "high": 0.6432,
    "width": 0.2621,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4734
    }
   },
   {
    "site": "DEMO-B03",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6407,
    "predicted": 0.4728,
    "low": 0.3418,
    "high": 0.6039,
    "width": 0.2621,
    "state": "outside_envelope",
    "distanceOutside": 0.0369,
    "others": {
     "scaledPathogenRisk": 0.4164
    }
   },
   {
    "site": "DEMO-B04",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4813,
    "predicted": 0.5152,
    "low": 0.3842,
    "high": 0.6463,
    "width": 0.2621,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4779
    }
   },
   {
    "site": "DEMO-B05",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2926,
    "predicted": 0.3022,
    "low": 0.1712,
    "high": 0.4333,
    "width": 0.2621,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1687
    }
   },
   {
    "site": "DEMO-B06",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4613,
    "predicted": 0.4318,
    "low": 0.3007,
    "high": 0.5628,
    "width": 0.2621,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3567
    }
   },
   {
    "site": "DEMO-B07",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2368,
    "predicted": 0.3468,
    "low": 0.2158,
    "high": 0.4778,
    "width": 0.2621,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2334
    }
   },
   {
    "site": "DEMO-B08",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2755,
    "predicted": 0.2527,
    "low": 0.1216,
    "high": 0.3837,
    "width": 0.2621,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.0967
    }
   },
   {
    "site": "DEMO-B09",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2414,
    "predicted": 0.3937,
    "low": 0.2626,
    "high": 0.5247,
    "width": 0.2621,
    "state": "outside_envelope",
    "distanceOutside": 0.0212,
    "others": {
     "scaledPathogenRisk": 0.3014
    }
   },
   {
    "site": "DEMO-B10",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4902,
    "predicted": 0.5424,
    "low": 0.4113,
    "high": 0.6734,
    "width": 0.2621,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5174
    }
   },
   {
    "site": "DEMO-B11",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2158,
    "predicted": 0.3969,
    "low": 0.2658,
    "high": 0.5279,
    "width": 0.2621,
    "state": "outside_envelope",
    "distanceOutside": 0.05,
    "others": {
     "scaledPathogenRisk": 0.3061
    }
   },
   {
    "site": "DEMO-B12",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4167,
    "predicted": 0.5824,
    "low": 0.4514,
    "high": 0.7134,
    "width": 0.2621,
    "state": "outside_envelope",
    "distanceOutside": 0.0347,
    "others": {
     "scaledPathogenRisk": 0.5755
    }
   },
   {
    "site": "DEMO-C01",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5476,
    "predicted": 0.5159,
    "low": 0.3864,
    "high": 0.6453,
    "width": 0.2589,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5094
    }
   },
   {
    "site": "DEMO-C02",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.657,
    "predicted": 0.5048,
    "low": 0.3754,
    "high": 0.6342,
    "width": 0.2589,
    "state": "outside_envelope",
    "distanceOutside": 0.0228,
    "others": {
     "scaledPathogenRisk": 0.4936
    }
   },
   {
    "site": "DEMO-C03",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.9239,
    "predicted": 0.7408,
    "low": 0.6113,
    "high": 0.8702,
    "width": 0.2589,
    "state": "outside_envelope",
    "distanceOutside": 0.0537,
    "others": {
     "scaledPathogenRisk": 0.8321
    }
   },
   {
    "site": "DEMO-C04",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7077,
    "predicted": 0.7657,
    "low": 0.6363,
    "high": 0.8951,
    "width": 0.2589,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8679
    }
   },
   {
    "site": "DEMO-C05",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5695,
    "predicted": 0.3862,
    "low": 0.2568,
    "high": 0.5156,
    "width": 0.2589,
    "state": "outside_envelope",
    "distanceOutside": 0.0538,
    "others": {
     "scaledPathogenRisk": 0.3234
    }
   },
   {
    "site": "DEMO-C06",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2909,
    "predicted": 0.2544,
    "low": 0.125,
    "high": 0.3839,
    "width": 0.2589,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1344
    }
   },
   {
    "site": "DEMO-C07",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3825,
    "predicted": 0.3958,
    "low": 0.2663,
    "high": 0.5252,
    "width": 0.2589,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3371
    }
   },
   {
    "site": "DEMO-C08",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3418,
    "predicted": 0.2371,
    "low": 0.1077,
    "high": 0.3666,
    "width": 0.2589,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1095
    }
   },
   {
    "site": "DEMO-C09",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4017,
    "predicted": 0.4538,
    "low": 0.3244,
    "high": 0.5833,
    "width": 0.2589,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4204
    }
   },
   {
    "site": "DEMO-C10",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5464,
    "predicted": 0.5336,
    "low": 0.4042,
    "high": 0.6631,
    "width": 0.2589,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5349
    }
   },
   {
    "site": "DEMO-C11",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3737,
    "predicted": 0.3253,
    "low": 0.1958,
    "high": 0.4547,
    "width": 0.2589,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.236
    }
   },
   {
    "site": "DEMO-C12",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5689,
    "predicted": 0.5278,
    "low": 0.3984,
    "high": 0.6573,
    "width": 0.2589,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5266
    }
   },
   {
    "site": "DEMO-D01",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6404,
    "predicted": 0.5995,
    "low": 0.4949,
    "high": 0.7041,
    "width": 0.2092,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5872
    }
   },
   {
    "site": "DEMO-D02",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3652,
    "predicted": 0.4582,
    "low": 0.3536,
    "high": 0.5628,
    "width": 0.2092,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4009
    }
   },
   {
    "site": "DEMO-D03",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6334,
    "predicted": 0.3892,
    "low": 0.2846,
    "high": 0.4938,
    "width": 0.2092,
    "state": "outside_envelope",
    "distanceOutside": 0.1395,
    "others": {
     "scaledPathogenRisk": 0.31
    }
   },
   {
    "site": "DEMO-D04",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5945,
    "predicted": 0.7448,
    "low": 0.6402,
    "high": 0.8494,
    "width": 0.2092,
    "state": "outside_envelope",
    "distanceOutside": 0.0458,
    "others": {
     "scaledPathogenRisk": 0.7787
    }
   },
   {
    "site": "DEMO-D05",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.231,
    "predicted": 0.3087,
    "low": 0.2041,
    "high": 0.4133,
    "width": 0.2092,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2039
    }
   },
   {
    "site": "DEMO-D06",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6098,
    "predicted": 0.7816,
    "low": 0.6769,
    "high": 0.8862,
    "width": 0.2092,
    "state": "outside_envelope",
    "distanceOutside": 0.0671,
    "others": {
     "scaledPathogenRisk": 0.8271
    }
   },
   {
    "site": "DEMO-D07",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2127,
    "predicted": 0.2603,
    "low": 0.1557,
    "high": 0.3649,
    "width": 0.2092,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.14
    }
   },
   {
    "site": "DEMO-D08",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3947,
    "predicted": 0.6142,
    "low": 0.5095,
    "high": 0.7188,
    "width": 0.2092,
    "state": "outside_envelope",
    "distanceOutside": 0.1148,
    "others": {
     "scaledPathogenRisk": 0.6064
    }
   },
   {
    "site": "DEMO-D09",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8058,
    "predicted": 0.7931,
    "low": 0.6885,
    "high": 0.8977,
    "width": 0.2092,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8423
    }
   },
   {
    "site": "DEMO-D10",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3364,
    "predicted": 0.3902,
    "low": 0.2855,
    "high": 0.4948,
    "width": 0.2092,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3112
    }
   },
   {
    "site": "DEMO-D11",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.1403,
    "predicted": 0.2984,
    "low": 0.1937,
    "high": 0.403,
    "width": 0.2092,
    "state": "outside_envelope",
    "distanceOutside": 0.0534,
    "others": {
     "scaledPathogenRisk": 0.1902
    }
   },
   {
    "site": "DEMO-D12",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5449,
    "predicted": 0.5328,
    "low": 0.4282,
    "high": 0.6374,
    "width": 0.2092,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4992
    }
   },
   {
    "site": "DEMO-E01",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.1432,
    "predicted": 0.2842,
    "low": 0.1581,
    "high": 0.4102,
    "width": 0.2521,
    "state": "outside_envelope",
    "distanceOutside": 0.0149,
    "others": {
     "scaledPathogenRisk": 0.1572
    }
   },
   {
    "site": "DEMO-E02",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6208,
    "predicted": 0.6555,
    "low": 0.5294,
    "high": 0.7815,
    "width": 0.2521,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.679
    }
   },
   {
    "site": "DEMO-E03",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8716,
    "predicted": 0.7251,
    "low": 0.599,
    "high": 0.8511,
    "width": 0.2521,
    "state": "outside_envelope",
    "distanceOutside": 0.0205,
    "others": {
     "scaledPathogenRisk": 0.7768
    }
   },
   {
    "site": "DEMO-E04",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5717,
    "predicted": 0.5535,
    "low": 0.4275,
    "high": 0.6795,
    "width": 0.2521,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5357
    }
   },
   {
    "site": "DEMO-E05",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4851,
    "predicted": 0.5067,
    "low": 0.3807,
    "high": 0.6328,
    "width": 0.2521,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.47
    }
   },
   {
    "site": "DEMO-E06",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5476,
    "predicted": 0.7411,
    "low": 0.6151,
    "high": 0.8672,
    "width": 0.2521,
    "state": "outside_envelope",
    "distanceOutside": 0.0675,
    "others": {
     "scaledPathogenRisk": 0.7993
    }
   },
   {
    "site": "DEMO-E07",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7372,
    "predicted": 0.6704,
    "low": 0.5444,
    "high": 0.7964,
    "width": 0.2521,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6999
    }
   },
   {
    "site": "DEMO-E08",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7915,
    "predicted": 0.7531,
    "low": 0.6271,
    "high": 0.8791,
    "width": 0.2521,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8161
    }
   },
   {
    "site": "DEMO-E09",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2935,
    "predicted": 0.2678,
    "low": 0.1418,
    "high": 0.3939,
    "width": 0.2521,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1342
    }
   },
   {
    "site": "DEMO-E10",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3871,
    "predicted": 0.4233,
    "low": 0.2972,
    "high": 0.5493,
    "width": 0.2521,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3527
    }
   },
   {
    "site": "DEMO-E11",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2431,
    "predicted": 0.2954,
    "low": 0.1694,
    "high": 0.4214,
    "width": 0.2521,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.173
    }
   },
   {
    "site": "DEMO-E12",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6356,
    "predicted": 0.6571,
    "low": 0.5311,
    "high": 0.7831,
    "width": 0.2521,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6813
    }
   }
  ],
  "70": [
   {
    "site": "DEMO-A01",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5061,
    "predicted": 0.6349,
    "low": 0.4917,
    "high": 0.7782,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.667
    }
   },
   {
    "site": "DEMO-A02",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3202,
    "predicted": 0.4409,
    "low": 0.2977,
    "high": 0.5841,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3836
    }
   },
   {
    "site": "DEMO-A03",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3426,
    "predicted": 0.2592,
    "low": 0.116,
    "high": 0.4024,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1182
    }
   },
   {
    "site": "DEMO-A04",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4729,
    "predicted": 0.3462,
    "low": 0.203,
    "high": 0.4894,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2453
    }
   },
   {
    "site": "DEMO-A05",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5317,
    "predicted": 0.5358,
    "low": 0.3926,
    "high": 0.679,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5221
    }
   },
   {
    "site": "DEMO-A06",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2648,
    "predicted": 0.3332,
    "low": 0.1899,
    "high": 0.4764,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2262
    }
   },
   {
    "site": "DEMO-A07",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4283,
    "predicted": 0.3463,
    "low": 0.2031,
    "high": 0.4895,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2454
    }
   },
   {
    "site": "DEMO-A08",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8431,
    "predicted": 0.7408,
    "low": 0.5976,
    "high": 0.8841,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8216
    }
   },
   {
    "site": "DEMO-A09",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6608,
    "predicted": 0.6559,
    "low": 0.5127,
    "high": 0.7991,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6976
    }
   },
   {
    "site": "DEMO-A10",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3988,
    "predicted": 0.5468,
    "low": 0.4036,
    "high": 0.69,
    "width": 0.2864,
    "state": "outside_envelope",
    "distanceOutside": 0.0048,
    "others": {
     "scaledPathogenRisk": 0.5383
    }
   },
   {
    "site": "DEMO-A11",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3445,
    "predicted": 0.2729,
    "low": 0.1296,
    "high": 0.4161,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1382
    }
   },
   {
    "site": "DEMO-A12",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5077,
    "predicted": 0.5217,
    "low": 0.3784,
    "high": 0.6649,
    "width": 0.2864,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5015
    }
   },
   {
    "site": "DEMO-B01",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4304,
    "predicted": 0.4949,
    "low": 0.337,
    "high": 0.6529,
    "width": 0.3159,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4484
    }
   },
   {
    "site": "DEMO-B02",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4475,
    "predicted": 0.5121,
    "low": 0.3542,
    "high": 0.6701,
    "width": 0.3159,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4734
    }
   },
   {
    "site": "DEMO-B03",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6407,
    "predicted": 0.4728,
    "low": 0.3149,
    "high": 0.6308,
    "width": 0.3159,
    "state": "outside_envelope",
    "distanceOutside": 0.0099,
    "others": {
     "scaledPathogenRisk": 0.4164
    }
   },
   {
    "site": "DEMO-B04",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4813,
    "predicted": 0.5152,
    "low": 0.3573,
    "high": 0.6732,
    "width": 0.3159,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4779
    }
   },
   {
    "site": "DEMO-B05",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2926,
    "predicted": 0.3022,
    "low": 0.1443,
    "high": 0.4602,
    "width": 0.3159,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1687
    }
   },
   {
    "site": "DEMO-B06",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4613,
    "predicted": 0.4318,
    "low": 0.2738,
    "high": 0.5897,
    "width": 0.3159,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3567
    }
   },
   {
    "site": "DEMO-B07",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2368,
    "predicted": 0.3468,
    "low": 0.1888,
    "high": 0.5047,
    "width": 0.3159,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2334
    }
   },
   {
    "site": "DEMO-B08",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2755,
    "predicted": 0.2527,
    "low": 0.0947,
    "high": 0.4106,
    "width": 0.3159,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.0967
    }
   },
   {
    "site": "DEMO-B09",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2414,
    "predicted": 0.3937,
    "low": 0.2357,
    "high": 0.5516,
    "width": 0.3159,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3014
    }
   },
   {
    "site": "DEMO-B10",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4902,
    "predicted": 0.5424,
    "low": 0.3844,
    "high": 0.7003,
    "width": 0.3159,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5174
    }
   },
   {
    "site": "DEMO-B11",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2158,
    "predicted": 0.3969,
    "low": 0.2389,
    "high": 0.5548,
    "width": 0.3159,
    "state": "outside_envelope",
    "distanceOutside": 0.0231,
    "others": {
     "scaledPathogenRisk": 0.3061
    }
   },
   {
    "site": "DEMO-B12",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4167,
    "predicted": 0.5824,
    "low": 0.4245,
    "high": 0.7404,
    "width": 0.3159,
    "state": "outside_envelope",
    "distanceOutside": 0.0078,
    "others": {
     "scaledPathogenRisk": 0.5755
    }
   },
   {
    "site": "DEMO-C01",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5476,
    "predicted": 0.5159,
    "low": 0.3747,
    "high": 0.657,
    "width": 0.2823,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5094
    }
   },
   {
    "site": "DEMO-C02",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.657,
    "predicted": 0.5048,
    "low": 0.3637,
    "high": 0.6459,
    "width": 0.2823,
    "state": "outside_envelope",
    "distanceOutside": 0.0111,
    "others": {
     "scaledPathogenRisk": 0.4936
    }
   },
   {
    "site": "DEMO-C03",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.9239,
    "predicted": 0.7408,
    "low": 0.5996,
    "high": 0.8819,
    "width": 0.2823,
    "state": "outside_envelope",
    "distanceOutside": 0.042,
    "others": {
     "scaledPathogenRisk": 0.8321
    }
   },
   {
    "site": "DEMO-C04",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7077,
    "predicted": 0.7657,
    "low": 0.6246,
    "high": 0.9068,
    "width": 0.2823,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8679
    }
   },
   {
    "site": "DEMO-C05",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5695,
    "predicted": 0.3862,
    "low": 0.2451,
    "high": 0.5273,
    "width": 0.2823,
    "state": "outside_envelope",
    "distanceOutside": 0.0422,
    "others": {
     "scaledPathogenRisk": 0.3234
    }
   },
   {
    "site": "DEMO-C06",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2909,
    "predicted": 0.2544,
    "low": 0.1133,
    "high": 0.3956,
    "width": 0.2823,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1344
    }
   },
   {
    "site": "DEMO-C07",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3825,
    "predicted": 0.3958,
    "low": 0.2546,
    "high": 0.5369,
    "width": 0.2823,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3371
    }
   },
   {
    "site": "DEMO-C08",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3418,
    "predicted": 0.2371,
    "low": 0.096,
    "high": 0.3783,
    "width": 0.2823,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1095
    }
   },
   {
    "site": "DEMO-C09",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4017,
    "predicted": 0.4538,
    "low": 0.3127,
    "high": 0.595,
    "width": 0.2823,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4204
    }
   },
   {
    "site": "DEMO-C10",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5464,
    "predicted": 0.5336,
    "low": 0.3925,
    "high": 0.6748,
    "width": 0.2823,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5349
    }
   },
   {
    "site": "DEMO-C11",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3737,
    "predicted": 0.3253,
    "low": 0.1841,
    "high": 0.4664,
    "width": 0.2823,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.236
    }
   },
   {
    "site": "DEMO-C12",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5689,
    "predicted": 0.5278,
    "low": 0.3867,
    "high": 0.669,
    "width": 0.2823,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5266
    }
   },
   {
    "site": "DEMO-D01",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6404,
    "predicted": 0.5995,
    "low": 0.4582,
    "high": 0.7409,
    "width": 0.2826,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5872
    }
   },
   {
    "site": "DEMO-D02",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3652,
    "predicted": 0.4582,
    "low": 0.3169,
    "high": 0.5995,
    "width": 0.2826,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4009
    }
   },
   {
    "site": "DEMO-D03",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6334,
    "predicted": 0.3892,
    "low": 0.2479,
    "high": 0.5305,
    "width": 0.2826,
    "state": "outside_envelope",
    "distanceOutside": 0.1028,
    "others": {
     "scaledPathogenRisk": 0.31
    }
   },
   {
    "site": "DEMO-D04",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5945,
    "predicted": 0.7448,
    "low": 0.6035,
    "high": 0.8861,
    "width": 0.2826,
    "state": "outside_envelope",
    "distanceOutside": 0.0091,
    "others": {
     "scaledPathogenRisk": 0.7787
    }
   },
   {
    "site": "DEMO-D05",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.231,
    "predicted": 0.3087,
    "low": 0.1674,
    "high": 0.45,
    "width": 0.2826,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2039
    }
   },
   {
    "site": "DEMO-D06",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6098,
    "predicted": 0.7816,
    "low": 0.6402,
    "high": 0.9229,
    "width": 0.2826,
    "state": "outside_envelope",
    "distanceOutside": 0.0304,
    "others": {
     "scaledPathogenRisk": 0.8271
    }
   },
   {
    "site": "DEMO-D07",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2127,
    "predicted": 0.2603,
    "low": 0.119,
    "high": 0.4016,
    "width": 0.2826,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.14
    }
   },
   {
    "site": "DEMO-D08",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3947,
    "predicted": 0.6142,
    "low": 0.4728,
    "high": 0.7555,
    "width": 0.2826,
    "state": "outside_envelope",
    "distanceOutside": 0.0781,
    "others": {
     "scaledPathogenRisk": 0.6064
    }
   },
   {
    "site": "DEMO-D09",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8058,
    "predicted": 0.7931,
    "low": 0.6518,
    "high": 0.9344,
    "width": 0.2826,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8423
    }
   },
   {
    "site": "DEMO-D10",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3364,
    "predicted": 0.3902,
    "low": 0.2488,
    "high": 0.5315,
    "width": 0.2826,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3112
    }
   },
   {
    "site": "DEMO-D11",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.1403,
    "predicted": 0.2984,
    "low": 0.157,
    "high": 0.4397,
    "width": 0.2826,
    "state": "outside_envelope",
    "distanceOutside": 0.0167,
    "others": {
     "scaledPathogenRisk": 0.1902
    }
   },
   {
    "site": "DEMO-D12",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5449,
    "predicted": 0.5328,
    "low": 0.3915,
    "high": 0.6741,
    "width": 0.2826,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4992
    }
   },
   {
    "site": "DEMO-E01",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.1432,
    "predicted": 0.2842,
    "low": 0.1388,
    "high": 0.4295,
    "width": 0.2907,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1572
    }
   },
   {
    "site": "DEMO-E02",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6208,
    "predicted": 0.6555,
    "low": 0.5101,
    "high": 0.8008,
    "width": 0.2907,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.679
    }
   },
   {
    "site": "DEMO-E03",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8716,
    "predicted": 0.7251,
    "low": 0.5797,
    "high": 0.8704,
    "width": 0.2907,
    "state": "outside_envelope",
    "distanceOutside": 0.0011,
    "others": {
     "scaledPathogenRisk": 0.7768
    }
   },
   {
    "site": "DEMO-E04",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5717,
    "predicted": 0.5535,
    "low": 0.4081,
    "high": 0.6989,
    "width": 0.2907,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5357
    }
   },
   {
    "site": "DEMO-E05",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4851,
    "predicted": 0.5067,
    "low": 0.3614,
    "high": 0.6521,
    "width": 0.2907,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.47
    }
   },
   {
    "site": "DEMO-E06",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5476,
    "predicted": 0.7411,
    "low": 0.5958,
    "high": 0.8865,
    "width": 0.2907,
    "state": "outside_envelope",
    "distanceOutside": 0.0482,
    "others": {
     "scaledPathogenRisk": 0.7993
    }
   },
   {
    "site": "DEMO-E07",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7372,
    "predicted": 0.6704,
    "low": 0.525,
    "high": 0.8158,
    "width": 0.2907,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6999
    }
   },
   {
    "site": "DEMO-E08",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7915,
    "predicted": 0.7531,
    "low": 0.6077,
    "high": 0.8985,
    "width": 0.2907,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8161
    }
   },
   {
    "site": "DEMO-E09",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2935,
    "predicted": 0.2678,
    "low": 0.1225,
    "high": 0.4132,
    "width": 0.2907,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1342
    }
   },
   {
    "site": "DEMO-E10",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3871,
    "predicted": 0.4233,
    "low": 0.2779,
    "high": 0.5686,
    "width": 0.2907,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3527
    }
   },
   {
    "site": "DEMO-E11",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2431,
    "predicted": 0.2954,
    "low": 0.15,
    "high": 0.4408,
    "width": 0.2907,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.173
    }
   },
   {
    "site": "DEMO-E12",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6356,
    "predicted": 0.6571,
    "low": 0.5117,
    "high": 0.8025,
    "width": 0.2907,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6813
    }
   }
  ],
  "80": [
   {
    "site": "DEMO-A01",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5061,
    "predicted": 0.6349,
    "low": 0.457,
    "high": 0.8129,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.667
    }
   },
   {
    "site": "DEMO-A02",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3202,
    "predicted": 0.4409,
    "low": 0.2629,
    "high": 0.6189,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3836
    }
   },
   {
    "site": "DEMO-A03",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3426,
    "predicted": 0.2592,
    "low": 0.0812,
    "high": 0.4372,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1182
    }
   },
   {
    "site": "DEMO-A04",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4729,
    "predicted": 0.3462,
    "low": 0.1682,
    "high": 0.5242,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2453
    }
   },
   {
    "site": "DEMO-A05",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5317,
    "predicted": 0.5358,
    "low": 0.3578,
    "high": 0.7138,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5221
    }
   },
   {
    "site": "DEMO-A06",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2648,
    "predicted": 0.3332,
    "low": 0.1552,
    "high": 0.5111,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2262
    }
   },
   {
    "site": "DEMO-A07",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4283,
    "predicted": 0.3463,
    "low": 0.1683,
    "high": 0.5243,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2454
    }
   },
   {
    "site": "DEMO-A08",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8431,
    "predicted": 0.7408,
    "low": 0.5629,
    "high": 0.9188,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8216
    }
   },
   {
    "site": "DEMO-A09",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6608,
    "predicted": 0.6559,
    "low": 0.4779,
    "high": 0.8339,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6976
    }
   },
   {
    "site": "DEMO-A10",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3988,
    "predicted": 0.5468,
    "low": 0.3688,
    "high": 0.7248,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5383
    }
   },
   {
    "site": "DEMO-A11",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3445,
    "predicted": 0.2729,
    "low": 0.0949,
    "high": 0.4508,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1382
    }
   },
   {
    "site": "DEMO-A12",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5077,
    "predicted": 0.5217,
    "low": 0.3437,
    "high": 0.6996,
    "width": 0.356,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5015
    }
   },
   {
    "site": "DEMO-B01",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4304,
    "predicted": 0.4949,
    "low": 0.3059,
    "high": 0.6839,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4484
    }
   },
   {
    "site": "DEMO-B02",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4475,
    "predicted": 0.5121,
    "low": 0.3231,
    "high": 0.7011,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4734
    }
   },
   {
    "site": "DEMO-B03",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6407,
    "predicted": 0.4728,
    "low": 0.2838,
    "high": 0.6618,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4164
    }
   },
   {
    "site": "DEMO-B04",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4813,
    "predicted": 0.5152,
    "low": 0.3262,
    "high": 0.7042,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4779
    }
   },
   {
    "site": "DEMO-B05",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2926,
    "predicted": 0.3022,
    "low": 0.1133,
    "high": 0.4912,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1687
    }
   },
   {
    "site": "DEMO-B06",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4613,
    "predicted": 0.4318,
    "low": 0.2428,
    "high": 0.6207,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3567
    }
   },
   {
    "site": "DEMO-B07",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2368,
    "predicted": 0.3468,
    "low": 0.1578,
    "high": 0.5358,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2334
    }
   },
   {
    "site": "DEMO-B08",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2755,
    "predicted": 0.2527,
    "low": 0.0637,
    "high": 0.4416,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.0967
    }
   },
   {
    "site": "DEMO-B09",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2414,
    "predicted": 0.3937,
    "low": 0.2047,
    "high": 0.5826,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3014
    }
   },
   {
    "site": "DEMO-B10",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4902,
    "predicted": 0.5424,
    "low": 0.3534,
    "high": 0.7314,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5174
    }
   },
   {
    "site": "DEMO-B11",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2158,
    "predicted": 0.3969,
    "low": 0.2079,
    "high": 0.5859,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3061
    }
   },
   {
    "site": "DEMO-B12",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4167,
    "predicted": 0.5824,
    "low": 0.3934,
    "high": 0.7714,
    "width": 0.378,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5755
    }
   },
   {
    "site": "DEMO-C01",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5476,
    "predicted": 0.5159,
    "low": 0.3455,
    "high": 0.6862,
    "width": 0.3407,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5094
    }
   },
   {
    "site": "DEMO-C02",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.657,
    "predicted": 0.5048,
    "low": 0.3345,
    "high": 0.6751,
    "width": 0.3407,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4936
    }
   },
   {
    "site": "DEMO-C03",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.9239,
    "predicted": 0.7408,
    "low": 0.5704,
    "high": 0.9111,
    "width": 0.3407,
    "state": "outside_envelope",
    "distanceOutside": 0.0128,
    "others": {
     "scaledPathogenRisk": 0.8321
    }
   },
   {
    "site": "DEMO-C04",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7077,
    "predicted": 0.7657,
    "low": 0.5954,
    "high": 0.936,
    "width": 0.3407,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8679
    }
   },
   {
    "site": "DEMO-C05",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5695,
    "predicted": 0.3862,
    "low": 0.2159,
    "high": 0.5565,
    "width": 0.3407,
    "state": "outside_envelope",
    "distanceOutside": 0.013,
    "others": {
     "scaledPathogenRisk": 0.3234
    }
   },
   {
    "site": "DEMO-C06",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2909,
    "predicted": 0.2544,
    "low": 0.0841,
    "high": 0.4248,
    "width": 0.3407,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1344
    }
   },
   {
    "site": "DEMO-C07",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3825,
    "predicted": 0.3958,
    "low": 0.2254,
    "high": 0.5661,
    "width": 0.3407,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3371
    }
   },
   {
    "site": "DEMO-C08",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3418,
    "predicted": 0.2371,
    "low": 0.0668,
    "high": 0.4075,
    "width": 0.3407,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1095
    }
   },
   {
    "site": "DEMO-C09",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4017,
    "predicted": 0.4538,
    "low": 0.2835,
    "high": 0.6242,
    "width": 0.3407,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4204
    }
   },
   {
    "site": "DEMO-C10",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5464,
    "predicted": 0.5336,
    "low": 0.3633,
    "high": 0.704,
    "width": 0.3407,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5349
    }
   },
   {
    "site": "DEMO-C11",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3737,
    "predicted": 0.3253,
    "low": 0.1549,
    "high": 0.4956,
    "width": 0.3407,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.236
    }
   },
   {
    "site": "DEMO-C12",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5689,
    "predicted": 0.5278,
    "low": 0.3575,
    "high": 0.6982,
    "width": 0.3407,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5266
    }
   },
   {
    "site": "DEMO-D01",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6404,
    "predicted": 0.5995,
    "low": 0.4359,
    "high": 0.7632,
    "width": 0.3272,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5872
    }
   },
   {
    "site": "DEMO-D02",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3652,
    "predicted": 0.4582,
    "low": 0.2946,
    "high": 0.6219,
    "width": 0.3272,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4009
    }
   },
   {
    "site": "DEMO-D03",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6334,
    "predicted": 0.3892,
    "low": 0.2256,
    "high": 0.5529,
    "width": 0.3272,
    "state": "outside_envelope",
    "distanceOutside": 0.0805,
    "others": {
     "scaledPathogenRisk": 0.31
    }
   },
   {
    "site": "DEMO-D04",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5945,
    "predicted": 0.7448,
    "low": 0.5812,
    "high": 0.9084,
    "width": 0.3272,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.7787
    }
   },
   {
    "site": "DEMO-D05",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.231,
    "predicted": 0.3087,
    "low": 0.1451,
    "high": 0.4723,
    "width": 0.3272,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2039
    }
   },
   {
    "site": "DEMO-D06",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6098,
    "predicted": 0.7816,
    "low": 0.6179,
    "high": 0.9452,
    "width": 0.3272,
    "state": "outside_envelope",
    "distanceOutside": 0.0081,
    "others": {
     "scaledPathogenRisk": 0.8271
    }
   },
   {
    "site": "DEMO-D07",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2127,
    "predicted": 0.2603,
    "low": 0.0967,
    "high": 0.4239,
    "width": 0.3272,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.14
    }
   },
   {
    "site": "DEMO-D08",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3947,
    "predicted": 0.6142,
    "low": 0.4505,
    "high": 0.7778,
    "width": 0.3272,
    "state": "outside_envelope",
    "distanceOutside": 0.0558,
    "others": {
     "scaledPathogenRisk": 0.6064
    }
   },
   {
    "site": "DEMO-D09",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8058,
    "predicted": 0.7931,
    "low": 0.6295,
    "high": 0.9567,
    "width": 0.3272,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8423
    }
   },
   {
    "site": "DEMO-D10",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3364,
    "predicted": 0.3902,
    "low": 0.2265,
    "high": 0.5538,
    "width": 0.3272,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3112
    }
   },
   {
    "site": "DEMO-D11",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.1403,
    "predicted": 0.2984,
    "low": 0.1347,
    "high": 0.462,
    "width": 0.3272,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1902
    }
   },
   {
    "site": "DEMO-D12",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5449,
    "predicted": 0.5328,
    "low": 0.3692,
    "high": 0.6964,
    "width": 0.3272,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4992
    }
   },
   {
    "site": "DEMO-E01",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.1432,
    "predicted": 0.2842,
    "low": 0.1276,
    "high": 0.4407,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1572
    }
   },
   {
    "site": "DEMO-E02",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6208,
    "predicted": 0.6555,
    "low": 0.4989,
    "high": 0.812,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.679
    }
   },
   {
    "site": "DEMO-E03",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8716,
    "predicted": 0.7251,
    "low": 0.5686,
    "high": 0.8816,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.7768
    }
   },
   {
    "site": "DEMO-E04",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5717,
    "predicted": 0.5535,
    "low": 0.397,
    "high": 0.71,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5357
    }
   },
   {
    "site": "DEMO-E05",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4851,
    "predicted": 0.5067,
    "low": 0.3502,
    "high": 0.6633,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.47
    }
   },
   {
    "site": "DEMO-E06",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5476,
    "predicted": 0.7411,
    "low": 0.5846,
    "high": 0.8977,
    "width": 0.313,
    "state": "outside_envelope",
    "distanceOutside": 0.037,
    "others": {
     "scaledPathogenRisk": 0.7993
    }
   },
   {
    "site": "DEMO-E07",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7372,
    "predicted": 0.6704,
    "low": 0.5139,
    "high": 0.8269,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6999
    }
   },
   {
    "site": "DEMO-E08",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7915,
    "predicted": 0.7531,
    "low": 0.5966,
    "high": 0.9096,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8161
    }
   },
   {
    "site": "DEMO-E09",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2935,
    "predicted": 0.2678,
    "low": 0.1113,
    "high": 0.4244,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1342
    }
   },
   {
    "site": "DEMO-E10",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3871,
    "predicted": 0.4233,
    "low": 0.2668,
    "high": 0.5798,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3527
    }
   },
   {
    "site": "DEMO-E11",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2431,
    "predicted": 0.2954,
    "low": 0.1389,
    "high": 0.4519,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.173
    }
   },
   {
    "site": "DEMO-E12",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6356,
    "predicted": 0.6571,
    "low": 0.5006,
    "high": 0.8136,
    "width": 0.313,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6813
    }
   }
  ],
  "90": [
   {
    "site": "DEMO-A01",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5061,
    "predicted": 0.6349,
    "low": 0.4362,
    "high": 0.8337,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.667
    }
   },
   {
    "site": "DEMO-A02",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3202,
    "predicted": 0.4409,
    "low": 0.2421,
    "high": 0.6397,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3836
    }
   },
   {
    "site": "DEMO-A03",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3426,
    "predicted": 0.2592,
    "low": 0.0604,
    "high": 0.458,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1182
    }
   },
   {
    "site": "DEMO-A04",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4729,
    "predicted": 0.3462,
    "low": 0.1475,
    "high": 0.545,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2453
    }
   },
   {
    "site": "DEMO-A05",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5317,
    "predicted": 0.5358,
    "low": 0.337,
    "high": 0.7345,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5221
    }
   },
   {
    "site": "DEMO-A06",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2648,
    "predicted": 0.3332,
    "low": 0.1344,
    "high": 0.5319,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2262
    }
   },
   {
    "site": "DEMO-A07",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4283,
    "predicted": 0.3463,
    "low": 0.1475,
    "high": 0.5451,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2454
    }
   },
   {
    "site": "DEMO-A08",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8431,
    "predicted": 0.7408,
    "low": 0.5421,
    "high": 0.9396,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8216
    }
   },
   {
    "site": "DEMO-A09",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6608,
    "predicted": 0.6559,
    "low": 0.4572,
    "high": 0.8547,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6976
    }
   },
   {
    "site": "DEMO-A10",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3988,
    "predicted": 0.5468,
    "low": 0.3481,
    "high": 0.7456,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5383
    }
   },
   {
    "site": "DEMO-A11",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3445,
    "predicted": 0.2729,
    "low": 0.0741,
    "high": 0.4716,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1382
    }
   },
   {
    "site": "DEMO-A12",
    "city": "Demo City A",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5077,
    "predicted": 0.5217,
    "low": 0.3229,
    "high": 0.7204,
    "width": 0.3975,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5015
    }
   },
   {
    "site": "DEMO-B01",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4304,
    "predicted": 0.4949,
    "low": 0.2859,
    "high": 0.7039,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4484
    }
   },
   {
    "site": "DEMO-B02",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4475,
    "predicted": 0.5121,
    "low": 0.3031,
    "high": 0.7211,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4734
    }
   },
   {
    "site": "DEMO-B03",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6407,
    "predicted": 0.4728,
    "low": 0.2638,
    "high": 0.6818,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4164
    }
   },
   {
    "site": "DEMO-B04",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4813,
    "predicted": 0.5152,
    "low": 0.3062,
    "high": 0.7242,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4779
    }
   },
   {
    "site": "DEMO-B05",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2926,
    "predicted": 0.3022,
    "low": 0.0932,
    "high": 0.5112,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1687
    }
   },
   {
    "site": "DEMO-B06",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4613,
    "predicted": 0.4318,
    "low": 0.2228,
    "high": 0.6407,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3567
    }
   },
   {
    "site": "DEMO-B07",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2368,
    "predicted": 0.3468,
    "low": 0.1378,
    "high": 0.5558,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2334
    }
   },
   {
    "site": "DEMO-B08",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2755,
    "predicted": 0.2527,
    "low": 0.0437,
    "high": 0.4616,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.0967
    }
   },
   {
    "site": "DEMO-B09",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2414,
    "predicted": 0.3937,
    "low": 0.1847,
    "high": 0.6027,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3014
    }
   },
   {
    "site": "DEMO-B10",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4902,
    "predicted": 0.5424,
    "low": 0.3334,
    "high": 0.7514,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5174
    }
   },
   {
    "site": "DEMO-B11",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2158,
    "predicted": 0.3969,
    "low": 0.1879,
    "high": 0.6059,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3061
    }
   },
   {
    "site": "DEMO-B12",
    "city": "Demo City B",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4167,
    "predicted": 0.5824,
    "low": 0.3734,
    "high": 0.7914,
    "width": 0.418,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5755
    }
   },
   {
    "site": "DEMO-C01",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5476,
    "predicted": 0.5159,
    "low": 0.3271,
    "high": 0.7046,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5094
    }
   },
   {
    "site": "DEMO-C02",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.657,
    "predicted": 0.5048,
    "low": 0.3161,
    "high": 0.6935,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4936
    }
   },
   {
    "site": "DEMO-C03",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.9239,
    "predicted": 0.7408,
    "low": 0.552,
    "high": 0.9295,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8321
    }
   },
   {
    "site": "DEMO-C04",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7077,
    "predicted": 0.7657,
    "low": 0.577,
    "high": 0.9544,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8679
    }
   },
   {
    "site": "DEMO-C05",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5695,
    "predicted": 0.3862,
    "low": 0.1975,
    "high": 0.5749,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3234
    }
   },
   {
    "site": "DEMO-C06",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2909,
    "predicted": 0.2544,
    "low": 0.0657,
    "high": 0.4432,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1344
    }
   },
   {
    "site": "DEMO-C07",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3825,
    "predicted": 0.3958,
    "low": 0.207,
    "high": 0.5845,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3371
    }
   },
   {
    "site": "DEMO-C08",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3418,
    "predicted": 0.2371,
    "low": 0.0484,
    "high": 0.4259,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1095
    }
   },
   {
    "site": "DEMO-C09",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4017,
    "predicted": 0.4538,
    "low": 0.2651,
    "high": 0.6426,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4204
    }
   },
   {
    "site": "DEMO-C10",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5464,
    "predicted": 0.5336,
    "low": 0.3449,
    "high": 0.7224,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5349
    }
   },
   {
    "site": "DEMO-C11",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3737,
    "predicted": 0.3253,
    "low": 0.1365,
    "high": 0.514,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.236
    }
   },
   {
    "site": "DEMO-C12",
    "city": "Demo City C",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5689,
    "predicted": 0.5278,
    "low": 0.3391,
    "high": 0.7166,
    "width": 0.3775,
    "state": "consistent",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5266
    }
   },
   {
    "site": "DEMO-D01",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6404,
    "predicted": 0.5995,
    "low": 0.3866,
    "high": 0.8125,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5872
    }
   },
   {
    "site": "DEMO-D02",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3652,
    "predicted": 0.4582,
    "low": 0.2453,
    "high": 0.6712,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4009
    }
   },
   {
    "site": "DEMO-D03",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6334,
    "predicted": 0.3892,
    "low": 0.1763,
    "high": 0.6022,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0312,
    "others": {
     "scaledPathogenRisk": 0.31
    }
   },
   {
    "site": "DEMO-D04",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5945,
    "predicted": 0.7448,
    "low": 0.5319,
    "high": 0.9578,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.7787
    }
   },
   {
    "site": "DEMO-D05",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.231,
    "predicted": 0.3087,
    "low": 0.0958,
    "high": 0.5217,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.2039
    }
   },
   {
    "site": "DEMO-D06",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6098,
    "predicted": 0.7816,
    "low": 0.5686,
    "high": 0.9945,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8271
    }
   },
   {
    "site": "DEMO-D07",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2127,
    "predicted": 0.2603,
    "low": 0.0474,
    "high": 0.4732,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.14
    }
   },
   {
    "site": "DEMO-D08",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3947,
    "predicted": 0.6142,
    "low": 0.4012,
    "high": 0.8271,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0065,
    "others": {
     "scaledPathogenRisk": 0.6064
    }
   },
   {
    "site": "DEMO-D09",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8058,
    "predicted": 0.7931,
    "low": 0.5802,
    "high": 1.0,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8423
    }
   },
   {
    "site": "DEMO-D10",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3364,
    "predicted": 0.3902,
    "low": 0.1772,
    "high": 0.6031,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3112
    }
   },
   {
    "site": "DEMO-D11",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.1403,
    "predicted": 0.2984,
    "low": 0.0854,
    "high": 0.5113,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1902
    }
   },
   {
    "site": "DEMO-D12",
    "city": "Demo City D",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5449,
    "predicted": 0.5328,
    "low": 0.3199,
    "high": 0.7457,
    "width": 0.4259,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.4992
    }
   },
   {
    "site": "DEMO-E01",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.1432,
    "predicted": 0.2842,
    "low": 0.075,
    "high": 0.4933,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1572
    }
   },
   {
    "site": "DEMO-E02",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6208,
    "predicted": 0.6555,
    "low": 0.4463,
    "high": 0.8646,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.679
    }
   },
   {
    "site": "DEMO-E03",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.8716,
    "predicted": 0.7251,
    "low": 0.5159,
    "high": 0.9342,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.7768
    }
   },
   {
    "site": "DEMO-E04",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5717,
    "predicted": 0.5535,
    "low": 0.3444,
    "high": 0.7626,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.5357
    }
   },
   {
    "site": "DEMO-E05",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.4851,
    "predicted": 0.5067,
    "low": 0.2976,
    "high": 0.7159,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.47
    }
   },
   {
    "site": "DEMO-E06",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.5476,
    "predicted": 0.7411,
    "low": 0.532,
    "high": 0.9503,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.7993
    }
   },
   {
    "site": "DEMO-E07",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7372,
    "predicted": 0.6704,
    "low": 0.4613,
    "high": 0.8795,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6999
    }
   },
   {
    "site": "DEMO-E08",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.7915,
    "predicted": 0.7531,
    "low": 0.544,
    "high": 0.9622,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.8161
    }
   },
   {
    "site": "DEMO-E09",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2935,
    "predicted": 0.2678,
    "low": 0.0587,
    "high": 0.477,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.1342
    }
   },
   {
    "site": "DEMO-E10",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.3871,
    "predicted": 0.4233,
    "low": 0.2141,
    "high": 0.6324,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.3527
    }
   },
   {
    "site": "DEMO-E11",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.2431,
    "predicted": 0.2954,
    "low": 0.0863,
    "high": 0.5045,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.173
    }
   },
   {
    "site": "DEMO-E12",
    "city": "Demo City E",
    "target": "scaledFecalRisk",
    "predictor": "scaledPathogenRisk",
    "observed": 0.6356,
    "predicted": 0.6571,
    "low": 0.448,
    "high": 0.8662,
    "width": 0.4183,
    "state": "insufficient_evidence",
    "distanceOutside": 0.0,
    "others": {
     "scaledPathogenRisk": 0.6813
    }
   }
  ]
 }
};
