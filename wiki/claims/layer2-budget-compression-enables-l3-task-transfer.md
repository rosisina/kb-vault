# 新KIATIS 6.25억 예산 압축이 Layer 3 강제 업무 이관을 구조적으로 유발

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/08-3-2-32-제2-층위.md §3.2 (line 73)
**Layer:** [[../layers/layer-2|Layer 2]] (primary), [[../layers/layer-3|Layer 3]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L2-BUDGET-COMPRESSION-L3-BRIDGE"})
SET fr.layer = 2,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "budget_compression_causal_bridge",
    fr.claimDesc = "新KIATIS SW 개발 예산이 6.25억(기록 제1,056/1,074/1,535)으로 압축되고 추가 요구사항 80건이 체계적으로 억제된 결과, Layer 3에서 미충족 업무가 강제 재배분(의도적 업무 이관)되는 구조적 원인을 제공",
    fr.counterHypothesis = "6.25억은 적정 예산이며 80건의 추가 요구사항은 사업 범위 밖의 과도한 요구였다",
    fr.falsificationCondition = "6.25억이 80건 포함 전체 요구기능을 충족하기에 적정했음을 보여주는 원가산정 근거",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "SW 개발 예산 6.25억(기록 제1,056/1,074/1,535) vs 추가 요구사항 80건(기록 제4,866~4,871) — 예산-범위 불일치가 L3 강제 업무 재배분의 직접 원인. 순수 SW 개발 계약으로 HW 분리(의도적 분리)가 이미 예산 단계에서 설계됨.";
```

## Claim

新KIATIS 성능개선사업의 소프트웨어 개발 예산은 6.25억원(기록 제1,056쪽, 제1,074쪽, 제1,535쪽)으로 책정되었으나, 개발 요구기능에 대한 추가 요구사항은 80건(기록 제4,866~4,871쪽)에 달했다. 이 예산-범위 불일치는 순수 SW 개발 계약으로의 HW 분리를 예산 단계에서 설계한 결과이며, Layer 3에서 미충족 업무가 강제 재배분(§3.3.1.2 '의도적 업무 이관')되는 구조적 원인을 제공했다.

## Key Takeaways

- SW development budget fixed at 6.25억 (Record No. 1,056 / 1,074 / 1,535) against 80 additional requirements (Record No. 4,866~4,871) — structural mismatch [진리성]
- Pure SW contract separated from HW at budget stage — this separation was DESIGNED, not incidental [타당성]
- Budget-scope mismatch forced Layer 3 compensatory task redistribution (§3.3.1.2 의도적 업무 이관) [진리성]
- **Cross-layer causal chain: L2 budget compression → L3 forced task transfer → unfunded work burden on 한지훈** [진실성]

## Supporting evidence

- **Record No. 1,056** — 조달청 예산 결정
- **Record No. 1,074** — 예산 명세
- **Record No. 1,535** — 최종 제안요청서 사양
- **Record No. 4,866~4,871** — 순수 SW 개발 계약 세부사항

## Counter-hypothesis

6.25억은 적정 예산이며 80건의 추가 요구사항은 사업 범위 밖의 과도한 요구였다.

## Falsification condition

6.25억이 80건 포함 전체 요구기능을 충족하기에 적정했음을 보여주는 원가산정 근거 제시.

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 8. 예산 문서 + 요구사항 문서 + L3 업무 재배분 사실이 인과적으로 수렴.

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` line 73 — 6.25억 예산 + 80건 추가 요구사항
- `vault-converted-korean/09-3-3-33-제3-층위.md` §3.3.1.2 — 의도적 업무 이관

## Related

- [[cartel-requirement-inflation-80-items-delay]] (CAUSES)
- [[layer3-kiatis-team-transfer-forced-handoff]] (CAUSES)
- [[mnd-intentional-separation-server-sw-projects]] (CAUSES)
- [[../layers/layer-2|Layer 2]] (PART_OF_LAYER)
- [[../layers/layer-3|Layer 3]] (PART_OF_LAYER)
