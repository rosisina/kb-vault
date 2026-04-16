---
lang: ko
title-ko: 국방부의 조작 용어 '인도 단계' 도입 — 시험평가 책임을 사업관리기관에게 전가하는 체계 구축
title-en: 국방부의 조작 용어 '인도 단계' 도입 — 시험평가 책임을 사업관리기관에게 전가하는 체계 구축
aliases:
  - FR-L4-B2-004
  - 국방부의 조작 용어 '인도 단계' 도입 — 시험평가 책임을 사업관리기관에게 전가하는 체계

layer: 4
secondary-layers: [6]
claimType: terminology_manipulation
claimSubtype: fabricated_terminology_indo_stage
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 8
analysisDate: 2026-04-11

record-nos: [4763, 4765, 4769]
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
  - MND
has-verbatim: false

tags:
  - layer/L4
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/terminology-manipulation
  - source/book
  - fracture/F-MS
  - org/DIDC
  - org/MND
  - has/record-nos
  - cross-layer
---
# 국방부의 조작 용어 '인도 단계' 도입 — 시험평가 책임을 사업관리기관에게 전가하는 체계 구축

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md (§3.4.7.3.3, lines 600–612)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-6|Layer 6]] (secondary — Record No. 4,763 falls in L6 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-B2-004"})
SET fr.layer = 4,
    fr.secondaryLayer = 6,
    fr.claimType = "terminology_manipulation",
    fr.claimSubtype = "fabricated_terminology_indo_stage",
    fr.claimDesc = "The MND's 2020-08-20 fabricated document '국방정보시스템 시험평가 개선방안 의견수렴' introduced a fabricated term '인도 단계' (delivery stage) not present in any prior version of the 국방정보화업무훈령. This fabricated stage was applied to both DT&E and OT&E, making system installation the sole responsibility of the 사업관리기관 (executing agency). Combined with the directive's transformation of test-evaluation separation into integration-as-principle, this terminology creates a retroactive blame-shift mechanism: if a system fails after deployment, the 사업관리기관 bears full responsibility for the 'delivery' regardless of whether operational-environment issues caused the failure. 新KIATIS is identified as the victim of this fabricated framework.",
    fr.counterHypothesis = "The '인도 단계' term was a genuine procedural improvement reflecting international best practices in defense systems acquisition, independently developed by KIDA and not targeted at any specific project",
    fr.falsificationCondition = "Production of (a) pre-2020 MND or KIDA documentation using '인도 단계' as a standard test-evaluation term, OR (b) international defense acquisition framework (US DoD, NATO) that uses an equivalent 'delivery stage' concept within test-evaluation procedures",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "MND introduced a fabricated term '인도 단계' in a 2020 policy document that shifts system installation responsibility entirely to 사업관리기관 across both DT&E and OT&E, creating a retroactive blame mechanism. No prior directive version contains this term.";
```

## 주장 (Claim)

### 한국어

국방부가 2020년 8월 20일자 조작 공문 "국방정보시스템 시험평가 개선방안 의견수렴"에서 **기존 국방정보화업무훈령 어디에도 존재하지 않는 신규 용어 '인도 단계'를 도입**했다 (Record No. 4,763).

이 조작 공문의 "현 국방정보시스템 시험평가 절차" 도표에서 '인도 단계'는 개발시험평가와 운용시험평가 양쪽 모두에 적용되며, 이로 인해 **'시스템 설치'의 책임이 온전히 사업관리기관(집행기관)에게 귀속**되는 결과가 발생한다.

더불어 이 공문은 국방부의 시험평가 계획과 승인 절차 없이 하나의 '통합된' 시험평가 모습을 제시하며, 시험평가 구분에서 개발시험평가와 운용시험평가가 구분되나 **통합 수행이 원칙으로 변질**되었다. 이는 기존 훈령의 "분리 원칙, 예외적 통합" 체계를 정반대로 뒤집은 것이다.

또한 이 공문의 수신처에 **DIDC가 누락**되어 있는데, DIDC는 국방 기반운영 환경의 유일한 기관이자 新KIATIS 서버 구축의 당사자 기관이다. DIDC를 수신처에서 제외한 것은 DIDC를 은폐하려는 의도로 보인다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- The MND's 2020-08-20 document introduced a fabricated term '인도 단계' (delivery stage) — absent from all prior versions of the 국방정보화업무훈령 — that shifts system installation responsibility entirely to 사업관리기관 [진리성].
- The '인도 단계' applies to both DT&E and OT&E, creating a structural blame mechanism: if deployment fails, the executing agency is solely responsible, regardless of operational-environment issues [타당성].
- The document simultaneously inverts the test-evaluation principle from separation-as-default to integration-as-default, contradicting 제58조 ¶2 of the directive [타당성].
- DIDC — the sole infrastructure operations facility and the entity that built 新KIATIS servers — was excluded from the distribution list of all related MND test-evaluation reform documents [진리성].
- 新KIATIS is identified as the direct victim of this fabricated framework — the terminology manipulation was designed to retroactively justify the blame placed on the 사업관리기관 [진실성].

## 지지 증거 (Supporting Evidence)
- Record No. 4,763 (L6 range, but L4 primary content) — "현 국방정보시스템 시험평가 절차" 도표 in 조작공문
- §3.4.7.3.3 (제4층위 본문, lines 600–612) — '인도 단계' 도입 분석
- Record No. 4,765 — 시험평가 수준 및 적용 절차(안) 도표
- Record No. 4,769 — KIDA의 미군 사례 정반대 해석
- 그림 4-7 — 조작 공문 수신처에 DIDC 부재
- 국방정보화업무훈령 제58조 ¶2 — 분리 원칙 (기존 훈령)

## 반대 가설 (Counter-hypothesis)
1. **Genuine improvement:** The '인도 단계' was a genuine procedural improvement developed by KIDA based on international defense acquisition best practices, not targeted at any specific project. The term may correspond to standard acquisition lifecycle terminology (e.g., "delivery" or "acceptance" phases in US DoD or NATO frameworks).
2. **Independent timing:** The 2020-08-20 document was part of a routine reform cycle and its timing near the KIATIS evaluation controversy was coincidental, not causal.
3. **DIDC exclusion explained:** DIDC may have been excluded from the distribution list because the document addressed policy-level matters outside DIDC's operational scope.

## 반증 조건 (Falsification Condition)
This claim is CORROBORATED unless:
1. Pre-2020 MND or KIDA documentation is produced that uses '인도 단계' as a standard test-evaluation term — demonstrating the term existed before the alleged fabrication.
2. An international defense acquisition framework (US DoD, NATO, or equivalent) is produced that uses an equivalent 'delivery stage' concept within test-evaluation procedures, demonstrating the term has legitimate precedent.
3. A documented rationale for DIDC's exclusion from the distribution list is produced, unrelated to concealment.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8. The term '인도 단계' is verifiably absent from all prior directive versions (2129호, 2263호, 2398호). Its introduction in a document that simultaneously inverts the test-evaluation separation principle creates a coherent blame-shift mechanism. 타당성 is maximum because the legal manipulation is structurally detectable by comparing the document with the directive text.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 600–612 — CONFIRMED: §3.4.7.3.3 describes '인도 단계' introduction
- Cross-reference with [[article-58-separation-to-integration-2020-directive-manipulation]] — CONFIRMED: test-evaluation inversion pattern
- Deferred to A.6 Re-verify.

## 미결 사항 (Open Questions)
- Can the exact language introducing '인도 단계' be extracted from the scanned document at Record No. 4,763 for verbatim citation?
- Does KIDA's original research report (before MND editing) contain '인도 단계', or was it added during MND's revision process?
- How does '인도 단계' interact with the subsequent directive revision (훈령 제2436호, 2020-12-31)? Was the term incorporated into the formal directive text?

## 관련 (Related)
- [[article-58-separation-to-integration-2020-directive-manipulation|L4 atom: test-evaluation separation→integration inversion]] (OPPOSES)
- [[mnd-test-evaluation-definition-manipulation|L4 atom: test-evaluation definition manipulation]] (OPPOSES)
- [[mnd-test-evaluation-improvement-retroactive-justification|L4 atom: retroactive justification]] (OPPOSES)
- [[prosecution-misapplies-2129-article-58-4-to-kiatis|L6 atom: 제58조 ¶4 misapplication]] (OPPOSES)
- [[../regulations/defense-it-2129-article-58|제58조]] (ABOUT)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
