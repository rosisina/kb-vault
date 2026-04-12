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

### Promoted to Open — B.1 batch (2026-04-12)

**158 CORROBORATED (strong) atoms** promoted from Candidates in a single batch.
Combined with the 38 pre-existing Open entries, total Open contradictions: **196**.

#### Layer 1 — DIDC trace removal / Active-X / SOP / cyber directive (21 new)

#### C-L1-11 — active-x-removal-as-project-goal-confirms-vulnerability

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/active-x-removal-as-project-goal-confirms-vulnerability]] • **Verdict:** CORROBORATED (strong)

국유단이 2018년 7월 9일 국전원에 발송한 "KIATIS 성능개선 사업 추진 요청(협조)" 공문에서 사업의 기대효과로 "현재 사용 중인 Active-X 사용을 중단함으로써 보안 취약 요소 제거"를 명시했다(기록 제1,051쪽). 이는 舊KIATIS의 보안취약성을 사업 관계기관이 공식적으로 인정한 것이다.

#### C-L1-12 — contradiction-intranet-link-attack-surface

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/contradiction-intranet-link-attack-surface]] • **Verdict:** CORROBORATED (strong)

舊KIATIS는 인터넷 기반이면서 동시에 인트라넷(국방망)과 데이터를 송수신하는 이중 연동 구조였다(기록 제1,117쪽, 제1,125쪽). 단순 인터넷 홈페이지가 아니라 2016 DIDC 해킹 시 인터넷→국방망 공격 경로를 제공한 bridge 시스템이었으며, 이를 은폐할 동기가 커버업의 핵심이다.

#### C-L1-13 — csr-annual-vulnerability-assessment-duty-violated

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/csr-annual-vulnerability-assessment-duty-violated]] • **Verdict:** CORROBORATED (strong)

제39-40조에 따라 DIDC는 모든 사이버자산에 대해 연간 취약점 분석·평가 계획을 수립하고 수행해야 했다. 연간 취약점 평가가 수행되었다면 舊KIATIS의 VPN 미적용은 '치명적 취약점'으로 탐지되었을 것이다. 15년간 미탐지는 연간 평가 미수행 또는 KIATIS의 평가 범위 제외를 의미한다.

#### C-L1-14 — csr-cyber-asset-registry-catch-all-art45

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/csr-cyber-asset-registry-catch-all-art45]] • **Verdict:** CORROBORATED (strong)

제45조 제1항은 사이버자산 현황을 '수시로 관리'하고 '미등록 또는 취약점 위험도가 높은 장비·체계는 원칙적으로 네트워크 접근을 제한'하도록 의무화. 舊KIATIS가 미등록이면 네트워크 차단 대상, 등록되었으면 VPN 미적용이 취약점으로 탐지 필수. 어느 경우든 15년간 방치는 제45조 위반.

#### C-L1-15 — csr-didc-is-2nd-tier-security-ops-center

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/csr-didc-is-2nd-tier-security-ops-center]] • **Verdict:** CORROBORATED (strong)

제54조 제1항 제2호(나)는 국방통합데이터센터를 '통합보안관제(2차)' 책임 부대로 명시 지정. 업무대상은 '데이터센터 소관'. DIDC가 KIATIS를 포함한 소관 체계에 대한 보안관제 의무를 가졌으며, 한지훈 개인이 아닌 DIDC라는 기관이 보안 책임의 제도적 주체이다.

#### C-L1-16 — csr-kiatis-is-cyber-asset-under-directive

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/csr-kiatis-is-cyber-asset-under-directive]] • **Verdict:** CORROBORATED (strong)

舊KIATIS는 전력지원체계에 해당하는 국방정보시스템으로서 제3조 제7호의 '사이버자산' 정의를 충족한다. 따라서 이 훈령의 사이버보안 업무(제4조 제3항) 전체 — 보호대책(제22-26조), 취약점 평가(제39-45조), 전력지원체계 수명주기 보호(제32-36조) — 가 KIATIS에 적용된다.

#### C-L1-17 — didc-sop-12-emergency-response-team-logs-mandatory

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/didc-sop-12-emergency-response-team-logs-mandatory]] • **Verdict:** CORROBORATED (strong)

DIDC 부대예규 제12호 제17조③-6은 긴급대응반의 '침해사고 기록일지'와 '상황근무일지' 유지를 의무화. 북한 해킹은 최소 II급(강화된 준비태세) 이상으로 INFOCON 상향이 예상되며, 이는 자동으로 긴급대응반 편성을 유발. 제27-32조의 INFOCON 체계와 연동하여, 2016 사건의 실시간 대응 타임라인이 이 일지들에 기록되어야 한다.

#### C-L1-18 — didc-sop-12-incident-scene-preservation-mandatory

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/didc-sop-12-incident-scene-preservation-mandatory]] • **Verdict:** CORROBORATED (strong)

DIDC 부대예규 제12호 제21조①은 불법접근·해킹 흔적 발견 시 전산망 차단을 포함한 현장보존 의무를 규정. 제22조③은 정보보호과+자원관리과 합동분석팀 편성과 각 부서의 자료 협조 의무를 규정. 제23조④는 '침해사고의 탐지·대응·조치 내용을 기록하고 관리하여야 한다'고 명시. 2016 해킹 사건에서 이 세 조항에 따른 현장보존 조치, 합동분석팀 기록, 탐지·대응·조치 기록이 존재해야 한다.

#### C-L1-19 — didc-sops-cover-2016-hacking-period

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/didc-sops-cover-2016-hacking-period]] • **Verdict:** CORROBORATED (strong)

DIDC 부대예규 제12호 (사이버방호 예규) and 부대예규 제11호 (정보시스템 운영관리 예규) were both enacted on 2016-02-01 and apply universally to `DIDC 본부 및 각 센터` and to `DIDC 소관의 국방컴퓨터체계` (all DIDC computer systems), with no carve-outs. Together they constitute the **procedural ...

#### C-L1-20 — kiatis-homepage-co-managed-by-admin-ops-team

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/kiatis-homepage-co-managed-by-admin-ops-team]] • **Verdict:** CORROBORATED (strong)

피의자 신문조서(기록 제4,879쪽/L6)와 조직·담당자 현황(2019-12-17, 기록 제4,723쪽/L6)에 따르면, 행정정보 운영팀이 '625전사자 종합 정보체계'(舊KIATIS)와 인터넷·인트라넷 홈페이지를 함께 담당하였다.

#### C-L1-21 — kiatis-homepage-improvement-disguised-as-maintenance

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/kiatis-homepage-improvement-disguised-as-maintenance]] • **Verdict:** CORROBORATED (strong)

2016-09-26부터 2017-04-24까지 7개월 동안 진행된 '국방부 홈페이지 개선 사업'은 **보안 취약점 10대 항목을 점검하는 것이 핵심 내용**이었으나, 과제카드에는 사업임에도 **'국방부 홈페이지 유지보수'로 둔갑**하여 진행되었다(기록 제00,016쪽).

#### C-L1-22 — kiatis-rfp-tech-table-proves-sw-only-internet-structure

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/kiatis-rfp-tech-table-proves-sw-only-internet-structure]] • **Verdict:** CORROBORATED (strong)

新KIATIS 사업의 제안요청서 기술 적용 표 보안 분야(62페이지, 기록 제4,424쪽)에는 VPN, DB 접근 통제 등 수십 개에 달하는 정보보호 체계가 **"해당 사항 없음"**으로 체크되어 있다. 행안부의 2025.7.24 답변(기록 제5,697쪽~제5,701쪽)에 따르면, **"SW 개발사업에 보안장비(솔루션) 구매·설치·구축 등 과업이 없다면, '해당 없음'으로 표기하는 것이 적절"**하며, **"해당 없음으로 명시된 항목은 감...

#### C-L1-23 — kiatis-server-laundering-to-integrated-mail-server

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/kiatis-server-laundering-to-integrated-mail-server]] • **Verdict:** CORROBORATED (strong)

국방부 군수감사담당관실의 "일상감사 결과 통보"(2018-08-14, 기록 제1,141쪽)는 新KIATIS 성능개선사업의 합법성을 검토하면서, 그 사업명을 **"전군 인터넷 통합 구축 사업"**으로 명시하고 있다(기록 제1,144쪽). 이로써 舊KIATIS가 '국방 통합 인터넷 메일서버'로 서버 세탁(server laundering)되어 이전·운용되었음이 확인된다.

#### C-L1-24 — layer1-foundation-of-seven-layer-system

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/layer1-foundation-of-seven-layer-system]] • **Verdict:** CORROBORATED (strong)

제1층위는 전체 7층위 증명체계의 근간이다. 국방정보화카르텔이 장기간에 걸쳐 조직적이고 집단적인 모의·숨김·조작·은폐·인권침해·범죄자 낙인을 자행한 동기와 의도가 舊KIATIS의 15년간(2007~2022) VPN 없는 인터넷 노출 운용 사실의 체계적 증거 인멸에 있기 때문이다.

#### C-L1-25 — old-kiatis-apt-optimal-vulnerability-structure

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/old-kiatis-apt-optimal-vulnerability-structure]] • **Verdict:** CORROBORATED (strong)

舊KIATIS는 APT 공격에 구조적으로 무방비: (1) Active-X 클라이언트 취약점, (2) VPN/DB접근제어 부재, (3) 인터넷→국방망 직접 운용, (4) 측면 이동 경로. 국방사이버안보훈령 등 위반.

#### C-L1-26 — old-kiatis-direct-db-access-without-vpn

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/old-kiatis-direct-db-access-without-vpn]] • **Verdict:** CORROBORATED (strong)

舊KIATIS는 약 15년간(2007~2022) 인터넷에서 VPN이나 보안장비 없이 데이터베이스(DB)에 직접 접속하는 구조로 운용되었다. 장우진 (사업실무자-1)은 2022년 7월 19일 한지훈과의 담화에서 "VPN 문제가 제일 클 겁니다"라고 증언하며, VPN 제한으로 新KIATIS가 정상 운용되지 않은 이유를 설명했다(기록 제10,303쪽). 국유단 발굴 팀장은 2022년 2월 8일 정상화 회의에서 "VPN을 우리가 사용하는 이유가 ...

#### C-L1-27 — old-kiatis-hosted-inside-other-server-15-years

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/old-kiatis-hosted-inside-other-server-15-years]] • **Verdict:** CORROBORATED (strong)

舊KIATIS는 2006년 육군 전산소가 홈페이지 게시판 형태로 제작한 단순 파일첨부 시스템에서 출발했다(기록 제1,054쪽, 제1,120쪽). 사용자는 국유단, 조사본부, 각 군 부대 등 약 100명이었다(기록 제1,068쪽).

#### C-L1-28 — old-kiatis-intranet-data-link-confirmed

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/old-kiatis-intranet-data-link-confirmed]] • **Verdict:** CORROBORATED (strong)

舊KIATIS는 인트라넷(국방망)과 연동하여 데이터를 송·수신하는 구조였다. 이태호 (평가위원장-1)가 2018년 8월 작성한 新KIATIS 사업계획서(기록 제1,117쪽)의 체계 요구사항 목록에 "인트라넷 홈페이지 연동"이 명시되어 있으며, 국유단의 제안요청서(안) 검토 결과 보고에서도 연동 대상체계를 "국유단 홈페이지(인트라넷)"로 적시하고 연동 항목을 "조사, 발굴, 감식, 유가족 정보"로 기술하고 있다(기록 제1,125쪽). 이는 ...

#### C-L1-29 — old-kiatis-web-facade-masking-cs-direct-db

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/old-kiatis-web-facade-masking-cs-direct-db]] • **Verdict:** CORROBORATED (strong)

舊KIATIS는 구조적 기만을 내포한 이중구조 시스템이다:

#### C-L1-30 — prosecution-six-charges-collapse-vpn-nonexistence

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/prosecution-six-charges-collapse-vpn-nonexistence]] • **Verdict:** CORROBORATED (strong)

군검찰단이 한지훈에게 부과한 6개 혐의(위계공무집행방해, 업무상배임, 허위공문서작성, 허위작성공문서행사, 허위보고, 허위통보)는 모두 시험평가 환경 조작을 전제로 한다. 그러나 단일 공식 문서가 新KIATIS에 VPN/DB접근제어가 2019-08-27부터 최소 2021-04-23까지 적용되지 않았음을 증명한다. 존재하지 않는 보안 조치를 '비활성화'한 것이 범죄라는 검찰 논리는 구조적으로 불가능하다. 이는 피해자 비난(victim-blam...

#### C-L1-31 — xsyn-sop-incident-silence-equals-coverup-proof

**Layer:** 1 • **Type:** see atom • **Atom:** [[claims/xsyn-sop-incident-silence-equals-coverup-proof]] • **Verdict:** CORROBORATED (strong)

DIDC 예규 제12호(raw/06) 제17-24조는 침해사고 시 비상대응팀 구성→보고→탐지대응→보고(별지4호)→대책→복구→종결의 8단계 의무 절차를 규정. 예규는 2016-02-01 시행. 책(raw/01 §3.1)은 이 기록들이 일절 존재하지 않음을 문서화. 훈령(raw/04) 제2129호 제9조 ¶2가 상위 규정 근거. 법적 의무(raw/06) + 이행 부재(raw/01) + 상위 근거(raw/04) = 침묵 자체가 은폐의 절차적 증명.

#### Layer 2 — 新KIATIS framework + officer record manipulation (2 new)

#### C-L2-07 — gukyu-dan-dual-cap-unprecedented-structure

**Layer:** 2 • **Type:** see atom • **Atom:** [[claims/gukyu-dan-dual-cap-unprecedented-structure]] • **Verdict:** CORROBORATED (strong)

新KIATIS 사업에서 국유단이 사업통제기관과 사업주관기관을 동시에 담당하는 "이중역할(Dual Cap)" 구조(사업계획서 기록 제1,131쪽, 사업계획보고 기록 제1,140쪽, 최종 제안요청서 기록 제1,474쪽)는 국방정보화사업 역사상 전례가 없는 구조이다.

#### C-L2-08 — new-kiatis-is-mnd-controlled-not-delegated-project

**Layer:** 2 • **Type:** see atom • **Atom:** [[claims/new-kiatis-is-mnd-controlled-not-delegated-project]] • **Verdict:** CORROBORATED (strong)

新KIATIS 성능개선 사업은 훈령 제10조 제4항(기록 제7,495쪽)에 의거 "국방부에서 운용하는 정보시스템과 관련된 사업"으로 국방부 통제 사업에 해당한다. 근거:

#### Layer 3 — 국전원 사업관리 + informatization cartel (2 new)

#### C-L3-09 — han-ji-hoon-three-safeguard-mechanisms

**Layer:** 3 • **Type:** see atom • **Atom:** [[claims/han-ji-hoon-three-safeguard-mechanisms]] • **Verdict:** CORROBORATED (strong)

한지훈은 新KIATIS 사업관리팀장 보직 후, 국유단이 사업통제기관을 수행하는 비정상적 구조의 위험을 인식하고 3가지 제동 장치를 선제적으로 설치하였다: (1) 국유단 실무자 장우진 상사를 국전원에 주 1회 상주시킴, (2) 모든 이해관계자를 정식 공문으로 소집하여 요구사항 검토회의를 주관하고 개발업체와의 상호 승인 획득, (3) 국유단의 감리사업 국전원 수행 요청을 거절하여 감리의 독립성 보장. 이는 검찰의 '과실 또는 공모' 서사와 정...

#### C-L3-10 — kiatis-project-deliberately-transferred-to-han-ji-hoon

**Layer:** 3 • **Type:** see atom • **Atom:** [[claims/kiatis-project-deliberately-transferred-to-han-ji-hoon]] • **Verdict:** CORROBORATED (strong)

KIATIS 사업은 원래 행정정보운영팀의 소관 업무였으나, 국전원 공무원들이 한지훈 중령의 행정정보계획팀으로 의도적으로 이관하였다. 피의자신문조서에서 한지훈은 "키아티스는 행정정보운영팀입니다"라고 명확히 진술하였고, 오현수 (실무자-5)는 "이 사업은 행정정보운영팀 사업인데 저희한테 떠넘겼다"고 수차례 발언하였다. 이태호 중령도 동일한 진술을 하였으며, 이태호는 "공무원들이 군인을 '졸'로 본다"는 취지의 발언도 하였다(기록 제11,107...

#### Layer 4 — test-evaluation manipulation + directive revision (41 new)

#### C-L4-10 — 2576ho-article-62-5-ote-approval-deleted

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/2576ho-article-62-5-ote-approval-deleted]] • **Verdict:** CORROBORATED (strong)

제2075호 제62조⑤ '사업통제기관은 운용시험평가계획의 타당성 및 적절성 등을 검토하여 승인하여야 한다'가 제2576호에서 삭제. 이로써 시험평가 체제에서 사업통제기관의 모든 승인 체크포인트가 완전히 소멸: 제11조②(제2398호)→제59조④(제2436호)→제62조⑤(제2576호).

#### C-L4-11 — 2576ho-article-64-failure-blindspot

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/2576ho-article-64-failure-blindspot]] • **Verdict:** CORROBORATED (strong)

제2075호 제64조에서 모든 시험평가 결과가 사업통제기관에 보고되던 체계가, 제2576호에서 합격 후에만 정보화기획관실에 보고하는 구조로 변경. 부적합 판정 시 정보화기획관실에 보고되지 않는 구조적 사각지대 생성. 감독 기관이 실패 사례를 인지하지 못하는 제도적 맹점.

#### C-L4-12 — 80-items-violate-national-contract-law

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/80-items-violate-national-contract-law]] • **Verdict:** CORROBORATED (strong)

新KIATIS 시험평가 기간 중 평가위원회가 의결한 80건 추가 요구사항(기록 제3,039쪽)은 사업 예산(6.25억원)의 약 50%에 해당하는 규모이다. 이는 국가계약법 제10조·제11조·제19조·제26조와 훈령 제57조·제60조를 위반한다. 평가위원회는 요구기능의 충족 여부를 판정하는 기관이지 신규 요구사항을 추가할 권한이 없다.

#### C-L4-13 — article-58-separation-to-integration-2020-directive-manipulation

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/article-58-separation-to-integration-2020-directive-manipulation]] • **Verdict:** CORROBORATED (strong)

국방정보화업무훈령 제58조(시험평가 수행원칙)는 2015년 1월 27일 제1775호(기록 제7,512쪽)에서부터 2020년 2월 13일 제2398호(기록 제8,194쪽)까지 5년간 **"개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되, 필요시 사업통제기관의 승인을 받아 동시에 실시할 수 있다"**로 규정되어 있었다. 그러나 2020년 6월 4일 제2436호부터 **"시험평가는 통합하여 실시하는 것을 원칙으로 한다"**로 완전히 뒤...

#### C-L4-14 — audit-dtot-report-hidden-from-team-leader

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/audit-dtot-report-hidden-from-team-leader]] • **Verdict:** CORROBORATED (strong)

국유단이 2019년 9월 24일 발송한 "6.25전사자 종합정보체계 성능개선 감리용역 DT/OT 테스트 지원 결과(통보, 국유단장 결재)"를 이준호 (공모자-1)가 2019년 10월 7일 접수하여 "1인 결재" 후 개발관리팀장 한지훈에게 미보고하였다(기록 제2,762쪽).

#### C-L4-15 — contradiction-article-58-five-year-stability-then-reversal

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/contradiction-article-58-five-year-stability-then-reversal]] • **Verdict:** CORROBORATED (strong)

제58조의 시험평가 분리 원칙이 제1775호(2015.1.27)부터 제2398호(2020.2.13)까지 5년간 안정적으로 유지되었다가 제2436호(2020.6.4)에서 4개월 만에 통합 원칙으로 180도 전환(기록 제7,512쪽, 제8,194쪽). 5년 안정 후 돌연 역전은 자연적 정책 진화가 아닌 의도적 조작의 시간적 증거이다.

#### C-L4-16 — contradiction-evaluation-post-completion-temporal-impossibility

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/contradiction-evaluation-post-completion-temporal-impossibility]] • **Verdict:** CORROBORATED (strong)

평가 항목 변경 요청(2019.9.5) → 시험평가 종료(2019.9.11) → 평가 항목 변경 승인(2019.9.19, 국유단장). 승인이 평가 종료 8일 후에 이루어진 것은 시간적 불가능이며, 국유단이 사업통제기관 역할을 불법 자임한 증거. 2020-08 MND 공문(기록 제4,757쪽)이 이를 '제도 개선'으로 소급 정당화.

#### C-L4-17 — cross-atom-99-7-plus-80items-plus-data-absence

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/cross-atom-99-7-plus-80items-plus-data-absence]] • **Verdict:** CORROBORATED (strong)

99.7점 군사용 적합 판정(기록 제3,041쪽) + 동일 세션 80건 추가 의결(기록 제3,039쪽) + 국유단 연계 데이터 부재(기록 제2,610쪽)가 동시 성립: 성공 판정은 허위이거나, 80건은 월권이거나, 데이터 부재는 의도적 방치 — 셋 모두 조작의 증거.

#### C-L4-18 — didc-commander-hwang-prior-knowledge-lie

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/didc-commander-hwang-prior-knowledge-lie]] • **Verdict:** CORROBORATED (strong)

DIDC 부대장 황만수는 2022년 10월 6~7일 한지훈과의 전화 통화에서 수사 사실을 "진짜 모른다", "전혀 모른다"고 반복 주장하였다(기록 제11,399쪽). 그러나 한지훈의 박사 동기 김성민과의 2022.10.7일경 대화(기록 제11,404쪽)에서:

#### C-L4-19 — didc-excluded-from-test-eval-reform

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/didc-excluded-from-test-eval-reform]] • **Verdict:** CORROBORATED (strong)

DIDC는 시험평가 개혁의 전 과정에서 체계적으로 배제되었다:

#### C-L4-20 — didc-falsely-records-old-kiatis-as-vpn-user

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/didc-falsely-records-old-kiatis-as-vpn-user]] • **Verdict:** CORROBORATED (strong)

DIDC1센터에서 2019.2.1.에 생산·발송한 "'19년 DB 접근제어(샤크라맥스) 운용 현황 점검 계획"(기록 제1,874쪽)에서 舊KIATIS가 "VPN 사용자"로 국방망 목록에 기재되어 있다. 그러나 제1층위에서 증명된 바와 같이, 2019년 2월 1일 시점에 舊KIATIS는 아직 인터넷 홈페이지 서버 내에서 VPN 미적용 상태로 운용되던 시기이다. 따라서 이 기재는 허위이며 조작된 것이다(제4층위 정리01).

#### C-L4-21 — didc-withheld-network-diagram-from-kiatis

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/didc-withheld-network-diagram-from-kiatis]] • **Verdict:** CORROBORATED (strong)

DIDC는 "통합데이터센터 1센터 내 장비 비공개" 정책(기록 제2,311쪽)으로 新KIATIS 시험평가 계획 수립에 필수적인 네트워크 구성도와 보안장비 정보를 국전원에 제공하지 않았다. 국전원의 대부분의 다른 사업에서도 네트워크 구성도가 부재하였다(기록 제3,354쪽 등).

#### C-L4-22 — directive-article-11-control-functions-stripped

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/directive-article-11-control-functions-stripped]] • **Verdict:** CORROBORATED (strong)

사업통제기관의 4대 핵심 기능이 훈령 개정을 통해 연속적으로 삭제되었다:

#### C-L4-23 — fabricated-document-2020-produced-in-2022

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/fabricated-document-2020-produced-in-2022]] • **Verdict:** CORROBORATED (strong)

2020년 8월 20일자 국방부 "시험평가 개선방안" 공문(기록 제4,757쪽)은 실제로 2022년 군검찰단 수사 시점에 소급 조작된 문서이다. 이 공문에 '인도 단계'라는 용어가 사용되어 있으나, '인도 단계'는 제2842호 훈령(2023.9.20.)에서야 최초 도입된 개념이다. 2020년 시점에는 이 용어가 어떤 훈령에도 존재하지 않았으므로, 이 공문은 물리법칙(시간의 비가역성)을 위반하는 시간역전 현상을 보인다.

#### C-L4-24 — firewall-requests-confirm-no-vpn-db-direct-access

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/firewall-requests-confirm-no-vpn-db-direct-access]] • **Verdict:** CORROBORATED (strong)

3명의 사업실무자(오현수·지원호·이준호)가 처리한 모든 "방화벽 정책 적용 요청" 공문은 舊KIATIS(인터넷)와 新KIATIS(국방망)의 DB를 직접 접속하기 위한 것이었다. 이는 제1층위에서 증명된 舊KIATIS의 인터넷 VPN 미사용 DB 직접접속을 다시 한번 확증하는 증거이며, 동시에 新KIATIS도 최소한 2021년 4월 14일까지 VPN과 DB접근제어시스템(샤크라맥스)이 미적용된 상태에서 운영되었음을 보여준다.

