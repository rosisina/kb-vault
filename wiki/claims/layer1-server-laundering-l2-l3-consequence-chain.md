# 舊KIATIS 서버 세탁(L1)이 L2 사업구조 조작과 L3 제도적 개입을 순차 유발

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/07-3-1-31-제1층위-ActiveX.md §3.1 (lines 10-19), raw/01. book-beyond-cybersecurity/vault-converted-korean/08-3-2-32-제2-층위.md §3.2
**Layer:** [[../layers/layer-1|Layer 1]] (primary), [[../layers/layer-2|Layer 2]] (secondary), [[../layers/layer-3|Layer 3]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-SERVER-LAUNDERING-L2-L3-CHAIN"})
SET fr.layer = 1,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "server_laundering_consequence_chain",
    fr.claimDesc = "舊KIATIS가 '국방 통합 인터넷 메일서버'로 세탁(기록 제1,054/1,120/1,068)된 것이 L2 사업구조 조작(위임사업 허위 분류)과 L3 국전원 제도적 개입(사업관리 이관)을 순차적으로 유발한 3층 인과 체인",
    fr.counterHypothesis = "서버 이관, 사업구조 변경, 국전원 개입은 각각 독립적 행정 결정이며 인과적 연쇄가 아니다",
    fr.falsificationCondition = "세 사건이 각각 독립적으로 결정되었음을 보여주는 별도의 의사결정 문서(인가서, 인사명령, 사업계획 변경 승인서)가 상호 참조 없이 존재",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "L1: 舊KIATIS→메일서버 세탁(기록 제1,054, 2007-2014 DIDC 이전) → L2: 新KIATIS 위임사업 허위 분류(기록 제1,140) → L3: 국전원 사업관리 이관(기록 제1,573/11,107). 세 단계가 시간순으로 연쇄하며 각 단계의 산출물이 다음 단계의 전제조건.";
```

## Claim

舊KIATIS는 2006년 단순 파일 첨부 시스템에서 출발하여(기록 제1,054쪽) 2007년부터 2014년까지 DIDC 1센터로 이전되면서 '국방 통합 인터넷 메일서버'로 서버 세탁되었다(본서 §3.1 line 19). 이 정체성 세탁이 Layer 2에서 新KIATIS를 위임사업으로 허위 분류하는 제도적 근거를 제공했고(기록 제1,140쪽), 허위 분류는 다시 Layer 3에서 국전원으로의 사업관리 이관(기록 제1,573쪽, 제11,107쪽)을 가능하게 했다. 이 3층 인과 체인은 개별적으로는 행정적 결정으로 보이나, 순차적으로 연결하면 2016 해킹 은폐를 위한 구조적 설계가 드러난다.

## Key Takeaways

- L1: Old KIATIS laundered to "Defense Integrated Internet Mail Server" (Record No. 1,054 / 1,120 / 1,068, 2007-2014 DIDC transfer) [진리성]
- L2: New KIATIS falsely classified as delegation project (Record No. 1,140) — only possible because L1 server identity was already laundered [진리성]
- L3: 국전원 project management transfer (Record No. 1,573 / 11,107) — only possible because L2 delegation classification created jurisdictional space [진리성]
- **Three-layer causal chain: each stage's output is the next stage's prerequisite** [타당성]
- Individual stages appear administrative; sequential connection reveals structural design for concealment [진실성]

## Supporting evidence

- **Record No. 1,054** — 舊KIATIS 원본 (2006 단순 파일 첨부 시스템)
- **Record No. 1,120** — 초기 시스템 구성
- **Record No. 1,068** — 사용자 기반 문서
- **Record No. 1,140** — L2 사업계획서 '기관 위임 사업' 명기
- **Record No. 1,573** — L3 사업관리직 특이사항
- **Record No. 11,107** — L3 KIATIS 사업 이관 증거

## Counter-hypothesis

서버 이관, 사업구조 변경, 국전원 개입은 각각 독립적 행정 결정이며 인과적 연쇄가 아니다.

## Falsification condition

세 사건이 각각 독립적으로 결정되었음을 보여주는 별도의 의사결정 문서(인가서, 인사명령, 사업계획 변경 승인서)가 상호 참조 없이 존재.

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 9. 3개 층위의 기록이 시간순 연쇄하며 각 산출물이 다음 전제조건임을 입증.

## Spot-check (raw/01 book)

- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` lines 10-19 — 서버 세탁 원본
- `vault-converted-korean/08-3-2-32-제2-층위.md` lines 11-18 — 위임사업 허위 분류
- `vault-converted-korean/09-3-3-33-제3-층위.md` lines 11, 38 — 국전원 이관

## Related

- [[kiatis-server-laundering-dcia-to-didc1]] (CAUSES)
- [[kiatis-server-laundering-to-integrated-mail-server]] (CAUSES)
- [[layer2-delegation-falsification-triggers-l3-transfer]] (CAUSES)
- [[layer3-park-seong-ho-didc-director-l1-l3-bridge]] (CAUSES)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
- [[../layers/layer-2|Layer 2]] (PART_OF_LAYER)
- [[../layers/layer-3|Layer 3]] (PART_OF_LAYER)
