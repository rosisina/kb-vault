---
lang: ko
title-ko: "최영규 증언: 보직 이동으로 KIATIS 자료 접근 **전면 차단** — \"여기에 뭔가 의도가 있는 거 같애\""
title-en: "최영규 증언: 보직 이동으로 KIATIS 자료 접근 **전면 차단** — \"여기에 뭔가 의도가 있는 거 같애\""
aliases:
  - FR-L5-DOCUMENT-ACCESS-BLOCKED
  - "최영규 증언: 보직 이동으로 KIATIS 자료 접근 **전면 차단** — \"여기에 뭔가"

layer: 5
secondary-layers: [6]
claimType: evidence_concealment
claimSubtype: evidence_access_obstruction
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 10
analysisDate: 2026-04-13

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 최영규
  - 김민수
organizations:
  - DIDC
  - 국전원
  - 국유단
has-verbatim: true

tags:
  - layer/L5
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/evidence-concealment
  - source/recording
  - person/한지훈
  - person/최영규
  - person/김민수
  - org/DIDC
  - org/국전원
  - org/국유단
  - has/verbatim-quote
  - cross-layer
---
# 최영규 증언: 보직 이동으로 KIATIS 자료 접근 **전면 차단** — "여기에 뭔가 의도가 있는 거 같애"

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[009-4]` 녹취 117 (2022.8.9, 00:24:57, line 5238+)
**Layer:** [[../layers/layer-5|Layer 5]] (primary — 증거 접근 차단), [[../layers/layer-6|Layer 6]] (secondary — 수사 방어권 침해)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-DOCUMENT-ACCESS-BLOCKED"})
SET fr.layer = 5,
    fr.secondaryLayers = [6],
    fr.claimType = "evidence_concealment",
    fr.claimSubtype = "evidence_access_obstruction",
    fr.claimDesc = "국전원 장비운용센터장 최영규(10년 근무)가 증언: 한지훈이 행정정보화과에서 자원관리과로 보직 이동됨으로써 'KIATIS 관련된 자료를 전혀 못 보게 했어 나를' + 'DIDC에서 준다고 하고 다 막아버리고 유발단도 다 막아버리고' + '국전원도 원장님이 너 혼자 책임져라 우리 조직에서 안 해준다'. 보직 이동이 방어 자료 접근 차단의 도구로 사용된 증거",
    fr.counterHypothesis = "보직 이동은 갑질 조사 기간 중 피조사자 분리의 표준 절차이며 자료 접근 차단과 무관하다",
    fr.falsificationCondition = "한지훈이 자원관리과 이동 후에도 KIATIS 관련 자료에 접근한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "보직 이동(행정정보화→자원관리)으로 KIATIS 자료 접근 전면 차단 + DIDC·국유단·국전원 3방향 지원 거부 = 방어 자료 접근 구조적 봉쇄.";
```

## Claim

국전원 장비운용센터장 최영규 (10년 근무)에게 한지훈이 녹취 117(2022.8.9)에서 증언한 내용:

### 핵심 1: 보직 이동으로 KIATIS 자료 접근 차단

> **(한지훈→최영규, line 5260~5263):**
> "행정정보화과에서 자원관리과로 **보직을 이동**시켜서. 이 **키아티스 관련된 자료를 전혀 못 보게 했어** 나를. **여기에 뭔가 의도가 있는 거 같애**"

### 핵심 2: DIDC·국유단·국전원 3방향 지원 거부

> **(한지훈→최영규, line 5305~5307):**
> "내가 보면 **디아이디씨에서 준다고 하고 다 막아버리고** **유발단도 다 막아버리고**... **국전원도 원장님이 너 혼자 책임져라 우리 조직에서 안 해준다**"

### 증거 접근 차단의 3중 구조

```
한지훈 (피의자)
    ↓ 보직 이동 (행정정보화과 → 자원관리과)
    ↓ KIATIS 자료 접근 차단
    │
    ├── DIDC: "준다고 하고 다 막아버리고"
    ├── 국유단: "다 막아버리고"
    └── 국전원 원장(김민수): "너 혼자 책임져라 안 해준다"
```

피의자가 **자기 방어를 위해 필요한 자료에 접근할 수 없게** 3개 기관이 동시에 차단 = **방어권의 구조적 봉쇄**

## Key Takeaways

- [타당성] 보직 이동이 **갑질 조사 분리 목적**이라면 KIATIS 자료 접근까지 차단할 이유가 없음 — 자료 접근 차단은 **방어권 침해의 별도 행위**. / If the position transfer was for investigation separation, there's no reason to block KIATIS document access — document blocking is a separate defense-right violation.
- [진리성] **3개 기관**(DIDC·국유단·국전원)이 동시에 지원을 거부 = **조직 간 조율**에 의한 차단. 하나의 기관만 차단하면 다른 경로로 자료 확보 가능 — 3개 동시 차단은 **완벽한 봉쇄 설계**. / Three organizations simultaneously blocking = coordinated obstruction by design.
- [진실성] **"너 혼자 책임져라 우리 조직에서 안 해준다"** = 김민수의 조직적 유기 선언 — [[split-kim-min-su-organizational-support-cutoff]]과 직접 연결. / "Take responsibility alone, the organization won't help" = institutional abandonment.
- [진리성] **"여기에 뭔가 의도가 있는 거 같애"** — 한지훈 자신이 보직 이동의 **진짜 목적이 자료 접근 차단**임을 실시간으로 인식. / Han Ji-hoon recognized in real-time that the true purpose of the transfer was document access blocking.

## Supporting evidence

- **녹취 117** (2022.8.9, line 5238~5307)
- Cross-reference: [[split-kim-min-su-organizational-support-cutoff|김민수 지원 차단]]
- Cross-reference: [[six-month-solitary-confinement-five-independent-witnesses|6개월 독방 — 보직 이동이 격리의 일부]]

## Counter-hypothesis

보직 이동은 갑질 조사 기간 중 표준 분리 절차이다.

## Falsification condition

자원관리과 이동 후에도 KIATIS 자료에 접근한 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 10.

## Spot-check (raw/01 book)

- `vault-converted-korean/11-3-5-35-제-5층위.md` — 격리 구조
- Deferred to A.6 Re-verify.

## Related

- [[split-kim-min-su-organizational-support-cutoff|김민수 지원 차단]] (RELATED)
- [[six-month-solitary-confinement-five-independent-witnesses|6개월 독방]] (CORROBORATES)
- [[didc-withheld-network-diagram-from-kiatis|DIDC 네트워크 비공개]] (RELATED)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
