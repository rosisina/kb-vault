# Article 9 — Application of Other Directives (제9조 타 훈령 등의 적용, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 526–540
**Layer:** [[../layers/layer-1|Layer 1]] (primary — 국방사이버안보훈령 named as governing cyber protection), [[../layers/layer-2|Layer 2]] (secondary — carve-out for weapon-system information systems routes planning through 전력발전업무훈령), [[../layers/layer-4|Layer 4]] (secondary — test-related interoperability/architecture stay under this directive)
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제9조", articleNum: 9, regulationYear: 2018, country: "KR"}`

Article 9 of MND Directive No. 2129 (2018-02-05) is a **jurisdictional routing clause**: it tells you, for any given kind of work, *which other directive takes precedence*. Four distinct routing rules are established, each pointing at a different external directive family. The article is structurally similar to a conflict-of-laws rule — and crucially for Layer 1, paragraph 2 routes `정보시스템의 보호관리 및 사이버방호` (information system protection and cyber defense) to the **국방사이버안보훈령** and the **군사보안업무훈령**. This means that the cyber-security posture of a defense information system is not governed by *this* directive but by a sibling directive — creating a seam between IT-operations governance and cyber-security governance that Layer 1 manipulations can exploit.

## Key Takeaways

- [타당성] **Weapon-system information systems are partially carved out (제1항).** Projects whose information systems are classified as weapon systems (무기체계) follow the `전력발전업무훈령` for their planning management procedures — *except* for interoperability (상호운용성) and architecture (아키텍처), which remain under this directive. This creates a hybrid regime: weapon-system IT projects are governed by two directives simultaneously, with a specific boundary between them. Any 新KIATIS work that straddles the 무기체계 / 정보시스템 boundary is subject to both regimes.
- [진리성] **Cyber defense routing to 국방사이버안보훈령 (제2항).** This paragraph is Layer 1's regulatory hinge. Verbatim: `정보시스템의 보호관리 및 사이버방호에 관한 업무는 「군사보안업무훈령」, 「국방사이버안보훈령」 등에 따른다.` The implication: when DIDC systems are compromised by an intrusion (e.g., the 2016 North Korean hacking), the incident handling and response are governed not by *this* IT-operations directive but by the cyber-security directive. Manipulation of the cyber-security directive (per Aurora's [R5] 국방사이버안보훈령 — Appendix KK, tied to Layer 1) therefore changes the legal handling of exactly such incidents *without* touching this directive — a deniability mechanism.
- [타당성] **O&M routing to separate directives (제3항).** O&M of information systems and management of information resources is routed to `국방정보시스템 유지보수전담기관 운영 지침` and `국방정보자원관리 지시`. This means the O&M phase — which is where 舊KIATIS history lives long enough to be erased — is governed by yet another set of directives.
- [타당성] **Residual routing (제4항).** Other defense-IT work routes to `국방정보화사업 제안서평가업무훈령`, `국방부 시설·정보화사업 총사업비 관리훈령`, and `국방상호운용성관리지시`. The proposal-evaluation directive in particular governs how RFPs are assessed — another potential Layer 2 manipulation vector (organizational personnel 자력 조작 around proposal evaluation).
- [진리성] **Article 9 is itself a Layer 1 manipulation target.** Changing *which* directive governs cyber-protection work (by rewording 제2항 in a subsequent revision) would redirect the entire cover-up apparatus without touching any other substantive article. Any revision that removes, renames, or adds to the directive list in 제2항 is a critical signal.

## Verbatim

> 제9조(타 훈령 등의 적용) ① 무기체계로 분류된 정보시스템의 기획관리절차는 「전력발전업무훈령」을 따른다. 다만, 상호운용성, 아키텍처에 관한 사항은 본 훈령에서 규정한 사항을 따라야 한다.
>
> ② 정보시스템의 보호관리 및 사이버방호에 관한 업무는 「군사보안업무훈령」, 「국방사이버안보훈령」 등에 따른다.
>
> ③ 정보시스템의 운영 및 유지보수, 정보자원의 운용 및 관리에 관한 업무는 「국방정보시스템 유지보수전담기관 운영 지침」(지시), 「국방정보자원관리 지시」 등을 따른다.
>
> ④ 그 외 국방정보화업무 수행을 위하여 「국방정보화사업 제안서평가업무훈령」, 「국방부 시설·정보화사업 총사업비 관리훈령」, 「국방상호운용성관리지시」 등을 따른다.

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 526–540)*

## Open Questions

- Which specific cyber-security directive version (year) was in force at the time of the 2016 DIDC hacking? Cross-reference against Aurora's `국방사이버안보 훈령` Regulation node (years: [2015, 2017, 2018]).
- Did any subsequent revision of 제2129호 modify the list of directives named in 제9조? The list itself is a manipulation target.
- Was the directive routing in 제2항 (to 국방사이버안보훈령) used to move the 2016 incident handling out of MND IT-operations oversight?

## Related

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (hub)]]
- [[defense-it-2129-article-10|제10조 (국방정보화사업 구분)]]
- [[defense-it-2129-article-11|제11조 (정보화사업 관련기관 임무)]]
- [[../layers/layer-1|Layer 1 — Active-X 제거 사업 간 舊KIATIS 이력 제거]]
- [[../layers/layer-2|Layer 2 — 新KIATIS 사업 추진체계]]
