---
lang: ko
title-ko: 2019-09-02 생산 문서의 09-03 보고 날짜 — 디지털 시간 역전 문서 조작
title-en: 2019-09-02 생산 문서의 09-03 보고 날짜 — 디지털 시간 역전 문서 조작
aliases:
  - FR-L4-TEMPORAL-REVERSAL-090203
  - 2019-09-02 생산 문서의 09-03 보고 날짜 — 디지털 시간 역전 문서 조작

layer: 4
secondary-layers: []
claimType: document_fabrication
claimSubtype: document_forgery
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-12

record-nos: [2858]
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
  - type/document-fabrication
  - source/book
  - fracture/F-MS
  - org/MND
  - has/record-nos
---
# 2019-09-02 생산 문서의 09-03 보고 날짜 — 디지털 시간 역전 문서 조작

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.7.1 (lines N/A)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-TEMPORAL-REVERSAL-090203"})
SET fr.layer = 4,
    fr.claimType = "document_fabrication",
    fr.claimSubtype = "document_forgery",
    fr.claimDesc = "Record 2,858: 09-02 생산→09-03 보고. 물리적 불가능. 소급 조작 가능성.",
    fr.counterHypothesis = "발송→접수 1일 차이는 전자문서 시스템의 표준 처리 시간차",
    fr.falsificationCondition = "국방부 전자문서시스템에서 발송-보고 1일 차이가 정상임을 보여주는 시스템 로그",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "Record 2,858: 09-02 생산→09-03 보고. 물리적 불가능. 소급 조작 가능성.";
```

## 주장 (Claim)

### 한국어

시험평가 절차 간소화 공문이 2019-09-02에 생산되었으나 MND 보고일은 2019-09-03으로 기록(기록 제2,858쪽). 생산일 이후의 보고일은 물리적으로 불가능하며, 2022년 수사 기간 중 소급 조작 가능성을 시사한다. 온-나라 시스템 유지보수 업체(핸디소프트)의 동조 하에 가능한 조작이다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- 2019-09-02 생산일에 2019-09-03 보고일 = 시간적 불가능 [진리성]
- 09-02 production date with 09-03 report date = temporal impossibility [진리성]
- 기재된 날짜가 아닌 2022년 수사 기간 중 소급 조작 가능성 시사 [진리성]
- Suggests document fabricated during 2022 prosecution period, not on stated date [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 2,858**

## 반대 가설 (Counter-hypothesis)
발송→접수 1일 차이는 전자문서 시스템의 표준 처리 시간차

## 반증 조건 (Falsification Condition)
국방부 전자문서시스템에서 발송-보고 1일 차이가 정상임을 보여주는 시스템 로그

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines N/A

## 관련 (Related)
- [[mnd-test-eval-simplification-timed-to-evaluation-day]] (CORROBORATES)
- [[fabricated-document-2020-produced-in-2022]] (OPPOSES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
