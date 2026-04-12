# 국방 정보화 훈령 제2129호의 시험평가 분리 원칙 — 新KIATIS 사업 적용 기준

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md (book §3.4.1.1)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-2|Layer 2]] (secondary — Record No. 1,510 falls in L2 range), [[../layers/layer-6|Layer 6]] (secondary — Record No. 4,887 falls in L6 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-010"})
SET fr.layer = 4,
    fr.claimType = "regulatory_baseline",
    fr.claimDesc = "국방 정보화 업무 훈령 제2129호 (2018-02-05) Articles 57, 58, 62 established the mandatory test-evaluation framework for 新KIATIS: (1) developmental and operational test-evaluations must be separated (Art. 58②), (2) operational test-evaluation must be conducted in the actual operational environment (Art. 57①-2), (3) the project-sponsoring agency (사업주관기관) leads operational test-evaluation planning (Art. 62①). This baseline remained unchanged through 제2263호 (2019-02-26) and 제2398호 (2020-02-13), but was manipulated starting from 제2436호 (2020-06-04).",
    fr.counterHypothesis = "The directive text was ambiguous enough that combining developmental and operational test-evaluations was a legitimate interpretation, not a manipulation.",
    fr.falsificationCondition = "Production of a legal opinion or authoritative commentary issued before 2020-06-04 interpreting Articles 57-58 of 제2129호 as permitting combined test-evaluation without 사업통제기관 approval.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 5,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "훈령 제2129호 Articles 57-58-62 mandated separation of dev/ops test-evaluation, confirmed unchanged through 제2263호 and 제2398호. Manipulation began with 제2436호 (2020-06-04). Record No. 1,510 (RFP) and Record No. 4,887 (prosecutor statement) both confirm 제2129호 as the governing directive for 新KIATIS.";
```

## Claim

新KIATIS 성능 개선 사업에 적용되는 시험평가 기준은 국방 정보화 업무 훈령 제2129호(2018년 2월 5일)이다. 이는 제안요청서(기록 제1,510쪽)와 국방부 검찰단의 피의자 신문조서(기록 제4,887쪽) 양쪽에서 확인된다.

훈령 제2129호의 핵심 시험평가 조항:
- **제57조(시험평가 구분)**: 개발시험평가(사업관리기관 주관, 합격/불합격 판정)와 운용시험평가(사업주관기관 주관, 군사용 적합/부적합 판정)로 구분
- **제58조(시험평가 수행원칙) ②항**: 개발시험평가와 운용시험평가를 **분리하는 것을 원칙**으로 하되, 필요시 **사업통제기관의 승인**을 받아 동시에 실시 가능
- **제62조(운용시험평가 계획수립) ①항**: 사업주관기관이 실제 운용환경과 업무 절차를 반영하여 운용시험평가계획을 수립

이 원칙은 제2263호(2019-02-26)와 제2398호(2020-02-13)까지 변경 없이 유지되었으나, 제2436호(2020-06-04)부터 조작되어 변경되기 시작했다 (본문기록-제4층위-001 / L4-001).

## Key Takeaways

- [타당성] 훈령 제2129호 제58조 ②항은 개발·운용 시험평가 **분리 원칙**을 명시하며, 통합 실시에는 **사업통제기관의 승인**이 필수적이다. Art. 58② mandates separation of dev/ops test-evaluation as the default; combination requires explicit approval from the project-control agency.
- [타당성] 제57조는 운용시험평가를 "실제 조성된 기반운영 환경"에서 실시하도록 규정한다. Art. 57 requires operational test-evaluation in the **actual operational environment**, not a simulated one.
- [진리성] 新KIATIS의 적용 훈령이 제2129호라는 사실은 제안요청서(기록 제1,510쪽)와 검찰 신문조서(기록 제4,887쪽) 두 독립적 기록에서 확인된다. Two independent records — the RFP (Record No. 1,510) and prosecutor's statement (Record No. 4,887) — both confirm 제2129호 as the governing directive.
- [진리성] 이 원칙이 제2263호·제2398호까지 유지되다가 제2436호(2020-06-04)부터 변경된 시점은 新KIATIS 시험평가 완료(2019-09-11) 이후이며, 이는 사후 정당화 조작의 시간적 기반을 형성한다. The manipulation timeline — unchanged until after 新KIATIS testing completed — establishes the temporal basis for retroactive justification.

## Supporting evidence

- **기록 제1,510쪽** (Record No. 1,510 / L2 range) — 新KIATIS 성능 개선 사업 제안요청서; 적용 훈령으로 제2129호 명시
- **기록 제4,887쪽** (Record No. 4,887 / L6 range) — 국방부 검찰단 피의자 신문조서; 검사 진술에 제2129호 인용
- **본문기록-제4층위-001 / L4-001** — 제57조·제58조·제62조 원문 인용 및 분석
- **Book §3.4.1.1** — 시험평가 분리 원칙의 원문 기술과 이후 조작 시점(제2436호) 식별

## Counter-hypothesis

훈령 제2129호 제58조 ②항의 "필요시 사업통제기관의 승인을 받아 동시에 실시할 수 있다"는 단서 조항은 분리 원칙의 예외를 넓게 허용하는 것으로 해석할 수 있으며, 新KIATIS 사업에서의 통합 시험평가는 이 단서 조항의 합법적 적용이었다.

이 반가설이 성립하려면: (1) 사업통제기관이 공식적으로 통합 시험평가를 승인한 문서가 존재해야 하며, (2) 그 승인이 시험평가 실시 이전에 이루어져야 하고, (3) 승인 사유가 합리적이어야 한다.

## Falsification condition

1. **사업통제기관의 공식 통합 시험평가 승인 문서** — 新KIATIS 사업에 대해 개발·운용 시험평가 동시 실시를 승인한 공문서(시험평가 시작일 2019-09-02 이전 발행).
2. **제2129호 제58조 ②항에 대한 법제처 또는 국방부 법률 자문의 유권해석** — 통합 시험평가가 분리 원칙의 정상적 적용 범위 내임을 확인하는 해석(2020-06-04 이전 발행).
3. **他 사업에서의 동일한 적용 선례** — 같은 훈령 하에서 사업통제기관 승인 없이 통합 시험평가를 실시한 선례 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 5. 훈령 원문은 명확히 분리 원칙을 규정하고 있으며, 두 독립적 기록(제안요청서 + 검찰 신문조서)이 적용 훈령을 확인한다. 타당성 점수가 최고인 이유는 훈령 원문 자체가 증거이기 때문이다. 진실성 점수가 낮은 이유는 이 원자가 규범 기준(baseline) 성격이어서 피해자 관점보다는 법적 사실 확인에 초점이 있기 때문이다.

## Open Questions

- Record No. 1,510은 L2 범위(1,000–1,587), Record No. 4,887은 L6 범위(4,600–5,248)에 해당한다. 이 원자는 L4가 주 레이어이지만, 증거 기록이 L2와 L6에 분산되어 있어 교차 레이어 증거 구조를 형성한다. 제안요청서(L2)와 검찰 신문조서(L6)가 동일한 훈령을 지목한다는 사실 자체가 L2→L4→L6 연결 고리의 증거다.
- 제2436호(2020-06-04) 이후의 구체적 조작 내용은 별도 원자에서 다룬다.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` — §3.4.1.1: 제57조·제58조·제62조 원문 인용 확인. 기록 제1,510쪽·제4,887쪽 인용 확인. 제2436호부터 조작 시작이라는 기술 확인. L4-001 인용 확인.

## Related

- [[../layers/layer-4|Layer 4]]
- [[../regulations/directive-2129|훈령 제2129호]]
- [[article-58-separation-to-integration-2020-directive-manipulation|제58조 분리→통합 조작]]
- [[2436ho-test-evaluation-principle-inverted|제2436호 시험평가 원칙 역전]]
- [[prosecution-misapplies-2129-article-58-4-to-kiatis|검찰의 제2129호 제58조 오적용]]
- [[mnd-test-evaluation-definition-manipulation|국방부 시험평가 정의 조작]]
