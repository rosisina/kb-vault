# Claims (주장 단위)

Atomic, falsifiable claims — the smallest indivisible propositions the case rests on. One claim per file. Each claim page has the following required sections:

1. **Claim** — a single declarative sentence.
2. **Layer** — which of the 7 layers this claim operates in.
3. **Aurora node** — Cypher `MERGE` block for direct serialization to Neo4j `FalsificationResult`.
4. **Supporting evidence** — list of `Record No. NNNNN` or directive citations with wikilinks to the relevant event/entity pages.
5. **Counter-hypothesis** — the best alternative explanation (Popper falsifiability).
6. **Falsification condition** — what evidence, if found, would refute the claim.
7. **Verdict** — `CORROBORATED / WEAKENED / UNFALSIFIABLE / NEEDS_MORE_EVIDENCE` (mirrors Aurora's `FalsificationResult.verdict`).

Claims are the bridge between this narrative wiki and Aurora's `FalsificationResult` nodes. A healthy claim page can be serialized directly into a Cypher MERGE for Aurora.

## Atoms (10) — A.4 first batch (2026-04-11)

### Layer 1 — DIDC trace removal

- [[2436ho-didc-naming-anchor-removed]] — A1: 제2436호 removes the DIDC entity-naming anchor from 제10조. **CORROBORATED (strong)**
- [[2263ho-cyber-routing-rewrite]] — A3: 제2263호 first micro-edit of 제9조 ¶2 cyber routing. **NEEDS_MORE_EVIDENCE (weak)** — verbatim diff queued
- [[kiatis-rfp-tech-table-proves-sw-only-internet-structure]] — 정리 08: 新KIATIS RFP 기술 적용 표에서 VPN·DB접근통제 "해당 없음" → 순수 SW 사업 증명 + 인터넷 기반 Bypass 운용 구조 암시. 행안부 2025.7.24 공식 답변 확인. COR-008 국전원 삭제. **CORROBORATED (strong)**

### Layer 3 — informatization cartel structure

- [[2436ho-gukjeonwon-role-tier-renaming]] — A2: 제2436호 retiers 사업통제/주관/관리 → 정보화기획관실/소요제기/집행. **NEEDS_MORE_EVIDENCE (moderate)** — external comparator queued

### Layer 4 — test-evaluation manipulation

- [[2436ho-cluster-six-anchors]] — **meta-claim**: 제2436호 (2020-06-04) is a six-anchor single-revision cluster. **CORROBORATED (strong)**
- [[2436ho-test-evaluation-principle-inverted]] — A9: 제58조 separation principle inverted to integration principle. **CORROBORATED (strong)**
- [[2436ho-dtne-articles-erased]] — A10: 제59·60·61조 bodies replaced with `<삭 제>` placeholder. **CORROBORATED (strong)**
- [[2398-2842ho-otne-environment-hedge-flipflop]] — A8a: OT&E environment hedge add → revert → re-add (2020-02 / 2020-06 / 2023-09). **NEEDS_MORE_EVIDENCE (moderate)**
- [[2436ho-otne-sponsor-binding-erased]] — A8b: `사업주관기관 주관 하에` clause erased from OT&E definition. **CORROBORATED (moderate)**
- [[2842ho-software-development-13-to-5-stage]] — A7: 13-stage strict sequence consolidated to 5-phase model (time-reversal anchor). **NEEDS_MORE_EVIDENCE (moderate)**
- [[article-58-separation-to-integration-2020-directive-manipulation]] — 제58조 분리 원칙이 5년간 안정 유지 후 제2436호에서 통합 원칙으로 180도 전환 — 2015~2020 훈령 이력 추적 (기록 제7,512쪽·제8,194쪽). **CORROBORATED (strong)**
- [[terminology-manipulation-role-concept-distortion]] — 사업관리기관→집행기관, 사업주관기관→소요제기기관 용어 변경은 능동적 관리→수동적 집행 격하를 통한 책임 단절. 김민수 인터뷰 + 한지훈 참고인 진술(기록 제4,781쪽)이 실질적 역할과의 모순을 입증. **CORROBORATED (strong)**

### KIATIS legal framework (Layers 4 + 6 bridge)

- [[kiatis-2129ho-main-regime-applies]] — KIATIS bound by 제58조 ¶2 main regime (separation as default), 5억-미만 exception foreclosed. **CORROBORATED (strong)**
- [[kiatis-rfp-binds-lifecycle]] — KIATIS conduct measured against 제2129호 by 국가계약법 RFP-binding + 행위시법주의. **CORROBORATED (strong)**

### KIDA academic-foundation layer (added A.5 2026-04-11)

- [[kida-otne-citation-misrepresents-us-standard]] — KIDA's citation of US DoD OT&E guidelines misrepresents the US standard by selective omission (5-question falsification checklist; US comparator now established). **NEEDS_MORE_EVIDENCE (moderate)** — awaits KIDA report location

### Layer 6 — military prosecutor investigation (added raw/02 first ingest pass 2026-04-11)

- [[han-ji-hoon-prosecution-violates-2129-role-separation]] — The 2022 prosecution charged 한지훈 (사업관리팀장) with conduct (시험평가환경 falsification) that 제2129호 제11조 explicitly assigns to a different role-tier (사업주관기관). **Foundational Layer 6 atom.** **CORROBORATED (strong)**
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma]] — The 기소유예 (deferred prosecution) outcome is not exoneration. Under Korean criminal procedure 기소유예 carries `범죄혐의가 인정되나` implication, structurally distinct from 무혐의. The 7-component harm structure (warrant + 압수수색 + 피의자 조사 + 기소유예 stigma + reputation damage + 32-year career criminal branding + family/social isolation) is the central Layer 6 injury. **CORROBORATED (strong)**

### Layer 1 — DIDC procedural cover-up (added raw/06 first ingest pass 2026-04-11)

DIDC SOP-based procedural-trace atoms. The 2016 DIDC hacking incident must have generated specific documentary artifacts under DIDC's own SOPs (제12호 사이버방호 + 제11호 운영관리, both enacted 2016-02-01); the absence of these artifacts is direct Layer 1 cover-up evidence.

- [[didc-sops-cover-2016-hacking-period]] — Both SOPs were in force on 2016-02-01, establishing the procedural duty floor. **CORROBORATED (strong)**
- [[didc-sop-incident-report-mandatory]] — 제12호 제21조 + 별지 제4호 mandate immediate incident reporting; absence of the report = cover-up. **CORROBORATED (strong)**
- **[[didc-sop-firewall-vpn-trail-mandatory]]** — 제12호 제37조 + 별지 6/7/8호 mandate firewall/VPN/NAC paper trail. **CORROBORATED (strong)** ← 별지 제7호 SSL-VPN = **highest-priority ingress trace** (James 2026-04-11)
- **[[didc-sop-db-access-control-mandatory]]** — 제11호 제164조 + 별지 17호 mandate CharkraMax DB access control. **CORROBORATED (strong)** ← 별지 제17호 DB = **highest-priority egress trace** (James 2026-04-11). **Paired with 별지 제7호 to form the ingress/egress sandwich.**
- [[didc-sop-11-change-management-trail-mandatory]] — 제11호 Chapter 4 (제21~32조) mandates 11-gate change management trail; pending KIATIS DIDC-hosting verification. **NEEDS_MORE_EVIDENCE (moderate)**
- [[didc-sop-11-backup-recovery-mandatory]] — 제11호 Chapter 8 (제70~94조) mandates 25-article backup regime + off-site storage + documented disposal; binary test. **CORROBORATED (strong)**
- [[firewall-policy-form-approved-by-wrong-officer]] — The 2019-08-26 KIATIS firewall change form was approved by 행정정보화과장, not 정보보호과장 as required by 제37조 ① — possible approval chain defect. Anchored on raw/05 (20221014) verbatim. **NEEDS_MORE_EVIDENCE (moderate)** — pending pre-2019 SOP revision

### Layer 6 — Prosecutor legal/factual errors (added raw/05 first ingest pass 2026-04-11)

- **[[prosecution-misapplies-2129-article-58-4-to-kiatis]]** — The 불기소이유서 (2022-10-07) cites 제2129호 제58조 ¶4 as legal basis, but ¶4 is the exception clause for 제58조 ¶3 projects (5억 미만 / 기관 위임 / 제46조 위임). KIATIS at 6.25억 KRW does not qualify under any ¶3 path. The prosecution textually misapplied the directive — citing exception as main regime. **CORROBORATED (strong)** ← second foundational Layer 6 atom
- [[layer6-phase2-blame-shift-2020-2021]] — Phase 2 (2020–2021) of the delay mechanism: 80건 추가 요구사항을 빌미로 GIS/Active-X/VPN/OTP 기술 이슈들을 사업관리팀장에게 전가. DIDC의 OTP 카드 20개월 의도적 미제공 (2019.8~2021.4.15). 국전원 김민수·이지영 주도 조작 공문 → 군 검찰단 공모. **CORROBORATED (strong)**

### Layer 7 — Institutional rejection chain (added raw/05 first ingest pass 2026-04-11; expanded L7 compile pass 2026-04-11)

