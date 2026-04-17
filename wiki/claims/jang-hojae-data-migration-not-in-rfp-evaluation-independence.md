---
lang: ko
title-ko: "장호재 (개발PM): \"요구사항에는 없습니다\" — 과거 데이터 이관은 RFP 밖 + \"어떻게 점수를 조작해요 그쪽에서 다 한 건데\""
title-en: "장호재 (개발PM): \"요구사항에는 없습니다\" — 과거 데이터 이관은 RFP 밖 + \"어떻게 점수를 조작해요 그쪽에서 다 한 건데\""
aliases:
  - FR-L4-DATA-MIGRATION-NOT-IN-RFP
  - "장호재 (개발PM): \"요구사항에는 없습니다\" — 과거 데이터 이관은 RFP 밖 +"

layer: 4
secondary-layers: [6]
claimType: technical_proof
claimSubtype: rfp_scope_exclusion_evaluation_independence
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-13

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 장호재
  - 한지훈
organizations:
  - DIDC
has-verbatim: true

tags:
  - layer/L4
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/technical-proof
  - source/recording
  - person/장호재
  - person/한지훈
  - org/DIDC
  - has/verbatim-quote
  - cross-layer
---
# 장호재 (개발PM): "요구사항에는 없습니다" — 과거 데이터 이관은 RFP 밖 + "어떻게 점수를 조작해요 그쪽에서 다 한 건데"

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[040]` 녹취 233 (2022.7.20, 00:23:21, line 14160+) • 녹취 236 (2022.7.30, 00:15:30, line 14389+)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DATA-MIGRATION-NOT-IN-RFP"})
SET fr.layer = 4,
    fr.secondaryLayers = [6],
    fr.claimType = "technical_proof",
    fr.claimSubtype = "rfp_scope_exclusion_evaluation_independence",
    fr.claimDesc = "개발업체 PM 장호재가 증언: (1) '예전 데이터가 안 보인다고 하는 게 제일 크죠. 요구사항에는 없습니다. 수작업으로 할 수 밖에 없죠' — 과거 데이터 이관은 원래 RFP에 없는 사항을 사후에 문제 삼는 것, (2) '시험평가를 그쪽에서 했는데. 어떻게 저희가 점수를 조작하고 뭘 어떡해요 그쪽에서 다 한 건데' — 평가위원이 독립적으로 평가했으므로 개발업체나 한지훈이 점수를 조작할 수 없는 구조",
    fr.counterHypothesis = "과거 데이터 이관은 RFP에 명시되지 않았더라도 성능개선사업의 당연한 범위이며, 평가위원의 독립성이 점수 조작 불가능을 보장하지 않는다",
    fr.falsificationCondition = "RFP에 과거 데이터 이관이 포함되어 있었음을 보여주는 계약 문서, 또는 평가위원이 개발업체의 영향을 받아 점수를 부풀렸음을 보여주는 증거",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "'요구사항에 없습니다'(RFP 밖) + '어떻게 점수를 조작해요'(평가위원 독립) = 사업 실패 서사와 점수 조작 서사가 모두 허위.";
```

## 주장 (Claim)

### 한국어

개발업체 PM 장호재가 녹취 233·236에서 검찰 서사의 2대 전제를 각각 부정:

### 전제 1 부정: "요구사항에는 없습니다"

> **(장호재, 녹취 233 line 14160~14162):**
> **(장호재)** "그거는 안된다라고 **예전 데이터가 안 보인다**고 하는 게 제일 크죠."
> **(한지훈)** "요구사항에 들어가 있어요?"
> **(장호재)** "**아니 요구사항에는 없습니다.** 그거는 **수작업으로 할 수 밖에** 없죠."

→ 검찰이 "사업 실패"의 근거로 삼은 과거 데이터 미표시 문제는 **원래 RFP에 없는 사항** = 사후 기준 소급 적용

### 전제 2 부정: "어떻게 점수를 조작해요"

> **(장호재, 녹취 236 line 14389~14390):**
> "시험평가를 **그쪽에서 했는데. 어떻게 저희가 점수를 조작하고 뭘 어떡해요 그쪽에서 (평가위원들이) 다 한 건데**"

→ 평가위원 18명이 **독립적으로** 평가 → 개발업체나 한지훈이 점수를 조작하는 것은 **구조적으로 불가능**

### English

Developer PM 장호재 refuted two fundamental premises of the prosecution narrative in Recordings 233 and 236:

### Refutation of Premise 1: 'Not in the requirements'

> **(장호재, Recording 233, lines 14160–14162):**
> '그거는 안된다라고 **예전 데이터가 안 보인다**고 하는 게 제일 크죠.'
> '(한지훈) 요구사항에 들어가 있어요?'
> '**아니 요구사항에는 없습니다.** 그거는 **수작업으로 할 수 밖에** 없죠.'
>
> ("The biggest issue is that **the old data is not visible.** [Han: Is it in the requirements?] **No, it's not in the requirements.** That can only be done **manually.**")

## 핵심 요약 (Key Takeaways)
- [진리성] **과거 데이터 이관은 RFP에 없음** — 개발업체 PM이 명확히 확인. 이것을 "사업 실패"로 삼는 것은 **계약 범위 밖의 사후적 문제 제기**. / Past data migration was NOT in RFP — confirmed by developer PM. Treating this as "project failure" is post-hoc scope expansion.
- [타당성] **평가위원 독립성으로 점수 조작 불가능** — 18명의 평가위원이 각각 독립 평가. "그쪽에서 다 한 건데" = 개발업체도 한지훈도 점수에 **개입할 수 없는 구조**. / 18 independent evaluators — neither developer nor Han Ji-hoon could influence scoring.
- [진리성] 이 두 증언은 검찰의 두 핵심 서사를 동시에 부정: (a) "사업이 실패했다" ← RFP에 없는 항목으로 실패 주장, (b) "점수를 조작했다" ← 독립 평가위원 구조상 불가능. / Both prosecution narratives negated: "project failed" (non-RFP item) + "scores manipulated" (independent evaluators).

## 지지 증거 (Supporting Evidence)
- **녹취 233** (2022.7.20, line 14160+) — RFP 범위 확인
- **녹취 236** (2022.7.30, line 14389+) — 평가위원 독립성
- Cross-reference: [[jang-hojae-developer-pm-didc-opened-port-not-han-ji-hoon|자매 atom — DIDC 포트개방]]
- Cross-reference: [[layer4-evaluation-committee-80-items-violation|80건 추가 요구 — RFP 밖 항목]]

## 반대 가설 (Counter-hypothesis)
과거 데이터 이관은 성능개선사업의 당연한 범위이며, 평가위원의 독립성이 조작 불가능을 보장하지 않는다.

## 반증 조건 (Falsification Condition)
RFP에 과거 데이터 이관이 포함된 계약 문서, 또는 평가위원이 개발업체 영향을 받은 증거.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7.

## Spot-check (raw/01 book)

- `Korean/10-3-4-34-제4-층위.md` — 시험평가 구조
- Deferred to A.6 Re-verify.

## 관련 (Related)
- [[jang-hojae-developer-pm-didc-opened-port-not-han-ji-hoon|자매 atom]] (RELATED)
- [[layer4-evaluation-committee-80-items-violation|80건 위반]] (RELATED)
- [[80-items-violate-national-contract-law|80건 국가계약법 위반]] (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
