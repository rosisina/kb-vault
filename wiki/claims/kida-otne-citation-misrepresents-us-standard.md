# KIDA's citation of US DoD OT&E guidelines misrepresents the US standard by selective omission

**Source:** raw/04. law & regulation/English/(US Regulation) DOD Operational Test and Evaluation (OT&E) for Information and Business Systems(dod).converted.md, raw/01. book-beyond-cybersecurity/vault-legacy-wiki-english/Test-Evaluation-Manipulation.md (legacy summary, pending A.6 book compile for verbatim)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-KIDA-001"})
SET fr.layer = 4,
    fr.claimType = "academic_misrepresentation",
    fr.claimDesc = "KIDA's research report cited the 2010 US DoD Director of OT&E guidelines (Gilmore memo) as academic justification for DT&E/OT&E integration in defense information systems, but the cited US guidelines bound integration with five structural requirements (OTA-led risk stratification, mandatory independent operational events at Level II/III, mandatory DOT&E approval for MAIS programs, the irreversible-changes rule, and OTA independence from the developer) that, if applied to KIATIS, would have required Level II or Level III OT&E with an independent operational event led by a body equivalent to Korea's 사업주관기관",
    fr.counterHypothesis = "KIDA's report cited the integration permission within its full risk-based context, including the five structural requirements, and the integration justification was specific to genuinely Level I (low-risk) capabilities only — the citation is faithful and the application to KIATIS specifically is a separate question",
    fr.falsificationCondition = "Production of the KIDA research report's verbatim citation of the US guidelines, demonstrating that all five structural requirements (risk stratification, independent operational event mandate, DOT&E approval, irreversible-changes rule, OTA independence) are also presented",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "US text confirmed; KIDA report not yet located; verdict pending KIDA verbatim citation production. Foundation atom for the Layer 4 'fabricated academic justification' narrative.";
