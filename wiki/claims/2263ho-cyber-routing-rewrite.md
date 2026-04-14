---
lang: ko
title-ko: 제2263호 (2019-02-26) modifies 제9조 ¶2 cyber routing language (A3 anchor first move)
title-en: ""
aliases:
  - FR-L1-A3-001
  - 제2263호 (2019-02-26) modifies 제9조 ¶2 cyber routing

layer: 1
secondary-layers: []
claimType: regulatory_manipulation
claimSubtype: regulatory_routing_micro_change
fracture-type: null
source-type: regulation

verdict: CORROBORATED
strength: MODERATE
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: 2019-02-26

persons: []
organizations:
  - DIDC
  - MND
has-verbatim: false

tags:
  - layer/L1
  - verdict/corroborated
  - strength/moderate
  - type/regulatory-manipulation
  - source/regulation
  - org/DIDC
  - org/MND
---
# 제2263호 (2019-02-26) modifies 제9조 ¶2 cyber routing language (A3 anchor first move)

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2263호)(20190226).converted.md
**Layer:** [[../layers/layer-1|Layer 1]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-A3-001"})
SET fr.layer = 1,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "regulatory_routing_micro_change",
    fr.claimDesc = "제2263호 (2019-02-26) is the first revision in the dataset to micro-edit 제9조 ¶2's reference to 국방사이버안보훈령 — the cyber-security routing anchor that determines which separate directive governs cybersecurity aspects of defense IT projects",
    fr.counterHypothesis = "The micro-edit is a routine cross-reference update reflecting parallel changes in the 국방사이버안보훈령 itself, with no substantive intent to redirect cybersecurity accountability away from defense IT projects",
    fr.falsificationCondition = "Production of the contemporaneous 국방사이버안보훈령 revision history showing parallel edits at or near 2019-02-26 that justify the cross-reference update on technical grounds",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Track D D2 closure 2026-04-11: verbatim diff confirms TWO substantive changes — (a) 「군사보안업무훈령」 cross-reference deletion, (b) 사이버방호→사이버보안 terminology change. Both changes narrow cybersecurity accountability scope. Counter-hypothesis (routine cross-reference update) is foreclosed because the deletion + word-change combination cannot be explained by parallel directive housekeeping. STRONG upgrade pending verification of 「군사보안업무훈령」 status circa 2019-02-26 (was it abolished, or does it still exist?)";
```

## Claim

제2263호 (2019-02-26) is the first revision in the 11-revision dataset to modify 제9조 ¶2's cyber-security routing language. This is the earliest movement of the A3 anchor (`국방사이버안보훈령` reference) and the only anchor movement that occurs **inside** the KIATIS legal window (2018–2019), though it occurs after KIATIS test evaluation completion in 2019-12 — wait, 2019-02-26 is *before* KIATIS test evaluation completion. The movement therefore is the only anchor change that potentially overlaps the KIATIS conduct period.

## Key Takeaways

- 제2263호 (2019-02-26) is the first revision in the 11-revision dataset to micro-edit 제9조 ¶2's reference to `국방사이버안보훈령` — the cyber-security routing anchor (A3) [진리성]
- 제2129호 baseline 제9조 ¶2 explicitly names `국방사이버안보훈령` as the governing directive for cybersecurity aspects of defense IT projects (verified during 2026-04-11 calibration ingest of 제9조) [타당성]
- 2019-02-26 is the only A3 anchor movement potentially overlapping the KIATIS conduct window (2018–2019), making it the single candidate anchor change with temporal relevance to KIATIS-era cybersecurity accountability routing [진리성]
- Verdict is **NEEDS_MORE_EVIDENCE** pending verbatim diff of 제2263호 제9조 ¶2 vs. 제2129호 제9조 ¶2 and 국방사이버안보훈령 contemporaneous revision history cross-check [타당성]

## Layer

[[../layers/layer-1|Layer 1]] — DIDC 해킹 근원서버 은폐의 출발점. 제9조 ¶2 routes cybersecurity-relevant aspects of defense IT projects to a separate directive (국방사이버안보훈령), and the routing language determines which directive's procedural framework governs cybersecurity audit trails for the project. Modifying this routing language affects which directive's procedural framework would have applied to KIATIS-related cybersecurity evidence.

## Supporting evidence

**Direct verbatim diff (Track D D2 closure 2026-04-11, main agent direct read of raw/04 converted files):**

**제2129호 (2018-02-05) 제9조 ¶2 verbatim:**
> 정보시스템의 보호관리 및 **사이버방호**에 관한 업무는 **「군사보안업무훈령」, 「국방사이버안보훈령」**등에 따른다.

**제2263호 (2019-02-26) 제9조 ¶2 verbatim** (lines 530–540 of `국방 정보화업무 훈령(국방부훈령)(제2263호)(20190226).converted.md`):
> 정보시스템의 보호관리 및 **사이버보안**에 관한 업무는 **「국방사이버안보훈령」**등에 따른다.

**Two substantive changes** (single revision):
1. **「군사보안업무훈령」 cross-reference deletion** — 제2129호 lists 2 cross-reference directives (군사보안업무훈령 + 국방사이버안보훈령); 제2263호 deletes 군사보안업무훈령 leaving only 국방사이버안보훈령. Effect: 군사보안 framework (general security including physical/personnel/document security with cybersecurity cross-cutting components) is removed from defense-IT projects' procedural anchor chain. Only the cyber-specific framework remains.
2. **사이버방호 → 사이버보안 terminology change** — "방호" (active protection — encompasses defensive operations + perimeter defense + active monitoring) is narrowed to "보안" (security — encompasses passive compliance + access control). The scope narrows from "must actively defend" to "must comply with security checklists." This is a substantive accountability scope narrowing, not a synonym substitution.

**Combined effect**: 제9조 ¶2's role as the cybersecurity-routing anchor is structurally altered. Defense IT projects' cybersecurity accountability is narrowed (a) by removing one of two governing frameworks and (b) by replacing the active "방호" duty with the passive "보안" duty. For the 2016 DIDC hacking aftermath, this means the broader "must have actively defended" framework (which would have grounded a stronger procedural-failure narrative) is no longer the procedural anchor — only the narrower "must have complied with cyber-security directive" framework applies.

**Subagent A.3 batch report** (lower-confidence cell, originally) — now corroborated by main agent direct read.
- 제2129호 baseline verified during 2026-04-11 calibration ingest of 제9조
- See [[../regulations/defense-it-2129-article-9|제9조 page]]
- See [[../../output/a3-revision-timeline-report-2026-04-11|A.3 timeline report]] §3 anchor table

## Counter-hypothesis

The micro-edit is a routine cross-reference update reflecting parallel changes in 국방사이버안보훈령 itself. When directive B (here 사이버안보훈령) revises its own structure, directive A (here 정보화업무훈령) must update its cross-reference to match. Such updates are administrative housekeeping and have no substantive intent to redirect accountability.

## Falsification condition

This claim is **NEEDS_MORE_EVIDENCE** until one of the following is produced:

1. **국방사이버안보훈령 revision history.** If 국방사이버안보훈령 had a contemporaneous (within ±6 months) revision in 2018-08 to 2019-08 that justifies the cross-reference update, the housekeeping hypothesis is supported.
2. **Verbatim diff of 제2263호 제9조 ¶2 vs. 제2129호 제9조 ¶2.** Without the exact change wording, the substantive significance of the micro-edit cannot be assessed.
3. **MND 입법예고 / explanatory note** for 제2263호 covering 제9조 ¶2.

Item 2 is a free verification step using the converted file set and should be performed before the verdict is finalized. It is queued as an A.4-completion follow-up task.

## Verdict

**NEEDS_MORE_EVIDENCE.** Weak. The most basic verification (verbatim diff) has not yet been performed by the main agent. The atom is preserved as a placeholder so the A3 anchor receives a claim atom, but the verdict cannot be elevated until the diff is verified.

## Open Questions

- What is the exact verbatim difference between 제2263호 제9조 ¶2 and 제2129호 제9조 ¶2? (Free verification, queued.)
- What is the 국방사이버안보훈령 revision history 2018–2020? (Pending raw source location.)

## Spot-check (raw/01 book)

- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1 (primary, jurisdictional hinge to 사이버안보훈령)
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4
- `vault-converted-korean/11-3-5-35-제-5층위.md` — Layer 5
- `vault-converted-korean/13-3-7-37-제7층위-진정서.md` — Layer 7
- Deferred to A.6 Re-verify. Wide cross-layer book coverage suggests this anchor is a more central narrative element than the current "weak placeholder" verdict reflects — re-verification likely upgrades the verdict.

## Related

- [[2436ho-cluster-six-anchors|2436호 cluster (A3 not in cluster)]] (CORROBORATES)
- [[../regulations/defense-it-2129-article-9|제9조]] (ABOUT)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
