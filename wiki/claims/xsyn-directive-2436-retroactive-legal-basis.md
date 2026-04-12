# 제2436호 개정일(2020.6.4)이 행위시점(2019.9) 이후 — 검찰이 사후 법적 근거를 인용

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md 제58조 (lines 1677-1691)
**Layer:** [[../layers/layer-4|Layer 4]], [[../layers/layer-6|Layer 6]] (secondary), [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-XSYN-2436-RETROACTIVE"})
SET fr.layer = 4,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "cross_source_synthesis",
    fr.claimDesc = "3소스 삼각확인: 행위(2019.9) 후 도입된 법(2020.6)을 검찰이 소급 인용. 시간적 불가능.",
    fr.counterHypothesis = "검찰은 불기소이유서 작성 시점(2022)의 현행법을 적용한 것이며, 행위시법 적용은 별개 법적 쟁점이다",
    fr.falsificationCondition = "검찰이 행위시법(2019 시점 제2129호/제2263호)을 분석하고도 동일 결론에 도달하였음을 보여주는 법적 검토 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "3소스 삼각확인: 행위(2019.9) 후 도입된 법(2020.6)을 검찰이 소급 인용. 시간적 불가능.";
```

## Claim

검찰 불기소이유서(raw/05)는 제58조 ¶4를 인용하여 DT/OT 통합의 정당성을 주장하나, 이 '통합 원칙'은 제2436호(2020.6.4)에서야 도입. KIATIS 시험평가는 2019.9.2~11 실시. 검찰이 인용한 법적 근거가 행위 시점에 존재하지 않았다. 훈령 이력(raw/04), 검찰 문서(raw/05), 책 분석(raw/01 §3.4.7.3)의 세 소스가 동일한 시간적 모순을 삼각 확인.

## Key Takeaways

- Prosecution cited a legal basis (제2436호 integration principle) that did not exist at the time of the alleged crime (2019.9) — temporal impossibility [타당성]
- Three sources triangulate: directive history, prosecution document, book analysis [진리성]

## Supporting evidence

- **Record No. 1,253**
- **Record No. 7,512**
- **Record No. 8,194**

## Counter-hypothesis

검찰은 불기소이유서 작성 시점(2022)의 현행법을 적용한 것이며, 행위시법 적용은 별개 법적 쟁점이다

## Falsification condition

검찰이 행위시법(2019 시점 제2129호/제2263호)을 분석하고도 동일 결론에 도달하였음을 보여주는 법적 검토 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 10 / 타당성 10 / 진실성 8.

## Spot-check

- `vault-converted-korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md` lines 1677-1691

## Related

- [[article-58-separation-to-integration-2020-directive-manipulation|2 shared records — 제58조 분리→통합 역전]] (RELATED)
- [[2436ho-cluster-six-anchors]] (CAUSES)
- [[2436ho-test-evaluation-principle-inverted]] (RELATED)
- [[prosecution-misapplies-2129-article-58-4-to-kiatis]] (CAUSES)
