---
lang: ko
title-ko: 99.73점 성공작의 '부실개발' 재프레이밍 — 사기수사의 핵심 서사 조작
title-en: 99.73점 성공작의 '부실개발' 재프레이밍 — 사기수사의 핵심 서사 조작
aliases:
  - FR-L6-997-REFRAMED-DEFICIENT
  - 99.73점 성공작의 '부실개발' 재프레이밍 — 사기수사의 핵심 서사 조작

layer: 6
secondary-layers: []
claimType: human_rights_violation
claimSubtype: narrative_manipulation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 9
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L6-997"]
event-date: null

persons: []
organizations:
  - DIDC
  - 군검찰단
  - MND
  - 국유단
has-verbatim: false

tags:
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/human-rights-violation
  - source/book
  - fracture/F-MS
  - org/DIDC
  - org/군검찰단
  - org/MND
  - org/국유단
---
# 99.73점 성공작의 '부실개발' 재프레이밍 — 사기수사의 핵심 서사 조작

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md §3.6.3.3.5 (lines 245-290)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-997-REFRAMED-DEFICIENT"})
SET fr.layer = 6,
    fr.claimType = "human_rights_violation",
    fr.claimSubtype = "narrative_manipulation",
    fr.claimDesc = "군검찰단은 평가위원회에서 99.73점 '군사용 적합' 판정을 받은 新KIATIS를 '부실개발'로 재프레이밍하였다. 이 재프레이밍은 (1) 80건 추가 요구사항(사후 부과)을 원래 요구사항으로 취급, (2) 전력화 지연(국유단·DIDC 책임)을 개발 부실로 귀결, (3) GIS 서버 미반영 예산(국방부 책임)을 개발자 과실로 전환하는 세 겹의 서사 조작으로 구성된다",
    fr.counterHypothesis = "99.73점은 시험평가 환경의 하자로 인한 왜곡된 점수이며, 실제 개발 품질은 점수와 다르다",
    fr.falsificationCondition = "시험평가 환경의 구체적 하자가 점수에 영향을 미쳤음을 보여주는 기술적 분석",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "99.73점은 18인 평가위원회의 공식 판정. 불기소 이유서 자체에서도 '기능 대부분 충족'을 인정(10페이지). 80건 추가 요구는 사후 부과. 전력화 지연은 DIDC의 VPN OTP 미제공 + 국유단의 데이터 미이관이 원인.";
```

## 주장 (Claim)

### 한국어

군검찰단은 99.73점 '군사용 적합' 판정을 받은 新KIATIS를 '부실개발'로 재프레이밍하였다. 이 재프레이밍은 세 겹의 서사 조작으로 구성된다:

1. **80건 추가 요구사항의 기원 조작:** 시험평가 기간 중 사후 부과된 80건을 원래 계약 요구사항인 양 취급하여 "미충족" 프레이밍
2. **전력화 지연의 책임 전가:** 실제 원인은 DIDC의 VPN OTP 미제공(1.5년), 국유단의 데이터 미이관, GIS 서버 예산 미반영(국방부 책임)이나, 이를 모두 개발관리팀장의 "부실개발"로 귀결
3. **GIS 서버 예산의 은폐:** 국방부·국유단이 GIS 서버 예산을 반영하지 않은 것이 성능 문제의 근본 원인이나, 이를 개발자 과실로 전환

불기소 이유서 자체에서도 "KIATIS는 개발·운용시험평가에서 99.73점을 받은 바 있어 제안요구서에서 요구한 기능들을 대부분 충족하는 것으로 보이고"(10페이지)라고 인정하여, 자기 모순이 발생한다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- The prosecution reframed a 99.73-point success as "deficient development" through triple narrative manipulation [진리성]
- 80 additional requirements were post-evaluation impositions, not original contract requirements [타당성]
- Deployment delay was caused by DIDC (VPN OTP withholding) and 국유단 (data non-migration), not development quality [진리성]
- The non-prosecution report itself acknowledges "most functions were met" — contradicting its own "deficient development" narrative [진리성]

## 지지 증거 (Supporting Evidence)
- **§3.6.3.3.5 전체** — 부실개발 재프레이밍 분석

## 반대 가설 (Counter-hypothesis)
99.73점은 하자있는 시험환경에서의 왜곡된 점수이며 실제 품질과 다르다.

## 반증 조건 (Falsification Condition)
시험평가 환경 하자가 점수에 영향을 미쳤음을 보여주는 기술적 분석.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9.

## 원전 확인 (Spot-check)
- `Korean/12-3-6-36-제6층위-군.md` lines 245-290

## 관련 (Related)
- [[prosecution-non-prosecution-self-contradiction]] — L6 불기소 모순 (RELATED)
- [[80-items-violate-national-contract-law]] — L4 80건 국가계약법 위반 (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
