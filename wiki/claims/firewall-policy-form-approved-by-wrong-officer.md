# 2019-08-26 방화벽 정책 변경 요청서는 정보보호과장 승인 없이 행정정보화과장에 의해 승인됨 — DIDC SOP 제12호 제37조 ① 위반

**Source:** raw/05. Investigation by the Military Prosecutor's Office/Bilingual(English, Korean)/(20221014) Fraudulent Proof of Notification of the Reason for Non-Prosecution(English, Korean).converted.md (lines 73-97 — 불기소이유서 verbatim narrative of the firewall change approval chain) • raw/06/01.(Korean) DIDC_사이버방호_예규.md (제37조 ① — verbatim 정보보호과장 승인 요구)
**Layer:** [[../layers/layer-1|Layer 1]] (primary), [[../layers/layer-4|Layer 4]] (secondary), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-007"})
SET fr.layer = 1,
    fr.claimType = "procedural_artifact_approval_chain_violation",
    fr.claimDesc = "The 2019-08-26 firewall policy change request for KIATIS test evaluation was drafted by 윤정모 (이준호 in pseudonym), reviewed by 한지훈 at 17:38:29 on 2019-08-26, and approved by 윤일원 (최영수 in pseudonym, 행정정보화과장) at 17:51:26 the same day. However, DIDC SOP 제12호 제37조 ① explicitly requires firewall policy changes (별지 제6호) to be approved by 정보보호과장 (information protection section chief), NOT 행정정보화과장 (administrative IT section chief). The approval chain on the actual KIATIS firewall change form therefore violates the SOP's required approval authority — meaning the form exists but its approval signature is procedurally defective",
    fr.counterHypothesis = "The DIDC SOP version in force in 2019 (a pre-2018-12-01 revision) named 행정정보화과장 as the approver, OR the 2019 KIATIS firewall change was specifically delegated to 행정정보화과장 by 정보보호과장 in writing",
    fr.falsificationCondition = "Production of (a) the pre-2019 DIDC SOP revision text showing 행정정보화과장 (or equivalent) as the named approver, OR (b) a written delegation document from 정보보호과장 to 행정정보화과장 dated before 2019-08-26",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The 불기소이유서 itself documents the approval chain (윤정모 draft → 한지훈 review → 윤일원/행정정보화과장 approval). The current DIDC SOP requires 정보보호과장 approval. Whether the 2019 SOP version had a different approver is the central pre-requisite for verdict elevation — pending pre-2019 SOP revision ingest.";
