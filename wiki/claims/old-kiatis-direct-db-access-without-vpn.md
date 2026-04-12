# 舊KIATIS는 인터넷에서 VPN 없이 DB 직접 접속 — 15년간 보안 장비 부재

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/07-3-1-31-제1층위-ActiveX.md §3.1.1.6 (lines 62–73)
**Layer:** [[../layers/layer-1|Layer 1]] (primary), [[../layers/layer-6|Layer 6]] (secondary — Record No. 5,240 in L6 range), [[../layers/layer-7|Layer 7]] (tertiary — Record No. 10,303 in L7 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DB-DIRECT-NO-VPN"})
SET fr.layer = 1,
    fr.claimType = "security_architecture_violation",
    fr.claimDesc = "舊KIATIS operated with direct database access from the internet without VPN or security equipment for approximately 15 years (2007–2022). 장우진 (사업실무자-1) testified that VPN limitations caused operational failure of 新KIATIS and that the old system used direct DB access (Record No. 10,303). A 국유단 발굴 팀장 confirmed 15-year non-VPN usage. 국유단's 2022.2.6 '22년 1월 KIATIS 추진 평가 결과 보고' (Record No. 5,240) triggered the remediation meeting that led to the false 갑질 complaint against 한지훈",
    fr.counterHypothesis = "The VPN absence applied only to field operations and the core system at DIDC used VPN for DB access; field non-usage was operational convenience not a systemic vulnerability",
    fr.falsificationCondition = "Production of DIDC/국전원 network configuration records showing VPN was deployed for 舊KIATIS DB access at any point during 2007–2019",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Multiple independent witnesses (장우진, 국유단 발굴 팀장) testify to 15-year VPN-less direct DB access. The architectural deception — appearing web-based while actually using ActiveX for direct DB access — is the core Layer 1 security violation that the cover-up conceals. Record No. 5,240 (국유단 KIATIS report) triggered the meeting chain leading to 한지훈's false 갑질 complaint (Layer 5 bridge).";
```

## Claim

舊KIATIS는 약 15년간(2007~2022) 인터넷에서 VPN이나 보안장비 없이 데이터베이스(DB)에 직접 접속하는 구조로 운용되었다. 장우진 (사업실무자-1)은 2022년 7월 19일 한지훈과의 담화에서 "VPN 문제가 제일 클 겁니다"라고 증언하며, VPN 제한으로 新KIATIS가 정상 운용되지 않은 이유를 설명했다(기록 제10,303쪽). 국유단 발굴 팀장은 2022년 2월 8일 정상화 회의에서 "VPN을 우리가 사용하는 이유가 군사지도 사용하는 것으로 이야기를 들었습니다", "저희는 10개월 동안 바깥에서 생활을 하는데. VPN 때문에"라고 증언했다. 장우진은 "2007년도부터 DB 직접 접속을 했다는 것을 지속적으로 얘기했고 지금도 얘기했고"라고 확인했다. 이 회의는 국유단의 "'22년 1월 KIATIS 추진 평가 결과 보고"(2022.2.6., 기록 제5,240쪽) 공문의 후속 조치로 이루어졌으며, 이 회의 직후 한지훈에 대한 허위 갑질 신고가 접수되었다(Layer 5 bridge).

## Key Takeaways

- 舊KIATIS used direct DB access from the internet without VPN for ~15 years (2007–2022) — a fundamental security architecture violation concealed by the cover-up [진리성]
- 장우진 (사업실무자-1) testimony (Record No. 10,303): "VPN 문제가 제일 클 겁니다" — VPN absence was the primary operational problem [진리성]
- The architectural deception: web browser appearance (ActiveX) masking direct DB access without VPN — a "structural deception" (구조적 기만) per the book [진리성]
- 국유단 발굴 팀장 confirmed field personnel bypassed VPN entirely: "장애물을 돌아가는 것보다 제일 좋은 방법은 장애물을 없애는 방법" [진리성]
- The 2022-02-08 remediation meeting (triggered by Record No. 5,240 공문) is the direct causal predecessor to 한지훈's false 갑질 complaint — Layer 5 bridge [진리성][진실성]
- Record No. 10,303 falls in L7 range (5300–13495); Record No. 5,240 falls in L6 range (4600–5248) — cross-layer evidentiary provenance for a Layer 1 claim [진리성]
- 이지영 (공문결재자-1)·김수진 (행정담당자-1) appear in the meeting-to-complaint chain: 한지훈's report to 이지영 after the meeting triggered the 갑질 scenario [진실성]

## Supporting evidence

- **Record No. 10,303** — 장우진 (사업실무자-1)과 한지훈의 2022-07-19 담화: VPN 부재로 인한 新KIATIS 운용 실패 증언, 발굴팀 업무형태 설명
- **Record No. 5,240** — 국유단 "'22년 1월 KIATIS 추진 평가 결과 보고" (2022-02-06): 新KIATIS 정상화 회의의 촉발 공문
- **2022-02-08 정상화 회의** — 국전원·국유단 담당자·유지보수 업체 등 7~9명 참여, 한지훈 주관, 국전원 행정 정보화과 회의실, 14:30부터 2시간
- **발굴 팀장 증언** — "07년부터 쭉 발굴 병으로 시작해서", "VPN을 우리가 사용하는 이유가 군사지도 사용하는 것으로 이야기를 들었습니다", "저희는 10개월 동안 바깥에서 생활을 하는데. VPN 때문에"
- **장우진 증언** — "2007년도부터 DB 직접 접속을 했다는 것을 지속적으로 얘기했고", "장우진 상사 얘기에 따르면 왜 지금까지 VPN 없이 썼는데 왜 이제 와서 VPN을 쓰라고 하느냐 이것 때문에 옥신각신 많이 했다"

## Counter-hypothesis

1. **Field-only exception:** The VPN absence may have applied only to field operations (발굴 팀장 mobile access), while the core KIATIS system at DIDC/국전원 used VPN for DB access. Under this hypothesis the systemic vulnerability is limited to mobile use cases.
2. **Compensating controls:** Alternative security measures (firewall rules, IP whitelisting, network segmentation) may have compensated for VPN absence, making direct DB access operationally acceptable under the prevailing security posture.
3. **Post-2016 remediation:** After the 2016 DIDC hacking, VPN or equivalent controls may have been deployed for 舊KIATIS, meaning the 15-year window is overstated.

## Falsification condition

This claim is **CORROBORATED** unless:
1. DIDC or 국전원 network configuration records from 2007–2019 are produced showing VPN was deployed for 舊KIATIS DB access.
2. A security audit report documenting compensating controls for the VPN absence is found.
3. 장우진 or the 발굴 팀장 retract or materially qualify their testimony about direct DB access without VPN.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8. Multiple independent witnesses (장우진, 국유단 발굴 팀장) and an official 국유단 report converge on the same architectural fact. The 15-year duration and the structural deception (web appearance masking direct DB access) establish this as the core Layer 1 security violation. The causal link to the Layer 5 false 갑질 complaint via the 2022-02-08 meeting strengthens the cross-layer pattern.

## Open Questions

- Did the 2016 DIDC hacking investigation examine 舊KIATIS's VPN-less DB access as an attack vector?
- Was 방화벽 포트 개방 (the firewall port opening documented in [[firewall-policy-form-approved-by-wrong-officer]]) the mechanism by which direct DB access was facilitated?
- How many OTP cards were issued for 舊KIATIS? 장우진 mentions limited VPN capacity ("열몇 개 밖에 못 주고") — what was the actual count vs. the user base?

## Spot-check

- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` lines 62–73 — verbatim source
- Cross-reference with [[layer5-48hr-retaliation-causal-link]] for the meeting→complaint temporal chain

## Related

- [[old-kiatis-intranet-data-link-confirmed]] — companion L1 atom establishing the intranet linkage
- [[kiatis-server-laundering-dcia-to-didc1]] — server migration path (Layer 2 bridge)
- [[layer5-48hr-retaliation-causal-link]] — the 48-hour gap between this meeting and the false complaint
- [[firewall-policy-form-approved-by-wrong-officer]] — the firewall port opening mechanism
- [[didc-sop-firewall-vpn-trail-mandatory]] — 제12호 제37조 VPN paper trail requirement
- [[../layers/layer-1|Layer 1]] — DIDC hacking cover-up origin
