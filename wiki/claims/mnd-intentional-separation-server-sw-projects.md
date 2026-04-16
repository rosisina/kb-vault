---
lang: ko
title-ko: 국방부의 新KIATIS 서버구축·SW개발 사업 의도적 분리 — 舊KIATIS 은폐 설계
title-en: 국방부의 新KIATIS 서버구축·SW개발 사업 의도적 분리 — 舊KIATIS 은폐 설계
aliases:
  - FR-L4-INTENTIONAL-PROJECT-SPLIT
  - 국방부의 新KIATIS 서버구축·SW개발 사업 의도적 분리 — 舊KIATIS 은폐 설계

layer: 4
secondary-layers: [1]
claimType: conspiracy_structure
claimSubtype: organizational_manipulation
fracture-type: null
source-type: book

verdict: CORROBORATED
strength: MODERATE
truthfulness: 8
validity: 8
sincerity: 8
analysisDate: 2026-04-11

record-nos: [3318, 4890]
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - DIDC
  - 국전원
  - MND
has-verbatim: false

tags:
  - layer/L4
  - layer/L1
  - verdict/corroborated
  - strength/moderate
  - type/conspiracy-structure
  - source/book
  - person/한지훈
  - org/DIDC
  - org/국전원
  - org/MND
  - has/record-nos
  - cross-layer
---
# 국방부의 新KIATIS 서버구축·SW개발 사업 의도적 분리 — 舊KIATIS 은폐 설계

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.2.2 (lines 118-161)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-INTENTIONAL-PROJECT-SPLIT"})
SET fr.layer = 4,
    fr.claimType = "conspiracy_structure",
    fr.claimSubtype = "organizational_manipulation",
    fr.claimDesc = "국방부는 新KIATIS를 서버구축사업(DIDC1센터)과 SW개발사업(국전원)으로 의도적으로 분리하여 추진했다. 통합 추진 시 개발관리팀장이 舊KIATIS의 인터넷 운용 사실을 발견할 수 있고, DIDC 자체의 보안 과오가 드러나기 때문이다. 규격 심의에서 舊KIATIS 데이터·SW의 新KIATIS 서버 이전을 완전 차단한 것도 같은 맥락이다",
    fr.counterHypothesis = "사업 분리는 클라우드 전환 정책에 따른 표준적 사업 추진 방식이며, 은폐 목적과 무관한 행정 효율성 판단이었다",
    fr.falsificationCondition = "동일 시기 다른 국방정보화사업에서도 서버구축과 SW개발을 동일하게 분리 추진한 사례가 다수 존재함을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "서버구축은 DIDC+행정운영팀 주도로 2018.4 규격심의 완료(Record 3,318~3,324). SW개발은 국전원 주관 별개 사업. 규격 재심의에서 舊KIATIS 데이터·SW 이전을 완전 차단. 이 분리가 舊KIATIS 인터넷 운영의 은폐 효과를 갖는다는 판단은 합리적.";
```

## 주장 (Claim)

### 한국어

국방부는 新KIATIS를 서버구축사업(DIDC1센터, 클라우드)과 소프트웨어 개발사업(국전원)으로 의도적으로 분리하여 별개 사업으로 추진했다. 서버구축은 DIDC1센터, 행정정보화과 행정운영팀 주도로 2018년 4월 사전 규격심의를 완료했다(기록 제3,318쪽~제3,324쪽).

이 분리의 은폐 효과:
1. SW개발 팀장(한지훈)이 서버구축 과정에 참여하지 못하므로 舊KIATIS의 인터넷 운영 구조를 발견할 기회 차단
2. DIDC가 서버구축 시 舊KIATIS의 VPN 미적용·보안취약 구조에 대한 자체 과오 은폐
3. 규격 재심의에서 舊KIATIS 응용프로그램·SW·데이터의 新KIATIS 서버 이전을 완전 차단(기록 제3,324쪽)

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- MND intentionally separated 新KIATIS into server construction (DIDC) and SW development (국전원) — preventing the development team leader from discovering 舊KIATIS's internet operation during server work [진리성]
- The specification re-review completely blocked transfer of 舊KIATIS data/SW to new servers — isolating the old system's traces from the new project [진리성]
- DIDC and the defense informatization cartel had mutual interest in concealing their security violations under 국방사이버안보훈령 [진실성]
- The separation created a situation where responsibility could be shifted to the SW team leader alone, while server-side issues remained hidden [타당성]

## 지지 증거 (Supporting Evidence)
- **Record No. 3,318~3,324** — 新KIATIS 서버구축 규격심의 공문 (2018.4)
- **Record No. 4,890~4,897** — 舊KIATIS 실제 운영환경 (인터넷, 훈령 위반)

## 반대 가설 (Counter-hypothesis)
사업 분리는 국방부 클라우드 전환 정책의 일환으로, 서버 인프라와 응용SW를 분리 조달하는 것은 표준적 관행이다.

## 반증 조건 (Falsification Condition)
동일 시기 유사 규모의 국방정보화사업에서 서버구축과 SW개발을 동일하게 분리한 사례 제시.

## 평결 (Verdict)
**CORROBORATED.** Moderate. 진리성 8 / 타당성 8 / 진실성 8. 사업 분리 자체는 행정적으로 가능하나, 규격 재심의에서 데이터 이전을 완전 차단한 점은 은폐 의도를 강하게 시사.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 135-139 — 사업 분리 및 규격심의

## 관련 (Related)
- [[didc-falsely-records-old-kiatis-as-vpn-user]] — L4 DIDC VPN 허위기재 (OPPOSES)
- [[gukjeonwon-pre-evaluation-team-leader-exclusion]] — L4 팀장 배제 (CORROBORATES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
