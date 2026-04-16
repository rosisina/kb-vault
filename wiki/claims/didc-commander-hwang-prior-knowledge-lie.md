---
lang: ko
title-ko: DIDC 부대장 황만수의 수사 사전 인지 거짓말
title-en: ""
aliases:
  - FR-L4-HWANG-PRIOR-KNOWLEDGE
  - DIDC 부대장 황만수의 수사 사전 인지 거짓말

layer: 4
secondary-layers: []
claimType: witness_manipulation
claimSubtype: witness_dishonesty
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 8
analysisDate: 2026-04-11

record-nos: [11399, 11404]
evidence-ids: []
event-date: null

persons:
  - 황만수
  - 한지훈
  - 김성민
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/witness-manipulation
  - source/book
  - fracture/F-CE
  - person/황만수
  - person/한지훈
  - person/김성민
  - org/DIDC
  - has/record-nos
---
# DIDC 부대장 황만수의 수사 사전 인지 거짓말

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.2.2 (lines 118-161)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-HWANG-PRIOR-KNOWLEDGE"})
SET fr.layer = 4,
    fr.claimType = "witness_manipulation",
    fr.claimSubtype = "witness_dishonesty",
    fr.claimDesc = "DIDC 부대장 황만수는 2022.10.6~7 한지훈과의 통화에서 수사 사실을 '전혀 모른다'고 주장하였으나, 김성민과의 대화(Record 11,404)에서 황만수가 사전에 알고 있었고 김성민에게 '잘 좀 응원해줘'라고 말한 사실이 확인됨 — 거짓말 입증",
    fr.counterHypothesis = "황만수는 수사의 세부 내용을 모른다는 의미였으며, 한지훈의 어려움을 일반적으로 알고 있었을 뿐 수사 구체 내용은 몰랐다",
    fr.falsificationCondition = "황만수가 수사 사실을 김성민 이외의 경로로 알 수 없었음을 보여주는 기록, 또는 황만수의 '모른다' 발언이 특정 세부사항에 국한된 것임을 보여주는 맥락",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Record 11,399에서 황만수 '진짜 모른다' 주장. Record 11,404에서 김성민이 '황만수가 먼저 알고 있었다'고 확인. 황만수는 2015년 육본 정보보호과장으로 한지훈과 근무한 인연. DIDC 부대장으로서 2016 해킹 후속조치에도 연루 가능성.";
```

## 주장 (Claim)

### 한국어

DIDC 부대장 황만수는 2022년 10월 6~7일 한지훈과의 전화 통화에서 수사 사실을 "진짜 모른다", "전혀 모른다"고 반복 주장하였다(기록 제11,399쪽). 그러나 한지훈의 박사 동기 김성민과의 2022.10.7일경 대화(기록 제11,404쪽)에서:

- 김성민: "황만수가 먼저 알고 있었더라고. '영주형 지금 머리 복잡한 일이 생겼는데 잘 좀 응원해줘'라고 하더라"

이로써 황만수가 수사 사실을 사전에 알고 있었으면서 한지훈에게 거짓말한 것이 입증된다. 황만수는 2015년 육군본부 정보보호과장으로 한지훈과 근무한 인연이 있으며, DIDC 부대장으로서 2016년 해킹 후속 조치에도 관여했을 가능성이 있다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- DIDC commander 황만수 lied about knowing of 한지훈's investigation — proven by cross-referencing 김성민's conversation (Record No. 11,404) [진리성]
- 황만수 preemptively contacted 김성민 to "support" 한지훈 — showing prior knowledge he denied [진리성]
- As DIDC commander during the post-2016 hacking period, 황만수's dishonesty suggests DIDC organizational awareness of the cover-up [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 11,399** — 황만수-한지훈 통화 (2022.10.6~7, "모른다" 주장)
- **Record No. 11,404** — 김성민-한지훈 대화 (황만수의 사전 인지 확인)

## 반대 가설 (Counter-hypothesis)
황만수는 수사 세부 내용을 모른다는 의미였으며, 일반적 어려움만 알고 있었다.

## 반증 조건 (Falsification Condition)
황만수의 "모른다" 발언이 특정 세부사항에 국한된 것임을 보여주는 맥락.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 149-159

## 관련 (Related)
- [[didc-falsely-records-old-kiatis-as-vpn-user]] — L4 DIDC 허위 기재 (OPPOSES)
- [[didc-excluded-from-test-eval-reform]] — L4 DIDC 배제 (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
