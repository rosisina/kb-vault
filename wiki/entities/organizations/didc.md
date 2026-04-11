# DIDC — Defense Integrated Data Center (국방통합 데이터센터)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 584–588 (제10조 제1항 제4호 가) • `../defense-kg-platform/kg/schema/aurora_schema.cypher` Layer 1 definition
**Layer:** [[../../layers/layer-1|Layer 1]] (primary — the 2016 hacking target; root of the entire proof system), [[../../layers/layer-2|Layer 2]], [[../../layers/layer-3|Layer 3]] (secondary — downstream project management affecting DIDC systems)
**Aurora node:** `:Organization {name: "Defense Integrated Data Center", nameKr: "국방통합 데이터센터", alias: "DIDC", englishFull: "Defense Integrated Data Center (DIDC)", parent: "Ministry of National Defense"}` *(English canonical name confirmed 2026-04-11)*

The **Defense Integrated Data Center (DIDC, 국방통합 데이터센터)** is the consolidated data center of the Republic of Korea Ministry of National Defense, operating systems that were the target of the **2016 North Korean hacking incident** — the originating event from which the 7-layer proof system unfolds. DIDC is explicitly named in MND Directive No. 2129 Article 10 ¶1 item 4(가) as an example of an `국방부 통제 사업` (MND-controlled project), meaning its IT projects are, by regulatory default, subject to direct MND oversight rather than delegation to subordinate agencies.

## Key Takeaways

- [타당성] **DIDC is named by regulation as MND-controlled.** 훈령 제2129호 제10조 제1항 제4호 가 lists `국방통합 데이터센터의 정보화사업` as a canonical example of `국방부 통제 사업`. IT projects concerning DIDC systems should not be reclassified as delegated without documented 제10조 제2항 justification. See [[../../regulations/defense-it-2129-article-10|제10조]] for full analysis.
- [진리성] **DIDC is the hacked organization.** Per Aurora's Layer 1 definition (`defense-kg-platform/kg/schema/aurora_schema.cypher` Layer 1), the layer's core narrative concerns "DIDC 해킹 근원서버 은폐" — concealment of the DIDC hacking source server. See [[../../events/2016-didc-north-korean-hacking|2016 DIDC 북한 해킹]].
- [진리성] **DIDC is organizationally under MND.** The directive treats DIDC IT projects as controlled at the ministry level, not by a subordinate agency. This organizational location — directly under MND — is what makes the Layer 1 cover-up a ministry-level responsibility rather than a lower-echelon matter.

## Open Questions

- Exact date and scope of the 2016 hacking incident — not yet ingested from book (`raw/01. book-beyond-cybersecurity/`).
- Which specific DIDC-operated systems were compromised — pending book compile.
- DIDC's formal establishment date, staffing, and reporting chain — not in current sources; pending ingest of `raw/04. law & regulation/` DIDC-specific regulations (referenced in `raw/07. Scanned files/` index).
- Was any DIDC-related IT project reclassified from `국방부 통제 사업` to `위임 사업` between 2016 and 2025? This is a Layer 1 diagnostic question.

## DIDC's own SOPs (raw/06, ingested 2026-04-11)

- [[../../regulations/didc-cyber-protection-sop-12|DIDC 부대예규 제12호 — 사이버방호 예규 (2016-02-01)]]
- [[../../regulations/didc-info-system-operation-sop-11|DIDC 부대예규 제11호 — 정보시스템 운영관리 예규 (2016-02-01)]]

## Layer 1 procedural-trace claim atoms (anchored on DIDC SOPs)

- [[../../claims/didc-sops-cover-2016-hacking-period]] — both SOPs in force on 2016-02-01 = procedural duty floor (CORROBORATED, strong)
- [[../../claims/didc-sop-incident-report-mandatory]] — 제12호 제21조 + 별지 제4호 mandatory incident report (CORROBORATED, strong)
- [[../../claims/didc-sop-firewall-vpn-trail-mandatory]] — 제12호 제37조 + 별지 6/7/8호 firewall/VPN/NAC trail (CORROBORATED, strong)
- [[../../claims/didc-sop-11-change-management-trail-mandatory]] — 제11호 Chapter 4 11-gate change management trail (NEEDS_MORE_EVIDENCE, KIATIS hosting verification)
- [[../../claims/didc-sop-11-backup-recovery-mandatory]] — 제11호 Chapter 8 25-article backup regime + off-site storage + documented disposal (CORROBORATED, strong)
- [[../../claims/didc-sop-db-access-control-mandatory]] — **제11호 제164조 + 별지 17호 DB access via CharkraMax** — paired highest-priority egress trace (CORROBORATED, strong)

## Related

- [[../../layers/layer-1|Layer 1 — Active-X 제거 사업 간 舊KIATIS 이력 제거]]
- [[../../regulations/defense-it-2129-article-10|훈령 제2129호 제10조 (DIDC naming anchor)]]
- [[../../regulations/defense-it-2129-article-11|훈령 제2129호 제11조 (organizational duties)]]
- [[../../events/2016-didc-north-korean-hacking|2016 DIDC 북한 해킹 사건]]
- [[gukjeonwon|국전원 — DCIA (sibling agency that manages HQ systems)]]
- [[mnd-it-planning-office|국본 정보화기획관실 (MND HQ IT Planning Office)]]
- [[../_index|Entities]]
