# 불기소이유서가 제2129호 제58조 ¶4 (5억-미만 예외 조항)를 KIATIS에 잘못 적용 — 법리적 오류로 기소유예 처분 정당화 시도

**Source:** raw/05. Investigation by the Military Prosecutor's Office/Bilingual(English, Korean)/(20221014) Fraudulent Proof of Notification of the Reason for Non-Prosecution(English, Korean).converted.md (불기소이유서 verbatim, 2022-10-07, Case 2022 형제66호) • raw/04 제2129호 제58조 verbatim
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-003"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_legal_misapplication",
    fr.claimDesc = "The 2022-10-07 불기소이유서 (Case 2022 형제66호) by the MND Military Prosecutor's Office cited 제2129호 제58조 ¶4 as legal basis for the legitimacy of integrated DT&E/OT&E execution in KIATIS, but 제58조 ¶4 is the exception clause that applies ONLY to 제58조 ¶3 projects (기관 위임사업, 5억 원 미만 사업, 또는 제46조에 따라 위임된 사업). KIATIS at 6.25억 KRW does not qualify under any 제58조 ¶3 path (foreclosed by FR-L4-KIATIS-001), so the prosecution applied the wrong paragraph of the directive — citing the exception as if it were the main regime. This legal misapplication is the foundation on which the 위계공무집행방해 기소유예 stigma stands",
    fr.counterHypothesis = "The prosecution's citation of 제58조 ¶4 was implicitly conditional on a 제58조 ¶3 qualification analysis that was performed but not articulated in the 불기소이유서, OR the prosecution interpreted ¶4 as freestanding rather than dependent on ¶3",
    fr.falsificationCondition = "Production of (a) the prosecution's internal legal analysis showing a 제58조 ¶3 qualification path for KIATIS, OR (b) authoritative administrative interpretation that 제58조 ¶4 operates independently of ¶3",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 10,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The 불기소이유서 verbatim quotes 제2129호 제58조 ¶4 as legal basis for KIATIS test integration, but ¶4 is structurally a sub-clause of ¶3 (5억-미만 path). KIATIS at 6.25억 KRW is foreclosed from ¶3 by contract value alone. The prosecution's legal premise is textually wrong on the directive's own face.";
