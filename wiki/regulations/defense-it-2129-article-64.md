# Article 64 — OT&E Result Corrective Action (제64조 운용시험평가 결과조치, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1973–2004
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제64조", articleNum: 64, regulationYear: 2018, country: "KR"}`

Article 64 defines the **OT&E result-reporting procedure, the military-suitable/unsuitable verdict, the six categories of content the OT&E result must include, and the re-evaluation procedure for critical defects**. Like 제61조 for DT&E, this article imposes a **15-day reporting deadline** and requires a **fixed form (Form 27 / 별지 제27호서식)**. Unlike 제61조, however, the result itself carries the `군사용 적합·부적합 판정` — the definitive military-suitability judgment that determines whether the system can enter 전력화. This is the single most consequential procedural output of the entire Chapter 4 Section 4 framework.

## Key Takeaways

- [타당성] **Hard 15-day reporting deadline and Form 27 (제1항).** The sponsor must submit the OT&E result within 15 days of OT&E completion, on Form 27, routed through the management agency to the control agency. Parallel structure to 제61조 제1항.
- [진리성] **The sponsor makes the military-suitable / unsuitable judgment.** Verbatim: `사업주관기관은 다음 각 호를 고려하여 판정한 군사용 적합·부적합 결과를 포함한`. The sponsor is the body that issues the 군사용 적합·부적합 verdict. Combined with 제11조 제3항 제5호 (where the sponsor's duty to make this judgment is established), this means the `사업주관기관` is the single point of control for the most consequential Layer 4 decision. A compromised sponsor can produce a 적합 verdict despite failed OT&E. Any 新KIATIS 적합 verdict that is inconsistent with the underlying OT&E execution evidence is a direct textual violation of this article.
- [타당성] **Six mandatory content categories in the OT&E result (제1항):**
  1. T&E result and corrective action status (시험평가 결과 및 조치여부)
  2. Joint review result (합동 검토 결과)
  3. Audit result and corrective action status (감리 결과 및 조치 여부)
  4. Interoperability-requirement (or procurement-plan) evaluation result (상호운용성 요구사항(또는 확보계획) 평가 결과)
  5. Information-protection evaluation result (정보보호 관련 평가 결과)
  6. Other matters the sponsor deems necessary (그 밖에 사업주관기관이 필요하다고 요구한 사항)
- [진리성] **Information-protection evaluation is a mandatory content category (item 5).** Any OT&E result that passes without an information-protection evaluation — or that includes a pro forma one without substance — is non-compliant. Given the 2016 DIDC hacking context, the information-protection evaluation for 新KIATIS OT&E is a critical evidentiary artifact. Its presence, absence, or content is a direct Layer 1 ↔ Layer 4 bridge.
- [타당성] **Management agency's corrective plan on critical defects (제2항).** If any of the six result categories contains "중요한 결함사항" (critical defects), the management agency must draft a corrective plan and report it to the sponsor and control agency. This is a named duty on the management agency.
- [타당성] **Sponsor must re-evaluate critical defects (제3항).** On critical defects, the sponsor must conduct OT&E re-evaluation and submit the re-evaluation result (including a new 적합·부적합 verdict) within 15 days of re-evaluation completion. This is a hard procedural requirement — a pattern of "critical defects discovered → no re-evaluation performed → project proceeds" is a direct Layer 4 executional violation.
- [진리성] **Pass-through laundering is formally blocked.** Between 제63조 제1항 제1호 (OT&E must verify DT&E corrective actions) and 제64조 제3항 (critical OT&E defects must trigger re-evaluation), the directive installs **two anti-laundering gates**. A 新KIATIS project that nonetheless passed from DT&E through OT&E without either gate engaging has violated the directive at two distinct points.

## Verbatim

> 제64조(운용시험평가 결과조치) ① 사업주관기관은 다음 각 호를 고려하여 판정한 군사용 적합·부적합 결과를 포함한 별지 제27호서식의 운용시험평가결과를 운용시험평가 완료 후 15일 이내에 사업관리기관을 경유하여 사업통제기관에 보고 하여야 한다.
>
> 1. 시험평가 결과 및 조치여부
> 2. 합동 검토 결과
> 3. 감리 결과 및 조치 여부
> 4. 상호운용성 요구사항(또는 확보계획) 평가 결과
> 5. 정보보호 관련 평가 결과
> 6. 그 밖에 사업주관기관이 필요하다고 요구한 사항
>
> ② 사업관리기관은 제1항의 각 호 중 중요한 결함사항이 있을 경우 조치계획을 수립하여, 사업주관기관 및 사업통제기관에 보고한다.
>
> ③ 사업주관기관은 중요한 결함에 대해 운용시험 재평가를 실시하고, 군사용 적합·부적합 결과를 포함한 운용시험평가 결과를 평가완료 후 15일 이내에 사업관리기관 통보 및 사업통제기관에 보고하여야 한다.

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1973–2004)*

## Open Questions

- Is there a documented Form 27 OT&E result for 新KIATIS?
- What was the 군사용 적합·부적합 verdict, and who signed it?
- Does the OT&E result contain all six mandatory content categories, specifically item 5 (information-protection evaluation)?
- Were any critical defects identified? If yes, is there documented evidence of the 제2항 corrective plan and the 제3항 re-evaluation?
- If no critical defects were identified despite documented DT&E deficiencies, how did item 1 (T&E result and corrective action status) handle the DT&E outcomes?

## Related

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (hub)]]
- [[defense-it-2129-article-61|제61조 (개발시험평가 조치)]]
- [[defense-it-2129-article-62|제62조 (운용시험평가 계획수립)]]
- [[defense-it-2129-article-63|제63조 (운용시험평가 실시)]]
- [[defense-it-2129-article-65|제65조 (정보시스템 설치)]]
- [[../layers/layer-4|Layer 4]]
- [[../layers/layer-1|Layer 1 (via item 5 — information-protection evaluation)]]
