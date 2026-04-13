#!/usr/bin/env python3
"""
timeline_auditor.py — Chronological event spine builder.

Absorbs Aurora v1 TimelineBuilder agent role.

Reads wiki/claims/*.md, extracts dates, builds timeline, detects gaps/clusters.
"""

from __future__ import annotations

import json
import re
import sys
from datetime import datetime, timedelta
from pathlib import Path
from collections import defaultdict

_PAT_ISO = re.compile(r"\b(\d{4}-\d{2}-\d{2})\b")
_PAT_KR = re.compile(r"(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일")
_PAT_KR_YM = re.compile(r"(\d{4})년\s*(\d{1,2})월(?!\s*\d)")
_PAT_PAREN = re.compile(r"\((\d{8})\)")
_PAT_LAYER = re.compile(r"layer-(\d)", re.IGNORECASE)
_PAT_VERDICT = re.compile(r'fr\.verdict\s*=\s*"([^"]+)"')
_PAT_CLAIM = re.compile(r"^\*\*Claim:\*\*\s*(.+)$", re.MULTILINE)
_PAT_CLAIM_H2 = re.compile(r"^##\s+Claim\s*$", re.MULTILINE)
_PAT_TITLE = re.compile(r"^#\s+(.+)$", re.MULTILINE)


def _extract_dates(text: str) -> list[str]:
    dates = set()
    for m in _PAT_ISO.finditer(text):
        dates.add(m.group(1))
    for m in _PAT_KR.finditer(text):
        dates.add(f"{m.group(1)}-{int(m.group(2)):02d}-{int(m.group(3)):02d}")
    for m in _PAT_PAREN.finditer(text):
        d = m.group(1)
        dates.add(f"{d[:4]}-{d[4:6]}-{d[6:8]}")
    return sorted(dates)


def _pick_primary_date(dates: list[str]) -> str | None:
    valid = []
    for d in dates:
        try:
            dt = datetime.strptime(d, "%Y-%m-%d")
            if 2010 <= dt.year <= 2026:
                valid.append(d)
        except ValueError:
            pass
    return min(valid) if valid else None


def _extract_claim(text: str) -> str:
    m = _PAT_CLAIM.search(text)
    if m:
        return m.group(1).strip()[:200]
    m2 = _PAT_CLAIM_H2.search(text)
    if m2:
        lines = text[m2.end():].strip().split("\n")
        for line in lines:
            line = line.strip()
            if line and not line.startswith("#"):
                return line[:200]
    m3 = _PAT_TITLE.search(text)
    if m3:
        return m3.group(1).strip()[:200]
    return "(no claim text)"


