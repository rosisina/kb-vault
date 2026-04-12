# 제2436호 erases `사업관리기관 주관 하에` from the DT&E definition (A8b-sym)

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-A8b-sym-001"})
SET fr.layer = 4,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "regulatory_role_binding_erasure",
    fr.claimDesc = "제2436호 (2020-06-04) removed the clause '사업관리기관 주관 하에' from the DT&E definition in 제57조 ¶1 제1호 with no replacement, mirroring the simultaneous removal of '사업주관기관 주관 하에' from 제57조 ¶1 제2호 (the paired A8b atom). In the same revision, the DT&E result-judgment clause '합격 또는 불합격으로 결과를 판정할 것' was also deleted from 제1호 — the DT&E sub-clause was reduced from a bound-and-judged definition to a bare descriptive phrase",
    fr.counterHypothesis = "The 사업관리기관 binding was redundant given 제11조 assigns DT&E execution to the 사업관리기관 role; the deletion is a non-substantive de-duplication. The result-judgment clause deletion is a separate administrative simplification that moves result-judgment specification from 제57조 to 제60조 (DT&E execution)",
    fr.falsificationCondition = "Production of (a) any 제2436호-or-later directive provision explicitly binding DT&E execution to a named role-tier with force comparable to 'X 주관 하에', AND (b) any 제2436호-or-later directive provision restating the '합격 또는 불합격' result-judgment requirement for DT&E at the same normative level as the deleted 제57조 clause",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.strengthUpgrade = "MODERATE→STRONG via vault cross-reference corroboration (B.2 batch 2026-04-12)",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "DT&E role binding + result-judgment clause both deleted at 제2436호 from 제57조 ¶1 제1호, simultaneous with the OT&E symmetric deletion (A8b). Discovered during 2026-04-11 A.6 P6 blind re-measurement, which surfaced the DT&E-side symmetry that the original A8b atom did not capture";
