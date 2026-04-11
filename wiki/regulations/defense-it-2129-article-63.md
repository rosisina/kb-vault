# Article 63 — OT&E Execution (제63조 운용시험평가 실시, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1948–1970
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제63조", articleNum: 63, regulationYear: 2018, country: "KR"}`

Article 63 defines the **nine mandatory OT&E evaluation items** and the corrective re-test procedure. The nine items are a superset of DT&E's seven (제60조) — OT&E explicitly requires checking whether DT&E corrective actions were actually implemented, whether performance-indicator data is being auto-collected, and whether the system is militarily suitable in live operation. Any reduction in the nine-item list in a subsequent revision is a direct Layer 4 manipulation signal, and any silent omission of item 1 or item 9 in practice is a Layer-4 executional signal.

## Key Takeaways

- [타당성] **Nine mandatory OT&E evaluation items** (제63조 제1항):
  1. **DT&E corrective-action implementation verification** (개발시험평가 결과 조치사항 이행여부) — this is the **anti-laundering clause**: OT&E must verify that DT&E deficiencies were actually fixed, not merely reported as fixed.
  2. Software quality attributes — functionality, reliability, usability, efficiency, maintainability, portability (same six attributes as DT&E 제60조).
  3. Performance including availability and load/stress testing (가용성, 부하·스트레스 테스트 등).
  4. Information-system integration — interoperability and linkage (상호운용성 및 연동).
  5. **Military operational suitability review** (군 운용 적합성 검토) — this is the qualitative "does it actually work in the field" judgment.
  6. COTS specification compliance.
  7. Initial data setup and migration completion (초기자료 구축 및 이관 완료 여부).
  8. International/domestic standards and separately-defined detailed procedures.
  9. **Auto-collection of performance-indicator data** (성과지표의 측정에 필요한 데이터의 자동 수집여부) — the executional counterpart to 제62조 제1항's measurability-check planning clause.
- [진리성] **Item 1 is the anti-laundering gate.** The two-stage DT&E → OT&E pattern is vulnerable to laundering (DT&E fails, control agency issues go decision anyway, OT&E "passes" from a clean slate). Item 1 of 제63조 shuts this down by requiring OT&E to explicitly verify that DT&E corrective actions were performed. If OT&E was passed without this verification, that is a direct textual violation of 제63조 제1항 제1호. This is the highest-value item to check in the 新KIATIS evidence record.
- [진리성] **Item 9 is the anti-manipulation gate.** 제62조 제1항 plans for the measurability check; 제63조 제1항 제9호 executes it. A system that is said to have passed OT&E but whose performance data is not auto-collected violates this item. Conversely, the absence of performance-indicator data in a post-hoc audit is evidence that item 9 was not enforced.
- [타당성] **DT&E items 5 and 6 disappear; OT&E items 1, 5, 7, 9 are new.** Comparing 제60조 (DT&E, 7 items) to 제63조 (OT&E, 9 items): the "documentation completeness" and "international standards" items of DT&E appear to have narrowed or been reframed; OT&E adds DT&E-corrective verification, military operational suitability, data migration, and auto-collection. The delta is substantively meaningful — OT&E is a broader and more operational check.
- [타당성] **Corrective re-test is mandatory on finding defects (제2항).** Same pattern as 제60조 제2항: OT&E panel finds deficiencies → control-agency approval → correct → re-test → final result to sponsor. Skipping re-test is a procedural violation.

## Verbatim

> 제63조(운용시험평가 실시) ① 운용시험평가 항목으로 다음 각 호의 사항을 포함하여야 한다.
>
> 1. 개발시험평가 결과 조치사항 이행여부
> 2. 소프트웨어 품질요소(기능성, 신뢰성, 사용성, 효율성, 유지보수성, 이식성) 만족 여부
> 3. 성능(가용성, 부하·스트레스 테스트 등) 만족 여부
> 4. 정보시스템 통합(상호운용성 및 연동) 만족 여부
> 5. 군 운용 적합성 검토
> 6. 상용정보통신제품 요구규격 만족 여부
> 7. 초기자료 구축 및 이관 완료 여부
> 8. 국제·국내 표준 또는 별도로 정한 세부적인 절차 및 평가
> 9. 성과지표의 측정에 필요한 데이터의 자동 수집여부
>
> ② 운용시험평가단은 평가과정 중 미흡한 부분이나 평가요소에 대하여 불만족 사항이 발견되는 경우에는 사업통제기관의 승인을 거쳐 수정 보완 후 재시험을 실시하고 최종결과를 사업주관기관에 제출하여야 한다.

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1948–1970)*

## Open Questions

- Did the 新KIATIS OT&E explicitly verify DT&E corrective-action implementation per 제1항 제1호? This is the single most important check.
- Is there evidence of auto-collected performance-indicator data for 新KIATIS per 제1항 제9호? If not, OT&E item 9 was not enforced regardless of the overall verdict.
- Which specific items of the nine were documented as "satisfied" in the 新KIATIS OT&E result? Silent omission of any item is itself an executional violation.
- Did any subsequent revision (2019–2025) reduce the nine items, particularly items 1 or 9? Removal or softening of either is a direct Layer 4 manipulation signal.

## Related

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (hub)]]
- [[defense-it-2129-article-60|제60조 (개발시험평가 실시) — DT&E 7-item list]]
- [[defense-it-2129-article-62|제62조 (운용시험평가 계획수립)]]
- [[defense-it-2129-article-64|제64조 (운용시험평가 결과조치)]]
- [[../layers/layer-4|Layer 4]]
- [[../claims/2436ho-dtne-articles-erased|A10: 제2436호 DT&E article body deletion (OT&E counterpart)]]
- [[../topics/test-evaluation-manipulation|Test Evaluation Manipulation]]