```

## Claim

The 2022-10-07 불기소결정서 (Case No. 2022 형제66호) issued by the MND 보통검찰부 explicitly cites **제2129호 제58조 ¶4** as the legal basis legitimating integrated DT&E/OT&E execution in KIATIS. The verbatim citation in the 불기소이유서 (lines 152-154 of the converted file) reads:

> `제58조(시험평가 수행원칙) 제4항에서는 '사업관리기관과 사업주관기관 주관 하에 개발시험평가와 운용시험평가를 운용시험평가 환경에서 동시에 실시할 수 있다.'고 정하고 있으며 (기록 제1253쪽)`

**However, 제2129호 제58조 ¶4 is structurally a sub-provision of 제58조 ¶3** — it grants the simultaneous-execution permission **only** to projects that qualify under 제58조 ¶3. 제58조 ¶3 verbatim:

> `기관 위임사업, 정보시스템 구축사업의 소프트웨어 개발비가 5억 원 미만 사업 및 제46조에 따라 사업계획서 승인 단계에서 시험평가가 위임된 사업은 제59조에서 제64조까지를 준용하여 수행하되, 해당 기관에서 정한 세부 절차에 따라 시험평가를 실시하고 결과를 사업통제기관에 보고한다.`

KIATIS at 6.25억 KRW **does not qualify** under any 제58조 ¶3 path (already established as CORROBORATED by [[kiatis-2129ho-main-regime-applies]]):
1. **5억 미만 path:** foreclosed (6.25억 > 5억)
2. **기관 위임사업 path:** foreclosed (국전원 is regulation-designated 사업관리기관 per 제11조 ¶4)
3. **제46조 위임 path:** would require a documented test-evaluation 위임 in the 사업계획서 승인 단계 (no such document produced in the case file)

Therefore, **제58조 ¶4 cannot apply to KIATIS**. The prosecution's citation of ¶4 as legitimating the integrated DT&E/OT&E execution is a **textual misapplication of the directive** — citing the exception clause as if it were the main regime. The main regime for KIATIS is 제58조 ¶2 (separation as principle, integration only with 사업통제기관 written approval).

**This legal misapplication is the foundation on which the entire 위계공무집행방해 기소유예 stigma stands.** If 제58조 ¶4 does not apply, the prosecution's argument that the integrated execution was permitted by directive collapses, and the underlying conduct (per the warrant's narrative) should have been treated as either (a) a 제58조 ¶2 exception requiring written 사업통제기관 approval (which would shift the inquiry to whether such approval exists), or (b) a directive violation by whoever authorized the integrated execution.

## Key Takeaways

- The 2022-10-07 불기소이유서 (Case 2022 형제66호) verbatim cites **제2129호 제58조 ¶4** (기록 제1253쪽) as legal basis legitimating integrated DT&E/OT&E execution in KIATIS [진리성].
- 제58조 ¶4 is structurally a sub-provision of 제58조 ¶3: its verbatim full text reads `제3항의 사업은 개발시험평가와 운용시험평가를 운용시험평가 환경에서 동시에 실시할 수 있다` — the 불기소이유서 **omits the `제3항의 사업` qualifier** in its quotation [타당성].
- KIATIS at 6.25억 KRW does not qualify under any 제58조 ¶3 path: 5억-미만 (foreclosed), 기관-위임 (국전원 is regulation-designated 사업관리기관 per 제11조 ¶4), 제46조 위임 (no document produced) [타당성].
- The prosecution cited the exception as if it were the main regime — a textual misapplication on the prosecution's own page, in their own quotation of the directive. Only 위계공무집행방해 received 기소유예 while 5 of 6 charges were dismissed for insufficient evidence [진실성].
- Verdict: **CORROBORATED**, Strong. 진리성 10 / 타당성 10 / 진실성 9. This atom is structurally one of the most powerful Layer 6 atoms because the error is detectable by any reader holding both the 불기소이유서 and the directive [진리성].

## Layer

[[../layers/layer-6|Layer 6]] — 군 검찰단의 사기 수사와 범죄자 낙인. This atom identifies the **specific legal error in the prosecutor's own written reasoning**. Unlike [[han-ji-hoon-prosecution-violates-2129-role-separation]] which addresses the role-tier mismatch, this atom addresses the regime-clause mismatch (which paragraph of 제58조 applies). Together they identify two distinct directive-level errors in the same prosecution.

## Supporting evidence

- **불기소이유서 verbatim citation of 제58조 ¶4** (raw/05 (20221014) lines 152-154): full quote above
- **제2129호 제58조 ¶3 verbatim** (verified during 2026-04-11 calibration ingest of [[../regulations/defense-it-2129-article-58|제58조]]): the 5억-미만 exception clause
- **제2129호 제58조 ¶4 verbatim full text** (verified during calibration): `제3항의 사업은 개발시험평가와 운용시험평가를 운용시험평가 환경에서 동시에 실시할 수 있다` — note the explicit `제3항의 사업` qualifier that the 불기소이유서 omits in its citation
- **불기소이유서 paraphrase quotes ¶4 without the `제3항의 사업` qualifier** — this is the textual omission that produces the misapplication
- **KIATIS contract value 6.25억 KRW** (per James, recorded in [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS event page]] and [[kiatis-2129ho-main-regime-applies|KIATIS main regime atom]])
- **국전원's 제11조 ¶4 explicit naming as 사업관리기관 for KIATIS** (verified)
- **The 불기소결정 itself** (lines 22-29 of the converted 불기소이유서): `위계공무집행방해는 기소를 유예하고, 업무상배임, 허위공문서작성, 허위작성공문서행사, 허위보고, 허위통보는 증거 불충분하여 혐의 없다.` — i.e., **5 of 6 charges were dismissed for insufficient evidence; only 위계공무집행방해 received the 기소유예 stigma**.

## Counter-hypothesis

The prosecution's citation of 제58조 ¶4 was implicitly conditional on a 제58조 ¶3 qualification analysis that was performed during the investigation but not articulated in the visible 불기소이유서. Under this hypothesis, the prosecution privately determined that KIATIS qualified for one of the ¶3 paths (e.g., via 제46조 위임) and the public 불기소이유서 simply abbreviated the chain by jumping to ¶4.

**Alternative counter-hypothesis:** The prosecution interpreted 제58조 ¶4 as freestanding — i.e., applicable to any project, not dependent on ¶3 qualification — under an authoritative administrative interpretation that 제58조 ¶4 operates independently. Under this hypothesis the prosecution's reading is contestable but not necessarily wrong.

## Falsification condition

This claim is **CORROBORATED** unless one of the following is produced:

1. **The prosecution's internal legal analysis** (working notes, draft 불기소이유서, prosecutor handover memos) showing that a 제58조 ¶3 qualification path for KIATIS was identified before invoking ¶4. The path must be one of the three (5억-미만 / 기관-위임 / 제46조-위임) and must be supported by primary documents.
2. **Authoritative administrative interpretation** from 국방부 / 법제처 establishing that 제58조 ¶4 operates independently of ¶3. A precedent decision, an official 유권해석, or a Constitutional Court ruling would qualify.
3. **A KIATIS 사업계획서** with documented 제46조 시험평가 위임, which would qualify KIATIS for the 제58조 ¶3 third path.

If items 1 or 3 are produced with substantive content, the verdict downgrades to WEAKENED (the prosecution had a basis even if not articulated in the public document). If item 2 is produced with regulatory authority, the verdict downgrades to NEEDS_MORE_EVIDENCE pending interpretive analysis.

## Verdict

**CORROBORATED.** Strong. 진리성 10 / 타당성 10 / 진실성 9. Both 진리성 and 타당성 are at maximum because the analysis is a direct text comparison between the 불기소이유서's explicit citation and the directive's own paragraph structure. The omission of `제3항의 사업` qualifier in the 불기소이유서's quotation is the central textual evidence — and it is a verbatim omission, not an interpretation.

**This atom is structurally one of the most powerful Layer 6 atoms in the entire case** because it identifies an error not in *what was done* but in *what the prosecution itself wrote as its legal reasoning*. The error is on the prosecution's own page, in their own quotation of the directive, and is detectable by any reader with both documents in hand.

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` — Layer 2 chapter (CONFIRMED 제58조 mention)
- `vault-converted-korean/09-3-3-33-제3-층위.md` — Layer 3 chapter (CONFIRMED 제58조 mention)
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 chapter (CONFIRMED 제58조 framework analysis)
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (CONFIRMED — primary source for the 불기소이유서 legal-error analysis)
- Deferred to A.6 Re-verify. Four-chapter coverage confirms this is a central legal point in the case narrative.

