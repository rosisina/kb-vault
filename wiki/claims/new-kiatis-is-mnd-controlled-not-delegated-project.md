---
lang: ko
title-ko: 新KIATIS는 국방부 통제 사업 — 위임 사업 전환은 불법
title-en: 新KIATIS는 국방부 통제 사업 — 위임 사업 전환은 불법
aliases:
  - FR-L2-MND-CONTROLLED-PROJECT
  - 新KIATIS는 국방부 통제 사업 — 위임 사업 전환은 불법

layer: 2
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

record-nos: [1042, 1119, 1140, 2538, 7495, 7496, 7995, 8012]
evidence-ids: []
event-date: null

persons:
  - 강민호
  - 박성호
  - 한지훈
organizations:
  - 국전원
  - MND
  - 국유단
has-verbatim: false

tags:
  - layer/L2
  - verdict/corroborated
  - strength/strong
  - type/procedural-violation
  - source/book
  - fracture/F-CE
  - person/강민호
  - person/박성호
  - person/한지훈
  - org/국전원
  - org/MND
  - org/국유단
  - has/record-nos
---
# 新KIATIS는 국방부 통제 사업 — 위임 사업 전환은 불법

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/08-3-2-32-제2-층위.md §3.2.1.1 (lines 10-21)
**Layer:** [[../layers/layer-2|Layer 2]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L2-MND-CONTROLLED-PROJECT"})
SET fr.layer = 2,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "regulatory_violation",
    fr.claimDesc = "新KIATIS 성능개선 사업은 훈령 제10조 제4항에 의거 '국방부에서 운용하는 정보시스템과 관련된 사업'으로 국방부 통제사업이다. 그러나 국전원은 과장 강민호가 원장 박성호에게 '기관 위임 사업'으로 보고·승인하였고(Record 1,140), 국유단과 공모하여 사업통제기관을 국유단으로 설정하였다. 국방부의 사업계획 승인 공문은 발견되지 않았다",
    fr.counterHypothesis = "국방부가 묵시적으로 위임을 승인했거나, 소규모 사업으로 위임이 관행적으로 허용되었다",
    fr.falsificationCondition = "국방부가 新KIATIS를 위임사업으로 승인한 공문의 제시, 또는 국정과제 사업을 위임할 수 있다는 규정·선례",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "훈령 제10조 ④, 제58조 ②에 의거 국방부 통제사업의 시험평가는 분리 수행 원칙, 동시실시 시 사업통제기관 승인 필수. 국방부 승인 공문 미발견. 新KIATIS는 국정과제 사업(Record 1,042)으로 위임 대상 부적합.";
```

## Claim

新KIATIS 성능개선 사업은 훈령 제10조 제4항(기록 제7,495쪽)에 의거 "국방부에서 운용하는 정보시스템과 관련된 사업"으로 국방부 통제 사업에 해당한다. 근거:

1. 舊KIATIS가 2007~2014년 국전원에 서버를 두고 운영(기록 제10,302쪽)
2. 2021~2022년 유지보수 예산에 "국방부 본부에서 운용하는 정보시스템"으로 포함(기록 제7,995~7,996쪽)
3. 新KIATIS는 국정과제 사업(기록 제1,042쪽, 제1,064쪽)

그러나 국전원 과장 강민호 (과장-1)는 원장 박성호 (2016해킹당시원장-1)에게 "사업통제·주관기관: 국방부 유해발굴감식단(기관 위임 사업)"으로 보고·승인하였다(2018.8.7, 기록 제1,140쪽). 사업계획서도 "기관 위임 사업"으로 작성(기록 제1,119쪽).

훈령 제58조 ②에 따르면 국방부 통제사업은 개발시험평가와 운용시험평가를 분리 수행이 원칙이며, 동시 실시 시 사업통제기관(국방부) 승인 필수. 그러나 국방부 승인 공문은 발견되지 않았다.

## Key Takeaways

- 新KIATIS is legally a MND-controlled project per Article 10(4) — delegation to 국유단 as control agency was illegal and done without MND approval [타당성]
- MND approval documents for the project plan were never found — despite repeated searches by 한지훈 [진리성]
- The project was a 국정과제 (national policy project, Record No. 1,042) — making delegation even more inappropriate [타당성]
- Test evaluation should have been separated into DT and OT per Article 58(2) — combined evaluation required MND approval that was never obtained [타당성]

## Supporting evidence

- **Record No. 7,495** — 훈령 제10조 제4항 (국방부 통제사업 정의)
- **Record No. 7,496** — 제11조 제2항 (위임사업 정의)
- **Record No. 8,012** — 제58조 (시험평가 수행 원칙)
- **Record No. 1,140** — 국전원 사업계획 보고 (기관 위임 사업으로 기재)
- **Record No. 1,119** — 사업계획서 (위임사업)
- **Record No. 1,042** — 국정과제 확인
- **Record No. 2,538** — 시험평가 계획보고 (팀장 배제, 원장 승인)
- **Record No. 7,995~7,996, 8,086, 8,179** — 국방부 운용 시스템 목록

## Counter-hypothesis

국방부가 묵시적 위임을 승인했거나, 5억 미만 SW개발 사업으로 기관위임이 관행적으로 가능했다.

## Falsification condition

국방부가 新KIATIS를 위임사업으로 승인한 공문, 또는 국정과제를 위임할 수 있는 규정·선례.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8.

## Spot-check

- `vault-converted-korean/08-3-2-32-제2-층위.md` lines 10-21

## Related

- [[kiatis-mkia-multi-cap-inscription|3 shared records — 국유단 다중 cap inscription]] (CORROBORATES)
- [[kiatis-mnd-controlled-not-delegated]] — 기존 L2 관련 atom (RELATED)
- [[../layers/layer-2|Layer 2]] (PART_OF_LAYER)
