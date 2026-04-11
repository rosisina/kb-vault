# Article 57 — T&E Categories (제57조 시험평가 구분, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1817–1831
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제57조", articleNum: 57, regulationYear: 2018, country: "KR"}`

Article 57 of MND Directive No. 2129 (2018-02-05) defines the two categories of test and evaluation (시험평가) for information-system construction projects: **개발시험평가 (DT&E)** and **운용시험평가 (OT&E)**, plus an optional **인수시험평가 (AT&E)** for weapon-system cases. The article establishes the baseline category structure against which later revisions must be diffed.

## Key Takeaways

- [타당성] T&E for information-system construction projects is **partitioned into exactly two categories**: 개발시험평가 (development test & evaluation) and 운용시험평가 (operational test & evaluation). (제57조 제1항)
- [타당성] **개발시험평가 (DT&E)** is conducted under the `사업관리기관` (project management agency) using the `체계규격서` (system specification) and `제안요청서` (RFP) as the evaluation baseline, from a *functional, design, and integration* perspective, producing a **pass/fail (합격/불합격)** verdict. (제57조 제1항 제1호)
- [타당성] **운용시험평가 (OT&E)** is conducted under the `사업주관기관` (project sponsoring agency) in the *actual operational environment* using the `운용개념기술서` (concept of operations document) and `제안요청서` as the baseline, from an *operational and performance* perspective, producing a **military-suitable / unsuitable (군사용 적합/부적합)** verdict. (제57조 제1항 제2호)
- [타당성] For **weapon systems only** (무기체계), an additional **인수시험평가 (AT&E)** may be conducted during the acceptance/inspection phase. Information systems per se are not subject to AT&E under this article. (제57조 제2항)
- [진리성] The separation of `사업관리기관` and `사업주관기관` is the structural feature that makes the later Layer 4 manipulation possible — if the two roles are collapsed into one organization, the DT&E / OT&E separation becomes toothless. To be monitored across revisions.

## Verbatim

> 제57조(시험평가 구분) ① 정보시스템 구축 사업의 시험평가는 다음 각 호와 같이 개발시험평가와 운용시험평가로 구분한다.
>
> 1. 개발시험평가 : 사업관리기관 주관 하에 체계규격서, 제안요청서 등을 기준으로 개발 소프트웨어의 기능적·설계적·통합적 관점에서 실시하는 평가로서 합격 또는 불합격으로 결과를 판정할 것
>
> 2. 운용시험평가 : 사업주관기관 주관 하에 실제 조성된 기반운영 환경에서 운용개념기술서, 제안요청서 등을 기준으로 정보시스템의 운용적·성능적 관점에서 실시하는 평가로 군사용 적합 또는 부적합으로 판정할 것
>
> ② 무기체계의 경우 정보화사업 결과물을 소요 군 및 기관이 인수받아 검수하는 단계에서 인수시험평가를 실시할 수 있다.

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1817–1831)*

## Revision trajectory (2017-10-10 → 2025-09-17, per P6 blind re-measurement 2026-04-11)

The P6 blind re-measurement (Sonnet Explore subagent, strict measurement-stage isolation, no wiki/book/CLAUDE.md access) read Article 57 verbatim across 제2129호, 제2263호, 제2398호, 제2436호, and 제2842호. The trajectory is:

| Revision | Date | ¶1 modal | ¶1 제1호 DT&E role binding | ¶1 제1호 DT&E result-judgment | ¶1 제2호 OT&E role binding | ¶1 제2호 OT&E environment hedge | ¶2 AT&E |
|---|---|---|---|---|---|---|---|
| 제2129호 | 2018-02-05 | `구분한다` (mandatory) | `사업관리기관 주관 하에` (present) | `합격 또는 불합격으로 결과를 판정할 것` (present) | `사업주관기관 주관 하에` (present) | bare `환경에서` (no hedge) | present |
| 제2263호 | 2019-02-26 | IDENTICAL to 제2129호 | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL |
| **제2398호** | **2020-02-13** | IDENTICAL | IDENTICAL | IDENTICAL | IDENTICAL | **ADDED** `또는 이와 유사한 환경에서` | IDENTICAL |
| **제2436호** | **2020-06-04** | **`구분할 수 있다`** (permissive) | **REMOVED** (no replacement) | **REMOVED** (no replacement) | **REMOVED** (no replacement) | **REVERTED** to bare | IDENTICAL |
| **제2842호** | **2023-09-20** | IDENTICAL to 제2436호 | IDENTICAL (remains removed) | IDENTICAL (remains removed) | IDENTICAL (remains removed) | **RE-ADDED** `또는 이와 유사한 환경에서` | IDENTICAL |

