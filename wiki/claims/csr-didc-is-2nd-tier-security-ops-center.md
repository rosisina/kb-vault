# DIDC는 국방사이버안보 훈령 제54조에 의한 '통합보안관제(2차)' 책임 부대 — 한지훈 아님

**Source:** raw/09. 사이버안보 훈령(당시)/cyber security reguration.md 제54조 제1항 제2호(나) (lines 494-496)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-4|Layer 4]] (secondary), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-CSR-002"})
SET fr.layer = 1,
    fr.claimType = "institutional_obstruction",
    fr.claimSubtype = "institutional_accountability",
    fr.claimDesc = "DIDC=통합보안관제(2차) 명시 지정. 보안 책임은 기관(DIDC)에 있지 개인(한지훈)에 없다.",
    fr.counterHypothesis = "KIATIS가 DIDC에 호스팅되지 않았거나 DIDC 관제 범위에서 제외되었다",
    fr.falsificationCondition = "DIDC 공식 보안관제 범위에서 KIATIS가 제외된 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "DIDC=통합보안관제(2차) 명시 지정. 보안 책임은 기관(DIDC)에 있지 개인(한지훈)에 없다.";
```

## Claim

제54조 제1항 제2호(나)는 국방통합데이터센터를 '통합보안관제(2차)' 책임 부대로 명시 지정. 업무대상은 '데이터센터 소관'. DIDC가 KIATIS를 포함한 소관 체계에 대한 보안관제 의무를 가졌으며, 한지훈 개인이 아닌 DIDC라는 기관이 보안 책임의 제도적 주체이다.

## Key Takeaways

- Art. 54 ¶1(2)(나) explicitly names DIDC as 2nd-tier security monitoring center for its hosted systems [타당성]
- DIDC — not 한지훈 — bore the institutional duty for cyber threat detection and response [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

KIATIS가 DIDC에 호스팅되지 않았거나 DIDC 관제 범위에서 제외되었다

## Falsification condition

DIDC 공식 보안관제 범위에서 KIATIS가 제외된 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 10 / 진실성 7.

## Spot-check

- `vault-converted-korean/cyber security reguration.md` lines 494-496

## Related

- [[didc-sops-cover-2016-hacking-period]] (RELATED)
- [[victim-blaming-structural-to-individual]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
