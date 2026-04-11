#!/usr/bin/env python3
"""
rebuild-hubs.py — regenerate navigation hub files from atom metadata.

Scans every atom under wiki/claims/ and every event under wiki/events/, and
produces **staging artifacts** in output/ that James can diff against the
current hand-maintained hubs before applying. This script NEVER writes inside
wiki/ — that would risk overwriting hand-curated content. The "stage, don't
mutate" pattern mirrors scripts/atoms-to-cypher.py.

What is generated:

    output/rebuilt-claims-index-YYYY-MM-DD.md
        Full-rewrite candidate for wiki/claims/_index.md, atoms grouped by
        primary layer with verdict/strength tags.

    output/rebuilt-contradictions-candidates-YYYY-MM-DD.md
        Full-rewrite candidate for the `## Candidate contradictions` section
        of wiki/_contradictions.md. Does NOT regenerate the curated `## Open`
        section — that remains hand-maintained.

    output/rebuilt-timeline-YYYY-MM-DD.md
        Chronological event spine derived from wiki/events/YYYY-MM-DD-*.md and
        event pages whose filename starts with a parseable date. Events that
        do not follow the date convention are listed under "Undated".

Usage:
    python3 scripts/rebuild-hubs.py

After running, diff each staging file against its target and apply manually:

    diff -u wiki/claims/_index.md output/rebuilt-claims-index-YYYY-MM-DD.md

Idempotent: re-running overwrites each day's staging files.
"""

from __future__ import annotations

import datetime as _dt
import re
import sys
from collections import defaultdict
from pathlib import Path

# --------------------------------------------------------------------------- #
# Paths

REPO_ROOT = Path(__file__).resolve().parent.parent
WIKI_DIR = REPO_ROOT / "wiki"
CLAIMS_DIR = WIKI_DIR / "claims"
EVENTS_DIR = WIKI_DIR / "events"
OUTPUT_DIR = REPO_ROOT / "output"

TODAY = _dt.date.today().isoformat()
OUT_CLAIMS = OUTPUT_DIR / f"rebuilt-claims-index-{TODAY}.md"
OUT_CANDIDATES = OUTPUT_DIR / f"rebuilt-contradictions-candidates-{TODAY}.md"
OUT_TIMELINE = OUTPUT_DIR / f"rebuilt-timeline-{TODAY}.md"

# Files excluded from atom scan
EXCLUDE_BASENAMES = {"_index.md"}


# --------------------------------------------------------------------------- #
# Regex


def _rx(pattern: str) -> re.Pattern:
    return re.compile(pattern, re.MULTILINE)


PAT_TITLE = _rx(r"^#\s+(.+?)\s*$")
PAT_LAYER_LINE = _rx(r"^\*\*Layer:\*\*\s+(.+?)\s*$")
PAT_LAYER_NUM = re.compile(r"layer-([1-7])")
PAT_CYPHER_BLOCK = re.compile(r"```cypher\s*\n(.*?)\n```", re.DOTALL)
PAT_RESULT_ID = re.compile(r'resultId:\s*"([^"]+)"')
PAT_VERDICT = re.compile(r'fr\.verdict\s*=\s*"([A-Z_]+)"')
PAT_STRENGTH = re.compile(r'fr\.strength\s*=\s*"([A-Z]+)"')
PAT_CLAIM_DESC = re.compile(r'fr\.claimDesc\s*=\s*"([^"]+)"', re.DOTALL)
PAT_DATE_PREFIX = re.compile(r"^(\d{4}-\d{2}-\d{2})-")
PAT_DATE_RANGE_PREFIX = re.compile(r"^(\d{4})-(\d{4})-")
PAT_YEAR_PREFIX = re.compile(r"^(\d{4})-")


# --------------------------------------------------------------------------- #
# Atom parsing


