# DIDC 부대예규 제12호 제21-23조: 침해사고 현장보존·합동분석팀·탐지대응조치 기록 의무

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/01.(Korean) DIDC_사이버방호_예규.md 제21조①, 제22조①③, 제23조④ (lines 384-425)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-SCENE-PRESERVATION"})
SET fr.layer = 1,
    fr.claimType = "procedural_duty_mandatory",
    fr.claimDesc = "제21-23조: 현장보존+합동분석팀+탐지대응기록 3중 의무. 2016 사건에서 이 기록들이 존재해야 함.",
    fr.counterHypothesis = "2016 사건이 사이버작전사령부에 의해 처리되어 DIDC 자체 침해대응 절차가 적용되지 않았다",
    fr.falsificationCondition = "2016 현장보존 기록, 합동분석팀 구성·운영 기록, 탐지·대응·조치 기록일지의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "제21-23조: 현장보존+합동분석팀+탐지대응기록 3중 의무. 2016 사건에서 이 기록들이 존재해야 함.";
```

## Claim

DIDC 부대예규 제12호 제21조①은 불법접근·해킹 흔적 발견 시 전산망 차단을 포함한 현장보존 의무를 규정. 제22조③은 정보보호과+자원관리과 합동분석팀 편성과 각 부서의 자료 협조 의무를 규정. 제23조④는 '침해사고의 탐지·대응·조치 내용을 기록하고 관리하여야 한다'고 명시. 2016 해킹 사건에서 이 세 조항에 따른 현장보존 조치, 합동분석팀 기록, 탐지·대응·조치 기록이 존재해야 한다.

## Key Takeaways

- 제21조① creates dual duties: immediate reporting AND scene preservation via network disconnection [타당성]
- 제22조③ mandates joint analysis team with material cooperation from all departments [타당성]
- 제23조④ is the most explicit evidence-preservation duty in the entire SOP [타당성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

2016 사건이 사이버작전사령부에 의해 처리되어 DIDC 자체 침해대응 절차가 적용되지 않았다

## Falsification condition

2016 현장보존 기록, 합동분석팀 구성·운영 기록, 탐지·대응·조치 기록일지의 제시

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 10 / 진실성 8.

## Spot-check

- `vault-converted-korean/01.(Korean) DIDC_사이버방호_예규.md` lines 384-425

## Related

- [[didc-sops-cover-2016-hacking-period]]
- [[didc-sop-incident-report-mandatory]]
- [[../layers/layer-1|Layer 1]]
