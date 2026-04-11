# Claims (주장 단위)

Atomic, falsifiable claims — the smallest indivisible propositions the case rests on. One claim per file. Each claim page has the following required sections:

1. **Claim** — a single declarative sentence.
2. **Layer** — which of the 7 layers this claim operates in.
3. **Aurora node** — Cypher `MERGE` block for direct serialization to Neo4j `FalsificationResult`.
4. **Supporting evidence** — list of `Record No. NNNNN` or directive citations with wikilinks to the relevant event/entity pages.
5. **Counter-hypothesis** — the best alternative explanation (Popper falsifiability).
6. **Falsification condition** — what evidence, if found, would refute the claim.
7. **Verdict** — `CORROBORATED / WEAKENED / UNFALSIFIABLE / NEEDS_MORE_EVIDENCE` (mirrors Aurora's `FalsificationResult.verdict`).

Claims are the bridge between this narrative wiki and Aurora's `FalsificationResult` nodes. A healthy claim page can be serialized directly into a Cypher MERGE for Aurora.

## Atoms (10) — A.4 first batch (2026-04-11)

### Layer 1 — DIDC trace removal

- [[2436ho-didc-naming-anchor-removed]] — A1: 제2436호 removes the DIDC entity-naming anchor from 제10조. **CORROBORATED (strong)**
- [[2263ho-cyber-routing-rewrite]] — A3: 제2263호 first micro-edit of 제9조 ¶2 cyber routing. **NEEDS_MORE_EVIDENCE (weak)** — verbatim diff queued

### Layer 3 — informatization cartel structure

- [[2436ho-gukjeonwon-role-tier-renaming]] — A2: 제2436호 retiers 사업통제/주관/관리 → 정보화기획관실/소요제기/집행. **NEEDS_MORE_EVIDENCE (moderate)** — external comparator queued

### Layer 4 — test-evaluation manipulation

- [[2436ho-cluster-six-anchors]] — **meta-claim**: 제2436호 (2020-06-04) is a six-anchor single-revision cluster. **CORROBORATED (strong)**
- [[2436ho-test-evaluation-principle-inverted]] — A9: 제58조 separation principle inverted to integration principle. **CORROBORATED (strong)**
- [[2436ho-dtne-articles-erased]] — A10: 제59·60·61조 bodies replaced with `<삭 제>` placeholder. **CORROBORATED (strong)**
- [[2398-2842ho-otne-environment-hedge-flipflop]] — A8a: OT&E environment hedge add → revert → re-add (2020-02 / 2020-06 / 2023-09). **NEEDS_MORE_EVIDENCE (moderate)**
- [[2436ho-otne-sponsor-binding-erased]] — A8b: `사업주관기관 주관 하에` clause erased from OT&E definition. **CORROBORATED (moderate)**
- [[2842ho-software-development-13-to-5-stage]] — A7: 13-stage strict sequence consolidated to 5-phase model (time-reversal anchor). **NEEDS_MORE_EVIDENCE (moderate)**

### KIATIS legal framework (Layers 4 + 6 bridge)

- [[kiatis-2129ho-main-regime-applies]] — KIATIS bound by 제58조 ¶2 main regime (separation as default), 5억-미만 exception foreclosed. **CORROBORATED (strong)**
- [[kiatis-rfp-binds-lifecycle]] — KIATIS conduct measured against 제2129호 by 국가계약법 RFP-binding + 행위시법주의. **CORROBORATED (strong)**

### KIDA academic-foundation layer (added A.5 2026-04-11)

- [[kida-otne-citation-misrepresents-us-standard]] — KIDA's citation of US DoD OT&E guidelines misrepresents the US standard by selective omission (5-question falsification checklist; US comparator now established). **NEEDS_MORE_EVIDENCE (moderate)** — awaits KIDA report location

### Layer 6 — military prosecutor investigation (added raw/02 first ingest pass 2026-04-11)

- [[han-ji-hoon-prosecution-violates-2129-role-separation]] — The 2022 prosecution charged 한지훈 (사업관리팀장) with conduct (시험평가환경 falsification) that 제2129호 제11조 explicitly assigns to a different role-tier (사업주관기관). **Foundational Layer 6 atom.** **CORROBORATED (strong)**
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma]] — The 기소유예 (deferred prosecution) outcome is not exoneration. Under Korean criminal procedure 기소유예 carries `범죄혐의가 인정되나` implication, structurally distinct from 무혐의. The 7-component harm structure (warrant + 압수수색 + 피의자 조사 + 기소유예 stigma + reputation damage + 32-year career criminal branding + family/social isolation) is the central Layer 6 injury. **CORROBORATED (strong)**

### Layer 1 — DIDC procedural cover-up (added raw/06 first ingest pass 2026-04-11)

DIDC SOP-based procedural-trace atoms. The 2016 DIDC hacking incident must have generated specific documentary artifacts under DIDC's own SOPs (제12호 사이버방호 + 제11호 운영관리, both enacted 2016-02-01); the absence of these artifacts is direct Layer 1 cover-up evidence.

