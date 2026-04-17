---
lang: ko
title-ko: 평가위원회가 권한 밖의 추가 요구사항 80건을 불법 의결하여 新KIATIS 전력화를 지연시켰다 — 은폐를 위한 의도적 사업 지연 메커니즘
title-en: 평가위원회가 권한 밖의 추가 요구사항 80건을 불법 의결하여 新KIATIS 전력화를 지연시켰다 — 은폐를 위한 의도적 사업 지연 메커니즘
aliases:
  - FR-L6-007
  - 평가위원회가 권한 밖의 추가 요구사항 80건을 불법 의결하여 新KIATIS 전력화를

layer: 6
secondary-layers: [4]
claimType: temporal_manipulation
claimSubtype: deliberate_delay_mechanism
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L6-007"]
event-date: null

persons:
  - 박서준
  - 한지훈
organizations:
  - DIDC
  - 군검찰단
  - 국유단
has-verbatim: false

tags:
  - layer/L6
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/temporal-manipulation
  - source/book
  - fracture/F-MS
  - person/박서준
  - person/한지훈
  - org/DIDC
  - org/군검찰단
  - org/국유단
  - cross-layer
---
# 평가위원회가 권한 밖의 추가 요구사항 80건을 불법 의결하여 新KIATIS 전력화를 지연시켰다 — 은폐를 위한 의도적 사업 지연 메커니즘

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md (§3.6.5.1.1) • raw/01. book-beyond-cybersecurity/English/16-3-6-36-Sixth-Layer.md
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-4|Layer 4]] (secondary — 추가 요구사항 의결이 시험평가 직후 이루어진 Layer 4 사건)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-007"})
SET fr.layer = 6,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "deliberate_delay_mechanism",
    fr.claimDesc = "The 新KIATIS 개발운용시험평가위원회 illegally resolved 80 additional requirements (기록 제3,039쪽) outside its authority, extending the project timeline and providing the operational window for the 2016 DIDC hacking cover-up — a Layer 6 finding about the operational mechanism of concealment through deliberate project delay.",
    fr.counterHypothesis = "The 80 additional requirements were a legitimate quality-assurance finding made by the evaluation committee based on technical deficiencies identified during the 2019 test-evaluation; the delay was a necessary consequence of genuine project shortfalls, not a politically motivated obstruction.",
    fr.falsificationCondition = "Production of evaluation committee minutes or RFP documents showing that the 80 additional items fell within the original contract scope and evaluation authority, OR evidence that the 80 items addressed genuine security or operational deficiencies rather than requirements absent from the original RFP.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "기록 제3,039쪽 confirms the evaluation committee resolution of 80 additional requirements. The book establishes (정리06, §3.6.5.1.1) that these 80 items (a) exceeded the committee's authority, (b) constituted more than 50% of the original RFP requirements, (c) were imposed simultaneously with a 99.7-point 군사용적합 evaluation result — a logical contradiction that the book identifies as proof of deliberate obstruction, not genuine quality assurance.";
