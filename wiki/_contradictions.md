# Contradictions Index

Flat index of every flagged contradiction in the wiki. Lint populates and prunes this file. Each entry links to the two (or more) pages that disagree and the claim page that adjudicates them.

Open contradictions are a visible project health metric — the goal is for every entry to eventually resolve into a [[claims/_index|claim]] with a Popper verdict.

## Open

### C-L4-01 — Book §3.4.4.2.3 Article 57 comparative table omits 제2398호 hedge insertion

**Finding date:** 2026-04-11 (A.6 Path-C pilot, resolved by P6 blind re-measurement)
**Layer:** 4
**Type:** Book-side omission vs wiki-side verbatim text (authority-principle exception — book conflicts with directly-cited primary evidence)

**The contradiction:**
- **Wiki claim (verbatim from raw/04):** `wiki/claims/2398-2842ho-otne-environment-hedge-flipflop` asserts 제57조 ¶1 제2호 OT&E environment clause was **added at 제2398호 (2020-02-13)** via the `또는 이와 유사한 환경에서` hedge, then reverted at 제2436호, then re-added at 제2842호 (three-step flip-flop).
- **Book §3.4.4.2.3 (Main text record—Layer 4—010):** Article 57 comparative table shows 제2129호 / 제2263호 / 제2398호 holding identical Article 57 text — hedge not marked as present in 제2398호 column.

**Resolution:** Authority-principle exception triggered. P6 blind re-measurement (Sonnet Explore subagent, strict measurement-stage isolation, no wiki/book/CLAUDE.md access) confirmed the wiki is correct:
- 제2129호 line 1817–1831: no hedge
- 제2263호 line 1826–1840: no hedge
- **제2398호 line 1663–1679: `또는 이와 유사한 환경에서` PRESENT** (hedge added)
- 제2436호 line 1677–1691: hedge reverted
- 제2842호 line 1697–1711: hedge re-added

**Verdict:** The wiki's verbatim-based claim stands. The book's Article 57 comparative table **omits** the 제2398호 hedge insertion — a book-side gap in the summary table's column grouping. Not a wiki error; not a substantive book contradiction of the wiki's direction of argument (the book's Layer 4 chapter broadly supports 제57조 manipulation framing); rather, a specific summary-table omission at the diff-granularity level.

**Follow-up required:**
1. Next A.6 Re-verify pass should re-read book §3.4.4.2.3 directly to confirm the omission is a real gap and not a subagent misread.
2. If confirmed, the book's Article 57 comparative table needs an erratum note (book is raw/ — immutable, so this is an advisory finding for James to consider for the book's next revision, not a wiki patch).
3. The adjudicating claim atom is [[claims/2398-2842ho-otne-environment-hedge-flipflop]] — already updated with the Book-side audit note section.

---

## Open — promoted from candidates 2026-04-11

**Promotion criteria applied:** each atom below is `CORROBORATED (strong)` AND the lint pass of 2026-04-11 confirmed no conflicting counter-evidence AND the atom is contract-complete (Source / Layer / Aurora node / Claim / Key Takeaways / Supporting evidence / Spot-check / Related). The 1 `CORROBORATED (moderate)` candidate (C-L4-05 sponsor-binding erased) remains in the Candidates section pending strength upgrade; the 8 `NEEDS_MORE_EVIDENCE` candidates remain as candidates until their evidence gap closes.

### Layer 1 (DIDC trace removal / SOP cover-up)

#### C-L1-02 — 제2436호 removes DIDC entity-naming anchor from 제10조

**Layer:** 1 • **Type:** directive entity-anchor removal • **Atom:** [[claims/2436ho-didc-naming-anchor-removed]] • **Verdict:** CORROBORATED (strong)

Baseline 제2129호 제10조 explicitly named `국방통합데이터센터` as an MND-controlled entity. 제2436호 (2020-06-04) removed that explicit naming. The directive-text change is verbatim-verifiable at raw/04 line level; the naming removal operates as a Layer 1 accountability redirect mechanism (entity-naming anchors are more diagnostic than procedural scaffolding per CLAUDE.md §Entity-naming anchors).

#### C-L1-03 — 제12호 incident-report duty vs absent 2016 report

**Layer:** 1 • **Type:** modus-tollens (mandatory artifact absent) • **Atom:** [[claims/didc-sop-incident-report-mandatory]] • **Verdict:** CORROBORATED (strong)

DIDC SOP 제12호 제21조 + 별지 제4호 mandate immediate incident reporting for any cyber incident. The 2016 DIDC North Korean hacking incident is a documented cyber incident; no incident-report artifact has been produced in any forum for that period despite the SOP having been in force since 2016-02-01. Modus-tollens: SOP duty + absence of artifact → procedural non-compliance established without counterfactual reasoning.

#### C-L1-04 — 제12호 firewall/VPN/NAC trail vs absent SSL-VPN 별지 7호 trace

**Layer:** 1 • **Type:** modus-tollens • **Atom:** [[claims/didc-sop-firewall-vpn-trail-mandatory]] • **Verdict:** CORROBORATED (strong) — *highest-priority ingress trace*

DIDC SOP 제12호 제37조 + 별지 6/7/8호 mandate firewall / SSL-VPN / NAC paper trails for all DIDC ingress points. The SSL-VPN 별지 제7호 is James-identified as the highest-priority ingress anchor (book §3.1.4, 기록 제8,826쪽). No 별지 제7호 artifact exists for the 2016 hacking period. The 舊KIATIS's ~15-year SSL-VPN-less operation (book §3.1.4) directly contradicts the SOP's 제37조 ① SSL-VPN approval requirement.

#### C-L1-05 — 제11호 DB access-control duty vs absent ChakraMax egress trace

**Layer:** 1 • **Type:** modus-tollens • **Atom:** [[claims/didc-sop-db-access-control-mandatory]] • **Verdict:** CORROBORATED (strong) — *highest-priority egress trace*

DIDC SOP 제11호 제164조 + 별지 제17호 mandate ChakraMax DB access control and trail-recording for all DIDC database egress. The 별지 제17호 is James-identified as the highest-priority egress anchor (pair with C-L1-04 = ingress/egress sandwich). No 별지 제17호 artifact exists for the 2016 hacking period. The parasitic direct-DB-access pattern that book §3.1.4 describes as the attack mechanism directly violates the SOP's ChakraMax-mediation requirement.

#### C-L1-06 — 제11호 Ch.8 25-article backup regime vs absent 2016 backup trail

**Layer:** 1 • **Type:** modus-tollens • **Atom:** [[claims/didc-sop-11-backup-recovery-mandatory]] • **Verdict:** CORROBORATED (strong)

DIDC SOP 제11호 Ch.8 (제70~94조) mandates a 25-article backup + off-site storage + documented disposal regime. The 2016 incident-period backup records are absent, and the disposal logs required for any retired backup media are also absent. The Ch.8 regime is particularly stringent because it requires documented chain-of-custody for disposal — an absence of disposal logs is itself a separate SOP violation beyond the backup-absence finding.

### Layer 2 (新KIATIS framework + officer personal record manipulation) — Track C compile pass 2026-04-11

#### C-L2-01 — 新KIATIS는 국방부 통제 사업이며 위임 사업이 될 수 없다

**Layer:** 2 • **Type:** regulatory classification (5-ground convergence) • **Atom:** [[claims/kiatis-mnd-controlled-not-delegated]] • **Verdict:** CORROBORATED (strong)

