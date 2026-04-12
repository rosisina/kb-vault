# 박서준이 시험평가 기간 중 WiSC 학술대회 참석 — 억압 서사와 모순

**Source:** raw/03. Kakao talk data /Korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt line 2735 (lines 2735)
**Layer:** [[../layers/layer-5|Layer 5]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-KKT-WISC"})
SET fr.layer = 5,
    fr.claimType = "behavioral_evidence",
    fr.claimDesc = "KakaoTalk에서 박서준 WiSC 참석 확인. 시험평가 기간과 겹침. 억압 서사와 모순.",
    fr.counterHypothesis = "학술대회 참석은 갑질과 무관하며, 피해자도 정상 업무를 수행할 수 있다",
    fr.falsificationCondition = "한지훈이 박서준의 학술대회 참석을 강제하거나 방해한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 6,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "KakaoTalk에서 박서준 WiSC 참석 확인. 시험평가 기간과 겹침. 억압 서사와 모순.";
```

## Claim

카카오톡 단톡방에서 박서준(박서준)이 2019-09-05~06 WiSC 정보보안 학술대회에 참석한 기록이 확인된다. 이는 新KIATIS 시험평가 기간(2019.9.2~11)과 정확히 겹치며, 검찰의 '박서준이 한지훈의 직장 내 괴롭힘 피해자'라는 서사와 모순 — 박서준은 독립적으로 전문 개발 활동을 추진하고 있었다.

## Key Takeaways

- 박서준 attended WiSC security conference during the exact evaluation period — inconsistent with being harassed/controlled [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

학술대회 참석은 갑질과 무관하며, 피해자도 정상 업무를 수행할 수 있다

## Falsification condition

한지훈이 박서준의 학술대회 참석을 강제하거나 방해한 기록

## Verdict

**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 7 / 타당성 6 / 진실성 8.

## Spot-check

- `vault-converted-korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt` lines 2735

## Related

- [[layer5-park-seojun-48hr-cooperation-to-hostility]]
- [[../layers/layer-5|Layer 5]]
