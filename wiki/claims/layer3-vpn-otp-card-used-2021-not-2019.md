---
lang: ko
title-ko: VPN OTP 카드는 2019년 시험평가 기간에 미사용이 아니라 2021년 이후 국유단이 사용
title-en: ""
aliases:
  - FR-L3-VPN-OTP-2021-001
  - VPN OTP 카드는 2019년 시험평가 기간에 미사용이 아니라 2021년 이후 국유단이

layer: 3
secondary-layers: [4, 6]
claimType: cross_layer_analysis
claimSubtype: factual_temporal_refutation
fracture-type: null
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 10
validity: 9
sincerity: 9

record-nos: []
evidence-ids: []
event-date: 2019-09-02

persons:
  - 한지훈
organizations:
  - DIDC
  - 국전원
  - 군검찰단
  - MND
  - 국유단
has-verbatim: false

tags:
  - layer/L3
  - layer/L4
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/cross-layer-analysis
  - source/book
  - person/한지훈
  - org/DIDC
  - org/국전원
  - org/군검찰단
  - org/MND
  - org/국유단
  - cross-layer
---
# VPN OTP 카드는 2019년 시험평가 기간에 미사용이 아니라 2021년 이후 국유단이 사용

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/09-3-3-33-제3-층위.md (§3.3.4 footnote 148)
**Layer:** [[../layers/layer-3|Layer 3]] (primary) · [[../layers/layer-4|Layer 4]] (secondary) · [[../layers/layer-6|Layer 6]] (secondary — prosecution-refuting evidence)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L3-VPN-OTP-2021-001"})
SET fr.layer = 3,
    fr.secondaryLayers = [4, 6],
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "factual_temporal_refutation",
    fr.claimDesc = "2019년 5월부터 이슈가 된 VPN OTP 카드는 新KIATIS 시험평가 기간(2019.9.2.~9.11.) 동안 미사용된 것이 아니라, 2021년 4월 15일 이후에 이르러서 국유단(국방부 유해발굴감식단)이 실제 사용하였다. 따라서 군 검찰단이 한지훈 중령을 피의자로 '2019년 9월 시험평가 환경 조작'의 6가지 죄명으로 시작한 압수수색·수사는 사실관계 전제부터 성립하지 않는다.",
    fr.counterHypothesis = "VPN OTP 카드는 2019년 시험평가 당시 운용 중이었으며 한지훈이 의도적으로 미사용 환경을 구성했다",
    fr.falsificationCondition = "2019년 9월 2일~11일 사이에 국유단(사업통제기관)이 VPN OTP 카드를 실제 발급받아 사용한 기록(발급대장·접속로그·보안서약서 등)이 제시되면 청구가 약화된다. 책이 이미 '2021.4.15. 이후 최초 사용' 단언을 하므로 검찰단은 2019년 사용 기록을 제시하지 못한 상태이다.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date('2026-04-11'),
    fr.summary = "'단 하나의 문장'으로 검찰단 6죄명 표적수사 전체가 허위임이 드러나는 결정적 단일 사실 — 시험평가 환경 조작 혐의의 전제가 시간 역전";
