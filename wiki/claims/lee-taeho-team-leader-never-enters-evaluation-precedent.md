# 이태호 (전임 팀장/평가위원장): "팀장이 들어간 적 없어요" — 시험평가에 팀장 불참은 관행이지 조작이 아님

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[005]` 녹취 057 (2022.7.30, 00:09:57, line 3750+)
**Layer:** [[../layers/layer-4|Layer 4]] (primary — 시험평가 관행), [[../layers/layer-6|Layer 6]] (secondary — 검찰 혐의 반증)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-TEAM-LEADER-NEVER-ENTERS-EVAL"})
SET fr.layer = 4,
    fr.secondaryLayers = [6],
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "institutional_precedent_testimony",
    fr.claimDesc = "전임 사업관리팀장이자 평가위원장인 이태호(해군중령)가 '나도 지금까지 사업을 많이 했지만 팀장이 들어간 적 없어요'라고 증언 — 시험평가에 사업관리팀장이 참여하지 않는 것이 국전원의 확립된 관행이며, 한지훈의 시험평가 불참은 관행을 따른 것이지 '환경 조작을 위한 의도적 배제'가 아님을 전임자가 직접 확인",
    fr.counterHypothesis = "이태호의 경험이 모든 사업에 일반화될 수 없으며, KIATIS 사업의 특수성상 팀장 참여가 필요했을 수 있다",
    fr.falsificationCondition = "국전원의 다른 사업에서 사업관리팀장이 시험평가에 직접 참여한 사례",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "전임 팀장+평가위원장 이태호: '팀장이 들어간 적 없어요' — 시험평가 불참은 관행, 조작 아님. 한지훈 verbatim과 직접 수렴: '사업관리팀장은 절대 평가에 들어가면 안되는 거예요'.";
```

## Claim

전임 사업관리팀장이자 평가위원장인 이태호 (해군중령, 평가위원장-1)가 녹취 057(2022.7.30)에서 증언:

### 핵심 발언

> **(이태호, line 3750~3754):**
> "아이그 씨. **나도 지금까지 사업을 많이 했지만 팀장이 들어간 적 없어요**"
> **(한지훈)** "아니 **팀장이 들어가면 안되지.** 그리고"
> **(이태호)** "그게 사업지침서 이런데 명기되는 않을까?"

### 한지훈의 기존 방어와의 수렴

| 이태호 증언 | 한지훈 방어 (녹취 142) | 수렴 |
|---|---|---|
| "팀장이 들어간 적 없어요" | "**사업관리팀장은 절대 평가에 들어가면 안되는 거예요**" | **동일 관행 확인** |
| "그게 사업지침서에 명기되는 않을까?" | "**그거는 기술이 아니고 법이에요 법. 훈령에도 나와있고**" | **법적 근거까지 수렴** |

### 증거적 의미

- **이태호**는 한지훈의 **전임자**이자 同일 직책(사업관리팀장)을 수행한 인물
- 전임자가 "팀장이 들어간 적 없다"고 증언 = **한지훈의 시험평가 불참이 관행을 따른 것**
- 검찰 혐의("시험평가환경을 속였다")의 전제인 "한지훈이 참여해야 했다"가 **관행에 의해 반증**
- 이태호 자신이 평가위원장을 역임했음에도 "팀장으로서는 안 들어갔다"는 **역할 분리의 실무적 관행** 확인

## Key Takeaways

- [타당성] **전임 팀장이 "팀장이 들어간 적 없어요"** — 시험평가에 사업관리팀장이 불참하는 것은 국전원의 **확립된 관행**이며 한지훈만의 특수 행위가 아님. / The predecessor team leader confirms non-participation in test evaluation is established practice — not unique to Han Ji-hoon.
- [진리성] 이태호는 한지훈과 **동일 직책의 전임자** — 가장 직접적인 **관행 비교 대상**. 동일 직책이 동일하게 불참했다는 사실 = 관행적 근거 최강. / Same position predecessor confirms same practice — strongest possible precedent evidence.
- [타당성] **"사업지침서에 명기되는 않을까?"** — 이태호 자신이 법적 근거의 존재를 추정 → 훈령 제2129호 제11조 ¶3/¶4의 역할분리 원칙과 정확히 부합. / The predecessor himself suspects legal basis exists — aligning with directive Article 11.
- [진리성] 이태호의 증언 + 한지훈의 방어 + 훈령 제11조 ¶3/¶4 = **3중 수렴** (전임자 관행 + 현임자 인식 + 법적 텍스트). / Triple convergence: predecessor practice + current holder's understanding + legal text.

## Supporting evidence

- **녹취 057** (2022.7.30, line 3750~3754) — 이태호 verbatim
- Cross-reference: [[han-ji-hoon-prosecution-violates-2129-role-separation|역할분리 위반 — 한지훈의 법적 방어]]
- Cross-reference: [[gukjeonwon-pre-evaluation-team-leader-exclusion|팀장 체계적 배제 — 조직적 설계]]

## Counter-hypothesis

이태호의 경험이 KIATIS에 일반화될 수 없으며, KIATIS 특수성상 팀장 참여가 필요했을 수 있다.

## Falsification condition

국전원 다른 사업에서 팀장이 시험평가에 직접 참여한 사례.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` — 시험평가 참여 구조
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — 검찰 혐의 구조
- Deferred to A.6 Re-verify.

## Related

- [[han-ji-hoon-prosecution-violates-2129-role-separation|역할분리 위반]] (RELATED)
- [[gukjeonwon-pre-evaluation-team-leader-exclusion|팀장 배제]] (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