```

## Claim

KIDA's research report (per legacy summary in `raw/01.`'s vault-legacy wiki, pending verbatim from A.6 book compile) cited the 2010 US DoD Director of Operational Test and Evaluation memo *Guidelines for Operational Test and Evaluation of Information and Business Systems* (Michael Gilmore, 2010-09-14) as academic justification for DT&E/OT&E integration in KIATIS / in the broader Korean defense IT regime. This atom claims that the citation **misrepresents the US standard by category confusion**: the US document is an **OT&E-side authority document** (authored by DOT&E, the operational test executive) that permits OT&E to **reuse DT&E data** when risk-appropriate, not permission to merge DT&E and OT&E into a single test activity executed by a single body. The 제2129호 separation principle (KIATIS-applicable) **already encodes the US framework faithfully** in its 제58조 ¶2 structure; the framework KIDA's citation purports to support is therefore the framework Korea **already had** — not a justification for departing from it.

## Layer

[[../layers/layer-4|Layer 4]] — 新KIATIS 개발·운영·시험평가 전·중·후 조작. KIDA's alleged misrepresentation is the **academic foundation** that the book identifies as the legitimizing layer for the directive-level changes documented in [[2436ho-cluster-six-anchors|the 2436호 cluster]]. If the citation can be shown to misrepresent the US standard, the academic-justification scaffolding for the integration regime collapses.

## Supporting evidence

**US text (CORROBORATED):**

- US DoD memo 2010-09-14 explicitly permits integrated test approach as expected baseline: `It is expected a large portion of the test strategy for Information and Business Systems will utilize an integrated test approach.` ([[../regulations/us-dod-otne-info-business-systems-2010|US guidelines page §Verbatim citations]])
- US guidelines establish three OT&E levels (I/II/III) determined by **OTA-led** risk analysis with DOT&E approval for Applicable Programs (MAIS or under DOT&E oversight)
- US guidelines mandate **independent operational event** at Level II: `Level II OT&E - An evaluation that includes an independent operational event, which is carried out by typical users in an operationally realistic or representative environment`
- US guidelines mandate **DOT&E approval and most-comprehensive independent test** at Level III: `Level III OT&E - … an independent dedicated operational test. This is the highest level and most comprehensive of OT&E. DOT&E will approve the operational test plan.`
- US guidelines establish **irreversible-changes rule**: `Irreversible changes must be tested at OT&E level II or III.`
- US guidelines preserve **OTA structural independence** from program office, developer, and contractor at all three levels
- See [[../regulations/us-dod-otne-info-business-systems-2010|US DoD OT&E guidelines hub]]

**KIDA citation (NOT YET VERIFIED):**

- Per `raw/01. book-beyond-cybersecurity/vault-legacy-wiki-english/Test-Evaluation-Manipulation.md` (legacy summary): KIDA produced a research report that cited the US standard as authority for DT&E/OT&E integration
- Verbatim citation, report title, report date, and report author are all unknown pending A.6 book compile or direct location of the KIDA report in `raw/` or external sources
- See [[../entities/organizations/kida|KIDA hub]] §"Pending Phase A tasks"

**KIATIS structural facts (pre-existing CORROBORATED):**

- KIATIS = 6.25억 KRW pure software development service contract for the DMA (국방 유해발굴사업단) personnel/casualty information system
- KIATIS handles personnel and casualty data → likely "irreversible changes" under the US guidelines' rule (data corruption is non-rollback for human-record systems)
- KIATIS would qualify as an "Applicable Program" under the US framework structurally (MAIS-class)
- See [[kiatis-2129ho-main-regime-applies]] for the parallel Korean classification

## Counter-hypothesis

KIDA's report cited the integration permission within its full risk-based context. KIDA presented all five structural requirements (OTA-led risk stratification, independent operational event mandate at Level II/III, DOT&E approval, irreversible-changes rule, OTA independence), correctly identified that the US document is an OT&E-side authority addressing OT&E's permission to reuse DT&E data, and confined its integration justification to that specific data-reuse meaning. The integration justification was therefore academically faithful; the substantive question of whether KIATIS specifically qualifies for that data reuse is a separate question that does not impugn the citation.

**Corollary counter-hypothesis (added per James 2026-04-11 framing):** KIDA's report explicitly acknowledged that the 제2129호 제58조 ¶2 separation principle already encodes the US framework, and confined its argument to noting that the integration *exception* (the "필요시 동시에 실시" clause of ¶2) was the appropriate path for KIATIS. Under this counter-hypothesis, KIDA's report does not justify departing from 제2129호 — it justifies invoking ¶2's existing exception clause for KIATIS specifically. (If true, this would shift the falsifiable question from "did KIDA misrepresent the US text" to "did 사업통제기관 actually grant the 제58조 ¶2 written exception for KIATIS" — a different and answerable factual question.)

## Falsification condition

This claim is **NEEDS_MORE_EVIDENCE** until the KIDA report is produced and the following questions answered by direct text comparison:

1. **Does the KIDA report cite the OTA-led risk stratification structure?** If yes, the selective-omission charge is weakened on item 1.
2. **Does the KIDA report cite the Level II/III independent operational event mandate?** If yes, weakened on item 2.
3. **Does the KIDA report cite the DOT&E approval requirement for Applicable Programs?** If yes, weakened on item 3.
4. **Does the KIDA report cite the irreversible-changes rule?** If yes, weakened on item 4.
5. **Does the KIDA report explain that the OTA in the US framework is structurally distinct from the developer?** If yes, weakened on item 5.

If items 1–5 are all answered "yes" with substantive treatment, the verdict downgrades to WEAKENED. If items 1–5 are all answered "no" or "the report omits this", the verdict upgrades to CORROBORATED. Mixed answers require nuanced verdict drafting.

**Additional falsification path**: If KIDA's report cited the **2003 predecessor memo** (*Conducting OT&E of Software Intensive System Increments*, June 16, 2003) instead of or in addition to the 2010 memo, the comparator changes — the 2003 memo's text must be located and compared. The 2010 memo explicitly supersedes the 2003 memo, so a 2018-or-later KIDA citation of only the 2003 memo would itself be problematic.

## Verdict

**NEEDS_MORE_EVIDENCE.** Moderate. The US side of the comparison is now fully established (CORROBORATED). The KIDA side (the report's actual content) is unverified — the report has not been located in `raw/` or via external research. This atom is the placeholder that establishes (a) what the US standard actually says, (b) what the falsification test for KIDA's citation will be, and (c) what specific report content needs to be located before the verdict can be elevated.

This is a **structurally well-formed atom** (clear claim, clear counter-hypothesis, clear falsification condition) but **factually incomplete** (one of two textual referents missing). It demonstrates the value of separating comparator-establishment from citation-verification: the comparator work is now permanent and reusable, regardless of which specific KIDA report is eventually located.

## Open Questions

- **The book is the primary source for this topic.** Per James 2026-04-11, the KIDA citation contradiction is described in detail in `raw/01. book-beyond-cybersecurity/`. This atom is provisional and will be **rewritten against the book** during the planned raw/01-centered re-verification phase. Until then, the falsification structure above is the comparator-side framework only.
- Where is the KIDA research report? Pending: A.6 book compile may surface the citation; otherwise external Korean academic search (KIDA online publications) is the next step.
- Did MND or 국방부 검찰단 cite KIDA's report in any of the directive revisions or in the 2022 군 검찰 investigation file? If yes, KIDA's report becomes a chain-of-citation node, not just an academic artifact.
- Does the Korean defense informationization framework include a MAIS-equivalent designation that would map KIATIS onto the US "Applicable Program" category? If yes, the comparison becomes tighter.

## Spot-check (raw/01 book)

- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 (primary, KIDA's research role and the citation contradiction are described in detail per James 2026-04-11)
- `vault-converted-korean/11-3-5-35-제-5층위.md` — Layer 5
- `vault-converted-korean/15-5-5-결론-및.md` — Conclusion
- Deferred to A.6 Re-verify. **This atom's Open Questions explicitly note that the book is the primary source for this topic.** A.6 will likely supply the verbatim KIDA citation, the report's title/date/author, and the 2003-vs-2010 memo question — at which point the verdict should be re-derived from scratch against the book.

## Related

- [[../regulations/us-dod-otne-info-business-systems-2010|US DoD OT&E guidelines (comparator regulation hub)]]
- [[../entities/organizations/kida|KIDA hub]]
- [[2436ho-test-evaluation-principle-inverted|paired claim: 제2436호 inverted the Korean principle the KIDA citation legitimized]]
- [[2436ho-cluster-six-anchors|2436호 cluster (the directive event KIDA's citation justifies)]]
- [[kiatis-2129ho-main-regime-applies|KIATIS regulatory classification (the Korean side)]]
- [[../topics/test-evaluation-manipulation|Test Evaluation Manipulation]]
- [[../layers/layer-4|Layer 4]]