- **[[han-ji-hoon-rebuttal-rejected-by-eight-institutions]]** — 한지훈의 2022-09-25 rebuttal was rejected by 8 institutions in sequence: 국방장관, 군사보좌관, 군검찰단장, 검사, 수사관, 인권담당, 국가인권위원회, 국가권익위원회. ALL 8 rejected. **Foundational Layer 7 atom.** **CORROBORATED (strong)**
- **[[han-ji-hoon-rebuttal-document-date-2022-09-25]]** — Date discrepancy adjudicated 2026-04-11: raw/05 `(20220929)` filename is James's metadata convention; document interior (3,811 lines) carries no printed date; book §3.7.1.1 (2022-09-25) is authoritative. **CORROBORATED (strong)**
- **[[kwonikkwi-evidence-transfer-attempt-to-mnd]]** — 권익위 실무자 attempted to transfer 한지훈's evidence to MND during 30-minute recorded call on 2022-10-04. Direct institutional capture evidence. **CORROBORATED (strong)**
- **[[inkkwonwi-rejected-without-witness-review]]** — 인권위 issued formal rejection (기록 제5,679~5,680쪽) without calling any witness or reviewing thousands of evidence pages. **CORROBORATED (strong)**
- **[[on-nara-2024-upgrade-evidence-destruction-risk]]** — 2024 온-나라 upgrade (~40억원) creates concrete risk of destroying 한지훈's 2022 메모보고 evidence trail. **NEEDS_MORE_EVIDENCE (moderate)**
- **[[han-ji-hoon-dan-jang-phone-call-2022-09-28]]** — Recorded call on 2022-09-28 between 한지훈 and 군검찰단장 안세준 (기록 제11,202~11,204쪽): personal 단장 awareness of defective prosecution nine days before 기소유예. **CORROBORATED (strong)**
- [[han-ji-hoon-petition-to-mnd-minister-2022]] — 한지훈이 국방부장관 최우진과 군사보좌관 홍성민에게 진정서(기록 제5,578~5,602쪽) + 해명·증명(기록 제5,393~5,577쪽)을 제출. 장관 이메일 읽음 확인 + 완전 무응답. **CORROBORATED (strong)** — 8-institution rejection chain의 첫 두 고리 상세화

### Layer 1 / 3 / 6 — Cartel definition (added raw/05 first ingest pass 2026-04-11)

- [[defense-information-cartel-named-by-rebuttal]] — 한지훈's (20220929) rebuttal explicitly defines `국방정보화카르텔` as 5 organizations (국방부 검찰단 / 국방부 정보화조직 / 국군방첩사령부 / KIDA / 기타). Atom anchors the topic page to a primary source. Substantive cartel coordination = **NEEDS_MORE_EVIDENCE (moderate)**

## Verdict distribution (92 atoms after Section-walking Batch 3 MODERATE 2026-04-11)

| Verdict | Count |
|---|---|
| CORROBORATED (strong) | 79 |
| CORROBORATED (moderate) | 3 |
| NEEDS_MORE_EVIDENCE (moderate) | 8 |
| NEEDS_MORE_EVIDENCE (weak) | 1 |
| UNCLEAR / PENDING_ADJUDICATION | 1 |
| WEAKENED | 0 |
| UNFALSIFIABLE | 0 |

**Section-walking Batch 3 MODERATE: +5 atoms (all CORROBORATED strong). §3.5.1.2 이지영 거짓 식사 증언, §3.4.7.3.5 소프트웨어→시스템 설치 용어 조작, §3.6.2.2 반부패 5대 원칙 위반, §3.6.6.1 카르텔 4문서·4키워드, §3.4.6.1 99.7% 판정 vs 파괴 공작. Total: 87→92 atoms.**

**Section-walking Batch 2: +5 atoms (all CORROBORATED strong). §3.5.2.1.2 사전 공모, §3.5.2.1.4 삼각 공모 시간 조율, §3.5.2.2.5 양미숙 침묵 공모, §3.5.2.2.7 김민수 전역 확정, §3.5.2.2.9 조사 결과 허위성 6증명. Total: 59→64 atoms.**

## Section-walking Batch 2-B — 5 new atoms (2026-04-11)

- [[prosecution-omits-saup-tongje-gigwan-from-rfp-structure]] — **§3.6.4.6.1 (L6+L2)**: 군검사가 제안요청서 사업통제기관 역할 의도적 누락 — MECE 위반으로 국유단의 불법 사업통제기관 지정 은폐 (Record No. 1,483). **CORROBORATED (strong)**
- [[prosecution-selective-criminalization-firewall-approval-chain]] — **§3.6.4.11.4 (L6+L5)**: 방화벽 공문 결재 3인(기안자 이준호·검토자 한지훈·결재자 최영수) 중 검토자만 피의자 지정. 최영수 5시간 기술 정당성 증언 반박 불가 (Record No. 3,948). **CORROBORATED (strong)**
- [[prosecution-firewall-port-opening-contradicts-it-standard-practice]] — **§3.6.4.11.6 (L6+L5)**: 전 세계 IT 표준 실무인 방화벽 포트 개방을 범죄로 규정. 참고인 진술서·피의자 신문조서(Record No. 4,338ff, 4,542ff)에서 기술적 무지 입증. 검사 임형규 "기술적 문제 아니다" 자인. **CORROBORATED (strong)**
- [[mnd-fabricated-indo-stage-terminology-blame-shift]] — **§3.4.7.3.3 (L4+L6)**: 국방부 2020.8.20 조작공문에서 기존 훈령에 없는 신규 용어 '인도 단계' 도입 — DT&E/OT&E 양쪽에 적용하여 시스템 설치 책임을 사업관리기관에 전가 (Record No. 4,763). **CORROBORATED (strong)**
- [[layer5-false-gapjil-report-organizational-conspiracy-structure]] — **§3.5.1.5 (L5)**: 허위 갑질 신고의 3단계 공모 구조 (주모자: 김민수+이지영 → 실행자: 김수진+이승우 → 도구: 박서준). 양준승 증언(Record No. 11,407–11,415). 경고장에 박서준 주장 미반영. **CORROBORATED (strong)**

**Batch 2-B: +5 atoms (all CORROBORATED strong). Cross-layer record placement: rec 1483→L2, rec 3948→L5, rec 4338→L5, rec 4763→L6, rec 11407→L7. Total: 64→69 atoms.**

The 5 NEEDS_MORE_EVIDENCE atoms cluster around external comparators (academic literature on phase-based vs. stage-based models, parent-law harmonization for the 정보화기획관실 rename, internal MND drafting records, the cyber routing diff verification, and **the KIDA report verbatim citation**). A.5 work has now established one of the four NEEDS_MORE_EVIDENCE comparators (the US DoD OT&E text); the others remain queued.

## Layer 5 — False power-abuse report and fabricated audit (added L5 compile pass 2026-04-11)

Sixteen claim atoms from book chapter §3.5 (허위 갑질 신고와 조사본부의 조작 감사). First six from initial L5 compile pass; five from §3.5.1.6, §3.5.2.1.3, §3.5.2.1.5, §3.5.2.3.7, §3.5.3.1.3; five from section-walking Batch 2 (§3.5.2.1.2, §3.5.2.1.4, §3.5.2.2.5, §3.5.2.2.7, §3.5.2.2.9).

