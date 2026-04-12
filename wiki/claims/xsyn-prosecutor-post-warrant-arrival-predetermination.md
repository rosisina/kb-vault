# 기소결정 검사가 영장 발부 후 부임 — 결정권자가 수사 참여 안 한 구조적 예정

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취011-나 (lines 6078-6088)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-7|Layer 7]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-XSYN-POST-WARRANT-ARRIVAL"})
SET fr.layer = 6,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "cross_source_synthesis",
    fr.claimDesc = "결정 검사 영장 후 부임+단장 결재 구조 = 구조적 예정. 녹취+영장+책 3소스 삼각확인.",
    fr.counterHypothesis = "인사이동은 일상적이며 후임 검사의 독립적 기록 검토가 자율적 결정을 보장한다",
    fr.falsificationCondition = "임형규가 전임 검사와 다른 독립적 증인 조사나 증거 검토를 수행한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "결정 검사 영장 후 부임+단장 결재 구조 = 구조적 예정. 녹취+영장+책 3소스 삼각확인.";
```

## Claim

군검사 임형규는 녹취(raw/02)에서 '저는 8월 인사이동해서 인수인계 받아서 하는 입장'이라고 진술. 영장(raw/05)은 2022.7.18 이미 발부. 불기소 결정(2022.10.7)의 결정 검사가 영장 발부 당시 사건에 관여하지 않았다. '단장님한테 다 결재를 받습니다'와 결합하면 실질적 결정권은 군검찰단장에게 있고 담당 검사는 인수인계된 결론을 집행하는 구조.

## Key Takeaways

- Deciding prosecutor arrived AFTER the warrant was issued — did not investigate the case he decided [진리성]
- 'Everything needs the chief's approval' reveals actual decision authority is the prosecution chief [진리성]

## Supporting evidence

- **Record No. 11,202**
- **Record No. 4,854**

## Counter-hypothesis

인사이동은 일상적이며 후임 검사의 독립적 기록 검토가 자율적 결정을 보장한다

## Falsification condition

임형규가 전임 검사와 다른 독립적 증인 조사나 증거 검토를 수행한 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 9.

## Spot-check

- `vault-converted-korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 6078-6088

## Related

- [[prosecution-knew-innocence-continued-case]] (RELATED)
- [[prosecution-chief-evades-innocence-plea]] (CAUSES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
