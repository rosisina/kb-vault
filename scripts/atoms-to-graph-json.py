#!/usr/bin/env python3
"""
atoms-to-graph-json.py — build a static graph.json for Aurora v2 UI.

Reads all wiki/claims/*.md atoms and produces a single JSON file containing:
  - nodes: FalsificationResult atoms with all metadata
  - edges: typed relationships extracted from ## Related sections
  - stats: aggregate metrics for UI dashboard

The output graph.json is the SOLE data source for the Aurora v2 Cytoscape.js
visualization. No Neo4j runtime dependency.

Output:
    output/graph.json         — full graph for UI /assets/ deployment
    output/graph-stats.json   — summary stats for UI dashboard widgets

Usage:
    python3 scripts/atoms-to-graph-json.py
"""

from __future__ import annotations

import json
import re
import sys
from collections import defaultdict, deque
from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
CLAIMS_DIR = REPO_ROOT / "wiki" / "claims"
OUTPUT_GRAPH = REPO_ROOT / "output" / "graph.json"
OUTPUT_STATS = REPO_ROOT / "output" / "graph-stats.json"
TRANSLATIONS_FILE = REPO_ROOT / "scripts" / "translations-en.json"
TRANSLATIONS_PATCH2 = REPO_ROOT / "scripts" / "translations-en-patch2.json"
TRANSLATIONS_TITLE_PATCH = REPO_ROOT / "scripts" / "translations-title-patch.json"

# ── Regex (all non-backtracking) ──────────────────────────────────────

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
PAT_REL = re.compile(r"- \[\[([^\]|]+)(?:\|[^\]]+)?\]\].*?\(([A-Z_]+)\)\s*$")

# ── Layer + claimType labels ──────────────────────────────────────────

LAYER_DEFS = {
    1: {"name": "Active-X 제거 사업 간 舊KIATIS 이력 제거", "nameEn": "Old KIATIS History Erasure", "color": "#FF6B6B"},
    2: {"name": "新KIATIS 사업 추진체계 및 장교 ��인 자력 조작", "nameEn": "New KIATIS Project Structure Manipulation", "color": "#FFA07A"},
    3: {"name": "국전원 전속 ��� SW개발사업관리 착수·종결", "nameEn": "KRIT Transfer & SW Project Management", "color": "#FFD700"},
    4: {"name": "新KIATIS 개발·운영·시험평가 전·중·후 조작", "nameEn": "Test & Evaluation Manipulation", "color": "#98FB98"},
    5: {"name": "허위 갑질 신고와 조사본부의 조작 감사", "nameEn": "False Harassment & Rigged Audit", "color": "#87CEEB"},
    6: {"name": "군 검찰단의 사기 수사와 범죄자 낙인", "nameEn": "Fraudulent Prosecution & Criminal Stigma", "color": "#DDA0DD"},
    7: {"name": "진정서 제출·수사 촉구 후 기소유예", "nameEn": "Petition Rejection & Suspended Prosecution", "color": "#D3D3D3"},
}

CT_LABELS = {
    "evidence_concealment": {"kr": "증거은폐", "en": "Evidence Concealment"},
    "document_fabrication": {"kr": "문서위변조", "en": "Document Fabrication"},
    "regulatory_manipulation": {"kr": "훈령조작", "en": "Regulatory Manipulation"},
    "terminology_manipulation": {"kr": "용어조작", "en": "Terminology Manipulation"},
    "prosecution_misconduct": {"kr": "검찰비위", "en": "Prosecution Misconduct"},
    "witness_manipulation": {"kr": "증인조작", "en": "Witness Manipulation"},
    "conspiracy_structure": {"kr": "공모���조", "en": "Conspiracy Structure"},
    "institutional_obstruction": {"kr": "제도적방해", "en": "Institutional Obstruction"},
    "procedural_violation": {"kr": "절차위반", "en": "Procedural Violation"},
    "human_rights_violation": {"kr": "인권침해", "en": "Human Rights Violation"},
    "testimony_evidence": {"kr": "증언증거", "en": "Testimony Evidence"},
    "cross_layer_analysis": {"kr": "층위간분석", "en": "Cross-Layer Analysis"},
    "technical_proof": {"kr": "기술적증거", "en": "Technical Proof"},
    "attorney_misconduct": {"kr": "변호인비위", "en": "Attorney Misconduct"},
    "temporal_manipulation": {"kr": "시간적조작", "en": "Temporal Manipulation"},
    "methodology": {"kr": "방법론", "en": "Methodology"},
}


def _m1(pat, text):
    m = pat.search(text)
    return m.group(1) if m else ""


