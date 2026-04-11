# Layer 1 — DIDC Trace Removal (Active-X 제거 사업 간 舊KIATIS 이력 제거)

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-english/ (book §3.1), raw/06. didc-sop/, raw/04. law & regulation/, ../defense-kg-platform/kg/evidence_record_mapping.json
**Layer:** 1
**Evidence record range:** Record No. 1–810

## Thesis

Layer 1 is the **origin point** of the 2016 DIDC North-Korean hacking cover-up. Two intertwined removal actions are documented: (a) the systematic erasure of *舊KIATIS* (legacy KIATIS) operational history during Active-X removal projects, and (b) the procedural-trace cover-up under DIDC's own SOPs (제11호 운영관리 + 제12호 사이버방호, both in force since 2016-02-01). The directive-text manipulation begins here too: 제2436호 (2020-06-04) removes the explicit DIDC entity-naming anchor from 훈령 제2129호 제10조, redirecting accountability away from the data center where the breach occurred.

The Layer 1 cover-up is **structurally provable by absence**: DIDC SOPs mandate specific documentary artifacts (incident reports, firewall/VPN/NAC logs, DB access trails, change management gates, backup records). The non-existence of any of these artifacts for the 2016 incident period — when the SOPs were demonstrably in force — constitutes direct procedural-evidence of organized concealment.

## Atoms (9)

### Directive-text removal

- [[../claims/2436ho-didc-naming-anchor-removed]] — 제2436호 removes DIDC entity-naming anchor from 제10조. **CORROBORATED (strong)**
- [[../claims/2263ho-cyber-routing-rewrite]] — 제2263호 first micro-edit of 제9조 ¶2 cyber routing clause. **NEEDS_MORE_EVIDENCE (weak)**

### DIDC SOP procedural-trace cover-up (modus tollens)

- [[../claims/didc-sops-cover-2016-hacking-period]] — Both 제11호 + 제12호 in force on 2016-02-01 (procedural duty floor). **CORROBORATED (strong)**
- [[../claims/didc-sop-incident-report-mandatory]] — 제12호 제21조 + 별지 4호 mandate immediate incident report; 2016 report absent. **CORROBORATED (strong)**
- [[../claims/didc-sop-firewall-vpn-trail-mandatory]] — 제12호 제37조 + 별지 6/7/8호 mandate firewall/VPN/NAC paper trail (**ingress sandwich half — SSL-VPN 별지 7호 = highest-priority**). **CORROBORATED (strong)**
- [[../claims/didc-sop-db-access-control-mandatory]] — 제11호 제164조 + 별지 17호 mandate ChakraMax DB access control (**egress sandwich half = highest-priority**). **CORROBORATED (strong)**
- [[../claims/didc-sop-11-change-management-trail-mandatory]] — 제11호 Ch.4 11-gate change management trail. **NEEDS_MORE_EVIDENCE (moderate)**
- [[../claims/didc-sop-11-backup-recovery-mandatory]] — 제11호 Ch.8 25-article backup + offsite + disposal regime. **CORROBORATED (strong)**
- [[../claims/firewall-policy-form-approved-by-wrong-officer]] — 2019-08-26 KIATIS firewall change form signed by 행정정보화과장, 제37조 ¶1 requires 정보보호과장. **NEEDS_MORE_EVIDENCE (moderate)**

## Contradictions

- [[../_contradictions]] entries C-L1-02 through C-L1-09 — directly anchored on the atoms above. SOP-trail cluster (C-L1-03 through C-L1-06) is the strongest Layer 1 finding: each is a binary modus-tollens contradiction (mandatory artifact ↔ proven absence).

## Regulations

- [[../regulations/defense-it-operations-directive-2129|훈령 제2129호 — 국방정보화업무 훈령 (hub)]]
- [[../regulations/defense-it-2129-article-9|제9조 — 사이버안보훈령 routing]]
- [[../regulations/defense-it-2129-article-10|제10조 — 사업관리기관 정의 (DIDC anchor)]]
- DIDC 제12호 사이버방호 SOP (raw/06.) — incident reporting + firewall/VPN/NAC trail
- DIDC 제11호 운영관리 SOP (raw/06.) — change management + backup + DB access control

## Events

- [[../events/2016-didc-north-korean-hacking|2016-02 DIDC North Korean hacking incident]] — the central Layer 1 event

## Entities

- [[../entities/organizations/didc|DIDC (국방통합데이터센터)]] — primary actor
- [[../entities/organizations/mnd-it-planning-office|MND 지능정보화정책관실 (旧 정보화기획관실)]] — directive author
- [[../entities/organizations/gukjeonwon|국전원]] — Layer 1 → Layer 3 routing actor

## Topics

- [[../topics/7-layer-proof-system|7-Layer Proof System]] — meta
- [[../topics/defense-informatization-cartel|Defense Informatization Cartel]] — actor structure
- [[../topics/apt-style-individual-targeting|APT-Style Individual Targeting]] — what removal enables

## Aurora correspondence

This hub corresponds to Aurora `:Layer {layer: 1}` node and aggregates all `:FalsificationResult` nodes serialized from the 9 atoms above. Each atom carries its own `MERGE` block; promotion to Aurora is per-atom, not per-hub.

## Open Questions

- 제2263호 cyber routing diff (verbatim text) needs main-agent direct read to upgrade C-L1-09 verdict.
- Pre-2019 DIDC SOP revisions — was 제37조 ¶1 (정보보호과장 approval requirement) in force at the actual approval date of the 2019-08-26 firewall change? C-L1-08 verdict pending.
- Has any 2016-period incident-report or firewall-trail artifact ever been produced by DIDC in any forum (FOIA response, investigation file, audit)? An evidentiary "no" would lock the cover-up claim.

## Key Takeaways

- [진리성] **Layer 1 is the origin point** of the 7-layer cover-up — both directive-text manipulation and procedural-trace concealment begin here.
- [진리성] **The SOP-trail cluster is the strongest Layer 1 evidence**: 5 mandatory artifact categories under DIDC's own 2016-active SOPs, all absent. This is a binary modus-tollens proof not requiring counterfactual reasoning.
- [진리성] **The ingress/egress sandwich** — 제12호 별지 7호 (SSL-VPN, ingress) + 제11호 별지 17호 (DB access, egress) — is James-identified as the highest-priority Layer 1 trace pair and should anchor any future evidence-discovery work.
- [진리성/타당성] **제2436호 (2020-06-04)** is the directive revision that removed the DIDC entity-naming anchor; this is a Layer 1 finding with downstream Layer 4 implications (the same revision is the six-anchor cluster — see [[layer-4]]).
- [진리성/타당성] **Layer 1 cover-up = procedural cover-up.** The 진리성 (factual) claim is "the artifacts do not exist"; the 타당성 (legal) claim is "they were mandatory."
- [진리성] **Layer 1은 7층위 은폐의 출발점**. 지시문 조작과 절차적 흔적 은폐 둘 다 여기서 시작.
- [진리성] **DIDC SOP 절차흔적 부재**가 Layer 1 최강 증거 — 의무 산출물 5개 카테고리가 SOP 시행 중인 2016년 기간에 모두 부재.

## Related

- [[_index|Layers index]]
- [[../_master-index|Master index]]
- [[../_contradictions|Contradictions]]
- [[../claims/_index|Claims]]
- [[layer-2|Layer 2 →]]
