---
lang: ko
title-ko: 한지훈 prosecution targets a role (사업관리팀장) that 제2129호 제11조 explicitly excludes from test-evaluation execution
title-en: ""
aliases:
  - FR-L6-001
  - 한지훈 prosecution targets a role (사업관리팀장) that

layer: 6
secondary-layers: [4]
claimType: prosecution_misconduct
claimSubtype: prosecution_role_misattribution
fracture-type: F-CE
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 9
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L6-001"]
event-date: null

persons:
  - 한지훈
  - 임형규
  - 안세준
organizations:
  - 국전원
  - 군검찰단
  - MND
  - 국본
  - 국유단
has-verbatim: false

tags:
  - layer/L6
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/recording
  - fracture/F-CE
  - person/한지훈
  - person/임형규
  - person/안세준
  - org/국전원
  - org/군검찰단
  - org/MND
  - org/국본
  - org/국유단
  - cross-layer
---
# 한지훈 prosecution targets a role (사업관리팀장) that 제2129호 제11조 explicitly excludes from test-evaluation execution

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[011]` recording 142 (2022-09-28, 한지훈↔임형규 verbatim) • raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md • raw/05. Investigation by the Military Prosecutor's Office/ (압수수색검증 영장 — pending ingest)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-4|Layer 4]] (secondary — 시험평가환경 charge)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-001"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_role_misattribution",
    fr.claimDesc = "The 2022 군 검찰단 prosecution of 한지훈 charged him with 시험평가환경을 속였다 (lying about the test-evaluation environment) in his role as 사업관리팀장 (Project Management Team Leader), but 제2129호 제11조 ¶3 and ¶4 separate the 사업주관기관 (test-evaluation execution agency, KIATIS = DMA / 국유단) from the 사업관리기관 (project management agency, KIATIS = 국전원), assigning test-evaluation execution responsibility to the former — meaning the charged conduct is directive-prohibited for any 사업관리팀장 to perform in the first place",
    fr.counterHypothesis = "The 사업관리팀장 position is administratively defined within 국전원 such that it includes test-evaluation execution authority despite the 제11조 separation, OR 한지훈 was named on documents that operationally placed him in a 사업주관기관 role even if his title was 사업관리팀장",
    fr.falsificationCondition = "Production of (a) the 사업관리팀장 position description showing it includes test-evaluation execution duties, OR (b) any KIATIS document signed by 한지훈 that operationally constitutes test-evaluation execution by the 사업주관기관",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "한지훈's role-separation defense (`사업관리팀장은 절대 평가에 들어가면 안되는 거예요. 담당이 나뉘어져 있어요. 그거는 기술이 아니고 법이에요 법. 훈령에도 나와있고`) is a verifiable directive-text claim. 제2129호 제11조 ¶3 (사업주관기관 duties) and ¶4 (사업관리기관 duties) explicitly separate the two role tiers. The prosecution's charge structurally cannot apply to a 사업관리팀장 position under the directive — unless the prosecution invoked a non-제2129호 framework, which would itself require justification under 행위시법주의.";
```

## 주장 (Claim)

### 한국어

