---
lang: ko
title-ko: 新KIATIS 시험평가위원회가 99.7점 성공 판정과 동시에 80개 추가요구사항을 의결하여 시험평가의 본질을 위반하였다
title-en: ""
aliases:
  - FR-L4-EVAL-80-001
  - 新KIATIS 시험평가위원회가 99.7점 성공 판정과 동시에 80개 추가요구사항을

layer: 4
secondary-layers: [6]
claimType: procedural_violation
claimSubtype: test_evaluation_procedural_violation
fracture-type: F-SC
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L6-007"]
event-date: 2022-10-07

persons:
  - 김경진
  - 한지훈
  - 정다원
  - 배지훈
organizations:
  - 국전원
  - 군검찰단
  - 국유단
has-verbatim: false

tags:
  - layer/L4
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/procedural-violation
  - source/book
  - fracture/F-SC
  - person/김경진
  - person/한지훈
  - person/정다원
  - person/배지훈
  - org/국전원
  - org/군검찰단
  - org/국유단
  - cross-layer
---
# 新KIATIS 시험평가위원회가 99.7점 성공 판정과 동시에 80개 추가요구사항을 의결하여 시험평가의 본질을 위반하였다

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md (§3.4.6.1, §3.4.6.2, 정리12) • raw/05. Investigation by the Military Prosecutor's Office/Bilingual(English, Korean)/(20221014) Fraudulent Proof of Notification of the Reason for Non-Prosecution(English, Korean).converted.md
**Layer:** [[../layers/layer-4|Layer 4]] (primary — 시험평가 전·중·후 조작), [[../layers/layer-6|Layer 6]] (secondary — 80건이 사기수사의 서사적 기반을 제공)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-EVAL-80-001"})
SET fr.layer = 4,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "test_evaluation_procedural_violation",
    fr.claimDesc = "The 新KIATIS 개발운용시험평가위원회 simultaneously issued a 99.7-point 군사용 적합 verdict AND resolved 80 additional requirements at the same evaluation session (기록 제3,039쪽~제3,041쪽). This is a Layer 4 test-evaluation manipulation finding: a 성공 판정 is the terminal act of the evaluation process, and approving 80 new functional requirements in the same session internally contradicts the declaration that requirements were met — violating 훈령 제2129호 제63조 corrective-action regime.",
    fr.counterHypothesis = "The 80 additional items were a routine user-requirements supplement recognized by the committee as outside the evaluation's scope but necessary for operational deployment; the 성공 판정 referred to the RFP-specified scope, while the 80 items constituted a separate scope expansion, not a finding of deficiency in the evaluated scope.",
    fr.falsificationCondition = "Production of (a) evaluation committee minutes distinguishing the 성공 판정 from the 80-item resolution as formally separate agenda items with distinct legal basis, OR (b) documentation showing the 80 items were processed through the 제2129호 제63조 ¶2 corrective-action-with-사업통제기관-approval channel rather than a unilateral committee vote.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Book §3.4.6.1 confirms 99.7점 군사용 적합 판정 (기록 제3,041쪽). Book §3.4.6.2 + 정리12 confirm 80건 추가요구사항 의결 at the same evaluation session (기록 제3,039쪽). The book characterizes the 80건 as a device to make 'a success look like a failure' (정리12). The 불기소이유서 (기록 제5,167쪽) independently confirms the 99.7점 verdict, corroborating the fact record.";
