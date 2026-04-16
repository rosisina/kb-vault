---
lang: ko
title-ko: 국방부 조사본부는 2022-02-10 징계·전역 결론을 선언한 후 2022-03-25에 29개 유도심문 조사를 실시했다
title-en: ""
aliases:
  - FR-L5-003
  - 국방부 조사본부는 2022-02-10 징계·전역 결론을 선언한 후 2022-03-25에

layer: 5
secondary-layers: [7]
claimType: temporal_manipulation
claimSubtype: predetermined_audit_conclusion
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 9
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L5-003"]
event-date: 2022-03-25

persons:
  - 김민수
  - 한지훈
organizations:
  - 국전원
  - MND
  - 조사본부
has-verbatim: false

tags:
  - layer/L5
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/temporal-manipulation
  - source/book
  - fracture/F-MS
  - person/김민수
  - person/한지훈
  - org/국전원
  - org/MND
  - org/조사본부
  - cross-layer
---
# 국방부 조사본부는 2022-02-10 징계·전역 결론을 선언한 후 2022-03-25에 29개 유도심문 조사를 실시했다

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (book §3.5.2.1 / §3.5.2.3.5 / §3.5.1.2 / §3.5.2.2.1)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-7|Layer 7]] (secondary — 기록 제6,917~6,924 is in the flat L7 record range 5,300~13,495, physically within the scanned-file gap 6,761~7,499 between sub-files 1-7-1 and 1-7-2. Secondary changed from L6 → L7 on 2026-04-11 after layer-auditor RANGE_VIOLATION finding — the original L6 annotation `4,600~5,248` was mathematically incorrect since 6,917 ∉ [4,600, 5,248].)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-003"})
SET fr.layer = 5,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "predetermined_audit_conclusion",
    fr.claimDesc = "The MND Inspector General's office (조사본부) declared the disciplinary/discharge outcome on 2022-02-10 — the same day the false 갑질 complaint was filed — before conducting the 29-question leading interrogation on 2022-03-25. The conclusion preceded the investigation by approximately 43 days, structurally inverting the logical order of fact-finding and adjudication.",
    fr.counterHypothesis = "The 2022-02-10 statement was a preliminary administrative assessment, not a conclusion, and the subsequent 29-question interrogation on 2022-03-25 was a genuine fact-finding exercise that could have altered the outcome.",
    fr.falsificationCondition = "Production of a 2022-03-25 interrogation transcript showing open-ended questions and procedural acknowledgment that the outcome had not yet been determined, combined with evidence that the 2022-02-10 statement was labelled as preliminary rather than conclusive.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The MND 조사본부 declared disciplinary/discharge outcome on 2022-02-10 (기록 제3,965), conducted a 29-question leading interrogation on 2022-03-25 (기록 제6,917~6,924), and the interrogation questionnaire proves conclusion-first, evidence-fitting-after — a fundamental inversion of lawful investigative procedure.";
