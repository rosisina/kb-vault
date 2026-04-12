# 시험평가 기간 중 핵심인물의 의도적 부재 — 舊KIATIS 담당자와 팀장의 동시 부재

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md §3.4.2.1 (lines 53-116)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DELIBERATE-ABSENCE"})
SET fr.layer = 4,
    fr.claimType = "organizational_manipulation",
    fr.claimDesc = "新KIATIS 개발·운용시험평가 기간(2019.9.2~11)에 舊KIATIS 업무담당자 윤도현은 국방대 교육과 하계휴가로 완전 부재했고, 해당 팀장 송민석도 9.2~6 국방대 교육으로 부재하여, 실제 운영 담당자와 관리자가 동시에 부재한 상황은 우연이 아닌 의도적 설계로 판단된다",
    fr.counterHypothesis = "윤도현과 송민석의 부재는 정상적인 교육 일정과 휴가에 의한 우연의 일치이며, 시험평가 일정과의 연관성은 사후적 해석에 불과하다",
    fr.falsificationCondition = "윤도현과 송민석의 교육/휴가 일정이 시험평가 일정 확정 이전에 이미 결정되어 있었음을 보여주는 교육 신청 기록의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "舊KIATIS 담당자와 해당 팀장이 시험평가 전체 기간에 동시 부재한 사실은 시간적 일치가 너무 정확하여 우연으로 설명하기 어렵다. 윤도현은 본인의 질문에 수첩을 펼치며 침묵한 것으로 보고됨.";
```

## Claim

新KIATIS 개발·운용시험평가 기간(2019.9.2.~11.) 동안 두 명의 핵심인물이 완전히 부재했다:

1. **주무관 윤도현** (舊KIATIS 업무담당자): 시험평가 전체 기간 동안 "국방대 교육과 하계휴가"로 완전 부재. 보안대책 검토 공문(2019.6.13., 기록 제2,276쪽)에서 확인. 한지훈이 이후 윤도현에게 문의했을 때, 윤도현은 수첩을 펼치며 입을 굳게 다물었다.

2. **사무관 송민석** (해당 팀장): 9월 2일~6일까지 국방대 교육 (기록 제1,946쪽). 시험평가 전반부 기간과 정확히 일치.

이 두 인물은 舊KIATIS의 인터넷 운영 사실을 가장 잘 알고 있는 인물들로, 이들의 시험평가 기간 중 부재는 舊KIATIS 관련 질문을 회피하기 위한 의도적 설계로 판단된다.

## Key Takeaways

- The 舊KIATIS operational administrator (윤도현) was completely absent during the entire test evaluation period — timing too precise to be coincidental [진리성]
- The responsible team leader (송민석) was also absent for the first half of evaluation — double absence eliminated anyone who could flag 舊KIATIS internet operation facts [진리성]
- When later questioned, 윤도현 opened a notebook and remained silent — behavior consistent with prior instruction to avoid disclosure [진실성]
- Both absences were arranged through legitimate channels (교육, 휴가) providing plausible deniability [진리성]

## Supporting evidence

- **Record No. 2,276** — 보안대책 검토 (2019.6.13), 윤도현의 시험평가 기간 부재 기록
- **Record No. 1,946** — 송민석의 국방대 교육 기록 (9.2~6)

## Counter-hypothesis

윤도현과 송민석의 부재는 정상적인 교육 일정과 개인 휴가의 우연한 중첩이다. 국방대 교육은 기관이 배정하는 것이며 개인이 시기를 선택할 수 없으므로 의도적 설계가 아닐 수 있다.

## Falsification condition

이 주장은 다음이 제시되면 약화된다:
1. 국방대 교육 일정이 시험평가 일정 확정 이전에 이미 배정되었음을 보여주는 기록
2. 윤도현의 휴가 신청이 시험평가 일정 확정 이전에 제출되었음을 보여주는 기록

## Verdict

**CORROBORATED.** Moderate. 진리성 8 / 타당성 7 / 진실성 8. 시간적 일치는 매우 정확하나, 교육 일정 배정 과정에 대한 추가 확인이 필요하다. 윤도현의 침묵 반응은 방증이지만 결정적 증거는 아니다.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` lines 56-61 — 윤도현/송민석 부재 기술

## Related

- [[gukjeonwon-pre-evaluation-team-leader-exclusion]] — L4 팀장 배제 패턴
- [[../layers/layer-4|Layer 4]]
