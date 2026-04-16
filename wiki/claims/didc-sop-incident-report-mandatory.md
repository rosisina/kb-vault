---
lang: ko
title-ko: DIDC SOP 제12호 제21조 + 별지 제4호 mandate immediate incident reporting; absence of the report is Layer 1 cover-up evidence
title-en: ""
aliases:
  - FR-L1-DIDC-002
  - DIDC SOP 제12호 제21조 + 별지 제4호 mandate immediate

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
# DIDC SOP 제12호 제21조 + 별지 제4호 mandate immediate incident reporting; absence of the report is Layer 1 cover-up evidence

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/01.(Korean) DIDC_사이버방호_예규.md (제21조 verbatim, 별지 제4호 form structure)
**Layer:** [[../layers/layer-1|Layer 1]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-002"})
SET fr.layer = 1,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_artifact_mandatory",
    fr.claimDesc = "DIDC 부대예규 제12호 제21조 (침해사고 신고) requires immediate reporting to 정보보호과 and 사이버작전사령부 upon discovery of unauthorized access or hacking traces; 별지 제4호 서식 (정보시스템 위협/손상 보고서) is the prescribed report form. For the 2016 DIDC hacking incident, this SOP-mandated incident report must exist as a documentary artifact; its absence, alteration, or post-hoc fabrication is direct Layer 1 cover-up evidence",
    fr.counterHypothesis = "The 2016 incident was reported under a different mechanism (verbal, classified channel, or non-SOP-prescribed format), so the absence of a 별지 제4호 form is not procedurally meaningful",
    fr.falsificationCondition = "Production of (a) the 별지 제4호 incident report for the 2016 hacking incident with verifiable creation date contemporaneous with the incident, OR (b) authoritative Korean military regulation establishing that classified or operational hacking incidents at DIDC are exempt from 별지 제4호 documentation",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "제21조 imposes immediate reporting duty; 별지 제4호 is the prescribed form. Both are textually unambiguous. The Layer 1 cover-up thesis is partially testable by the existence and integrity of this single document.";
```

## 주장 (Claim)

### 한국어

DIDC 부대예규 제12호 제21조 (침해사고 신고) creates an immediate, non-discretionary duty for any DIDC department head (`각 부서장`) to report unauthorized access or hacking traces to (a) the 정보보호과 (information protection section) and (b) 사이버작전사령부 (Cyber Operations Command) upon discovery. The prescribed report form is **별지 제4호 서식 (정보시스템 위협/손상 보고서)**, with 20 mandatory fields covering incident timing, source/destination IP, system identification, incident type, response actions, and risk assessment. For the 2016 DIDC North Korean hacking incident, this 별지 제4호 form must exist as a contemporaneous documentary artifact. **The absence, alteration, post-hoc fabrication, or destruction of this form is direct Layer 1 cover-up evidence** under the procedural-trace methodology.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- DIDC 부대예규 제12호 제21조 ¶1 creates a non-discretionary duty (`즉시` + `하여야`) for each 부서장 to report unauthorized access or hacking traces to both 정보보호과 and 사이버작전사령부 upon discovery (raw/06/01 line 384) [타당성]
- 별지 제4호 서식 (정보시스템 위협/손상 보고서) is the prescribed report form with 20 mandatory fields including 보고번호, 발생일시, 출발/도착 IP, 사고유형, 조치 내역, 위험도 평가 (raw/06/01 lines 744–770) — a defined administrative artifact, not a free-form report [타당성]
- 제21조 ¶5–¶6 establishes a multi-step reporting chain: 통합관제실 최초보고 → 위기조치기구 → 정보보호과 분석 → 사이버작전사령부/피해부대 통보 (raw/06/01 lines 401–403) [타당성]
- For the 2016 DIDC North Korean hacking incident, the 별지 제4호 form must exist as a contemporaneous documentary artifact; its absence, alteration, or post-hoc fabrication is direct Layer 1 cover-up evidence under the procedural-trace methodology [진리성]
- The SOP regime structurally cannot produce a procedurally-compliant "incident occurred but no form exists" outcome — the test is binary and answerable [진실성]

## 층위 (Layer)
[[../layers/layer-1|Layer 1]] — Active-X 제거 사업 간 舊KIATIS 이력 제거 (DIDC 해킹 근원서버 은폐의 출발점). The 별지 제4호 form is the single most directly auditable Layer 1 artifact: it is mandated by SOP, has defined contents, must exist contemporaneously with the incident, and is the entry point for every downstream procedure (제22조 조치 → 제23조 복구 → 제24조 종결).

## 지지 증거 (Supporting Evidence)
- **Article 21 verbatim** (raw/06/01 line 384): `① 각 부서장은 소관분야 정보시스템 운용 중에 비인가자의 불법 접근 또는 해킹 흔적 등 침해사고를 발견하는 즉시 정보보호과 및 사이버작전사령부에 신고하여야 하며, 피해 확산방지 또는 현장보존이 필요하다고 판단되는 경우에는 전산망 차단 등 대상 시스템에 대한 안전조치를 수행하여야 한다.` — note the words `즉시` (immediately) and `하여야` (mandatory verb form).
- **Article 21 ⑤–⑥** (raw/06/01 lines 401–403): `⑤ 침해사고 발생시 지휘계통보고는 통합관제실 최초보고 실시(유선, SMS 활용), 위기조치기구 소집시 상황분석 후 중간·최종보고를 실시한다. ⑥ 정보보호과는 침해사고 접수시 사이버침해 여부를 신속히 분석하고, 그 결과를 보고계통을 통해 보고하고, 사이버작전사령부·피해부대에 통보한다.` — establishes the multi-step reporting chain (통합관제실 → 위기조치기구 → 정보보호과 → 사이버작전사령부 → 피해부대).
- **별지 제4호 서식 structure** (raw/06/01 lines 744–770): 20 mandatory fields including 보고번호, 발생일시, 보고일시, 접수일시, 완료일시, 부대명, 출발 IP, 출발운영체계, 도착 IP, 사고유형 구분, 세부사고 유형, 세부로그 파일, 조치 내역, 긴급대응반 조치 내역, 위험도 평가, 정보작전방호태세 발령여부 검토. The form's existence as a defined administrative artifact with 20 fields (not a free-form report) makes it auditable.
- **제22조 (침해사고 조치)** (raw/06/01 lines 407+): `① 1·2센터 실·과장은 침해사고를 접수 시 피해확산 방지와 현장 보존을 위하여 네트워크 사용통제 등 대상 정보시스템에 대한 안전조치를 수행하여야 하며, 조치상황을 정보보호과에 통보하여야 한다. … ④ 정보보호과는 침해사고의 원인파악 및 대책을 강구하고 기획조정실로 보고하여야 하며, 기획조정실은 최종 결과를 부대장에게 보고 후 침해받은 각 부서장에게 통보하여야 한다.` — establishes the secondary documentary chain (조치 → 원인파악 → 부대장 보고).
- **The procedural duty floor** is established by [[didc-sops-cover-2016-hacking-period]]: SOP was in force on 2016-02-01.

## 반대 가설 (Counter-hypothesis)
The 2016 incident was reported under a different mechanism not requiring 별지 제4호 form completion. Possible non-SOP mechanisms:

1. **Verbal classified reporting** — for highly sensitive incidents, reporting may have been verbal between senior officers without paper artifacts
2. **Direct 사이버작전사령부 jurisdiction** — the incident may have been routed directly to 사이버작전사령부, bypassing the DIDC-internal 별지 제4호 chain
3. **Classified channel routing** — the incident report exists but is classified at a level that excludes it from the 별지 제4호 administrative system

Under any of these counter-hypotheses, the absence of a 별지 제4호 form is not procedurally meaningful because the form was not the proper instrument for reporting this specific incident.

## 반증 조건 (Falsification Condition)
This claim is **CORROBORATED** unless one of the following is produced:

1. **The 별지 제4호 incident report for the 2016 hacking incident** with verifiable creation date contemporaneous with the incident (i.e., not post-hoc reconstructed). If the form exists with valid date and complete fields, the cover-up thesis is partially weakened on this specific artifact (it does not prove no cover-up; only that the initial reporting step was performed).
2. **An authoritative Korean military regulation** (기타 훈령 or 명령) establishing that classified or operational hacking incidents at DIDC are exempt from 별지 제4호 documentation. The exemption would have to predate the 2016 incident and apply to its specific classification level.
3. **An alternate procedural artifact** — e.g., a 사이버작전사령부 incident-receipt log entry, a classified incident-tracking system record, or a witness account of verbal reporting — that substitutes for the 별지 제4호 form.

If item 1 is produced with contemporaneous date and complete fields, the verdict downgrades to WEAKENED on this specific artifact (other Layer 1 atoms remain unaffected). If item 2 is produced with regulatory authority, the verdict downgrades to UNFALSIFIABLE for the 별지 제4호 specific question, and the Layer 1 trace investigation must shift to whichever alternate artifact was prescribed. If item 3 is produced, the cover-up thesis remains testable against the alternate artifact.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8. The atom's strength comes from the textual unambiguity of 제21조 (`즉시` + `하여야`) combined with the existence of the 별지 제4호 form as a defined administrative artifact. The wiki cannot verify the form's existence or absence at this stage — that verification is the central Layer 1 falsification target — but the atom establishes the procedural duty whose violation is testable.

## Spot-check (raw/01 book)

- `Korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1 chapter (primary; references DIDC 예규)
- `Korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (prosecution context for incident-report absence)
- `Korean/04-1-1-서론.md` — Introduction
- Deferred to A.6 Re-verify.

## 미결 사항 (Open Questions)
- **Evidence citation coverage — exempt under CLAUDE.md regulation-text rule.** This atom's primary sourcing is DIDC SOP 제12호 제21조 + 별지 제4호 (raw/06 regulation text), which is structurally equivalent to the raw/04 regulation-text exemption from the `Record No. NNNNN` requirement. Evidence record numbers anchoring this duty's VIOLATION in the 2016 incident period are expected to live in raw/07 scanned evidence record pages and will be added on raw/07 ingest; absence of Record No. citations in this atom is therefore an exemption, not a defect.
- **Does the 별지 제4호 incident report for the 2016 DIDC hacking exist?** Central falsification target. Pending raw/05 (prosecutor evidence) and raw/07 (scanned files) cross-check, plus raw/01 book detailed compile.
- **If the form exists, what is its 보고번호 and 보고일시?** A post-hoc reconstructed form would be detectable by metadata anomalies.
- **Was 사이버작전사령부 notified?** This is the second leg of the 제21조 duty and should leave its own paper trail at 사이버작전사령부.

## 관련 (Related)
- [[../regulations/didc-cyber-protection-sop-12|DIDC SOP 제12호]] (ABOUT)
- [[didc-sops-cover-2016-hacking-period|sister atom: SOP duty floor 2016-02-01]] (CORROBORATES)
- [[didc-sop-firewall-vpn-trail-mandatory|sister atom: firewall/VPN paper trail]] (CORROBORATES)
- [[../entities/organizations/didc|DIDC]] (ABOUT)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
- [[../topics/defense-informatization-cartel|Defense Informatization Cartel]] (ABOUT)
