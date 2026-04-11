# KIDA — Korea Institute for Defense Analyses (한국국방연구원)

**Source:** `raw/01. book-beyond-cybersecurity/vault-legacy-wiki-english/Test-Evaluation-Manipulation.md` (Layer 4 summary, to be supplanted by direct book citations on A.6 compile) • James's contextual input 2026-04-11 (KIDA's alleged misrepresentation of US DOD OT&E regulation) • `raw/04. law & regulation/English/(US Regulation) DOD Operational Test and Evaluation (OT&E) for Information and Business Systems(dod).converted.md` (ingested 2026-04-11)
**Layer:** [[../../layers/layer-4|Layer 4]] (primary — KIDA's alleged fabricated research report is named in the book as the academic justification used to rationalize DT&E/OT&E integration in later directive revisions) • [[../../layers/layer-6|Layer 6]] (secondary — KIDA's report may have been used by the MPO as academic authority during the 2022 investigation)
**Aurora node:** `:Organization {name: "Korea Institute for Defense Analyses", nameKr: "한국국방연구원", alias: "KIDA", parent: "Ministry of National Defense (policy research institute)"}`

**KIDA (Korea Institute for Defense Analyses, 한국국방연구원)** is South Korea's principal defense policy research institute. It is identified in the 7-layer proof system as a **central Layer 4 actor** for producing a research report that allegedly fabricated academic justification for directive-level changes to the DT&E/OT&E separation regime. Per James's contextual input (2026-04-11), KIDA cited the US document **DOD Operational Test and Evaluation (OT&E) for Information and Business Systems** as authority for DT&E/OT&E integration — while the actual US regulation mandates strict separation of DT&E and OT&E in both organizational and substantive terms. If confirmed on source ingest, this creates a textually verifiable contradiction between KIDA's representation of the US standard and the US standard's actual content.

## Key Takeaways

- [진리성] **KIDA is named in the book as a central Layer 4 actor.** Per `vault-legacy-wiki-english/Test-Evaluation-Manipulation.md`: "The Korea Institute for Defense Analyses (KIDA) produced a fabricated research report to justify the project ... Used as academic basis for MND directive revisions ... Conclusions contradicted established facts." The vault-legacy file does not constitute primary evidence under current schema, but identifies KIDA as an entity warranting a dedicated hub page pending A.6 book compile with full `Record No.` citations.
- [진리성] **Alleged misrepresentation of US DOD OT&E regulation — comparator now ingested.** The US text was ingested 2026-04-11 (see [[../../regulations/us-dod-otne-info-business-systems-2010|US DoD OT&E guidelines]]). The comparator finding is **more nuanced than originally framed**: the US guidelines do permit integrated test approaches as the expected baseline, but bound the integration with five structural requirements (OTA-led risk stratification, mandatory independent operational events at Level II/III, mandatory DOT&E approval for Applicable Programs, the irreversible-changes rule, and OTA structural independence from the developer). KIDA's alleged citation is therefore best characterized as **misrepresentation by selective omission** rather than as outright falsehood. See [[../../claims/kida-otne-citation-misrepresents-us-standard|claim atom]] for the falsification structure.
- [타당성] **Layer 4 ↔ Layer 6 bridge.** KIDA's research report functions as a claimed academic foundation for directive revisions (Layer 4) and may also have been cited by the military prosecutor's office (Layer 6) as authority supporting an integrated-T&E interpretation of KIATIS conduct. Tracking both uses is a KIDA-specific diagnostic task.
- [진리성] **The research report's date and contents are the first empirical question.** Before the claim of fabrication can be falsified or corroborated, the report itself must be located and its citation of the US regulation must be textually extracted. This is a Phase A priority.

## Pending Phase A tasks specific to KIDA

1. **Locate and ingest the KIDA research report.** Not yet located in `raw/`. James may need to provide a specific file path or confirm whether the report is embedded in the book (`raw/01.`) rather than as a standalone source.
2. **~~Ingest the US DoD OT&E for Information and Business Systems regulation.~~** ✓ Done 2026-04-11 — see [[../../regulations/us-dod-otne-info-business-systems-2010]].
3. **Textual diff** between (a) the KIDA report's citation of the US regulation and (b) the US regulation's actual text. The US side is now established; the KIDA side awaits the report. The five-question falsification checklist lives in [[../../claims/kida-otne-citation-misrepresents-us-standard]].
4. **Track KIDA report citations in later 국방 정보화업무 훈령 revisions.** Does any revision (2019–2025) cite KIDA's research as justification for the integration-principle change? If yes, at which revision? A.3 batch did not specifically search for KIDA references; a targeted re-grep is warranted.
5. **Check for the 2003 predecessor memo** (US DoD DOT&E *Conducting OT&E of Software Intensive System Increments*, June 16, 2003). The 2010 memo supersedes it, but a KIDA citation written before or after 2010 might cite the 2003 memo instead — comparator needs to be located if so.

## Open Questions

- **KIDA's formal relationship to MND.** KIDA is a policy research institute; its research outputs are typically advisory, not binding. What mechanism would make a KIDA report a legitimate academic basis for a directive revision?
- **The KIDA research report's title, date, and author(s).** Unknown; pending ingest.
- **Whether the KIDA report is itself cited in any 군 검찰단 investigation document.** Pending 수사 기록 ingest.
- **Whether KIDA's role in this case is institutional or individual.** Does the alleged fabrication trace to a specific research team within KIDA, or does it implicate the institution as a whole? Pending book compile and personnel analysis (subject to pseudonym policy).

## Claim atoms anchored on KIDA

- [[../../claims/kida-otne-citation-misrepresents-us-standard]] — selective-omission misrepresentation of US standard (NEEDS_MORE_EVIDENCE, moderate; awaits KIDA report)

## Related

- [[../../regulations/us-dod-otne-info-business-systems-2010|US DoD OT&E guidelines (comparator)]]
- [[../../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 조작]]
- [[../../layers/layer-6|Layer 6 — 군 검찰단의 사기 수사]]
- [[../../events/2018-2019-kiatis-performance-improvement-project|KIATIS 성능개선사업 (event)]]
- [[mnd-it-planning-office|국본 정보화기획관실 (adopts directive revisions)]]
- [[../../regulations/defense-it-2129-article-58|훈령 제2129호 제58조 (DT&E/OT&E 분리 원칙)]]
- [[../_index|Entities]]
