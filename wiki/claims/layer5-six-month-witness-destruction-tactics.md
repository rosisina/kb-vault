---
lang: ko
title-ko: 6개월 격리는 물리적·심리적·사회적 학대를 통한 체계적 증인 파괴 전술이었다
title-en: ""
aliases:
  - FR-L5-011
  - 6개월 격리는 물리적·심리적·사회적 학대를 통한 체계적 증인 파괴 전술이었다

layer: 5
secondary-layers: [6, 7]
claimType: witness_manipulation
claimSubtype: systematic_witness_destruction
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 10
validity: 8
sincerity: 10
analysisDate: 2026-04-11

record-nos: [4084, 11111, 12896]
evidence-ids: ["L5-011"]
event-date: null

persons:
  - 한지훈
  - 이지영
  - 김민지
  - 이근태
  - 김민수
  - 이태호
  - 최동욱
organizations:
  - DIDC
  - 국전원
  - 군검찰단
  - MND
has-verbatim: false

tags:
  - layer/L5
  - layer/L6
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/witness-manipulation
  - source/book
  - fracture/F-MS
  - person/한지훈
  - person/이지영
  - person/김민지
  - person/이근태
  - person/김민수
  - org/DIDC
  - org/국전원
  - org/군검찰단
  - org/MND
  - has/record-nos
  - cross-layer
---
# 6개월 격리는 물리적·심리적·사회적 학대를 통한 체계적 증인 파괴 전술이었다

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (§3.5.1.6)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-6|Layer 6]] (secondary — 군검찰 압수수색의 불법성), [[../layers/layer-7|Layer 7]] (secondary — 기록 제11,111; 제12,896은 L7 범위)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-011"})
SET fr.layer = 5,
    fr.claimType = "witness_manipulation",
    fr.claimSubtype = "systematic_witness_destruction",
    fr.claimDesc = "2022년 2월~9월 6개월간 한지훈은 4차례 독방 이동, PC 차단, 자료 접근 차단, 전투화 분실, 화장실 5시간 대기 등 물리적·심리적·사회적 학대를 당했다. 이는 단순 갑질이 아니라 2016 DIDC 해킹 은폐를 위한 체계적 증인 파괴 전술이었다.",
    fr.counterHypothesis = "격리는 갑질 조사 중 표준적인 분리 조치였으며, 독방 전전은 공간 부족에 따른 행정적 결과였다.",
    fr.falsificationCondition = "동일 시기 다른 갑질 조사 사례에서도 유사한 6개월 격리가 시행되었다는 선례가 확인되거나, 4차례 독방 이동이 각각 합리적 행정 사유에 의한 것이었다는 기록이 제시되면 약화된다.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "4차례 독방(舊사이버사 3층 110호→자리 없음→AI 업체 사무실→압수수색 대상), PC 차단, 전투화 분실(기록 제4,084쪽), '증거 인멸 조심하라'는 반복 협박, 화장실 5시간 대기 — 32년 중령에 대한 전례 없는 6개월 체계적 학대. 기록 제4,087쪽, 제11,111쪽, 제12,896쪽.";
