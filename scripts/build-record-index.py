#!/usr/bin/env python3
"""
build-record-index.py — build wiki/_record-index.md from wiki article citations.

Scans every .md file under wiki/ (excluding _index / _master-index / log /
_contradictions / _examples) and extracts every Record No. citation, producing
a reverse index:

    Record No. NNNNN → [wiki files citing it, with layer claims]

Also extracts the per-layer local ID system `L{N}-NNN` separately.

Cross-references the extracted layer claims against
`../defense-kg-platform/kg/evidence_record_mapping.json` to flag any file that
cites a Record No. outside its claimed layer's range.

Outputs `wiki/_record-index.md` as a markdown file with:
    - Summary stats
    - Per-layer coverage rollup
    - Layer-range mismatches (if any)
    - Sorted Record No. → atoms table
    - L{N}-NNN local-ID table

Idempotent: re-running replaces the output file. Safe to run as often as needed.

Usage:
    python3 scripts/build-record-index.py

Pseudonym caution: this script reads wiki/ content but does NOT write any real
name and does NOT reproduce file contents — it only extracts citation tokens
and file paths, so it cannot introduce a pseudonym violation.
"""

from __future__ import annotations

import json
import re
import sys
from collections import defaultdict
from pathlib import Path

# --------------------------------------------------------------------------- #
# Paths

REPO_ROOT = Path(__file__).resolve().parent.parent
WIKI_DIR = REPO_ROOT / "wiki"
MAPPING_PATH = (
    REPO_ROOT.parent / "defense-kg-platform" / "kg" / "evidence_record_mapping.json"
)
OUTPUT_PATH = WIKI_DIR / "_record-index.md"

# Files under wiki/ to exclude from the scan (navigational / generated / logs)
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
# Regex patterns for Record No. extraction

# Korean forms:
#   기록 제N,NNN쪽
#   기록 제NNNNN쪽
#   기록 제NNNN쪽
#   제N,NNN쪽 (abbreviated inline)
#   제NNNNN쪽
#   기록 제N,NNN~M,MMM쪽 (range)
#
# English forms:
#   Record No. N,NNN
#   Record No. NNNNN
#   Record No. N,NNN-M,MMM (range)
#   Record No. N,NNN–M,MMM (en-dash range)
#
# All numbers may use commas as thousands separators.

NUMBER = r"(\d{1,3}(?:,\d{3})+|\d+)"
RANGE_SEP = r"\s*[~\-–~]\s*"

# Single value patterns
PAT_KR_RECORD = re.compile(
    rf"기록\s*제\s*{NUMBER}(?:(?:{RANGE_SEP}){NUMBER})?\s*(?:쪽|p)?"
)
PAT_KR_SHORT = re.compile(rf"(?<!기록\s)(?<!기록)\s*제\s*{NUMBER}\s*쪽")
PAT_EN_RECORD = re.compile(
    rf"Record\s+No\.?\s*{NUMBER}(?:(?:{RANGE_SEP}){NUMBER})?", re.IGNORECASE
)

# Layer-local ID system: L{N}-NNN where N in 1..7 and NNN is 2+ digits
PAT_LOCAL_ID = re.compile(r"\bL([1-7])-(\d{2,4})\b")

# Layer claim extraction from `**Layer:** [[../layers/layer-N|Layer N]]`
PAT_LAYER_CLAIM = re.compile(r"layer-([1-7])")


def strip_commas(n: str) -> int:
    return int(n.replace(",", ""))


def expand_range(lo: int, hi: int, *, cap: int = 100) -> list[int] | None:
    """Expand a range to a list. Skip ranges wider than `cap` records entirely.

    Wide ranges in the wiki are almost always layer-range declarations (e.g.,
    "Record No. 1–810" on a layer hub page) rather than actual citations of
    every record in the range. Treating them as citations pollutes the reverse
    index with false-positive coverage. Returning `None` signals the caller to
    skip this match entirely.
    """
    if hi < lo:
        lo, hi = hi, lo
    span = hi - lo + 1
    if span > cap:
        return None
    return list(range(lo, hi + 1))


# --------------------------------------------------------------------------- #
# Load layer ranges from sister project mapping


