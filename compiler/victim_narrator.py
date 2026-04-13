#!/usr/bin/env python3
"""
victim_narrator.py — Victim-perspective narrative builder.

Absorbs Aurora v1 VictimNarrative agent role.

Reads wiki/claims/*.md, identifies sincerity-axis claims ([진실성]),
victim references (한지훈), and harm-related claimTypes to build
a structured victim narrative index.
"""

from __future__ import annotations

import json
import re
import sys
from collections import defaultdict
from pathlib import Path

_PAT_LAYER = re.compile(r"layer-(\d)", re.IGNORECASE)
_PAT_CT = re.compile(r'fr\.claimType\s*=\s*"([^"]+)"')
_PAT_CST = re.compile(r'fr\.claimSubtype\s*=\s*"([^"]+)"')
_PAT_V = re.compile(r'fr\.verdict\s*=\s*"([^"]+)"')
_PAT_S = re.compile(r'fr\.strength\s*=\s*"([^"]+)"')
_PAT_T = re.compile(r"fr\.truthfulness\s*=\s*(\d+)")
_PAT_VA = re.compile(r"fr\.validity\s*=\s*(\d+)")
_PAT_SI = re.compile(r"fr\.sincerity\s*=\s*(\d+)")
_PAT_TITLE = re.compile(r"^#\s+(.+)$", re.MULTILINE)
_PAT_CLAIM = re.compile(r"^\*\*Claim:\*\*\s*(.+)$", re.MULTILINE)
_PAT_ISO_DATE = re.compile(r"\b(\d{4}-\d{2}-\d{2})\b")
_PAT_SINCERITY_TAG = re.compile(r"\[진실성\]")

# Harm-related claimTypes
HARM_TYPES = {
    "human_rights_violation", "prosecution_misconduct", "attorney_misconduct",
    "witness_manipulation", "institutional_obstruction",
}

# Institutional names (canonical → patterns)
INSTITUTIONS = {
    "MND (국방부)": ["국방부", "MND", "Ministry of National Defense"],
    "DCIA (국전원)": ["국전원", "DCIA", "국방전산정보원", "Defense Computer"],
    "DIDC (통데센)": ["DIDC", "통합데이터센터", "통데센", "데이터센터"],
    "군검찰단": ["군검찰", "군 검찰", "검찰단", "Military Prosecutor"],
    "조사본부": ["조사본부", "Investigation Bureau", "감찰"],
}


def _extract_claim(text: str) -> str:
    m = _PAT_CLAIM.search(text)
    if m:
        return m.group(1).strip()[:200]
    m2 = _PAT_TITLE.search(text)
    if m2:
        return m2.group(1).strip()[:200]
    return "(no claim)"


def _find_institutions(text: str) -> list[str]:
    found = []
    for canonical, patterns in INSTITUTIONS.items():
        for pat in patterns:
            if pat in text:
                found.append(canonical)
                break
    return found


def _parse_atom(path: Path) -> dict | None:
    text = path.read_text(encoding="utf-8")

    # Check relevance: sincerity tag, victim reference, or harm claimType
    has_sincerity = bool(_PAT_SINCERITY_TAG.search(text))
    has_victim_ref = "한지훈" in text
    ct_match = _PAT_CT.search(text)
    claim_type = ct_match.group(1) if ct_match else ""
    is_harm_type = claim_type in HARM_TYPES

    if not (has_sincerity or has_victim_ref or is_harm_type):
        return None

    # Layer
    layer_match = re.search(r"^\*\*Layer:\*\*(.+)$", text, re.MULTILINE)
    layers = [int(m.group(1)) for m in _PAT_LAYER.finditer(
        layer_match.group(1) if layer_match else ""
    )]

    # Scores
    t = int(m.group(1)) if (m := _PAT_T.search(text)) else None
    va = int(m.group(1)) if (m := _PAT_VA.search(text)) else None
    si = int(m.group(1)) if (m := _PAT_SI.search(text)) else None

    # Other fields
    cst_match = _PAT_CST.search(text)
    v_match = _PAT_V.search(text)
    s_match = _PAT_S.search(text)

    # Dates
    dates = sorted(set(_PAT_ISO_DATE.findall(text)))
    primary_date = None
    for d in dates:
        year = int(d[:4])
        if 2010 <= year <= 2026:
            primary_date = d
            break

    # Institutions
    institutions = _find_institutions(text)

    # Count sincerity-tagged lines in Key Takeaways
    sincerity_lines = []
    in_kt = False
    for line in text.split("\n"):
        if line.strip().startswith("## Key Takeaways"):
            in_kt = True
            continue
        if in_kt and line.strip().startswith("## "):
            break
        if in_kt and "[진실성]" in line:
            sincerity_lines.append(line.strip().lstrip("- "))

    return {
        "file": path.name,
        "title": _PAT_TITLE.search(text).group(1).strip() if _PAT_TITLE.search(text) else path.stem,
        "claim": _extract_claim(text),
        "layer": layers[0] if layers else 0,
        "claim_type": claim_type,
        "claim_subtype": cst_match.group(1) if cst_match else "",
        "verdict": v_match.group(1) if v_match else "UNKNOWN",
        "strength": s_match.group(1) if s_match else "UNKNOWN",
        "truthfulness": t,
        "validity": va,
        "sincerity": si,
        "has_sincerity_tag": has_sincerity,
        "has_victim_ref": has_victim_ref,
        "is_harm_type": is_harm_type,
        "sincerity_lines": sincerity_lines,
        "primary_date": primary_date,
        "institutions": institutions,
    }


