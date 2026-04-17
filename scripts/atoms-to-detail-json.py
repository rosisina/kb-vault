#!/usr/bin/env python3
"""
atoms-to-detail-json.py — build detail.json for Aurora v2 CP-2 UI.

Extracts full body content from each wiki/claims/*.md atom:
  - claim text (ko/en split), key takeaways, supporting evidence,
    counter-hypothesis, falsification condition, verdict prose,
    spot-check, related links.

B-option bilingual fields added:
  - claim_ko / claim_en  — from ### 한국어 / ### English subsections
  - keyTakeaways_en      — English part of bilingual bullets (split on " / ") + term_sub
  - falsificationCondition_en / verdictProse_en / counterHypothesis_en
    → term_sub applied; empty string for purely Korean prose (Phase 2 fills these)

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

# ── Glossary term substitution (KO → EN) ─────────────────────────────

_GLOSSARY = [
    ("[진리성]", "[Truthfulness]"),
    ("[타당성]", "[Validity]"),
    ("[진실성]", "[Sincerity]"),
    ("진리성", "Truthfulness"),
    ("타당성", "Validity"),
    ("진실성", "Sincerity"),
    ("전력화", "operational deployment"),
    ("기소유예", "Prosecutorial Deferral"),
    ("사업통제기관", "project control authority"),
    ("국방정보화업무훈령", "Defense IT Operations Directive"),
    ("국전원", "Defense Information Agency"),
    ("군 검찰단", "Military Prosecutor's Office"),
    ("조사본부", "Defense Counterintelligence Agency"),
    ("국방부", "Ministry of National Defense"),
    ("무혐의", "No Probable Cause"),
    ("불기소", "Non-indictment"),
    ("新KIATIS", "New KIATIS"),
    ("신KIATIS", "New KIATIS"),
    ("舊KIATIS", "Legacy KIATIS"),
    ("구KIATIS", "Legacy KIATIS"),
    ("국방망", "defense intranet"),
    ("공문결재자-1", "Document-Approver-1"),
    ("2016해킹당시원장-1", "Director-During-2016-Hack-1"),
    ("공모자-1", "Conspirator-1"),
    ("사업실무자-1", "Project-Officer-1"),
    ("평가위원장-1", "Evaluation-Chair-1"),
]

_KO_CHAR = re.compile(r"[가-힣]")
# Score pattern: 진리성 N / 타당성 N / 진실성 N  (in verdict prose)
_SCORE_PAT = re.compile(r"진리성\s*(\d+)\s*/\s*타당성\s*(\d+)\s*/\s*진실성\s*(\d+)")
# Parenthesised score: 진리성 N (note), 타당성 N (note), 진실성 N (note)
_SCORE_PAT2 = re.compile(
    r"진리성\s*(\d+)\s*\(([^)]*)\)[,，]?\s*타당성\s*(\d+)\s*\(([^)]*)\)[,，]?\s*진실성\s*(\d+)\s*\(([^)]*)\)"
)


def _term_sub(text: str) -> str:
    # Score pattern substitutions first (before individual term subs)
    text = _SCORE_PAT.sub(
        lambda m: f"Truthfulness {m.group(1)} / Validity {m.group(2)} / Sincerity {m.group(3)}", text
    )
    text = _SCORE_PAT2.sub(
        lambda m: (
            f"Truthfulness {m.group(1)} ({m.group(2)}), "
            f"Validity {m.group(3)} ({m.group(4)}), "
            f"Sincerity {m.group(5)} ({m.group(6)})"
        ),
        text,
    )
    for ko, en in _GLOSSARY:
        text = text.replace(ko, en)
    return text


def _is_mostly_korean(text: str, threshold: float = 0.40) -> bool:
    """Return True if Korean chars make up more than `threshold` fraction of alpha chars."""
    alpha = sum(1 for c in text if c.isalpha())
    if alpha == 0:
        return False
    return len(_KO_CHAR.findall(text)) / alpha > threshold


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
    """Extract text under a ## heading until next ## or EOF.

    Accepts both legacy English headers (e.g. '## Key Takeaways') and
    new bilingual Korean-first headers (e.g. '## 핵심 요약 (Key Takeaways)').
    Korean variant is tried first; falls back to English-only form.
    """
    # New bilingual format: ## 한글 (English) — match any prefix before "(heading)"
    pat_ko = re.compile(
        rf"^## [^(\n]+\({re.escape(heading)}\)\s*\n", re.MULTILINE | re.IGNORECASE
    )
    # Legacy English-only format
    pat_en = re.compile(rf"^## {re.escape(heading)}\s*\n", re.MULTILINE)
    m = pat_ko.search(body) or pat_en.search(body)
    if not m:
        return ""
    start = m.end()
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


def _extract_claim_lang(claim_text: str, lang: str) -> str:
    """Extract ### 한국어 or ### English subsection from claim body."""
    if lang == "ko":
        pat = re.compile(r"^### 한국어\s*\n(.*?)(?=^###|\Z)", re.MULTILINE | re.DOTALL)
    else:
        pat = re.compile(r"^### English\s*\n(.*?)(?=^###|\Z)", re.MULTILINE | re.DOTALL)
    m = pat.search(claim_text)
    return m.group(1).strip() if m else ""


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


