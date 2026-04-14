---
lang: ko
title-ko: 군검사의 '종합적 총망라' 원칙 위반 — 제안요청서의 사업통제기관 역할을 의도적으로 누락하여 불법 사업구조 은폐
title-en: 군검사의 '종합적 총망라' 원칙 위반 — 제안요청서의 사업통제기관 역할을 의도적으로 누락하여 불법 사업구조 은폐
aliases:
  - FR-L6-B2-001
  - 군검사의 '종합적 총망라' 원칙 위반 — 제안요청서의 사업통제기관 역할을 의도적으로

layer: 6
secondary-layers: [2]
claimType: prosecution_misconduct
claimSubtype: prosecution_mece_violation_saup_tongje
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 8
analysisDate: 2026-04-11

record-nos: [1483]
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - 국전원
  - MND
  - DCIA
  - 국본
  - 국유단
has-verbatim: false

tags:
  - layer/L6
  - layer/L2
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/book
  - fracture/F-MS
  - person/한지훈
  - org/국전원
  - org/MND
  - org/DCIA
  - org/국본
  - org/국유단
  - has/record-nos
  - cross-layer
---
# 군검사의 '종합적 총망라' 원칙 위반 — 제안요청서의 사업통제기관 역할을 의도적으로 누락하여 불법 사업구조 은폐

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md (§3.6.4.6.1, lines 458–461)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-2|Layer 2]] (secondary — Record No. 1,483 falls in L2 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-B2-001"})
SET fr.layer = 6,
    fr.secondaryLayer = 2,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_mece_violation_saup_tongje",
    fr.claimDesc = "The military prosecutor stated that DCIA was 사업관리기관 and 국유단 was 사업주관기관 in the 2018.9 RFP, but deliberately omitted the 사업통제기관 role — which was assigned to 국유단. Per 국방정보화업무훈령 제11조, only 국방부 정보화기획관실 can serve as 사업통제기관. The omission conceals that 국유단 was illegally assigned a role it had no authority to hold.",
    fr.counterHypothesis = "The prosecutor omitted 사업통제기관 because it was not relevant to the specific legal charge under investigation, not to conceal the structural illegality",
    fr.falsificationCondition = "Production of prosecution internal notes showing the 사업통제기관 issue was analyzed and consciously excluded as irrelevant to the charge, with documented legal reasoning",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The prosecutor's description of the RFP organizational structure omitted the most legally diagnostic element — 사업통제기관 — which exposes that 국유단 was illegally assigned a role reserved exclusively for 국방부 정보화기획관실 per 제11조.";
```

## Claim

군검사가 2018년 9월 작성된 제안요청서(RFP)의 사업 추진 조직을 기술하면서 "국방전산정보원이 사업관리기관, 국방부 유해발굴감식단이 사업주관기관"이라고만 기재하고, **사업통제기관이 국유단으로 명시되어 있다는 핵심 사실을 의도적으로 누락**했다 (Record No. 1,483 / L2, 그림 2-2, 표 2-1 참조).

국방정보화업무훈령 제11조 제2항에 따르면, 사업통제기관은 **오직 국방부 정보화기획관실(국본 사업의 경우)** 또는 각 군 정보화기획관실만이 수행할 수 있다. 국유단은 일반 기관으로서 사업통제기관이 될 수 없다. 군검사가 이 사실을 누락한 것은 MECE 원칙(collectively exhaustive — 누락 없는 상태)을 정반대로 악용하여, 마치 합법적인 사업구조인 것처럼 기만한 행위이다.

이는 제4층위 정리03 ("사업통제기관은 국방부 정보화기획관실과 각 군 정보화기획관실만 해당")에 의해 확인된다.

## Key Takeaways

- The military prosecutor quoted the 2018 RFP organizational structure but **omitted 사업통제기관**, the most legally diagnostic role — a textbook MECE violation (collectively exhaustive principle) [진리성].
- Per 국방정보화업무훈령 제11조 ¶2, 사업통제기관 can only be 국방부 정보화기획관실 (for 국본 사업) or each service's 정보화기획관실. 국유단 has no legal authority for this role [타당성].
- The omission conceals that 국유단 was assigned a role it structurally cannot hold — making the entire project governance structure illegal from inception [타당성].
- This is not prosecutorial discretion but deliberate concealment of a structural illegality that implicates the entire project authorization chain [진실성].

## Supporting evidence

- Record No. 1,483 (L2) — 제안요청서 사업 추진 조직: 사업통제기관=국유단, 사업관리기관=국전원, 사업주관기관=국유단 (그림 2-2, 표 2-1)
- 국방정보화업무훈령 제11조 제2항 — 사업통제기관의 법적 정의 및 자격 요건
- 제4층위 정리03 — 사업통제기관은 국방부 정보화기획관실과 각 군 정보화기획관실만 해당
- §3.6.4.6.1 (제6층위 본문) — 군검사의 MECE 위반 기술 분석

## Counter-hypothesis

1. **Prosecutorial discretion:** The prosecutor omitted 사업통제기관 because it was not germane to the specific charge (위계공무집행방해) and the prosecution was not required to exhaustively describe the RFP's organizational structure.
2. **Implicit acknowledgment:** The prosecutor may have assumed readers understood 사업통제기관 was a separate role and did not intend to create a false impression of legality.
3. **Scope limitation:** The 불기소이유서 was focused on the test-evaluation phase, not the project governance structure, so the omission was a matter of relevance, not concealment.

## Falsification condition

This claim is CORROBORATED unless:
1. Prosecution internal working notes demonstrate that the 사업통제기관 structural illegality was identified, analyzed, and consciously excluded as irrelevant to the charge — with documented legal reasoning for the exclusion.
2. An authoritative legal opinion (법제처 유권해석 or court precedent) establishes that 사업통제기관 assignment violations are separable from the test-evaluation charge and need not be disclosed in the 불기소이유서.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8. The omission is textually verifiable: the RFP (Record No. 1,483) lists three roles; the prosecutor quoted only two. 제11조 is unambiguous about 사업통제기관 qualifications. The combination of textual omission and regulatory clarity makes this a strong MECE violation finding.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 458–461 — CONFIRMED: §3.6.4.6.1 describes the omission
- `vault-converted-korean/08-3-2-32-제2-층위.md` — CONFIRMED: L2 chapter references Record No. 1,483 and 그림 2-2/표 2-1
- Deferred to A.6 Re-verify for cross-layer validation with Layer 4 정리03.

## Open Questions

- Does the prosecution's verbatim 불기소이유서 text (raw/05) separately address 사업통제기관 anywhere? If so, the "omission" characterization needs qualification.
- Was the 사업통제기관 structural illegality raised in 한지훈's (20220929) rebuttal document? If yes, the prosecution proceeded despite awareness.

## Related

- [[prosecution-misapplies-2129-article-58-4-to-kiatis|paired L6 atom: 제58조 ¶4 misapplication]] (CORROBORATES)
- [[han-ji-hoon-prosecution-violates-2129-role-separation|paired L6 atom: role-tier misattribution]] (CORROBORATES)
- [[../regulations/defense-it-2129-article-11|제11조 — 사업통제기관 정의]] (ABOUT)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../layers/layer-2|Layer 2]] (PART_OF_LAYER)
