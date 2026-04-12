# 국방부 시험평가 절차 간소화 공문의 시간역전 — 시험평가 당일 생산

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md §3.4.2.3 (lines 163-190)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-EVAL-SIMPLIFICATION-TIMING"})
SET fr.layer = 4,
    fr.claimType = "document_manipulation_timing",
    fr.claimDesc = "국방부 이지영·김수진이 시험평가 시작일인 2019.9.2 13:39:35에 '시험평가 절차 간소화 추진 계획 검토 요청' 공문을 생산·발송(Record 2,853)하였으나, 첨부 추진계획 보고서의 날짜가 2019.9.3(화)로 생산일보다 이후 — 시간역전 현상. 이후 2020.2.13 제2398호에서 제11조 ②항 4호(시험평가 계획·결과 승인)가 삭제되었다",
    fr.counterHypothesis = "추진계획 보고서의 날짜가 하루 뒤인 것은 단순 행정 오류이며, 훈령 개정은 별도의 정책 결정 과정을 거친 정상적 개정이다",
    fr.falsificationCondition = "시험평가 절차 간소화가 新KIATIS와 무관한 전군 차원의 정책이었음을 보여주는 사전 기획 문서의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "공문 생산일(9.2) 이후 날짜(9.3)의 첨부문서는 시간역전 — 2022년에 소급 조작된 가능성 시사. '의견 없으면 동의 간주' 강제동의 조항 포함. 이후 훈령에서 시험평가 승인 조항 삭제 — 국방부의 시험평가 통제 역할 자체를 제거.";
```

## Claim

국방부 소프트웨어융합정책담당관 이지영 (공문결재자-1)과 김수진 (행정담당자-1)이 2019년 9월 2일 13:39:35 — 新KIATIS 개발·운용시험평가 시작 당일 — 에 "정보시스템 구축 시험평가 절차 간소화 추진 계획 검토 요청"을 생산·발송하였다(기록 제2,853쪽).

핵심 내용: 제11조(정보화 사업 관련기관 임무) ②항의 '시험평가 계획·결과 승인 절차 생략'. "의견이 없을 때 추진 계획에 동의하는 것으로 간주"라는 강제적 동의 조항 포함.

**시간역전 현상:** 첨부 추진계획 보고서의 날짜가 '소프트웨어 융합과, '19.9.3(화)'로 공문 생산일(9.2)보다 하루 뒤 — 이는 단순 오류가 아니라 2022년에 소급 조작된 가능성을 시사한다. 국전원 행정정보화과가 온-나라 시스템 유지보수 업체(핸디소프트)의 동조 하에 조작할 수 있는 유일한 곳이라고 판단된다.

이후 2020년 2월 13일 제2398호 훈령 개정에서 제11조 ②항 4호(시험평가 계획·결과 승인) 삭제 — 국방부의 시험평가에 대한 조정·통제 역할 자체가 훈령에서 제거되었다.

## Key Takeaways

- The MND's test-evaluation simplification request was produced on the EXACT day KIATIS evaluation started (2019.9.2) — timing too precise to be coincidental [진리성]
- The attached report is dated 2019.9.3 while the cover letter is dated 2019.9.2 — a "time reversal" anomaly suggesting retroactive fabrication [진리성]
- The "silence = consent" clause forced agreement without active decision — a coercion technique [타당성]
- The subsequent deletion of Article 11 ②(4) from 훈령 제2398호 (2020.2.13) removed MND's statutory test-evaluation oversight role entirely [타당성]

## Supporting evidence

- **Record No. 2,853** — 시험평가 절차 간소화 검토 요청 공문 (2019.9.2.)
- **Record No. 9,003, 9,010** — 국방정보화훈령 용어 정의 (개발시험/운용시험)

## Counter-hypothesis

시험평가 절차 간소화는 전군 차원의 행정 효율화 정책이며, 新KIATIS 시험평가와 시간적으로 겹친 것은 우연이다.

## Falsification condition

절차 간소화가 新KIATIS 이전에 기획·추진되었음을 보여주는 사전 기획 문서.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` lines 164-183

## Related

- [[gukjeonwon-pre-evaluation-team-leader-exclusion]] — L4 팀장 배제
- [[2436ho-cluster-six-anchors]] — 훈령 조작 클러스터
- [[../layers/layer-4|Layer 4]]
