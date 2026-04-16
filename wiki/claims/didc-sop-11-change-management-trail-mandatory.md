---
lang: ko
title-ko: "DIDC SOP 제11호 Chapter 4 (변경관리, 제21~32조) mandates 11-gate change-management trail; KIATIS-era system changes at DIDC must have generated this trail"
title-en: ""
aliases:
  - FR-L1-DIDC-004
  - "DIDC SOP 제11호 Chapter 4 (변경관리, 제21~32조) mandates"

layer: 1
secondary-layers: [4]
claimType: procedural_violation
claimSubtype: procedural_artifact_mandatory
fracture-type: null
source-type: sop

verdict: CORROBORATED
strength: MODERATE
truthfulness: 7
validity: 10
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
  - 국전원
has-verbatim: false

tags:
  - layer/L1
  - layer/L4
  - verdict/corroborated
  - strength/moderate
  - type/procedural-violation
  - source/sop
  - org/DIDC
  - org/국전원
  - cross-layer
---
# DIDC SOP 제11호 Chapter 4 (변경관리, 제21~32조) mandates 11-gate change-management trail; KIATIS-era system changes at DIDC must have generated this trail

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/02.(Korean) DIDC_정보시스템_운영관리_예규.md (Chapter 4 변경관리 제21~32조)
**Layer:** [[../layers/layer-1|Layer 1]] (primary), [[../layers/layer-4|Layer 4]] (secondary — KIATIS DIDC residence)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-004"})
SET fr.layer = 1,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_artifact_mandatory",
    fr.claimDesc = "DIDC 부대예규 제11호 Chapter 4 변경관리 (제21~32조) imposes an 11-gate procedural chain for any change to DIDC-hosted information systems: 변경 요청 접수 → 검토 및 반려 → 유형 분류 → 계획 수립 → 계획 승인 → 변경 작업 → 보안성 검토 요청 (제30조) → 적용 결과 검토 → 결과 검토 확인. Each gate generates documentary artifacts. KIATIS, as a DIDC-hosted system during 2018–2019, was subject to this regime; any KIATIS-era system change at DIDC must have produced 11-gate trail artifacts. The absence or alteration of these artifacts for KIATIS is direct Layer 1 + Layer 4 evidence",
    fr.counterHypothesis = "KIATIS during 2018–2019 was not hosted at DIDC, OR KIATIS changes were exempt from the 제11호 변경관리 regime under a separate carve-out, OR KIATIS changes were managed under 국전원's own change-management procedures rather than DIDC's",
    fr.falsificationCondition = "Production of (a) the KIATIS DIDC-hosting confirmation showing the system was at DIDC during 2018–2019, AND (b) the 11-gate change-management trail for any specific KIATIS change in that period, OR alternatively (c) regulatory documentation establishing that KIATIS was NOT hosted at DIDC during 2018–2019",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 10,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Chapter 4 mandates an 11-gate trail for any DIDC-hosted system change. KIATIS DIDC-hosting status during 2018–2019 needs verification before the trail-absence question can be tested.";
