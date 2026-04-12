# GIS 서버 예산의 의도적 미반영 — 전력화 지연의 은폐된 원인

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md §3.6.5.1.2 (lines 715-734)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-GIS-BUDGET-OMISSION"})
SET fr.layer = 6,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "budget_manipulation",
    fr.claimDesc = "新KIATIS의 GIS(지리정보시스템) 서버 기능 추가에 필요한 예산이 의도적으로 미반영되었다. 이 예산 미반영이 전력화 지연의 핵심 원인 중 하나이나, 군검찰단은 이를 개발관리팀장의 '부실개발'로 귀결시켰다. 실제로 한지훈이 이 문제를 발견하여 과장 이지영에게 보고한 것이 허위 갑질 신고의 직접적 계기가 되었다",
    fr.counterHypothesis = "GIS 서버 예산은 원래 사업 범위에 포함되지 않았으며, 추가 예산 미반영은 별도의 행정 판단이다",
    fr.falsificationCondition = "GIS 서버가 원래 사업 범위 외였음을 보여주는 제안요청서 또는 사업계획서",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Records 4,826에서 GIS 서버 예산 분석 확인. 한지훈이 국유단·국전원 실무자·업체와 토의 후 개선방향으로 도출, 이지영에게 보고(Records 11,023~11,032). 이 보고가 갑질 신고의 직접 계기. 9개의 Record No.가 뒷받침.";
```

## Claim

新KIATIS의 GIS(지리정보시스템) 서버 기능 추가에 필요한 예산이 의도적으로 미반영되었다(기록 제4,826쪽). 이 예산 미반영은 전력화 지연의 핵심 원인 중 하나이나, 군검찰단의 수사에서는 이를 개발관리팀장의 "부실개발"로 귀결시키는 데 활용되었다(기록 제4,890쪽, 제4,898쪽, 제4,903쪽).

결정적 사실: 한지훈이 국유단·국전원 실무자·업체와 토의하여 GIS 서버 예산 문제를 개선방향으로 도출한 후 과장 이지영에게 보고한 것(기록 제11,023쪽~제11,032쪽)이 허위 갑질 신고의 **직접적 계기**가 되었다. 즉, 문제를 발견하고 보고한 행위 자체가 보복의 대상이 되었다.

## Key Takeaways

- GIS server budget was intentionally not allocated — a key cause of deployment delay attributed instead to "deficient development" [진리성]
- 한지훈's discovery and reporting of this issue to 이지영 (Records 11,023-11,032) directly triggered the false harassment complaint [진실성]
- The prosecution used deployment delay caused by budget omission as evidence of 한지훈's professional failure [타당성]

## Supporting evidence

- **Record No. 4,826** — GIS 서버 예산 분석
- **Record No. 11,023~11,032** — 한지훈의 이지영 보고 내용
- **Record No. 4,890, 4,898, 4,903** — 피의자신문 (부실개발 프레이밍)

## Counter-hypothesis

GIS 서버가 사업 범위 외였으며 추가 예산 미반영은 별도 행정 판단이다.

## Falsification condition

GIS 서버가 사업 범위 외였음을 보여주는 제안요청서.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 715-734

## Related

- [[layer6-997-reframed-as-deficient-development]] — L6 부실개발 재프레이밍 (RELATED)
- [[mnd-control-agency-role-evasion-deployment-delay]] — L6 전력화 지연 (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
