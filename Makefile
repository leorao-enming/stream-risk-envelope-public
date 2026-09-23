.PHONY: all test acceptance serve

all:
	uv run --locked python -m src.sre.build

test:
	uv run --locked pytest -q

acceptance:
	uv run --locked python scripts/acceptance.py

serve:
	uv run --locked python -m http.server 8765 --directory web
