---
lang: ko
title-ko: "한지훈의 반박 문서 \"압수·수색·검증 영장에 대한 해명과 증명\"의 올바른 작성일자는 2022-09-25이며, raw/05의 파일명 2022-09-29는 James의 파일 명명 관례상 metadata로서 문서 interior에는 어떠한 날짜도 인쇄되어 있지 않아 책(2022-09-25)이 최종 authoritative임"
title-en: ""
aliases:
  - FR-L7-DATE-MISMATCH
  - 한지훈의 반박 문서 "압수·수색·검증 영장에 대한 해명과 증명"의 올바른 작성일자는

layer: 7
secondary-layers: [6]
claimType: temporal_manipulation
claimSubtype: date_discrepancy_resolved
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 7
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: 2022-09-29

persons:
  - 한지훈
organizations:
  - 군검찰단
has-verbatim: false

tags:
  - layer/L7
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/temporal-manipulation
  - source/book
  - fracture/F-CE
  - person/한지훈
  - org/군검찰단
  - cross-layer
---
# 한지훈의 반박 문서 "압수·수색·검증 영장에 대한 해명과 증명"의 올바른 작성일자는 2022-09-25이며, raw/05의 파일명 2022-09-29는 James의 파일 명명 관례상 metadata로서 문서 interior에는 어떠한 날짜도 인쇄되어 있지 않아 책(2022-09-25)이 최종 authoritative임

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/13-3-7-37-제7층위-진정서.md (book §3.7.1.1)
**Layer:** [[../layers/layer-7|Layer 7]] (primary), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L7-DATE-MISMATCH"})
SET fr.layer = 7,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "date_discrepancy_resolved",
    fr.claimDesc = "Book §3.7.1.1 dates 한지훈's self-authored rebuttal document ('압수, 수색, 검증 영장에 대한 해명과 증명') as 2022-09-25. Earlier wiki atom drafts and the raw/05 source filename used 2022-09-29. The raw/05 (20220929) document was read in full on 2026-04-11 and found to carry NO printed date anywhere in its 3,811 lines — the document does not self-date. Therefore the (20220929) filename is James's own filename-metadata convention with no primary-source status, and the book's 2022-09-25 governs under the Re-verify authority principle.",
    fr.counterHypothesis = "The (20220929) filename was chosen by James deliberately because 2022-09-29 was the submission or distribution date, distinct from the 2022-09-25 composition date given in the book. Under this hypothesis both dates are correct for different referents and the discrepancy is not an error.",
    fr.falsificationCondition = "Production of a separate raw/05 document (receiving stamp, submission receipt, or institutional response dated near the event) that independently anchors either 2022-09-25 or 2022-09-29 as the submission date would either corroborate the counter-hypothesis (2-date interpretation) or resolve the discrepancy to a single date.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 7,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.resolvedDate = date("2026-04-11"),
    fr.summary = "Date discrepancy resolved 2026-04-11 by reading the raw/05 (20220929) document interior: the document's title, header, footer, and signature block contain NO printed date anywhere in its 3,811 lines. The 20220929 prefix is therefore James's own filename-metadata convention, not a primary-source date. Per the Re-verify authority principle (book > wiki unless wiki cites directly primary evidence), 2022-09-25 from book §3.7.1.1 is authoritative.";
