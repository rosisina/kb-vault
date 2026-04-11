# Article 11 — Duties of Project-Related Organizations (제11조 정보화사업 관련기관 임무, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 602–684
**Layer:** [[../layers/layer-3|Layer 3]] (primary — 국전원 explicitly named as 사업관리기관 for HQ systems), [[../layers/layer-4|Layer 4]] (secondary — the sponsor/management split is the structural basis for the DT&E/OT&E separation in 제57–64), [[../layers/layer-1|Layer 1]] (secondary — 국본 정보화기획관실 named as 사업통제기관)
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제11조", articleNum: 11, regulationYear: 2018, country: "KR"}`

Article 11 of MND Directive No. 2129 (2018-02-05) defines the **three-tier organizational structure** for defense IT projects: `사업통제기관` (control agency), `사업주관기관` (sponsoring agency), and `사업관리기관` (management agency). The article explicitly names **국본(정보화기획관실)** as the default control agency and — critically for Layer 3 of the proof system — names **국전원** as the default management agency for HQ-operated systems. Paragraph 5 introduces a delegation-to-external-entities clause (`사업관리위탁기관`).

## Key Takeaways

- [타당성] **Three-tier structure (제1항).** Every IT project has three distinct organizational roles defined by function: control (사업통제기관), sponsor (사업주관기관), management (사업관리기관). Detailed duties are in Appendices 3–7 (별표 3~7) — these appendices are **not yet ingested** and are flagged below.
- [진리성] **국전원 is named by the regulation as 사업관리기관 for HQ systems (제4항).** Verbatim: "국본이 운용하는 정보시스템과 관련된 사업의 경우에는 국전원, 나머지 기관사업의 경우에는 해당 부대·기관에서 사업 관리업무를 담당하는 부서가 해당되며." This textual anchor means Layer 3 of the proof system ("국전원 전속 후 SW개발사업관리 착수 및 종결") is operating within a regulation-defined role, not an informal assignment. Any 국전원 action concerning a 국본-operated system is an action taken *in its capacity as the 사업관리기관*, which triggers the downstream 제57–64 T&E obligations. This is a direct Layer 3 ↔ Layer 4 bridge.
- [타당성] **사업통제기관 duties (제2항)** — four numbered items: (1) requirement review and decision, (2) midterm plan and budget alignment, (3) project plan approval, (4) **T&E plan and result approval**. Item 4 means the control agency holds the gate for T&E results per 제59조 제4항 and 제60조 제2항 — the T&E-related manipulation vectors in Layer 4 must run through this role.
- [타당성] **사업주관기관 duties (제3항)** — seven numbered items including `운용개념 정립`, `체계규격서 작성`, `성과 지표 작성`, `운용시험평가 주관`, `군사용 적합·부적합 판정`, `전력화 주관`, `정보시스템 운용`. The sponsor *makes the final military-suitable / unsuitable judgment* per item 5 — meaning a corrupted sponsor can produce an "adequate" verdict despite DT&E failures.
- [타당성] **사업관리기관 duties (제4항)** — five numbered items including `사업계획서 작성`, `제안요청서 작성`, `일정·위험·형상·품질관리`, `개발시험평가 주관`, `사업 검수`, `전력화 지원(설치, 자료이관, 인계)`. The management agency **conducts** DT&E per item 3, while the sponsor **conducts** OT&E per 제3항 item 4 — this split is the structural basis for the 제57조 DT&E/OT&E separation.
- [타당성] **방사청 carve-out (제4항 proviso).** `다만, 방사청은 「방위사업관리규정」에서 정한 임무에 따라 정보화사업을 추진한다.` The Defense Acquisition Program Administration operates under a different regulation entirely. This is a jurisdictional seam worth monitoring — any 新KIATIS-related acquisition that transited through 방사청 would exit the scope of this article.
- [타당성] **The outsourcing hole (제5항).** Paragraph 5 permits the sponsor and management agencies to delegate "the whole or part of" defense-IT project management (국방정보화사업관리) to external "specialized" entities (사업관리위탁기관). The two triggering conditions are: (1) projects with two-or-more-agency scope or two-or-more integrated systems, (2) projects where ISP results identify a need for outsourced management. This is a **structural Layer 3 manipulation vector** — if DT&E execution is delegated to a 사업관리위탁기관, the chain of accountability documented in the regulation (control → sponsor → management) gets a fourth link whose oversight rules are not fully specified in this article.

## Verbatim

