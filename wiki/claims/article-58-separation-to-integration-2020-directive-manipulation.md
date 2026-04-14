---
lang: ko
title-ko: 제58조 시험평가 수행원칙이 "분리 원칙"에서 "통합 원칙"으로 180도 전환되었다 — 2015~2020 훈령 이력 추적
title-en: 제58조 시험평가 수행원칙이 "분리 원칙"에서 "통합 원칙"으로 180도 전환되었다 — 2015~2020 훈령 이력 추적
aliases:
  - FR-L4-ART58-SEPARATION-REVERSAL-001
  - 제58조 시험평가 수행원칙이 "분리 원칙"에서 "통합 원칙"으로 180도 전환되었다 —

layer: 4
secondary-layers: [7]
claimType: regulatory_manipulation
claimSubtype: directive_manipulation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations:
  - 국전원
  - MND
  - 국본
  - 국유단
has-verbatim: false

tags:
  - layer/L4
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/regulatory-manipulation
  - source/book
  - fracture/F-MS
  - org/국전원
  - org/MND
  - org/국본
  - org/국유단
  - cross-layer
---
# 제58조 시험평가 수행원칙이 "분리 원칙"에서 "통합 원칙"으로 180도 전환되었다 — 2015~2020 훈령 이력 추적

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md (§3.4.4.4.3)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-7|Layer 7]] (secondary — 기록 제7,512쪽·제8,194쪽 모두 L7 범위)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-ART58-SEPARATION-REVERSAL-001"})
SET fr.layer = 4,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "directive_manipulation",
    fr.claimDesc = "Article 58 (시험평가 수행원칙) of the 국방정보화업무훈령 maintained a separation principle (개발시험평가와 운용시험평가를 분리하는 것을 원칙) from 제1775호 (2015-01-27, 기록 제7,512쪽) through 제2398호 (2020-02-13, 기록 제8,194쪽). On 2020-06-04, 제2436호 reversed this to an integration principle (시험평가는 통합하여 실시하는 것을 원칙). The 5-year stability of the separation principle followed by sudden reversal is evidence of deliberate manipulation, not routine policy evolution.",
    fr.counterHypothesis = "The integration principle was adopted as a modernization measure reflecting international best practices in agile software testing; the timing coincidence with the KIATIS case is not causal.",
    fr.falsificationCondition = "Production of an internal MND policy review document pre-dating the KIATIS controversy (before 2019) that recommends integrating DT&E and OT&E as a general reform, unrelated to any specific project.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "§3.4.4.4.3 traces 제58조's trajectory across 5+ directive revisions. The separation principle stood stable for 5 years (2015–2020-02) then was inverted in 제2436호 (2020-06-04), the same revision that executed five other anchor manipulations (see FR-L4-CLUSTER-2436). The terminology shift from 사업통제기관 to 집행기관/소요제기기관 in the same clause further obscures the pre-existing accountability chain. The book declares a separate chapter (§3.4.5) to mathematically prove this reversal's non-natural character via truth-function analysis.";