```

## 주장 (Claim)

### 한국어

DIDC 부대예규 제11호 Chapter 4 (변경관리) imposes an **11-gate procedural chain** on any change to a DIDC-hosted information system: (1) 변경 요청 접수 → (2) 변경 요청 검토 및 반려 → (3) 변경 요청 접수 및 유형 분류 → (4) 변경 계획 수립 → (5) 변경 계획 승인 → (6) 변경 작업 → (7) **보안성 검토 요청** (제30조) → (8) 변경 적용 결과 검토 → (9) 변경 적용 결과 검토 확인. Each gate generates documentary artifacts (request forms, review forms, approval signatures, security review records, result verifications). KIATIS, as the central system in this case's narrative, was hosted at DIDC during the 2018–2019 development and test evaluation period (subject to verification — see Open Questions). Any KIATIS-era system change must therefore have produced the 11-gate trail artifacts. **The absence, alteration, or post-hoc reconstruction of these artifacts for KIATIS-related changes is direct Layer 1 (DIDC procedural cover-up) + Layer 4 (KIATIS test-evaluation manipulation) evidence.**

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- DIDC 부대예규 제11호 Chapter 4 제21~32조 (raw/06/02 lines 46–60) imposes a procedural chain on any change to a DIDC-hosted information system, with each gate generating documentary artifacts [타당성]
- 제30조 (보안성 검토 요청) is the explicit textual bridge to 예규 제12호: every operational change triggers a parallel security review, so KIATIS-era changes should have produced artifacts under both SOPs [타당성]
- The 제22조 application scope covers all DIDC-hosted system changes, confirmed by 제12호 제2조's universal DIDC system coverage [타당성]
- The absence, alteration, or post-hoc reconstruction of 11-gate trail artifacts for KIATIS-related changes would be direct Layer 1 + Layer 4 cover-up evidence, contingent on KIATIS DIDC-hosting status during 2018–2019 [진리성]
- Verdict NEEDS_MORE_EVIDENCE (strength MODERATE, 진리성 7 / 타당성 10 / 진실성 7); verdict elevates once the KIATIS DIDC-hosting pre-requisite is resolved via raw/01 + raw/06 compile [진실성]

## 층위 (Layer)
[[../layers/layer-1|Layer 1]] primary — DIDC procedural cover-up. [[../layers/layer-4|Layer 4]] secondary — KIATIS-specific test-evaluation manipulation. The 11-gate trail is the bridge between the two layers because KIATIS-era system changes at DIDC are simultaneously DIDC-procedural (Layer 1) and KIATIS-procedural (Layer 4). Both layers should have evidence in the same trail.

## 지지 증거 (Supporting Evidence)
- **Chapter 4 article structure** (raw/06/02 lines 46–60):
  - 제21조 (변경관리 목적)
  - 제22조 (변경관리 적용범위)
  - 제23조 (변경관리 용어의 정의)
  - 제24조 (변경 요청 접수)
  - 제25조 (변경 요청 검토 및 반려)
  - 제26조 (변경 요청 접수 및 유형 분류)
  - 제27조 (변경 계획 수립)
  - 제28조 (변경 계획 승인)
  - 제29조 (변경 작업)
  - **제30조 (보안성 검토 요청)** — explicit security-review gate
  - 제31조 (변경 적용 결과 검토)
  - 제32조 (변경 적용 결과 검토 확인)
- **Article 30 보안성 검토 요청** is the textual bridge to [[didc-cyber-protection-sop-12|예규 제12호]]: every operational change requires a parallel security review. This means KIATIS-era changes should have generated artifacts under both SOPs.
- **Application scope** (제22조, pending verbatim extraction): Chapter 4 applies to all DIDC-hosted system changes; the 사이버방호 예규 제12호 제2조 confirms universal DIDC system coverage.
- **The procedural duty floor** is established by [[didc-sops-cover-2016-hacking-period]].
- **KIATIS DIDC-hosting status (pending verification):** The case narrative places KIATIS as a DIDC-hosted system but the wiki has not yet ingested explicit evidence of the hosting status during 2018–2019. The persona list in raw/02 mentions `데이터센터장` (Data Center Director) and `국방데이터센터(용인)` references, supporting DIDC hosting, but a definitive statement is pending raw/01 detailed compile.

## 반대 가설 (Counter-hypothesis)
KIATIS during 2018–2019 was not hosted at DIDC. Possible mechanisms:

1. **KIATIS hosted elsewhere** — perhaps at 국전원's own facility or at a vendor site rather than at DIDC, in which case the DIDC SOP 제11호 does not apply
2. **Carve-out for KIATIS** — KIATIS changes were exempt from the 제11호 변경관리 regime under a project-specific arrangement
3. **국전원 own change management** — KIATIS changes were managed under 국전원's internal procedures rather than DIDC's, with the two regimes operating in parallel without overlap

## 반증 조건 (Falsification Condition)
This claim is **NEEDS_MORE_EVIDENCE** until the following are produced:

1. **KIATIS DIDC-hosting confirmation** — definitive evidence (book chapter, contract document, or operational record) establishing whether KIATIS was hosted at DIDC during 2018–2019. If yes, the 변경관리 regime applies. If no, this atom is foreclosed and the wiki should track KIATIS under 국전원's own SOPs (which would themselves need ingestion).
2. **11-gate trail artifacts for KIATIS-era changes** — if KIATIS was DIDC-hosted, the trail artifacts must be located. Pending raw/05, raw/06 detailed compile, and raw/01 book.
3. **Alternative procedural framework** — if KIATIS was NOT under DIDC change management, the alternative framework (국전원 internal procedures) needs to be ingested and analyzed under the same procedural-trace methodology.

If item 1 confirms DIDC hosting and item 2 produces the trail with complete contents, the verdict downgrades to WEAKENED. If item 1 disconfirms DIDC hosting, this atom becomes UNFALSIFIABLE for the DIDC SOP question (and the analysis shifts to item 3). If items 1 and 2 are partially produced, the verdict remains NEEDS_MORE_EVIDENCE pending completion.

## 평결 (Verdict)
**NEEDS_MORE_EVIDENCE.** Moderate. The atom's strength is high in 타당성 (Chapter 4 is unambiguous in mandating the 11-gate trail) but currently medium in 진리성 because the KIATIS DIDC-hosting status is not yet verified in the wiki. This atom is structurally well-formed but factually incomplete on a single critical question (KIATIS hosting). Once the hosting question is resolved, the verdict can be elevated.

## Spot-check (raw/01 book)

- `Korean/10-3-4-34-제4-층위.md` — Layer 4 chapter
- `Korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1 chapter
- `Korean/09-3-3-33-제3-층위.md` — Layer 3 chapter (국전원 vs DIDC procedural relationship)
- Deferred to A.6 Re-verify. The KIATIS DIDC-hosting question is the central pre-requisite for this atom's verdict elevation.

