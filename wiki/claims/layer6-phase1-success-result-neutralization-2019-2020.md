---
lang: ko
title-ko: "1단계: 99.7점 성공 평가 결과 무력화 (2019.9~2020)"
title-en: ""
aliases:
  - FR-L6-021
  - "1단계: 99.7점 성공 평가 결과 무력화 (2019.9~2020)"

layer: 6
secondary-layers: [4]
claimType: methodology
claimSubtype: process
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 8
validity: 8
sincerity: 8
analysisDate: 2026-04-11

record-nos: [3987]
evidence-ids: ["L6-021"]
event-date: null

persons:
  - 한지훈
  - 김민수
organizations:
  - 국전원
  - 군검찰단
  - MND
has-verbatim: false

tags:
  - layer/L6
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/book
  - fracture/F-MS
  - person/한지훈
  - person/김민수
  - org/국전원
  - org/군검찰단
  - org/MND
  - has/record-nos
  - cross-layer
---
# 1단계: 99.7점 성공 평가 결과 무력화 (2019.9~2020)

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md (§3.6.5.3.1)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-4|Layer 4]] (secondary — 시험평가 결과 조작)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-021"})
SET fr.layer = 6, fr.claimType = "methodology",
    fr.claimSubtype = "process",
    fr.claimDesc = "2019년 9월 시험평가위원회의 99.7점 성공적 평가 결과 이후, 80건 추가 요구사항 의결과 2020년 국방정보화업무훈령 개악을 통해 성공 결과를 무력화하고 전력화를 지연시키는 1단계 공작이 실행되었다",
    fr.counterHypothesis = "80건 추가 요구사항은 시험평가위원회의 정당한 기술적 판단이었으며, 훈령 개정은 시험평가 제도 개선을 위한 통상적 절차였다",
    fr.falsificationCondition = "80건 추가 요구사항이 기술적으로 합리적이고 표준적인 요구 수준이었음을 독립적 기술 평가로 증명하거나, 훈령 개정이 新KIATIS 사안과 무관하게 추진되었음을 증명하면 약화된다",
    fr.verdict = "CORROBORATED", fr.strength = "STRONG",
    fr.truthfulness = 8, fr.validity = 8, fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "99.7점 성공 평가 후 80건 추가 요구사항과 훈령 개악으로 '평가는 성공했지만 미완성' 프레임을 만들어 전력화 지연 1단계 공작 실행";
