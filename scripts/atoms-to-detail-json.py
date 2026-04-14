#!/usr/bin/env python3
"""
atoms-to-detail-json.py — build detail.json for Aurora v2 CP-2 UI.

Extracts full body content from each wiki/claims/*.md atom:
  - claim text, key takeaways, supporting evidence, counter-hypothesis,
    falsification condition, verdict prose, spot-check, related links.

Output is keyed by resultId for O(1) lookup when the UI opens an atom detail view.
graph.json (from atoms-to-graph-json.py) remains the navigation/summary layer;
detail.json is the content layer, lazy-loaded by the UI.

Output:
    output/detail.json        — full atom body content for UI
    ui/src/assets/detail.json — copy for Angular assets

Usage:
    python3 scripts/atoms-to-detail-json.py
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
CLAIMS_DIR = REPO_ROOT / "wiki" / "claims"
OUTPUT_DETAIL = REPO_ROOT / "output" / "detail.json"
UI_ASSETS_DETAIL = REPO_ROOT / "ui" / "src" / "assets" / "detail.json"

# ── Regex ────────────────────────────────────────────────────────────

PAT_RID = re.compile(r'resultId:\s*"([^"]+)"')
PAT_TITLE = re.compile(r"^#\s+(.+)$", re.MULTILINE)
PAT_SOURCE = re.compile(r"^\*\*Source:\*\*\s*(.+)$", re.MULTILINE)
PAT_LAYER = re.compile(r"\*\*Layer:\*\*.*?[Ll]ayer\s*(\d)")
PAT_RECORD = re.compile(r"Record\s+No\.\s*([\d,]+)")
PAT_LID = re.compile(r"\bL(\d)-(\d{3})\b")
PAT_REL = re.compile(r"- \[\[([^\]|]+)(?:\|([^\]]+))?\]\].*?\(([A-Z_]+)\)\s*$")


def _extract_section(body: str, heading: str) -> str:
    """Extract text under a ## heading until next ## or EOF."""
    pat = re.compile(rf"^## {re.escape(heading)}\s*\n", re.MULTILINE)
    m = pat.search(body)
    if not m:
        return ""
    start = m.end()
    # Find next ## heading
    next_h = re.search(r"^## ", body[start:], re.MULTILINE)
    end = start + next_h.start() if next_h else len(body)
    return body[start:end].strip()


def _extract_evidence_ids(text: str) -> list[dict]:
    """Extract Record No. and L{N}-NNN citations from supporting evidence."""
    items = []
    for line in text.split("\n"):
        line = line.strip()
        if not line.startswith("- "):
            continue
        entry: dict = {"raw": line[2:].strip()}
        recs = PAT_RECORD.findall(line)
        if recs:
            entry["recordNos"] = [r.replace(",", "") for r in recs]
        lids = PAT_LID.findall(line)
        if lids:
            entry["layerIds"] = [f"L{l}-{n}" for l, n in lids]
        items.append(entry)
    return items


def _extract_takeaways(text: str) -> list[dict]:
    """Parse key takeaways with truth-axis tags."""
    items = []
    for line in text.split("\n"):
        line = line.strip()
        if not line.startswith("- "):
            continue
        bullet = line[2:].strip()
        axes = []
        for tag in ("진리성", "타당성", "진실성"):
            if f"[{tag}]" in bullet:
                axes.append(tag)
        items.append({"text": bullet, "axes": axes})
    return items


def _extract_related(text: str) -> list[dict]:
    """Parse ## Related links with relationship types."""
    items = []
    for line in text.split("\n"):
        m = PAT_REL.match(line.strip())
        if not m:
            continue
        target_path = m.group(1)
        display = m.group(2) or target_path.split("/")[-1]
        rel_type = m.group(3)
        # Extract just the slug (last path segment)
        slug = target_path.split("/")[-1]
        items.append({
            "slug": slug,
            "display": display,
            "type": rel_type,
        })
    return items