## 미결 사항 (Open Questions)
- **Evidence citation coverage — exempt under CLAUDE.md regulation-text rule.** This atom's primary sourcing is DIDC SOP 제11호 Chapter 4 11-gate change management (제21~32조) (raw/06 regulation text), which is structurally equivalent to the raw/04 regulation-text exemption from the `Record No. NNNNN` requirement. Evidence record numbers anchoring this duty's VIOLATION in the 2016 incident period are expected to live in raw/07 scanned evidence record pages and will be added on raw/07 ingest; absence of Record No. citations in this atom is therefore an exemption, not a defect.
- **Was KIATIS hosted at DIDC during 2018–2019?** Critical pre-requisite. Pending raw/01 + raw/06 + KIATIS event page detailed update.
- **If yes, what was the relationship between DIDC's 변경관리 regime (제11호 Chapter 4) and 국전원's KIATIS-specific change management?** Were they parallel, sequential, or one-or-the-other?
- **Did 국전원 have its own change-management SOP that pre-empted DIDC's?** Pending Layer 3 detailed compile.

## 관련 (Related)
- [[../regulations/didc-info-system-operation-sop-11|DIDC SOP 제11호]] (ABOUT)
- [[../regulations/didc-cyber-protection-sop-12|DIDC SOP 제12호 (제30조 보안성 검토 bridge)]] (ABOUT)
- [[didc-sops-cover-2016-hacking-period|sister atom: SOP duty floor]] (CORROBORATES)
- [[didc-sop-incident-report-mandatory|sister atom: 별지 제4호 incident report]] (CORROBORATES)
- [[didc-sop-firewall-vpn-trail-mandatory|sister atom: 별지 6/7/8호 firewall/VPN trail]] (CORROBORATES)
- [[../entities/organizations/didc|DIDC]] (ABOUT)
- [[../entities/organizations/gukjeonwon|국전원]] (ABOUT)
- [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS event]] (ABOUT)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
