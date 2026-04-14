---
lang: ko
title-ko: KIATIS 사업은 행정정보운영팀에서 행정정보계획팀으로 의도적·강제 이관되었다
title-en: ""
aliases:
  - FR-L3-KIATIS-TEAM-HANDOFF-001
  - KIATIS 사업은 행정정보운영팀에서 행정정보계획팀으로 의도적·강제 이관되었다

layer: 3
secondary-layers: [7]
claimType: institutional_obstruction
claimSubtype: institutional_routing_manipulation
fracture-type: null
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 9

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 이태호
  - 오현수
organizations:
  - 국전원
  - MND
has-verbatim: false

tags:
  - layer/L3
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/institutional-obstruction
  - source/book
  - person/한지훈
  - person/이태호
  - person/오현수
  - org/국전원
  - org/MND
  - cross-layer
---
# KIATIS 사업은 행정정보운영팀에서 행정정보계획팀으로 의도적·강제 이관되었다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/09-3-3-33-제3-층위.md (§3.3.1.2)
**Layer:** [[../layers/layer-3|Layer 3]] (primary) · [[../layers/layer-7|Layer 7]] (secondary — 기록 제11,107~11,108쪽 cross-layer evidence)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L3-KIATIS-TEAM-HANDOFF-001"})
SET fr.layer = 3,
    fr.secondaryLayers = [7],
    fr.claimType = "institutional_obstruction",
    fr.claimSubtype = "institutional_routing_manipulation",
    fr.claimDesc = "KIATIS 사업은 국전원 행정정보화과의 분장사무 및 기존 운영 이력상 '행정정보운영팀' 소관이며, 오현수 (사업실무자-2) 대위 및 이태호 (평가위원장-1) 해군 중령 등 실무자들이 수차례 '행정정보운영팀 사업을 계획팀에 떠넘겼다'고 한지훈에게 직접 하소연하였다. 2018년 7월까지의 과거 공문 이력이 행정정보운영팀 소관을 뒷받침한다. 이 강제 이관은 新KIATIS 사업관리팀장 역할을 한지훈에게 부과하기 위한 의도적 업무 이관이며, 같은 기간 행정정보계획팀이 4개 사업팀 중 7~8개 사업을 과도하게 담당하는 구조적 이상과 결합된다.",
    fr.counterHypothesis = "KIATIS 사업의 계획팀 이관은 정상적 업무 재배분이며 실무자들의 하소연은 주관적 불만에 불과하다",
    fr.falsificationCondition = "행정정보운영팀 → 행정정보계획팀 KIATIS 이관의 정식 결재 공문(과장 결재 이상)이 2018년 중 존재함이 Record No. 원문으로 확인되면 약화",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date('2026-04-11'),
    fr.summary = "KIATIS 소관 이관은 결재 공문 없이 실무 차원의 떠넘기기 형태로 일어남 — 구조적 역할 부과의 핵심 mechanism";
