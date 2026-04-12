# 신고자 진술의 3단 변화 — 박서준→국전원→다시 박서준

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md §3.5.3.2.1 (lines 335-392)
**Layer:** [[../layers/layer-5|Layer 5]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-REPORTER-3STAGE-SHIFT"})
SET fr.layer = 5,
    fr.claimType = "witness_manipulation",
    fr.claimDesc = "갑질 신고의 명목상 신고자 박서준의 진술이 3단계로 변화하였다: 1단계 '박서준이 신고'→2단계 '국전원이 신고'→3단계 '다시 박서준이 신고'. 이 변화는 국전원(김민수·이지영·김수진)이 갑질 신고를 기획·조작한 후, 책임 주체를 개인과 기관 사이에서 전환하며 추적을 회피한 증거이다. 최영수의 독립적 진술이 박서준이 진짜 신고자가 아님을 확인한다",
    fr.counterHypothesis = "진술 변화는 기억의 불확실성이나 조사 과정의 혼선에 의한 것이며, 조작의 증거가 아니다",
    fr.falsificationCondition = "박서준이 자발적으로 갑질 신고를 결심한 과정을 보여주는 독립적 기록(메시지, 일기 등)",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "3단 변화 패턴이 8개 Record No.에서 확인. 최영수(제3자)가 독립적으로 '진짜 신고자가 아니다' 확인. 김민수의 '1년 전체가 힘들었다' 허위 서사는 2.8일 정상 협력과 모순.";
```

## Claim

갑질 신고에서 박서준 (갑질신고자-1)의 진술이 3단계로 변화한다:

1. **1단계:** "박서준이 (자발적으로) 갑질을 신고했다" — 초기 서사
2. **2단계:** "국전원(기관)이 신고한 것이다" — 책임 주체가 기관으로 전환
3. **3단계:** "다시 박서준이 신고한 것이다" — 기관 책임 회피 후 다시 개인으로 환원

이 3단 변화는 갑질 신고가 박서준의 자발적 행위가 아니라 김민수·이지영·김수진에 의해 기획·각색된 것임을 보여준다. 최영수 (최종승인자-1)의 독립적 제3자 진술에서 "박서준이 진짜 신고자가 아니다"고 확인되었다.

또한 김민수 (핵심 의사결정자-1)의 "1년 전체가 힘들었다"는 허위 서사는 2022.2.8일까지의 박서준과 한지훈의 정상적 협력 관계, 그리고 김동욱의 박서준에 대한 기존 정신건강 문제 증언과 모순된다.

## Key Takeaways

- The 3-stage shift in the complainant narrative (박서준→국전원→박서준) reveals the complaint was orchestrated, not spontaneous [진리성]
- 최영수's independent testimony confirms 박서준 was not the real complainant [진리성]
- 김민수's "1 year of hardship" narrative is contradicted by 박서준's normal cooperation on Feb 8 [진리성]

## Supporting evidence

- **§3.5.3.2.1 전체** — 8개 Record No.에서 3단 변화 추적

## Counter-hypothesis

진술 변화는 기억의 불확실성이나 조사 과정 혼선에 의한 것이다.

## Falsification condition

박서준의 자발적 갑질 신고 결심을 보여주는 독립적 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 9.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` lines 335-392

## Related

- [[layer5-park-seojun-48hr-cooperation-to-hostility]] — L5 박서준 48시간 변화
- [[../layers/layer-5|Layer 5]]
