---
lang: ko
title-ko: 국전원의 시험평가 계획보고 시 개발관리팀장 체계적 배제
title-en: ""
aliases:
  - FR-L4-TEAM-LEADER-EXCLUSION
  - 국전원의 시험평가 계획보고 시 개발관리팀장 체계적 배제

layer: 4
secondary-layers: []
claimType: conspiracy_structure
claimSubtype: organizational_manipulation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 9
analysisDate: 2026-04-11

record-nos: [1946, 2276, 6100, 6128, 6134, 6150]
evidence-ids: []
event-date: null

persons:
  - 이준호
  - 최영수
  - 지원호
  - 한지훈
  - 오현수
  - 송민석
organizations:
  - 국전원
  - 군검찰단
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/conspiracy-structure
  - source/book
  - fracture/F-MS
  - person/이준호
  - person/최영수
  - person/지원호
  - person/한지훈
  - person/오현수
  - org/국전원
  - org/군검찰단
  - has/record-nos
---
# 국전원의 시험평가 계획보고 시 개발관리팀장 체계적 배제

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.2.1 (lines 53-116)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-TEAM-LEADER-EXCLUSION"})
SET fr.layer = 4,
    fr.claimType = "conspiracy_structure",
    fr.claimSubtype = "organizational_manipulation",
    fr.claimDesc = "국전원은 2019.8.29 新KIATIS 개발·운용시험평가 계획보고에서 개발관리팀장(한지훈)을 전례 없이 배제하고, 사업실무자 이준호가 국전원장에게 직접 보고하여 승인받았다. 이는 시험평가 전체 과정에서 팀장을 의사결정 체계에서 제거하는 조직적 조작의 출발점이다",
    fr.counterHypothesis = "팀장 배제는 일상적인 보고체계 변경이거나 팀장의 자발적 불참에 의한 것이며, 조직적 조작 의도와 무관하다",
    fr.falsificationCondition = "팀장 배제가 정당한 사유(출장, 휴가, 직무 변경 등)에 의한 것임을 보여주는 공문 또는 인사기록의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "모든 의사결정 공문(계획보고, 결과보고, 검수)에서 팀장 배제 패턴이 일관되게 나타남. PC설치/IP할당 요청 공문도 팀장 배제 후 과장 직접 결재. 3명의 실무자 모두 동일 패턴 — 우연이 아닌 체계적 설계.";
```

## 주장 (Claim)

### 한국어

국전원은 2019년 8월 29일 新KIATIS 개발·운용시험평가 계획보고에서 전례 없이 개발관리팀장(한지훈 중령)을 배제한 채, 사업실무자 해군대위 이준호 (공모자-1)가 국전원장에게 직접 보고하여 승인받았다. 이는 시험평가 과정 전체에서 팀장을 의사결정 체계에서 제거하기 위한 조직적 조작의 출발점이다.

3명의 사업실무자(오현수 (실무자-5), 지원호 (실무자-6), 이준호 (공모자-1))가 개발관리 기간 동안 교체되었으며, 모든 "방화벽 정책 적용 요청" 공문에서 팀장 결재가 체계적으로 배제되었다:
- 지원호 대위: 방화벽 정책적용 협조(2019.5.29., 기록 제6,134쪽~제6,135쪽) — '지원호-과장 최영수' 결재, 팀장 배제
- 이준호 대위: PC설치/IP할당 요청 공문 — 팀장 배제, 과장 직접 결재
- 방화벽 정책 요청(2019.8.26., 기록 제6,150쪽~제6,155쪽)만이 '이준호-한지훈-최영수' 결재 체계 — 이것이 군검찰단이 범죄 근거로 사용한 유일한 공문

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- 국전원 systematically excluded the development management team leader (한지훈) from ALL decision-making documents during KIATIS test evaluation preparation [진리성]
- Three successive project officers (오현수→지원호→이준호) all followed the same exclusion pattern — indicating organizational direction, not individual initiative [진리성]
- The ONE document that included the team leader's signature (firewall policy request, Record No. 6,150) became the sole basis for criminal prosecution — while dozens of similar requests by other teams went unexamined [진실성]
- 팀장 배제 was designed to provide selective information to the team leader while complete information flowed to 과장 최영수 — a pre-planned deception technique [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 2,276** — 보안대책 검토 공문 (2019.6.13), 시험평가 계획 관련
- **Record No. 6,100** — 2019년 전반기 방화벽 정책 적용 요청 현황 (팀장 배제 공문 포함)
- **Record No. 6,128~6,138** — 2019년 행정정보화과 방화벽 정책 적용 요청 시각화 현황
- **Record No. 6,134~6,135** — 방화벽 정책적용 협조 (2019.5.29., 지원호-최영수 결재, 팀장 배제)
- **Record No. 6,150~6,155** — 방화벽 정책 요청 (2019.8.26., 이준호-한지훈-최영수 결재)
- **Record No. 1,946** — 사무관 송민석 국방대 교육 기록 (9.2~6)

## 반대 가설 (Counter-hypothesis)
팀장 배제는 일상적인 보고체계의 유연한 운영이거나, 팀장이 시험평가 업무에 개입할 필요가 없다고 판단한 합리적 결정이었다. 실무자가 원장에게 직접 보고하는 것은 조직 내 일반적 관행일 수 있다.

## 반증 조건 (Falsification Condition)
이 주장은 다음 중 하나가 제시되면 약화된다:
1. 팀장 배제가 공식적인 직무 변경, 출장, 휴가 등 정당한 사유에 의한 것임을 보여주는 기록
2. 당시 국전원의 다른 사업에서도 팀장을 동일하게 배제하는 것이 일반적 관행이었음을 보여주는 사례

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9. 3명의 실무자 모두가 동일한 팀장 배제 패턴을 보이며, 수십 건의 유사 공문 중 팀장이 포함된 단 1건만이 범죄 근거로 사용된 사실은 선별적 기소의 명백한 증거다.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 53-116 — §3.4.2.1 verbatim source

## 관련 (Related)
- [[han-ji-hoon-prosecution-violates-2129-role-separation]] — L6 역할 분리 위반 (RELATED)
- [[prosecution-selective-criminalization-firewall-approval-chain]] — L6 선별적 범죄화 (CAUSES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