The 2022 군 검찰단 investigation of 한지훈 — which proceeded through unlawful warrant + 압수수색 + 피의자 조사 and culminated in a **기소유예 (deferred prosecution) disposition** — charged him with `시험평가환경을 속였다` (lying about the test-evaluation environment) for KIATIS, in his capacity as 사업관리팀장 (Project Management Team Leader). 한지훈's defense — verbatim in raw/02 recording 142 — was that the 사업관리팀장 role under 제2129호 is institutionally barred from participating in test-evaluation execution because the directive's 제11조 separates project management duties (사업관리기관 = 국전원) from project sponsor / user agency duties (사업주관기관 = 국유단), and test-evaluation execution belongs to the latter. **If 한지훈's role-separation defense is a correct reading of 제2129호 제11조, the charge structurally cannot apply to anyone holding the 사업관리팀장 title — the alleged conduct (executing or controlling test evaluation) is directive-prohibited for that role, meaning the prosecution either misread the directive or applied a non-제2129호 framework retroactively to KIATIS conduct. The 기소유예 outcome is not exoneration — under Korean criminal procedure 기소유예 means the prosecutor acknowledges criminal facts exist but defers formal indictment, which constitutes a criminal stigma on a 32-year career officer who acted lawfully.** See [[han-ji-hoon-kiso-yuye-is-criminal-stigma]] for the harm-structure atom.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- The 2022 군 검찰단 charged 한지훈 with `시험평가환경을 속였다` in his capacity as **사업관리팀장**, but 제2129호 제11조 ¶3/¶4 separates 사업주관기관 (OT&E execution + 군사용 적합/부적합 판정) from 사업관리기관 (DT&E 주관 + 사업관리) — OT&E execution belongs exclusively to 사업주관기관 [타당성].
- 한지훈's verbatim defense (raw/02 recording 142, 2022-09-28): `사업관리팀장은 절대 평가에 들어가면 안되는 거예요. 담당이 나뉘어져 있어요. 그거는 기술이 아니고 법이에요 법. 훈령에도 나와있고` — a verifiable directive-text claim [진실성].
- 제57조 ¶1 제2호 OT&E definition binds OT&E to `사업주관기관 주관 하에` — the A8b anchor that 제2436호 later erased, confirming the 2018 baseline's explicit role-tier binding [타당성].
- The 압수수색 produced no contractor collusion evidence — the prosecutor admitted this verbatim to 한지훈 (`업체와 관련 있다 거나 그런 거는 없다는 것`), removing the standard concrete predicate for the charge [진리성].
- The **기소유예 outcome is not exoneration** — under Korean criminal procedure it acknowledges criminal facts exist but defers indictment, constituting a criminal stigma on a 32-year career officer who acted lawfully. Verdict: **CORROBORATED**, Strong. 진리성 9 / 타당성 10 / 진실성 9 [진실성].

## 층위 (Layer)
[[../layers/layer-6|Layer 6]] — 군 검찰단의 사기 수사와 범죄자 낙인. This is the foundational Layer 6 atom: it identifies the structural defect in the prosecution's charge, located in the relationship between 한지훈's actual directive role and the conduct attributed to him. [[../layers/layer-4|Layer 4]] is the secondary layer because the underlying allegation (test-evaluation environment falsification) is Layer 4 substance.

