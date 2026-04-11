# Article 62 — OT&E Planning (제62조 운용시험평가 계획수립, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1923–1945
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제62조", articleNum: 62, regulationYear: 2018, country: "KR"}`

Article 62 is the **OT&E counterpart to 제59조 (DT&E planning)**. The sponsor drafts an OT&E plan on Form 26, incorporating a usage scenario based on the actual operating environment; constitutes the OT&E panel; obtains panel review; and submits to the control agency for approval. Critically, the article also **requires the sponsor to include, within the OT&E items, a check on whether the performance-measurement data can actually be collected** — an anti-manipulation clause that forces the sponsor to validate measurability up front rather than retroactively. Article 62 is structurally parallel to 제59조 but assigns the full planning chain to the sponsor (not the management agency), matching the 제57조 partition.

## Key Takeaways

- [타당성] **Form 26 (별지 제26호서식) is the required OT&E plan format.** Parallel to Form 24 in 제59조. Omission or deviation from the form is a procedural defect.
- [타당성] **The plan must include a usage scenario reflecting the actual operating environment (제1항).** Verbatim: `실제 운용환경과 업무 절차를 반영하여 운용 시나리오를 포함한`. An OT&E planned against a synthetic or stripped-down environment — rather than the real one — is a procedural violation. This is a meaningful Layer 4 signal: if the 新KIATIS OT&E was conducted in an environment that did not reflect the actual operational deployment, it is not a valid OT&E under this article.
- [진리성] **Measurability check on performance indicators (제1항, second sentence).** Verbatim: `또한, 성과평가 시 성과지표 측정에 필요한 데이터의 수집여부를 측정할 수 있는지의 여부를 운용시험평가 항목에 포함한다.` This is an **anti-manipulation clause**: the OT&E plan must up-front verify that the data required to measure the performance indicators can actually be collected. A project that passes OT&E but whose performance data cannot be collected is prima facie non-compliant with this clause — and any post-hoc inability to produce the measured data is a retrospective proof that the clause was ignored.
- [타당성] **Panel composition mirrors DT&E but is sponsor-led (제2항).** The OT&E panel must include representatives from 사업주관기관, 사업관리기관, 사용기관, 유지보수책임기관, and other evaluation experts. Same five categories as 제59조 제2항, but with sponsor-led composition.
- [타당성] **Partial-scope OT&E is permitted (제3항).** OT&E may be limited to part of the target units/agencies based on system scale and characteristics, and the unit head must appoint a 운용시험 지원 책임자. A partial-scope OT&E that omits organizationally sensitive units (e.g., DIDC itself) while testing peripheral units is formally permitted — but what scope was selected and why must be documented.
- [타당성] **Panel review before submission (제4항) and control-agency approval (제5항)** mirror the 제59조 제3–4항 gates but for OT&E. Four procedural gates exist before OT&E can begin: plan draft → panel constitution → panel review → control-agency approval.
- [진리성] **Four gates × two test phases = eight procedural gates across DT&E + OT&E planning alone.** Each is a potential Layer 4 manipulation point. A compromised project would tend to show a characteristic pattern: missing forms, incomplete panels, rubber-stamped approvals, or unexplained partial scopes.

## Verbatim

> 제62조(운용시험평가 계획수립) ① 사업주관기관은 운용개념기술서 및 제안요청서의 사용자 요구사항, 개발시험평가 결과 등을 기반으로 실제 운용환경과 업무 절차를 반영하여 운용 시나리오를 포함한 별지 제26호서식의 운용시험평가계획을 수립하여야 한다. 또한, 성과평가 시 성과지표 측정에 필요한 데이터의 수집여부를 측정할 수 있는지의 여부를 운용시험평가 항목에 포함한다.
>
> ② 사업주관기관은 운용시험평가단 구성 시 사업주관기관, 사업관리기관, 사용기관, 유지보수책임기관 및 그 밖의 평가 전문요원 등을 포함하여야 한다.
>
> ③ 운용시험평가는 정보시스템의 규모 및 특성에 따라 대상 부대·기관의 전부 또는 일부에 국한하여 실시할 수 있으며, 운용시험평가 대상 부대·기관의 장은 운용시험 지원 책임자를 임명하고 시험평가 실시를 위한 제반조치를 하여야 한다.
>
> ④ 운용시험평가단이 구성된 경우 사업주관기관은 운용시험평가계획에 관하여 운용시험평가단의 검토 의견을 반영하여 보완한 후 사업통제기관에 제출하여야 한다.
>
> ⑤ 사업통제기관은 운용시험평가계획의 타당성 및 적절성 등을 검토하여 승인하여야 한다.

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 1923–1945)*

## Open Questions

- Was the 新KIATIS OT&E environment a real operational environment or a synthetic one?
- Did the 新KIATIS OT&E plan include the measurability check on performance indicators per 제1항 second sentence?
- Was OT&E conducted at full or partial scope? If partial, which units were excluded and why?
- Is the Form 26 OT&E plan documented in the evidence record?

## Related

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (hub)]]
- [[defense-it-2129-article-57|제57조 (시험평가 구분)]]
- [[defense-it-2129-article-59|제59조 (개발시험평가 계획수립)]]
- [[defense-it-2129-article-63|제63조 (운용시험평가 실시)]]
- [[defense-it-2129-article-64|제64조 (운용시험평가 결과조치)]]
- [[../layers/layer-4|Layer 4]]
