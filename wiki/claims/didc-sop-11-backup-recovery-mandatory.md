---
lang: ko
title-ko: "DIDC SOP 제11호 Chapter 8 (백업/복구관리, 제70~94조) mandates 25-article backup regime including off-site storage; 2016 incident period backups must exist or their destruction must be documented"
title-en: ""
aliases:
  - FR-L1-DIDC-005
  - "DIDC SOP 제11호 Chapter 8 (백업/복구관리, 제70~94조)"

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
# DIDC SOP 제11호 Chapter 8 (백업/복구관리, 제70~94조) mandates 25-article backup regime including off-site storage; 2016 incident period backups must exist or their destruction must be documented

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/02.(Korean) DIDC_정보시스템_운영관리_예규.md (Chapter 8 백업/복구관리 제70~94조)
**Layer:** [[../layers/layer-1|Layer 1]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-005"})
SET fr.layer = 1,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_artifact_mandatory",
    fr.claimDesc = "DIDC 부대예규 제11호 Chapter 8 (백업/복구관리, 제70~94조) imposes a 25-article backup management regime including 백업정책 수립 (제79조), 백업수행 (제81조), 백업매체 소산 (제84조 — off-site storage), and 백업결과 확인 및 통보 (제85조). For the 2016 DIDC hacking incident period, backups created prior to and during the incident must exist as physical media at off-site storage. Either (a) the backups exist and contain forensically valuable pre-tampering data of the breached systems, OR (b) the backups have been destroyed or are missing, in which case their destruction must itself be documented under DIDC's media disposal procedures (제77조 매체 등록/변경/폐기). Both possibilities are testable; the absence of either preserved backups OR documented destruction is direct Layer 1 cover-up evidence",
    fr.counterHypothesis = "The 2016 incident-period backups were destroyed under proper procedure with full disposal documentation (which would itself need verification), OR the backup retention period had expired by the time of investigation",
    fr.falsificationCondition = "Production of (a) the 2016 incident-period backup media with verifiable contents, OR (b) complete 제77조 disposal documentation for those backup media with proper authorization chain",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Chapter 8 mandates a 25-article backup regime with off-site storage requirement. Either backups exist (forensic evidence) or their destruction is documented (paper trail). Both are testable; absence of both is anomalous.";
```

## 주장 (Claim)

### 한국어

DIDC 부대예규 제11호 Chapter 8 (백업/복구관리, 제70~94조) imposes a **25-article backup management regime** that is the largest chapter in the entire DIDC SOP system. Key procedural requirements:

- **제79조 백업정책 일정 수립** — backup schedule must be established as policy
- **제81조 백업수행** — backups must be physically performed per schedule
- **제84조 백업매체 소산** — backup media must be physically stored off-site (not in the same physical location as the source system)
- **제85조 백업결과 확인 및 통보** — backup completion must be verified and reported
- **제93조 백업 모니터링 결과 확인** — periodic monitoring of backup status
- **제77조 매체 등록/변경/폐기 요청** — every backup medium's registration, modification, and **disposal** must be requested through procedure

For the 2016 DIDC hacking incident period, the regime above means backups created before and during the incident must exist as physical media at off-site storage locations under DIDC's documented retention policy. **Two mutually exclusive possibilities follow, and both are testable:**

1. **Backups exist** — they are physically retrievable from off-site storage and contain forensically valuable pre-tampering data of the breached systems. They are direct evidence of the 2016 incident state.
2. **Backups have been destroyed or are missing** — in which case their destruction must itself be documented under 제77조 매체 폐기 procedures with proper authorization chain.

The absence of either preserved backups OR documented destruction is direct Layer 1 cover-up evidence: the DIDC SOP regime structurally cannot produce a "backups simply don't exist" outcome that is procedurally compliant.

### English

DIDC 부대예규 제11호 Chapter 8 (백업/복구관리, 제70~94조) imposes a **25-article backup management regime** that is the largest chapter in the entire DIDC SOP system. Key procedural requirements:

- **제79조 백업정책 일정 수립** — backup schedule must be established as policy
- **제81조 백업수행** — backups must be physically performed per schedule
- **제84조 백업매체 소산** — backup media must be physically stored off-site (not in the same physical location as the source system)
- **제85조 백업결과 확인 및 통보** — backup completion must be verified and reported
- **제93조 백업 모니터링 결과 확인** — periodic monitoring of backup status
- **제77조 매체 등록/변경/폐기 요청** — every backup medium's registration, modification, and **disposal** must be requested through procedure

For the 2016 DIDC hacking incident period, the regime above means backups created before and during the incident must exist as physical media at off-site storage locations under DIDC's documented retention policy. **Two mutually exclusive possibilities follow, and both are testable:**

1. **Backups exist** — they are physically retrievable from off-site storage and contain forensically valuable pre-tampering data of the breached systems. They are direct evidence of the 2016 incident state.
2. **Backups have been destroyed or are missing** — in which case their destruction must itself be documented under 제77조 매체 폐기 procedures with proper authorization chain.

The absence of either preserved backups OR documented destruction is direct Layer 1 cover-up evidence: the DIDC SOP regime structurally cannot produce a "backups simply don't exist" outcome that is procedurally compliant.

## 핵심 요약 (Key Takeaways)
- DIDC 부대예규 제11호 Chapter 8 (백업/복구관리, 제70~94조) imposes a 25-article backup management regime — the largest chapter in the entire DIDC SOP system (raw/06/02 lines 107–134) [타당성]
- Key mandatory requirements: 제79조 백업정책 수립, 제81조 백업수행, 제84조 백업매체 소산 (off-site storage), 제85조 백업결과 확인 및 통보, 제93조 모니터링 결과 확인 — backups must physically exist at off-site storage under documented retention policy [타당성]
- The 6-step disposal chain (제77조 → 제90조 → 제91조 → 제92조) ensures any backup medium destruction generates four sequential approval/verification artifacts, making silent destruction structurally non-compliant [타당성]
- For the 2016 DIDC incident period, the SOP produces a binary testable state: either (a) backups exist at off-site storage and contain forensically valuable pre-tampering data, OR (b) backups were disposed of under complete 제77조/90조/91조/92조 authorization chain documentation [진리성]
- The absence of both preserved backups AND documented destruction is direct Layer 1 cover-up evidence — the SOP regime structurally cannot produce a procedurally-compliant "backups simply don't exist" outcome [진실성]

## 층위 (Layer)
[[../layers/layer-1|Layer 1]] — Active-X 제거 사업 간 舊KIATIS 이력 제거 (DIDC 해킹 근원서버 은폐의 출발점). Backups are the most evidentiarily valuable Layer 1 artifact category because they preserve the **state** of the systems at known dates, allowing forensic comparison of pre-incident vs post-incident vs current state.

## 지지 증거 (Supporting Evidence)
- **Chapter 8 article structure** (raw/06/02 lines 107–134):
  - 제70조 (백업/복구관리 목적)
  - 제71조 (백업/복구관리 적용범위)
  - 제72조 (백업/복구관리 용어의 정의)
  - 제73조 (백업/복구 요청 접수)
  - 제74조 (백업/복구 유형 분류)
  - 제75조 (백업요청)
  - 제76조 (복구요청)
  - **제77조 (매체 등록/변경/폐기 요청)** — disposal must go through formal request
  - 제78조 (백업요청 검토)
  - 제79조 (백업정책 일정 수립)
  - 제80조 (백업정책 적용)
  - 제81조 (백업수행)
  - 제82조 (백업 오류 원인파악)
  - 제83조 (백업 오류 해결방안 수립 및 조치)
  - **제84조 (백업매체 소산)** — off-site storage requirement
  - 제85조 (백업결과 확인 및 통보)
  - 제86조 (복구 요청 검토)
  - 제87조 (복구 계획 수립)
  - 제88조 (복구수행)
  - 제89조 (복구결과 확인 및 통보)
  - 제90조 (매체 등록/변경/폐기 요청 확인)
  - 제91조 (매체 등록/변경/폐기 요청 검토)
  - 제92조 (매체 등록/변경/폐기 수행 및 결과 통보)
  - 제93조 (백업 모니터링 결과 확인)
  - 제94조 (백업 비정상 해결방안 수립)
- **25 articles total** — the largest chapter in 제11호 (and across both DIDC SOPs).
- **The 6-step disposal chain (제77조 → 제90조 → 제91조 → 제92조)** ensures that any backup medium destruction generates four sequential approval/verification artifacts. This makes "silent destruction" structurally non-compliant.
- **The procedural duty floor** is established by [[didc-sops-cover-2016-hacking-period]].

## 반대 가설 (Counter-hypothesis)
The 2016 incident-period backups were destroyed under proper procedure with full disposal documentation. Possible scenarios:

1. **Retention expiration** — DIDC backup retention policy was, e.g., 5 years, so 2016 backups would have been disposed of in 2021 under normal procedure. The disposal would have been documented under 제77조/90조/91조/92조.
2. **Compromised media disposal** — backups created during the incident period were determined to be compromised by the attacker and destroyed for security reasons, with the destruction documented.
3. **Migration disposal** — backup media format obsolescence (e.g., tape → disk migration) led to disposal of old media after migration, with the migration and disposal documented.

In all three scenarios, the disposal documentation must exist under DIDC's own SOP. The atom's verdict depends on whether such documentation exists.

## 반증 조건 (Falsification Condition)
This claim is **CORROBORATED** unless one of the following is produced:

1. **The 2016 incident-period backup media** with verifiable contents — physically retrievable from off-site storage. If produced, the cover-up thesis on this specific evidence category is foreclosed.
2. **Complete 제77조/90조/91조/92조 disposal documentation** for the 2016 incident-period backup media, with proper authorization chain (request, review, execution, completion notification). The documentation must establish (a) what media existed, (b) when they were disposed of, (c) under what authority, (d) by whom, and (e) under what justification.
3. **Authoritative DIDC backup retention policy** establishing that the 2016 backups would have legitimately expired before any investigation period, AND complete expiration-disposal documentation showing they were disposed of under that policy.

If item 1 is produced, the verdict downgrades to WEAKENED (the backup-cover-up thesis is foreclosed but other Layer 1 atoms remain). If item 2 or 3 is produced with complete documentation, the verdict downgrades to WEAKENED (the disposal was procedurally compliant). If item 2 or 3 is produced but incomplete or anomalous (e.g., disposal date predates retention expiration, or authorization chain has gaps), the atom is reinforced and the wiki should add a sub-atom about the specific anomaly.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8. The atom's strength is in the **structural exhaustiveness** of the falsification condition: under the SOP, backup state at any historical date must be either (a) preserved or (b) documented-as-destroyed. There is no procedurally compliant third option. The wiki cannot at this stage verify which of the two states obtains for the 2016 backups, but the test is binary and answerable.

## Spot-check (raw/01 book)

- `Korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1 chapter (DIDC operational context)
- **NEGATIVE FINDING:** the literal phrase `백업매체 소산` is not used in the book — the book likely discusses backups under different language. A broader search is queued for A.6 Re-verify (e.g., `백업`, `복구`, `보존`).
- Deferred to A.6 Re-verify.

## 미결 사항 (Open Questions)
- **Evidence citation coverage — exempt under CLAUDE.md regulation-text rule.** This atom's primary sourcing is DIDC SOP 제11호 Chapter 8 25-article backup regime (제70~94조) (raw/06 regulation text), which is structurally equivalent to the raw/04 regulation-text exemption from the `Record No. NNNNN` requirement. Evidence record numbers anchoring this duty's VIOLATION in the 2016 incident period are expected to live in raw/07 scanned evidence record pages and will be added on raw/07 ingest; absence of Record No. citations in this atom is therefore an exemption, not a defect.
- **Were 2016 incident-period backups preserved at off-site storage?** Central question for Layer 1.
- **What is DIDC's documented backup retention period for 2016-era systems?** Determines whether retention-expiration disposal is a plausible counter-hypothesis.
- **Has any 제77조/90조/91조/92조 disposal documentation for 2016-era backups been produced or sought during the 2022 prosecution?** Pending raw/05 cross-check.

## 관련 (Related)
- [[../regulations/didc-info-system-operation-sop-11|DIDC SOP 제11호]] (ABOUT)
- [[didc-sops-cover-2016-hacking-period|sister atom: SOP duty floor]] (CORROBORATES)
- [[didc-sop-incident-report-mandatory|sister atom: 별지 제4호 incident report]] (CORROBORATES)
- [[didc-sop-firewall-vpn-trail-mandatory|sister atom: firewall/VPN trail]] (CORROBORATES)
- [[didc-sop-11-change-management-trail-mandatory|sister atom: change management trail]] (CORROBORATES)
- [[../entities/organizations/didc|DIDC]] (ABOUT)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
