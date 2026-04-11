# 제2436호 retiers 사업통제/주관/관리 → 정보화기획관실/소요제기/집행

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md
**Layer:** [[../layers/layer-3|Layer 3]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L3-001"})
SET fr.layer = 3,
    fr.claimType = "regulatory_role_tier_renaming",
    fr.claimDesc = "제2436호 (2020-06-04) renamed the three-tier role nomenclature from 사업통제기관/사업주관기관/사업관리기관 to 정보화기획관실/소요제기기관/집행기관, restructuring the implicit accountability vocabulary used to identify which entity controls, sponsors, or executes a defense IT project",
    fr.counterHypothesis = "The renaming is a routine harmonization with the parent law (국방정보화법) or with related directives, and reflects updated organizational nomenclature rather than accountability erasure",
    fr.falsificationCondition = "Production of a 국방정보화법 or related-directive provision that uses the new vocabulary and pre-dates 제2436호, OR a 입법예고 statement explicitly justifying the rename as terminology harmonization",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 7,
    fr.sincerity = 6,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Rename is verified by direct text reads but the harmonization counter-hypothesis cannot be foreclosed without an external comparator search; warrants A.5 follow-up";
```

## Claim

On 2020-06-04, 국방정보화업무 훈령 제2436호 renamed the three-tier role nomenclature in 제11조 ¶1 from `사업통제기관·사업주관기관·사업관리기관` to `정보화기획관실, 소요제기기관, 집행기관`. The rename is structural, not cosmetic — the new vocabulary reorganizes accountability around an organizational name (정보화기획관실) rather than around a project-control function (사업통제기관), which makes accountability tracing dependent on which office holds a name at a given moment rather than on which office holds a regulatory function.

## Key Takeaways

- 제2436호 (2020-06-04) 제11조 ¶1 renamed the three-tier role nomenclature from `사업통제기관·사업주관기관·사업관리기관` to `정보화기획관실, 소요제기기관, 집행기관` [진리성] (verified by direct text read of raw/04 제2129호 vs 제2436호).
- The rename is **structural, not cosmetic** — the new vocabulary reorganizes accountability around an organizational name (정보화기획관실) rather than a project-control function (사업통제기관), making accountability tracing depend on office-name assignment rather than regulatory function [타당성].
- The rename persists into 제2576호 with no reversal (verified §9.2), indicating the change was not a transient drafting error [진리성].
- The rename works in tension with the retained explicit `국전원` naming in 제11조 ¶4 — two changes operating in opposite directions whose net effect on 국전원 accountability requires careful layer analysis [진리성].
- Verdict: **NEEDS_MORE_EVIDENCE**, Moderate. 진리성 7 / 타당성 7 / 진실성 6. The harmonization counter-hypothesis (parent-law 국방정보화법 alignment) cannot be foreclosed without external comparator search — this is the model atom for "directive change verified, intent ambiguous" [진실성].

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

**NEEDS_MORE_EVIDENCE.** Moderate. The directive-internal evidence is solid (rename is verified) but the substantive significance turns on whether the vocabulary was already established externally. This is the model atom for "directive change verified, intent ambiguous, requires external comparator."

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` — Layer 2 chapter discusses 사업통제기관 / 사업주관기관 / 사업관리기관 role structure
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 chapter
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (prosecutor handling of role tiers)
- Deferred to A.6 Re-verify; the substantive renaming significance and the parent-law-harmonization counter-hypothesis should both be cross-checked against the book's treatment.

## Related

- [[2436ho-cluster-six-anchors|2436호 cluster meta-claim]]
- [[2436ho-didc-naming-anchor-removed|A1: DIDC naming removed]]
- [[../regulations/defense-it-2129-article-11|제11조]]
- [[../entities/organizations/gukjeonwon|국전원]]
- [[../layers/layer-3|Layer 3]]
- [[../topics/defense-informatization-cartel|Defense Informatization Cartel]]