#### C-L4-25 — gukjeonwon-pre-evaluation-team-leader-exclusion

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/gukjeonwon-pre-evaluation-team-leader-exclusion]] • **Verdict:** CORROBORATED (strong)

국전원은 2019년 8월 29일 新KIATIS 개발·운용시험평가 계획보고에서 전례 없이 개발관리팀장(한지훈 중령)을 배제한 채, 사업실무자 해군대위 이준호 (공모자-1)가 국전원장에게 직접 보고하여 승인받았다. 이는 시험평가 과정 전체에서 팀장을 의사결정 체계에서 제거하기 위한 조직적 조작의 출발점이다.

#### C-L4-26 — kida-recommends-gukjeonwon-centered-integration

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/kida-recommends-gukjeonwon-centered-integration]] • **Verdict:** CORROBORATED (strong)

KIDA 연구의 제4 함의(기록 제6,722쪽)는 사업관리기관(국전원) 중심의 개발시험(DT)/운용시험(OT) 통합을 권고한다. 그러나 이는 미군의 TEMP Guidebook 3.1(2017)이 명시한 "Developmental and operational testing serve different purposes and should not be combined" 원칙을 정반대로 왜곡한 것이다(기록 제6,725쪽~제6,726쪽).

#### C-L4-27 — kida-research-legitimizes-pre-existing-manipulation

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/kida-research-legitimizes-pre-existing-manipulation]] • **Verdict:** CORROBORATED (strong)

KIDA의 "국방정보시스템 시험평가 절차 개선 방안 연구"(연구기간 2020.1~6월, 기록 제6,738쪽)는 국방정보화카르텔이 이미 실행한 조작을 학술적으로 정당화하는 소급 정당화 도구이다.

#### C-L4-28 — kim-min-su-central-cross-layer-cartel-figure

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/kim-min-su-central-cross-layer-cartel-figure]] • **Verdict:** CORROBORATED (strong)

김민수 (핵심 의사결정자-1)는 국방정보화카르텔의 교차층위 핵심 인물이다:

#### C-L4-29 — layer4-997-military-adequate-verdict-contradicted-by-sabotage

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-997-military-adequate-verdict-contradicted-by-sabotage]] • **Verdict:** CORROBORATED (strong)

新KIATIS 시험평가위원회(비상설)는 **99.7%의 고득점과 함께 "군사용 적합" 판정**을 하였다 (Record No. 3,041). 이 판정은 한지훈의 적극적 사업관리 하에 달성되었으며, 국유단 성능개선 TF(Record No. 1,073) 실무자들이 평가위원으로 참석하여 내린 결정이다. 한지훈은 요구사항 검토회의(Record No. 1,851)에서 갑·을 전원 서명 합의 후 공식 통보(2019-02-13, Record No. 1,...

#### C-L4-30 — layer4-activex-removal-request-during-evaluation-conspiracy

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-activex-removal-request-during-evaluation-conspiracy]] • **Verdict:** CORROBORATED (strong)

新KIATIS 시험평가 기간 중, 비상설 평가위원회가 "Active-X 제거를 국유단(사업통제기관)에서 감리결과 시 추진 요청"(기록 제5,950쪽~제5,953쪽)했고, 국유단장이 이를 즉시 승인(기록 제3,068쪽)했다. 책(§3.4.6.3)은 이를 "사전에 두 조직 간에 합의된 시나리오의 실행"으로 규정한다.

#### C-L4-31 — layer4-dtot-separation-principle-violated

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-dtot-separation-principle-violated]] • **Verdict:** CORROBORATED (strong)

新KIATIS 시험평가(2019.9.2~11)는 개발시험평가(DT)와 운용시험평가(OT)를 통합하여 "개발·운용시험평가"로 실시되었다. 이는 훈령 제2129호/제2263호 제58조 ②를 위반한다:

#### C-L4-32 — layer4-evaluation-item-change-after-completion

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-evaluation-item-change-after-completion]] • **Verdict:** CORROBORATED (strong)

新KIATIS 성능개선 사업의 시험평가에서 평가 항목 변경은 다음과 같은 시간 순서를 보인다: 2019년 9월 5일 평가 항목 변경 요청 → 2019년 9월 11일 시험평가 종료 → 2019년 9월 19일 평가 항목 변경 승인. 국유단장이 결재한 승인 요청 공문(기록 제5,950쪽)은 게임이 끝난 후에 게임 규칙의 변경을 승인한 것이다. 이는 평가의 공정성을 근본적으로 파괴하는 시간 역전 조작이며, 책은 이를 "물리법칙 거스르기"로 명명한...

#### C-L4-33 — layer4-evidence-becomes-layer6-prosecution-tool

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-evidence-becomes-layer6-prosecution-tool]] • **Verdict:** CORROBORATED (strong)

국방정보화카르텔의 제4층위 조작 결과를 이어받은 군검찰단이 제6층위에서 희생양 만들기의 도구로 사용하였다. 그러나 제4층위의 조작을 증명하면 제6층위의 기소가 자동으로 붕괴하는 자기모순적 구조(self-trapping logic)가 형성된다. 검찰단이 자신들이 세운 논리에 스스로 갇히게 되는 것이다.

#### C-L4-34 — layer4-kida-workflow-omits-mnd-role

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-kida-workflow-omits-mnd-role]] • **Verdict:** CORROBORATED (strong)

KIDA 연구보고서의 국방정보시스템 업무흐름도(기록 제6,712쪽)에서 국방부(사업통제기관)의 역할이 완전히 누락되어 있다. 이 흐름도는 조작된 훈령 제2275호(2019.5.9., 국가법령센터 미등재)를 기초로 작성되었다.

#### C-L4-35 — layer4-old-new-kiatis-different-cyberspace

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-old-new-kiatis-different-cyberspace]] • **Verdict:** CORROBORATED (strong)

사이버공간은 민간, 공공, 국방 영역에 따라 수행 주체, 임무, 역할이 다르다. 舊KIATIS는 2007년부터 인터넷상에서(국방 인터넷 홈페이지 서버 → 전군 인터넷 통합 메일 서버) 운영되었다. 반면 新KIATIS는 DIDC 클라우드 기반의 국방망에서 구축되었다. 국방정보화업무훈령 제57조(시험평가 구분), 제58조(수행원칙: 개발·운용 분리 원칙), 제62조(운용시험평가: "실제 운용환경과 업무 절차를 반영")에 따르면, 운용시험평가는...

#### C-L4-36 — layer4-post-evaluation-illegal-control-transfer-to-gukyu-dan

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-post-evaluation-illegal-control-transfer-to-gukyu-dan]] • **Verdict:** CORROBORATED (strong)

新KIATIS 개발운용시험평가가 2019년 9월 11일 종료된 후, 8일 후인 **9월 19일 국유단장 명의로 평가 항목 변경이 승인**되었다. 이는 국유단이 스스로 **사업통제기관의 역할을 자임**한 것이며, 新KIATIS 사업 이전에 **국방부·국유단·국전원 간에 사업통제기관 권한이양에 대한 합의가 있었음을 시사**한다 (L4-013).

#### C-L4-37 — layer4-procedure-simplification-temporal-contradiction-2019-09

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-procedure-simplification-temporal-contradiction-2019-09]] • **Verdict:** CORROBORATED (strong)

2019년 9월 2일, 국방부 소프트웨어융합정책담당관 이지영(공문결재자-1)과 김수진(행정담당자-1)이 "정보시스템 구축 시험평가 절차 간소화 추진 계획 검토 요청"(기록 제2,853쪽~제2,858쪽)을 발송했다. 이 문서에는 두 가지 시간적 모순이 존재한다:

#### C-L4-38 — layer4-software-install-to-system-install-terminology-fabrication

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-software-install-to-system-install-terminology-fabrication]] • **Verdict:** CORROBORATED (strong)

국방정보화업무훈령 제76조(소프트웨어 개발 공정) ①항 12호는 제1775호(2015-01-27)부터 제2129호(2018-02-05)까지 **'소프트웨어 설치'**를 명시했다. 이 용어의 문법적 구조는 "(사업관리기관이) (개발된) 소프트웨어를 (해당) 시스템에 설치한다"이다. 그러나 제2842호(2023-09-20)에서 기존 13단계 절차가 5단계로 축소되면서 **'인도: 시스템 설치, 개발 및 운영 시험평가, 시스템 인수 지원'**으...

#### C-L4-39 — layer4-test-evaluation-separation-principle-directive-2129

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/layer4-test-evaluation-separation-principle-directive-2129]] • **Verdict:** CORROBORATED (strong)

新KIATIS 성능 개선 사업에 적용되는 시험평가 기준은 국방 정보화 업무 훈령 제2129호(2018년 2월 5일)이다. 이는 제안요청서(기록 제1,510쪽)와 국방부 검찰단의 피의자 신문조서(기록 제4,887쪽) 양쪽에서 확인된다.

#### C-L4-40 — mnd-fabricated-indo-stage-terminology-blame-shift

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/mnd-fabricated-indo-stage-terminology-blame-shift]] • **Verdict:** CORROBORATED (strong)

국방부가 2020년 8월 20일자 조작 공문 "국방정보시스템 시험평가 개선방안 의견수렴"에서 **기존 국방정보화업무훈령 어디에도 존재하지 않는 신규 용어 '인도 단계'를 도입**했다 (Record No. 4,763).

#### C-L4-41 — mnd-test-eval-simplification-timed-to-evaluation-day

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/mnd-test-eval-simplification-timed-to-evaluation-day]] • **Verdict:** CORROBORATED (strong)

국방부 소프트웨어융합정책담당관 이지영 (공문결재자-1)과 김수진 (행정담당자-1)이 2019년 9월 2일 13:39:35 — 新KIATIS 개발·운용시험평가 시작 당일 — 에 "정보시스템 구축 시험평가 절차 간소화 추진 계획 검토 요청"을 생산·발송하였다(기록 제2,853쪽).

#### C-L4-42 — mnd-test-evaluation-definition-manipulation

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/mnd-test-evaluation-definition-manipulation]] • **Verdict:** CORROBORATED (strong)

국방정보화업무훈령의 '별표1'에서 '시험평가'의 정의는 2016년 6월 16일(제1931호)부터 2025년 7월 9일(제3059호)까지 **단 한 번의 개정 없이 동일하게 유지**되어 왔다(기록 제9,003쪽~):

#### C-L4-43 — mnd-test-evaluation-improvement-retroactive-justification

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/mnd-test-evaluation-improvement-retroactive-justification]] • **Verdict:** CORROBORATED (strong)

2020년 8월 20일 "국방정보시스템 시험평가 개선방안 의견수렴" 공문(기록 제4,757쪽)은 2019년 新KIATIS 사업에서 발주 단계에 저지른 조작을 2020년 연구 결과로 포장하여 소급 정당화하려는 시도이다.

#### C-L4-44 — split-article-11-vocabulary-erasure

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/split-article-11-vocabulary-erasure]] • **Verdict:** CORROBORATED (strong)

훈령 제2436호에서 '사업통제기관'→'정보화기획관실', '사업주관기관'→'소요제기기관', '사업관리기관'→'집행기관'으로 3대 용어를 교체(기록 제8,260/9,008/8,902쪽). 기존 용어가 사라지면 新KIATIS에서 국유단이 불법 수행한 '사업통제기관' 역할의 위반 사실 자체가 지칭 불가능해진다. 어휘 수준의 증거 인멸.

#### C-L4-45 — split-kim-min-su-false-ignorance-vs-career

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/split-kim-min-su-false-ignorance-vs-career]] • **Verdict:** CORROBORATED (strong)

김민수는 '내가 그걸 어떻게 아니. 오기도 전에 일을'이라고 진술(기록 제11,055~11,056쪽). 그러나 경력기록(기록 제6,748/6,760/6,755쪽)은 2016년 해킹 당시 정보화기획실 재직, 2015~2017년 국전원 개발관리팀장으로 박성호와 근무. 무지 주장은 경력과 직접 모순되는 허위 진술.

#### C-L4-46 — split-temporal-reversal-2019-09-02-forgery

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/split-temporal-reversal-2019-09-02-forgery]] • **Verdict:** CORROBORATED (strong)

시험평가 절차 간소화 공문이 2019-09-02에 생산되었으나 MND 보고일은 2019-09-03으로 기록(기록 제2,858쪽). 생산일 이후의 보고일은 물리적으로 불가능하며, 2022년 수사 기간 중 소급 조작 가능성을 시사한다. 온-나라 시스템 유지보수 업체(핸디소프트)의 동조 하에 가능한 조작이다.

#### C-L4-47 — supervision-report-concealment-selective-circulation

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/supervision-report-concealment-selective-circulation]] • **Verdict:** CORROBORATED (strong)

감리 결과보고서(기록 제2,594쪽~제2,751쪽)에 기록된 사업 성공 증거 — "개발 관리의 우수성", "요구사항 기능의 완벽한 일치"(최초 150여 개), "추가 요구사항 80건의 부당성", "국유단 데이터 부재에 대한 정확한 기술적 분석" — 는 사업관리팀장(한지훈)의 전문성과 성공적 사업 관리를 객관적으로 증명하는 결정적 증거였다 (§3.4.6.5).

#### C-L4-48 — terminology-manipulation-role-concept-distortion

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/terminology-manipulation-role-concept-distortion]] • **Verdict:** CORROBORATED (strong)

2019년 2월 26일 제2263호부터 국방정보화업무훈령의 별표1에서 핵심 용어가 일괄 변경되었다: **"사업관리기관"이 "집행기관"으로, "사업주관기관"이 "소요제기기관"**으로 명칭이 교체되었다. 이는 단순한 용어 정리가 아닌, **新·舊KIATIS의 책임으로부터의 단절을 위하여 당시에 사용한 용어를 지우려는 의도**로 보인다.

#### C-L4-49 — xsyn-80items-additional-not-defects-triangulated

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/xsyn-80items-additional-not-defects-triangulated]] • **Verdict:** CORROBORATED (strong)

녹취록(raw/02)에서 한지훈은 '추가요구사항이에요 미흡사항이 아니고'라고 실시간 구분. 책(raw/01 §3.6.5.3.1)은 80건을 전력화 지연 수단으로 분석. 영장(raw/05)은 '개발상 하자를 은폐'로 규정. 3개 독립 소스(녹취, 책, 영장)가 동일 사안에 대해 삼각 확인: 80건=추가요구≠하자.

#### C-L4-50 — xsyn-directive-2436-retroactive-legal-basis

**Layer:** 4 • **Type:** see atom • **Atom:** [[claims/xsyn-directive-2436-retroactive-legal-basis]] • **Verdict:** CORROBORATED (strong)

검찰 불기소이유서(raw/05)는 제58조 ¶4를 인용하여 DT/OT 통합의 정당성을 주장하나, 이 '통합 원칙'은 제2436호(2020.6.4)에서야 도입. KIATIS 시험평가는 2019.9.2~11 실시. 검찰이 인용한 법적 근거가 행위 시점에 존재하지 않았다. 훈령 이력(raw/04), 검찰 문서(raw/05), 책 분석(raw/01 §3.4.7.3)의 세 소스가 동일한 시간적 모순을 삼각 확인.

#### Layer 5 — false power-abuse report + fabricated audit + recordings (36 new)

#### C-L5-07 — apt-human-targeting-3yr-11mo-personalized

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/apt-human-targeting-3yr-11mo-personalized]] • **Verdict:** CORROBORATED (strong)

2018년 12월 3일~2022년 10월 31일, 3년 11개월간 국가기관들이 한지훈을 지속적으로 추적·압박하였다. 아이히만이 피해자를 개인적으로 알지 못했던 것과 달리, 가해자들은 피해자의 32년 군 경력, 성격(INTJ), 학사장교 출신이라는 점까지 분석한 후 맞춤형 공격을 가했다. 이는 조직적 스토킹(Organizational Stalking)이다.

#### C-L5-08 — contradiction-fabricated-warning-wrong-title

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/contradiction-fabricated-warning-wrong-title]] • **Verdict:** CORROBORATED (strong)

법무관리관실 경고장(2022.5.23)은 한지훈의 직위를 '행정정보계획팀장'으로 기재하였으나, 이 직위는 자원정보화과에도 행정정보화과에도 존재하지 않는다. 한지훈의 2022.2.28 기준 공식 직위는 '자원정보화과 국방정보화사업담당'(기록 제1,586쪽). 동일한 오류가 피의자신문조서(기록 제4,878쪽)에도 나타나 — 카르텔 구성원이 비공식 명칭을 법무관리관실과 군검찰단에 동시 전달한 것.

#### C-L5-09 — harassment-complaint-48hrs-premeditated-isolation

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/harassment-complaint-48hrs-premeditated-isolation]] • **Verdict:** CORROBORATED (strong)

2022년 2월 8일, 新KIATIS 관련 국유단·국전원 실무자·업체 회의에서 박서준 (갑질신고자-1)은 한지훈과 정상적으로 협력하여 이지영에게 공동 보고하였다(기록 제11,026쪽~제11,027쪽). 이 회의에서 국유단 발굴팀장은 VPN 도입을 "해괴한"(absurd)으로 평가하여 舊KIATIS의 인터넷 운용을 확인하였다(기록 제11,334쪽).

#### C-L5-10 — investigation-bureau-dark-audit-as-fraud-model

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/investigation-bureau-dark-audit-as-fraud-model]] • **Verdict:** CORROBORATED (strong)

§3.5.2.3.1은 조사본부의 허위 갑질조사를 "깜깜이 수사"로 규정하고, 이것이 사기수사의 전형적 모델임을 세 가지 차원의 어둠(darkness)을 통해 증명한다:

#### C-L5-11 — investigation-bureau-fake-harassment-7-phase-process

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/investigation-bureau-fake-harassment-7-phase-process]] • **Verdict:** CORROBORATED (strong)

조사본부의 허위 갑질 조사는 7단계 프로세스를 따랐다 (§3.5.2.3.2):

#### C-L5-12 — kim-min-su-apology-evidence-manufacturing

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/kim-min-su-apology-evidence-manufacturing]] • **Verdict:** CORROBORATED (strong)

2022-02-21, 김민수는 감사실과 사전 조율 후 한지훈에게 '사과하려는 증거가 되게끔 메시지 보내고', '두 번 정도 조치를 해 놔'라고 지시. '감사조치 등등은 내가 알아서 할 거고. 당신 모른척하고'로 이중 트랙(감사실 조율 + 피해자 증거 제조)을 운영.

#### C-L5-13 — layer5-audit-result-falsity-and-collusion-proof

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-audit-result-falsity-and-collusion-proof]] • **Verdict:** CORROBORATED (strong)

조사본부의 조사 결과는 허위이며, 이는 **6가지 독립적 증명**에 의해 입증된다:

#### C-L5-14 — layer5-choi-dongwook-dual-role-lawyer-or-conspirator

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-choi-dongwook-dual-role-lawyer-or-conspirator]] • **Verdict:** CORROBORATED (strong)

변호사 최동욱은 표면적으로는 한지훈의 변호인으로서 대리하였으나, 실제로는 국방부 검찰단의 대리 역할을 수행하였다. 이는 다음 세 가지 증거에 의해 뒷받침된다.

#### C-L5-15 — layer5-choi-youngsu-testimony-exposes-joseo-fabrication

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-choi-youngsu-testimony-exposes-joseo-fabrication]] • **Verdict:** CORROBORATED (strong)

전임 행정정보화과장 최영수 서기관(숭실대 박사, IT 전문가)은 2022년 10월 12일 증거 기록에서 군검찰 참고인 조사의 조서 조작 실태를 증언했다. 그의 증언은 세 가지 체계적 조작 기법을 폭로한다.

#### C-L5-16 — layer5-collective-witness-abandonment-selective-memory

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-collective-witness-abandonment-selective-memory]] • **Verdict:** CORROBORATED (strong)

오현수 (실무자-5)는 한지훈에 대한 직접적 지식이 있음에도 확인서 제공을 거부하며 '엮기기 싫다'고 진술하였다. 이태호 (평가위원장-1)는 이를 '선택적 기억'으로 진단하였다 — 동료들은 기억하지만 증언하지 않기로 선택한 것이다. 오현수, 이준호, 최영규, 윤도현, 장우진 등 5인 이상의 동시 침묵은 우연이 아닌 조직적 합의이다.

#### C-L5-17 — layer5-evidence-destruction-frame-behavioral-paralysis

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-evidence-destruction-frame-behavioral-paralysis]] • **Verdict:** CORROBORATED (strong)

김민수 (핵심 의사결정자-1)는 '증거인멸 조심하라'라는 화행으로 한지훈의 모든 정당한 행위(문서 확인, 동료 연락, 도서 열람)를 범죄 행위로 재정의하여 전면적 행동 마비를 달성하였다. 3명의 문서 접근이 차단되었으며('세명 다 열람금지'), 이는 사업이 이미 종료된 이후에도 유지되었다.

#### C-L5-18 — layer5-excavation-team-old-kiatis-internet-proof

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-excavation-team-old-kiatis-internet-proof]] • **Verdict:** CORROBORATED (strong)

국유단의 핵심 업무인 유해 발굴 작업은 비무장지대(DMZ)와 산악지역 등 야외에서 수행된다. 이 현장에서는 국방망(인트라넷) 접속이 물리적으로 불가능하므로, 현장 데이터 입력과 사진 업로드는 인터넷을 통해 수행할 수밖에 없다.

#### C-L5-19 — layer5-false-gapjil-report-organizational-conspiracy-structure

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-false-gapjil-report-organizational-conspiracy-structure]] • **Verdict:** CORROBORATED (strong)

허위 갑질 신고는 **3단계 공모 구조**로 작동했다:

#### C-L5-20 — layer5-fraud-investigation-triangular-model

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-fraud-investigation-triangular-model]] • **Verdict:** CORROBORATED (strong)

§3.5.2.4는 조사본부·법무관리관실·국전원의 삼각 공모를 **사기수사의 전형적 모델**로 정의한다. §3.5.2.4.1의 김민수 자백("충분히 애기하고") 이외에, 세 가지 구조적 요소가 이 모델을 구성한다:

#### C-L5-21 — layer5-historical-significance-apt-human-targeting

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-historical-significance-apt-human-targeting]] • **Verdict:** CORROBORATED (strong)

제5층위(§3.5.1.8)는 세 가지 역사적 의미를 갖는다. 첫째, 사이버공간의 APT 스타일 해킹 공격이 그 경계를 넘어 물리적 공간의 인간을 직접 표적으로 삼은 새로운 유형의 공격이 출현했음을 실증한다. 거대 권력기관의 조직이 하나의 개인을 표적으로 삼아 장기간(6개월), 다수 이해관계자(10+명), 심리전 기법을 동원하여 공격한 전형적 사례다. 둘째, 조직 화행론(organizational speech-act theory)의 실증적 ...

#### C-L5-22 — layer5-investigation-bureau-pre-collusion-triple-conspiracy

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-investigation-bureau-pre-collusion-triple-conspiracy]] • **Verdict:** CORROBORATED (strong)

2022년 3월 24일, 이지영 (공문결재자-1)은 한지훈에게 "감사관실에서 양측에 다 얘기하지 말라는 거를 저한테 애기했기 때문에 제가 어떻게 할 수 없어요"라고 말했다(기록 제11,062쪽). 이 발언은 **거짓 귀속(false attribution)**이다 — 이지영 자신이 한지훈과 박서준 사이의 정보 교환을 차단하기 위해 감사관실(조사본부)을 핑계로 사용한 것이었다. "양측에 마찬가지"라는 발언은 **거짓 중립성(false neut...

#### C-L5-23 — layer5-kakaotalk-silence-proves-normal-attendance

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-kakaotalk-silence-proves-normal-attendance]] • **Verdict:** CORROBORATED (strong)

2019년부터 2022년까지의 행정정보화과 단톡방 기록(기록 제1,881쪽부터)에 의하면, 과의 다른 실무자들은 출근 지연, 병가, 조기 퇴근, 재택 등을 한 줄 카톡으로 수시 보고하였으나, 한지훈은 **3년간 단 한 건도** 그러한 기록이 없다.

#### C-L5-24 — layer5-kim-min-su-conspiracy-admission-sufficiently-discussed

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-kim-min-su-conspiracy-admission-sufficiently-discussed]] • **Verdict:** CORROBORATED (strong)

2022년 5월 4일 증거기록에서, 김민수(원장-1)는 "이거는 감사관하고도 내가 충분히 애기하고 최종 경고는 감사관이 거다 그거였는데"(기록 제11,069쪽)라고 발언했다. 이 발언은 세 가지 사실을 증명한다:

#### C-L5-25 — layer5-kim-min-su-discharge-ultimatum-escalation

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-kim-min-su-discharge-ultimatum-escalation]] • **Verdict:** CORROBORATED (strong)

김민수는 이승우로부터 출퇴근 문제를 보고받고 "이건 심각하다 이것 징계밖에 없다 징계다"라고 발언했다. 이 발언은 **3단계 발화수반력(illocutionary force) 증폭**을 보인다:

#### C-L5-26 — layer5-kyungbuk-network-conflict-of-interest

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-kyungbuk-network-conflict-of-interest]] • **Verdict:** CORROBORATED (strong)

경북대 동문 네트워크는 2016년 DIDC 해킹 사건 은폐와 2022년 한지훈 표적수사의 핵심 연결고리이다. 이 네트워크의 구성원과 역할은 다음과 같다:

#### C-L5-27 — layer5-language-weaponization-silence-as-murder

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-language-weaponization-silence-as-murder]] • **Verdict:** CORROBORATED (strong)

국방정보화카르텔은 언어를 조직적 파괴의 무기로 사용하였다(기록 제3,700쪽 이하). Austin의 화행이론(Speech Act Theory)의 세 차원에서 분석:

#### C-L5-28 — layer5-lee-ji-young-false-dinner-testimony-three-witnesses

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-lee-ji-young-false-dinner-testimony-three-witnesses]] • **Verdict:** CORROBORATED (strong)

이지영 (공문결재자-1)은 2022년 3월 25일 조사본부 조사에서 한지훈이 **"저녁식사를 보고하지 않고 오후 5시 반에 나갔다"**고 거짓 진술했다. 이승우 사무관이 즉각 "징계 사유"로 판정했고, 김민수 원장이 "이건 심각하다 징계다"로 확정했다. 그러나 이 3인의 조율된 거짓 진술은 **3명의 독립 증인**에 의해 완전히 붕괴되었다:

#### C-L5-29 — layer5-lee-taeho-testimony-work-dumping-exploitation

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-lee-taeho-testimony-work-dumping-exploitation]] • **Verdict:** CORROBORATED (strong)

이태호 (평가위원장-1)는 2022-09-01 대화에서 국전원 공무원들이 군인의 복종 문화를 체계적으로 악용하여 업무를 떠넘겼다고 증언하였다: '현역들은 몸이 으스러져도 주면 하잖아 그런 거를 교묘히 이용하는 거죠'. 이로 인해 한지훈은 14개 사업 중 7개를 매일 14-15시간 근무하며 3년간 수행하였다.

#### C-L5-30 — layer5-park-seojun-gaslighting-victim-or-accomplice

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-park-seojun-gaslighting-victim-or-accomplice]] • **Verdict:** CORROBORATED (strong)

박서준의 발화는 2022년 2월 8일 KIATIS 토의를 전후로 극적으로 변화했다. 이 변화는 박서준이 자발적 신고자가 아니라 조종된 도구(coached instrument)였음을 시사한다.

#### C-L5-31 — layer5-reporter-3stage-statement-change

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-reporter-3stage-statement-change]] • **Verdict:** CORROBORATED (strong)

갑질 신고에서 박서준 (갑질신고자-1)의 진술이 3단계로 변화한다:

#### C-L5-32 — layer5-reversed-truth-nine-evidence-rebuttal

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-reversed-truth-nine-evidence-rebuttal]] • **Verdict:** CORROBORATED (strong)

한지훈의 2022-04-04 소명서와 2022-03-15 반박논증은 9개 범주의 객관적 증거를 통해 허위 갑질 신고가 역전된 진실임을 증명한다. 실제 직장 내 괴롭힘(업무 불균형, 책임전가, 인권침해, 심리적 학대, 사회적 고립)은 국전원이 한지훈에게 가한 것이지, 한지훈이 박서준에게 가한 것이 아니다.

#### C-L5-33 — layer5-six-month-witness-destruction-tactics

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-six-month-witness-destruction-tactics]] • **Verdict:** CORROBORATED (strong)

2022년 2월 21일부터 9월까지 6개월간, 한지훈은 4차례 독방을 전전하며 물리적, 심리적, 사회적 학대를 당했다. 이는 단순한 갑질 조사 중 분리 조치가 아니라, 2016년 DIDC 해킹 사건의 진실을 아는 증인을 체계적으로 파괴하기 위한 전술이었다.

#### C-L5-34 — layer5-triangular-collusion-speech-act-timeline

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-triangular-collusion-speech-act-timeline]] • **Verdict:** CORROBORATED (strong)

세 조직(국전원, 조사본부, 법무관리관실) 사이의 공모는 **발화 패턴을 통해 4단계 시간 조율**로 증명된다:

#### C-L5-35 — layer5-yang-mi-suk-silence-as-active-complicity

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/layer5-yang-mi-suk-silence-as-active-complicity]] • **Verdict:** CORROBORATED (strong)

주무관 양미숙은 한지훈 팀의 **출퇴근 관리 담당**이었다. 양미숙은 한지훈이 매일 아침 7시 이전에 출근하여 저녁 21~22시에 퇴근한다는 것을 알고 있었다. 한지훈이 오후 5시 반에 과장에게 보고하고 저녁 식사 후 복귀하여 저녁 9시 이후까지 근무한 사실을 팀원 전체가 알고 있었다. 단톡방에서 자정이 넘어서도 장애 조치를 하고, 휴가 중에도 장애 조치를 수행한 기록이 있었다.

#### C-L5-36 — lee-ji-young-double-play-park-seo-jun-incitement-han-ji-hoon-blocking

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/lee-ji-young-double-play-park-seo-jun-incitement-han-ji-hoon-blocking]] • **Verdict:** CORROBORATED (strong)

이지영 (공문결재자-1)은 박서준과 한지훈을 상대로 방향별 차별적 발화 전략, 즉 이중 플레이를 구사했다 (§3.5.3.1.2).

#### C-L5-37 — lee-jiyoung-covert-sabotage-confirmed-by-kim-minsu

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/lee-jiyoung-covert-sabotage-confirmed-by-kim-minsu]] • **Verdict:** CORROBORATED (strong)

2022-02-23, 김민수는 한지훈에게 이지영의 이면 행위를 폭로: '실제로 과장이 어떻게 하고 있는 거 같애? 당신 말에 반대로 하고 있어', '겉에 보이는 모습과 실제로 해주는 거 정 반대다'. 김민수가 이를 알고 있다는 것 자체가 공모 관계의 증거이다.

#### C-L5-38 — lee-jiyoung-jikgwon-josa-flip-flop-hours

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/lee-jiyoung-jikgwon-josa-flip-flop-hours]] • **Verdict:** CORROBORATED (strong)

이지영은 2022-02-21 녹취019에서 '인사TF장이 직권조사 의뢰를 하는 게 맞다고 조언했다'고 전달. 수시간 후 녹취020에서 '그건 또 아니래요. 제가 한 말은 없었던 거로 하시죠'로 완전 번복. 상위 의사결정에 의해 직권조사 경로가 즉시 차단됨.

#### C-L5-39 — split-kim-min-su-organizational-support-cutoff

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/split-kim-min-su-organizational-support-cutoff]] • **Verdict:** CORROBORATED (strong)

김민수는 정리11 발언3에서 '원에서 도와줄 수 없고 네가 책임져라'로 조직적 지원을 차단하여 한지훈을 고립. 사업관리 전문기관장으로서 부하 장교에 대한 조직적 보호 의무 방기와 동시에 전적인 개인 책임 전가.

#### C-L5-40 — split-lee-jiyoung-5min-triple-reversal

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/split-lee-jiyoung-5min-triple-reversal]] • **Verdict:** CORROBORATED (strong)

2022-02-21 이지영이 5분 내 3회 번복: '원 차원에서 신고'→'직권 조사 의뢰'→'직권 조사 아니래요 없었던 걸로'(기록 제11,064쪽). 조직→직권→개인으로의 변경은 김민수와 실시간 협의하며 방침을 결정한 증거. '없었던 걸로'는 의사결정 과정 자체의 은폐 시도.

#### C-L5-41 — split-post-collapse-escalation-to-prosecution

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/split-post-collapse-escalation-to-prosecution]] • **Verdict:** CORROBORATED (strong)

업체 확인서로 출퇴근 조작이 붕괴된 후, 정상적이라면 경고장 철회·이지영 문책이 이루어져야 했다. 그러나 5단계 대응 실행: 조작 실패 은폐→이지영 미문책→경고장 유지→다른 사유 추가→군검찰 표적수사 전환(2022.4.25). 공모의 부분적 실패가 축소가 아닌 확대(escalation)로 이어짐.

#### C-L5-42 — warning-letter-reflects-only-lee-jiyoung

**Layer:** 5 • **Type:** see atom • **Atom:** [[claims/warning-letter-reflects-only-lee-jiyoung]] • **Verdict:** CORROBORATED (strong)

2022년 5월 23일 국방부 법무관리관실이 발부한 경고장(기록 제3,945쪽~제3,946쪽, 제4,064쪽)에 대한 분석 결과:

#### Layer 6 — military prosecutor investigation + fraud (49 new)

#### C-L6-10 — choi-dongwook-resignation-threat-coercive-control

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/choi-dongwook-resignation-threat-coercive-control]] • **Verdict:** CORROBORATED (strong)

최동욱 변호사는 한지훈이 독자적으로 사건 자료를 정리하여 소명하겠다고 주장할 때마다 '나 사임해요. 대리인 안할거예요'라고 사임 위협으로 응답하여, 의뢰인의 자율적 방어 활동을 체계적으로 억제하였다. 모든 방어 활동을 변호사를 통해서만 하도록 강제하면서도, 변호사 자신은 사건의 기술적 실체를 이해하지 못했다.

#### C-L6-11 — choi-dongwook-technical-ignorance-despite-months

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/choi-dongwook-technical-ignorance-despite-months]] • **Verdict:** CORROBORATED (strong)

최동욱 변호사는 수개월간 한지훈을 수임하면서도 개발시험평가/운영시험평가 구분, 국방정보화업무훈령 역할 정의, 제안요청서 VPN 제외 조항 등 사건의 기술적 실체를 전혀 파악하지 않았다. 한지훈: '장로님은 전혀 내용을 모르시면서... 이천만원 넘게 주고 하는데, 내용도 모르시고 판단이 안 서요?' 최동욱은 '산출물'이 무엇인지도 모른다고 인정.

#### C-L6-12 — contradiction-selective-criminalization-approval-chain

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/contradiction-selective-criminalization-approval-chain]] • **Verdict:** CORROBORATED (strong)

방화벽 정책적용 공문의 결재선(기안자 이준호, 검토자 한지훈, 결재자 최영수) 중 중간 검토자만 피의자 지정. 최종 결재자(30년 IT 전문가, 서기관)는 참고인, 기안자는 배제. 최영수는 5시간 참고인 조사에서 방화벽 포트 개방의 기술적 정당성을 진술하였으나 검찰은 이를 반박하지 못함. 결재선 내 선택적 범죄자 만들기 = 표적수사.

#### C-L6-13 — cross-layer-witness-destroy-then-summon-pipeline

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/cross-layer-witness-destroy-then-summon-pipeline]] • **Verdict:** CORROBORATED (strong)

Layer 5에서 6개월간 체계적 증인 파괴 전술(독방 격리, PC 차단, 동료 침묵 유도)을 실행한 후, Layer 6에서 동일 조직이 '파괴된' 증인들을 참고인으로 소환. L5 증인 파괴 → L6 증인 활용의 순차 파이프라인: 먼저 독립적 증언 능력을 파괴한 후, 조직 서사에 순응하는 증언만 수확.

#### C-L6-14 — firewall-port-opening-standard-it-procedure

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/firewall-port-opening-standard-it-procedure]] • **Verdict:** CORROBORATED (strong)

군검찰단이 "불법적 방화벽 개방 → 불법적 DB 접속"으로 기소한 행위는 실제로는 국전원↔DIDC 1센터 간의 표준 방화벽 정책 적용 요청 절차이다.

#### C-L6-15 — four-kiatis-environments-non-identical

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/four-kiatis-environments-non-identical]] • **Verdict:** CORROBORATED (strong)

정리04에 따르면 4개의 KIATIS 관련 환경은 모두 서로 비동일하다:

#### C-L6-16 — gukyu-dan-data-absence-delays-new-kiatis

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/gukyu-dan-data-absence-delays-new-kiatis]] • **Verdict:** CORROBORATED (strong)

§3.6.5.1.1에 따르면, 新KIATIS가 2019년 9월 개발운용시험평가에서 99.7점으로 "군사용 적합" 판정을 받았음에도 2022년 4월까지 전력화되지 못한 것은 기술적 한계나 예산 부족이 아닌, 국방부 정보화기획관실을 중심으로 한 국방정보화카르텔의 의도적 조작의 결과이다.

#### C-L6-17 — interrogation-son-schizophrenia-prosecution-aware

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/interrogation-son-schizophrenia-prosecution-aware]] • **Verdict:** CORROBORATED (strong)

2022-09-02 피의자신문에서 건강상태 질문에 한지훈은 아들이 수사로 인해 조현병(schizophrenia) 진단을 받았고, 안동·청송에서 경찰에 발견되었으며, 가족이 '풍지 박살'났다고 진술. '죽고 싶은 마음 뿐입니다'라고 공식 기록에 남겼다. 이 공식 신문조서가 검찰의 심각한 가족 피해 인지의 공식 타임스탬프이다. 그럼에도 수사는 5주간 더 계속되어 10.07 기소유예로 종결.

#### C-L6-18 — interrogation-zero-of-14-projects-measured-vpn

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/interrogation-zero-of-14-projects-measured-vpn]] • **Verdict:** CORROBORATED (strong)

한지훈은 피의자신문에서 '2019에 수행한 14개 사업에 대해 DIDC에서 관리하는 VPN 등 보안장비의 성능을 측정한 것은 없는 것으로 알고 있습니다'라고 진술. 14개 사업 중 VPN 성능 측정을 실시한 사업이 0건이라는 것은, 검찰이 KIATIS 사업에만 VPN 관련 의무를 부과한 것이 제도적 전례 없는 차별적 적용(selective application)임을 입증한다.

#### C-L6-19 — investigator-admits-warrant-phantom-reference

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/investigator-admits-warrant-phantom-reference]] • **Verdict:** CORROBORATED (strong)

수사관 진상호가 2022-08-31 통화에서, 영장의 '가. 위계공무집행방해' 항이 '위 1.나항에 기재된'을 참조하나 해당 '위 1.나항'이 영장에 존재하지 않음을 인정. '기재를 굳이 할 필요가 없어서 하지 않았습니다'라고 진술. 또한 수사개시통보서는 지휘관(김민수)에게만 전달하도록 법령 규정되어 있으나, 김민수가 한지훈에게 직접 전달하면서 '니가 다 책임져라'고 통보한 사실이 확인됨.

#### C-L6-20 — kim-min-su-post-prosecution-personal-problem-framing

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/kim-min-su-post-prosecution-personal-problem-framing]] • **Verdict:** CORROBORATED (strong)

국전원장 김민수 (핵심 의사결정자-1)는 2022-10-13 녹음 대화에서 기소유예를 '가장 최선이 나온 거 같은데'라고 평가하고, '이걸로 종결이지'로 조직의 책임을 거부하였다. 동시에 한지훈에게 '너는 나한테 이거 죄송합니다 할 거 없니?'라고 사과를 요구하고, '자신부터 잘 챙겨라'로 협박성 발언을 하였다. 이는 카르텔 수장이 기소유예 결과를 이용하여 피해자에 대한 지속적 통제를 유지하는 행위이다.

#### C-L6-21 — kim-min-su-vpn-speed-no-impact-admission

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/kim-min-su-vpn-speed-no-impact-admission]] • **Verdict:** CORROBORATED (strong)

김민수 (핵심 의사결정자-1)는 2022-10-13 녹음에서 'VPN을 연결해서 속도가 뚝 떨어지진 않는다'고 발언. 이는 군검찰이 적용한 위계공무집행방해의 핵심 논거(VPN 미사용으로 속도 차이 발생→시험결과 왜곡)를 국전원장 본인이 부정하는 발언이다.

#### C-L6-22 — layer6-997-reframed-as-deficient-development

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/layer6-997-reframed-as-deficient-development]] • **Verdict:** CORROBORATED (strong)

군검찰단은 99.73점 '군사용 적합' 판정을 받은 新KIATIS를 '부실개발'로 재프레이밍하였다. 이 재프레이밍은 세 겹의 서사 조작으로 구성된다:

#### C-L6-23 — layer6-cartel-network-structure-four-documents-four-keywords

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/layer6-cartel-network-structure-four-documents-four-keywords]] • **Verdict:** CORROBORATED (strong)

군 검찰단의 한지훈에 대한 사기수사는 **4대 문서**와 **4대 키워드**로 구조적으로 정의된다.

#### C-L6-24 — layer6-didc-center1-true-hacking-host

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/layer6-didc-center1-true-hacking-host]] • **Verdict:** CORROBORATED (strong)

제6층위 정리01에 따르면, 2016년 북한 해킹의 실제 최대 숙주(最大 宿主)는 공개적으로 발표된 DIDC 2센터(계룡대)가 아닌 DIDC 1센터(용인)이다. 舊KIATIS가 인터넷 홈페이지 서버 내에서 15년간 VPN 없이 운용되었고, 이 서버가 DIDC 1센터에 위치하였기 때문이다. 군검찰단은 이 사실의 은폐를 위해 사기수사를 자행한 '전범기관'(정리02)이다.

#### C-L6-25 — layer6-gis-server-budget-intentional-omission

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/layer6-gis-server-budget-intentional-omission]] • **Verdict:** CORROBORATED (strong)

新KIATIS의 GIS(지리정보시스템) 서버 기능 추가에 필요한 예산이 의도적으로 미반영되었다(기록 제4,826쪽). 이 예산 미반영은 전력화 지연의 핵심 원인 중 하나이나, 군검찰단의 수사에서는 이를 개발관리팀장의 "부실개발"로 귀결시키는 데 활용되었다(기록 제4,890쪽, 제4,898쪽, 제4,903쪽).

#### C-L6-26 — layer6-judicial-murder-permanent-family-destruction

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/layer6-judicial-murder-permanent-family-destruction]] • **Verdict:** CORROBORATED (strong)

국방부 검찰단은 올바르고 정의롭게 임무를 수행한 군인에게 의도적 표적화로 사법살인을 자행하여 영구적 피해를 가하였다. 가족공동체에는 전면적 파괴의 칼을 휘둘러 회복 불가능한 고통을 안고 살아가게 만든 사기 수사의 전범기관이다.

#### C-L6-27 — layer6-phase1-success-result-neutralization-2019-2020

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/layer6-phase1-success-result-neutralization-2019-2020]] • **Verdict:** CORROBORATED (strong)

시험평가위원회가 2019년 9월 新KIATIS에 대해 99.7점의 성공적 평가를 내린 이후, 전력화 지연의 첫 번째 단계는 이 성공 결과를 무력화하는 것이었다 (§3.6.5.3.1).

#### C-L6-28 — layer6-phase2-blame-shift-2020-2021

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/layer6-phase2-blame-shift-2020-2021]] • **Verdict:** CORROBORATED (strong)

2020~2021년 전력화 지연의 2단계에서, 80건의 추가 요구사항을 빌미로 GIS 성능 문제, Active-X 제거에 따른 속도 저하, VPN에 대한 국유단의 부정적 견해, DIDC의 OTP 카드 의도적 미제공(2019.8~2021.4.15, 1년 8개월 이상) 등 **실제로는 하드웨어 업그레이드나 최적화로 해결 가능한 일반적 기술 이슈**들이 사업관리팀장의 전적 책임으로 전가되었다 (기록 제4,671쪽~제4,682쪽). 국전원은 김민...

#### C-L6-29 — layer6-phase3-trap-activation-criminalization-2021-2022

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/layer6-phase3-trap-activation-criminalization-2021-2022]] • **Verdict:** CORROBORATED (strong)

新KIATIS 전력화 지연의 **시간적 메커니즘**(§3.6.5.3)은 3단계로 구성된다. 1단계(2019.9~2020)는 99.7점 성공 결과 무력화, 2단계(2020~2021)는 문제 확산과 책임 전가, 3단계(2021~2022.4)는 **이지영 (공문결재자-1)**의 2022년 4월 **3.9억원 추가 예산 요구공문**으로 함정을 발동시키고 전력화 지연을 **범죄 문제**로 전환하는 것이었다.

#### C-L6-30 — layer6-prosecutor-violated-anti-corruption-five-principles

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/layer6-prosecutor-violated-anti-corruption-five-principles]] • **Verdict:** CORROBORATED (strong)

군 검찰단의 新KIATIS 수사는 자체 준거 규범인 **"군 수사 절차상 인권 보호 등에 관한 훈령"(제2502호, 2020-12-30, 기록 제00118쪽/제00187쪽)의 반부패 수사 5대 원칙 전부를 정반대로 위반**했다:

#### C-L6-31 — lee-junho-false-testimony-contradicted-by-own-doc

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/lee-junho-false-testimony-contradicted-by-own-doc]] • **Verdict:** CORROBORATED (strong)

이준호 (공모자-1)의 참고인 진술(기록 제1,171쪽): "실제 기반운영환경에서는 DB에 바로 접근하는 방식으로 운용할 수 없다."

#### C-L6-32 — mnd-control-agency-role-evasion-deployment-delay

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/mnd-control-agency-role-evasion-deployment-delay]] • **Verdict:** CORROBORATED (strong)

新KIATIS 전력화 지연의 세 번째 구조적 원인은 **국방부 정보화기획관실**이 사업통제기관으로서의 역할을, **국전원**에서는 사업관리기관으로서의 역할을 **의도적으로 회피**한 것이다. 국방정보화업무훈령에 따르면 사업통제기관은 사업 추진 간 조정·통제·지원하는 기관으로서 사업의 성공적 완료와 전력화에 대한 최종 책임을 진다 (훈령 제11조, 제23조, 제24조).

#### C-L6-33 — non-prosecution-admits-test-not-actual-but-blames-only-victim

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/non-prosecution-admits-test-not-actual-but-blames-only-victim]] • **Verdict:** CORROBORATED (strong)

불기소결정서 IV.1.카.(2)에서 'KIATIS 시험평가는 SSL-VPN을 적용하여 실제 조성된 기반운영 환경에서 실시되었어야 함에도 불구하고 이를 준수하지 않은 채 실시된 사실이 인정된다'고 명시. 그러나 이 인정을 한지훈에 대한 기소유예에만 사용하고, VPN 미적용 환경을 만든 주체(舊KIATIS 15년 운영자, RFP에 VPN을 '해당없음'으로 기재한 자, 사업통제기관 역할을 회피한 국방부)는 수사하지 않았다.

#### C-L6-34 — non-prosecution-mitigating-factors-describe-normal-work

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/non-prosecution-mitigating-factors-describe-normal-work]] • **Verdict:** CORROBORATED (strong)

불기소결정서 참작사유(IV.1.카.(8))에서 '피의자는 아무런 전과가 없고, KIATIS개발을 완수하고자 개발 업체들과 지속 소통한 점이 인정되며, 프로그램의 완성과 사업 일정을 모두 충족시키기 위한 목적으로 동기에 참작할 사유가 있다'고 기재. 이 참작사유는 '업체와 지속 소통', '프로그램 완성', '일정 충족' 등 정상적 사업관리 행위를 기술하고 있으며, 이 자체가 범죄 의도(고의)의 부재를 자인하는 것이다.

#### C-L6-35 — prosecution-article-57-directive-laundering

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-article-57-directive-laundering]] • **Verdict:** CORROBORATED (strong)

검찰단은 운용시험평가 정의에서 '사업주관기관 주관 하에'를 삭제한 조작 훈령(제2275호, 2019.5.9)을 기소의 법적 근거로 사용하였다. 이 삭제는 실제로는 제2436호(2020.6.4)에서야 최초 도입된 변경이며, 제2275호에서의 사전 등장은 시간역전을 통한 훈령 세탁(directive laundering)이다. '사업주관기관 주관 하에' 삭제는 기관 책임을 개인 책임으로 전환하는 핵심 조작이다.

#### C-L6-36 — prosecution-baeim-charge-self-contradictory

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-baeim-charge-self-contradictory]] • **Verdict:** CORROBORATED (strong)

군검찰단의 업무상배임 혐의는 내적 모순으로 인해 자기 붕괴한다:

#### C-L6-37 — prosecution-distorts-operational-vs-test-environment

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-distorts-operational-vs-test-environment]] • **Verdict:** CORROBORATED (strong)

군 검찰단이 생산한 4개 핵심 수사 문서가 '실제 운영 대 시험평가' 환경의 동일성과 차이를 공통으로 왜곡하였다:

#### C-L6-38 — prosecution-false-document-charge-self-contradiction

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-false-document-charge-self-contradiction]] • **Verdict:** CORROBORATED (strong)

군검찰단의 불기소결정서(L6-031-1)에서 **허위공문서작성** 혐의에 대해, 군검찰은 이준호 (공모자-1)가 작성한 3건의 문서를 지목하였다:

#### C-L6-39 — prosecution-firewall-port-opening-contradicts-it-standard-practice

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-firewall-port-opening-contradicts-it-standard-practice]] • **Verdict:** CORROBORATED (strong)

