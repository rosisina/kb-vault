# 군검찰단 참고인 명단 자체가 카르텔 구성원 식별의 핵심 증거

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/15-5-5-결론-및.md §5.3.4 (lines 60-65)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-7|Layer 7]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-WITNESS-LIST-CARTEL-ID"})
SET fr.layer = 6,
    fr.claimType = "evidentiary_claim",
    fr.claimDesc = "검사의 '다 불렀다' 발언(Record 11,162)이 참고인 명단=카르텔 조직도임을 시인.",
    fr.counterHypothesis = "참고인 소환은 표준 수사 절차이며 카르텔 구성원 식별과 무관하다",
    fr.falsificationCondition = "참고인 명단에 한지훈 입장을 지지하거나 검찰 서사에 반하는 증언을 한 인원이 포함되어 있었음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 5,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "검사의 '다 불렀다' 발언(Record 11,162)이 참고인 명단=카르텔 조직도임을 시인.";
```

## Claim

군검찰단이 참고인으로 소환한 인원들의 명단 자체가 카르텔 주동자이거나 동조세력을 식별하는 핵심 증거다. 2022.10.11 검사의 '관련 있는 사람은 다 불렀거든요'(기록 제11,162쪽) 발언이 이를 확인한다.

## Key Takeaways

- The prosecution's own witness list is self-incriminating — those summoned are cartel principals or sympathizers (Record 11,162) [진리성]
- Prosecutor's admission 'we called everyone related' inadvertently confirms the coordinated network scope [진리성]

## Supporting evidence

- **Record No. 11,162**

## Counter-hypothesis

참고인 소환은 표준 수사 절차이며 카르텔 구성원 식별과 무관하다

## Falsification condition

참고인 명단에 한지훈 입장을 지지하거나 검찰 서사에 반하는 증언을 한 인원이 포함되어 있었음을 보여주는 기록

## Verdict

**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 7 / 타당성 5 / 진실성 8.

## Spot-check

- `vault-converted-korean/15-5-5-결론-및.md` lines 60-65

## Related

- [[prosecution-principal-actor-in-cartel]]
- [[kim-min-su-central-cross-layer-cartel-figure]]
- [[../layers/layer-6|Layer 6]]
