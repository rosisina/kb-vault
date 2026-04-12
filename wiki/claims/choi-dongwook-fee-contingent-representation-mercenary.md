# 최동욱 변호사: "입금해야 선임계를 낼 수 있다" — 수임료 조건부 대리 + 성과 보수 구조

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[016]` 녹취 183 (녹취 아, 2022.8.4, 00:05:40, line 8530+)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-5|Layer 5]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-LAWYER-FEE-CONTINGENT"})
SET fr.layer = 6,
    fr.secondaryLayers = [5],
    fr.claimType = "attorney_misconduct",
    fr.claimSubtype = "attorney_fiduciary_breach",
    fr.claimDesc = "최동욱이 '송금은 입금해야 내가 대한변협에다가 신고를 하고 위임장을 선임계를 검찰단에 내고 그래야 내가 말할 수 있는 자격이 돼요'라고 수임료 입금을 선임계 제출의 전제조건으로 설정. 수임료 구조: 검찰단계 880만원, 불기소 시 550만원까지만. 2천만원+ 수임료를 받으면서 기술적 방어 노력 0 = 수임료에 상응하는 성실 의무 불이행",
    fr.counterHypothesis = "수임료 선입금은 변호사 업계의 일반적 관행이며, 선임계 제출 전 입금 요구는 법적으로 정상이다",
    fr.falsificationCondition = "최동욱이 수임료 입금과 무관하게 한지훈의 방어를 위한 실질적 법률 활동을 수행한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "'입금해야 선임계' + 880/550 수임료 구조 + 2천만원 받고 기술 방어 0 = 용병적 관계.";
```

## Claim

최동욱 변호사는 수임료 입금을 **선임계 제출의 전제조건**으로 설정하고, 성과 보수 구조(검찰단계 880만원 / 불기소 시 550만원)를 제시하였다.

### 핵심 발언

> **(최동욱, 녹취 아 line 8537~8542):**
> "내가 명확하게 하는 것은 좋은데, 지금 집사님이 바쁘고 그러니까 일단은 우리한테 **송금은 입금해야** 내가 대한변협에다가 신고를 하고 **위임장을 선임계를 검찰단에 내고 그래야 내가 말할 수 있는 자격이 돼요**... **검찰단계 팔백 팔십이 되는 거예요, 불기소하면 오백 오십**을 받은 것까지만 하고"

## Key Takeaways

- [진리성] 수임료 입금을 선임계 제출의 전제조건으로 설정 — 피의자가 압수수색을 받은 긴급 상황에서 **돈이 먼저**. / Fee payment as prerequisite for filing representation — money before defense in an emergency.
- [타당성] 2천만원+ 수임료를 받으면서 기술적 방어 노력 0 (KIATIS 발음 불가, DT/OT 구분 미이해, 훈령 미검토) = **수임료에 상응하는 성실 의무 불이행**. / 20M+ KRW fees with zero technical defense effort = fiduciary duty breach.
- [진실성] 수임료 구조(880/550)는 **불기소가 변호사에게 유리한 구조** — 기소유예(=불기소의 일종)가 나오면 550만원만 지급 → 변호사의 경제적 인센티브가 **무혐의보다 기소유예에** 정렬. / Fee structure incentivizes deferred prosecution over acquittal.

## Supporting evidence

- **녹취 183** (녹취 아, 2022.8.4, line 8530~8558)
- Cross-reference: [[choi-dongwook-technical-ignorance-despite-months|기술적 무지에도 2천만원+]]

## Counter-hypothesis

수임료 선입금은 변호사 업계의 일반적 관행이다.

## Falsification condition

최동욱이 수임료와 무관하게 실질적 법률 활동을 수행한 기록.

## Verdict

**CORROBORATED.** Moderate. 진리성 8 / 타당성 7 / 진실성 9.

## Spot-check (raw/01 book)

- `vault-converted-korean/11-3-5-35-제-5층위.md` — §3.5.2.3.7
- Deferred to A.6 Re-verify.

## Related

- [[choi-dongwook-technical-ignorance-despite-months|기술적 무지]] (CORROBORATES)
- [[layer5-choi-dongwook-dual-role-lawyer-or-conspirator|이중 대리]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
