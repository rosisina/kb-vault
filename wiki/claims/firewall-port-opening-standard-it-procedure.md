---
lang: ko
title-ko: 방화벽 포트 개방은 표준 IT 절차 — 불법 접근이 아님
title-en: 방화벽 포트 개방은 표준 IT 절차 — 불법 접근이 아님
aliases:
  - FR-L6-FIREWALL-STANDARD-PROCEDURE
  - 방화벽 포트 개방은 표준 IT 절차 — 불법 접근이 아님

layer: 6
secondary-layers: []
claimType: prosecution_misconduct
claimSubtype: prosecution_technical_ignorance
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-11

record-nos: [6128, 8435]
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - DIDC
  - 국전원
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/book
  - fracture/F-CE
  - person/한지훈
  - org/DIDC
  - org/국전원
  - org/군검찰단
  - has/record-nos
---
# 방화벽 포트 개방은 표준 IT 절차 — 불법 접근이 아님

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md §3.6.3.3.1 (lines 151-198)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-FIREWALL-STANDARD-PROCEDURE"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_technical_ignorance",
    fr.claimDesc = "군검찰단이 '불법적 방화벽 개방'으로 기소한 행위는 국전원↔DIDC 간의 표준 방화벽 정책 적용 요청 절차이다. 국방의 모든 기관은 DIDC 서버 접속 시 동일한 방화벽 포트 개방을 요청하며(그림 4-3), 행정정보화과에서만 2019년 전반기에 수십 건의 동일 요청이 처리되었다. 단 1건의 공문만을 범죄 근거로 사용한 것은 선별적 기소이다",
    fr.counterHypothesis = "시험평가용 방화벽 개방은 일반 업무용과 다른 특수한 절차가 적용되어야 하며, DIDC 부대예규 미준수가 위법 요소이다",
    fr.falsificationCondition = "시험평가용 방화벽 개방에 별도의 보안 심의 절차가 요구된다는 DIDC 부대예규 조항의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "그림 4-3(Record 6,128~6,138)에서 행정정보화과의 수십 건 방화벽 요청 확인. DIDC 부대예규 제12호 제37조의 '원격 접속' 규정은 민간↔국방망 간을 대상으로 하며, 국방망 내부(국전원↔DIDC)에는 적용되지 않음(Record 8,435). 국제 IT 표준에서 방화벽 정책 요청은 표준 네트워크 관리 절차.";
```

## 주장 (Claim)

### 한국어

군검찰단이 "불법적 방화벽 개방 → 불법적 DB 접속"으로 기소한 행위는 실제로는 국전원↔DIDC 1센터 간의 표준 방화벽 정책 적용 요청 절차이다.

증거:
1. **행정정보화과 전체 현황(그림 4-3, 기록 제6,128쪽~제6,138쪽):** 2019년 전반기(1.10~6.16)에만 다수의 방화벽 정책 적용 요청이 처리되었다. 新KIATIS 관련 요청은 이 중 하나에 불과하다.
2. **DIDC 부대예규 제12호 제37조(기록 제8,435쪽):** "원격으로 접속할 경우" VPN 사용을 규정하나, 여기서 "원격"이란 민간 인터넷→국방망 접속을 의미하며, 국방망 내부(국전원↔DIDC)의 접속에는 해당하지 않는다.
3. **코로나 재택근무 유추:** 재택근무 시 외부→내부망 접속에 VPN이 필요한 것과, 내부망 내에서의 서버간 통신에 방화벽 포트 개방이 필요한 것은 전혀 다른 보안 맥락이다.

군검찰단은 수십 건의 동일 유형 공문 중 한지훈이 결재에 포함된 **단 1건**만을 범죄 근거로 사용하였다.

### English

The act prosecuted by the military as "illegal firewall opening → illegal DB access" is actually the standard firewall policy application request procedure between 국전원 and DIDC 1st Center.

Evidence:
1. **Overall 행정정보화과 status (Figure 4-3, Records 6,128–6,138):** Multiple firewall policy application requests were processed in the first half of 2019 alone (1.10–6.16). The New KIATIS-related request was just one of these.
2. **DIDC Unit Regulation No. 12 Article 37 (Record No. 8,435):** Stipulates VPN use "when accessing remotely," but "remote" here means civilian internet → defense network access; it does not apply to intra-defense-network connections (국전원 ↔ DIDC).
3. **COVID remote work analogy:** VPN being needed for external → internal network access during remote work, and firewall port opening being needed for inter-server communication within the internal network, are entirely different security contexts.

The military prosecutors used **only 1 document** out of dozens of identical-type official documents in which 한지훈 was in the approval chain as the basis for criminal charges.

## 핵심 요약 (Key Takeaways)
- Firewall port opening between 국전원 and DIDC is standard IT network management — dozens of identical requests processed in the same department in 2019H1 [진리성]
- DIDC regulation Article 37's VPN requirement applies to external→internal access (internet→국방망), NOT internal-to-internal communication [타당성]
- The prosecution used ONLY 1 out of dozens of identical firewall requests as criminal evidence — textbook selective prosecution [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 6,128~6,138** — 행정정보화과 방화벽 정책 요청 현황
- **Record No. 8,435** — DIDC 부대예규 제12호 제37조

## 반대 가설 (Counter-hypothesis)
시험평가용 방화벽 개방에는 별도의 보안 심의가 필요하며, DIDC 부대예규 미준수가 위법이다.

## 반증 조건 (Falsification Condition)
시험평가용 방화벽 개방에 별도 보안 심의가 필요하다는 DIDC 규정.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/12-3-6-36-제6층위-군.md` lines 151-198

## 관련 (Related)
- [[prosecution-firewall-port-opening-vs-it-standard-practice]] — L6 기존 관련 atom (OPPOSES)
- [[prosecution-selective-criminalization-firewall-approval-chain]] — L6 선별적 범죄화 (CAUSES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