```

## Claim

The 2019-08-26 firewall policy change request that exceptionally permitted direct DB access for KIATIS test evaluation was processed through the following approval chain (per the 불기소이유서 verbatim narrative, raw/05 (20221014) lines 73-97):

1. **Drafter:** 윤정모 ([[../entities/people/han-ji-hoon|이준호]] in pseudonym, 대위) — `대위 윤정모가 기안`
2. **Reviewer:** 한지훈 ([[../entities/people/han-ji-hoon|한지훈]], 사업관리팀장) at **2019-08-26 17:38:29** — `피의자가 2019. 8. 26. 17:38:29에 검토를 결재`
3. **Approver:** 윤일원 ([[../entities/people/han-ji-hoon|최영수]] in pseudonym, **행정정보화과장**) at **2019-08-26 17:51:26** — `같은 날 17:51:26에 행정정보화과장 윤일원의 결재를 득한 사실`

However, **DIDC SOP 제12호 제37조 ①** (currently numbered 제37조 in the latest revision; possibly 제39조 in the 2018-12-01 revision per the 불기소이유서's reference) explicitly requires firewall policy changes (별지 제6호 서식) to be approved by **각 센터 정보보호과장** (information protection section chief), not 행정정보화과장 (administrative IT section chief). The verbatim 제37조 ①:

> `① 방화벽 운용자는 각 기관에서 IT서비스포털을 이용, 별지 제6호 서식의 방화벽 정책 요청서에 의거 신규, 변경, 삭제 요청한 방화벽 정책에 대해서 각 센터 정보보호과장 승인을 득하고 조치하여야 하며 …`

**The approval chain on the actual 2019-08-26 KIATIS firewall change form therefore violates the SOP's required approval authority** — 행정정보화과장 ≠ 정보보호과장. The form exists (the cover-up question for [[didc-sop-firewall-vpn-trail-mandatory]] is foreclosed on this specific document), but its approval signature is procedurally defective on its face.

**This is doubly significant**: the form is the very evidence the prosecution used to charge 한지훈 with 위계공무집행방해, but the same form is — under DIDC's own SOP — improperly approved. Either (a) the SOP version in force in 2019 had a different named approver (which would shift this atom to NEEDS_MORE_EVIDENCE pending pre-2019 SOP ingest), or (b) the approval chain was procedurally defective and the prosecution's reliance on the form is itself based on a defective document.

## Layer

[[../layers/layer-1|Layer 1]] primary (DIDC procedural cover-up — the firewall change is the entry point), [[../layers/layer-4|Layer 4]] secondary (KIATIS test-evaluation manipulation context), [[../layers/layer-6|Layer 6]] secondary (the prosecution's reliance on a procedurally defective document).

## Supporting evidence

- **불기소이유서 verbatim narrative** (raw/05 (20221014) lines 90-97): `2019. 8. 7. 모든 사용자가, DB에 직접 접속할 수 있도록 하는 방화벽 보안정책 요청서를 대위 윤정모가 기안하여 피의자가 결재한 사실(기록 제612쪽), 2019. 8. 26. 다시 대위 윤정모가 기안한 [방화벽 정책 적용 요청(협조)] 공문을 피의자가 2019. 8. 26. 17:38:29에 검토를 결재하고 같은 날 17:51:26에 행정정보화과장 윤일원의 결재를 득한 사실(기록 613쪽)`
- **DIDC SOP 제12호 제37조 ① verbatim** (raw/06/01 line 537–545): the approval requirement clause
- **The 불기소이유서 also cites the (18.12.1. 개정) revision of DIDC 부대예규 제 39조** (raw/05 (20221014) lines 159-163): `[국방통합데이터센터 부대예규 (18. 12. 1. 개정) 제 39조(방화벽 및 SSL-VPN 관리/운용) 제2항에서는 ‘수요부대(기관) 응용체계 담당자는 업무를 위해 센터에서 관리하는 정보시스템에 원격으로 접속할 경우 반드시 SSL-VPN에 접속 후 정보시스템에 접속해야 한다’고 정하고 있고` — this confirms two important things: (a) the 2018-12-01 revision was the version in force in 2019; (b) the article was numbered 제39조 then (currently 제37조 in the latest revision available). **This is a specific Layer 1 trace target**: the pre-2018-12-01 revision article numbering and approver identity.
- **The form's existence is documented in the 기록 제612쪽 and 제613쪽** of the prosecutor's evidence record — meaning the form is a primary archival document that should be retrievable.

## Counter-hypothesis

The DIDC SOP version in force in 2019 named 행정정보화과장 (or an equivalent administrative position) as the approver, not 정보보호과장. Possible mechanisms:

1. **Pre-2018-12-01 revision** — the SOP went through 6 revisions before 2018-12-01; one of them may have used a different approver designation
2. **2019 specific delegation** — 정보보호과장 may have delegated approval authority to 행정정보화과장 by written order, in which case the 윤일원 approval is procedurally proper under delegation
3. **Multi-signature path** — the SOP may permit either 정보보호과장 OR 행정정보화과장 to approve, with the delegation chain unstated in 제37조 ①
4. **Reorganization** — the 행정정보화과장 position may have absorbed 정보보호과장 functions during the 2019 period through reorganization

## Falsification condition

This claim is **NEEDS_MORE_EVIDENCE** until the following are produced:

1. **The pre-2018-12-01 DIDC SOP 제12호 revision text** showing the article-37/39 approver name as it stood in August 2019
2. **The 2018-12-01 revision text** showing the same
3. **Any written delegation order** from 정보보호과장 to 행정정보화과장 dated before 2019-08-26
4. **DIDC organizational chart for 2019** showing whether 행정정보화과장 and 정보보호과장 were distinct positions or had combined functions

If item 1 or 2 shows 정보보호과장 as the approver, the verdict elevates to CORROBORATED. If they show 행정정보화과장 (or equivalent), the verdict downgrades to WEAKENED. If item 3 produces a delegation, the verdict downgrades to WEAKENED. If item 4 shows function combination, the verdict downgrades to UNFALSIFIABLE on the strict signature analysis.

## Verdict

**NEEDS_MORE_EVIDENCE.** Moderate. The atom is structurally well-formed but factually contingent on the pre-2018-12-01 SOP revision text, which is not currently in raw/06 (only the latest revision is). The targeted ingest request for predecessor revisions (already queued in [[../regulations/didc-cyber-protection-sop-12]] Open Questions) becomes critical for this atom's resolution.

**This atom is unusual in that the prosecution's own document (불기소이유서) provides the supporting evidence** — the prosecutor verbatim documented the approval chain that, when measured against the SOP, is structurally defective. Either the prosecution did not realize the discrepancy, or the discrepancy is explainable by a non-current SOP revision, or both.

## Spot-check (raw/01 book)

- `vault-converted-korean/03-executive-summary--핵심-요약.md` — Executive summary (CONFIRMED 행정정보화과장 mention)
- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1 chapter (CONFIRMED)
- `vault-converted-korean/09-3-3-33-제3-층위.md` — Layer 3 chapter (CONFIRMED)
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 chapter (CONFIRMED)
- `vault-converted-korean/11-3-5-35-제-5층위.md` — Layer 5 chapter (CONFIRMED)
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (CONFIRMED)
- Deferred to A.6 Re-verify. **Six-chapter coverage** confirms the 행정정보화과장 role is a recurring narrative element — likely the book identifies the 2019 SOP version's approver name.

## Open Questions

- **What did the pre-2018-12-01 (or 2018-12-01) DIDC SOP 제12호 say about the firewall change approver?** Critical pre-requisite. Pending raw/06 predecessor revision request to James.
- **Was 윤일원 (행정정보화과장) ever delegated approval authority by 정보보호과장?** Pending DIDC personnel/delegation record.
- **Did 한지훈's (20220929) rebuttal raise this approval chain defect?** Pending raw/05 detailed compile.

## Related

- [[didc-sop-firewall-vpn-trail-mandatory|sister atom: firewall/VPN trail mandatory (this atom focuses on the trail's defect, not its absence)]]
- [[../regulations/didc-cyber-protection-sop-12|DIDC SOP 제12호]]
- [[han-ji-hoon-prosecution-violates-2129-role-separation|paired Layer 6 atom: the prosecution relied on this defective form to charge 한지훈]]
- [[prosecution-misapplies-2129-article-58-4-to-kiatis|paired Layer 6 atom: prosecution legal misapplication]]
- [[../entities/people/han-ji-hoon|한지훈]]
- [[../entities/organizations/didc|DIDC]]
- [[../layers/layer-1|Layer 1]]
- [[../layers/layer-6|Layer 6]]