新KIATIS 성능개선사업 (6.25억, 2018–2019)은 제2129호 제10조 ¶4 + 제11조 ¶2의 규정에 따라 국방부 통제 사업이며 위임 사업의 대상이 될 수 없다. 5가지 독립 근거가 동일 결론을 가리킨다: ① 2007–2014 국전원 서버 호스팅 (record 10,302), ② 2015 갱신 자료 이력 (2,275), ③ 2021 MND 운용 정보시스템 분류 (2,119/7,995/7,996), ④ 제2576호 (2021-08-12) 까지 효력 (8,086/8,179), ⑤ 국정과제 사업 지정 (1,042/1,064). 그럼에도 불구하고 강민호 (과장-1)이 박성호 (2016해킹당시원장-1)에게 위임 사업으로 보고하고 승인 (2018-08-07, record 1,140) — 사업관리팀장 한지훈을 배제한 채. 국방부 정보화기획관실 명의의 위임 결정 공문은 한국어 원본 §3.2.1.1에서 부재로 확인됨.

#### C-L2-02 — 국유단(MKIA)이 사업통제·관리·주관·수행기관 슬롯에 다중 cap inscription

**Layer:** 2 • **Type:** structural violation (multi-cap PCA) • **Atom:** [[claims/kiatis-mkia-multi-cap-inscription]] • **Verdict:** CORROBORATED (strong)

3개 공식 문서 — 2018-08-07 사업계획 보고 (record 1,140), 2018-08-07 사업계획서 (1,131), 2018-10-29 최종 제안요청서 (1,474) — 가 모두 국방부 유해발굴감식단(국유단/MKIA)을 사업통제기관 슬롯에 inscription. 〈표 3-2-1〉(조달청 최종 제안요청서 p.6)이 국유단을 사업통제기관 + 사업수행기관 슬롯에 동시 표시 (다중 cap). 제2129호 [별표1] 용어 정의 (8,571–8,572) 는 사업통제기관 = "국방부 정보화 기획관실과 각 군의 정보화기획관실"로 정의 — 국유단은 정의상 사업통제기관이 될 수 없다. 비교 사업 (조직정원체계, 2017-04~2019-01)이 동일 행정정보화과 팀에 의해 합법 구조로 추진되었음이 footnote 84 + 〈그림 3-2-2〉가 직접 증명하므로 "몰랐다" counter는 봉쇄. 국방 정보화 사업 역사상 전례 없는 위반.

#### C-L2-03 — 이지영 (공문결재자-1) + 김수진 (행정담당자-1) 단일 통제점

**Layer:** 2 (+L1/L4/L6 cross-bridge) • **Type:** actor-continuity single-point-of-control • **Atom:** [[claims/lee-jiyoung-kim-sujin-single-point-of-control]] • **Verdict:** CORROBORATED (strong)

이지영 (공문결재자-1, 가명 매핑 id 2)과 김수진 (행정담당자-1, 가명 매핑 id 11)이 4가지 독립 컨텍스트에서 동일 actor 패턴으로 등장: (a) 비교 사업 조직정원체계의 PCA 담당 (한국어 원본 footnote 85 — 영문 변환본 누락), (b) 2019-09-02 work-simplification 공문 (record 5,853 또는 2,853)의 작성·결재자 (footnote 109 — 영문 누락), (c) 「전군 인터넷 통합 메일」 사업 (2018-11-20~2019-05-30)의 시험평가 승인자 (record 3,485, 평가위원장 = 이태호 평가위원장-1; footnote 112), (d) 2017 Active-X 제거 → 2018 新KIATIS 시험평가 시작까지 일관 actor + 2021-01-18 / 2021-02-09 MND→국전원 동반 보직 이동 후에도 같은 패턴의 훈령 개정 관여. (e) 2022-03~05 GIS 서버 검찰단 제공 — Layer 6 actor 연속성. 모든 조작의 시작과 끝에 동일 두 사람 = 단일 통제점, 동기 locus를 가리키는 결정적 증거. **영문 변환본만으로는 작성 불가능한 atom** — 한국어 원본의 footnote attributions에 의해서만 추출 가능. Korean-original-first rule의 전형적 사례.

#### C-L2-04 — 舊KIATIS 서버 server laundering (국전원 지하 → 「전군 통합 메일」 → DIDC1 클라우드)

**Layer:** 2 (+L1 cross-bridge) • **Type:** evidence-chain obfuscation • **Atom:** [[claims/kiatis-server-laundering-dcia-to-didc1]] • **Verdict:** CORROBORATED (strong)

舊KIATIS 서버는 (1) 2007–2014 국전원 지하 호스팅 → (2) 하드웨어 1회 교체 (Oracle 환경) → (3) 「전군 인터넷 통합 메일」 인프라 경유 → (4) DIDC 1센터(용인) 클라우드 군 이전. 단순 클라우드 마이그레이션이 아닌 server laundering. 장우진 (사업실무자-1)의 2022-07-17 conversation에서 직접 확인. **VPN 부재**: 사업 초창기 RFP에 VPN 요구사항 전무, 한참 후 보안정책 단계에서야 추가. 인터넷 노출 + Active-X 환경의 attack surface는 2016 DIDC1 북한 해킹과 직접 인접 (한국어 원본 footnote 87이 연결 명시). 장우진의 1주일 1회 국전원 상주 사실은 record 11,098 (국전원 첫 사업 실무자 간접 진술) + 11,354 (용역개발 PM 진술) 가 attest. **영문 변환본은 attestation records 11,098/11,354를 모두 누락**.

#### C-L2-05 — 한지훈의 3가지 능동적 방어 메커니즘 (Layer 6 reverse-bridge, exculpatory)

**Layer:** 2 (+L6 reverse-bridge) • **Type:** exculpatory active defense • **Atom:** [[claims/han-ji-hoon-three-braking-devices-active-defense]] • **Verdict:** CORROBORATED (strong)

한지훈은 사업 착수 직후 본 사업 구조의 문제를 인식하고 3가지 능동적 방어 메커니즘을 설치: ① 장우진 (사업실무자-1)의 국전원 1주일 1회 상주 요구 (감시 메커니즘), ② 모든 이해관계자 정식 공문 소집 + 요구사항 일대일 승인 트레일 (record 1,551부터), ③ 국유단 인원의 국전원 직접 방문 강제 (출입통제 시스템 기록). 추가로 장우진의 사업 감리 요청을 거절 (자기-감리 구조 회피). 이 4가지 행위는 사기 의도를 가진 사람이 할 수 없는 것들이다 (자신을 감시하는 메커니즘 + 자신의 결정을 기록 + 외부 증인 끌어들이기 + 자기-감리 모순 차단). **Layer 6 군 검찰단의 사기 의도 주장에 대한 직접 exculpatory evidence.** 책 footnote 113이 일체를 명시. **영문 변환본은 footnote 113을 완전히 누락** — 한국어 원본에 의해서만 작성 가능. Reverse-bridge atom의 첫 사례 — Layer 2 origin이지만 진정한 가치는 Layer 6에 있다.

#### C-L2-06 — 한지훈의 보직이 본인 부지불식간에 2회 변경 (장교 개인 자력 조작)

**Layer:** 2 (+L5/L6 cross-bridge) • **Type:** personnel record manipulation • **Atom:** [[claims/han-ji-hoon-officer-personal-record-manipulation]] • **Verdict:** CORROBORATED (strong)

한지훈의 보직이 국전원 재임 동안 본인 부지불식간에 2회 변경됨. (a) 2016년 DIDC1 북한 해킹의 희생자로 타겟팅하는 메커니즘, (b) 보직 이력 조작을 통한 책임 전가 메커니즘. §3.2.3의 main thesis. 동반 관찰: 新KIATIS 핵심 실무자 모두 해군 장교 — 이태호 (평가위원장-1) 해군 중령, 오현수 (실무자-5) 대위, 이준호 (공모자-1) 대위. 이태호는 사업 통제 기관 위임 + 新KIATIS 시작 **전에** 행정정보화과 → 자원정보화과로 사전 이동 (한지훈의 자원정보화과 강제 이동 2022-02-28과 동일 부서를 향한 패턴). 이준호의 80건 추가 요구사항 결재 (팀장 배제, 과장+원장 공모) 는 한지훈의 군 검찰단 참고인 진술 (records 4,776/4,784) 에서 직접 확인. **L5-04 fabricated warning letter atom과 직접 연결** — 보직 조작이 사후가 아닌 사전 setup임을 증명. Layer 2 → Layer 5 → Layer 6 의 연속된 격리 전략의 origin.