군검찰은 시험평가 환경에서의 방화벽 포트 개방을 "위계에 의한 공무집행방해"로 규정했으나, 방화벽 포트 개방은 **전 세계 IT 업계의 표준 실무**이다. 개발 및 시험 환경에서 필요한 포트를 개방하여 테스트하고 운영 단계에서 보안을 강화하는 것은 Microsoft, Amazon, Google 등 모든 IT 기업이 사용하는 표준 방법이다. 2019년부터 2022년까지 국전원 단톡방에서도, 장애 발생 시 처리에서도 동일한 방식으로 수행되었다.

#### C-L6-40 — prosecution-fraud-meets-criminal-elements

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-fraud-meets-criminal-elements]] • **Verdict:** CORROBORATED (strong)

군검찰단의 사기수사는 형사범죄와 사이버범죄의 성립요소를 동시에 충족하는 복합범죄(hybrid state crime)로 분류된다.

#### C-L6-41 — prosecution-identity-fallacy-deception-technique

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-identity-fallacy-deception-technique]] • **Verdict:** CORROBORATED (strong)

군 검찰단은 압수수색 영장, 수사 개시, 불기소 이유서 문서에서 동일성 오류(Identity Fallacy)를 체계적으로 자행했다. 이 기만 기술은 세 가지 차원에서 작동한다:

#### C-L6-42 — prosecution-investigator-ignorance-environment

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-investigator-ignorance-environment]] • **Verdict:** CORROBORATED (strong)

군검찰단 수사관은 2022-09-07 한지훈과의 녹음 통화에서 시험평가 환경과 운영환경의 '차이'가 구체적으로 무엇인지 정의하지 못하였다. 한지훈이 직접 네트워크·서버·PC의 3요소 IT 환경 모델을 교육해야 했다. 이는 검찰단이 기본적인 기술 사실을 이해하지 못한 상태에서 수사를 개시한 증거이다.

#### C-L6-43 — prosecution-knew-innocence-continued-case

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-knew-innocence-continued-case]] • **Verdict:** CORROBORATED (strong)

군검찰단 수사관은 한지훈의 무혐의를 인지하면서도 수사를 계속하였다(기록 제11,188쪽의 대화에서 확인).

#### C-L6-44 — prosecution-non-prosecution-identity-error-fraud

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-non-prosecution-identity-error-fraud]] • **Verdict:** CORROBORATED (strong)

군검찰단의 불기소결정서(2022년 형제66호)는 **동일성 오류(identity error)**를 핵심 기만기술로 사용하여, 2019년 시험평가 환경(新KIATIS Ⓒ)을 2022년 수사 시점의 운영 환경(新KIATIS Ⓓ, 2021.4.15 이후 VPN·샤크라맥스 운용 상태)과 비교하면서 "실제 사용자가 사용할 환경과 동일한 환경에서 평가를 하여야 함에도 불구하고" VPN 없이 시험평가를 진행한 것을 범죄로 규정하였다.

#### C-L6-45 — prosecution-non-prosecution-internal-contradiction

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-non-prosecution-internal-contradiction]] • **Verdict:** CORROBORATED (strong)

군 검찰단의 불기소 이유서는 사기수사의 전형적 모델을 보여주는 문서이다. 핵심 모순: 위계공무집행방해로 "피의사실은 인정된다"며 기소유예 처분을 내리면서, 동시에 "KIATIS는 개발·운용시험평가에서 99.73점을 받은 바 있어 제안요구서에서 요구한 기능들을 대부분 충족하는 것으로 보이고"(10페이지)라고 사업의 성공을 인정했다.

#### C-L6-46 — prosecution-omits-saup-tongje-gigwan-from-rfp-structure

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-omits-saup-tongje-gigwan-from-rfp-structure]] • **Verdict:** CORROBORATED (strong)

군검사가 2018년 9월 작성된 제안요청서(RFP)의 사업 추진 조직을 기술하면서 "국방전산정보원이 사업관리기관, 국방부 유해발굴감식단이 사업주관기관"이라고만 기재하고, **사업통제기관이 국유단으로 명시되어 있다는 핵심 사실을 의도적으로 누락**했다 (Record No. 1,483 / L2, 그림 2-2, 표 2-1 참조).

#### C-L6-47 — prosecution-principal-actor-in-cartel

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-principal-actor-in-cartel]] • **Verdict:** CORROBORATED (strong)

제6층위의 종합 정리에 따르면, 군검찰단은 국방정보화카르텔의 단순 공범이 아닌 **주동자**(principal actor)이다.

#### C-L6-48 — prosecution-selective-criminalization-firewall-approval-chain

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecution-selective-criminalization-firewall-approval-chain]] • **Verdict:** CORROBORATED (strong)

"방화벽 정책적용 요청" 공문의 결재 구조는 기안자 이준호 (공모자-1), 검토자 한지훈, 결재자 최영수로 구성되었다. 군검찰은 이 결재 체계에서 **중간 검토자인 한지훈만을 피의자로 지정**하여 범죄자로 만들었다.

#### C-L6-49 — prosecutor-admits-no-corruption-still-charges

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecutor-admits-no-corruption-still-charges]] • **Verdict:** CORROBORATED (strong)

군검사 임형규가 2022-09-28/10-11 통화에서: (1) '압수수색 결과 업체와 관련 있다거나 그런 것은 없다는 것을 저희도 알고 있다'고 인정, (2) 시험평가 환경 문제가 인정된다는 취지로 기소유예 유지, (3) 한지훈의 '대상이 아니다'는 주장을 '한지훈 중령님의 주장'으로 반복 일축, (4) '정의롭게 했다고 생각한다'고 자평. 지문등록(범죄자 기록)이 남았으며 한지훈이 취업 영향을 질문.

#### C-L6-50 — prosecutor-shifted-charge-vpn-to-firewall

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/prosecutor-shifted-charge-vpn-to-firewall]] • **Verdict:** CORROBORATED (strong)

검사 임형규는 한지훈과의 녹음된 대화(2022.9.28, 기록 제11,157쪽~제11,160쪽; 2022.10.11, 기록 제11,188쪽)에서, 기소 핵심 논거를 'VPN 미사용에 의한 조작'에서 '방화벽 포트 개방'으로 전환하였음이 확인된다.

#### C-L6-51 — split-cartel-three-phase-2016-2025

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/split-cartel-three-phase-2016-2025]] • **Verdict:** CORROBORATED (strong)

카르텔 9년간 3단계: 1단계(2016~18) DIDC 해킹 은폐+Active-X 제거+훈령 조작 개시. 2단계(2018~22) 新KIATIS 사업구조 조작+시험평가 왜곡+한지훈 표적 설정. 3단계(2022~25) 허위 갑질→사기수사→증거 은폐→개인 책임 전가. 9년간의 전개가 단일 유기적 범죄 시스템의 시간 구조.

#### C-L6-52 — victim-blaming-structural-to-individual

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/victim-blaming-structural-to-individual]] • **Verdict:** CORROBORATED (strong)

군검찰단은 VPN/DB접근제어 미사용을 한지훈의 혐의로 제기했으나(기록 제4,855쪽), 해당 시스템은 2019.8.27~2021.4.23 부재(기록 제3,236~3,270쪽). 舊KIATIS는 애초부터 15년간 보안장비 없이 운영. 피해자가 의도적으로 해제한 것처럼 서사 조작 — 피해자 비난(Victim Blaming).

#### C-L6-53 — warrant-docs-are-actual-false-documents

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/warrant-docs-are-actual-false-documents]] • **Verdict:** CORROBORATED (strong)

군검찰단이 한지훈에게 부과한 6개 혐의 중 '허위공문서 작성 및 동행사'는 역설적으로 군검찰단 자체의 문서에 해당한다. 한지훈은 2022.9월 국방부장관과 군검찰단장에게 제출한 '압수·수색·검증 영장에 대한 해명과 증명'(기록 제4,979쪽~제5,021쪽)에서 이를 입증하였다.

#### C-L6-54 — warrant-omits-15yr-vpn-bypass-from-probable-cause

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/warrant-omits-15yr-vpn-bypass-from-probable-cause]] • **Verdict:** CORROBORATED (strong)

압수수색 영장의 범죄사실 기재에서 舊KIATIS가 15년간(2007~2022) VPN 없이 DB 직접접속으로 운영된 사실이 완전히 누락되었다. 판사가 이 사실을 알았다면 '기만'(위계)의 요소가 약화됨 — 평가위원들은 DB 직접접속이 표준 관행임을 이미 알고 있었을 가능성이 높다. 영장의 범죄사실은 거짓된 신규성(false novelty) 전제 위에 구축되었다.

#### C-L6-55 — warrant-vs-non-prosecution-document-truth-reversal

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/warrant-vs-non-prosecution-document-truth-reversal]] • **Verdict:** CORROBORATED (strong)

영장(2022.7.18)에서 검찰은 동일한 시험평가 결과 문서를 '허위의 사실'이 포함된 것으로 기술하여 판사의 승인을 받았다. 그러나 불기소결정서(2022.10.07) IV.2.사.(1)에서 '대위 이준호가 작성한 위 각 문서는 실제로 이루어진 시험평가 위원들의 평가를 그대로 기재한 것에 불과하므로 표시된 내용과 진실이 부합하지 않는다고 할 수 없고'로 정반대 판단. 같은 검찰이 같은 문서에 대해 판사에게는 '허위', 피의자에게는 '사실...

#### C-L6-56 — xsyn-prosecutor-post-warrant-arrival-predetermination

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/xsyn-prosecutor-post-warrant-arrival-predetermination]] • **Verdict:** CORROBORATED (strong)

군검사 임형규는 녹취(raw/02)에서 '저는 8월 인사이동해서 인수인계 받아서 하는 입장'이라고 진술. 영장(raw/05)은 2022.7.18 이미 발부. 불기소 결정(2022.10.7)의 결정 검사가 영장 발부 당시 사건에 관여하지 않았다. '단장님한테 다 결재를 받습니다'와 결합하면 실질적 결정권은 군검찰단장에게 있고 담당 검사는 인수인계된 결론을 집행하는 구조.

#### C-L6-57 — xsyn-recording-confirms-vpn-public-discussion

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/xsyn-recording-confirms-vpn-public-discussion]] • **Verdict:** CORROBORATED (strong)

2022-02-08 녹취록에서 한지훈은 VPN 속도 문제를 DIDC 담당자, 과장, 국유단, 유지보수PM, 실무자 전원과 공개 논의. '2018년 DIDC 규정으로 VPN으로 반드시 하게 되어있어'라고 VPN 규정 인지를 명확히 표시. 그러나 영장(raw/05)은 '시험평가위원들에게 사실을 전혀 알리지 아니하였다'고 기재. 녹취록의 공개 토론은 검찰 '은폐' 내러티브를 독립적으로 반박.

#### C-L6-58 — xsyn-sop-vpn-mandate-vs-prosecution-cherry-pick

**Layer:** 6 • **Type:** see atom • **Atom:** [[claims/xsyn-sop-vpn-mandate-vs-prosecution-cherry-pick]] • **Verdict:** CORROBORATED (strong)

불기소이유서(raw/05)는 DIDC 예규 제12호 제37조를 인용하여 SSL-VPN 의무를 주장. 그러나 동일 예규(raw/06)에서 제37조는 방화벽 관리와 SSL-VPN을 함께 규정하며, 별지 제7호로 방화벽 정책 변경을 표준 절차화. 검찰은 같은 조문의 VPN 부분만 인용하고 방화벽 관리 절차 부분은 무시 — 선별적 규정 인용(cherry-picking).

#### Layer 7 — institutional rejection chain + ongoing harm (7 new)

#### C-L7-05 — cross-layer-predetermined-conclusion-L5-L6-L7

**Layer:** 7 • **Type:** see atom • **Atom:** [[claims/cross-layer-predetermined-conclusion-L5-L6-L7]] • **Verdict:** CORROBORATED (strong)

Layer 5의 43일 결론선행(감사결론→조사), Layer 6의 무혐의 인지 후 수사 계속, Layer 7의 8개 기관 일괄 거부는 단일 패턴의 3단계 반복: 결론이 증거에 선행하고, 모순이 발견되어도 결론이 변경되지 않으며, 외부 시정 메커니즘도 동일 패턴을 답습. 3개 독립 층위에서 동일 패턴 반복 = 설계된 거부 파이프라인.

#### C-L7-06 — han-ji-hoon-petition-to-mnd-minister-2022

**Layer:** 7 • **Type:** see atom • **Atom:** [[claims/han-ji-hoon-petition-to-mnd-minister-2022]] • **Verdict:** CORROBORATED (strong)

한지훈은 국방부장관 최우진에게 진정서(기록 제5,578쪽~제5,602쪽)와 "압수, 수색, 검증 영장에 대한 해명과 증명"(2022.9.25., 기록 제5,393쪽~제5,577쪽)을 국방망 인트라넷의 이메일과 메모보고로 송부하였다. 국방부장관에게 보낸 이메일과 메모보고는 **그 당시에 읽은 것으로 확인되었다** (각주 589). 군사보좌관 준장 홍성민에게는 동일 자료를 카카오톡으로 전송하였다 (기록 제5,669쪽). **진정 내용에 대한 ...

#### C-L7-07 — kim-min-su-willful-ignorance-firewall-contradiction

**Layer:** 7 • **Type:** see atom • **Atom:** [[claims/kim-min-su-willful-ignorance-firewall-contradiction]] • **Verdict:** CORROBORATED (strong)

2022-03-23, 김민수는 '조사에 대해서 일체 모른다', '일절 관여를 못해'라고 선언. 그러나 1개월 전 녹취006에서 '감사조치 등등은 내가 알아서 할 거고'로 감사실과 직접 조율. 1개월 만에 '적극 개입자'→'일절 모르는 자'로 전환은 관여 흔적 차단을 위한 방화벽 구축.

#### C-L7-08 — kiso-yuye-six-charges-dishonorable-discharge

**Layer:** 7 • **Type:** see atom • **Atom:** [[claims/kiso-yuye-six-charges-dishonorable-discharge]] • **Verdict:** CORROBORATED (strong)

2022.10.11 6가지 혐의 기소유예 → 2022.10.31 32년 군 생활 불명예제대. 20일 시간 간격은 기소유예가 불명예제대의 수단으로 설계되었음을 시사한다.

#### C-L7-09 — kwonikkwi-petition-submission-and-result

**Layer:** 7 • **Type:** see atom • **Atom:** [[claims/kwonikkwi-petition-submission-and-result]] • **Verdict:** CORROBORATED (strong)

한지훈은 2022년 9월 25일 국가권익위원회에 진정서를 제출했다(기록 제5,314쪽~제5,326쪽). 진정서는 다음을 포함한다:

#### C-L7-10 — seven-layer-organic-crime-system-proven

**Layer:** 7 • **Type:** see atom • **Atom:** [[claims/seven-layer-organic-crime-system-proven]] • **Verdict:** CORROBORATED (strong)

총 12,495쪽의 1차·2차 자료 분석을 통해 2017~2023년 6년간의 체계적 범죄 구조를 7층위 증명체계로 입증했다. 그림 6-1(기록 제6,445쪽)과 그림 6-2(기록 제6,446쪽)가 복잡한 범죄 구조를 시각적으로 증명하는 결정적 증거다.

#### C-L7-11 — whistleblower-protection-purely-formal

**Layer:** 7 • **Type:** see atom • **Atom:** [[claims/whistleblower-protection-purely-formal]] • **Verdict:** CORROBORATED (strong)

현행 공익신고자 보호법은 형식적 수준에 그치며 실질적 보호에 실패했다. 32년 경력 군간부조차 조직적 공격에 무력했다. 독방 격리와 평판 테러가 진행되는 동안 어떤 보호 조치도 발동되지 않았다. 진정서 제출 즉시 자동 보호 조치가 발동되는 시스템과 종합적 지원(신분보장, 경제지원, 법적보호, 심리상담)이 필요하다.


### Promoted to Open — B.2 strength upgrade batch (2026-04-12)

**17 atoms** upgraded MODERATE→STRONG via vault cross-reference corroboration and promoted to Open.

#### C-L4-B2-2436ho-dtne-sponsor-binding-erased