## 지지 증거 (Supporting Evidence)
- **한지훈's verbatim defense (raw/02 recording 142, 2022-09-28):** `제가 사업관리팀장이라는 것만 알면 돼요. 제가 사업관리팀장이고 그 영장에 나와 있는 거에 시험평가환경을 속였다고 하는 모든 것들은 저 하고 상관이 없어요. 제가 대상이 아니라고...그리고 결재도 그렸고. … 사업관리팀장은 절대 평가에 들어가면 안되는 거예요. 담당이 나뉘어져 있어요. 그거는 기술이 아니고 법이에요 법. 훈령에도 나와있고.`
- **제2129호 제11조 ¶4 explicit naming for KIATIS (verified during calibration ingest):** `사업관리기관이란 사업의 발주 준비부터 종결까지 사업계약, 일정관리, 위험관리, 형상관리, 품질관리 등 일련의 절차를 수행하는 기관으로 … 국본이 운용하는 정보시스템과 관련된 사업의 경우에는 국전원, 나머지 기관사업의 경우에는 해당 부대·기관에서 사업 관리업무를 담당하는 부서가 해당되며 수행 임무는 다음 각 호와 같다. … 1. 사업 준비(사업계획서 작성, 제안요청서 작성, 체계규격서 작성지원 등) 및 발주 / 2. 사업 관리 제반활동(일정관리, 위험관리, 형상관리, 품질관리 등) / 3. 개발 시험평가 주관 / 4. 사업 검수 / 5. 전력화 지원`. **사업관리기관 duties include 개발시험평가 (DT&E) 주관, but NOT 운용시험평가 (OT&E) execution.**
- **제2129호 제11조 ¶3 사업주관기관 duties (verbatim):** `사업주관기관이란 사업의 소요기획부터 체계운영 및 유지보수 단계까지 예산확보 및 운용개념 정립 등을 주관하고 정보화 사업의 성과품을 활용하는 기관으로 수행 임무는 다음 각 호와 같다. 1. 운용개념 정립 … 4. 운용시험 평가 주관 / 5. 군사용 적합·부적합 판정 …`. **사업주관기관 duties include 운용시험평가 주관 and 군사용 적합·부적합 판정 — i.e., OT&E execution and pass/fail determination.**
- **The OT&E definition itself binds to 사업주관기관:** [[../regulations/defense-it-2129-article-57|제57조 ¶1 제2호]] (2018 baseline): `2. 운용시험평가 : 사업주관기관 주관 하에 실제 조성된 기반운영 환경에서 …` — this is the A8b anchor that 제2436호 erased ([[2436ho-otne-sponsor-binding-erased]]).
- **The charge subject (시험평가환경) maps specifically to OT&E, not DT&E:** the term `기반운영 환경` in 제57조 ¶1 제2호 is the OT&E environment definition, structurally located in the 사업주관기관 portion of the regulation.
- **압수수색 produced no contractor collusion (raw/02 recording 142 line 6105):** `(군검사) 그런데 그거는 말씀하신 데로 뭐. 저번에 압수수색해보니까 업체와 관련 있다 거나 그런 거는 없다는 것.` — the prosecutor admitted to 한지훈 that the search found no contractor-collusion evidence, the typical concrete predicate for the charge.
- See [[han-ji-hoon|한지훈 entity hub]], [[im-hyung-gyu|임형규 entity hub]], [[../regulations/defense-it-2129-article-11|제11조 article page]], [[2436ho-otne-sponsor-binding-erased|A8b atom]], [[kiatis-2129ho-main-regime-applies|KIATIS main regime atom]], [[kiatis-rfp-binds-lifecycle|KIATIS lifecycle binding atom]].

## 반대 가설 (Counter-hypothesis)
The 사업관리팀장 position inside 국전원 is administratively defined to include test-evaluation execution authority despite the 제11조 separation between 사업주관기관 and 사업관리기관 — i.e., the directive's role-tier separation operates at the *institution* level (국전원 vs 국유단) but not at the *position* level inside 국전원, and a 사업관리팀장 inside 국전원 may have been operationally responsible for the OT&E environment regardless of the directive's text.

**Alternative counter-hypothesis:** 한지훈 was named on KIATIS documents that operationally constituted test-evaluation execution by the 사업주관기관, even if his formal title was 사업관리팀장 inside the 사업관리기관. Under this hypothesis the prosecution would have a documentary basis even if the role-separation defense is correct in principle.

## 반증 조건 (Falsification Condition)
This claim is **CORROBORATED** unless one of the following is produced:

1. **A 사업관리팀장 position description** for the KIATIS-applicable period (2018–2019) showing the role formally includes 운용시험평가 execution duties. The position description must be a primary 국전원 administrative document, not a post-hoc characterization.
2. **A KIATIS document signed by 한지훈** that operationally constitutes 운용시험평가 execution under the 사업주관기관 role, such as a 군사용 적합·부적합 판정서 (per 제11조 ¶3 제5호) or an OT&E test plan signed in the 사업주관기관 capacity. If such a document exists, the prosecution's charge has a documentary basis even if 한지훈's nominal title is 사업관리팀장.
3. **A 제46조 위임 (delegation) document** transferring 운용시험평가 execution to a delegated body that included a 사업관리팀장 in its named scope. This would be the 제58조 ¶3 path foreclosed by [[kiatis-2129ho-main-regime-applies]] but should be checked at the 위임 document level.
4. **The 압수수색검증 영장 itself** (pending raw/05 ingest) — its specific factual narrative of how 한지훈 allegedly executed test evaluation, with named documents and dates, is the central falsification target. If the warrant cites specific 한지훈-signed test-evaluation documents, the verdict downgrades.

