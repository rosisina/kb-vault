---
lang: ko
title-ko: 제2436호 retiers 사업통제/주관/관리 → 정보화기획관실/소요제기/집행
title-en: ""
aliases:
  - FR-L3-001
  - 제2436호 retiers 사업통제/주관/관리 → 정보화기획관실/소요제기/집행

layer: 3
secondary-layers: []
claimType: regulatory_manipulation
claimSubtype: regulatory_role_tier_renaming
fracture-type: null
source-type: regulation

verdict: CORROBORATED
strength: MODERATE
truthfulness: 8
validity: 9
sincerity: 7
analysisDate: 2026-04-12

record-nos: []
evidence-ids: ["L3-001"]
event-date: 2020-06-04

persons:
  - 김민수
  - 한지훈
organizations:
  - DIDC
  - 국전원
  - MND
has-verbatim: false

tags:
  - layer/L3
  - verdict/corroborated
  - strength/moderate
  - type/regulatory-manipulation
  - source/regulation
  - person/김민수
  - person/한지훈
  - org/DIDC
  - org/국전원
  - org/MND
---
# 제2436호 retiers 사업통제/주관/관리 → 정보화기획관실/소요제기/집행

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md
**Layer:** [[../layers/layer-3|Layer 3]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L3-001"})
SET fr.layer = 3,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "regulatory_role_tier_renaming",
    fr.claimDesc = "제2436호 (2020-06-04) renamed the three-tier role nomenclature from 사업통제기관/사업주관기관/사업관리기관 to 정보화기획관실/소요제기기관/집행기관, restructuring the implicit accountability vocabulary used to identify which entity controls, sponsors, or executes a defense IT project",
    fr.counterHypothesis = "The renaming is a routine harmonization with the parent law (국방정보화법) or with related directives, and reflects updated organizational nomenclature rather than accountability erasure",
    fr.falsificationCondition = "Production of a 국방정보화법 or related-directive provision that uses the new vocabulary and pre-dates 제2436호, OR a 입법예고 statement explicitly justifying the rename as terminology harmonization",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "본서 §3.4.4.4.4에서 세 가지 수렴증거 확인: (1) 사업관리기관→집행기관 격하는 '능동적 관리→수동적 집행'으로의 개념 왜곡, (2) 김민수 2022 기고문에서 구 용어 사용(현실 괴리 입증, 기록 제1,372), (3) 한지훈 진술 '사업 전반 관리'(기록 제4,781)가 신 용어와 모순";
```

## Claim

On 2020-06-04, 국방정보화업무 훈령 제2436호 renamed the three-tier role nomenclature in 제11조 ¶1 from `사업통제기관·사업주관기관·사업관리기관` to `정보화기획관실, 소요제기기관, 집행기관`. The rename is structural, not cosmetic — the new vocabulary reorganizes accountability around an organizational name (정보화기획관실) rather than around a project-control function (사업통제기관), which makes accountability tracing dependent on which office holds a name at a given moment rather than on which office holds a regulatory function.

## Key Takeaways

- 제2436호 (2020-06-04) 제11조 ¶1 renamed the three-tier role nomenclature from `사업통제기관·사업주관기관·사업관리기관` to `정보화기획관실, 소요제기기관, 집행기관` [진리성] (verified by direct text read of raw/04 제2129호 vs 제2436호).
- The rename is **structural, not cosmetic** — the new vocabulary reorganizes accountability around an organizational name (정보화기획관실) rather than a project-control function (사업통제기관), making accountability tracing depend on office-name assignment rather than regulatory function [타당성].
- The rename persists into 제2576호 with no reversal (verified §9.2), indicating the change was not a transient drafting error [진리성].
- The rename works in tension with the retained explicit `국전원` naming in 제11조 ¶4 — two changes operating in opposite directions whose net effect on 국전원 accountability requires careful layer analysis [진리성].
- Verdict: **CORROBORATED**, Moderate. 진리성 8 / 타당성 9 / 진실성 7. 본서 §3.4.4.4.4에서 세 가지 수렴증거(개념 격하 + 김민수 기고문 구 용어 사용 + 한지훈 진술 모순)로 조작 의도 입증 [진실성].

## Layer

[[../layers/layer-3|Layer 3]] — 국전원 전속 후 SW개발사업관리 착수·종결 (국방정보화카르텔 공모 구조). The role-tier vocabulary is the regulatory mechanism through which 국전원's role is identified; renaming the tier vocabulary changes how 국전원's role is described in the directive without removing the explicit `국전원` mention. The two changes (vocabulary rename + retained explicit naming) work in opposite directions and the net effect on accountability requires careful analysis.

## Supporting evidence

- 제2129호 (2018-02-05) 제11조 ¶1 (lines 602–606): `정보화사업 관련 기관은 임무와 기능에 따라 사업통제기관·부서(이하 "사업통제기관"이라 한다), 사업주관기관·부서(이하 "사업주관기관"이라 한다), 사업관리기관·부서(이하 "사업관리기관"이라 한다)로 구분하며 세부 임무는 별표 3~7과 같다.`
- 제2436호 (2020-06-04) 제11조 ¶1 (line 591): `정보화사업 관련 기관은 임무와 기능에 따라 정보화기획관실, 소요제기기관, 집행기관으로 구분하며, 소요제기기관과 집행기관은 임무로 구분한 명칭으로 복수의 임무를 수행할 수 있으며, 세부 임무는 별표 3~7과 같다.`
- 제2576호 제11조 ¶1 (line 592): identical 제2436호 vocabulary, no reversal (verified §9.2)
- See [[../regulations/defense-it-2129-article-11|제11조 page]]
- See [[../entities/organizations/gukjeonwon|국전원]] hub
- See [[../entities/organizations/mnd-it-planning-office|MND HQ IT planning office]] hub for the parallel office-name evolution

## Counter-hypothesis

The renaming is a routine harmonization with the parent law (국방정보화법) or with related government directives that adopted the new `정보화기획관실 / 소요제기기관 / 집행기관` vocabulary independently of 훈령 제2436호. Under this hypothesis the rename is administrative housekeeping with no substantive effect on accountability vocabulary.

## Falsification condition

This claim is **NEEDS_MORE_EVIDENCE** until one of the following is investigated:

1. **Search 국방정보화법 (parent law) for the new vocabulary.** If 국방정보화법 already uses `정보화기획관실 / 소요제기기관 / 집행기관` and the rename brings 훈령 into alignment, the harmonization hypothesis is supported. (Pending A.5 — `raw/04. law & regulation/` parent-law file lookup.)
2. **Search related contemporaneous directives** (사이버안보훈령, 시험평가훈령) for the same vocabulary at or before 2020-06-04.
3. **Locate 제2436호 입법예고 / 규제영향분석서.** If the rationale explicitly cites terminology harmonization, support the hypothesis; if it cites unrelated reasons or is silent, the hypothesis weakens.

If items 1 or 2 produce a positive match pre-dating 제2436호, the verdict upgrades to UNFALSIFIABLE (the rename was external-driven). If items 1–3 are exhausted with no positive match, the verdict upgrades to CORROBORATED.

## Verdict

**CORROBORATED.** Moderate. 본서 §3.4.4.4.4의 세 가지 수렴증거(능동→수동 격하, 김민수 2022 기고문의 구 용어 사용, 한지훈 진술 '사업 전반 관리')가 조화가설(parent-law 정렬)보다 조작가설을 더 강하게 지지함.

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` — Layer 2 chapter discusses 사업통제기관 / 사업주관기관 / 사업관리기관 role structure
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 chapter
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (prosecutor handling of role tiers)
- Deferred to A.6 Re-verify; the substantive renaming significance and the parent-law-harmonization counter-hypothesis should both be cross-checked against the book's treatment.

## Related

- [[2436ho-cluster-six-anchors|2436호 cluster meta-claim]] (SUPERSEDES)
- [[2436ho-didc-naming-anchor-removed|A1: DIDC naming removed]] (SUPERSEDES)
- [[../regulations/defense-it-2129-article-11|제11조]] (ABOUT)
- [[../entities/organizations/gukjeonwon|국전원]] (ABOUT)
- [[../layers/layer-3|Layer 3]] (PART_OF_LAYER)
- [[../topics/defense-informatization-cartel|Defense Informatization Cartel]] (ABOUT)