- [[layer5-48hr-retaliation-causal-link]] — False 갑질 complaint filed within 48 hours of 2022-02-08 KIATIS meeting exposing 15-year security violation; temporal proof of retaliatory causation. **CORROBORATED (strong)**
- [[layer5-six-month-isolation-human-rights]] — 한지훈 confined to 4 successive solitary offices Feb–Sep 2022; denied desk/PC/colleague access — documented 6-month human-rights violation. **CORROBORATED (strong)**
- [[layer5-predetermined-audit-conclusion]] — MND 조사본부 declared disciplinary/discharge outcome on 2022-02-10 before 29-question leading interrogation on 2022-03-25 (43-day reversal of investigative logic). **CORROBORATED (strong)**
- [[layer5-fabricated-warning-letter]] — 2022-05-23 경고장 by MND Legal Affairs Office lists non-existent job title for 한지훈 (actual post: 자원정보화과 since 2022-02-28); non-existent title proves fabrication. **CORROBORATED (strong)**
- [[layer5-park-seojun-nominal-complainant]] — 박서준's stated grievances entirely absent from 경고장 while 이지영's single claim immediately incorporated; proves 박서준 was nominal complainant deployed as organizational cover. **CORROBORATED (strong)**
- [[layer5-isolation-office-premeditated]] — Isolation office prepared before 2022-02-10 false report filed; 김민수's `준비 다 됐다` statement on 2022-02-21 proves retaliation was pre-planned, not reactive. **CORROBORATED (strong)**
- [[layer5-choi-dongwook-dual-role-lawyer-or-conspirator]] — 최동욱 변호사의 이중 역할: 한지훈 변호인을 가장하면서 군검찰 대리 역할 수행, 피의자 신문 질문지와 일치하는 답변 요청서 작성, 경북대 동문 이근태 관계 거짓 부인, 한지훈 '비정상' 프레이밍. **CORROBORATED (strong)**
- [[layer5-kyungbuk-network-conflict-of-interest]] — 경북대 동문 4인(최동욱·이근태·최영수·박성호)이 2016년과 2022년 핵심 보직에 배치; 최동욱의 이근태 관계 거짓 부인이 이근태 자백으로 폭로됨. **CORROBORATED (strong)**
- [[layer5-choi-youngsu-testimony-exposes-joseo-fabrication]] — 최영수 서기관의 군검찰 참고인 증언이 조서 조작 3기법(진술서 미제공, 반박→질문 전환, 예스/노 축소) 폭로. **CORROBORATED (strong)**
- [[layer5-park-seojun-gaslighting-victim-or-accomplice]] — 박서준의 발화 패턴이 2월 8일 정상 협력→2월 10일 공포/협박으로 극적 전환; 조종된 발화(coached speech)의 4가지 독립 증거. **CORROBORATED (strong)**
- [[layer5-six-month-witness-destruction-tactics]] — 4차례 독방·PC 차단·전투화 분실·화장실 5시간·증거인멸 협박을 통한 체계적 증인 파괴 전술; 군검찰 압수수색의 영장-장소 불일치. **CORROBORATED (strong)**
- [[layer5-investigation-bureau-pre-collusion-triple-conspiracy]] — **§3.5.2.1.2**: 이지영 거짓 귀속(기록 제11,062쪽) + 김민수 자기모순 ("일체 모른다" → "네가 잘해서 나온 줄 알아?") → 조사본부-법무관리관실-국전원 사전 공모. **CORROBORATED (strong)**
- [[layer5-triangular-collusion-speech-act-timeline]] — **§3.5.2.1.4**: 4단계 시간 조율(김민수 2.10→이지영 3.25→이승우 즉각→법무관리관실 5.23) + 이지영 5분 3회 번복(기록 제11,064쪽). **CORROBORATED (strong)**
- [[layer5-yang-mi-suk-silence-as-active-complicity]] — **§3.5.2.2.5**: 출퇴근 관리 담당 양미숙의 침묵, 양준승 증언(기록 제11,412쪽)이 4인 공모 참여 명시. **CORROBORATED (strong)**
- [[layer5-kim-min-su-discharge-ultimatum-escalation]] — **§3.5.2.2.7**: 김민수 "심각하다→전역만이 옵션이다→징계다" 3단계 발화수반력 증폭 + 2022-08-31 "책임지라" 부인→인정(기록 제11,054쪽). **CORROBORATED (strong)**
- [[layer5-audit-result-falsity-and-collusion-proof]] — **§3.5.2.2.9**: 6가지 독립 증명 + 김민수 "감사관과 충분히 애기하고"(기록 제11,069쪽) 자백 → 3조직 공모 네트워크 입증. **CORROBORATED (strong)**
- [[layer5-kim-min-su-conspiracy-admission-sufficiently-discussed]] — **§3.5.2.4.1**: 김민수 자백 "감사관하고도 내가 충분히 애기하고 최종 경고는 감사관이 거다"(기록 제11,069쪽) — 법무관리관실↔조사본부 사전 조율의 직접 증거. 한지훈 반박에 침묵. **CORROBORATED (strong)**
- [[layer5-historical-significance-apt-human-targeting]] — **§3.5.1.8**: 제5층위의 역사적 의미 — APT 공격의 인간 표적화, 조직 화행론 실증, 시간 포렌식 방법론 확립 (기록 제11,003~11,419). **CORROBORATED (strong)**

## Layer 2 — New KIATIS framework + officer personal record manipulation (added Track C compile pass 2026-04-11)

Six initial atoms closing the Layer 2 gap (previously 0 atoms). Compiled from `vault-converted-korean/08-3-2-32-제2-층위.md` under the Korean-original-first rule established 2026-04-11 after discovering the English conversion had lost ~30–40% of diagnostic information including role-anchor identifiers, document author attributions, and counter-narrative footnotes.

### Structural / legal foundation

- [[kiatis-mnd-controlled-not-delegated]] — **L2-01**: 新KIATIS는 국방부 통제 사업이며 위임 사업이 될 수 없다 (5근거: 서버 호스팅, 갱신 이력, 예산 분류, 훈령 효력, 국정과제). **CORROBORATED (strong)** ← Layer 2 법적 토대
- [[kiatis-mkia-multi-cap-inscription]] — **L2-02**: 국유단(MKIA)이 사업통제·관리·주관·수행기관 슬롯 다중 cap inscription. 〈표 3-2-1〉 직접 증명. **CORROBORATED (strong)**

### Actor continuity (single point of control)

- [[lee-jiyoung-kim-sujin-single-point-of-control]] — **L2-03**: 이지영 (공문결재자-1) + 김수진 (행정담당자-1) 4가지 독립 컨텍스트 동일 actor 패턴, 2021 MND→국전원 동반 보직 이동 후에도 같은 패턴 유지. **CORROBORATED (strong)** ← Layer 1·4·6 cross-bridge, **영문 변환본만으로는 작성 불가능한 atom**

### Server laundering (Layer 1 bridge)

- [[kiatis-server-laundering-dcia-to-didc1]] — **L2-04**: 舊KIATIS 서버 국전원 지하 → 「전군 통합 메일」 인프라 → DIDC1 클라우드 server laundering. VPN 부재 + Active-X = 2016 DIDC1 해킹 attack surface. records 11,098 + 11,354 attestation. **CORROBORATED (strong)**

### Active defense (Layer 6 reverse-bridge, exculpatory)

- [[han-ji-hoon-three-braking-devices-active-defense]] — **L2-05**: 한지훈의 3가지 능동적 방어 메커니즘 + 자기 감리 거절. Layer 6 검찰단 사기 의도 주장에 대한 direct exculpatory 증거. **CORROBORATED (strong)** ← **Layer 6 reverse-bridge** (book footnote 113, 영문 완전 누락)

### Officer personal record manipulation (§3.2.3 main thesis)

- [[han-ji-hoon-officer-personal-record-manipulation]] — **L2-06**: 한지훈 보직 본인 부지불식간 2회 변경. 핵심 실무자 모두 해군 (이태호 평가위원장-1, 오현수 실무자-5, 이준호 공모자-1). Layer 5/6 origin. **CORROBORATED (strong)**
- [[layer2-intentional-budget-reduction-sw-hw]] — **§3.2.1.3**: 新KIATIS 순수 SW 개발 용역 6.25억(조달청 산정) 대비 80건 추가 요구사항 = 구조적 예산-범위 불일치. 프로젝트 지연 + 책임 전가 사전 조건. **CORROBORATED (moderate)**

### Layer 2 verdict distribution

| Verdict | Count |
|---|---|
| CORROBORATED (strong) | 6 |
| 그외 | 0 |

**Layer 2 공백 해소** — 0 → 6 atoms. Total vault atoms 35 → 41. 추후 compile pass로 5–8개 추가 가능: 비교 사업 actor mapping detail, 2018-08-14 군수실 routine audit pre-coordination, 2019-09-02 work-simplification 시간역전, 80건 추가 요구사항 결재 패턴, 해군 장교 집중도 통계 baseline.

## Layer 3 — 국전원 operational culture (added section-walking batch 2026-04-11)

- [[park-sung-ho-officer-disparagement-publicized]] — **§3.3.3.1**: 국전원장 박성호 (2016해킹당시원장-1)의 "부사관이 장교보다 낫다" 반복 발언, 초급장교 6~7명 하소연, 한지훈 20분 공론화 토론, 퇴임 쪽편지(기록 제1,473쪽) 독립 증거. **CORROBORATED (moderate)**

## Layer 4 — Supervision report concealment (added section-walking batch 2026-04-11)

- [[supervision-report-concealment-selective-circulation]] — **§3.4.6.5**: 감리 결과보고서(기록 제2,594~2,751쪽)의 성공 증거가 이준호에게만 선별 공람(기록 제4,756쪽), 군검찰 수사 시 국유단 의도적 미제공. DT/OT 중간보고서 이준호 1인 결재(기록 제2,762~2,852쪽). **CORROBORATED (strong)**
- [[layer4-old-new-kiatis-different-cyberspace]] — **§3.4.1.2**: 舊KIATIS(인터넷)와 新KIATIS(국방망)는 다른 사이버공간. 훈령 제57/58/62조의 "실제 운용환경" 요구 위반. 본문기록-제4층위-001. **CORROBORATED (strong)**
- [[layer4-evaluation-item-change-after-completion]] — **§3.4.7.2**: 평가 항목 변경 요청(9/5)→시험평가 종료(9/11)→변경 승인(9/19). 게임 종료 후 규칙 변경 = 시간 역전 조작. 기록 제5,950쪽. **CORROBORATED (strong)**
- [[layer4-test-evaluation-separation-principle-directive-2129]] — **§3.4.1.1**: 훈령 제2129호 제57·58·62조 시험평가 분리 원칙 — 新KIATIS 적용 기준. 제안요청서(기록 제1,510쪽/L2) + 검찰 신문조서(기록 제4,887쪽/L6) 교차 확인. 제2436호(2020-06-04)부터 조작 시작. L4-001. **CORROBORATED (strong)**
- [[layer4-activex-removal-request-during-evaluation-conspiracy]] — **§3.4.6.3**: 평가 중 Active-X 제거 요청(기록 제5,950~5,953쪽/L7) + 국유단장 즉시 승인(기록 제3,068쪽/L4) = 사전 합의 시나리오. 평가 독립성 훼손. **CORROBORATED (strong)**
- [[layer4-procedure-simplification-temporal-contradiction-2019-09]] — **§3.4.7.1**: 시험평가 시작 당일(2019-09-02) 절차 간소화 요청 + 09-03 시간 역전(기록 제2,853~2,858쪽). 국전원장 08-29 승인 후 사후 무력화 시도. 이지영(공문결재자-1)·김수진(행정담당자-1). **CORROBORATED (strong)**

