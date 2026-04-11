# DIDC 사이버방호 예규 — 부대예규 제12호 (DIDC Cyber Protection SOP)

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/01.(Korean) DIDC_사이버방호_예규.md • raw/06/01.(English)didc_cyber_protection_sop.md
**Layer:** [[../layers/layer-1|L1]] (primary — DIDC 해킹 근원서버 은폐 직접 증거 frame), [[../layers/layer-4|L4]] (secondary), [[../layers/layer-6|L6]] (secondary)
**Aurora node:** `:Directive {name: "국방통합데이터센터 부대예규 제12호 사이버방호 예규", regulationYear: 2016, country: "KR", issuer: "DIDC", articleNum: null}`

The DIDC's own internal Standard Operating Procedure (예규) governing cyber protection across the data center's operations. It is the procedural rulebook that the DIDC was bound to follow during the 2016 North Korean hacking incident — and the document that the Layer 1 cover-up narrative alleges was systematically bypassed or whose required artifacts (별지 서식 forms) were destroyed or never created.

**제정일: 2016-02-01.** This date is critical: the SOP was in force on the day the DIDC hacking incident occurred (per the case's narrative timeline). Every cyber protection procedure required by this SOP was a legal duty for DIDC personnel from that date forward, and any failure to produce the SOP-required documentary artifacts constitutes a Layer 1 procedural-trace anomaly.

## Key Takeaways

- [타당성] **제정일 2016-02-01.** Initial enactment date precedes or coincides with the 2016 DIDC North Korean hacking incident. Seven revisions through 2019-06-04 (last visible). The 2018-12-01 revision is bolded in the source as significant.
- [타당성] **Hierarchical authority.** Per 제1조 (목적), this SOP is enacted under 「국방사이버안보 훈령」 — the same directive that 제2129호 제9조 ¶2 references via the A3 cyber-routing anchor. This directly links the DIDC SOP layer to the [[defense-it-operations-directive-2129|훈령 제2129호]] manipulation pattern.
- [타당성] **제3조 적용근거 lists 10 parent regulations:** 정보통신기반 보호법 / 국방통합데이터센터령 / 국방보안업무훈령 / 국방 정보화업무 훈령 / 국방사이버안보 훈령 / 국방 사이버기강 통합관리 훈령 / 국방정보통신기반보호규정 / 합참 정보작전방호태세 규정 / 합참 사이버방호규정 / 국방 개인정보보호 훈령. The SOP's own bibliography identifies the regulatory layer-cake under which DIDC operated.
- [타당성] **Article 21 (침해사고 신고) procedural duty.** Verbatim: `각 부서장은 소관분야 정보시스템 운용 중에 비인가자의 불법 접근 또는 해킹 흔적 등 침해사고를 발견하는 즉시 정보보호과 및 사이버작전사령부에 신고하여야 하며 …` — *immediate* reporting duty to 사이버작전사령부 upon discovery of hacking traces.
- [타당성] **Article 22 (침해사고 조치) procedural chain.** 정보보호과 → 기획조정실 → 부대장 → 침해받은 각 부서장. Mandatory reporting and notification ladder.
- [타당성] **Article 37 (방화벽 및 SSL-VPN 관리/운용)** — every 방화벽 정책 변경 (firewall policy change) requires 별지 제6호 서식 (방화벽 보안정책 요청서) + 각 센터 정보보호과장 승인. Every SSL-VPN account requires 별지 제7호 서식 + same approval. **These are two of the most-auditable artifacts in the entire SOP** — any 2016-era 방화벽/VPN configuration change must have an associated 별지 form trail, and the absence of such trails is direct Layer 1 evidence.
- [타당성] **Auditable forms required by the SOP** (별지 서식 1–10):
  | 별지 | 제목 | Required by Article | Layer-evidence weight |
  |---|---|---|---|
  | 1 | 정보시스템 수준분류 결과서 | 제9조 보호대책 수립 | 시스템 분류 trace |
  | 2 | 정보시스템 보호요구 수준표 | 제9조 | 보호 등급 trace |
  | 3 | 정보시스템 보호대책 이력서 | 제10조 검토 | 보호 변경 이력 |
  | 4 | **정보시스템 위협/손상 보고서** | 제21조 | **침해사고 1차 보고 — 가장 중요** |
  | 5 | 바이러스 감염 경위서 | 제35조 | 감염 추적 |
  | 6 | **방화벽 보안정책 요청서** | 제37조 ① | **방화벽 변경 trace** |
  | 7 | **SSL-VPN 계정 신청서** | 제37조 ③ | **VPN 계정 trace** |
  | 8 | NAC 예외처리 요청서 | 제37조 ④ | NAC 예외 trace |
  | 9 | 전역·퇴직 및 전출자 계정 관리 | 제39조 | 계정 회수 trace |
  | 10 | 정보보호체계 적용절차 | 제40조 | 보호체계 적용 trace |
- [진리성] **Applicability scope (제2조).** ① 이 예규는 DIDC 본부 및 각 센터에 적용한다. ② DIDC 소관의 국방컴퓨터체계를 대상으로 한다. — Universal coverage of every DIDC-operated computer system, no carve-outs.
- [진리성] **The 2018-12-01 부분개정 is highlighted in source.** This date sits between the KIATIS development period (2018-01 ~ 2018-12, vendor selection) and the KIATIS test evaluation period (2019-09 ~ 2019-12). Whether this revision modified any of the auditable-forms requirements is a targeted A.6 / detailed-compile question.

## Revision history

| Revision | Date | Notes |
|---|---|---|
| 제정 | 2016-02-01 | Initial enactment, in force during the DIDC hacking incident |
| 부분개정 | 2016-04-01 | |
| 부분개정 | 2016-12-05 | |
| 부분개정 | 2017-09-06 | |
| 부분개정 | 2018-06-01 | |
| **부분개정** | **2018-12-01** | **Highlighted in source — significance pending detailed diff** |
| 부분개정 | 2019-06-04 | |

**The diff between successive revisions is the central A.6 / Layer 1 measurement target for raw/06.** Just as the directive A.3 batch produced the 11-anchor framework for 제2129호's revision pattern, a corresponding analysis of the DIDC SOP revisions would identify any anchor changes — particularly any changes to Articles 21, 22, 37 (the most auditable procedures) or to the 별지 서식 form requirements. **The full revision text is not provided in raw/06 — only the latest version. A targeted request to James for the predecessor revisions is queued.**

## Open Questions

- **Are predecessor revisions of this SOP available?** The current raw/06 file is presumably the latest revision (post-2019-06-04 state). The 2016-02-01 original — the version in force during the hacking — is the most evidentiarily critical version and should be obtained.
- **Did any of the 7 revisions modify Article 21, 22, 37, or the 별지 서식 1–10 list?** A.6 / detailed-compile target.
- **Do the 2016-era 별지 제4호 (위협/손상 보고서), 제6호 (방화벽 정책 요청서), and 제7호 (SSL-VPN 신청서) artifacts exist for the hacking incident period?** This is the central Layer 1 falsification question. Pending raw/05 (prosecutor evidence) and raw/07 (scanned files) cross-check.
- **What is the revision rationale for the bolded 2018-12-01 update?** Pending document or stated reason.

## Claim atoms anchored on this SOP

(See [[../claims/_index]] for the full list.)

- [[../claims/didc-sop-12-was-in-force-at-hacking|DIDC SOP 제12호 was in force on 2016-02-01]] — establishes the procedural duty floor for the hacking date
- [[../claims/didc-sop-incident-report-mandatory|DIDC SOP 제21조 + 별지 제4호 mandates incident reporting]] — absence of incident report = Layer 1 cover-up evidence
- [[../claims/didc-sop-firewall-vpn-trail-mandatory|DIDC SOP 제37조 + 별지 6/7호 mandates firewall/VPN policy paper trail]] — absence = Layer 1 cover-up evidence

## Related

- [[defense-it-operations-directive-2129|훈령 제2129호 (parent regulatory framework)]]
- [[defense-it-2129-article-9|제2129호 제9조 (cyber routing to 사이버안보훈령 — A3 anchor)]]
- [[didc-info-system-operation-sop-11|DIDC 정보시스템 운영관리 예규 (sister SOP)]]
- [[../entities/organizations/didc|DIDC]]
- [[../layers/layer-1|Layer 1]]
- [[../topics/defense-informatization-cartel|Defense Informatization Cartel]]
- [[_index|Regulations]]
