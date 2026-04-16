---
lang: ko
title-ko: 발굴팀장의 15��� 현장 증언 — VPN·보안장비 미사용을 7개 verbatim 발언으로 독립 증명
title-en: 발굴팀장의 15��� 현장 증언 — VPN·보안장비 미사용을 7개 verbatim 발언으로 독립 증명
aliases:
  - FR-L1-EXCAVATION-15YR-VPN-ABSENCE
  - 발굴팀장의 15��� 현장 증언 — VPN·보안장비 미사용을 7개 verbatim

layer: 1
secondary-layers: [5]
claimType: testimony_evidence
claimSubtype: independent_field_witness_testimony
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 9
analysisDate: 2026-04-12

record-nos: []
evidence-ids: ["L4-002"]
event-date: null

persons:
  - 장우진
  - 한지훈
  - 김민수
  - 이지영
organizations:
  - DIDC
  - 국전원
  - 국유단
has-verbatim: true

tags:
  - layer/L1
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/testimony-evidence
  - source/recording
  - person/장우진
  - person/한지훈
  - person/김민수
  - person/이지영
  - org/DIDC
  - org/국전원
  - org/국유단
  - has/verbatim-quote
  - cross-layer
---
# 발굴팀장의 15��� 현장 증언 — VPN·보안장비 미사용을 7개 verbatim 발언으로 독립 증명

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[007]` 녹취 220 (2022.2.8, 03:58:07, lines 13042~13598)
**Layer:** [[../layers/layer-1|Layer 1]] (primary — 舊KIATIS 15년 보안 부재의 현장 증언), [[../layers/layer-5|Layer 5]] (secondary — 48시간 보복의 트리��� 회의)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-EXCAVATION-15YR-VPN-ABSENCE"})
SET fr.layer = 1,
    fr.secondaryLayers = [5],
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "independent_field_witness_testimony",
    fr.claimDesc = "2007년부터 발굴��→감식관→발굴팀장으로 15년간 KIATIS를 현장에서 사용해온 발���팀장이 2022.2.8 회의(녹취 220)에서 VPN·ChakraMax의 미사용을 7개 verbatim 발언으로 독립 증명하였다. (1) 'VPN을 사용하는 이유가... 들었습니다' = 경험 부재, (2) '10개월 바깥에서 생활... VPN 때문에' = 현장 운용 ���가, (3) '장애물을 없애는 방법' = VPN 제거 요��, (4) '다이렉트로 연결' = 직접접속 선호, (5) 'VPN이�� 샤크라���스가 접속 안 하면 끊긴다' = 2021년 최초 경험, (6) '저희 단에서만. 지정된 아이피에서만' = 현장 사용 불가, (7) '6번의 아이피를 발급받아야' = 실무적 운용 불가능. 이 증언은 기존 atom(장우진·한지훈·김민수)과 출처가 완전히 다른 독립 교차 검증이다",
    fr.counterHypothesis = "발굴팀장의 진술은 VPN 운용에 대한 개인적 불편을 과장한 것이며, 실제로는 VPN이 적용된 상태에서 현장 접근이 가능했다",
    fr.falsificationCondition = "발굴 현장에서 VPN을 통해 KIATIS에 정상적으��� 접속한 로그 기록, 또는 모바일 VPN 클라이언트가 발굴팀에 배포된 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "2007년부터 15년간 KIATIS 현장 사용자인 발굴팀장이 VPN·ChakraMax 미사용을 7개 발언으로 독립 증명. '들었습니���'(경험 부재) + '10개월 바깥'(운용 불가) + '장애물을 없애는 방법'(제거 요구) + '다이렉트로 연결'(직접접속) — 기존 atom과 출처가 다른 독립 교차 검증.";
```

## 주장 (Claim)

### 한국어

2022년 2월 8일 KIATIS 정상화 회의(녹취 220, 약 4시간)에서, 2007년부터 발굴병→감식관→발굴팀장으로 15년간 KIATIS를 현장에서 사용해온 발굴팀장(최인권)이 VPN·ChakraMax(DB접근제어)의 미사용을 **7개 verbatim 발언**으로 독립 증명하였다.

### 발언 1 (01:08:55): VPN 사용 이유�� "들었다" = 경험한 적 없음

> **(발굴팀장)** "제가 많이 몰라서. **VPN을 우리가 사용하는 이���가 군사지도 사용하는 것으로 이야기를 들었습니다.** 그게 맞는지 좀 모르겠고."

2007년부터 KIATIS를 사용해온 실무자가 VPN의 존재 이유를 **"들었다"**(전문)고 표현 = 본인이 VPN을 **경험한 적이 없다**는 역증.

### 발언 2 (01:08:55): "10개월 바깥에서 생활... VPN 때문에"

> **(발굴���장)** "저희는 알고 계신 것처럼 **10개월 동안 바깥에서 생활을 하는데. VPN 때문에.** 이 발굴보고서가 완성되면은 **단에 들어와서** 다른 부대에서 할 수 없기 때문에"

