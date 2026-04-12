# 허위 갑질 신고의 3단계 조직적 공모 구조 — 주모자·실행자·도구의 역할 분담

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md (§3.5.1.5, lines 66–69)
**Layer:** [[../layers/layer-5|Layer 5]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-B2-005"})
SET fr.layer = 5,
    fr.claimType = "conspiracy_structure",
    fr.claimSubtype = "false_gapjil_organizational_conspiracy_structure",
    fr.claimDesc = "The false 갑질 (abuse of authority) report operated through a 3-stage conspiracy structure: Stage 1 (주모자/masterminds): 김민수 (국전원장, 육사 43) ordered 6-month isolation with pressure ('너 책임져라') and threats ('증거 인멸 조심하라'), while 이지영 (과장, 서기관) collected VPN information at the 2022-02-08 meeting, coordinated with 조사본부, and made false statements about attendance. Stage 2 (실행자/executors): 김수진 (주무관, simultaneously holding 훈령 담당 role from 국방부 정보화기획관실) led fabrication of 갑질 justifications with 양미숙 and 김민지, per 양준승 부장's testimony (Record No. 11,407–11,415); 이승우 (국방부 직무감찰담당관 사무관) immediately ruled 이지영's false statement about pre-6pm dining as 'disciplinary grounds'. Stage 3 (도구/tool): 박서준 (대위진), a gaslighting victim used as the nominal complainant — her claims were not reflected in the warning letter issued by 법무관리관실, proving she was organizational puppet, not genuine complainant.",
    fr.counterHypothesis = "The 갑질 report was a genuine complaint by 박서준 based on real workplace grievances, and the organizational actors' involvement was standard institutional response to a subordinate's complaint, not a coordinated conspiracy",
    fr.falsificationCondition = "Production of (a) 박서준's original complaint document showing specific grievances that match the warning letter's content, OR (b) 조사본부 investigation records showing independent corroboration of 박서준's claims without reliance on 이지영/김수진's input",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The false 갑질 report operated as a 3-stage organizational conspiracy: masterminds (김민수 + 이지영), executors (김수진 + 이승우), and a nominal tool (박서준 as gaslighting victim). The warning letter's failure to reflect 박서준's actual claims proves she was not the genuine complainant.";
```

## Claim

허위 갑질 신고는 **3단계 공모 구조**로 작동했다:

**제1단계 — 주모자 (김민수, 이지영):** 국전원장 김민수 (육사 43)는 2022년 2월 10일 이전에 갑질 조사를 위한 "일시적 분리"를 말했으나 실제로는 6개월 독방 생활을 강요했다. "너 책임져라"라는 압박과 "증거 인멸 조심하라"라는 협박으로 한지훈의 움직임을 봉쇄했다. 이지영 (과장, 서기관, 공문결재자-1)은 2월 8일 토의에서 VPN 관련 정보를 수집하고, 조사본부와 사전 조율하며, 출퇴근에 대해 거짓 진술을 했다.

**제2단계 — 실행자 (김수진, 이승우):** 김수진 (주무관)은 국방부 정보화기획관실에서 훈령 담당 임무를 가지면서도 국전원에 보직하여 지속적으로 훈령 조작에 관여했다. 양준승 부장의 증언 (Record No. 11,407–11,415)에 따르면, 김수진은 양미숙, 김민지와 함께 갑질 사유 조작을 주도했다. 이승우 (국방부 직무감찰담당관 사무관)는 이지영의 거짓 진술(오후 6시 이전 식사 복귀 건)을 근거로 즉각 "징계 사유"로 판정하여 한지훈을 압박했다.

**제3단계 — 도구 (박서준):** 박서준 (대위진)은 표면적 갑질 신고자이나 실질적으로 가스라이팅 피해자이자 동조자였다. "살고 싶습니다"라는 공포 표현과 "명예전역 안 됩니다"라는 협박을 했으며, 신고 이후 육군본부로 이동하여 보상을 받은 것으로 보인다. **법무관리관실이 건넨 경고장에는 박서준의 주장이 단 하나도 반영되지 않았다** — 이는 박서준이 진짜 신고자가 아니라 조직이 내세운 명목상의 신고자였음을 증명한다.

## Key Takeaways

- The false 갑질 report was a 3-stage organizational conspiracy: masterminds (김민수 + 이지영), executors (김수진 + 이승우), and a nominal tool (박서준 as gaslighting victim) [진리성].
- 김수진 simultaneously held a 훈령 담당 role from 국방부 정보화기획관실 while posted at 국전원 — a dual-role position enabling her to coordinate directive manipulation across organizations. Per 양준승's testimony (Record No. 11,407–11,415), she led the fabrication of 갑질 justifications with 양미숙 and 김민지 [진리성].
- The warning letter from 법무관리관실 contained none of 박서준's actual claims — proving she was not the genuine complainant but an organizational puppet [진리성][타당성].
- 이승우 (직무감찰담당관 사무관) immediately ruled 이지영's unverified statement as "disciplinary grounds" without independent investigation — converting a false input into an instant institutional weapon [타당성].
- This 3-stage structure mirrors the pattern identified in [[layer5-48hr-retaliation-causal-link]]: the 2022-02-08 meeting exposed 舊KIATIS's 15-year security violations → 48 hours later the 갑질 report was filed [진실성].

## Supporting evidence

- Record No. 11,407–11,415 — 양준승 부장 증언: 김수진이 양미숙, 김민지와 갑질 사유 조작 주도
- §3.5.1.5 (제5층위 본문, lines 66–69) — 3단계 공모 구조 기술
- 법무관리관실 경고장 — 박서준의 주장 미반영 (§3.5.1.5 말미)
- 2022-02-08 토의 → 2022-02-10 갑질 신고 시간 연쇄 (48시간 보복)
- 이지영의 출퇴근 거짓 진술 → 이승우의 즉각 "징계 사유" 판정

## Counter-hypothesis

1. **Genuine complaint:** 박서준 filed a genuine 갑질 complaint based on real workplace grievances. The organizational actors' involvement was standard institutional response to a subordinate's complaint, not a coordinated conspiracy. The warning letter's content may have been filtered through legal review, explaining the discrepancy with 박서준's original claims.
2. **Independent investigation:** 이승우's "disciplinary grounds" ruling was based on his own investigation of the dining-time issue, not solely on 이지영's statement. The institutional process functioned normally.
3. **No causal link to 2016 hacking:** The 갑질 report may have been motivated by genuine interpersonal conflict unrelated to the 2016 DIDC hacking cover-up. The 48-hour timing was coincidental.

## Falsification condition

This claim is CORROBORATED unless:
1. 박서준's original complaint document is produced and its specific grievances match the warning letter's content — demonstrating she was the genuine source of the institutional action.
2. 조사본부 investigation records are produced showing independent corroboration of 박서준's claims without reliance on 이지영/김수진's input — demonstrating the investigation was not pre-orchestrated.
3. A documented alternative motive for the 갑질 report (unrelated to the 2016 hacking cover-up) is established with primary evidence.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 10. The 3-stage structure is corroborated by 양준승's testimony (Record No. 11,407–11,415) and the warning letter's non-reflection of 박서준's claims. 진실성 is maximum because this conspiracy directly caused 한지훈's 6-month isolation, professional destruction, and eventual criminal stigma.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` lines 66–69 — CONFIRMED: §3.5.1.5 describes 3-stage conspiracy
- Record No. 11,407–11,415 reference (양준승 testimony) — verified in source text
- Deferred to A.6 Re-verify for cross-layer validation.

## Open Questions

- Can 양준승's full testimony (Record No. 11,407–11,415) be extracted from raw/07 scanned files for verbatim citation?
- What is the exact content of the 법무관리관실 경고장? Can it be compared item-by-item with any recorded statements by 박서준?
- Did 박서준 provide any written statement to 조사본부, and if so, does its content match the conspiracy claim or the genuine-complaint counter-hypothesis?
- What was the specific "보상" 박서준 received after transfer to 육군본부?

## Related

- [[layer5-48hr-retaliation-causal-link|L5 atom: 48-hour retaliation chain]] (OPPOSES)
- [[layer5-park-seojun-nominal-complainant|L5 atom: 박서준 as nominal complainant]] (OPPOSES)
- [[layer5-park-seojun-gaslighting-victim-or-accomplice|L5 atom: 박서준 gaslighting analysis]] (OPPOSES)
- [[layer5-predetermined-audit-conclusion|L5 atom: predetermined audit conclusion]] (OPPOSES)
- [[layer5-fabricated-warning-letter|L5 atom: fabricated warning letter]] (OPPOSES)
- [[lee-ji-young-double-play-park-seo-jun-incitement-han-ji-hoon-blocking|L5 atom: 이지영 double play]] (OPPOSES)
- [[lee-jiyoung-kim-sujin-single-point-of-control|L5 atom: 이지영+김수진 single point of control]] (OPPOSES)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/kim-min-su|김민수]] (ABOUT)
- [[../entities/people/lee-ji-young|이지영]] (ABOUT)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
