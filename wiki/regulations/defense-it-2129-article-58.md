# Article 58 — T&E Performance Principles (제58조 시험평가 수행원칙, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1840–1866
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제58조", articleNum: 58, regulationYear: 2018, country: "KR"}`

Article 58 establishes the **six procedural principles** under which T&E is conducted: (1) COTS products use product-selection + acceptance testing as a substitute for full T&E; (2) MND-controlled projects apply 제59–64 with DT&E / OT&E separation as the default; (3) delegated projects and small projects (<500M KRW software development cost) apply 제59–64 with reporting-to-sponsor required; (4) delegated/small projects may conduct DT&E and OT&E simultaneously in the OT&E environment; (5) interoperability and information security T&E are delegated to specialist organizations; (6) all parties must support T&E.

## Key Takeaways

- [타당성] **Principle of separation (원칙적 분리).** MND-controlled projects apply the DT&E/OT&E separation from 제59–64 as the baseline rule; simultaneous execution requires sponsor approval on an exception basis. (제58조 제2항)
- [타당성] **Cost threshold.** Projects with software development cost **under 500 million KRW (5억 원 미만)** are treated under the delegated/small-project regime that allows simultaneous DT&E and OT&E — creating a potential Layer-4-adjacent loophole if a project is structured to fall below the threshold. (제58조 제3항)
- [타당성] **Delegation reporting.** Delegated projects must still "report the results to the project-control organization (사업통제기관)" — meaning the control agency retains the audit trail even when execution is delegated. Loss of this audit trail in a subsequent revision would be a significant Layer 4 manipulation signal. (제58조 제3항)
- [타당성] **Interoperability and security T&E are carved out** to specialist organizations (제9장 상호운용성 관리 및 별도의 훈령) — meaning the manipulation of interoperability/security evaluation results would require involving those specialist bodies, not only the PM/sponsor chain. (제58조 제5항)
- [진리성] **COTS substitution is a known evasion vector.** The article permits product-selection + acceptance testing to substitute for full T&E on COTS procurement. Projects that recategorize custom development as COTS integration would bypass 제59–64 entirely. To be monitored in the 新KIATIS case evidence. (제58조 제1항)

## Verbatim

> 제58조(시험평가 수행원칙) ① 상용정보통신제품 도입 시에는 제품 선정을 위한 평가와 검수(인수시험)로 시험평가를 대체한다. 다만, 정보시스템 구축사업의 일부로 도입하는 상용정보통신제품은 개발된 업무응용 소프트웨어에 통합하여 운용시험평가를 실시할 수 있다.
>
> ② 국방부 통제사업의 시험평가 절차는 제59조에서 제64조까지의 내용을 준용하며 개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되, 필요시 사업통제기관의 승인을 받아 동시에 실시할 수 있다.
>
> ③ 기관 위임사업, 정보시스템 구축사업의 소프트웨어 개발비가 5억 원 미만 사업 및 제46조에 따라 사업계획서 승인 단계에서 시험평가가 위임된 사업은 제59조에서 제64조까지를 준용하여 수행하되, 해당 기관에서 정한 세부 절차에 따라 시험평가를 실시하고 결과를 사업통제기관에 보고한다.
>
> ④ 제3항의 대상 사업은 사업관리기관과 사업주관기관 주관 하에 개발시험평가와 운용시험평가를 운용시험평가 환경에서 동시에 실시할 수 있다.
>
> ⑤ 사업관리기관 및 사업주관기관은 시험평가계획 수립 시 상호운용성 및 정보보호 분야 시험평가에 관하여는 제9장 상호운용성 관리 및 별도의 훈령을 준용하여 평가계획을 작성하고 해당 분야 업무를 위임받은 기관 또는 전문기관에 시험평가를 의뢰한다.
>
> ⑥ 사업주관기관 및 사업관리기관과 용역업체(공급업체 포함)는 시험평가에 관한 제반 사항을 지원하여야 한다.

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1840–1866)*

## Open Questions

- What was the 新KIATIS software development cost? If between 4억 and 5억, that alone is a signal the project was structured to cross the delegation threshold.
- Was the 新KIATIS project classified as 국방부 통제사업 or as 기관 위임사업? The answer determines which paragraph of 제58조 applied to its T&E.
- Did any later revision (2019–2025) modify the 5억 KRW threshold?

## Related

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (hub)]]
- [[defense-it-2129-article-57|제57조 (시험평가 구분)]]
- [[defense-it-2129-article-59|제59조 (개발시험평가 계획수립)]]
- [[defense-it-2129-article-60|제60조 (개발시험평가 실시)]]
- [[../layers/layer-4|Layer 4]]
