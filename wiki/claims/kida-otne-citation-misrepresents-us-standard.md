---
lang: en
title-ko: ""
title-en: "KIDA's citation of US DoD OT&E guidelines misrepresents the US standard by selective omission of the Level I qualifier and OTA approval requirement (verbatim distortion confirmed)"
aliases:
  - FR-L4-KIDA-001
  - "KIDA's citation of US DoD OT&E guidelines"

layer: 4
secondary-layers: []
claimType: methodology
claimSubtype: academic_misrepresentation
fracture-type: null
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 10
validity: 10
sincerity: 9
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: 2010-09-14

persons:
  - 이지영
  - 김수진
  - 한지훈
organizations:
  - 군검찰단
  - MND
  - 국유단
has-verbatim: true

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/book
  - person/이지영
  - person/김수진
  - person/한지훈
  - org/군검찰단
  - org/MND
  - org/국유단
  - has/verbatim-quote
---
# KIDA's citation of US DoD OT&E guidelines misrepresents the US standard by selective omission of the Level I qualifier and OTA approval requirement (verbatim distortion confirmed)

**Source:** raw/04. law & regulation/English/(US Regulation) DOD Operational Test and Evaluation (OT&E) for Information and Business Systems(dod).converted.md, raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md (§3.4.3.1, §3.4.3.4.2)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-KIDA-001"})
SET fr.layer = 4,
    fr.claimType = "methodology",
    fr.claimSubtype = "academic_misrepresentation",
    fr.claimDesc = "KIDA's research report 「국방 정보시스템 시험평가 절차 개선 방안 연구」 (research period 2020-01–2020-06, published 2020-07; records 6,715/6,716/6,738/6,731) cited the 2010 US DoD DOT&E memo Operational Test and Evaluation for Information and Business Systems (Gilmore memo, records 6,240/6,258) as the primary academic foundation for replacing the DT&E/OT&E separation principle with an integration principle in the Korean defense informationization regime. KIDA's analysis text (record 6,717) reads: '운용시험평가 레벨(수준): 독립적인 OT 수행 대신 OT 환경 또는 데이터를 가지고 DT(개발시험)이나 보증으로 대체' (OT&E level: instead of independent OT execution, replace with DT or verification using OT environment or data). The US source text (record 6,244) reads: 'Level I OT&E - An assessment primarily using data from integrated test events other than a dedicated independent operational test event... Even for programs under DOT&E oversight, the assessment plan is approved by the lead Service or agency OTA.' KIDA's distortion: (a) deletes the 'Level I' qualifier — what the US text frames as a permitted approach for low-risk Level I only, KIDA presents as a general OT&E-replacement option; (b) deletes the OTA approval requirement — what the US text mandates as gate-kept by the operational test agency, KIDA omits entirely. Primary mechanism: selective-omission deletion of two specific words/phrases that gate the entire framework. Secondary mechanism: omission of Level II/III independent operational event mandate, DOT&E approval requirement for Applicable Programs, irreversible-changes rule (KIATIS handles personnel/casualty data → irreversible), and OTA structural independence from developer.",
    fr.counterHypothesis = "KIDA's report cited the integration permission within its full risk-based context, including all five structural requirements (Level I/II/III stratification, OTA approval, DOT&E approval for MAIS, irreversible-changes rule, OTA independence), and the integration justification was specific to genuinely Level I (low-risk) capabilities only — the citation is faithful and the application to KIATIS specifically is a separate question",
    fr.falsificationCondition = "Production of pages of KIDA's report immediately surrounding record 6,717 showing the Level I qualifier and OTA approval requirement are present in adjacent text. Falsified by direct verbatim comparison: KIDA text at record 6,717 omits both, with the omissions being conspicuous (US-text Level I phrase is the opening qualifier of the sentence KIDA paraphrases)",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 10,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Verbatim KIDA distortion confirmed by direct text comparison (records 6,717 vs 6,244): Level I qualifier deleted + OTA approval requirement deleted. All 5 falsification questions answered NO. Track D D1 closure 2026-04-11 — upgraded NEEDS_MORE_EVIDENCE → CORROBORATED (strong) after Korean original §3.4.3.4.2 read";
