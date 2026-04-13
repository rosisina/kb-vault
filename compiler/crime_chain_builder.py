#!/usr/bin/env python3
"""
crime_chain_builder.py — CriminalAct→Person chain extraction.

Absorbs Aurora v1 CrimeChainMapper agent role.

Reads wiki/claims/*.md, extracts person references, role-anchors,
and typed relationships to build per-layer crime chain structures.
"""

from __future__ import annotations

import json
import re
import sys
from collections import defaultdict
from pathlib import Path

_PAT_LAYER = re.compile(r"layer-(\d)", re.IGNORECASE)
_PAT_REL = re.compile(r"- \[\[([^\]|]+)(?:\|[^\]]+)?\]\].*?\(([A-Z_]+)\)\s*$", re.MULTILINE)
_PAT_RID = re.compile(r'resultId:\s*"([^"]+)"')
_PAT_CT = re.compile(r'fr\.claimType\s*=\s*"([^"]+)"')
_PAT_V = re.compile(r'fr\.verdict\s*=\s*"([^"]+)"')
_PAT_TITLE = re.compile(r"^#\s+(.+)$", re.MULTILINE)
_PAT_ROLE_ANCHOR = re.compile(r"([\uAC00-\uD7A3]{2,4})\s*\(([^)]+?-\d+)\)")
_PAT_KOREAN_NAME = re.compile(r"(?<!\()(?<!\w)([\uAC00-\uD7A3]{2,4})(?!\w)(?!\))")
_PAT_RECORD = re.compile(r"(?:Record\s+No\.\s*|기록\s+제)([\d,]+)", re.IGNORECASE)

# Common Korean stopwords that look like names but aren't
_STOPWORDS = {
    "이하", "이상", "이후", "이전", "또한", "따라", "대한", "통해", "위한",
    "관련", "대해", "경우", "때문", "사이", "통한", "하여", "하는", "된다",
    "있다", "없다", "한다", "된다", "이다", "것이", "수행", "대상",
    "국방부", "국전원", "검찰단", "사업단", "감사원", "공수처",
    "해당", "본인", "당시", "증거", "문서", "사실", "결과", "보고",
    "직접", "실제", "전체", "모든", "기존", "새로", "동일", "별도",
    "확인", "주장", "판단", "분석", "검토", "조사", "수사", "기소",
    "위반", "조작", "은폐", "허위", "변조", "삭제", "누락", "왜곡",
    "제거", "체계", "구조", "절차", "규정", "훈령", "지침", "법률",
    "시험", "평가", "개발", "운영", "관리", "사업", "계획", "보안",
    "서버", "시스", "데이", "네트", "방화", "인증",
    "진리성", "타당성", "진실성", "중령", "소령", "대령", "준위",
}

# Known pseudonyms from the investigation (high-confidence names)
_KNOWN_PSEUDONYMS = {
    "김민수", "이지영", "이태호", "오현수", "최영수", "최도일", "정현우",
    "강민호", "박성호", "이준호", "김수진", "박서준", "지원호", "윤도현",
    "송민석", "장우진", "장호재", "황만수", "김성민", "장인걸", "조성민",
    "김경진", "박호래", "조준성", "양미숙", "양준승", "김민지", "최영규",
    "유길수", "김철환", "김상인", "김익혁", "이승우", "최우진", "홍성민",
    "최동욱", "권중현", "이근태", "이진한", "박현주", "김동욱", "강홍석",
    "류서영", "한지훈", "백승현", "노재훈", "류태완", "천승호", "명진수",
    "차성혁", "도지호", "임형규", "진상호", "안세준", "곽민철", "우재민",
    "서지환", "표재현", "마종철", "어진우", "한경수", "백도현", "노미경",
    "천하경", "호재영", "정다원", "배지훈",
}


