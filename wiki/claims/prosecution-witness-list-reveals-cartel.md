---
lang: ko
title-ko: 군검찰단 참고인 명단 자체가 카르텔 구성원 식별의 핵심 증거
title-en: ""
aliases:
  - FR-L6-WITNESS-LIST-CARTEL-ID
  - 군검찰단 참고인 명단 자체가 카르텔 구성원 식별의 핵심 증거

layer: 6
secondary-layers: [7]
claimType: methodology
claimSubtype: evidentiary_claim
fracture-type: null
source-type: book

verdict: CORROBORATED
strength: MODERATE
truthfulness: 7
validity: 5
sincerity: 8
analysisDate: 2026-04-12

record-nos: [11162]
evidence-ids: []
event-date: 2022-10-11

persons:
  - 한지훈
organizations:
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - layer/L7
  - verdict/corroborated
  - strength/moderate
  - type/methodology
  - source/book
  - person/한지훈
  - org/군검찰단
  - has/record-nos
  - cross-layer
---
# 군검찰단 참고인 명단 자체가 카르텔 구성원 식별의 핵심 증거

**Source:** raw/01. book-beyond-cybersecurity/Korean/15-5-5-결론-및.md §5.3.4 (lines 60-65)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-7|Layer 7]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-WITNESS-LIST-CARTEL-ID"})
SET fr.layer = 6,
    fr.claimType = "methodology",
    fr.claimSubtype = "evidentiary_claim",
    fr.claimDesc = "검사의 '다 불렀다' 발언(Record 11,162)이 참고인 명단=카르텔 조직도임을 시인.",
    fr.counterHypothesis = "참고인 소환은 표준 수사 절차이며 카르텔 구성원 식별과 무관하다",
    fr.falsificationCondition = "참고인 명단에 한지훈 입장을 지지하거나 검찰 서사에 반하는 증언을 한 인원이 포함되어 있었음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 5,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "검사의 '다 불렀다' 발언(Record 11,162)이 참고인 명단=카르텔 조직도임을 시인.";
```

## 주장 (Claim)

### 한국어

군검찰단이 참고인으로 소환한 인원들의 명단 자체가 카르텔 주동자이거나 동조세력을 식별하는 핵심 증거다. 2022.10.11 검사의 '관련 있는 사람은 다 불렀거든요'(기록 제11,162쪽) 발언이 이를 확인한다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- 검찰 자신의 참고인 명단이 자기 고발적 — 소환된 인원들이 카르텔 주동자 또는 동조세력 (Record No. 11,162) [진리성]
- The prosecution's own witness list is self-incriminating — those summoned are cartel principals or sympathizers (Record 11,162) [진리성]
- 검사의 '관련 있는 사람은 다 불렀다' 자인이 조율된 네트워크의 범위를 의도치 않게 확인 [진리성]
- Prosecutor's admission 'we called everyone related' inadvertently confirms the coordinated network scope [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 11,162**

## 반대 가설 (Counter-hypothesis)
참고인 소환은 표준 수사 절차이며 카르텔 구성원 식별과 무관하다

## 반증 조건 (Falsification Condition)
참고인 명단에 한지훈 입장을 지지하거나 검찰 서사에 반하는 증언을 한 인원이 포함되어 있었음을 보여주는 기록

## 평결 (Verdict)
**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 7 / 타당성 5 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/15-5-5-결론-및.md` lines 60-65

## 관련 (Related)
- [[prosecution-principal-actor-in-cartel]] (RELATED)
- [[kim-min-su-central-cross-layer-cartel-figure]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
