# Article 10 — Defense IT Project Classification (제10조 국방정보화사업 구분, 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 550–599
**Layer:** [[../layers/layer-1|Layer 1]] (primary — DIDC explicitly named as MND-controlled), [[../layers/layer-2|Layer 2]], [[../layers/layer-3|Layer 3]] (secondary — classification determines downstream management and evaluation regime)
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호 제10조", articleNum: 10, regulationYear: 2018, country: "KR"}`

Article 10 of MND Directive No. 2129 (2018-02-05) defines **four orthogonal classification axes** for defense IT projects: by acquisition-work type, by acquisition method, by operational scope, and by control agency. Critically, paragraph 1 item 4 explicitly names **"국방통합 데이터센터의 정보화사업" (DIDC IT projects)** as an example of `국방부 통제 사업` (MND-controlled projects), making this article a direct textual anchor for Layer 1 of the proof system. Paragraph 2 introduces a discretion clause permitting reclassification between MND-controlled and delegated status based on "impact on the defense IT environment."

## Key Takeaways

- [타당성] **Four orthogonal classification axes** are defined in 제1항 (not hierarchical — a single project is classified across all four simultaneously):
  1. **By acquisition-work type**: ISP (정보화전략계획수립), system construction or redevelopment (정보시스템 구축·재개발), O&M (운영·유지보수), R&D (정보기술 연구·실험).
  2. **By acquisition method**: in-house (자체 개발), outsourced (외주용역 개발), purchase or lease (구매·임차).
  3. **By operational scope**: tri-service/multi-agency (전군지원 사업), HQ-operated (국본 사업), or single-agency (기관 사업).
  4. **By control agency**: MND-controlled (국방부 통제 사업) or delegated (위임 사업).
- [진리성] **DIDC is explicitly named.** Paragraph 1 Item 4(가) states `국방부 통제 사업 : 전군지원사업, 국본사업, 기타 지정된 주요사업(국방통합 데이터센터의 정보화사업 등)`. DIDC IT projects are therefore, as a matter of regulatory text, **MND-controlled** — not delegated. Any attempt in the 2016 hacking aftermath to treat DIDC projects as delegated to a subordinate agency would contradict this article. This is Layer 1 textual evidence.
- [타당성] **Delegated projects are explicitly limited.** Paragraph 1 Item 4(나) lists delegated projects as `기관사업, 기타 위임된 사업(운영 및 유지보수사업 등)` — single-agency projects and O&M. Construction projects are not delegated by default under this classification.
- [타당성] **The discretion hole (제2항).** "사업에 따라 각 호의 사업이 복합적으로 구성된 사업으로 추진될 수 있으며 국방정보화 환경에 미치는 영향 등을 고려하여 국방부 통제 및 기관 위임 여부를 조정할 수 있다." This paragraph permits the MND to **adjust** the MND-control / delegation status of a project after its initial classification, on the basis of "impact on the defense IT environment." The criterion is subjective and leaves no documented audit trail requirement — a structural Layer 1/2 manipulation vector. Any reclassification of a DIDC-related project away from MND control without documented justification is prima facie suspicious.
- [진리성] **The 4×3×3×2 classification matrix yields 72 possible project types** in principle, though most combinations are not realized. This dense classification space is important because subsequent revisions (2019–2025) may silently drop categories or introduce new ones — a potentially invisible form of regulatory manipulation.

## Verbatim

> 제10조(국방정보화사업 구분) ① 국방정보화법 제2조 제7호의 국방정보화사업(이하 "정보화사업"이라 한다)은 다음 각 호와 같이 구분한다.
>
> 1. 정보시스템 획득업무 유형에 따른 구분
>    가. 정보화전략계획수립(ISP)
>    나. 정보시스템 구축(또는 재개발)
>        1) 업무 응용 소프트웨어 개발
>        2) 기반운영환경 조성
>    다. 정보시스템 운영 및 유지보수
>    라. 정보기술 연구 및 실험
>
> 2. 획득방법에 따른 구분
>    가. 자체 개발
>    나. 외주용역 개발
>    다. 구매·임차
>
> 3. 운용범위에 따른 구분
>    가. 전군지원 사업 : 2개 이상 군·기관에서 공동으로 운용하는 정보시스템과 관련된 사업
>    나. 국본 사업 : 국방부 본부에서 운용하는 정보시스템과 관련된 사업
>    다. 기관 사업 : 합참, 각 군 및 기관이 운용하는 정보시스템과 관련된 사업
>
> 4. 사업통제기관에 따른 구분
>    가. 국방부 통제 사업 : 전군지원사업, 국본사업, 기타 지정된 주요사업(국방통합 데이터센터의 정보화사업 등)
>    나. 위임 사업 : 기관사업, 기타 위임된 사업(운영 및 유지보수사업 등)
>
> ② 사업은 제1항에 따라 구분하되 사업에 따라 각 호의 사업이 복합적으로 구성된 사업으로 추진될 수 있으며 국방정보화 환경에 미치는 영향 등을 고려하여 국방부 통제 및 기관 위임 여부를 조정할 수 있다.

*(Source: `국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md` lines 550–599)*

## Open Questions

- Was the DIDC-related information system involved in the 2016 hacking incident classified as 국방부 통제 사업 throughout its lifecycle, or was it ever reclassified under 제2항?
- What is the `국방정보화법 제2조 제7호` definition of 국방정보화사업 that this article references? The directive inherits its scope from the underlying law — any amendment to the parent law would affect the scope of this article.
- Did any subsequent revision (2019–2025) modify or remove the explicit mention of DIDC in 제1항 제4호 가? Removal would be a direct Layer 1 manipulation signal.
- Does the 제2항 discretion clause require documentation of the "영향" assessment when status is adjusted? The text does not appear to require it — this gap is itself a regulatory weakness worth flagging.

## Related

- [[defense-it-operations-directive-2129|국방정보화업무 훈령 제2129호 (hub)]]
- [[defense-it-2129-article-11|제11조 (정보화사업 관련기관 임무)]]
- [[../layers/layer-1|Layer 1 — Active-X 제거 사업 간 舊KIATIS 이력 제거]]
- [[../layers/layer-3|Layer 3 — 국전원 전속 후 SW개발사업관리]]
- [[../entities/organizations/_index|Organizations]]
