#!/usr/bin/env python3
"""
tag-relationships.py — infer and tag relationship types in atom ## Related sections.

Scans wiki/claims/*.md, reads each atom's ## Related section, and infers
relationship types based on:
  1. Link target path patterns (layers/ → PART_OF_LAYER, entities/ → ABOUT, etc.)
  2. Atom filename patterns (triggers/enables/chain → CAUSES, opposes/contradicts → OPPOSES)
  3. Existing inline hints ("paired" → OPPOSES, already has "(TYPE)" → preserve)
  4. Cross-reference of both atoms' claimType and layer for structural inference

Outputs:
  - Modifies wiki/claims/*.md in-place: adds (TYPE) tags to ## Related links
  - Generates output/relationship-summary.json with statistics

Standard relationship types (7):
  CAUSES        — A causally enables/triggers B
  OPPOSES       — A contradicts or is a counter-claim to B
  CORROBORATES  — A independently supports B (cross-source)
  SUPERSEDES    — A replaces B (regulatory revision)
  PART_OF_LAYER — atom belongs to a Layer
  ABOUT         — atom is about an entity/event/topic
  RELATED       — default fallback when type cannot be inferred

Usage:
    python3 scripts/tag-relationships.py [--dry-run]
"""

from __future__ import annotations

import json
import re
import sys
from collections import defaultdict
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
CLAIMS_DIR = REPO_ROOT / "wiki" / "claims"
WIKI_DIR = REPO_ROOT / "wiki"
OUTPUT_JSON = REPO_ROOT / "output" / "relationship-summary.json"

DRY_RUN = "--dry-run" in sys.argv

# ── Relationship type definitions ─────────────────────────────────────

VALID_TYPES = {"CAUSES", "OPPOSES", "CORROBORATES", "SUPERSEDES", "PART_OF_LAYER", "ABOUT", "RELATED"}

# ── Patterns for inference ────────────────────────────────────────────

# Path-based inference (link target contains these paths)
PATH_RULES = [
    (r"\.\./layers/", "PART_OF_LAYER"),
    (r"\.\./entities/", "ABOUT"),
    (r"\.\./events/", "ABOUT"),
    (r"\.\./topics/", "ABOUT"),
    (r"\.\./regulations/", "ABOUT"),
]

# Filename keyword inference (atom-to-atom links)
CAUSES_KEYWORDS = [
    "triggers", "enables", "consequence", "chain", "leads-to",
    "prerequisite", "forced", "enables", "l2-l3", "l3-l4", "l1-l3",
    "l1-l2", "bridge",
]

OPPOSES_KEYWORDS = [
    "contradicts", "opposes", "counter", "refut", "denial",
    "self-contradiction", "falsity", "false", "fabricat",
    "reversed-truth", "rebuttal",
]

CORROBORATES_KEYWORDS = [
    "confirms", "corroborat", "cross-source", "dual-evidence",
    "independent", "convergent", "triple", "five-witness",
    "six-month-solitary",  # multi-witness corroboration
]

SUPERSEDES_KEYWORDS = [
    "supersedes", "replaces", "revision", "2263ho", "2398ho",
    "2436ho", "2576ho", "2649ho", "2842ho", "2946ho",
]

# Inline text hints in existing Related sections
PAIRED_PATTERN = re.compile(r"paired", re.IGNORECASE)
ALREADY_TAGGED = re.compile(r"\(([A-Z_]+)\)\s*$")


def load_atom_metadata() -> dict[str, dict]:
    """Load layer and claimType for each atom file."""
    meta = {}
    pat_layer = re.compile(r"^\*\*Layer:\*\*\s*\[\[../layers/layer-(\d)")
    pat_ct = re.compile(r'fr\.claimType\s*=\s*"([^"]+)"')

    for path in sorted(CLAIMS_DIR.glob("*.md")):
        if path.name.startswith("_"):
            continue
        try:
            body = path.read_text(encoding="utf-8")
        except Exception:
            continue

        layer = 0
        for line in body.split("\n")[:10]:
            m = pat_layer.match(line)
            if m:
                layer = int(m.group(1))
                break

        ct_m = pat_ct.search(body)
        claim_type = ct_m.group(1) if ct_m else ""

        meta[path.stem] = {"layer": layer, "claimType": claim_type, "path": path}

    return meta


