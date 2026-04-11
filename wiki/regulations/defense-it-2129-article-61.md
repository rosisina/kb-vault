# Article 61 — DT&E Corrective Action (제61조 개발시험평가 조치, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1907–1920
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제61조", articleNum: 61, regulationYear: 2018, country: "KR"}`

Article 61 defines the **DT&E result-reporting procedure and the control-agency's gate decision**. The management agency must submit DT&E results on Form 25 within **15 days** of DT&E completion, routed through the sponsor to the control agency. The control agency then reviews the results and **decides whether the next phase of information-system construction proceeds** — making 제61조 the formal gate between DT&E and the subsequent OT&E / construction steps.

## Key Takeaways

- [타당성] **Hard 15-day reporting deadline (제1항).** The `사업관리기관` must submit DT&E results within 15 days of DT&E completion. Any DT&E result-reporting that takes longer than 15 days without documented justification is a procedural violation. Any result-reporting that happens *before* DT&E is actually completed is also a violation. Both are Layer 4 signals.
- [타당성] **Form 25 (별지 제25호서식) is mandatory.** The result must be submitted on Form 25. Deviation from this form — missing sections, unfilled fields, narrative in place of structured results — is a procedural defect.
- [타당성] **Routing is fixed: management → sponsor → control (제1항).** The DT&E result must be routed through the sponsor (사업주관기관) on its way to the control agency (사업통제기관). Skipping the sponsor, or routing directly to the control agency, is procedurally improper. This three-party routing is also the audit trail — all three parties have a documented copy of the result once the procedure is followed.
- [진리성] **The control agency is the next-phase gate (제2항).** Verbatim: `사업통제기관은 개발시험평가 결과를 검토하여 정보시스템 구축을 위한 다음 단계의 이행 여부를 결정한 후 사업관리기관과 사업주관기관에 통보하여야 한다.` The control agency holds a go/no-go decision on whether the project advances past DT&E. A corrupted control-agency decision at this gate allows a project with DT&E failures to proceed to OT&E, which then re-evaluates from a clean slate and may produce an "adequate" verdict — the classic two-stage laundering pattern. Any 新KIATIS DT&E that was reported as failed but allowed to proceed is a direct Layer 4 case.
- [타당성] **The article does not specify a form for the control-agency decision.** Unlike the DT&E result itself (Form 25), the control-agency's go/no-go notification is not tied to a specific form. This is a documentation gap that makes the decision harder to audit after the fact.

## Verbatim

> 제61조(개발시험평가 조치) ① 사업관리기관은 별지 제25호서식의 개발시험평가결과를 개발시험평가를 완료한 후 15일 이내에 사업주관기관을 경유하여 사업통제기관에 보고하여야 한다.
>
> ② 사업통제기관은 개발시험평가 결과를 검토하여 정보시스템 구축을 위한 다음 단계의 이행 여부를 결정한 후 사업관리기관과 사업주관기관에 통보하여야 한다.

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1907–1920)*

## Open Questions

- Is there a documented Form 25 DT&E result for 新KIATIS, and was it submitted within 15 days of DT&E completion?
- What was the control-agency go/no-go decision for 新KIATIS, and is that decision documented?
- If DT&E was reported as deficient, how did the project proceed to OT&E? Was a corrective re-test (제60조 제2항) performed first, or was the control-agency's go decision issued despite the deficiencies?

## Related

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (hub)]]
- [[defense-it-2129-article-59|제59조 (개발시험평가 계획수립)]]
- [[defense-it-2129-article-60|제60조 (개발시험평가 실시)]]
- [[defense-it-2129-article-62|제62조 (운용시험평가 계획수립)]]
- [[../layers/layer-4|Layer 4]]
