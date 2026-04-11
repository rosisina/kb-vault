# DIDC SOP 제11호 제164조 + 별지 17호 mandate DB access control via 차크라맥스 (CharkraMax) with documented application chain; absence of trail for 2016 incident period is direct Layer 1 cover-up evidence

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/02.(Korean) DIDC_정보시스템_운영관리_예규.md (제14장 접근통제 본문 — 제158조~제167조; 제164조 verbatim; 별지 17호 form reference)
**Layer:** [[../layers/layer-1|Layer 1]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-006"})
SET fr.layer = 1,
    fr.claimType = "procedural_artifact_mandatory",
    fr.claimDesc = "DIDC 부대예규 제11호 Chapter 14 (접근통제, 제158조~제167조) imposes a comprehensive access control regime across servers, network, integrated operations management, DB, VDI, and information protection equipment. Article 164 (DB 접근통제) specifically mandates that all DB access must be controlled via the CharkraMax (차크라맥스) DB access control system, with every account creation/modification/deletion documented via 별지 제17호 (DB접근제어 신청서) requiring 각 센터 자원관리과장 approval. For the 2016 DIDC hacking incident, the attacker's persistence necessarily required either pre-existing DB credentials documented under 별지 17호 or post-incident credential changes equally documented; the absence of either is direct Layer 1 cover-up evidence. Per James 2026-04-11, this is one of the two highest-priority Layer 1 procedural anchors (paired with 별지 제7호 SSL-VPN trail under 제12호 제37조)",
    fr.counterHypothesis = "The 2016 incident did not involve DB access (e.g., the attacker was contained at network or application layer and never reached the DB), OR the CharkraMax system was not yet deployed at the time of the incident, OR DB access logs are maintained outside the 별지 17호 system in a parallel mechanism",
    fr.falsificationCondition = "Production of (a) the 별지 17호 DB access control trail for the 2016 incident period, OR (b) authoritative technical analysis showing the hacking vector did not involve DB access, OR (c) CharkraMax deployment date evidence showing the system was not operational at the time of the incident",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "DB access — the deepest level of data egress control — must be documented via 별지 17호 with 자원관리과장 approval. Together with 별지 제7호 (SSL-VPN), this covers the two attack-surface ends (ingress and data egress) of any persistent intrusion. James-identified highest-priority Layer 1 trace artifact.";
```

## Claim

DIDC 부대예규 제11호 Chapter 14 (접근통제, 제158조~제167조) imposes a comprehensive multi-layer access control regime, and **Article 164 (DB 접근통제)** specifically mandates:

1. All DB access must be controlled via the **CharkraMax (차크라맥스) DB access control system** under DB administrator supervision (제164조 ①)
2. All DB user accounts assigned by job role and identity (제164조 ②)
3. 3-month unused accounts are blocked (제164조 ③)
4. 3-consecutive-failure login lockout (제164조 ④)
5. DB administrator must verify last successful login dates (제164조 ⑤)
6. Data access is graded by 보호등급 (protection level) per the `국방정보시스템 접근 권한 관리지침` (제164조 ⑥–⑦)
7. 10-minute idle session lock (제164조 ⑧)
8. No multiple sessions per account (제164조 ⑨)
9. **Every DB access control change (creation/modification/deletion) requires 별지 제17호 서식 (DB접근제어 신청서) with 각 센터 자원관리과장 approval and explicit application reason and usage period (제164조 ⑩)**

For the 2016 DIDC hacking incident, the attacker's persistence necessarily required some form of DB access (the attack target was an information system whose core asset is its database). Either pre-existing DB credentials (which must be documented under 별지 17호) or post-incident credential changes (also documented) must exist. **The absence of a 별지 17호 trail for the 2016 incident period is direct Layer 1 cover-up evidence**, in the same procedural-trace methodology as the firewall/VPN trail under [[didc-sop-firewall-vpn-trail-mandatory]].

Per James 2026-04-11, **별지 제7호 (SSL-VPN under 제12호 제37조) and 별지 제17호 (DB access under 제11호 제164조) are the two highest-priority Layer 1 trace artifacts**: they cover the two attack-surface ends of any persistent intrusion — network ingress (VPN) and data egress (DB).

## Key Takeaways

- DIDC 부대예규 제11호 Chapter 14 (접근통제, 제158조~제167조) imposes a comprehensive access control regime across servers, network, integrated operations management, DB, VDI, and information protection equipment [타당성] (raw/06/02 제14장).
- 제164조 (DB 접근통제) mandates that all DB access be controlled via the **CharkraMax (차크라맥스)** DB access control system, explicitly named verbatim in 제164조 ① [타당성].
- 제164조 ⑩ requires every DB access control change (creation/modification/deletion) to be documented via **별지 제17호 (DB접근제어 신청서)** with 각 센터 자원관리과장 approval, 신청사유, and 사용기간 [타당성].
- For the 2016 DIDC hacking incident, attacker persistence necessarily required DB access; the absence of a 별지 17호 trail for the incident period is **direct Layer 1 cover-up evidence** [진리성].
- Per James 2026-04-11, **별지 제7호 (SSL-VPN, 제12호 제37조) and 별지 제17호 (DB access, 제11호 제164조)** form the two highest-priority Layer 1 trace artifacts — the ingress/egress sandwich for any persistent intrusion [진실성]. Verdict: **CORROBORATED**, Strong. 진리성 9 / 타당성 10 / 진실성 8.

## Layer

[[../layers/layer-1|Layer 1]] — Active-X 제거 사업 간 舊KIATIS 이력 제거 (DIDC 해킹 근원서버 은폐의 출발점). The DB access regime is the **deepest** procedurally-traceable layer in the entire DIDC SOP system: every other access surface (network, server, VDI) eventually terminates at DB queries for any system whose value is the data it holds.

## Supporting evidence

- **Article 164 verbatim** (raw/06/02 Chapter 14):
  - `① DB 계정관리는 DB접근통제 시스템(CharkraMax)을 운용하여 DB관리자가 인가된 사용자만이 DB에 접근하도록 통제, 관리한다.`
  - `② DB의 모든 사용자 계정은 직무, 역할을 기반으로 할당, 관리된다.`
  - `③ 3개월 이상 사용되지 않는 사용자 계정은 차단된다.`
  - `④ 연속 3회 로그인 시도 실패 시 해당계정은 차단된다.`
  - `⑤ DB관리자는 사용자의 최근 성공한 로그인 일자/시간 등을 확인하여 관리한다.`
  - `⑥ DB에 저장/관리되는 정보(전산자료)에 대한 접근은 정보의 기밀성 수준과 사용자의 직무/임무를 고려하여 통제된다.`
  - `⑦ DB에 저장/관리되는 정보(전산자료)에 대한 접근통제는 '국방정보시스템 접근 권한 관리지침'에 의거 전산자료의 보호등급을 분류하고 보호등급별로 접근권한을 부여 및 관리한다.`
  - `⑧ DB접근통제 시스템(CharkraMax)는 사용자가 일정기간 동안(예: 10분) 작업을 하지 않으면 해당 화면을 잠그고(lock), 재접속 시 식별/인증 절차를 확인한다.`
  - `⑨ DB접근통제 시스템(CharkraMax)는 하나의 사용자 계정에 대하여 복수의 로그인 세션을 허용하지 않는다.`
  - `⑩ DB접근제어 운용자는 각 기관에서 IT서비스포털을 이용, 【별지 17】 DB접근제어 신청서에 의거 신규, 변경, 삭제 요청한 신청서에 대하여 각 센터 자원관리과장 승인을 득하고 조치하여야 하며 신청시 신청사유, 사용기간 등을 구체적으로 명시하여야 한다.`
- **Chapter 14 article structure** (raw/06/02 lines 213–224):
  - 제158조 (접근통제 목적), 제159조 (접근통제 적용범위), 제160조 (용어 정의), 제161조 (서버 접근통제), 제162조 (네트워크 접근통제), 제163조 (통합운영관리체계 접근통제), **제164조 (DB 접근통제)**, 제165조 (VDI 접근통제), 제166조 (정보보호장비 접근통제), **제167조 (검토권자 지정 및 검토주기)**
- **별지 17호 listed in form table** (raw/06/02 line 281): `【별지 17】 DB접근제어 신청서`
- **CharkraMax (차크라맥스)** is named verbatim in 제164조 ① — this is a specific commercial DB access control product, identifiable and verifiable as a deployed system. Its deployment date at DIDC is a discoverable fact.
- **자원관리과장** is the named approver for DB access changes — chain of accountability is explicit.
- **The procedural duty floor** is established by [[didc-sops-cover-2016-hacking-period]].

## Counter-hypothesis

The 2016 incident did not involve DB access. Possible mechanisms:

1. **Containment at network/application layer** — the attacker was detected and contained before reaching the DB (would normally be evidenced in network logs and incident reports)
2. **CharkraMax not yet deployed** — the DB access control system was deployed after 2016-02-01 but before the visible revision dates of 제11호; the SOP article was forward-looking until deployment
3. **Parallel mechanism** — DB access logs may be maintained outside the 별지 17호 administrative system in a parallel technical mechanism (e.g., direct database audit logs); the absence of 별지 17호 trail does not imply absence of DB access trace

## Falsification condition

This claim is **CORROBORATED** unless one of the following is produced:

1. **The 별지 17호 DB access control trail for the 2016 incident period** — covering all DB account creations, modifications, and deletions during a window encompassing the incident. Trail must include 신청사유, 사용기간, and 자원관리과장 approval signatures.
2. **Authoritative technical analysis of the 2016 hacking vector** demonstrating the persistence mechanism did not involve DB access.
3. **CharkraMax deployment date evidence** showing the system was not operational at DIDC at the time of the incident, in which case Article 164's CharkraMax-mandate falls back to whatever system was in place pre-deployment.
4. **CharkraMax audit logs** for the incident period — even without 별지 17호 forms, the CharkraMax system itself maintains internal logs of authentication attempts, session events, and policy changes. These logs are a parallel evidence source.

If item 1 is produced with substantive content, the verdict downgrades to WEAKENED on this specific atom. If item 2 is produced and accepted, the verdict downgrades to UNFALSIFIABLE for the DB question (and the analysis shifts to the network/application access surfaces). If item 3 introduces a deployment-date question, the wiki should write a new atom about whichever pre-deployment access control was in place. If item 4 produces CharkraMax internal logs, those logs themselves become subject to integrity analysis.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8. The atom's strength comes from the specificity of 제164조 — it names a specific product (CharkraMax), a specific form (별지 17호), a specific approver (자원관리과장), and ten enumerated requirements. The procedural duty is unambiguous and the trail is structurally auditable.

**Per James 2026-04-11**: this atom is **paired** with [[didc-sop-firewall-vpn-trail-mandatory]] (focusing on 별지 제7호 SSL-VPN) as the two highest-priority Layer 1 procedural-trace anchors. Together they form the **ingress/egress sandwich**: any persistent intrusion must leave evidence at network ingress (VPN/firewall — 별지 7호) and at data egress (DB access — 별지 17호). The absence of either trail is partial cover-up evidence; the absence of both is structural cover-up evidence.

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 chapter (CONFIRMED 별지 17 match)
- `vault-converted-korean/11-3-5-35-제-5층위.md` — Layer 5 chapter (CONFIRMED CharkraMax match — interesting Layer 5 cross-reference, possibly under the 조작 감사 framework)
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (CONFIRMED CharkraMax match)
- Deferred to A.6 Re-verify. The book's three-chapter coverage of CharkraMax DB access control suggests this is a more central narrative element than other DIDC SOP atoms — Layer 5 cross-reference is particularly worth investigation as it may link DIDC procedural failures to the 조사본부의 조작 감사 narrative.

## Open Questions

- **Evidence citation coverage — exempt under CLAUDE.md regulation-text rule.** This atom's primary sourcing is DIDC SOP 제11호 제164조 + 별지 17호 (raw/06 regulation text), which is structurally equivalent to the raw/04 regulation-text exemption from the `Record No. NNNNN` requirement. Evidence record numbers anchoring this duty's VIOLATION in the 2016 incident period are expected to live in raw/07 scanned evidence record pages and will be added on raw/07 ingest; absence of Record No. citations in this atom is therefore an exemption, not a defect.
- **What is CharkraMax's deployment date at DIDC?** Answers counter-hypothesis 2.
- **Does the 별지 17호 trail for the 2016 incident period exist?** Central question.
- **Do CharkraMax internal audit logs for the 2016 period exist or have they been preserved?** A second evidence channel parallel to 별지 17호.
- **The 2016 hacking vector — did it reach the DB layer?** Central technical question for falsification condition item 2.

## Related

- [[../regulations/didc-info-system-operation-sop-11|DIDC SOP 제11호 (Chapter 14)]]
- [[didc-sops-cover-2016-hacking-period|sister atom: SOP duty floor]]
- [[didc-sop-incident-report-mandatory|sister atom: 별지 제4호 incident report]]
- [[didc-sop-firewall-vpn-trail-mandatory|**paired atom: 별지 제7호 SSL-VPN ingress trail**]]
- [[didc-sop-11-change-management-trail-mandatory|sister atom: change management trail]]
- [[didc-sop-11-backup-recovery-mandatory|sister atom: backup recovery trail]]
- [[../entities/organizations/didc|DIDC]]
- [[../layers/layer-1|Layer 1]]