def infer_type(source_stem: str, target_link: str, source_meta: dict, all_meta: dict, inline_text: str) -> str:
    """Infer relationship type for a single link."""

    # 1. Already tagged?
    m = ALREADY_TAGGED.search(inline_text)
    if m and m.group(1) in VALID_TYPES:
        return m.group(1)

    # 2. Path-based rules (non-atom links)
    for pattern, rel_type in PATH_RULES:
        if re.search(pattern, target_link):
            return rel_type

    # 3. Extract target stem for atom-to-atom inference
    target_stem = target_link.split("|")[0].strip("[]").split("/")[-1]

    # 4. "paired" keyword → OPPOSES
    if PAIRED_PATTERN.search(inline_text):
        return "OPPOSES"

    # 5. Filename keyword matching
    combined = f"{source_stem} {target_stem} {inline_text}".lower()

    for kw in CAUSES_KEYWORDS:
        if kw in source_stem.lower() or kw in target_stem.lower():
            return "CAUSES"

    for kw in OPPOSES_KEYWORDS:
        if kw in combined:
            return "OPPOSES"

    for kw in CORROBORATES_KEYWORDS:
        if kw in combined:
            return "CORROBORATES"

    # 6. Cross-layer links between atoms → likely CAUSES
    target_meta = all_meta.get(target_stem, {})
    if target_meta:
        src_layer = source_meta.get("layer", 0)
        tgt_layer = target_meta.get("layer", 0)
        if src_layer and tgt_layer and src_layer != tgt_layer:
            # Different primary layers → structural connection
            src_ct = source_meta.get("claimType", "")
            if src_ct == "cross_layer_analysis":
                return "CAUSES"

    # 7. Same claimType + same layer → likely CORROBORATES
    if target_meta:
        if (source_meta.get("claimType") == target_meta.get("claimType")
                and source_meta.get("layer") == target_meta.get("layer")
                and source_meta.get("layer") != 0):
            return "CORROBORATES"

    # 8. Regulation-related atoms linking to each other → SUPERSEDES check
    for kw in SUPERSEDES_KEYWORDS:
        if kw in target_stem.lower():
            if any(sk in source_stem.lower() for sk in SUPERSEDES_KEYWORDS):
                return "SUPERSEDES"

    # 9. Default
    return "RELATED"


def process_atom(path: Path, all_meta: dict, stats: dict) -> bool:
    """Process one atom file. Returns True if modified."""
    body = path.read_text(encoding="utf-8")
    source_stem = path.stem
    source_meta = all_meta.get(source_stem, {"layer": 0, "claimType": ""})

    # Find ## Related section
    related_start = body.find("## Related")
    if related_start == -1:
        return False

    # Find next ## or end of file
    next_section = body.find("\n## ", related_start + 10)
    if next_section == -1:
        related_section = body[related_start:]
        rest = ""
    else:
        related_section = body[related_start:next_section]
        rest = body[next_section:]

    lines = related_section.split("\n")
    modified = False
    new_lines = []

    for line in lines:
        if not line.startswith("- [["):
            new_lines.append(line)
            continue

        # Parse the link
        link_match = re.match(r"- \[\[([^\]|]+)(?:\|[^\]]+)?\]\](.*)", line)
        if not link_match:
            new_lines.append(line)
            continue

        target_link = link_match.group(1)
        after_link = link_match.group(2).strip()

        # Check if already tagged with (TYPE)
        existing_tag = ALREADY_TAGGED.search(after_link)
        if existing_tag and existing_tag.group(1) in VALID_TYPES:
            # Already tagged, preserve
            rel_type = existing_tag.group(1)
            stats[rel_type] += 1
            new_lines.append(line)
            continue

        # Infer type
        rel_type = infer_type(source_stem, target_link, source_meta, all_meta, after_link)
        stats[rel_type] += 1

        # Reconstruct line with tag
        # Keep existing description, add (TYPE) at end
        if after_link:
            # Check if after_link already ends with a parenthetical
            if after_link.endswith(")") and "(" in after_link:
                # Has description in parens — add type before it
                new_line = line.rstrip() + f" ({rel_type})"
            else:
                new_line = line.rstrip() + f" ({rel_type})"
        else:
            # Reconstruct: - [[target|display]] (TYPE) or - [[target]] (TYPE)
            bracket_end = line.find("]]")
            new_line = line[:bracket_end + 2] + f" ({rel_type})"

        if new_line != line:
            modified = True
        new_lines.append(new_line)

    if not modified:
        return False

    new_related = "\n".join(new_lines)
    new_body = body[:related_start] + new_related + rest

    if not DRY_RUN:
        path.write_text(new_body, encoding="utf-8")

    return True


def main() -> int:
    if not CLAIMS_DIR.exists():
        print(f"[error] claims dir not found: {CLAIMS_DIR}", file=sys.stderr)
        return 1

    print(f"[info] {'DRY RUN — no files will be modified' if DRY_RUN else 'LIVE RUN — files will be modified'}")

    all_meta = load_atom_metadata()
    print(f"[info] loaded metadata for {len(all_meta)} atoms")

    stats: dict[str, int] = defaultdict(int)
    files_modified = 0
    files_scanned = 0

    for path in sorted(CLAIMS_DIR.glob("*.md")):
        if path.name.startswith("_"):
            continue
        files_scanned += 1
        try:
            if process_atom(path, all_meta, stats):
                files_modified += 1
        except Exception as e:
            print(f"[warn] error processing {path.name}: {e}", file=sys.stderr)

    # Output
    total_links = sum(stats.values())
    print(f"\n[ok] {'would modify' if DRY_RUN else 'modified'} {files_modified}/{files_scanned} files")
    print(f"     total links tagged: {total_links}")
    print(f"\n     Relationship type distribution:")
    for rt in sorted(stats, key=stats.get, reverse=True):
        pct = stats[rt] / total_links * 100 if total_links else 0
        print(f"       {rt:20s} {stats[rt]:5d} ({pct:.1f}%)")

    # JSON output
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    json_data = {
        "generated": "scripts/tag-relationships.py",
        "dry_run": DRY_RUN,
        "files_scanned": files_scanned,
        "files_modified": files_modified,
        "total_links": total_links,
        "type_distribution": dict(stats),
    }
    OUTPUT_JSON.write_text(json.dumps(json_data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"\n[ok] wrote {OUTPUT_JSON}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
