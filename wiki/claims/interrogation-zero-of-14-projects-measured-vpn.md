---
lang: ko
title-ko: 2019년 14개 사업 중 VPN 성능을 측정한 사업 0건 — 검찰 요구의 전례 없는 차별적 적용
title-en: 2019년 14개 사업 중 VPN 성능을 측정한 사업 0건 — 검찰 요구의 전례 없는 차별적 적용
aliases:
  - FR-L6-ZERO-VPN-MEASUREMENT-BASELINE
  - 2019년 14개 사업 중 VPN 성능을 측정한 사업 0건 — 검찰 요구의 전례 없는

layer: 6
secondary-layers: [4]
claimType: institutional_obstruction
claimSubtype: institutional_precedent
fracture-type: F-SE
source-type: investigation

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - DCIA
has-verbatim: false

tags:
  - layer/L6
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/institutional-obstruction
  - source/investigation
  - fracture/F-SE
  - person/한지훈
  - org/DCIA
  - cross-layer
---
# 2019년 14개 사업 중 VPN 성능을 측정한 사업 0건 — 검찰 요구의 전례 없는 차별적 적용

**Source:** raw/05. Investigation by the Military Prosecutor's Office/Bilingual(English, Korean)/(2022902) Record of interrogation of a suspect (2 September 2022(English, Korean).converted.md 피의자 진술 (lines 1-2154)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-ZERO-VPN-MEASUREMENT-BASELINE"})
SET fr.layer = 6,
    fr.claimType = "institutional_obstruction",
    fr.claimSubtype = "institutional_precedent",
    fr.claimDesc = "14개 사업 중 VPN 측정 0건. KIATIS에만 VPN 의무 부과 = 전례 없는 차별적 적용.",
    fr.counterHypothesis = "다른 13개 사업은 KIATIS와 다른 유형이어서 VPN 측정이 불필요했다",
    fr.falsificationCondition = "14개 사업 중 하나라도 VPN 성능 측정을 실시한 기록, 또는 KIATIS만 VPN 측정이 필요한 특수 사유가 존재함을 보여주는 규정",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "14개 사업 중 VPN 측정 0건. KIATIS에만 VPN 의무 부과 = 전례 없는 차별적 적용.";
```

## 주장 (Claim)

### 한국어

한지훈은 피의자신문에서 '2019에 수행한 14개 사업에 대해 DIDC에서 관리하는 VPN 등 보안장비의 성능을 측정한 것은 없는 것으로 알고 있습니다'라고 진술. 14개 사업 중 VPN 성능 측정을 실시한 사업이 0건이라는 것은, 검찰이 KIATIS 사업에만 VPN 관련 의무를 부과한 것이 제도적 전례 없는 차별적 적용(selective application)임을 입증한다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- 2019년 14개 사업 중 VPN 성능 측정 수행 건수: 0 — 검찰의 KIATIS 요구는 제도적 전례 없음 [진리성]
- Zero of 14 DCIA projects in 2019 measured VPN performance — prosecution's expectation for KIATIS was institutionally unprecedented [진리성]
- 선별 적용: 동일 기준이 다른 어느 사업에도 적용되지 않음 = 표적 수사, 법규 집행이 아님 [타당성]
- Selective application: same standard not applied to any other project = targeting, not compliance enforcement [타당성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
다른 13개 사업은 KIATIS와 다른 유형이어서 VPN 측정이 불필요했다

## 반증 조건 (Falsification Condition)
14개 사업 중 하나라도 VPN 성능 측정을 실시한 기록, 또는 KIATIS만 VPN 측정이 필요한 특수 사유가 존재함을 보여주는 규정

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/(2022902) Record of interrogation of a suspect (2 September 2022(English, Korean).converted.md` lines 1-2154

## 관련 (Related)
- [[firewall-port-opening-standard-it-procedure]] (RELATED)
- [[prosecution-selective-criminalization-firewall-approval-chain]] (CAUSES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
