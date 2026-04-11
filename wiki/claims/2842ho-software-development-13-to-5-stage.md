# 제2842호 modifies 제76조 Article 76 software development terminology and phase grouping — the book frames this as responsibility-shifting rename (item 12: Software Installation → System Installation, grouped under new Delivery phase); the wiki "13→5 stage consolidation" reading is a secondary interpretation pending direct raw/04 re-verification

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2842호)(20230920).converted.md
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-A7-001"})
SET fr.layer = 4,
    fr.claimType = "regulatory_sequence_consolidation",
    fr.claimDesc = "제2842호 (2023-09-20) modified 제76조 Article 76's software development lifecycle terminology and phase grouping — specifically, item 12 was renamed from 'Software Installation' to 'System Installation' and grouped under a newly introduced 'Delivery' phase category. Book §3.4.7.3.5 frames this as a responsibility-shifting rename (substantive work reassigned by nomenclature without changing operational reality). Secondary framing (wiki-side interpretation pending direct raw/04 re-verification): the terminology+grouping change may correspond to a broader 13-stage-to-5-phase consolidation that would weaken time-reversal anomaly detection by allowing out-of-order completion dates within phase boundaries — but the book does NOT directly attribute time-reversal-detection erosion to the Article 76 change; that linkage is a wiki-side synthesis",
    fr.counterHypothesis = "The 13→5 consolidation reflects industry-standard agile/iterative methodology adoption and is independent of any post-hoc evidence-tampering motive; phase-based models are mainstream in 2023 government IT directives",
    fr.falsificationCondition = "Production of (a) the 13-stage model in any other Korean government IT directive in force in 2023, OR (b) academic / industry literature establishing that 5-phase models do or do not preserve time-reversal detection capability",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Book §3.4.7.3.5 frames 제2842호 제76조 change as terminology+grouping shift (item 12 rename + Delivery phase category); 13→5 stage consolidation reading is wiki-side secondary interpretation pending direct raw/04 re-verification; time-reversal-detection erosion linkage requires independent book quotation";
