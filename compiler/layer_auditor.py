#!/usr/bin/env python3
"""
layer_auditor.py — Layer↔Record No. consistency checker.

Absorbs Aurora v1 LayerAnalyst agent role.

For every claim atom in wiki/claims/*.md:
  1. Extract claimed layer(s) from **Layer:** line
  2. Extract every Record No. NNNNN citation
  3. Resolve each to canonical layer via defined ranges
  4. Compare and emit verdict: PASS / MISMATCH / WARNING
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

LAYER_RANGES: dict[int, tuple[int, int]] = {
    1: (1, 810),
    2: (1000, 1587),
    3: (1600, 2465),
    4: (2500, 3699),
    5: (3700, 4555),
    6: (4600, 5248),
    7: (5300, 13495),
}

_PAT_LAYER_NUM = re.compile(r"layer-(\d)", re.IGNORECASE)
_PAT_RECORD = re.compile(
    r"(?:Record\s+No\.\s*|기록\s+제)([\d,]+)(?:쪽)?",
    re.IGNORECASE,
)


def _record_to_layer(record_no: int) -> int | None:
    for layer, (lo, hi) in LAYER_RANGES.items():
        if lo <= record_no <= hi:
            return layer
    return None


def _extract_claimed_layers(text: str) -> list[int]:
    layer_match = re.search(r"^\*\*Layer:\*\*(.+)$", text, re.MULTILINE)
    if not layer_match:
        return []
    return [int(m.group(1)) for m in _PAT_LAYER_NUM.finditer(layer_match.group(1))]


def _extract_record_numbers(text: str) -> list[int]:
    seen: set[int] = set()
    for m in _PAT_RECORD.finditer(text):
        try:
            seen.add(int(m.group(1).replace(",", "")))
        except ValueError:
            pass
    return sorted(seen)


def _audit_file(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    claimed = _extract_claimed_layers(text)
    records = _extract_record_numbers(text)

    expected_map = {rec: _record_to_layer(rec) for rec in records}
    expected = sorted({lyr for lyr in expected_map.values() if lyr is not None})
    unknown = [rec for rec, lyr in expected_map.items() if lyr is None]

    if not records:
        verdict, reason = "WARNING", "no Record No. citations found"
    elif unknown:
        verdict = "WARNING"
        reason = f"record(s) outside ranges: {', '.join(f'{r:,}' for r in unknown)}"
    else:
        claimed_set = set(claimed)
        mismatched = [
            (rec, lyr) for rec, lyr in expected_map.items()
            if lyr is not None and lyr not in claimed_set
        ]
        if mismatched:
            verdict = "MISMATCH"
            reason = "; ".join(
                f"Record No. {rec:,} → L{lyr} (not claimed)"
                for rec, lyr in sorted(mismatched)
            )
        else:
            verdict, reason = "PASS", "all Record Nos. consistent"

    return {
        "file": path.name,
        "claimed_layers": claimed,
        "record_numbers": records,
        "expected_layers": expected,
        "verdict": verdict,
        "reason": reason,
    }


def audit(wiki_dir: str) -> dict:
    claims_dir = Path(wiki_dir) / "claims"
    if not claims_dir.is_dir():
        raise FileNotFoundError(f"Claims directory not found: {claims_dir}")

    results = []
    for path in sorted(claims_dir.glob("*.md")):
        if path.name == "_index.md":
            continue
        try:
            results.append(_audit_file(path))
        except Exception as exc:
            results.append({
                "file": path.name, "claimed_layers": [], "record_numbers": [],
                "expected_layers": [], "verdict": "WARNING",
                "reason": f"parse error: {exc}",
            })

    s = {
        "total_files": len(results),
        "pass_count": sum(1 for r in results if r["verdict"] == "PASS"),
        "mismatch_count": sum(1 for r in results if r["verdict"] == "MISMATCH"),
        "warning_count": sum(1 for r in results if r["verdict"] == "WARNING"),
    }
    return {"files": results, "summary": s}


if __name__ == "__main__":
    wiki_dir = sys.argv[1] if len(sys.argv) > 1 else str(
        Path(__file__).resolve().parent.parent / "wiki"
    )
    report = audit(wiki_dir)
    s = report["summary"]
    print(f"Layer Audit: {s['total_files']} atoms | "
          f"PASS: {s['pass_count']} | MISMATCH: {s['mismatch_count']} | "
          f"WARNING: {s['warning_count']}")
    if s["mismatch_count"]:
        print("\nMismatches:")
        for r in report["files"]:
            if r["verdict"] == "MISMATCH":
                print(f"  {r['file']}: {r['reason']}")
    json.dump(report, open(
        Path(__file__).resolve().parent.parent / "output" / "layer-audit.json", "w"
    ), ensure_ascii=False, indent=2)
    print(f"\nFull report: output/layer-audit.json")
    sys.exit(1 if s["mismatch_count"] > 0 else 0)