def load_layer_ranges() -> dict[int, tuple[int, int]]:
    """Load {layer: (lo, hi)} from evidence_record_mapping.json.

    Mapping shape varies; we try several common shapes. Falls back to a
    hardcoded range table if the file is missing or unparseable (the canonical
    ranges are also documented in CLAUDE.md and rarely change).
    """
    canonical = {
        1: (1, 810),
        2: (1000, 1587),
        3: (1600, 2465),
        4: (2500, 3699),
        5: (3700, 4555),
        6: (4600, 5248),
        7: (5300, 13495),
    }
    if not MAPPING_PATH.exists():
        print(
            f"[warn] mapping file not found at {MAPPING_PATH} — using canonical ranges",
            file=sys.stderr,
        )
        return canonical
    try:
        data = json.loads(MAPPING_PATH.read_text(encoding="utf-8"))
    except Exception as e:
        print(
            f"[warn] failed to parse {MAPPING_PATH} ({e}) — using canonical ranges",
            file=sys.stderr,
        )
        return canonical

    # Try several shapes
    ranges: dict[int, tuple[int, int]] = {}

    def _try_layer_key(obj, key_prefix: str) -> None:
        for k, v in obj.items():
            m = re.match(rf"{key_prefix}(\d)", str(k))
            if not m or not isinstance(v, dict):
                continue
            layer = int(m.group(1))
            lo = v.get("recordRangeStart") or v.get("start") or v.get("lo")
            hi = v.get("recordRangeEnd") or v.get("end") or v.get("hi")
            if isinstance(lo, int) and isinstance(hi, int):
                ranges[layer] = (lo, hi)

    if isinstance(data, dict):
        if "layers" in data and isinstance(data["layers"], dict):
            _try_layer_key(data["layers"], "layer_?")
            _try_layer_key(data["layers"], "")
        _try_layer_key(data, "layer_?")
        _try_layer_key(data, "L")

    if len(ranges) == 7:
        return ranges
    print("[warn] could not parse all 7 layer ranges from mapping — using canonical", file=sys.stderr)
    return canonical


# --------------------------------------------------------------------------- #
# Scan wiki files


def iter_wiki_files(wiki_dir: Path):
    for path in sorted(wiki_dir.rglob("*.md")):
        if path.name in EXCLUDE_BASENAMES:
            continue
        if any(part in EXCLUDE_DIRS for part in path.relative_to(wiki_dir).parts):
            continue
        yield path


def extract_layers(body: str) -> set[int]:
    # Only scan the first ~500 chars where the Layer: line lives
    head = body[:800]
    return {int(m) for m in PAT_LAYER_CLAIM.findall(head)}


def extract_record_nos(body: str) -> list[tuple[int, str]]:
    """Return a list of (record_no, context_snippet) tuples."""
    found: list[tuple[int, str]] = []

    def _record(num: int, snippet: str) -> None:
        if 1 <= num <= 20000:
            found.append((num, snippet.strip()))

    for m in PAT_KR_RECORD.finditer(body):
        lo = strip_commas(m.group(1))
        hi_s = m.group(2)
        snippet = body[max(0, m.start() - 20) : m.end() + 20].replace("\n", " ")
        if hi_s is None:
            _record(lo, snippet)
        else:
            hi = strip_commas(hi_s)
            expanded = expand_range(lo, hi)
            if expanded is None:
                continue  # too-wide range = layer declaration, not a citation
            for n in expanded:
                _record(n, snippet)

    for m in PAT_KR_SHORT.finditer(body):
        num = strip_commas(m.group(1))
        snippet = body[max(0, m.start() - 20) : m.end() + 20].replace("\n", " ")
        _record(num, snippet)

    for m in PAT_EN_RECORD.finditer(body):
        lo = strip_commas(m.group(1))
        hi_s = m.group(2)
        snippet = body[max(0, m.start() - 20) : m.end() + 20].replace("\n", " ")
        if hi_s is None:
            _record(lo, snippet)
        else:
            hi = strip_commas(hi_s)
            expanded = expand_range(lo, hi)
            if expanded is None:
                continue
            for n in expanded:
                _record(n, snippet)

    return found


def extract_local_ids(body: str) -> list[tuple[int, int]]:
    return [(int(m.group(1)), int(m.group(2))) for m in PAT_LOCAL_ID.finditer(body)]


# --------------------------------------------------------------------------- #
# Layer range lookup


def record_layer(n: int, ranges: dict[int, tuple[int, int]]) -> int | None:
    for layer, (lo, hi) in ranges.items():
        if lo <= n <= hi:
            return layer
    return None


# --------------------------------------------------------------------------- #
# Build and render index


