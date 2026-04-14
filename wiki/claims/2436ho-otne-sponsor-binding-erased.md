---
lang: ko
title-ko: "제2436호 erases `사업주관기관 주관 하에` from the OT&E definition (A8b)"
title-en: ""
aliases:
  - FR-L4-A8b-001
  - "제2436호 erases `사업주관기관 주관 하에` from the OT&E"

layer: 4
secondary-layers: []
claimType: regulatory_manipulation
claimSubtype: regulatory_role_binding_erasure
fracture-type: F-MS
source-type: regulation

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: 2020-06-04

persons: []
organizations:
  - MND
  - 국유단
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/regulatory-manipulation
  - source/regulation
  - fracture/F-MS
  - org/MND
  - org/국유단
---
# 제2436호 erases `사업주관기관 주관 하에` from the OT&E definition (A8b)

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-A8b-001"})
SET fr.layer = 4,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "regulatory_role_binding_erasure",
    fr.claimDesc = "제2436호 (2020-06-04) removed the clause '사업주관기관 주관 하에' from the OT&E definition in 제57조 ¶1 제2호 with no replacement; OT&E execution becomes textually unbound from any named role-tier",
    fr.counterHypothesis = "The clause was redundant given that 제11조 already assigns OT&E execution responsibility to the 소요제기기관 (renamed sponsor role); the deletion is a non-substantive de-duplication",
    fr.falsificationCondition = "Production of any other 제2436호-or-later directive provision that explicitly binds OT&E execution to a named role with the same force as 'X 주관 하에' (i.e., binding the entire OT&E procedure, not just one of its sub-tasks)",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.strengthUpgrade = "MODERATE→STRONG via vault cross-reference corroboration (B.2 batch 2026-04-12)",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Clause removed at 제2436호 with no replacement; remains absent through 제3080호; the de-duplication counter-hypothesis requires verification of 제11조 substitute language";
```

## Claim

On 2020-06-04, 국방정보화업무 훈령 제2436호 removed the phrase `사업주관기관 주관 하에` from the OT&E definition in 제57조 ¶1 제2호. After the deletion, the OT&E definition no longer textually binds OT&E execution to any named role-tier within that article. The deletion is permanent through 제3080호 (2025-09-17).

## Key Takeaways

- 제2129호 제57조 ¶1 제2호 bound OT&E execution with `사업주관기관 주관 하에 실제 조성된…`; 제2436호 제57조 ¶1 제2호 (line 1685) removes `사업주관기관 주관 하에` with no replacement [진리성]
- The deletion persists through 제2576호 (line 1693), 제2649호 (line 1702), 제2842호 (line 1705), and 제3080호 (line 1663) — a monotonic, non-reverted erasure [진리성]
- Post-deletion, the OT&E definition no longer textually binds OT&E execution to the user agency that has operational stake in correctness (for KIATIS, the DMA) [타당성]
- The candidate replacement 제2436호 제11조 ¶3 제4호 `시험평가 주관 및 결과 판정` is substantively weaker than `주관 하에` — it covers supervision and result judgment but not the integrated execution binding [타당성]
- Verdict CORROBORATED (strength MODERATE); downgrades to NEEDS_MORE_EVIDENCE if Korean administrative-law reading judges `주관 및 판정` equivalent to `주관 하에` [타당성]

## Layer

[[../layers/layer-4|Layer 4]] — 新KIATIS 개발·운영·시험평가 전·중·후 조작. The 사업주관기관 was, under 제2129호, the user agency responsible for sponsoring the system being built (for KIATIS, this was the DMA — 국방 유해발굴사업단). Erasing the user-agency binding from the OT&E definition removes the textual hook that would force OT&E execution to be led by the entity that has operational stake in correctness.

## Supporting evidence

- 제2129호 (2018-02-05) 제57조 ¶1 제2호: `2. 운용시험평가 : **사업주관기관 주관 하에** 실제 조성된 기반운영 환경에서…`
- 제2436호 (2020-06-04) 제57조 ¶1 제2호 (line 1685): `2. 운용시험평가 : 실제 조성된 기반운영 환경에서…` — `사업주관기관 주관 하에` clause removed without replacement
- 제2576호 line 1693, 제2649호 line 1702, 제2842호 line 1705, 제3080호 line 1663: clause remains absent
- See [[../regulations/defense-it-2129-article-57|제57조 page]]
- See [[2436ho-cluster-six-anchors|2436호 cluster]]

## Counter-hypothesis

The clause was redundant. 제11조 (renamed in 제2436호 to 정보화기획관실 / 소요제기기관 / 집행기관) already assigns OT&E execution responsibility to the 소요제기기관 (the renamed sponsor-equivalent role). Deleting the same binding from 제57조 is a non-substantive de-duplication, not an erasure of accountability.

## Falsification condition

This claim is **CORROBORATED** unless one of the following is produced:

1. A 제2436호 (or any later) directive provision that **explicitly binds OT&E execution** to a named role-tier with force comparable to `X 주관 하에` (i.e., binding the entire OT&E procedure as a whole, not just sub-tasks like "test plan preparation" or "result reporting").
2. A reading of 제11조 ¶3 (소요제기기관 duties) under 제2436호 that contains an explicit OT&E execution binding equivalent to the deleted phrase. (제2436호 제11조 ¶3 제4호 reads `시험평가 주관 및 결과 판정` — this names "test evaluation supervision and result judgment" but the verbatim wording is weaker than the deleted `주관 하에` clause and is also less specifically about OT&E execution. Whether it is functionally equivalent is the substantive question.)

If item 1 is produced, the verdict downgrades to WEAKENED. If item 2 is judged equivalent on close reading, the verdict downgrades to NEEDS_MORE_EVIDENCE.

## Verdict

**CORROBORATED.** Moderate. The text-level erasure is verified; the de-duplication counter-hypothesis is plausible but the candidate replacement clause (제11조 ¶3 제4호 `시험평가 주관 및 결과 판정`) is substantively weaker — it covers supervision and result judgment but not the integrated execution binding that `주관 하에` provided. A targeted side-by-side comparison of the two clauses, ideally with academic Korean administrative law commentary on the legal weight of `주관 하에` vs. `주관 및 판정`, would resolve the verdict.

## Open Questions

- Does Korean administrative law treat `X 주관 하에` and `X가 주관 및 판정` as equivalent levels of role-binding, or are they distinguishable?
- Is the 제2436호 제11조 ¶3 제4호 substitute clause limited in scope (e.g., supervision only, not execution)?

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 (primary, contains 사업주관기관 주관 하에 verbatim discussion)
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6
- Deferred to A.6 Re-verify. The 제11조 ¶3 제4호 substitute-clause comparison should be cross-checked against the book's framing.

## Related

- [[2436ho-cluster-six-anchors|2436호 cluster (A8b participates)]] (SUPERSEDES)
- [[2398-2842ho-otne-environment-hedge-flipflop|A8a: environment hedge flip-flop (paired)]] (CORROBORATES)
- [[2436ho-gukjeonwon-role-tier-renaming|A2: role-tier renaming (provides the new vocabulary)]] (SUPERSEDES)
- [[../regulations/defense-it-2129-article-57|제57조]] (ABOUT)
- [[../entities/organizations/dma-defense-pow-mia-accounting-agency|DMA — KIATIS 사업주관기관]] (ABOUT)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
