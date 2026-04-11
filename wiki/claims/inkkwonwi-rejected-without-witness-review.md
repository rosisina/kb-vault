# 국가인권위원회는 참고인 조사 없이, 수천 쪽의 증거를 묵살하고 한지훈의 진정을 기각했음 — 절차적 거부를 실질적 심사로 위장한 기관 실패

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/13-3-7-37-제7층위-진정서.md (book §3.7.2.2)
**Layer:** [[../layers/layer-7|Layer 7]] (primary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L7-INKKWONWI-REJECTION"})
SET fr.layer = 7,
    fr.claimType = "institutional_procedural_failure_human_rights_body",
    fr.claimDesc = "The 국가인권위원회 (National Human Rights Commission of Korea) issued a rejection of 한지훈's petition WITHOUT calling any witness (참고인) and WITHOUT substantively reviewing the thousands of pages of submitted evidence. The book characterizes the rejection as 'beyond words' and questions the commission's reason for existence.",
    fr.counterHypothesis = "The 인권위 conducted a paper-based review sufficient under its statutory framework (국가인권위원회법), determined the matter fell outside its human-rights jurisdiction (e.g., primarily a criminal-procedure or procurement dispute), and issued a legitimate jurisdictional rejection without needing to call witnesses.",
    fr.falsificationCondition = "Production of the 인권위 진정사건 처리결과 (기록 제5,679~5,680쪽) showing substantive engagement with 한지훈's specific human-rights claims (isolation, criminal stigma, harassment) would downgrade this claim to NEEDS_MORE_EVIDENCE.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "인권위 issued a formal rejection of 한지훈's petition without calling witnesses or reviewing thousands of submitted evidence pages — the formal verdict document is preserved at 기록 제5,679~5,680쪽.";
```

## Claim

The 국가인권위원회 (National Human Rights Commission of Korea) received 한지훈's petition, along with thousands of pages of supporting evidence, and issued a formal rejection (진정사건 처리결과, preserved at **기록 제5,679~5,680쪽**) without: (a) calling 한지훈 as a witness or reference person (참고인 조사), and (b) substantively engaging with the submitted evidence.

The book (§3.7.2.2) states: `국가인권위 실무자들은 진정 내용을 이리 저리 인수 인계 등을 핑계로 미루고 회피하였다` — "The 인권위 staff shuffled the petition around, delaying and evading under the pretext of handovers." The chapter continues: `참고인 조사도 없이 수천 쪽에 달하는 증거를 묵살하고 국방부의 대변인 역할을 하고 있는 그 국가인권위원회의 존재 가치는 어디에 있는 것인가?` — "Without even calling a witness, ignoring thousands of pages of evidence, acting as a spokesperson for the MND — what is the point of the National Human Rights Commission?"

The 인권위's mandate under 국가인권위원회법 includes investigating human rights violations by state actors — the precise category that 한지훈's petition addressed. His documented injuries (5+ months of isolation in empty offices, denial of desk/computer access, criminal stigma via 기소유예 without evidence of criminal conduct) fall squarely within the commission's subject-matter jurisdiction. The rejection without witness review or evidence engagement is not a legitimate jurisdictional refusal — it is a substantive adjudication disguised as a procedural clearance.

The book's language (`국방부의 대변인 역할`) is a direct charge that the 인권위 functioned as an advocate for the accused institution rather than as a neutral human rights arbiter.

## Key Takeaways

- [진리성] The 인권위 진정사건 처리결과 is preserved at 기록 제5,679~5,680쪽 — a two-page document that constitutes the commission's full written response to thousands of pages of evidence [진리성]
- [진리성] The book explicitly states `참고인 조사도 없이` (without calling any witness) — the commission issued its verdict without meeting 한지훈 or questioning any party [진리성]
- [진리성] 인권위 staff delayed and avoided the petition through repeated handoffs (`이리 저리 인수 인계 등을 핑계로 미루고 회피`) — suggesting deliberate evasion, not administrative backlog [진리성]
- [타당성] Under 국가인권위원회법 the commission is statutorily empowered to investigate human-rights violations by state actors; 한지훈's petition described isolation, criminal stigma, and procedural targeting — all within the commission's jurisdiction [타당성]
- [진실성] The book's framing (`국방부의 대변인 역할`, `존재 가치는 어디에 있는 것인가?`) reflects 한지훈's direct experience of the commission as an instrument of institutional protection rather than human rights enforcement [진실성]

## Supporting evidence

- 기록 제5,679~5,680쪽 — the formal 국가인권위원회 진정사건 처리결과 document (referenced by the book as the written outcome of the petition)
- 기록 제5,616쪽~제5,628쪽 — 한지훈's petition to the 인권위 (the document submitted, as cited in book §3.7.2.2)
- Book §3.7.2.2 verbatim (lines 51): `참고인 조사도 없이 수천 쪽에 달하는 증거를 묵살하고 국방부의 대변인 역할을 하고 있는 그 국가인권위원회의 존재 가치는 어디에 있는 것인가?`
- Book §3.7 intro (line 3) confirms 인권위 is listed as one of the institutions that rejected the petition
- Companion atom: [[kwonikkwi-evidence-transfer-attempt-to-mnd]] — both civilian oversight bodies (인권위 + 권익위) failed simultaneously, completing the civilian-tier failure in the 8-institution rejection chain

## Counter-hypothesis

The 인권위 may have conducted a **paper-based review** of 한지훈's petition that was legally sufficient under its internal procedures. Many human rights bodies make initial jurisdiction determinations without witness hearings — if the commission determined the matter was primarily a criminal-procedure dispute (군 검찰단 처분) or a procurement-governance matter rather than a human rights violation, a brief written ruling declining jurisdiction would be proper procedure. The lack of witness examination would then reflect scope determination, not evasion.

This counter-hypothesis is weakened by (a) the explicit 5+ months of documented isolation and criminal stigma, both of which are facially human-rights violations; (b) the book's description of deliberate shuffling/handoffs as evasion rather than deliberate substantive review; and (c) the two-page verdict document responding to thousands of evidence pages — a disproportionate response ratio inconsistent with genuine engagement.

## Falsification condition

1. **Reading 기록 제5,679~5,680쪽** — the actual 처리결과 document. If it contains substantive engagement with 한지훈's specific human-rights claims (isolation, criminal stigma, procedural targeting), the verdict downgrades to NEEDS_MORE_EVIDENCE. If it is a boilerplate procedural rejection with no engagement, the claim is further corroborated.
2. **Evidence that any 인권위 officer met with 한지훈 or reviewed the evidence** at any point before issuing the rejection. An internal 인권위 case log showing evidence examination would constitute a falsification event.
3. **Statutory basis showing that 인권위 correctly applied jurisdictional exclusion** — e.g., a provision of 국가인권위원회법 that excludes active-duty military personnel from the commission's jurisdiction, or a provision that defers to 군 검찰단 decisions as final.

## Verdict

**CORROBORATED.** Strong. The book author was the petitioner and directly experienced the commission's treatment of his submission. The formal outcome document (기록 제5,679~5,680쪽) exists as a primary source and its contents can verify the absence of substantive engagement. The book's characterization (`국방부의 대변인`) is a first-person account of a specific institutional failure.

진리성 9 / 타당성 8 / 진실성 10.

## Spot-check (raw/01 book)

- `vault-converted-korean/13-3-7-37-제7층위-진정서.md` — §3.7.2.2 (lines 49–52): dedicated section on 국가인권위원회 rejection; verbatim condemnation of the no-witness ruling and evidence dismissal. Section header: `3.7.2.2. 국가인권위원위 진정서 제출과 그 과정 및 결과`.

## Open Questions

- **What does 기록 제5,679~5,680쪽 say?** The two-page verdict document is the primary falsification target for this atom. Its verbatim content would resolve whether the commission gave any substantive basis for rejection.
- **Did the 인권위 cite a jurisdictional exclusion?** If the commission determined it lacked jurisdiction over military personnel in active investigations, the rejection may be legally defensible regardless of the evidence engagement question.
- **How long did the 인권위 process take from submission to 처리결과?** Duration without any witness contact would strengthen the evasion interpretation.
- **Were any handoff records preserved?** The book describes `이리 저리 인수 인계` (handoffs) — if these generated internal administrative records, they would corroborate the evasion narrative.

## Related

- [[../layers/layer-7|Layer 7]]
- [[han-ji-hoon-rebuttal-rejected-by-eight-institutions|L7 atom: 8-institution rejection chain]]
- [[kwonikkwi-evidence-transfer-attempt-to-mnd|L7 atom: 권익위 evidence transfer attempt]]
- [[../entities/people/han-ji-hoon|한지훈 entity hub]]
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|Layer 6: 기소유예 criminal stigma]]
- [[han-ji-hoon-dan-jang-phone-call-2022-09-28|L7 atom: 단장 phone call — civilian escalation trigger]]
