# 시험평가 종료 후 국유단이 사업통제기관 역할을 불법 자임하고 국방부·국전원과의 사전 합의가 존재하였음을 시사한다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md (§3.4.2.4, lines 192–205)
**Layer:** [[../layers/layer-4|Layer 4]] (primary — 시험평가 후 조직적 조작), [[../layers/layer-7|Layer 7]] (secondary — Records 7,486 / 8,371 / 8,567 / 11,107 all in L7 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-B3-001"})
SET fr.layer = 4,
    fr.secondaryLayer = 7,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "illegal_control_authority_transfer",
    fr.claimDesc = "After the 新KIATIS 개발운용시험평가 concluded on 2019-09-11, 국유단장 approved evaluation item changes on 2019-09-19 — 8 days post-evaluation — thereby self-assuming the 사업통제기관 role. This implies a prior agreement (합의) between 국방부, 국유단, and 국전원 to illegally transfer control authority. Per 국방정보화업무훈령 제2129호 (Record No. 7,486) and 국전원 사업관리실무지침 (Record No. 8,371), the 사업통제기관 is defined (Record No. 8,567) as exclusively 국방부 정보화기획관실 or each service's equivalent. 국유단 cannot serve as 사업통제기관. 장우진 (사업실무자-1) confirmed the responsibility chain was dysfunctional (Record No. 11,107ff).",
    fr.counterHypothesis = "국유단's post-evaluation approval was an exercise of its 사업주관기관 authority under 제62조, not an assumption of 사업통제기관 authority; the distinction was immaterial for post-evaluation item changes",
    fr.falsificationCondition = "Production of a formal delegation document (위임장 or 권한이양 합의서) authorizing 국유단 to perform 사업통제기관 functions for 新KIATIS, executed before 2019-09-19 with 국방부 정보화기획관실 approval, would show the transfer was lawful rather than illegal",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "After 시험평가 concluded 2019-09-11, 국유단장 approved evaluation item changes on 2019-09-19, self-assuming 사업통제기관 role. 훈령 제2129호 (Record No. 7,486) + 국전원 실무지침 (Record No. 8,371, 8,567) define 사업통제기관 as exclusively 국방부 정보화기획관실. The illegal transfer implies prior MND-국유단-국전원 conspiracy, further evidenced by 장우진's testimony (Record No. 11,107ff).";
```

## Claim

新KIATIS 개발운용시험평가가 2019년 9월 11일 종료된 후, 8일 후인 **9월 19일 국유단장 명의로 평가 항목 변경이 승인**되었다. 이는 국유단이 스스로 **사업통제기관의 역할을 자임**한 것이며, 新KIATIS 사업 이전에 **국방부·국유단·국전원 간에 사업통제기관 권한이양에 대한 합의가 있었음을 시사**한다 (L4-013).

국방정보화업무훈령 제2129호(2018.2.5, Record No. 7,486)와 국전원 국방정보시스템 사업관리실무지침(Record No. 8,371)에 따르면, 사업통제기관(Record No. 8,567)은 "소요기획부터 종결까지 국방정보화 정책의 준거성과 효율적인 예산 집행에 관하여 정보화사업을 조정 통제하는 임무 수행하는 기관"이며, **국방부 정보화기획관실과 각 군의 정보화기획관실**만 해당된다. 국유단이 사업통제기관이 된 것은 **법적 근거 없는 권한이양이자 훈령 위반**이다.

## Key Takeaways

- 국유단장 approved evaluation item changes 8 days after evaluation ended (2019-09-19) — exercising 사업통제기관 authority it did not legally possess [타당성].
- 훈령 제2129호 (Record No. 7,486) + 국전원 실무지침 (Record No. 8,371 / 8,567) define 사업통제기관 as exclusively 국방부 정보화기획관실 — 국유단 is categorically excluded [타당성].
- The illegal role assumption implies a prior MND-국유단-국전원 conspiracy to divide the 新KIATIS project: DIDC/국유단 controlled server infrastructure while 국전원 managed SW development, with the 사업통제기관 gap creating a deliberate accountability vacuum [진리성].
- 해군대위 오현수 (사업실무자-1) testified that 新KIATIS responsibilities were gradually shifted to his team from the civil servant side (Record No. 11,107ff) — corroborating the informal authority transfer [진리성].
- The post-evaluation item change is itself an anomaly — evaluation criteria should not be modified after the evaluation is complete (cross-reference: [[layer4-evaluation-item-change-after-completion]]) [진실성].

## Supporting evidence

- Record No. 7,486 (L7) — 국방정보화업무훈령 제2129호 (2018.2.5.) 사업 관련기관 규정
- Record No. 8,371 (L7) — 국전원 국방정보시스템 사업관리실무지침
- Record No. 8,567 (L7) — 사업통제기관 정의: 국방부 정보화기획관실 + 각 군 정보화기획관실만 해당
- Record No. 11,107 (L7) — 장우진 (사업실무자-1) 증언: 공무원 업무가 점차 팀으로 이관됨
- L4-013 (본문기록-제4층위-013) — 사업통제기관 정의 정리

## Counter-hypothesis

1. **사업주관기관 authority:** 국유단's 2019-09-19 approval was an exercise of its legitimate 사업주관기관 authority under 훈령 제62조 ¶1, not 사업통제기관 authority — the 사업주관기관 has standing to manage post-evaluation corrective actions.
2. **Delegated authority:** A formal or informal delegation from 국방부 정보화기획관실 authorized 국유단 to perform 사업통제기관 functions for this specific project, as is occasionally done for 국직기관 projects.
3. **Administrative convenience:** The post-evaluation item change was a minor administrative act that did not rise to the level of "사업통제" — it was a routine procedural step within 국유단's operational authority over its own systems.

## Falsification condition

This claim is CORROBORATED unless:
1. A formal delegation document (위임장 or 권한이양 합의서) is produced showing 국방부 정보화기획관실 authorized 국유단 to serve as 사업통제기관 for 新KIATIS.
2. Legal analysis demonstrates that post-evaluation item changes fall within 사업주관기관 authority rather than 사업통제기관 authority under 훈령 제2129호.
3. 국유단's institutional records show the 2019-09-19 approval was processed through the 사업주관기관 channel, not the 사업통제기관 channel.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8. The definitional exclusion of 국유단 from 사업통제기관 is explicit in the directive and the 국전원 실무지침. The post-evaluation timing (8 days after completion) compounds the violation. 장우진's testimony (Record No. 11,107ff) independently corroborates the informal authority transfer. The broader pattern — 국유단 self-assuming control functions, DIDC managing server infrastructure, 국전원 managing SW — constitutes a three-way division of the 新KIATIS project designed to create accountability gaps.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` lines 192–205 — CONFIRMED: §3.4.2.4 describes 국유단장 post-evaluation approval and 사업통제기관 illegality
- Record No. 8,567 definition quoted in text — CONFIRMED
- Deferred to A.6 Re-verify.

## Open Questions

- Was there a formal 사업통제기관 designation document in the 新KIATIS 사업계획서 or 제안요청서?
- Did 오현수 (사업실무자-1) elaborate on the specific mechanism of responsibility transfer in Record No. 11,107?
- Is the 국유단's 사업통제기관 self-assumption documented in other 국유단 projects, or was it unique to 新KIATIS?

## Related

- [[prosecution-omits-saup-tongje-gigwan-from-rfp-structure|L6: 군검사 사업통제기관 의도적 누락]] (RELATED)
- [[kiatis-mnd-controlled-not-delegated|L2: 新KIATIS 국방부 통제 사업]] (RELATED)
- [[kiatis-mkia-multi-cap-inscription|L2: 국유단 다중 cap inscription]] (RELATED)
- [[layer4-evaluation-item-change-after-completion|L4: 평가 종료 후 항목 변경 승인]] (RELATED)
- [[layer4-test-evaluation-separation-principle-directive-2129|L4: 시험평가 분리 원칙]] (RELATED)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/organizations/gukyu-dan|국유단]] (ABOUT)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