## Layer 5 — Fraud investigation process (added section-walking batch 2026-04-11)

- [[investigation-bureau-fake-harassment-7-phase-process]] — **§3.5.2.3.2**: 조사본부 허위 갑질 조사 7단계 프로세스 (pretext→isolation→fabrication→coordination→failure→suppression→L6 transition). 감사 처분요구(기록 제4,063쪽, 금) → 수사개시 통보(기록 제4,854쪽, 월) 48시간 연결. **CORROBORATED (strong)**
- [[lee-ji-young-double-play-park-seo-jun-incitement-han-ji-hoon-blocking]] — **§3.5.3.1.2**: 이지영의 이중 플레이 — 박서준에게 "개인이 신청하는 걸로 해라" 신고 유도(기록 제11,063쪽), 한지훈에게 "양측에 애기 말라" 정보 차단. 문서 송수신 현황(기록 제4,826쪽) 이지영 반복 결재. **CORROBORATED (strong)**

## Layer 6 — Deployment delay mechanism (added section-walking batch 2026-04-11)

- [[layer6-phase1-success-result-neutralization-2019-2020]] — **§3.6.5.3.1**: 99.7점 성공 평가 후 80건 추가 요구사항 + 2020 훈령 개악(DT/OT 통합)으로 전력화 지연 1단계 공작. 김민수 조직 개편(기록 제3,987~4,003쪽), 한지훈 유지보수팀장 전환. **CORROBORATED (strong)**

## Layer 4 — Test-evaluation retroactive justification (added book §3.4.7.3 compile pass 2026-04-11)

- [[mnd-test-evaluation-improvement-retroactive-justification]] — **§3.4.7.3.1**: 2020.8.20. "시험평가 개선방안 의견수렴" 공문(기록 제4,757쪽)이 2019년 조작을 소급 정당화. 승인 절차 생략, 사업계획 승인 제거, DT/OT 통합 원칙화, '인도 단계'·'시스템 설치' 책임 전가. **CORROBORATED (strong)**
- [[mnd-test-evaluation-definition-manipulation]] — **§3.4.7.3.2**: 훈령 별표1 시험평가 정의(2016~2025 불변, 기록 제9,003쪽~)를 2020 조작공문(기록 제4,759쪽)에서 운영시험평가 희석·개발시험평가 방점으로 변질. 정리08 선언. **CORROBORATED (strong)**

## Layer 5 — Dark audit model (added book §3.5.2.3 compile pass 2026-04-11)

- [[investigation-bureau-dark-audit-as-fraud-model]] — **§3.5.2.3.1**: 조사본부의 "깜깜이 수사" 3차원(절차적·정보적·증거적 어둠). PC 압수(기록 제11,040쪽), PC 이동 차단(기록 제11,066쪽), 31년 업무 기록 접근 원천 차단. **CORROBORATED (strong)**

## Layer 6 — Prosecution environment distortion + deployment delay (added book §3.6 compile pass 2026-04-11)

- [[prosecution-distorts-operational-vs-test-environment]] — **§3.6.3.1**: 군 검찰단 4개 핵심 문서(기록 제4,842·4,854·4,874·5,167쪽)가 '실제 운영 대 시험평가 환경' 동일성·차이를 공통 왜곡. 취사선별적 훈령 적용, 동일성 오류, 시간 역전, 주어 은닉. **CORROBORATED (strong)**
- [[gukyu-dan-data-absence-delays-new-kiatis]] — **§3.6.5.1.1**: 감리보고서 "연계 데이터 생성 불가"(기록 제2,610쪽) + 80건 미완료가 수사 시점(2022.2.)까지 미해결(기록 제11,322쪽). 국유단의 3년 비조치가 의도적 방치 정황. **CORROBORATED (strong)**

## Section-walking Batch 3 (MODERATE) — 4 new atoms (2026-04-11)

### Layer 1 — KIATIS system architecture (§3.1)

- [[old-kiatis-intranet-data-link-confirmed]] — **§3.1.1.3 (L1+L2)**: 舊KIATIS 인트라넷(국방망) 연동 확인 — 사업계획서(Record No. 1,117) + 국유단 RFP 검토(Record No. 1,125) 교차 확인. 2016 DIDC 해킹 attack surface. **CORROBORATED (strong)**
- [[old-kiatis-direct-db-access-without-vpn]] — **§3.1.1.6 (L1+L6+L7)**: 舊KIATIS 15년간(2007~2022) VPN 없이 DB 직접 접속. 장우진 (사업실무자-1) 증언(Record No. 10,303) + 국유단 발굴 팀장 증언 + Record No. 5,240 정상화 회의→허위 갑질 신고 Layer 5 bridge. **CORROBORATED (strong)**

### Layer 6 — Prosecution logical manipulation (§3.6.4)

- [[prosecution-identity-fallacy-deception-technique]] — **§3.6.4.2 (L6+L7)**: 군 검찰단의 3차원 동일성 오류(시간적·환경적·개념적). 훈령 제62조 ¶3 (Record No. 8,013) 직접 반박. 4개 문서(영장·수사개시·신문·불기소) 일관 패턴 = 의도적 기만. **CORROBORATED (strong)**

### Layer 7 — 국가권익위원회 petition detail (§3.7.2)

- [[kwonikkwi-petition-submission-and-result]] — **§3.7.2.1 (L7)**: 한지훈 2022-09-25 진정서(Record No. 5,314~5,326) 상세 — 6가지 혐의, 인권침해, 가족 피해 기술. 권익위 참고인 미소환 + 증거 국방부 이전 시도. **CORROBORATED (strong)**

**Batch 3 MODERATE: +4 atoms (all CORROBORATED strong). Cross-layer record placement: rec 1117/1125→L2, rec 10303→L7, rec 5240→L6, rec 8013→L7, rec 5314→L7. Total: 73→77 atoms.**

## Section-walking Batch 3 MODERATE-2 — 5 new atoms (2026-04-11)

- [[prosecution-non-prosecution-identity-error-fraud]] — **§3.6.4.4 (L6+L2+L5+L7)**: 불기소결정서의 '동일성 오류' 기만기술 — 2019 시험평가 환경을 2022 운영 환경과 비교. 따름정리01 (VPN 2021.4.15까지 미운용) + RFP 기술적용표 (Record No. 4,424) "해당 없음" 확인. Record No. 1,536 / 8,011 / 9,116. **CORROBORATED (strong)**
- [[layer6-phase3-trap-activation-criminalization-2021-2022]] — **§3.6.5.3 / §3.6.5.3.3 (L6+L5)**: 3단계 전력화 지연 시간적 메커니즘의 최종 단계 — 이지영 (공문결재자-1)의 3.9억원 추가예산 공문으로 함정 발동, 전력화 지연→범죄 전환. Phase 1·2 atom 연결. **CORROBORATED (strong)**
- [[layer4-post-evaluation-illegal-control-transfer-to-gukyu-dan]] — **§3.4.2.4 (L4+L7)**: 시험평가 종료 8일 후 국유단장이 평가항목 변경 승인 → 사업통제기관 불법 자임. 훈령 제2129호 (Record No. 7,486) + 실무지침 (Record No. 8,371 / 8,567) + 장우진 증언 (Record No. 11,107). **CORROBORATED (strong)**
- [[prosecution-false-document-charge-self-contradiction]] — **§3.6.4.7 (L6+L1+L2)**: 불기소결정서 허위공문서작성 혐의에서 '실제 평가를 그대로 기재'라고 인정하면서 동시에 '허위' 주장 — 모순율 위반. Record No. 394 / 1,481 / 1,483. 대법원 2013도5752 판결 기준 객관적·주관적 구성요건 자기부정. **CORROBORATED (strong)**
- [[mnd-control-agency-role-evasion-deployment-delay]] — **§3.6.5.1.3 (L6+L7)**: 국방부 정보화기획관실의 사업통제기관 역할 의도적 회피 — 정보보호 적절성 판단 생략으로 전력화 불가능. 장우진 (사업실무자-1) 독립 증언 (Record No. 11,303). 정리08·정리09 선언. **CORROBORATED (strong)**

**Batch 3 MODERATE-2: +5 atoms (all CORROBORATED strong). Cross-layer record placement: rec 394→L1, rec 1481/1483/1536→L2, rec 4424→L5, rec 7486/8371/8567/9116/11107/11303→L7. Note: user-provided "rec 1" for §3.6.5.1.3 confirmed as parsing error — no Record No. 1 in source text. Total: 77→82 atoms.**

## Section-walking Batch 3 MODERATE-3 — 5 new atoms (2026-04-11)

### Layer 1 — Server laundering and homepage concealment (§3.1.1)