**Layer:** 4 • **Atom:** [[claims/2436ho-dtne-sponsor-binding-erased]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

On 2020-06-04, 국방정보화업무 훈령 제2436호 removed **two** clauses from the DT&E definition in 제57조 ¶1 제1호:

#### C-L4-B2-2436ho-otne-sponsor-binding-erased

**Layer:** 4 • **Atom:** [[claims/2436ho-otne-sponsor-binding-erased]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

On 2020-06-04, 국방정보화업무 훈령 제2436호 removed the phrase `사업주관기관 주관 하에` from the OT&E definition in 제57조 ¶1 제2호. After the deletion, the OT&E definition no longer textually binds OT&E execution to any named role-tier within that article. The deletion i...

#### C-L6-B2-choi-dongwook-parrots-prosecution-delay-narrative

**Layer:** 6 • **Atom:** [[claims/choi-dongwook-parrots-prosecution-delay-narrative]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

한지훈이 피의자 신문 일정을 수요일에서 금요일로 3일 앞당기자고 요청했을 때, 최동욱은 '수사하는 사람들 입장에는 지금까지 딜레이 시켜 줬어요'라고 검찰 측 내러티브를 반복. 한지훈: '수요일날 하자고 하는 건데 제가 금요일날로 사흘을 앞당기자고 하는 거 잖습니까?' 변호사가 검찰의 프레이밍을 의뢰인에게 내면화시키는 역할.

#### C-L6-B2-choi-dongwook-show-weakness-vs-innocence-defense

**Layer:** 6 • **Atom:** [[claims/choi-dongwook-show-weakness-vs-innocence-defense]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

피의자 신문 직전(2022-09-02), 최동욱은 한지훈에게 '있는 모습 그대로... 심리상태가 이렇구나라는 것을 보여줄 필요가 있다'고 조언. 한지훈은 즉각 거부: '심신 박약 이런 걸로 보시는 겁니까... 이 수사에 집중할 거고 무혐의에 집중할 것입니다.' 최동욱의 조언은 유죄 전제의 감경/동정 전략이며, 무혐의 방어와 구조적으로 양립 불가.

#### C-L6-B2-han-ji-hoon-investigation-notification-2022-07-21

**Layer:** 6 • **Atom:** [[claims/han-ji-hoon-investigation-notification-2022-07-21]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

2022년 7월 21일 발부된 **군인·공무원 수사개시 통보** (기록 제4,854쪽~제4,859쪽)는 군사법원법상 피의자 절차 보호를 공식 개시하는 문서이다. 이 통보 발부와 동시에 두 가지 보호 메커니즘이 자동으로 작동하여야 한다: ① 군사법원법에 따른 피의자 권리(묵비권, 변호인 조력권, 구속 요건 등) 고지 및 적용, ② 국방부 훈령에 따른 **군인권보호관** 검토 절차의 개시.

#### C-L6-B2-han-ji-hoon-witness-statement-2022-01-25

**Layer:** 6 • **Atom:** [[claims/han-ji-hoon-witness-statement-2022-01-25]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

한지훈은 2022년 1월 25일, **참고인** 자격으로 군 검찰단의 조사에 응하였다 (기록 제4,776쪽~제4,796쪽). 이 참고인 진술서에서 한지훈은 新KIATIS 사업의 개발관리팀장으로서의 역할과 사업 전반의 경과를 설명하였다. 그로부터 약 6개월 후인 2022년 7월 18일, 군 검찰단은 동일한 사안에 대해 **피의자** 신분으로 압수수색 영장과 수사개시 통보를 발부하였다.

#### C-L5-B2-kakaotalk-han-ji-hoon-professional-engagement-during-eval

**Layer:** 5 • **Atom:** [[claims/kakaotalk-han-ji-hoon-professional-engagement-during-eval]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

2019-09-02~04 카카오톡에서 송민석(송민석)이 SW개발관리교육 콘텐츠를 공유했을 때, 한지훈(한지훈)은 '좋은정보 감사드립니다'(9.4일)로 응답. 이는 한지훈이 채팅을 사용하지 않은 것이 아니라 전문 콘텐츠에 능동 참여했음을 보여준다. 출퇴근 보고가 없는 것은 보고할 이상이 없었기 때문.

#### C-L5-B2-kakaotalk-lee-jiyoung-normal-management-pre-complaint

**Layer:** 5 • **Atom:** [[claims/kakaotalk-lee-jiyoung-normal-management-pre-complaint]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

카카오톡에서 이지영(이지영)은 2022-02-03~07 기간(갑질 신고 3~7일 전) '온나라 조치 완료 확인', '팀장회의 참석', COVID 보고 등 정상적 관리자 활동을 수행. 직장 기능장애를 주장하는 갑질 신고와 정면 모순 — 업무 환경은 정상적으로 작동 중이었다.

#### C-L2-B2-layer2-intentional-budget-reduction-sw-hw

**Layer:** 2 • **Atom:** [[claims/layer2-intentional-budget-reduction-sw-hw]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

국전원에서 사업 관리를 수행한 新KIATIS 사업은 국가계약법에 따른 순수 소프트웨어 개발 용역 사업이었다 (기록 제4,866~4,871쪽). 국유단에서 소요 제기한 요구 기능에 대한 소프트웨어 개발 예산은 6.25억 원이며, 이는 조달청에서 산정 금액을 결정한 사안이다 (기록 제1,056쪽, 제1,074쪽, 제1,535쪽). 그런데 新KIATIS 개발·운용 시험평가에서 평가위원회의 심의·의결로 **추가 요구사항 80건**이 발생했다. 이...

#### C-L5-B2-layer5-lee-jiyoung-vpn-5questions-motive-confirmation

**Layer:** 5 • **Atom:** [[claims/layer5-lee-jiyoung-vpn-5questions-motive-confirmation]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

과장 이지영 (공문결재자-1)은 2022-02-08 회의 후 30분 보고에서 VPN 관련 5단계 질문 패턴('VPN 보안 때문 아니냐' → '안 쓰던 거 무슨 애기' → 'DB 접속이잖아' → '무조건 VPN')으로 한지훈이 舊KIATIS의 인터넷 VPN 미사용 사실과 2016년 해킹의 연관성을 이해하고 있는지 체계적으로 확인하였다. 이것이 48시간 후 갑질 신고의 직접적 트리거이다.

#### C-L5-B2-layer5-park-seojun-48hr-cooperation-to-hostility

**Layer:** 5 • **Atom:** [[claims/layer5-park-seojun-48hr-cooperation-to-hostility]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

박서준 (갑질신고자-1)은 2022년 2월 8일까지 한지훈과 정상적으로 협력하는 관계였다. 그러나 이지영 (공문결재자-1)이 VPN 관련 정보를 추출한 시점을 기점으로 48시간 이내에 한지훈에 대한 태도가 협력에서 적대로 급격히 전환되었다(기록 제3,889쪽, 제3,893쪽, 제4,063쪽, 제4,078쪽).

#### C-L5-B2-layer5-warning-letter-overrides-investigation-findings

**Layer:** 5 • **Atom:** [[claims/layer5-warning-letter-overrides-investigation-findings]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

법무관리관실의 경고장(2022-05-23)은 조사본부의 자체 조사에서 출퇴근 조작 주장이 2개 업체 확인서 제시로 붕괴되었음에도, 한지훈에게 불리한 내용을 그대로 유지하였다. 이는 법무관리관실이 조사본부의 실제 조사결과를 무시하고 김민수가 원하는 결론을 도출한 증거이다.

#### C-L6-B2-new-kiatis-delay-three-strategic-objectives

**Layer:** 6 • **Atom:** [[claims/new-kiatis-delay-three-strategic-objectives]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

新KIATIS 전력화 의도적 지연은 국방정보화카르텔의 3대 전략 목적을 동시에 달성한다: (1) 2016 해킹 진실 은폐 — 舊KIATIS 교체를 방지하여 증거 인멸 기회 확보, (2) 순환적 예산 착취 — '실패→추가예산' 반복 루프(6.25억→4억→3.9억), (3) 개발관리팀장 제거 — 2022-02-08 회의에서 진실을 발견한 한지훈을 '개발 부실' 책임자로 프레이밍.

#### C-L3-B2-park-sung-ho-officer-disparagement-publicized

**Layer:** 3 • **Atom:** [[claims/park-sung-ho-officer-disparagement-publicized]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

한지훈이 국전원에 보직된 초기, 초급장교(중위·대위) 6~7명이 한지훈을 찾아와 국전원장 박성호 (2016해킹당시원장-1)가 "부사관이 장교보다 낫다"라고 수시로 발언하여 스트레스를 가하고 있다고 하소연하며 문제 해결을 요청했다 (기록 제11,134쪽~제11,135쪽) (§3.3.3.1).

#### C-L6-B2-split-delay-cyclical-budget-embezzlement

**Layer:** 6 • **Atom:** [[claims/split-delay-cyclical-budget-embezzlement]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

新KIATIS 전력화 의도적 지연은 '실패→추가예산' 반복 루프(6.25억→4억→3.9억)를 통한 순환적 예산 착취 메커니즘으로 작동. 시험평가 실패를 의도적으로 유도한 후 추가 예산을 확보하는 자기 영속적 자원 추출 장치.

#### C-L6-B2-split-delay-team-leader-elimination-framing

**Layer:** 6 • **Atom:** [[claims/split-delay-team-leader-elimination-framing]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

新KIATIS 전력화 지연의 제3 전략 목적은 2022-02-08 회의에서 舊KIATIS 보안 위반 진실을 발견한 한지훈을 '개발 부실' 책임자로 프레이밍하여 제거하는 것이었다. 지연 자체가 의도적이었기 때문에 그 책임을 개발관리팀장에게 전가하는 것이 가능했다.

#### C-L5-B2-total-destruction-unperson-triple-vector

**Layer:** 5 • **Atom:** [[claims/total-destruction-unperson-triple-vector]] • **Verdict:** CORROBORATED (strong — upgraded from moderate)

카르텔의 궁극적 목표는 단순한 침묵이 아니라 개인의 완전한 파괴였다. 사회적 평판 파괴(L5), 법적 범죄자 낙인(L6), 경제적 생존 기반 박탈(불명예 제대)을 통한 삼중 파괴 구조. 오웰의 '언퍼슨(Unperson)' 만들기와 유사하며, '유대인이라는 존재 자체의 부정'이 '진실을 말하는 개인이라는 존재 자체의 부정'으로 전환되었다.


### Checkpoint 2 roll-up (2026-04-12, post B.1 promotion)

| Layer | Total atoms | **In Open** | Candidates (mod/NME) | Notes |
|---|---|---|---|---|
| 1 | 40 | **26** | 14 | SOP + cyber directive + Active-X |
| 2 | 9 | **8** | 1 | Track C + B.1 promoted |
| 3 | 12 | **7** | 5 | Cartel + safeguard mechanisms |
| 4 | 64 | **48** | 16 | Directive revision + evaluation |
| B (4↔6) | 2 | **2** | 0 | Central legal contradiction |
| 5 | 50 | **42** | 8 | Fabricated audit + recordings |
| 6 | 65 | **57** | 8 | Prosecution fraud + cartel |
| 7 | 19 | **11** | 8 | Rejection chain + ongoing harm |
| **Total** | **259** | **213** | **46 (32 mod + 15 NME)** | |

**Summary.** Phase A (2026-04-11): 38 entries promoted. B.1 batch (2026-04-12): 158 CORROBORATED (strong) promoted. **Total Open: 196 (75.7%).** Remaining 63 candidates: ~42 moderate (pending strength upgrade), ~21 NME (pending evidence gap closure).

### New candidates — Checkpoint 2 corpus expansion (2026-04-12)

**Added:** 185 new candidate entries from Session 03 raw/ corpus expansion (74→259 atoms).

| Strength | Count |
|---|---|
| CORROBORATED (strong) | 140 |
| CORROBORATED (moderate) | 45 |
| NEEDS_MORE_EVIDENCE | 21 |
| **Total new** | **185** |

#### Layer 1 — DIDC trace removal / Active-X / SOP / cyber directive (27 new)

- **2263ho-glossary-didc-entity-renamed** — 제2129호 별표1의 '국방통합정보관리소'가 제2263호에서 '국방통합데이터센터'로 교체. 2016 해킹 당시 기관명을 훈령 용어 정의에서 말소하여 해킹-기관 연결고리를 단절. 제10조 DIDC 앵커 제거(제2436호)보다 15개월 앞선 선행 조치. → [[claims/2263ho-glossary-didc-entity-renamed]] | NEEDS_MORE_EVIDENCE (moderate)
- **2946ho-entity-naming-second-generation-shift** — 제2946호(2024.7.17)에서 '정보화기획관실'을 '지능정보화정책관실'로 훈령 전체에 걸쳐 교체. 제2436호의 '사업통제기관→정보화기획관실' 교체에 이은 2세대 anchor 이동으로, 원래 용어가 이중 매개되어 추적이 더욱 곤란해진다. 사업통제기관→정보화기획관실→지능정보화정책관실의 3단계 연쇄. → [[claims/2946ho-entity-naming-second-generation-shift]] | NEEDS_MORE_EVIDENCE (moderate)
- **active-x-removal-as-project-goal-confirms-vulnerability** — 국유단이 2018년 7월 9일 국전원에 발송한 "KIATIS 성능개선 사업 추진 요청(협조)" 공문에서 사업의 기대효과로 "현재 사용 중인 Active-X 사용을 중단함으로써 보안 취약 요소 제거"를 명시했다(기록 제1,051쪽). 이는 舊KIATIS의 보안취약성을 사업 관계기관이 공식적으로 인정한 것이다. → [[claims/active-x-removal-as-project-goal-confirms-vulnerability]] | CORROBORATED (strong)
- **contradiction-intranet-link-attack-surface** — 舊KIATIS는 인터넷 기반이면서 동시에 인트라넷(국방망)과 데이터를 송수신하는 이중 연동 구조였다(기록 제1,117쪽, 제1,125쪽). 단순 인터넷 홈페이지가 아니라 2016 DIDC 해킹 시 인터넷→국방망 공격 경로를 제공한 bridge 시스템이었으며, 이를 은폐할 동기가 커버업의 핵심이다. → [[claims/contradiction-intranet-link-attack-surface]] | CORROBORATED (strong)
- **csr-2016-hacking-should-trigger-emergency-vuln-check** — 제44조 제2호 '사이버공격 징후가 탐지된 경우'와 제3호 '주요기반체계에 영향을 미칠 수 있는 취약점이 발견된 경우'에 따라, 2016년 북한 해킹 탐지 시 KIATIS를 포함한 DIDC 소관 전 체계에 대한 긴급 취약점 점검이 시행되어야 했다. 미시행은 제44조 위반이며 은폐 수단이다. → [[claims/csr-2016-hacking-should-trigger-emergency-vuln-check]] | NEEDS_MORE_EVIDENCE (strong)
- **csr-annual-vulnerability-assessment-duty-violated** — 제39-40조에 따라 DIDC는 모든 사이버자산에 대해 연간 취약점 분석·평가 계획을 수립하고 수행해야 했다. 연간 취약점 평가가 수행되었다면 舊KIATIS의 VPN 미적용은 '치명적 취약점'으로 탐지되었을 것이다. 15년간 미탐지는 연간 평가 미수행 또는 KIATIS의 평가 범위 제외를 의미한다. → [[claims/csr-annual-vulnerability-assessment-duty-violated]] | CORROBORATED (strong)
- **csr-cyber-asset-registry-catch-all-art45** — 제45조 제1항은 사이버자산 현황을 '수시로 관리'하고 '미등록 또는 취약점 위험도가 높은 장비·체계는 원칙적으로 네트워크 접근을 제한'하도록 의무화. 舊KIATIS가 미등록이면 네트워크 차단 대상, 등록되었으면 VPN 미적용이 취약점으로 탐지 필수. 어느 경우든 15년간 방치는 제45조 위반. → [[claims/csr-cyber-asset-registry-catch-all-art45]] | CORROBORATED (strong)
- **csr-didc-is-2nd-tier-security-ops-center** — 제54조 제1항 제2호(나)는 국방통합데이터센터를 '통합보안관제(2차)' 책임 부대로 명시 지정. 업무대상은 '데이터센터 소관'. DIDC가 KIATIS를 포함한 소관 체계에 대한 보안관제 의무를 가졌으며, 한지훈 개인이 아닌 DIDC라는 기관이 보안 책임의 제도적 주체이다. → [[claims/csr-didc-is-2nd-tier-security-ops-center]] | CORROBORATED (strong)
- **csr-kiatis-is-cyber-asset-under-directive** — 舊KIATIS는 전력지원체계에 해당하는 국방정보시스템으로서 제3조 제7호의 '사이버자산' 정의를 충족한다. 따라서 이 훈령의 사이버보안 업무(제4조 제3항) 전체 — 보호대책(제22-26조), 취약점 평가(제39-45조), 전력지원체계 수명주기 보호(제32-36조) — 가 KIATIS에 적용된다. → [[claims/csr-kiatis-is-cyber-asset-under-directive]] | CORROBORATED (strong)
- **didc-sop-11-server-root-console-only-mandatory** — DIDC 부대예규 제11호 제161조②는 병사·유지보수업체 직원의 Root 계정 단독 사용을 금지(불허). 제161조⑦은 Root 접근을 콘솔 전용으로 제한하고 원격 접근을 금지. 이는 모든 관리자 접근에 DIDC 직원의 동행/증인이 필요하다는 의미이며, 2016 해킹 시 원격 Root 접근이 있었다면 이 SOP 위... → [[claims/didc-sop-11-server-root-console-only-mandatory]] | NEEDS_MORE_EVIDENCE (moderate)
- **didc-sop-12-emergency-response-team-logs-mandatory** — DIDC 부대예규 제12호 제17조③-6은 긴급대응반의 '침해사고 기록일지'와 '상황근무일지' 유지를 의무화. 북한 해킹은 최소 II급(강화된 준비태세) 이상으로 INFOCON 상향이 예상되며, 이는 자동으로 긴급대응반 편성을 유발. 제27-32조의 INFOCON 체계와 연동하여, 2016 사건의 실시간 대응 타임라... → [[claims/didc-sop-12-emergency-response-team-logs-mandatory]] | CORROBORATED (strong)
- **didc-sop-12-incident-scene-preservation-mandatory** — DIDC 부대예규 제12호 제21조①은 불법접근·해킹 흔적 발견 시 전산망 차단을 포함한 현장보존 의무를 규정. 제22조③은 정보보호과+자원관리과 합동분석팀 편성과 각 부서의 자료 협조 의무를 규정. 제23조④는 '침해사고의 탐지·대응·조치 내용을 기록하고 관리하여야 한다'고 명시. 2016 해킹 사건에서 이 세 조... → [[claims/didc-sop-12-incident-scene-preservation-mandatory]] | CORROBORATED (strong)
- **didc-sop-12-security-system-7layer-deployment-chain** — DIDC 부대예규 제12호 제40조+별지 제10호는 DIDC에 배치되는 모든 시스템에 Anti-DDoS, IPS, 방화벽, SSL VPN, 웹방화벽, DB암호화, Anti-Virus의 7대 보안체계 적용을 의무화. 각 체계별 리드타임(방화벽 7일, 웹방화벽 3일, Anti-Virus 7일)과 실무자 회의를 요구. K... → [[claims/didc-sop-12-security-system-7layer-deployment-chain]] | NEEDS_MORE_EVIDENCE (moderate)
- **jeong-hyeonwoo-2016-hacking-scapegoat-admission** — 정현우 (2016해킹당시원장-1, 초대 데이터센터부대장)는 2022.2.28 녹취에서 '(2016년 해킹당시) 희생양, 우리 부대원 모두 싸잡아가지고'라고 진술. 준장급 내부자가 '희생양' 용어를 사용하여 DIDC 부대원 집단 전가를 인정. → [[claims/jeong-hyeonwoo-2016-hacking-scapegoat-admission]] | NEEDS_MORE_EVIDENCE (moderate)
- **kiatis-homepage-co-managed-by-admin-ops-team** — 피의자 신문조서(기록 제4,879쪽/L6)와 조직·담당자 현황(2019-12-17, 기록 제4,723쪽/L6)에 따르면, 행정정보 운영팀이 '625전사자 종합 정보체계'(舊KIATIS)와 인터넷·인트라넷 홈페이지를 함께 담당하였다. → [[claims/kiatis-homepage-co-managed-by-admin-ops-team]] | CORROBORATED (strong)
- **kiatis-homepage-improvement-disguised-as-maintenance** — 2016-09-26부터 2017-04-24까지 7개월 동안 진행된 '국방부 홈페이지 개선 사업'은 **보안 취약점 10대 항목을 점검하는 것이 핵심 내용**이었으나, 과제카드에는 사업임에도 **'국방부 홈페이지 유지보수'로 둔갑**하여 진행되었다(기록 제00,016쪽). → [[claims/kiatis-homepage-improvement-disguised-as-maintenance]] | CORROBORATED (strong)
- **kiatis-server-laundering-to-integrated-mail-server** — 국방부 군수감사담당관실의 "일상감사 결과 통보"(2018-08-14, 기록 제1,141쪽)는 新KIATIS 성능개선사업의 합법성을 검토하면서, 그 사업명을 **"전군 인터넷 통합 구축 사업"**으로 명시하고 있다(기록 제1,144쪽). 이로써 舊KIATIS가 '국방 통합 인터넷 메일서버'로 서버 세탁(server l... → [[claims/kiatis-server-laundering-to-integrated-mail-server]] | CORROBORATED (strong)
- **kim-gilrae-2016-hacking-redirected-by-cyber-command** — 이근태 (초대 데이터센터장)는 2022.9.21 녹취에서 '사실은 한경수(사이버사령관)이가 우리쪽으로 방향을 팍 틀어가지고'라고 진술. 2016 해킹 조사가 사이버사령부에서 시작되어 의도적으로 DIDC로 방향 전환됨. 이근태는 이 패턴이 2022 KIATIS 수사와 '거의 비슷'하다고 평가. → [[claims/kim-gilrae-2016-hacking-redirected-by-cyber-command]] | NEEDS_MORE_EVIDENCE (strong)
- **layer1-foundation-of-seven-layer-system** — 제1층위는 전체 7층위 증명체계의 근간이다. 국방정보화카르텔이 장기간에 걸쳐 조직적이고 집단적인 모의·숨김·조작·은폐·인권침해·범죄자 낙인을 자행한 동기와 의도가 舊KIATIS의 15년간(2007~2022) VPN 없는 인터넷 노출 운용 사실의 체계적 증거 인멸에 있기 때문이다. → [[claims/layer1-foundation-of-seven-layer-system]] | CORROBORATED (strong)
- **old-kiatis-apt-optimal-vulnerability-structure** — 舊KIATIS는 APT 공격에 구조적으로 무방비: (1) Active-X 클라이언트 취약점, (2) VPN/DB접근제어 부재, (3) 인터넷→국방망 직접 운용, (4) 측면 이동 경로. 국방사이버안보훈령 등 위반. → [[claims/old-kiatis-apt-optimal-vulnerability-structure]] | CORROBORATED (strong)
- **old-kiatis-direct-db-access-without-vpn** — 舊KIATIS는 약 15년간(2007~2022) 인터넷에서 VPN이나 보안장비 없이 데이터베이스(DB)에 직접 접속하는 구조로 운용되었다. 장우진 (사업실무자-1)은 2022년 7월 19일 한지훈과의 담화에서 "VPN 문제가 제일 클 겁니다"라고 증언하며, VPN 제한으로 新KIATIS가 정상 운용되지 않은 이유를 ... → [[claims/old-kiatis-direct-db-access-without-vpn]] | CORROBORATED (strong)
- **old-kiatis-hosted-inside-other-server-15-years** — 舊KIATIS는 2006년 육군 전산소가 홈페이지 게시판 형태로 제작한 단순 파일첨부 시스템에서 출발했다(기록 제1,054쪽, 제1,120쪽). 사용자는 국유단, 조사본부, 각 군 부대 등 약 100명이었다(기록 제1,068쪽). → [[claims/old-kiatis-hosted-inside-other-server-15-years]] | CORROBORATED (strong)
- **old-kiatis-intranet-data-link-confirmed** — 舊KIATIS는 인트라넷(국방망)과 연동하여 데이터를 송·수신하는 구조였다. 이태호 (평가위원장-1)가 2018년 8월 작성한 新KIATIS 사업계획서(기록 제1,117쪽)의 체계 요구사항 목록에 "인트라넷 홈페이지 연동"이 명시되어 있으며, 국유단의 제안요청서(안) 검토 결과 보고에서도 연동 대상체계를 "국유단 홈... → [[claims/old-kiatis-intranet-data-link-confirmed]] | CORROBORATED (strong)
- **old-kiatis-web-facade-masking-cs-direct-db** — 舊KIATIS는 구조적 기만을 내포한 이중구조 시스템이다: → [[claims/old-kiatis-web-facade-masking-cs-direct-db]] | CORROBORATED (strong)
- **prosecution-six-charges-collapse-vpn-nonexistence** — 군검찰단이 한지훈에게 부과한 6개 혐의(위계공무집행방해, 업무상배임, 허위공문서작성, 허위작성공문서행사, 허위보고, 허위통보)는 모두 시험평가 환경 조작을 전제로 한다. 그러나 단일 공식 문서가 新KIATIS에 VPN/DB접근제어가 2019-08-27부터 최소 2021-04-23까지 적용되지 않았음을 증명한다. 존재... → [[claims/prosecution-six-charges-collapse-vpn-nonexistence]] | CORROBORATED (strong)
- **seven-layer-proof-system-design-rationale** — 7층위 증명 체계는 2025년 5월부터 과거 증거 기록을 재검토하여 국면별로 분류한 결과물이다. 각 층위는 독립적이면서도 상호 연관된 증거 체계를 구성하며, 전체적으로는 하나의 거대한 조직범죄 구조를 완성한다. 이 체계는 연역적이 아니라 귀납적으로 데이터에서 발견된 구조다. → [[claims/seven-layer-proof-system-design-rationale]] | NEEDS_MORE_EVIDENCE (moderate)
- **xsyn-sop-incident-silence-equals-coverup-proof** — DIDC 예규 제12호(raw/06) 제17-24조는 침해사고 시 비상대응팀 구성→보고→탐지대응→보고(별지4호)→대책→복구→종결의 8단계 의무 절차를 규정. 예규는 2016-02-01 시행. 책(raw/01 §3.1)은 이 기록들이 일절 존재하지 않음을 문서화. 훈령(raw/04) 제2129호 제9조 ¶2가 상위 규... → [[claims/xsyn-sop-incident-silence-equals-coverup-proof]] | CORROBORATED (strong)

#### Layer 2 — 新KIATIS framework + officer record manipulation (3 new)

- **gukyu-dan-dual-cap-unprecedented-structure** — 新KIATIS 사업에서 국유단이 사업통제기관과 사업주관기관을 동시에 담당하는 "이중역할(Dual Cap)" 구조(사업계획서 기록 제1,131쪽, 사업계획보고 기록 제1,140쪽, 최종 제안요청서 기록 제1,474쪽)는 국방정보화사업 역사상 전례가 없는 구조이다. → [[claims/gukyu-dan-dual-cap-unprecedented-structure]] | CORROBORATED (strong)
- **layer2-intentional-budget-reduction-sw-hw** — 국전원에서 사업 관리를 수행한 新KIATIS 사업은 국가계약법에 따른 순수 소프트웨어 개발 용역 사업이었다 (기록 제4,866~4,871쪽). 국유단에서 소요 제기한 요구 기능에 대한 소프트웨어 개발 예산은 6.25억 원이며, 이는 조달청에서 산정 금액을 결정한 사안이다 (기록 제1,056쪽, 제1,074쪽, 제1,... → [[claims/layer2-intentional-budget-reduction-sw-hw]] | CORROBORATED (moderate)
- **new-kiatis-is-mnd-controlled-not-delegated-project** — 新KIATIS 성능개선 사업은 훈령 제10조 제4항(기록 제7,495쪽)에 의거 "국방부에서 운용하는 정보시스템과 관련된 사업"으로 국방부 통제 사업에 해당한다. 근거: → [[claims/new-kiatis-is-mnd-controlled-not-delegated-project]] | CORROBORATED (strong)

#### Layer 3 — 국전원 사업관리 + informatization cartel (4 new)

- **han-ji-hoon-three-safeguard-mechanisms** — 한지훈은 新KIATIS 사업관리팀장 보직 후, 국유단이 사업통제기관을 수행하는 비정상적 구조의 위험을 인식하고 3가지 제동 장치를 선제적으로 설치하였다: (1) 국유단 실무자 장우진 상사를 국전원에 주 1회 상주시킴, (2) 모든 이해관계자를 정식 공문으로 소집하여 요구사항 검토회의를 주관하고 개발업체와의 상호 승인... → [[claims/han-ji-hoon-three-safeguard-mechanisms]] | CORROBORATED (strong)
- **idea-theft-mobile-security-architecture-patent** — 한지훈은 2013년 육군본부 근무 시부터 해킹 대응 모바일 서비스 연구를 수행하여 4개의 논문을 발표하였으며(기록 제2,418쪽, 기록 제12,066쪽, 기록 제6,683쪽 등), 이 연구 결과를 바탕으로 「병 휴대전화 보안 통제 체계를 위한 부대별 아키텍처 초안」(2019.3.6., ver 1.6, 기록 제2,35... → [[claims/idea-theft-mobile-security-architecture-patent]] | NEEDS_MORE_EVIDENCE (moderate)
- **kiatis-project-deliberately-transferred-to-han-ji-hoon** — KIATIS 사업은 원래 행정정보운영팀의 소관 업무였으나, 국전원 공무원들이 한지훈 중령의 행정정보계획팀으로 의도적으로 이관하였다. 피의자신문조서에서 한지훈은 "키아티스는 행정정보운영팀입니다"라고 명확히 진술하였고, 오현수 (실무자-5)는 "이 사업은 행정정보운영팀 사업인데 저희한테 떠넘겼다"고 수차례 발언하였다. ... → [[claims/kiatis-project-deliberately-transferred-to-han-ji-hoon]] | CORROBORATED (strong)
- **layer3-mkiss-abnormal-operation-gaslighting-pretext** — M-KISS(Military Knowledge Integrated Service System) 체계 운영은 한지훈이 팀장으로 인수한 후 다수의 부적절한 업무 행태를 드러냈으며, 이것이 갑질 신고의 사전 기획과 연결된다. → [[claims/layer3-mkiss-abnormal-operation-gaslighting-pretext]] | CORROBORATED (moderate)

#### Layer 4 — test-evaluation manipulation + directive revision (49 new)

- **2436ho-glossary-mass-term-purge-and-restoration** — 제2436호(2020.6.4) 별표1에서 빅데이터·GS인증·iSMART·TRL·국방ICT R&D·스마트 국방혁신 등 ~20개 기술혁신 용어가 일괄 삭제. 이 용어들은 제2842호(2023.9.20)에서 전면 복원. 삭제 시점=8-anchor 시험평가 재건과 동시. 복원은 용어의 비폐기를 증명하여 '불필요해서 삭제' ... → [[claims/2436ho-glossary-mass-term-purge-and-restoration]] | NEEDS_MORE_EVIDENCE (moderate)
- **2576ho-article-62-5-ote-approval-deleted** — 제2075호 제62조⑤ '사업통제기관은 운용시험평가계획의 타당성 및 적절성 등을 검토하여 승인하여야 한다'가 제2576호에서 삭제. 이로써 시험평가 체제에서 사업통제기관의 모든 승인 체크포인트가 완전히 소멸: 제11조②(제2398호)→제59조④(제2436호)→제62조⑤(제2576호). → [[claims/2576ho-article-62-5-ote-approval-deleted]] | CORROBORATED (strong)
- **2576ho-article-64-failure-blindspot** — 제2075호 제64조에서 모든 시험평가 결과가 사업통제기관에 보고되던 체계가, 제2576호에서 합격 후에만 정보화기획관실에 보고하는 구조로 변경. 부적합 판정 시 정보화기획관실에 보고되지 않는 구조적 사각지대 생성. 감독 기관이 실패 사례를 인지하지 못하는 제도적 맹점. → [[claims/2576ho-article-64-failure-blindspot]] | CORROBORATED (strong)
- **2576ho-article-68-deployment-trigger-weakened** — 제2075호 제68조①의 전력화 전제조건 '운용시험평가결과 군사용 적합 판정'이 제2576호에서 '시험평가결과 군사용 적합 판정'으로 변경. 통합시험 결과로도 전력화가 가능해져 실제 운용환경 검증 없이 배치 가능한 구조. 제58조 전환→제62-64조 접두어 제거→제68조 조건 완화의 정의→절차→결과 완전 연쇄. → [[claims/2576ho-article-68-deployment-trigger-weakened]] | CORROBORATED (moderate)
- **2576ho-ote-prefix-dropped-procedural-collapse** — 제2075호의 '운용시험평가 계획수립/실시/결과조치'(제62-64조)가 제2576호에서 '시험평가 계획수립/실시/결과조치'로 변경. 제59-61조(DT&E) 삭제 + 제62-64조 '운용' 접두어 제거 = 개발시험평가와 운용시험평가의 제도적 구분 완전 소멸. 제58조 통합원칙 전환, 제57조 구분의 임의화와 함께 3... → [[claims/2576ho-ote-prefix-dropped-procedural-collapse]] | CORROBORATED (moderate)
- **80-items-violate-national-contract-law** — 新KIATIS 시험평가 기간 중 평가위원회가 의결한 80건 추가 요구사항(기록 제3,039쪽)은 사업 예산(6.25억원)의 약 50%에 해당하는 규모이다. 이는 국가계약법 제10조·제11조·제19조·제26조와 훈령 제57조·제60조를 위반한다. 평가위원회는 요구기능의 충족 여부를 판정하는 기관이지 신규 요구사항을 추... → [[claims/80-items-violate-national-contract-law]] | CORROBORATED (strong)
- **arendt-banality-vs-intellectualization-of-evil** — 아이히만 사례의 '사고정지(Thoughtlessness)'와 달리, 본 사안의 가해자들은 극도로 정교한 사고를 보여준다. KIDA 연구보고서 조작(제4층위)과 국방부훈령 개정(제1층위)을 연계하여 학술적 정당성과 법적 근거를 동시에 조작했으며, 미래의 책임 추궁까지 계산하여 증거 인멸 메커니즘을 사전 구축했다. 이는... → [[claims/arendt-banality-vs-intellectualization-of-evil]] | CORROBORATED (moderate)
- **audit-dtot-report-hidden-from-team-leader** — 국유단이 2019년 9월 24일 발송한 "6.25전사자 종합정보체계 성능개선 감리용역 DT/OT 테스트 지원 결과(통보, 국유단장 결재)"를 이준호 (공모자-1)가 2019년 10월 7일 접수하여 "1인 결재" 후 개발관리팀장 한지훈에게 미보고하였다(기록 제2,762쪽). → [[claims/audit-dtot-report-hidden-from-team-leader]] | CORROBORATED (strong)
- **contradiction-article-58-five-year-stability-then-reversal** — 제58조의 시험평가 분리 원칙이 제1775호(2015.1.27)부터 제2398호(2020.2.13)까지 5년간 안정적으로 유지되었다가 제2436호(2020.6.4)에서 4개월 만에 통합 원칙으로 180도 전환(기록 제7,512쪽, 제8,194쪽). 5년 안정 후 돌연 역전은 자연적 정책 진화가 아닌 의도적 조작의 시... → [[claims/contradiction-article-58-five-year-stability-then-reversal]] | CORROBORATED (strong)
- **contradiction-evaluation-post-completion-temporal-impossibility** — 평가 항목 변경 요청(2019.9.5) → 시험평가 종료(2019.9.11) → 평가 항목 변경 승인(2019.9.19, 국유단장). 승인이 평가 종료 8일 후에 이루어진 것은 시간적 불가능이며, 국유단이 사업통제기관 역할을 불법 자임한 증거. 2020-08 MND 공문(기록 제4,757쪽)이 이를 '제도 개선'으로... → [[claims/contradiction-evaluation-post-completion-temporal-impossibility]] | CORROBORATED (strong)
- **cross-atom-99-7-plus-80items-plus-data-absence** — 99.7점 군사용 적합 판정(기록 제3,041쪽) + 동일 세션 80건 추가 의결(기록 제3,039쪽) + 국유단 연계 데이터 부재(기록 제2,610쪽)가 동시 성립: 성공 판정은 허위이거나, 80건은 월권이거나, 데이터 부재는 의도적 방치 — 셋 모두 조작의 증거. → [[claims/cross-atom-99-7-plus-80items-plus-data-absence]] | CORROBORATED (strong)
- **deliberate-absence-key-personnel-during-evaluation** — 新KIATIS 개발·운용시험평가 기간(2019.9.2.~11.) 동안 두 명의 핵심인물이 완전히 부재했다: → [[claims/deliberate-absence-key-personnel-during-evaluation]] | CORROBORATED (moderate)
- **didc-commander-hwang-prior-knowledge-lie** — DIDC 부대장 황만수는 2022년 10월 6~7일 한지훈과의 전화 통화에서 수사 사실을 "진짜 모른다", "전혀 모른다"고 반복 주장하였다(기록 제11,399쪽). 그러나 한지훈의 박사 동기 김성민과의 2022.10.7일경 대화(기록 제11,404쪽)에서: → [[claims/didc-commander-hwang-prior-knowledge-lie]] | CORROBORATED (strong)
- **didc-excluded-from-test-eval-reform** — DIDC는 시험평가 개혁의 전 과정에서 체계적으로 배제되었다: → [[claims/didc-excluded-from-test-eval-reform]] | CORROBORATED (strong)
- **didc-falsely-records-old-kiatis-as-vpn-user** — DIDC1센터에서 2019.2.1.에 생산·발송한 "'19년 DB 접근제어(샤크라맥스) 운용 현황 점검 계획"(기록 제1,874쪽)에서 舊KIATIS가 "VPN 사용자"로 국방망 목록에 기재되어 있다. 그러나 제1층위에서 증명된 바와 같이, 2019년 2월 1일 시점에 舊KIATIS는 아직 인터넷 홈페이지 서버 내에... → [[claims/didc-falsely-records-old-kiatis-as-vpn-user]] | CORROBORATED (strong)
- **didc-vpn-otp-18month-withholding** — DIDC는 新KIATIS에 VPN 사용을 위한 OTP 카드를 약 1년 6개월간(2019.9~2021.4) 제공하지 않았다. 장우진 (사업실무자-1)의 증언(기록 제11,302쪽): → [[claims/didc-vpn-otp-18month-withholding]] | CORROBORATED (moderate)
- **didc-withheld-network-diagram-from-kiatis** — DIDC는 "통합데이터센터 1센터 내 장비 비공개" 정책(기록 제2,311쪽)으로 新KIATIS 시험평가 계획 수립에 필수적인 네트워크 구성도와 보안장비 정보를 국전원에 제공하지 않았다. 국전원의 대부분의 다른 사업에서도 네트워크 구성도가 부재하였다(기록 제3,354쪽 등). → [[claims/didc-withheld-network-diagram-from-kiatis]] | CORROBORATED (strong)
- **diffusion-of-responsibility-seven-organizations** — 군검찰단(수사로 범죄자 낙인), 국방부 정보화기획관실(훈령 개정으로 법적 토대), KIDA(연구로 이론적 근거), DIDC(운영환경 조작), 조사본부(허위 갑질 수사), 국전원, 국군방첩사 등 7개+ 조직이 각자의 고유 업무 영역 안에서만 행동하여 '우리는 우리 일만 했다'는 도덕적 면죄부를 얻는 책임 분산(Diff... → [[claims/diffusion-of-responsibility-seven-organizations]] | NEEDS_MORE_EVIDENCE (moderate)
- **directive-article-11-control-functions-stripped** — 사업통제기관의 4대 핵심 기능이 훈령 개정을 통해 연속적으로 삭제되었다: → [[claims/directive-article-11-control-functions-stripped]] | CORROBORATED (strong)
- **fabricated-document-2020-produced-in-2022** — 2020년 8월 20일자 국방부 "시험평가 개선방안" 공문(기록 제4,757쪽)은 실제로 2022년 군검찰단 수사 시점에 소급 조작된 문서이다. 이 공문에 '인도 단계'라는 용어가 사용되어 있으나, '인도 단계'는 제2842호 훈령(2023.9.20.)에서야 최초 도입된 개념이다. 2020년 시점에는 이 용어가 어떤... → [[claims/fabricated-document-2020-produced-in-2022]] | CORROBORATED (strong)
- **fabricated-document-recipients-admin-only** — 2020년 8월 20일자 국방부 "시험평가 개선방안" 공문(기록 제4,758쪽)의 국전원 수신자는 양미숙 주무관(행정담당) 등 실질적 실무 역할이 없는 행정담당 인원에 국한되었으며, 1인 결재로 처리되었다. → [[claims/fabricated-document-recipients-admin-only]] | CORROBORATED (moderate)
- **firewall-requests-confirm-no-vpn-db-direct-access** — 3명의 사업실무자(오현수·지원호·이준호)가 처리한 모든 "방화벽 정책 적용 요청" 공문은 舊KIATIS(인터넷)와 新KIATIS(국방망)의 DB를 직접 접속하기 위한 것이었다. 이는 제1층위에서 증명된 舊KIATIS의 인터넷 VPN 미사용 DB 직접접속을 다시 한번 확증하는 증거이며, 동시에 新KIATIS도 최소한 ... → [[claims/firewall-requests-confirm-no-vpn-db-direct-access]] | CORROBORATED (strong)
- **glossary-term-count-oscillation-pattern** — 별표1 용어 수: 2129호(143)→2263호(160,+17)→2398호(160)→2436호(138,-22)→2576호(154,+16)→2842호(~160)→2946호(~160)→3060호(160). 최대 감소(-22)는 제2436호=8-anchor cluster와 동시. 용어 수 진동이 본문 조항 조작 강도와 동... → [[claims/glossary-term-count-oscillation-pattern]] | NEEDS_MORE_EVIDENCE (moderate)
- **gukjeonwon-pre-evaluation-team-leader-exclusion** — 국전원은 2019년 8월 29일 新KIATIS 개발·운용시험평가 계획보고에서 전례 없이 개발관리팀장(한지훈 중령)을 배제한 채, 사업실무자 해군대위 이준호 (공모자-1)가 국전원장에게 직접 보고하여 승인받았다. 이는 시험평가 과정 전체에서 팀장을 의사결정 체계에서 제거하기 위한 조직적 조작의 출발점이다. → [[claims/gukjeonwon-pre-evaluation-team-leader-exclusion]] | CORROBORATED (strong)
- **kakaotalk-eval-and-absence-same-day-announced** — 2019-09-02 카카오톡에서 시험평가 위원 참석 공지와 송민석(송민석)의 국방대 교육 부재 공지가 동일 채널에서 동시에 공유되었다. 모든 팀원이 '시험평가 시작 + 팀장 부재'를 동시에 인지 — 부재의 의도적 성격을 조직 전체가 목격한 실시간 기록. → [[claims/kakaotalk-eval-and-absence-same-day-announced]] | CORROBORATED (moderate)
- **kida-recommends-gukjeonwon-centered-integration** — KIDA 연구의 제4 함의(기록 제6,722쪽)는 사업관리기관(국전원) 중심의 개발시험(DT)/운용시험(OT) 통합을 권고한다. 그러나 이는 미군의 TEMP Guidebook 3.1(2017)이 명시한 "Developmental and operational testing serve different purposes ... → [[claims/kida-recommends-gukjeonwon-centered-integration]] | CORROBORATED (strong)
- **kida-research-legitimizes-pre-existing-manipulation** — KIDA의 "국방정보시스템 시험평가 절차 개선 방안 연구"(연구기간 2020.1~6월, 기록 제6,738쪽)는 국방정보화카르텔이 이미 실행한 조작을 학술적으로 정당화하는 소급 정당화 도구이다. → [[claims/kida-research-legitimizes-pre-existing-manipulation]] | CORROBORATED (strong)
- **kim-min-su-central-cross-layer-cartel-figure** — 김민수 (핵심 의사결정자-1)는 국방정보화카르텔의 교차층위 핵심 인물이다: → [[claims/kim-min-su-central-cross-layer-cartel-figure]] | CORROBORATED (strong)
- **layer4-997-military-adequate-verdict-contradicted-by-sabotage** — 新KIATIS 시험평가위원회(비상설)는 **99.7%의 고득점과 함께 "군사용 적합" 판정**을 하였다 (Record No. 3,041). 이 판정은 한지훈의 적극적 사업관리 하에 달성되었으며, 국유단 성능개선 TF(Record No. 1,073) 실무자들이 평가위원으로 참석하여 내린 결정이다. 한지훈은 요구사항 검... → [[claims/layer4-997-military-adequate-verdict-contradicted-by-sabotage]] | CORROBORATED (strong)
- **layer4-activex-removal-request-during-evaluation-conspiracy** — 新KIATIS 시험평가 기간 중, 비상설 평가위원회가 "Active-X 제거를 국유단(사업통제기관)에서 감리결과 시 추진 요청"(기록 제5,950쪽~제5,953쪽)했고, 국유단장이 이를 즉시 승인(기록 제3,068쪽)했다. 책(§3.4.6.3)은 이를 "사전에 두 조직 간에 합의된 시나리오의 실행"으로 규정한다. → [[claims/layer4-activex-removal-request-during-evaluation-conspiracy]] | CORROBORATED (strong)
- **layer4-dtot-separation-principle-violated** — 新KIATIS 시험평가(2019.9.2~11)는 개발시험평가(DT)와 운용시험평가(OT)를 통합하여 "개발·운용시험평가"로 실시되었다. 이는 훈령 제2129호/제2263호 제58조 ②를 위반한다: → [[claims/layer4-dtot-separation-principle-violated]] | CORROBORATED (strong)
- **layer4-evaluation-item-change-after-completion** — 新KIATIS 성능개선 사업의 시험평가에서 평가 항목 변경은 다음과 같은 시간 순서를 보인다: 2019년 9월 5일 평가 항목 변경 요청 → 2019년 9월 11일 시험평가 종료 → 2019년 9월 19일 평가 항목 변경 승인. 국유단장이 결재한 승인 요청 공문(기록 제5,950쪽)은 게임이 끝난 후에 게임 규칙의 ... → [[claims/layer4-evaluation-item-change-after-completion]] | CORROBORATED (strong)
- **layer4-evidence-becomes-layer6-prosecution-tool** — 국방정보화카르텔의 제4층위 조작 결과를 이어받은 군검찰단이 제6층위에서 희생양 만들기의 도구로 사용하였다. 그러나 제4층위의 조작을 증명하면 제6층위의 기소가 자동으로 붕괴하는 자기모순적 구조(self-trapping logic)가 형성된다. 검찰단이 자신들이 세운 논리에 스스로 갇히게 되는 것이다. → [[claims/layer4-evidence-becomes-layer6-prosecution-tool]] | CORROBORATED (strong)
- **layer4-kida-workflow-omits-mnd-role** — KIDA 연구보고서의 국방정보시스템 업무흐름도(기록 제6,712쪽)에서 국방부(사업통제기관)의 역할이 완전히 누락되어 있다. 이 흐름도는 조작된 훈령 제2275호(2019.5.9., 국가법령센터 미등재)를 기초로 작성되었다. → [[claims/layer4-kida-workflow-omits-mnd-role]] | CORROBORATED (strong)
- **layer4-old-new-kiatis-different-cyberspace** — 사이버공간은 민간, 공공, 국방 영역에 따라 수행 주체, 임무, 역할이 다르다. 舊KIATIS는 2007년부터 인터넷상에서(국방 인터넷 홈페이지 서버 → 전군 인터넷 통합 메일 서버) 운영되었다. 반면 新KIATIS는 DIDC 클라우드 기반의 국방망에서 구축되었다. 국방정보화업무훈령 제57조(시험평가 구분), 제58... → [[claims/layer4-old-new-kiatis-different-cyberspace]] | CORROBORATED (strong)
- **layer4-post-evaluation-illegal-control-transfer-to-gukyu-dan** — 新KIATIS 개발운용시험평가가 2019년 9월 11일 종료된 후, 8일 후인 **9월 19일 국유단장 명의로 평가 항목 변경이 승인**되었다. 이는 국유단이 스스로 **사업통제기관의 역할을 자임**한 것이며, 新KIATIS 사업 이전에 **국방부·국유단·국전원 간에 사업통제기관 권한이양에 대한 합의가 있었음을 시사... → [[claims/layer4-post-evaluation-illegal-control-transfer-to-gukyu-dan]] | CORROBORATED (strong)
- **layer4-procedure-simplification-temporal-contradiction-2019-09** — 2019년 9월 2일, 국방부 소프트웨어융합정책담당관 이지영(공문결재자-1)과 김수진(행정담당자-1)이 "정보시스템 구축 시험평가 절차 간소화 추진 계획 검토 요청"(기록 제2,853쪽~제2,858쪽)을 발송했다. 이 문서에는 두 가지 시간적 모순이 존재한다: → [[claims/layer4-procedure-simplification-temporal-contradiction-2019-09]] | CORROBORATED (strong)
- **layer4-software-install-to-system-install-terminology-fabrication** — 국방정보화업무훈령 제76조(소프트웨어 개발 공정) ①항 12호는 제1775호(2015-01-27)부터 제2129호(2018-02-05)까지 **'소프트웨어 설치'**를 명시했다. 이 용어의 문법적 구조는 "(사업관리기관이) (개발된) 소프트웨어를 (해당) 시스템에 설치한다"이다. 그러나 제2842호(2023-09-2... → [[claims/layer4-software-install-to-system-install-terminology-fabrication]] | CORROBORATED (strong)
- **layer4-test-evaluation-separation-principle-directive-2129** — 新KIATIS 성능 개선 사업에 적용되는 시험평가 기준은 국방 정보화 업무 훈령 제2129호(2018년 2월 5일)이다. 이는 제안요청서(기록 제1,510쪽)와 국방부 검찰단의 피의자 신문조서(기록 제4,887쪽) 양쪽에서 확인된다. → [[claims/layer4-test-evaluation-separation-principle-directive-2129]] | CORROBORATED (strong)
- **mnd-fabricated-indo-stage-terminology-blame-shift** — 국방부가 2020년 8월 20일자 조작 공문 "국방정보시스템 시험평가 개선방안 의견수렴"에서 **기존 국방정보화업무훈령 어디에도 존재하지 않는 신규 용어 '인도 단계'를 도입**했다 (Record No. 4,763). → [[claims/mnd-fabricated-indo-stage-terminology-blame-shift]] | CORROBORATED (strong)
- **mnd-intentional-separation-server-sw-projects** — 국방부는 新KIATIS를 서버구축사업(DIDC1센터, 클라우드)과 소프트웨어 개발사업(국전원)으로 의도적으로 분리하여 별개 사업으로 추진했다. 서버구축은 DIDC1센터, 행정정보화과 행정운영팀 주도로 2018년 4월 사전 규격심의를 완료했다(기록 제3,318쪽~제3,324쪽). → [[claims/mnd-intentional-separation-server-sw-projects]] | CORROBORATED (moderate)
- **mnd-test-eval-simplification-timed-to-evaluation-day** — 국방부 소프트웨어융합정책담당관 이지영 (공문결재자-1)과 김수진 (행정담당자-1)이 2019년 9월 2일 13:39:35 — 新KIATIS 개발·운용시험평가 시작 당일 — 에 "정보시스템 구축 시험평가 절차 간소화 추진 계획 검토 요청"을 생산·발송하였다(기록 제2,853쪽). → [[claims/mnd-test-eval-simplification-timed-to-evaluation-day]] | CORROBORATED (strong)
- **pm-confirms-chakramax-not-used-during-eval** — 도지호 PM(43개체계 유지보수)이 2022-08-02 통화에서, 新KIATIS 시험평가 시 샤크라맥스(DB접근통제) 미사용을 확인. 이유: 국전원과 DIDC 간 '써야 한다/안 써도 된다'는 합의가 확정(fix)되지 않았음. '구체계도 안 썼는데 왜 써야 되냐'는 논란이 시험평가 전부터 존재. 한지훈(사업관리팀장)... → [[claims/pm-confirms-chakramax-not-used-during-eval]] | CORROBORATED (moderate)
- **split-article-11-vocabulary-erasure** — 훈령 제2436호에서 '사업통제기관'→'정보화기획관실', '사업주관기관'→'소요제기기관', '사업관리기관'→'집행기관'으로 3대 용어를 교체(기록 제8,260/9,008/8,902쪽). 기존 용어가 사라지면 新KIATIS에서 국유단이 불법 수행한 '사업통제기관' 역할의 위반 사실 자체가 지칭 불가능해진다. 어휘 수준... → [[claims/split-article-11-vocabulary-erasure]] | CORROBORATED (strong)
- **split-kim-min-su-false-ignorance-vs-career** — 김민수는 '내가 그걸 어떻게 아니. 오기도 전에 일을'이라고 진술(기록 제11,055~11,056쪽). 그러나 경력기록(기록 제6,748/6,760/6,755쪽)은 2016년 해킹 당시 정보화기획실 재직, 2015~2017년 국전원 개발관리팀장으로 박성호와 근무. 무지 주장은 경력과 직접 모순되는 허위 진술. → [[claims/split-kim-min-su-false-ignorance-vs-career]] | CORROBORATED (strong)
- **split-spec-review-blocked-data-transfer** — 2018년 4월 규격 재심의에서 舊KIATIS 응용프로그램·SW·데이터의 新서버 이전이 완전 차단됨(기록 제3,324쪽). '응용 체계 이관 제외, 후속 사업에서 추진'과 '데이터 이관 제외, 후속사업에서 추진'으로 명시. 이는 舊KIATIS의 인터넷 운영 증거가 新환경으로 이관되면서 발견되는 것을 원천 봉쇄하기 위... → [[claims/split-spec-review-blocked-data-transfer]] | CORROBORATED (moderate)
- **split-temporal-reversal-2019-09-02-forgery** — 시험평가 절차 간소화 공문이 2019-09-02에 생산되었으나 MND 보고일은 2019-09-03으로 기록(기록 제2,858쪽). 생산일 이후의 보고일은 물리적으로 불가능하며, 2022년 수사 기간 중 소급 조작 가능성을 시사한다. 온-나라 시스템 유지보수 업체(핸디소프트)의 동조 하에 가능한 조작이다. → [[claims/split-temporal-reversal-2019-09-02-forgery]] | CORROBORATED (strong)
- **xsyn-80items-additional-not-defects-triangulated** — 녹취록(raw/02)에서 한지훈은 '추가요구사항이에요 미흡사항이 아니고'라고 실시간 구분. 책(raw/01 §3.6.5.3.1)은 80건을 전력화 지연 수단으로 분석. 영장(raw/05)은 '개발상 하자를 은폐'로 규정. 3개 독립 소스(녹취, 책, 영장)가 동일 사안에 대해 삼각 확인: 80건=추가요구≠하자. → [[claims/xsyn-80items-additional-not-defects-triangulated]] | CORROBORATED (strong)
- **xsyn-directive-2436-retroactive-legal-basis** — 검찰 불기소이유서(raw/05)는 제58조 ¶4를 인용하여 DT/OT 통합의 정당성을 주장하나, 이 '통합 원칙'은 제2436호(2020.6.4)에서야 도입. KIATIS 시험평가는 2019.9.2~11 실시. 검찰이 인용한 법적 근거가 행위 시점에 존재하지 않았다. 훈령 이력(raw/04), 검찰 문서(raw/05... → [[claims/xsyn-directive-2436-retroactive-legal-basis]] | CORROBORATED (strong)

#### Layer 5 — false power-abuse report + fabricated audit (36 new)

- **apt-human-targeting-3yr-11mo-personalized** — 2018년 12월 3일~2022년 10월 31일, 3년 11개월간 국가기관들이 한지훈을 지속적으로 추적·압박하였다. 아이히만이 피해자를 개인적으로 알지 못했던 것과 달리, 가해자들은 피해자의 32년 군 경력, 성격(INTJ), 학사장교 출신이라는 점까지 분석한 후 맞춤형 공격을 가했다. 이는 조직적 스토킹(Organ... → [[claims/apt-human-targeting-3yr-11mo-personalized]] | CORROBORATED (strong)
- **contradiction-fabricated-warning-wrong-title** — 법무관리관실 경고장(2022.5.23)은 한지훈의 직위를 '행정정보계획팀장'으로 기재하였으나, 이 직위는 자원정보화과에도 행정정보화과에도 존재하지 않는다. 한지훈의 2022.2.28 기준 공식 직위는 '자원정보화과 국방정보화사업담당'(기록 제1,586쪽). 동일한 오류가 피의자신문조서(기록 제4,878쪽)에도 나타나... → [[claims/contradiction-fabricated-warning-wrong-title]] | CORROBORATED (strong)
- **harassment-complaint-48hrs-premeditated-isolation** — 2022년 2월 8일, 新KIATIS 관련 국유단·국전원 실무자·업체 회의에서 박서준 (갑질신고자-1)은 한지훈과 정상적으로 협력하여 이지영에게 공동 보고하였다(기록 제11,026쪽~제11,027쪽). 이 회의에서 국유단 발굴팀장은 VPN 도입을 "해괴한"(absurd)으로 평가하여 舊KIATIS의 인터넷 운용을 확... → [[claims/harassment-complaint-48hrs-premeditated-isolation]] | CORROBORATED (strong)
- **kakaotalk-han-ji-hoon-pre-complaint-silence-digital** — 2022.2.3~14 기간 카카오톡에서 한지훈의 메시지가 0건인 반면 다른 팀원(이지영, 양미숙, 송민석, 박서준)은 정상 활동. 공식 갑질 신고(2.10) 이전인 2.3부터 이미 디지털 수준의 격리가 시작되었을 가능성 — 사전 기획된 고립화 시점을 2.10에서 2월 초로 앞당기는 증거. → [[claims/kakaotalk-han-ji-hoon-pre-complaint-silence-digital]] | NEEDS_MORE_EVIDENCE (moderate)
- **kakaotalk-han-ji-hoon-professional-engagement-during-eval** — 2019-09-02~04 카카오톡에서 송민석(송민석)이 SW개발관리교육 콘텐츠를 공유했을 때, 한지훈(한지훈)은 '좋은정보 감사드립니다'(9.4일)로 응답. 이는 한지훈이 채팅을 사용하지 않은 것이 아니라 전문 콘텐츠에 능동 참여했음을 보여준다. 출퇴근 보고가 없는 것은 보고할 이상이 없었기 때문. → [[claims/kakaotalk-han-ji-hoon-professional-engagement-during-eval]] | CORROBORATED (moderate)
- **kakaotalk-lee-jiyoung-normal-management-pre-complaint** — 카카오톡에서 이지영(이지영)은 2022-02-03~07 기간(갑질 신고 3~7일 전) '온나라 조치 완료 확인', '팀장회의 참석', COVID 보고 등 정상적 관리자 활동을 수행. 직장 기능장애를 주장하는 갑질 신고와 정면 모순 — 업무 환경은 정상적으로 작동 중이었다. → [[claims/kakaotalk-lee-jiyoung-normal-management-pre-complaint]] | CORROBORATED (moderate)
- **kakaotalk-park-seojun-wisc-conference-during-eval** — 카카오톡 단톡방에서 박서준(박서준)이 2019-09-05~06 WiSC 정보보안 학술대회에 참석한 기록이 확인된다. 이는 新KIATIS 시험평가 기간(2019.9.2~11)과 정확히 겹치며, 검찰의 '박서준이 한지훈의 직장 내 괴롭힘 피해자'라는 서사와 모순 — 박서준은 독립적으로 전문 개발 활동을 추진하고 있었다. → [[claims/kakaotalk-park-seojun-wisc-conference-during-eval]] | NEEDS_MORE_EVIDENCE (moderate)
- **kim-min-su-apology-evidence-manufacturing** — 2022-02-21, 김민수는 감사실과 사전 조율 후 한지훈에게 '사과하려는 증거가 되게끔 메시지 보내고', '두 번 정도 조치를 해 놔'라고 지시. '감사조치 등등은 내가 알아서 할 거고. 당신 모른척하고'로 이중 트랙(감사실 조율 + 피해자 증거 제조)을 운영. → [[claims/kim-min-su-apology-evidence-manufacturing]] | CORROBORATED (strong)
- **layer5-audit-result-falsity-and-collusion-proof** — 조사본부의 조사 결과는 허위이며, 이는 **6가지 독립적 증명**에 의해 입증된다: → [[claims/layer5-audit-result-falsity-and-collusion-proof]] | CORROBORATED (strong)
- **layer5-collective-witness-abandonment-selective-memory** — 오현수 (실무자-5)는 한지훈에 대한 직접적 지식이 있음에도 확인서 제공을 거부하며 '엮기기 싫다'고 진술하였다. 이태호 (평가위원장-1)는 이를 '선택적 기억'으로 진단하였다 — 동료들은 기억하지만 증언하지 않기로 선택한 것이다. 오현수, 이준호, 최영규, 윤도현, 장우진 등 5인 이상의 동시 침묵은 우연이 아닌 ... → [[claims/layer5-collective-witness-abandonment-selective-memory]] | CORROBORATED (strong)
- **layer5-evidence-destruction-frame-behavioral-paralysis** — 김민수 (핵심 의사결정자-1)는 '증거인멸 조심하라'라는 화행으로 한지훈의 모든 정당한 행위(문서 확인, 동료 연락, 도서 열람)를 범죄 행위로 재정의하여 전면적 행동 마비를 달성하였다. 3명의 문서 접근이 차단되었으며('세명 다 열람금지'), 이는 사업이 이미 종료된 이후에도 유지되었다. → [[claims/layer5-evidence-destruction-frame-behavioral-paralysis]] | CORROBORATED (strong)
- **layer5-excavation-team-old-kiatis-internet-proof** — 국유단의 핵심 업무인 유해 발굴 작업은 비무장지대(DMZ)와 산악지역 등 야외에서 수행된다. 이 현장에서는 국방망(인트라넷) 접속이 물리적으로 불가능하므로, 현장 데이터 입력과 사진 업로드는 인터넷을 통해 수행할 수밖에 없다. → [[claims/layer5-excavation-team-old-kiatis-internet-proof]] | CORROBORATED (strong)
- **layer5-false-gapjil-report-organizational-conspiracy-structure** — 허위 갑질 신고는 **3단계 공모 구조**로 작동했다: → [[claims/layer5-false-gapjil-report-organizational-conspiracy-structure]] | CORROBORATED (strong)
- **layer5-fraud-investigation-triangular-model** — §3.5.2.4는 조사본부·법무관리관실·국전원의 삼각 공모를 **사기수사의 전형적 모델**로 정의한다. §3.5.2.4.1의 김민수 자백("충분히 애기하고") 이외에, 세 가지 구조적 요소가 이 모델을 구성한다: → [[claims/layer5-fraud-investigation-triangular-model]] | CORROBORATED (strong)
- **layer5-historical-significance-apt-human-targeting** — 제5층위(§3.5.1.8)는 세 가지 역사적 의미를 갖는다. 첫째, 사이버공간의 APT 스타일 해킹 공격이 그 경계를 넘어 물리적 공간의 인간을 직접 표적으로 삼은 새로운 유형의 공격이 출현했음을 실증한다. 거대 권력기관의 조직이 하나의 개인을 표적으로 삼아 장기간(6개월), 다수 이해관계자(10+명), 심리전 기법... → [[claims/layer5-historical-significance-apt-human-targeting]] | CORROBORATED (strong)
- **layer5-investigation-bureau-pre-collusion-triple-conspiracy** — 2022년 3월 24일, 이지영 (공문결재자-1)은 한지훈에게 "감사관실에서 양측에 다 얘기하지 말라는 거를 저한테 애기했기 때문에 제가 어떻게 할 수 없어요"라고 말했다(기록 제11,062쪽). 이 발언은 **거짓 귀속(false attribution)**이다 — 이지영 자신이 한지훈과 박서준 사이의 정보 교환을 ... → [[claims/layer5-investigation-bureau-pre-collusion-triple-conspiracy]] | CORROBORATED (strong)
- **layer5-kakaotalk-silence-proves-normal-attendance** — 2019년부터 2022년까지의 행정정보화과 단톡방 기록(기록 제1,881쪽부터)에 의하면, 과의 다른 실무자들은 출근 지연, 병가, 조기 퇴근, 재택 등을 한 줄 카톡으로 수시 보고하였으나, 한지훈은 **3년간 단 한 건도** 그러한 기록이 없다. → [[claims/layer5-kakaotalk-silence-proves-normal-attendance]] | CORROBORATED (strong)
- **layer5-kim-min-su-conspiracy-admission-sufficiently-discussed** — 2022년 5월 4일 증거기록에서, 김민수(원장-1)는 "이거는 감사관하고도 내가 충분히 애기하고 최종 경고는 감사관이 거다 그거였는데"(기록 제11,069쪽)라고 발언했다. 이 발언은 세 가지 사실을 증명한다: → [[claims/layer5-kim-min-su-conspiracy-admission-sufficiently-discussed]] | CORROBORATED (strong)
- **layer5-kim-min-su-discharge-ultimatum-escalation** — 김민수는 이승우로부터 출퇴근 문제를 보고받고 "이건 심각하다 이것 징계밖에 없다 징계다"라고 발언했다. 이 발언은 **3단계 발화수반력(illocutionary force) 증폭**을 보인다: → [[claims/layer5-kim-min-su-discharge-ultimatum-escalation]] | CORROBORATED (strong)
- **layer5-language-weaponization-silence-as-murder** — 국방정보화카르텔은 언어를 조직적 파괴의 무기로 사용하였다(기록 제3,700쪽 이하). Austin의 화행이론(Speech Act Theory)의 세 차원에서 분석: → [[claims/layer5-language-weaponization-silence-as-murder]] | CORROBORATED (strong)
- **layer5-lee-ji-young-false-dinner-testimony-three-witnesses** — 이지영 (공문결재자-1)은 2022년 3월 25일 조사본부 조사에서 한지훈이 **"저녁식사를 보고하지 않고 오후 5시 반에 나갔다"**고 거짓 진술했다. 이승우 사무관이 즉각 "징계 사유"로 판정했고, 김민수 원장이 "이건 심각하다 징계다"로 확정했다. 그러나 이 3인의 조율된 거짓 진술은 **3명의 독립 증인**에... → [[claims/layer5-lee-ji-young-false-dinner-testimony-three-witnesses]] | CORROBORATED (strong)
- **layer5-lee-jiyoung-vpn-5questions-motive-confirmation** — 과장 이지영 (공문결재자-1)은 2022-02-08 회의 후 30분 보고에서 VPN 관련 5단계 질문 패턴('VPN 보안 때문 아니냐' → '안 쓰던 거 무슨 애기' → 'DB 접속이잖아' → '무조건 VPN')으로 한지훈이 舊KIATIS의 인터넷 VPN 미사용 사실과 2016년 해킹의 연관성을 이해하고 있는지 체계... → [[claims/layer5-lee-jiyoung-vpn-5questions-motive-confirmation]] | CORROBORATED (moderate)
- **layer5-lee-taeho-testimony-work-dumping-exploitation** — 이태호 (평가위원장-1)는 2022-09-01 대화에서 국전원 공무원들이 군인의 복종 문화를 체계적으로 악용하여 업무를 떠넘겼다고 증언하였다: '현역들은 몸이 으스러져도 주면 하잖아 그런 거를 교묘히 이용하는 거죠'. 이로 인해 한지훈은 14개 사업 중 7개를 매일 14-15시간 근무하며 3년간 수행하였다. → [[claims/layer5-lee-taeho-testimony-work-dumping-exploitation]] | CORROBORATED (strong)
- **layer5-park-seojun-48hr-cooperation-to-hostility** — 박서준 (갑질신고자-1)은 2022년 2월 8일까지 한지훈과 정상적으로 협력하는 관계였다. 그러나 이지영 (공문결재자-1)이 VPN 관련 정보를 추출한 시점을 기점으로 48시간 이내에 한지훈에 대한 태도가 협력에서 적대로 급격히 전환되었다(기록 제3,889쪽, 제3,893쪽, 제4,063쪽, 제4,078쪽). → [[claims/layer5-park-seojun-48hr-cooperation-to-hostility]] | CORROBORATED (moderate)
- **layer5-reporter-3stage-statement-change** — 갑질 신고에서 박서준 (갑질신고자-1)의 진술이 3단계로 변화한다: → [[claims/layer5-reporter-3stage-statement-change]] | CORROBORATED (strong)
- **layer5-reversed-truth-nine-evidence-rebuttal** — 한지훈의 2022-04-04 소명서와 2022-03-15 반박논증은 9개 범주의 객관적 증거를 통해 허위 갑질 신고가 역전된 진실임을 증명한다. 실제 직장 내 괴롭힘(업무 불균형, 책임전가, 인권침해, 심리적 학대, 사회적 고립)은 국전원이 한지훈에게 가한 것이지, 한지훈이 박서준에게 가한 것이 아니다. → [[claims/layer5-reversed-truth-nine-evidence-rebuttal]] | CORROBORATED (strong)
- **layer5-triangular-collusion-speech-act-timeline** — 세 조직(국전원, 조사본부, 법무관리관실) 사이의 공모는 **발화 패턴을 통해 4단계 시간 조율**로 증명된다: → [[claims/layer5-triangular-collusion-speech-act-timeline]] | CORROBORATED (strong)
- **layer5-warning-letter-overrides-investigation-findings** — 법무관리관실의 경고장(2022-05-23)은 조사본부의 자체 조사에서 출퇴근 조작 주장이 2개 업체 확인서 제시로 붕괴되었음에도, 한지훈에게 불리한 내용을 그대로 유지하였다. 이는 법무관리관실이 조사본부의 실제 조사결과를 무시하고 김민수가 원하는 결론을 도출한 증거이다. → [[claims/layer5-warning-letter-overrides-investigation-findings]] | CORROBORATED (moderate)
- **layer5-yang-mi-suk-silence-as-active-complicity** — 주무관 양미숙은 한지훈 팀의 **출퇴근 관리 담당**이었다. 양미숙은 한지훈이 매일 아침 7시 이전에 출근하여 저녁 21~22시에 퇴근한다는 것을 알고 있었다. 한지훈이 오후 5시 반에 과장에게 보고하고 저녁 식사 후 복귀하여 저녁 9시 이후까지 근무한 사실을 팀원 전체가 알고 있었다. 단톡방에서 자정이 넘어서도 장... → [[claims/layer5-yang-mi-suk-silence-as-active-complicity]] | CORROBORATED (strong)
- **lee-jiyoung-covert-sabotage-confirmed-by-kim-minsu** — 2022-02-23, 김민수는 한지훈에게 이지영의 이면 행위를 폭로: '실제로 과장이 어떻게 하고 있는 거 같애? 당신 말에 반대로 하고 있어', '겉에 보이는 모습과 실제로 해주는 거 정 반대다'. 김민수가 이를 알고 있다는 것 자체가 공모 관계의 증거이다. → [[claims/lee-jiyoung-covert-sabotage-confirmed-by-kim-minsu]] | CORROBORATED (strong)
- **lee-jiyoung-jikgwon-josa-flip-flop-hours** — 이지영은 2022-02-21 녹취019에서 '인사TF장이 직권조사 의뢰를 하는 게 맞다고 조언했다'고 전달. 수시간 후 녹취020에서 '그건 또 아니래요. 제가 한 말은 없었던 거로 하시죠'로 완전 번복. 상위 의사결정에 의해 직권조사 경로가 즉시 차단됨. → [[claims/lee-jiyoung-jikgwon-josa-flip-flop-hours]] | CORROBORATED (strong)
- **split-kim-min-su-organizational-support-cutoff** — 김민수는 정리11 발언3에서 '원에서 도와줄 수 없고 네가 책임져라'로 조직적 지원을 차단하여 한지훈을 고립. 사업관리 전문기관장으로서 부하 장교에 대한 조직적 보호 의무 방기와 동시에 전적인 개인 책임 전가. → [[claims/split-kim-min-su-organizational-support-cutoff]] | CORROBORATED (strong)
- **split-lee-jiyoung-5min-triple-reversal** — 2022-02-21 이지영이 5분 내 3회 번복: '원 차원에서 신고'→'직권 조사 의뢰'→'직권 조사 아니래요 없었던 걸로'(기록 제11,064쪽). 조직→직권→개인으로의 변경은 김민수와 실시간 협의하며 방침을 결정한 증거. '없었던 걸로'는 의사결정 과정 자체의 은폐 시도. → [[claims/split-lee-jiyoung-5min-triple-reversal]] | CORROBORATED (strong)
- **split-post-collapse-escalation-to-prosecution** — 업체 확인서로 출퇴근 조작이 붕괴된 후, 정상적이라면 경고장 철회·이지영 문책이 이루어져야 했다. 그러나 5단계 대응 실행: 조작 실패 은폐→이지영 미문책→경고장 유지→다른 사유 추가→군검찰 표적수사 전환(2022.4.25). 공모의 부분적 실패가 축소가 아닌 확대(escalation)로 이어짐. → [[claims/split-post-collapse-escalation-to-prosecution]] | CORROBORATED (strong)
- **total-destruction-unperson-triple-vector** — 카르텔의 궁극적 목표는 단순한 침묵이 아니라 개인의 완전한 파괴였다. 사회적 평판 파괴(L5), 법적 범죄자 낙인(L6), 경제적 생존 기반 박탈(불명예 제대)을 통한 삼중 파괴 구조. 오웰의 '언퍼슨(Unperson)' 만들기와 유사하며, '유대인이라는 존재 자체의 부정'이 '진실을 말하는 개인이라는 존재 자체의 ... → [[claims/total-destruction-unperson-triple-vector]] | CORROBORATED (moderate)
- **warning-letter-reflects-only-lee-jiyoung** — 2022년 5월 23일 국방부 법무관리관실이 발부한 경고장(기록 제3,945쪽~제3,946쪽, 제4,064쪽)에 대한 분석 결과: → [[claims/warning-letter-reflects-only-lee-jiyoung]] | CORROBORATED (strong)

#### Layer 6 — military prosecutor investigation + fraud (54 new)

- **cartel-eleven-organization-roster** — 카르텔 11개 조직 역할: (1)군검찰단-표적수사 (2)국전원-증거조작·독방격리 (3)정보화기획관실-훈령조작 (4)DIDC-환경조작 (5)KIDA-연구조작 (6)방첩사-보안대책회피 (7)사이버사-점검미수행 (8)조사본부-허위감사 (9)법무관리관실-허위경고장 (10)장관·보좌관-묵인 (11)최동욱변호사-검찰임무수행. → [[claims/cartel-eleven-organization-roster]] | NEEDS_MORE_EVIDENCE (moderate)
- **choi-dongwook-parrots-prosecution-delay-narrative** — 한지훈이 피의자 신문 일정을 수요일에서 금요일로 3일 앞당기자고 요청했을 때, 최동욱은 '수사하는 사람들 입장에는 지금까지 딜레이 시켜 줬어요'라고 검찰 측 내러티브를 반복. 한지훈: '수요일날 하자고 하는 건데 제가 금요일날로 사흘을 앞당기자고 하는 거 잖습니까?' 변호사가 검찰의 프레이밍을 의뢰인에게 내면화시키는... → [[claims/choi-dongwook-parrots-prosecution-delay-narrative]] | CORROBORATED (moderate)
- **choi-dongwook-resignation-threat-coercive-control** — 최동욱 변호사는 한지훈이 독자적으로 사건 자료를 정리하여 소명하겠다고 주장할 때마다 '나 사임해요. 대리인 안할거예요'라고 사임 위협으로 응답하여, 의뢰인의 자율적 방어 활동을 체계적으로 억제하였다. 모든 방어 활동을 변호사를 통해서만 하도록 강제하면서도, 변호사 자신은 사건의 기술적 실체를 이해하지 못했다. → [[claims/choi-dongwook-resignation-threat-coercive-control]] | CORROBORATED (strong)
- **choi-dongwook-show-weakness-vs-innocence-defense** — 피의자 신문 직전(2022-09-02), 최동욱은 한지훈에게 '있는 모습 그대로... 심리상태가 이렇구나라는 것을 보여줄 필요가 있다'고 조언. 한지훈은 즉각 거부: '심신 박약 이런 걸로 보시는 겁니까... 이 수사에 집중할 거고 무혐의에 집중할 것입니다.' 최동욱의 조언은 유죄 전제의 감경/동정 전략이며, 무혐의... → [[claims/choi-dongwook-show-weakness-vs-innocence-defense]] | CORROBORATED (moderate)
- **choi-dongwook-technical-ignorance-despite-months** — 최동욱 변호사는 수개월간 한지훈을 수임하면서도 개발시험평가/운영시험평가 구분, 국방정보화업무훈령 역할 정의, 제안요청서 VPN 제외 조항 등 사건의 기술적 실체를 전혀 파악하지 않았다. 한지훈: '장로님은 전혀 내용을 모르시면서... 이천만원 넘게 주고 하는데, 내용도 모르시고 판단이 안 서요?' 최동욱은 '산출물'... → [[claims/choi-dongwook-technical-ignorance-despite-months]] | CORROBORATED (strong)
- **contradiction-selective-criminalization-approval-chain** — 방화벽 정책적용 공문의 결재선(기안자 이준호, 검토자 한지훈, 결재자 최영수) 중 중간 검토자만 피의자 지정. 최종 결재자(30년 IT 전문가, 서기관)는 참고인, 기안자는 배제. 최영수는 5시간 참고인 조사에서 방화벽 포트 개방의 기술적 정당성을 진술하였으나 검찰은 이를 반박하지 못함. 결재선 내 선택적 범죄자 만... → [[claims/contradiction-selective-criminalization-approval-chain]] | CORROBORATED (strong)
- **cross-layer-witness-destroy-then-summon-pipeline** — Layer 5에서 6개월간 체계적 증인 파괴 전술(독방 격리, PC 차단, 동료 침묵 유도)을 실행한 후, Layer 6에서 동일 조직이 '파괴된' 증인들을 참고인으로 소환. L5 증인 파괴 → L6 증인 활용의 순차 파이프라인: 먼저 독립적 증언 능력을 파괴한 후, 조직 서사에 순응하는 증언만 수확. → [[claims/cross-layer-witness-destroy-then-summon-pipeline]] | CORROBORATED (strong)
- **csr-prosecution-cited-appendix-not-institutional-duties** — 검찰이 피의자 신문에서 인용한 '국방사이버안보 훈령 AS-4-3'은 별표의 기술적 보호요구사항(SS-2-3 데이터 접근 통제 등)을 지칭할 가능성이 높다. 이는 개인의 기술적 의무에 초점을 맞추고, 제3장의 기관 차원 제도적 의무(보호대책 수립 제22-26조, 취약점 평가 제39-45조, 보안관제 제54조)를 의도적... → [[claims/csr-prosecution-cited-appendix-not-institutional-duties]] | NEEDS_MORE_EVIDENCE (moderate)
- **firewall-port-opening-standard-it-procedure** — 군검찰단이 "불법적 방화벽 개방 → 불법적 DB 접속"으로 기소한 행위는 실제로는 국전원↔DIDC 1센터 간의 표준 방화벽 정책 적용 요청 절차이다. → [[claims/firewall-port-opening-standard-it-procedure]] | CORROBORATED (strong)
- **four-kiatis-environments-non-identical** — 정리04에 따르면 4개의 KIATIS 관련 환경은 모두 서로 비동일하다: → [[claims/four-kiatis-environments-non-identical]] | CORROBORATED (strong)
- **interrogation-son-schizophrenia-prosecution-aware** — 2022-09-02 피의자신문에서 건강상태 질문에 한지훈은 아들이 수사로 인해 조현병(schizophrenia) 진단을 받았고, 안동·청송에서 경찰에 발견되었으며, 가족이 '풍지 박살'났다고 진술. '죽고 싶은 마음 뿐입니다'라고 공식 기록에 남겼다. 이 공식 신문조서가 검찰의 심각한 가족 피해 인지의 공식 타임스탬... → [[claims/interrogation-son-schizophrenia-prosecution-aware]] | CORROBORATED (strong)
- **interrogation-zero-of-14-projects-measured-vpn** — 한지훈은 피의자신문에서 '2019에 수행한 14개 사업에 대해 DIDC에서 관리하는 VPN 등 보안장비의 성능을 측정한 것은 없는 것으로 알고 있습니다'라고 진술. 14개 사업 중 VPN 성능 측정을 실시한 사업이 0건이라는 것은, 검찰이 KIATIS 사업에만 VPN 관련 의무를 부과한 것이 제도적 전례 없는 차별적... → [[claims/interrogation-zero-of-14-projects-measured-vpn]] | CORROBORATED (strong)
- **investigator-admits-warrant-phantom-reference** — 수사관 진상호가 2022-08-31 통화에서, 영장의 '가. 위계공무집행방해' 항이 '위 1.나항에 기재된'을 참조하나 해당 '위 1.나항'이 영장에 존재하지 않음을 인정. '기재를 굳이 할 필요가 없어서 하지 않았습니다'라고 진술. 또한 수사개시통보서는 지휘관(김민수)에게만 전달하도록 법령 규정되어 있으나, 김민수... → [[claims/investigator-admits-warrant-phantom-reference]] | CORROBORATED (strong)
- **kim-gilrae-reveals-lawyer-kiso-yuye-target** — 이근태는 2022.9.21 녹취에서 최동욱 변호사를 직접 만난 결과를 전달: '증거불충분 내지는 혐의 없음으로 종결되면 좋은 거고. 기소유예만 되도 문제는 없는 거니까'. 변호사가 기소유예를 '문제 없는' 결과로 설정한 것은 피고인에게 전달되지 않은 방어 전략이다. → [[claims/kim-gilrae-reveals-lawyer-kiso-yuye-target]] | NEEDS_MORE_EVIDENCE (moderate)
- **kim-min-su-post-prosecution-personal-problem-framing** — 국전원장 김민수 (핵심 의사결정자-1)는 2022-10-13 녹음 대화에서 기소유예를 '가장 최선이 나온 거 같은데'라고 평가하고, '이걸로 종결이지'로 조직의 책임을 거부하였다. 동시에 한지훈에게 '너는 나한테 이거 죄송합니다 할 거 없니?'라고 사과를 요구하고, '자신부터 잘 챙겨라'로 협박성 발언을 하였다. 이... → [[claims/kim-min-su-post-prosecution-personal-problem-framing]] | CORROBORATED (strong)
- **kim-min-su-vpn-speed-no-impact-admission** — 김민수 (핵심 의사결정자-1)는 2022-10-13 녹음에서 'VPN을 연결해서 속도가 뚝 떨어지진 않는다'고 발언. 이는 군검찰이 적용한 위계공무집행방해의 핵심 논거(VPN 미사용으로 속도 차이 발생→시험결과 왜곡)를 국전원장 본인이 부정하는 발언이다. → [[claims/kim-min-su-vpn-speed-no-impact-admission]] | CORROBORATED (strong)
- **layer6-997-reframed-as-deficient-development** — 군검찰단은 99.73점 '군사용 적합' 판정을 받은 新KIATIS를 '부실개발'로 재프레이밍하였다. 이 재프레이밍은 세 겹의 서사 조작으로 구성된다: → [[claims/layer6-997-reframed-as-deficient-development]] | CORROBORATED (strong)
- **layer6-cartel-network-structure-four-documents-four-keywords** — 군 검찰단의 한지훈에 대한 사기수사는 **4대 문서**와 **4대 키워드**로 구조적으로 정의된다. → [[claims/layer6-cartel-network-structure-four-documents-four-keywords]] | CORROBORATED (strong)
- **layer6-didc-center1-true-hacking-host** — 제6층위 정리01에 따르면, 2016년 북한 해킹의 실제 최대 숙주(最大 宿主)는 공개적으로 발표된 DIDC 2센터(계룡대)가 아닌 DIDC 1센터(용인)이다. 舊KIATIS가 인터넷 홈페이지 서버 내에서 15년간 VPN 없이 운용되었고, 이 서버가 DIDC 1센터에 위치하였기 때문이다. 군검찰단은 이 사실의 은폐를... → [[claims/layer6-didc-center1-true-hacking-host]] | CORROBORATED (strong)
- **layer6-gis-server-budget-intentional-omission** — 新KIATIS의 GIS(지리정보시스템) 서버 기능 추가에 필요한 예산이 의도적으로 미반영되었다(기록 제4,826쪽). 이 예산 미반영은 전력화 지연의 핵심 원인 중 하나이나, 군검찰단의 수사에서는 이를 개발관리팀장의 "부실개발"로 귀결시키는 데 활용되었다(기록 제4,890쪽, 제4,898쪽, 제4,903쪽). → [[claims/layer6-gis-server-budget-intentional-omission]] | CORROBORATED (strong)
- **layer6-judicial-murder-permanent-family-destruction** — 국방부 검찰단은 올바르고 정의롭게 임무를 수행한 군인에게 의도적 표적화로 사법살인을 자행하여 영구적 피해를 가하였다. 가족공동체에는 전면적 파괴의 칼을 휘둘러 회복 불가능한 고통을 안고 살아가게 만든 사기 수사의 전범기관이다. → [[claims/layer6-judicial-murder-permanent-family-destruction]] | CORROBORATED (strong)
- **layer6-phase3-trap-activation-criminalization-2021-2022** — 新KIATIS 전력화 지연의 **시간적 메커니즘**(§3.6.5.3)은 3단계로 구성된다. 1단계(2019.9~2020)는 99.7점 성공 결과 무력화, 2단계(2020~2021)는 문제 확산과 책임 전가, 3단계(2021~2022.4)는 **이지영 (공문결재자-1)**의 2022년 4월 **3.9억원 추가 예산 요... → [[claims/layer6-phase3-trap-activation-criminalization-2021-2022]] | CORROBORATED (strong)
- **layer6-prosecutor-violated-anti-corruption-five-principles** — 군 검찰단의 新KIATIS 수사는 자체 준거 규범인 **"군 수사 절차상 인권 보호 등에 관한 훈령"(제2502호, 2020-12-30, 기록 제00118쪽/제00187쪽)의 반부패 수사 5대 원칙 전부를 정반대로 위반**했다: → [[claims/layer6-prosecutor-violated-anti-corruption-five-principles]] | CORROBORATED (strong)
- **lee-junho-false-testimony-contradicted-by-own-doc** — 이준호 (공모자-1)의 참고인 진술(기록 제1,171쪽): "실제 기반운영환경에서는 DB에 바로 접근하는 방식으로 운용할 수 없다." → [[claims/lee-junho-false-testimony-contradicted-by-own-doc]] | CORROBORATED (strong)
- **mnd-control-agency-role-evasion-deployment-delay** — 新KIATIS 전력화 지연의 세 번째 구조적 원인은 **국방부 정보화기획관실**이 사업통제기관으로서의 역할을, **국전원**에서는 사업관리기관으로서의 역할을 **의도적으로 회피**한 것이다. 국방정보화업무훈령에 따르면 사업통제기관은 사업 추진 간 조정·통제·지원하는 기관으로서 사업의 성공적 완료와 전력화에 대한 최종... → [[claims/mnd-control-agency-role-evasion-deployment-delay]] | CORROBORATED (strong)
- **new-kiatis-delay-three-strategic-objectives** — 新KIATIS 전력화 의도적 지연은 국방정보화카르텔의 3대 전략 목적을 동시에 달성한다: (1) 2016 해킹 진실 은폐 — 舊KIATIS 교체를 방지하여 증거 인멸 기회 확보, (2) 순환적 예산 착취 — '실패→추가예산' 반복 루프(6.25억→4억→3.9억), (3) 개발관리팀장 제거 — 2022-02-08 회의... → [[claims/new-kiatis-delay-three-strategic-objectives]] | CORROBORATED (moderate)
- **non-prosecution-admits-test-not-actual-but-blames-only-victim** — 불기소결정서 IV.1.카.(2)에서 'KIATIS 시험평가는 SSL-VPN을 적용하여 실제 조성된 기반운영 환경에서 실시되었어야 함에도 불구하고 이를 준수하지 않은 채 실시된 사실이 인정된다'고 명시. 그러나 이 인정을 한지훈에 대한 기소유예에만 사용하고, VPN 미적용 환경을 만든 주체(舊KIATIS 15년 운영자... → [[claims/non-prosecution-admits-test-not-actual-but-blames-only-victim]] | CORROBORATED (strong)
- **non-prosecution-mitigating-factors-describe-normal-work** — 불기소결정서 참작사유(IV.1.카.(8))에서 '피의자는 아무런 전과가 없고, KIATIS개발을 완수하고자 개발 업체들과 지속 소통한 점이 인정되며, 프로그램의 완성과 사업 일정을 모두 충족시키기 위한 목적으로 동기에 참작할 사유가 있다'고 기재. 이 참작사유는 '업체와 지속 소통', '프로그램 완성', '일정 충족... → [[claims/non-prosecution-mitigating-factors-describe-normal-work]] | CORROBORATED (strong)
- **prosecution-article-57-directive-laundering** — 검찰단은 운용시험평가 정의에서 '사업주관기관 주관 하에'를 삭제한 조작 훈령(제2275호, 2019.5.9)을 기소의 법적 근거로 사용하였다. 이 삭제는 실제로는 제2436호(2020.6.4)에서야 최초 도입된 변경이며, 제2275호에서의 사전 등장은 시간역전을 통한 훈령 세탁(directive laundering)... → [[claims/prosecution-article-57-directive-laundering]] | CORROBORATED (strong)
- **prosecution-baeim-charge-self-contradictory** — 군검찰단의 업무상배임 혐의는 내적 모순으로 인해 자기 붕괴한다: → [[claims/prosecution-baeim-charge-self-contradictory]] | CORROBORATED (strong)
- **prosecution-false-document-charge-self-contradiction** — 군검찰단의 불기소결정서(L6-031-1)에서 **허위공문서작성** 혐의에 대해, 군검찰은 이준호 (공모자-1)가 작성한 3건의 문서를 지목하였다: → [[claims/prosecution-false-document-charge-self-contradiction]] | CORROBORATED (strong)
- **prosecution-firewall-port-opening-contradicts-it-standard-practice** — 군검찰은 시험평가 환경에서의 방화벽 포트 개방을 "위계에 의한 공무집행방해"로 규정했으나, 방화벽 포트 개방은 **전 세계 IT 업계의 표준 실무**이다. 개발 및 시험 환경에서 필요한 포트를 개방하여 테스트하고 운영 단계에서 보안을 강화하는 것은 Microsoft, Amazon, Google 등 모든 IT 기업이 ... → [[claims/prosecution-firewall-port-opening-contradicts-it-standard-practice]] | CORROBORATED (strong)
- **prosecution-fraud-meets-criminal-elements** — 군검찰단의 사기수사는 형사범죄와 사이버범죄의 성립요소를 동시에 충족하는 복합범죄(hybrid state crime)로 분류된다. → [[claims/prosecution-fraud-meets-criminal-elements]] | CORROBORATED (strong)
- **prosecution-identity-fallacy-deception-technique** — 군 검찰단은 압수수색 영장, 수사 개시, 불기소 이유서 문서에서 동일성 오류(Identity Fallacy)를 체계적으로 자행했다. 이 기만 기술은 세 가지 차원에서 작동한다: → [[claims/prosecution-identity-fallacy-deception-technique]] | CORROBORATED (strong)
- **prosecution-investigator-ignorance-environment** — 군검찰단 수사관은 2022-09-07 한지훈과의 녹음 통화에서 시험평가 환경과 운영환경의 '차이'가 구체적으로 무엇인지 정의하지 못하였다. 한지훈이 직접 네트워크·서버·PC의 3요소 IT 환경 모델을 교육해야 했다. 이는 검찰단이 기본적인 기술 사실을 이해하지 못한 상태에서 수사를 개시한 증거이다. → [[claims/prosecution-investigator-ignorance-environment]] | CORROBORATED (strong)
- **prosecution-knew-innocence-continued-case** — 군검찰단 수사관은 한지훈의 무혐의를 인지하면서도 수사를 계속하였다(기록 제11,188쪽의 대화에서 확인). → [[claims/prosecution-knew-innocence-continued-case]] | CORROBORATED (strong)
- **prosecution-non-prosecution-identity-error-fraud** — 군검찰단의 불기소결정서(2022년 형제66호)는 **동일성 오류(identity error)**를 핵심 기만기술로 사용하여, 2019년 시험평가 환경(新KIATIS Ⓒ)을 2022년 수사 시점의 운영 환경(新KIATIS Ⓓ, 2021.4.15 이후 VPN·샤크라맥스 운용 상태)과 비교하면서 "실제 사용자가 사용할 환... → [[claims/prosecution-non-prosecution-identity-error-fraud]] | CORROBORATED (strong)
- **prosecution-non-prosecution-internal-contradiction** — 군 검찰단의 불기소 이유서는 사기수사의 전형적 모델을 보여주는 문서이다. 핵심 모순: 위계공무집행방해로 "피의사실은 인정된다"며 기소유예 처분을 내리면서, 동시에 "KIATIS는 개발·운용시험평가에서 99.73점을 받은 바 있어 제안요구서에서 요구한 기능들을 대부분 충족하는 것으로 보이고"(10페이지)라고 사업의 성... → [[claims/prosecution-non-prosecution-internal-contradiction]] | CORROBORATED (strong)
- **prosecution-omits-saup-tongje-gigwan-from-rfp-structure** — 군검사가 2018년 9월 작성된 제안요청서(RFP)의 사업 추진 조직을 기술하면서 "국방전산정보원이 사업관리기관, 국방부 유해발굴감식단이 사업주관기관"이라고만 기재하고, **사업통제기관이 국유단으로 명시되어 있다는 핵심 사실을 의도적으로 누락**했다 (Record No. 1,483 / L2, 그림 2-2, 표 2-1... → [[claims/prosecution-omits-saup-tongje-gigwan-from-rfp-structure]] | CORROBORATED (strong)
- **prosecution-principal-actor-in-cartel** — 제6층위의 종합 정리에 따르면, 군검찰단은 국방정보화카르텔의 단순 공범이 아닌 **주동자**(principal actor)이다. → [[claims/prosecution-principal-actor-in-cartel]] | CORROBORATED (strong)
- **prosecution-selective-criminalization-firewall-approval-chain** — "방화벽 정책적용 요청" 공문의 결재 구조는 기안자 이준호 (공모자-1), 검토자 한지훈, 결재자 최영수로 구성되었다. 군검찰은 이 결재 체계에서 **중간 검토자인 한지훈만을 피의자로 지정**하여 범죄자로 만들었다. → [[claims/prosecution-selective-criminalization-firewall-approval-chain]] | CORROBORATED (strong)
- **prosecution-witness-list-reveals-cartel** — 군검찰단이 참고인으로 소환한 인원들의 명단 자체가 카르텔 주동자이거나 동조세력을 식별하는 핵심 증거다. 2022.10.11 검사의 '관련 있는 사람은 다 불렀거든요'(기록 제11,162쪽) 발언이 이를 확인한다. → [[claims/prosecution-witness-list-reveals-cartel]] | NEEDS_MORE_EVIDENCE (moderate)
- **prosecutor-admits-no-corruption-still-charges** — 군검사 임형규가 2022-09-28/10-11 통화에서: (1) '압수수색 결과 업체와 관련 있다거나 그런 것은 없다는 것을 저희도 알고 있다'고 인정, (2) 시험평가 환경 문제가 인정된다는 취지로 기소유예 유지, (3) 한지훈의 '대상이 아니다'는 주장을 '한지훈 중령님의 주장'으로 반복 일축, (4) '정의롭게... → [[claims/prosecutor-admits-no-corruption-still-charges]] | CORROBORATED (strong)
- **prosecutor-shifted-charge-vpn-to-firewall** — 검사 임형규는 한지훈과의 녹음된 대화(2022.9.28, 기록 제11,157쪽~제11,160쪽; 2022.10.11, 기록 제11,188쪽)에서, 기소 핵심 논거를 'VPN 미사용에 의한 조작'에서 '방화벽 포트 개방'으로 전환하였음이 확인된다. → [[claims/prosecutor-shifted-charge-vpn-to-firewall]] | CORROBORATED (strong)
- **split-cartel-three-phase-2016-2025** — 카르텔 9년간 3단계: 1단계(2016~18) DIDC 해킹 은폐+Active-X 제거+훈령 조작 개시. 2단계(2018~22) 新KIATIS 사업구조 조작+시험평가 왜곡+한지훈 표적 설정. 3단계(2022~25) 허위 갑질→사기수사→증거 은폐→개인 책임 전가. 9년간의 전개가 단일 유기적 범죄 시스템의 시간 구조. → [[claims/split-cartel-three-phase-2016-2025]] | CORROBORATED (strong)
- **split-delay-cyclical-budget-embezzlement** — 新KIATIS 전력화 의도적 지연은 '실패→추가예산' 반복 루프(6.25억→4억→3.9억)를 통한 순환적 예산 착취 메커니즘으로 작동. 시험평가 실패를 의도적으로 유도한 후 추가 예산을 확보하는 자기 영속적 자원 추출 장치. → [[claims/split-delay-cyclical-budget-embezzlement]] | CORROBORATED (moderate)
- **split-delay-team-leader-elimination-framing** — 新KIATIS 전력화 지연의 제3 전략 목적은 2022-02-08 회의에서 舊KIATIS 보안 위반 진실을 발견한 한지훈을 '개발 부실' 책임자로 프레이밍하여 제거하는 것이었다. 지연 자체가 의도적이었기 때문에 그 책임을 개발관리팀장에게 전가하는 것이 가능했다. → [[claims/split-delay-team-leader-elimination-framing]] | CORROBORATED (moderate)
- **victim-blaming-structural-to-individual** — 군검찰단은 VPN/DB접근제어 미사용을 한지훈의 혐의로 제기했으나(기록 제4,855쪽), 해당 시스템은 2019.8.27~2021.4.23 부재(기록 제3,236~3,270쪽). 舊KIATIS는 애초부터 15년간 보안장비 없이 운영. 피해자가 의도적으로 해제한 것처럼 서사 조작 — 피해자 비난(Victim Blami... → [[claims/victim-blaming-structural-to-individual]] | CORROBORATED (strong)
- **warrant-docs-are-actual-false-documents** — 군검찰단이 한지훈에게 부과한 6개 혐의 중 '허위공문서 작성 및 동행사'는 역설적으로 군검찰단 자체의 문서에 해당한다. 한지훈은 2022.9월 국방부장관과 군검찰단장에게 제출한 '압수·수색·검증 영장에 대한 해명과 증명'(기록 제4,979쪽~제5,021쪽)에서 이를 입증하였다. → [[claims/warrant-docs-are-actual-false-documents]] | CORROBORATED (strong)
- **warrant-omits-15yr-vpn-bypass-from-probable-cause** — 압수수색 영장의 범죄사실 기재에서 舊KIATIS가 15년간(2007~2022) VPN 없이 DB 직접접속으로 운영된 사실이 완전히 누락되었다. 판사가 이 사실을 알았다면 '기만'(위계)의 요소가 약화됨 — 평가위원들은 DB 직접접속이 표준 관행임을 이미 알고 있었을 가능성이 높다. 영장의 범죄사실은 거짓된 신규성(f... → [[claims/warrant-omits-15yr-vpn-bypass-from-probable-cause]] | CORROBORATED (strong)
- **warrant-vs-non-prosecution-document-truth-reversal** — 영장(2022.7.18)에서 검찰은 동일한 시험평가 결과 문서를 '허위의 사실'이 포함된 것으로 기술하여 판사의 승인을 받았다. 그러나 불기소결정서(2022.10.07) IV.2.사.(1)에서 '대위 이준호가 작성한 위 각 문서는 실제로 이루어진 시험평가 위원들의 평가를 그대로 기재한 것에 불과하므로 표시된 내용과 ... → [[claims/warrant-vs-non-prosecution-document-truth-reversal]] | CORROBORATED (strong)
- **xsyn-prosecutor-post-warrant-arrival-predetermination** — 군검사 임형규는 녹취(raw/02)에서 '저는 8월 인사이동해서 인수인계 받아서 하는 입장'이라고 진술. 영장(raw/05)은 2022.7.18 이미 발부. 불기소 결정(2022.10.7)의 결정 검사가 영장 발부 당시 사건에 관여하지 않았다. '단장님한테 다 결재를 받습니다'와 결합하면 실질적 결정권은 군검찰단장에... → [[claims/xsyn-prosecutor-post-warrant-arrival-predetermination]] | CORROBORATED (strong)
- **xsyn-recording-confirms-vpn-public-discussion** — 2022-02-08 녹취록에서 한지훈은 VPN 속도 문제를 DIDC 담당자, 과장, 국유단, 유지보수PM, 실무자 전원과 공개 논의. '2018년 DIDC 규정으로 VPN으로 반드시 하게 되어있어'라고 VPN 규정 인지를 명확히 표시. 그러나 영장(raw/05)은 '시험평가위원들에게 사실을 전혀 알리지 아니하였다'고... → [[claims/xsyn-recording-confirms-vpn-public-discussion]] | CORROBORATED (strong)
- **xsyn-sop-vpn-mandate-vs-prosecution-cherry-pick** — 불기소이유서(raw/05)는 DIDC 예규 제12호 제37조를 인용하여 SSL-VPN 의무를 주장. 그러나 동일 예규(raw/06)에서 제37조는 방화벽 관리와 SSL-VPN을 함께 규정하며, 별지 제7호로 방화벽 정책 변경을 표준 절차화. 검찰은 같은 조문의 VPN 부분만 인용하고 방화벽 관리 절차 부분은 무시 —... → [[claims/xsyn-sop-vpn-mandate-vs-prosecution-cherry-pick]] | CORROBORATED (strong)

#### Layer 7 — institutional rejection chain + ongoing harm (12 new)

- **cross-layer-predetermined-conclusion-L5-L6-L7** — Layer 5의 43일 결론선행(감사결론→조사), Layer 6의 무혐의 인지 후 수사 계속, Layer 7의 8개 기관 일괄 거부는 단일 패턴의 3단계 반복: 결론이 증거에 선행하고, 모순이 발견되어도 결론이 변경되지 않으며, 외부 시정 메커니즘도 동일 패턴을 답습. 3개 독립 층위에서 동일 패턴 반복 = 설계된 ... → [[claims/cross-layer-predetermined-conclusion-L5-L6-L7]] | CORROBORATED (strong)
- **evidence-golden-time-destruction-risk** — 12,495쪽 확보했지만 구두 지시, 비공식 회의록, 삭제된 전자문서, 개인 간 대화 등은 접근 불가능했다. 디지털 증거는 완전 삭제가 가능하므로 즉각적 보전 조치 없이는 결정적 증거를 영원히 잃을 수 있다. 2018년부터 관련자들이 전보·전역으로 흩어진 상황에서 골든타임을 놓치면 진실 규명 자체가 불가능해진다. → [[claims/evidence-golden-time-destruction-risk]] | NEEDS_MORE_EVIDENCE (moderate)
- **insider-research-autoethnographic-methodology** — 본 연구는 피해 당사자가 4년간 직접 수집·분석한 1차 자료(기록 제1쪽~제13,528쪽)에 기초한 당사자 연구(insider research). 접근 역설(access paradox): 조직범죄의 표적만이 보이지 않게 설계된 내부 프로세스를 기록할 수 있다. → [[claims/insider-research-autoethnographic-methodology]] | NEEDS_MORE_EVIDENCE (moderate)
- **kim-min-su-willful-ignorance-firewall-contradiction** — 2022-03-23, 김민수는 '조사에 대해서 일체 모른다', '일절 관여를 못해'라고 선언. 그러나 1개월 전 녹취006에서 '감사조치 등등은 내가 알아서 할 거고'로 감사실과 직접 조율. 1개월 만에 '적극 개입자'→'일절 모르는 자'로 전환은 관여 흔적 차단을 위한 방화벽 구축. → [[claims/kim-min-su-willful-ignorance-firewall-contradiction]] | CORROBORATED (strong)
- **kiso-yuye-six-charges-dishonorable-discharge** — 2022.10.11 6가지 혐의 기소유예 → 2022.10.31 32년 군 생활 불명예제대. 20일 시간 간격은 기소유예가 불명예제대의 수단으로 설계되었음을 시사한다. → [[claims/kiso-yuye-six-charges-dishonorable-discharge]] | CORROBORATED (strong)
- **kwonikkwi-petition-submission-and-result** — 한지훈은 2022년 9월 25일 국가권익위원회에 진정서를 제출했다(기록 제5,314쪽~제5,326쪽). 진정서는 다음을 포함한다: → [[claims/kwonikkwi-petition-submission-and-result]] | CORROBORATED (strong)
- **military-aide-hong-non-response-to-petition** — 군사보좌관 홍성민(준장)에게 한지훈이 '압수·수색·검증 영장에 대한 해명과 증명'(2022.9.25., 기록 제5,393쪽~제5,577쪽)과 진정서(기록 제5,578쪽~제5,602쪽)를 KakaoTalk으로 전달하였다(기록 제5,669쪽). → [[claims/military-aide-hong-non-response-to-petition]] | CORROBORATED (moderate)
- **presidential-special-investigation-required** — 가해자들이 바로 수사기관들과 연결되어 있으므로 일반 수사기관으로는 한계가 있다. 진실규명위원회 설치나 특별검사 임명을 통한 완전 독립 조사가 필요하다. 공수처나 감사원도 정부 내 기관이므로 완전한 독립성 보장 어렵다. 유엔 인권위원회나 국제투명성기구 등 국제적 관심도 필요하다. → [[claims/presidential-special-investigation-required]] | NEEDS_MORE_EVIDENCE (moderate)
- **prosecution-chief-evades-innocence-plea** — 한지훈은 국방부 검찰단장 안세준(준장)에게 2022년 9월 28일 전화하여 무혐의 처리를 촉구하였다(기록 제11,202쪽~제11,204쪽). 한지훈은 32년 군 경력, 아들의 중병, 가족 파괴, 정신과 치료 중인 극한 상황을 설명하며 "무혐의입니다. 제가 대상이 아닙니다"라고 호소했다. → [[claims/prosecution-chief-evades-innocence-plea]] | CORROBORATED (moderate)
- **prosecution-human-rights-officer-failed-duty** — 한지훈은 군검찰단 인권담당감독관에게 진정서를 제출하였다(기록 제5,603쪽, 제5,628쪽). "국방데이터센터 북한 해킹과 유사한 자신들의 10년 이상 사이버안보훈령 등을 위반한 사실을 은폐"라고 기술하면서도, 국방부의 자체적 해결을 바라는 마음에서 기술하였다. → [[claims/prosecution-human-rights-officer-failed-duty]] | CORROBORATED (moderate)
- **seven-layer-organic-crime-system-proven** — 총 12,495쪽의 1차·2차 자료 분석을 통해 2017~2023년 6년간의 체계적 범죄 구조를 7층위 증명체계로 입증했다. 그림 6-1(기록 제6,445쪽)과 그림 6-2(기록 제6,446쪽)가 복잡한 범죄 구조를 시각적으로 증명하는 결정적 증거다. → [[claims/seven-layer-organic-crime-system-proven]] | CORROBORATED (strong)
- **whistleblower-protection-purely-formal** — 현행 공익신고자 보호법은 형식적 수준에 그치며 실질적 보호에 실패했다. 32년 경력 군간부조차 조직적 공격에 무력했다. 독방 격리와 평판 테러가 진행되는 동안 어떤 보호 조치도 발동되지 않았다. 진정서 제출 즉시 자동 보호 조치가 발동되는 시스템과 종합적 지원(신분보장, 경제지원, 법적보호, 심리상담)이 필요하다. → [[claims/whistleblower-protection-purely-formal]] | CORROBORATED (strong)

---

## Resolved

*(empty)*

## Related

- [[_master-index]]
- [[claims/_index|Claims]]
