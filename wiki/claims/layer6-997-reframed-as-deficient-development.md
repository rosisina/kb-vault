# 99.73점 성공작의 '부실개발' 재프레이밍 — 사기수사의 핵심 서사 조작

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md §3.6.3.3.5 (lines 245-290)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-997-REFRAMED-DEFICIENT"})
SET fr.layer = 6,
    fr.claimType = "narrative_manipulation",
    fr.claimDesc = "군검찰단은 평가위원회에서 99.73점 '군사용 적합' 판정을 받은 新KIATIS를 '부실개발'로 재프레이밍하였다. 이 재프레이밍은 (1) 80건 추가 요구사항(사후 부과)을 원래 요구사항으로 취급, (2) 전력화 지연(국유단·DIDC 책임)을 개발 부실로 귀결, (3) GIS 서버 미반영 예산(국방부 책임)을 개발자 과실로 전환하는 세 겹의 서사 조작으로 구성된다",
    fr.counterHypothesis = "99.73점은 시험평가 환경의 하자로 인한 왜곡된 점수이며, 실제 개발 품질은 점수와 다르다",
    fr.falsificationCondition = "시험평가 환경의 구체적 하자가 점수에 영향을 미쳤음을 보여주는 기술적 분석",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "99.73점은 18인 평가위원회의 공식 판정. 불기소 이유서 자체에서도 '기능 대부분 충족'을 인정(10페이지). 80건 추가 요구는 사후 부과. 전력화 지연은 DIDC의 VPN OTP 미제공 + 국유단의 데이터 미이관이 원인.";
```

## Claim

군검찰단은 99.73점 '군사용 적합' 판정을 받은 新KIATIS를 '부실개발'로 재프레이밍하였다. 이 재프레이밍은 세 겹의 서사 조작으로 구성된다:

1. **80건 추가 요구사항의 기원 조작:** 시험평가 기간 중 사후 부과된 80건을 원래 계약 요구사항인 양 취급하여 "미충족" 프레이밍
2. **전력화 지연의 책임 전가:** 실제 원인은 DIDC의 VPN OTP 미제공(1.5년), 국유단의 데이터 미이관, GIS 서버 예산 미반영(국방부 책임)이나, 이를 모두 개발관리팀장의 "부실개발"로 귀결
3. **GIS 서버 예산의 은폐:** 국방부·국유단이 GIS 서버 예산을 반영하지 않은 것이 성능 문제의 근본 원인이나, 이를 개발자 과실로 전환

불기소 이유서 자체에서도 "KIATIS는 개발·운용시험평가에서 99.73점을 받은 바 있어 제안요구서에서 요구한 기능들을 대부분 충족하는 것으로 보이고"(10페이지)라고 인정하여, 자기 모순이 발생한다.

## Key Takeaways

- The prosecution reframed a 99.73-point success as "deficient development" through triple narrative manipulation [진리성]
- 80 additional requirements were post-evaluation impositions, not original contract requirements [타당성]
- Deployment delay was caused by DIDC (VPN OTP withholding) and 국유단 (data non-migration), not development quality [진리성]
- The non-prosecution report itself acknowledges "most functions were met" — contradicting its own "deficient development" narrative [진리성]

## Supporting evidence

- **§3.6.3.3.5 전체** — 부실개발 재프레이밍 분석

## Counter-hypothesis

99.73점은 하자있는 시험환경에서의 왜곡된 점수이며 실제 품질과 다르다.

## Falsification condition

시험평가 환경 하자가 점수에 영향을 미쳤음을 보여주는 기술적 분석.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 245-290

## Related

- [[prosecution-non-prosecution-internal-contradiction]] — L6 불기소 모순
- [[80-items-violate-national-contract-law]] — L4 80건 국가계약법 위반
- [[../layers/layer-6|Layer 6]]