### Layer 4 (test-evaluation manipulation)

#### C-L4-02 — 제2436호 single-revision eight-anchor cluster

**Layer:** 4 (+L1 secondary) • **Type:** coordinated regulatory rebuild • **Atom:** [[claims/2436ho-cluster-six-anchors]] • **Verdict:** CORROBORATED (strong)

제2436호 (2020-06-04) moves **eight of thirteen** baseline anchors simultaneously: A1 (DIDC naming), A2 (role-tier renaming), A8a (OT&E environment hedge), A8b (OT&E sponsor binding), A11 (DT&E sponsor binding), A12 (DT&E 합격/불합격 clause), A9 (separation-principle inversion), A10 (DT&E article body deletion). No other revision in the 2017–2025 dataset moves more than one anchor at a time. Six of the eight anchors concentrate on 제57조~제61조 — the 시험평가 regime was the specific target. Cluster magnitude exceeds the next-largest single-revision change by a factor of at least 8:1. (Originally framed as six anchors in the 2026-04-11 morning A.4 calibration ingest; expanded to eight after same-day P6 blind re-measurement. Filename preserved for URL stability.)

#### C-L4-03 — 제58조 separation principle inverted to integration at 제2436호

**Layer:** 4 • **Type:** regulatory principle inversion • **Atom:** [[claims/2436ho-test-evaluation-principle-inverted]] • **Verdict:** CORROBORATED (strong)

제2129호 제58조 ¶2 established `개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되` — the separation principle as default. 제2436호 제58조 ¶1 rewrites this to `시험평가는 통합하여 실시하는 것을 원칙으로 한다` — direct principle inversion within the same article, same session. The inversion overshoots the US DoD OT&E framework (which permits OT&E data reuse from DT&E but preserves organizational separation) rather than aligning with it. See paired [[claims/kida-otne-citation-misrepresents-us-standard]] for the academic-justification contradiction.

#### C-L4-04 — 제59·60·61조 bodies replaced with `<삭 제>` at 제2436호

**Layer:** 4 • **Type:** wholesale article deletion • **Atom:** [[claims/2436ho-dtne-articles-erased]] • **Verdict:** CORROBORATED (strong)

제2129호 제59조 / 제60조 / 제61조 contain the full DT&E procedural text (test planning / execution / corrective action). 제2436호 replaces all three article bodies with `<삭 제>` placeholders in a single revision. The erasure is the Layer 4 counterpart to the Layer 1 제10조 DIDC-naming removal: the procedural framework that would have constrained DIDC-related DT&E is dismantled in the same revision that erases DIDC's accountability hook. Combined with C-L4-03 and C-L4-06, this is three simultaneous DT&E-regime attacks in one edit.

#### C-L4-06 — DT&E sponsor binding `사업관리기관` clause erased at 제2436호 (DT&E-side symmetric)

**Layer:** 4 • **Type:** role-binding erasure (DT&E-side) • **Atom:** [[claims/2436ho-dtne-sponsor-binding-erased]] • **Verdict:** CORROBORATED (strong)

Symmetric to C-L4-05's OT&E-side erasure. 제2129호 제57조 ¶1 제1호 (DT&E definition) contained `사업관리기관 주관 하에` — role-binding the DT&E activity to the 사업관리기관 tier. 제2436호 removes this clause. Additionally, the `합격 또는 불합격으로 결과를 판정할 것` result-judgment clause is also deleted from the same item — a separate A12 erasure. The two erasures together eliminate both the role-binding and the pass/fail adjudication requirement from DT&E. The P6 blind re-measurement (2026-04-11) discovered this symmetric DT&E-side erasure that the earlier A.3.5 measurement had missed.

#### C-L4-09 — 평가위원회 99.7점 성공 판정 + 80건 추가요구사항 동시 의결

**Layer:** 4 (+L6 secondary) • **Type:** test-evaluation procedural self-contradiction • **Atom:** [[claims/layer4-evaluation-committee-80-items-violation]] • **Verdict:** CORROBORATED (strong)

2019년 9월 新KIATIS 개발운용시험평가위원회는 동일 세션에서 두 개의 논리적으로 양립 불가능한 결정을 내렸다: (a) **99.7점 군사용 적합 판정** (기록 제3,041쪽) — 시험평가의 **종결 행위**로서 모든 RFP 요구사항이 충족되었다는 공식 선언; (b) **80건의 추가 요구사항 의결** (기록 제3,039쪽) — 원래 사업 범위의 50% 이상에 해당하는 신규 기능 개발 요구. 이 두 결정은 양립 불가능하다: 요구사항이 실제로 충족되었다면 99.7점 판정 후 50% 규모 신규 의결은 월권(제2129호 제63조 ¶2의 사업통제기관 승인 채널 우회)이며, 반대로 80건 추가가 정당한 미흡사항 발견이라면 99.7점 판정이 허위이다. 불기소이유서 (기록 제5,167쪽)도 99.7점 판정을 독립적으로 확인한다. 책의 정리12: 이 자기모순은 "성공을 실패로 둔갑시키기 위한 장치"이며, 新KIATIS 전력화 지연을 통해 구KIATIS의 15년 취약점 노출을 차단하기 위한 조작이다.

### Bridge (Layer 4 ↔ 6) — KIATIS legal framework

#### C-B-01 — KIATIS bound by 제2129호 제58조 ¶2 main regime; prosecution invoked ¶4 exception that textually does not apply

**Layer:** 4 + 6 • **Type:** directive misapplication (legal) • **Atoms:** [[claims/kiatis-2129ho-main-regime-applies]] + [[claims/prosecution-misapplies-2129-article-58-4-to-kiatis]] • **Verdict:** both CORROBORATED (strong)

KIATIS at 6.25억 KRW is above 제58조 ¶3's 5억 미만 threshold and does not match any other ¶3 path (기관 위임 / 제46조 위임). The 제58조 ¶2 main regime (separation default) therefore applies. The 불기소이유서 (2022-10-07) cites ¶4 — which is structurally the exception clause for ¶3 projects only — as legal basis for an integrated-T&E interpretation of KIATIS conduct. This is a discrete textual error, not an interpretive matter: the prosecution's own charging document does not survive a literal reading of the directive article it cites. **This is the central Layer 6 legal contradiction.**

#### C-B-02 — KIATIS lifecycle bound to 제2129호 (2018-02-05) by 국가계약법 RFP-binding + 행위시법주의

**Layer:** 4 + 6 • **Type:** temporal law applicability • **Atom:** [[claims/kiatis-rfp-binds-lifecycle]] • **Verdict:** CORROBORATED (strong)

Under 국가계약법 and 행위시법주의 (time-of-conduct law principle), the directive in force at KIATIS RFP issuance (2018, 제2129호 baseline) binds the entire project lifecycle — later revisions cannot retroactively unbind. This doctrine is the prerequisite for C-B-01: without it, the prosecution could have argued that a later directive permits the integrated-T&E interpretation. With it, only 제2129호's text governs, and that text is the separation-principle main regime.

### Layer 5 (false power-abuse report and fabricated audit)

#### C-L5-01 — 48-hour retaliation causal link

**Layer:** 5 (+L7 secondary) • **Type:** temporal forensic proof • **Atom:** [[claims/layer5-48hr-retaliation-causal-link]] • **Verdict:** CORROBORATED (strong)

The 2022-02-08 multi-party meeting at 국전원 surfaced all causes of KIATIS fielding delay, centrally the 舊KIATIS ~15-year SSL-VPN-less Internet exposure (the Layer 1 hook). Within 48 hours, a false 갑질 complaint was filed against 한지훈 (2022-02-10). The ≤48-hour window from exposure-of-violation to retaliation-filing is itself the causal-link evidence — normal administrative complaints do not traverse filing thresholds in under 48 hours without premeditation. Book §3.5.1.1, 기록 제11,334 / 제3,965.