```

## 주장 (Claim)

### 한국어

2019년 9월 新KIATIS 개발운용시험평가에서 **99.7점 군사용적합** 판정을 받은 직후, 평가위원회는 **권한 밖의 추가 요구사항 80건**을 불법적으로 의결하였다 (기록 제3,039쪽). 이 80건의 추가 기능 개발 요구는 원래 제안요청서(RFP)에 명시되지 않은 새로운 기능들로서, 원래 사업 범위의 50% 이상에 해당하고 사업비의 상당 부분을 추가로 요구하는 규모였다.

이 결정의 논리적 모순은 명백하다: 99.7점으로 성공 판정된 시스템에 왜 원래 사업 범위의 50% 이상에 해당하는 추가 기능이 즉시 필요한가? 책의 §3.6.5.1.1 (정리06, 정리07)은 이 모순을 다음과 같이 분석한다: **성공한 시스템을 실패작으로 둔갑시키기 위해**, 즉 新KIATIS의 전력화를 지연시킴으로써 구KIATIS의 15년 보안 취약점(2016년 DIDC 북한 해킹의 근원)이 드러나는 것을 차단하기 위한 의도적 조작이었다.

전력화 지연의 직접 결과: 추가 80건 미완료를 이유로 전력화가 2022년까지 계속 연기되었다 (기록 제11,322쪽~제11,345쪽에서 박서준 대위(진)의 2022년 2월 발언으로 확인).

### English

Immediately after New KIATIS received a **99.7-point "Militarily Suitable" rating** in the September 2019 Developmental and Operational Test and Evaluation, the evaluation committee illegally voted on **80 additional requirements outside their authority** (Record No. 3,039). These 80 additional functional development demands were new features not specified in the original RFP, equivalent to over 50% of the original project scope and requiring a substantial additional portion of the project budget.

The logical contradiction is clear: why would a system that passed with 99.7 points immediately need additional features equivalent to over 50% of the original project scope? The book's §3.6.5.1.1 (Propositions 06, 07) analyzes this contradiction as follows: to **transform a successful system into a failure** — i.e., intentional manipulation to block New KIATIS deployment, thereby preventing the 15-year security vulnerability of Legacy KIATIS (the origin of the 2016 DIDC North Korean hacking) from being revealed.

Direct result of deployment delay: Deployment was continually postponed until 2022 on grounds that the additional 80 items were incomplete (confirmed by 박서준 (Lieutenant level)'s statements in February 2022, Records 11,322–11,345).

## 핵심 요약 (Key Takeaways)
- 평가위원회의 80건 추가 요구사항 의결은 기록 제3,039쪽으로 문서 존재가 확인된다 [진리성]
- 80건은 원래 RFP 요구사항의 50% 이상으로, 국가계약법상 계약 범위를 정면 위반하는 초과 요구이다 [타당성]
- 99.7점 성공 판정과 동시에 80건 추가 요구를 의결한 것은 논리적 모순 — 성공을 실패로 둔갑시키려는 의도적 조작의 핵심 증거 [진리성]
- 80건 미완료를 이유로 전력화가 2022년 2월까지도 이루어지지 않았다는 사실이 박서준 대위(진) 진술(기록 제11,322쪽~제11,345쪽)로 확인된다 [진리성]
- 의도적 지연이 구KIATIS 15년 취약점 은폐의 작전 창(operational window)을 제공하였다는 연결 구조 — Layer 6의 은폐 메커니즘 [진실성]

## 층위 (Layer)
[[../layers/layer-6|Layer 6]] (primary) — `군 검찰단의 사기 수사와 범죄자 낙인`. 80건 추가 요구사항에 의한 전력화 지연은 군 검찰단의 사기수사가 작동할 수 있는 **시간적 공간**을 만든 Layer 6의 작전적 기반이다. 한지훈이 전력화 실패의 책임자로 표적화될 수 있었던 것은 바로 이 의도적 지연이 만들어낸 "실패 서사" 때문이다. [[../layers/layer-4|Layer 4]] (secondary) — 80건 의결은 2019년 9월 시험평가 완료 직후 이루어진 사건으로, Layer 4 (新KIATIS 개발·운영·시험평가 전·중·후 조작)의 "시험평가 후 조작" 단계와 직접 중첩된다. 기록 제3,039쪽은 Layer 4 범위(2,500~3,699)에 속한다.

## 지지 증거 (Supporting Evidence)
- **평가위원회 80건 의결 기록**: 기록 제3,039쪽 — §3.6.5.1.1에서 직접 인용 CONFIRMED
- **같은 회의록 99.7점 성공판정 기록**: 기록 제3,041쪽 — 책 §3.4.6.1 별도 인용. 제3,039쪽(80건 의결)과 제3,041쪽(99.7점 판정)은 **동일 회의록의 연속 페이지** (James 2026-04-11 확인). 두 판정이 같은 평가위원회 회기에서 동시 의결된 것이 핵심 모순의 사실적 기반. Layer 4 자매 원자 [[layer4-evaluation-committee-80-items-violation]]가 이 동일성 모순을 시험평가 규범 위반 관점에서 다룬다.
- **정리06**: `국유단의 新KIATIS 전력화가 지연된 이유는 평가위원회에서 불법적으로 의결한 추가 요구기능 80건에 대한 개발과 GIS 서버(기능)에 대한 예산이 비반영에서 비롯된 것이다` (§3.6.5.1.1 직접 인용) CONFIRMED
- **정리07**: `新KIATIS 개발운용시험평가위원회는 99.7점 성공작을 실패작으로 조작하기 위해 권한 밖의 추가요구사항 80건을 불법 의결한 국방정보화카르텔의 핵심 공모자이다` (§3.6.5.1.1 직접 인용) CONFIRMED
- **전력화 미완료 확인**: 기록 제11,322쪽~제11,345쪽 (박서준 대위(진) 진술, 2022년 2월 수사 당시) — 80건 미완료로 인한 전력화 지연 사실 CONFIRMED
- **RFP 비율 계산**: 원래 사업비 6.25억원 대비 추가 요구 80건은 50% 이상에 해당 (§3.6.5.1.2에서 GIS 서버 추가 비용 3.9억원과 함께 언급)
- Cross-link: [[han-ji-hoon-kiso-yuye-is-criminal-stigma]] — 전력화 지연이 한지훈 표적화의 서사적 기반을 제공
- Cross-link: [[han-ji-hoon-suspect-interrogation-2022-09-02]] — 전력화 실패가 피의자 신문의 혐의 맥락으로 활용됨
- Cross-link: [[prosecution-misapplies-2129-article-58-4-to-kiatis]] — 전력화 미완료 서사와 법적 오적용의 결합

## 반대 가설 (Counter-hypothesis)
80건 추가 요구사항은 평가위원회가 시험평가 과정에서 발견한 실질적인 기능 미비 사항들이었다. 99.7점은 평가 당시 기준점수 기준의 성공이지만, 실제 국유단 운용 환경에서 필요한 기능들이 누락되어 있었으며, 이를 보완하기 위한 추가 요구는 사용자 요구사항 반영의 일반적인 절차이다. 전력화 지연은 기술적 미완성의 자연스러운 결과이며, 의도적 조작이 아니다.

## 반증 조건 (Falsification Condition)
다음 중 하나가 입증되면 이 주장은 WEAKENED로 하향된다:

1. 평가위원회가 의결한 80건이 원래 RFP의 범위 내에 있었음을 보여주는 계약서 또는 RFP 원문 분석
2. 80건 중 상당수가 실제 운용 환경에서 발견된 보안 또는 기능 결함을 주소하였음을 보여주는 기술적 평가 기록
3. 평가위원회의 추가 요구사항 의결이 국방정보화업무훈령 또는 관련 규정에 의해 허용된 절차였음을 보여주는 법령 해석

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 7. 기록 제3,039쪽의 80건 의결, 정리06·07의 직접 인용, 기록 제11,322쪽~의 전력화 미완료 확인 — 세 개의 독립된 기록이 동일한 사실을 지지한다. 의도성 판단(정리07: "성공작을 실패작으로 조작하기 위해")은 추론을 포함하지만, 99.7점 성공 직후 50% 초과 추가 요구라는 논리적 모순이 이 추론을 STRONG 수준에서 지지한다.

## Spot-check (raw/01 book)

- `Korean/12-3-6-36-제6층위-군.md` §3.6.5.1.1 — 기록 제3,039쪽, 정리06, 정리07 직접 인용 — CONFIRMED
- `Korean/12-3-6-36-제6층위-군.md` §3.6.5.1.1 — 기록 제11,322쪽~제11,345쪽 박서준 진술 — CONFIRMED
- `Korean/12-3-6-36-제6층위-군.md` §3.6.5.1.2 — GIS 서버 예산 미반영 사실과 80건의 연동 — CONFIRMED

## 미결 사항 (Open Questions)
- 80건 의결 회의록 전문 (기록 제3,039쪽) 확인 — 평가위원회 구성원 및 의결 날짜 특정 필요
- 80건 추가 요구사항의 구체적 내용 목록 — RFP와의 중복 여부 판단에 필요
- Layer 4 사건으로서의 80건 의결이 Layer 6 사기수사와 법적으로 연동된 경로 — 평가위원회 구성원이 군 검찰단 수사에 증인으로 출석하였는지 여부

## 관련 (Related)
- [[han-ji-hoon-suspect-interrogation-2022-09-02|피의자 신문조서 (2022-09-02) — 전력화 실패 서사의 활용 단계]] (RELATED)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|기소유예 = 범죄 낙인 — 지연 서사의 최종 귀결]] (RELATED)
- [[prosecution-misapplies-2129-article-58-4-to-kiatis|훈령 오적용 원자 — 전력화 미완료와 법적 혐의의 결합]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../layers/layer-4|Layer 4 — 80건 의결이 발생한 시험평가 후 조작 단계]] (PART_OF_LAYER)
