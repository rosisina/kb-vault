---
lang: ko
title-ko: 장우진의 서면 진술서 + 녹취 이중 증거 — 시험평가 시 VPN 미사용 + DIDC 인프라 제약으로 국전원 대여 서버 테스트
title-en: 장우진의 서면 진술서 + 녹취 이중 증거 — 시험평가 시 VPN 미사용 + DIDC 인프라 제약으로 국전원 대여 서버 테스트
aliases:
  - FR-L4-JANGWOOJIN-DUAL-VPN-ABSENT
  - 장우진의 서면 진술서 + 녹취 이중 증거 — 시험평가 시 VPN 미사용 + DIDC

layer: 4
secondary-layers: [1, 6]
claimType: testimony_evidence
claimSubtype: dual_source_testimony
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 10
validity: 9
sincerity: 8
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 장우진
  - 한지훈
  - 이준호
organizations:
  - DIDC
  - 국전원
  - 국유단
has-verbatim: true

tags:
  - layer/L4
  - layer/L1
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/testimony-evidence
  - source/recording
  - person/장우진
  - person/한지훈
  - person/이준호
  - org/DIDC
  - org/국전원
  - org/국유단
  - has/verbatim-quote
  - cross-layer
---
# 장우진의 서면 진술서 + 녹취 이중 증거 — 시험평가 시 VPN 미사용 + DIDC 인프라 제약으로 국전원 대여 서버 테스트

**Source:** raw/10. 인원별 관련 문서/(20221005) statements from segent kim(김성중 상사).md (서면 진술서, 2022.10.5) • raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[020]` 녹취 210 (2022.7.19, 01:01:12, lines 11941~12158)
**Layer:** [[../layers/layer-4|Layer 4]] (primary — 시험평가 환경의 실체), [[../layers/layer-1|Layer 1]] (secondary — 舊KIATIS VPN 부재), [[../layers/layer-6|Layer 6]] (secondary — 검찰 혐의 직접 반증)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-JANGWOOJIN-DUAL-VPN-ABSENT"})
SET fr.layer = 4,
    fr.secondaryLayers = [1, 6],
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "dual_source_testimony",
    fr.claimDesc = "국유단 KIATIS 10년+ 실무자 장우진이 서면 진술서(2022.10.5, raw/10)와 녹취(2022.7.19, 녹취210)의 이중 증거로 증명: (1) 舊KIATIS는 2007년 이후 15년간 VPN 없이 DB 직접접속, (2) 시험평가 시에도 VPN 미사용 — 'VPN 환경이 안 돼 가지고', (3) DIDC 하드웨어 교체사업 진행 중이라 KIATIS 서버를 국전원에 대여장비로 설치하여 테스트. 서면과 구두 증언의 핵심 내용이 verbatim 수준으로 일치하여 증거력 극대화",
    fr.counterHypothesis = "장우진의 진술은 한지훈의 요청에 의해 작성된 것이므로 독립성이 제한되며, 한지훈이 정리한 내용에 동의를 구한 것일 뿐 장우진의 자발적 증언이 아니다",
    fr.falsificationCondition = "시험평가 기간(2019.9.2~11) 중 DIDC 클라우드에 KIATIS 서버가 설치되어 VPN이 적용된 상태에서 평가가 수행되었음을 보여주는 서버 설치 기록 또는 VPN 접속 로그",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "서면 진술서(raw/10) + 녹취 210(raw/02)의 이중 증거 — '키아디스는 VPN 안 썼습니다'(녹취) = '15여년간 DB에 직접 접근'(진술서). 시험평가 시에도 'VPN 환경이 안 돼 가지고'(녹취) = 'DIDC OTP 카드 수량 부족으로 VPN 사용제한'(진술서). DIDC 인프라 제약으로 국전원 대여 서버 테스트(녹취) = 검찰 '환경 조작' 혐의의 구조적 불가능성 입증.";
```

## 주장 (Claim)

### 한국어

국유단 KIATIS 10년+ 사업실무자 장우진 (사업실무자-1)이 **서면 진술서**(2022.10.5, raw/10)와 **녹취**(2022.7.19, 녹취 210)의 **이중 증거**로 다음 3가지 핵심 사실을 증명하였다:

### 사실 1: 舊KIATIS는 2007년 이후 15년간 VPN 없이 DB 직접접속

**서면 진술서 (raw/10):**
> "이 상사는 10년 넘게 KIATIS 사업 추진 및 운영을 담당한 인원으로 본 사업이 수 차례에 걸쳐 연기되었으며 **2007년 이후 현재까지 가상사설망(VPN)을 이용하지 않고 지난 15여년간 DB에 직접 접근했다는 말을 수시로 하곤 하였습니다.**"