```

## Claim

국방정보화업무훈령 제58조(시험평가 수행원칙)는 2015년 1월 27일 제1775호(기록 제7,512쪽)에서부터 2020년 2월 13일 제2398호(기록 제8,194쪽)까지 5년간 **"개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되, 필요시 사업통제기관의 승인을 받아 동시에 실시할 수 있다"**로 규정되어 있었다. 그러나 2020년 6월 4일 제2436호부터 **"시험평가는 통합하여 실시하는 것을 원칙으로 한다"**로 완전히 뒤바뀌었다.

이 전환은 단순한 제도 개선이 아니라, 독립적 평가라는 시험평가의 본질을 근본적으로 파괴하는 개악이다. 동시에 기존의 "사업통제기관의 승인"이라는 통제 메커니즘이 제거되고, "집행기관과 소요제기기관이 협의하여 결정"이라는 모호한 절차로 대체되었다. 新KIATIS 사업의 맥락에서 사업주관기관(국유단)과 사업관리기관(국전원)의 역할이 소요제기기관·집행기관으로 용어 전환됨으로써, 기존 책임 구조가 흐려졌다 (각주 294, 295).

본문은 이 사안의 심대함을 감안하여 별도 목차 "마. 국방정보화카르텔 조작의 수학적 증명"(§3.4.5)을 통한 논리학적 진리함수표 분석으로 조작을 증명하고 있다.

## Key Takeaways

- 제58조 분리 원칙은 5년간(2015.1.27~2020.2.13) 안정적으로 유지되었다가 2020.6.4 제2436호에서 갑자기 통합 원칙으로 전환되었다 [진리성]
- 이 전환은 제2436호의 6대 앵커 조작 중 하나로서 (FR-L4-CLUSTER-2436), 독립적 시험평가의 본질을 파괴하는 개악이다 [타당성]
- "사업통제기관의 승인" 통제 메커니즘이 제거되고 "집행기관과 소요제기기관 협의"로 대체됨으로써 책임 소재가 모호해졌다 [타당성]
- 새 조항에서 "개발시험평가를 분리하여 수행하는 경우 집행기관(=국전원)의 책임하에" 수행한다는 예외 조항이 삽입됨으로써, 분리 수행 시 사업관리기관에 책임을 집중시키는 구조가 만들어졌다 [타당성]
- Article 58's 5-year stable separation principle was inverted to integration principle in the same 제2436호 revision that executed five other anchor manipulations [진리성]
- The book dedicates a separate mathematical proof chapter (§3.4.5, truth-function analysis) to demonstrate the non-natural character of this reversal [진리성]

## Supporting evidence

- **기록 제7,512쪽** — 제1775호 (2015-01-27) 제58조 원문: 분리 원칙 최초 확인
- **기록 제8,194쪽** — 제2398호 (2020-02-13) 제58조 원문: 분리 원칙 최종 유지 확인
- **제2436호 (2020-06-04)** — 통합 원칙으로 전환된 개정본 (본문기록-제4층위-020)
- Cross-reference: [[2436ho-test-evaluation-principle-inverted]] — 동일 사안의 제2436호 앵커 분석 원자

## Counter-hypothesis

1. **대안적 해석**: 통합 원칙으로의 전환은 국제적 추세(애자일 개발, DevOps)를 반영한 자연스러운 제도 현대화이며, KIATIS 사건과의 시기적 일치는 우연이다.
2. **반박 조건**: 2019년 이전(KIATIS 논란 이전)에 작성된 국방부 내부 정책 검토 문서에서 DT&E와 OT&E 통합을 일반적 제도 개혁으로 권고한 기록이 발견되면 이 주장은 약화된다.
3. **반대 입장**: 소규모 SW 사업에서 개발시험과 운용시험을 분리하는 것은 비효율적이며, 통합이 합리적인 선택일 수 있다.

## Falsification condition

KIATIS 논란 이전(2019년 이전)에 개발·운용시험평가 통합을 권고하는 국방부·합참·KIDA 등의 독립적 정책 연구 또는 내부 보고서가 발견되면 WEAKENED로 하향된다. 또한, 제2436호 개정의 입법 예고·의견 수렴 과정에서 시험평가 통합에 대한 전문가 자문 기록이 존재하면 "의도적 조작" 특성이 약화된다.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7. 5년간 안정적 유지 후 갑작스러운 180도 전환, 동일 제2436호에서의 6대 앵커 동시 조작(FR-L4-CLUSTER-2436), "사업통제기관" 통제 메커니즘의 제거, 그리고 본문 §3.4.5의 진리함수표 분석이 자연적 진화가 아닌 의도적 조작임을 강력히 지지한다. 기록 제7,512쪽과 제8,194쪽은 모두 L7 범위(5,300~13,495)에 속하여 Layer 7 증거 기록에서도 추적 가능하다.

## Open Questions

- §3.4.5의 수학적 증명(논리학 진리함수표 분석) 내용의 별도 원자 작성 필요
- 제2436호 개정의 국방부 내부 입법 절차(입법 예고, 법제 심사, 부서 합의) 기록 확보 필요
- 분리→통합 전환이 KIATIS 외 다른 사업에도 실제 영향을 미쳤는지 확인 필요

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` §3.4.4.4.3 lines 403–409 — 기록 제7,512쪽, 제8,194쪽 직접 인용 — CONFIRMED
- 분리 원칙 → 통합 원칙 전환 문구 — 제2436호 조문 대조 — CONFIRMED
- 본문기록-제4층위-020 참조 — CONFIRMED
- §3.4.5 수학적 증명 언급 — line 409 — CONFIRMED

## Related

- [[xsyn-directive-2436-retroactive-legal-basis|2 shared records — 제2436호 소급 법적 근거]] (RELATED)
- [[article-58-five-year-stability-then-reversal|2 shared records — 제58조 5년 안정성→역전]] (RELATED)
- [[2436ho-test-evaluation-principle-inverted]] — 제2436호 단위 앵커 분석 (동일 사안의 다른 시각) (CORROBORATES)
- [[2436ho-cluster-six-anchors]] — 제2436호 6대 앵커 동시 조작 메타 원자 (RELATED)
- [[kiatis-2129ho-main-regime-applies]] — KIATIS가 제58조 분리 원칙의 적용 대상이었음을 증명 (CORROBORATES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../regulations/defense-it-operations-directive-2129|훈령 제2129호]] (ABOUT)