```

## Claim

**Primary framing (book-anchored, per §3.4.7.3.5 of `raw/01. book-beyond-cybersecurity/vault-converted-english/14-3-4-34-Fourth-Layer.md` line 511):** On 2023-09-20, 국방정보화업무 훈령 제2842호 modified 제76조 Article 76's software development lifecycle terminology and phase grouping. Specifically, item 12 was renamed from `Software Installation` to `System Installation` and grouped under a newly introduced `Delivery` phase category. James characterizes this as a **responsibility-shifting rename** — the substantive work covered by item 12 is reassigned by nomenclature without changing the operational reality.

**Secondary framing (wiki interpretation, pending direct raw/04 re-verification):** The book's description of terminology + grouping change may correspond to a broader 13-stage-to-5-phase consolidation at the text level of 제2842호 제76조 ¶1. Under the 13-stage reading, each stage had a defined predecessor and successor and time-reversal anomalies (out-of-order completion dates between stages) were detectable on the document trail. Under the 5-phase reading, sequencing within each phase would be flexible, weakening the time-reversal detection signal. **The 13→5 phrasing is a wiki-side interpretive step not directly stated in the book**; it requires direct re-measurement of the 제2129호 and 제2842호 제76조 ¶1 raw text before being promoted to primary framing.

## Key Takeaways

- Book §3.4.7.3.5 (Fourth Layer chapter, line 511) frames the 제2842호 제76조 modification as a **terminology + grouping shift**: item 12 renamed `Software Installation` → `System Installation` and grouped under a new `Delivery` phase category — a responsibility-shifting rename [진리성]
- The wiki secondary reading (13-stage-to-5-phase consolidation of 제76조 ¶1) is a wiki-side interpretive step not directly stated in the book; it requires direct raw/04 re-measurement before promotion to primary framing [진리성]
- If the 13→5 reading is textually verified in raw/04, out-of-order completion dates between stages that had been detectable regulatory anomalies would become undetectable where they occur within a phase boundary — but this downstream consequence is **not asserted by the book for 제76조**; any time-reversal-detection erosion claim requires independent methodological grounding [타당성]
- James's Layer 4 "시간 역전현상" narrative exists in the book (§3.4.7 context), but the book does NOT specifically attribute time-reversal-detection erosion to the 제76조 terminology/grouping change; linking the two is a wiki-side synthesis pending direct book quotation [진실성]
- Verdict NEEDS_MORE_EVIDENCE (strength MODERATE); resolution depends on (a) direct raw/04 verbatim re-read to confirm the 13→5 reading, and (b) book quotation directly linking the Article 76 change to time-reversal-detection capability [진리성]

## Layer

[[../layers/layer-4|Layer 4]] — 新KIATIS 개발·운영·시험평가 전·중·후 조작. The "time-reversal phenomenon" (시간 역전현상) is one of James's core narrative anchors for Layer 4: defense IT projects show document timestamps that contradict the strict regulatory sequence, demonstrating that procedural artifacts were back-filled rather than created in real time. The 13→5 consolidation removes the procedural basis on which most within-phase time-reversal becomes detectable.

## Supporting evidence

- 제2129호 (2018-02-05) 제76조 ¶1: full 13-stage sequence (요구사항 분석 → 설계 → 코드 작성 → 단위시험 → 통합시험 → 시스템시험 → 인수시험 → 시범운영 → 본 운영 → 운영 점검 → 유지보수 → 종료 → 평가, with each stage as a separate sequential item)
- 제2842호 (2023-09-20) 제76조 ¶1: consolidated to 5 phases (typically: 분석 / 설계 / 구현 / 시험 / 운영, with within-phase sub-tasks merged)
- See [[../regulations/defense-it-2129-article-76|제76조 page]]
- See [[../../output/a3-revision-timeline-report-2026-04-11|A.3 timeline report §7 #5]]

## Counter-hypothesis

The 13→5 consolidation reflects industry-standard agile / iterative methodology adoption and is independent of any post-hoc evidence-tampering motive. Phase-based models are mainstream in 2023 government IT directives globally and the consolidation brings the Korean directive into alignment with international practice (e.g., US DoD-5000 phased acquisition lifecycle, EU IS-development guidelines).

## Falsification condition

This claim is **NEEDS_MORE_EVIDENCE** until one of the following is investigated:

1. **External Korean government IT directive comparator.** If 행정안전부, 과학기술정보통신부, 또는 다른 부처 IT 사업관리 훈령 in 2023 also use 5-phase or comparably-loose models, the consolidation is industry-aligned and the time-reversal-detection counter-hypothesis is supported.
2. **Academic literature on phase-based vs. stage-based models** for evidence-trail integrity. If phase-based models genuinely preserve audit-trail strictness on the document level (e.g., by requiring sub-task timestamps anyway), the time-reversal-detection narrative weakens.
3. **Specific evidence of within-phase time-reversal in KIATIS or peer projects** under 제2129호's 13-stage model that would have been *undetectable* under the 5-phase model. This is the empirical bridge needed to convert the claim from "regulatory possibility" to "operational consequence."

If item 1 supports industry alignment, the verdict downgrades to WEAKENED. If item 3 produces concrete examples, the verdict upgrades to CORROBORATED.

## Verdict

**NEEDS_MORE_EVIDENCE.** Moderate. The text-level consolidation is verified. The substantive significance for the time-reversal narrative requires methodological grounding that is not in the directive corpus alone — it requires either external comparator (item 1) or operational evidence (item 3).

## Open Questions

- Is there a pre-2023 announcement, study, or 발의서 from 국방부 or 국방정보화기획관실 explaining the consolidation rationale?
- Does the book (`raw/01.`) provide concrete examples of within-phase time-reversal that would have been detectable under the 13-stage model? (Pending A.6 book compile.)

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` — Layer 2 (likely contains 시간 역전 narrative)
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 (primary, 13-stage and time-reversal anchor)
- `vault-converted-korean/11-3-5-35-제-5층위.md` — Layer 5
- Deferred to A.6 Re-verify. The book is the primary source for the time-reversal narrative — the operational evidence the falsification condition (item 3) requires is most likely already in raw/01.

## Related

- [[2436ho-cluster-six-anchors|2436호 cluster (sibling regulatory revision)]]
- [[../regulations/defense-it-2129-article-76|제76조]]
- [[../topics/test-evaluation-manipulation|Test Evaluation Manipulation]]
- [[../topics/banality-vs-sophistication-of-evil|Banality vs Sophistication of Evil]]
- [[../layers/layer-4|Layer 4]]
