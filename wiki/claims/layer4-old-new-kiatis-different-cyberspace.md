---
lang: ko
title-ko: 舊KIATIS의 실제 운영환경과 新KIATIS 사업의 시험 환경은 다른 사이버공간이다
title-en: ""
aliases:
  - FR-L4-051
  - 舊KIATIS의 실제 운영환경과 新KIATIS 사업의 시험 환경은 다른 사이버공간이다

layer: 4
secondary-layers: [7]
claimType: technical_proof
claimSubtype: operational_vs_test_environment_separation
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L4-001", "L4-051"]
event-date: null

persons:
  - 한지훈
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L4
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/technical-proof
  - source/book
  - fracture/F-CE
  - person/한지훈
  - org/DIDC
  - cross-layer
---
# 舊KIATIS의 실제 운영환경과 新KIATIS 사업의 시험 환경은 다른 사이버공간이다

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md (§3.4.1.2)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-7|Layer 7]] (secondary — 기록 제12,069 is in L7 record range; 한지훈 본인 논문이 수록된 범위)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-051"})
SET fr.layer = 4,
    fr.claimType = "technical_proof",
    fr.claimSubtype = "operational_vs_test_environment_separation",
    fr.claimDesc = "舊KIATIS operated on the internet (민간/공공 cyberspace) while 新KIATIS testing was conducted on a separated defense network (국방망). Per 훈령 제57조/제58조/제62조, operational test-evaluation (운용시험평가) must be performed in the actual operational environment. Since 舊KIATIS and 新KIATIS occupied fundamentally different cyber-domains, any test-evaluation that conflated the two violated the separation-of-environment principle.",
    fr.counterHypothesis = "The network environment difference was a routine infrastructure migration and both old and new systems shared sufficient operational continuity that environment separation was not practically relevant to test validity.",
    fr.falsificationCondition = "Documentation showing that 新KIATIS testing was conducted in the same internet-based environment where 舊KIATIS actually operated, or that the defense-network test environment faithfully replicated the internet-based operational conditions of 舊KIATIS.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Book §3.4.1.2 establishes that 舊KIATIS ran on internet cyberspace while 新KIATIS was tested on defense-network cyberspace — two fundamentally different domains per the author's published research (기록 제12,069~13,323). 훈령 제57조/제58조/제62조 mandate real-operational-environment testing, making the environment conflation a regulatory violation.";
