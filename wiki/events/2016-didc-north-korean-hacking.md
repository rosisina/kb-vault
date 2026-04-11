# 2016 DIDC North Korean Hacking Incident (2016년 DIDC 북한 해킹 사건)

**Source:** `raw/01. book-beyond-cybersecurity/vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` §3.1.1–§3.1.4 (primary Layer 1 chapter) • pending verbatim extraction from raw/07 scanned evidence record pages
**Layer:** [[../layers/layer-1|Layer 1]] (primary), [[../layers/layer-2|Layer 2]] (secondary)
**Aurora node type:** `:Timeline { date: "2016", layer: 1 }`

The 2016 intrusion into Defense Integrated Data Center (DIDC) systems by North Korean actors is the root incident from which all seven layers of the cover-up unfold. The attack mechanism, per book §3.1.4, exploited the fact that 舊KIATIS had operated for ~15 years **without an SSL-VPN**, with direct database access enabled from the open Internet through a parasitic co-residence on the Defense Internet Homepage server hosted inside DIDC. The public narrative later named DIDC Center 2 (Gyeryongdae) as the intrusion target; per the book, the actual compromise origin was **DIDC Center 1 (Yongin)**, where 舊KIATIS resided — a fact whose concealment is the motive for the Layer 1 erasure operation (see [[../topics/fraud-investigation|Fraud Investigation]] hub §"DIDC Center 1 vs Center 2"). This page is still partially placeholder — verbatim record-number excerpts from raw/01 Layer 1 chapter are the next compile target.

## Key Takeaways

- [진리성] DIDC, operated under the Ministry of National Defense, was compromised by North Korean actors in 2016. The attack exploited 舊KIATIS's ~15-year SSL-VPN-less operation and direct-DB-access configuration (book §3.1.4).
- [진리성] The actual compromise origin was **DIDC Center 1 (Yongin)** where 舊KIATIS was parasitically co-resident on the Defense Internet Homepage server, not DIDC Center 2 (Gyeryongdae) as publicly announced (book §3.1; see [[../topics/fraud-investigation|Fraud Investigation]]).
- [진리성] The intrusion is the originating event the 7-layer proof system documents being covered up; the cover-up mechanism begins at [[../layers/layer-1|Layer 1]] (erasure of 舊KIATIS history during the Active-X removal project) and propagates through layers 2–7.
- [진리성] Book-side Layer 1 chapter cites at least 20 evidence-record page numbers relevant to this incident — per the A.6 Re-verify pass, `기록 제1,054; 제1,068; 제1,117; 제1,120; 제1,125; 제1,141; 제1,144; 제1,157; 제1,474; 제2,868; 제3,068; 제3,468; 제4,723; 제4,879; 제4,890; 제6,324+; 제8,826; 제10,347; 제11,302; 제12,722; 제0,745~810`. Verbatim excerpts for each pending individual atom extraction.
- [타당성] DIDC 부대예규 제12호 제37조 ① (firewall policy approval requirement — see [[../regulations/didc-cyber-protection-sop-12|DIDC SOP 제12호]]) was binding at the time of the 2016 incident and throughout the subsequent cover-up period; 舊KIATIS's SSL-VPN-less operation violates this article on its face.
- All subsequent layers (2–7) build on concealment decisions made in the immediate aftermath of this event.

## Verbatim

*(To be populated with exact Korean and English quotes from book §3.1.1–§3.1.4 during the next targeted L1 compile pass; the record-number anchor list above is the retrieval index.)*

## Open Questions

- Exact date(s) of initial compromise — awaiting verbatim extraction from book §3.1.2.
- Which specific servers in the DIDC Center 1 environment were affected (Defense Internet Homepage server is confirmed; other co-resident systems pending).
- Any public-record mapping of the 2016 attribution (if North Korea was publicly named vs. internally named only).

## Related

- [[../layers/layer-1|Layer 1 — 舊KIATIS 이력 제거]]
- [[../layers/layer-2|Layer 2 — 新KIATIS 조작]]
- [[../regulations/_index|Regulations]]
- [[../entities/organizations/_index|Organizations]]
- [[../claims/didc-sop-incident-report-mandatory|DIDC SOP 제12호 incident report duty]]
- [[../claims/didc-sop-firewall-vpn-trail-mandatory|DIDC SOP 제12호 firewall/VPN trail duty]]
- [[../claims/didc-sop-db-access-control-mandatory|DIDC SOP 제11호 DB access control duty]]