def _parse_atom(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")

    # Layer
    layer_match = re.search(r"^\*\*Layer:\*\*(.+)$", text, re.MULTILINE)
    layers = [int(m.group(1)) for m in _PAT_LAYER.finditer(
        layer_match.group(1) if layer_match else ""
    )]

    # Result ID, claimType, verdict
    rid = (_PAT_RID.search(text) or type('', (), {'group': lambda s, x: ''})()).group(1)
    ct = (_PAT_CT.search(text) or type('', (), {'group': lambda s, x: ''})()).group(1)
    verdict = (_PAT_V.search(text) or type('', (), {'group': lambda s, x: 'UNKNOWN'})()).group(1)

    # Title
    title_m = _PAT_TITLE.search(text)
    title = title_m.group(1).strip() if title_m else path.stem

    # Role anchors (high confidence)
    role_anchors = {}
    for m in _PAT_ROLE_ANCHOR.finditer(text):
        name, role = m.group(1), m.group(2)
        if name not in _STOPWORDS:
            if name not in role_anchors:
                role_anchors[name] = []
            if role not in role_anchors[name]:
                role_anchors[name].append(role)

    # Known pseudonyms found in text
    persons = set()
    for name in _KNOWN_PSEUDONYMS:
        if name in text:
            persons.add(name)

    # Related links
    related = []
    for m in _PAT_REL.finditer(text):
        related.append({"target": m.group(1), "type": m.group(2)})

    # Record count
    record_count = len(set(_PAT_RECORD.findall(text)))

    return {
        "file": path.name,
        "result_id": rid,
        "title": title,
        "layers": layers,
        "claim_type": ct,
        "verdict": verdict,
        "persons": sorted(persons),
        "role_anchors": role_anchors,
        "related": related,
        "record_count": record_count,
    }


def build_chains(wiki_dir: str) -> dict:
    claims_dir = Path(wiki_dir) / "claims"
    if not claims_dir.is_dir():
        raise FileNotFoundError(f"Claims directory not found: {claims_dir}")

    atoms = []
    for path in sorted(claims_dir.glob("*.md")):
        if path.name == "_index.md":
            continue
        try:
            atoms.append(_parse_atom(path))
        except Exception as exc:
            atoms.append({
                "file": path.name, "result_id": "", "title": str(exc),
                "layers": [], "claim_type": "", "verdict": "UNKNOWN",
                "persons": [], "role_anchors": {}, "related": [],
                "record_count": 0,
            })

    # Build per-layer chains
    by_layer = defaultdict(list)
    for a in atoms:
        for layer in (a["layers"] or [0]):
            by_layer[layer].append(a)

    chains = []
    for layer in sorted(by_layer.keys()):
        if layer == 0:
            continue
        layer_atoms = by_layer[layer]
        by_ct = defaultdict(list)
        for a in layer_atoms:
            by_ct[a["claim_type"] or "unknown"].append(a)

        acts = []
        for ct, ct_atoms in sorted(by_ct.items()):
            persons_set = set()
            for a in ct_atoms:
                persons_set.update(a["persons"])
            acts.append({
                "act": ct,
                "persons_involved": sorted(persons_set),
                "evidence_count": sum(a["record_count"] for a in ct_atoms),
                "atom_count": len(ct_atoms),
                "verdicts": {a["verdict"] for a in ct_atoms},
            })
        chains.append({"layer": layer, "criminal_acts": acts})

    # Person index
    person_index = {}
    for a in atoms:
        for p in a["persons"]:
            if p not in person_index:
                person_index[p] = {
                    "layers_active": set(),
                    "role_anchors": [],
                    "atom_count": 0,
                    "claim_types": set(),
                }
            person_index[p]["layers_active"].update(a["layers"])
            person_index[p]["atom_count"] += 1
            if a["claim_type"]:
                person_index[p]["claim_types"].add(a["claim_type"])
            if p in a["role_anchors"]:
                for r in a["role_anchors"][p]:
                    if r not in person_index[p]["role_anchors"]:
                        person_index[p]["role_anchors"].append(r)

    # Serialize sets
    for p in person_index:
        person_index[p]["layers_active"] = sorted(person_index[p]["layers_active"])
        person_index[p]["claim_types"] = sorted(person_index[p]["claim_types"])

    # Cross-layer links (3+ layers)
    cross_layer = {
        p: info for p, info in person_index.items()
        if len(info["layers_active"]) >= 3
    }
    cross_layer_sorted = sorted(
        cross_layer.items(),
        key=lambda x: len(x[1]["layers_active"]),
        reverse=True,
    )

    return {
        "chains": chains,
        "person_index": person_index,
        "cross_layer_links": [
            {"pseudonym": p, **info} for p, info in cross_layer_sorted
        ],
        "_meta": {
            "total_atoms": len(atoms),
            "unique_persons": len(person_index),
            "cross_layer_persons": len(cross_layer),
        },
    }


if __name__ == "__main__":
    wiki_dir = sys.argv[1] if len(sys.argv) > 1 else str(
        Path(__file__).resolve().parent.parent / "wiki"
    )
    report = build_chains(wiki_dir)
    m = report["_meta"]
    print(f"Crime Chain: {m['total_atoms']} atoms | "
          f"{m['unique_persons']} persons | "
          f"{m['cross_layer_persons']} cross-layer (3+ layers)")

    print(f"\nPer-layer chain summary:")
    for c in report["chains"]:
        total_persons = set()
        for act in c["criminal_acts"]:
            total_persons.update(act["persons_involved"])
        print(f"  L{c['layer']}: {len(c['criminal_acts'])} act types, "
              f"{len(total_persons)} persons")

    if report["cross_layer_links"]:
        print(f"\nCross-layer persons (3+ layers):")
        for cl in report["cross_layer_links"][:10]:
            print(f"  {cl['pseudonym']}: L{cl['layers_active']} "
                  f"({cl['atom_count']} atoms) "
                  f"roles: {cl['role_anchors'] or 'none'}")

    out = Path(__file__).resolve().parent.parent / "output" / "crime-chain.json"
    # Convert any remaining sets for JSON
    json.dump(report, open(out, "w"), ensure_ascii=False, indent=2,
              default=lambda x: sorted(x) if isinstance(x, set) else str(x))
    print(f"\nFull report: {out}")