### Five simultaneous structural movements at 제2436호

제2436호 is a single-revision rebuild of 제57조 moving five distinct elements of the article:

1. **Modal verb weakening** ¶1 opening: `구분한다` (mandatory partition) → `구분할 수 있다` (permissive/discretionary). Weakens the mandatory character of the 시험평가 regime. (Non-anchor per current framework, below diagnostic threshold.)
2. **A11 — DT&E role binding erasure** ¶1 제1호: `사업관리기관 주관 하에` removed with no replacement. DT&E execution becomes textually unbound from any named role-tier within this article.
3. **A12 — DT&E result-judgment clause erasure** ¶1 제1호: `합격 또는 불합격으로 결과를 판정할 것` removed with no replacement. The DT&E sub-clause is reduced from a bound-and-judged definition to a bare descriptive phrase. (Asymmetric: the parallel OT&E `군사용 적합/부적합으로 판정할 것` clause in 제2호 is retained.)
4. **A8b — OT&E role binding erasure** ¶1 제2호: `사업주관기관 주관 하에` removed with no replacement. Mirrors A11.
5. **A8a — OT&E environment hedge reversal** ¶1 제2호: `또는 이와 유사한 환경에서` (added 4 months earlier at 제2398호) removed, returning to bare `환경에서`.

Three of the five (A11, A12, A8b) combine to strip the DT&E definition of both role binding and result-judgment while stripping the OT&E definition of only role binding. The asymmetry — DT&E loses more than OT&E — is itself a diagnostic observation pending further analysis.

A11 and A12 were discovered on 2026-04-11 during A.6 P6 blind re-measurement; the original A8b atom (OT&E-only) did not capture the DT&E-side symmetry.

**Note on the book's Article 57 comparative table:** Book §3.4.4.2.3 / Main text record—Layer 4—010 presents an Article 57 comparative table that appears to omit the 제2398호 environment hedge insertion (showing 제2129호 / 제2263호 / 제2398호 as identical). The pilot L4 subagent flagged this as UNCLEAR; the P6 blind re-measurement resolved it in favor of the wiki's raw/04-based reading. See [[../claims/2398-2842ho-otne-environment-hedge-flipflop]] Book-side audit note and [[../_contradictions|_contradictions.md]] C-L4-01 for the full audit trail.

## Related claim atoms

- [[../claims/2398-2842ho-otne-environment-hedge-flipflop]] — A8a OT&E environment hedge flip-flop
- [[../claims/2436ho-otne-sponsor-binding-erased]] — A8b OT&E sponsor binding erasure
- [[../claims/2436ho-dtne-sponsor-binding-erased]] — A11 DT&E sponsor binding erasure (symmetric to A8b; added 2026-04-11 after P6)
- [[../claims/2436ho-cluster-six-anchors]] — 제2436호 eight-anchor cluster (article body title retained "six-anchors" for filename stability but cluster count is now 8)

## Open Questions

- Does A12 (DT&E result-judgment erasure) have a replacement location elsewhere in 제2436호? Cross-check required against 제60조 — but note 제60조 was also deleted at 제2436호 per A10, so the candidate replacement location may itself be absent.
- The A11/A8b asymmetry with A12: why was the DT&E result-judgment deleted while the OT&E result-judgment was retained? Is this a drafting oversight, a deliberate asymmetry, or a signal about which judgment was procedurally inconvenient to preserve?
- Does 제2075호 (2017-10-10) predecessor match 제2129호 verbatim on 제57조? Pending 제2075호 read.
- Does this article change again in 제2946호 (2024-07-17), 제3059호 (2025-07-09), or 제3080호 (2025-09-17)? Not yet measured by P6 (scope was 제2129~제2842).

## Related

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (hub)]]
- [[defense-it-2129-article-58|제58조 (시험평가 수행원칙)]]
- [[defense-it-2129-article-59|제59조 (개발시험평가 계획수립)]]
- [[defense-it-2129-article-60|제60조 (개발시험평가 실시)]]
- [[../layers/layer-4|Layer 4]]
