---
lang: ko
title-ko: L3 서버-SW 의도적 분리가 L4 시험평가 조작의 제도적 전제조건
title-en: ""
aliases:
  - FR-L3-SW-SEPARATION-L4-BRIDGE
  - L3 서버-SW 의도적 분리가 L4 시험평가 조작의 제도적 전제조건

layer: 3
secondary-layers: [4]
claimType: cross_layer_analysis
claimSubtype: separation_enables_evaluation_manipulation
fracture-type: null
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-12

record-nos: [2538, 8012, 8086, 8179]
evidence-ids: []
event-date: null

persons:
  - 박성호
organizations:
  - MND
has-verbatim: false

tags:
  - layer/L3
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/cross-layer-analysis
  - source/book
  - person/박성호
  - org/MND
  - has/record-nos
  - cross-layer
---
# L3 서버-SW 의도적 분리가 L4 시험평가 조작의 제도적 전제조건

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/09-3-3-33-제3-층위.md §3.3 (line 13)
**Layer:** [[../layers/layer-3|Layer 3]] (primary), [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L3-SW-SEPARATION-L4-BRIDGE"})
SET fr.layer = 3,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "separation_enables_evaluation_manipulation",
    fr.claimDesc = "국방부의 서버와 SW 사업관리 의도적 분리(L3)가 훈령 제2129호 제58조의 개발시험평가/운용시험평가 분리 원칙(기록 제8,012)을 악용할 수 있는 제도적 공간을 창출하여, L4 시험평가 조작의 전제조건을 형성",
    fr.counterHypothesis = "서버-SW 분리는 사업 규모에 따른 정상적 관리 결정이며, L4 시험평가 문제와 인과관계가 없다",
    fr.falsificationCondition = "서버-SW 분리가 시험평가 독립성을 강화(약화가 아닌)했음을 보여주는 시험평가 결과 분석",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "훈령 제58조(기록 제8,012): 개발시험평가와 운용시험평가 분리 원칙. L3의 서버-SW 분리가 이 원칙의 적용을 왜곡 — 사업통제기관(기록 제8,086/8,179)의 책임이 분산되어 L4 평가위원회 조작(기록 제2,538 박성호 허위 보고)이 가능해짐.";
```

## Claim

국방부는 新KIATIS 성능개선사업에서 서버와 소프트웨어의 사업관리를 의도적으로 분리했다(본서 §3.3.1.2). 이 분리는 훈령 제2129호 제58조 '시험평가 수행 원칙'(기록 제8,012쪽)에서 규정하는 개발시험평가와 운용시험평가의 분리를 악용할 수 있는 제도적 공간을 창출했다. 사업통제기관의 책임이 분산(기록 제8,086쪽, 제8,179쪽)됨에 따라, Layer 4에서 박성호가 시험평가계획 보고를 배제하고(기록 제2,538쪽) 평가위원회를 조작하는 것이 제도적으로 가능해졌다.

## Key Takeaways

- MND intentionally separated server and SW project management in Layer 3 (§3.3.1.2) [진리성]
- Directive 2129 Article 58 (Record No. 8,012) mandates DT&E / OT&E separation — L3's project split distorted this principle's application [타당성]
- Control agency responsibilities (Record No. 8,086 / 8,179) became diffused across split projects — accountability gap [타당성]
- 박성호 exploited this gap: excluded test evaluation plan reporting (Record No. 2,538) [진리성]
- **Cross-layer mechanism: L3 structural separation → L4 evaluation manipulation enablement** [진실성]

## Supporting evidence

- **Record No. 8,012** — 훈령 제58조 시험평가 수행 원칙
- **Record No. 8,086** — 사업통제기관 책임 (1)
- **Record No. 8,179** — 사업통제기관 책임 (2)
- **Record No. 2,538** — 박성호 시험평가계획 허위 보고/배제

## Counter-hypothesis

서버-SW 분리는 사업 규모에 따른 정상적 관리 결정이며, L4 시험평가 문제와 인과관계가 없다.

## Falsification condition

서버-SW 분리가 시험평가 독립성을 강화(약화가 아닌)했음을 보여주는 시험평가 결과 분석.

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 8. 훈령 조항 + 책임 분산 기록 + 허위 보고 실증이 인과 체인을 구성.

## Spot-check (raw/01 book)

- `vault-converted-korean/09-3-3-33-제3-층위.md` line 13 — 시험평가 분리 원칙 + 제58조
- `vault-converted-korean/10-3-4-34-제4-층위.md` — L4 시험평가 조작 결과

## Related

- [[mnd-intentional-separation-server-sw-projects]] (CAUSES)
- [[layer4-test-evaluation-separation-principle-directive-2129]] (CAUSES)
- [[layer4-evaluation-committee-80-items-violation]] (CAUSES)
- [[layer3-park-seong-ho-didc-director-l1-l3-bridge]] (CAUSES)
- [[../layers/layer-3|Layer 3]] (PART_OF_LAYER)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
