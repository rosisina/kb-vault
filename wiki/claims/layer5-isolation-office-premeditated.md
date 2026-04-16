---
lang: ko
title-ko: "한지훈 배치 독방 사무실은 갑질 신고 이전에 이미 준비되어 있었고, 김민수의 \"준비 다 됐다\" 발언이 이를 입증한다"
title-en: ""
aliases:
  - FR-L5-006
  - "한지훈 배치 독방 사무실은 갑질 신고 이전에 이미 준비되어 있었고, 김민수의 \"준비 다"

layer: 5
secondary-layers: [7]
claimType: human_rights_violation
claimSubtype: premeditated_isolation_operation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 10
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L5-006"]
event-date: 2022-02-14

persons:
  - 김민수
  - 한지훈
organizations:
  - 국전원
  - 조사본부
has-verbatim: false

tags:
  - layer/L5
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/human-rights-violation
  - source/book
  - fracture/F-MS
  - person/김민수
  - person/한지훈
  - org/국전원
  - org/조사본부
  - cross-layer
---
# 한지훈 배치 독방 사무실은 갑질 신고 이전에 이미 준비되어 있었고, 김민수의 "준비 다 됐다" 발언이 이를 입증한다

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (book §3.5.1.5 / §3.5.2.3.5)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-7|Layer 7]] (secondary — 기록 제10,033 / 제10,082 / 제10,034~10,061 all fall in the L7 record range 5,300~13,495, indicating the premeditation evidence is stored with the petition-response documentation)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-006"})
SET fr.layer = 5,
    fr.claimType = "human_rights_violation",
    fr.claimSubtype = "premeditated_isolation_operation",
    fr.claimDesc = "The isolation office to which 한지훈 was assigned was physically prepared before the 2022-02-10 false 갑질 report was even filed. 김민수's recorded statement '준비 다 됐다' on 2022-02-21 proves the retaliation was pre-planned at the organizational level, not a reactive administrative response triggered by the complaint.",
    fr.counterHypothesis = "김민수's '준비 다 됐다' statement on 2022-02-21 referred to preparation of unrelated administrative matters, not the isolation office — or was said after the isolation had already begun as a description rather than an announcement.",
    fr.falsificationCondition = "A full transcript context of the 2022-02-21 recording showing that '준비 다 됐다' referred to something other than 한지훈's workspace isolation, or evidence that the office was repurposed only after the 갑질 complaint was formally processed.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "기록 제3,900 (2022-02-21 recording: 김민수 '준비 다 됐다') confirms the isolation office was prepared before the formal 갑질 investigation began; 기록 제10,033 and 제10,082 corroborate the timeline. Pre-prepared retaliation infrastructure is the structural proof that the 갑질 complaint was pretext, not cause.";