- [[didc-sops-cover-2016-hacking-period]] — Both SOPs were in force on 2016-02-01, establishing the procedural duty floor. **CORROBORATED (strong)**
- [[didc-sop-incident-report-mandatory]] — 제12호 제21조 + 별지 제4호 mandate immediate incident reporting; absence of the report = cover-up. **CORROBORATED (strong)**
- **[[didc-sop-firewall-vpn-trail-mandatory]]** — 제12호 제37조 + 별지 6/7/8호 mandate firewall/VPN/NAC paper trail. **CORROBORATED (strong)** ← 별지 제7호 SSL-VPN = **highest-priority ingress trace** (James 2026-04-11)
- **[[didc-sop-db-access-control-mandatory]]** — 제11호 제164조 + 별지 17호 mandate CharkraMax DB access control. **CORROBORATED (strong)** ← 별지 제17호 DB = **highest-priority egress trace** (James 2026-04-11). **Paired with 별지 제7호 to form the ingress/egress sandwich.**
- [[didc-sop-11-change-management-trail-mandatory]] — 제11호 Chapter 4 (제21~32조) mandates 11-gate change management trail; pending KIATIS DIDC-hosting verification. **NEEDS_MORE_EVIDENCE (moderate)**
- [[didc-sop-11-backup-recovery-mandatory]] — 제11호 Chapter 8 (제70~94조) mandates 25-article backup regime + off-site storage + documented disposal; binary test. **CORROBORATED (strong)**
- [[firewall-policy-form-approved-by-wrong-officer]] — The 2019-08-26 KIATIS firewall change form was approved by 행정정보화과장, not 정보보호과장 as required by 제37조 ① — possible approval chain defect. Anchored on raw/05 (20221014) verbatim. **NEEDS_MORE_EVIDENCE (moderate)** — pending pre-2019 SOP revision

### Layer 6 — Prosecutor legal/factual errors (added raw/05 first ingest pass 2026-04-11)

- **[[prosecution-misapplies-2129-article-58-4-to-kiatis]]** — The 불기소이유서 (2022-10-07) cites 제2129호 제58조 ¶4 as legal basis, but ¶4 is the exception clause for 제58조 ¶3 projects (5억 미만 / 기관 위임 / 제46조 위임). KIATIS at 6.25억 KRW does not qualify under any ¶3 path. The prosecution textually misapplied the directive — citing exception as main regime. **CORROBORATED (strong)** ← second foundational Layer 6 atom

### Layer 7 — Institutional rejection chain (added raw/05 first ingest pass 2026-04-11)

- **[[han-ji-hoon-rebuttal-rejected-by-eight-institutions]]** — 한지훈의 2022-09-29 rebuttal was rejected by 8 institutions in sequence: 국방장관, 군사보좌관, 군검찰단장, 검사, 수사관, 인권담당, 국가인권위원회, 국가권익위원회. ALL 8 rejected. **Foundational Layer 7 atom.** **CORROBORATED (strong)**

### Layer 1 / 3 / 6 — Cartel definition (added raw/05 first ingest pass 2026-04-11)

- [[defense-information-cartel-named-by-rebuttal]] — 한지훈's (20220929) rebuttal explicitly defines `국방정보화카르텔` as 5 organizations (국방부 검찰단 / 국방부 정보화조직 / 국군방첩사령부 / KIDA / 기타). Atom anchors the topic page to a primary source. Substantive cartel coordination = **NEEDS_MORE_EVIDENCE (moderate)**

## Verdict distribution (24 atoms after raw/05 first pass)

| Verdict | Count |
|---|---|
| CORROBORATED (strong) | 15 |
| CORROBORATED (moderate) | 1 |
| NEEDS_MORE_EVIDENCE (moderate) | 7 |
| NEEDS_MORE_EVIDENCE (weak) | 1 |
| WEAKENED | 0 |
| UNFALSIFIABLE | 0 |

**A.6 임계점 (~30 atom)까지: 6 atom 남음.**

The 5 NEEDS_MORE_EVIDENCE atoms cluster around external comparators (academic literature on phase-based vs. stage-based models, parent-law harmonization for the 정보화기획관실 rename, internal MND drafting records, the cyber routing diff verification, and **the KIDA report verbatim citation**). A.5 work has now established one of the four NEEDS_MORE_EVIDENCE comparators (the US DoD OT&E text); the others remain queued.

## Pending atoms (not in this batch)

- **A4** (제63조 ¶1 제1호 `개발시험평가 결과 조치사항 이행여부`) — pending re-verification per A.3.5 §7 #1; will be added once subagent claim is independently confirmed/refuted by main-agent direct read
- **A5** (제64조 ¶3 critical-defect re-evaluation) — pending re-verification
- **A6** (제65조 ¶1 `병행 수행을 지원` parallel operation) — pending re-verification (originally marked "Unchanged" but now suspect given the 제2436호 cluster pattern; should be re-checked as a free verification step)
- **More Layer 6 person-level atoms** — additional atoms about specific procedural defects in the 2022 prosecution will be added as raw/05 (prosecutor evidence) is ingested. Candidate atoms: (a) the August 2022 prosecutor handover as case-insulation mechanism; (b) the 단장 sign-off chain as institutional decisional locus; (c) the 압수수색 negative findings vs. continued prosecution as procedural anomaly

## Related

- [[../_master-index]]
- [[../_contradictions|Contradictions]]
- [[../layers/_index|Layers]]
- [[../regulations/defense-it-operations-directive-2129|Hub: 훈령 제2129호]]
- [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS event]]