def main() -> int:
    if not WIKI_DIR.exists():
        print(f"[error] wiki directory not found at {WIKI_DIR}", file=sys.stderr)
        return 1

    ranges = load_layer_ranges()

    # Primary index: record_no → list of (file_rel, claimed_layers)
    record_index: dict[int, list[tuple[str, set[int]]]] = defaultdict(list)
    local_id_index: dict[tuple[int, int], list[str]] = defaultdict(list)

    files_scanned = 0
    files_with_records = 0
    mismatches: list[tuple[str, int, int, set[int]]] = []

    for path in iter_wiki_files(WIKI_DIR):
        try:
            body = path.read_text(encoding="utf-8")
        except Exception as e:
            print(f"[warn] could not read {path}: {e}", file=sys.stderr)
            continue
        files_scanned += 1

        rel = str(path.relative_to(REPO_ROOT))
        layers = extract_layers(body)
        records = extract_record_nos(body)
        local_ids = extract_local_ids(body)

        if records or local_ids:
            files_with_records += 1

        # Deduplicate record numbers per file (a record can be cited multiple times)
        seen: set[int] = set()
        for num, _snippet in records:
            if num in seen:
                continue
            seen.add(num)
            record_index[num].append((rel, layers))
            # Cross-layer check
            expected = record_layer(num, ranges)
            if expected is not None and layers and expected not in layers:
                mismatches.append((rel, num, expected, layers))

        for layer, seq in local_ids:
            local_id_index[(layer, seq)].append(rel)

    # Sort
    sorted_records = sorted(record_index.items())
    sorted_locals = sorted(local_id_index.items())

    # Layer coverage rollup
    by_layer: dict[int, int] = defaultdict(int)
    for num in record_index:
        layer = record_layer(num, ranges)
        if layer is not None:
            by_layer[layer] += 1
    total_records = len(record_index)

    # --------------------------------------------------------------------- #
    # Render

    lines: list[str] = []
    lines.append("# Record Number Reverse Index")
    lines.append("")
    lines.append(
        "Auto-generated by `scripts/build-record-index.py`. **Do not edit by hand** — "
        "rerun the script to regenerate from current wiki content. This file is the "
        "retrieval layer for any query of the form \"what does the wiki say about "
        "Record No. NNNNN?\" and for any reverse-direction check against the book's "
        "evidence record numbering."
    )
    lines.append("")
    lines.append("**Last built:** regenerated on script invocation")
    lines.append("")
    lines.append(f"**Files scanned:** {files_scanned}")
    lines.append(
        f"**Files citing ≥1 Record No. or L{{N}}-NNN:** {files_with_records}"
    )
    lines.append(f"**Unique Record Nos. indexed:** {total_records}")
    lines.append(f"**Unique L{{N}}-NNN local IDs indexed:** {len(local_id_index)}")
    lines.append("")

    # Layer coverage
    lines.append("## Layer coverage (Record No. citations by inferred layer)")
    lines.append("")
    lines.append("| Layer | Record No. range | Unique records cited | % of layer range |")
    lines.append("|---|---|---|---|")
    for layer in range(1, 8):
        lo, hi = ranges.get(layer, (0, 0))
        cited = by_layer.get(layer, 0)
        total = hi - lo + 1 if hi >= lo else 0
        pct = (cited / total * 100.0) if total else 0.0
        lines.append(
            f"| Layer {layer} | {lo:,}–{hi:,} | {cited} | {pct:.2f}% |"
        )
    lines.append("")

    # Mismatches
    if mismatches:
        lines.append("## ⚠️ Layer-assignment mismatches")
        lines.append("")
        lines.append(
            "Files that cite a Record No. from a layer range OUTSIDE their claimed "
            "`**Layer:**` line. This may indicate (a) a missing secondary layer "
            "assignment, (b) a mis-cited record number, or (c) a cross-layer finding "
            "that warrants an explicit note in the atom."
        )
        lines.append("")
        lines.append("| File | Record No. | Record belongs to | Claimed layers |")
        lines.append("|---|---|---|---|")
        for rel, num, expected, claimed in sorted(mismatches):
            claimed_s = ",".join(str(x) for x in sorted(claimed)) or "—"
            lines.append(f"| {rel} | {num:,} | Layer {expected} | {claimed_s} |")
        lines.append("")
    else:
        lines.append("## Layer-assignment check")
        lines.append("")
        lines.append("No layer-assignment mismatches detected. ✅")
        lines.append("")

    # Record No. index
    lines.append("## Record No. → atoms (reverse index)")
    lines.append("")
    lines.append("| Record No. | Layer | Atoms citing |")
    lines.append("|---|---|---|")
    for num, entries in sorted_records:
        layer = record_layer(num, ranges)
        layer_s = f"L{layer}" if layer is not None else "—"
        files = sorted({rel for rel, _ in entries})
        files_s = ", ".join(f"`{f}`" for f in files)
        lines.append(f"| {num:,} | {layer_s} | {files_s} |")
    lines.append("")

    # L{N}-NNN local IDs
    if sorted_locals:
        lines.append("## L{N}-NNN local-ID index")
        lines.append("")
        lines.append("| Local ID | Files citing |")
        lines.append("|---|---|")
        for (layer, seq), files in sorted_locals:
            files_s = ", ".join(f"`{f}`" for f in sorted(set(files)))
            lines.append(f"| L{layer}-{seq:03d} | {files_s} |")
        lines.append("")

    lines.append("## Provenance")
    lines.append("")
    lines.append(
        f"- **Source mapping:** `{MAPPING_PATH.relative_to(REPO_ROOT.parent)}`"
    )
    lines.append(f"- **Script:** `scripts/build-record-index.py`")
    lines.append(
        "- **Scan scope:** every `.md` under `wiki/` except navigation files "
        "(`_index.md`, `_master-index.md`, `_contradictions.md`, `log.md`, "
        "`timeline.md`, `_examples/`)"
    )
    lines.append("")

    OUTPUT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"[ok] wrote {OUTPUT_PATH}")
    print(
        f"     files_scanned={files_scanned}, with_records={files_with_records}, "
        f"unique_records={total_records}, local_ids={len(local_id_index)}, "
        f"mismatches={len(mismatches)}"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
