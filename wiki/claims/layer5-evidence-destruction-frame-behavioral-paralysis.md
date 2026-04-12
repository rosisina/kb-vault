# 증거인멸 프레임을 통한 행동 봉쇄 — 김민수의 단일 화행으로 달성한 전면 마비

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md §3.5.3.4.7 (lines 457-460)
**Layer:** [[../layers/layer-5|Layer 5]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-EVIDENCE-DESTRUCTION-FRAME"})
SET fr.layer = 5,
    fr.claimType = "witness_manipulation",
    fr.claimSubtype = "speech_act_manipulation",
    fr.claimDesc = "단일 화행으로 정당한 행위를 범죄로 재정의. 열람금지가 사업 종료 후에도 유지된 것은 징벌적 조치.",
    fr.counterHypothesis = "증거인멸 경고는 수사 과정에서 피의자에 대한 정상적 주의 사항이다",
    fr.falsificationCondition = "문서 열람금지가 수사 관련 법적 절차에 따른 정당한 조치였음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "단일 화행으로 정당한 행위를 범죄로 재정의. 열람금지가 사업 종료 후에도 유지된 것은 징벌적 조치.";
```

## Claim

김민수 (핵심 의사결정자-1)는 '증거인멸 조심하라'라는 화행으로 한지훈의 모든 정당한 행위(문서 확인, 동료 연락, 도서 열람)를 범죄 행위로 재정의하여 전면적 행동 마비를 달성하였다. 3명의 문서 접근이 차단되었으며('세명 다 열람금지'), 이는 사업이 이미 종료된 이후에도 유지되었다.

## Key Takeaways

- 김민수's single speech act ('watch out for evidence destruction') redefined ALL legitimate actions as criminal — achieving total behavioral paralysis [진리성]
- Document access for 3 people was blocked even after project completion — proving the restriction was punitive, not investigative [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

증거인멸 경고는 수사 과정에서 피의자에 대한 정상적 주의 사항이다

## Falsification condition

문서 열람금지가 수사 관련 법적 절차에 따른 정당한 조치였음을 보여주는 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 10.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` lines 457-460

## Related

- [[layer5-language-weaponization-silence-as-murder]] (RELATED)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
