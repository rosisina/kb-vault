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

### Layer 3 — informatization cartel structure

- [[2436ho-gukjeonwon-role-tier-renaming]] — A2: 제2436호 retiers 사업통제/주관/관리 → 정보화기획관실/소요제기/집행. **NEEDS_MORE_EVIDENCE (moderate)** — external comparator queued

### Layer 4 — test-evaluation manipulation

- [[2436ho-cluster-six-anchors]] — **meta-claim**: 제2436호 (2020-06-04) is a six-anchor single-revision cluster. **CORROBORATED (strong)**
- [[2436ho-test-evaluation-principle-inverted]] — A9: 제58조 separation principle inverted to integration principle. **CORROBORATED (strong)**
- [[2436ho-dtne-articles-erased]] — A10: 제59·60·61조 bodies replaced with `<삭 제>` placeholder. **CORROBORATED (strong)**
- [[2398-2842ho-otne-environment-hedge-flipflop]] — A8a: OT&E environment hedge add → revert → re-add (2020-02 / 2020-06 / 2023-09). **NEEDS_MORE_EVIDENCE (moderate)**
- [[2436ho-otne-sponsor-binding-erased]] — A8b: `사업주관기관 주관 하에` clause erased from OT&E definition. **CORROBORATED (moderate)**
- [[2842ho-software-development-13-to-5-stage]] — A7: 13-stage strict sequence consolidated to 5-phase model (time-reversal anchor). **NEEDS_MORE_EVIDENCE (moderate)**

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

### Layer 7 — Institutional rejection chain (added raw/05 first ingest pass 2026-04-11; expanded L7 compile pass 2026-04-11)

- **[[han-ji-hoon-rebuttal-rejected-by-eight-institutions]]** — 한지훈의 2022-09-25 rebuttal was rejected by 8 institutions in sequence: 국방장관, 군사보좌관, 군검찰단장, 검사, 수사관, 인권담당, 국가인권위원회, 국가권익위원회. ALL 8 rejected. **Foundational Layer 7 atom.** **CORROBORATED (strong)**
- **[[han-ji-hoon-rebuttal-document-date-2022-09-25]]** — Date discrepancy adjudicated 2026-04-11: raw/05 `(20220929)` filename is James's metadata convention; document interior (3,811 lines) carries no printed date; book §3.7.1.1 (2022-09-25) is authoritative. **CORROBORATED (strong)**
- **[[kwonikkwi-evidence-transfer-attempt-to-mnd]]** — 권익위 실무자 attempted to transfer 한지훈's evidence to MND during 30-minute recorded call on 2022-10-04. Direct institutional capture evidence. **CORROBORATED (strong)**
- **[[inkkwonwi-rejected-without-witness-review]]** — 인권위 issued formal rejection (기록 제5,679~5,680쪽) without calling any witness or reviewing thousands of evidence pages. **CORROBORATED (strong)**
- **[[on-nara-2024-upgrade-evidence-destruction-risk]]** — 2024 온-나라 upgrade (~40억원) creates concrete risk of destroying 한지훈's 2022 메모보고 evidence trail. **NEEDS_MORE_EVIDENCE (moderate)**
- **[[han-ji-hoon-dan-jang-phone-call-2022-09-28]]** — Recorded call on 2022-09-28 between 한지훈 and 군검찰단장 안세준 (기록 제11,202~11,204쪽): personal 단장 awareness of defective prosecution nine days before 기소유예. **CORROBORATED (strong)**

### Layer 1 / 3 / 6 — Cartel definition (added raw/05 first ingest pass 2026-04-11)

- [[defense-information-cartel-named-by-rebuttal]] — 한지훈's (20220929) rebuttal explicitly defines `국방정보화카르텔` as 5 organizations (국방부 검찰단 / 국방부 정보화조직 / 국군방첩사령부 / KIDA / 기타). Atom anchors the topic page to a primary source. Substantive cartel coordination = **NEEDS_MORE_EVIDENCE (moderate)**

## Verdict distribution (35 atoms after L7 compile pass 2026-04-11)

| Verdict | Count |
|---|---|
| CORROBORATED (strong) | 24 |
| CORROBORATED (moderate) | 1 |
| NEEDS_MORE_EVIDENCE (moderate) | 8 |
| NEEDS_MORE_EVIDENCE (weak) | 1 |
| UNCLEAR / PENDING_ADJUDICATION | 1 |
| WEAKENED | 0 |
| UNFALSIFIABLE | 0 |

**A.6 임계점 달성. Layer 5 gap 해소 (0→6 atoms). Layer 7 gap 해소 (1→6 atoms). Total: 35 atoms.**

The 5 NEEDS_MORE_EVIDENCE atoms cluster around external comparators (academic literature on phase-based vs. stage-based models, parent-law harmonization for the 정보화기획관실 rename, internal MND drafting records, the cyber routing diff verification, and **the KIDA report verbatim citation**). A.5 work has now established one of the four NEEDS_MORE_EVIDENCE comparators (the US DoD OT&E text); the others remain queued.

## Layer 5 — False power-abuse report and fabricated audit (added L5 compile pass 2026-04-11)

Six primary claim atoms closing the largest gap in the vault. The book chapter §3.5 (허위 갑질 신고와 조사본부의 조작 감사) supports all six.

- [[layer5-48hr-retaliation-causal-link]] — False 갑질 complaint filed within 48 hours of 2022-02-08 KIATIS meeting exposing 15-year security violation; temporal proof of retaliatory causation. **CORROBORATED (strong)**
- [[layer5-six-month-isolation-human-rights]] — 한지훈 confined to 4 successive solitary offices Feb–Sep 2022; denied desk/PC/colleague access — documented 6-month human-rights violation. **CORROBORATED (strong)**
- [[layer5-predetermined-audit-conclusion]] — MND 조사본부 declared disciplinary/discharge outcome on 2022-02-10 before 29-question leading interrogation on 2022-03-25 (43-day reversal of investigative logic). **CORROBORATED (strong)**
- [[layer5-fabricated-warning-letter]] — 2022-05-23 경고장 by MND Legal Affairs Office lists non-existent job title for 한지훈 (actual post: 자원정보화과 since 2022-02-28); non-existent title proves fabrication. **CORROBORATED (strong)**
- [[layer5-park-seojun-nominal-complainant]] — 박서준's stated grievances entirely absent from 경고장 while 이지영's single claim immediately incorporated; proves 박서준 was nominal complainant deployed as organizational cover. **CORROBORATED (strong)**
- [[layer5-isolation-office-premeditated]] — Isolation office prepared before 2022-02-10 false report filed; 김민수's `준비 다 됐다` statement on 2022-02-21 proves retaliation was pre-planned, not reactive. **CORROBORATED (strong)**

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

### Layer 2 verdict distribution

| Verdict | Count |
|---|---|
| CORROBORATED (strong) | 6 |
| 그외 | 0 |

**Layer 2 공백 해소** — 0 → 6 atoms. Total vault atoms 35 → 41. 추후 compile pass로 5–8개 추가 가능: 비교 사업 actor mapping detail, 2018-08-14 군수실 routine audit pre-coordination, 2019-09-02 work-simplification 시간역전, 80건 추가 요구사항 결재 패턴, 해군 장교 집중도 통계 baseline.

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
