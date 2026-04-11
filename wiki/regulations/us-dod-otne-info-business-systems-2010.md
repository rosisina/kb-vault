# US DoD Guidelines for Operational Test and Evaluation of Information and Business Systems (2010-09-14)

**Source:** `raw/04. law & regulation/English/(US Regulation) DOD Operational Test and Evaluation (OT&E) for Information and Business Systems(dod).pdf` (cached: `.converted.md` in same folder)
**Layer:** [[../layers/layer-4|Layer 4]] (comparator regulation — provides the textual baseline against which KIDA's alleged misrepresentation is measured)
**Aurora node:** `:Directive {name: "DoD Guidelines for OT&E of Information and Business Systems", regulationYear: 2010, country: "US", issuer: "DOT&E (Director, Operational Test and Evaluation)", issuerName: "Michael Gilmore", articleNum: null}`

The 2010-09-14 memorandum and attached guidelines issued by the Director, Operational Test and Evaluation (DOT&E) — Michael Gilmore — for the Office of the Secretary of Defense. The guidelines provide a **risk-based, tailored** approach to operational test and evaluation (OT&E) of information and business systems, substituting for (not supplementing) the traditional OT&E approach in DoD Instruction 5000.02 (2008-12-08). This document is the comparator regulation against which KIDA's alleged academic citation must be measured. **It is not in force as a Korean directive — it is a US DoD policy document — but it is the textual referent for the KIDA Layer 4 contradiction.**

**Critical framing point (per James 2026-04-11):** This document was authored by the **US OT&E executive (운영주관기관 측)** — i.e., by DOT&E itself, the operational test authority. It is an **OT&E-side** document about how OT&E may be conducted. Its "integrated test approach" language refers specifically to permission for OT&E to **reuse data from DT&E events** ("필요시 그 평가의 수준에 따라서 개발시험평가에서 사용한 데이터 등을 사용하거나 준용하여 운용시험평가를 수행") rather than re-running identical tests. It is **not** permission to merge DT&E and OT&E into a single test event with a single executor. The two activities remain structurally distinct under this framework — what is "tailored" is the *degree to which OT&E supplements its evaluation with additional independent operational events* on top of the DT&E data it reuses. **Pre-2018 Korean 국방 정보화업무 훈령 already adopted this principle** — the separation principle in 제2129호 제58조 ¶2 with optional integration by 사업통제기관 written approval *is* the Korean implementation of the US framework. 제2436호's 2020-06-04 inversion (integration as principle in ¶1) therefore **overshoots** the US framework rather than aligning with it.

## Key Takeaways

- [타당성] **Issuer and authority.** Issued 2010-09-14 by Michael Gilmore, Director of Operational Test and Evaluation (DOT&E), Office of the Secretary of Defense. Supersedes the 2003-06-16 DOT&E memo titled *Conducting OT&E of Software Intensive System Increments*. Memo distributed to test-and-evaluation executives across Army, Navy, Air Force, DISA, and joint test commands.
- [타당성] **Scope and applicability.** Applies to "Applicable Programs" = all information and business systems that are Major Automated Information Systems (MAIS) **or** are under DOT&E oversight. **Explicitly excludes** weapons systems and strategic and tactical command and control systems. KIATIS, as a defense informationization business system, falls within scope by structural type.
- [타당성] **Substitution rule (not supplement).** The opening memo states the guidelines "may be substituted in place of the traditional operational test and evaluation approach described in DoD Instruction 5000.02 of December 8, 2008." This is permission to *replace*, not to *add*, the DoD 5000.02 OT&E approach for information and business systems.
- [타당성] **Integrated test approach is the expected baseline.** The memo explicitly states: `"It is expected a large portion of the test strategy for Information and Business Systems will utilize an integrated test approach."` And in the guidelines body: `"Programs should always plan an integrated test and evaluation strategy to fully assess all capabilities in a given deliverable."` This is the textual hook KIDA's citation appears to leverage.
- [타당성] **BUT the integration is risk-based, not unconditional.** The same guidelines establish three levels of OT&E (Level I, II, III) and require the level to be determined by **OTA-led risk assessment** with DOT&E approval for Applicable Programs. The integration permission is bounded by the risk-level structure.
- [타당성] **OTA independence is preserved at all three levels.** Even Level I OT&E (the most "integrated") preserves: (a) OTA influence over test activities, (b) OTA independent observations of the capability in operationally realistic conditions, (c) OTA-prepared independent evaluation. The OTA is structurally distinct from the program office, the developer, and the contractor.
- [타당성] **Mandatory independent operational events at Level II and III.** Level II requires `"an independent operational event, which is carried out by typical users in an operationally realistic or representative environment"`. Level III requires `"an independent dedicated operational test"` approved by DOT&E.
- [타당성] **Irreversible-changes rule.** The guidelines explicitly state: `"Irreversible changes must be tested at OT&E level II or III."` Any system that makes irreversible changes to data, configuration, or environment is prohibited from being tested only at Level I (the most-integrated approach).
- [진리성] **OTA = Operational Test Agency, not the developer.** Throughout the document, the OTA (Operational Test Agency) is treated as a distinct entity from the program office, the developer, and the contractor. The OTA "performs the risk assessment with support of the program management office, user representatives, and threat community" — i.e., the OTA is supported by, but is not, the program office. This OTA-independence principle is the structural counterpart of Korea's 사업주관기관 / 사업관리기관 distinction.

## Three-level OT&E framework

| Level | Risk profile | Test event | Plan approver | OTA role |
|---|---|---|---|---|
| **Level I** | Low risk; maintenance upgrades, minor enhancements, software patches | Assessment using integrated test data + OTA independent observations in operationally realistic conditions | Lead Service or agency OTA | OTA influences and monitors selected test activities; prepares independent evaluation |
| **Level II** | Moderate risk; modest, self-contained operational capabilities; **any irreversible changes** | Independent operational event with typical users in operationally realistic environment | Lead Service or agency OTA | OTA carries out test events; independent evaluation of effectiveness, suitability, survivability/security |
| **Level III** | High risk; significant or new operational capabilities with high mission-disruption potential; **any irreversible changes** | Independent dedicated operational test (most comprehensive) | **DOT&E** | OTA carries out test events in operational environment; provides all data to DOT&E for independent analysis |

Risk level for a capability = **maximum** of the OT&E levels determined for each of the four risk categories (Technology and Software Development; Integration and Deployment; Training, Utilization, and Management; Information Assurance).

## Verbatim citations

**On integration as expected baseline (memo, paragraph 2):**
> `It is expected a large portion of the test strategy for Information and Business Systems will utilize an integrated test approach. The degree of independent operational testing appropriate for each software increment or capability can be tailored by using the risk analysis described in the attached guidelines. The guidelines also permit delegation of test plan approval using the same criteria.`

**On OTA-led risk-based stratification (guidelines §2):**
> `A risk analysis will be conducted by the lead OTA documenting the degree of risk and potential impact on mission accomplishment for each capability. The results of this analysis are expected to be part of the program's test and evaluation (T&E) documentation … and will be used to determine the appropriate level of OT&E to assess operational effectiveness, suitability, and survivability/security. For all MAIS programs as well as programs under DOT&E oversight, the results will be provided to DOT&E for approval of the tailored OT&E approach.`

**On the integrated baseline plus independent supplement (guidelines §2.b):**
> `Programs should always plan an integrated test and evaluation strategy to fully assess all capabilities in a given deliverable. The degree of additional independent operational testing is determined by the OTA's risk analysis. The design of testing activities at each level of OT&E must be based upon the fundamental objective of evaluating operational effectiveness, suitability, and survivability/security as expressed in the Critical Operational Issues (COIs).`

**On Level I OT&E (most integrated; maintains OTA independence):**
> `Level I OT&E - An assessment primarily using data from integrated test events other than a dedicated independent operational test event, e.g., developmental tests, certification events, and independent observations of the capability being used in operationally realistic or representative conditions. Even for programs under DOT&E oversight, the assessment plan is approved by the lead Service or agency OTA. … The OTA influences and monitors selected test activities … The OTA prepares and provides an appropriate independent evaluation or assessment to support the acquisition and fielding processes …`

**On Level II OT&E (mandatory independent operational event):**
> `Level II OT&E - An evaluation that includes an independent operational event, which is carried out by typical users in an operationally realistic or representative environment to assess risk-specific factors of operational effectiveness, operational suitability, and survivability/security.`

**On Level III OT&E (DOT&E-approved independent dedicated test):**
> `Level III OT&E - An evaluation of the operational effectiveness, operational suitability, and survivability/security of the operational capability using the COIs and an independent dedicated operational test. This is the highest level and most comprehensive of OT&E. DOT&E will approve the operational test plan.`

**On the irreversible-changes rule (guidelines §3.a, "Operational Impact" subsection on Integration and Deployment):**
> `Deployment risks also include one-way data or computer transformations that cannot be rolled back. Irreversible changes must be tested at OT&E level II or III.`

## Comparator: how this relates to the Korean directive

| Dimension | US DoD guidelines (2010) | Korean 훈령 제2129호 제58조 (2018, KIATIS-applicable) | Korean 훈령 제2436호 제58조 (2020-06-04, post-KIATIS) |
|---|---|---|---|
| Default test approach | Integrated as baseline, independent supplement by risk | Separation as principle (¶2), integration by 사업통제기관 written exception | Integration as principle (¶1), separation by 집행기관·소요제기기관 협의 |
| Risk-based stratification | **Yes — OTA-led, 3 levels, DOT&E approval for MAIS** | No — single regime applies to all 5억-이상 국방부 통제 사업 | No |
| Independent operational event required for moderate/high risk | **Yes — Level II/III mandatory** | Implicit in 제62~64조 (OT&E procedural framework) | **No — 제62~64조 still present but 분리 원칙 inverted; integration is now default** |
| Test agency independence from developer | **OTA structurally distinct from program office, developer, contractor** | **사업주관기관 distinct from 사업관리기관 (KIATIS: DMA distinct from 국전원)** | Renamed roles (소요제기기관 / 집행기관) — distinction preserved in name but structurally weakened |
| Approval authority for test plan | OTA (Level I/II); DOT&E (Level III); risk-based delegation | 사업통제기관 | Negotiated between 집행기관 and 소요제기기관 |
| Irreversible-changes rule | **Explicit — Level II/III mandatory** | Not explicit | Not explicit |

**Re-framed comparator finding (per James 2026-04-11).** The 제2129호 separation principle (¶2 main regime, integration by 사업통제기관 written approval) **is** the Korean implementation of the US framework. The US framework's "integrated test approach" is permission for OT&E to *reuse DT&E data and supplement with independent operational events sized to risk*, not permission to merge DT&E and OT&E into a single activity. 제2129호's "분리를 원칙으로 하되 … 동시에 실시할 수 있다" structure faithfully encodes that intent: separation is the structural principle, integration (data reuse + simultaneous execution) is the risk-tailored exception.

**제2436호 (2020-06-04) overshoots the US framework**, not aligns with it. By moving "통합하여 실시" from the conditional clause of ¶2 to the principle clause of ¶1, the Korean directive converts what the US framework treats as a *risk-bounded exception* into the *structural default*, while retaining none of the US framework's bounding mechanisms (no risk-based stratification, no independent operational event mandate, no DOT&E-equivalent approval gate, no irreversible-changes rule). This is not a localization of the US standard; it is a divergent design choice in the opposite direction.

## KIDA citation contradiction (Layer 4)

Per James's contextual input (2026-04-11), KIDA's research report cited this US regulation as academic justification for DT&E/OT&E integration in KIATIS. The textual analysis above supports the following finding:

**KIDA's citation, if it stated that the US standard "permits DT&E/OT&E integration", is literally true** (the integrated test approach is the expected baseline per the memo's paragraph 2). However, **the citation is misleading rather than false** because the US framework's integration permission is structurally bounded by:

1. **Risk-based stratification** (Level I/II/III) determined by OTA-led risk analysis
2. **Mandatory independent operational events** at Level II and III
3. **Mandatory DOT&E approval** for Applicable Programs
4. **The irreversible-changes rule** prohibiting Level I-only testing for systems with non-rollback effects
5. **OTA independence** from the program office, developer, and contractor at all levels

If KIDA's report omitted any of items 1–5 — particularly items 1, 2, and 4 — and used the resulting truncated representation as authority for justifying integrated DT&E/OT&E execution **without** independent operational testing **without** OTA-equivalent independence **without** irreversible-changes consideration, the citation is a **misrepresentation by selective omission**, even though no specific sentence in KIDA's report would be literally false.

This is the structural shape of the Layer 4 KIDA contradiction. The full falsification requires reading the actual KIDA research report (currently not located in `raw/`).

## Open Questions

- **The original DoD Instruction 5000.02 (2008-12-08) traditional OT&E approach.** This memo *substitutes* for that approach for information and business systems. What did the traditional approach require? If the traditional approach was even more separation-oriented, then KIDA's citation of the 2010 memo (which is the *more permissive* substitute) is itself a selective choice — KIDA could have cited DoD 5000.02 directly but chose not to. This is a research target.
- **The KIDA research report itself.** Title, date, author, exact passages citing this US memo. Pending location in `raw/` or external research.
- **Whether KIDA's report cites the 2003 predecessor memo** (*Conducting OT&E of Software Intensive System Increments*, June 16, 2003) instead of or in addition to this 2010 memo. The 2003 memo is superseded but may have different language and may have been the actual citation target.
- **Korean MAIS-equivalent classification.** Does Korea's defense informationization framework have a MAIS-equivalent designation that would have made KIATIS subject to DOT&E-equivalent oversight under the Korean 사업통제기관 framework? This determines whether the US Level III rules have a Korean analog.

## Related

- [[../claims/kida-otne-citation-misrepresents-us-standard|claim atom: KIDA's citation misrepresents the US standard by selective omission]]
- [[../entities/organizations/kida|KIDA hub]]
- [[../regulations/defense-it-2129-article-58|훈령 제2129호 제58조 (Korean comparator)]]
- [[../regulations/defense-it-operations-directive-2129|Hub: 훈령 제2129호 (full Korean directive)]]
- [[../claims/2436ho-test-evaluation-principle-inverted|2436호 inverted the Korean principle (separate context)]]
- [[../topics/test-evaluation-manipulation|Test Evaluation Manipulation]]
- [[../layers/layer-4|Layer 4]]
- [[_index|Regulations]]
