# Knowledge Base Index

This file is the catalog of every topic in this wiki. The LLM maintains it. Every ingest updates it. Every query reads it first.

Each topic is listed below with a one-line description and a link to its `_index.md`.

## Backbone

### [[layers/_index|Layers]] — 7층위 증명 체계
The seven-layer proof system. Every article in the vault belongs to at least one layer. Canonical definitions live in `../defense-kg-platform/kg/evidence_record_mapping.json`.

### [[entities/_index|Entities]]
People (pseudonymized — see `../defense-kg-platform/kg/pseudonym_mapping.json`) and organizations.

### [[events/_index|Events]]
Dated events in the case. Chronological spine: [[timeline]].

### [[regulations/_index|Regulations]]
Directives, laws, and their revision histories (2017–2025).

### [[claims/_index|Claims]]
Atomic Popper-falsifiable claim Zettels. Each claim atom maps 1:1 to an Aurora `FalsificationResult` node.

### [[topics/_index|Topics]]
Conceptual / narrative synthesis pages — the reading layer of the wiki. 8 pages derived from the vault-legacy topic articles, covering the 7-Layer Proof System, APT-Style Individual Targeting, Defense Informatization Cartel, KIATIS Systems, Test Evaluation Manipulation, Fraud Investigation, Banality vs Sophistication of Evil, and Whistleblower Protection and Reform.

### [[_contradictions|Contradictions]]
Flat index of flagged contradictions awaiting adjudication by a claim page.

## Topics

*Additional topic folders beyond the backbone will be listed here as they are created during ingest.*

## Format for new entries

```
### [[topic-name/_index|Topic Name]]
One-line description of what this topic covers. Last updated YYYY-MM-DD.
```

## How the LLM uses this file

On every query, the LLM reads this file first to identify which topic folder is relevant. On every ingest, the LLM updates this file if a new topic is created or an existing topic changes meaningfully. This is the entry point for all navigation. Keep it accurate.