def main() -> int:
    if not CLAIMS_DIR.exists():
        print(f"[error] claims dir not found: {CLAIMS_DIR}", file=sys.stderr)
        return 1

    details: dict[str, dict] = {}

    for path in sorted(CLAIMS_DIR.glob("*.md")):
        if path.name.startswith("_"):
            continue
        body = path.read_text(encoding="utf-8")

        # ── YAML frontmatter (preferred) ──────────────────────────
        fm = None
        if body.startswith("---\n"):
            try:
                fm_end_pos = body.index("---", 4)
                fm = yaml.safe_load(body[4:fm_end_pos])
            except Exception:
                fm = None

        if fm:
            result_id = fm.get("aliases", [""])[0] if fm.get("aliases") else ""
            if not result_id:
                result_id_m = PAT_RID.search(body)
                result_id = result_id_m.group(1) if result_id_m else ""
            title = fm.get("title-ko") or fm.get("title-en") or path.stem
            source_m = PAT_SOURCE.search(body)
            source = source_m.group(1) if source_m else ""
            layer = fm.get("layer", 0)
            persons = fm.get("persons", [])
            organizations = fm.get("organizations", [])
            fracture_type = fm.get("fracture-type")
            if fracture_type == "null" or fracture_type is None:
                fracture_type = None
            source_type = fm.get("source-type", "unknown")
        else:
            result_id_m = PAT_RID.search(body)
            if not result_id_m:
                continue
            result_id = result_id_m.group(1)
            title_m = PAT_TITLE.search(body)
            title = title_m.group(1) if title_m else path.stem
            source_m = PAT_SOURCE.search(body)
            source = source_m.group(1) if source_m else ""
            layer_m = PAT_LAYER.search(body)
            layer = int(layer_m.group(1)) if layer_m else 0
            persons = []
            organizations = []
            fracture_type = None
            source_type = "unknown"

        if not result_id:
            continue

        # Extract all sections
        claim = _extract_section(body, "Claim")
        takeaways_raw = _extract_section(body, "Key Takeaways")
        evidence_raw = _extract_section(body, "Supporting evidence")
        counter = _extract_section(body, "Counter-hypothesis")
        falsification = _extract_section(body, "Falsification condition")
        verdict_prose = _extract_section(body, "Verdict")
        spot_check = _extract_section(body, "Spot-check")
        related_raw = _extract_section(body, "Related")

        # Parse structured data
        takeaways = _extract_takeaways(takeaways_raw)
        evidence = _extract_evidence_ids(evidence_raw)
        related = _extract_related(related_raw)

        # Collect all Record Nos from body
        all_records = sorted(set(
            r.replace(",", "") for r in PAT_RECORD.findall(body)
        ))

        details[result_id] = {
            "id": result_id,
            "stem": path.stem,
            "title": title,
            "source": source,
            "layer": layer,
            "claim": claim,
            "keyTakeaways": takeaways,
            "supportingEvidence": evidence,
            "counterHypothesis": counter,
            "falsificationCondition": falsification,
            "verdictProse": verdict_prose,
            "spotCheck": spot_check,
            "related": related,
            "allRecordNos": all_records,
            "persons": persons or [],
            "organizations": organizations or [],
            "fractureType": fracture_type,
            "sourceType": source_type,
        }

    # ── Output ────────────────────────────────────────────────────────

    output = {
        "_meta": {
            "generator": "scripts/atoms-to-detail-json.py",
            "atomCount": len(details),
        },
        "atoms": details,
    }

    OUTPUT_DETAIL.parent.mkdir(parents=True, exist_ok=True)
    out_text = json.dumps(output, indent=2, ensure_ascii=False) + "\n"

    OUTPUT_DETAIL.write_text(out_text, encoding="utf-8")

    # Also copy to UI assets
    if UI_ASSETS_DETAIL.parent.exists():
        UI_ASSETS_DETAIL.write_text(out_text, encoding="utf-8")
        print(f"[ok] wrote {UI_ASSETS_DETAIL}")

    print(f"[ok] wrote {OUTPUT_DETAIL}")
    print(f"     atoms={len(details)}")

    # Quick stats
    has_claim = sum(1 for d in details.values() if d["claim"])
    has_evidence = sum(1 for d in details.values() if d["supportingEvidence"])
    has_counter = sum(1 for d in details.values() if d["counterHypothesis"])
    total_records = sum(len(d["allRecordNos"]) for d in details.values())
    print(f"     with_claim={has_claim}, with_evidence={has_evidence}, with_counter={has_counter}")
    print(f"     total_record_nos={total_records}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
