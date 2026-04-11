# Article 76 — Software Development Process (제76조 소프트웨어 개발 공정, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 2235–2263
**Layer:** [[../layers/layer-4|Layer 4]] (primary — defines the mandatory temporal sequence of software development deliverables; any post-hoc backdating of deliverables to reorder this sequence is direct Layer 4 manipulation, including the "시간 역전현상" / time-reversal phenomenon referenced in the book)
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제76조", articleNum: 76, regulationYear: 2018, country: "KR"}`

Article 76 of MND Directive No. 2129 (2018-02-05) defines the **13-stage standard software development process** for defense software, and references Appendix 14 (별표 14) as the source of per-stage deliverable specifications. For the 7-layer proof system this article is doubly significant: (a) it establishes the **mandatory temporal sequence** of development stages — each stage must precede the next, and each stage has its own dated deliverables — making it the **baseline against which "시간 역전현상" (time-reversal phenomenon) is detected**; and (b) its deliverable specifications live in Appendix 14, whose numbering changed from 2017's `별표A7` to 2018's `별표 14` (A-prefix removal pattern seen in the 제2075호 → 제2129호 diff).

## Key Takeaways

- [타당성] **Thirteen mandatory stages (제1항).** The defense standard software development process consists of exactly 13 ordered stages:
  1. 개발 준비 (Development preparation)
  2. 시스템 요구사항 분석 (System requirements analysis)
  3. 시스템 구조설계 (System architecture design)
  4. 소프트웨어 요구사항 분석 (Software requirements analysis)
  5. 소프트웨어 구조설계 (Software architecture design)
  6. 소프트웨어 상세설계 (Software detailed design)
  7. 소프트웨어 코딩 및 단위시험 (Software coding and unit testing)
  8. 소프트웨어 통합 (Software integration)
  9. 소프트웨어 자격시험 (Software qualification test)
  10. 시스템 통합 (System integration)
  11. 시스템 자격시험 (System qualification test)
  12. 소프트웨어 설치 (Software installation)
  13. 시스템 인수시험 (개발시험평가, 운용시험평가) (System acceptance test — DT&E and OT&E)
- [진리성] **The 13-stage list is a temporal ordering constraint.** Because each stage produces dated deliverables and each stage logically depends on the completion of the preceding stage, the list implicitly forbids **any deliverable for stage N being dated after a deliverable for stage N+K** (for K ≥ 1). This is the textual basis against which the book's "시간 역전현상 / time-reversal manipulation" (referenced in `raw/01. book-beyond-cybersecurity/vault-converted-english/14-3-4-34-Fourth-Layer.md`) is measured. A specific Layer 4 diagnostic: identify any 新KIATIS deliverable whose signed or registered date is temporally inconsistent with its position in the 13-stage sequence.
- [진리성] **Stage 13 embeds DT&E and OT&E into the process as acceptance tests.** Verbatim: `시스템 인수시험(개발시험평가, 운용시험평가)`. This means Chapter 4 Section 4 (제57–64조) is not separate from the development process — it is the **final stage** of it. Any DT&E/OT&E manipulation per 제57–64 is simultaneously a violation of 제76조 stage 13 sequencing: the test is not a post-facto validation but an integrated step whose chronological position is fixed by this article.
- [타당성] **Deliverable specifications reference Appendix 14 (제2항).** Verbatim: `제1항의 개발 공정별 산출물은 별표 14에 따른다.` The actual deliverable format specifications live in Appendix 14, not in the article body. Appendix 14 therefore becomes a pending Phase A ingest target (added to A.5 scope). Without Appendix 14, the detail of "what exactly each stage must produce" is opaque from this article alone.
- [타당성] **Article 76 defines a *standard* process, not an *exclusive* one.** The text says "국방 소프트웨어 표준 개발 공정" (defense software standard development process) — a standard model. Whether this standard is mandatory for all projects or can be tailored is a question about other articles in Chapter 4 that reference 제76조. To be resolved on appendix ingest.

## Verbatim

> 제76조(소프트웨어 개발 공정) ① 국방 소프트웨어 표준 개발 공정은 다음 각 호와 같다.
>
> 1. 개발 준비
> 2. 시스템 요구사항 분석
> 3. 시스템 구조설계
> 4. 소프트웨어 요구사항 분석
> 5. 소프트웨어 구조설계
> 6. 소프트웨어 상세설계
> 7. 소프트웨어 코딩 및 단위시험
> 8. 소프트웨어 통합
> 9. 소프트웨어 자격시험
> 10. 시스템 통합
> 11. 시스템 자격시험
> 12. 소프트웨어 설치
> 13. 시스템 인수시험(개발시험평가, 운용시험평가)
>
> ② 제1항의 개발 공정별 산출물은 별표 14에 따른다.

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 2235–2263)*

## Predecessor diff (제2075호 → 제2129호, 2017-10-10 → 2018-02-05)

| Element | 2017 제2075호 | 2018 제2129호 | Change |
|---|---|---|---|
| 13-stage list (¶1) | identical 13 stages | identical 13 stages | **None** — stage count, order, and text all unchanged |
| Appendix reference (¶2) | `별표**A7**` | `별표 **14**` | Appendix number restructure (A-prefix removed; number changed) |

**Observation:** The temporal sequence (¶1) — the anchor for time-reversal detection — is unchanged between 2017 and 2018. Only the appendix reference (¶2) changed. This is consistent with the directive-wide A-prefix-removal pattern recorded in the hub's predecessor diff section.

## Open Questions

- **Time-reversal forensic check for 新KIATIS.** Are any 新KIATIS development deliverables signed/registered with dates that are temporally inconsistent with their position in the 13-stage sequence (e.g., a stage 5 deliverable dated later than a stage 8 deliverable)? This is the core Layer 4 time-reversal question. Resolution requires ingest of 新KIATIS deliverables from `raw/01. book-beyond-cybersecurity/` Chapter 3.4 (A.6).
- **Appendix 14 contents.** What specific format specifications exist for each of the 13 stages? Pending Appendix 14 ingest.
- **Subsequent revision tracking for the 13-stage list.** Does any revision (2019–2025) modify the list — reorder stages, merge stages, remove stages? If yes, at which revision? This is the A.3 batch's primary question for 제76조.
- **Appendix number stability for 별표 14.** Does the appendix number remain 별표 14 across 2019–2025, or does it drift further? A.3 batch should track this.

## Related

- [[defense-it-operations-directive-2129|훈령 제2129호 (hub)]]
- [[defense-it-2129-article-57|제57조 (시험평가 구분) — stage 13 per 제76조]]
- [[defense-it-2129-article-60|제60조 (개발시험평가 실시) — stage 13 DT&E item list]]
- [[defense-it-2129-article-63|제63조 (운용시험평가 실시) — stage 13 OT&E item list]]
- [[defense-it-2129-article-64|제64조 (운용시험평가 결과조치) — stage 13 military suitability verdict]]
- [[../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 조작 (시간 역전현상 포함)]]
