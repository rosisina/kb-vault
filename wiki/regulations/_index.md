# Regulations

Directives, instructions, and laws relevant to the case. Mirrors (and links out to) the `Regulation` and `Directive` nodes in Aurora's Neo4j schema.

Two levels:

- **Regulation** — the whole instrument (e.g., 국방정보화업무 훈령, DoD Instruction 5000.02).
- **Directive / Article** — an individual article within a regulation, with its own revision history.

Each Regulation page includes a `## Revision history` section listing every version and the date it changed. Each Article page includes a `## Diff from previous version` section.

## Key regulations

### Korean

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (2018-02-05, baseline)]] — 11-anchor framework, 11 successor revisions diffed (제2075호 → 제3080호); KIATIS-applicable directive; 14 article pages
- [[didc-cyber-protection-sop-12|DIDC 부대예규 제12호 — 사이버방호 예규 (2016-02-01)]] — DIDC 자체 SOP, 사이버 방호. 7 revisions (2016 ~ 2019). 정보보호과장 승인 + 별지 서식 1–10 paper trail. Layer 1 procedural duty floor for 2016 hacking incident.
- [[didc-info-system-operation-sop-11|DIDC 부대예규 제11호 — 정보시스템 운영관리 예규 (2016-02-01)]] — DIDC 자체 SOP, 운영관리. 146 articles, 13 chapters. Change management, deployment, configuration, backup/recovery, account, cloud, VDI, network. Layer 1 + Layer 4 duty floor.
- 국방사이버안보 훈령 — pending ingest (referenced from 제2129호 제9조 ¶2 AND from DIDC SOP 제12호 제1조)
- ISMS-P 인증기준 안내서 (2023-11-23) — pending ingest from `raw/04. law & regulation/English/`

### Comparator (US)

- [[us-dod-otne-info-business-systems-2010|US DoD Guidelines for OT&E of Information and Business Systems (2010-09-14, Gilmore memo)]] — comparator regulation for KIDA Layer 4 contradiction; risk-based 3-level OT&E framework; supersedes 2003 DOT&E *Conducting OT&E of Software Intensive System Increments*
- DoD Instruction 5000.02 (2008-12-08) *Operation of the Defense Acquisition System* — referenced by the Gilmore memo as the traditional OT&E approach being substituted; not yet ingested

## Related

- [[_master-index]]
- [[layers/_index|Layers]]
