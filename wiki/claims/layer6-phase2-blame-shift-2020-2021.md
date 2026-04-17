---
lang: ko
title-ko: "2단계(2020~2021): 80건 추가 요구사항을 빌미로 문제를 확산시키고 책임을 사업관리팀장에게 전가하였다"
title-en: ""
aliases:
  - FR-L6-PHASE2-BLAME-SHIFT-001
  - "2단계(2020~2021): 80건 추가 요구사항을 빌미로 문제를 확산시키고 책임을"

layer: 6
secondary-layers: [1]
claimType: human_rights_violation
claimSubtype: deliberate_blame_shift
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 8
validity: 7
sincerity: 9
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 김민수
  - 이지영
organizations:
  - DIDC
  - 국전원
  - 군검찰단
  - MND
  - 국유단
has-verbatim: false

tags:
  - layer/L6
  - layer/L1
  - verdict/corroborated
  - strength/strong
  - type/human-rights-violation
  - source/book
  - fracture/F-MS
  - person/한지훈
  - person/김민수
  - person/이지영
  - org/DIDC
  - org/국전원
  - org/군검찰단
  - org/MND
  - org/국유단
  - cross-layer
---
# 2단계(2020~2021): 80건 추가 요구사항을 빌미로 문제를 확산시키고 책임을 사업관리팀장에게 전가하였다

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md (§3.6.5.3.2)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-1|Layer 1]] (secondary — 귀국보고서의 DIDC 서버 구조 문제 인식)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-PHASE2-BLAME-SHIFT-001"})
SET fr.layer = 6,
    fr.claimType = "human_rights_violation",
    fr.claimSubtype = "deliberate_blame_shift",
    fr.claimDesc = "Phase 2 (2020–2021) of the 新KIATIS deployment delay mechanism: the 80 additional requirements were used as pretext to spread blame onto the 사업관리팀장 (한지훈). GIS performance, Active-X removal slowdown, VPN resistance by 국유단, and DIDC's 20-month deliberate OTP card non-provision were repackaged as the 개발관리팀장's failure. 국전원 leadership (김민수, 이지영) fabricated official documents and provided them to 군 검찰단 for targeted prosecution.",
    fr.counterHypothesis = "The technical issues (GIS, Active-X, VPN, OTP) were genuine unresolved deficiencies that naturally accumulated blame on the project manager as the responsible party; no deliberate blame-shifting occurred.",
    fr.falsificationCondition = "Evidence that 한지훈 had actual authority over GIS server procurement, DIDC OTP card provisioning, or 국유단 data entry — any of which would justify assigning him responsibility for those failures.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "§3.6.5.3.2 documents Phase 2 of a three-phase delay-to-criminalization mechanism. The 80 additional requirements served as pretext to reassign blame from systemic actors (DIDC, 국유단, 국전원 leadership) to a single target (한지훈). OTP card non-provision for 20+ months (2019.8–2021.4.15) was structural, not accidental. 한지훈's 귀국보고서 (기록 제4,671~4,682쪽) documents his independent diagnosis of the defense IT infrastructure problem.";