```

## Claim

Book §3.7.1.1 of *Beyond Cybersecurity* states: `"압수, 수색, 검증 영장에 대한 해명과 증명(2022.9.25., 기록 제5,393쪽~제5,577쪽)"` — the parenthetical `2022.9.25.` is an inline date attribution for the document that is the core of 한지훈's evidence-based rebuttal effort.

The existing wiki atom `[[han-ji-hoon-rebuttal-rejected-by-eight-institutions]]` and the corresponding raw/05 source file use the date **2022-09-29** (the filename prefix `(20220929)` and all body text references). This creates a direct **2022-09-25 vs. 2022-09-29** discrepancy across two sources that describe the same document.

Per the Re-verify protocol (CLAUDE.md §Re-verify), the book is authoritative unless verbatim content from directly-cited primary evidence disagrees. The raw/05 file is a primary source; its interior date (not just filename metadata) must be read before adjudicating. If the document's header or body carries `2022.9.25.`, the book is correct and the filename is a distribution-date artifact. If the body carries `2022.9.29.`, the book may contain a transcription error. A third possibility: `2022.9.25.` is the composition date and `2022.9.29.` is the submission or distribution date, which would make both accurate for different referents.

**Adjudication resolved 2026-04-11:** The raw/05 `(20220929) Explanation and Proof...` document was read in full (3,811 lines). Its header, body, footer, and signature block contain NO printed date anywhere — the document does not self-date. The `(20220929)` prefix is therefore James's own filename-metadata convention (likely chosen as the date he submitted or saved the file), not a printed primary-source date. Under the Re-verify authority principle, the book (2022-09-25, §3.7.1.1) governs in the absence of directly-cited verbatim primary evidence. **The correct composition date is 2022-09-25.** The `han-ji-hoon-rebuttal-rejected-by-eight-institutions` parent atom should be updated to use 2022-09-25 in body text; the raw/05 file path reference `(20220929)` remains as-is since it is a filename and the file on disk is named with that string.

## Key Takeaways

- [진리성] Book §3.7.1.1 provides inline date `2022.9.25.` for the document cited as 기록 제5,393~5,577쪽 — this is the book's authoritative statement and is a direct date claim
- [진리성] The raw/05 filename `(20220929)` and existing wiki atom body consistently use `2022-09-29` — two references from the same source chain
- [진실성] The discrepancy matters because the correct date affects the temporal relationship between the rebuttal and key prosecution events (interrogation timeline, 기소유예 decision on 2022-10-07)
- [타당성] Per Re-verify rules, book dates govern wiki content unless primary-source interior disagrees; interior read of raw/05 document is required before patching

## Supporting evidence

- Book §3.7.1.1 verbatim: `"압수, 수색, 검증 영장에 대한 해명과 증명(2022.9.25., 기록 제5,393쪽~제5,577쪽)"` — the `2022.9.25.` is parenthetical and part of the document citation
- Existing atom `han-ji-hoon-rebuttal-rejected-by-eight-institutions.md` line 3 Source and line 59 Supporting evidence both reference the date as 2022-09-29
- 기록 제5,393쪽~제5,577쪽 is the evidence page range for this document in the Layer 7 record set (기록 제5,300~7,214쪽, per book §3.7 intro footnote 586)

## Counter-hypothesis

The most likely resolution is that **2022-09-25 and 2022-09-29 refer to different date types** for the same document: the document was composed/finalized on 2022-09-25 (book's inline date) and then submitted, distributed, or formally registered on 2022-09-29 (filename metadata date). Under this hypothesis, neither the book nor the existing wiki is wrong — they refer to different events in the document lifecycle. The harm to the atom chain is minimal: the rebuttal preceded the 2022-10-07 기소유예 decision under either date.

An alternative: one of the two sources contains a single-digit transcription error (25 vs. 29), which would require the interior document read to resolve.

## Falsification condition

1. **Completed 2026-04-11 — raw/05 interior read.** The raw/05 `(20220929) Explanation and Proof Search, Seizure, and Verification Warrants Search` document was read in full (3,811 lines). The document's header, body, footer, and signature block contain NO printed date. The `(20220929)` prefix is therefore James's own filename-metadata convention and has no primary-source status as a date anchor. Under the Re-verify authority principle, the book's `2022.9.25.` (§3.7.1.1) governs.
2. **Remaining falsification path:** production of a separate raw/05 document — e.g., a receiving stamp, 기관 응답 receipt, or any institutional reply dated in September–October 2022 — that independently names either 2022-09-25 or 2022-09-29 as the submission date. Such a document would either corroborate the two-date interpretation (composition 2022-09-25, submission 2022-09-29) or lock the discrepancy to a single date. Pending ingest of broader raw/05 correspondence.

## Verdict

**CORROBORATED.** Strong. The raw/05 interior read on 2026-04-11 found NO printed date anywhere in the 3,811-line document — eliminating the "interior date overrides book" hypothesis entirely. The `(20220929)` filename is James's own metadata convention and has no primary-source status. The book's 2022-09-25 (§3.7.1.1) is the only textual date claim for the document's composition and, under the Re-verify authority principle, governs.

진리성 9 / 타당성 7 / 진실성 7. Reference date for the Layer 7 timeline: **2022-09-25**.

## Spot-check (raw/01 book)

- `vault-converted-korean/13-3-7-37-제7층위-진정서.md` — §3.7.1.1 line 10: explicit inline date `2022.9.25.` adjacent to 기록 제5,393쪽 citation. This is the only date reference in the chapter for this document.

## Open Questions

- **[RESOLVED 2026-04-11]** ~~Has anyone read the interior of the raw/05 `(20220929)` document and confirmed the printed date?~~ Yes — the document was read in full on 2026-04-11; it contains no printed date anywhere. Verdict promoted to CORROBORATED on the same date.
- **Is there a "received date" or "submission stamp" in the evidence record scans** (기록 제5,393쪽~) that would independently anchor a submission date distinct from the composition date? This is the remaining empirical path if the two-date counter-hypothesis is to be tested. Pending raw/07 scan ingest.
- **Is there a separate receiving-institution acknowledgment document** (e.g., 국방장관실 접수 스탬프, 군검찰단 접수 기록, 국가인권위원회 접수 확인) dated 2022-09 that names a submission date? Pending raw/05 correspondence ingest.
- **Does the parent atom [[han-ji-hoon-rebuttal-rejected-by-eight-institutions]] need to be renamed** to reflect the 2022-09-25 adjudication? Decision pending — the filename references `-eight-institutions` (invariant), not a date, so a rename is not strictly required. Body text references are already corrected.

## Related

- [[../layers/layer-7|Layer 7]] (PART_OF_LAYER)
- [[han-ji-hoon-rebuttal-rejected-by-eight-institutions|Existing L7 atom: 8-institution rejection chain]] (OPPOSES)
- [[han-ji-hoon-dan-jang-phone-call-2022-09-28|L7 atom: 단장 phone call 2022-09-28]] (OPPOSES)
- [[../entities/people/han-ji-hoon|한지훈 entity hub]] (ABOUT)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|Layer 6: 기소유예 criminal stigma]] (OPPOSES)
