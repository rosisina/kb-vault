# 2019.9.2 시험평가 절차 간소화 요청의 시간적 모순 — 시간 역전 조작의 증거

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md (book §3.4.7.1)
**Layer:** [[../layers/layer-4|Layer 4]] (primary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-012"})
SET fr.layer = 4,
    fr.claimType = "document_fabrication",
    fr.claimSubtype = "temporal_manipulation_document_forgery",
    fr.claimDesc = "On 2019-09-02, 이지영 (공문결재자-1) and 김수진 (행정담당자-1) at MND SW융합정책담당관 sent a 'test-evaluation procedure simplification plan review request' (Record No. 2,853–2,858). The test-evaluation ran 2019-09-02 to 2019-09-11, meaning the simplification request was sent ON THE SAME DAY the evaluation started — logically impossible as a genuine simplification measure. Furthermore, the document was reported to MND on 2019-09-03 (Record No. 2,858), one day AFTER its own production date, constituting temporal reversal forgery (시간 역전 조작). The clause 'if no objection, consent is assumed' was a device to neutralize the evaluation while maintaining procedural appearance.",
    fr.counterHypothesis = "The procedure simplification request was a routine administrative streamlining effort that coincidentally aligned with the evaluation start date, and the one-day date discrepancy was a clerical error.",
    fr.falsificationCondition = "Production of internal MND communications showing the simplification request was drafted and circulated well before 2019-09-02, proving it was not timed to coincide with the evaluation, or an audit trail explaining the 09-02/09-03 date discrepancy as a normal administrative process.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The 2019-09-02 procedure simplification request (Record No. 2,853–2,858) was sent on the same day 新KIATIS testing began, with an impossible 09-03 reporting date. This constitutes temporal reversal forgery — the document may have been fabricated during the 2022 military prosecution investigation period rather than on its stated date.";
```

## Claim

2019년 9월 2일, 국방부 소프트웨어융합정책담당관 이지영(공문결재자-1)과 김수진(행정담당자-1)이 "정보시스템 구축 시험평가 절차 간소화 추진 계획 검토 요청"(기록 제2,853쪽~제2,858쪽)을 발송했다. 이 문서에는 두 가지 시간적 모순이 존재한다:

1. **시험평가 시작 당일 간소화 요청**: 시험평가가 2019-09-02에 시작되어 09-11에 종료되는 상황에서, 시작 당일에 절차 간소화를 요청하는 것은 논리적으로 불가능하다. 시험평가의 승인 역할을 회피하기 위한 의도적 설계다.
2. **시간 역전**: 2019-09-02일에 생산된 문서가 미래인 2019-09-03일에 국방부에 보고(기록 제2,858쪽)된 것으로 기록되어 있다. 이는 문서가 기재된 날짜에 작성된 것이 아니라, 군 검찰단 수사 기간(2022년 1월~10월) 중에 조작되었을 가능성을 시사한다.

"의견이 없을 경우 추진 계획에 동의하는 것으로 간주"라는 문구는 형식적 절차 준수의 외피로 실질적 시험평가를 무력화하는 장치였다.

책(§3.4.7.1)은 이를 "인류 역사상 유례없는 시간 역전 조작의 결정적 증거"이자, 공문서 조작을 통해 "불가능을 가능으로 만드는 전대미문의 범죄"로 규정한다.

## Key Takeaways

- [진리성] 시험평가 시작일(2019-09-02)에 절차 간소화 요청을 발송한 사실은 기록 제2,853~2,858쪽에 기록되어 있다. The timing proves the request was not a genuine simplification effort but a device to neutralize the evaluation on its first day.
- [진리성] 문서 생산일(09-02)보다 미래 날짜(09-03)에 보고된 시간 역전은 문서 위조의 증거이며, 실제 조작 시점이 2022년 군 검찰 수사 기간일 가능성을 제기한다. The temporal reversal — a document reported on 09-03 that was produced on 09-02 — suggests fabrication during the 2022 prosecution investigation period.
- [타당성] "의견이 없을 경우 동의로 간주" 문구는 시험평가 승인 절차를 실질적으로 우회하는 장치이며, 훈령 제2129호의 시험평가 승인 체계에 반한다. The "silence equals consent" clause bypasses the mandatory approval process established by Directive 2129.
- [타당성] 新KIATIS 시험평가 계획이 국전원장에 의해 2019-08-29에 이미 승인되었으므로, 09-02 간소화 요청은 승인된 계획에 대한 사후 무력화 시도다. The simplification request came AFTER the evaluation plan was already approved on 2019-08-29, making it a post-hoc nullification attempt.
- [진실성] 공문서가 시간을 초월하여 조작될 수 있다면 어떤 공식기록도 신뢰할 수 없게 되며, 이는 대한민국 행정부 문서 체계에 대한 근본적 신뢰 훼손이다. If official documents can be temporally forged, no administrative record is trustworthy — a fundamental assault on democratic governance.

## Supporting evidence

- **기록 제2,853쪽~제2,858쪽** (Record No. 2,853–2,858 / L4 range) — "정보시스템 구축 시험평가 절차 간소화 추진 계획 검토 요청" 공문 원본
- **기록 제2,858쪽** (Record No. 2,858 / L4 range) — "정보시스템 구축 시험평가 절차 간소화 추진 계획" 국방부 보고 문서 (생산일보다 미래 날짜)
- **Book §3.4.7.1** verbatim: `시험평가 시작 당일에 맞춰 절차 간소화를 요청한다는 것은 그 목적이 절차 간소화에 있는 것이 아니라 국방부의 시험평가 승인의 역할을 회피함으로써 논리적으로 불가능하다.`
- **Book §3.4.7.1** — 국전원장의 2019-08-29 시험평가 계획 승인 사실 기술 (각주 310)

## Counter-hypothesis

시험평가 절차 간소화 요청은 국방부 전체 정보화 사업에 적용되는 일반적 행정 효율화 조치였으며, 新KIATIS 시험평가와의 시간적 일치는 우연이다. 09-02/09-03 날짜 차이는 공문 발송과 접수 사이의 정상적 행정 처리 시간이며 문서 위조가 아니다.

이 반가설이 성립하려면: (1) 해당 간소화 요청이 新KIATIS만이 아닌 복수의 사업에 동시에 적용된 범용 조치임을 보여주는 기록이 있어야 하며, (2) 09-02 발송 → 09-03 접수가 국방부 공문 처리의 표준 시간차임을 입증하는 행정 규정이나 선례가 있어야 하고, (3) 간소화 요청의 기안·검토가 2019-08 이전부터 진행되었음을 보여주는 내부 기록이 존재해야 한다.

## Falsification condition

1. **간소화 요청의 사전 기안·검토 기록** — 2019-09-02 이전에 해당 공문이 기안·검토되었음을 보여주는 결재 이력.
2. **범용 적용 증거** — 동일한 간소화 요청이 新KIATIS 외 다른 정보화 사업에도 동시에 적용되었음을 보여주는 공문.
3. **09-02/09-03 날짜 차이에 대한 행정적 설명** — 국방부 전자문서시스템에서 발송일과 보고일이 1일 차이가 나는 것이 정상적임을 보여주는 시스템 로그나 규정.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8. 시험평가 시작 당일의 간소화 요청은 시간적으로 정상적 행정 행위가 될 수 없으며, 문서의 시간 역전(09-02 생산 → 09-03 보고)은 물리적으로 설명 불가능한 조작의 증거다. 타당성 점수가 높은 이유는 이미 08-29에 승인된 시험평가 계획이 존재하므로 간소화 요청의 법적 효력 자체가 의문시되기 때문이다. 책의 "2022년 수사 기간 중 조작 가능성" 제기는 추가 검증이 필요하나, 시간적 모순 자체는 독립적으로 증명된다.

## Open Questions

- 책(§3.4.7.1, 각주 310)은 이 간소화 공문이 "설사 조작이 아니더라도 유효하지 않은 공문서"라고 지적한다: 국전원장이 2019-08-29에 이미 시험평가 계획을 승인했기 때문이다. 이 논점은 간소화 요청의 유효성 자체를 별도로 검토할 필요가 있다.
- "여러 공문이 조작된 것을 보여주고 그 지향의 시기를 함께 증거에 의해 제시한다" — 책이 언급하는 다른 조작 공문 목록을 별도 원자에서 체계적으로 정리할 필요가 있다.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` — §3.4.7.1: 기록 제2,853~2,858쪽 인용 확인. 이지영(공문결재자-1)·김수진(행정담당자-1) 역할 앵커 확인. 시험평가 기간 2019-09-02~09-11 기술 확인. 09-03 시간 역전 기술 확인. 각주 310의 국전원장 08-29 승인 사실 확인.

## Related

- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../entities/people/lee-ji-young|이지영 (공문결재자-1)]] (ABOUT)
- [[../entities/people/kim-su-jin|김수진 (행정담당자-1)]] (ABOUT)
- [[layer4-test-evaluation-separation-principle-directive-2129|훈령 제2129호 시험평가 분리 원칙]] (RELATED)
- [[layer4-activex-removal-request-during-evaluation-conspiracy|평가 중 Active-X 제거 요청과 국유단장 승인의 모의]] (RELATED)
- [[mnd-test-evaluation-improvement-retroactive-justification|시험평가 개선 사후 정당화]] (RELATED)
