#!/usr/bin/env python3
"""
add-atom-frontmatter.py — Add YAML frontmatter to all wiki/claims/*.md atoms.

Extracts structured metadata from:
  - Cypher blocks (layer, verdict, strength, claimType, etc.)
  - Body text (persons, organizations, record-nos, event-date)
  - _fractures.md (fracture-type mapping)
  - pseudonym_mapping.json (person name list)

Generates:
  - YAML frontmatter with all properties
  - Nested Obsidian tags
  - Bilingual aliases (resultId + Korean short + English short)
  - title-ko / title-en from H1 title

Does NOT modify existing body content or Cypher blocks.

Usage:
    python3 scripts/add-atom-frontmatter.py [--dry-run]
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
CLAIMS_DIR = REPO_ROOT / "wiki" / "claims"
FRACTURES_FILE = REPO_ROOT / "wiki" / "_fractures.md"
PSEUDONYM_FILE = REPO_ROOT.parent / "defense-kg-platform" / "kg" / "pseudonym_mapping.json"

# ── Regex ────────────────────────────────────────────────────────────

PAT_LAYER = re.compile(r"layer-(\d)")
PAT_CT = re.compile(r'fr\.claimType\s*=\s*"([^"]+)"')
PAT_CST = re.compile(r'fr\.claimSubtype\s*=\s*"([^"]+)"')
PAT_V = re.compile(r'fr\.verdict\s*=\s*"([^"]+)"')
PAT_S = re.compile(r'fr\.strength\s*=\s*"([^"]+)"')
PAT_RID = re.compile(r'resultId:\s*"([^"]+)"')
PAT_T = re.compile(r"fr\.truthfulness\s*=\s*(\d+)")
PAT_VA = re.compile(r"fr\.validity\s*=\s*(\d+)")
PAT_SI = re.compile(r"fr\.sincerity\s*=\s*(\d+)")
PAT_TITLE = re.compile(r"^#\s+(.+)$", re.MULTILINE)
PAT_SOURCE = re.compile(r"^\*\*Source:\*\*\s*(.+)$", re.MULTILINE)
PAT_RECORD_NO = re.compile(r"Record No\.\s*([\d,]+)")
PAT_EVIDENCE_ID = re.compile(r"\b(L\d-\d{3})\b")
PAT_DATE_ISO = re.compile(r"\b((?:19|20)\d{2})[.-](0[1-9]|1[0-2])[.-](0[1-9]|[12]\d|3[01])\b")
PAT_DATE_KR = re.compile(r"\b((?:19|20)\d{2})\.(0[1-9]|1[0-2])\.(0[1-9]|[12]\d|3[01])\b")
PAT_SECONDARY_LAYERS = re.compile(r"fr\.secondaryLayers\s*=\s*\[([^\]]*)\]")
PAT_VERBATIM = re.compile(r"^>\s+\*\*", re.MULTILINE)
PAT_HAS_FRONTMATTER = re.compile(r"^---\s*\n", re.MULTILINE)

# Source type detection
SOURCE_TYPE_PATTERNS = [
    (re.compile(r"raw/01\.|book-beyond-cybersecurity|vault-converted"), "book"),
    (re.compile(r"raw/02\.|recording|녹취"), "recording"),
    (re.compile(r"raw/04\.|law & regulation|훈령"), "regulation"),
    (re.compile(r"raw/05\.|Investigation|Military Prosecutor"), "investigation"),
    (re.compile(r"raw/06\.|DIDC SOP|예규"), "sop"),
    (re.compile(r"raw/03\.|Kakao"), "kakao"),
    (re.compile(r"ai-research/"), "ai-research"),
]

# Organizations to detect
ORGS_PATTERNS = [
    ("DIDC", re.compile(r"\bDIDC\b|국방통합데이터센터|국방통합 데이터센터")),
    ("국전원", re.compile(r"국전원|국군정보사")),
    ("군검찰단", re.compile(r"군검찰단|군 검찰단|국방부검찰단")),
    ("MND", re.compile(r"\bMND\b|국방부(?!검찰)")),
    ("조사본부", re.compile(r"조사본부")),
    ("DCIA", re.compile(r"\bDCIA\b|정보통신부대|전산소")),
    ("국본", re.compile(r"국본|합참")),
    ("감사실", re.compile(r"감사실")),
    ("국유단", re.compile(r"국유단|유해발굴")),
    ("조달청", re.compile(r"조달청")),
]


def _m1(pat: re.Pattern, text: str) -> str:
    m = pat.search(text)
    return m.group(1) if m else ""


def _mi(pat: re.Pattern, text: str) -> int:
    m = pat.search(text)
    return int(m.group(1)) if m else 0


def load_pseudonyms() -> list[str]:
    """Load all pseudonym Korean names from mapping."""
    if not PSEUDONYM_FILE.exists():
        print(f"[warn] pseudonym file not found: {PSEUDONYM_FILE}", file=sys.stderr)
        return []
    data = json.loads(PSEUDONYM_FILE.read_text(encoding="utf-8"))
    return [m["pseudo_name_kr"] for m in data["mappings"]]


def load_fracture_map() -> dict[str, str]:
    """Build atom_slug -> fracture_subtype mapping from _fractures.md."""
    if not FRACTURES_FILE.exists():
        return {}
    text = FRACTURES_FILE.read_text(encoding="utf-8")
    pat = re.compile(
        r"Subtype:\*\*\s*(F-\w+).*?Atom:\*\*\s*\[\[claims/([^\]]+)\]\]",
        re.DOTALL,
    )
    return {m.group(2): m.group(1) for m in pat.finditer(text)}


def detect_source_type(source_line: str) -> str:
    """Detect source type from Source: line."""
    for pat, stype in SOURCE_TYPE_PATTERNS:
        if pat.search(source_line):
            return stype
    return "unknown"


def extract_persons(body: str, pseudonyms: list[str]) -> list[str]:
    """Find all pseudonym names mentioned in atom body."""
    found = []
    for name in pseudonyms:
        if name in body:
            found.append(name)
    # Sort by frequency (most mentioned first)
    found.sort(key=lambda n: body.count(n), reverse=True)
    return found


def extract_orgs(body: str) -> list[str]:
    """Find all known organizations mentioned in atom body."""
    found = []
    for name, pat in ORGS_PATTERNS:
        if pat.search(body):
            found.append(name)
    return found


def extract_record_nos(body: str) -> list[int]:
    """Extract all Record No. citations as integers."""
    raw = PAT_RECORD_NO.findall(body)
    nums = []
    for r in raw:
        try:
            nums.append(int(r.replace(",", "")))
        except ValueError:
            pass
    return sorted(set(nums))


def extract_evidence_ids(body: str) -> list[str]:
    """Extract all L{N}-NNN evidence IDs."""
    return sorted(set(PAT_EVIDENCE_ID.findall(body)))


def extract_event_date(body: str) -> str | None:
    """Try to find the most relevant event date (first ISO date in Claim section)."""
    # Look in Claim section first
    claim_start = body.find("## Claim")
    if claim_start >= 0:
        claim_end = body.find("\n## ", claim_start + 10)
        claim_text = body[claim_start:claim_end] if claim_end > 0 else body[claim_start:]
        m = PAT_DATE_ISO.search(claim_text) or PAT_DATE_KR.search(claim_text)
        if m:
            return f"{m.group(1)}-{m.group(2)}-{m.group(3)}"
    return None


def extract_secondary_layers(body: str) -> list[int]:
    """Extract secondaryLayers from Cypher block."""
    m = PAT_SECONDARY_LAYERS.search(body)
    if m and m.group(1).strip():
        return [int(x.strip()) for x in m.group(1).split(",") if x.strip().isdigit()]
    # Also check Layer: line for (secondary) mentions
    head = body[:800]
    layers = [int(x) for x in PAT_LAYER.findall(head)]
    return layers[1:] if len(layers) > 1 else []


def split_title(title: str) -> tuple[str, str]:
    """Split bilingual title into Korean and English parts."""
    # Many titles are mixed. Try to extract meaningful parts.
    # Pattern: "Korean text — English text" or "English — Korean"
    if " — " in title:
        parts = title.split(" — ", 1)
        # Detect which part is Korean
        has_ko_0 = bool(re.search(r"[\uac00-\ud7af]", parts[0]))
        has_ko_1 = bool(re.search(r"[\uac00-\ud7af]", parts[1]))
        if has_ko_0 and not has_ko_1:
            return parts[0].strip(), parts[1].strip()
        elif has_ko_1 and not has_ko_0:
            return parts[1].strip(), parts[0].strip()
        else:
            # Both or neither — use full title for both
            return title, title
    # Single language title
    has_ko = bool(re.search(r"[\uac00-\ud7af]", title))
    return (title, "") if has_ko else ("", title)


def make_short_alias(text: str, max_len: int = 50) -> str:
    """Shorten a title for use as an alias."""
    if len(text) <= max_len:
        return text
    # Truncate at word boundary
    truncated = text[:max_len]
    last_space = truncated.rfind(" ")
    if last_space > max_len // 2:
        return truncated[:last_space]
    return truncated


def build_tags(
    layer: int,
    secondary_layers: list[int],
    verdict: str,
    strength: str,
    claim_type: str,
    source_type: str,
    fracture_type: str | None,
    persons: list[str],
    orgs: list[str],
    has_verbatim: bool,
    has_record_nos: bool,
    is_cross_layer: bool,
) -> list[str]:
    """Build nested Obsidian tags."""
    tags = []

    # Layer
    tags.append(f"layer/L{layer}")
    for sl in secondary_layers:
        tags.append(f"layer/L{sl}")

    # Verdict + strength
    verdict_slug = verdict.lower().replace("_", "-") if verdict else "unknown"
    tags.append(f"verdict/{verdict_slug}")
    if strength:
        tags.append(f"strength/{strength.lower()}")

    # Claim type
    if claim_type:
        tags.append(f"type/{claim_type.replace('_', '-')}")

    # Source type
    if source_type and source_type != "unknown":
        tags.append(f"source/{source_type}")

    # Fracture type
    if fracture_type:
        tags.append(f"fracture/{fracture_type}")

    # Persons (top 5 to avoid tag explosion)
    for p in persons[:5]:
        tags.append(f"person/{p}")

    # Orgs
    for o in orgs:
        tags.append(f"org/{o}")

    # Feature tags
    if has_verbatim:
        tags.append("has/verbatim-quote")
    if has_record_nos:
        tags.append("has/record-nos")
    if is_cross_layer:
        tags.append("cross-layer")

    return tags


def yaml_list(items: list, indent: int = 2) -> str:
    """Format a list as YAML, quoting items with special chars."""
    if not items:
        return "[]"
    prefix = " " * indent
    return "\n" + "\n".join(f"{prefix}- {yaml_str(str(item))}" for item in items)


def yaml_str(s: str) -> str:
    """Safely quote a YAML string."""
    if not s:
        return '""'
    # Quote if contains special chars
    needs_quote = any(c in s for c in ":#{}[]|>&*!%@`,?") or s.startswith("-") or s.startswith("'")
    if needs_quote or "\n" in s:
        escaped = s.replace('"', '\\"')
        return f'"{escaped}"'
    return s


def build_frontmatter(
    *,
    lang: str,
    title_ko: str,
    title_en: str,
    aliases: list[str],
    layer: int,
    secondary_layers: list[int],
    claim_type: str,
    claim_subtype: str,
    fracture_type: str | None,
    source_type: str,
    verdict: str,
    strength: str,
    truthfulness: int,
    validity: int,
    sincerity: int,
    analysis_date: str,
    record_nos: list[int],
    evidence_ids: list[str],
    event_date: str | None,
    persons: list[str],
    organizations: list[str],
    has_verbatim: bool,
    tags: list[str],
) -> str:
    """Build YAML frontmatter string."""
    lines = ["---"]

    # Identification
    lines.append(f"lang: {lang}")
    lines.append(f"title-ko: {yaml_str(title_ko)}")
    lines.append(f"title-en: {yaml_str(title_en)}")
    if aliases:
        alias_lines = "\n".join(f"  - {yaml_str(a)}" for a in aliases)
        lines.append(f"aliases:\n{alias_lines}")

    lines.append("")

    # Classification
    lines.append(f"layer: {layer}")
    lines.append(f"secondary-layers: {json.dumps(secondary_layers)}")
    lines.append(f"claimType: {claim_type}")
    if claim_subtype:
        lines.append(f"claimSubtype: {claim_subtype}")
    lines.append(f"fracture-type: {fracture_type if fracture_type else 'null'}")
    lines.append(f"source-type: {source_type}")

    lines.append("")

    # Verdict
    lines.append(f"verdict: {verdict}")
    lines.append(f"strength: {strength}")
    lines.append(f"truthfulness: {truthfulness}")
    lines.append(f"validity: {validity}")
    lines.append(f"sincerity: {sincerity}")
    if analysis_date:
        lines.append(f"analysisDate: {analysis_date}")

    lines.append("")

    # Evidence links
    lines.append(f"record-nos: {json.dumps(record_nos)}")
    lines.append(f"evidence-ids: {json.dumps(evidence_ids)}")
    lines.append(f"event-date: {event_date if event_date else 'null'}")

    lines.append("")

    # Relations
    lines.append(f"persons:{yaml_list(persons) if persons else ' []'}")
    lines.append(f"organizations:{yaml_list(organizations) if organizations else ' []'}")
    lines.append(f"has-verbatim: {str(has_verbatim).lower()}")

    lines.append("")

    # Obsidian native
    lines.append(f"tags:{yaml_list(tags)}")

    lines.append("---")
    return "\n".join(lines) + "\n"


def process_atom(
    path: Path,
    pseudonyms: list[str],
    fracture_map: dict[str, str],
    dry_run: bool,
) -> dict | None:
    """Process a single atom file. Returns metadata dict for reporting."""
    body = path.read_text(encoding="utf-8")
    stem = path.stem

    # Skip if already has frontmatter
    if body.startswith("---\n"):
        return None

    # Skip index files
    if stem.startswith("_"):
        return None

    # Extract from Cypher
    result_id = _m1(PAT_RID, body)
    if not result_id:
        return None

    head = body[:800]
    layers = [int(x) for x in PAT_LAYER.findall(head)]
    primary_layer = layers[0] if layers else 0
    secondary_layers = extract_secondary_layers(body)

    claim_type = _m1(PAT_CT, body)
    claim_subtype = _m1(PAT_CST, body)
    verdict = _m1(PAT_V, body)
    strength = _m1(PAT_S, body)
    title = _m1(PAT_TITLE, body)
    source = _m1(PAT_SOURCE, body)

    # Analysis date
    analysis_date_m = re.search(r'fr\.analysisDate\s*=\s*date\("(\d{4}-\d{2}-\d{2})"\)', body)
    analysis_date = analysis_date_m.group(1) if analysis_date_m else ""

    # Extract metadata from body
    persons = extract_persons(body, pseudonyms)
    orgs = extract_orgs(body)
    record_nos = extract_record_nos(body)
    evidence_ids = extract_evidence_ids(body)
    event_date = extract_event_date(body)
    has_verbatim = bool(PAT_VERBATIM.search(body))
    source_type = detect_source_type(source)
    fracture_type = fracture_map.get(stem)
    is_cross_layer = len(secondary_layers) > 0

    # Truthfulness/validity/sincerity
    truthfulness = _mi(PAT_T, body)
    validity = _mi(PAT_VA, body)
    sincerity = _mi(PAT_SI, body)

    # Language detection
    has_ko = bool(re.search(r"[\uac00-\ud7af]", title))
    lang = "ko" if has_ko else "en"

    # Title split
    title_ko, title_en = split_title(title)

    # Aliases
    aliases = [result_id]
    if title_ko and len(title_ko) > 3:
        short_ko = make_short_alias(title_ko)
        if short_ko != result_id:
            aliases.append(short_ko)
    if title_en and len(title_en) > 3:
        short_en = make_short_alias(title_en)
        if short_en not in aliases:
            aliases.append(short_en)

    # Tags
    tags = build_tags(
        layer=primary_layer,
        secondary_layers=secondary_layers,
        verdict=verdict,
        strength=strength,
        claim_type=claim_type,
        source_type=source_type,
        fracture_type=fracture_type,
        persons=persons,
        orgs=orgs,
        has_verbatim=has_verbatim,
        has_record_nos=len(record_nos) > 0,
        is_cross_layer=is_cross_layer,
    )

    # Build frontmatter
    fm = build_frontmatter(
        lang=lang,
        title_ko=title_ko,
        title_en=title_en,
        aliases=aliases,
        layer=primary_layer,
        secondary_layers=secondary_layers,
        claim_type=claim_type,
        claim_subtype=claim_subtype,
        fracture_type=fracture_type,
        source_type=source_type,
        verdict=verdict,
        strength=strength,
        truthfulness=truthfulness,
        validity=validity,
        sincerity=sincerity,
        analysis_date=analysis_date,
        record_nos=record_nos,
        evidence_ids=evidence_ids,
        event_date=event_date,
        persons=persons,
        organizations=orgs,
        has_verbatim=has_verbatim,
        tags=tags,
    )

    if not dry_run:
        path.write_text(fm + body, encoding="utf-8")

    return {
        "stem": stem,
        "layer": primary_layer,
        "verdict": verdict,
        "persons_count": len(persons),
        "record_nos_count": len(record_nos),
        "fracture_type": fracture_type,
        "source_type": source_type,
        "has_verbatim": has_verbatim,
    }


def main() -> int:
    dry_run = "--dry-run" in sys.argv

    if not CLAIMS_DIR.exists():
        print(f"[error] claims dir not found: {CLAIMS_DIR}", file=sys.stderr)
        return 1

    print("[info] loading pseudonym mapping...")
    pseudonyms = load_pseudonyms()
    print(f"[info] loaded {len(pseudonyms)} pseudonyms")

    print("[info] loading fracture mapping...")
    fracture_map = load_fracture_map()
    print(f"[info] loaded {len(fracture_map)} fracture mappings")

    processed = 0
    skipped = 0
    errors = 0
    results = []

    for path in sorted(CLAIMS_DIR.glob("*.md")):
        if path.name.startswith("_"):
            skipped += 1
            continue

        try:
            result = process_atom(path, pseudonyms, fracture_map, dry_run)
            if result:
                results.append(result)
                processed += 1
            else:
                skipped += 1
        except Exception as e:
            print(f"[error] {path.name}: {e}", file=sys.stderr)
            errors += 1

    # Summary
    mode = "DRY RUN" if dry_run else "APPLIED"
    print(f"\n[{mode}] processed={processed}, skipped={skipped}, errors={errors}")

    # Stats
    if results:
        with_persons = sum(1 for r in results if r["persons_count"] > 0)
        with_records = sum(1 for r in results if r["record_nos_count"] > 0)
        with_fracture = sum(1 for r in results if r["fracture_type"])
        with_verbatim = sum(1 for r in results if r["has_verbatim"])

        source_types = {}
        for r in results:
            st = r["source_type"]
            source_types[st] = source_types.get(st, 0) + 1

        print(f"  persons extracted: {with_persons}/{processed}")
        print(f"  record-nos extracted: {with_records}/{processed}")
        print(f"  fracture-type mapped: {with_fracture}/{processed}")
        print(f"  has-verbatim: {with_verbatim}/{processed}")
        print(f"  source-types: {source_types}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