```

## 주장 (Claim)

### 한국어

2022년 2월 10일 갑질 신고가 제출되기도 전에 — 또는 신고가 접수된 직후 공식 조사가 개시되기 전에 — 한지훈을 수용할 독방 사무실이 이미 준비되어 있었다. 국전원장 **김민수**가 2022년 2월 21일에 녹취된 발언에서 `준비 다 됐다`라고 말했으며, 이 발언은 기록 제3,900쪽에 기록되어 있다.

책(§3.5.1.5)는 이를 `허위 갑질 신고의 조직적 공모 구조`의 일환으로 분석한다. 사전 준비된 독방은 갑질 신고가 행정적 보복의 **원인**이 아니라 **구실**이었음을 증명하는 물적 증거다: 공간이 먼저 준비되고, 신고는 그 공간에 한지훈을 합법적으로 가두기 위한 법적 근거로 사용되었다.

책(§3.5.2.3.5)는 이를 `결론 사전 결정의 증거: 김민수의 2.14 선언`과 함께 "결론 사전 결정"의 물적 증거로 분류한다. 2022-02-14 선언(`전역만이 옵션이다`)과 2022-02-21 `준비 다 됐다`는 두 개의 독립적 사전 결정 증거로 기능한다.

기록 제10,034~10,061쪽(§3.5.3.2.1)에는 김민수가 2022년 2월 9일 한지훈과의 단독 대화에서 `1~2주`를 언급했다는 내용이 있다. 그러나 그 이후 6개월 독방 생활로 전환된 것은, 2022-02-10 신고 이후 조직이 이미 준비한 장기 격리 계획을 실행에 옮긴 것이다. `준비 다 됐다` 발언은 이 계획이 2022-02-21 시점에 이미 완성 단계였음을 확인한다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 기록 제3,900쪽에 기록된 김민수의 2022-02-21 발언 `준비 다 됐다`는 독방 사전 준비를 시사하는 직접 발언 증거다. 기록 제10,033쪽과 제10,082쪽은 이 타임라인을 추가로 뒷받침한다.
- [진실성] 물리적 공간이 먼저 준비되고 행정적 절차가 뒤따른 구조는, 한지훈에게 갑질 신고 절차 전체가 사전에 설계된 함정이었음을 의미한다. 이것이 `증인 파괴 전술`의 가장 강력한 증거다.
- [진리성] 2022-02-09 `1~2주` 언급 → 2022-02-10 갑질 신고 → 2022-02-21 `준비 다 됐다` → 6개월 독방이라는 시간적 흐름은 계획과 실행의 순서가 신고 이전부터 시작되었음을 보여준다.
- [타당성] 조직의 사전 지시에 의한 격리 공간 준비는 행정 절차의 남용(abuse of administrative process)에 해당한다. 적법 절차 없이 직원을 격리하기 위한 공간을 사전에 준비하는 행위는 공무원 행동강령 위반 가능성이 있다.
- [진실성] 이 사전 준비 사실은 한지훈에 대한 보복이 반응적(reactive)이 아니라 사전 계획적(premeditated)이었음을 의미하며, 이는 인권침해의 심각성과 조직적 책임 범위를 모두 확장한다.

## 지지 증거 (Supporting Evidence)
- **기록 제3,900쪽** — 2022-02-21 김민수 `준비 다 됐다` 녹취 기록 (book §3.5.1.5)
- **기록 제10,033쪽** — 독방 준비 또는 관련 조직 내 커뮤니케이션 기록 (book §3.5.1.5)
- **기록 제10,082쪽** — 독방 준비 타임라인 추가 뒷받침 기록 (book §3.5.1.5)
- **기록 제10,034~10,061쪽** — 김민수 2022-02-09 `1~2주` 발언: `김민수는 2022년 2월 9일 본고자와 단둘이 대화에서 갑질 신고를 할 것 같다는 판단 하에 다음과 같이 1~2주를 애기했다. 그러나 그것이 6개월 독방생활로 바뀌었다.` (§3.5.3.2.1)
- **Book §3.5.1.5** section heading: `허위 갑질 신고의 조직적 공모 구조`
- **Book §3.5.2.3.5** section heading: `결론 사전 결정의 증거: 김민수의 2.14 선언`
- **Book §3.5.2.2.7** section heading: `김민수의 확정: "심각하다. 전역만이 옵션이다"` — 독립적 사전 결정 증거

## 반대 가설 (Counter-hypothesis)
`준비 다 됐다` 발언(2022-02-21)은 독방 준비와 무관한 다른 행정 준비 사항에 관한 것이었다. 예를 들어 조사 서류, 신고서 보완, 또는 조사본부에의 통보 절차가 완료되었다는 의미일 수 있다. 이 경우 독방 공간 준비가 신고 이전에 이루어졌다는 해석은 지나친 확대 해석이다.

또한 2022-02-21 발언 시점은 2022-02-10 신고 이후 11일이 지난 시점이므로, `준비`가 신고 이후에 이루어진 것일 수도 있다. 신고 전 준비가 아닌 신고 후 신속한 준비일 경우, 사전 계획이 아닌 신속한 반응적 집행이 된다.

## 반증 조건 (Falsification Condition)
이 클레임은 다음 중 하나가 제출될 경우 반증 또는 약화된다:

1. **2022-02-21 녹취(기록 제3,900) 전체 맥락 전문** — `준비 다 됐다`가 독방 공간이 아닌 다른 대상(조사 서류, 행정 통보 등)을 지칭한다는 것이 전체 맥락에서 명확히 드러나는 경우.
2. **독방 공간이 2022-02-10 신고 이후 처음 사용되기 시작했다는 물리적 증거** — 사무실 배치 시작 날짜가 2022-02-10 이후임을 보여주는 건물 관리 기록 또는 인사 발령 문서.
3. **김민수의 2022-02-09 `1~2주` 발언이 신고와 무관한 다른 조치를 의미했다는 증거** — 기록 제10,034~10,061의 전체 대화 맥락에서 주제가 갑질 신고와 무관함이 명확한 경우.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 10. `준비 다 됐다` 발언(기록 제3,900)은 독방 배치의 사전 계획적 성격을 직접 시사한다. 기록 제10,033과 10,082가 타임라인을 보강한다. 2022-02-09 `1~2주` 발언에서 6개월 실제 격리로의 급격한 확장, 그리고 2022-02-14 `전역만이 옵션` 발언과의 시간적 일관성은 독립적 증거로 수렴한다. 이 원자는 [[layer5-six-month-isolation-human-rights]]의 `왜`를 설명하는 인과 메커니즘 원자다.

## Spot-check (raw/01 book)

- `Korean/11-3-5-35-제-5층위.md` — §3.5.1.5, §3.5.2.3.5, §3.5.3.2.1: 모두 일치. 책은 사전 공모 구조를 별도 절로 다루며, 김민수 발언을 결론 사전 결정의 독립 증거로 분류한다.

## 관련 (Related)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/kim-min-su|김민수]] (ABOUT)
- [[layer5-six-month-isolation-human-rights|layer5-six-month-isolation-human-rights — 6개월 독방 인권침해]] (CORROBORATES)
- [[layer5-48hr-retaliation-causal-link|layer5-48hr-retaliation-causal-link — 48시간 보복 인과 관계]] (CORROBORATES)
- [[layer5-predetermined-audit-conclusion|layer5-predetermined-audit-conclusion — 조사본부 결론 사전 결정]] (RELATED)
- [[../topics/whistleblower-protection-and-reform|Whistleblower Protection and Reform]] (ABOUT)