VPN이 적용되면 10개월간 현장에서 KIATIS **접근 불가** → "단에 들어와서"만 가능 → 이전에는 **어디서든** VPN 없이 DB 직접접속으로 사용했다는 역설적 증명.

### 발언 3 (01:12:14): "장애물을 없애는 방법"

> **(발굴팀장)** "남한지역 팀장들은 4주 길면 6번단위로 부대를 옮겨야 하니까. **6번의 아이피를 발급 받아야 하는** 그런 일이 있다 보니까. ...**장애물을 돌아가는 것보다 제일 좋은 ��법은 장애물을 없��는 방법**이라고 저는 생각을 하는데"

VPN을 **"장애물"**로 명시적 정의 + **"없애는 방법"** 제안 = VPN 미사용/제거를 공식 석상에서 요구. 남한 팀장들의 4~6주 주기 부대 이동 → 매번 IP 재발급 = 실무적 운용 불가능.

### 발언 4 (01:12:14): "다이렉���로 연결"

> **(발굴팀장)** "그러다 보니까. **연결이 바로 다이렉트로 될 수 있다면은** 그냥 아예 이걸 자체는 단에서만 사용하는 식으로 한다지"

"다이렉트로 연결" = VPN 없이 직접 접속하던 **舊KIATIS의 운용 방식**을 그대로 원하는 발언. 15년간 "다이렉트 접속"에 익숙했음의 직접 증거.

### 발언 5 (00:18:23 부근): "VPN이랑 ���크라맥스가 접속 안 하면 끊긴다"

> **(발굴팀장)** "그 때 작년 6월달에 와서. 주말에 이것 때문에 출근해서. **VPN이랑 새크라(맥스)가 접속 안 하면 끊긴다고 해서.**"

2021년 6월에야 VPN/ChakraMax를 **처음 경험** — "끊긴다"는 표현은 이전까지 보안장비가 없었기 때문에 **새로운 장애물로 인식**한 것.

### 발언 6 (01:08:55): "저희 단에서만. 지정된 아이피에서만"

> **(발굴팀장)** "VPN과 사크라맥스는 **저희 단에서만. 지정된 아이피에서만 사용된다라고 들어서.**"

VPN/ChakraMax가 국유단 **내부에서만** 작동 + 이 정보도 **"들어서"**(전문) = 현장(10개월 야외)에서는 보안장비 **완전 우회**.

### 발언 7 (00:52:02): 테스트 시 실데이터가 아닌 테스트 데이터만 사용

> **(발굴팀장)** "그래서 **테스트용 데이터만 사용**하다 보니까. 그동안 아무도 지적해준 게 없었는데... 시작단계에서 데이터가 저희가 체크를 해야 하는 부분에서 빠져있었던 겁니다"

VPN/ChakraMax가 적용된 실환경에서의 검증이 이루어지지 않았음을 간접 증명.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] **2007년부터 15년간** KIATIS를 현장에서 사용해온 발굴팀장이 VPN의 존재 이유조차 **"들었다"** 수준으로만 알고 있다 — 15년간 VPN 미사용의 **독립적 현장 증명**. / A 15-year field user who started as a private in 2007 only "heard about" why VPN is used — independent field proof of 15 years without VPN.
- [진리성] 연간 10개월 현장 발굴 + VPN은 "단에서만" 작동 = KIATIS **사용자의 대부분**이 보안장비 **밖**에서 운용 — 보안 체계가 실효적으로 작동하지 않는 구조. / 10 months/year in the field + VPN works only at base = majority of KIATIS users operated outside security perimeter.
- [타당성] VPN을 "장애물"로 정의하고 "없애는 방법"을 공식 석상에서 제안한 것은 — **왜 15년간 VPN을 적용하지 않았는지**에 대한 실무적 동기를 현장에서 직접 설명. / Defining VPN as an "obstacle" and proposing its removal explains the operational motive for 15 years of non-application.
- [진실성] 이 증언은 기존 atom의 증인(장우진·한지훈·김민수)과 **완전히 다른 출처** — 국유단 현장 발굴 인력이라는 독립적 제4의 증인. / This testimony is from a completely independent fourth witness — a field excavation operator from 국유단, distinct from all existing atom witnesses.
- [진리성] 발굴팀장의 7개 발언이 모두 **동일한 결론**(VPN 미사용 + 현장 운용 불가)을 가리킴 — 내적 일관성이 높은 증언 체계. / All 7 statements point to the same conclusion (VPN non-use + field operation impossible) — high internal consistency.

