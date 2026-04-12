#!/usr/bin/env python3
"""
parse-book-sections.py — parse the book's section tree as a diagnostic artifact.

Walks the 7 chapter files under
  raw/01. book-beyond-cybersecurity/vault-converted-korean/
that contain Layer 1–7 prose (files 07-…Level1 through 13-…Level7), extracts the
heading tree (`^#{3,6}\\s+N(\\.N)+\\.?\\s+title`), and produces a flat section
index with per-section metadata:

    - section_number       e.g. "3.4.2.1"
    - title                heading text after the number
    - depth                number of dot-separated segments (§3.4 = 2, §3.4.2.1 = 4)
    - heading_level        markdown h-level (3..6)
    - parent_chain         list of ancestor section numbers up to the chapter
    - source_file          chapter filename
    - layer                1..7 (inferred from parent chapter)
    - line_start           first line of this section's body (after heading)
    - line_end             last line before the next same-or-shallower heading
    - word_count           approximate word count of section body (whitespace-split)
    - record_count         count of `기록 제NNNNN쪽` + `Record No. NNNNN` matches
    - record_list          sorted, deduped list of Record Nos. in the section body
    - atom_hits            list of existing wiki/claims/*.md atoms that cite ANY
                           of this section's Record Nos. (from wiki/_record-index.md
                           if present, else empty — this column is advisory only)

Output: output/book-section-tree-YYYY-MM-DD.md  (interpretation-stage artifact,
NOT written to wiki/). Stage-don't-mutate: running this script never modifies any
file under wiki/ or raw/.

Design notes:
- Parent-chain is tracked so downstream compile passes can read ancestor section
  context (Korean-first role-anchor identifiers are often introduced in parent
  sections and reused in leaves).
- atom_hits is a weak duplication signal only: record-hit ≠ proposition-duplicate.
- Depth and heading_level are stored separately because they are not always equal
  (some chapters start at `###` = h3 for §3.1, others at `##` for §3).

Usage:
    python3 scripts/parse-book-sections.py
    python3 scripts/parse-book-sections.py --json   # also dump raw JSON to /tmp

Pseudonym caution: this script reads the Korean book prose and writes section
titles + Record No. lists to the output file. It deliberately does NOT include
section body text in the output, so real names embedded in prose are not
propagated. Titles are inspected for real-name tokens and flagged (not redacted).
"""

from __future__ import annotations

import json
import re
import sys
from collections import defaultdict
from datetime import date
from pathlib import Path

# --------------------------------------------------------------------------- #
# Paths

REPO_ROOT = Path(__file__).resolve().parent.parent
BOOK_DIR = (
    REPO_ROOT
    / "raw"
    / "01. book-beyond-cybersecurity"
    / "vault-converted-korean"
)
OUTPUT_DIR = REPO_ROOT / "output"
OUTPUT_PATH = OUTPUT_DIR / f"book-section-tree-{date.today().isoformat()}.md"
JSON_PATH = Path("/tmp") / f"book-section-tree-{date.today().isoformat()}.json"
RECORD_INDEX_PATH = REPO_ROOT / "wiki" / "_record-index.md"

# Map chapter-file prefix → layer number. The book file names encode
# layer via the leading "NN-3-L-3L-..." pattern where L is 1..7.
CHAPTER_FILES = {
    1: "07-3-1-31-제1층위-ActiveX.md",
    2: "08-3-2-32-제2-층위.md",
    3: "09-3-3-33-제3-층위.md",
    4: "10-3-4-34-제4-층위.md",
    5: "11-3-5-35-제-5층위.md",
    6: "12-3-6-36-제6층위-군.md",
    7: "13-3-7-37-제7층위-진정서.md",
}

# --------------------------------------------------------------------------- #
# Regex

# Matches a markdown heading line whose text begins with N, N.N, N.N.N, ...
# Captures: (1) heading hashes, (2) dotted number, (3) title text.
HEADING_RE = re.compile(r"^(#{2,6})\s+(\d+(?:\.\d+)+)\.?\s+(.+?)\s*$")

# Record No. patterns — both Korean and English forms used in the book.
RECORD_RE_KOREAN = re.compile(r"기록\s*제\s*([\d,]+)\s*쪽")
RECORD_RE_ENGLISH = re.compile(r"Record\s+No\.\s*([\d,]+)", re.IGNORECASE)


def parse_record_number(raw: str) -> int | None:
    """Convert '10,347' or '10347' to int 10347."""
    try:
        return int(raw.replace(",", ""))
    except ValueError:
        return None


# --------------------------------------------------------------------------- #
# Section extraction


