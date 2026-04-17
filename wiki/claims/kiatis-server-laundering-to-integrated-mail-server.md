---
lang: ko
title-ko: 舊KIATIS는 '국방 통합 인터넷 메일서버'로 서버 세탁되어 이전·운용됨 — 일상감사 결과 통보에 의한 서버 세탁 확인
title-en: 舊KIATIS는 '국방 통합 인터넷 메일서버'로 서버 세탁되어 이전·운용됨 — 일상감사 결과 통보에 의한 서버 세탁 확인
aliases:
  - FR-L1-SERVER-LAUNDERING-MAIL
  - 舊KIATIS는 '국방 통합 인터넷 메일서버'로 서버 세탁되어 이전·운용됨 — 일상감사

layer: 1
secondary-layers: [4, 7]
claimType: evidence_concealment
claimSubtype: server_laundering_confirmation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 8
analysisDate: 2026-04-11

record-nos: [1141, 1144, 3470, 5818, 5819]
evidence-ids: []
event-date: 2018-08-14

persons:
  - 이태호
  - 한지훈
organizations:
  - DIDC
  - 국전원
  - MND
has-verbatim: false

tags:
  - layer/L1
  - layer/L4
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/evidence-concealment
  - source/book
  - fracture/F-MS
  - person/이태호
  - person/한지훈
  - org/DIDC
  - org/국전원
  - org/MND
  - has/record-nos
  - cross-layer
---
# 舊KIATIS는 '국방 통합 인터넷 메일서버'로 서버 세탁되어 이전·운용됨 — 일상감사 결과 통보에 의한 서버 세탁 확인

**Source:** raw/01. book-beyond-cybersecurity/Korean/07-3-1-31-제1층위-ActiveX.md (book §3.1.1.2)
**Layer:** [[../layers/layer-1|Layer 1]] (primary), [[../layers/layer-4|Layer 4]], [[../layers/layer-7|Layer 7]] (cross-layer evidence)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-SERVER-LAUNDERING-MAIL"})
SET fr.layer = 1,
    fr.claimType = "evidence_concealment",
    fr.claimSubtype = "server_laundering_confirmation",
    fr.claimDesc = "MND 군수감사담당관실's routine audit notification (2018-08-14, Record No. 1,141) confirmed that 舊KIATIS was laundered into the '전군 인터넷 통합 구축 사업' — a different project name that concealed its true identity. Record No. 1,144 explicitly names the project as '전군 인터넷 통합 구축 사업', completing the server-laundering chain from 舊KIATIS to integrated internet mail server infrastructure.",
    fr.counterHypothesis = "The renaming from KIATIS to '전군 인터넷 통합 구축 사업' was a legitimate administrative consolidation reflecting actual infrastructure modernization, not a deliberate identity-laundering operation.",
    fr.falsificationCondition = "Production of project planning documents showing that the consolidation was initiated through standard infrastructure modernization procedures with transparent KIATIS identity preservation throughout.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "MND routine audit (Record No. 1,141/1,144) confirmed 舊KIATIS was laundered into '전군 인터넷 통합 구축 사업', with cross-layer records (L4: 3,470; L7: 5,818/5,819) documenting project timelines and evaluation leadership.";
