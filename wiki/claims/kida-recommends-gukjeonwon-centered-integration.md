# KIDA의 국전원 중심 시험평가 통합 권고 — 미군 기준 왜곡

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md §3.4.3.4.1-2 (lines 288-340)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-KIDA-GUKJEONWON-INTEGRATION"})
SET fr.layer = 4,
    fr.claimType = "methodology",
    fr.claimSubtype = "academic_fraud_international_misrepresentation",
    fr.claimDesc = "KIDA 연구의 제4 함의(Record 6,722)는 사업관리기관(국전원) 중심의 DT/OT 통합을 권고하나, 이는 US TEMP Guidebook 3.1(2017)의 'DT와 OT는 서로 다른 목적을 가지며 통합해서는 안 된다'는 원칙을 정반대로 왜곡한 것이다. 개발자가 자체 평가하는 여우-닭장 구조(fox-guarding-henhouse)를 학술적으로 정당화한 것이다",
    fr.counterHypothesis = "KIDA의 통합 권고는 한국군의 특수한 상황을 반영한 독자적 판단이며, 미군 기준과의 차이는 맥락 차이에 기인한다",
    fr.falsificationCondition = "US TEMP Guidebook이 특정 조건에서 DT/OT 통합을 허용하는 조항의 제시, 또는 KIDA가 미군 기준과의 차이를 명시적으로 인정·설명한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Record 6,722에서 KIDA 제4 함의 확인. Records 6,725-6,726에서 미군 기준 인용. Records 6,717-6,718에서 연구 배경. US TEMP는 DT/OT 분리 원칙 명시 — KIDA는 정반대로 통합 권고.";
```

## Claim

KIDA 연구의 제4 함의(기록 제6,722쪽)는 사업관리기관(국전원) 중심의 개발시험(DT)/운용시험(OT) 통합을 권고한다. 그러나 이는 미군의 TEMP Guidebook 3.1(2017)이 명시한 "Developmental and operational testing serve different purposes and should not be combined" 원칙을 정반대로 왜곡한 것이다(기록 제6,725쪽~제6,726쪽).

이 통합 구조는 개발자(국전원)가 자체 제품을 평가하는 "여우가 닭장을 지키는" 구조를 만들어, 시험평가의 독립성과 객관성을 근본적으로 파괴한다. KIDA의 연구(기록 제6,240쪽, 제2,721쪽, 제6,730쪽)는 이미 조작된 훈령을 근거로 작성되었다.

## Key Takeaways

- KIDA's 4th implication recommends 사업관리기관(국전원)-centered DT/OT integration — directly contradicting US TEMP Guidebook's separation principle [진리성]
- This creates a fox-guarding-henhouse structure where the developer evaluates its own product [타당성]
- KIDA misrepresents international standards to justify pre-existing domestic manipulation [진리성]

## Supporting evidence

- **Record No. 6,722** — KIDA 제4 함의
- **Record No. 6,725~6,726** — 미군 기준 인용
- **Record No. 6,717~6,718** — 연구 배경
- **Record No. 2,721, 6,240, 6,730** — 관련 자료

## Counter-hypothesis

한국군의 특수한 상황(소규모 사업, 제한된 인력)에서 DT/OT 통합은 합리적 판단이다.

## Falsification condition

US TEMP Guidebook에서 DT/OT 통합을 허용하는 조항의 제시.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` lines 288-340

## Related

- [[kida-otne-citation-misrepresents-us-standard]] — L4 기존 KIDA 미군 왜곡 atom (CORROBORATES)
- [[kida-research-legitimizes-pre-existing-manipulation]] — L4 KIDA 소급 정당화 (CORROBORATES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
