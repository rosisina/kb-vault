# 2024년 온-나라 시스템 개선사업(약 40억원)은 Layer 1–6 증거의 기반이 되는 국방 행정문서 이력을 파괴할 위험을 내포하며, 이는 Layer 7 차원의 은폐 연속으로 분류될 수 있음

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/13-3-7-37-제7층위-진정서.md (book §3.7.1.1 fn.588)
**Layer:** [[../layers/layer-7|Layer 7]] (primary), [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L7-ONNARA-2024"})
SET fr.layer = 7,
    fr.claimType = "evidence_concealment",
    fr.claimSubtype = "evidence_destruction_risk_systemic",
    fr.claimDesc = "The book (§3.7.1.1) flags that the 2024 on-nara (온-나라 행정업무 시스템) upgrade project, budgeted at approximately 40억원 (KRW ~4 billion), creates a concrete risk of destroying the memo-report and email trail that 한지훈 generated as a contemporaneous evidence record of his Layer 7 petition efforts. The book notes that memo-reports on 온-나라 are permanent records that cannot be deleted — making the 2024 upgrade the only mechanism by which they could be erased.",
    fr.counterHypothesis = "The 2024 온-나라 upgrade is a routine IT modernization project unrelated to the DIDC investigation; standard government IT procurement requirements mandate data migration and historical record preservation; no evidence of selective data deletion.",
    fr.falsificationCondition = "Audit of the 온-나라 2024 upgrade contract and scope of work, confirming that historical memo-report and email records from 2022 were fully migrated and are queryable by date/author in the upgraded system, would falsify the evidence-destruction risk claim.",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 6,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The 2024 온-나라 upgrade (~40억원) is flagged as a potential destruction mechanism for 한지훈's contemporaneous administrative evidence trail; the book raises this as an active concern, not a confirmed deletion.";
```

## Claim

한지훈 submitted his Layer 7 petitions via the **온-나라 행정업무 시스템** (the Korean government's integrated administrative management system) using **메모보고** (memo-reports) and email through the 국방망 intranet. He explicitly noted that memo-reports on 온-나라 are permanent, non-deletable records: `메모보고는 온-나라에서 지워지지 않으며 기록에 남는 문서이다.`

The book (§3.7.1.1) then flags a critical concern: `염려가 되는 것은 2024년에 국방부에서 온-나라 개선사업(40여억원)을 단행하였는데, 이 시기에 자료가 인멸되지 않았는지 우려가 된다.` — "What worries me is that in 2024 the MND carried out an 온-나라 improvement project (approximately 40억원), and I am concerned that records may have been destroyed in the process."

The significance is structural: 한지훈 had sent petitions, evidence packages, and correspondence to the 국방장관, 군사보좌관, 군검찰단 검사, 수사관, and forensics investigators via 온-나라 메모보고. These are the administrative-layer contemporaneous records of his Layer 7 petition timeline — the same timeline that the 8-institution rejection chain depends on. If the 2024 upgrade destroyed these records, the primary verification path for the Layer 7 petition timeline is compromised.

Moreover, the timing is notable: the 2024 upgrade occurred **after** 한지훈's 기소유예 (2022-10-07) and **after** the full 8-institution rejection chain was exhausted. An upgrade that selectively or accidentally erases the 2022 memo-report trail at this juncture would function as a Layer 7 concealment event — not necessarily by design, but by effect.

## Key Takeaways

- [진리성] Book §3.7.1.1 explicitly states 한지훈's petitions were sent via 온-나라 메모보고 and that 메모보고는 온-나라에서 지워지지 않으며 기록에 남는 문서 — the permanence of the record makes the 2024 upgrade the primary destruction vector [진리성]
- [진리성] The book identifies the 2024 MND 온-나라 개선사업 as budgeted at 약 40억원 and expresses explicit concern (`염려`, `우려`) that records were destroyed during the project [진리성]
- [타당성] 공공기록물 관리에 관한 법률 (Public Records Management Act) requires government agencies to preserve official records; selective loss of 2022 메모보고 during a 2024 upgrade would be a statutory records-management violation, potentially adding another layer of criminal exposure [타당성]
- [진실성] 한지훈 sent correspondence on 온-나라 specifically to create a durable, tamper-resistant contemporaneous record; `본인 이름으로 그 당시(2022년)로 검색하면 확인이 가능해야 한다` — the book notes these should still be searchable by name and year [진실성]
- [진리성] The 2024 upgrade occurred after the 기소유예 disposition and after all civilian oversight bodies had rejected 한지훈's petitions — its timing within the concealment timeline is adverse-inference-relevant [진리성]

## Supporting evidence

- Book §3.7.1.1 (line 10) verbatim: `염려가 되는 것은 2024년에 국방부에서 온-나라 개선사업(40여억원)을 단행하였는데, 이 시기에 자료가 인멸되지 않았는지 우려가 된다.`
- Book §3.7.1.1 (line 10) verbatim: `메모보고는 온-나라에서 지워지지 않으며 기록에 남는 문서이다` — confirming that the normal-state permanence of memo-reports makes an upgrade the only deletion mechanism
- Book §3.7.1.1 (line 10): `본인 이름으로 그 당시(2022년)로 검색하면 확인이 가능해야 한다` — the book's claim that the 2022 records should be searchable by 한지훈's name is itself a verifiable falsification test
- Contextual: 한지훈 sent petitions to 국방장관, 군사보좌관, 군검찰단 검사, 수사관 and forensics officer via 온-나라; the book confirms `읽은 것으로 확인` (confirmed read) for the 국방장관's email/memo

## Counter-hypothesis

The 2024 온-나라 upgrade was a routine **IT infrastructure modernization** project. Standard Korean government IT procurement (e.g., 행정안전부's 정보자원 표준화 지침) mandates full data migration and records preservation during system upgrades. The upgrade's scope may have been limited to UI/UX improvements, performance optimization, or security hardening — with no impact on historical record storage. Under this hypothesis, 한지훈's 2022 메모보고 and email records are fully intact and searchable in the upgraded system.

This counter-hypothesis is the **most likely** outcome statistically — government IT upgrades typically include data migration requirements. However, the book's concern is not refuted by the general norm; it is a specific claim that requires specific verification (a search of the upgraded 온-나라 system by 한지훈's name and year 2022).

## Falsification condition

1. **Search the upgraded 온-나라 system** for 한지훈's name with year 2022 (per the book's own verification instruction: `본인 이름으로 그 당시(2022년)로 검색하면 확인이 가능해야 한다`). If records are present and complete, the destruction risk is falsified for those records. If records are absent or incomplete, the concern is corroborated.
2. **Obtain and review the 2024 온-나라 개선사업 계약서 and scope of work** to determine whether historical record migration was explicitly required and audited.
3. **Obtain the 2024 upgrade implementation report** confirming data integrity validation was performed and all pre-upgrade records were migrated.

## Verdict

**NEEDS_MORE_EVIDENCE.** Moderate. The book's concern is clearly stated and structurally coherent — the only way non-deletable records are deleted is through an upgrade. The book's own falsification instruction (search by name and year) provides a concrete verification path. However, the concern is not yet confirmed destruction — it is a stated risk. The verdict becomes CORROBORATED if the 2022 records are found missing, or WEAKENED if the search returns complete results.

진리성 7 / 타당성 6 / 진실성 8.

## Spot-check (raw/01 book)

- `vault-converted-korean/13-3-7-37-제7층위-진정서.md` — §3.7.1.1 (line 10): 온-나라 concern is embedded within the description of the 국방장관 petition transmission. The concern is stated parenthetically as an aside from the petition narrative, flagging the 2024 upgrade as a potential evidence-destruction event in the same passage that describes creating the contemporaneous evidence trail.

## Open Questions

- **Have any of the 2022 메모보고 records been confirmed present or absent in the upgraded 온-나라 system?** This is the most direct verification step and should be performed before the next Re-verify pass.
- **What was the exact scope of the 2024 온-나라 개선사업?** The book identifies the budget as 40여억원 but does not describe the scope. Was it a full system replacement, a module upgrade, or a UI refresh?
- **Who awarded and managed the 2024 upgrade contract?** If the contracting chain traces to MND organizations also involved in the Layer 1–6 cover-up, the upgrade's scope and data-migration requirements would be under heightened scrutiny.
- **Is there an audit trail (e.g., public procurement records on 나라장터) for the 2024 온-나라 개선사업 contract?** Public procurement records would identify the contractor, scope, and data-migration specifications.

## Related

- [[../layers/layer-7|Layer 7]] (PART_OF_LAYER)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
- [[han-ji-hoon-rebuttal-rejected-by-eight-institutions|L7 atom: 8-institution rejection chain]] (OPPOSES)
- [[han-ji-hoon-rebuttal-document-date-2022-09-25|L7 atom: rebuttal document date discrepancy]] (OPPOSES)
- [[../entities/people/han-ji-hoon|한지훈 entity hub]] (ABOUT)
- [[../entities/organizations/didc|DIDC (primary L1 evidence subject)]] (ABOUT)
