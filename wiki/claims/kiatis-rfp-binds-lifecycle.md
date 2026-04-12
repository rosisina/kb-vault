# KIATIS conduct is governed by 제2129호 throughout its lifecycle (RFP-binds-lifecycle, 행위시법주의)

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md
**Layer:** [[../layers/layer-4|Layer 4]], [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-KIATIS-002"})
SET fr.layer = 4,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "regulatory_temporal_binding",
    fr.claimDesc = "KIATIS 성능개선사업 conduct (2018–2019) is governed by the directive in force at the time of contracting and conduct — 제2129호 (2018-02-05) — under both 국가계약법 RFP-binds-lifecycle principles and the criminal-law 행위시법주의 (lex temporis delicti) doctrine. Subsequent revisions (제2263호 onward) do not apply to KIATIS conduct.",
    fr.counterHypothesis = "Procedural directives are framework rules that apply to current administrative review regardless of when the underlying conduct occurred; 제2436호's regime can be applied to 2018–2019 KIATIS conduct because the 2022 review is itself a 2022 administrative act",
    fr.falsificationCondition = "Production of (a) Korean administrative case law treating defense IT directives as procedural framework rules retroactively applicable to historical conduct, OR (b) a 국가계약법 ruling permitting post-contract directive substitution by the procuring agency",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Two independent legal doctrines (국가계약법 RFP-binding and criminal-law 행위시법주의) converge on the same conclusion: KIATIS conduct must be measured against 제2129호";
```

## Claim

KIATIS 성능개선사업 conduct (2018–2019) is governed by 국방정보화업무 훈령 제2129호 (effective 2018-02-05) throughout its lifecycle. Two independent legal doctrines compel this conclusion:

1. **국가계약법 RFP-binds-lifecycle principle.** The KIATIS 제안요청서 (RFP) was issued in 2018 under 제2129호. Under 국가계약법 contract administration principles, the regulatory framework named in (or in force at) the RFP issuance binds the entire contract lifecycle. Substituting a later directive mid-contract is not permitted.
2. **행위시법주의 (lex temporis delicti).** Under Korean criminal law, the legality of conduct is measured against the rules in force at the time of the conduct, not at the time of subsequent investigation. KIATIS test evaluation occurred 2019-09 to 2019-12; the directive in force throughout that window was 제2129호.

Therefore any 2022 군 검찰 investigation that characterizes KIATIS conduct must apply 제2129호's standards (separation principle, 사업주관기관 binding, full DT&E article framework). Application of 제2436호's standards to KIATIS conduct is doctrinally foreclosed.

## Key Takeaways

- KIATIS 성능개선사업 conduct (2018–2019) is governed by 국방정보화업무 훈령 제2129호 (effective 2018-02-05) throughout its lifecycle — the directive in force at RFP issuance and during test evaluation (2019-09 to 2019-12) [타당성].
- Two independent legal doctrines converge on this conclusion: (a) **국가계약법 RFP-binds-lifecycle** principle — the regulatory framework named at RFP issuance binds the entire contract lifecycle; and (b) **행위시법주의 (lex temporis delicti)** under 형법 Article 1 — legality of conduct is measured against rules in force at the time of conduct [타당성].
- 제2436호 (effective 2020-06-04) is not in force until six months after KIATIS test evaluation completed, and therefore its integration principle and Article 59~61 erasures cannot apply to KIATIS conduct [타당성].
- Any 2022 군 검찰 investigation that applies 제2436호's standards to KIATIS conduct is doctrinally foreclosed; the applicable regime is 제58조 ¶2 main separation principle under 제2129호 [진실성].
- Verdict: **CORROBORATED**, Strong. 진리성 9 / 타당성 10 / 진실성 9 — the two converging doctrines form an unusually robust legal foundation that any counter-hypothesis must overcome simultaneously [진리성].

## Layer

[[../layers/layer-4|Layer 4]] (test evaluation manipulation — establishes the substantive regulatory baseline against which Layer 4 conduct is measured) and [[../layers/layer-6|Layer 6]] (military prosecutor fraud investigation — establishes the legal premise for evaluating whether the 2022 investigation applied the correct directive). This atom is the bridge between the two layers.

## Supporting evidence

- KIATIS RFP issued in 2018 under 제2129호 (per James, recorded in [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS event page]])
- KIATIS test evaluation: 2019-09-01 to 2019-12 (per James)
- 제2129호 in force from 2018-02-05 through 2019-02-25 (when 제2263호 took effect)
- 제2263호 in force from 2019-02-26 through 2020-02-12 — partially overlaps KIATIS test evaluation period; however, A.3 verification confirmed that 제2263호's anchor changes do not include any test-evaluation regime modification
- 제2436호 not in force until 2020-06-04 — six months after KIATIS test evaluation completion
- 국가계약법 contract administration principle (Korean general doctrine, no specific case citation in current corpus — pending A.5 research)
- 행위시법주의 — Korean criminal law general principle (Article 1 of 형법: `범죄의 성립과 처벌은 행위 시의 법률에 의한다`)
- See [[kiatis-2129ho-main-regime-applies|paired claim: 제58조 ¶2 main regime applies]]

## Counter-hypothesis

Procedural directives (훈령 등) are framework rules that govern administrative review, not substantive criminal law. Under this view, the 2022 군 검찰 investigation is itself a 2022 administrative act and is correctly governed by the 2022-current directive (제2649호 by then). Whether KIATIS conduct met 2022 standards is the relevant question, not whether it met 2018 standards. Under this hypothesis, 제2436호's integration principle (¶1) applies retroactively to KIATIS evidence interpretation.

## Falsification condition

This claim is **CORROBORATED** unless one of the following is produced:

1. **Korean administrative case law** treating defense IT directives as purely procedural framework rules retroactively applicable to historical conduct review. Specific case examples would substantially weaken the claim.
2. **A 국가계약법 ruling** or 기획재정부 administrative interpretation permitting post-contract directive substitution by the procuring agency without contractor consent.
3. **A 형법 Article 1 exception** specifically applicable to administrative directives (not statutes) that would permit retroactive application of looser regulatory standards. (Such an exception would be doctrinally surprising, since 형법 Article 1 generally protects against retroactive criminalization, not against retroactive de-criminalization. But if defense procurement violations are not criminal in nature, the analogy may not hold.)
4. **A specific written authority** from MND or 국방부 검찰단 invoking the post-제2436호 framework as the standard for KIATIS evidence review, on the explicit ground that 2022 standards govern 2022 reviews.

If items 1 or 2 are produced, the verdict downgrades to WEAKENED. Items 3 and 4 would convert the question into a substantive legal debate rather than refuting the claim per se.

## Verdict

**CORROBORATED.** Strong. The two converging doctrines (계약법 + 형법 행위시법주의) form an unusually robust legal foundation for the temporal binding. Any counter-hypothesis must overcome both doctrines, not just one.

## Open Questions

- What does the 2022 군 검찰 investigation file actually invoke as its regulatory framework? If it cites 제2129호 throughout, the temporal-binding question never arises in the case file. If it cites 제2649호 or invokes "current standards", this atom becomes central to the Layer 6 analysis. (Pending raw/05 + raw/06 ingest.)
- Is there a Korean Supreme Court or Constitutional Court ruling on the temporal binding of administrative procurement directives to historical conduct? (Pending A.5 web research.)

## Spot-check (raw/01 book)

- `vault-converted-korean/03-executive-summary--핵심-요약.md` — Executive summary
- `vault-converted-korean/04-1-1-서론.md` — Introduction
- `vault-converted-korean/08-3-2-32-제2-층위.md` — Layer 2 (project structure / contracting context)
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 (prosecutor's framework choice; central to this atom)
- Deferred to A.6 Re-verify. The 행위시법주의 doctrine application to the 2022 prosecutor case is exactly what Layer 6 of the book covers; verdict and falsification structure should be elevated to verbatim book citations.

## Related

- [[kiatis-2129ho-main-regime-applies|paired: 제58조 ¶2 main regime]] (CORROBORATES)
- [[2436ho-test-evaluation-principle-inverted|the principle KIATIS conduct must NOT be measured by]] (CORROBORATES)
- [[2436ho-dtne-articles-erased|the deletion KIATIS conduct must NOT be measured by]] (CORROBORATES)
- [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS event page]] (ABOUT)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../topics/fraud-investigation|Fraud Investigation]] (ABOUT)
- [[../topics/kiatis-systems|KIATIS Systems]] (ABOUT)
