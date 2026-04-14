---
lang: ko
title-ko: "제2946호 (2024-07-17): 정보화기획관실→지능정보화정책관실 — 2세대 entity-naming anchor 이동"
title-en: "제2946호 (2024-07-17): 정보화기획관실→지능정보화정책관실 — 2세대 entity-naming anchor 이동"
aliases:
  - FR-L1-2946-RENAME
  - "제2946호 (2024-07-17): 정보화기획관실→지능정보화정책관실 — 2세대"

layer: 1
secondary-layers: [3, 4]
claimType: regulatory_manipulation
claimSubtype: entity_naming_anchor_shift
fracture-type: null
source-type: regulation

verdict: CORROBORATED
strength: MODERATE
truthfulness: 8
validity: 8
sincerity: 6
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations:
  - MND
has-verbatim: false

tags:
  - layer/L1
  - layer/L3
  - layer/L4
  - verdict/corroborated
  - strength/moderate
  - type/regulatory-manipulation
  - source/regulation
  - org/MND
  - cross-layer
---
# 제2946호 (2024-07-17): 정보화기획관실→지능정보화정책관실 — 2세대 entity-naming anchor 이동

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2946호)(20240717).converted.md 제10조②, 제11조①②⑤⑥, 제64조④ (lines 597-832)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-3|Layer 3]] (secondary), [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-2946-RENAME"})
SET fr.layer = 1,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "entity_naming_anchor_shift",
    fr.claimDesc = "2세대 entity-naming anchor shift. 사업통제기관→정보화기획관실→지능정보화정책관실 3단계 연쇄.",
    fr.counterHypothesis = "MND 조직개편(직제 개편)에 따른 실질적 기능 변경이며 명칭만의 변경이 아니다",
    fr.falsificationCondition = "지능정보화정책관실이 정보화기획관실과 실질적으로 다른 기능·인력을 가진 신설 조직임을 보여주는 직제 개편 명령",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 6,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "2세대 entity-naming anchor shift. 사업통제기관→정보화기획관실→지능정보화정책관실 3단계 연쇄. 책이 정보화기획관실을 '핵심 범죄조직'으로 명시 — 명칭 변경은 범죄 주체의 추적을 이중 매개하는 효과.";
```

## Claim

제2946호(2024.7.17)에서 '정보화기획관실'을 '지능정보화정책관실'로 훈령 전체에 걸쳐 교체. 제2436호의 '사업통제기관→정보화기획관실' 교체에 이은 2세대 anchor 이동으로, 원래 용어가 이중 매개되어 추적이 더욱 곤란해진다. 사업통제기관→정보화기획관실→지능정보화정책관실의 3단계 연쇄.

## Key Takeaways

- Second-generation entity-naming shift after 제2436호 — original term now requires two translation layers [타당성]
- Double rename chain compounds obfuscation: any pre-2024 document/testimony uses outdated names [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

MND 조직개편(직제 개편)에 따른 실질적 기능 변경이며 명칭만의 변경이 아니다

## Falsification condition

지능정보화정책관실이 정보화기획관실과 실질적으로 다른 기능·인력을 가진 신설 조직임을 보여주는 직제 개편 명령

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 8 / 진실성 6. Upgraded from NME: 책(§3.6 Layer 6)이 정보화기획관실을 "국방정보화카르텔의 핵심 범죄조직"으로 명시적 분류 — 해당 조직의 명칭 변경은 범죄 주체 추적을 이중 매개하는 효과. 직제 개편 명령이 실질적 기능 변경을 보여줄 경우 WEAKENED로 하향 가능.

## Spot-check

- `vault-converted-korean/국방 정보화업무 훈령(국방부훈령)(제2946호)(20240717).converted.md` lines 597-832

## Related

- [[2436ho-gukjeonwon-role-tier-renaming]] (SUPERSEDES)
- [[2436ho-didc-naming-anchor-removed]] (CORROBORATES)
- [[directive-article-11-control-functions-stripped]] (RELATED)
