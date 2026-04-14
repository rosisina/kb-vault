---
lang: ko
title-ko: 국방부가 시험평가의 정의를 조작하여 운영시험평가를 희석하고 개발시험평가에 방점을 찍었다
title-en: ""
aliases:
  - FR-L4-EVAL-DEF-001
  - 국방부가 시험평가의 정의를 조작하여 운영시험평가를 희석하고 개발시험평가에 방점을 찍었다

layer: 4
secondary-layers: []
claimType: terminology_manipulation
claimSubtype: definition_manipulation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-11

record-nos: [4759, 9003]
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - 국전원
  - 군검찰단
  - MND
  - 국유단
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/terminology-manipulation
  - source/book
  - fracture/F-MS
  - person/한지훈
  - org/국전원
  - org/군검찰단
  - org/MND
  - org/국유단
  - has/record-nos
---
# 국방부가 시험평가의 정의를 조작하여 운영시험평가를 희석하고 개발시험평가에 방점을 찍었다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md (§3.4.7.3.2)
**Layer:** [[../layers/layer-4|Layer 4]] (primary — 시험평가 전·중·후 조작)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-EVAL-DEF-001"})
SET fr.layer = 4,
    fr.claimType = "terminology_manipulation",
    fr.claimSubtype = "definition_manipulation",
    fr.claimDesc = "국방정보화업무훈령 별표1의 '시험평가' 정의는 2016.6.16.(제1931호)부터 2025.7.9.(제3059호)까지 개정 없이 유지되었으나(기록 제9,003쪽~), 2020.8.20. 국방부 조작공문에서 이 정의를 '정보시스템 전력화 여부를 판단하기 위해 개발된 정보시스템이 군 요구품질을 만족시키는지 검증/확인하는 업무절차'(기록 제4,759쪽)로 변질시켰다. 이는 운영시험평가를 희석하고 개발시험평가에만 방점을 찍은 개념 왜곡이다.",
    fr.counterHypothesis = "공문의 시험평가 정의 변경은 운영 현실을 반영한 실무적 재정의이며, 훈령 별표1의 공식 정의를 변경한 것이 아니라 실무 해설 수준의 부연이다.",
    fr.falsificationCondition = "공문의 시험평가 정의가 훈령 별표1과 양립 가능한 해석임을 보여주는 법률 해석 의견서, 또는 공문이 별표1 정의를 대체하지 않고 보충한다는 취지의 공식 해명이 제시되면 '조작'에서 '해석 차이'로 재평가된다.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "훈령 별표1의 시험평가 정의(기록 제9,003쪽~제9,210쪽)가 2016~2025년 모든 훈령 개정에서 동일하게 유지된 반면, 2020년 조작공문(기록 제4,759쪽)은 이를 완전히 다른 정의로 대체하였다. 정리08이 이 공문의 조작성을 선언한다.";
