---
lang: ko
title-ko: KIATIS는 국방사이버안보 훈령 제3조 제7호의 '사이버자산'에 해당 — 제3장 전체 의무 적용
title-en: KIATIS는 국방사이버안보 훈령 제3조 제7호의 '사이버자산'에 해당 — 제3장 전체 의무 적용
aliases:
  - FR-CSR-001
  - KIATIS는 국방사이버안보 훈령 제3조 제7호의 '사이버자산'에 해당 — 제3장 전체

layer: 1
secondary-layers: [4]
claimType: methodology
claimSubtype: jurisdictional_foundation
fracture-type: F-CE
source-type: regulation

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 3
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations: []
has-verbatim: false

tags:
  - layer/L1
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/regulation
  - fracture/F-CE
  - cross-layer
---
# KIATIS는 국방사이버안보 훈령 제3조 제7호의 '사이버자산'에 해당 — 제3장 전체 의무 적용

**Source:** raw/09. 사이버안보 훈령(당시)/cyber security reguration.md 제3조 제7호 (lines 110-111)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-CSR-001"})
SET fr.layer = 1,
    fr.claimType = "methodology",
    fr.claimSubtype = "jurisdictional_foundation",
    fr.claimDesc = "KIATIS=사이버자산. 제3장 전체 보호 의무 적용의 법적 기반.",
    fr.counterHypothesis = "KIATIS의 중요도가 '현저히 떨어져' 제외 대상이다",
    fr.falsificationCondition = "KIATIS가 사이버자산 지정에서 제외된 공식 분류 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 3,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "KIATIS=사이버자산. 제3장 전체 보호 의무 적용의 법적 기반.";
```

## 주장 (Claim)

### 한국어

舊KIATIS는 전력지원체계에 해당하는 국방정보시스템으로서 제3조 제7호의 '사이버자산' 정의를 충족한다. 따라서 이 훈령의 사이버보안 업무(제4조 제3항) 전체 — 보호대책(제22-26조), 취약점 평가(제39-45조), 전력지원체계 수명주기 보호(제32-36조) — 가 KIATIS에 적용된다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- KIATIS는 사이버자산 정의를 충족 — 제3장의 모든 보호 의무가 적용 [타당성]
- KIATIS fits the cyber asset definition — all Chapter 3 protection obligations attach [타당성]
- 사이버자산으로 분류되면 취약점 평가·보호대책·수명주기 보안이 전부 적용 [타당성]
- Once classified as cyber asset, vulnerability assessment, protection plans, and lifecycle security all apply [타당성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
KIATIS의 중요도가 '현저히 떨어져' 제외 대상이다

## 반증 조건 (Falsification Condition)
KIATIS가 사이버자산 지정에서 제외된 공식 분류 기록

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 10 / 진실성 3.

## 원전 확인 (Spot-check)
- `Korean/cyber security reguration.md` lines 110-111

## 관련 (Related)
- [[old-kiatis-apt-optimal-vulnerability-structure]] (RELATED)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
