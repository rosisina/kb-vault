---
lang: ko
title-ko: 군 검찰단이 '실제 운영 대 시험평가' 환경의 동일성과 차이를 의도적으로 왜곡하여 사기수사를 설계하였다
title-en: ""
aliases:
  - FR-L6-ENV-DISTORT-001
  - 군 검찰단이 '실제 운영 대 시험평가' 환경의 동일성과 차이를 의도적으로 왜곡하여

layer: 6
secondary-layers: []
claimType: prosecution_misconduct
claimSubtype: investigative_fraud
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 9
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: 2022-10-11

persons:
  - 한지훈
organizations:
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/book
  - fracture/F-MS
  - person/한지훈
  - org/군검찰단
---
# 군 검찰단이 '실제 운영 대 시험평가' 환경의 동일성과 차이를 의도적으로 왜곡하여 사기수사를 설계하였다

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md (§3.6.3.1)
**Layer:** [[../layers/layer-6|Layer 6]] (primary — 군 검찰단의 사기 수사)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-ENV-DISTORT-001"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "investigative_fraud",
    fr.claimDesc = "군 검찰단의 압수·수색·검증 영장(기록 제4,842쪽), 군인·공무원 범죄 수사 개시 통보(기록 제4,854쪽), 피의자 신문조서(기록 제4,874쪽), 불기소 이유 통지(기록 제5,167쪽)에서 공통으로 나타난 '실제 운영 대 시험평가 환경'의 동일성과 차이에 대한 의미 왜곡은 취사 선별적 훈령 적용, 동일성의 오류, 시간 역전, 주어 은닉 등의 기법을 사용한 사기수사의 전형이다.",
    fr.counterHypothesis = "검찰단의 4개 문서는 시험평가 환경과 운영 환경의 차이를 객관적으로 기술한 것이며, 환경 차이 자체가 수사의 정당한 근거이다.",
    fr.falsificationCondition = "4개 문서의 환경 차이 기술이 훈령 별표1의 시험평가 정의 및 관련 조항과 일관되고, 취사선택적 적용이 아님을 보여주는 법률 분석이 제시되면 '사기수사'에서 '정상 수사'로 재평가된다.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "4개 핵심 수사 문서(기록 제4,842쪽·제4,854쪽·제4,874쪽·제5,167쪽)가 공통으로 시험평가 환경과 운영 환경의 차이를 왜곡한 사실이 §3.6.3.1에서 분석된다. 이 문서들은 취사 선별적 훈령 적용, 동일성의 오류, 시간 역전, 주어 은닉 등의 조작 기법을 사용하였다.";
