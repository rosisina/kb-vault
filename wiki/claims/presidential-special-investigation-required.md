# 기존 수사기관 한계로 대통령 특단의 조치 필요 — 진실규명위원회 또는 특별검사

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/15-5-5-결론-및.md §5.3.3 (lines 55-57)
**Layer:** [[../layers/layer-7|Layer 7]], [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L7-PRESIDENTIAL-INVESTIGATION"})
SET fr.layer = 7,
    fr.claimType = "methodology",
    fr.claimSubtype = "policy_claim",
    fr.claimDesc = "수사기관과 가해자의 구조적 이해충돌. 대통령급 개입(진실규명위·특별검사)과 국제적 관심 필요.",
    fr.counterHypothesis = "기존 기관(공수처, 감사원)이 적절히 활성화되면 충분한 독립성과 권한을 가진다",
    fr.falsificationCondition = "공수처 또는 감사원이 2017-2025 기간에 유사한 군 조직 은폐 사건을 성공적으로 수사한 기록",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 5,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "수사기관과 가해자의 구조적 이해충돌. 대통령급 개입(진실규명위·특별검사)과 국제적 관심 필요.";
```

## Claim

가해자들이 바로 수사기관들과 연결되어 있으므로 일반 수사기관으로는 한계가 있다. 진실규명위원회 설치나 특별검사 임명을 통한 완전 독립 조사가 필요하다. 공수처나 감사원도 정부 내 기관이므로 완전한 독립성 보장 어렵다. 유엔 인권위원회나 국제투명성기구 등 국제적 관심도 필요하다.

## Key Takeaways

- Normal investigative agencies face structural conflict of interest — perpetrators connected to those agencies [타당성]
- Presidential-level intervention required: truth commission or special prosecutor [타당성]
- International engagement proposed: UN Human Rights Council, Transparency International [진실성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

기존 기관(공수처, 감사원)이 적절히 활성화되면 충분한 독립성과 권한을 가진다

## Falsification condition

공수처 또는 감사원이 2017-2025 기간에 유사한 군 조직 은폐 사건을 성공적으로 수사한 기록

## Verdict

**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 5 / 타당성 7 / 진실성 9.

## Spot-check

- `vault-converted-korean/15-5-5-결론-및.md` lines 55-57

## Related

- [[han-ji-hoon-rebuttal-rejected-by-eight-institutions]] (OPPOSES)
- [[../layers/layer-7|Layer 7]] (PART_OF_LAYER)