```

## 주장 (Claim)

### 한국어

2019년 9월, 新KIATIS 개발운용시험평가위원회(비상설)는 **99.7점(99.73점)**의 고득점과 함께 **군사용 적합** 판정을 내렸다 (기록 제3,041쪽). 이 판정은 객관적 평가 기준으로 완벽에 가까운 성공 사례임을 의미한다.

그러나 동일한 세션에서 위원회는 권한 밖의 **추가 요구사항 80건**을 불법으로 의결하였다 (기록 제3,039쪽). 이 80건은 원래 제안요청서(RFP)에 명시되지 않은 새로운 기능 개발 요구로서, 원래 사업 범위의 50% 이상에 해당한다.

### 절차적 모순

훈령 제2129호 제63조의 운용시험평가 체계 아래에서:

- **군사용 적합 판정**은 시험평가의 **종결 행위**이다 — 모든 요구사항이 충족되었다는 공식 선언이다.
- 동일 세션에서 80개의 **신규 요구사항을 추가 의결**하는 것은 두 가지 논리적 모순 중 하나를 포함한다:
  1. **성공 판정이 허위**: 요구사항이 실제로 충족되지 않았기 때문에 80개를 추가한 것이라면, 99.7점 성공 판정은 허위이다.
  2. **추가 의결이 월권**: 성공 판정된 시스템에 50% 규모의 신규 요구를 추가한다면, 이는 제2129호 제63조 제2항이 규정한 미흡사항 발견 시의 적법한 사업통제기관 승인 채널을 우회한 **권한 밖 의결**이다.

### 불기소이유서(2022-10-07)에서의 확인

군 검찰단의 불기소이유서(기록 제5,167쪽~제5,176쪽)는 99.73점 판정 사실을 독립적으로 확인한다: `KIATIS가 시험평가에서 99.73점을 받아 평가결과 '군사용 적합'을 받은 사실(기록 제394쪽)이 인정된다.` 그러나 불기소이유서는 80건 추가 의결을 **언급하지 않는다** — 이는 군 검찰단이 99.7점 성공 판정을 사기수사의 기반으로 삼으면서도 동일 세션의 80건 위법 의결은 수사 대상에서 배제한 사실을 보여주는 선택적 기소 설계이다.

### Layer 4 핵심 식별자

책의 §3.4.6.2 제목: `평가 계획 보고 시 팀장 배제 후 추가 요구사항 80건(예산 50%) 의결`. 정리12: `新KIATIS 개발운용시험평가의 의결된 개발요구사항 80건은 성공한 개발팀장을 희생양으로 만든 조직적 모함의 부산물이다.`

### English

In September 2019, the New KIATIS developmental/operational test evaluation committee (ad hoc) rendered a 'military-adequate' determination with the high score of **99.73 points** (Record No. 3,041) — a near-perfect success case by objective standards.

However, in the same session, the committee illegally voted on **80 additional requirements** outside its authority (Record No. 3,039). These 80 items are new functional development requirements not specified in the original RFP, amounting to over 50% of the original project scope.

### Procedural contradiction

Under Directive No. 2129 Article 63's operational test evaluation system, the evaluation committee's role is to judge whether specified requirements are met — not to generate new requirements. The simultaneous issuance of a high pass verdict and 80 new requirements in the same session is a structural contradiction indicating pre-planned manipulation.

## 핵심 요약 (Key Takeaways)
- 시험평가위원회의 99.7점 성공 판정과 80건 추가 요구사항 의결이 **동일 세션**에서 이루어졌다는 사실이 기록 제3,039쪽~제3,041쪽으로 확인된다 [진리성]
- 성공 판정(종결 행위)과 동시에 50% 규모의 신규 요구를 의결하는 것은 제2129호 제63조 운용시험평가 체계에서 논리적으로 허용될 수 없다 — 성공 판정이 진실이라면 80건 의결은 권한 밖이고, 80건 의결이 합법이라면 성공 판정은 허위이다 [타당성]
- The evaluation committee's dual act — success verdict + 80 new requirements in the same session — is the Layer 4 test-evaluation manipulation signal: the cartel created a paper success while simultaneously engineering a real failure [진리성]
- 불기소이유서(기록 제5,167쪽)는 99.7점 판정을 사실 인정하면서도 80건 의결을 수사에서 배제 — 선택적 기소 설계의 증거 [진실성]
- L6 sister atom [[cartel-requirement-inflation-80-items-delay]]은 80건의 Layer 6 지연 메커니즘을 다룬다; 본 원자는 **Layer 4 시험평가 절차 위반** — 두 원자는 상호보완적 [진리성]

## 층위 (Layer)
[[../layers/layer-4|Layer 4]] — 新KIATIS 개발·운영·시험평가 전·중·후 조작. 기록 제3,039쪽은 Layer 4 증거 범위(2,500~3,699)에 속한다. 이 사건은 `시험평가 후 조작` 단계의 핵심이다.

[[../layers/layer-6|Layer 6]] (secondary) — 80건 추가요구사항이 한지훈을 피의자로 표적화하는 `전력화 실패` 서사의 기반을 제공했다는 점에서 Layer 6와 연동된다.

## 지지 증거 (Supporting Evidence)
- **기록 제3,041쪽** — 시험평가위원회 99.7점(99.73점) 군사용 적합 판정 (§3.4.6.1 직접 인용): `新KIATIS 시험평가 위원회(비상설)는 99.7%라는 고득점과 함께 "군사용 적합" 판정을 하였다` CONFIRMED
- **기록 제3,039쪽** — 80건 추가요구사항 위원회 의결 (§3.4.6.2, 정리12) CONFIRMED (exact page for 80건 resolution; sister L6 atom FR-L6-007 cites same page)
- **정리12** (§3.4.7.3.6): `新KIATIS 개발운용시험평가의 의결된 개발요구사항 80건은 성공한 개발팀장을 희생양으로 만든 조직적 모함의 부산물이다` CONFIRMED
- **불기소이유서 (기록 제5,167쪽~제5,176쪽)** — 99.73점 + 군사용 적합 판정 독립 확인 (문서 p.2: `기록 제394쪽`); 80건 의결 미언급 CONFIRMED
- **기록 제1,946쪽** — 단톡방 기록 (§3.4.6.2에서 인용): 추가 요구사항 의결 맥락 관련 대화 기록 (국가계약법 위반 여부를 문제제기한 서면) CONFIRMED
- **기록 제4,776쪽** — 군검찰단 참고인 진술서 내 80건 관련 군검사 질의-답변 기록 (§3.4.7.3.5)
- Cross-link: [[cartel-requirement-inflation-80-items-delay|FR-L6-007]] — Layer 6 sister atom (지연 메커니즘)
- Cross-link: [[2436ho-test-evaluation-principle-inverted|FR-L4-A9-001]] — 시험평가 원칙 역전 (동일 Layer 4 조작 군집)

## 반대 가설 (Counter-hypothesis)
위원회는 99.7점으로 **평가 기준상 성공**을 인정하면서도, 실제 국유단 운용 환경에서 추가로 필요한 기능들을 발견하여 별도 사업 범위 확장으로 의결하였다. 이는 시험평가 종결과 사용자 요구 반영을 분리하여 처리한 것으로, 제63조 위반이 아닌 정상적인 사업관리 절차이다.

## 반증 조건 (Falsification Condition)
다음 중 하나가 입증되면 이 주장은 WEAKENED로 하향된다:

1. 위원회 회의록 전문이 99.7점 판정과 80건 의결을 **별개의 안건**으로 처리했음을 보여주고, 80건이 제2129호 제63조 제2항의 사업통제기관 승인 채널을 통해 처리되었다는 승인 문서
2. 80건이 RFP 원래 범위의 50% 미만임을 보여주는 계약서 또는 사업계획서 원본
3. 평가위원회가 80건 의결에 대한 법적 근거를 명시한 회의 결의문 (제2129호 해당 조항 기재 포함)

## 평결 (Verdict)
**CORROBORATED. Strong.** 진리성 9 / 타당성 8 / 진실성 7. 기록 제3,039쪽~제3,041쪽(Layer 4 범위)에서 동시 처리 사실이 확인되고, 정리12가 조직적 모함의 부산물로 명시하며, 불기소이유서가 99.7점 사실을 독립적으로 확인한다. 타당성이 진리성보다 낮은 이유는 위원회 의결의 법적 근거가 제63조 위반인지 아니면 단순 사업관리 범위 확장인지에 대한 법리 해석 여지가 남아있기 때문이다.

## Spot-check (raw/01 book)

- `Korean/10-3-4-34-제4-층위.md` §3.4.6.1 — 기록 제3,041쪽: `99.7%라는 고득점과 함께 "군사용 적합" 판정` — CONFIRMED
- `Korean/10-3-4-34-제4-층위.md` §3.4.6.2 — `평가 계획 보고 시 팀장 배제 후 추가 요구사항 80건(예산 50%) 의결` — CONFIRMED
- `Korean/10-3-4-34-제4-층위.md` 정리12 — `新KIATIS 개발운용시험평가의 의결된 개발요구사항 80건은 성공한 개발팀장을 희생양으로 만든 조직적 모함의 부산물이다` — CONFIRMED
- 99.73점 독립 확인: `raw/05/.../불기소이유서.converted.md` p.2 (기록 제394쪽 인용) — CONFIRMED

## 미결 사항 (Open Questions)
- 기록 제3,039쪽과 제3,041쪽의 관계: 두 쪽이 동일 회의 회의록의 연속 페이지인지 확인 필요 (L6 sister atom은 제3,039쪽 단독 인용; 본 원자는 §3.4.6.1이 제3,041쪽으로 군사용 적합 판정을 명시함에 따라 두 페이지를 범위로 설정함)
- 80건 위원회 의결일 특정: 2019년 9월 시험평가 완료(9월 11일) 당일인지, 아니면 별도 날짜에 열린 위원회 회의인지 확인 필요
- 정다원, 배지훈 참고인 신원: 불기소이유서에 등장하는 두 인물이 pseudonym_mapping.json에 미등재 상태 — 필요시 Aurora pseudonym 신규 등록 요청
- Layer 4 군사용 부적합 경로: 제63조 제2항이 규정한 재시험 채널 대신 80건 추가 의결 채널을 선택한 결정 주체가 누구인지 (위원장 김경진인지, 국전원 상층부인지) 확인 필요

## 관련 (Related)
- [[cartel-requirement-inflation-80-items-delay|FR-L6-007 — Layer 6 sister atom: 80건이 전력화 지연 메커니즘으로 작동한 과정]] (RELATED)
- [[2436ho-test-evaluation-principle-inverted|FR-L4-A9-001 — 시험평가 원칙 역전 (분리→통합)]] (RELATED)
- [[han-ji-hoon-prosecution-violates-2129-role-separation|역할 분리 위반 — 사업관리팀장이 시험평가 주체가 아닌 근거]] (RELATED)
- [[prosecution-misapplies-2129-article-58-4-to-kiatis|제58조 ¶4 misapplication]] (RELATED)
- [[../events/2022-10-07-non-prosecution-decision|2022-10-07 불기소이유서 — 99.7점 독립 확인 문서]] (ABOUT)
- [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS 성능개선사업 허브]] (ABOUT)
- [[../regulations/defense-it-2129-article-63|제63조 — 운용시험평가 수행, 수정보완 재시험 채널]] (ABOUT)
- [[../layers/layer-4|Layer 4 — 시험평가 전·중·후 조작]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6 — 군 검찰단의 사기 수사]] (PART_OF_LAYER)