```

## 주장 (Claim)

### 한국어

국방부 조사본부(MND Inspector General's Office)는 2022년 2월 10일 갑질 신고가 접수된 당일, **한지훈에 대한 징계 및 전역 결론을 이미 선언했다.** 이 사실은 기록 제3,965쪽에 기록되어 있다. 이후 2022년 3월 25일에 29개 유도심문 질문지를 이용한 조사가 실시되었으며, 이 조사의 기록은 기록 제6,917~6,924쪽에 있다.

책(§3.5.1.2)은 이 역전 구조를 `조사본부의 사기 수사: 결론을 먼저 정하고 증거를 맞추기`라는 절 제목으로 명시한다. 책(§3.5.2.1)은 이를 다시 `사기 수사의 본질: 결론 선언 후 증거 조작`으로 규정한다.

2022-02-10과 2022-03-25 사이의 43일 간격은 결론(2022-02-10)이 사실 조사(2022-03-25)보다 **먼저** 존재했음을 입증한다. 이는 정상적인 수사 절차의 논리적 역전이다: 정상 수사는 사실 조사 → 결론 도출 순서로 진행되지만, 이 조사는 결론 선언 → 사실 조작 순서로 진행되었다.

책(§3.5.2.2.1)은 29개 유도심문 질문의 구조와 패턴을 별도로 분석하며, 질문 자체가 한지훈을 유죄로 간주하는 전제 위에 설계되었음을 보인다. 정의 D3(§3.5.1.7): `깜깜이 사기 감사는 증거 차단과 유도신문 그리고 결론 사전 결정을 포함한다는 것이다.`

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 2022-02-10 결론 선언(기록 제3,965쪽)은 2022-03-25 29개 유도심문 조사(기록 제6,917~6,924쪽)보다 43일 앞서 이루어졌다. 이 시간적 역전은 결론 사전 결정의 직접적 증거다.
- [타당성] 공무원 징계 절차상 결론은 사실 조사 종결 후에 도출되어야 한다. 적법절차(due process) 원칙에 따르면 피조사자는 조사 개시 시점에 결론이 미정 상태여야 한다. 2022-02-10 결론 선언은 이 원칙을 정면으로 위반한다.
- [진리성] 29개 유도심문 질문지(기록 제6,917~6,924쪽)는 한지훈을 유죄 전제로 설계된 질문 구조를 가지며(§3.5.2.2.1), 이는 사전에 결론이 결정된 조사에서 예상되는 패턴이다.
- [타당성] 책(§3.5.2.3.5) `결론 사전 결정의 증거: 김민수의 2.14 선언` — 국전원장 김민수의 2022-02-14 발언이 결론 사전 결정의 추가 증거로 기록되어 있다.
- [진실성] 한지훈에게 이 구조는 `깜깜이` 수사로 경험되었다: 어떤 정보도 제공받지 못하고, 결론이 이미 결정된 상태에서 진행되는 조사에 참여해야 했다.

## 지지 증거 (Supporting Evidence)
- **기록 제3,965쪽** — 2022-02-10 조사본부의 징계·전역 결론 선언 기록 (book §3.5.2.1)
- **기록 제6,917~6,924쪽** — 2022-03-25 29개 유도심문 질문지 원본 (book §3.5.2.2.1)
- **Book §3.5.1.2** section heading: `조사본부의 사기 수사: 결론을 먼저 정하고 증거를 맞추기`
- **Book §3.5.2.1** section heading: `사기 수사의 본질: 결론 선언 후 증거 조작`
- **Book §3.5.1.7** definition D3: `깜깜이 사기 감사는 증거 차단과 유도신문 그리고 결론 사전 결정을 포함한다는 것이다.`
- **Book §3.5.2.3.5** section heading: `결론 사전 결정의 증거: 김민수의 2.14 선언` — 김민수의 2022-02-14 발언이 독립적 결론 사전 결정 증거로 기능
- **Book §3.5.2.2.7** section heading: `김민수의 확정: "심각하다. 전역만이 옵션이다"` — 국전원장 확정 발언의 추가 증거

## 반대 가설 (Counter-hypothesis)
2022-02-10의 발언 또는 문서는 법적 의미의 결론(conclusion)이 아니라 예비 행정 평가(preliminary administrative assessment)였다. 조사본부는 신고 내용을 검토한 후 잠정적 심각성 판단을 내렸을 뿐이며, 2022-03-25 조사는 이 잠정 판단을 수정할 수 있는 실질적인 사실 조사였다.

이 반가설이 성립하려면: (1) 2022-02-10 문서가 `잠정` 또는 `예비` 표기를 포함해야 하고, (2) 2022-03-25 조사 후 결론이 실질적으로 수정된 사례가 있어야 한다. 29개 질문지가 유도심문 구조를 갖는다는 §3.5.2.2.1의 분석은 이 반가설을 약화시킨다.

## 반증 조건 (Falsification Condition)
이 클레임은 다음 중 하나가 제출될 경우 반증 또는 약화된다:

1. **2022-02-10 문서의 원본** — 징계·전역을 최종 결론이 아닌 예비 검토로 표기했음을 보여주는 원본. 특히 `잠정`, `검토 중`, `조사 후 결정` 등의 표현이 포함된 경우.
2. **2022-03-25 조사 이후 결론 수정 기록** — 29개 질문지 조사 결과에 따라 조사본부가 결론을 수정했거나 추가 증거를 요청했다는 기록.
3. **조사본부 내부 지침** — 갑질 신고 접수 당일 예비 심각성 평가를 하도록 규정하는 내부 절차 문서로, 그 평가가 최종 결론과 구분됨을 명시한 것.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9. 43일 시간 역전(결론 2022-02-10, 조사 2022-03-25)은 두 개의 독립적 기록 번호에 의해 뒷받침된다. 책(§3.5.1.2, §3.5.2.1)은 이 역전 구조를 두 개의 절 제목으로 명시하며, 29개 유도심문 질문지의 구조 분석(§3.5.2.2.1)이 사전 결론을 독립적으로 뒷받침한다. 김민수의 2022-02-14 `전역만이 옵션이다` 발언(§3.5.2.2.7)은 3번째 독립 증거다.

## Spot-check (raw/01 book)

- `Korean/11-3-5-35-제-5층위.md` — §3.5.1.2, §3.5.2.1, §3.5.2.2.1, §3.5.2.3.5, §3.5.2.2.7: 모두 일치. 책은 결론 사전 결정을 핵심 테제로 반복적으로 명시한다.

## 관련 (Related)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/kim-min-su|김민수]] (ABOUT)
- [[layer5-48hr-retaliation-causal-link|layer5-48hr-retaliation-causal-link — 48시간 보복 인과 관계]] (RELATED)
- [[layer5-fabricated-warning-letter|layer5-fabricated-warning-letter — 허위 경고장]] (OPPOSES)
- [[../topics/whistleblower-protection-and-reform|Whistleblower Protection and Reform]] (ABOUT)
- [[../topics/fraud-investigation|Fraud Investigation]] (ABOUT)
