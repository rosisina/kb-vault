---
lang: ko
title-ko: KIDA의 국전원 중심 시험평가 통합 권고 — 미군 기준 왜곡
title-en: KIDA의 국전원 중심 시험평가 통합 권고 — 미군 기준 왜곡
aliases:
  - FR-L4-KIDA-GUKJEONWON-INTEGRATION
  - KIDA의 국전원 중심 시험평가 통합 권고 — 미군 기준 왜곡

layer: 4
secondary-layers: []
claimType: methodology
claimSubtype: academic_fraud_international_misrepresentation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-11

record-nos: [2721, 6717, 6722, 6725]
evidence-ids: []
event-date: null

persons: []
organizations:
  - 국전원
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/book
  - fracture/F-MS
  - org/국전원
  - has/record-nos
---
# KIDA의 국전원 중심 시험평가 통합 권고 — 미군 기준 왜곡

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.3.4.1-2 (lines 288-340)
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

## 주장 (Claim)

### 한국어

KIDA 연구의 제4 함의(기록 제6,722쪽)는 사업관리기관(국전원) 중심의 개발시험(DT)/운용시험(OT) 통합을 권고한다. 그러나 이는 미군의 TEMP Guidebook 3.1(2017)이 명시한 "Developmental and operational testing serve different purposes and should not be combined" 원칙을 정반대로 왜곡한 것이다(기록 제6,725쪽~제6,726쪽).

이 통합 구조는 개발자(국전원)가 자체 제품을 평가하는 "여우가 닭장을 지키는" 구조를 만들어, 시험평가의 독립성과 객관성을 근본적으로 파괴한다. KIDA의 연구(기록 제6,240쪽, 제2,721쪽, 제6,730쪽)는 이미 조작된 훈령을 근거로 작성되었다.

### English

KIDA's research finding 4 (Record No. 6,722) recommends 국전원 (project management agency)-centered integration of DT/OT. However, this is the exact opposite distortion of the U.S. TEMP Guidebook 3.1 (2017) principle: 'Developmental and operational testing serve different purposes and should not be combined' (Records No. 6,725–6,726).

This integration structure creates a 'fox guarding the henhouse' scenario where the developer (국전원) evaluates its own product, fundamentally destroying the independence and objectivity of test evaluation. KIDA's research (Records No. 6,240, 2,721, and 6,730) was written based on directives that had already been manipulated.

## 핵심 요약 (Key Takeaways)
- KIDA's 4th implication recommends 사업관리기관(국전원)-centered DT/OT integration — directly contradicting US TEMP Guidebook's separation principle [진리성]
- This creates a fox-guarding-henhouse structure where the developer evaluates its own product [타당성]
- KIDA misrepresents international standards to justify pre-existing domestic manipulation [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 6,722** — KIDA 제4 함의
- **Record No. 6,725~6,726** — 미군 기준 인용
- **Record No. 6,717~6,718** — 연구 배경
- **Record No. 2,721, 6,240, 6,730** — 관련 자료

## 반대 가설 (Counter-hypothesis)
한국군의 특수한 상황(소규모 사업, 제한된 인력)에서 DT/OT 통합은 합리적 판단이다.

## 반증 조건 (Falsification Condition)
US TEMP Guidebook에서 DT/OT 통합을 허용하는 조항의 제시.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 288-340

## 관련 (Related)
- [[kida-otne-citation-misrepresents-us-standard]] — L4 기존 KIDA 미군 왜곡 atom (CORROBORATES)
- [[kida-research-legitimizes-pre-existing-manipulation]] — L4 KIDA 소급 정당화 (CORROBORATES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
