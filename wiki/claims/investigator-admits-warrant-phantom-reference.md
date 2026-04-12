# 수사관이 영장 내 존재하지 않는 '위1.나항' 참조를 인정 — '기재할 필요 없어서 안 했다'

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취151-152 (lines 6371-6802)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-7|Layer 7]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-WARRANT-PHANTOM-REFERENCE"})
SET fr.layer = 6,
    fr.claimType = "procedural_defect",
    fr.claimDesc = "수사관 인정: 영장 내 유령 참조(phantom reference). 수사개시통보서의 비정상적 전달 경로.",
    fr.counterHypothesis = "참조 누락은 경미한 행정적 오류이며 피의자 방어권에 실질적 영향 없다",
    fr.falsificationCondition = "'위 1.나항' 내용이 피의자에게 미제공된 영장 원본에 존재하는 경우 비공개가 문제, 어디에도 없는 경우 영장 자체의 결함",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "수사관 인정: 영장 내 유령 참조(phantom reference). 수사개시통보서의 비정상적 전달 경로.";
```

## Claim

수사관 진상호가 2022-08-31 통화에서, 영장의 '가. 위계공무집행방해' 항이 '위 1.나항에 기재된'을 참조하나 해당 '위 1.나항'이 영장에 존재하지 않음을 인정. '기재를 굳이 할 필요가 없어서 하지 않았습니다'라고 진술. 또한 수사개시통보서는 지휘관(김민수)에게만 전달하도록 법령 규정되어 있으나, 김민수가 한지훈에게 직접 전달하면서 '니가 다 책임져라'고 통보한 사실이 확인됨.

## Key Takeaways

- Investigator admits warrant references non-existent 'Section 1.Na' — structural defect in charging document [타당성]
- 'Not necessary to include' — suspected facts presented incompletely to suspect [타당성]
- Investigation notice legally for commander only, but 김민수 delivered it to 한지훈 with 'you take all responsibility' [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

참조 누락은 경미한 행정적 오류이며 피의자 방어권에 실질적 영향 없다

## Falsification condition

'위 1.나항' 내용이 피의자에게 미제공된 영장 원본에 존재하는 경우 비공개가 문제, 어디에도 없는 경우 영장 자체의 결함

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 8.

## Spot-check

- `vault-converted-korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 6371-6802

## Related

- [[warrant-omits-15yr-vpn-bypass-from-probable-cause]]
- [[warrant-vs-non-prosecution-document-truth-reversal]]
- [[../layers/layer-6|Layer 6]]
