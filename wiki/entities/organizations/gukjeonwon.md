# 국전원 — DCIA / Defense Computer Information Agency (국방전산정보원)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 644–652 (제11조 제4항) • `../defense-kg-platform/kg/schema/aurora_schema.cypher` Layer 3 definition
**Layer:** [[../../layers/layer-3|Layer 3]] (primary — 국전원 is the named 사업관리기관 for 국본 systems; Layer 3 concerns "국전원 전속 후 SW개발사업관리 착수 및 종결"), [[../../layers/layer-4|Layer 4]] (secondary — 사업관리기관 conducts DT&E per 제11조 제4항 item 3)
**Aurora node:** `:Organization {name: "Defense Computer Information Agency", nameKr: "국방전산정보원", alias: "DCIA", aliasKr: "국전원", parent: "Ministry of National Defense"}`

**국전원 (국방전산정보원, Defense Computer Information Agency / DCIA)** is the MND-subordinate agency designated by regulation as the default `사업관리기관` (project management agency) for information systems operated by MND Headquarters (국본). MND Directive No. 2129 Article 11 ¶4 names 국전원 directly: "국본이 운용하는 정보시스템과 관련된 사업의 경우에는 국전원" — meaning for any HQ-operated information system project, 국전원 is the regulation-designated management agency by default. This regulatory designation is what gives Layer 3 of the proof system its institutional spine.

**KIATIS context (added 2026-04-11).** For the [[../../events/2018-2019-kiatis-performance-improvement-project|KIATIS 성능개선사업 (2018–2019)]], 국전원 is the **사업관리기관 of record**. Under 제2129호 제11조 ¶4 제3호 (`개발 시험평가 주관`), 국전원 is therefore the designated conductor of the KIATIS **DT&E** in the 2019-09 to 2019-12 test evaluation window. The paired OT&E is conducted by [[dma-defense-pow-mia-accounting-agency|국방 유해발굴사업단 (DMA)]] as 사업주관기관. Under 제58조 제2항, the KIATIS DT&E and OT&E must be **separated by default** (the 5억 원 threshold of 제58조 제3항 is exceeded — KIATIS is 6.25억 원 — so the delegated-regime simultaneous-execution permission does not apply).

## Key Takeaways

- [진리성] **국전원 is named by regulation as 사업관리기관 for 국본 systems.** Not an informal assignment but a text-defined default role. Any 국전원 action concerning a 국본-operated system is taken in the capacity the directive itself created. See [[../../regulations/defense-it-2129-article-11|제11조]] for full analysis.
- [타당성] **사업관리기관 duties under 제11조 제4항** — five categories: (1) project preparation (사업계획서·제안요청서·체계규격서 지원) and procurement issuance, (2) schedule/risk/configuration/quality management, (3) **development test and evaluation (DT&E) oversight**, (4) project inspection (검수), (5) fielding support (installation, data migration, handover to O&M organization).
- [진리성] **국전원 is the Layer 3 ↔ Layer 4 bridge.** Because 국전원 both **manages** the project (Layer 3 narrative: "국전원 전속 후 SW개발사업관리") and **conducts DT&E** (Layer 4 narrative: 시험평가 조작), it is the single organization where Layer 3 and Layer 4 concretely overlap. Any claim atom touching Layer 3 execution or Layer 4 DT&E manipulation is likely to involve 국전원 as an entity.
- [타당성] **제11조 제5항 outsourcing applies.** 국전원 may delegate "the whole or part of" project management to a `사업관리위탁기관` (external specialized entity) under paragraph 5 — creating a fourth-link accountability chain beyond the three named roles. Monitoring whether 국전원 exercised this delegation for any 新KIATIS-related work is a concrete Layer 3 diagnostic.

## Open Questions

- **Agency name translation.** "DCIA" = Defense Computer Information Agency is my best-effort English rendering of 국방전산정보원. Confirm canonical English name — if Aurora has a different official translation, align.
- **Reporting chain.** Is 국전원 directly subordinate to MND, or to an intermediate headquarters? Pending ingest of organizational regulations in `raw/04. law & regulation/`.
- **Scope of 국전원's 사업관리 portfolio.** How many concurrent projects does 국전원 typically manage, and was 新KIATIS one of seven simultaneous projects (as referenced in `vault-legacy-wiki-english/` Layer 3 summary, to be verified on A.6 compile)?
- **Was 新KIATIS management delegated to a 사업관리위탁기관 per 제11조 제5항?** If yes, who, and what ISP result justified the delegation?

## Related

- [[../../layers/layer-3|Layer 3 — 국전원 전속 후 SW개발사업관리 착수 및 종결]]
- [[../../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 전·중·후 조작]]
- [[../../regulations/defense-it-2129-article-11|훈령 제2129호 제11조 (국전원 naming anchor)]]
- [[../../regulations/defense-it-2129-article-59|훈령 제2129호 제59조 (DT&E planning — managed by 사업관리기관)]]
- [[../../regulations/defense-it-2129-article-60|훈령 제2129호 제60조 (DT&E execution)]]
- [[../../regulations/defense-it-2129-article-61|훈령 제2129호 제61조 (DT&E result reporting)]]
- [[didc|DIDC (sibling MND entity)]]
- [[mnd-it-planning-office|국본 정보화기획관실 (the 사업통제기관 국전원 reports DT&E results to)]]
- [[../people/kim-min-su|김민수 (원장)]]
- [[../people/lee-ji-young|이지영 (과장)]]
- [[../../claims/2436ho-gukjeonwon-role-tier-renaming|제2436호 role-tier renaming atom]]
- [[../../events/2018-2019-kiatis-performance-improvement-project|KIATIS 성능개선사업 event]]
- [[../_index|Entities]]