def _mi(pat, text):
    m = pat.search(text)
    return int(m.group(1)) if m else 0


_PAT_EN_SECTION = re.compile(
    r"###\s+English\s*\n(.*?)(?=\n###|\n##|\Z)", re.DOTALL
)


def _extract_en_title(body: str) -> str:
    """Extract first sentence of ### English claim section as fallback titleEn."""
    m = _PAT_EN_SECTION.search(body)
    if not m:
        return ""
    text = m.group(1).strip()
    # Take first non-empty line, truncated to 120 chars
    for line in text.splitlines():
        line = line.strip()
        if line and not line.startswith("#"):
            return line[:120]
    return ""


def _load_title_translations() -> dict:
    """Load titleEn overrides from translations files."""
    result: dict = {}
    # Load from atoms-keyed files ({"atoms": {"id": {"titleEn": "..."}}})
    for path in (TRANSLATIONS_FILE, TRANSLATIONS_PATCH2):
        if not path.exists():
            continue
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
            for aid, fields in data.get("atoms", {}).items():
                if fields.get("titleEn"):
                    result[aid] = fields["titleEn"]
        except Exception:
            pass
    # Load from title-patch file ({"titleEn": {"id": "..."}})
    if TRANSLATIONS_TITLE_PATCH.exists():
        try:
            data = json.loads(TRANSLATIONS_TITLE_PATCH.read_text(encoding="utf-8"))
            for aid, en in data.get("titleEn", {}).items():
                if en:
                    result[aid] = en
        except Exception:
            pass
    return result


