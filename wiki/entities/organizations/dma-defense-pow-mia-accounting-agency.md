# 국방 유해발굴사업단 — DMA / Defense POW/MIA Accounting Agency

**Source:** James's contextual input 2026-04-11 • `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` 제11조 ¶3 (사업주관기관 duties)
**Layer:** [[../../layers/layer-4|Layer 4]] (primary — as 사업주관기관 for KIATIS, DMA conducts OT&E and issues the 군사용 적합·부적합 verdict, making it the structural center of Layer 4 adjudication) • [[../../layers/layer-2|Layer 2]] (secondary — the sponsor-of-record for the 新KIATIS project)
**Aurora node:** `:Organization {name: "Defense POW/MIA Accounting Agency", nameKr: "국방 유해발굴사업단", alias: "DMA", parent: "Ministry of National Defense"}`

**국방 유해발굴사업단 (Defense POW/MIA Accounting Agency, DMA)** is the MND-subordinate agency responsible for the recovery and identification of Korean War and other conflict-era missing-in-action remains. It is the **사업주관기관 (project sponsor agency)** of record for the **KIATIS 성능개선사업 (2018–2019)** — meaning DMA is the regulation-designated body that (a) formulates the operational concept, (b) drafts the system specification, (c) conducts OT&E under 제2129호 제62–64조, and (d) issues the final `군사용 적합·부적합` military-suitability verdict under 제2129호 제11조 ¶3 제5호 + 제64조 제1항.

## Key Takeaways

- [진리성] **DMA is the KIATIS 사업주관기관.** Per James's contextual input 2026-04-11, DMA is the project sponsor of record for the KIATIS performance improvement project. This assignment follows from the project's classification as a 국본 사업 or 전군지원 사업 routed through DMA's operational scope.
- [타당성] **DMA conducts KIATIS OT&E.** Under 제2129호 제11조 ¶3 제4호 (`운용시험 평가 주관`) and 제62–64조, the sponsor conducts OT&E. For KIATIS, this means DMA — not 국전원 — is responsible for the operational test phase in the 2019-09 to 2019-12 window.
- [진리성] **DMA issues the military-suitability verdict.** Under 제11조 ¶3 제5호 (`군사용 적합·부적합 판정`) and 제64조 제1항, the sponsor makes the single most consequential T&E judgment. For KIATIS, DMA's 적합·부적합 verdict is the binary decision that determined whether the delivered software could enter 전력화 per 제68조.
- [타당성] **DMA is distinct from 국전원.** 국전원 is the 사업관리기관 (management agency, conducting DT&E under 제11조 ¶4 제3호 + 제59–61조). DMA is the 사업주관기관 (sponsor, conducting OT&E). Under 제58조 제2항, for a 6.25억 project the two must be **separated**. An investigation that treats DMA and 국전원 as interchangeable, or that attributes OT&E conduct to 국전원 or DT&E conduct to DMA, would be misreading the regulatory role assignment.
- [진리성] **DMA's 사업주관기관 designation derives from DMA being the user/operator of the KIATIS system.** The regulation assigns sponsor role to the organization that "uses the information system's outputs" (제11조 ¶3 `정보화 사업의 성과품을 활용하는 기관`). For the KIATIS system, DMA is presumably the intended user — the operational context in which 유해발굴 information is processed. Exact operational scope pending book compile.

## Open Questions

- **Full official name and English rendering.** "DMA" / "Defense POW/MIA Accounting Agency" is the working English rendering. Confirm canonical Aurora name.
- **DMA's reporting chain within MND.** Who within MND HQ oversees DMA? Pending organizational charts.
- **DMA OT&E panel composition for KIATIS.** Per 제62조 제2항, the OT&E panel must include representatives from sponsor, management, user, O&M, and external experts. Who was named to the KIATIS OT&E panel? Pending 시험평가 기록 ingest.
- **The `군사용 적합·부적합` verdict for KIATIS.** What was the DMA-issued verdict, and who signed it? Pending 시험평가 결과보고서 ingest.
- **Written approval of simultaneous DT&E/OT&E execution (if any).** Did 국본 정보화기획관실 issue a 제58조 제2항 exception approval for simultaneous execution of KIATIS DT&E and OT&E, and if so, was DMA a signatory or witness? Absence of documentation is itself a diagnostic finding.
- **DMA's position in the 99.7% successful → manipulated-to-failed narrative.** The vault legacy wiki (`vault-legacy-wiki-english/Test-Evaluation-Manipulation.md`) mentions a 99.7-point evaluation result manipulated to appear as failure. Was this 99.7 verdict issued by DMA (as the 사업주관기관) or by another body? Pending book compile.

## Related

- [[../../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 조작]]
- [[../../events/2018-2019-kiatis-performance-improvement-project|KIATIS 성능개선사업 (event)]]
- [[gukjeonwon|국전원 (KIATIS 사업관리기관 / DT&E 수행자)]]
- [[mnd-it-planning-office|국본 정보화기획관실 (KIATIS 사업통제기관 / 8개 승인 게이트)]]
- [[../../regulations/defense-it-2129-article-11|훈령 제2129호 제11조 (사업주관기관 duties)]]
- [[../../regulations/defense-it-2129-article-62|훈령 제2129호 제62조 (OT&E 계획수립)]]
- [[../../regulations/defense-it-2129-article-63|훈령 제2129호 제63조 (OT&E 실시, 9-item list)]]
- [[../../regulations/defense-it-2129-article-64|훈령 제2129호 제64조 (OT&E 결과조치, 군사용 적합·부적합 판정)]]
- [[../_index|Entities]]