```

## 주장 (Claim)

### 한국어

2020~2021년 전력화 지연의 2단계에서, 80건의 추가 요구사항을 빌미로 GIS 성능 문제, Active-X 제거에 따른 속도 저하, VPN에 대한 국유단의 부정적 견해, DIDC의 OTP 카드 의도적 미제공(2019.8~2021.4.15, 1년 8개월 이상) 등 **실제로는 하드웨어 업그레이드나 최적화로 해결 가능한 일반적 기술 이슈**들이 사업관리팀장의 전적 책임으로 전가되었다 (기록 제4,671쪽~제4,682쪽). 국전원은 김민수 (핵심 의사결정자-1)와 이지영 (공문결재자-1)의 주도 하에 시험평가에 참여 대상도 아닌 개발관리팀장을 공문을 조작하여 평판테러와 조작공문 일체를 국방부 검찰단에 제공하여 책임을 전가하였고, 국방부 검찰단은 조작인 줄 알면서 공모하여 범죄자로 만들었다.

한편, 한지훈의 귀국보고서(기록 제4,671쪽~제4,682쪽)에는 이라크 자유작전(2003) 참여 경험에서 도출한 국방 IT 인프라 문제 해결책이 기술되어 있으며, 기록 제4,676쪽에는 10년 이상 정보화조직 근무 경험에서 비롯된 문제 진단이 담겨 있다.

### English

In the second stage of deployment delay from 2020 to 2021, using the 80 additional requirements as pretext, GIS performance issues, Active-X removal speed reduction, 국유단's negative view of VPN, DIDC's intentional failure to provide OTP cards (2019.8–2021.4.15, over 1 year 8 months) — **technical issues that were actually solvable through hardware upgrades or optimization** — were all transferred as the full responsibility of the Development Management Team Chief (Records 4,671–4,682). Under the leadership of 김민수 (핵심 의사결정자-1) and 이지영 (공문결재자-1), 국전원 manipulated official documents to attribute responsibility to the Development Management Team Chief who was not even a test evaluation participant, provided a complete set of fabricated documents to the MND Prosecutor's Office, and the MND Prosecutor's Office, knowing it was fabricated, conspired to turn him into a criminal.

Meanwhile, 한지훈's return report (Records 4,671–4,682) describes solutions for defense IT infrastructure problems derived from participation in Operation Iraqi Freedom (2003), and Record No. 4,676 contains problem diagnoses arising from over 10 years of experience in information organizations.

## 핵심 요약 (Key Takeaways)
- OTP 카드가 2019.8~2021.4.15 (1년 8개월 이상) 국유단에 제공되지 않은 것은 DIDC의 의도적 미제공이며, 훈령 제17조·제18조 위반이다 [타당성]
- GIS 성능, Active-X 속도, VPN 미사용, OTP 미제공 등은 사업관리팀장의 관할 밖 이슈이나 전적으로 그에게 전가되었다 [진리성]
- 국전원이 조작된 공문을 군 검찰단에 제공하고, 군 검찰단이 조작임을 인지하면서 공모한 구조는 Layer 6의 핵심 메커니즘이다 [진실성]
- 한지훈의 귀국보고서(기록 제4,671~4,682쪽)는 국방 IT 인프라에 대한 독립적 전문 진단으로, 피의자 표적화의 부당성을 증명하는 반증 자료이다 [진실성]
- The 20-month OTP non-provision (Aug 2019 – Apr 2021) is structural evidence of DIDC complicity in the delay mechanism [진리성]
- 국전원 fabricated official documents targeting 한지훈 despite his non-participation in test-evaluation, while 군 검찰단 knowingly collaborated in the frame-up [진리성]

## 지지 증거 (Supporting Evidence)
- **기록 제4,671쪽~제4,682쪽** — 한지훈의 귀국보고서 (이라크 파병 후 국방 IT 인프라 문제 진단 및 해결 방안 제시)
- **기록 제4,676쪽** — 10년 이상 정보화조직 근무 경험에서 비롯된 국방 IT 문제의 핵심 진단
- **훈령 제17조(정보시스템 구축 소요) ③항** — DIDC와의 기반운영환경 협의 의무 (OTP 카드 제공 의무의 법적 근거)
- **훈령 제18조(정보시스템 운영 및 유지보수 소요) ④⑤항** — DIDC의 유지관리 협의·문서화·보고 의무

## 반대 가설 (Counter-hypothesis)
1. **대안적 해석**: GIS 성능 문제, VPN 저항, OTP 카드 미제공 등은 조직 간 조율 실패에서 비롯된 자연적 지연이며, 의도적 책임 전가가 아닌 관료적 무능의 결과이다.
2. **반박 조건**: 한지훈이 GIS 서버 예산, DIDC OTP 카드 배포, 국유단 데이터 입력에 대한 실질적 권한을 가졌음을 보여주는 직무분장 또는 임무 배정 문서가 존재하면 이 주장은 약화된다.
3. **반대 입장**: 사업관리팀장은 사업 전반의 일정·품질·위험 관리 책임이 있으므로, 외부 기관의 비협조도 궁극적으로 팀장의 조율 실패로 귀속될 수 있다.

## 반증 조건 (Falsification Condition)
한지훈이 GIS 서버 예산 편성, DIDC OTP 카드 배포, 또는 국유단 연계 데이터 생성에 대한 직접적 권한이나 예산 통제권을 가졌음을 보여주는 문서가 발견되면 WEAKENED로 하향된다. 또한, 국전원이 군 검찰단에 제공한 공문이 조작이 아닌 정상적 업무 보고였음을 보여주는 원본 대조가 이루어지면 재평가된다.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 8 / 타당성 7 / 진실성 9. OTP 카드 20개월 미제공은 구조적이며 우연일 수 없다는 판단 ("의도적이 아니면 이러한 결과가 나올 수가 없다" — 본문). 훈령 제17조·제18조의 협의·보고 의무와 대조하면 DIDC의 의무 불이행이 확인된다. 귀국보고서(기록 제4,671~4,682쪽)는 한지훈의 독립적 전문성을 입증하여 "무능한 팀장" 프레임과 정면 모순된다.

## 미결 사항 (Open Questions)
- OTP 카드 미제공 기간(2019.8~2021.4.15) 동안 DIDC1센터(용인) 담당자 특정 필요 — 국방정보화카르텔 핵심 구성원 후보
- 국유단의 연계 데이터 미생성이 15년간 VPN 미사용 은폐를 위한 공작인지, 조직적 무관심에서 비롯된 것인지 추가 조사 필요
- 한지훈 귀국보고서의 "전개(Deployment)" 개념과 국방 IT 인프라 해결책의 구체적 내용 분석 필요

## Spot-check (raw/01 book)

- `Korean/12-3-6-36-제6층위-군.md` §3.6.5.3.2 lines 771–774 — 기록 제4,671쪽, 제4,676쪽 직접 인용 — CONFIRMED
- OTP 카드 20개월 미제공 (2019.8~2021.4.15) — 각주 579에서 직접 확인 — CONFIRMED
- 김민수·이지영 주도의 조작 공문 제공 — §3.6.5.3.2 본문에서 직접 확인 — CONFIRMED

## 관련 (Related)
- [[cartel-requirement-inflation-80-items-delay]] — Phase 2의 전제 조건인 80건 추가 요구사항 의결 (RELATED)
- [[han-ji-hoon-prosecution-violates-2129-role-separation]] — 한지훈에게 전가된 책임이 훈령상 다른 역할 계층의 임무였음을 증명 (RELATED)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma]] — Phase 2 책임 전가의 최종 귀결 (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../layers/layer-1|Layer 1 — 귀국보고서의 DIDC 인프라 진단]] (PART_OF_LAYER)
