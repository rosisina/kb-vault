---
lang: ko
title-ko: 군검사가 업체 비리·금품수수 없음 인정하면서도 기소유예 유지
title-en: ""
aliases:
  - FR-L6-NO-CORRUPTION-STILL-CHARGED
  - 군검사가 업체 비리·금품수수 없음 인정하면서도 기소유예 유지

layer: 6
secondary-layers: [4, 7]
claimType: prosecution_misconduct
claimSubtype: prosecution_admission
fracture-type: F-SC
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 10
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: 2022-09-28

persons:
  - 한지훈
  - 임형규
organizations: []
has-verbatim: false

tags:
  - layer/L6
  - layer/L4
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/recording
  - fracture/F-SC
  - person/한지훈
  - person/임형규
  - cross-layer
---
# 군검사가 업체 비리·금품수수 없음 인정하면서도 기소유예 유지

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취142+146 (lines 6032-6326)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-4|Layer 4]] (secondary), [[../layers/layer-7|Layer 7]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-NO-CORRUPTION-STILL-CHARGED"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_admission",
    fr.claimDesc = "검사 녹음: 부패 없음 인정+기소유예 유지+규정 논거 일축+'정의롭게 했다' 자평.",
    fr.counterHypothesis = "기소유예는 시험평가 환경 문제에 기반한 정당한 처분이며 부패 부재와 무관하다",
    fr.falsificationCondition = "불기소이유서에서 사업관리팀장 vs 평가인원 구분을 규정 근거로 분석한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "검사 녹음: 부패 없음 인정+기소유예 유지+규정 논거 일축+'정의롭게 했다' 자평.";
```

## 주장 (Claim)

### 한국어

군검사 임형규가 2022-09-28/10-11 통화에서: (1) '압수수색 결과 업체와 관련 있다거나 그런 것은 없다는 것을 저희도 알고 있다'고 인정, (2) 시험평가 환경 문제가 인정된다는 취지로 기소유예 유지, (3) 한지훈의 '대상이 아니다'는 주장을 '한지훈 중령님의 주장'으로 반복 일축, (4) '정의롭게 했다고 생각한다'고 자평. 지문등록(범죄자 기록)이 남았으며 한지훈이 취업 영향을 질문.

### English

Military prosecutor 임형규 in phone calls on 2022-09-28/10-11: (1) admitted "we also know there is nothing related to the company from the search and seizure results," (2) maintained Prosecutorial Deferral on grounds that test evaluation environment problems were acknowledged, (3) repeatedly dismissed 한지훈's "I was not the subject" argument as "Lieutenant Colonel 한지훈's claim," (4) self-evaluated "I think I acted justly." Fingerprint registration (criminal record) remains, and 한지훈 asked about employment impact.

## 핵심 요약 (Key Takeaways)
- Prosecutor explicitly acknowledges no vendor corruption/financial misconduct found during search & seizure [진리성]
- Despite no corruption, maintained 기소유예 leaving permanent criminal stigma [타당성]
- Repeatedly dismissed regulatory defense as 'your opinion' without substantive engagement [타당성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
기소유예는 시험평가 환경 문제에 기반한 정당한 처분이며 부패 부재와 무관하다

## 반증 조건 (Falsification Condition)
불기소이유서에서 사업관리팀장 vs 평가인원 구분을 규정 근거로 분석한 기록

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 10.

## 원전 확인 (Spot-check)
- `Korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 6032-6326

## 관련 (Related)
- [[prosecution-non-prosecution-self-contradiction]] (CORROBORATES)
- [[prosecution-knew-innocence-continued-case]] (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