```

## 주장 (Claim)

### 한국어

2022년 2월 21일부터 9월까지 6개월간, 한지훈은 4차례 독방을 전전하며 물리적, 심리적, 사회적 학대를 당했다. 이는 단순한 갑질 조사 중 분리 조치가 아니라, 2016년 DIDC 해킹 사건의 진실을 아는 증인을 체계적으로 파괴하기 위한 전술이었다.

**제1 독방: 舊사이버사 3층 110호.** 한지훈이 사용한 PC는 의도적으로 제공하지 않았으며, 부지불식간에 보직이 바뀌면서 KIATIS에 대한 자료와 정보 접근이 원천적으로 차단되었다.

**제2 독방: 자리 없음(화장실 5시간).** 사무실과 책상 없이 오랜 기간 보냈으며, 화장실에서 5시간씩 보내는 상황이 지속되었다. 전투화가 분실되는 수모를 겪었다(기록 제4,084쪽). 한지훈은 `"저 자리고 책상도 없이 아무것도 없이 화장실에서 다섯 시간 있었어요. 두 달 동안"`이라고 최동욱 변호사에게 증언했다.

**제3 독방: AI 업체 사무실.** 이근태가 `"LG CNS와 사업을 하려고 하는 게 그곳에서 업체에서 연구하고 있는 AI 관련 연구에 대해 알려 달라"`고 지속적으로 연락하여 함정을 시도했다(기록 제4,087쪽).

**제4 단계: 압수수색.** 갑질 수사가 2022년 4월 22일 공식 종료되고, 군검찰단이 4월 25일 수사를 개시하였다. AI 업체가 사무실에서 나가자마자 군검찰이 한지훈을 상대로 압수수색을 단행했다. 이 압수수색은 불법적이었다: (1) 군검찰단은 이미 국전원 행정정보화과에서 모든 KIATIS 자료를 확보한 상태, (2) 영장상 `"자원정보화과 사무실 내 피의자가 사용하는 사무 공간"`인데 실제 한지훈이 있던 곳은 업체 사무실, (3) 한지훈이 사용하는 PC는 이지영에 의해 차단된 후 새로 받은 것으로 KIATIS 자료가 없었고, 이지영이 김민지를 통해 USB로 제공한 자료만 있었다(기록 제11,111쪽~제11,114쪽).

`"증거 인멸 조심하라"`는 김민수의 반복적 협박은 한지훈의 정당한 행위(동료 접촉, 자료 확인, 전화 통화)를 모두 범죄 행위로 재정의하여 가스라이팅을 통한 완전한 고립 상태를 만들었다. 한지훈은 이태호에게 `"김민수 원장이 뭐라고 하면은 너 조심해야 한다고 종이 한 장이라도 가져가다가 증거 인멸로 나를 엄청나게 겁주는 거야 나를 꼼짝 못 하게 하려고"`라고 하소연했다.

전투화 분실은 단순한 물건 분실이 아니라 군인 정체성의 상징적 박탈이었다. `"저 전투화 잃어 먹었습니다. 원장님 원장님 전투화 잊어먹었어!"`라는 반복적 언급은 존엄성 파괴의 증거이다.

### English

From February 21 to September 2022 — 6 months — 한지훈 was subjected to physical, psychological, and social abuse across 4 successive isolation offices. This was not a simple separation measure during a harassment investigation, but a systematic tactic to destroy a witness who knew the truth about the 2016 DIDC hacking incident.

**1st Isolation Room: Former CyberCommand Building 3F Room 110.** The PC 한지훈 used was intentionally not provided, and through an unilateral position change, access to KIATIS-related materials and information was fundamentally blocked.

**2nd Isolation: No Desk (5 Hours in Bathroom).** He spent extended periods without an office or desk, with situations continuing where he spent 5 hours at a time in the bathroom. Combat boots were lost — a humiliation recorded in Record No. 4,084. 한지훈 testified to attorney 최동욱: "I had no seat, no desk, nothing — I was in the bathroom for 5 hours. For 2 months."

**3rd Isolation Room: AI Contractor's Office.** 이근태 continuously contacted him trying to get information: "Please tell me about the AI-related research being conducted there, related to the LG CNS project they're trying to do" — attempting to set a trap (Record No. 4,087).

**4th Stage: Search and Seizure.** The harassment investigation officially concluded on April 22, 2022, and the military prosecutors opened an investigation on April 25. As soon as the AI contractor vacated the office, the military prosecutors conducted a search and seizure against 한지훈. This search and seizure was illegal: (1) the military prosecutors had already secured all KIATIS materials from 국전원's 행정정보화과; (2) the warrant stated "defendant's workspace in 자원정보화과 office" but 한지훈 was actually in the contractor's office; (3) the PC 한지훈 used was a new one received after 이지영 blocked his original, containing no KIATIS materials — only materials provided by 이지영 through 김민지 via USB (Records 11,111–11,114).

김민수's repeated threat "be careful of evidence tampering" created a state of complete isolation through gaslighting — redefining all of 한지훈's legitimate actions (contacting colleagues, checking materials, phone calls) as criminal acts. 한지훈 told 이태호: "When director 김민수 says something, he's been scaring me enormously about evidence tampering — just taking a sheet of paper — trying to make me unable to move."

The loss of combat boots was not a simple lost item but a symbolic deprivation of military identity. The repeated mention of "I lost my combat boots. Director, director — I lost my combat boots!" is evidence of dignity destruction.

## 핵심 요약 (Key Takeaways)
- [진리성] 32년 경력 중령에게 2개월간 사무실/책상을 제공하지 않은 것은 전례가 없는 일이었으며, 이는 기록 제4,084쪽에 문서화되어 있다.
  - Denying a 32-year career lieutenant colonel a desk/office for 2 months was unprecedented; documented at Record No. 4,084.
- [타당성] 군검찰의 압수수색은 영장 기재 장소(자원정보화과 사무실)와 실제 장소(업체 사무실)가 불일치하며, 이미 자료를 확보한 상태에서의 중복 압수수색은 표적수사의 증거이다.
  - The prosecution's search warrant specified "자원정보화과 office" but executed at a contractor's office — mismatch plus redundant seizure of already-secured materials proves targeted investigation.
- [진실성] 전투화 분실은 군인 정체성의 상징적 박탈이며, `"증거 인멸 조심하라"`는 협박은 정당한 행위를 범죄로 재정의하는 가스라이팅이었다.
  - Combat boot loss symbolized stripping of military identity; "beware of evidence destruction" threats redefined legitimate acts as criminal — classic gaslighting.
- [타당성] 이지영이 PC를 차단하고 김민지를 통해 USB로만 자료를 제공한 것은 한지훈의 변호 증거 접근을 원천 차단하는 증거 인멸 행위이다(기록 제11,111쪽~제11,114쪽).
  - 이지영's blocking of 한지훈's PC and channeling materials only through USB via 김민지 constituted systematic evidence access denial (Record No. 11,111–11,114).
- [진리성] 디지털 포렌식 절차에 대한 기록(기록 제12,896쪽~제12,944쪽)은 군검찰 압수수색의 절차적 위법을 기술적으로 뒷받침한다.
  - Digital forensics procedural records (Record No. 12,896–12,944) technically support the procedural illegality of the prosecution's search and seizure.

## 지지 증거 (Supporting Evidence)
- **기록 제4,084쪽** — 전투화 분실 및 자리/책상 미제공 기록
- **기록 제4,087쪽** — AI 업체 사무실 독방 및 이근태의 함정 시도 기록; 압수수색 당시 사진
- **기록 제11,111쪽~제11,114쪽** — 이지영이 김민지를 통해 USB로만 자료 제공; 한지훈의 PC가 KIATIS 자료를 포함하지 않는다는 증거
- **기록 제12,896쪽~제12,944쪽** — 디지털 포렌식 절차에 대한 단계적 기법 문서 (군검찰 압수수색의 절차적 문제점 분석)

## 반대 가설 (Counter-hypothesis)
**(a) 대안적 해석:** 갑질 조사 기간 중 피조사자와 신고자의 물리적 분리는 표준 절차이며, 4차례 독방 이동은 국전원 내 공간 부족에 따른 행정적 결과였다. PC 미제공은 조사 중 증거 보전을 위한 합리적 조치였다.

**(b) 반박 조건:** 동일 시기 국전원이나 국방부에서 다른 갑질 조사 사례에서도 6개월간 유사한 격리 조치가 시행되었다는 선례가 2건 이상 확인되거나, 4차례 독방 이동 각각에 합리적 행정 사유(시설 공사, 조직 개편 등)가 문서화되어 있는 경우 약화.

**(c) 방어 가능한 반대 입장:** 갑질 조사 시 일시적 분리는 양측 보호를 위한 것이며, 군 조직 특성상 공간 배정이 유동적일 수 있다. 다만, "일시적 분리"가 6개월간 지속되고, 4차례 독방 이동과 PC 차단, 전투화 분실, 화장실 5시간 대기가 결합된 패턴은 표준 분리 조치의 범위를 현저히 벗어난다.

## 반증 조건 (Falsification Condition)
동일 기관·유사 시기에 갑질 조사 대상자에게 6개월 이상의 유사한 격리 조치가 시행된 선례가 2건 이상 확인되면 체계적 증인 파괴 전술이 아닌 제도적 관행으로 재평가. 4차례 독방 이동 각각의 행정적 사유가 문서로 확인되면 조직적 의도 가설이 약화.

## 평결 (Verdict)
**CORROBORATED (strong)**
- 진리성 (Truthfulness): **10/10** — 4차례 독방, 화장실 5시간, 전투화 분실, PC 차단 등 물적 증거 다수
- 타당성 (Validity): **8/10** — 압수수색 영장과 실제 장소의 불일치는 법적으로 명확한 위반
- 진실성 (Sincerity): **10/10** — `"다섯 시간 있었어요. 두 달 동안"`, `"전투화 잃어 먹었습니다"` — 피해 경험의 생생한 기록

## 미결 사항 (Open Questions)
- 4차례 독방 이동의 정확한 날짜와 기간이 정리되면 시계열 분석에 활용 가능.
- 이근태의 AI 관련 정보 요청이 LG CNS 사업과 구체적으로 어떻게 연결되는지 추가 확인 필요.
- 군검찰 압수수색 영장의 원본과 실제 집행 장소의 사진 대조가 정밀하게 이루어져야 한다.
- 한지훈이 보유한 CHFI(컴퓨터 해킹 포렌식 조사관) 자격과 군검찰 포렌식 수사관 업무 지원 경력이 압수수색의 부적절성 판단에 추가적 맥락을 제공한다.

## Spot-check (raw/01 book)

- §3.5.1.6 (lines 71–76): 6개월 격리 및 증인 파괴 전술 본문
- §3.5.1.1 (lines 24–30): 독방 격리의 초기 과정 및 48시간 연결
- §3.5.2.3.1 (lines 202–204): 깜깜이 수사의 정의와 3차원 어둠

## 관련 (Related)
- [[layer5-six-month-isolation-human-rights]] — 6개월 격리 인권 침해 atom (본 atom은 학대의 구체적 양태에 초점, 기존 atom은 인권 침해 프레임) (RELATED)
- [[layer5-48hr-retaliation-causal-link]] — 48시간 보복 atom (격리의 시작점이 48시간 보복과 동일) (RELATED)
- [[layer5-isolation-office-premeditated]] — 격리 사전 계획 atom (독방이 사전 준비되었다는 증거) (RELATED)
- [[han-ji-hoon-prosecution-violates-2129-role-separation]] — 검찰 역할 분리 위반 atom (압수수색의 불법성이 역할 분리 위반의 물리적 집행) (RELATED)