def _extract_takeaways_en(text: str) -> list[dict]:
    """Parse English key takeaways.

    For bilingual bullets (Korean / English), extract the English part after ' / '.
    For already-English bullets, apply term substitution.
    Skip bullets that remain Korean-dominant after extraction.
    """
    items = []
    for line in text.split("\n"):
        line = line.strip()
        if not line.startswith("- "):
            continue
        bullet = line[2:].strip()
        # Bilingual bullet: "Korean text / English text"
        if " / " in bullet:
            en_part = bullet.split(" / ", 1)[1].strip()
        else:
            en_part = bullet
        en_part = _term_sub(en_part)
        # Skip Korean-dominant bullets (e.g. separate Korean bullets in a mixed list)
        if _is_mostly_korean(en_part):
            continue
        axes = []
        for tag in ("Truthfulness", "Validity", "Sincerity"):
            if f"[{tag}]" in en_part:
                axes.append(tag)
        items.append({"text": en_part, "axes": axes})
    return items


def _prose_en(text: str) -> str:
    """Return English version of a prose field.

    If the text is mostly Korean, return empty string (Phase 2 fills these).
    Otherwise apply term substitution.
    """
    if _is_mostly_korean(text):
        return ""
    return _term_sub(text)


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

        # Bilingual claim subsections
        claim_ko = _extract_claim_lang(claim, "ko")
        claim_en = _extract_claim_lang(claim, "en")

        # Parse structured data
        takeaways = _extract_takeaways(takeaways_raw)
        takeaways_en = _extract_takeaways_en(takeaways_raw)
        evidence = _extract_evidence_ids(evidence_raw)
        related = _extract_related(related_raw)

        # English prose fields (term_sub for English-first; empty for Korean-prose)
        falsification_en = _prose_en(falsification)
        verdict_en = _prose_en(verdict_prose)
        counter_en = _prose_en(counter)

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
            # claim: full section (backward compat) + bilingual subsections
            "claim": claim,
            "claim_ko": claim_ko,
            "claim_en": claim_en,
            # key takeaways: Korean (original) + English
            "keyTakeaways": takeaways,
            "keyTakeaways_en": takeaways_en,
            "supportingEvidence": evidence,
            # counter-hypothesis
            "counterHypothesis": counter,
            "counterHypothesis_en": counter_en,
            # falsification condition
            "falsificationCondition": falsification,
            "falsificationCondition_en": falsification_en,
            # verdict
            "verdictProse": verdict_prose,
            "verdictProse_en": verdict_en,
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