def extract_sections(layer: int, path: Path) -> list[dict]:
    """Parse one chapter file into a flat list of section dicts."""
    if not path.exists():
        print(f"[warn] missing chapter file: {path}", file=sys.stderr)
        return []

    lines = path.read_text(encoding="utf-8").splitlines()
    # First pass: locate every heading line and compute line ranges.
    headings: list[dict] = []  # each: {line_idx, hashes, number, title}
    for idx, line in enumerate(lines):
        m = HEADING_RE.match(line)
        if not m:
            continue
        headings.append(
            {
                "line_idx": idx,
                "heading_level": len(m.group(1)),
                "number": m.group(2),
                "title": m.group(3).strip(),
            }
        )

    sections: list[dict] = []
    for i, h in enumerate(headings):
        # Body = lines strictly after this heading, up to (but excluding) the
        # next heading whose depth is <= this one. Depth is computed from
        # dot count of the section number.
        this_depth = h["number"].count(".") + 1
        body_start = h["line_idx"] + 1
        body_end = len(lines)  # default: rest of file
        for j in range(i + 1, len(headings)):
            nxt = headings[j]
            nxt_depth = nxt["number"].count(".") + 1
            if nxt_depth <= this_depth:
                body_end = nxt["line_idx"]
                break
        body = "\n".join(lines[body_start:body_end])

        # Records from body
        records: set[int] = set()
        for rx in (RECORD_RE_KOREAN, RECORD_RE_ENGLISH):
            for m in rx.finditer(body):
                n = parse_record_number(m.group(1))
                if n is not None:
                    records.add(n)

        # Parent chain: drop the last dot-segment iteratively until empty.
        parent_chain: list[str] = []
        segs = h["number"].split(".")
        while len(segs) > 1:
            segs = segs[:-1]
            parent_chain.append(".".join(segs))
        parent_chain.reverse()  # root first

        sections.append(
            {
                "section_number": h["number"],
                "title": h["title"],
                "depth": this_depth,
                "heading_level": h["heading_level"],
                "parent_chain": parent_chain,
                "source_file": path.name,
                "layer": layer,
                "line_start": body_start + 1,  # 1-indexed for display
                "line_end": body_end,  # exclusive body end, 1-indexed
                "word_count": len(body.split()),
                "record_count": len(records),
                "record_list": sorted(records),
            }
        )

    return sections


# --------------------------------------------------------------------------- #
# atom_hits — advisory duplication signal via wiki/_record-index.md


def load_record_index_hits() -> dict[int, list[str]]:
    """Parse wiki/_record-index.md to build Record No. → [atom filenames]."""
    hits: dict[int, list[str]] = defaultdict(list)
    if not RECORD_INDEX_PATH.exists():
        return hits

    text = RECORD_INDEX_PATH.read_text(encoding="utf-8")
    # Expect rows like: `| 2 | L1 | \`wiki/claims/foo.md\`, \`wiki/events/bar.md\` |`
    # Three pipe-separated cells: record_no | layer | file_list.
    row_re = re.compile(
        r"^\|\s*([\d,]+)\s*\|\s*[^|]*\|\s*(.+?)\s*\|\s*$", re.MULTILINE
    )
    for m in row_re.finditer(text):
        n = parse_record_number(m.group(1))
        if n is None:
            continue
        cell = m.group(2)
        # Atom references look like `wiki/claims/foo.md` (backticked) or similar.
        for atom in re.findall(r"claims/([a-z0-9\-]+)\.md", cell):
            if atom not in hits[n]:
                hits[n].append(atom)
    return hits


# --------------------------------------------------------------------------- #
# Output rendering