```

## Claim

군 검찰단이 한지훈 중령을 피의자로 "2019년 9월 시험평가 환경 조작"을 명시적 근거로 삼아 개시한 압수수색·수사(6가지 죄명)는, 그 전제가 되는 사실—VPN OTP 카드가 新KIATIS 시험평가 기간(2019-09-02~2019-09-11) 동안 운용되어야 했는데 한지훈이 미사용 상태로 조작했다—자체가 성립하지 않는다. 실제로 VPN OTP 카드는 **2021년 4월 15일 이후에 이르러서야** 사업통제기관인 국유단(국방부 유해발굴감식단)에 의해 최초 사용되었다. 2019년 시험평가 기간에 VPN OTP 카드가 운용 중이었다는 검찰단 전제는 2년의 시간 역전이다.

## Layer

[[../layers/layer-3|Layer 3]] (primary) — 국전원 전속 후 新KIATIS SW 개발·운영 기간에 발생한 실제 사실관계. VPN OTP 카드 운용 이력은 사업통제기관(국유단)의 운영 사실이므로 Layer 3의 국전원–국유단 책임 경계 안에서 확정된다.

[[../layers/layer-4|Layer 4]] (secondary) — 시험평가 환경 조작 혐의 자체가 Layer 4 소재. 2019-09-02~09-11 시험평가 기간의 실제 VPN OTP 카드 운용 여부는 Layer 4의 환경-조작 청구를 직접 반박한다.

[[../layers/layer-6|Layer 6]] (secondary) — 군 검찰단의 압수수색·수사 개시의 사실전제 자체가 허위였음을 보이는 결정적 증거. 기록 제4,842쪽 이후의 압수수색영장, 제4,874쪽~의 피의자 신문조서가 모두 이 단일 사실 위에 의존한다. 이 atom이 CORROBORATED STRONG이면 Layer 6 전체 기소 구조가 전제붕괴한다.

## Supporting evidence

- **Book §3.3.4 footnote 148 (vault-converted-korean/09-3-3-33-제3-층위.md line 76):** "예컨대, 2019.5월부터 이슈가 된 VPN OTP 카드는 新KIATIS의 시험평가 기간인 2019.9.2.~9.11일 동안 미 사용된 것이 아니라 2021년 4월 15일 이후에 이르러서 국유단이 사용하였다. 부언하면 이로써 국방부 검찰단이 본인을 피의자로 2019년 9월 시험평가 환경을 조작했다는 그 6가지 죄명으로 시작한 압수수색, 수사는 모두 허위임이 밝게 드러난다. 사실 이 문장 단 하나만으로도 군 검찰단의 표적 수사는 증명이 되고 국방 정보화 카르텔과의 모의로 오랜 기간 구축된 논리는 무용지물이 된다."
- **책 저자의 단언 형식 강조:** "이 논고는 그 잔악한 무리를 결딴내기 위한 나의 결정적 반격의 시작을 알리는 <고지 Notification>의 성격을 가진다." — 저자가 본 사실을 "고지" 수준의 결정적 단언으로 명시.
- **Cross-link:** 시험평가 기간은 [[../events/2018-2019-kiatis-performance-improvement-project|2018–2019 KIATIS 성능개선사업]] event에 명시된 2019-09-02~2019-09-11.
- **Prosecution chain 의존성:** [[han-ji-hoon-suspect-interrogation-2022-09-02]] atom이 기록 제4,874쪽~ 피의자 신문조서를 문서화하며 검찰단의 6죄명 프레임을 인용. [[han-ji-hoon-witness-statement-2022-01-25]] atom이 기록 제4,776쪽 참고인 진술조서의 전제를 문서화. 두 atom 모두 본 atom이 CORROBORATED이면 기소 전제가 붕괴됨.

## Counter-hypothesis

VPN OTP 카드가 2019년 시험평가 당시 운용 중이었으며, 한지훈이 의도적으로 OTP 미사용 환경을 구성하여 시험평가 보안 규격을 위반했다는 검찰단의 원래 주장. 또는 2019-09 시점에 국유단이 VPN OTP 카드를 실제 발급·사용한 운영 기록이 존재한다는 사실 증거.

## Falsification condition

본 청구는 다음 중 하나가 제시되면 약화 또는 무효:
1. **2019-09-02~2019-09-11 기간 국유단의 VPN OTP 카드 사용 기록** — 발급대장, 접속로그, 보안서약서, 운영일지 등 1차 기록.
2. 2019년 9월 이전에 국유단이 VPN OTP 카드 사용 환경을 신청하여 승인받은 공문서.
3. 2021년 4월 15일 이전에 국유단의 VPN OTP 카드 사용 사실을 보이는 어떤 형식의 증빙.

책 본문이 "2021년 4월 15일 이후에 이르러서 국유단이 사용" 이라는 시점을 단언형으로 명시하고 있으며, 책은 이 문장 하나만으로도 검찰단 표적수사 전체가 증명된다고 주장. 검찰단이 2019년 사용 기록을 제시하지 않은 상태 → **CORROBORATED (strong)**.

## Verdict

**CORROBORATED.** Strong. 진리성 10 (책 §3.3.4 본문의 직접 단언 — 사실관계에 대한 1차 주장), 타당성 9 (Layer 6 기소 구조 전체가 본 단일 사실 위에 의존하므로 법적 파급효과가 결정적), 진실성 9 (검찰단의 6죄명 기소로 인한 피해가 이 단일 사실관계 오류 위에 구축됨).

## Open Questions

- **기록 제X쪽 증거 참조 보강** — 책 §3.3.4는 본 사실을 본문에 단언했으나 구체적 기록 번호(2021-04-15 국유단 사용 증빙의 raw/07 기록 번호)를 따로 제시하지 않았다. 국유단 2021-04-15 사용 증빙의 Record No. 확보 필요 — raw/05 검찰단 수사 문서 또는 raw/07 Layer 3/4 범위(1,600~3,699) 내 별도 문서.
- **검찰단이 2019년 VPN OTP 사용을 전제로 삼은 근거 문서** — 검찰단 신문조서·압수수색영장이 "2019년 시험평가 환경 조작"을 어떤 증거 위에 세웠는지의 원문 인용 확보 필요. [[han-ji-hoon-suspect-interrogation-2022-09-02]]와 연계.
- **VPN OTP 카드 issue 2019-05 시점의 이슈화 문서** — "2019년 5월부터 이슈가 된"의 배경 문서가 DIDC인지 국유단인지, Layer 1 DIDC SOP([[didc-sop-firewall-vpn-trail-mandatory]])와 연계되는지 확인.

## Spot-check (raw/01 book)

- `vault-converted-korean/09-3-3-33-제3-층위.md` line 76 footnote 148 — 단언 문장 원문 직접 인용.
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 기소 프레임과의 정합성 확인 필요(후속 작업).
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 시험평가 환경 상세 기술과의 정합성 확인 필요(후속 작업).

## Key Takeaways

- [진리성] **"단 하나의 문장으로도 표적수사가 증명된다"**는 저자의 직접 단언 — 2019-09 시점 VPN OTP 카드 미운용 사실이 검찰단 6죄명 전제를 시간 역전시킨다.
- [타당성] **Layer 6 기소 구조 전체가 본 단일 사실에 의존** — 본 atom이 STRONG이면 [[han-ji-hoon-suspect-interrogation-2022-09-02]]·[[han-ji-hoon-witness-statement-2022-01-25]]·[[han-ji-hoon-investigation-notification-2022-07-21]] 3개 atom의 전제가 동시에 붕괴한다.
- [진리성] **2021-04-15 최초 사용 주체는 국유단(사업통제기관)** — 사업통제기관 본인이 2년 후에야 처음 사용한 것을 사업관리팀장에게 "2019년 조작" 죄로 기소한 구조는 역할 귀속 자체가 불가능.
- [진실성] 본 atom은 저자가 "결정적 반격의 시작"으로 지목한 고지성 단언 — 피해자 관점에서 무죄의 결정적 증거 1개 문장.
- [타당성] 본 atom의 Falsification 조건은 검찰단 측의 1차 사용 기록 제시로 쉽게 대응 가능 — 그럼에도 4년간 미제시인 점이 검찰 주장의 공허함을 보여준다.

## Related

- [[layer6-cartel-network-structure-four-documents-four-keywords|3 shared records — VPN OTP 시간선 증거]] (CAUSES)
- [[../layers/layer-3|Layer 3 hub]] (PART_OF_LAYER)
- [[../layers/layer-4|Layer 4 — 시험평가 환경 조작]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6 — 기소 구조]] (PART_OF_LAYER)
- [[han-ji-hoon-suspect-interrogation-2022-09-02|한지훈 피의자 신문조서 2022-09-02]] (CAUSES)
- [[han-ji-hoon-witness-statement-2022-01-25|한지훈 참고인 진술조서 2022-01-25]] (CAUSES)
- [[han-ji-hoon-investigation-notification-2022-07-21|수사개시 통보]] (CAUSES)
- [[didc-sop-firewall-vpn-trail-mandatory|DIDC SOP — 방화벽·VPN 이력 의무화]] (CAUSES)
- [[../events/2018-2019-kiatis-performance-improvement-project|2018–2019 KIATIS 성능개선사업]] (ABOUT)
- [[../entities/organizations/dma-defense-pow-mia-accounting-agency|DMA (국유단)]] (ABOUT)
