#!/usr/bin/env python3
"""
scan-for-real-names.py — Layer 2 pseudonymization defense gate.

Scans compiled JSON artifacts (graph.json, detail.json, i18n files,
and any additional paths given on the command line) for occurrences
of real person names from the pseudonym mapping.

Layer 1 (hook):  check-pseudonym.sh prevents real names entering wiki/ at write time
Layer 2 (build): THIS SCRIPT — run after JSON generation, before serving assets
Layer 3 (deploy): pre-deploy-scan.sh calls this against ui/dist/ after ng build

Exit codes:
    0  — clean, no violations found
    1  — one or more real names detected (FAIL — do not deploy)
    2  — configuration error (mapping not found, scan target missing)

Usage:
    python3 scripts/scan-for-real-names.py                 # scan default targets
    python3 scripts/scan-for-real-names.py path/to/file    # scan specific file
    python3 scripts/scan-for-real-names.py ui/dist/        # scan directory tree
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

def _find_mapping() -> Path:
    """Locate pseudonym_mapping.json regardless of worktree depth."""
    candidates = [
        REPO_ROOT.parent / "defense-kg-platform" / "kg" / "pseudonym_mapping.json",
        REPO_ROOT.parent.parent.parent.parent / "defense-kg-platform" / "kg" / "pseudonym_mapping.json",
        Path("/Users/a0/Projects/defense-kg-platform/kg/pseudonym_mapping.json"),
    ]
    for c in candidates:
        if c.exists():
            return c
    return candidates[0]  # will fail with clear error in load_real_names()

MAPPING_PATH = _find_mapping()

DEFAULT_SCAN_TARGETS = [
    REPO_ROOT / "output" / "graph.json",
    REPO_ROOT / "output" / "detail.json",
    REPO_ROOT / "ui" / "src" / "assets" / "graph.json",
    REPO_ROOT / "ui" / "src" / "assets" / "detail.json",
    REPO_ROOT / "ui" / "src" / "assets" / "i18n" / "en.json",
    REPO_ROOT / "ui" / "src" / "assets" / "i18n" / "kr.json",
]

# Extensions to scan when a directory is given
SCAN_EXTENSIONS = {".json", ".js", ".html", ".css", ".md", ".txt"}


def load_real_names() -> list[tuple[str, str, int]]:
    """Load (real_name, pseudonym, id) tuples from the mapping file.

    Returns entries for both KR and EN real names.
    """
    if not MAPPING_PATH.exists():
        print(f"[error] pseudonym mapping not found: {MAPPING_PATH}", file=sys.stderr)
        sys.exit(2)

    try:
        data = json.loads(MAPPING_PATH.read_text(encoding="utf-8"))
    except Exception as exc:
        print(f"[error] failed to parse mapping: {exc}", file=sys.stderr)
        sys.exit(2)

    entries_raw = data.get("mappings") if isinstance(data, dict) else data
    if not isinstance(entries_raw, list):
        print("[error] unexpected mapping format", file=sys.stderr)
        sys.exit(2)

    names: list[tuple[str, str, int]] = []
    seen: set[str] = set()
    for entry in entries_raw:
        eid = entry.get("id", "?")
        pseudo_kr = entry.get("pseudo_name_kr", "")
        for key in ("origin_name_kr", "origin_name_en"):
            real = (entry.get(key) or "").strip()
            if not real or len(real) < 2 or real in seen:
                continue
            pseudo = entry.get("pseudo_name_en", "") if key == "origin_name_en" else pseudo_kr
            names.append((real, pseudo or pseudo_kr, eid))
            seen.add(real)
    return names


def scan_text(content: str, path: Path, names: list[tuple[str, str, int]]) -> list[dict]:
    """Scan content string for real names. Returns list of violation dicts."""
    violations = []
    lines = content.split("\n")
    for lineno, line in enumerate(lines, 1):
        for real, pseudo, eid in names:
            if re.search(r"[A-Za-z]", real):
                pattern = r"\b" + re.escape(real) + r"\b"
                hit = re.search(pattern, line) is not None
            else:
                hit = real in line
            if hit:
                snippet = line.strip()[:120]
                violations.append({
                    "file": str(path),
                    "line": lineno,
                    "real_name": real,
                    "pseudonym": pseudo,
                    "mapping_id": eid,
                    "snippet": snippet,
                })
    return violations


def collect_files(targets: list[Path]) -> list[Path]:
    """Expand directories to individual files with scannable extensions."""
    files: list[Path] = []
    for target in targets:
        if not target.exists():
            continue
        if target.is_dir():
            for ext in SCAN_EXTENSIONS:
                files.extend(target.rglob(f"*{ext}"))
        else:
            files.append(target)
    return files


def main() -> int:
    names = load_real_names()
    if not names:
        print("[error] no real names loaded from mapping", file=sys.stderr)
        return 2

    # Build scan target list
    if len(sys.argv) > 1:
        raw_targets = [Path(p) for p in sys.argv[1:]]
    else:
        raw_targets = DEFAULT_SCAN_TARGETS

    files = collect_files(raw_targets)
    if not files:
        print("[scan-for-real-names] no files to scan — all targets missing/empty")
        return 0

    print(f"[scan-for-real-names] scanning {len(files)} file(s) for {len(names)} real names …")

    all_violations: list[dict] = []
    for fpath in sorted(files):
        try:
            content = fpath.read_text(encoding="utf-8", errors="replace")
        except Exception as exc:
            print(f"  [warn] could not read {fpath}: {exc}")
            continue
        viols = scan_text(content, fpath, names)
        all_violations.extend(viols)

    if not all_violations:
        print("[scan-for-real-names] ✓ CLEAN — no real names detected")
        return 0

    print(f"\n[scan-for-real-names] ✗ VIOLATIONS FOUND: {len(all_violations)}\n")
    for v in all_violations:
        rel = Path(v["file"]).relative_to(REPO_ROOT) if REPO_ROOT in Path(v["file"]).parents else v["file"]
        print(f"  {rel}:{v['line']}")
        print(f"    real name   : '{v['real_name']}' (mapping id {v['mapping_id']})")
        print(f"    must become : '{v['pseudonym']}'")
        print(f"    snippet     : {v['snippet']}")
        print()

    print(
        "ACTION REQUIRED: real names must not appear in compiled artifacts.\n"
        "  1. Locate the source wiki atom(s) that leaked the real name.\n"
        "  2. Fix the atom (the hook will verify).\n"
        "  3. Re-run: python3 scripts/atoms-to-graph-json.py && "
        "python3 scripts/atoms-to-detail-json.py\n"
        "  4. Re-run this scan to confirm clean.\n"
        "  DO NOT deploy until this script exits 0."
    )
    return 1


if __name__ == "__main__":
    sys.exit(main())
