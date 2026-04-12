# 방화벽 정책 요청 공문이 VPN 미사용·DB 직접접속의 추가 증거

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md §3.4.2.1 (lines 53-116)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-1|Layer 1]] (secondary — confirms L1 정리06)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-FIREWALL-CONFIRMS-NO-VPN"})
SET fr.layer = 4,
    fr.claimType = "technical_proof",
    fr.claimSubtype = "technical_evidence",
    fr.claimDesc = "3명의 사업실무자가 처리한 '방화벽 정책 적용 요청' 공문 모두가 舊KIATIS(인터넷)와 新KIATIS(국방망)의 DB를 직접 접속하기 위한 것이었으며, 이는 VPN 미사용 상태의 DB 직접접속을 확증하는 추가 증거다. 新KIATIS도 최소 2021.4.14까지 VPN과 DB접근제어시스템(샤크라맥스) 미적용 상태로 운영되었다",
    fr.counterHypothesis = "방화벽 정책 요청은 VPN이 있더라도 별도로 필요한 표준 절차이며, 방화벽 개방 자체가 VPN 미사용의 증거가 되지 않는다",
    fr.falsificationCondition = "VPN이 적용된 상태에서도 별도 방화벽 정책 요청이 필요했음을 보여주는 DIDC 운영 지침 또는 VPN 적용 기록의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "피의자신문조서에서 한지훈이 진술: '(구)체계는 15년 동안 DB에 직접 접속을 했습니다. VPN없이.' 장우진 상사도 'DB 직접 접속' 지속 증언. 박서준의 1인결재 공문(2022.2.18., Record 6,169/6,171)도 DB직접접속 확인. 新KIATIS도 2021.4.14까지 동일 구조 운영.";
```

## Claim

3명의 사업실무자(오현수·지원호·이준호)가 처리한 모든 "방화벽 정책 적용 요청" 공문은 舊KIATIS(인터넷)와 新KIATIS(국방망)의 DB를 직접 접속하기 위한 것이었다. 이는 제1층위에서 증명된 舊KIATIS의 인터넷 VPN 미사용 DB 직접접속을 다시 한번 확증하는 증거이며, 동시에 新KIATIS도 최소한 2021년 4월 14일까지 VPN과 DB접근제어시스템(샤크라맥스)이 미적용된 상태에서 운영되었음을 보여준다.

피의자신문조서에서의 핵심 진술:
- 한지훈: "(구)체계는 15년 동안 DB에 직접 접속을 했습니다. VPN없이." (본문기록-제4층위-002)
- 장우진 (사업실무자-1) 상사: "우리(는) DB 직접 접속합니다" — 지속적으로 동일 진술
- 2019.4.8.~5.21. 기간 9주 동안 SSL-VPN OTP 요청이 있었으나 이후 사라짐

또한 박서준 (대위(진))의 1인결재 공문(2022.2.18., 기록 제6,169쪽, 기록 제6,171쪽)은 2022년 시점에서도 DB 직접접속 구조가 유지되고 있었음을 보여준다.

## Key Takeaways

- ALL firewall policy requests by the three project officers were for direct DB access without VPN — confirming Layer 1's 정리06 that 舊KIATIS operated on the internet without VPN for 15 years [진리성]
- 新KIATIS also operated without VPN and DB access control (ShakraMax) until at least 2021.4.14 — meaning the prosecution's "identical environment" standard was based on a post-2021 configuration that didn't exist during the 2019 test evaluation [진리성]
- VPN OTP requests appeared in weekly reports for 9 weeks (2019.4.8~5.21) then disappeared — suggesting the request was abandoned or suppressed [진리성]
- 장우진 상사's persistent testimony "we access DB directly" corroborates the no-VPN operation from multiple witnesses [진리성]

## Supporting evidence

- **Record No. 6,100** — 2019년 전반기 방화벽 정책 적용 요청 현황
- **Record No. 6,128~6,138** — 행정정보화과 방화벽 정책 적용 요청 시각화
- **Record No. 6,169, 6,171** — 박서준 1인결재 KIATIS 접속 계정 신청 공문 (2022.2.18.)
- **Record No. 1,629~1,692** — 주간업무보고 (VPN OTP 요청 기록 포함)
- **본문기록-제4층위-002, 003** — 피의자신문조서 문답 (한지훈 진술)

## Counter-hypothesis

방화벽 정책 요청은 VPN 존재 여부와 무관한 별도의 네트워크 접근 제어 절차이다. VPN은 암호화 터널이고, 방화벽 정책은 포트 개방이므로 두 절차는 독립적이다.

## Falsification condition

1. DIDC 운영 지침에서 VPN 적용 환경에서도 별도 방화벽 정책 요청이 필요하다고 명시하는 규정의 제시
2. 新KIATIS에 VPN/샤크라맥스가 2019년 이전에 적용되었음을 보여주는 구축 기록

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7. 다수 증인의 일관된 진술, 공문 기록, 그리고 2022년까지의 DB 직접접속 공문이 모두 동일한 결론을 지지한다.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` lines 100-114 — 피의자신문조서 진술 부분

## Related

- [[old-kiatis-direct-db-access-without-vpn]] — L1 舊KIATIS DB 직접접속 (RELATED)
- [[gukjeonwon-pre-evaluation-team-leader-exclusion]] — L4 팀장 배제 (RELATED)
- [[prosecution-firewall-port-opening-contradicts-it-standard-practice]] — L6 방화벽 개방 관련 (OPPOSES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
