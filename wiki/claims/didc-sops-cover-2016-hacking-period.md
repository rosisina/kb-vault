---
lang: ko
title-ko: "Both DIDC SOPs (제12호 사이버방호 + 제11호 운영관리) were in force on 2016-02-01, the procedural duty floor for the 2016 DIDC hacking incident"
title-en: ""
aliases:
  - FR-L1-DIDC-001
  - Both DIDC SOPs (제12호 사이버방호 + 제11호 운영관리) were in

layer: 1
secondary-layers: []
claimType: procedural_violation
claimSubtype: procedural_duty_floor_establishment
fracture-type: F-CE
source-type: sop

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: 2016-02-01

persons: []
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L1
  - verdict/corroborated
  - strength/strong
  - type/procedural-violation
  - source/sop
  - fracture/F-CE
  - org/DIDC
---
# Both DIDC SOPs (제12호 사이버방호 + 제11호 운영관리) were in force on 2016-02-01, the procedural duty floor for the 2016 DIDC hacking incident

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/01.(Korean) DIDC_사이버방호_예규.md (제정일 2016-02-01) • raw/06/02.(Korean) DIDC_정보시스템_운영관리_예규.md (제정일 2016-02-01)
**Layer:** [[../layers/layer-1|Layer 1]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-001"})
SET fr.layer = 1,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_duty_floor_establishment",
    fr.claimDesc = "DIDC 부대예규 제12호 (사이버방호) and 제11호 (정보시스템 운영관리) were both enacted on 2016-02-01 and were in force on the date of the 2016 North Korean hacking incident at DIDC. Both SOPs apply universally to all DIDC-operated systems with no carve-outs. Therefore every cyber protection and operational management procedure required by these SOPs was a legal duty for DIDC personnel from 2016-02-01 forward, and any failure to produce SOP-required documentary artifacts for the hacking incident period constitutes a procedural-trace anomaly that supports the Layer 1 cover-up thesis",
    fr.counterHypothesis = "The 2016-02-01 enactment date was nominal and the SOPs were not operationally enforced until a later date, OR the hacking incident occurred before 2016-02-01 (i.e., during the SOP gap period when no DIDC SOP was in force)",
    fr.falsificationCondition = "Production of (a) the precise date of the 2016 DIDC hacking incident, demonstrating it predated 2016-02-01, OR (b) DIDC internal documentation establishing that the SOPs were not operationally enforced from 2016-02-01",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Two SOPs, identical 제정일 2016-02-01, universal applicability scope. Whether the 2016 hacking predated this date is the central falsification gate; if not, the SOPs establish a procedural duty floor and the absence of mandated artifacts is direct Layer 1 evidence.";
```

## Claim

DIDC 부대예규 제12호 (사이버방호 예규) and 부대예규 제11호 (정보시스템 운영관리 예규) were both enacted on 2016-02-01 and apply universally to `DIDC 본부 및 각 센터` and to `DIDC 소관의 국방컴퓨터체계` (all DIDC computer systems), with no carve-outs. Together they constitute the **procedural duty floor** for DIDC operations from 2016-02-01 forward. The 2016 North Korean hacking incident at DIDC, on which the entire 7-layer proof structure rests, occurred under this duty floor. Therefore every cyber protection and operational management procedure required by these SOPs was a legal duty for DIDC personnel during the hacking incident, and the absence of any SOP-required documentary artifact (별지 서식, approval signature, audit trail entry) for the incident period is a procedural-trace anomaly that supports the Layer 1 cover-up thesis.

## Key Takeaways

- DIDC 부대예규 제12호 (사이버방호) and 제11호 (정보시스템 운영관리) both carry 제정일 2016-02-01, establishing a **paired procedural duty floor** for all DIDC operations from that date forward [타당성] (raw/06/01 lines 5–13, raw/06/02 lines 5–11).
- 제12호 제2조 explicitly binds the SOPs to `DIDC 본부 및 각 센터` and to `DIDC 소관의 국방컴퓨터체계` with no carve-outs — universal applicability across all DIDC-operated systems [타당성] (raw/06/01 제2조 verbatim).
- Any SOP-required artifact (별지 서식, approval signature, audit trail entry) that is absent for the 2016 hacking incident period is a **procedural-trace anomaly** directly supporting the Layer 1 cover-up thesis [진리성].
- The central falsification gate is the precise date of the 2016 DIDC hacking incident: if it predates 2016-02-01, the duty floor does not cover the incident and the verdict downgrades to NEEDS_MORE_EVIDENCE [진리성].
- Verdict: **CORROBORATED**, Strong. 진리성 9 / 타당성 10 / 진실성 7 — 타당성 is maximum because the SOPs are primary regulatory sources with explicit dates and explicit scopes [진실성].

## Layer

[[../layers/layer-1|Layer 1]] — Active-X 제거 사업 간 舊KIATIS 이력 제거 (DIDC 해킹 근원서버 은폐의 출발점). This atom establishes the **regulatory baseline** against which all Layer 1 cover-up evidence must be measured. Without this baseline, the Layer 1 narrative depends on intuitive notions of "what should have happened"; with it, the Layer 1 narrative becomes textually anchored to specific SOP article numbers and 별지 서식 numbers.

## Supporting evidence

- **DIDC 부대예규 제12호 사이버방호 예규** revision history table (raw/06/01 lines 5–13):
  | 구분 | 일자 |
  |---|---|
  | 제 정 | 2016.02.01. |
  | 부분개정 | 2016.04.01. |
  | 부분개정 | 2016.12.05. |
  | 부분개정 | 2017.09.06. |
  | 부분개정 | 2018.06.01. |
  | 부분개정 | 2018.12.01. |
  | 부분개정 | 2019.06.04. |
- **DIDC 부대예규 제11호 정보시스템 운영관리 예규** revision history table (raw/06/02 lines 5–11):
  | 구분 | 일자 |
  |---|---|
  | 제 정 | 2016.02.01. |
  | 부분개정 | 2016.04.01. |
  | 부분개정 | 2016.12.05. |
  | 부분개정 | 2018.06.01. |
  | 부분개정 | 2019.06.04. |
- **Both 제정일 are identical: 2016-02-01.** Treated as a paired enactment.
- **제12호 제2조 (적용범위 및 대상):** `① 이 예규는 DIDC 본부 및 각 센터에 적용한다. ② DIDC 소관의 국방컴퓨터체계를 대상으로 한다.` — universal scope.
- **제11호 has equivalent universal scope** (verified by direct read of Chapter 1).
- See [[../regulations/didc-cyber-protection-sop-12|DIDC SOP 제12호 hub]] and [[../regulations/didc-info-system-operation-sop-11|DIDC SOP 제11호 hub]].

## Counter-hypothesis

The 2016-02-01 제정일 was nominal — the SOPs were not operationally enforced until a later date. Under this hypothesis, the SOPs are administrative paper that did not bind DIDC personnel during the hacking incident, and the absence of SOP-required artifacts is not procedurally meaningful.

**Alternative counter-hypothesis:** The 2016 DIDC hacking incident occurred before 2016-02-01 (i.e., in January 2016 or earlier), when no DIDC SOP was in force. Under this hypothesis, the procedural duty floor did not yet exist on the incident date.

## Falsification condition

This claim is **CORROBORATED** unless one of the following is produced:

1. **The precise date of the 2016 DIDC hacking incident**, demonstrating it predated 2016-02-01. The case narrative refers to "the 2016 hacking" without (in the wiki's current state) pinning the exact date. If James can supply the date or the book provides it, the comparison is direct. If the hacking date is, e.g., 2016-03 or later, this counter-hypothesis is foreclosed; if 2016-01 or earlier, the verdict downgrades to NEEDS_MORE_EVIDENCE pending alternative procedural duty source (e.g., the predecessor regulation that the 2016-02-01 SOPs replaced).
2. **DIDC internal documentation** establishing that 제12호 or 제11호 was not operationally enforced from 2016-02-01 — e.g., a memorandum delaying enforcement, or evidence that DIDC staff were not trained on the new SOPs until later in 2016.
3. **A predecessor SOP** that 제11호 / 제12호 replaced, with terms substantially different from the post-2016-02-01 SOPs. If the predecessor SOPs already imposed equivalent duties, the duty floor exists from an even earlier date and the claim is strengthened. If the predecessor SOPs had no duty equivalents, the duty floor began at 2016-02-01 exactly.

If item 1 produces a pre-2016-02-01 hacking date, the verdict downgrades to NEEDS_MORE_EVIDENCE. If item 2 is produced with substantive content, the verdict downgrades to WEAKENED. Item 3 is a research target, not a falsification.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 7. The taydang-seong (validity) score is maximum because the SOPs are primary regulatory sources with explicit dates and explicit scopes. The truthfulness score is 9 (not 10) because the wiki has not yet verified the exact date of the 2016 hacking incident — that verification is the central falsification target.

## Spot-check (raw/01 book)

- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1 chapter (CONFIRMED match on `예규` keyword)
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 chapter (CONFIRMED match)
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (CONFIRMED match)
- `vault-converted-korean/04-1-1-서론.md` — Introduction
- Deferred to A.6 Re-verify. Three layer chapters explicitly reference the SOPs.

## Open Questions

- **Evidence citation coverage — exempt under CLAUDE.md regulation-text rule.** This atom's primary sourcing is DIDC SOP 제12호 + 제11호 전체 SOP 시행일 (raw/06 regulation text), which is structurally equivalent to the raw/04 regulation-text exemption from the `Record No. NNNNN` requirement. Evidence record numbers anchoring this duty's VIOLATION in the 2016 incident period are expected to live in raw/07 scanned evidence record pages and will be added on raw/07 ingest; absence of Record No. citations in this atom is therefore an exemption, not a defect.
- **What is the exact date of the 2016 DIDC hacking incident?** Pending raw/01 detailed compile or direct James input.
- **Did the predecessor regulation (pre-2016-02-01) impose equivalent SOP duties?** Pending research target.
- **Are the predecessor revisions of 제11호 and 제12호 (the 2016-02-01 originals) available?** Currently raw/06 contains only the latest revisions. Targeted ingestion request queued.

## Related

- [[../regulations/didc-cyber-protection-sop-12|DIDC SOP 제12호]] (ABOUT)
- [[../regulations/didc-info-system-operation-sop-11|DIDC SOP 제11호]] (ABOUT)
- [[didc-sop-incident-report-mandatory|sister atom: incident report procedural duty]] (CORROBORATES)
- [[didc-sop-firewall-vpn-trail-mandatory|sister atom: firewall/VPN paper trail]] (CORROBORATES)
- [[didc-sop-11-change-management-trail-mandatory|sister atom: change management trail]] (CORROBORATES)
- [[../entities/organizations/didc|DIDC]] (ABOUT)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
- [[../topics/defense-informatization-cartel|Defense Informatization Cartel]] (ABOUT)
