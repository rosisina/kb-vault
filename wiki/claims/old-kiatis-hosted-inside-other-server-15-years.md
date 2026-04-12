# 舊KIATIS는 15년간 독립 서버가 아닌 타 서버 내에서 운영 — 홈페이지 게시판 기원

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/07-3-1-31-제1층위-ActiveX.md §3.1.1.1 (lines 11-18)
**Layer:** [[../layers/layer-1|Layer 1]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-KIATIS-INSIDE-OTHER-SERVER"})
SET fr.layer = 1,
    fr.claimType = "system_architecture_concealment",
    fr.claimDesc = "舊KIATIS는 2006년 육군전산소가 홈페이지 게시판 형태로 제작한 단순 파일첨부 시스템이며, 15년간 독립 서버가 아닌 '타 시스템 서버 내에 설치되어' 운영되었다. 이후 '국방 통합 인터넷 메일서버'로 서버 세탁되어 이전되었다",
    fr.counterHypothesis = "舊KIATIS가 타 서버 내에서 운영된 것은 소규모 시스템의 일반적인 호스팅 방식이며, 의도적 은폐가 아닌 비용 효율성 판단이었다",
    fr.falsificationCondition = "舊KIATIS의 타 서버 내 운영이 국방정보화 관련 규정에 부합하는 정상적 운영 방식임을 보여주는 근거",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "제안요청서(안) 검토결과보고(Record 1,157)에서 '타 시스템 서버 내에 설치되어 운영 중' 확인. 조달청 최종 제안요청서(Record 1,481)에서도 동일 기재. 2022.12까지 사용 확인(Record 10,347). 강홍석과의 대화에서 'VPN 없이 웹으로 사용' 확인.";
```

## Claim

舊KIATIS는 2006년 육군 전산소가 홈페이지 게시판 형태로 제작한 단순 파일첨부 시스템에서 출발했다(기록 제1,054쪽, 제1,120쪽). 사용자는 국유단, 조사본부, 각 군 부대 등 약 100명이었다(기록 제1,068쪽).

핵심 사실: 舊KIATIS는 15년간 독립된 서버가 아닌 "타 시스템 서버 내에 설치되어 운영"되었다. 이는 국유단의 新KIATIS 제안요청서(안) 검토결과보고(2018.9.11., 기록 제1,157쪽)와 조달청 최종 제안요청서(2018.10.29., 기록 제1,481쪽)에서 확인된다.

국유단 실무자 강홍석과의 대화(2022.9.20., 기록 제10,347쪽)에서 舊KIATIS가 2022년 12월까지 사용되고 있었음이 확인되며, "VPN 없이 웹으로 사용", "구 체계 자료 이관을 안 했기 때문에 구 서버를 처분할 수 없다"는 진술이 있었다.

## Key Takeaways

- 舊KIATIS originated as a simple bulletin-board file-attachment system on a homepage server (2006, Record No. 1,054/1,120) — NOT a dedicated defense information system [진리성]
- It was operated INSIDE another system's server for 15 years — confirmed by both the RFP review (Record No. 1,157) and the final RFP (Record No. 1,481) [진리성]
- 舊KIATIS was still in use as late as December 2022 — 3+ years after 新KIATIS deployment (Record No. 10,347) [진리성]
- The "server laundering" into 국방 통합 인터넷 메일서버 concealed the system's true architecture [타당성]

## Supporting evidence

- **Record No. 1,054, 1,120** — 舊KIATIS 제작 기원 (2006 육군전산소)
- **Record No. 1,068** — 사용자 약 100명
- **Record No. 1,157** — 국유단 제안요청서(안) 검토결과 ("타 시스템 서버 내에 설치되어 운영")
- **Record No. 1,481** — 조달청 최종 제안요청서
- **Record No. 10,347** — 강홍석 대화 (2022.9.20., 舊KIATIS 2022.12까지 사용)
- **Record No. 1,144** — 일상감사 결과 통보 (서버 세탁 확인)

## Counter-hypothesis

소규모 시스템의 타 서버 내 운영은 비용 효율적 호스팅 방식이며, 보안 규정 위반이 아니다.

## Falsification condition

국방정보화 규정에서 소규모 시스템의 타 서버 내 운영을 허용하는 조항의 제시.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7. 복수의 공식 문서에서 확인.

## Spot-check

- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` lines 11-18

## Related

- [[old-kiatis-direct-db-access-without-vpn]] — L1 DB 직접접속
- [[old-kiatis-intranet-data-link-confirmed]] — L1 인트라넷 연동
- [[../layers/layer-1|Layer 1]]
