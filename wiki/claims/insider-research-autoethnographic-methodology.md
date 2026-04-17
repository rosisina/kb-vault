---
lang: ko
title-ko: 피해 당사자의 4년간 1차 자료 수집·분석에 기초한 당사자 연구(insider research)
title-en: ""
aliases:
  - FR-META-INSIDER-RESEARCH
  - 피해 당사자의 4년간 1차 자료 수집·분석에 기초한 당사자 연구(insider

layer: 7
secondary-layers: [1, 2, 3, 4, 5, 6]
claimType: methodology
claimSubtype: methodology_claim
fracture-type: null
source-type: book

verdict: NEEDS_MORE_EVIDENCE
strength: MODERATE
truthfulness: 7
validity: 5
sincerity: 10
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations: []
has-verbatim: false

tags:
  - layer/L7
  - layer/L1
  - layer/L2
  - layer/L3
  - layer/L4
  - layer/L5
  - layer/L6
  - verdict/needs-more-evidence
  - strength/moderate
  - type/methodology
  - source/book
  - cross-layer
---
# 피해 당사자의 4년간 1차 자료 수집·분석에 기초한 당사자 연구(insider research)

**Source:** raw/01. book-beyond-cybersecurity/Korean/03-executive-summary--핵심-요약.md 핵심요약 §7 (lines 420-423)
**Layer:** [[../layers/layer-7|Layer 7]], [[../layers/layer-1|Layer 1]] (secondary), [[../layers/layer-2|Layer 2]] (secondary), [[../layers/layer-3|Layer 3]] (secondary), [[../layers/layer-4|Layer 4]] (secondary), [[../layers/layer-5|Layer 5]] (secondary), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-META-INSIDER-RESEARCH"})
SET fr.layer = 7,
    fr.claimType = "methodology",
    fr.claimSubtype = "methodology_claim",
    fr.claimDesc = "당사자 연구. 4년 13,528쪽. 접근 역설: 표적만이 내부 프로세스 기록 가능.",
    fr.counterHypothesis = "피해자-조사자 이중 역할은 객관성이 결여되며 확인 편향을 완화할 수 없다",
    fr.falsificationCondition = "독립 외부 검토자가 동일 13,528쪽 분석으로 실질적으로 다른 결론 도달",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 5,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "당사자 연구. 4년 13,528쪽. 접근 역설: 표적만이 내부 프로세스 기록 가능.";
```

## 주장 (Claim)

### 한국어

본 연구는 피해 당사자가 4년간 직접 수집·분석한 1차 자료(기록 제1쪽~제13,528쪽)에 기초한 당사자 연구(insider research). 접근 역설(access paradox): 조직범죄의 표적만이 보이지 않게 설계된 내부 프로세스를 기록할 수 있다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- 보이지 않는 조직 프로세스에 접근 가능한 고유한 당사자 연구 [진리성]
- Insider research with unique access to invisible organizational processes [진리성]
- 4년간의 1차 자료: 기록 제1~13,528쪽 [진리성]
- 4 years of primary data: Records 1-13,528 [진리성]
- 접근 역설: 설계된 비가시적 내부 프로세스는 표적만이 기록할 수 있음 [진실성]
- Access paradox: only the target can document designed-to-be-invisible internal processes [진실성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
피해자-조사자 이중 역할은 객관성이 결여되며 확인 편향을 완화할 수 없다

## 반증 조건 (Falsification Condition)
독립 외부 검토자가 동일 13,528쪽 분석으로 실질적으로 다른 결론 도달

## 평결 (Verdict)
**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 7 / 타당성 5 / 진실성 10.

## 원전 확인 (Spot-check)
- `Korean/03-executive-summary--핵심-요약.md` lines 420-423

## 관련 (Related)
- [[seven-layer-proof-system-design-rationale]] (RELATED)
- [[../layers/layer-7|Layer 7]] (PART_OF_LAYER)