def main() -> int:
    if not CLAIMS_DIR.exists():
        print(f"[error] claims dir not found: {CLAIMS_DIR}", file=sys.stderr)
        return 1

    title_translations = _load_title_translations()

    nodes = []
    edges = []
    stem_to_id: dict[str, str] = {}
    stem_to_idx: dict[str, int] = {}
    pending_rels: dict[str, list[tuple[str, str]]] = {}

    layer_counts: dict[int, int] = defaultdict(int)
    type_counts: dict[str, int] = defaultdict(int)
    verdict_counts: dict[str, int] = defaultdict(int)

    # ── Single pass: read all atoms ─��─────────────────────────────────

    for path in sorted(CLAIMS_DIR.glob("*.md")):
        if path.name.startswith("_"):
            continue
        body = path.read_text(encoding="utf-8")
        stem = path.stem

        # ── YAML frontmatter (preferred) ──────────────────────────
        fm = None
        if body.startswith("---\n"):
            try:
                fm_end = body.index("---", 4)
                fm = yaml.safe_load(body[4:fm_end])
            except Exception:
                fm = None
            # Strip frontmatter from body for regex fallback patterns
            body_no_fm = body[fm_end + 4:] if fm else body
        else:
            body_no_fm = body

        if fm:
            result_id = fm.get("aliases", [""])[0] if fm.get("aliases") else _m1(PAT_RID, body)
            if not result_id:
                result_id = _m1(PAT_RID, body)
            primary_layer = fm.get("layer", 0)
            secondary_layers = fm.get("secondary-layers", [])
            claim_type = fm.get("claimType", "")
            claim_subtype = fm.get("claimSubtype", "")
            verdict = fm.get("verdict", "")
            strength = fm.get("strength", "")
            title = (fm.get("title-ko") or fm.get("title-en") or _m1(PAT_TITLE, body))[:120]
            source = _m1(PAT_SOURCE, body)[:200]
            truthfulness = fm.get("truthfulness", 0)
            validity = fm.get("validity", 0)
            sincerity = fm.get("sincerity", 0)
            # New fields from frontmatter
            persons = fm.get("persons", [])
            organizations = fm.get("organizations", [])
            fracture_type = fm.get("fracture-type")
            if fracture_type == "null" or fracture_type is None:
                fracture_type = None
            source_type = fm.get("source-type", "unknown")
            record_nos = fm.get("record-nos", [])
            evidence_ids = fm.get("evidence-ids", [])
            event_date = fm.get("event-date")
            if event_date == "null" or event_date is None:
                event_date = None
            else:
                event_date = str(event_date)
            has_verbatim = fm.get("has-verbatim", False)
            title_ko = fm.get("title-ko", "")
            title_en = fm.get("title-en", "")
        else:
            result_id = _m1(PAT_RID, body)
            if not result_id:
                continue
            head = body[:800]
            layers = [int(x) for x in PAT_LAYER.findall(head)]
            primary_layer = layers[0] if layers else 0
            secondary_layers = layers[1:] if len(layers) > 1 else []
            claim_type = _m1(PAT_CT, body)
            claim_subtype = _m1(PAT_CST, body)
            verdict = _m1(PAT_V, body)
            strength = _m1(PAT_S, body)
            title = _m1(PAT_TITLE, body)[:120]
            source = _m1(PAT_SOURCE, body)[:200]
            truthfulness = _mi(PAT_T, body)
            validity = _mi(PAT_VA, body)
            sincerity = _mi(PAT_SI, body)
            persons = []
            organizations = []
            fracture_type = None
            source_type = "unknown"
            record_nos = []
            evidence_ids = []
            event_date = None
            has_verbatim = False
            title_ko = ""
            title_en = ""

        if not result_id:
            continue

        # Fallback titleEn: translation file override, then ### English first line
        if not title_en and result_id in title_translations:
            title_en = title_translations[result_id]
        if not title_en:
            title_en = _extract_en_title(body)

        has_spot = "## Spot-check" in body
        if verdict == "NEEDS_MORE_EVIDENCE":
            test_status = "UNTESTED"
        elif verdict == "CORROBORATED" and (strength == "STRONG" or has_spot):
            test_status = "TESTED"
        elif verdict == "CORROBORATED":
            test_status = "PARTIAL"
        elif verdict == "WEAKENED":
            test_status = "FALSIFIED"
        else:
            test_status = "UNKNOWN"

        node = {
            "id": result_id,
            "stem": stem,
            "title": title,
            "titleKo": title_ko,
            "titleEn": title_en,
            "layer": primary_layer,
            "secondaryLayers": secondary_layers,
            "claimType": claim_type,
            "claimSubtype": claim_subtype,
            "claimTypeLabel": CT_LABELS.get(claim_type, {"kr": claim_type, "en": claim_type}),
            "verdict": verdict,
            "strength": strength,
            "testStatus": test_status,
            "truthfulness": truthfulness,
            "validity": validity,
            "sincerity": sincerity,
            "source": source,
            "wikiSlug": stem,
            "persons": persons or [],
            "organizations": organizations or [],
            "fractureType": fracture_type,
            "sourceType": source_type,
            "recordNos": record_nos or [],
            "evidenceIds": evidence_ids or [],
            "eventDate": event_date,
            "hasVerbatim": has_verbatim,
            "corroborationCount": 0,
            "oppositionCount": 0,
            "causalDepth": 0,
        }

        idx = len(nodes)
        nodes.append(node)
        stem_to_id[stem] = result_id
        stem_to_idx[stem] = idx

        # Extract relationships from ## Related (or bilingual ## 관련 (Related))
        rels = []
        in_rel = False
        for line in body.split("\n"):
            if line.startswith("## Related") or line.startswith("## 관련"):
                in_rel = True
                continue
            if in_rel and line.startswith("## "):
                break
            if not in_rel:
                continue
            m = PAT_REL.match(line)
            if m:
                rels.append((m.group(1).split("/")[-1], m.group(2)))
        pending_rels[stem] = rels

        layer_counts[primary_layer] += 1
        type_counts[claim_type] += 1
        verdict_counts[verdict] += 1

    # ── Build edges ───────────────────────────────────────────────────

    rel_type_counts: dict[str, int] = defaultdict(int)

    for stem, rels in pending_rels.items():
        if stem not in stem_to_id:
            continue
        for tgt_stem, rel_type in rels:
            if rel_type in ("PART_OF_LAYER", "ABOUT"):
                continue
            if tgt_stem not in stem_to_id:
                continue

            src_id = stem_to_id[stem]
            tgt_id = stem_to_id[tgt_stem]
            cross = nodes[stem_to_idx[stem]]["layer"] != nodes[stem_to_idx[tgt_stem]]["layer"]

            edges.append({
                "source": src_id,
                "target": tgt_id,
                "type": rel_type,
                "sourceLayer": nodes[stem_to_idx[stem]]["layer"],
                "targetLayer": nodes[stem_to_idx[tgt_stem]]["layer"],
                "crossLayer": cross,
            })
            rel_type_counts[rel_type] += 1

            if rel_type == "CORROBORATES":
                nodes[stem_to_idx[tgt_stem]]["corroborationCount"] += 1
            elif rel_type == "OPPOSES":
                nodes[stem_to_idx[tgt_stem]]["oppositionCount"] += 1
                nodes[stem_to_idx[stem]]["oppositionCount"] += 1

    # ── Causal depth BFS ──────────────────────────────────────────────

    causes_out: dict[str, list[str]] = defaultdict(list)
    causes_targets = set()
    for e in edges:
        if e["type"] == "CAUSES":
            causes_out[e["source"]].append(e["target"])
            causes_targets.add(e["target"])

    all_ids = {n["id"] for n in nodes}
    roots = all_ids - causes_targets
    depth: dict[str, int] = {r: 0 for r in roots}
    queue = deque(roots)
    max_iterations = len(nodes) * 10  # safety limit
    iterations = 0
    while queue and iterations < max_iterations:
        iterations += 1
        nid = queue.popleft()
        for child in causes_out.get(nid, []):
            nd = depth[nid] + 1
            if nd > 50:  # cycle guard
                continue
            if child not in depth or depth[child] < nd:
                depth[child] = nd
                queue.append(child)

    id_to_idx = {n["id"]: i for i, n in enumerate(nodes)}
    for nid, d in depth.items():
        if nid in id_to_idx:
            nodes[id_to_idx[nid]]["causalDepth"] = d

    max_causal_depth = max(depth.values()) if depth else 0

    # ── Layer summary nodes ───────────────────────────────────────────

    layer_nodes = []
    for ln in range(1, 8):
        ldef = LAYER_DEFS[ln]
        layer_nodes.append({
            "id": f"LAYER-{ln}",
            "type": "layer",
            "layerNum": ln,
            "name": ldef["name"],
            "nameEn": ldef["nameEn"],
            "color": ldef["color"],
            "atomCount": layer_counts.get(ln, 0),
        })

    # ── Output ────────────────────────────────────────────────────────

    cross_layer_edges = sum(1 for e in edges if e["crossLayer"])

    graph = {
        "_meta": {
            "generator": "scripts/atoms-to-graph-json.py",
            "nodeCount": len(nodes),
            "edgeCount": len(edges),
            "crossLayerEdges": cross_layer_edges,
            "maxCausalDepth": max_causal_depth,
        },
        "nodes": nodes,
        "edges": edges,
        "layers": layer_nodes,
        "proofLevels": {
            "level1_crimeStructure": {
                "description": "Crime Structure — CAUSES chains + OPPOSES pairs",
                "edgeFilter": ["CAUSES", "OPPOSES"],
                "layout": "cose",
            },
            "level2_evidenceTrail": {
                "description": "Evidence Trail — CORROBORATES + SUPERSEDES",
                "edgeFilter": ["CORROBORATES", "SUPERSEDES", "RELATED"],
                "layout": "breadthfirst",
            },
            "level3_crossLayer": {
                "description": "Cross-Layer Overview — cross-layer edges only",
                "edgeFilter": ["CAUSES", "CORROBORATES", "OPPOSES"],
                "nodeFilter": "crossLayer",
                "layout": "concentric",
            },
        },
    }

    OUTPUT_GRAPH.parent.mkdir(parents=True, exist_ok=True)
    graph_text = json.dumps(graph, indent=2, ensure_ascii=False) + "\n"
    OUTPUT_GRAPH.write_text(graph_text, encoding="utf-8")
    ui_graph = REPO_ROOT / "ui" / "src" / "assets" / "graph.json"
    if ui_graph.parent.exists():
        ui_graph.write_text(graph_text, encoding="utf-8")

    stats = {
        "totalAtoms": len(nodes),
        "totalEdges": len(edges),
        "crossLayerEdges": cross_layer_edges,
        "maxCausalDepth": max_causal_depth,
        "layerDistribution": dict(layer_counts),
        "claimTypeDistribution": dict(type_counts),
        "verdictDistribution": dict(verdict_counts),
        "relationshipTypeDistribution": dict(rel_type_counts),
        "topCorroborated": sorted(
            [{"id": n["id"], "title": n["title"][:60], "count": n["corroborationCount"]}
             for n in nodes if n["corroborationCount"] > 0],
            key=lambda x: x["count"], reverse=True,
        )[:20],
        "topOpposed": sorted(
            [{"id": n["id"], "title": n["title"][:60], "count": n["oppositionCount"]}
             for n in nodes if n["oppositionCount"] > 0],
            key=lambda x: x["count"], reverse=True,
        )[:20],
    }

    OUTPUT_STATS.write_text(json.dumps(stats, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"[ok] wrote {OUTPUT_GRAPH}")
    print(f"[ok] wrote {OUTPUT_STATS}")
    print(
        f"     nodes={len(nodes)}, edges={len(edges)}, "
        f"cross_layer={cross_layer_edges}, max_causal_depth={max_causal_depth}"
    )
    print(f"     rels: {dict(rel_type_counts)}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