- [[kiatis-server-laundering-to-integrated-mail-server]] — **§3.1.1.2 (L1+L4+L7)**: 舊KIATIS '국방 통합 인터넷 메일서버'로 서버 세탁. 군수감사담당관실 일상감사(Record No. 1,141/1,144) + 시험평가(Record No. 5,818/5,819/L7) + 사업기간(Record No. 3,470/L4). 이태호 (평가위원장-1). **CORROBORATED (strong)**
- [[kiatis-homepage-co-managed-by-admin-ops-team]] — **§3.1.1.7 (L1+L6) [split 1/2]**: 행정정보 운영팀이 舊KIATIS와 홈페이지 공동 운용. 피의자 신문조서(Record No. 4,879/L6) + 조직현황(Record No. 4,723/L6) + 보안대책(Record No. 1,019/L2). 조성민 (실무자-1) 1인 담당. **CORROBORATED (strong)**
- [[kiatis-homepage-improvement-disguised-as-maintenance]] — **§3.1.1.7 (L1) [split 2/2]**: 국방부 홈페이지 개선 사업(2016-09-26~2017-04-24) 과제카드에 '유지보수'로 둔갑(Record No. 16/L1). 해킹 직후 착수, 보안 취약점 10대 항목 점검. **CORROBORATED (strong)**

### Layer 5 — KakaoTalk and fraud investigation model (§3.5.2)

- [[layer5-kakaotalk-silence-proves-normal-attendance]] — **§3.5.2.2.4 (L5+L3)**: 단톡방 3년간 한지훈 출퇴근 보고 0건 vs. 타직원 수시 보고 → 화행론(Speech Act) 분석으로 정상 근무 증명. 이지영 "기억 안 남" 역설. Record No. 1,881/L3. **CORROBORATED (strong)**
- [[layer5-fraud-investigation-triangular-model]] — **§3.5.2.4 parent (L5)**: 조사본부-법무관리관실-국전원 삼각 공모의 사기수사 전형적 모델. 이지영 5분 3회 번복(§3.5.2.4.2), 4단계 시간 조율 2.14→2.21→3.25→5.23(§3.5.2.4.3), 공모 붕괴 후 군검찰 전환(§3.5.2.4.4). §3.5.2.4.1 child atom 제외. Record No. 11,069. **CORROBORATED (strong)**

**NOTE: §3.7.2.2 (국가인권위 진정서 제출과 결과) was listed in this batch but is already fully covered by existing atom [[inkkwonwi-rejected-without-witness-review]]. Skipped as duplicate. §3.1.1.7 was split into 2 atoms (2+ propositions), yielding 5 atoms total.**

**Batch 3 MODERATE-3: +5 atoms (all CORROBORATED strong). Cross-layer record placement: rec 16→L1, rec 1019/1881→L2/L3, rec 1141/1144→L1, rec 3470→L4, rec 4723/4879→L6, rec 5818/5819→L7, rec 6759→L7, rec 11069→L7. Total: 82→87 atoms.**

## Section-walking Batch 3 MODERATE-4 — 5 new atoms (2026-04-11)

### Layer 5 — False testimony exposed (§3.5.1)

- [[layer5-lee-ji-young-false-dinner-testimony-three-witnesses]] — **§3.5.1.2 (L5+L7)**: 이지영의 "5:30 보고 없이 퇴근" 거짓 진술이 3명 독립 증인(업체 직원 2명 Record No. 4,053 + 중사 김민지 Record No. 11,112~11,113)에 의해 붕괴. 이지영-이승우-김민수 시간적 조율. **CORROBORATED (strong)**

### Layer 4 — Terminology fabrication and time-reversal (§3.4.7)

- [[layer4-software-install-to-system-install-terminology-fabrication]] — **§3.4.7.3.5 (L4+L7)**: 제76조 '소프트웨어 설치'→'시스템 설치' 용어 조작 (제1775호~제2129호 vs. 제2842호). 2020-08-20 조작공문에 2023년 용어 = 3년 시대역전 증거. 정리09. Record No. 3,271/6,270~6,282/9,018. **CORROBORATED (strong)**

### Layer 6 — Military prosecutor anti-corruption inversion (§3.6.2, §3.6.6)

- [[layer6-prosecutor-violated-anti-corruption-five-principles]] — **§3.6.2.2 (L6+L7)**: 훈령 제2502호 제7조(공정한 수사) 포함 반부패 5대 원칙(진실규명·증거기반·인권보장·공정투명·책임자처벌) 전부 정반대로 위반. Record No. 118/126/187(규정), 4,979/11,157. **CORROBORATED (strong)**
- [[layer6-cartel-network-structure-four-documents-four-keywords]] — **§3.6.6.1 (L6)**: 군 검찰단 사기수사의 4대 문서(참고인진술서/영장/수사개시/피의자신문+불기소이유) + 4대 키워드(DIDC예규미준수/불법방화벽/불법DB접속/미고지). 정보화기획관실 중심 8기관 방사형 네트워크, 3단계 시간 전개(2016~2025). Record No. 4,776/4,842/4,854/4,874/5,167. **CORROBORATED (strong)**

### Layer 4 — Test-evaluation score vs. sabotage (§3.4.6)

- [[layer4-997-military-adequate-verdict-contradicted-by-sabotage]] — **§3.4.6.1 (L4+L1+L3)**: 99.7% '군사용 적합' 판정(Record No. 3,041) = 한지훈 성공적 사업관리 공식 인증. 그러나 카르텔의 이중 전략: 공식 성공 + 내부 파괴 공작(80건 추가 요구사항/훈령 조작/시스템 설치 용어 조작). Record No. 1,073/1,767/1,850/1,851/3,041. **CORROBORATED (strong)**

**Batch 3 MODERATE-4: +5 atoms (all CORROBORATED strong). Cross-layer record placement: rec 118/126/187→규정(sub-L1), rec 1073→L1, rec 1767/1850/1851→L3, rec 3041/3271→L4, rec 4053/4776/4842/4854/4874/4979→L6, rec 5167→L6, rec 6270/6282/9018/11112/11113/11157→L7. Total: 87→92 atoms.**

## B4 NEEDS_SPLIT atoms (47) — 2026-04-12

### Layer 1 — 舊KIATIS concealment foundation

- [[old-kiatis-hosted-inside-other-server-15-years]] — 舊KIATIS 15년간 타 서버 내 운영 (홈페이지 게시판 기원). **CORROBORATED (strong)**
- [[active-x-removal-as-project-goal-confirms-vulnerability]] — Active-X 제거가 사업 기대효과 → 보안취약 공식 인정. **CORROBORATED (strong)**
- [[old-kiatis-web-facade-masking-cs-direct-db]] — 웹 외관 아래 C/S 방식 DB 직접접속 이중구조. **CORROBORATED (strong)**
- [[firewall-requests-confirm-no-vpn-db-direct-access]] — 방화벽 요청 공문이 VPN 미사용·DB 직접접속의 추가 증거. **CORROBORATED (strong)**
- [[mnd-intentional-separation-server-sw-projects]] — 서버구축·SW개발 의도적 분리 → 舊KIATIS 은폐 설계. **CORROBORATED (moderate)**
- [[mnd-test-eval-simplification-timed-to-evaluation-day]] — 시험평가 당일(2019.9.2) 절차 간소화 공문 시간역전. **CORROBORATED (strong)**

### Layer 2 — project control structure manipulation

- [[new-kiatis-is-mnd-controlled-not-delegated-project]] — 新KIATIS는 국방부 통제사업 — 위임전환 불법. **CORROBORATED (strong)**
- [[gukyu-dan-dual-cap-unprecedented-structure]] — 국유단 사업통제+주관기관 이중역할 전례 없는 위반. **CORROBORATED (strong)**

### Layer 3 — personnel manipulation and IP theft

- [[kiatis-project-deliberately-transferred-to-han-ji-hoon]] — KIATIS 업무 행정운영팀→계획팀 의도적 떠넘기기. **CORROBORATED (strong)**
- [[idea-theft-mobile-security-architecture-patent]] — 병사 휴대폰 아키텍처 아이디어 절도·특허출원 모의. **NEEDS_MORE_EVIDENCE (moderate)**
- [[layer3-mkiss-abnormal-operation-gaslighting-pretext]] — M-KISS 부적절 운영과 갑질 신고 사전 기획. **CORROBORATED (moderate)**

### Layer 4 — test-evaluation manipulation (B4 batch)

- [[gukjeonwon-pre-evaluation-team-leader-exclusion]] — 시험평가 계획보고 시 팀장 체계적 배제. **CORROBORATED (strong)**
- [[deliberate-absence-key-personnel-during-evaluation]] — 윤도현·송민석 시험평가 기간 동시 부재. **CORROBORATED (moderate)**
- [[didc-falsely-records-old-kiatis-as-vpn-user]] — DIDC의 舊KIATIS VPN 사용 허위 기재. **CORROBORATED (strong)**
- [[didc-commander-hwang-prior-knowledge-lie]] — DIDC 부대장 황만수 수사 사전 인지 거짓말. **CORROBORATED (strong)**
- [[didc-vpn-otp-18month-withholding]] — VPN OTP 1.5년 미제공 → 舊KIATIS 은폐. **CORROBORATED (moderate)**
- [[didc-withheld-network-diagram-from-kiatis]] — 네트워크 구성도 비공개 → 환경 통제 불가. **CORROBORATED (strong)**
- [[didc-excluded-from-test-eval-reform]] — 시험평가 개혁 3단계 전면 배제. **CORROBORATED (strong)**
- [[audit-dtot-report-hidden-from-team-leader]] — 감리 DT/OT 보고서 팀장 배제·1인 결재. **CORROBORATED (strong)**
- [[kida-research-legitimizes-pre-existing-manipulation]] — KIDA 연구의 소급 정당화. **CORROBORATED (strong)**
- [[kida-recommends-gukjeonwon-centered-integration]] — KIDA 국전원 중심 통합 권고 vs 미군 분리 원칙. **CORROBORATED (strong)**
- [[layer4-kida-workflow-omits-mnd-role]] — KIDA 업무흐름도 국방부 역할 누락. **CORROBORATED (strong)**
- [[layer4-dtot-separation-principle-violated]] — DT/OT 분리 원칙 위반. **CORROBORATED (strong)**
- [[directive-article-11-control-functions-stripped]] — 제11조 사업통제기관 핵심 기능 체계적 삭제. **CORROBORATED (strong)**
- [[80-items-violate-national-contract-law]] — 80건 추가요구 국가계약법 위반. **CORROBORATED (strong)**
- [[fabricated-document-2020-produced-in-2022]] — 2020 공문의 2022 소급 조작 (인도단계 시간역전). **CORROBORATED (strong)**
- [[fabricated-document-recipients-admin-only]] — 조작 공문 수신자 행정담당에 국한. **CORROBORATED (moderate)**
- [[kim-min-su-central-cross-layer-cartel-figure]] — 김민수 교차층위 카르텔 핵심 역할. **CORROBORATED (strong)**