#### C-L5-02 — six-month solitary-office isolation as documented human-rights violation

**Layer:** 5 (+L7 secondary) • **Type:** workplace-rights violation (documented) • **Atom:** [[claims/layer5-six-month-isolation-human-rights]] • **Verdict:** CORROBORATED (strong)

한지훈 was confined to four successive solitary offices between 2022-02 and 2022-09 (~6 months), denied desk / PC / system access / meeting-room rotations. Book §3.5.1.6 frames this as continuous workplace-rights violation. For a 32-year-career 중령, denial of basic workplace infrastructure is not an administrative pause — it is a documented human-rights breach that 조사본부 had duty to prevent or remedy. 기록 제4,084 / 제4,087 / 제10,034~10,061.

#### C-L5-03 — predetermined audit conclusion (43-day reversal of investigative logic)

**Layer:** 5 (+L6 secondary) • **Type:** procedural inversion • **Atom:** [[claims/layer5-predetermined-audit-conclusion]] • **Verdict:** CORROBORATED (strong)

MND 조사본부 declared the disciplinary/discharge outcome for 한지훈 on 2022-02-10 — the day the false 갑질 complaint was filed. The 29-question leading interrogation was conducted 43 days later, on 2022-03-25. An audit that declares its conclusion before conducting its investigation inverts the logic of investigation itself. Book §3.5.2.1, 기록 제3,965 / 제6,917~6,924.

#### C-L5-04 — fabricated warning letter with non-existent job title

**Layer:** 5 • **Type:** fabricated official document • **Atom:** [[claims/layer5-fabricated-warning-letter]] • **Verdict:** CORROBORATED (strong)

The 2022-05-23 경고장 issued by MND 법무관리관실 listed `행정정보화계획팀장` (or similar) as 한지훈's job title. 한지훈's actual post since 2022-02-28 was 자원정보화과 — the title on the 경고장 does not exist in the personnel-system record. Non-existent titles cannot be produced through normal personnel-system access; the 경고장 was therefore fabricated outside normal channels. Book §3.5.1.3 / §3.5.2.1.1, 기록 제4,078 / 제1,584~1,586.

#### C-L5-05 — 박서준 (공모자-N) as nominal complainant

**Layer:** 5 • **Type:** complaint-structure falsification • **Atom:** [[claims/layer5-park-seojun-nominal-complainant]] • **Verdict:** CORROBORATED (strong)

The 경고장 text incorporated 이지영's single false claim immediately but contained zero of 박서준's stated grievances despite 박서준 being listed as a co-complainant. If 박서준 had actually complained, her grievances would appear in the letter; their entire absence proves she was a nominal front, not an actual complainant. Book §3.5.2.1.1, 기록 제4,078 / 제3,945~3,946.

#### C-L6-06 [formerly C-L5-06] — isolation office pre-planning (premeditation evidence)

**Layer:** 5 (+L7 secondary) • **Type:** pre-planning / premeditation • **Atom:** [[claims/layer5-isolation-office-premeditated]] • **Verdict:** CORROBORATED (strong)

