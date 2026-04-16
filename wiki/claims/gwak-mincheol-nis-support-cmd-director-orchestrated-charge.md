---
lang: ko
title-ko: "곽민철 (안보지원사 국전원 담당): \"원장님이 가짜 환경을 만들어서 속였다고\" — 김민수의 혐의 설계 구조 증언"
title-en: "곽민철 (안보지원사 국전원 담당): \"원장님이 가짜 환경을 만들어서 속였다고\" — 김민수의 혐의 설계 구조 증언"
aliases:
  - FR-L6-NIS-SUPPORT-CMD-DIRECTOR-CHARGE
  - "곽민철 (안보지원사 국전원 담당): \"원장님이 가짜 환경을 만들어서 속였다고\" —"

layer: 6
secondary-layers: [5]
claimType: testimony_evidence
claimSubtype: institutional_observer_testimony
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: MODERATE
truthfulness: 8
validity: 8
sincerity: 9
analysisDate: 2026-04-13

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 곽민철
  - 김민수
  - 이준호
  - 박서준
organizations:
  - 국전원
has-verbatim: true

tags:
  - layer/L6
  - layer/L5
  - verdict/corroborated
  - strength/moderate
  - type/testimony-evidence
  - source/recording
  - person/한지훈
  - person/곽민철
  - person/김민수
  - person/이준호
  - person/박서준
  - org/국전원
  - has/verbatim-quote
  - cross-layer
---
# 곽민철 (안보지원사 국전원 담당): "원장님이 가짜 환경을 만들어서 속였다고" — 김민수의 혐의 설계 구조 증언

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[017]` 녹취 200 (2022.8.2, 00:12:21, line 11660+)
**Layer:** [[../layers/layer-6|Layer 6]] (primary — 사기수사의 내부 구조), [[../layers/layer-5|Layer 5]] (secondary — 박서준 "이상하다" 평가)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-NIS-SUPPORT-CMD-DIRECTOR-CHARGE"})
SET fr.layer = 6,
    fr.secondaryLayers = [5],
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "institutional_observer_testimony",
    fr.claimDesc = "안보지원사령부 국전원 담당 사무관 곽민철에게 한지훈이 보고한 내용: (1) 김민수 원장이 '실제 환경과 다른 가짜 환경을 만들어서 평가인원들을 전부다 속였기 때문에 조작해가지고 이준호 대위하고 모의해서 속여서 평가가 진행이 됐기 때문에'라고 혐의를 구성, (2) '고지를 해야 할 사람은 고지를 안 했고' — 한지훈은 '방 바깥에 있었던 사람'으로 자기 배제, (3) 한지훈이 사이버안보훈령을 자신이 만들었음을 강조. 안보지원사는 국전원의 보안 감독 기관으로서 이 보고의 독립적 수신자",
    fr.counterHypothesis = "한지훈이 곽민철에게 편향된 자기 방어 서사를 전달한 것이며, 곽민철은 독립적 검증 없이 수신만 한 것이다",
    fr.falsificationCondition = "곽민철이 한지훈의 보고를 검증하고 혐의가 정당하다고 판단한 내부 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "안보지원사 담당관에게 보고: '원장님이 가짜 환경을 만들어서 속였다고 했다' + '내가 사이버안보훈령을 만들었다' + '방 바깥에 있었던 사람이야' — 혐의 구조의 부당성을 보안 감독기관에 공식 보고.";
```

## 주장 (Claim)

### 한국어

안보지원사령부 국전원 담당 사무관 곽민철에게 한지훈이 2022.8.2 통화에서 보고한 핵심 내용:

### 핵심 1: 김민수 원장이 혐의를 구성한 구조

> **(한지훈→곽민철, 녹취 200 line 11674~11677):**
> "김민수 원장님이 나한테 **실제 환경과 다른 가짜 환경을 만들어서, 평가인원들을 전부다 속였기 때문에. 조작해가지고 이준호 대위하고 모의해서 속여서. 평가가 진행이 됐기 때문에**"

### 핵심 2: 사이버안보훈령을 한지훈 자신이 만들었음

> **(한지훈→곽민철, 녹취 200 line 11660~11667):**
> "**사이버안보훈령을 위반했다고 되어 있어요**... 근데 **내가 사이버안보훈령을 만들었어. 내가 2013년도. 내가 기여 했어**"

### 핵심 3: "방 바깥에 있었던 사람"

> **(한지훈→곽민철, 녹취 200 line 11722~11726):**
> "**고지를 해야 할 사람은 고지를 안 했고**, 당연히 고지를 안 했으니까 그 고지를 받아야 할 사람은 못 들었어... **나는 누구야. 그 방안에 있었던 사람이 아니고 방 바깥에 있었던 사람이야**"

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 한지훈이 **안보지원사령부**(국전원 보안 감독기관)에 혐의의 부당성을 **공식 보고**한 기록 — Layer 7 진정 체인의 일부. / Han Ji-hoon officially reported the charge's illegitimacy to the security oversight agency.
- [진리성] **"내가 사이버안보훈령을 만들었다"** — 한지훈이 2013년 사이버안보훈령 제정에 기여한 사실 = 이 훈령 위반으로 기소된 것의 **역설적 부당성**. / The person who helped CREATE the directive is charged with violating it.
- [진실성] **"방 바깥에 있었던 사람"** — 사업관리팀장은 시험평가 실행에 참여하지 않는 역할 = [[han-ji-hoon-prosecution-violates-2129-role-separation]] 역할분리 방어의 **일상어 표현**. / "I was outside the room" — plain-language expression of the role-separation defense.

## 지지 증거 (Supporting Evidence)
- **녹취 200** (2022.8.2, raw/02 line 11660+) — 곽민철과의 통화

## 반대 가설 (Counter-hypothesis)
한지훈이 편향된 자기 방어 서사를 전달한 것이다.

## 반증 조건 (Falsification Condition)
곽민철이 보고를 검증하고 혐의가 정당하다고 판단한 기록.

## 평결 (Verdict)
**CORROBORATED.** Moderate. 진리성 8 / 타당성 8 / 진실성 9.

## Spot-check (raw/01 book)

- `Korean/12-3-6-36-제6층위-군.md` — 혐의 구조 분석
- Deferred to A.6 Re-verify.

## 관련 (Related)
- [[han-ji-hoon-prosecution-violates-2129-role-separation|역할분리 위반]] (RELATED)
- [[prosecution-distorts-operational-vs-test-environment|환경 왜곡]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