```

## Claim

국방정보화업무훈령의 '별표1'에서 '시험평가'의 정의는 2016년 6월 16일(제1931호)부터 2025년 7월 9일(제3059호)까지 **단 한 번의 개정 없이 동일하게 유지**되어 왔다(기록 제9,003쪽~):

> "국방정보시스템 개발 시 기술적 측면 또는 운용관리적 측면에서 이미 규정된 특성이 일치하는가의 여부를 확인 검증하는 절차로서 요구 성능에 대한 기술적 도달정도에 중점을 두는 개발시험평가와 요구기능 및 운용상의 적합성과 연동성을 중점을 두는 운용시험평가로 구분한다."

이 정의는 15개 이상의 훈령 개정본(기록 제9,021쪽, 제9,032쪽, 제9,045쪽, 제9,059쪽, 제9,071쪽, 제9,082쪽, 제9,103쪽, 제9,116쪽, 제9,128쪽, 제9,138쪽, 제9,152쪽, 제9,166쪽, 제9,178쪽, 제9,189쪽, 제9,210쪽)에서 동일하게 확인된다.

그러나 2020년 8월 20일 국방부의 "시험평가 개선방안" 조작공문에서는 이 정의를 다음과 같이 **완전히 변질**시켰다(기록 제4,759쪽):

> "정보시스템 전력화 여부를 판단하기 위해 개발된 정보시스템이 군 요구품질을 만족시키는지 검증/확인하는 업무절차"

이 변질된 정의의 핵심은 **운영시험평가의 내용을 희석**하고 **개발시험평가에만 방점**을 찍었다는 것이다. 이로써 '부실개발'이라는 혐의를 사업관리기관(국전원)과 한지훈에게 귀속시키는 법적 기반이 마련되었다.

정리08: "국방부가 작성한 '국방정보시스템 시험평가 개선방안 의견수렴' 공문은 조작된 것이다."

## Key Takeaways

- [진리성] 훈령 별표1의 시험평가 정의가 2016~2025년(9년간, 15개 이상 개정본) 불변임이 기록 제9,003쪽~제9,210쪽에서 확인된다 / The directive Annex 1 test-evaluation definition remained unchanged across 15+ revisions from 2016 to 2025 (Record No. 9,003–9,210)
- [진리성] 2020년 조작공문(기록 제4,759쪽)이 이 불변 정의를 완전히 다른 문구로 대체하였다 / The 2020 fabricated document (Record No. 4,759) replaced this stable definition with entirely different wording
- [타당성] 운영시험평가 희석 + 개발시험평가 방점은 '부실개발' 혐의를 사업관리기관에 전가하기 위한 개념 왜곡 / Diluting OT and emphasizing DT is a conceptual distortion designed to shift "substandard development" blame onto the project management agency
- [진실성] 군 검찰단 검사의 전역 후 행적에서 이 정의 조작의 목적이 부분적으로 드러남 — "국방부 유해발굴감식단 KIATIS 부실개발 사건"을 주요 실적으로 게시 / The prosecutor's post-retirement profile lists "KIATIS substandard development case" as a key achievement, partially revealing the purpose of the definition manipulation

## Supporting evidence

- **기록 제4,759쪽** — 2020.8.20. 조작공문의 시험평가 개요에 나타난 변질된 정의. L4 범위(2,500~3,699).
- **기록 제9,003쪽~** — 훈령 별표1의 시험평가 원본 정의 시작점. L7 범위(5,300~13,495).
- **기록 제9,021쪽** — 훈령 별표1 정의의 첫 번째 개정본 확인. L7 범위. (이하 제9,032쪽~제9,210쪽까지 14개 추가 개정본 동일 정의 확인)

## Counter-hypothesis

1. **대안적 해석**: 공문의 시험평가 정의 변경은 훈령 별표1의 공식 정의를 변경한 것이 아니라, 실무 현장의 이해를 돕기 위한 간략화된 설명이다. 별표1의 정의가 법적으로 유효하며 공문의 서술은 구속력이 없다.
2. **반박 조건**: 이 공문이 내부 검토용 비공식 문서로서 외부에 시행되지 않았음을 보여주는 문서 분류 기록이 있다면 "조작"에서 "내부 검토"로 재평가될 수 있다.
3. **방어 가능한 반대 입장**: 시험평가의 정의를 실무적으로 재해석하는 것은 법적으로 허용되는 행정 해석이며, 훈령의 공식 정의와 실무 해설은 병존할 수 있다.

## Falsification condition

(a) 공문의 시험평가 정의가 별표1 정의와 양립 가능하다는 법률 해석 의견서, 또는 (b) 이 공문이 시행되지 않은 내부 검토 문서에 불과하다는 공식 분류 기록이 제시되면, "정의 조작"에서 "해석 차이" 또는 "비공식 검토"로 verdict가 하향 조정된다.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8. 15개 이상 훈령 개정본에서 불변인 별표1 정의(기록 제9,003쪽~제9,210쪽)와 2020년 조작공문의 변질된 정의(기록 제4,759쪽) 사이의 텍스트 비교가 명확하다. 정리08이 조작성을 선언한다. 진실성 점수가 높은 이유는 이 정의 조작이 한지훈에 대한 '부실개발' 낙인의 법적 기반이 되었기 때문이다.

## Open Questions

- 조작공문의 변질된 정의가 2020년 이후 실제 군 검찰단 수사에서 어떻게 인용·활용되었는지 확인 필요 — 피의자 신문조서, 불기소이유서 등에서의 정의 사용 여부
- 검사의 전역 후 "KIATIS 부실개발 사건" 게시 관련 온라인 소스 확인 (§3.4.7.3.2 각주 318에 URL 기재)

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` §3.4.7.3.2 (line 591) — "시험평가의 정의는 2016.6.16.(제1931호)에서부터 2025.7.9.(제3059호)에 이르기까지 그 개정이 없이 동일하게" — CONFIRMED
- `vault-converted-korean/10-3-4-34-제4-층위.md` §3.4.7.3.2 (line 591) — "기록 제9003쪽부터" 별표1 정의 시작 — CONFIRMED
- `vault-converted-korean/10-3-4-34-제4-층위.md` §3.4.7.3.2 (line 591) — 조작된 정의 "정보시스템 전력화 여부를 판단하기 위해...(기록 제4759쪽)" — CONFIRMED
- `vault-converted-korean/10-3-4-34-제4-층위.md` §3.4.7.3.2 (line 597) — "정리08: 국방부가 작성한...공문은 조작된 것이다" — CONFIRMED

## Related

- [[mnd-test-evaluation-improvement-retroactive-justification|FR-L4-EVAL-IMPROVE-001 — 2020.8월 공문 전체의 소급 정당화 분석]] (RELATED)
- [[kida-otne-citation-misrepresents-us-standard|KIDA의 미국 표준 왜곡 — 동일 공문의 학술적 위장 메커니즘]] (RELATED)
- [[2436ho-test-evaluation-principle-inverted|시험평가 원칙 역전 (분리→통합)]] (RELATED)
- [[../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 전·중·후 조작]] (PART_OF_LAYER)
