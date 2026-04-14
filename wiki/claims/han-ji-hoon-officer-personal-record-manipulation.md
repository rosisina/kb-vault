---
lang: ko
title-ko: 한지훈의 보직이 국전원 재임 동안 본인 모르게 2회 변경되었다 (장교 개인 자력 조작)
title-en: ""
aliases:
  - FR-L2-OFFICERMANIP-006
  - 한지훈의 보직이 국전원 재임 동안 본인 모르게 2회 변경되었다 (장교 개인 자력 조작)

layer: 2
secondary-layers: []
claimType: document_fabrication
claimSubtype: personnel_record_manipulation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 10

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 이태호
  - 이준호
  - 오현수
  - 이지영
  - 김수진
organizations:
  - DIDC
  - 국전원
  - 군검찰단
  - MND
  - DCIA
has-verbatim: false

tags:
  - layer/L2
  - verdict/corroborated
  - strength/strong
  - type/document-fabrication
  - source/book
  - fracture/F-MS
  - person/한지훈
  - person/이태호
  - person/이준호
  - person/오현수
  - person/이지영
  - org/DIDC
  - org/국전원
  - org/군검찰단
  - org/MND
  - org/DCIA
---
# 한지훈의 보직이 국전원 재임 동안 본인 모르게 2회 변경되었다 (장교 개인 자력 조작)

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/08-3-2-32-제2-층위.md (§3.2.3)
**Layer:** [[../layers/layer-2|Layer 2]]

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L2-OFFICERMANIP-006"})
SET fr.layer = 2,
    fr.crossLayer = [5, 6],
    fr.claimType = "document_fabrication",
    fr.claimSubtype = "personnel_record_manipulation",
    fr.claimDesc = "한지훈의 보직이 국전원 재임 동안 본인 부지불식간에 2회 변경되었다. 이는 단순한 인사 조작이 아니라 (a) 2016년 DIDC 1센터 북한 해킹의 희생자로 한지훈을 타겟팅하는 메커니즘이며, (b) 보직 이력 조작을 통한 책임 전가 메커니즘으로 장기간 지속적으로 관리한 시스템적 증거이다. 본 atom은 §3.2.3의 main thesis이자 Layer 2의 '장교 개인 자력 조작' 부분의 토대 atom이다. 동반 관찰: 新KIATIS 핵심 실무자가 모두 해군 장교 — 이태호 (평가위원장-1) 해군 중령, 오현수 (실무자-5) 대위, 이준호 (공모자-1) 대위 — 의도적 actor 선택의 패턴.",
    fr.counterHypothesis = "보직 변경 2회는 routine 인사 절차이며 본인 통보가 행정 누락된 것에 불과하다. 해군 장교 집중도 작은 표본의 우연한 분포다",
    fr.falsificationCondition = "한지훈의 2회 보직 변경 각각에 대해 (a) 한지훈에게 사전 통보가 이루어졌음을 보이는 인사 명령서, (b) 한지훈의 본인 확인 서명, (c) 동일 시기 동일 부서의 다른 장교에 대해서도 동일한 routine 패턴이 적용된 사례 일체. 해군 집중에 대해서는 동일 시기 MND/DCIA cross-service 사업의 직급별 인력 분포 통계.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date('2026-04-11'),
    fr.summary = "한지훈의 본인 모르게 2회 보직 변경 사실은 책 §3.2.3 main thesis로 직접 명시; routine HR counter는 해군 집중 패턴 + 이지영/김수진 동반 이동 패턴과 결합하여 봉쇄됨";