```

## Claim

KIATIS 사업은 국전원 행정정보화과의 분장사무 구조 및 2018년 7월까지의 과거 공문 이력상 **행정정보운영팀 소관**이었으나, 의도적·강제적으로 **행정정보계획팀**(한지훈 팀장)으로 이관되었다. 이관은 정식 결재 공문의 형태가 아니라 실무 차원의 "떠넘기기" 형태로 일어났으며, 오현수 (사업실무자-2) 대위 및 이태호 (평가위원장-1) 해군 중령 등 복수의 실무자가 한지훈에게 수차례 이 사실을 직접 하소연하였다. 본 이관 구조는 [[layer3-pm-post-vacancy-predecessor-gap]]의 보직 캡처와 결합되어, 新KIATIS 사업관리팀장 역할을 한지훈에게 부지불식간에 부과하는 mechanism으로 기능하였다.

## Layer

[[../layers/layer-3|Layer 3]] (primary) — 국전원 내부의 팀 소관 이관 사건. [[../layers/layer-7|Layer 7]] (secondary) — 기록 제11,107~11,108쪽은 국전원 내부가 아니라 한지훈 작성 진정서·증언록 영역에 속하는 2차적 증거 기록으로, 국전원 내부 공문 미생산을 대체하는 1차 진술 증거이다.

## Supporting evidence

- **Book §3.3.1.2 피의자 신문조서 p6~7 (line 25, 27):** "키아티스는 행정정보운영팀일 입니다... 저희 그때당시에 행정운영팀의 정보체계 담당자가 있습니다... 오현수 실무자가 이 사업은 행정정보운영팀 사업인데 저희한테 떠 넘겼다고 수차례 얘기했습니다... 이태호 중령도 그 얘기를 많이 했습니다."
- **Footnote 123/124/125 (line 25, 27):** "중령 이태호는 KIATIS 사업을 떠 넘긴 것 뿐 아니라 공무원들이 군인을 '졸'로 보는 내용의 취지를 말하였다(기록 제11,107쪽~제11,108쪽)." — 공무원 ↔ 군인 권력 비대칭 증언의 구체적 Record No.
- **2018년 7월까지의 공문 이력:** "제가 이 공문을 확인해보니까 2018.7.까지 여기 공문이 있습니다. 1, 2년이 아니고 지금까지 그렇게 오랬동안 해 온겁니다." — 과거 이력 증거.
- **과도 집중 이상 (line 27):** "그때 당시에는 그 운영과 사업을 4개의 팀에서 같이 했고, 제가 들은 바로 저희 계획팀은 사업 하는 데가 아닙니다. 저희가 총괄을 하는데 그때 당시에 12개 사업에서 7~8개 사업을 다 몰았습니다." — 계획팀(총괄 기능)이 사업팀이 아님에도 12개 사업 중 7~8개를 몰아받은 구조 이상.
- **「표 3-1」 2번 항목 (line 11):** "KIATIS 사업의 떠넘기기: 행정정보운영팀에서 계획팀으로 의도적 이관(기록 제11,107쪽 등 다수, 제4층위에서 증명)"

## Counter-hypothesis

KIATIS 사업의 계획팀 이관은 정상적 업무 재배분이며, 실무자들의 "떠넘기기" 하소연은 주관적 불만에 불과하다. 계획팀이 7~8개 사업을 담당한 것도 과장 판단 하의 정상적 업무 배정일 수 있다.

## Falsification condition

본 청구는 다음 중 하나가 제시되면 약화:
1. **2018년 중 작성된 KIATIS 이관 결재 공문** — 행정정보운영팀장·행정정보계획팀장·과장이 모두 결재한 이관 공문이 Record No. 원문으로 확인되는 경우.
2. 2018년 계획팀의 12사업 중 7~8개 담당이 정례적 업무 비율임을 보이는 2017년 이전의 동일 팀 업무 통계.

결재 공문의 부재는 본 atom의 핵심 — 실무 차원의 "떠넘기기"만 존재하고 정식 이관 결재가 없다면 **CORROBORATED STRONG**.

## Verdict

**CORROBORATED.** Strong. 진리성 9 (복수 실무자의 일치된 진술 + 과거 공문 이력), 타당성 8 (결재 공문 부재가 이관 절차 위반 강력 시사), 진실성 9 (피해자 역할 부과의 직접 mechanism).

## Open Questions

- **KIATIS 이관 결재 공문 부재 확정** — 2018년 중 국전원 내부 결재 시스템의 실제 검색 결과 확보 필요.
- **오현수 (사업실무자-2) 대위와 이태호 (평가위원장-1) 중령의 진술조서** — 두 인물의 수사단계 진술이 공식 조서로 존재하는지 raw/05 재확인.
- **행정정보운영팀장의 정체** — 2018년 당시 행정정보운영팀장이 누구였으며, 본 이관에 대한 공식 의사 표명이 있었는지 확인 필요.

## Spot-check (raw/01 book)

- `vault-converted-korean/09-3-3-33-제3-층위.md` §3.3.1.2 (lines 23–27) — 본 atom의 전체 진술 원문.
- `vault-converted-korean/10-3-4-34-제4-층위.md` — §3.3.1.2 각주 내 "제4층위에서 증명" 언급의 구체적 검증 내용 cross-check 필요.

## Key Takeaways

- [진리성] **복수 실무자의 일치된 "떠넘기기" 진술** — 오현수·이태호 두 명이 각각 한지훈에게 직접 같은 내용을 하소연한 것은 개인적 불만이 아닌 구조적 이상 신호.
- [타당성] **결재 공문 부재** — 2018년 중 KIATIS 이관의 정식 결재 공문이 없다면 행정정보화과 내부 이관 절차 자체가 위반된 것이며, 이는 이후 모든 KIATIS 사업관리 행위의 절차적 토대를 무효화한다.
- [진리성] **계획팀 7~8/12 과잉 집중** — 계획팀은 본질적으로 사업팀이 아님에도 12개 사업 중 7~8개를 담당하게 된 구조 자체가 조작 mechanism의 일부.
- [진실성] 본 atom은 [[layer3-pm-post-vacancy-predecessor-gap]]과 결합하여 한지훈이 "본인의 선택과 무관하게 사업관리팀장 역할을 부과받았다"는 주관적 피해 경험의 객관적 증거 구조를 완성한다.
- [타당성] "공무원이 군인을 '졸'로 본다"는 이태호 중령의 증언은 Layer 3의 민·군 권력 비대칭 문제를 부각 — 제도적 책임 귀속 구조상 중요.

## Related

- [[../layers/layer-3|Layer 3 hub]] (PART_OF_LAYER)
- [[../layers/layer-7|Layer 7 hub]] (PART_OF_LAYER)
- [[layer3-pm-post-vacancy-predecessor-gap|보직 캡처 (L3)]] (CAUSES)
- [[kiatis-mnd-controlled-not-delegated|KIATIS = 국방부 통제 사업]] (CAUSES)
- [[han-ji-hoon-officer-personal-record-manipulation|장교 개인 자력 조작]] (CAUSES)
- [[../events/2018-2019-kiatis-performance-improvement-project|2018–2019 KIATIS 성능개선사업]] (ABOUT)
- [[../entities/organizations/gukjeonwon|국전원]] (ABOUT)