```

## 주장 (Claim)

### 한국어

군 검찰단이 생산한 4개 핵심 수사 문서가 '실제 운영 대 시험평가' 환경의 동일성과 차이를 공통으로 왜곡하였다:

1. **압수·수색·검증 영장** (2022.7.18., 기록 제4,842쪽~)
2. **군인·공무원 범죄 수사 개시 통보** (2022.7.21., 기록 제4,854쪽~)
3. **피의자 신문조서** (2022.9.2., 기록 제4,874쪽~)
4. **불기소 이유 통지** (2022.10.11., 기록 제5,167쪽~)

§3.6.3.1에 따르면, 이 4개 문서에 나타난 허위 조작의 기법은 다음과 같다:
- **취사 선별적 훈령 적용**: 자신들에게 유리한 조항만 선택 적용
- **동일성의 오류**: 서로 다른 환경을 동일한 것으로 혼동하거나, 동일한 것을 다른 것으로 왜곡
- **시간 역전의 물리법칙 위배**: 사후적 기준을 과거 행위에 소급 적용
- **주어(주체) 은닉**: 문장의 주어를 숨겨 책임 소재를 은폐
- **대상의 지칭 관계 오류**: 지칭 대상을 교묘하게 변환

이러한 조작 기법들은 공문서의 생산, 보고, 통보에 관한 사항조차 어설프게 처리되어, §3.6.3.1은 이를 "법 기술의 훈련장"이자 "군인을 우습게 보는" 행태로 평가하고 있다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 4개 핵심 수사 문서(기록 제4,842쪽·제4,854쪽·제4,874쪽·제5,167쪽)가 모두 '실제 운영 대 시험평가 환경' 차이를 공통 논거로 사용하고 있음이 확인된다 / All four key investigation documents use the "operational vs. test environment" difference as a common argument
- [타당성] 취사 선별적 훈령 적용, 동일성의 오류, 시간 역전, 주어 은닉은 법적 문서 조작의 체계적 기법이다 / Selective directive application, identity fallacy, temporal inversion, and subject concealment are systematic legal document manipulation techniques
- [진실성] 군 검찰단의 사기수사는 에드먼드 버크의 "악이 승리하는 데 필요한 것은 선한 사람들이 아무것도 하지 않는 것뿐"이라는 경고의 현실화 — 한지훈에 대한 조직적 범죄자 낙인 / The military prosecution's fraudulent investigation exemplifies Edmund Burke's warning about the triumph of evil through inaction — systematic criminal stigmatization of 한지훈

## 지지 증거 (Supporting Evidence)
- **기록 제4,842쪽~** — 압수·수색·검증 영장 (2022.7.18.). L6 범위(4,600~5,248).
- **기록 제4,854쪽~** — 군인·공무원 범죄 수사 개시 통보 (2022.7.21.). L6 범위.
- **기록 제4,874쪽~** — 피의자 신문조서 (2022.9.2.). L6 범위.
- **기록 제5,167쪽~** — 불기소 이유 통지 (2022.10.11.). L6 범위.

## 반대 가설 (Counter-hypothesis)
1. **대안적 해석**: 검찰단의 4개 문서는 시험평가 환경과 운영 환경의 실질적 차이를 기술적으로 정확하게 반영한 것이며, 환경 차이로 인한 시스템 오작동이 수사의 정당한 근거이다.
2. **반박 조건**: 4개 문서에서 인용된 훈령 조항이 완전하고 편향 없이 적용되었으며, 환경 차이 기술이 기술적 사실과 일치함을 보여주는 독립적 기술 감정이 제시되면 "왜곡"에서 "정확한 기술"로 재평가된다.
3. **방어 가능한 반대 입장**: 수사 문서는 혐의 사실을 중심으로 기술하는 것이 일반적이며, 피의자에게 유리한 사항을 모두 포함할 의무가 없다.

## 반증 조건 (Falsification Condition)
4개 문서(기록 제4,842쪽·제4,854쪽·제4,874쪽·제5,167쪽)에서 (a) 인용된 훈령 조항이 완전하고 취사선택적이지 않으며, (b) 시간 역전(사후 기준의 소급 적용)이 존재하지 않고, (c) 주어 은닉 없이 책임 소재가 명확하게 기술되었음을 보여주는 문서 분석이 제시되면, "사기수사"에서 "정상 수사"로 verdict가 하향 조정된다.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9. 4개 문서의 존재와 기록 번호가 확인되고, §3.6.3.1이 각 문서의 조작 기법을 체계적으로 분석한다. 진실성 점수가 최고인 이유는 이 4개 문서가 한지훈을 군인에서 피의자로, 피의자에서 범죄자로 전환시키는 직접적 도구였기 때문이다.

## 미결 사항 (Open Questions)
- §3.6.3.1은 "이후의 논의에서 자주 사용될" 것이라고 예고하는 도입부이므로, §3.6.3.2 이하의 세부 분석(참고인 진술서 문답 등)과 결합하여 각 조작 기법의 구체적 사례를 추출할 필요가 있다
- 4개 문서 간의 조작 기법 공통성 분석 — 동일한 왜곡 패턴이 4개 문서에서 반복되는지, 아니면 각기 다른 기법이 사용되었는지 체계적 비교 필요
- "공문서의 생산, 보고, 통보에 관한 사항조차 어설프게 조작" — 구체적으로 어떤 공문서 절차 위반인지 후속 층위에서 확인 필요

## Spot-check (raw/01 book)

- `Korean/12-3-6-36-제6층위-군.md` §3.6.3.1 (line 119) — 기록 제4,842쪽(압수·수색·검증 영장), 제4,854쪽(수사 개시 통보), 제4,874쪽(피의자 신문조서), 제5,167쪽(불기소 이유 통지) 4개 문서 인용 — CONFIRMED
- `Korean/12-3-6-36-제6층위-군.md` §3.6.3.1 (line 119) — "취사 선별적 훈령 적용, 동일성의 오류, 시간 역전의 물리법칙 위배, 문장의 주어(주체)를 숨겨 은닉" — CONFIRMED
- `Korean/12-3-6-36-제6층위-군.md` §3.6.3.1 (line 119) — 에드먼드 버크 인용 — CONFIRMED

## 관련 (Related)
- [[han-ji-hoon-witness-statement-2022-01-25|3 shared records — 참고인 진술 원본]] (RELATED)
- [[layer6-cartel-network-structure-four-documents-four-keywords|4 shared records — 카르텔 네트워크 구조]] (RELATED)
- [[han-ji-hoon-suspect-interrogation-2022-09-02|피의자 신문조서 (2022.9.2.) — 4개 문서 중 하나의 상세 분석]] (RELATED)
- [[han-ji-hoon-investigation-notification-2022-07-21|수사 개시 통보 (2022.7.21.) — 4개 문서 중 하나]] (RELATED)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|기소유예 = 범죄 낙인 — 4개 문서가 만든 최종 결과]] (RELATED)
- [[mnd-test-evaluation-definition-manipulation|시험평가 정의 조작 — L4에서 공급된 조작 도구]] (RELATED)
- [[../layers/layer-6|Layer 6 — 군 검찰단의 사기 수사와 범죄자 낙인]] (PART_OF_LAYER)
