#!/usr/bin/env python3
"""
validate-graph-json.py — schema + Proof Level filter validator for graph.json.

Checks:
  1. Required fields on nodes and edges
  2. Edge referential integrity (source/target IDs exist in nodes)
  3. Proof Level filter simulation (counts per level)
  4. Orphan detection (nodes with no edges)
  5. Stats summary
"""

import json
import sys
from collections import Counter
from pathlib import Path

GRAPH_PATH = Path(__file__).resolve().parent.parent / "output" / "graph.json"

# ── Proof Level definitions ──
# Mapped to actual claimType values and edge types in graph.json

PROOF_LEVELS = {
    "Level 1 — Crime Structure": {
        "desc": "Person + CriminalAct chain",
        "node_types": {
            "conspiracy_structure", "prosecution_misconduct", "attorney_misconduct",
            "witness_manipulation", "evidence_concealment", "document_fabrication",
        },
        "edge_types": {"CAUSES", "OPPOSES"},
    },
    "Level 2 — Evidence Trail": {
        "desc": "Evidence + Directive + Contradiction",
        "node_types": {
            "testimony_evidence", "technical_proof", "regulatory_manipulation",
            "procedural_violation", "document_fabrication", "evidence_concealment",
            "terminology_manipulation",
        },
        "edge_types": {"CORROBORATES", "SUPERSEDES", "OPPOSES", "RELATED"},
    },
    "Level 3 — Cross-Layer Overview": {
        "desc": "Cross-layer + institutional pattern",
        "node_types": {
            "cross_layer_analysis", "methodology", "institutional_obstruction",
            "conspiracy_structure", "human_rights_violation", "temporal_manipulation",
        },
        "edge_types": {"CAUSES", "CORROBORATES", "RELATED"},
    },
}


def validate(path: Path) -> dict:
    data = json.loads(path.read_text())
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])
    report = {"errors": [], "warnings": [], "stats": {}}

    # ── 1. Schema check ──
    req_node = {"id", "layer", "claimType", "verdict", "strength", "wikiSlug"}
    req_edge = {"source", "target", "type"}
    for i, n in enumerate(nodes):
        missing = req_node - set(n.keys())
        if missing:
            report["errors"].append(f"Node [{i}] id={n.get('id','?')} missing: {missing}")
    for i, e in enumerate(edges):
        missing = req_edge - set(e.keys())
        if missing:
            report["errors"].append(f"Edge [{i}] missing: {missing}")

    # ── 2. Referential integrity ──
    node_ids = {n["id"] for n in nodes}
    dangling = []
    for e in edges:
        if e["source"] not in node_ids:
            dangling.append(f"edge source '{e['source']}' not in nodes")
        if e["target"] not in node_ids:
            dangling.append(f"edge target '{e['target']}' not in nodes")
    report["dangling_edges"] = dangling

    # ── 3. Orphan detection ──
    connected = set()
    for e in edges:
        connected.add(e["source"])
        connected.add(e["target"])
    orphans = node_ids - connected
    report["orphans"] = sorted(orphans)

    # ── 4. Proof Level simulation ──
    proof_levels = {}
    for name, pl in PROOF_LEVELS.items():
        pl_nodes = [n for n in nodes if n.get("claimType") in pl["node_types"]]
        pl_node_ids = {n["id"] for n in pl_nodes}
        pl_edges = [
            e for e in edges
            if e["type"] in pl["edge_types"]
            and e["source"] in pl_node_ids
            and e["target"] in pl_node_ids
        ]
        proof_levels[name] = {
            "desc": pl["desc"],
            "nodes": len(pl_nodes),
            "edges": len(pl_edges),
            "claimTypes": dict(Counter(n["claimType"] for n in pl_nodes)),
            "edgeTypes": dict(Counter(e["type"] for e in pl_edges)),
        }
    report["proof_levels"] = proof_levels

    # ── 5. Stats ──
    report["stats"] = {
        "total_nodes": len(nodes),
        "total_edges": len(edges),
        "schema_errors": len(report["errors"]),
        "dangling_edges": len(dangling),
        "orphans": len(orphans),
        "layers": dict(Counter(n.get("layer") for n in nodes)),
        "verdicts": dict(Counter(n.get("verdict") for n in nodes)),
        "edge_types": dict(Counter(e["type"] for e in edges)),
        "claimTypes": dict(Counter(n.get("claimType") for n in nodes)),
    }

    return report


def main():
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else GRAPH_PATH
    if not path.exists():
        print(f"ERROR: {path} not found")
        sys.exit(1)

    r = validate(path)

    print(f"=== graph.json Validation Report ===\n")
    s = r["stats"]
    print(f"Nodes: {s['total_nodes']}  |  Edges: {s['total_edges']}")
    print(f"Schema errors: {s['schema_errors']}  |  Dangling edges: {s['dangling_edges']}  |  Orphans: {s['orphans']}")

    print(f"\n── Layers ──")
    for layer, count in sorted(s["layers"].items(), key=lambda x: str(x[0])):
        print(f"  L{layer}: {count}")

    print(f"\n── Verdicts ──")
    for v, c in sorted(s["verdicts"].items()):
        print(f"  {v}: {c}")

    print(f"\n── Edge Types ──")
    for t, c in sorted(s["edge_types"].items()):
        print(f"  {t}: {c}")

    print(f"\n── Proof Level Filter Simulation ──")
    for name, pl in r["proof_levels"].items():
        print(f"\n  {name} ({pl['desc']})")
        print(f"    Nodes: {pl['nodes']}  |  Edges: {pl['edges']}")
        if pl["claimTypes"]:
            print(f"    claimTypes: {pl['claimTypes']}")
        if pl["edgeTypes"]:
            print(f"    edgeTypes: {pl['edgeTypes']}")

    if r["errors"]:
        print(f"\n── Schema Errors ({len(r['errors'])}) ──")
        for e in r["errors"][:10]:
            print(f"  {e}")

    if r["dangling_edges"]:
        print(f"\n── Dangling Edges ({len(r['dangling_edges'])}) ──")
        for d in r["dangling_edges"][:10]:
            print(f"  {d}")

    if r["orphans"]:
        print(f"\n── Orphan Nodes ({len(r['orphans'])}) ──")
        for o in r["orphans"][:10]:
            print(f"  {o}")

    print(f"\n{'PASS' if s['schema_errors'] == 0 and s['dangling_edges'] == 0 else 'FAIL'}")


if __name__ == "__main__":
    main()