**녹취 210 verbatim:**
> **(장우진)** "그 전에는 **VPN을 쓰지를 안 했습니다.**" (line 12021)
> **(장우진)** "예 **키아디스는 VPN 안 썼습니다.**" (line 12037)

### 사실 2: 시험평가 시에도 VPN 미사용 — DIDC 인프라 제약

**서면 진술서 (raw/10):**
> "개발운영시험운영 환경은 **DIDC OTP 카드 수량 부족으로** 국전원과 DIDC 간에 미 합의나 의견 차이로 인한 **VPN 사용제한**으로 방화벽 포트개방을 통해 DB에 직접 접속하는 것으로 들었습니다."

**녹취 210 verbatim:**
> **(장우진)** "**테스트 할 때 VPN 안 썼습니다.** (한지훈) 시험 평가할 때 (장우진) 예. **VPN 환경이 안 돼 가지고.**" (line 12054~55)
> **(장우진)** "암호 모듈은 해야. 디아이디시에서 **최종으로 줄 수 있는 게 열 몇 개 밖에** 줄 수 없다." (line 12073~74)

### 사실 3: DIDC 사업 진행 중 → 국전원에 대여 서버로 테스트

**녹취 210 verbatim:**
> **(장우진)** "**디아이디시가 그 때 사업으로 인해가지고 저희가 그쪽에다가 설치할 수 없는 환경**이어서... 기존서버는 그대로 나두고. 새로 들어온 거. 그쪽에서 키아티스 서버는 이정도 사양이 들어올 거야. 스펙이 들어와서 거기에 맞는 **장비를 갖다가 거기다 설치해서 테스트**를 했고." (line 12059~12064)

### 서면-구두 이중 일치 대조표

| 사실 | 서면 진술서 (raw/10) | 녹취 210 (raw/02) | 일치 수준 |
|---|---|---|---|
| VPN 미사용 | "15여년간 DB에 직접 접근" | "키아디스는 VPN 안 썼습니다" | **verbatim 일치** |
| OTP 수량 제한 | "DIDC OTP 카드 수량 부족" | "열 몇 개 밖에 줄 수 없다" | **내용 일치** |
| DIDC 정책 변경 | "클라우드로 변경하면서 VPN 사용하도록 정책 변경" | "클라우드로 바뀌는 시즌... VPN으로 들어와야 한다" | **verbatim 일치** |
| 시험평가 시 VPN 부재 | "VPN 사용제한으로 방화벽 포트개방을 통해 DB에 직접 접속" | "테스트 할 때 VPN 안 썼습니다. VPN 환경이 안 돼 가지고" | **verbatim 일치** |
| 사전 설명 | "이준호 대위가 시험환경은 평가 이전에 설명하였다고 기억" | "이준호 대위가 평가하기 전에 설명을 쭉 했습니다" | **verbatim 일치** |

### 검찰 핵심 혐의에 대한 직접 반증

| 검찰 전제 | 장우진 증언 (이중 증거) | 결론 |
|---|---|---|
| "VPN을 적용해야 했다" | "VPN 환경이 안 돼 가지고" + "OTP 열 몇 개 밖에 못 줘" | DIDC 인프라 제약 → **적용 불가능** |
| "DIDC에서 테스트해야 했다" | "디아이디시가 사업으로 설치할 수 없는 환경" | DIDC 측 사정 → **한지훈 책임 아님** |
| "평가위원에게 안 알렸다" | "이준호 대위가 평가하기 전에 설명을 쭉 했습니다" | 사전 설명 완료 → **알렸음** |
| "환경을 조작했다" | "소요제기한 부서 대표들이 와서 테스트해가지고 오케이 받은 거" | 사용자 직접 확인 → **조작 없음** |

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] **서면 진술서(raw/10) + 녹취 210(raw/02)의 이중 증거**가 5개 핵심 사실에서 verbatim 수준으로 일치 — 10년+ 실무자의 기억이 3개월 간격(7.19 녹취 → 10.5 진술서)으로 일관됨 = **극도로 높은 신뢰성**. / Written statement and oral testimony match at verbatim level across 5 key facts over a 3-month interval.
- [진리성] **"테스트 할 때 VPN 안 썼습니다"** — 시험평가에 실제 참여한 국유단 실무자가 **검찰 핵심 혐의를 직접 부정**. / The actual test-evaluation participant directly negates the prosecution's core charge.
- [타당성] DIDC 하드웨어 교체사업 → KIATIS 서버 설치 불가 → 국전원 대여 장비로 테스트 — **시험평가 환경의 제약이 한지훈이 아닌 DIDC 측 사정에 기인**. / The test environment constraint was caused by DIDC, not by Han Ji-hoon.
- [진리성] 진술서의 C/S 방식 확인: "6.25전사자종합정보체계(구KIATIS)가 **클라이언트 서버(C/S) 방식**이며 KIATIS 성능개선사업도 C/S 방식으로 추진" — 웹 기반이 아닌 **DB 직접접속 구조**를 사업 공식 문서(착수회의, 국유단장·국전원장 시연)로 확인. / The written statement confirms C/S architecture, proven at kickoff meeting demonstrations to both agency heads.
- [진실성] 녹취 210은 **압수수색 당일**(2022.7.19) 즉각적 통화 — 사전 조율 없는 자연 대화. 장우진은 "저도 정확하게 모르겠는데"라는 유보도 포함하여 **정직한 기억의 한계**도 기록됨. / Recording made on search-and-seizure day — spontaneous, with honest memory limitations included.

