---
lang: ko
title-ko: "KIATIS 성능개선사업 is governed by 제2129호 제58조 ¶2 main regime, not the 5억 미만 exception"
title-en: ""
aliases:
  - FR-L4-KIATIS-001
  - KIATIS 성능개선사업 is governed by 제2129호 제58조 ¶2 main

layer: 4
secondary-layers: []
claimType: regulatory_manipulation
claimSubtype: regulatory_classification
fracture-type: null
source-type: regulation

verdict: CORROBORATED
strength: STRONG
truthfulness: 10
validity: 10
sincerity: 9
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations:
  - 국전원
  - MND
  - 국본
  - 국유단
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/regulatory-manipulation
  - source/regulation
  - org/국전원
  - org/MND
  - org/국본
  - org/국유단
---
# KIATIS 성능개선사업 is governed by 제2129호 제58조 ¶2 main regime, not the 5억 미만 exception

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-KIATIS-001"})
SET fr.layer = 4,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "regulatory_classification",
    fr.claimDesc = "KIATIS 성능개선사업 (6.25억 KRW, 2018–2019) is governed by 국방정보화업무 훈령 제2129호 제58조 ¶2 main regime — DT&E and OT&E must be conducted separately as the regulatory default, with integration permitted only by explicit 사업통제기관 written approval — and does not qualify for the 제58조 ¶3 5억-미만 exception",
    fr.counterHypothesis = "KIATIS qualifies for delegation under 제58조 ¶3 by virtue of being a 기관 위임사업 or 사업계획서 단계 시험평가 위임 사업, in which case 제58조 ¶4 permits simultaneous DT&E/OT&E execution",
    fr.falsificationCondition = "Production of (a) the KIATIS 사업계획서 with a documented test-evaluation 위임 decision under 제46조, OR (b) classification as 기관 위임사업 by 사업통제기관 in writing, OR (c) demonstration that contract value 6.25억 was below the 5억 threshold (e.g., by separating into multiple sub-contracts)",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 10,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Contract value 6.25억 > 5억 threshold; pure 외주용역 software development; 사업관리기관 = 국전원 = main-regime configuration; 제58조 ¶2 main regime applies and separation is the statutory default";
