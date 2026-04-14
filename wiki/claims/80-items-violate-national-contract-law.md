---
lang: ko
title-ko: 80건 추가 요구사항이 국가계약법 위반 — 평가위원회의 권한 초월
title-en: 80건 추가 요구사항이 국가계약법 위반 — 평가위원회의 권한 초월
aliases:
  - FR-L4-80-ITEMS-CONTRACT-LAW-VIOLATION
  - 80건 추가 요구사항이 국가계약법 위반 — 평가위원회의 권한 초월

layer: 4
secondary-layers: []
claimType: procedural_violation
claimSubtype: regulatory_violation
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 8
analysisDate: 2026-04-11

record-nos: [3039, 4776]
evidence-ids: []
event-date: null

persons:
  - 장호재
organizations: []
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/procedural-violation
  - source/book
  - fracture/F-CE
  - person/장호재
  - has/record-nos
---
# 80건 추가 요구사항이 국가계약법 위반 — 평가위원회의 권한 초월

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md §3.4.7.3.6 (lines 664-721)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-80-ITEMS-CONTRACT-LAW-VIOLATION"})
SET fr.layer = 4,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "regulatory_violation",
    fr.claimDesc = "시험평가 기간 중 의결된 80건 추가 요구사항(사업 예산의 50%)은 국가계약법 제10조·제11조·제19조·제26조와 훈령 제57조·제60조를 위반한다. 평가위원회는 기능 충족 여부를 판정하는 기관이지 신규 요구사항을 추가하는 권한이 없다. 계약 변경 없는 추가 요구는 개발업체에 대한 강제노동에 해당한다",
    fr.counterHypothesis = "추가 요구사항은 시험평가 과정에서 발견된 개선 필요사항을 반영한 정상적 절차이다",
    fr.falsificationCondition = "시험평가위원회가 추가 요구사항을 의결할 법적 권한이 있었음을 보여주는 규정, 또는 계약 변경 절차가 적법하게 이행되었음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Record 3,039에서 80건 추가 요구 확인. Record 4,776에서 개발PM 장호재가 비용 3~4배 초과, 업체 손실 흡수 강요 진술. 훈령상 평가위원회는 적합/부적합 판정 권한만 보유.";
```

## Claim

新KIATIS 시험평가 기간 중 평가위원회가 의결한 80건 추가 요구사항(기록 제3,039쪽)은 사업 예산(6.25억원)의 약 50%에 해당하는 규모이다. 이는 국가계약법 제10조·제11조·제19조·제26조와 훈령 제57조·제60조를 위반한다. 평가위원회는 요구기능의 충족 여부를 판정하는 기관이지 신규 요구사항을 추가할 권한이 없다.

개발PM 장호재의 진술(기록 제4,776쪽): 80건 추가 요구사항으로 인해 비용이 원래 계약 예산의 3~4배에 달했고, 개발업체가 손실을 흡수하도록 강요받았다.

## Key Takeaways

- 80 additional requirements (50% of budget) imposed during evaluation exceeded the committee's legal authority [타당성]
- Development PM 장호재 confirmed costs were 3-4x the original budget with forced loss absorption (Record No. 4,776) [진리성]
- No contract amendment was executed — violating National Contract Act compensation principles [타당성]

## Supporting evidence

- **Record No. 3,039** — 80건 추가 요구사항 의결
- **Record No. 4,776** — 개발PM 장호재 진술

## Counter-hypothesis

추가 요구사항은 시험평가 과정에서 발견된 개선 필요사항의 정상적 반영이다.

## Falsification condition

평가위원회의 추가 요구 의결 권한 규정, 또는 계약 변경 절차 이행 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` lines 664-721

## Related

- [[layer4-evaluation-committee-80-items-violation]] — L4 기존 관련 atom (CORROBORATES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