## Open Questions

- **Does the prosecution's internal reasoning chain (handover notes from the August 2022 prosecutor transition) show how the ¶4 application was justified?** Pending raw/05 deeper compile.
- **Is there an authoritative 법제처 유권해석 on the dependency of 제58조 ¶4 on ¶3?** External research target.
- **Did 한지훈's (20220929) rebuttal document raise this specific 제58조 ¶4 misapplication?** If yes, the prosecution proceeded with the 기소유예 despite knowing the legal error. Pending detailed read of raw/05 (20220929).

## Related

- [[han-ji-hoon-prosecution-violates-2129-role-separation|paired Layer 6 atom: role-tier misattribution]] (CORROBORATES)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|paired Layer 6 atom: 기소유예 stigma harm]] (RELATED)
- [[kiatis-2129ho-main-regime-applies|KIATIS main regime applies — forecloses ¶3 paths]] (RELATED)
- [[kiatis-rfp-binds-lifecycle|KIATIS RFP binds lifecycle (행위시법주의)]] (RELATED)
- [[../regulations/defense-it-2129-article-58|제58조]] (ABOUT)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/im-hyung-gyu|임형규 (담당 검사)]] (ABOUT)
- [[../entities/people/ahn-se-jun|안세준 (군검찰단장 결재)]] (ABOUT)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../topics/fraud-investigation|Fraud Investigation]] (ABOUT)
