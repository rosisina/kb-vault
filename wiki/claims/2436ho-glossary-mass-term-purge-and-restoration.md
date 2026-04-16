---
lang: ko
title-ko: 제2436호 별표1에서 ~20개 기술용어 일괄 삭제 → 제2842호에서 전면 복원 — 3년 공백
title-en: 제2436호 별표1에서 ~20개 기술용어 일괄 삭제 → 제2842호에서 전면 복원 — 3년 공백
aliases:
  - FR-L4-GLOSSARY-PURGE-2436
  - 제2436호 별표1에서 ~20개 기술용어 일괄 삭제 → 제2842호에서 전면 복원 —

layer: 4
secondary-layers: [1]
claimType: terminology_manipulation
claimSubtype: terminology_mass_deletion
fracture-type: null
source-type: regulation

verdict: NEEDS_MORE_EVIDENCE
strength: MODERATE
truthfulness: 8
validity: 7
sincerity: 6
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations: []
has-verbatim: false

tags:
  - layer/L4
  - layer/L1
  - verdict/needs-more-evidence
  - strength/moderate
  - type/terminology-manipulation
  - source/regulation
  - cross-layer
---
# 제2436호 별표1에서 ~20개 기술용어 일괄 삭제 → 제2842호에서 전면 복원 — 3년 공백

**Source:** raw/08. 용어 변천사/(국방 정보화 업무 훈령) 용어정의 변천사(2018~2025년).converted.md Sections 2-6 (lines 488-2936)
**Layer:** [[../layers/layer-4|Layer 4]], [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-GLOSSARY-PURGE-2436"})
SET fr.layer = 4,
    fr.claimType = "terminology_manipulation",
    fr.claimSubtype = "terminology_mass_deletion",
    fr.claimDesc = "제2436호 ~20개 용어 삭제 + 제2842호 복원 = 3년 공백. 8-anchor cluster와 동기화.",
    fr.counterHypothesis = "용어집 규모 축소를 위한 편집적 정비이며 본문 조작과 무관",
    fr.falsificationCondition = "제2436호의 별표1 축소가 독립적 편집 정책에 의한 것임을 보여주는 기획 문서",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 6,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "제2436호 ~20개 용어 삭제 + 제2842호 복원 = 3년 공백. 8-anchor cluster와 동기화.";
```

## 주장 (Claim)

### 한국어

제2436호(2020.6.4) 별표1에서 빅데이터·GS인증·iSMART·TRL·국방ICT R&D·스마트 국방혁신 등 ~20개 기술혁신 용어가 일괄 삭제. 이 용어들은 제2842호(2023.9.20)에서 전면 복원. 삭제 시점=8-anchor 시험평가 재건과 동시. 복원은 용어의 비폐기를 증명하여 '불필요해서 삭제' 가설을 반박.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- ~20 technology terms purged at 제2436호 synchronized with 8-anchor cluster — not independent editorial cleanup [진리성]
- All terms restored at 제2842호 (3 years later) — proving they were NOT obsolete [진리성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
용어집 규모 축소를 위한 편집적 정비이며 본문 조작과 무관

## 반증 조건 (Falsification Condition)
제2436호의 별표1 축소가 독립적 편집 정책에 의한 것임을 보여주는 기획 문서

## 평결 (Verdict)
**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 8 / 타당성 7 / 진실성 6.

## 원전 확인 (Spot-check)
- `Korean/(국방 정보화 업무 훈령) 용어정의 변천사(2018~2025년).converted.md` lines 488-2936

## 관련 (Related)
- [[2436ho-cluster-six-anchors]] (SUPERSEDES)
- [[2842ho-software-development-13-to-5-stage]] (SUPERSEDES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