class Atom:
    __slots__ = (
        "path",
        "slug",
        "title",
        "layers_primary",
        "layers_secondary",
        "result_id",
        "verdict",
        "strength",
        "claim_desc_head",
    )

    def __init__(self, path: Path) -> None:
        self.path = path
        self.slug = path.stem
        self.title = ""
        self.layers_primary: list[int] = []
        self.layers_secondary: list[int] = []
        self.result_id: str | None = None
        self.verdict: str | None = None
        self.strength: str | None = None
        self.claim_desc_head: str = ""

    def parse(self) -> bool:
        try:
            body = self.path.read_text(encoding="utf-8")
        except Exception as e:
            print(f"[warn] could not read {self.path}: {e}", file=sys.stderr)
            return False

        if m := PAT_TITLE.search(body[:2000]):
            self.title = m.group(1).strip()

        # Layer: parse primary vs secondary from the Layer: line
        if m := PAT_LAYER_LINE.search(body[:4000]):
            layer_line = m.group(1)
            primary_segment = layer_line
            secondary_segment = ""
            if "(secondary" in layer_line:
                # Split into primary-ish and secondary-ish parts
                # Typical form: "[[...|Layer N]] (primary), [[...|Layer M]] (secondary — note)"
                parts = re.split(r",\s*", layer_line)
                for part in parts:
                    nums = [int(n) for n in PAT_LAYER_NUM.findall(part)]
                    if not nums:
                        continue
                    if "secondary" in part.lower():
                        self.layers_secondary.extend(nums)
                    else:
                        self.layers_primary.extend(nums)
            else:
                # Single or multi-layer with no primary/secondary distinction
                self.layers_primary.extend(int(n) for n in PAT_LAYER_NUM.findall(layer_line))

        # Dedupe while preserving order
        self.layers_primary = _dedupe(self.layers_primary)
        self.layers_secondary = _dedupe(self.layers_secondary)

        # Extract Aurora metadata from the first cypher block
        if m := PAT_CYPHER_BLOCK.search(body):
            block = m.group(1)
            if m2 := PAT_RESULT_ID.search(block):
                self.result_id = m2.group(1)
            if m2 := PAT_VERDICT.search(block):
                self.verdict = m2.group(1)
            if m2 := PAT_STRENGTH.search(block):
                self.strength = m2.group(1)
            if m2 := PAT_CLAIM_DESC.search(block):
                head = m2.group(1).strip()
                # Trim to first sentence, roughly
                head = re.split(r"[.。]\s", head, maxsplit=1)[0]
                if len(head) > 160:
                    head = head[:157] + "..."
                self.claim_desc_head = head

        return bool(self.title)

    def primary_layer(self) -> int:
        return self.layers_primary[0] if self.layers_primary else 0

    def verdict_label(self) -> str:
        if not self.verdict:
            return "(no verdict)"
        if self.strength:
            return f"**{self.verdict} ({self.strength.lower()})**"
        return f"**{self.verdict}**"


def _dedupe(seq: list[int]) -> list[int]:
    seen: set[int] = set()
    out: list[int] = []
    for x in seq:
        if x not in seen:
            seen.add(x)
            out.append(x)
    return out


# --------------------------------------------------------------------------- #
# Scan


def load_atoms() -> list[Atom]:
    atoms: list[Atom] = []
    if not CLAIMS_DIR.exists():
        return atoms
    for path in sorted(CLAIMS_DIR.glob("*.md")):
        if path.name in EXCLUDE_BASENAMES:
            continue
        atom = Atom(path)
        if atom.parse():
            atoms.append(atom)
    return atoms


def load_events() -> list[tuple[str, Path, str]]:
    """Return list of (sort_key, path, display_title) for timeline rendering."""
    events: list[tuple[str, Path, str]] = []
    if not EVENTS_DIR.exists():
        return events
    for path in sorted(EVENTS_DIR.glob("*.md")):
        if path.name in {"_index.md"}:
            continue
        title = ""
        try:
            body = path.read_text(encoding="utf-8")
            if m := PAT_TITLE.search(body[:2000]):
                title = m.group(1).strip()
        except Exception:
            pass
        name = path.stem
        if m := PAT_DATE_PREFIX.match(name):
            sort_key = m.group(1)
        elif m := PAT_DATE_RANGE_PREFIX.match(name):
            sort_key = m.group(1) + "-01-01"
        elif m := PAT_YEAR_PREFIX.match(name):
            sort_key = m.group(1) + "-01-01"
        else:
            sort_key = "zzz-" + name
        events.append((sort_key, path, title or name))
    events.sort(key=lambda t: t[0])
    return events


