"""Rebuild the offline demo exclusively from the synthetic fixture."""

from .synthetic import write


def main() -> None:
    path = write()
    print(f"Wrote synthetic demo: {path}")


if __name__ == "__main__":
    main()
