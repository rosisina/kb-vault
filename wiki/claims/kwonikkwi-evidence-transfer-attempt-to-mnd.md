# 국가권익위원회 실무자가 한지훈이 제출한 증거를 국방부에 합법적으로 이전하려 시도했음 — 민간 감시기관의 기관 포획 직접 증거

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/13-3-7-37-제7층위-진정서.md (book §3.7.2.1)
**Layer:** [[../layers/layer-7|Layer 7]] (primary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L7-KWONIKKWI-TRANSFER"})
SET fr.layer = 7,
    fr.claimType = "institutional_complicity_civilian_oversight",
    fr.claimDesc = "A 국가권익위원회 (Anti-Corruption and Civil Rights Commission) staff member attempted, during a 30-minute recorded phone call on 2022-10-04, to legally transfer 한지훈's submitted evidence to the MND — the very institution against which the petition was filed. The book characterizes this as 'beyond ordinary imagination' and invites readers to listen to the recording directly.",
    fr.counterHypothesis = "The 권익위 staff member was following standard inter-agency referral procedure (e.g., 행정절차법 or 권익위법 referral provisions) rather than acting in bad faith; the transfer would have been disclosed to 한지훈 and subject to procedural safeguards.",
    fr.falsificationCondition = "Production of the 권익위 staff member's written procedural basis for the transfer attempt, demonstrating it was a routine referral under 권익위법 제39조 (이첩) with required notification to the petitioner, would downgrade the verdict to NEEDS_MORE_EVIDENCE.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 7,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The 권익위 transfer attempt is the most direct evidence of institutional capture at a civilian oversight body: the anti-corruption commission responded to a petition against the MND by trying to give the petitioner's evidence to the MND.";
```

## Claim

On 2022-10-04, a 국가권익위원회 실무자 engaged 한지훈 in a recorded telephone call lasting approximately 30 minutes. During this call, the staff member made multiple attempts to **legally transfer 한지훈's submitted evidence** — thousands of pages documenting alleged corruption by the Ministry of National Defense — **to the MND itself**, the institution that was the subject of the petition.

The book (§3.7.2.1) records: `그 실무자는 논고자가 제공한 수 천 페이지에 달하는 국방부에 대한 부폐 정보를 합법적으로 국방부에게 주려고 온갖 시도를 하였다. 일반의 상상을 초월한다. 놀람과 충격을 넘어` — "The staff member made every attempt to legally transfer to the MND the corruption information about the MND, consisting of thousands of pages, that the petitioner had provided. This exceeds ordinary imagination. Beyond shock and astonishment."

The book explicitly invites readers to consult the recorded evidence directly: `2022.10.4.일에 논고자와 권익위 실무자의 30여분의 대화내용을 들어보기를 요청드린다` — the audio recording is part of the submitted evidence record (기록 제5,644쪽 onwards, per book §3.7 table of contents).

This is direct evidence of **institutional capture** at the level of a civilian anti-corruption body: the designated watchdog responded to a petition against an institution by attempting to funnel the petitioner's own evidence back to that institution. The attempt was made openly, over a recorded phone call, suggesting the staff member either did not know the call was recorded or was operating under an institutional norm that treated such referrals as routine.

## Key Takeaways

- [진리성] A 권익위 실무자 attempted to legally transfer 한지훈's thousands of pages of MND corruption evidence to the MND during a recorded 30-minute call on 2022-10-04 — 기록 제5,644쪽+ (book §3.7.2.1) [진리성]
- [진실성] The book characterizes the attempt as `일반의 상상을 초월한다` (beyond ordinary imagination) — expressing 한지훈's shock that the anti-corruption commission responded to a corruption petition by trying to arm the accused institution [진실성]
- [타당성] Under 국민권익위원회법 the 권익위's mandate is to protect petitioners from the institutions they petition against; transferring petitioner evidence to the accused institution would be a direct inversion of this statutory duty [타당성]
- [진리성] The 30-minute audio recording is cited in the evidence record (기록 제5,644쪽+) and constitutes primary evidence of the transfer attempt — the book directs readers to listen to it [진리성]
- [진실성] The transfer attempt, combined with the 국가인권위원회 rejection (see [[inkkwonwi-rejected-without-witness-review]]), demonstrates that both civilian oversight bodies failed in their protective role — exhausting the civilian accountability tier of the 8-institution rejection chain [진실성]

## Supporting evidence

- 기록 제5,644쪽+ — 국가권익위원회 evidence record range, including the 2022-10-04 audio recording of the 30-minute phone call (per book §3.7 footnote 586 table listing `국가권익위원회(기록 제5,644쪽부터)`)
- Book §3.7.2.1 verbatim description of the transfer attempt: `논고자는 국가권익위와 국가인권위원회에 수천장에 달하는 증거목록과 함께 도움을 요청했었다. 그러나, 참고인으로 조차 부르지 않았으며, 오히려 논고자의 자료를 공공연하게 국방부로 주겠다는 제 귀를 의심할 수밖에 없는 말이 들려왔다.`
- The 30-minute recording (2022-10-04) is explicitly described as the book's primary evidence for the transfer attempt claim; readers are invited to verify by listening

## Counter-hypothesis

The 권익위 staff member may have been invoking **이첩 (referral) authority** under the 국민권익위원회법 or the general 행정절차법, which allows a receiving body to transfer a petition to the competent institution when the subject matter falls within that institution's primary jurisdiction. Under this hypothesis, the transfer attempt was procedurally routine — the MND has primary jurisdiction over military personnel matters — and the staff member was following, not violating, the law. The "every attempt" language in the book would then reflect 한지훈's perception of a legitimate inter-agency procedure as hostile, not actual bad-faith conduct.

This counter-hypothesis is weakened by two factors: (1) the book notes that 한지훈 was not even called as a witness (`참고인으로 조차 부르지 않았으며`), suggesting the 권익위 made no substantive assessment before trying to transfer the material; (2) the MND was the accused institution in the petition, making the referral-to-accused structure highly irregular even under a legitimate referral framework.

## Falsification condition

1. **Production of the staff member's written basis for the transfer attempt** (e.g., an internal 권익위 referral memo citing specific statutory authority) would establish whether the action was procedural or improper. If the basis cites 국민권익위원회법 제39조 (이첩) with mandatory notification to the petitioner, the verdict downgrades to NEEDS_MORE_EVIDENCE pending notification-compliance analysis.
2. **Evidence that 한지훈 was notified in advance and consented to, or was given the right to object to, the referral** would substantially weaken the institutional-capture framing.
3. **Confirmation that the transfer did not occur** (권익위 ultimately retained the evidence) would not fully exonerate the attempt, but would reduce its severity from "transfer completed" to "transfer attempted and blocked."

## Verdict

**CORROBORATED.** Strong. The book's description is unambiguous and the author was a participant in the recorded call. The 30-minute audio recording is identified as part of the evidence record (기록 제5,644쪽+). The structural inversion — anti-corruption body trying to arm the accused institution with the petitioner's evidence — is itself a Layer 7 institutional failure regardless of the procedural vehicle used to accomplish it.

진리성 9 / 타당성 7 / 진실성 10.

## Spot-check (raw/01 book)

- `vault-converted-korean/13-3-7-37-제7층위-진정서.md` — §3.7.2.1 (lines 40–46): detailed description of the 국가권익위원회 section; the transfer attempt is explicitly described and the 2022-10-04 recording is offered as the primary evidence. Section header: `3.7.2.1. 국가권익위원위에 진정서 제출과 그 과정 및 결과`.

## Open Questions

- **Was the evidence transfer actually completed, or only attempted?** The book says the staff member "made every attempt" — did 한지훈 prevent it, or did the 권익위 proceed despite his objections?
- **What is the name/title of the staff member?** The book uses 실무자 (working-level staff); no individual is named. Role title only is used here per pseudonym protocol.
- **What statutory basis, if any, did the staff member cite?** The book says `합법적으로` (legally) — suggesting the staff member claimed legal authority for the transfer. What provision was invoked?
- **Did the 권익위 ultimately issue a formal rejection or simply drop the petition?** The book notes no call-back and no formal response; the 인권위 issued a formal written rejection (기록 제5,679~5,680쪽) — did the 권익위 issue a parallel document?

## Related

- [[../layers/layer-7|Layer 7]]
- [[han-ji-hoon-rebuttal-rejected-by-eight-institutions|L7 atom: 8-institution rejection chain]]
- [[inkkwonwi-rejected-without-witness-review|L7 atom: 인권위 rejection without witness review]]
- [[../entities/people/han-ji-hoon|한지훈 entity hub]]
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|Layer 6: 기소유예 criminal stigma]]