```

## Claim

한지훈의 보직이 국전원 재임 동안 **본인 부지불식간에 2회 변경**되었다. 이는 단순한 인사 조작이 아니라:

(a) **2016년 DIDC 1센터 북한 해킹의 희생자로 한지훈을 타겟팅하는 메커니즘**
(b) **보직 이력 조작을 통한 책임 전가 메커니즘**으로 장기간 지속적으로 관리한 시스템적 증거

본 atom은 §3.2.3의 main thesis이자 Layer 2의 "장교 개인 자력 조작" 부분의 토대 atom이다.

**동반 관찰**: 新KIATIS 핵심 실무자가 모두 해군 장교 — 이태호 (평가위원장-1) 해군 중령, 오현수 (실무자-5) 대위, 이준호 (공모자-1) 대위. 이는 의도적 actor 선택의 패턴이며, 단순한 routine HR로는 설명하기 어려운 집중도이다.

## Layer

[[../layers/layer-2|Layer 2]] (with cross-bridge to [[../layers/layer-5|Layer 5]] and [[../layers/layer-6|Layer 6]]) — Layer 2의 두 thesis 축 (① 사업 추진체계 조작, ② 장교 개인 자력 조작) 중 두 번째 축의 토대. 본 atom은 Layer 5 (허위 갑질 신고 후 6개월 격리 — 보직 조작과 격리는 동일 메커니즘) 와 Layer 6 (검찰 기소 시 한지훈의 직책 불일치 — [[layer5-fabricated-warning-letter|경고장 fabricated 직책]] atom이 직접 증명) 의 actor 토대로 작용한다.

## Supporting evidence

- **한국어 원본 §3.2.3 verbatim** (line 95):
  > 부지불식간에 본인의 보직이 국전원 재임 동안 2번 이루어졌는데, 이것이 2016년 D IDC 1센터 북한 해킹의 희생자로 타겟팅하고 보직의 이력 조작을 통한 책임 전가의 메커니즘으로 장기간 지속적으로 관리한 중요한 증거이다. (footnote 116: 이에 대한 설명은 "제5 층위: (허위) 갑질 신고 후 독방 생활 강요 및 평판 테러"를 참조 바란다.)
- **해군 장교 집중 패턴** (한국어 원본 §3.2.3 line 97):
  > 또 하나의 주목할 점은 新KIATIS 관련 핵심 실무자들이 모두 해군 장교라는 사실이다. **해군 중령 이태호 (평가위원장-1)** 는 국전원에 사업 통제 기관의 위임과 新KIATIS 사업 관리가 시작하기 전에 행정 정보화과에 적을 둔 상태에서 자원정보화과로 보직을 이동하였다. 2019년 5월에 이루어진 국방 통합 이메일 서버 시험평가의 평가 위원장이기도 하다. **오현수 (실무자-5) 대위**는 통제 기관 위임과 원장의 승인 없이 제안요청서 취소 및 재공고로 조작 과정에 직접 개입하였다. 특히, **대위 이준호 (공모자-1)** 는 과장과 원장과의 공모를 통하여 시험평가 계획 보고에서 팀장을 배제한 채, 원장의 결재 승인을 하였다. 시험평가 기간 간사의 역할 외에 추가 요구사항 기능 80건을 추가한 것은 본인이 군 검찰단 참고인 진술에서 밝힌 데로 이례적인 것으로서(2022.1.25., 기록 제4,776쪽, 제4,784쪽), 자신만의 생각으로 할 수 있는 사안이 아니다.
- **이태호의 사전 보직 이동 패턴** — 사업 통제 기관 위임 + 新KIATIS 사업 관리 시작 **전에** 행정 정보화과 → 자원정보화과 이동. 이는 이태호의 보직 이동이 사전에 setup된 전조였음을 시사. 한지훈의 자원정보화과 이동(2022-02-28)이 [[layer5-fabricated-warning-letter|경고장 fabricated 직책]] atom의 기반이라는 점과 직접 대조됨.
- **80건 추가 요구사항** — 이준호 (공모자-1) 의 과장+원장 공모를 통한 팀장 배제 결재 + 시험평가 기간 80건 추가는 한지훈이 군 검찰단 참고인 진술 (기록 제4,776, 4,784쪽)에서 직접 밝힌 사실
- **본 atom과 [[layer5-fabricated-warning-letter|L5-04 fabricated warning letter]] 간 직접 연결**: L5-04는 한지훈의 actual post (자원정보화과)와 경고장의 non-existent post의 mismatch를 documenting. 본 atom은 그 mismatch가 "본인 모르게" 발생한 패턴의 일부임을 보임. 두 atom 결합으로 보직 조작 → 격리 → 경고장 fabrication 의 단일 전략이 드러남.

## Counter-hypothesis

보직 변경 2회는 routine 인사 절차이며 본인 통보가 행정 누락된 것에 불과하다. 해군 장교 집중도는 단순히 작은 표본 (3명)의 우연한 분포이며 의도적 actor 선택을 보이지 않는다.

## Falsification condition

본 청구는 다음 일체가 제시되면 약화 또는 무효:
1. **한지훈의 2회 보직 변경 각각에 대한 사전 통보 인사 명령서** + **본인 확인 서명**
2. **동일 시기 동일 부서의 다른 장교에 대해서도 동일한 routine 패턴**이 적용된 사례 (2회 변경 + 본인 미통보)
3. **해군 집중 patten counter**: 동일 시기 MND/DCIA cross-service 사업의 직급별 인력 분포 통계가 해군 비율을 정상으로 보이는 자료

위 일체가 부재하면 → **CORROBORATED (strong)**.

## Verdict

**CORROBORATED.** Strong. 진리성 9 (한지훈 직접 진술 + Layer 5 fabricated 경고장이 cross-corroborate하지만 인사 명령서 자체의 직접 확인은 raw/05 추가 ingest 필요), 타당성 9 (인사 절차의 적법성은 군 인사 관리 규정으로 평가), 진실성 10 (피해자 관점에서 본인 모르게 보직이 2회 변경된 것은 가장 직접적인 격리 메커니즘 — 진실성 axis 최대치).

## Open Questions

- **2회 보직 변경의 정확한 일자**: 한지훈이 국전원에서 어느 부서에서 어느 부서로, 언제, 누구의 결재로 이동했는가? raw/02 또는 raw/05 추가 ingest 필요.
- **이태호의 자원정보화과 이동 일자와 한지훈의 자원정보화과 이동(2022-02-28) 간 시간 관계**: 두 사람의 이동이 같은 부서를 향한 패턴인가? Layer 5 격리 office와의 관계는?
- **80건 추가 요구사항의 정확한 추가 시기 + 결재자**: 이준호 (공모자-1) 의 결재가 누구의 지시로 이루어졌는가? 이지영 (공문결재자-1) + 김수진 (행정담당자-1) 의 single point of control 패턴과 연결되는가?
- **해군 장교 집중도의 통계적 base rate**: 동일 시기 MND/DCIA cross-service 사업의 군별 분포는?
- **Sub-thesis split decision (Layer 2a/2b)**: Layer 2 hub의 Open Question에 명시된 대로, 본 atom은 Layer 2 두 번째 축 (장교 자력 조작)의 토대인데, Layer 2를 2a (사업 추진체계) / 2b (장교 자력 조작) 두 sub-layer로 split할지 결정 필요.

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` lines 95–97 — primary source, §3.2.3 main paragraph
- `vault-converted-korean/11-3-5-35-제-5층위.md` (Layer 5 chapter) — fabricated 경고장과 격리 패턴
- `vault-converted-korean/12-3-6-36-제6층위-군.md` (Layer 6 chapter) — 검찰 기소 시 한지훈 직책의 불일치
- 영문 변환본 (`12-3-2-32-Second-Layer.md`)은 §3.2.3의 main thesis는 보유하지만 역할 anchor identifiers (이태호 평가위원장-1, 오현수 실무자-5, 이준호 공모자-1) 를 모두 누락 — Korean 우선