```

## Claim

On 2020-06-04, 국방정보화업무 훈령 제2436호 removed **two** clauses from the DT&E definition in 제57조 ¶1 제1호:

1. The role-binding phrase `사업관리기관 주관 하에` — mirrors the simultaneous 제2호 deletion of `사업주관기관 주관 하에` (A8b).
2. The result-judgment clause `합격 또는 불합격으로 결과를 판정할 것`.

After the deletion, 제57조 ¶1 제1호 reads: `개발시험평가 : 체계규격서, 제안요청서 등을 기준으로 개발 소프트웨어의 기능적·설계적·통합적 관점에서 실시하는 평가` — bare descriptive phrase with no role-tier binding and no normative judgment requirement. The OT&E clause at 제2호 retains its result-judgment language (`군사용 적합 또는 부적합으로 판정할 것`) but loses its role binding.

The deletions persist through 제3080호 (2025-09-17).

## Key Takeaways

- 제2129호 제57조 ¶1 제1호: `개발시험평가 : 사업관리기관 주관 하에 … 실시하는 평가로서 **합격 또는 불합격으로 결과를 판정할 것**` [진리성]
- 제2436호 제57조 ¶1 제1호 (line 1683): `개발시험평가 : … 실시하는 평가` — **both** `사업관리기관 주관 하에` **and** `합격 또는 불합격으로 결과를 판정할 것` removed with no replacement [진리성]
- The DT&E-side erasure is **symmetric** with the A8b OT&E-side erasure but includes one additional deletion: the result-judgment clause. The DT&E sub-clause is reduced from a bound-and-judged definition to a bare descriptive phrase [진리성]
- Post-deletion, 제57조 ¶1 제1호 no longer textually requires DT&E to produce a `합격/불합격` verdict; the DT&E result-judgment requirement would have to be re-sourced from 제60조 or later articles — a separate question whose answer may have been affected by the parallel 제60조 deletion (A10) in the same revision [타당성]
- The simultaneous DT&E (제1호) + OT&E (제2호) role-binding deletion, combined with the modal change `구분한다 → 구분할 수 있다` and the 제60조 article-body deletion (A10), makes 제2436호 the single largest 제57–60 block revision in the entire 2017–2025 timeline [타당성]
- Verdict CORROBORATED (strength MODERATE); downgrades to NEEDS_MORE_EVIDENCE if 제60조 or another article explicitly restates the DT&E result-judgment requirement at the same normative level [타당성]

## Layer

[[../layers/layer-4|Layer 4]] — 新KIATIS 개발·운영·시험평가 전·중·후 조작. The 사업관리기관 was, under 제2129호, the 국전원-equivalent role responsible for managing the development project. Erasing the management-agency binding from the DT&E definition removes the textual hook that would force DT&E execution to be led by the entity with 국본 oversight authority. Combined with the parallel A8b OT&E deletion, the result is that **both** halves of the 시험평가 regime lose their role-binding anchors in a single revision.

## Supporting evidence

- **제2129호 (2018-02-05) 제57조 ¶1 제1호** (verbatim): `1. 개발시험평가 : **사업관리기관 주관 하에** 체계규격서, 제안요청서 등을 기준으로 개발 소프트웨어의 기능적·설계적·통합적 관점에서 실시하는 평가로서 **합격 또는 불합격으로 결과를 판정할 것**`
- **제2436호 (2020-06-04) 제57조 ¶1 제1호** (line 1683, verbatim from P6 blind re-measurement): `1. 개발시험평가 : 체계규격서, 제안요청서 등을 기준으로 개발 소프트웨어의 기능적·설계적·통합적 관점에서 실시하는 평가` — both clauses removed
- 제2576호, 제2649호, 제2842호, 제3080호: DT&E clause remains in the 제2436호 stripped form through 제3080호 (persists)
- P6 blind re-measurement also confirms the modal verb change at 제2436호: `구분한다 → 구분할 수 있다` in ¶1 opening
- See [[../regulations/defense-it-2129-article-57|제57조 page]]
- See [[2436ho-cluster-six-anchors|2436호 cluster]]
- See sister atom [[2436ho-otne-sponsor-binding-erased|A8b: OT&E sponsor binding erasure]]

## Counter-hypothesis

The 사업관리기관 role binding in 제57조 제1호 was redundant given that 제11조 already assigns DT&E execution responsibility to the 사업관리기관 role. Deleting the same binding from 제57조 is a non-substantive de-duplication. Separately, the `합격 또는 불합격` result-judgment clause was moved from the definitional article (제57조) to the execution article (제60조) as a drafting cleanup — the substantive requirement remains, it is just articulated in a different location.

## Falsification condition

This claim is **CORROBORATED** unless:

1. **A 제2436호-or-later directive provision explicitly binds DT&E execution** to a named role-tier with force comparable to `X 주관 하에`. (제2436호 제11조 ¶3 제4호 wording is the candidate but is substantively weaker per the A8b parent atom's analysis — `시험평가 주관 및 결과 판정` covers supervision and judgment but not the integrated execution binding.)
2. **A 제2436호-or-later directive provision restates the `합격 또는 불합격` result-judgment requirement for DT&E** at the same normative level as the deleted 제57조 clause. This should be cross-checked against the 제60조 article body in 제2436호 — but note that 제60조 itself was deleted at 제2436호 per the A10 atom, so the candidate replacement location may itself be absent.

If item 1 is produced, the verdict downgrades to WEAKENED. If item 2 confirms the result-judgment clause exists elsewhere, the verdict on the result-judgment sub-finding downgrades to WEAKENED while the role-binding erasure finding stands.

## Verdict

**CORROBORATED.** Moderate. The text-level erasures are verified by P6 blind re-measurement. The de-duplication counter-hypothesis on the role binding is the same as the A8b parent atom. The result-judgment relocation counter-hypothesis interacts with the A10 article-body erasure (제59·60·61조) — if 제60조 was deleted at 제2436호 as A10 claims, then the `합격/불합격` requirement cannot have been relocated there, and the result-judgment erasure stands independently.

## Open Questions

- Does any 제2436호-or-later article explicitly restate `합격 또는 불합격으로 결과를 판정할 것` for DT&E?
- Is the simultaneous A8b (OT&E) + A8b-sym (DT&E) + A10 (제59–61조 erasure) deletion pattern documented in the book as a single coordinated 제2436호 event, or treated as separate changes?
- Should the existing 6-anchor 제2436호 cluster atom `2436ho-cluster-six-anchors.md` be expanded to 7 anchors to include A8b-sym as a distinct movement from A8b?

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 (primary, contains 시험평가 구분 and 사업관리기관/사업주관기관 discussion)
- `vault-converted-english/14-3-4-34-Fourth-Layer.md` §3.4.4.2.3 — contains the Article 57 comparison discussion. **Note:** the book's Article 57 comparative table was shown by P6 blind re-measurement to omit the 제2398호 hedge insertion (see [[2398-2842ho-otne-environment-hedge-flipflop]] Book-side audit note); whether the table also undercaptures the DT&E-side symmetric deletion is an open question for the next A.6 Re-verify pass.
- Deferred to A.6 Re-verify.

## Related

- [[2436ho-otne-sponsor-binding-erased|A8b: OT&E sponsor binding erasure (parent / paired atom)]] (CORROBORATES)
- [[2436ho-cluster-six-anchors|2436호 cluster (should expand to 7 anchors to include A8b-sym)]] (SUPERSEDES)
- [[2436ho-test-evaluation-principle-inverted|A9: separation → integration principle inversion]] (CORROBORATES)
- [[2436ho-dtne-articles-erased|A10: 제59·60·61조 article body erasure]] (CORROBORATES)
- [[2398-2842ho-otne-environment-hedge-flipflop|A8a: environment hedge flip-flop]] (CORROBORATES)
- [[../regulations/defense-it-2129-article-57|제57조]] (ABOUT)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