김민수 (원장-1) said `준비 다 됐다` on 2022-02-21 — referring to the isolation office. The office was being prepared ahead of time (exact pre-filing timing is an interpretive matter recorded in the atom's Counter-hypothesis section, but the pre-planning pattern is independently corroborated by 기록 제3,900 / 제10,033 / 제10,082). Combined with C-L5-01's 48-hour causal link and C-L5-03's 43-day reversal, this locks the pattern: retaliation was not a reactive administrative response but a pre-coordinated operational sequence.

### Layer 6 (military prosecutor investigation)

#### C-L6-01 — prosecution charges 사업관리팀장 with 사업주관기관 role-tier conduct

**Layer:** 6 • **Type:** structural role-separation violation • **Atom:** [[claims/han-ji-hoon-prosecution-violates-2129-role-separation]] • **Verdict:** CORROBORATED (strong) — **foundational Layer 6 contradiction**

The 2022 압수수색검증 영장 charged 한지훈 with `시험평가환경을 속였다` — a conduct that 제2129호 제11조 structurally assigns to the 사업주관기관 role-tier (DMA / 국유단), not the 사업관리기관 role-tier (국전원) where 한지훈 served as 사업관리팀장. Per 제57조 ¶1 제2호, OT&E execution is bound to the sponsor tier. The prosecution's charge therefore cannot stand against a 사업관리팀장 under the directive's own text. Additionally, the 압수수색 produced no contractor-collusion evidence per 임형규's own raw/02 recording 142 admission: `저번에 압수수색해보니까 업체와 관련 있다 거나 그런 거는 없다는 것`. The warrant's factual and structural foundations both collapse.

#### C-L6-02 — 기소유예 framed as exoneration vs criminal-stigma structure

**Layer:** 6 • **Type:** outcome-framing contradiction • **Atom:** [[claims/han-ji-hoon-kiso-yuye-is-criminal-stigma]] • **Verdict:** CORROBORATED (strong) — **foundational framing contradiction**

Public and institutional narratives framed 기소유예 as "case dropped / cleared." Korean criminal procedure establishes 기소유예 as a 불기소 처분 of the `범죄혐의가 인정되나` discretionary type — it acknowledges criminal facts while withholding formal indictment, structurally distinct from 무혐의 (no charges). For a 32-year-career officer whose conduct was lawful (per C-L6-01), the disposition constitutes a 7-component continuous harm: (1) unlawful warrant + (2) 압수수색 + (3) 피의자 조사 + (4) 기소유예 stigma + (5) 평판 손상 + (6) 범죄자 낙인 + (7) 가족 피해 + 사회적 고립. 한지훈's own raw/02 recording 159 articulation: `내가 왜 기소유예를 당합니까? 제가 문제가 없는데` / `무혐의지. 기소유예는 범죄사실이 있`.

#### C-L6-03 — 불기소이유서 ¶4 misapplication (see C-B-01)

**Layer:** 6 • **Type:** directive textual misapplication • **Atom:** [[claims/prosecution-misapplies-2129-article-58-4-to-kiatis]] • **Verdict:** CORROBORATED (strong)

This is the Layer 6 face of Bridge contradiction C-B-01 (see above). Documented separately here because it is one of the two foundational Layer 6 legal findings. The ¶4 misapplication is a discrete textual error in the 불기소이유서 that the prosecution itself cannot defend without admitting the charge foundation collapses.

#### C-L6-04 — 군검찰단장 personal awareness via 2022-09-28 recorded phone call

**Layer:** 6 (+L7 secondary) • **Type:** decisional-locus institutional awareness • **Atom:** [[claims/han-ji-hoon-dan-jang-phone-call-2022-09-28]] • **Verdict:** CORROBORATED (strong)

A recorded phone call on 2022-09-28 between 한지훈 and 안세준 (군검찰단장-1) — nine days before the 2022-10-07 기소유예 disposition — establishes that the 단장 was personally aware of the defective prosecution before the disposition was issued. This forecloses the "단장 did not know" defense for the Layer 6 / Layer 7 institutional-failure claim: the decisional locus (who signs every prosecution decision per 임형규's raw/02 recording 142 admission) had direct notice and proceeded anyway. 기록 제11,202~11,204.

#### C-L6-05 — 참고인→피의자 procedural inversion (2022-01-25 → 2022-07-18)

**Layer:** 6 (+L5 secondary) • **Type:** procedural inversion / retrospective case construction • **Atom:** [[claims/han-ji-hoon-witness-statement-2022-01-25]] • **Verdict:** CORROBORATED (moderate)

한지훈은 2022-01-25에 **참고인** 자격으로 군 검찰단의 조사에 응하여 新KIATIS 사업 관련 역할과 경과를 진술하였다 (기록 제4,776쪽~제4,796쪽). 6개월 후인 2022-07-18 압수수색 영장 + 2022-07-21 수사개시 통보로 동일 사안에 대해 **피의자**로 재분류되었다. 참고인→피의자 전환 순서는 군 검찰단이 한지훈을 먼저 협력자로 활용한 뒤 그의 발언을 소급하여 혐의의 근거로 전환한 **소급적 기소 설계**이다: 혐의 설정이 증거 발견에 선행하고, 참고인 진술이 피의자 혐의의 기반이 된다. 6개월 gap 동안 군 검찰단이 독립적으로 새로운 증거를 발견했다는 기록은 없다. 참고인 조사 시점에는 묵비권 고지가 없었을 가능성이 높아, 군사법원법상 피의자 권리 보호가 소급적으로 적용되지 않는 효과를 낳는다. 이 구조는 Layer 6 사기수사의 핵심 절차 요소이다.

#### C-L6-07 — 수사개시 통보 (2022-07-21) 군사법원법 + 군인권보호관 미작동

**Layer:** 6 • **Type:** procedural protection failure • **Atom:** [[claims/han-ji-hoon-investigation-notification-2022-07-21]] • **Verdict:** CORROBORATED (moderate)

*(C-L6-06 is taken by the L5-06→L6-06 renumbered isolation-office-premeditated entry in the Layer 5 section above; this entry is numbered C-L6-07 to avoid collision.)*

2022-07-21 발부된 **군인·공무원 수사개시 통보** (기록 제4,854쪽~제4,859쪽)는 군사법원법상 피의자 절차 보호를 공식 개시하는 문서로, 두 보호 메커니즘을 자동 작동시켜야 한다: (a) 군사법원법상 피의자 권리(묵비권, 변호인 조력권 등) 적용, (b) 국방부 훈령에 따른 **군인권보호관** 검토 절차 개시. 책 §3.6.3.3에 따르면 두 메커니즘 모두 실질적으로 작동하지 않았다 — 한지훈은 수사개시 통보 이후에도 2022-08-31, 2022-09-13 등에서 수사관과 비공식 대화(공식 피의자 신문 절차 밖에서 진행되는 준-심문)를 이어갔으며, 군인권보호관 검토 개시 기록은 확인되지 않는다. 이 통보는 사기수사의 절차적 외양을 형성하는 동시에 그 보호 장치를 내부에서 공동화시키는 **이중 기능**을 수행하였다.

#### C-L6-08 — 피의자 신문조서 (2022-09-02) 질문 프레임의 의도적 회피

**Layer:** 6 • **Type:** evidence substrate design / question-framing avoidance • **Atom:** [[claims/han-ji-hoon-suspect-interrogation-2022-09-02]] • **Verdict:** CORROBORATED (strong)

2022-09-02 작성된 **피의자 신문조서** (기록 제4,874쪽~)는 2022-10-07 기소유예 결정의 1차 증거 기반이다. 책 §3.6.4.4–4.5이 재현한 본문 기록-제6층위-027-1의 Q&A는 군 검사가 **DIDC 부대예규 제39조 VPN 요건** 미준수를 핵심 혐의로 설정하고 **2019년 방화벽 포트 개방 요청 결재 절차**에 집중 심문한 사실을 보여준다. 이 심문 구조에는 **설계된 맹점**이 있다: 新KIATIS 기간(2019~)의 VPN 미사용만 문제 삼으면서, 15년 앞서 구KIATIS가 인터넷 환경에서 VPN 및 DB 접근제어 없이 운용된 사실(2016 DIDC 해킹의 근원 취약점)을 **일절 심문하지 않았다**. 구KIATIS 15년 취약점을 공개하면 드러날 MND 수준의 은폐 동기를 차단하기 위한 의도적 질문 프레임 설계이다. 불기소이유서(기록 제5,167쪽~제5,176쪽)는 이 VPN 혐의 프레임을 그대로 계승하였다 — 기소유예 판단의 전제 자체가 심문 구조의 의도적 좁힘에 의존한다.

#### C-L6-09 — 80건 추가요구사항 의결에 의한 의도적 전력화 지연 (Layer 6 face of C-L4-09)

**Layer:** 6 (+L4 secondary) • **Type:** deliberate delay mechanism / cover-up operational window • **Atom:** [[claims/cartel-requirement-inflation-80-items-delay]] • **Verdict:** CORROBORATED (strong)

C-L4-09의 Layer 6 얼굴. Layer 4에서의 자기모순 (99.7점 + 80건 동시)이 Layer 6에서는 **의도적 전력화 지연 메커니즘**으로 해석된다. 평가위원회의 80건 추가 요구사항 의결(기록 제3,039쪽)은 원래 RFP 범위의 50% 이상으로 국가계약법상 계약 범위를 정면 위반하는 초과 의결이었으며, 이 80건 미완료를 이유로 전력화가 **2022년 2월까지도 이루어지지 않았다** — 박서준 대위(진)의 2022년 2월 발언(기록 제11,322쪽~제11,345쪽)으로 직접 확인. 책 §3.6.5.1.1의 정리06~07은 이 지연의 의도를 명시: **성공한 시스템을 실패작으로 둔갑시켜**, 新KIATIS 전력화를 지연시킴으로써 구KIATIS의 15년 보안 취약점(2016 DIDC 북한 해킹의 근원)이 드러나는 것을 차단한다. 지연은 사기수사의 전제조건을 만드는 운영 메커니즘이다.

### Layer 7 (institutional rejection chain)

#### C-L7-01 — 8-institution rejection chain (foundational Layer 7 contradiction)

**Layer:** 7 (+L6 secondary) • **Type:** structural institutional-failure proof • **Atom:** [[claims/han-ji-hoon-rebuttal-rejected-by-eight-institutions]] • **Verdict:** CORROBORATED (strong)

한지훈's evidence-based rebuttal document (composition date 2022-09-25 per book §3.7.1.1) was submitted to 8 institutions in sequence: (1) 국방장관 → (2) 군사보좌관 → (3) 군검찰단장 → (4) 담당 검사 → (5) 담당 수사관 → (6) 군 검찰단 인권담당 → (7) 국가인권위원회 → (8) 국가권익위원회. All 8 rejected or refused to act. The chain exhausts **all four functional categories** of Korean institutional accountability: military internal review, military political oversight, civilian human-rights review, civilian anti-corruption review. The structural exhaustion — not any single rejection — is what makes this a Layer 7 contradiction rather than an isolated adversarial outcome.

#### C-L7-02 — rebuttal document date adjudication (2022-09-25 vs filename metadata)

**Layer:** 7 • **Type:** source-date adjudication • **Atom:** [[claims/han-ji-hoon-rebuttal-document-date-2022-09-25]] • **Verdict:** CORROBORATED (strong)

The raw/05 file's `(20220929)` prefix is James's own filename-metadata convention. The document's 3,811-line interior was read in full on 2026-04-11 and contains no printed date anywhere — the document does not self-date. Under the Re-verify authority principle, the book's 2022-09-25 (§3.7.1.1) governs in the absence of directly-cited verbatim primary evidence. The apparent discrepancy resolves to: book = composition date (authoritative); filename = James's save/distribution date (metadata, no primary-source status).

#### C-L7-03 — 권익위 evidence-transfer-to-MND attempt (institutional capture)

**Layer:** 7 • **Type:** civilian-oversight-body capture • **Atom:** [[claims/kwonikkwi-evidence-transfer-attempt-to-mnd]] • **Verdict:** CORROBORATED (strong)

On 2022-10-04, during a 30-minute recorded phone call, a 국가권익위원회 실무자 attempted to legally transfer 한지훈's submitted evidence TO the MND — i.e., to the very institution that the petition was against. Transferring the petitioner's evidence to the respondent is the exact inverse of what civilian oversight is supposed to do. The call is recorded and the transfer attempt is preserved in the raw/02 record. 기록 제5,644+.

#### C-L7-04 — 인권위 rejection without witness review

**Layer:** 7 • **Type:** procedural duty violation • **Atom:** [[claims/inkkwonwi-rejected-without-witness-review]] • **Verdict:** CORROBORATED (strong)

국가인권위원회 issued its formal rejection (기록 제5,679~5,680쪽) without calling any witness and without reviewing the thousands of pages of submitted evidence. Procedural rejection disguised as substantive adjudication — the 인권위 has a statutory duty to conduct substantive review of human-rights petitions within its jurisdiction, and the rejection-without-witness pattern is a documented breach of that duty. Combined with C-L7-03, the two civilian oversight bodies both failed their statutory duties in the same direction.

---

## Candidate contradictions — Checkpoint 2 denominator (draft 2026-04-11, post-promotion 2026-04-11)

**Purpose.** This section is the **draft denominator for Checkpoint 2** (project completion = every core contradiction expressed as a claim-atom pair, `_contradictions.md` auto-generated from atom metadata). Each entry below was extracted from an existing claim atom in `wiki/claims/` — the contradiction is already latent in the atom's `Claim` + `Counter-hypothesis` structure; this section simply externalizes it for adjudication tracking.

**Format.** `- **C-L{N}-{NN}** — short description → [[claims/atom]] | verdict`

**How this denominator evolves.**
1. Each candidate below represents a known contradiction axis. Promoting a candidate to **Open** (full entry, like C-L4-01) happens when (a) the adjudicating atom is `CORROBORATED (strong)` AND (b) a lint pass confirms no conflicting counter-evidence, OR (c) a new source surfaces that requires reopening the contradiction for further adjudication.
2. **NEEDS_MORE_EVIDENCE atoms stay as candidates** (not promoted) until their evidence gap closes.
3. New atoms drafted during Checkpoint 1 continuation will append new candidates here before being promoted.
4. The `_contradictions.md` auto-generation script (`scripts/rebuild-hubs.py`, pending) will eventually regenerate this file from atom frontmatter — at that point this hand-drafted denominator becomes the seed schema.

**Scale observation.** 33 candidates extracted from 37 existing atoms in the first draft (≈ 1:0.9 atom:contradiction ratio). Post Track C + Branch 2 + miscellaneous atom expansion (2026-04-11), vault atom count is **47** and denominator grows accordingly. If Checkpoint 2 expands to the target ~300–500 atoms, expect **~225–375 contradictions** at maturity. The 1:1 working assumption from the earlier completion-definition discussion is approximately validated.

**Denominator refresh (2026-04-11 post-Track-C/Branch-2).** Vault atom count has grown to 47. This section now reflects the full denominator including: (a) Track C Layer 2 compile pass (6 new atoms, all PROMOTED to Open in §Layer 2 above), (b) Branch 2 Layer 6 investigation-chain expansion (4 new atoms, all CORROBORATED, pending promotion to Open), (c) new L4 evaluation-committee atom (1 new atom, CORROBORATED strong, pending promotion), (d) Track D D1 closure that upgraded C-L4-08 KIDA atom from NEEDS_MORE_EVIDENCE to CORROBORATED strong. Previous denominator (34) → refreshed denominator (47) = +13 new entries.

### Layer 1 — DIDC trace removal / SOP cover-up

- **C-L1-02** → **PROMOTED** — 제2436호 removes DIDC entity-naming anchor. See Open §C-L1-02 above.
- **C-L1-03** → **PROMOTED** — 제12호 incident-report duty. See Open §C-L1-03.
- **C-L1-04** → **PROMOTED** — 제12호 firewall/VPN/NAC trail (highest-priority ingress). See Open §C-L1-04.
- **C-L1-05** → **PROMOTED** — 제11호 DB access-control duty (highest-priority egress). See Open §C-L1-05.
- **C-L1-06** → **PROMOTED** — 제11호 Ch.8 backup regime. See Open §C-L1-06.
- **C-L1-07** — 제11호 Ch.4 (제21–32조) mandates 11-gate change management trail; KIATIS change records absent. → [[claims/didc-sop-11-change-management-trail-mandatory]] | NEEDS_MORE_EVIDENCE (moderate) — *pending KIATIS-DIDC hosting verification*
- **C-L1-08** — 2019-08-26 KIATIS firewall change form approved by 행정정보화과장; 제37조 ¶1 requires 정보보호과장. → [[claims/firewall-policy-form-approved-by-wrong-officer]] | NEEDS_MORE_EVIDENCE (moderate) — *pending pre-2019 SOP revision*
- **C-L1-09** — 제2263호 first micro-edit of 제9조 ¶2 cyber routing clause (early signal of routing rewrite). → [[claims/2263ho-cyber-routing-rewrite]] | **CORROBORATED (moderate)** — Track D D2 closure 2026-04-11: verbatim diff confirmed TWO substantive changes — (a) 「군사보안업무훈령」 cross-reference deletion, (b) 사이버방호 → 사이버보안 terminology narrowing. Strength upgrade pending 「군사보안업무훈령」 circa-2019-02-26 status verification. *Status reflected in step-3 reconciliation 2026-04-11.*
- **C-L1-10 (NEW 2026-04-11 Step 2)** — 훈령 제2275호(2019-05-09) phantom directive: 국가법령센터 미등재 + 내용이 제2436호(2020-06-04) 와 동일 (1년 이상 시간 역전) + KIDA 보고서 인용 + 군 검찰단 한지훈 신문(기록 제4,900쪽) 사용. → [[claims/kiatis-phantom-directive-2275ho]] | **CORROBORATED (moderate)** — 3가지 anomaly 공존 (미등재 + 시간역전 + 실효적 활용). Falsification 조건: 2019-05-09자 원본 공문 + 제2436호와 실질 diff. *L1↔L6 bridge.*

### Layer 2 — new KIATIS framework + actor continuity (added Track C compile pass 2026-04-11)

All 6 atoms from Track C were promoted directly to `## Open` §Layer 2 above at compile time; listed here for denominator completeness.

- **C-L2-01** → **PROMOTED** — 新KIATIS는 국방부 통제 사업 (위임 사업 불가). See Open §C-L2-01.
- **C-L2-02** → **PROMOTED** — 국유단(MKIA) 사업통제·관리·주관·수행기관 다중 cap inscription. See Open §C-L2-02.
- **C-L2-03** → **PROMOTED** — 이지영 + 김수진 4-context actor-continuity single-point-of-control. See Open §C-L2-03. **Korean-original-only atom.**
- **C-L2-04** → **PROMOTED** — 舊KIATIS 서버 server laundering (국전원 지하 → 전군 통합 메일 → DIDC1 클라우드). See Open §C-L2-04.
- **C-L2-05** → **PROMOTED** — 한지훈 3가지 능동적 방어 메커니즘 (Layer 6 reverse-bridge exculpatory). See Open §C-L2-05. **Korean-original-only atom.**
- **C-L2-06** → **PROMOTED** — 한지훈 보직 본인 부지불식간 2회 변경 (장교 개인 자력 조작). See Open §C-L2-06.

### Layer 3 — informatization cartel structure

- **C-L3-01** — 제2436호 retiers 사업통제/주관/관리 → 정보화기획관실/소요제기/집행 role framework. → [[claims/2436ho-gukjeonwon-role-tier-renaming]] | NEEDS_MORE_EVIDENCE (moderate) — *external comparator queued*
- **C-L3-02** — 한지훈 rebuttal explicitly names 국방정보화카르텔 as 5 orgs (국방부 검찰단 / 정보화조직 / 군방첩사 / KIDA / 기타); official narrative denies cartel. → [[claims/defense-information-cartel-named-by-rebuttal]] | **CORROBORATED (moderate)** — Step-3 reconciliation 2026-04-11: substantive coordination chain now established via 3 independently-written CORROBORATED strong atoms: [[claims/kida-otne-citation-misrepresents-us-standard|KIDA OT&E 인용 왜곡]] (학술 정당화), [[claims/lee-jiyoung-kim-sujin-single-point-of-control|이지영+김수진 단일 통제점]] (2020-04-22 공문 작성 기록 제4,708쪽), [[claims/kiatis-phantom-directive-2275ho|제2275호 phantom directive]] (KIDA 인용 + 검찰단 사용). 이 3 atom의 연결이 5개 조직 중 KIDA·정보화조직·검찰단 3개의 coordination을 텍스트 레벨로 입증. 나머지 2개(군방첩사·기타)의 직접 coordination 증거는 여전히 pending.
- **C-L3-03 (NEW 2026-04-11 Step 1 §3.3)** — 新KIATIS 사업관리팀장 보직 부지불식간 임의 변경 (편제 불일치 + 전임자 2개월 공석 + 본인 6개월 미인지 3중 조건). → [[claims/layer3-pm-post-vacancy-predecessor-gap]] | **CORROBORATED (strong)** — L3 보직 캡처 anchor.
- **C-L3-04 (NEW)** — KIATIS 행정정보운영팀 → 계획팀 강제 이관; 결재 공문 부재 + 복수 실무자 일치 증언. → [[claims/layer3-kiatis-team-transfer-forced-handoff]] | **CORROBORATED (strong)** — 이관 절차 위반 + 계획팀 12사업 중 7~8개 과잉 집중.
- **C-L3-05 (NEW)** — 박성호 (2016해킹당시원장-1) 장교 비하 발언 공론화 → Layer 5 격리 mechanism 동기 anchor (기록 제11,134~11,135, 제1,473). → [[claims/layer3-park-seong-ho-officer-denigration]] | **CORROBORATED (moderate)** — 주관적 동기 증거, L3↔L5 bridge.
- **C-L3-06 (NEW)** — PC 사업 평가위원장 교체 + 209.9억 국방 인사정보체계 고도화 사업 토의 배제 (기록 제1,720) — 독립 판단자 제거 패턴 2건. → [[claims/layer3-pc-evaluation-chair-replaced]] | **CORROBORATED (moderate)** — L3 → L4 evaluation-independence-violation mechanism.
- **C-L3-07 (NEW)** — DIDC 본격 개입 시작 시점 2018-04-30 「18년 정보자원 도입 및 교체사업 규격심의 결과 통보」 공문 (L1→L3 bridge anchor). → [[claims/layer3-didc-intervention-start-2018-04-30]] | **CORROBORATED (moderate)** — STRONG 상향 가능 if 2018-04-30 공문 Record No. 확보.
- **C-L3-08 (NEW)** — VPN OTP 카드 2019-09 시험평가 미사용 조작이 아니라 2021-04-15 이후 국유단 최초 사용 — L3/L4/L6 결정적 단일-문장 기소 전제 반박. → [[claims/layer3-vpn-otp-card-used-2021-not-2019]] | **CORROBORATED (strong)** — Layer 6 6죄명 기소 구조 전체 전제 붕괴.

### Layer 4 — test-evaluation manipulation (post-promotion candidates removed; KIDA atom upgraded to Open via Track D D1 closure)

- **C-L4-08 (UPGRADED to Open via Track D D1 closure 2026-04-11)** — KIDA의 시험평가 절차 개선 방안 연구 (2020-07 발간) 가 미군 OT&E 가이드라인 (Gilmore memo 2010-09-14) 인용 시 "Level I" 한정자 + "OTA 승인" 요건 두 가지 결정적 단어/구를 selective omission으로 삭제하여 일반 OT&E 대체 원칙으로 왜곡. 책 §3.4.3.4.2의 record 6,717 (KIDA) vs record 6,244 (US) verbatim 비교가 직접 증명. → [[claims/kida-otne-citation-misrepresents-us-standard]] | **CORROBORATED (strong)** — Promoted to Open section above (entry to be added during next promotion batch)

### Layer 4 — test-evaluation manipulation (residual NEEDS_MORE_EVIDENCE)

- *C-L4-01 (above)* — OT&E environment hedge flip-flop, adjudicated via authority-principle exception
- **C-L4-02** → **PROMOTED** — 제2436호 eight-anchor cluster (expanded from six per P6). See Open §C-L4-02.
- **C-L4-03** → **PROMOTED** — 제58조 separation→integration principle inversion. See Open §C-L4-03.
- **C-L4-04** → **PROMOTED** — 제59·60·61조 wholesale article deletion. See Open §C-L4-04.
- **C-L4-05** — `사업주관기관 주관 하에` clause erased from OT&E definition at 제2436호 (sponsor binding removed). → [[claims/2436ho-otne-sponsor-binding-erased]] | CORROBORATED (moderate) — *strength upgrade pending broader corroboration*
- **C-L4-06** → **PROMOTED** — DT&E sponsor-binding + 합격/불합격 clause erasure (P6 discovery). See Open §C-L4-06.
- **C-L4-07** — 제2842호 제76조 terminology/grouping shift (13-stage → 5-phase is a secondary wiki interpretation pending raw/04 re-measurement; book frames as responsibility-shifting rename of item 12 only). → [[claims/2842ho-software-development-13-to-5-stage]] | NEEDS_MORE_EVIDENCE (moderate) — *academic phase-vs-stage literature + direct raw/04 verbatim pending*
- **C-L4-08** → **PROMOTED via Track D D1 closure 2026-04-11** — KIDA research report 「시험평가 절차 개선 방안 연구」 cites US Gilmore memo with selective-omission of the `Level I` qualifier + `OTA approval` requirement at record 6,717; direct verbatim comparison with US source at record 6,244 confirms the category-confusion framing. → [[claims/kida-otne-citation-misrepresents-us-standard]] | CORROBORATED (strong). Verdict upgraded NEEDS_MORE_EVIDENCE → CORROBORATED strong after Track D located the KIDA report and performed direct verbatim diff.
- **C-L4-09** → **PROMOTED** — 평가위원회 99.7점 성공 판정 + 80건 추가요구사항 동시 의결 self-contradiction. See Open §C-L4-09.

### Bridge (Layer 4 + 6) — KIATIS legal framework

- **C-B-01** → **PROMOTED** — KIATIS 제58조 ¶2 main regime vs ¶4 exception textual misapplication. **Central Layer 6 legal contradiction.** See Open §C-B-01.
- **C-B-02** → **PROMOTED** — KIATIS lifecycle bound to 제2129호 via 국가계약법 + 행위시법주의. See Open §C-B-02.

### Layer 5 — false power-abuse report and fabricated audit

- **C-L5-01** → **PROMOTED** — 48-hour retaliation causal link. See Open §C-L5-01.
- **C-L5-02** → **PROMOTED** — 6-month solitary-office isolation (human-rights violation). See Open §C-L5-02.
- **C-L5-03** → **PROMOTED** — 43-day reversal of investigative logic (conclusion before interrogation). See Open §C-L5-03.
- **C-L5-04** → **PROMOTED** — fabricated 경고장 with non-existent job title. See Open §C-L5-04.
- **C-L5-05** → **PROMOTED** — 박서준 nominal complainant (grievances absent from 경고장). See Open §C-L5-05.
- **C-L5-06** → **PROMOTED** — isolation-office pre-planning. See Open §C-L6-06 *(renumbered at promotion).*

### Layer 6 — military prosecutor investigation

- **C-L6-01** → **PROMOTED** — Foundational role-separation contradiction. See Open §C-L6-01.
- **C-L6-02** → **PROMOTED** — Foundational 기소유예 framing contradiction. See Open §C-L6-02.
- **C-L6-03** → **PROMOTED** — 불기소이유서 ¶4 misapplication (Layer 6 face of C-B-01). See Open §C-L6-03.
- **C-L6-04** → **PROMOTED** — 군검찰단장 personal awareness via 2022-09-28 phone call. See Open §C-L6-04.
- **C-L6-05** → **PROMOTED** — 참고인→피의자 procedural inversion (2022-01-25 → 2022-07-18). See Open §C-L6-05.
- **C-L6-07** → **PROMOTED** (C-L6-06 skipped — taken by L5-06→L6-06 renumbered to isolation-office-premeditated) — 수사개시 통보 군사법원법 + 군인권보호관 미작동. See Open §C-L6-07.
- **C-L6-08** → **PROMOTED** — 피의자 신문조서 의도적 질문 프레임 회피 (구KIATIS 15년 VPN-bypass 우회). See Open §C-L6-08.
- **C-L6-09** → **PROMOTED** — 80건 추가요구사항 의도적 전력화 지연 (Layer 6 face of C-L4-09). See Open §C-L6-09.

### Layer 7 — institutional rejection chain

- **C-L7-01** → **PROMOTED** — Foundational 8-institution rejection chain. See Open §C-L7-01.
- **C-L7-02** → **PROMOTED** — Rebuttal document date adjudication. See Open §C-L7-02.
- **C-L7-03** → **PROMOTED** — 권익위 evidence-transfer-to-MND institutional capture. See Open §C-L7-03.
- **C-L7-04** → **PROMOTED** — 인권위 procedural duty violation. See Open §C-L7-04.
- **C-L7-05** — 2024 온-나라 upgrade (~40억원) creates concrete risk of destroying 한지훈's 2022 메모보고 evidence trail (ongoing evidence-preservation contradiction). → [[claims/on-nara-2024-upgrade-evidence-destruction-risk]] | NEEDS_MORE_EVIDENCE (moderate) — *upgrade specification pending*

### Step-3 reconciliation note (2026-04-11)

Step 1 (Layer 3 §3.3 compile) + Step 2 (제2275호 phantom directive) added 7 new atoms (6 L3 + 1 L1↔L6 bridge). Step 3 reconciliation also upgraded 2 existing NME entries to CORROBORATED (moderate): C-L1-09 (Track D D2 closure reflected) + C-L3-02 (3-atom substantive coordination chain). **New vault atom count: 47 → 54.** Remaining NME count: 7 → 5 (C-L1-07, C-L1-08, C-L3-01, C-L4-07, C-L7-05).

The 7 new atoms are provisionally classified as Candidates here; they are contract-complete and will be promoted to Open in Step 5 alongside `scripts/rebuild-hubs.py` regeneration. C-L3-03/04/08 (CORROBORATED strong) will promote immediately; C-L1-10/L3-05/06/07 (CORROBORATED moderate) follow the same promotion pipeline as C-L1-09 and C-L3-02 post-reconciliation.

### Post-final-promotion roll-up (2026-04-11, 47 total — pre-Step 1/2/3 reconciliation)

| Layer | Total | **PROMOTED → Open** | CORROBORATED (mod, candidate) | NEEDS_MORE_EVIDENCE (candidate) | Notes |
|---|---|---|---|---|---|
| 1 | 8 | **5** (C-L1-02 through C-L1-06) | 0 | 3 (C-L1-07/08/09) | SOP-trail cluster fully promoted |
| 2 | 6 | **6** (C-L2-01 through C-L2-06) | 0 | 0 | All Track C atoms promoted at compile time |
| 3 | 2 | 0 | 0 | 2 (C-L3-01/02) | Cartel substance still needs independent corroboration |
| 4 | 9 (incl. C-L4-01) | **7** (C-L4-01/02/03/04/06 + C-L4-08 Track D D1 + C-L4-09 final-promotion batch) | 1 (C-L4-05) | 1 (C-L4-07) | Eval-committee + KIDA now both in Open |
| B (4↔6) | 2 | **2** (C-B-01/02) | 0 | 0 | Central legal contradiction fully promoted |
| 5 | 6 | **6** (C-L5-01 through C-L5-06) | 0 | 0 | All L5 atoms promoted |
| 6 | 8 | **8** (C-L6-01/02/03/04 + C-L6-05/07/08/09 final-promotion batch) | 0 | 0 | Foundational + Branch 2 investigation chain both fully promoted |
| 7 | 5 | **4** (C-L7-01/02/03/04) | 0 | 1 (C-L7-05) | Rejection chain fully promoted; 온-나라 entry still NME |
| **Total** | **47** | **38** (26 C-step + 6 Track C L2 + 1 Track D L4-08 + 5 final-promotion batch) | **1** (C-L4-05) | **7** (C-L1-07/08/09 + C-L3-01/02 + C-L4-07 + C-L7-05) | **81% promoted to Open** |

**Interpretation.** After the 2026-04-11 final-promotion batch, the Candidate section contains exclusively atoms that CANNOT yet be promoted: 1 moderate-strength atom (C-L4-05, pending targeted re-measurement for strength upgrade) and 7 NEEDS_MORE_EVIDENCE atoms (pending raw source ingest or external comparators). **Every CORROBORATED-strong atom in the vault now has a corresponding Open contradiction entry.** Phase A clean exit point: the denominator and the promotion pipeline are aligned.
- **38 promoted to Open** (81% — previous 33 + 5 final batch)
- **1 CORROBORATED moderate** (C-L4-05 OT&E sponsor-binding erasure) — awaiting strength upgrade via targeted re-measurement of 제57조 ¶1 제2호 corroborating sources. Blocker: requires direct verbatim re-read.
- **7 NEEDS_MORE_EVIDENCE** — same 7 candidates: C-L1-07 (KIATIS-DIDC hosting verification), C-L1-08 (pre-2019 SOP revision), C-L1-09 (제2263호 verbatim diff), C-L3-01 (제2576호 external comparator), C-L3-02 (cartel substantive coordination), C-L4-07 (제2842호 Article 76 raw/04 re-measurement), C-L7-05 (2024 온-나라 upgrade specification). Evidence gaps unchanged — each maps to a specific queued raw source ingest.

**Checkpoint 2 work remaining after this denominator refresh:**
1. **Promote the 5 pending-promotion CORROBORATED-strong candidates** to full Open entries in the next promotion batch. Atoms are already contract-complete; this is mechanical write-up work (~1 paragraph per entry, same compact 5-line format used in the 2026-04-11 C-step).
2. Upgrade C-L4-05 OT&E sponsor-binding erasure moderate → strong via targeted re-measurement of 제57조 ¶1 제2호 corroborating sources.
3. Close the 7 NEEDS_MORE_EVIDENCE gaps by ingesting the queued raw sources (pre-2019 SOP revision, 제2263호 verbatim diff, 제2576호 external comparator, 제2842호 Article 76 raw/04 re-measurement, substantive cartel coordination material, 2024 온-나라 upgrade specification, KIATIS-DIDC hosting verification).
4. Expand atom coverage in under-represented areas: ~~Layer 2 missing entirely~~ ✓ Done 2026-04-11 via Track C. Layer 3 still has only 1 primary atom — substantive cartel coordination needs additional independent corroboration beyond the rebuttal's naming. Layer 1 SOP-trail cluster complete but individual procedural-artifact absences could use targeted raw/07 ingest for empirical attestation.
5. ~~Layer hub pages~~ ✓ Done. ~~Track C Layer 2 compile~~ ✓ Done. ~~Track D D1 closure~~ ✓ Done.

**Scale note.** 47 atoms → 47 candidates (1:1 effective ratio). The 1:1 assumption from the earlier completion-definition discussion is holding firm. Projected maturity at ~300 atoms → ~300 contradictions. The denominator-refresh cycle itself (Candidate section rewrite) is now backed by `scripts/rebuild-hubs.py` staging output — future refreshes can diff `output/rebuilt-contradictions-candidates-YYYY-MM-DD.md` against this section to detect new atoms needing candidate entries.

## Resolved

*(empty)*

## Related

- [[_master-index]]
- [[claims/_index|Claims]]