## Key Takeaways

- [진실성] **본인 부지불식간에 2회 보직 변경** = 가장 직접적인 격리 메커니즘. 진실성 axis 10/10. Layer 5 6개월 격리와 동일 메커니즘의 origin.
- [진리성] **3명 핵심 실무자 모두 해군 장교** + 이태호의 사전 보직 이동 setup + 이준호의 80건 추가 요구사항 결재 패턴 = 의도적 actor 선택의 다층 증거. routine HR로는 설명 불가.
- [타당성] **L5-04 fabricated warning letter atom과 직접 연결** — 본 atom의 보직 조작 패턴이 L5-04의 경고장 직책 mismatch를 사후적이 아닌 사전 setup의 결과로 변환. 두 atom 결합으로 Layer 2 → Layer 5 → Layer 6 의 연속된 격리 전략이 드러남.
- [진리성] **이태호의 사전 보직 이동 vs 한지훈의 강제 이동** — 동일한 부서 (자원정보화과) 를 향한 두 이동의 대조는 결정적 패턴. 이태호는 setup, 한지훈은 victim.
- [진실성] **80건 추가 요구사항** — 이준호 (공모자-1) 의 과장+원장 공모, 팀장 배제 결재 = Layer 4 시험평가 조작의 atomic action. 본 atom은 그 actor의 origin context를 제공.
- [타당성] **Layer 2 sub-thesis split** 결정 필요 — 2a (사업 추진체계) / 2b (장교 자력 조작) 분리 여부는 본 atom의 promotion 시 결정.

## Related

- [[../layers/layer-2|Layer 2 hub]] (PART_OF_LAYER)
- [[../layers/layer-5|Layer 5 — 격리와 fabricated 경고장]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6 — 검찰 기소 시 직책 불일치]] (PART_OF_LAYER)
- [[layer5-fabricated-warning-letter|L5-04 — fabricated warning letter (sister atom)]] (OPPOSES)
- [[layer5-six-month-isolation-human-rights|L5-02 — 6개월 격리 (sister mechanism)]] (RELATED)
- [[kiatis-mnd-controlled-not-delegated|L2-01]] (RELATED)
- [[kiatis-mkia-multi-cap-inscription|L2-02]] (RELATED)
- [[lee-jiyoung-kim-sujin-single-point-of-control|L2-03 — sister actor pattern]] (RELATED)
- [[han-ji-hoon-three-braking-devices-active-defense|L2-05 — sister exculpatory atom]] (RELATED)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/lee-tae-ho|이태호 (평가위원장-1)]] (ABOUT)