### Layer 5 — witness destruction and human rights

- [[layer5-language-weaponization-silence-as-murder]] — 언어 무기화·침묵 강요 → 조직적 사회적 살인. **CORROBORATED (strong)**
- [[layer5-excavation-team-old-kiatis-internet-proof]] — 국유단 발굴단계 인터넷 수행 → L1 확증. **CORROBORATED (strong)**
- [[layer5-park-seojun-48hr-cooperation-to-hostility]] — 박서준 48시간 협력→적대 전환. **CORROBORATED (moderate)**
- [[layer5-reporter-3stage-statement-change]] — 신고자 진술 3단 변화 (박서준→국전원→박서준). **CORROBORATED (strong)**
- [[harassment-complaint-48hrs-premeditated-isolation]] — 48시간 전 협력 + 사전 준비 독방 격리. **CORROBORATED (strong)**
- [[warning-letter-reflects-only-lee-jiyoung]] — 경고장에 이지영만 반영, 박서준 부재. **CORROBORATED (strong)**

### Layer 6 — prosecution fraud proof

- [[prosecution-non-prosecution-internal-contradiction]] — 불기소 이유서 기소유예+99.73점 모순. **CORROBORATED (strong)**
- [[prosecution-fraud-meets-criminal-elements]] — 사기수사가 형사·사이버범죄 성립요소 충족. **CORROBORATED (strong)**
- [[four-kiatis-environments-non-identical]] — 4개 환경 비동일 (정리04). **CORROBORATED (strong)**
- [[firewall-port-opening-standard-it-procedure]] — 방화벽 포트 개방은 표준 IT 절차. **CORROBORATED (strong)**
- [[warrant-docs-are-actual-false-documents]] — 검찰 영장·통보 자체가 허위공문서. **CORROBORATED (strong)**
- [[layer6-997-reframed-as-deficient-development]] — 99.73점 성공의 부실개발 재프레이밍. **CORROBORATED (strong)**
- [[prosecution-knew-innocence-continued-case]] — 무혐의 인지 후 수사 계속. **CORROBORATED (strong)**
- [[prosecutor-shifted-charge-vpn-to-firewall]] — VPN→방화벽 기소 근거 전환. **CORROBORATED (strong)**
- [[lee-junho-false-testimony-contradicted-by-own-doc]] — 이준호 허위 진술 자기 공문 반박. **CORROBORATED (strong)**
- [[prosecution-baeim-charge-self-contradictory]] — 배임 혐의 자기모순. **CORROBORATED (strong)**
- [[layer6-gis-server-budget-intentional-omission]] — GIS 서버 예산 의도적 미반영. **CORROBORATED (strong)**
- [[prosecution-principal-actor-in-cartel]] — 군검찰단은 카르텔 주동자. **CORROBORATED (strong)**

### Layer 7 — institutional rejection

- [[prosecution-chief-evades-innocence-plea]] — 검찰단장의 무혐의 촉구 회피. **CORROBORATED (moderate)**

## Session 2026-04-12 additions (88 atoms)

### Layer 1 additions (session 2026-04-12)

- [[2263ho-glossary-didc-entity-renamed]] — 제2263호 별표1: 국방통합정보관리소→국방통합데이터센터 — 용어 정의 수준 기관명 세탁. NME
- [[2946ho-entity-naming-second-generation-shift]] — 제2946호 (2024-07-17): 정보화기획관실→지능정보화정책관실 — 2세대 entity-naming anchor 이동. NME
- [[didc-sop-11-server-root-console-only-mandatory]] — DIDC 부대예규 제11호 제161조: 서버 Root 계정은 콘솔 전용·유지보수 인력 단독 사용 불허. NME
- [[didc-sop-12-emergency-response-team-logs-mandatory]] — DIDC 부대예규 제12호 제17조: 긴급대응반 상황근무일지·침해사고 기록일지 의무. NME
- [[didc-sop-12-incident-scene-preservation-mandatory]] — DIDC 부대예규 제12호 제21-23조: 침해사고 현장보존·합동분석팀·탐지대응조치 기록 의무. NME
- [[didc-sop-12-security-system-7layer-deployment-chain]] — DIDC 부대예규 제12호 제40조+별지 제10호: 7대 보안체계 적용절차 — KIATIS에 적용되었어야. NME
- [[jeong-hyeonwoo-2016-hacking-scapegoat-admission]] — 정현우 (초대 데이터센터부대장): 2016 해킹 시 DIDC 부대원 '희생양' 취급 인정. NME
- [[kiatis-phantom-directive-2275ho]] — 훈령 제2275호(2019-05-09)는 국가법령센터 미등재 phantom directive로, 제2436호(2020-06-04) 내용을 1년 . NME
- [[kim-gilrae-2016-hacking-redirected-by-cyber-command]] — 이근태 (초대 데이터센터장): 2016 해킹 조사가 사이버사령관에 의해 DIDC로 전환. NME
- [[layer1-foundation-of-seven-layer-system]] — 제1층위는 7층위 증명체계의 근간: 舊KIATIS 인터넷 노출 은폐가 전체 범죄의 동기. NME
- [[old-kiatis-apt-optimal-vulnerability-structure]] — 舊KIATIS는 APT 공격에 최적화된 4중 구조적 취약점을 지녔다. NME
- [[prosecution-six-charges-collapse-vpn-nonexistence]] — 검찰의 6개 혐의가 단일 문서로 전면 붕괴 — VPN이 존재하지 않았으므로 조작 불가능. NME
- [[seven-layer-proof-system-design-rationale]] — 7층위 증명 체계는 국면별 데이터 분류에 기초한 귀납적 구조물이다. NME
- [[xsyn-sop-incident-silence-equals-coverup-proof]] — DIDC 예규 8단계 침해대응 의무 vs. 2016 해킹 보고서 완전 부재 — 침묵=은폐 증명. NME

### Layer 3 additions (session 2026-04-12)

- [[han-ji-hoon-three-safeguard-mechanisms]] — 한지훈의 3가지 사전 제동 장치 — 사업관리팀장의 능동적 위험관리. NME
- [[layer3-didc-intervention-start-2018-04-30]] — DIDC는 2018-04-30부터 新KIATIS 사업 조작에 본격 개입하였다. NME
- [[layer3-kiatis-team-transfer-forced-handoff]] — KIATIS 사업은 행정정보운영팀에서 행정정보계획팀으로 의도적·강제 이관되었다. NME
- [[layer3-park-seong-ho-officer-denigration]] — 국전원장 박성호의 "부사관이 장교보다 낫다" 비하 발언은 2019년 초부터 공론화되었고 한지훈 고립화 동기로 기능하였다. NME
- [[layer3-pc-evaluation-chair-replaced]] — 한지훈은 PC 사업 평가위원장으로서 규격 문제 제기 후 다른 인원으로 평가위원장이 교체되었다. NME
- [[layer3-pm-post-vacancy-predecessor-gap]] — 新KIATIS 사업관리팀장 보직은 부지불식간에 임의 변경되었고 전임자는 2개월간 공석이었다. NME
- [[layer3-vpn-otp-card-used-2021-not-2019]] — VPN OTP 카드는 2019년 시험평가 기간에 미사용이 아니라 2021년 이후 국유단이 사용. NME

### Layer 4 additions (session 2026-04-12)

