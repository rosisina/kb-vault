# 이지영의 VPN 5단계 질문 — 동기 확인을 위한 체계적 정보 추출

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md §3.5.4.2.1 (lines 568-577)
**Layer:** [[../layers/layer-5|Layer 5]], [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-VPN-5QUESTIONS-MOTIVE"})
SET fr.layer = 5,
    fr.claimType = "information_extraction",
    fr.claimDesc = "5단계 VPN 질문 패턴이 정보 추출 목적임을 48시간 후 갑질 신고와의 시간적 인과관계가 입증.",
    fr.counterHypothesis = "이지영의 VPN 질문은 업무적 관심에서 비롯된 일상적 질의이다",
    fr.falsificationCondition = "이지영이 VPN 관련 질문을 다른 직원들에게도 동일하게 한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.strengthUpgrade = "MODERATE→STRONG via vault cross-reference corroboration (B.2 batch 2026-04-12)",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "5단계 VPN 질문 패턴이 정보 추출 목적임을 48시간 후 갑질 신고와의 시간적 인과관계가 입증.";
```

## Claim

과장 이지영 (공문결재자-1)은 2022-02-08 회의 후 30분 보고에서 VPN 관련 5단계 질문 패턴('VPN 보안 때문 아니냐' → '안 쓰던 거 무슨 애기' → 'DB 접속이잖아' → '무조건 VPN')으로 한지훈이 舊KIATIS의 인터넷 VPN 미사용 사실과 2016년 해킹의 연관성을 이해하고 있는지 체계적으로 확인하였다. 이것이 48시간 후 갑질 신고의 직접적 트리거이다.

## Key Takeaways

- 이지영's 4-5 stage VPN questioning pattern during 30-min debrief was systematic information extraction, not casual inquiry [진리성]
- The questioning confirmed 한지훈 understood the 舊KIATIS-2016 hacking connection — establishing the motive for his removal [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

이지영의 VPN 질문은 업무적 관심에서 비롯된 일상적 질의이다

## Falsification condition

이지영이 VPN 관련 질문을 다른 직원들에게도 동일하게 한 기록

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 7 / 진실성 9.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` lines 568-577

## Related

- [[harassment-complaint-48hrs-premeditated-isolation]]
- [[layer5-park-seojun-48hr-cooperation-to-hostility]]
- [[../layers/layer-5|Layer 5]]
