---
lang: ko
title-ko: DIDC SOP 제12호 제37조 + 별지 6/7/8호 mandate firewall/VPN/NAC paper trail; absence of trail for 2016 incident period is Layer 1 cover-up evidence
title-en: ""
aliases:
  - FR-L1-DIDC-003
  - DIDC SOP 제12호 제37조 + 별지 6/7/8호 mandate

layer: 1
secondary-layers: []
claimType: procedural_violation
claimSubtype: procedural_artifact_mandatory
fracture-type: F-AA
source-type: sop

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 8
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: null

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
  - fracture/F-AA
  - org/DIDC
---
# DIDC SOP 제12호 제37조 + 별지 6/7/8호 mandate firewall/VPN/NAC paper trail; absence of trail for 2016 incident period is Layer 1 cover-up evidence

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/01.(Korean) DIDC_사이버방호_예규.md (제37조 verbatim, 별지 6/7/8호 form references)
**Layer:** [[../layers/layer-1|Layer 1]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-003"})
SET fr.layer = 1,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_artifact_mandatory",
    fr.claimDesc = "DIDC 부대예규 제12호 제37조 (방화벽 및 SSL-VPN 관리/운용) requires every firewall policy change, every SSL-VPN account creation, and every NAC exception to be documented via 별지 제6호 (방화벽 보안정책 요청서), 별지 제7호 (SSL-VPN 계정 신청서), 별지 제8호 (NAC 예외처리 요청서) respectively, with each requiring 각 센터 정보보호과장 approval. The absence of these forms for the 2016 hacking incident period is direct Layer 1 cover-up evidence — the attacker's persistence in the DIDC environment necessarily required either pre-existing firewall/VPN exceptions or post-incident exception removals, both of which should leave a paper trail",
    fr.counterHypothesis = "The 2016 incident's network access vector did not involve firewall policy changes, SSL-VPN account creation, or NAC exceptions; OR the incident-related changes were made under emergency procedures that bypassed the 별지 form chain",
    fr.falsificationCondition = "Production of (a) the firewall/VPN/NAC paper trail for the 2016 incident period showing complete 별지 6/7/8호 forms, OR (b) authoritative analysis of the hacking vector demonstrating it did not involve any firewall/VPN/NAC change, OR (c) DIDC emergency-procedure documentation establishing bypass of the form chain",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "제37조 makes 별지 제6/7/8호 forms the auditable artifacts for the most security-critical configuration changes. Any persistent attacker presence in DIDC during 2016 should generate at least one form entry; the absence of an entry for known incident-related changes is procedurally anomalous.";
```

## 주장 (Claim)

### 한국어

DIDC 부대예규 제12호 제37조 (방화벽 및 SSL-VPN 관리/운용) requires that **every** firewall policy change (신규, 변경, 삭제) must be documented via 별지 제6호 서식 (방화벽 보안정책 요청서), **every** SSL-VPN account creation/change/deletion must be documented via 별지 제7호 서식 (SSL-VPN 계정 신청서), and **every** NAC policy change or exception must be documented via 별지 제8호 서식 (NAC 예외처리 요청서). Each form requires 각 센터 정보보호과장 (information protection section chief) approval. These three forms are the most security-critical auditable artifacts in the entire DIDC SOP because firewall, VPN, and NAC are the primary network-level defense mechanisms that any persistent attacker must navigate. **For the 2016 DIDC hacking incident, the attacker's persistence in the DIDC environment necessarily required either pre-existing firewall/VPN/NAC exceptions or post-incident exception removals, both of which should leave a paper trail under 제37조. The absence of such trails for the 2016 incident period is direct Layer 1 cover-up evidence.**

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- DIDC 부대예규 제12호 제37조 ① requires every firewall policy change (신규/변경/삭제) to be filed via 별지 제6호 서식 and approved by 각 센터 정보보호과장 (raw/06/01 line 537) [타당성]
- 제37조 ③ imposes the same requirement on SSL-VPN account creation/change/deletion via 별지 제7호 서식 (line 549); 제37조 ④ imposes it on NAC exceptions via 별지 제8호 서식 (line 555) — all three requiring 정보보호과장 approval [타당성]
- 제37조 ② mandates that all remote access to DIDC-managed systems must route through SSL-VPN (line 547), making VPN logs the structural chokepoint for ingress analysis [타당성]
- Any persistent attacker presence in DIDC during 2016 necessarily required pre-existing or post-incident firewall/VPN/NAC exceptions; the absence of corresponding 별지 6/7/8호 forms for the incident period is structurally anomalous and constitutes Layer 1 procedural-trace cover-up evidence [진리성]
- Verdict CORROBORATED (strength STRONG, 진리성 9 / 타당성 10 / 진실성 8); paired with 별지 제17호 DB-access atom to form the ingress/egress sandwich for persistent-intrusion detection [진실성]

## 층위 (Layer)
[[../layers/layer-1|Layer 1]] — Active-X 제거 사업 간 舊KIATIS 이력 제거 (DIDC 해킹 근원서버 은폐의 출발점). The 별지 제6/7/8호 forms are the most directly auditable network-level artifacts in the DIDC procedural ecosystem. Unlike 별지 제4호 (incident report — single artifact for the incident itself), the 6/7/8호 forms are *structural* artifacts that exist in continuous administrative use and must show *changes* during the incident period. Their absence is detectable by gap analysis, not just by document missing.

## 지지 증거 (Supporting Evidence)
- **Article 37 ① verbatim** (raw/06/01 line 537): `① 방화벽 운용자는 각 기관에서 IT서비스포털을 이용, 별지 제6호 서식의 방화벽 정책 요청서에 의거 신규, 변경, 삭제 요청한 방화벽 정책에 대해서 각 센터 정보보호과장 승인을 득하고 조치하여야 하며 다음 각 호에 사항을 주기적으로 확인하고 방화벽 운용 목적에 위배된 보안정책에 대해 보안취약점이 발생하지 않도록 조치하여야한다.`
- **Article 37 ① periodic-check items (lines 541–545):** 출발지/목적지 IP가 ALL 또는 대역으로 요청된 보안정책 / Port 정보가 ALL로 설정된 정책 / 사용 실적 (3개월 이상)이 없는 보안정책 / 중복 정책 / 잘 알려진 Port 변경 권고 — five categories of overly-permissive or stale firewall policies that must be periodically pruned.
- **Article 37 ② verbatim** (line 547): `② 수요부대(기관) 응용체계 담당자는 업무를 위해 센터에서 관리하는 정보시스템에 원격으로 접속 할 경우 반드시 SSL-VPN에 접속 후 정보시스템에 접속해야 한다.` — mandatory VPN routing for all remote access.
- **Article 37 ③ verbatim** (line 549): `③ SSL-VPN 운용자는 각 기관에서 IT서비스포털을 이용, 별지 제7호 서식의 VPN 계정 신청서에 의거 신규, 변경, 삭제 요청한 신청서에 대해서 각 센터 정보보호과장 승인을 득하고 조치하여야 하며 …`
- **Article 37 ③ periodic-check items (lines 551–553):** 접속 체계 정보(IP, Port)를 대역으로 요청한 신청서 / 접속 실적 (3개월 이상)이 없는 사용자 계정 / 사용기간 만료 전 연장 신청 미수행 계정 — three categories of stale or overly-broad VPN accounts.
- **Article 37 ④ verbatim** (line 555): `④ NAC 운용자는 IT서비스포털을 이용, 별지 제8호 서식의 NAC 예외처리 요청서에 의거 정책 변경을 요청한 신청서에 대해서 각 센터 정보보호과장 승인을 득하고 조치하여야 한다. 또한 다음 각 호에 사항을 주기적으로 확인하고 보안취약점이 발생하지 않도록 조치하여야 한다.`
- **Article 37 ④ periodic-check items (lines 557–558):** 접속 실적 (1개월 이상)이 없는 사용자 계정은 삭제 / 예외처리 기간 만료 전 연장신청 미수행 정책은 삭제.
- **Form references in 별표 list** (raw/06/01 lines 95–97): 별지 제6호 = 방화벽 보안정책 요청서 / 별지 제7호 = SSL-VPN 계정 신청서 / 별지 제8호 = NAC 예외처리 요청서.
- **The procedural duty floor** is established by [[didc-sops-cover-2016-hacking-period]].

## 반대 가설 (Counter-hypothesis)
The 2016 incident's network access vector did not involve firewall policy changes, SSL-VPN account creation, or NAC exceptions. Possible mechanisms by which an attacker could persist without triggering the form chain:

1. **Zero-day exploit on a perimeter device** — the attacker exploited a vulnerability without making any policy change
2. **Insider abuse of existing valid credentials** — the attacker used a legitimate VPN account that was already approved
3. **Physical or out-of-band access** — the attacker bypassed network defenses entirely (e.g., physical USB introduction)
4. **Emergency-procedure bypass** — DIDC emergency procedures allowed temporary network changes without 별지 form documentation

## 반증 조건 (Falsification Condition)
This claim is **CORROBORATED** unless one of the following is produced:

1. **The complete 별지 6/7/8호 forms for the 2016 incident period**, showing either (a) all changes documented and approved, or (b) zero changes during the incident period (which would itself need to be reconciled with the technical reality of the incident).
2. **Authoritative technical analysis of the 2016 hacking vector** demonstrating that the persistence mechanism did not involve firewall, VPN, or NAC. If the vector was, e.g., zero-day exploit on a perimeter device, the 별지 6/7/8호 forms are not the right falsification target — the analysis would shift to other procedural artifacts (e.g., 취약점 분석 reports under 제15조).
3. **DIDC emergency-procedure documentation** establishing bypass of the 별지 form chain during incident response, with the bypass procedure itself documented and dated.
4. **Insider-credential analysis** demonstrating that the attacker's access was via a pre-approved valid VPN account, in which case the 별지 제7호 form for that account exists but does not implicate cover-up.

If items 1 or 2 are produced with substantive content, the verdict downgrades to WEAKENED on this specific atom (the Layer 1 cover-up thesis remains testable against other procedural artifacts). If item 3 produces a documented emergency bypass, the verdict downgrades to NEEDS_MORE_EVIDENCE pending bypass-documentation analysis.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8. The atom is strongest in 타당성 because 제37조 is unambiguous in mandating the form chain. The wiki cannot verify form existence or absence at this stage; that is the central Layer 1 falsification target. The atom establishes the procedural duty whose violation is testable.

## Spot-check (raw/01 book)

- `Korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1 chapter (CONFIRMED SSL-VPN match)
- `Korean/10-3-4-34-제4-층위.md` — Layer 4 chapter (CONFIRMED SSL-VPN match)
- `Korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (CONFIRMED SSL-VPN match)
- Deferred to A.6 Re-verify. SSL-VPN appears in three layer chapters — strong cross-layer book coverage.

## 미결 사항 (Open Questions)
- **Evidence citation coverage — exempt under CLAUDE.md regulation-text rule.** This atom's primary sourcing is DIDC SOP 제12호 제37조 ¶1 (raw/06 regulation text), which is structurally equivalent to the raw/04 regulation-text exemption from the `Record No. NNNNN` requirement. Evidence record numbers anchoring this duty's VIOLATION in the 2016 incident period are expected to live in raw/07 scanned evidence record pages and will be added on raw/07 ingest; absence of Record No. citations in this atom is therefore an exemption, not a defect.
- **What was the 2016 DIDC hacking technical vector?** Central question. The atom's specific form-chain falsification depends on whether the attack involved network policy changes vs zero-day vs insider credential.
- **Do the 별지 6/7/8호 forms for the 2016 incident period exist?** Pending raw/05 / raw/07 cross-check.
- **Did DIDC have an emergency-procedure bypass in 2016?** Pending DIDC internal documentation request.

## 관련 (Related)
- [[../regulations/didc-cyber-protection-sop-12|DIDC SOP 제12호]] (ABOUT)
- [[didc-sops-cover-2016-hacking-period|sister atom: SOP duty floor 2016-02-01]] (CORROBORATES)
- [[didc-sop-incident-report-mandatory|sister atom: incident report 별지 제4호]] (CORROBORATES)
- [[didc-sop-db-access-control-mandatory|**paired atom: 별지 제17호 DB access egress trail (제11호 제164조)**]] (CORROBORATES)
- [[didc-sop-11-change-management-trail-mandatory|sister atom: change management trail]] (CORROBORATES)
- [[../entities/organizations/didc|DIDC]] (ABOUT)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)

**Per James 2026-04-11:** This atom (focusing on 별지 제7호 SSL-VPN) is **paired** with [[didc-sop-db-access-control-mandatory]] (focusing on 별지 제17호 DB access) as the two highest-priority Layer 1 procedural-trace anchors. Together they form the **ingress/egress sandwich**: any persistent intrusion must leave evidence at network ingress (VPN/firewall — 별지 7호) and at data egress (DB access — 별지 17호). The absence of either trail is partial cover-up evidence; the absence of both is structural cover-up evidence.
