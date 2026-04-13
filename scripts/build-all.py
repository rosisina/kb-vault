#!/usr/bin/env python3
"""
build-all.py — Aurora v2 full build pipeline.

Chains all build steps:
  1. tag-relationships.py (tag untyped links)
  2. atoms-to-graph-json.py (generate graph.json)
  3. build-record-index.py (rebuild record index)
  4. rebuild-hubs.py (rebuild hub indexes)
  5. Copy graph.json → Angular assets
  6. Run 4 compiler modules (layer_auditor, timeline_auditor,
     crime_chain_builder, victim_narrator)

Usage:
    python3 scripts/build-all.py          # full build
    python3 scripts/build-all.py --quick  # skip compiler modules
"""

from __future__ import annotations

import shutil
import subprocess
import sys
import time
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
ANGULAR_ASSETS = REPO.parent / "defense-kg-platform" / "angular-app" / "src" / "assets"
PYTHON = sys.executable


def run_step(name: str, cmd: list[str], required: bool = True) -> tuple[str, float]:
    """Run a subprocess step. Returns (status, elapsed_seconds)."""
    print(f"  [{name}] ", end="", flush=True)
    t0 = time.time()
    try:
        result = subprocess.run(
            cmd, capture_output=True, text=True, timeout=300, cwd=str(REPO)
        )
        elapsed = time.time() - t0
        if result.returncode == 0:
            print(f"OK ({elapsed:.1f}s)")
            return "OK", elapsed
        else:
            label = "FAIL" if required else "WARN"
            print(f"{label} ({elapsed:.1f}s)")
            if result.stderr:
                for line in result.stderr.strip().split("\n")[:3]:
                    print(f"    {line}")
            return label, elapsed
    except subprocess.TimeoutExpired:
        elapsed = time.time() - t0
        print(f"TIMEOUT ({elapsed:.1f}s)")
        return "TIMEOUT", elapsed
    except Exception as exc:
        elapsed = time.time() - t0
        print(f"ERROR: {exc}")
        return "ERROR", elapsed


def main():
    quick = "--quick" in sys.argv
    print(f"=== Aurora v2 Build Pipeline {'(quick)' if quick else '(full)'} ===\n")
    t_start = time.time()
    results = []

    # Step 1-4: Core build scripts
    steps = [
        ("tag-relationships", [PYTHON, "scripts/tag-relationships.py"], True),
        ("atoms-to-graph-json", [PYTHON, "scripts/atoms-to-graph-json.py"], True),
        ("build-record-index", [PYTHON, "scripts/build-record-index.py"], True),
        ("rebuild-hubs", [PYTHON, "scripts/rebuild-hubs.py"], True),
    ]

    for name, cmd, req in steps:
        status, elapsed = run_step(name, cmd, req)
        results.append((name, status, elapsed))

    # Step 5: Copy graph.json to Angular assets
    print(f"  [deploy-graph-json] ", end="", flush=True)
    t0 = time.time()
    graph_src = REPO / "output" / "graph.json"
    if graph_src.exists() and ANGULAR_ASSETS.exists():
        shutil.copy2(graph_src, ANGULAR_ASSETS / "graph.json")
        elapsed = time.time() - t0
        print(f"OK ({elapsed:.1f}s) → {ANGULAR_ASSETS / 'graph.json'}")
        results.append(("deploy-graph-json", "OK", elapsed))
    else:
        elapsed = time.time() - t0
        msg = "graph.json missing" if not graph_src.exists() else "Angular assets dir missing"
        print(f"SKIP ({msg})")
        results.append(("deploy-graph-json", "SKIP", elapsed))

    # Step 6: Compiler modules (skip if --quick)
    if not quick:
        compiler_steps = [
            ("layer-auditor", [PYTHON, "-m", "compiler.layer_auditor"], False),
            ("timeline-auditor", [PYTHON, "-m", "compiler.timeline_auditor"], False),
            ("crime-chain", [PYTHON, "-m", "compiler.crime_chain_builder"], False),
            ("victim-narrator", [PYTHON, "-m", "compiler.victim_narrator"], False),
        ]
        for name, cmd, req in compiler_steps:
            status, elapsed = run_step(name, cmd, req)
            results.append((name, status, elapsed))
    else:
        print("  [compiler] SKIPPED (--quick mode)")

    # Summary
    total = time.time() - t_start
    print(f"\n=== Summary ({total:.1f}s total) ===")
    for name, status, elapsed in results:
        icon = "✓" if status == "OK" else "⚠" if status in ("WARN", "SKIP") else "✗"
        print(f"  {icon} {name}: {status} ({elapsed:.1f}s)")

    # Artifact sizes
    print(f"\n=== Artifacts ===")
    for path in [
        REPO / "output" / "graph.json",
        REPO / "output" / "graph-stats.json",
        REPO / "output" / "layer-audit.json",
        REPO / "output" / "timeline-audit.json",
        REPO / "output" / "crime-chain.json",
        REPO / "output" / "victim-narrative.json",
        REPO / "wiki" / "_record-index.md",
    ]:
        if path.exists():
            size = path.stat().st_size
            unit = "KB" if size > 1024 else "B"
            val = size / 1024 if size > 1024 else size
            print(f"  {path.name}: {val:.0f}{unit}")

    fail_count = sum(1 for _, s, _ in results if s in ("FAIL", "ERROR", "TIMEOUT"))
    sys.exit(1 if fail_count > 0 else 0)


if __name__ == "__main__":
    main()