# --------------------------------------------------------------------------- #
# Rendering


def render_claims_index(atoms: list[Atom]) -> str:
    by_layer: dict[int, list[Atom]] = defaultdict(list)
    for a in atoms:
        layer = a.primary_layer()
        by_layer[layer].append(a)
    cross_layer = [a for a in atoms if len(a.layers_primary) > 1]

    # Verdict distribution
    verdict_counts: dict[str, int] = defaultdict(int)
    for a in atoms:
        verdict_counts[a.verdict or "(none)"] += 1

    lines: list[str] = []
    lines.append("# Claims (주장 단위) — STAGING REBUILD")
    lines.append("")
    lines.append(
        "> **This is a staging rebuild from `scripts/rebuild-hubs.py`.** Do not overwrite "
        "the live `wiki/claims/_index.md` with this file wholesale — diff first and copy "
        "the Atoms sections only. The schema intro and hand-curated notes in the live "
        "file are not regenerable."
    )
    lines.append("")
    lines.append(f"**Generated:** {_dt.datetime.now().isoformat(timespec='seconds')}")
    lines.append(f"**Total atoms:** {len(atoms)}")
    lines.append(f"**Cross-layer atoms (≥2 primary layers):** {len(cross_layer)}")
    lines.append("")
    lines.append("## Verdict distribution")
    lines.append("")
    lines.append("| Verdict | Count |")
    lines.append("|---|---|")
    for v in sorted(verdict_counts):
        lines.append(f"| {v} | {verdict_counts[v]} |")
    lines.append("")
    lines.append("## Atoms by primary layer")
    lines.append("")

    layer_names = {
        1: "Layer 1 — DIDC trace removal / SOP cover-up",
        2: "Layer 2 — new KIATIS project framework + officer career manipulation",
        3: "Layer 3 — informatization cartel structure",
        4: "Layer 4 — test-evaluation manipulation",
        5: "Layer 5 — false power-abuse report + fabricated audit",
        6: "Layer 6 — military prosecutor fraud investigation",
        7: "Layer 7 — institutional rejection chain",
        0: "Unassigned / meta",
    }
    for layer in (1, 2, 3, 4, 5, 6, 7, 0):
        bucket = by_layer.get(layer, [])
        if not bucket:
            continue
        lines.append(f"### {layer_names[layer]} ({len(bucket)})")
        lines.append("")
        for a in sorted(bucket, key=lambda x: (x.verdict or "ZZ", x.slug)):
            # Build a compact bullet
            extra_layers = []
            if len(a.layers_primary) > 1:
                extra_layers.extend(f"+L{n}" for n in a.layers_primary[1:])
            if a.layers_secondary:
                extra_layers.extend(f"(L{n})" for n in a.layers_secondary)
            extra = f" {' '.join(extra_layers)}" if extra_layers else ""
            title = a.title or a.slug
            # Shorten very long titles
            if len(title) > 120:
                title = title[:117] + "..."
            lines.append(f"- [[{a.slug}]]{extra} — {title} — {a.verdict_label()}")
        lines.append("")

    return "\n".join(lines) + "\n"