def _parse_atom(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    dates = _extract_dates(text)
    primary = _pick_primary_date(dates)

    layer_match = re.search(r"^\*\*Layer:\*\*(.+)$", text, re.MULTILINE)
    layers = [int(m.group(1)) for m in _PAT_LAYER.finditer(
        layer_match.group(1) if layer_match else ""
    )]

    verdict_match = _PAT_VERDICT.search(text)
    verdict = verdict_match.group(1) if verdict_match else "UNKNOWN"

    return {
        "file": path.name,
        "primary_date": primary,
        "all_dates": dates,
        "claim": _extract_claim(text),
        "layer": layers[0] if layers else 0,
        "verdict": verdict,
    }


def _detect_gaps(events: list[dict], threshold_days: int = 183) -> list[dict]:
    by_layer = defaultdict(list)
    for e in events:
        if e["primary_date"] and e["layer"]:
            by_layer[e["layer"]].append(e)

    gaps = []
    for layer, items in sorted(by_layer.items()):
        items.sort(key=lambda x: x["primary_date"])
        for i in range(len(items) - 1):
            d1 = datetime.strptime(items[i]["primary_date"], "%Y-%m-%d")
            d2 = datetime.strptime(items[i + 1]["primary_date"], "%Y-%m-%d")
            delta = (d2 - d1).days
            if delta > threshold_days:
                gaps.append({
                    "layer": layer,
                    "from_date": items[i]["primary_date"],
                    "to_date": items[i + 1]["primary_date"],
                    "days": delta,
                    "from_file": items[i]["file"],
                    "to_file": items[i + 1]["file"],
                })
    return gaps


def _detect_clusters(events: list[dict], window_days: int = 30, min_events: int = 3) -> list[dict]:
    dated = sorted(
        [e for e in events if e["primary_date"]],
        key=lambda x: x["primary_date"],
    )
    clusters = []
    i = 0
    while i < len(dated):
        d_start = datetime.strptime(dated[i]["primary_date"], "%Y-%m-%d")
        group = [dated[i]]
        j = i + 1
        while j < len(dated):
            d_j = datetime.strptime(dated[j]["primary_date"], "%Y-%m-%d")
            if (d_j - d_start).days <= window_days:
                group.append(dated[j])
                j += 1
            else:
                break
        if len(group) >= min_events:
            layers_in = sorted(set(e["layer"] for e in group if e["layer"]))
            clusters.append({
                "start_date": group[0]["primary_date"],
                "end_date": group[-1]["primary_date"],
                "event_count": len(group),
                "layers": layers_in,
                "files": [e["file"] for e in group],
            })
            i = j
        else:
            i += 1
    return clusters


def build_timeline(wiki_dir: str) -> dict:
    claims_dir = Path(wiki_dir) / "claims"
    if not claims_dir.is_dir():
        raise FileNotFoundError(f"Claims directory not found: {claims_dir}")

    events = []
    for path in sorted(claims_dir.glob("*.md")):
        if path.name == "_index.md":
            continue
        try:
            events.append(_parse_atom(path))
        except Exception as exc:
            events.append({
                "file": path.name, "primary_date": None, "all_dates": [],
                "claim": f"parse error: {exc}", "layer": 0, "verdict": "UNKNOWN",
            })

    dated = [e for e in events if e["primary_date"]]
    undated = [e for e in events if not e["primary_date"]]
    timeline = sorted(dated, key=lambda x: x["primary_date"])

    all_dates = [e["primary_date"] for e in timeline]
    gaps = _detect_gaps(events)
    clusters = _detect_clusters(events)

    return {
        "timeline": timeline,
        "gaps": gaps,
        "clusters": clusters,
        "date_range": {
            "earliest": min(all_dates) if all_dates else None,
            "latest": max(all_dates) if all_dates else None,
        },
        "stats": {
            "total_atoms": len(events),
            "dated_events": len(dated),
            "undated_atoms": len(undated),
            "gap_count": len(gaps),
            "cluster_count": len(clusters),
        },
        "undated": [{"file": e["file"], "claim": e["claim"]} for e in undated],
    }


if __name__ == "__main__":
    wiki_dir = sys.argv[1] if len(sys.argv) > 1 else str(
        Path(__file__).resolve().parent.parent / "wiki"
    )
    report = build_timeline(wiki_dir)
    s = report["stats"]
    print(f"Timeline Audit: {s['total_atoms']} atoms | "
          f"Dated: {s['dated_events']} | Undated: {s['undated_atoms']}")
    print(f"Date range: {report['date_range']['earliest']} → {report['date_range']['latest']}")
    print(f"Gaps (>6mo): {s['gap_count']} | Clusters (3+ in 30d): {s['cluster_count']}")

    if report["clusters"]:
        print("\nClusters (possible coordinated activity):")
        for c in report["clusters"][:5]:
            print(f"  {c['start_date']}~{c['end_date']}: "
                  f"{c['event_count']} events, L{c['layers']}")

    out = Path(__file__).resolve().parent.parent / "output" / "timeline-audit.json"
    json.dump(report, open(out, "w"), ensure_ascii=False, indent=2)
    print(f"\nFull report: {out}")
