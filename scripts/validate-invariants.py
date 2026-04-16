#!/usr/bin/env python3
"""
validate-invariants.py — verify 10 infrastructure invariants after each re-anchoring batch.

Run before and after any atom editing batch. All invariants must pass; any failure
signals infrastructure damage and should trigger rollback per project_i18n_rollback_procedure.md.

Usage:
    python3 scripts/validate-invariants.py [--baseline]

    --baseline   Record current counts as baseline to compare future runs against.
                 Saves baseline to output/invariant-baseline.json.
    (no flag)    Compare current counts against saved baseline and report pass/fail.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
CLAIMS_DIR = REPO_ROOT / "wiki" / "claims"
BASELINE_FILE = REPO_ROOT / "output" / "invariant-baseline.json"

BASELINE_MODE = "--baseline" in sys.argv


def count_wikilinks() -> int:
    total = 0
    for p in CLAIMS_DIR.glob("*.md"):
        if p.name.startswith("_"):
            continue
        total += p.read_text().count("[[")
    return total


def count_record_nos() -> int:
    pat = re.compile(r"Record\s+No\.\s*[\d,]+")
    total = 0
    for p in CLAIMS_DIR.glob("*.md"):
        if p.name.startswith("_"):
            continue
        total += len(pat.findall(p.read_text()))
    return total


def count_typed_relationships() -> int:
    pat = re.compile(r"\((?:CAUSES|OPPOSES|CORROBORATES|SUPERSEDES|PART_OF_LAYER|ABOUT|RELATED)\)")
    total = 0
    for p in CLAIMS_DIR.glob("*.md"):
        if p.name.startswith("_"):
            continue
        total += len(pat.findall(p.read_text()))
    return total


def count_merge_blocks() -> int:
    pat = re.compile(r"MERGE \(fr:FalsificationResult")
    total = 0
    for p in CLAIMS_DIR.glob("*.md"):
        if p.name.startswith("_"):
            continue
        total += len(pat.findall(p.read_text()))
    return total


def count_claim_types() -> dict:
    """Count atoms per claimType; also flag non-standard values."""
    standard = {
        "methodology", "procedural_violation", "cross_layer_analysis",
        "prosecution_misconduct", "regulatory_manipulation", "conspiracy_structure",
        "institutional_obstruction", "temporal_manipulation", "evidence_concealment",
        "witness_manipulation", "human_rights_violation", "document_fabrication",
        "testimony_evidence", "terminology_manipulation", "technical_proof",
        "attorney_misconduct"
    }
    pat = re.compile(r"^claimType:\s*(\S+)", re.MULTILINE)
    counts: dict[str, int] = {}
    non_standard = []
    for p in CLAIMS_DIR.glob("*.md"):
        if p.name.startswith("_"):
            continue
        m = pat.search(p.read_text())
        if m:
            ct = m.group(1)
            counts[ct] = counts.get(ct, 0) + 1
            if ct not in standard:
                non_standard.append((p.name, ct))
    return {"distribution": counts, "non_standard": non_standard}


def count_pseudonym_violations() -> list[str]:
    """Detect real names from pseudonym_mapping.json appearing in atom files."""
    mapping_path = REPO_ROOT.parent / "defense-kg-platform" / "kg" / "pseudonym_mapping.json"
    if not mapping_path.exists():
        return []
    try:
        mapping = json.loads(mapping_path.read_text())
        real_names = [e.get("real_name_kr", "") for e in mapping if e.get("real_name_kr")]
    except Exception:
        return []
    violations = []
    for p in CLAIMS_DIR.glob("*.md"):
        if p.name.startswith("_"):
            continue
        txt = p.read_text()
        for name in real_names:
            if name and len(name) > 1 and name in txt:
                violations.append(f"{p.name}: '{name}'")
    return violations


def count_contradiction_pairs() -> int:
    fractures_path = REPO_ROOT / "wiki" / "_fractures.md"
    if not fractures_path.exists():
        return 0
    txt = fractures_path.read_text()
    return len(re.findall(r"^\s*\|.*\|.*\|.*\|", txt, re.MULTILINE)) - 2  # minus header rows


def count_atoms() -> int:
    return sum(1 for p in CLAIMS_DIR.glob("*.md") if not p.name.startswith("_"))


def measure() -> dict:
    ct_data = count_claim_types()
    return {
        "atoms": count_atoms(),
        "wikilinks": count_wikilinks(),
        "record_nos": count_record_nos(),
        "typed_relationships": count_typed_relationships(),
        "merge_blocks": count_merge_blocks(),
        "non_standard_claimtype": ct_data["non_standard"],
        "pseudonym_violations": count_pseudonym_violations(),
        "contradiction_pairs": count_contradiction_pairs(),
    }


def main() -> int:
    print("=== validate-invariants.py ===")
    current = measure()

    if BASELINE_MODE:
        BASELINE_FILE.parent.mkdir(exist_ok=True)
        BASELINE_FILE.write_text(json.dumps(current, indent=2, ensure_ascii=False))
        print(f"[baseline saved] → {BASELINE_FILE}")
        for k, v in current.items():
            print(f"  {k}: {v}")
        return 0

    if not BASELINE_FILE.exists():
        print("[warn] No baseline found. Run with --baseline first.")
        print("Current counts:")
        for k, v in current.items():
            print(f"  {k}: {v}")
        return 0

    baseline = json.loads(BASELINE_FILE.read_text())
    failures = []

    # I1 — Aurora MERGE blocks unchanged
    if current["merge_blocks"] != baseline["merge_blocks"]:
        failures.append(f"I1 MERGE blocks: {baseline['merge_blocks']} → {current['merge_blocks']} ⚠️")

    # I2 — wikilinks unchanged
    if current["wikilinks"] != baseline["wikilinks"]:
        failures.append(f"I2 wikilinks: {baseline['wikilinks']} → {current['wikilinks']} ⚠️")

    # I3 — Record No. citations unchanged
    if current["record_nos"] != baseline["record_nos"]:
        failures.append(f"I3 Record Nos: {baseline['record_nos']} → {current['record_nos']} ⚠️")

    # I4 — typed relationships unchanged
    if current["typed_relationships"] != baseline["typed_relationships"]:
        failures.append(f"I4 typed relationships: {baseline['typed_relationships']} → {current['typed_relationships']} ⚠️")

    # I7 — claimType standard compliance
    if current["non_standard_claimtype"]:
        failures.append(f"I7 non-standard claimType: {current['non_standard_claimtype']}")

    # I9 — pseudonym violations
    if current["pseudonym_violations"]:
        failures.append(f"I9 pseudonym violations: {current['pseudonym_violations']}")

    # Atoms should not decrease
    if current["atoms"] < baseline["atoms"]:
        failures.append(f"I0 atom count decreased: {baseline['atoms']} → {current['atoms']} ⚠️")

    print(f"atoms           : {current['atoms']} (baseline {baseline['atoms']})")
    print(f"merge_blocks    : {current['merge_blocks']} (baseline {baseline['merge_blocks']})")
    print(f"wikilinks       : {current['wikilinks']} (baseline {baseline['wikilinks']})")
    print(f"record_nos      : {current['record_nos']} (baseline {baseline['record_nos']})")
    print(f"typed_rels      : {current['typed_relationships']} (baseline {baseline['typed_relationships']})")
    print(f"pseudonym_viol  : {len(current['pseudonym_violations'])}")
    print(f"non_std_claims  : {len(current['non_standard_claimtype'])}")

    if failures:
        print("\n[FAIL] invariant violations:")
        for f in failures:
            print(f"  ✗ {f}")
        print("\nSee memory/project_i18n_rollback_procedure.md for recovery steps.")
        return 1
    else:
        print("\n[PASS] all invariants hold ✓")
        return 0


if __name__ == "__main__":
    sys.exit(main())
