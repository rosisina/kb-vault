# 2016 해킹은 제44조 긴급 취약점 점검 조건 2개를 동시 충족 — KIATIS 점검 필수였다

**Source:** raw/09. 사이버안보 훈령(당시)/cyber security reguration.md 제44조 (lines 391-398)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-CSR-006"})
SET fr.layer = 1,
    fr.claimType = "procedural_duty",
    fr.claimDesc = "2016 해킹은 제44조 긴급점검 조건 2개 동시 충족. KIATIS 점검 미시행=은폐.",
    fr.counterHypothesis = "긴급 점검이 사이버사령부에 의해 실시되었으나 기밀이다",
    fr.falsificationCondition = "2016 해킹 후 발령된 긴급 취약점 점검 명령 또는 결과 보고서",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "STRONG",
    fr.truthfulness = 8,
    fr.validity = 10,
    fr.sincerity = 6,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "2016 해킹은 제44조 긴급점검 조건 2개 동시 충족. KIATIS 점검 미시행=은폐.";
```

## Claim

제44조 제2호 '사이버공격 징후가 탐지된 경우'와 제3호 '주요기반체계에 영향을 미칠 수 있는 취약점이 발견된 경우'에 따라, 2016년 북한 해킹 탐지 시 KIATIS를 포함한 DIDC 소관 전 체계에 대한 긴급 취약점 점검이 시행되어야 했다. 미시행은 제44조 위반이며 은폐 수단이다.

## Key Takeaways

- 2016 NK hacking satisfies two Art. 44 emergency triggers simultaneously [타당성]
- Emergency vulnerability check should have covered ALL DIDC-hosted systems including KIATIS [타당성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

긴급 점검이 사이버사령부에 의해 실시되었으나 기밀이다

## Falsification condition

2016 해킹 후 발령된 긴급 취약점 점검 명령 또는 결과 보고서

## Verdict

**NEEDS_MORE_EVIDENCE.** STRONG. 진리성 8 / 타당성 10 / 진실성 6.

## Spot-check

- `vault-converted-korean/cyber security reguration.md` lines 391-398

## Related

- [[didc-sop-12-incident-scene-preservation-mandatory]]
- [[xsyn-sop-incident-silence-equals-coverup-proof]]
- [[../layers/layer-1|Layer 1]]