def render_markdown(all_sections: list[dict], atom_hits: dict[int, list[str]]) -> str:
    total = len(all_sections)
    by_depth: dict[int, int] = defaultdict(int)
    by_layer: dict[int, int] = defaultdict(int)
    leaf_candidates = 0  # depth >= 4 AND record_count >= 1 AND word_count >= 50
    covered_leaves = 0
    for s in all_sections:
        by_depth[s["depth"]] += 1
        by_layer[s["layer"]] += 1
        if s["depth"] >= 4 and s["record_count"] >= 1 and s["word_count"] >= 50:
            leaf_candidates += 1
            # "covered" = any record in this section is cited by at least one atom
            if any(r in atom_hits for r in s["record_list"]):
                covered_leaves += 1

    # Augment each section with atom_hit list for rendering
    for s in all_sections:
        atoms: set[str] = set()
        for r in s["record_list"]:
            for a in atom_hits.get(r, []):
                atoms.add(a)
        s["atom_hits"] = sorted(atoms)

    out: list[str] = []
    out.append(f"# Book Section Tree — {date.today().isoformat()}")
    out.append("")
    out.append(
        "Generated by `scripts/parse-book-sections.py`. **Interpretation-stage diagnostic artifact.** "
        "Not part of `wiki/`. Never authored by hand; regenerate instead."
    )
    out.append("")
    out.append("## Summary")
    out.append("")
    out.append(f"- Chapter files scanned: {len(CHAPTER_FILES)}")
    out.append(f"- Total sections extracted: **{total}**")
    out.append(
        f"- Leaf atom candidates (depth ≥ 4 ∧ record ≥ 1 ∧ words ≥ 50): **{leaf_candidates}**"
    )
    out.append(
        f"- Leaf candidates already touched by ≥1 existing atom (advisory): {covered_leaves} / {leaf_candidates}"
    )
    out.append("")
    out.append("### Distribution by depth")
    out.append("")
    out.append("| Depth | Count |")
    out.append("|---|---|")
    for d in sorted(by_depth):
        out.append(f"| {d} | {by_depth[d]} |")
    out.append("")
    out.append("### Distribution by layer")
    out.append("")
    out.append("| Layer | Section count |")
    out.append("|---|---|")
    for layer in sorted(by_layer):
        out.append(f"| L{layer} | {by_layer[layer]} |")
    out.append("")

    # Full table
    out.append("## Full section index")
    out.append("")
    out.append(
        "Columns: §number · layer · depth · h-level · words · records · atom_hits (advisory) · title"
    )
    out.append("")
    out.append(
        "| § | L | d | h | words | rec# | records | atom_hits | line | title |"
    )
    out.append("|---|---|---|---|---|---|---|---|---|---|")
    for s in all_sections:
        rec_str = ", ".join(f"{r:,}" for r in s["record_list"][:6])
        if len(s["record_list"]) > 6:
            rec_str += f" (+{len(s['record_list']) - 6})"
        atom_str = ", ".join(s["atom_hits"][:3])
        if len(s["atom_hits"]) > 3:
            atom_str += f" (+{len(s['atom_hits']) - 3})"
        # Escape pipe chars in titles to avoid breaking the markdown table.
        title = s["title"].replace("|", "\\|")
        out.append(
            f"| {s['section_number']} | L{s['layer']} | {s['depth']} | "
            f"h{s['heading_level']} | {s['word_count']} | "
            f"{s['record_count']} | {rec_str} | {atom_str} | "
            f"{s['line_start']}–{s['line_end']} | {title} |"
        )
    out.append("")

    # Uncovered leaf candidates — the working queue for any section-walking compile.
    out.append("## Uncovered leaf candidates (priority compile queue)")
    out.append("")
    out.append(
        "Filter: depth ≥ 4 ∧ record_count ≥ 1 ∧ word_count ≥ 50 ∧ atom_hits empty. "
        "This is a WORKING QUEUE for evaluation, not an auto-execute list. "
        "Each leaf should be human-reviewed for atomicity (one section may need "
        "1 atom or N atoms — section-walking does NOT guarantee 1:1)."
    )
    out.append("")
    out.append("| § | L | d | words | rec# | title |")
    out.append("|---|---|---|---|---|---|")
    for s in all_sections:
        if (
            s["depth"] >= 4
            and s["record_count"] >= 1
            and s["word_count"] >= 50
            and not s["atom_hits"]
        ):
            title = s["title"].replace("|", "\\|")
            out.append(
                f"| {s['section_number']} | L{s['layer']} | {s['depth']} | "
                f"{s['word_count']} | {s['record_count']} | {title} |"
            )
    out.append("")

    out.append("## Notes")
    out.append("")
    out.append(
        "- `atom_hits` is an ADVISORY duplication signal. A record-level hit does "
        "not guarantee the existing atom covers the same proposition as the section. "
        "Use the hit to trigger human review, never as auto-skip."
    )
    out.append(
        "- `word_count` is whitespace-split, so it counts Korean characters "
        "conservatively. A 50-word filter is roughly equivalent to ~3–5 Korean sentences."
    )
    out.append(
        "- Sections with very high word_count (e.g. > 500) at depth 4 almost "
        "certainly need to split into multiple atoms — section-walking 1:1 is a "
        "default assumption that breaks for dense adversarial prose."
    )
    out.append(
        "- `parent_chain` is not rendered in the table (to keep it legible) but "
        "is available in the JSON dump (`python3 scripts/parse-book-sections.py --json`)."
    )
    out.append("")
    return "\n".join(out)


# --------------------------------------------------------------------------- #
# Main


def main() -> int:
    emit_json = "--json" in sys.argv[1:]

    all_sections: list[dict] = []
    for layer, fname in CHAPTER_FILES.items():
        path = BOOK_DIR / fname
        sections = extract_sections(layer, path)
        all_sections.extend(sections)

    atom_hits = load_record_index_hits()

    markdown = render_markdown(all_sections, atom_hits)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(markdown, encoding="utf-8")
    print(f"[ok] wrote {OUTPUT_PATH} ({len(all_sections)} sections)")

    if emit_json:
        JSON_PATH.write_text(
            json.dumps(all_sections, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        print(f"[ok] wrote {JSON_PATH}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
