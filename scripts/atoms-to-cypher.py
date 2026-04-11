#!/usr/bin/env python3
"""
atoms-to-cypher.py — extract Aurora MERGE blocks from wiki claim atoms.

Scans every .md file under wiki/ looking for fenced cypher code blocks that
contain a `MERGE` statement (the Aurora node shape each claim atom carries),
and concatenates them into a single `.cypher` file staged in `output/` for
James to review and manually apply to Neo4j.

**This script NEVER writes to Neo4j.** It only stages a Cypher file. Aurora
promotion happens by James running the file against the sister project's
Neo4j instance after review. This respects the "hard-to-reverse operations"
principle from CLAUDE.md.

Usage:
    python3 scripts/atoms-to-cypher.py

Output:
    output/wiki-promotions-YYYY-MM-DD.cypher

Idempotent: re-running overwrites the file with fresh content from the current
wiki state. Safe to run as often as needed.

Pseudonym caution: the script reads file contents and writes them into the
output Cypher file. If any atom's Aurora `claimDesc` contains a real name, it
will be copied into the Cypher file unchanged. The PreToolUse pseudonym hook
does not fire on Python-driven file writes, so James should manually review
the output file for real names before promoting to Neo4j. A defensive scan is
performed against `../defense-kg-platform/kg/pseudonym_mapping.json` and any
detected real name in an extracted block aborts the atom and reports it.
"""

from __future__ import annotations

import datetime as _dt
import json
import re
import sys
from pathlib import Path

# --------------------------------------------------------------------------- #
# Paths

REPO_ROOT = Path(__file__).resolve().parent.parent
WIKI_DIR = REPO_ROOT / "wiki"
OUTPUT_DIR = REPO_ROOT / "output"
MAPPING_PATH = (
    REPO_ROOT.parent / "defense-kg-platform" / "kg" / "pseudonym_mapping.json"
)

# File naming: include date so successive runs produce dated staging files
TODAY = _dt.date.today().isoformat()
OUTPUT_PATH = OUTPUT_DIR / f"wiki-promotions-{TODAY}.cypher"

# Files under wiki/ to exclude from the scan (navigation / generated / logs)
EXCLUDE_BASENAMES = {
    "_index.md",
    "_master-index.md",
    "_contradictions.md",
    "_record-index.md",
    "log.md",
    "timeline.md",
}
EXCLUDE_DIRS = {"_examples"}

# --------------------------------------------------------------------------- #
# Regex

# Match a fenced cypher block starting with ```cypher and ending with ```
# Multiline, DOTALL so the body can span many lines.
PAT_CYPHER_BLOCK = re.compile(
    r"```cypher\s*\n(.*?)\n```",
    re.DOTALL,
)

PAT_MERGE_NODE = re.compile(
    r"MERGE\s*\(\s*(\w+)\s*:\s*(\w+)\s*\{([^}]*)\}\s*\)",
    re.DOTALL,
)

PAT_RESULT_ID = re.compile(r'resultId:\s*"([^"]+)"')
PAT_FILENAME_SAFE = re.compile(r"[^\w.\-/]")


# --------------------------------------------------------------------------- #
# Load pseudonym mapping for defensive real-name scan


def load_real_names() -> list[tuple[str, str, int]]:
    """Return list of (real_name, pseudonym, mapping_id) tuples, Korean-only.

    Fails open (empty list) if the mapping file is missing — in which case the
    script skips the defensive scan and prints a warning.
    """
    if not MAPPING_PATH.exists():
        print(
            f"[warn] pseudonym mapping not found at {MAPPING_PATH} — real-name defensive scan disabled",
            file=sys.stderr,
        )
        return []
    try:
        data = json.loads(MAPPING_PATH.read_text(encoding="utf-8"))
    except Exception as e:
        print(
            f"[warn] failed to parse pseudonym mapping ({e}) — defensive scan disabled",
            file=sys.stderr,
        )
        return []
    entries = data.get("mappings", []) if isinstance(data, dict) else data
    out: list[tuple[str, str, int]] = []
    for e in entries:
        if not isinstance(e, dict):
            continue
        real = (e.get("origin_name_kr") or "").strip()
        pseudo = (e.get("pseudo_name_kr") or "").strip()
        rid = e.get("id", -1)
        if real and len(real) >= 2:
            out.append((real, pseudo, rid))
    return out


# --------------------------------------------------------------------------- #
# Scan wiki files


def iter_wiki_files(wiki_dir: Path):
    for path in sorted(wiki_dir.rglob("*.md")):
        if path.name in EXCLUDE_BASENAMES:
            continue
        if any(part in EXCLUDE_DIRS for part in path.relative_to(wiki_dir).parts):
            continue
        yield path


def extract_cypher_blocks(body: str) -> list[str]:
    """Return the raw text of every ```cypher ... ``` block."""
    return [m.group(1) for m in PAT_CYPHER_BLOCK.finditer(body)]


def is_merge_block(block: str) -> bool:
    return "MERGE" in block and PAT_MERGE_NODE.search(block) is not None


def extract_result_id(block: str) -> str | None:
    m = PAT_RESULT_ID.search(block)
    return m.group(1) if m else None


def scan_real_names(block: str, reals: list[tuple[str, str, int]]) -> list[tuple[str, str, int]]:
    hits: list[tuple[str, str, int]] = []
    for real, pseudo, rid in reals:
        if real in block:
            hits.append((real, pseudo, rid))
    return hits


