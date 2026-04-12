# 제57조 ①항 2호의 훈령 세탁 — '사업주관기관 주관 하에' 삭제를 통한 책임 전가

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md §3.6.4.6.7 (lines 484-487)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-ARTICLE-57-DIRECTIVE-LAUNDERING"})
SET fr.layer = 6,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "directive_laundering",
    fr.claimDesc = "제57조의 '사업주관기관 주관 하에' 삭제 = 기관→개인 책임전가의 핵심 메커니즘. 시간역전으로 소급 조작.",
    fr.counterHypothesis = "'사업주관기관 주관 하에' 삭제는 행정 효율화 차원의 용어 정비이며 책임 전가 목적이 아니다",
    fr.falsificationCondition = "제2275호의 제57조 변경이 독립적 정책 검토에 의해 결정되었음을 보여주는 입법예고 또는 심의 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "제57조의 '사업주관기관 주관 하에' 삭제 = 기관→개인 책임전가의 핵심 메커니즘. 시간역전으로 소급 조작.";
```

## Claim

검찰단은 운용시험평가 정의에서 '사업주관기관 주관 하에'를 삭제한 조작 훈령(제2275호, 2019.5.9)을 기소의 법적 근거로 사용하였다. 이 삭제는 실제로는 제2436호(2020.6.4)에서야 최초 도입된 변경이며, 제2275호에서의 사전 등장은 시간역전을 통한 훈령 세탁(directive laundering)이다. '사업주관기관 주관 하에' 삭제는 기관 책임을 개인 책임으로 전환하는 핵심 조작이다.

## Key Takeaways

- Article 57(1)(2) was manipulated via the phantom directive 제2275호 to delete '사업주관기관 주관 하에' — erasing institutional accountability [타당성]
- This deletion is the mechanism that enables redirecting blame from the organization to an individual [타당성]
- The deletion only appeared in real directives from 제2436호 (2020-06-04) onward — its presence in 제2275호 (2019-05-09) is a time-reversal anomaly [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

'사업주관기관 주관 하에' 삭제는 행정 효율화 차원의 용어 정비이며 책임 전가 목적이 아니다

## Falsification condition

제2275호의 제57조 변경이 독립적 정책 검토에 의해 결정되었음을 보여주는 입법예고 또는 심의 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 10 / 진실성 8.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 484-487

## Related

- [[kiatis-phantom-directive-2275ho]] (RELATED)
- [[directive-article-11-control-functions-stripped]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