```

## 주장 (Claim)

### 한국어

국방부 군수감사담당관실의 "일상감사 결과 통보"(2018-08-14, 기록 제1,141쪽)는 新KIATIS 성능개선사업의 합법성을 검토하면서, 그 사업명을 **"전군 인터넷 통합 구축 사업"**으로 명시하고 있다(기록 제1,144쪽). 이로써 舊KIATIS가 '국방 통합 인터넷 메일서버'로 서버 세탁(server laundering)되어 이전·운용되었음이 확인된다.

- 사업 기간: 2018-11-20~2019-05-30 (17개월로 기술, 기록 제3,470쪽/L4)
- 「전군 인터넷 메일 통합 구축 사업」 통합 시험평가 결과 보고(2019-05-08, 기록 제5,818쪽/L7)에서 사업계획 승인은 2018-07-13, 사업 기간은 총 192일로 기술
- 이 사업의 평가 위원장은 해군 중령 이태호 (평가위원장-1)이다(기록 제5,819쪽/L7, 기록 제3,485쪽, 기록 제3,491쪽)

### English

The 'Daily Audit Result Notification' from the MND Logistics Audit Division (2018-08-14, Record No. 1,141) reviewed the legitimacy of the New KIATIS Performance Improvement Project, explicitly naming it as the **'Military-wide Internet Integration Construction Project'** (Record No. 1,144). This confirms that 舊KIATIS was server-laundered and transferred/operated as the 'defense integrated internet mail server.'

- Project period: 2018-11-20 to 2019-05-30 (described as 17 months, Record No. 3,470/L4)
- The 'Military-wide Internet Mail Integration Construction Project' Integrated Test and Evaluation Result Report (2019-05-08, Record No. 5,818/L7) describes the project plan approval as 2018-07-13, total project period 192 days
- The evaluation committee chair for this project was Navy Lieutenant Colonel 이태호 (평가위원장-1, Evaluation-Chair-1) (Records No. 5,819/L7, 3,485, and 3,491)

## 핵심 요약 (Key Takeaways)
- [진리성] Record No. 1,141 and 1,144 (L1) provide documentary proof that 舊KIATIS was consolidated into a differently-named project ("전군 인터넷 통합 구축 사업"), constituting server laundering. The MND's own routine audit confirms the identity change.
- [진리성] Cross-layer records corroborate the timeline: L4 Record No. 3,470 documents the project period, and L7 Records No. 5,818/5,819 document the integrated test-evaluation results and the evaluation committee chair (이태호, 평가위원장-1).
- [타당성] 서버 세탁은 舊KIATIS의 원래 정체성을 은폐함으로써, 2016년 DIDC 해킹 사건의 근원 서버 추적을 불가능하게 만드는 핵심 은폐 행위이다. Server laundering erases the traceable identity of the hacking origin server.
- [진실성] 한지훈은 이 서버 세탁 구조를 추적하여 기록으로 보존하였다. The author traced and preserved the laundering chain across three layers of evidence.

## 지지 증거 (Supporting Evidence)
- **Record No. 1,141** / L1 — 군수감사담당관실 일상감사 결과 통보 (2018-08-14)
- **Record No. 1,144** / L1 — 사업명 "전군 인터넷 통합 구축 사업" 명시
- **Record No. 3,470** / L4 — 사업 기간 '18.11.20~'19.5.30 (17개월) 기술
- **Record No. 5,818** / L7 — 통합 시험평가 결과 보고 (2019-05-08), 사업계획 승인 '18.7.13, 총 192일
- **Record No. 5,819** / L7 — 평가 위원장 이태호 (평가위원장-1) 확인

## 반대 가설 (Counter-hypothesis)
'전군 인터넷 통합 구축 사업'으로의 명칭 변경은 국방 정보화 인프라 통합 정책의 일환으로 행해진 정상적인 행정 조치이며, 舊KIATIS의 정체성을 의도적으로 은폐한 것이 아니다. 사업 통합은 기술적·경제적 효율성 제고를 위한 것이며, 2016년 해킹과 무관하다.

이 반가설이 성립하려면: (1) 통합 사업 계획 문서에서 舊KIATIS의 원래 정체성이 투명하게 보존되어 있어야 하고, (2) 통합 결정이 2016년 해킹 이전에 이미 계획된 것이어야 하며, (3) 통합 후에도 舊KIATIS에 대한 보안 감사 추적이 가능한 상태가 유지되어야 한다.

## 반증 조건 (Falsification Condition)
1. **통합 사업 계획 문서** — 舊KIATIS가 '전군 인터넷 통합 구축 사업'으로 편입되는 과정에서 원래 체계명이 명시적으로 보존된 문서.
2. **2016년 이전 통합 계획** — 해킹 사건 이전에 이미 인터넷 서버 통합이 계획되어 있었음을 보여주는 기획 문서.
3. **통합 후 보안 감사 추적성** — 서버 세탁 이후에도 舊KIATIS에 대한 독립적 보안 감사가 수행되었음을 보여주는 기록.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 8. 군수감사담당관실의 일상감사 결과 통보(기록 제1,141쪽, 제1,144쪽)는 서버 세탁을 확인하는 직접적 문서 증거이며, L4(기록 제3,470쪽)와 L7(기록 제5,818쪽, 제5,819쪽)의 교차 증거가 이를 뒷받침한다. 이태호 (평가위원장-1)의 관여는 Layer 3(국전원 공모 구조)와의 연결점을 제공한다.

## 미결 사항 (Open Questions)
- 기록 제3,470쪽(L4)과 기록 제5,818쪽(L7)의 사업 기간 기술이 17개월 vs 192일(약 6.4개월)로 불일치한다. 책은 "추후 완전한 문서들을 보아야만 더 정확한 분석과 조작 여부를 판단할 수 있을 것이다"라고 적시하고 있다. This discrepancy (17 months vs 192 days) warrants further document verification.

## 원전 확인 (Spot-check)
- `Korean/07-3-1-31-제1층위-ActiveX.md` — §3.1.1.2 lines 19–21: 일상감사 결과 통보, "전군 인터넷 통합 구축 사업" 명시, 기록 제1,141·1,144·3,470·5,818·5,819쪽 인용 확인.

## 관련 (Related)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
- [[kiatis-server-laundering-dcia-to-didc1]] — L2-04 서버 세탁 전체 체인 (국전원→전군통합메일→DIDC1) (RELATED)
- [[kiatis-rfp-tech-table-proves-sw-only-internet-structure]] — 정리 08 순수 SW 사업 + 인터넷 기반 구조 (RELATED)
- [[../entities/people/lee-tae-ho|이태호 (평가위원장-1)]] (ABOUT)