## 지지 증거 (Supporting Evidence)
- **녹취 220** (2022.2.8, raw/02 lines 13042~13598) — 발굴팀장 발언 전체 (약 4시간 회의)
- **발굴팀장 자기소개** (line 13068): "제가 유해발굴은 07년부터 쭉 발굴병으로 시작해서. 발굴병하고 감식관하고 발굴팀장을 하고 특이한 이력을 갖고 있습니다" — 15년 경력 확인
- **발굴팀장 성명** (line 13301): "최인권 팀장입니다"
- Cross-reference: [[old-kiatis-direct-db-access-without-vpn]] — 장우진·한지훈의 VPN 미사용 증언 (본 atom은 독립적 제4의 증인)
- Cross-reference: [[didc-vpn-otp-18month-withholding]] — DIDC의 OTP 카드 18개월 미제공 (본 atom이 현장 수요적 이유를 보강)
- Cross-reference: [[layer5-48hr-retaliation-causal-link]] — 이 회의가 48시간 후 갑질 신고의 직접 트리거

## 반대 가설 (Counter-hypothesis)
발굴팀장의 진술은 VPN 운용에 대한 개인적 불편을 과장한 것이며, 실제로는 VPN이 적용된 상태에서 모바일 VPN ��라이언트나 대체 수단을 통해 현장 접근이 가능했다. "들었습니다"는 VPN의 기술적 원리를 모른다는 것이지 사용하지 않았다는 것이 아니다.

이 반가설이 성립하려면: (1) 발굴 현장에서 VPN을 통해 KIATIS에 정상 접속한 로그 기록, (2) 모바일 VPN 클라이언트가 발굴팀에 배포된 기록, (3) 남한지역 팀장들의 IP 재발급이 원활하게 처리된 행정 기록이 존재해야 한다.

## 반증 조건 (Falsification Condition)
1. **현장 VPN 접속 로그** — 발굴 현장(DMZ, 50사단 등)에서 VPN을 통해 KIATIS에 접속한 기록.
2. **모바일 VPN 배포 기록** — 발굴팀에 모바일 VPN 클라이언트를 배포하거나 교육한 기록.
3. **IP 재발급 이력** — 남한지역 팀장들의 4~6주 주기 부대 이동 시 VPN IP가 원활히 재발급된 행정 기록.

위 3가지 모두 부재 시 → CORROBORATED (strong).

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9.

진리성 9: 7개 verbatim 발언이 모두 동일 결론(VPN 미사용)을 가리키며 내적 일관성이 높음. 타당성 9: DIDC 예규 제37조②(VPN 의무) 위반이 현장 실무자의 입으로 직접 증명됨. 진실성 9: 2007년부터의 15년 경력은 舊KIATIS 전체 운용 기간을 커버하는 유일한 연속 현장 관찰자.

**증거적 독립성**: 이 atom은 기존 VPN 미사용 증언(장우진 Record 11,302, 한지훈 L4-002, 김민수 Record 11,055)과 **4번째 독립 출처**로서, 국전원 내부자가 아닌 **국유단 현장 발굴 인력**이라는 점에서 출처의 다양성이 극대화됨.

## 미결 사항 (Open Questions)
- 발굴팀장이 언급한 "6번의 아이피를 발급받아야 하는" 절차 — DIDC의 SSL-VPN 계정 발급(별지 제7호) 절차와의 대응 관계 확인 필요
- "VPN이랑 샤크라맥스가 접속 안 하면 끊긴다"는 2021년 6월 경험 — VPN/ChakraMax 최초 적용 시점(2021.4.15)과 정합성 확인
- 발굴팀장 최인권의 pseudonym mapping 미등재 — 필요시 등록 요청

## 원전 확인 (Spot-check)
- `raw/02/(Korean) individual_recording_logs_beyond_cybersecurity.md` line 13068 — 발굴팀장 경력 자기소개 ("07년부터 발굴병")
- `raw/02/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 13162~13165 — 발언 5 ("VPN이랑 샤���라맥스가 끊긴다")
- `raw/02/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 13417~13453 — 발언 1,2,3,4,6 ("들었습니다", "10개월 바깥", "장애물 없애는 방법", "다이렉트로", "단에��만")
- `raw/02/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 13327~13347 — 발언 7 ("테스트용 데이터만")

## 관련 (Related)
- [[old-kiatis-direct-db-access-without-vpn|舊KIATIS DB 직접접속 — 장우진·한지훈 증언 (본 atom이 독립적 제4 증인으로 교차 검증)]] (RELATED)
- [[didc-sop-firewall-vpn-trail-mandatory|DIDC 예규 제37조 VPN 의무 — 본 atom이 위반의 실무적 이유를 현장에�� 설명]] (RELATED)
- [[didc-vpn-otp-18month-withholding|VPN OTP 18개월 미제공 — 본 atom이 OTP 부재의 현장 영향을 증명]] (RELATED)
- [[layer5-48hr-retaliation-causal-link|48시간 보복 — 이 회의가 갑질 신고의 직접 트리거]] (RELATED)
- [[layer5-lee-jiyoung-vpn-5questions-motive-confirmation|이지영 VPN 5단계 질문 — 이 회의 직후 발생한 정보 추출]] (RELATED)
- [[../entities/organizations/didc|DIDC]] (ABOUT)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