> 제11조(정보화사업 관련기관 임무) ① 정보화사업 관련 기관은 임무와 기능에 따라 사업통제기관·부서(이하 "사업통제기관"이라 한다), 사업주관기관·부서(이하 "사업주관기관"이라 한다), 사업관리기관·부서(이하 "사업관리기관"이라 한다)로 구분하며 세부 임무는 별표 3~7과 같다.
>
> ② 사업통제기관이란 사업의 소요결정, 중기계획·예산편성 반영, 사업 추진 간 조정·통제·지원하는 기관으로 전군지원사업과 기관사업 중 국본이 운용하는 정보시스템과 관련된 사업(이하 "국본 사업"이라 한다)은 국본(정보화기획관실)이 수행하며, 합참 및 각 군이 운용하는 정보시스템과 관련된 사업(이하 "각 군 사업"이라 한다)은 각 군 정보화기획관실(합참 및 국직은 해당 사업을 조정 통제하는 조직·부서)에 해당되며 수행 임무는 다음 각 호와 같다.
> 1. 사업 소요 검토·결정
> 2. 사업 중기계획·예산편성 검토·반영
> 3. 사업 계획 승인
> 4. 시험평가 계획·결과 승인
>
> ③ 사업주관기관이란 사업의 소요기획부터 체계운영 및 유지보수 단계까지 예산확보 및 운용개념 정립 등을 주관하고 정보화 사업의 성과품을 활용하는 기관으로 수행 임무는 다음 각 호와 같다.
> 1. 운용개념 정립, 운용개념기술서 및 체계규격서 작성 등 정보화전략계획수립
> 2. 성과 지표 작성
> 3. 중기계획·예산편성 요구
> 4. 운용시험 평가 주관
> 5. 군사용 적합·부적합 판정
> 6. 전력화 주관(교육, 운용 전담요원 지정, 임무 정의 등)
> 7. 정보시스템 운용
>
> ④ 사업관리기관이란 사업의 발주 준비부터 종결까지 사업계약, 일정관리, 위험관리, 형상관리, 품질관리 등 일련의 절차를 수행하는 기관으로 전군지원사업의 경우 정보화전략계획수립결과에 따라 사업통제기관과 사업주관기관이 협의하여 결정하며, 국본이 운용하는 정보시스템과 관련된 사업의 경우에는 국전원, 나머지 기관사업의 경우에는 해당 부대·기관에서 사업 관리업무를 담당하는 부서가 해당되며 수행 임무는 다음 각 호와 같다. 다만, 방사청은 「방위사업관리규정」에서 정한 임무에 따라 정보화사업을 추진한다.
> 1. 사업 준비(사업계획서 작성, 제안요청서 작성, 체계규격서 작성지원 등) 및 발주
> 2. 사업 관리 제반활동(일정관리, 위험관리, 형상관리, 품질관리 등)
> 3. 개발 시험평가 주관
> 4. 사업 검수
> 5. 전력화 지원(정보시스템 설치, 자료이관, 유지보수책임기관 인계 등 기술지원)
>
> ⑤ 사업주관기관과 사업관리기관의 장은 정보화사업을 효율적으로 수행하기 위하여 다음 각 호의 어느 하나에 해당하는 사업에 대하여 관리·감독하는 업무(이하 "국방정보화사업관리"라 한다)의 전부 또는 일부를 전문지식과 기술능력을 갖춘 자에게 위탁할 수 있다. 이때 사업관리·감독하는 업무를 위탁받은 기관을 사업관리위탁기관이라고 한다.
> 1. 2개 이상의 군·기관이 공동으로 운용하거나, 2개 이상의 정보시스템이 연계·통합되는 정보시스템 구축 사업
> 2. 정보화전략계획수립 사업 결과 본 사업의 위탁관리 필요성이 인정된 사업(사업의 중요도 및 난이도 등에 따라 판단)

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 602–684)*

## Open Questions

- **별표 3~7 (Appendices 3–7) not yet ingested.** The detailed duties of each of the three organizational tiers live in these appendices, which are referenced but not yet extracted. Any granular analysis of `사업관리기관` duties — particularly the specific 국전원 obligations — depends on ingesting those appendices.
- **What was 新KIATIS's 사업관리기관?** If 국전원, 제11조 제4항 applies directly. If a 사업관리위탁기관, 제11조 제5항 applies and an additional oversight seam exists.
- **Was 新KIATIS classified as 국본 사업, 각 군 사업, or 전군지원 사업?** The 사업통제기관 identity depends on this classification, which in turn is governed by 제10조 제1항 제3호.
- **Did 新KIATIS's DT&E involve a 사업관리위탁기관 per 제5항?** If yes, who was the entity, and what ISP result justified the delegation per 제5항 제2호?
- **Is there any documented sponsor "군사용 적합" judgment per 제3항 제5호 for 新KIATIS?** If the judgment exists despite documented DT&E deficiencies, that is a direct Layer 4 signal.

## Related

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (hub)]]
- [[defense-it-2129-article-10|제10조 (국방정보화사업 구분)]]
- [[defense-it-2129-article-57|제57조 (시험평가 구분)]]
- [[defense-it-2129-article-59|제59조 (개발시험평가 계획수립)]]
- [[defense-it-2129-article-60|제60조 (개발시험평가 실시)]]
- [[../layers/layer-3|Layer 3 — 국전원 전속 후 SW개발사업관리]]
- [[../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 조작]]
- [[../entities/organizations/_index|Organizations]]
