---
lang: ko
title-ko: 2016 해킹은 제44조 긴급 취약점 점검 조건 2개를 동시 충족 — KIATIS 점검 필수였다
title-en: 2016 해킹은 제44조 긴급 취약점 점검 조건 2개를 동시 충족 — KIATIS 점검 필수였다
aliases:
  - FR-CSR-006
  - 2016 해킹은 제44조 긴급 취약점 점검 조건 2개를 동시 충족 — KIATIS 점검

layer: 1
secondary-layers: [6]
claimType: procedural_violation
claimSubtype: procedural_duty
fracture-type: null
source-type: regulation

verdict: CORROBORATED
strength: MODERATE
truthfulness: 8
validity: 10
sincerity: 6
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L1
  - layer/L6
  - verdict/corroborated
  - strength/moderate
  - type/procedural-violation
  - source/regulation
  - org/DIDC
  - cross-layer
---
# 2016 해킹은 제44조 긴급 취약점 점검 조건 2개를 동시 충족 — KIATIS 점검 필수였다

**Source:** raw/09. 사이버안보 훈령(당시)/cyber security reguration.md 제44조 (lines 391-398)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-CSR-006"})
SET fr.layer = 1,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_duty",
    fr.claimDesc = "2016 해킹은 제44조 긴급점검 조건 2개 동시 충족. KIATIS 점검 미시행=은폐.",
    fr.counterHypothesis = "긴급 점검이 사이버사령부에 의해 실시되었으나 기밀이다",
    fr.falsificationCondition = "2016 해킹 후 발령된 긴급 취약점 점검 명령 또는 결과 보고서",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 10,
    fr.sincerity = 6,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "2016 해킹은 제44조 긴급점검 조건 2개 동시 충족. KIATIS 점검 미시행=은폐.";
```

## 주장 (Claim)

### 한국어

제44조 제2호 '사이버공격 징후가 탐지된 경우'와 제3호 '주요기반체계에 영향을 미칠 수 있는 취약점이 발견된 경우'에 따라, 2016년 북한 해킹 탐지 시 KIATIS를 포함한 DIDC 소관 전 체계에 대한 긴급 취약점 점검이 시행되어야 했다. 미시행은 제44조 위반이며 은폐 수단이다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- 2016년 북한 해킹은 제44조의 긴급 발동 요건 두 가지를 동시에 충족 [타당성]
- 2016 NK hacking satisfies two Art. 44 emergency triggers simultaneously [타당성]
- 긴급 취약점 점검은 KIATIS를 포함한 DIDC 소관 전 체계를 대상으로 했어야 함 [타당성]
- Emergency vulnerability check should have covered ALL DIDC-hosted systems including KIATIS [타당성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
긴급 점검이 사이버사령부에 의해 실시되었으나 기밀이다

## 반증 조건 (Falsification Condition)
2016 해킹 후 발령된 긴급 취약점 점검 명령 또는 결과 보고서

## 평결 (Verdict)
**NEEDS_MORE_EVIDENCE.** STRONG. 진리성 8 / 타당성 10 / 진실성 6.

## 원전 확인 (Spot-check)
- `Korean/cyber security reguration.md` lines 391-398

## 관련 (Related)
- [[didc-sop-12-incident-scene-preservation-mandatory]] (CORROBORATES)
- [[xsyn-sop-incident-silence-equals-coverup-proof]] (RELATED)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
