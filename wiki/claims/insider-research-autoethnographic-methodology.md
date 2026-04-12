# 피해 당사자의 4년간 1차 자료 수집·분석에 기초한 당사자 연구(insider research)

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/03-executive-summary--핵심-요약.md 핵심요약 §7 (lines 420-423)
**Layer:** [[../layers/layer-7|Layer 7]], [[../layers/layer-1|Layer 1]] (secondary), [[../layers/layer-2|Layer 2]] (secondary), [[../layers/layer-3|Layer 3]] (secondary), [[../layers/layer-4|Layer 4]] (secondary), [[../layers/layer-5|Layer 5]] (secondary), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-META-INSIDER-RESEARCH"})
SET fr.layer = 7,
    fr.claimType = "methodology_claim",
    fr.claimDesc = "당사자 연구. 4년 13,528쪽. 접근 역설: 표적만이 내부 프로세스 기록 가능.",
    fr.counterHypothesis = "피해자-조사자 이중 역할은 객관성이 결여되며 확인 편향을 완화할 수 없다",
    fr.falsificationCondition = "독립 외부 검토자가 동일 13,528쪽 분석으로 실질적으로 다른 결론 도달",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 5,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "당사자 연구. 4년 13,528쪽. 접근 역설: 표적만이 내부 프로세스 기록 가능.";
```

## Claim

본 연구는 피해 당사자가 4년간 직접 수집·분석한 1차 자료(기록 제1쪽~제13,528쪽)에 기초한 당사자 연구(insider research). 접근 역설(access paradox): 조직범죄의 표적만이 보이지 않게 설계된 내부 프로세스를 기록할 수 있다.

## Key Takeaways

- Insider research with unique access to invisible organizational processes [진리성]
- 4 years of primary data: Records 1-13,528 [진리성]
- Access paradox: only the target can document designed-to-be-invisible internal processes [진실성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

피해자-조사자 이중 역할은 객관성이 결여되며 확인 편향을 완화할 수 없다

## Falsification condition

독립 외부 검토자가 동일 13,528쪽 분석으로 실질적으로 다른 결론 도달

## Verdict

**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 7 / 타당성 5 / 진실성 10.

## Spot-check

- `vault-converted-korean/03-executive-summary--핵심-요약.md` lines 420-423

## Related

- [[seven-layer-proof-system-design-rationale]]
- [[../layers/layer-7|Layer 7]]