If items 1 or 2 are produced with documentary substance, the verdict downgrades to WEAKENED. If item 4 produces specific 한지훈-signed test-evaluation documents that the wiki has not yet considered, the verdict downgrades to NEEDS_MORE_EVIDENCE pending document analysis.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 9. The claim's strength comes from the convergence of three independent textual sources: (a) 한지훈's verbatim recorded defense, (b) 제2129호 제11조 ¶3/¶4 verbatim duty separation, (c) 제57조 ¶1 제2호 OT&E definition that binds OT&E to 사업주관기관. The 압수수색 admission that no contractor collusion was found removes the standard concrete predicate that would normally substitute for a directive-text basis.

This atom is the **foundational Layer 6 atom**: it identifies the structural problem in the investigation at the level where the prosecution's own framework (the directive) and the prosecution's charge (the conduct attributed to 한지훈) are textually compared. All subsequent Layer 6 atoms about specific procedural defects in the investigation should anchor to or extend this one. The harm-structure consequence — that 기소유예 is itself the criminal stigma rather than the protective endpoint — is atomized separately in [[han-ji-hoon-kiso-yuye-is-criminal-stigma]].

## Spot-check (raw/01 book)

- `Korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (primary, will contain detailed treatment of the prosecution's role-misattribution and 한지훈's defense)
- `Korean/10-3-4-34-제4-층위.md` — Layer 4 chapter (substantive 시험평가환경 narrative)
- `Korean/13-3-7-37-제7층위-진정서.md` — Layer 7 chapter (post-prosecution petition narrative)
- Deferred to A.6 Re-verify. The book is the primary source for the role-misattribution claim and the prosecution's framework choice. The verdict should be re-derived from the book's verbatim treatment.

## 미결 사항 (Open Questions)
- **Did the prosecution apply 제2129호 or a later directive?** Central question. If the prosecution applied 제2436호's post-cluster framework (where role-tier renaming and the integration principle inversion would partially blur the separation), the prosecution may have implicitly relied on a non-applicable directive. This would itself be a 행위시법주의 violation per [[kiatis-rfp-binds-lifecycle]].
- **Did the prosecution name KIDA's research report as authority for its framework choice?** If yes, this atom links to [[kida-otne-citation-misrepresents-us-standard]] as the academic-foundation chain.
- **Is there a transcript or summary of the 단장 (안세준) sign-off discussion?** Pending raw/05.

## 관련 (Related)
- [[han-ji-hoon|한지훈 (subject)]] (RELATED)
- [[im-hyung-gyu|임형규 (검사)]] (RELATED)
- [[ahn-se-jun|안세준 (군검찰단장, decisional approver)]] (RELATED)
- [[../entities/organizations/gukjeonwon|국전원 (사업관리기관)]] (ABOUT)
- [[../entities/organizations/dma-defense-pow-mia-accounting-agency|DMA / 국유단 (사업주관기관)]] (ABOUT)
- [[../regulations/defense-it-2129-article-11|제11조 (role tiers)]] (ABOUT)
- [[../regulations/defense-it-2129-article-57|제57조 (OT&E definition)]] (ABOUT)
- [[2436ho-otne-sponsor-binding-erased|A8b atom]] (RELATED)
- [[2436ho-gukjeonwon-role-tier-renaming|A2 atom]] (RELATED)
- [[kiatis-2129ho-main-regime-applies|KIATIS main regime applies]] (RELATED)
- [[kiatis-rfp-binds-lifecycle|KIATIS RFP binds lifecycle]] (RELATED)
- [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS event]] (ABOUT)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../topics/fraud-investigation|Fraud Investigation]] (ABOUT)