```

## 주장 (Claim)

### 한국어

사이버공간은 민간, 공공, 국방 영역에 따라 수행 주체, 임무, 역할이 다르다. 舊KIATIS는 2007년부터 인터넷상에서(국방 인터넷 홈페이지 서버 → 전군 인터넷 통합 메일 서버) 운영되었다. 반면 新KIATIS는 DIDC 클라우드 기반의 국방망에서 구축되었다. 국방정보화업무훈령 제57조(시험평가 구분), 제58조(수행원칙: 개발·운용 분리 원칙), 제62조(운용시험평가: "실제 운용환경과 업무 절차를 반영")에 따르면, 운용시험평가는 실제 운용환경에서 수행해야 한다 (본문기록-제4층위-001). 그런데 舊KIATIS의 실제 운용환경(인터넷)과 新KIATIS의 시험 환경(국방망)은 물리적으로 분리된 다른 사이버공간이다. 따라서 이 두 환경을 혼동하거나 동일시한 어떤 시험평가도 훈령 위반이다.

### English

Cyberspace has different actors, missions, and roles depending on the civilian, public, and defense domains. 舊KIATIS was operated on the internet from 2007 (defense internet homepage server → military-wide internet integrated mail server). New KIATIS was constructed on the DIDC cloud-based defense network. Per Articles 57, 58, and 62 of the Defense Informatization Business Directive, operational test evaluation must be conducted in the actual operating environment (Book Record Layer 4-001). 舊KIATIS's actual operating environment (internet) and New KIATIS's test environment (defense network) are physically separate, different cyberspaces. Therefore any test evaluation that confused or equated these two environments constitutes a directive violation.

## 핵심 요약 (Key Takeaways)
- [진리성] 舊KIATIS는 인터넷 기반 사이버공간, 新KIATIS는 국방망 기반 사이버공간에서 각각 운영/시험됨 — 두 시스템은 서로 다른 사이버 도메인에 존재했다 (§3.4.1.2, 기록 제12,069~13,323). 舊KIATIS ran on internet cyberspace; 新KIATIS was tested on defense-network cyberspace — these are fundamentally different cyber domains.
- [타당성] 훈령 제57조/제58조/제62조는 운용시험평가를 "실제 운용환경과 업무 절차를 반영"하여 수행하도록 규정한다 (본문기록-제4층위-001). Per 훈령 Articles 57/58/62, operational test-evaluation must reflect the actual operational environment.
- [진리성] 新KIATIS는 DIDC에서 VPN OTP 카드를 2021년 4월 15일까지 제공하지 않아 舊KIATIS와 마찬가지로 VPN 없이 사용되었다 (§3.4.1.3). VPN OTP cards were not provided until 2021-04-15, meaning 新KIATIS operated without VPN just like 舊KIATIS.
- [타당성] 훈령 제58조 ②항의 개발·운용 시험평가 분리 원칙은 제2263호(2019-02-26), 제2398호(2020-02-13)까지 동일하게 유지되다가 제2436호(2020-06-04)부터 조작되기 시작했다 (§3.4.1.2 footnote 153). The separation principle was maintained until 제2436호 (2020-06-04) when manipulation began.

## 지지 증거 (Supporting Evidence)
- **본문기록-제4층위-001 / L4-001** — 훈령 제57조, 제58조, 제62조 원문 (§3.4.1.2, line 19)
- **기록 제12,069쪽~제13,323쪽** — 한지훈 본인의 사이버안보/사이버작전 관련 논문 수록 범위 (§3.4.1.2 footnote 155)
- **Book §3.4.1.2** verbatim: `사이버공간은 기존의 군사 영역과는 달리 민간과 공공, 국방의 영역에 따라 수행의 주체가 다르며 그 임무와 역할도 다르다.`
- **Book §3.4.1.3** — 新KIATIS 서버 구축이 DIDC 클라우드에서 이루어졌으며 VPN OTP 미제공으로 인터넷 기반 운영이 계속된 사실

## 반대 가설 (Counter-hypothesis)
1. **주장:** 네트워크 환경 차이는 인프라 마이그레이션의 통상적 과정이며, 新·舊 시스템 간 운영 연속성이 있어 환경 분리가 시험 유효성에 실질적으로 관련이 없었다.
2. **논리:** 인터넷 → 국방망 전환이 계획된 정상적 이전이었다면, 시험평가 시점의 환경 차이는 최종 운용환경을 반영한 것일 수 있다.
3. **필요 증거:** 新KIATIS 시험평가가 舊KIATIS의 실제 운용 조건(인터넷 기반, VPN 미사용)을 충실히 재현했음을 보여주는 시험평가 계획서 또는 환경 구성 문서.

## 반증 조건 (Falsification Condition)
1. 新KIATIS 시험평가가 인터넷 기반 환경(舊KIATIS 실제 운용환경)에서 수행되었음을 보여주는 시험 환경 구성 기록.
2. 운용시험평가 계획서(별지 제26호서식)에 "실제 운용환경"으로 인터넷 환경이 명시되었다는 기록.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7. 舊KIATIS의 인터넷 운영은 제1~3층위에서 이미 입증되었고, 新KIATIS의 국방망 시험은 DIDC 클라우드 구축 사실에 의해 확인된다. 훈령 제57조/제58조/제62조의 "실제 운용환경" 요구와 양 시스템의 환경 차이 사이의 괴리는 명확하다. 타당성이 높은 이유는 훈령 원문이 본문기록-제4층위-001에 직접 인용되어 있기 때문이다.

## 미결 사항 (Open Questions)
- <그림 4-2>에서 제시된 개발·운용 시험평가 분리 시 新·舊KIATIS 시험평가 예상 모습의 구체적 내용 확인 필요 (이미지 파일 분석).
- 제2436호의 시험평가 원칙 변경과 이 환경 분리 문제의 구체적 연결 관계 — [[2436ho-test-evaluation-principle-inverted]]와의 교차 분석 필요.

## Spot-check (raw/01 book)

- `Korean/10-3-4-34-제4-층위.md` lines 24–42: §3.4.1.2 원문과 일치. 사이버공간 3개 영역(민간/공공/국방) 구분, 훈령 제57/58/62조 인용, 본문기록-제4층위-001 라벨 모두 확인.
- 기록 제12,069 참조는 footnote 155에서 `기록 제12,069쪽~제13323` 형태로 확인.

## 관련 (Related)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[2436ho-test-evaluation-principle-inverted|훈령 제2436호 시험평가 분리→통합 원칙 변경]] (RELATED)
- [[prosecution-distorts-operational-vs-test-environment|검찰의 운용환경 vs 시험환경 왜곡]] (RELATED)
- [[kiatis-rfp-tech-table-proves-sw-only-internet-structure|KIATIS RFP 기술표 — 순수 SW 인터넷 구조 증명]] (RELATED)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