- [[2436ho-dtne-sponsor-binding-erased]] — 제2436호 erases `사업관리기관 주관 하에` from the DT&E definition (A8b-sym). NME
- [[2436ho-glossary-mass-term-purge-and-restoration]] — 제2436호 별표1에서 ~20개 기술용어 일괄 삭제 → 제2842호에서 전면 복원 — 3년 공백. NME
- [[2576ho-article-62-5-ote-approval-deleted]] — 제2576호 (2021-08-12): 제62조⑤ 삭제 — 사업통제기관 시험평가계획 승인 권한 완전 제거. NME
- [[2576ho-article-64-failure-blindspot]] — 제2576호: 제64조 보고체계 재구조화 — 부적합 결과가 정보화기획관실에 보고되지 않는 구조적 사각지대. NME
- [[2576ho-article-68-deployment-trigger-weakened]] — 제2576호: 제68조 전력화 조건 완화 — '운용시험평가결과'→'시험평가결과'. NME
- [[2576ho-ote-prefix-dropped-procedural-collapse]] — 제2576호: 제62-64조에서 '운용' 접두어 제거 — DT/OT 제도적 구분 완전 소멸. NME
- [[arendt-banality-vs-intellectualization-of-evil]] — 본 사안은 아렌트의 '악의 평범성'이 아닌 '악의 지능화'를 보여준다. NME
- [[cross-atom-99-7-plus-80items-plus-data-absence]] — 99.7점 + 80건 추가요구 + 데이터 부재 = 3중 자기모순. NME
- [[diffusion-of-responsibility-seven-organizations]] — 7개 조직의 역할 분담을 통한 책임 분산 — 악의 평범성의 현대적 구현. NME
- [[glossary-term-count-oscillation-pattern]] — 별표1 용어 수 진동 패턴: 제2436호가 최저점(138) — 본문 조작 강도와 동기화. NME
- [[layer4-evaluation-committee-80-items-violation]] — 新KIATIS 시험평가위원회가 99.7점 성공 판정과 동시에 80개 추가요구사항을 의결하여 시험평가의 본질을 위반하였다. NME
- [[layer4-evidence-becomes-layer6-prosecution-tool]] — 제4층위의 조작 결과가 제6층위 검찰의 범죄자 낙인 도구로 전용 — 자기모순 구조. NME
- [[pm-confirms-chakramax-not-used-during-eval]] — 유지보수 PM이 시험평가 시 샤크라맥스 미사용 확인 — 국전원·DIDC 간 합의 미달. NME
- [[xsyn-80items-additional-not-defects-triangulated]] — 3개 독립 소스가 80건을 '추가요구사항'으로 삼각 확인 — 검찰 '하자' 프레이밍 반박. NME
- [[xsyn-directive-2436-retroactive-legal-basis]] — 제2436호 개정일(2020.6.4)이 행위시점(2019.9) 이후 — 검찰이 사후 법적 근거를 인용. NME

### Layer 5 additions (session 2026-04-12)

- [[apt-human-targeting-3yr-11mo-personalized]] — 3년 11개월간 국가기관의 맞춤형 개인 타겟팅 — 조직적 스토킹. NME
- [[kim-min-su-apology-evidence-manufacturing]] — 김민수의 사과 증거 제조 지시 — 감사실 사전 조율 후 '사과한 흔적 남기라'. NME
- [[layer5-collective-witness-abandonment-selective-memory]] — 집단적 증인 이탈 — 오현수의 '엮기기 싫다'와 이태호의 '선택적 기억' 진단. NME
- [[layer5-evidence-destruction-frame-behavioral-paralysis]] — 증거인멸 프레임을 통한 행동 봉쇄 — 김민수의 단일 화행으로 달성한 전면 마비. NME
- [[layer5-lee-jiyoung-vpn-5questions-motive-confirmation]] — 이지영의 VPN 5단계 질문 — 동기 확인을 위한 체계적 정보 추출. NME
- [[layer5-lee-taeho-testimony-work-dumping-exploitation]] — 이태호의 증언 — 공무원의 군인 복종 문화 악용과 업무 떠넘기기. NME
- [[layer5-reversed-truth-nine-evidence-rebuttal]] — 역전된 진실 — 한지훈의 소명서·반박논증에서 나타난 9개 증거 기반 반박. NME
- [[layer5-warning-letter-overrides-investigation-findings]] — 법무관리관실 경고장이 조사본부 자체 조사결과를 무시 — 출퇴근 조작 주장 붕괴에도 유지. NME
- [[lee-jiyoung-covert-sabotage-confirmed-by-kim-minsu]] — 이지영의 이면 행위를 김민수가 직접 폭로 — '당신 말에 반대로 하고 있어'. NME
- [[lee-jiyoung-jikgwon-josa-flip-flop-hours]] — 이지영의 직권조사 의뢰→철회 수시간 내 번복 — '없었던 걸로 하시죠'. NME
- [[total-destruction-unperson-triple-vector]] — 삼중 벡터 완전 파괴 — 사회적+법적+경제적 존재 말살 ('언퍼슨' 만들기). NME

### Layer 6 additions (session 2026-04-12)

- [[cartel-eleven-organization-roster]] — 국방 정보화 카르텔 11개 조직·역할 분담 목록. NME
- [[cartel-requirement-inflation-80-items-delay]] — 평가위원회가 권한 밖의 추가 요구사항 80건을 불법 의결하여 新KIATIS 전력화를 지연시켰다 — 은폐를 위한 의도적 사업 지연 메커니즘. NME
- [[choi-dongwook-parrots-prosecution-delay-narrative]] — 최동욱 변호사가 검찰의 '지연' 프레이밍을 의뢰인에게 전달 — 실제로는 일정 앞당기는 중. NME
- [[choi-dongwook-resignation-threat-coercive-control]] — 최동욱 변호사의 사임 위협을 통한 의뢰인 자율 방어 억제. NME
- [[choi-dongwook-show-weakness-vs-innocence-defense]] — 최동욱의 '아픈 모습 보여라' 조언 vs 한지훈의 '무혐의에 집중' 선언 — 방어 전략 충돌. NME
- [[choi-dongwook-technical-ignorance-despite-months]] — 최동욱 변호사의 수개월간 기술적 무지 — 산출물·DT/OT·훈령을 모르면서 2천만원 수임. NME
- [[cross-layer-witness-destroy-then-summon-pipeline]] — L5 증인 파괴 → L6 증인 소환: 독립성 파괴 후 순응적 증언 수확. NME
- [[han-ji-hoon-investigation-notification-2022-07-21]] — 군인·공무원 수사개시 통보 (2022-07-21, 기록 제4,854쪽~)는 군사법원법 절차 보호와 군인권보호관 검토를 작동시켜야 했으나 실제로는. NME
- [[han-ji-hoon-suspect-interrogation-2022-09-02]] — 2022-09-02 피의자 신문조서는 기소유예의 1차 증거 기반이며, 15년 DIDC VPN 우회 문제를 회피하고 방화벽 결재 절차에만 집중하도. NME
- [[han-ji-hoon-witness-statement-2022-01-25]] — 한지훈은 2022-01-25 참고인 신분으로 조사받았고, 6개월 후 피의자로 재분류되었다 — 소급적 기소 설계의 절차적 역전. NME
- [[interrogation-son-schizophrenia-prosecution-aware]] — 피의자신문조서에서 한지훈이 아들 조현병 진단 공개 — 검찰의 가족 피해 공식 인지 시점. NME
- [[interrogation-zero-of-14-projects-measured-vpn]] — 2019년 14개 사업 중 VPN 성능을 측정한 사업 0건 — 검찰 요구의 전례 없는 차별적 적용. NME
- [[investigator-admits-warrant-phantom-reference]] — 수사관이 영장 내 존재하지 않는 '위1.나항' 참조를 인정 — '기재할 필요 없어서 안 했다'. NME
- [[kim-gilrae-reveals-lawyer-kiso-yuye-target]] — 이근태: 최동욱 변호사가 기소유예를 최대 목표로 설정했음을 폭로. NME
- [[kim-min-su-post-prosecution-personal-problem-framing]] — 김민수의 기소유예 후 '개인 문제' 프레이밍 — 조직 책임 거부와 사과 요구. NME
- [[kim-min-su-vpn-speed-no-impact-admission]] — 김민수의 VPN 속도 무관 발언 — 위계공무집행방해 혐의 근거를 스스로 부정. NME
- [[layer6-didc-center1-true-hacking-host]] — DIDC 1센터(용인)가 2016 해킹의 실제 거점 — 2센터(계룡대) 아닌 1센터. NME
- [[layer6-judicial-murder-permanent-family-destruction]] — 제6층위 정리02: 군검찰단의 사법살인과 가족공동체의 회복불가능한 파괴. NME
- [[new-kiatis-delay-three-strategic-objectives]] — 新KIATIS 전력화 지연의 3대 전략적 목적 — 해킹 은폐·예산 순환·팀장 제거. NME
- [[non-prosecution-admits-test-not-actual-but-blames-only-victim]] — 불기소결정서가 시험환경≠실제환경을 인정하면서 한지훈에게만 책임 전가. NME
- [[non-prosecution-mitigating-factors-describe-normal-work]] — 불기소결정서 참작사유가 한지훈의 '정상적 업무수행'을 기술 — 범죄 의도 부재의 자인. NME
- [[prosecution-article-57-directive-laundering]] — 제57조 ①항 2호의 훈령 세탁 — '사업주관기관 주관 하에' 삭제를 통한 책임 전가. NME
- [[prosecution-investigator-ignorance-environment]] — 수사관의 환경 정의 무지 — 한지훈이 수사관에게 IT 기초를 교육한 녹음. NME
- [[prosecution-witness-list-reveals-cartel]] — 군검찰단 참고인 명단 자체가 카르텔 구성원 식별의 핵심 증거. NME
- [[prosecutor-admits-no-corruption-still-charges]] — 군검사가 업체 비리·금품수수 없음 인정하면서도 기소유예 유지. NME
- [[victim-blaming-structural-to-individual]] — 15년간 방치된 구조적 취약점의 책임을 개인에게 전가 — 피해자 비난 전술. NME
- [[warrant-omits-15yr-vpn-bypass-from-probable-cause]] — 압수수색 영장이 舊KIATIS 15년 VPN 미사용 사실을 영장판사에게 은닉. NME
- [[warrant-vs-non-prosecution-document-truth-reversal]] — 영장 '허위의 사실' vs 불기소결정서 '평가를 그대로 기재' — 동일 문서에 대한 진실성 역전. NME
- [[xsyn-prosecutor-post-warrant-arrival-predetermination]] — 기소결정 검사가 영장 발부 후 부임 — 결정권자가 수사 참여 안 한 구조적 예정. NME
- [[xsyn-recording-confirms-vpn-public-discussion]] — 녹취록이 VPN 공개 논의 확인 — 검찰 '은폐' 내러티브의 독립 반박. NME
- [[xsyn-sop-vpn-mandate-vs-prosecution-cherry-pick]] — DIDC 예규 제12호 제37조: 검찰이 VPN 조항만 인용하고 방화벽 관리 절차 조항은 무시. NME

