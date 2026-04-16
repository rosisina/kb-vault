---
lang: ko
title-ko: 舊KIATIS의 이중구조 — 웹 외관 아래 C/S 방식 DB 직접접속
title-en: 舊KIATIS의 이중구조 — 웹 외관 아래 C/S 방식 DB 직접접속
aliases:
  - FR-L1-WEB-FACADE-CS-DIRECT
  - 舊KIATIS의 이중구조 — 웹 외관 아래 C/S 방식 DB 직접접속

layer: 1
secondary-layers: []
claimType: technical_proof
claimSubtype: technical_architecture_deception
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-11

record-nos: [1629, 4890, 5164]
evidence-ids: []
event-date: null

persons:
  - 장우진
  - 한지훈
organizations: []
has-verbatim: false

tags:
  - layer/L1
  - verdict/corroborated
  - strength/strong
  - type/technical-proof
  - source/book
  - fracture/F-MS
  - person/장우진
  - person/한지훈
  - has/record-nos
---
# 舊KIATIS의 이중구조 — 웹 외관 아래 C/S 방식 DB 직접접속

**Source:** raw/01. book-beyond-cybersecurity/Korean/07-3-1-31-제1층위-ActiveX.md §3.1.1.5 (lines 45-60)
**Layer:** [[../layers/layer-1|Layer 1]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-WEB-FACADE-CS-DIRECT"})
SET fr.layer = 1,
    fr.claimType = "technical_proof",
    fr.claimSubtype = "technical_architecture_deception",
    fr.claimDesc = "舊KIATIS는 표면적으로 웹 브라우저에서 접근하는 것처럼 보이지만, 실제로는 ActiveX를 통해 VPN 없이 직접 DB에 접근하는 클라이언트-서버(C/S) 방식으로 작동하는 이중구조이다. 장우진 상사의 진술서(Record 5,164~5,165, 10,316~10,318)와 피의자신문조서(Record 4,890)에서 확인된다. 이 이중구조가 15년간 보안취약을 은폐한 기만의 핵심이다",
    fr.counterHypothesis = "ActiveX 기반 C/S 구조는 2000년대 한국 정부 시스템의 일반적 아키텍처이며, 의도적 기만이 아닌 기술적 관행이었다",
    fr.falsificationCondition = "舊KIATIS의 C/S 구조가 당시 국방 보안 규정에 부합하는 승인된 아키텍처였음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "장우진 진술서(Record 5,164~5,165)에서 15년 VPN 미사용 확인. 피의자신문조서(Record 4,890)에서 '(구)체계는 15년 동안 DB에 직접 접속했습니다. VPN 없이' 진술. 9주간 VPN OTP 요청 후 사라진 기록(Record 1,629~1,692). 웹 외관 아래 실제 DB 직접접속 구조.";
```

## 주장 (Claim)

### 한국어

舊KIATIS는 구조적 기만을 내포한 이중구조 시스템이다:

- **외관:** 웹 브라우저에서 웹페이지로 접근하여 업무를 처리하는 것처럼 보임
- **실제:** 웹 브라우저에서 웹페이지 접근 후 ActiveX를 통해 VPN 없이 직접 DB에 접근하는 클라이언트-서버(C/S) 방식

이 이중구조는 15년간 보안취약을 은폐한 기만의 핵심이다. 장우진 (사업실무자-1)의 진술서(기록 제5,164쪽~제5,165쪽, 제10,316쪽~제10,318쪽)에서 15년간 VPN 미사용 사실이 확인되며, 피의자신문조서(기록 제4,890쪽)에서 한지훈이 명확히 진술하였다.

9주간(2019.4.8~5.21) VPN OTP 요청이 주간업무보고(기록 제1,629쪽~제1,692쪽)에 기재되었다가 사라진 것은 VPN 적용 시도가 어떤 이유로 중단되었음을 보여준다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- 舊KIATIS had a dual architecture: web frontend masking a C/S direct DB access backend via ActiveX — no VPN, no encryption [진리성]
- 장우진's formal written statement (Record No. 5,164-5,165) confirms 15 years of no-VPN DB direct access [진리성]
- 9-week VPN OTP request trail in weekly reports then disappeared — someone suppressed the VPN effort [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 5,164~5,165, 10,316~10,318** — 장우진 진술서
- **Record No. 4,890** — 피의자신문조서 (VPN 미사용 진술)
- **Record No. 1,629~1,692** — 주간업무보고 (VPN OTP 요청 기록)

## 반대 가설 (Counter-hypothesis)
ActiveX C/S 구조는 2000년대 한국 정부 시스템의 일반적 관행이다.

## 반증 조건 (Falsification Condition)
舊KIATIS C/S 구조가 당시 보안 규정에 부합하는 승인된 아키텍처였음을 보여주는 기록.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/07-3-1-31-제1층위-ActiveX.md` lines 45-60

## 관련 (Related)
- [[old-kiatis-hosted-inside-other-server-15-years]] — L1 타 서버 내 운용 (RELATED)
- [[old-kiatis-direct-db-access-without-vpn]] — L1 DB 직접접속 (RELATED)
- [[active-x-removal-as-project-goal-confirms-vulnerability]] — L1 Active-X 보안취약 (CORROBORATES)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
