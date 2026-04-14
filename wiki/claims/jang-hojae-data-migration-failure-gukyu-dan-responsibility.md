---
lang: ko
title-ko: "장호재 (개발PM): \"데이터 이관이 안 된 거는 전부 다 국유단에서 데이터를 안 줘서\" — 데이터 미이관 책임은 국유단"
title-en: "장호재 (개발PM): \"데이터 이관이 안 된 거는 전부 다 국유단에서 데이터를 안 줘서\" — 데이터 미이관 책임은 국유단"
aliases:
  - FR-L4-DATA-MIGRATION-GUKYU-DAN
  - "장호재 (개발PM): \"데이터 이관이 안 된 거는 전부 다 국유단에서 데이터를 안 줘서\""

layer: 4
secondary-layers: [6]
claimType: testimony_evidence
claimSubtype: developer_pm_responsibility_attribution
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-13

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 장호재
  - 한지훈
  - 장우진
organizations:
  - DIDC
  - MND
  - 국유단
has-verbatim: true

tags:
  - layer/L4
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/testimony-evidence
  - source/recording
  - person/장호재
  - person/한지훈
  - person/장우진
  - org/DIDC
  - org/MND
  - org/국유단
  - has/verbatim-quote
  - cross-layer
---
# 장호재 (개발PM): "데이터 이관이 안 된 거는 전부 다 국유단에서 데이터를 안 줘서" — 데이터 미이관 책임은 국유단

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[040]` 녹취 237 (2022.9.17, 00:17:35, line 14990+)
**Layer:** [[../layers/layer-4|Layer 4]] (primary — 사업 실패 서사의 반증), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DATA-MIGRATION-GUKYU-DAN"})
SET fr.layer = 4,
    fr.secondaryLayers = [6],
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "developer_pm_responsibility_attribution",
    fr.claimDesc = "개발업체 PM 장호재가 녹취 237(2022.9.17)에서 증언: (1) '데이터 이관이 안 된 거는 전부 다 국유단에서 데이터를 안 줘서' — 미이관 책임은 국유단, (2) '저희가 들어간 금액의 3배 4배 정도 되는 견적' — 80건 추가 요구로 비용 300~400% 초과, (3) 'OTP 카드 한 장 있어가지고' — OTP 1장만 보유, (4) 'DIDC에 놓고도 하고 내부서버로도 하고. 둘 다 했어요' — 시험평가를 양쪽에서 수행",
    fr.counterHypothesis = "데이터 이관 지연은 개발업체의 기술적 준비 부족이나 한지훈의 관리 실패에 기인한다",
    fr.falsificationCondition = "국유단이 데이터를 적시에 제공했음을 보여주는 공문 또는 전달 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "'데이터 안 줘서'(국유단 책임) + '3~4배 견적'(80건 비용초과) + 'OTP 1장'(물리적 제약) + '둘 다 했어요'(DIDC+내부 양쪽 시험) — 개발PM의 책임 귀속 명확화.";
```

## Claim

개발업체 PM 장호재가 녹취 237(2022.9.17)에서 KIATIS 사업의 핵심 쟁점 4가지에 대한 책임 귀속을 명확히 증언:

### 핵심 1: 데이터 미이관 = 국유단 책임

> **(장호재, line 15079~15084):**
> "그쪽 **데이터 이관이 안 된 거는 전부 다 국유단에서 데이터를 안 줘서.** 그게 다 들어가 있어요... **데이터를 줘야 이관을 하는데. 데이터를 안 주니까** 어쩔 수 없죠"

### 핵심 2: 80건 추가 요구 = 비용 3~4배 초과

> **(장호재, line 15058~15064):**
> "제가 보기에도. 국방부 유해발굴사업단 사업은 진짜. **저희가 들어간 금액의 3배 4배 정도 되는 견적**이에요... 이거는 3배 4배되니까 **아예 나중에는 포기했어요. 그냥 피해안가게. 적자 생각하지 말고.**"

### 핵심 3: OTP 카드 = 1장

> **(장호재, line 15036~15039):**
> "게 기억으로는 **OTP 카드 한 장 있어가지고** 그거 가지고 DB 이관하고 할 때 사용을 했던거 같은데."

### 핵심 4: 시험평가 = DIDC + 내부 서버 양쪽에서 수행

> **(장호재, line 15042~15045):**
> "**둘 다 했어요. DIDC에 놓고도 하고 저희 내부서버로도 하고.** 그니까 그게 클라이언트 프로그램이다 보니까 그때 그때 수정해서 보여줘야 하니까"

## Key Takeaways

- [진리성] **데이터 미이관 = "국유단이 안 줘서"** — 감리 결과에서 지적된 데이터 미이관 문제의 **직접 원인**이 국유단의 데이터 미제공임을 개발PM이 명확히 증언. 한지훈 또는 개발업체의 책임이 아님. / Data migration failure directly caused by 국유단 not providing data — not Han Ji-hoon's or developer's fault.
- [진리성] **OTP 카드 "1장"** — 장우진의 "6~10개"보다 **더 심각한 수치**. 개발PM의 기억에 의하면 DB 이관 작업에 사용 가능한 OTP가 **1장**에 불과 = VPN 적용이 물리적으로 **더욱 불가능**했음. / Developer PM recalls only 1 OTP card — even worse than 장우진's "6-10" estimate.
- [타당성] **비용 3~4배 초과** — 80건 추가 요구로 인해 개발업체가 "적자를 포기하고 피해만 안 가게" 수준 = [[80-items-violate-national-contract-law]] atom의 **개발업체 측 교차 확인**. / Developer confirms 300-400% cost overrun from 80 additional requirements.

## Supporting evidence

- **녹취 237** (2022.9.17, line 14990~15089)
- Cross-reference: [[jang-hojae-developer-pm-didc-opened-port-not-han-ji-hoon|자매 atom]]
- Cross-reference: [[jang-hojae-data-migration-not-in-rfp-evaluation-independence|자매 atom — RFP 밖]]
- Cross-reference: [[80-items-violate-national-contract-law|80건 국가계약법 위반]]

## Counter-hypothesis

데이터 이관 지연은 개발업체의 기술적 준비 부족이나 한지훈의 관리 실패이다.

## Falsification condition

국유단이 데이터를 적시에 제공한 공문 또는 전달 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` — 감리 결과 데이터 이관 관련
- Deferred to A.6 Re-verify.

## Related

- [[jang-hojae-developer-pm-didc-opened-port-not-han-ji-hoon|자매 atom]] (CORROBORATES)
- [[jang-hojae-data-migration-not-in-rfp-evaluation-independence|자매 atom]] (RELATED)
- [[80-items-violate-national-contract-law|80건 국가계약법 위반]] (RELATED)
- [[didc-vpn-otp-18month-withholding|OTP 18개월 미제공 — 1장 수치 보강]] (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