```

## 주장 (Claim)

### 한국어

KIATIS 성능개선사업 (6.25억 KRW, 2018–2019) is governed by 국방정보화업무 훈령 제2129호 제58조 ¶2 main regime. Under that regime, DT&E and OT&E must be conducted separately as the regulatory default, with integration permitted **only** by explicit written approval from the 사업통제기관 (here 국본 정보화기획관실). The project does not qualify for the 제58조 ¶3 5억-미만 exception, and therefore the 제58조 ¶4 simultaneous-execution permission does not apply.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- KIATIS 성능개선사업 contract value is 6.25억 KRW, above the 5억 threshold of 제2129호 제58조 ¶3 — foreclosing the 5억-미만 exception path [진리성]
- 제2129호 제58조 ¶2 mandates DT&E/OT&E separation as the regulatory default: `개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되, 필요시 사업통제기관의 승인을 받아 동시에 실시할 수 있다` — integration requires explicit written approval from the 사업통제기관 (here 국본 정보화기획관실) [타당성]
- 국전원 is KIATIS's 사업관리기관 under 제2129호 제11조 ¶4 (explicit naming for 국본 systems) — foreclosing the 기관 위임사업 counter-hypothesis path [타당성]
- The only counter-hypothesis path not foreclosed by current evidence is production of a KIATIS 사업계획서 showing a 제46조 test-evaluation 위임 decision; absent that, 제58조 ¶2 main regime separation is the binding legal framework [타당성]
- This atom is the foundational Layer 4 regulatory premise — any test-evaluation conduct during KIATIS that integrated DT&E/OT&E without explicit 사업통제기관 written approval is, by the directive's own terms, a procedural violation [진실성]

## 층위 (Layer)
[[../layers/layer-4|Layer 4]] — 新KIATIS 개발·운영·시험평가 전·중·후 조작. This is the foundational regulatory premise for the entire Layer 4 case: any test-evaluation conduct during KIATIS that integrated DT&E and OT&E without an explicit 사업통제기관 written approval is, by the directive's own terms, a procedural violation. Whether such an approval exists is a separable factual question; the legal premise that one was *required* is what this atom establishes.

## 지지 증거 (Supporting Evidence)
- **KIATIS contract value:** 6.25억 KRW (per James, recorded in [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS event page]] and [[../../output/a3-revision-timeline-report-2026-04-11|A.3 report §10]])
- **Project type:** 순수 소프트웨어 개발 용역사업 (pure software development service contract, 외주용역 개발 per 제2129호 제10조 ¶1 제2호 나목)
- **사업관리기관:** 국전원 (per 제2129호 제11조 ¶4 explicit naming for 국본 systems)
- **사업통제기관:** 국본 정보화기획관실 (per 제2129호 제11조 ¶2)
- **사업주관기관:** DMA / 국방 유해발굴사업단
- **제2129호 제58조 ¶2 verbatim:** `국방부 통제사업의 시험평가 절차는 제59조에서 제64조까지의 내용을 준용하며 개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되, 필요시 사업통제기관의 승인을 받아 동시에 실시할 수 있다.`
- **제2129호 제58조 ¶3 verbatim:** `기관 위임사업, 정보시스템 구축사업의 소프트웨어 개발비가 5억 원 미만 사업 및 제46조에 따라 사업계획서 승인 단계에서 시험평가가 위임된 사업은 제59조에서 제64조까지를 준용하여 수행하되, 해당 기관에서 정한 세부 절차에 따라 시험평가를 실시하고 결과를 사업통제기관에 보고한다.`
- **제2129호 제58조 ¶4:** the simultaneous DT&E/OT&E execution permission is available only to 제58조 ¶3 projects.
- 6.25억 > 5억 threshold → ¶3 5억-미만 path foreclosed
- 국전원 designation under 제11조 ¶4 → 국본 사업 → 국방부 통제 사업 → 기관 위임 path foreclosed
- See [[../regulations/defense-it-2129-article-58|제58조 page]]

## 반대 가설 (Counter-hypothesis)
KIATIS qualifies for delegation under 제58조 ¶3 via one of three paths:

1. **5억 미만 path:** KIATIS contract value below 5억 KRW. Foreclosed by James-supplied 6.25억 figure.
2. **기관 위임사업 path:** KIATIS classified as 기관 위임사업 rather than 국방부 통제 사업. Foreclosed by 국전원's regulation-designated 사업관리기관 role under 제11조 ¶4.
3. **제46조 위임 path:** KIATIS 사업계획서 step contained a documented test-evaluation 위임 to a delegated body, satisfying 제58조 ¶3's `제46조에 따라 사업계획서 승인 단계에서 시험평가가 위임된 사업` clause.

Path 3 is the only counter-hypothesis path not foreclosed by current evidence. It requires production of the actual KIATIS 사업계획서 to test.

## 반증 조건 (Falsification Condition)
This claim is **CORROBORATED** unless one of the following is produced:

1. The KIATIS 사업계획서 (or 사업계획서 승인 문서) showing a test-evaluation 위임 decision under 제46조.
2. A 사업통제기관 written classification of KIATIS as 기관 위임사업 (which would require overriding the 제11조 ¶4 default).
3. Documentation that the KIATIS contract was structured as multiple sub-contracts each below 5억, sidestepping the threshold calculation.

If item 1 is produced, the verdict downgrades to WEAKENED. If item 1 is produced **and** the 위임 target is the same body as the 사업주관기관 or 사업관리기관 (which would be self-delegation and unusual), the verdict downgrades to NEEDS_MORE_EVIDENCE pending interpretation. Items 2–3 are unlikely on the available facts but should be explicitly checked.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 10 (text is unambiguous), 타당성 10 (legal classification is clean), 진실성 9 (the project's victim-perspective relevance to Layer 4 is direct).

## 미결 사항 (Open Questions)
- Has the KIATIS 사업계획서 been examined for any 위임 clause? (Pending raw/06 SOP / raw/07 scanned files / raw/01 book ingest.)
- Did 국본 정보화기획관실 issue any written 제58조 ¶2 exception approval permitting integrated DT&E/OT&E for KIATIS? (Pending; if absent, foreclosure of integration path is complete.)

## Spot-check (raw/01 book)

- `Korean/04-1-1-서론.md` — Introduction (KIATIS framing)
- `Korean/08-3-2-32-제2-층위.md` — Layer 2 (project execution structure)
- `Korean/09-3-3-33-제3-층위.md` — Layer 3 (국전원 management role)
- `Korean/11-3-5-35-제-5층위.md` — Layer 5
- `Korean/13-3-7-37-제7층위-진정서.md` — Layer 7
- Deferred to A.6 Re-verify. KIATIS legal-classification analysis is foundational to the entire case; cross-check the 5억 threshold + 사업관리기관 designation chain against the book's exact treatment.

## 관련 (Related)
- [[kiatis-rfp-binds-lifecycle|KIATIS — RFP-binds-lifecycle (행위시법주의)]] (CORROBORATES)
- [[2436ho-test-evaluation-principle-inverted|2436호 inverted the principle KIATIS was bound by]] (CORROBORATES)
- [[2436ho-dtne-articles-erased|2436호 erased the DT&E articles KIATIS was bound by]] (CORROBORATES)
- [[../regulations/defense-it-2129-article-58|제58조]] (ABOUT)
- [[../regulations/defense-it-2129-article-11|제11조]] (ABOUT)
- [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS 성능개선사업 event]] (ABOUT)
- [[../entities/organizations/gukjeonwon|국전원]] (ABOUT)
- [[../entities/organizations/dma-defense-pow-mia-accounting-agency|DMA]] (ABOUT)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../topics/kiatis-systems|KIATIS Systems]] (ABOUT)
