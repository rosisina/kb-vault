---
lang: ko
title-ko: "카르텔 3단계 시간 전개: 은폐기반(2016~18) → 조작가동(2018~22) → 범죄완성(2022~25)"
title-en: ""
aliases:
  - FR-L6-THREE-PHASE-TIMELINE
  - "카르텔 3단계 시간 전개: 은폐기반(2016~18) → 조작가동(2018~22) →"

layer: 6
secondary-layers: [1, 4, 5]
claimType: temporal_manipulation
claimSubtype: temporal_structure
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 9
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L6
  - layer/L1
  - layer/L4
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/temporal-manipulation
  - source/book
  - fracture/F-MS
  - person/한지훈
  - org/DIDC
  - cross-layer
---
# 카르텔 3단계 시간 전개: 은폐기반(2016~18) → 조작가동(2018~22) → 범죄완성(2022~25)

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md §3.6.6.1 (lines 791-804)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-1|Layer 1]] (secondary), [[../layers/layer-4|Layer 4]] (secondary), [[../layers/layer-5|Layer 5]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-THREE-PHASE-TIMELINE"})
SET fr.layer = 6,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "temporal_structure",
    fr.claimDesc = "9년 3단계 시간 전개 = 단일 유기적 범죄 시스템의 구조.",
    fr.counterHypothesis = "각 단계는 독립적 기관의 독립적 결정이며 단일 계획이 아니다",
    fr.falsificationCondition = "L1-4 행위자와 L5-7 행위자 간 소통이나 조율이 없었음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "9년 3단계 시간 전개 = 단일 유기적 범죄 시스템의 구조.";
```

## 주장 (Claim)

### 한국어

카르텔 9년간 3단계: 1단계(2016~18) DIDC 해킹 은폐+Active-X 제거+훈령 조작 개시. 2단계(2018~22) 新KIATIS 사업구조 조작+시험평가 왜곡+한지훈 표적 설정. 3단계(2022~25) 허위 갑질→사기수사→증거 은폐→개인 책임 전가. 9년간의 전개가 단일 유기적 범죄 시스템의 시간 구조.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- 9년간 3단계: 은폐 토대 구축 → 조작 실행 → 범죄 완성 [진리성]
- Three phases over 9 years: concealment foundation → manipulation activation → crime completion [진리성]
- 3개의 독립된 기관 행위가 아닌 단일 유기적 범죄 시스템 [진리성]
- Single organic crime system, not three independent institutional actions [진리성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
각 단계는 독립적 기관의 독립적 결정이며 단일 계획이 아니다

## 반증 조건 (Falsification Condition)
L1-4 행위자와 L5-7 행위자 간 소통이나 조율이 없었음을 보여주는 기록

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 9.

## 원전 확인 (Spot-check)
- `Korean/12-3-6-36-제6층위-군.md` lines 791-804

## 관련 (Related)
- [[seven-layer-organic-crime-system-proven]] (RELATED)
- [[prosecution-principal-actor-in-cartel]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