```

## 주장 (Claim)

### 한국어

KIDA의 연구 보고서 **「국방 정보시스템 시험평가 절차 개선 방안 연구」** (연구 기간 2020-01~2020-06, 발간 2020-07; 기록 제6,715/6,716/6,738/6,731쪽)는 미 국방부 DOT&E의 *DOD Operational Test and Evaluation for Information and Business Systems* (Michael Gilmore, 2010-09-14; 기록 제6,240/6,258쪽) 와 *DOT&E TEMP Guidebook 3.1* (2017) 두 문서를 인용하여 한국 국방 정보화 regime에서 시험평가 분리 원칙을 통합 원칙으로 변경하는 학술적 정당화를 제공했다. 본 atom은 KIDA가 **2가지 결정적 단어/구를 누락하는 selective-omission 왜곡**을 했음을 직접 verbatim 비교로 증명한다.

**KIDA의 분석 텍스트** (기록 제6,717쪽):
> 운용시험평가 레벨(수준): 독립적인 OT 수행 대신 OT 환경 또는 데이터를 가지고 DT(개발시험)이나 보증으로 대체

**미군 원문** (기록 제6,244쪽):
> **Level I** OT&E - An assessment primarily using data from integrated test events other than a dedicated independent operational test event, e.g., developmental tests, certification events, and independent observations of the capability being used in operationally realistic or representative conditions. Even for programs under DOT&E oversight, the assessment plan is **approved by the lead Service or agency OTA**.

**왜곡의 정확한 메커니즘**:
1. **"Level I" 한정자 삭제**: 미군 원문은 이 옵션을 "Level I" (낮은 위험에만 적용 — 표 3-4-2 참조) 에 한정. KIDA는 "Level I" 한정자를 삭제하고 일반 원칙으로 제시.
2. **OTA 승인 요건 삭제**: 미군 원문은 "the assessment plan is approved by the lead Service or agency OTA" — OTA의 승인이 필수 게이트. KIDA는 OTA 승인 요건을 완전히 누락.
3. **3가지 OT&E 레벨 (I/II/III) 의 위험-기반 stratification 누락**: 표 3-4-2가 보여주는 Level II (중간 위험, 독립 운영 이벤트 필수), Level III (높은 위험, DOT&E 승인 + 가장 종합적 독립 시험 필수) 를 KIDA는 언급하지 않음.

**KIATIS의 분류**: 인사 + 사망자 정보 시스템 → "irreversible changes" 규칙에 해당 → 미군 원문상 Level II 또는 III 필수 → 독립 운영 이벤트 + DOT&E 승인 필수 = 정확히 KIATIS에 적용했어야 할 것을 KIDA가 회피하기 위한 정확한 단어 삭제.

제2129호 제58조 ¶2의 분리 원칙은 미군 framework를 충실히 반영한 것이며, KIDA의 인용이 정당화한다는 framework는 한국이 **이미** 가지고 있던 것 — 분리에서 떠나는 정당화가 아니다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- The 2010 US DoD DOT&E memo (Gilmore, 2010-09-14) is an OT&E-side authority document permitting OT&E to reuse DT&E data within a structured risk framework — not permission to merge DT&E/OT&E into a single activity executed by a single body (US text CORROBORATED) [진리성]
- The US framework binds any integration with five structural requirements: (1) OTA-led risk stratification, (2) mandatory independent operational event at Level II/III, (3) DOT&E approval for Applicable Programs (MAIS), (4) irreversible-changes rule forcing Level II/III, (5) OTA structural independence from developer/program office [타당성]
- KIATIS handles personnel and casualty data — likely "irreversible changes" under the US rule, which would require Level II or Level III OT&E with an independent operational event [타당성]
- The 제2129호 제58조 ¶2 separation principle already encodes the US framework faithfully; the framework KIDA's citation purports to support is the framework Korea already had, not a justification for departing from it [타당성]
- Verdict is **CORROBORATED (strong)** per Track D D1 closure 2026-04-11: Korean original §3.4.3.4.2 read confirmed verbatim KIDA distortion by direct text comparison of record 6,717 (KIDA) vs record 6,244 (US) — both gate phrases ("Level I" qualifier + OTA approval requirement) deleted [진리성]

## 층위 (Layer)
[[../layers/layer-4|Layer 4]] — 新KIATIS 개발·운영·시험평가 전·중·후 조작. KIDA's alleged misrepresentation is the **academic foundation** that the book identifies as the legitimizing layer for the directive-level changes documented in [[2436ho-cluster-six-anchors|the 2436호 cluster]]. If the citation can be shown to misrepresent the US standard, the academic-justification scaffolding for the integration regime collapses.

## 지지 증거 (Supporting Evidence)
**US text (CORROBORATED):**

- US DoD memo 2010-09-14 explicitly permits integrated test approach as expected baseline: `It is expected a large portion of the test strategy for Information and Business Systems will utilize an integrated test approach.` ([[../regulations/us-dod-otne-info-business-systems-2010|US guidelines page §Verbatim citations]])
- US guidelines establish three OT&E levels (I/II/III) determined by **OTA-led** risk analysis with DOT&E approval for Applicable Programs (MAIS or under DOT&E oversight)
- US guidelines mandate **independent operational event** at Level II: `Level II OT&E - An evaluation that includes an independent operational event, which is carried out by typical users in an operationally realistic or representative environment`
- US guidelines mandate **DOT&E approval and most-comprehensive independent test** at Level III: `Level III OT&E - … an independent dedicated operational test. This is the highest level and most comprehensive of OT&E. DOT&E will approve the operational test plan.`
- US guidelines establish **irreversible-changes rule**: `Irreversible changes must be tested at OT&E level II or III.`
- US guidelines preserve **OTA structural independence** from program office, developer, and contractor at all three levels
- See [[../regulations/us-dod-otne-info-business-systems-2010|US DoD OT&E guidelines hub]]

**KIDA citation (CORROBORATED — Track D D1 closure 2026-04-11):**

- KIDA 연구 보고서 **「국방 정보시스템 시험평가 절차 개선 방안 연구」** — 연구 기간 2020-01~2020-06, 최종 토론회 2020-06, 발간 2020-07 (기록 제6,715 / 6,716 / 6,731 / 6,738쪽)
- KIDA 분석 텍스트 (기록 제6,717쪽): "운용시험평가 레벨(수준): 독립적인 OT 수행 대신 OT 환경 또는 데이터를 가지고 DT(개발시험)이나 보증으로 대체"
- 미군 원문 비교 쌍 (기록 제6,244쪽): "**Level I** OT&E - An assessment primarily using data from integrated test events... Even for programs under DOT&E oversight, the assessment plan is **approved by the lead Service or agency OTA**."
- Selective-omission 확정: "Level I" 한정자 + "OTA 승인" 요건 두 가지 gate 구문이 KIDA 측에서 삭제됨
- Chain-of-citation: KIDA 보고서 → 2020-04-22 의견 수렴 공문 (기록 제4,708쪽, 작성자 이지영+김수진) → 제2436호(2020-06-04) → 군 검찰단 한지훈 신문 (기록 제4,900쪽, phantom directive 제2275호 경로)
- See [[../entities/organizations/kida|KIDA hub]]

**KIATIS structural facts (pre-existing CORROBORATED):**

- KIATIS = 6.25억 KRW pure software development service contract for the DMA (국방 유해발굴사업단) personnel/casualty information system
- KIATIS handles personnel and casualty data → likely "irreversible changes" under the US guidelines' rule (data corruption is non-rollback for human-record systems)
- KIATIS would qualify as an "Applicable Program" under the US framework structurally (MAIS-class)
- See [[kiatis-2129ho-main-regime-applies]] for the parallel Korean classification

## 반대 가설 (Counter-hypothesis)
KIDA's report cited the integration permission within its full risk-based context. KIDA presented all five structural requirements (OTA-led risk stratification, independent operational event mandate at Level II/III, DOT&E approval, irreversible-changes rule, OTA independence), correctly identified that the US document is an OT&E-side authority addressing OT&E's permission to reuse DT&E data, and confined its integration justification to that specific data-reuse meaning. The integration justification was therefore academically faithful; the substantive question of whether KIATIS specifically qualifies for that data reuse is a separate question that does not impugn the citation.

**Corollary counter-hypothesis (added per James 2026-04-11 framing):** KIDA's report explicitly acknowledged that the 제2129호 제58조 ¶2 separation principle already encodes the US framework, and confined its argument to noting that the integration *exception* (the "필요시 동시에 실시" clause of ¶2) was the appropriate path for KIATIS. Under this counter-hypothesis, KIDA's report does not justify departing from 제2129호 — it justifies invoking ¶2's existing exception clause for KIATIS specifically. (If true, this would shift the falsifiable question from "did KIDA misrepresent the US text" to "did 사업통제기관 actually grant the 제58조 ¶2 written exception for KIATIS" — a different and answerable factual question.)

## 반증 조건 (Falsification Condition)
This claim is **NEEDS_MORE_EVIDENCE** until the KIDA report is produced and the following questions answered by direct text comparison:

1. **Does the KIDA report cite the OTA-led risk stratification structure?** If yes, the selective-omission charge is weakened on item 1.
2. **Does the KIDA report cite the Level II/III independent operational event mandate?** If yes, weakened on item 2.
3. **Does the KIDA report cite the DOT&E approval requirement for Applicable Programs?** If yes, weakened on item 3.
4. **Does the KIDA report cite the irreversible-changes rule?** If yes, weakened on item 4.
5. **Does the KIDA report explain that the OTA in the US framework is structurally distinct from the developer?** If yes, weakened on item 5.

If items 1–5 are all answered "yes" with substantive treatment, the verdict downgrades to WEAKENED. If items 1–5 are all answered "no" or "the report omits this", the verdict upgrades to CORROBORATED. Mixed answers require nuanced verdict drafting.

**Additional falsification path**: If KIDA's report cited the **2003 predecessor memo** (*Conducting OT&E of Software Intensive System Increments*, June 16, 2003) instead of or in addition to the 2010 memo, the comparator changes — the 2003 memo's text must be located and compared. The 2010 memo explicitly supersedes the 2003 memo, so a 2018-or-later KIDA citation of only the 2003 memo would itself be problematic.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 10 (verbatim text 비교 직접 확립), 타당성 10 (US framework + KIDA 누락이 모두 텍스트 차원에서 명확), 진실성 9 (학술 부정행위 + Layer 4 manipulation 정당화 도구로의 KIDA 변질이 진실성 axis 직접 지원).

**Track D D1 closure 2026-04-11**: 본 atom은 NEEDS_MORE_EVIDENCE → CORROBORATED (strong) 로 upgrade. 책 §3.4.3.4.2 (한국어 원본 line 294 onwards) 에서 KIDA 분석 텍스트 (record 6,717) vs 미군 원문 (record 6,244) 의 직접 verbatim 비교가 두 가지 결정적 단어/구 ("Level I" 한정자 + "OTA 승인" 요건) 의 KIDA 측 삭제를 증명. 5가지 falsification questions 모두 "no" 답변 → CORROBORATED.

이는 **comparator-establishment vs citation-verification** 분리의 가치를 입증: 2026-04-11 morning에 작성된 atom이 US 측 comparator를 완전히 확립해 두었기 때문에, 같은 날 오후의 한국어 원본 §3.4.3.4 read 1회로 즉시 verdict upgrade가 가능했다. comparator 작업이 permanent + reusable 이라는 점이 입증됨.

## 미결 사항 (Open Questions)
- ~~**The book is the primary source for this topic.**~~ **RESOLVED 2026-04-11 (Track D D1 closure)**: 한국어 원본 §3.4.3.4.2 read로 verbatim KIDA distortion 직접 확인. 책 records 6,717 (KIDA) vs 6,244 (US) 가 결정적 비교 쌍이며, 본 atom의 falsification condition을 모두 답변.
- ~~Where is the KIDA research report?~~ **RESOLVED**: 보고서명 「국방 정보시스템 시험평가 절차 개선 방안 연구」, 연구 기간 2020-01~2020-06, 최종 토론회 2020-06, 발간 2020-07. records 6,715~6,738 + 6,731.
- ~~Did MND or 국방부 검찰단 cite KIDA's report in any of the directive revisions or in the 2022 군 검찰 investigation file?~~ **RESOLVED (책 §3.4.3 + §3.4.4)**: KIDA 보고서 → 2020-04-22 의견 수렴 공문 (record 4,708, 작성자 이지영+김수진) → 제2436호 (2020-06-04) 직접 학술적 정당화 + 군 검찰단이 한지훈 신문에서 KIDA 인용 제2275호를 사용 (record 4,900). KIDA 보고서는 chain-of-citation node로 확립됨 (학술 → 훈령 개정 → 검찰 신문).
- **새 질문 — 제2275호 (2019-05-09) phantom directive**: KIDA가 인용하고 군 검찰단이 사용한 훈령 제2275호는 국가법령센터에 등재되지 않은 것이며, 시간역전 anomaly (제2398호 2020-02-13보다 1년 빠른데 내용은 제2436호 2020-06-04와 동일) 를 가진다. **별도 atom 후보** — `kiatis-phantom-directive-2275ho` 작성 queue.
- **KIDA 결재 라인 cross-link**: 2020-04-22 의견 수렴 공문의 작성자가 이지영 + 김수진 (record 4,708) — [[lee-jiyoung-kim-sujin-single-point-of-control|L2-03]] 의 actor 패턴이 Layer 4 KIDA 정당화 chain까지 확장됨. atom 간 cross-bridge 강화 필요.
- **DOT&E TEMP Guidebook 3.1** 전체 텍스트 분석: KIDA가 두 번째 미군 문서도 사용했는데, "Independent T&E provides decision makers with objective assessments" + "Developmental and operational testing serve different purposes and should not be combined" 직접 인용이 책에 있음. KIDA가 이 두 문장을 보고서에 어떻게 처리했는가? 별도 verification 가능.
- Korean MAIS-equivalent designation: 미해결, 비교의 정밀도 향상에 유용하지만 atom의 verdict에는 영향 없음.

## Spot-check (raw/01 book)

- `Korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1
- `Korean/10-3-4-34-제4-층위.md` — Layer 4 (primary, KIDA's research role and the citation contradiction are described in detail per James 2026-04-11)
- `Korean/11-3-5-35-제-5층위.md` — Layer 5
- `Korean/15-5-5-결론-및.md` — Conclusion
- Deferred to A.6 Re-verify. **This atom's Open Questions explicitly note that the book is the primary source for this topic.** A.6 will likely supply the verbatim KIDA citation, the report's title/date/author, and the 2003-vs-2010 memo question — at which point the verdict should be re-derived from scratch against the book.

## 관련 (Related)
- [[kida-research-legitimizes-pre-existing-manipulation|3 shared records — KIDA 연구 자매 atom]] (CORROBORATES)
- [[../regulations/us-dod-otne-info-business-systems-2010|US DoD OT&E guidelines (comparator regulation hub)]] (ABOUT)
- [[../entities/organizations/kida|KIDA hub]] (ABOUT)
- [[2436ho-test-evaluation-principle-inverted|paired claim: 제2436호 inverted the Korean principle the KIDA citation legitimized]] (RELATED)
- [[2436ho-cluster-six-anchors|2436호 cluster (the directive event KIDA's citation justifies)]] (RELATED)
- [[kiatis-2129ho-main-regime-applies|KIATIS regulatory classification (the Korean side)]] (RELATED)
- [[../topics/test-evaluation-manipulation|Test Evaluation Manipulation]] (ABOUT)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
