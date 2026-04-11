# MND HQ IT Oversight Office (국본 정보화기획관실 → 지능정보화정책관실)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 608–625 (제11조 제2항) • regulations articles 제59조 제4항, 제60조 제2항, 제61조 제2항, 제62조 제5항, 제63조 제2항, 제64조 (same converted file) • `raw/08. 용어 변천사/(국방 정보화 업무 훈령) 용어정의 변천사(2018~2025년).converted.md` (name history)
**Layer:** [[../../layers/layer-4|Layer 4]] (primary — the 사업통제기관 holds the approval gates at every T&E stage, making this office the single control point for every Layer 4 manipulation vector), [[../../layers/layer-1|Layer 1]] (secondary — as the MND HQ-level IT oversight office, it holds the ministry-level oversight of DIDC IT projects per 제10조 제1항 제4호)
**Aurora node:** `:Organization {name: "MND HQ IT Oversight Office", nameKr2018: "정보화기획관실", nameKr2025: "지능정보화정책관실", alias: "MND IT Oversight", parent: "Ministry of National Defense Headquarters"}`

This page refers to the **IT oversight office within Ministry of National Defense Headquarters** (국본 = 국방부 본부). The office's regulatory role has been continuous since 2018 — it is the default `사업통제기관` (project control agency) for 전군지원사업 (tri-service support projects) and for 국본 사업 (HQ-operated system projects) under MND Directive No. 2129 Article 11 ¶2 — but **its name has changed twice** between 2018 and 2025. This page treats the office as a single continuous entity across all name variants and tracks the name changes in the dedicated section below. This is not a subordinate agency like 국전원 but a **department internal to MND HQ** — it is where ministry-level IT oversight is exercised.

## Key Takeaways

- [진리성] **The office is the single control point for all Chapter 4 T&E approval gates.** In the 2018-02-05 baseline, the `사업통제기관` holds the approval authority at seven distinct gates:
  1. **Project plan approval** (제11조 제2항 제3호)
  2. **T&E plan and result approval** (제11조 제2항 제4호)
  3. DT&E plan validity/appropriateness review and approval (제59조 제4항)
  4. DT&E corrective re-test approval (제60조 제2항)
  5. **DT&E-to-OT&E gate — next-phase go/no-go decision** (제61조 제2항)
  6. OT&E plan validity/appropriateness review and approval (제62조 제5항)
  7. OT&E corrective re-test approval (제63조 제2항)
  8. OT&E result review (제64조 제1항 routing)
- [진리성] **This concentration of authority is the Layer 4 attack surface.** Eight approval gates at one office means a single corrupted approval decision can propagate through the entire T&E framework without any other organization having veto power. Conversely, a documented approval issued without supporting evidence at any one gate is a prima facie Layer 4 signal.
- [타당성] **Scope of authority (제11조 제2항).** The office controls two project categories: (a) 전군지원사업 — projects used by two or more military branches or agencies; (b) 국본 사업 — HQ-operated information system projects. 각 군 (individual service) projects fall under each service's own IT planning office, not this one.
- [타당성] **Four baseline duties (제11조 제2항).** Beyond the T&E gates, the office is responsible for: (1) project requirement review and decision (사업 소요 검토·결정), (2) midterm plan and budget review and alignment (사업 중기계획·예산편성 검토·반영), (3) project plan approval (사업 계획 승인), (4) T&E plan and result approval (시험평가 계획·결과 승인). Items 1 and 2 are the *upstream* control points; items 3 and 4 are the *downstream* gates.
- [진리성] **The office approves DIDC-related projects by default.** Because DIDC IT projects are classified as `국방부 통제 사업` per 제10조 제1항 제4호 가, and the office is the 사업통제기관 for HQ-operated and tri-service projects, DIDC-related work flows through this office by regulatory default. Any DIDC-related IT project that *did not* route through this office is either a reclassification case (per 제10조 제2항) or a procedural violation — either way, diagnostic.

## Name history (2018–2025)

**Source:** `raw/08. 용어 변천사/(국방 정보화 업무 훈령) 용어정의 변천사(2018~2025년).converted.md`

