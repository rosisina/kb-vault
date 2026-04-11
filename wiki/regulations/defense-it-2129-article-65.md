# Article 65 — Information System Installation (제65조 정보시스템 설치, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 2007–2019
**Layer:** [[../layers/layer-4|Layer 4]] (primary — installation is the phase immediately after OT&E where a "passing" project is physically deployed), [[../layers/layer-1|Layer 1]] (secondary — parallel-operation support during replacement is the mechanism by which 舊 system history could be erased during cutover)
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제65조", articleNum: 65, regulationYear: 2018, country: "KR"}`

Article 65 defines the **installation-phase duties of the contractor (용역업체)**, focusing on (1) preparing the resources and information needed for installation in the actual operating environment, (2) supporting **parallel operation with any system being replaced**, (3) installing per plan with documented code and database initialization, and (4) documenting installation work and results. For the 7-layer proof system this article is doubly significant: (a) it is the procedural gate through which a "passing" project physically enters service, meaning a Layer 4 OT&E manipulation terminates here; and (b) paragraph 1's parallel-operation clause is a direct Layer 1 pressure point, because it is during parallel operation that data and history from the outgoing system (e.g., 舊KIATIS) could be selectively migrated or erased.

## Key Takeaways

- [진리성] **Parallel operation on system replacement is mandatory (제1항).** Verbatim: `설치되는 정보시스템이 기존의 정보시스템을 대체할 때에는 병행 수행을 지원하여야 한다.` When a new system replaces an old one, the contractor must support parallel operation. This means there is a **documented window during which both systems run simultaneously** — and this window is precisely when Layer 1 history-erasure (舊KIATIS 이력 제거) would have to occur to avoid a gap in operational records. Any 新KIATIS installation that did *not* include parallel operation with 舊KIATIS is a violation of this paragraph *and* a direct Layer 1 signal. Any parallel-operation window that was abbreviated, undocumented, or bypassed entirely is equally significant.
- [타당성] **Resources and information must be determined and prepared (제1항).** The contractor must determine and prepare "the resources and information needed to install the developed application software — including the new or replacement base operating environment — at the requiring military and agency." This creates a specific, documentable list of installation inputs. Absence of such a list in the evidence record is a procedural violation.
- [타당성] **Installation per plan with specific software guarantees (제2항).** The contractor must install per the installation plan and, per contract, **guarantee initialization, execution, and termination of software code and databases**. This is a concrete technical obligation — not general support language — and it creates a documentable artifact (the contractor's guarantee).
- [타당성] **Installation work and results must be documented (제2항).** Verbatim: `설치 작업과 결과를 문서화하여야 한다.` Installation is one of the three explicit documentation obligations in this chapter (the others being DT&E result per 제61조 and OT&E result per 제64조). Undocumented installation is a procedural violation.
- [진리성] **Installation is the executional terminus of the Chapter 4 Section 4 framework.** DT&E (제60조) → DT&E report (제61조) → OT&E plan (제62조) → OT&E execution (제63조) → OT&E result (제64조) → **installation (제65조)** → acceptance (제66조) → inspection (제67조) → fielding (제68조). A project that has been manipulated through the preceding articles terminates its manipulation here — installation is where the abstract "passing verdict" becomes a physical system in production. The installation record is therefore the *last* artifact that can retroactively expose earlier manipulation.
- [타당성] **Article 65 does not reference the evaluation result.** Strikingly, this article does *not* contain a gate that checks whether the prior OT&E result was 적합. That gate lives in 제68조 제1항 (fielding). Article 65 itself is silent on the OT&E result — meaning installation can proceed in parallel with unresolved OT&E issues, provided fielding is withheld until 적합 is issued.

## Verbatim

> 제65조(정보시스템 설치) ① 용역업체는 계약에 명시되어 있는 바와 같이 사업관리기관의 정보시스템 설치 활동을 지원하여 소요 군 및 기관에 신규 또는 대체하여 도입되는 기반운영환경을 포함하여 개발된 업무응용 소프트웨어를 설치하기 위한 자원과 정보를 결정하고 준비하여야 하며, 설치되는 정보시스템이 기존의 정보시스템을 대체할 때에는 병행 수행을 지원하여야 한다.
>
> ② 용역업체는 정보시스템 설치 계획에 따라 해당 소프트웨어를 설치하여야 하며 계약에 명시되어 있는 바와 같이, 소프트웨어 코드 및 데이터베이스의 초기화, 실행, 종료 등을 보증하고 설치 작업과 결과를 문서화하여야 한다.

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 2007–2019)*

## Open Questions

- Was there a documented parallel-operation window between 舊KIATIS and 新KIATIS during installation? If yes, how long was it, and what were its termination criteria?
- Is there a contractor installation record documenting the resources prepared, the installation steps, and the database initialization/execution/termination guarantees per 제2항?
- During the parallel-operation window, is there evidence of data or history migration from 舊KIATIS, and is there evidence of what was migrated vs. what was discarded? This is the key Layer 1 forensic question.
- Was installation permitted to proceed while OT&E issues remained open, pending the 제68조 fielding gate?

## Related

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (hub)]]
- [[defense-it-2129-article-64|제64조 (운용시험평가 결과조치)]]
- [[../layers/layer-4|Layer 4]]
- [[../layers/layer-1|Layer 1 — 舊KIATIS 이력 제거 (via 제1항 parallel-operation clause)]]
