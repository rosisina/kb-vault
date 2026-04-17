---
lang: ko
title-ko: 국유단의 연계 데이터 부재와 평가위원회의 불법적 80건 추가 요구사항이 新KIATIS 전력화 지연의 직접 원인이다
title-en: ""
aliases:
  - FR-L6-DATA-ABSENCE-001
  - 국유단의 연계 데이터 부재와 평가위원회의 불법적 80건 추가 요구사항이 新KIATIS

layer: 6
secondary-layers: [4]
claimType: temporal_manipulation
claimSubtype: deliberate_delay_mechanism
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 7
analysisDate: 2026-04-11

record-nos: [2610, 11322]
evidence-ids: ["L6-007"]
event-date: null

persons:
  - 박서준
  - 한지훈
organizations:
  - 군검찰단
  - MND
  - 국유단
has-verbatim: false

tags:
  - layer/L6
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/temporal-manipulation
  - source/book
  - fracture/F-CE
  - person/박서준
  - person/한지훈
  - org/군검찰단
  - org/MND
  - org/국유단
  - has/record-nos
  - cross-layer
---
# 국유단의 연계 데이터 부재와 평가위원회의 불법적 80건 추가 요구사항이 新KIATIS 전력화 지연의 직접 원인이다

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md (§3.6.5.1.1)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-4|Layer 4]] (secondary — 기록 제2,610쪽·제3,039쪽은 L4 범위)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-DATA-ABSENCE-001"})
SET fr.layer = 6,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "deliberate_delay_mechanism",
    fr.claimDesc = "국유단(MKIA)의 최종 감리결과보고서(2019.9.)에 '연계 데이터 생성 불가'로 지적된 문제(기록 제2,610쪽~제2,623쪽)가 수사 시점인 2022년 2월까지 해소되지 않았으며, 동시에 평가위원회의 불법적 80건 추가 요구사항(기록 제3,039쪽)도 미완료 상태였다는 사실(기록 제11,322쪽~제11,345쪽)이 전력화 지연의 직접 원인이다.",
    fr.counterHypothesis = "연계 데이터 미구축과 80건 미완료는 기술적 한계와 예산 부족의 자연스러운 결과이며, 의도적 지연이 아닌 정상적 사업 관리의 지체이다.",
    fr.falsificationCondition = "국유단이 2019~2022년 사이 연계 데이터 구축을 위한 예산 요청 또는 사업 추진 문서를 생산했음을 보여주는 공식 기록이 제시되면 의도적 방치 주장이 약화된다.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "§3.6.5.1.1은 전력화 지연의 이중 원인을 제시한다: (1) 감리보고서가 지적한 연계 데이터 생성 불가(기록 제2,610쪽), (2) 평가위원회의 불법 80건 추가 의결(기록 제3,039쪽). 두 문제가 모두 2022년 2월 수사 시점까지 미해결이었다는 사실이 박서준 대위(진)의 발언(기록 제11,322쪽)으로 확인된다.";