# --------------------------------------------------------------------------- #
# Main


def main() -> int:
    if not WIKI_DIR.exists():
        print(f"[error] wiki directory not found at {WIKI_DIR}", file=sys.stderr)
        return 1
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    real_names = load_real_names()

    extracted: list[tuple[str, str | None, str]] = []  # (rel_path, result_id, block)
    files_scanned = 0
    files_with_cypher = 0
    blocks_skipped_no_merge = 0
    blocks_rejected_pseudonym: list[tuple[str, list[tuple[str, str, int]]]] = []

    for path in iter_wiki_files(WIKI_DIR):
        try:
            body = path.read_text(encoding="utf-8")
        except Exception as e:
            print(f"[warn] could not read {path}: {e}", file=sys.stderr)
            continue
        files_scanned += 1

        blocks = extract_cypher_blocks(body)
        if not blocks:
            continue
        files_with_cypher += 1

        rel = str(path.relative_to(REPO_ROOT))

        for block in blocks:
            if not is_merge_block(block):
                blocks_skipped_no_merge += 1
                continue

            # Defensive pseudonym scan
            hits = scan_real_names(block, real_names)
            if hits:
                blocks_rejected_pseudonym.append((rel, hits))
                # Skip this block — do not stage real names into the Cypher file
                continue

            result_id = extract_result_id(block)
            extracted.append((rel, result_id, block.rstrip()))

    if not extracted:
        print("[error] no MERGE blocks extracted — aborting", file=sys.stderr)
        if blocks_rejected_pseudonym:
            _report_rejections(blocks_rejected_pseudonym)
        return 2

    # --------------------------------------------------------------------- #
    # Render output

    header = _build_header(
        files_scanned=files_scanned,
        files_with_cypher=files_with_cypher,
        extracted=len(extracted),
        blocks_skipped_no_merge=blocks_skipped_no_merge,
        blocks_rejected_pseudonym=len(blocks_rejected_pseudonym),
    )

    lines: list[str] = [header, ""]
    for rel, result_id, block in extracted:
        rid = result_id or "(no resultId — review)"
        lines.append("")
        lines.append(f"// ─── atom: {rel}")
        lines.append(f"// resultId: {rid}")
        lines.append("// " + "─" * 76)
        lines.append(block)
        lines.append(";")

    OUTPUT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"[ok] staged {OUTPUT_PATH}")
    print(
        f"     files_scanned={files_scanned}, with_cypher={files_with_cypher}, "
        f"extracted={len(extracted)}, skipped_no_merge={blocks_skipped_no_merge}, "
        f"rejected_pseudonym={len(blocks_rejected_pseudonym)}"
    )

    if blocks_rejected_pseudonym:
        _report_rejections(blocks_rejected_pseudonym)
        print(
            "\n[warn] REJECTED atoms above contain real names — patch the source "
            "atoms first, then re-run. The staged Cypher file excludes them.",
            file=sys.stderr,
        )

    return 0


def _report_rejections(rejected: list[tuple[str, list[tuple[str, str, int]]]]) -> None:
    print("\n[warn] pseudonym violations detected (atoms REJECTED from staging):", file=sys.stderr)
    for rel, hits in rejected:
        hits_s = "; ".join(f"{real} (id {rid} → {pseudo})" for real, pseudo, rid in hits)
        print(f"  - {rel}: {hits_s}", file=sys.stderr)


def _build_header(
    *,
    files_scanned: int,
    files_with_cypher: int,
    extracted: int,
    blocks_skipped_no_merge: int,
    blocks_rejected_pseudonym: int,
) -> str:
    return (
        "// Auto-generated Aurora promotion Cypher — DO NOT EDIT BY HAND\n"
        "//\n"
        f"// Generated: {_dt.datetime.now().isoformat(timespec='seconds')}\n"
        f"// Generator: scripts/atoms-to-cypher.py\n"
        "// Source:    wiki/claims/*.md (+ any hub file with a ```cypher MERGE block)\n"
        "//\n"
        f"// Stats:\n"
        f"//   files scanned:          {files_scanned}\n"
        f"//   files with cypher:      {files_with_cypher}\n"
        f"//   atoms extracted:        {extracted}\n"
        f"//   skipped (no MERGE):     {blocks_skipped_no_merge}\n"
        f"//   rejected (pseudonym):   {blocks_rejected_pseudonym}\n"
        "//\n"
        "// How to apply (James):\n"
        "//   1. Review this file for any unexpected real names, typos, or\n"
        "//      relationships missing a corresponding node MERGE.\n"
        "//   2. In the sister project (../defense-kg-platform/), run against the\n"
        "//      Neo4j instance configured for the Aurora graph. Recommended:\n"
        "//\n"
        "//        cypher-shell -f output/wiki-promotions-YYYY-MM-DD.cypher\n"
        "//\n"
        "//      Or open neo4j-browser, paste each atom section, and run one by\n"
        "//      one for a review-as-you-go promotion.\n"
        "//   3. After a successful run, commit the change in the sister project\n"
        "//      with a link back to the wiki log entry that generated this file.\n"
        "//\n"
        "// Idempotency: every MERGE uses a unique resultId, so re-running this\n"
        "// file against an already-promoted Neo4j database will update SET\n"
        "// properties without creating duplicate nodes. Delete a node first if\n"
        "// you want a clean re-promotion.\n"
    )


if __name__ == "__main__":
    sys.exit(main())