### Layer 7 additions (session 2026-04-12)

- [[cross-layer-predetermined-conclusion-L5-L6-L7]] — L5→L6→L7 결론선행 체인: 감사→기소→제도거부 3단계 동일 패턴 반복. NME
- [[evidence-golden-time-destruction-risk]] — 증거 보전의 골든타임 — 디지털 증거 인멸과 관련자 기억 소실 위험. NME
- [[insider-research-autoethnographic-methodology]] — 피해 당사자의 4년간 1차 자료 수집·분석에 기초한 당사자 연구(insider research). NME
- [[kim-min-su-willful-ignorance-firewall-contradiction]] — 김민수의 '일절 모른다' 방화벽 — 1개월 전 '내가 알아서 할 거고'와 정면 모순. NME
- [[kiso-yuye-six-charges-dishonorable-discharge]] — 기소유예 6혐의(10.11) → 불명예제대(10.31) — 20일 간격의 설계. NME
- [[military-aide-hong-non-response-to-petition]] — 군사보좌관 홍성민의 진정서 무응답 — KakaoTalk 전달 후 침묵. NME
- [[presidential-special-investigation-required]] — 기존 수사기관 한계로 대통령 특단의 조치 필요 — 진실규명위원회 또는 특별검사. NME
- [[prosecution-human-rights-officer-failed-duty]] — 군검찰단 인권담당감독관의 직무 해태 — 진정서 접수 후 실질적 보호 부재. NME
- [[seven-layer-organic-crime-system-proven]] — 7층위 증명체계는 12,495쪽 증거로 입증된 단일 유기적 범죄 시스템이다. NME
- [[whistleblower-protection-purely-formal]] — 공익신고자 보호법은 형식적 수준 — 32년 군간부도 조직적 공격에 무력. NME

## Final session additions (26 atoms — 2026-04-12/13)

### Layer 1

- [[contradiction-intranet-link-attack-surface]] — C-L1-11: 舊KIATIS 인터넷+인트라넷 이중 연동 = 2016 해킹 브릿지 공격면. CORR
- [[csr-2016-hacking-should-trigger-emergency-vuln-check]] — 2016 해킹은 제44조 긴급 취약점 점검 조건 2개를 동시 충족 — KIATIS 점검 필수였다. NME
- [[csr-annual-vulnerability-assessment-duty-violated]] — DIDC의 연간 취약점 평가 의무(제40조) — 15년간 미수행으로 舊KIATIS VPN 부재 미탐지. CORR
- [[csr-cyber-asset-registry-catch-all-art45]] — 제45조 사이버자산 현황 관리 — 미등록이면 네트워크 차단, 등록이면 취약점 탐지 필수. CORR
- [[csr-didc-is-2nd-tier-security-ops-center]] — DIDC는 국방사이버안보 훈령 제54조에 의한 '통합보안관제(2차)' 책임 부대 — 한지훈 아님. CORR
- [[csr-kiatis-is-cyber-asset-under-directive]] — KIATIS는 국방사이버안보 훈령 제3조 제7호의 '사이버자산'에 해당 — 제3장 전체 의무 적용. CORR

### Layer 4

- [[contradiction-article-58-five-year-stability-then-reversal]] — C-L4-19: 제58조 분리 원칙 5년 안정(2015~2020.2) → 제2436호 4개월 만에 역전(2020.6). CORR
- [[contradiction-evaluation-post-completion-temporal-impossibility]] — C-L4-13: 시험평가 종료(9.11) 후 평가항목 변경 승인(9.19) — 시간적 불가능. CORR
- [[kakaotalk-eval-and-absence-same-day-announced]] — 카카오톡: 시험평가 시작과 송민석 교육 부재가 동일 채널에서 동시 공유 — 조직 전체 인지. CORR
- [[split-article-11-vocabulary-erasure]] — 훈령 제2436호의 3대 용어 교체로 불법 위임을 지칭 불가능하게 만든 어휘 조작. CORR
- [[split-kim-min-su-false-ignorance-vs-career]] — 김민수의 '어떻게 아니' 허위 진술 — 경력 기록과 직접 모순. CORR
- [[split-spec-review-blocked-data-transfer]] — 규격 재심의에서 舊KIATIS 데이터·SW의 新서버 이전 완전 차단 (기록 제3,324쪽). CORR
- [[split-temporal-reversal-2019-09-02-forgery]] — 2019-09-02 생산 문서의 09-03 보고 날짜 — 디지털 시간 역전 문서 조작. CORR

### Layer 5

- [[contradiction-fabricated-warning-wrong-title]] — C-L5-04 확장: 경고장의 존재하지 않는 직위 기재 — 행정정보계획팀장(미존재) vs 자원정보화과 국방정보화사업담당(공식). CORR
- [[kakaotalk-han-ji-hoon-pre-complaint-silence-digital]] — 카카오톡: 2022.2.3~14 한지훈 메시지 부재 — 공식 신고(2.10) 이전부터 디지털 격리 시작. NME
- [[kakaotalk-han-ji-hoon-professional-engagement-during-eval]] — 카카오톡: 한지훈이 시험평가 기간 중 전문 콘텐츠에 능동 참여 — 채팅 미사용이 아닌 보고할 이상 부재. CORR
- [[kakaotalk-lee-jiyoung-normal-management-pre-complaint]] — 카카오톡: 이지영의 갑질 신고 직전 주간 정상적 관리자 활동 — 직장 기능장애 서사 반박. CORR
- [[kakaotalk-park-seojun-wisc-conference-during-eval]] — 박서준이 시험평가 기간 중 WiSC 학술대회 참석 — 억압 서사와 모순. NME
- [[split-kim-min-su-organizational-support-cutoff]] — 김민수 '원에서 안 도와준다 네가 책임져라' — 조직적 지원 차단·개인 책임 전가. CORR
- [[split-lee-jiyoung-5min-triple-reversal]] — 이지영의 5분 3회 번복 — 조직→직권→개인 신고 변경 = 실시간 김민수 조율. CORR
- [[split-post-collapse-escalation-to-prosecution]] — 공모 붕괴 후 축소 대신 확대 — 경고장 유지 + 군검찰 표적수사 전환. CORR

### Layer 6

- [[contradiction-selective-criminalization-approval-chain]] — C-L6-16: 방화벽 결재 3인 중 중간 검토자만 피의자 — 최종 결재자·기안자 배제. CORR
- [[csr-prosecution-cited-appendix-not-institutional-duties]] — 검찰이 별표(기술요건)만 인용하고 제3장(기관 의무)은 무시 — 개인→기관 책임 전환의 선별적 인용. NME
- [[split-cartel-three-phase-2016-2025]] — 카르텔 3단계 시간 전개: 은폐기반(2016~18) → 조작가동(2018~22) → 범죄완성(2022~25). CORR
- [[split-delay-cyclical-budget-embezzlement]] — 新KIATIS 전력화 지연을 통한 순환적 예산 착취 (6.25→4→3.9억). CORR
- [[split-delay-team-leader-elimination-framing]] — 新KIATIS 지연을 통한 한지훈 제거 — 2022.2.8 진실 발견 후 '개발 부실' 프레이밍. CORR

## Pending atoms (not in this batch)

- **A4** (제63조 ¶1 제1호 `개발시험평가 결과 조치사항 이행여부`) — pending re-verification per A.3.5 §7 #1; will be added once subagent claim is independently confirmed/refuted by main-agent direct read
- **A5** (제64조 ¶3 critical-defect re-evaluation) — pending re-verification
- **A6** (제65조 ¶1 `병행 수행을 지원` parallel operation) — pending re-verification (originally marked "Unchanged" but now suspect given the 제2436호 cluster pattern; should be re-checked as a free verification step)
- **More Layer 6 person-level atoms** — additional atoms about specific procedural defects in the 2022 prosecution will be added as raw/05 (prosecutor evidence) is ingested. Candidate atoms: (a) the August 2022 prosecutor handover as case-insulation mechanism; (b) the 단장 sign-off chain as institutional decisional locus; (c) the 압수수색 negative findings vs. continued prosecution as procedural anomaly

## Related

- [[../_master-index]]
- [[../_contradictions|Contradictions]]
- [[../layers/_index|Layers]]
- [[../regulations/defense-it-operations-directive-2129|Hub: 훈령 제2129호]]
- [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS event]]