```

## Claim

시험평가위원회가 2019년 9월 新KIATIS에 대해 99.7점의 성공적 평가를 내린 이후, 전력화 지연의 첫 번째 단계는 이 성공 결과를 무력화하는 것이었다 (§3.6.5.3.1).

핵심 메커니즘은 두 가지였다:

1. **80건 추가 요구사항 의결:** 평가위원회가 80건의 추가 요구사항을 의결함으로써 "평가는 성공했지만 실제로는 미완성"이라는 프레임을 생성했다.
2. **2020년 국방정보화업무훈령 개악:** 개발시험평가와 운영시험평가를 통합하는 원칙으로 변경하여, 향후 책임 소재를 흐리고 전력화 지연을 정당화하기 위한 법적 근거를 마련했다.

이 프레임의 연장선상에서, 한지훈의 임무가 사업관리팀장에서 유지보수 총괄팀장으로 변경되었다. 국전원장 김민수는 부임 이후 국방부 차관 보고를 통해 조직 인력을 대폭 변경하였다 (기록 제3,987쪽~제4,003쪽, 그에 따른 영향: 기록 제4,004쪽~제4,020쪽). 개발관리팀장 개인의 이탈로 빚어진 것이라는 프레임 구축이 이 단계의 목표였다.

## Key Takeaways

- [진리성] After the evaluation committee awarded 99.7 points (September 2019), Phase 1 of the deployment delay was to neutralize this success through 80 additional requirements and the 2020 directive revision merging DT/OT evaluations. / 시험평가위원회의 99.7점 성공 평가(2019.9) 이후, 80건 추가 요구사항과 2020년 훈령 개정(DT/OT 통합)으로 성공 결과를 무력화하는 1단계 공작이 실행되었다.
- [타당성] The 2020 directive revision merging development testing (DT) and operational testing (OT) into a single principle created legal cover for blurring accountability and justifying deployment delays. / 2020년 개발시험평가·운영시험평가 통합 원칙 훈령 개정은 책임 소재를 흐리고 전력화 지연을 정당화하는 법적 근거를 만들었다.
- [진실성] 김민수's organizational restructuring (Record No. 3,987–4,003) and 한지훈's reassignment to maintenance team leader were designed to build the frame that deployment failure was caused by the individual departure of the development management team leader. / 김민수의 조직 개편(기록 제3,987쪽~제4,003쪽)과 한지훈의 유지보수팀장 전환은 "개발관리팀장 개인의 이탈" 프레임 구축을 위한 공작이었다.

## Supporting evidence

- **기록 제3,987쪽~제4,003쪽** — 국전원장 김민수 부임 후 국방부 차관 보고를 통한 조직 인력 대폭 변경 기록
- **기록 제4,004쪽~제4,020쪽** — 조직 변경에 따른 영향 기록 (한지훈의 임무 변경 포함)

## Counter-hypothesis

1. **대안적 해석:** 80건 추가 요구사항은 99.7점에도 불구하고 운영 환경에서 필수적인 기술적 보완 사항이었으며, 훈령 개정은 시험평가 제도의 효율성 개선을 위한 통상적 절차였다. 한지훈의 유지보수팀장 전환은 사업 단계 변경에 따른 자연스러운 업무 재배치였다.
2. **반박 조건:** 80건 추가 요구사항이 기술적으로 합리적이고 유사 사업에서도 통상적인 수준이었음을 독립적 기술 감정으로 증명하거나, 2020년 훈령 개정이 新KIATIS 사안과 무관하게 여러 사업에 공통 적용되는 제도 개선이었음을 증명하면 약화된다.
3. **반대 입장:** 국방부는 80건 추가 요구사항이 시스템 완성도를 위한 정당한 기술 요구이며, 훈령 개정은 시험평가 제도의 합리화를 위한 것이라고 주장할 것이다.

## Falsification condition

80건 추가 요구사항이 동종 규모 사업에서 통상적인 수준임을 비교 분석으로 증명하거나, 2020년 훈령 개정이 新KIATIS 사안 이전부터 추진되었던 장기적 제도 개선 계획의 일환이었음을 증명하거나, 한지훈의 유지보수팀장 전환이 본인의 자발적 선택이었음을 한지훈 본인 이외의 증거로 확인하면 약화된다.

## Verdict

**CORROBORATED** — 99.7점 성공 평가 후 80건 추가 요구사항 의결, 훈령 개정, 조직 인력 변경이라는 세 가지 조치가 동일 시기에 수렴하는 패턴은 우연의 일치로 설명하기 어렵다. 특히 기록 제3,987쪽~제4,003쪽의 조직 변경과 기록 제4,004쪽~제4,020쪽의 영향 분석이 의도적 구조 변경을 뒷받침한다. 다만, 한지훈 본인이 "32년 마지막 군생활에서 유지보수 팀장을 선호했다"고 진술하고 있어, 임무 변경의 자발성 문제는 복합적이다.

## Open Questions

- 80건 추가 요구사항의 구체적 내용과 기술적 합리성에 대한 독립적 기술 검증 필요.
- 2020년 국방정보화업무훈령 개정의 구체적 조항 및 개정 경위 확인 필요 — 다른 사업에도 동일하게 적용되었는지 여부.
- 한지훈이 유지보수팀장을 "선호했다"는 진술과 "프레임의 연장"이라는 분석 사이의 긴장 해소 필요.

## Spot-check (raw/01 book)

- §3.6.5.3.1 (lines 766–769) 직접 확인 완료. 99.7점, 80건 추가 요구사항, 2020년 훈령 개악, 한지훈 임무 변경 모두 원문과 일치.
- 기록 제3,987쪽 — "국전원장 김민수는 부임 이후에 국방부 차관 보고를 통하여 사업관리중심의 국전원을 만들기 위하여 조직의 인력을 대폭 변경하였다" 원문 확인.
- 기록 제4,004쪽 — "그에 따른 영향의 강도" 원문 확인.

## Related

- [[../layers/layer-6|Layer 6 — 군 검찰단의 사기 수사와 범죄자 낙인]] (PART_OF_LAYER)
- [[../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 전·중·후 조작]] (PART_OF_LAYER)
- [[../entities/people/kim-min-su|김민수]] (ABOUT)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[cartel-requirement-inflation-80-items-delay|카르텔 추가요구사항 80건 지연 공작]] (RELATED)
