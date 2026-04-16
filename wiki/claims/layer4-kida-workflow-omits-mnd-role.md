---
lang: ko
title-ko: KIDA 업무흐름도에서 국방부 역할 완전 누락
title-en: ""
aliases:
  - FR-L4-KIDA-WORKFLOW-NO-MND
  - KIDA 업무흐름도에서 국방부 역할 완전 누락

layer: 4
secondary-layers: []
claimType: methodology
claimSubtype: academic_fraud_omission
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-11

record-nos: [6709, 6712, 6731]
evidence-ids: []
event-date: null

persons: []
organizations:
  - MND
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/book
  - fracture/F-MS
  - org/MND
  - has/record-nos
---
# KIDA 업무흐름도에서 국방부 역할 완전 누락

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.3.3 (lines 277-282)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-KIDA-WORKFLOW-NO-MND"})
SET fr.layer = 4,
    fr.claimType = "methodology",
    fr.claimSubtype = "academic_fraud_omission",
    fr.claimDesc = "KIDA 연구보고서의 국방정보시스템 업무흐름도(Record 6,712)에서 국방부(사업통제기관)의 역할이 완전히 누락되었다. 이 흐름도가 조작된 훈령(제2275호)을 기초로 작성되었기 때문이다. 또한 훈령 제2398호(2020.2.13) 개정이 KIDA 연구 완료(2020.6~7월)보다 앞서 이루어져, 연구가 훈령 조작을 정당화하는 도구임이 시간적으로도 확인된다",
    fr.counterHypothesis = "업무흐름도는 위임사업의 흐름을 도식화한 것이며, 위임사업에서는 국방부의 직접적 역할이 축소되는 것이 정상이다",
    fr.falsificationCondition = "KIDA 흐름도가 위임사업 전용 흐름도임을 명시하는 연구보고서 내 설명",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Record 6,712에서 국방부 역할 누락 확인. 新KIATIS는 위임사업이 아닌 통제사업이므로 국방부 역할 누락은 부당. 훈령 조작(2020.2.13)이 연구 완료(2020.6~7월)보다 선행 — 연구가 조작 정당화 도구.";
```

## 주장 (Claim)

### 한국어

KIDA 연구보고서의 국방정보시스템 업무흐름도(기록 제6,712쪽)에서 국방부(사업통제기관)의 역할이 완전히 누락되어 있다. 이 흐름도는 조작된 훈령 제2275호(2019.5.9., 국가법령센터 미등재)를 기초로 작성되었다.

시간적 증거: 훈령 제2398호 개정(2020.2.13.)이 KIDA 연구 완료(2020.6~7월, 기록 제6,731쪽)보다 앞서 이루어졌다. 즉, 이미 조작된 훈령 하에서 연구가 수행되어, 연구 결과가 자연스럽게 국방부 역할을 배제하게 된 것이다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- KIDA's workflow diagram (Record No. 6,712) completely omits MND's role as 사업통제기관 [진리성]
- The diagram was based on the fabricated 훈령 제2275호 (not in National Legislation Center) [타당성]
- Directive amendment (2020.2.13) preceded research completion (2020.6-7) — the research was conducted under already-manipulated regulations [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 6,712** — KIDA 업무흐름도 (국방부 역할 누락)
- **Record No. 6,709** — 연구 기초 훈령 (제2275호)
- **Record No. 6,731** — 연구 완료 시점

## 반대 가설 (Counter-hypothesis)
흐름도는 위임사업 전용이며, 위임사업에서 국방부 역할 축소는 정상이다.

## 반증 조건 (Falsification Condition)
KIDA 흐름도가 위임사업 전용임을 명시하는 연구보고서 내 설명.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 277-282

## 관련 (Related)
- [[kida-research-legitimizes-pre-existing-manipulation]] — L4 KIDA 소급 정당화 (CORROBORATES)
- [[kida-recommends-gukjeonwon-centered-integration]] — L4 KIDA 통합 권고 (CORROBORATES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
