# 이태호: "기억이 난다 치더라도 증언을 안 할 거니까 안 난다고 얘기하는거지" — 선택적 기억상실 전략의 메타 인식

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[005]` 녹취 060 (2022.7.30, 00:24:50, line 4069+)
**Layer:** [[../layers/layer-6|Layer 6]] (primary — 증인 통제/은폐 전략), [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-SELECTIVE-AMNESIA-META"})
SET fr.layer = 6,
    fr.secondaryLayers = [4],
    fr.claimType = "witness_manipulation",
    fr.claimSubtype = "witness_suppression_strategy",
    fr.claimDesc = "이태호가 오현수의 '기억이 안 난다' 진술에 대해 '선택적으로 기억을 안 하는 거예요' + '기억이 난다 치더라도 증언을 안 할 거니까 안 난다고 얘기하는거지'라고 분석 — 관련자들이 의도적으로 기억상실을 주장하는 전략을 전임 팀장이 직접 메타 인식하고 명명. 이는 개인의 자연적 기억 감소가 아닌 조직적 증언 회피 전략의 증거",
    fr.counterHypothesis = "4년 전 사건에 대한 기억 감소는 자연스러운 현상이며, 이태호의 분석은 추측에 불과하다",
    fr.falsificationCondition = "오현수 등 관련자가 기억나는 내용을 성실하게 증언한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "'기억이 난다 치더라도 안 난다고 얘기하는거지' — 조직적 기억상실 전략을 전임 팀장이 메타 수준에서 명명. 개인 기억 감소가 아닌 의도적 증언 회피.";
```

## Claim

이태호가 녹취 060(2022.7.30)에서 오현수의 "기억이 안 난다" 진술에 대해 **선택적 기억상실의 의도성**을 직접 분석:

### 핵심 발언

> **(이태호, line 4069~4076):**
> "지가 기억을 안 하는 거예요" → "**(선택적으로 기억을 안 하는 거예요)**" → "**기억이 난다 치더라도 증언을 안 할 거니까 안 난다고 애기하는거지**"

### 증거적 의미

이 발언은 **메타 수준**의 증거이다 — 개별 증인의 "기억 안 남" 진술이 자연적 기억 감소가 아닌 **의도적 전략**임을 같은 조직 출신의 전임자가 명명한 것.

이 패턴은 다수 인물에서 반복:
- **오현수**: "기억이 안 남"
- **이태호 자신**: "기억이 가물가물해요" (선택적으로 사용)
- **이지영**: "기억나지 않는다" (출퇴근 관련)
- **황만수**: "진짜 모른다" (수사 인지 관련)

## Key Takeaways

- [진리성] **"기억이 난다 치더라도 안 난다고 얘기하는거지"** — 조직적 기억상실 전략을 전임 팀장이 **메타 수준에서 명명**. 이것은 추측이 아닌 동일 조직에서 근무한 **내부자의 행동 패턴 인식**. / A predecessor from the same organization meta-names the selective amnesia strategy — insider behavioral pattern recognition.
- [타당성] 다수 증인의 "기억 안 남" 진술이 **공통 패턴**으로 나타남 — 자연적 기억 감소라면 기억나는 부분과 안 나는 부분이 불규칙해야 하나, **구조적으로 불리한 내용만 기억 안 남** = 선택적 전략. / Multiple witnesses showing "no memory" only on structurally unfavorable points = selective, not natural.
- [진실성] 이태호 자신도 "기억이 가물가물해요"를 반복 사용 — 자기 자신의 전략을 인식하면서도 사용하는 **이중성의 자인**. / 이태호 himself uses "memory is hazy" while recognizing it as a strategy — acknowledging the duality.

## Supporting evidence

- **녹취 060** (2022.7.30, line 4069~4076)
- **기억상실 패턴 사례**: 오현수, 이태호, 이지영, 황만수
- Cross-reference: [[didc-commander-hwang-prior-knowledge-lie|황만수 거짓말 — 기억상실 위장]]
- Cross-reference: [[layer5-kakaotalk-silence-proves-normal-attendance|이지영 "기억나지 않는다"]]

## Counter-hypothesis

4년 전 사건에 대한 기억 감소는 자연스러운 현상이다.

## Falsification condition

관련자가 기억나는 내용을 성실하게 증언한 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 9.

## Spot-check (raw/01 book)

- `vault-converted-korean/12-3-6-36-제6층위-군.md` — 증인 통제 구조
- Deferred to A.6 Re-verify.

## Related

- [[didc-commander-hwang-prior-knowledge-lie|황만수 거짓말]] (RELATED)
- [[layer5-kakaotalk-silence-proves-normal-attendance|이지영 기억 안 남]] (RELATED)
- [[layer5-collective-witness-abandonment-selective-memory|증인 집단적 기억상실]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