The office's name has changed twice between 2018 and 2025. Because the entity has been **continuously responsible for the same eight approval gates** throughout this period, this wiki treats the three name variants as a single entity and flags each name change as a [[../../regulations/_index|regulation naming anchor]] per the Layer-critical naming rule in `CLAUDE.md`.

| Period | MND HQ side | Each service side | Hedge clause present? |
|---|---|---|---|
| **2017-10-10** (훈령 제2075호, *pre-baseline*) | 국방부 정보화기획관실 | 각 군 **정보화기획실** | No |
| **2018 baseline** (훈령 제2129호) | 국방부 정보화기획관실 | 각 군 **정보화기획관실** | No |
| **Mid-period** (to be pinpointed by A.3 diff — likely 2020–2022 range) | 국방부 정보화기획관실 | 각 군 **정보화기획참모부** | Yes — hedge clause newly inserted |
| **2025** (훈령 제3059호 and 제3080호) | 국방부 **지능정보화정책관실** | 각 군 정보화기획참모부 | Yes — hedge clause retained |

**Hedge clause text (verbatim):** "조직명이지만 본 훈령에서는 정보화 총괄 기관의 의미로 사용하고 있다" — "Although [this is] an organization name, in this directive it is used with the meaning of 'IT oversight organization.'"

The hedge clause is a **defensive-language insertion** — it pre-declares that the term is being used generically, so that future organizational restructurings do not require the directive text itself to be amended for every renaming event. Its insertion point is therefore a high-value diagnostic moment: it signals that the drafters anticipated ongoing organizational instability in this role. **A.3 diff task:** identify the exact revision in which the hedge clause first appears.

[진리성] The name variants do not represent discontinuities in authority — the same 8 approval gates (see Key Takeaways) apply to each name variant in turn. Claim atoms touching this office should reference the **role** (`사업통제기관` / IT oversight office) rather than a specific name variant, except when analyzing the name-change events themselves.

## Open Questions

- **Exact revision in which "정보화기획관실" (services) became "정보화기획참모부"**. To be pinned down in A.3 diff batch.
- **Exact revision in which "정보화기획관실" (MND HQ) became "지능정보화정책관실"**. To be pinned down in A.3 diff batch. Likely between 제2842호 (2023-09-20) and 제3059호 (2025-07-09).
- **Exact revision in which the hedge clause ("조직명이지만...")** was first inserted. High-value Layer 4 diagnostic moment.
- **Staffing and reporting.** How large is the office, who is its head, and to whom does the head report within MND HQ? Not in current sources.
- **Personal continuity across revisions.** Did the same individuals occupy key positions in the office across the 2018→2025 directive revision timeline? This is relevant to whether directive revisions can be attributed to specific decisionmakers. Requires 가명 resolution before writing; blocked until pseudonym mapping is consulted.
- **Earlier name history.** A.2 diff (2026-04-11) confirmed the service-side 2017→2018 change: 각 군 `정보화기획실` → `정보화기획관실`. MND HQ side remained `정보화기획관실` across the same transition. Pre-2017 names (i.e., predecessor of 제2075호) not yet confirmed — pending ingest of any earlier version of the directive.

## Related

- [[../../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 조작]]
- [[../../layers/layer-1|Layer 1 — Active-X 제거 사업 간 舊KIATIS 이력 제거]]
- [[../../regulations/defense-it-2129-article-10|훈령 제2129호 제10조 (project classification)]]
- [[../../regulations/defense-it-2129-article-11|훈령 제2129호 제11조 (office naming anchor)]]
- [[../../regulations/defense-it-2129-article-59|훈령 제2129호 제59조 (DT&E plan approval gate)]]
- [[../../regulations/defense-it-2129-article-61|훈령 제2129호 제61조 (DT&E→OT&E gate)]]
- [[../../regulations/defense-it-2129-article-62|훈령 제2129호 제62조 (OT&E plan approval gate)]]
- [[../../regulations/defense-it-2129-article-64|훈령 제2129호 제64조 (OT&E result)]]
- [[didc|DIDC (under this office's regulatory oversight)]]
- [[gukjeonwon|국전원 (reports DT&E results to this office)]]
- [[../_index|Entities]]