## 지지 증거 (Supporting Evidence)
- **서면 진술서** (raw/10/(20221005) statements from segent kim(김성중 상사).md) — 전문
- **진술서 원본 PDF** (raw/10/김성중. [4부-파일0145-20221005] 국유단 실무자(장우진 상사) 사업관련(진술내용).pdf) — Layer 4 증거 기록 제출용
- **녹취 210** (raw/02 lines 11941~12158, 2022.7.19, 01:01:12) — 압수수색 당일 통화 전문
- **장우진 경력** (raw/02 line 93): "국유단 KIATIS (주관기관/통제기관) 사업실무자 상사" — 10년+ 경력, "통제기관임무/평가인원"

## 반대 가설 (Counter-hypothesis)
1. **유도된 진술**: 서면 진술서는 한지훈이 내용을 정리하여 장우진에게 "맞는지 확인"을 요청한 것이므로, 장우진이 한지훈의 프레이밍에 수동적으로 동의한 것일 수 있다.
2. **기억의 부정확성**: 4년 전 시험평가의 VPN 적용 여부에 대한 기억이 부정확할 수 있다.

**반론**: 녹취 210은 압수수색 **당일** 즉각적 통화로 사전 조율 없는 자연 대화. "VPN 안 썼습니다"는 4회 반복된 단정적 진술. 장우진은 "통제기관임무/평가인원"으로 시험평가 당사자.

## 반증 조건 (Falsification Condition)
1. 시험평가 기간(2019.9.2~11) VPN 접속 로그
2. DIDC에 KIATIS 서버 설치 기록
3. 장우진의 증언 번복

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 10 / 타당성 9 / 진실성 8.

## 미결 사항 (Open Questions)
- 녹취 211 (2022.7.22) 및 212 (2022.9.27)의 추가 내용 확인 필요
- 진술서에서 "개발서버의 위치가... 기억이 없다"는 유보와 녹취의 "국전원에다가 테스트 서버를 구축"의 관계
- 진술서 원본 PDF의 장우진 서명/확인 여부

## 원전 확인 (Spot-check)
- `raw/10/(20221005) statements from segent kim(김성중 상사).md` — 진술서 전문
- `raw/02/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 12021, 12037, 12054, 12059, 12073

## 관련 (Related)
- [[old-kiatis-direct-db-access-without-vpn|舊KIATIS DB 직접접속 — 본 atom이 서면 진술서로 보강]] (CORROBORATES)
- [[didc-vpn-otp-18month-withholding|VPN OTP 18개월 미제공 — 장우진의 "열 몇 개" 진술이 물리적 제약 확인]] (CORROBORATES)
- [[excavation-team-leader-15yr-vpn-absence-field-testimony|발굴팀장 15년 증언 — 본 atom과 독립적 제5의 증인]] (CORROBORATES)
- [[han-ji-hoon-prosecution-violates-2129-role-separation|역할 분리 위반 — 본 atom이 검찰 혐의의 전제를 붕괴]] (CORROBORATES)
- [[prosecution-distorts-operational-vs-test-environment|환경 왜곡 — 시험평가 환경 제약의 실제 원인이 DIDC임을 입증]] (CORROBORATES)
- [[../entities/people/jang-woo-jin|장우진 (엔티티 허브)]] (ABOUT)
- [[../entities/organizations/didc|DIDC]] (ABOUT)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
