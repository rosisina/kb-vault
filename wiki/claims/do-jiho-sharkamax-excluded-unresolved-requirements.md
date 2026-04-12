# 유지보수PM 도지호: ChakraMax(샤크라맥스) 시험평가 시 미사용 — "확정이 안됐으니까"

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[010]` 녹취 133-2 (2022.8.2, 00:03:52)
**Layer:** [[../layers/layer-4|Layer 4]] (primary — 시험평가 환경), [[../layers/layer-1|Layer 1]] (secondary — DIDC 인프라)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DOJIHO-SHARKAMAX-EXCLUDED"})
SET fr.layer = 4,
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "technical_witness_admission",
    fr.claimDesc = "유지보수 PM 도지호가 녹취 133-2에서 ChakraMax(DB접근제어 시스템)가 시험평가 기간에 사용되지 않았음을 확인 — '확정이 안됐으니까'. 요구사항 미확정 상태에서 시험평가 진행. DIDC에서 '못 하니까 쓰는 걸로 간 것' — 시험평가 후에야 도입 결정.",
    fr.counterHypothesis = "ChakraMax 미사용은 한지훈의 의도적 회피이며, 요구사항은 이미 확정되어 있었다",
    fr.falsificationCondition = "시험평가 이전에 ChakraMax 사용이 확정된 요구사항 문서 또는 사업관리 계획",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "유지보수 PM 직접 증언: ChakraMax는 요구사항 미확정으로 시험평가 시 미사용. 시험평가 후 DIDC에서 도입 결정. 한지훈 과실 아닌 제도적 미결정.";
```

## Claim

유지보수 PM 도지호 (행정정보체계 43개 체계 담당)가 녹취 133-2 (2022.8.2)에서 ChakraMax(샤크라맥스, DB 접근제어 시스템)가 시험평가 기간에 사용되지 않았음을 직접 확인하였다:

- "논란이 되니까, 그 부분이 수면에 가라앉은 상태에서 시험평가를 했고"
- "그 이후에 결국 디아이디씨에서 못 하니까 쓰는 걸로 간 걸로 알고 있어요"
- "결국은 시험평가 기간에는 샤크라맥스를 안 썼는데" — "확정이 안됐으니까"

이는 ChakraMax 미사용이 한지훈의 의도적 회피가 아니라, 요구사항이 확정되지 않은 상태에서의 제도적 미결정이었음을 보여준다. DIDC 자체가 "못 하니까" 시험평가 이후에야 도입을 결정한 것이다.

## Key Takeaways

- ChakraMax (DB access control) was NOT used during test evaluation — requirements were "not finalized" (확정이 안됐으니까) [진리성]
- DIDC itself couldn't implement ChakraMax, decided to adopt it only AFTER the test evaluation [진리성]
- The omission was institutional (제도적 미결정), not an individual's deliberate evasion [타당성]
- Converges with [[jang-woojin-win10-chakramax-absent-direct-db-access|장우진 Win10→ChakraMax 미지원→DB 다이렉트]] — independent witnesses confirm same fact [진리성]

## Supporting evidence

- 녹취 133-2 (2022.8.2, 00:03:52) — raw/02 `[010]` 도지호 section
- Converges with [[jang-woojin-win10-chakramax-absent-direct-db-access|장우진: Win10 전환으로 ChakraMax 미지원]] — 두 독립 증인이 동일 사실 확인

## Counter-hypothesis

ChakraMax 미사용은 한지훈이 시험평가 환경을 의도적으로 미비하게 구성한 것이며, 요구사항은 사업관리 계획에 명시되어 있었으나 한지훈이 이를 무시하였다.

## Falsification condition

시험평가 이전에 ChakraMax 사용이 확정된 요구사항 문서(사업관리 계획서, 시험평가 계획서 등)가 존재하면 반증. 또는 도지호의 증언이 허위임을 보여주는 반대 증거.

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 7. 유지보수 PM이 직접 확인한 기술적 사실. 장우진(개발 실무자)의 독립 증언과 수렴하여 교차검증됨.

## Spot-check

- raw/02 `[010]` 도지호 녹취 133-2 (2022.8.2)

## Related

- [[jang-woojin-win10-chakramax-absent-direct-db-access|장우진 ChakraMax 미지원]] (CORROBORATES)
- [[kim-cheolhwan-test-vs-operational-vpn-exemption-standard|김철환 센터장 VPN 면제 표준관행]] (CORROBORATES)
- [[deliberate-absence-key-personnel-during-evaluation|시험평가 핵심인력 고의 부재]] (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