```

## 주장 (Claim)

### 한국어

§3.6.5.1.1에 따르면, 新KIATIS가 2019년 9월 개발운용시험평가에서 99.7점으로 "군사용 적합" 판정을 받았음에도 2022년 4월까지 전력화되지 못한 것은 기술적 한계나 예산 부족이 아닌, 국방부 정보화기획관실을 중심으로 한 국방정보화카르텔의 의도적 조작의 결과이다.

전력화 지연의 직접 원인은 두 가지이다:

1. **평가위원회의 불법적 80건 추가 요구사항 의결** (기록 제3,039쪽): 국가계약법을 위반하여 제안요청서에 명시되지 않은 새로운 기능들을 원래 계약 범위 내의 의무인 양 조작. 원래 사업 예산의 50% 이상에 해당하는 추가 비용을 요구하여 사실상 새로운 사업 규모.
2. **국유단의 연계 데이터 부재**: 최종 감리결과보고서(2019년 9월)에서 "연계 데이터 생성 불가"로 지적된 문제(기록 제2,610쪽~제2,623쪽)가 수사 시점인 2022년 2월까지도 해소되지 않았다(기록 제11,322쪽~제11,345쪽).

박서준 대위(진)는 2022년 2월 8일 수사 당시 추가 요구사항 80건이 아직 미완료이고 연계 데이터도 미구축 상태임을 진술하였다(기록 제11,322쪽~제11,345쪽). 이는 국유단이 2019년부터 2022년까지 중기계획에 의거한 추가 사업을 전혀 추진하지 않았다는 사실과 결합하여, 전력화 지연이 의도적 방치였음을 보여준다.

### English

According to §3.6.5.1.1, the fact that New KIATIS failed to be fielded until April 2022 despite receiving a "Militarily Suitable" rating of 99.7 points in the September 2019 Developmental and Operational Test and Evaluation is not due to technical limitations or budget shortfall, but is the result of intentional manipulation by the Defense Informatization Cartel centered on the MND Information Planning Division.

The two direct causes of deployment delay are:

1. **Evaluation committee's illegal vote on 80 additional requirements** (Record No. 3,039): Violating the National Procurement Act by treating features not specified in the RFP as if they were obligations within the original contract scope. Demanding additional costs equivalent to over 50% of the original project budget — effectively a new project scale.
2. **Absence of 국유단 linked data**: The problem flagged as "linked data generation impossible" in the final supervision result report (September 2019, Records 2,610–2,623) remained unresolved until February 2022 (Records 11,322–11,345).

박서준 (Lieutenant level) testified on February 8, 2022 (during the investigation) that the 80 additional requirements were still incomplete and linked data had not been built (Records 11,322–11,345). Combined with the fact that 국유단 had not pursued any additional projects based on the mid-term plan from 2019 to 2022, this demonstrates that the deployment delay was intentional neglect.

## 핵심 요약 (Key Takeaways)
- [진리성] 감리결과보고서의 "연계 데이터 생성 불가" 지적(기록 제2,610쪽)이 수사 시점(2022.2.)까지 미해결 상태였음이 기록 제11,322쪽에서 확인된다 / The audit report's "linked data generation failure" finding (Record No. 2,610) remained unresolved until the investigation in Feb 2022 (Record No. 11,322)
- [진리성] 평가위원회의 불법 80건 추가 의결(기록 제3,039쪽)이 전력화 지연의 직접 원인으로 작동 — 자매 원자 [[cartel-requirement-inflation-80-items-delay]]·[[layer4-evaluation-committee-80-items-violation]]과 보완적 / The illegal 80-item resolution is the direct cause of deployment delay — complementary to existing sister atoms
- [타당성] 국유단이 중기계획에 의거한 추가 사업을 추진하지 않은 것은 사업통제기관의 의무 방기 / Failure to pursue mid-term plan follow-up constitutes dereliction of project oversight duty
- [진실성] 99.7점 성공 시스템을 "영구 실패 시스템"으로 전환한 것은 한지훈 표적화를 위한 서사 구축 — "성공을 실패로 둔갑" / Converting a 99.7-point success into a "permanent failure system" served the narrative for targeting 한지훈

## 지지 증거 (Supporting Evidence)
- **기록 제2,610쪽~제2,623쪽** — 최종 감리결과보고서(2019.9.)의 "연계 데이터 생성 불가" 지적. L4 범위(2,500~3,699).
- **기록 제3,039쪽** — 평가위원회 80건 추가 요구사항 불법 의결 기록. L4 범위.
- **기록 제11,322쪽~제11,345쪽** — 박서준 대위(진)의 2022년 2월 수사 시점 진술: 80건 미완료 + 연계 데이터 미구축 확인. L7 범위(5,300~13,495).

## 반대 가설 (Counter-hypothesis)
1. **대안적 해석**: 연계 데이터 미구축과 80건 미완료는 국유단의 기술 역량 부족과 국방부의 예산 제약이라는 구조적 문제의 자연스러운 결과이며, 의도적 방치가 아니다.
2. **반박 조건**: 국유단이 2019~2022년 사이 연계 데이터 구축 또는 80건 완료를 위한 예산 요청·사업 추진 문서를 생산했으나 상위 기관(국방부)에 의해 거부되었음을 보여주는 기록이 있다면, "의도적 방치"가 아닌 "구조적 제약"으로 재해석된다.
3. **방어 가능한 반대 입장**: 전력화 지연은 복잡한 정보시스템 사업에서 흔히 발생하는 현상이며, 99.7점 성공 판정과 전력화 실패 사이에 반드시 악의적 의도가 개입할 필요는 없다.

## 반증 조건 (Falsification Condition)
국유단이 2019~2022년 사이에 (a) 연계 데이터 구축을 위한 사업 추진 또는 예산 요청 문서를 생산했거나, (b) 80건 추가 요구사항 완료를 위한 체계적 추진 계획을 수립·시행한 기록이 제시되면, "의도적 방치"에서 "구조적 제약에 의한 불가피한 지연"으로 verdict가 하향 조정된다.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 7. 감리보고서 지적(기록 제2,610쪽), 80건 의결(기록 제3,039쪽), 수사 시점 미해결 확인(기록 제11,322쪽) — 세 기록이 독립적으로 동일한 지연 구조를 증언한다. 국유단의 3년간 비조치가 의도적 방치의 정황을 강화한다.

## 미결 사항 (Open Questions)
- 기록 제2,610쪽~제2,623쪽 감리결과보고서의 전문 확인 — "연계 데이터 생성 불가"의 구체적 기술적 원인이 무엇이었는지 파악 필요
- 국유단의 2019~2022년 중기계획 실제 집행 기록 — 추가 사업 비추진의 공식 사유가 문서화되어 있는지 확인 필요
- 본 원자와 자매 원자([[cartel-requirement-inflation-80-items-delay]])의 관계: 본 원자는 "데이터 부재"라는 감리보고서 측면을 추가하여 지연 원인의 이중 구조를 완성함

## Spot-check (raw/01 book)

- `Korean/12-3-6-36-제6층위-군.md` §3.6.5.1.1 (line 711) — "연계 데이터 생성 불가(기록 제2,610쪽~제2,623쪽)" 직접 인용 — CONFIRMED
- `Korean/12-3-6-36-제6층위-군.md` §3.6.5.1.1 (line 711) — "추가 요구사항 80건이 아직 미완료(기록 제11,322쪽~제11,345쪽)" 박서준 대위(진) 진술 — CONFIRMED
- `Korean/12-3-6-36-제6층위-군.md` §3.6.5.1.1 (line 711) — 기록 제3,039쪽 80건 의결 인용 — CONFIRMED

## 관련 (Related)
- [[cross-atom-99-7-plus-80items-plus-data-absence|2 shared records — 99.7점 + 80건 + 데이터 부재 복합]] (RELATED)
- [[cartel-requirement-inflation-80-items-delay|FR-L6-007 — 80건 불법 의결에 의한 전력화 지연 (자매 원자)]] (CORROBORATES)
- [[layer4-evaluation-committee-80-items-violation|FR-L4-EVAL-80-001 — 99.7점과 80건 동시 의결의 절차적 모순 (L4 자매 원자)]] (RELATED)
- [[../layers/layer-6|Layer 6 — 군 검찰단의 사기 수사와 범죄자 낙인]] (PART_OF_LAYER)
- [[../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 전·중·후 조작]] (PART_OF_LAYER)