def render_candidates(atoms: list[Atom]) -> str:
    lines: list[str] = []
    lines.append("# Contradictions — Candidates (STAGING REBUILD)")
    lines.append("")
    lines.append(
        "> **This is a staging rebuild from `scripts/rebuild-hubs.py`.** It covers the "
        "`## Candidate contradictions` section of `wiki/_contradictions.md` only. The "
        "curated `## Open` section is hand-maintained and is NOT regenerated by this "
        "script."
    )
    lines.append("")
    lines.append(f"**Generated:** {_dt.datetime.now().isoformat(timespec='seconds')}")
    lines.append(f"**Total atoms inspected:** {len(atoms)}")
    lines.append("")
    lines.append("## Auto-derived candidate contradictions")
    lines.append("")
    lines.append(
        "Each row below is derived from a single claim atom's `fr.claimDesc` and "
        "`fr.verdict` / `fr.strength` fields. A candidate is a *potential* Open entry; "
        "promotion requires human judgement (is the atom contract-complete? do the "
        "verdict and strength warrant formal promotion?) and is therefore NOT automated."
    )
    lines.append("")
    by_layer: dict[int, list[Atom]] = defaultdict(list)
    for a in atoms:
        by_layer[a.primary_layer()].append(a)

    layer_order = (1, 2, 3, 4, 5, 6, 7, 0)
    layer_titles = {
        1: "Layer 1",
        2: "Layer 2",
        3: "Layer 3",
        4: "Layer 4",
        5: "Layer 5",
        6: "Layer 6",
        7: "Layer 7",
        0: "Unassigned / cross-layer",
    }
    for layer in layer_order:
        bucket = by_layer.get(layer, [])
        if not bucket:
            continue
        lines.append(f"### {layer_titles[layer]}")
        lines.append("")
        for a in sorted(bucket, key=lambda x: x.slug):
            rid = a.result_id or "(no resultId)"
            head = a.claim_desc_head or a.title or a.slug
            verdict = a.verdict or "(none)"
            strength = a.strength or ""
            s_suffix = f" ({strength.lower()})" if strength else ""
            lines.append(
                f"- **{rid}** — {head} → [[claims/{a.slug}]] | {verdict}{s_suffix}"
            )
        lines.append("")

    # Rollup
    verdict_counts: dict[str, int] = defaultdict(int)
    for a in atoms:
        verdict_counts[a.verdict or "(none)"] += 1
    lines.append("### Candidate rollup")
    lines.append("")
    lines.append("| Verdict | Count |")
    lines.append("|---|---|")
    for v in sorted(verdict_counts):
        lines.append(f"| {v} | {verdict_counts[v]} |")
    lines.append(f"| **Total** | {len(atoms)} |")
    lines.append("")

    return "\n".join(lines) + "\n"


def render_timeline(events: list[tuple[str, Path, str]]) -> str:
    lines: list[str] = []
    lines.append("# Timeline (STAGING REBUILD)")
    lines.append("")
    lines.append(
        "> **This is a staging rebuild from `scripts/rebuild-hubs.py`.** Derived from "
        "the filenames and titles of every file under `wiki/events/`. Files whose "
        "filename does not start with a parseable date are listed under 'Undated'."
    )
    lines.append("")
    lines.append(f"**Generated:** {_dt.datetime.now().isoformat(timespec='seconds')}")
    lines.append(f"**Events indexed:** {len(events)}")
    lines.append("")
    lines.append("## Chronological spine")
    lines.append("")
    for sort_key, path, title in events:
        slug = path.stem
        date_display = sort_key if not sort_key.startswith("zzz-") else "Undated"
        lines.append(f"- **{date_display}** — [[events/{slug}|{title}]]")
    lines.append("")
    return "\n".join(lines) + "\n"


# --------------------------------------------------------------------------- #
# Main


def main() -> int:
    if not WIKI_DIR.exists():
        print(f"[error] wiki directory not found at {WIKI_DIR}", file=sys.stderr)
        return 1
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    atoms = load_atoms()
    if not atoms:
        print("[error] no atoms found under wiki/claims/ — aborting", file=sys.stderr)
        return 2

    events = load_events()

    OUT_CLAIMS.write_text(render_claims_index(atoms), encoding="utf-8")
    OUT_CANDIDATES.write_text(render_candidates(atoms), encoding="utf-8")
    OUT_TIMELINE.write_text(render_timeline(events), encoding="utf-8")

    print(f"[ok] staged {OUT_CLAIMS}")
    print(f"[ok] staged {OUT_CANDIDATES}")
    print(f"[ok] staged {OUT_TIMELINE}")
    print(
        f"     atoms={len(atoms)} events={len(events)}"
    )
    print()
    print("Apply instructions (James):")
    print("  diff -u wiki/claims/_index.md            output/rebuilt-claims-index-{d}.md".format(d=TODAY))
    print("  diff -u wiki/_contradictions.md          output/rebuilt-contradictions-candidates-{d}.md".format(d=TODAY))
    print("  diff -u wiki/events/_index.md            output/rebuilt-timeline-{d}.md".format(d=TODAY))
    print("  # Copy only the sections you trust; do NOT wholesale-overwrite the live hubs.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