def build_victim_narrative(wiki_dir: str) -> dict:
    claims_dir = Path(wiki_dir) / "claims"
    if not claims_dir.is_dir():
        raise FileNotFoundError(f"Claims directory not found: {claims_dir}")

    victim_claims = []
    total_atoms = 0
    for path in sorted(claims_dir.glob("*.md")):
        if path.name == "_index.md":
            continue
        total_atoms += 1
        try:
            result = _parse_atom(path)
            if result:
                victim_claims.append(result)
        except Exception:
            pass

    # Harm timeline (sorted by date)
    harm_timeline = sorted(
        [c for c in victim_claims if c["primary_date"]],
        key=lambda x: x["primary_date"],
    )

    # Institutional failures
    inst_map = defaultdict(list)
    for c in victim_claims:
        for inst in c["institutions"]:
            inst_map[inst].append(c["file"])

    # Per-layer distribution
    layer_dist = defaultdict(int)
    for c in victim_claims:
        layer_dist[c["layer"]] += 1

    # Verdict distribution
    verdict_dist = defaultdict(int)
    for c in victim_claims:
        verdict_dist[c["verdict"]] += 1

    # Average sincerity score
    si_scores = [c["sincerity"] for c in victim_claims if c["sincerity"] is not None]
    avg_sincerity = round(sum(si_scores) / len(si_scores), 1) if si_scores else 0

    # Sincerity tag count
    sincerity_tagged = sum(1 for c in victim_claims if c["has_sincerity_tag"])
    victim_ref_count = sum(1 for c in victim_claims if c["has_victim_ref"])

    return {
        "victim_claims": victim_claims,
        "harm_timeline": harm_timeline,
        "institutional_failures": dict(inst_map),
        "summary": {
            "total_atoms": total_atoms,
            "victim_claims": len(victim_claims),
            "sincerity_tagged": sincerity_tagged,
            "victim_ref_count": victim_ref_count,
            "per_layer": dict(sorted(layer_dist.items())),
            "per_verdict": dict(sorted(verdict_dist.items())),
            "per_institution": {k: len(v) for k, v in sorted(inst_map.items())},
            "avg_sincerity_score": avg_sincerity,
        },
    }


if __name__ == "__main__":
    wiki_dir = sys.argv[1] if len(sys.argv) > 1 else str(
        Path(__file__).resolve().parent.parent / "wiki"
    )
    report = build_victim_narrative(wiki_dir)
    s = report["summary"]
    print(f"Victim Narrative: {s['victim_claims']}/{s['total_atoms']} atoms relevant")
    print(f"  Sincerity-tagged: {s['sincerity_tagged']}")
    print(f"  한지훈 referenced: {s['victim_ref_count']}")
    print(f"  Avg sincerity score: {s['avg_sincerity_score']}")

    print(f"\nPer-layer:")
    for layer, count in sorted(s["per_layer"].items()):
        print(f"  L{layer}: {count}")

    print(f"\nPer-institution:")
    for inst, count in sorted(s["per_institution"].items()):
        print(f"  {inst}: {count}")

    print(f"\nVerdict distribution:")
    for v, c in sorted(s["per_verdict"].items()):
        print(f"  {v}: {c}")

    out = Path(__file__).resolve().parent.parent / "output" / "victim-narrative.json"
    json.dump(report, open(out, "w"), ensure_ascii=False, indent=2)
    print(f"\nFull report: {out}")
