---
lang: ko
title-ko: 검찰이 별표(기술요건)만 인용하고 제3장(기관 의무)은 무시 — 개인→기관 책임 전환의 선별적 인용
title-en: 검찰이 별표(기술요건)만 인용하고 제3장(기관 의무)은 무시 — 개인→기관 책임 전환의 선별적 인용
aliases:
  - FR-CSR-009
  - 검찰이 별표(기술요건)만 인용하고 제3장(기관 의무)은 무시 — 개인→기관 책임 전환의

layer: 6
secondary-layers: [1, 4]
claimType: prosecution_misconduct
claimSubtype: selective_prosecution
fracture-type: null
source-type: regulation

verdict: CORROBORATED
strength: MODERATE
truthfulness: 7
validity: 8
sincerity: 9
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L6
  - layer/L1
  - layer/L4
  - verdict/corroborated
  - strength/moderate
  - type/prosecution-misconduct
  - source/regulation
  - org/DIDC
  - cross-layer
---
# 검찰이 별표(기술요건)만 인용하고 제3장(기관 의무)은 무시 — 개인→기관 책임 전환의 선별적 인용

**Source:** raw/09. 사이버안보 훈령(당시)/cyber security reguration.md 별표 SS-2-3 vs 제3장 전체 (lines 506-551 vs 167-398)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-1|Layer 1]] (secondary), [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-CSR-009"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "selective_prosecution",
    fr.claimDesc = "검찰의 선별적 규정 인용: 별표(개인 기술의무)만 인용, 제3장(기관 제도의무) 무시.",
    fr.counterHypothesis = "AS-4-3은 다른 코딩 체계를 지칭하며 검찰이 제3장도 별도 인용했을 수 있다",
    fr.falsificationCondition = "AS-4-3의 정확한 조항 참조 해독 + 검찰 기록에서 제3장 인용 여부 확인",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "검찰의 선별적 규정 인용: 별표(개인 기술의무)만 인용, 제3장(기관 제도의무) 무시.";
```

## Claim

검찰이 피의자 신문에서 인용한 '국방사이버안보 훈령 AS-4-3'은 별표의 기술적 보호요구사항(SS-2-3 데이터 접근 통제 등)을 지칭할 가능성이 높다. 이는 개인의 기술적 의무에 초점을 맞추고, 제3장의 기관 차원 제도적 의무(보호대책 수립 제22-26조, 취약점 평가 제39-45조, 보안관제 제54조)를 의도적으로 회피한 것이다.

## Key Takeaways

- Prosecution cited technical appendix (individual duty) while ignoring Chapter 3 (institutional duty) — selective citation to individualize blame [타당성]
- Chapter 3 places duties on DIDC as institution, not on any individual officer [타당성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

AS-4-3은 다른 코딩 체계를 지칭하며 검찰이 제3장도 별도 인용했을 수 있다

## Falsification condition

AS-4-3의 정확한 조항 참조 해독 + 검찰 기록에서 제3장 인용 여부 확인

## Verdict

**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 7 / 타당성 8 / 진실성 9.

## Spot-check

- `vault-converted-korean/cyber security reguration.md` lines 506-551 vs 167-398

## Related

- [[xsyn-sop-vpn-mandate-vs-prosecution-cherry-pick]] (RELATED)
- [[prosecution-selective-criminalization-firewall-approval-chain]] (CAUSES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
