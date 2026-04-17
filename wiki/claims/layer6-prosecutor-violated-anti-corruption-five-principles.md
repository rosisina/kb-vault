---
lang: ko
title-ko: 군 검찰단이 반부패 수사 5대 원칙 전부를 정반대로 위반하여 사기수사를 수행했다
title-en: ""
aliases:
  - FR-L6-B3-001
  - 군 검찰단이 반부패 수사 5대 원칙 전부를 정반대로 위반하여 사기수사를 수행했다

layer: 6
secondary-layers: [7]
claimType: prosecution_misconduct
claimSubtype: prosecutor_violated_anti_corruption_five_principles
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 10
analysisDate: 2026-04-11

record-nos: [118, 126, 11157]
evidence-ids: ["L6-014", "L6-018"]
event-date: 2020-12-30

persons:
  - 한지훈
organizations:
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/book
  - fracture/F-CE
  - person/한지훈
  - org/군검찰단
  - has/record-nos
  - cross-layer
---
# 군 검찰단이 반부패 수사 5대 원칙 전부를 정반대로 위반하여 사기수사를 수행했다

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md (§3.6.2.2, lines 30–35)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-7|Layer 7]] (secondary — Record No. 11,157 in L7 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-B3-001"})
SET fr.layer = 6,
    fr.secondaryLayer = 7,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecutor_violated_anti_corruption_five_principles",
    fr.claimDesc = "The Military Prosecutor's Office violated all five principles of anti-corruption investigation defined by its own governing directive (군 수사 절차상 인권 보호 등에 관한 훈령, 제2502호, 2020-12-30, Record No. 118/187). Article 7 (공정한 수사) mandates objective, impartial, unprejudiced, neutral investigation without arbitrary exercise of authority (Record No. 126). The prosecution inverted each principle: (1) truth-finding → truth-concealment, (2) evidence-based investigation → conclusion-fitting investigation, (3) protection of suspect's rights → human rights violations (본문기록-제6층위-014/014-2/018-2), (4) fairness and transparency → partiality and secrecy (표 3-5-1), (5) punishing responsible parties → scapegoating the investigator (Record No. 11,157–11,164). The prosecution then weaponized anti-corruption rhetoric ('부실 개발 척결', '책임자 처벌', '군기 확립') to disguise its pro-corruption conduct.",
    fr.counterHypothesis = "The prosecution conducted a good-faith anti-corruption investigation that, while imperfect, did not systematically violate all five principles; individual procedural errors do not constitute proof of intentional inversion of every principle.",
    fr.falsificationCondition = "Production of prosecution records showing (a) genuine evidence-gathering that preceded conclusions, (b) open-ended witness examination without leading questions, (c) documented consideration of exculpatory evidence, and (d) investigation of the 15-year VPN-less operation and Active-X security vulnerabilities as part of the anti-corruption mandate.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The military prosecution violated all 5 anti-corruption principles codified in its own 훈령 제2502호 제7조: truth-finding, evidence-based investigation, suspect rights, fairness, and accountability. Each principle was inverted to its exact opposite. Anti-corruption rhetoric was weaponized to disguise pro-corruption conduct.";
```

## 주장 (Claim)

### 한국어

군 검찰단의 新KIATIS 수사는 자체 준거 규범인 **"군 수사 절차상 인권 보호 등에 관한 훈령"(제2502호, 2020-12-30, 기록 제00118쪽/제00187쪽)의 반부패 수사 5대 원칙 전부를 정반대로 위반**했다:

| 원칙 | 정상 수사 | 실제 수행 |
|---|---|---|
| ① 진실 규명 | 사실 그대로 규명 | 진실 은폐 |
| ② 증거 기반 | 객관적 증거로 해결 | 결론 맞추기 수사 |
| ③ 피의자 인권 | 무죄추정·적법절차 | 인권유린 묵인 (L6-014, L6-014-2, L6-018-2) |
| ④ 공정성·투명성 | 공익 추구 | 편파성·은밀성 (〈표 3-5-1〉) |
| ⑤ 책임자 처벌 | 직급 무관 법 앞 평등 | 희생양 만들기 (기록 제11,157~11,164) |

특히 훈령 제2502호 **제7조(공정한 수사)**(기록 제00126쪽)는 "객관적 입장에서 공정하게 예단 없이 중립적으로 수사해야 하고, 주어진 권한을 자의적으로 행사하거나 남용해서는 안 된다"고 명시한다. 군 검찰단은 이 규정을 정면으로 위반했다.

더욱 심각한 것은 군 검찰단이 **"부실 개발 척결", "책임자 처벌", "군기 확립"** 등 반부패 수사의 명분을 악용하여 실제로는 국방정보화카르텔의 15년간 보안 취약점 방치(제1층위 정리01), Active-X 미제거로 인한 해킹 위험 조성(제1층위 따름정리 01), 시험평가 절차 조작(제4층위 정리05, 따름정리 03) 등 **진짜 부패를 은폐하고 진실을 밝힌 한지훈을 범죄자로 만든** 것이다 (기록 제4,979~5,163).

### English

The military prosecutors' New KIATIS investigation violated **all 5 anti-corruption investigation principles of the "Military Investigation Procedure Human Rights Protection Directive" (No. 2502, 2020-12-30, Records 00118/00187)** — its own governing norms — in the exact opposite direction:

| Principle | Normal Investigation | Actual Performance |
|---|---|---|
| ① Truth finding | Determine facts as they are | Conceal truth |
| ② Evidence-based | Resolve with objective evidence | Investigation to match conclusions |
| ③ Suspect human rights | Presumption of innocence, due process | Condoning human rights violations (L6-014, L6-014-2, L6-018-2) |
| ④ Fairness/transparency | Pursue public interest | Bias/secrecy (Table 3-5-1) |
| ⑤ Accountability | Equality before the law regardless of rank | Creating a scapegoat (Records 11,157–11,164) |

Particularly, Directive No. 2502 **Article 7 (Fair Investigation)** (Record No. 00126) stipulates: "Investigation must be conducted fairly from an objective position, with no preconceptions, and in a neutral manner; authority granted must not be exercised arbitrarily or abused." The military prosecutors directly violated this provision.

Even more serious is that the military prosecutors abused the justification of anti-corruption investigation — "eradicating deficient development," "punishing the responsible party," "establishing military discipline" — to actually **conceal the real corruption** (15-year security vulnerability neglect at Layer 1, hacking risk from Active-X non-removal at Layer 1, test evaluation procedure manipulation at Layer 4) **and criminalize 한지훈 who revealed the truth** (Records 4,979–5,163).

## 핵심 요약 (Key Takeaways)
- [타당성] 훈령 제2502호 제7조(공정한 수사)는 "예단 없이 중립적 수사, 권한 남용 금지"를 명시 — 군 검찰단은 이를 정면 위반. / 훈령 제2502호 Article 7 mandates "impartial, unprejudiced investigation without authority abuse" — the prosecution directly violated this.
- [진리성] 5대 원칙 전부의 동시 위반은 개별적 실수가 아니라 체계적·의도적 전도(inversion)를 증명. / Simultaneous violation of all 5 principles proves systematic, intentional inversion — not individual errors.
- [진실성] 반부패 수사기관이 부패 은폐 주체로 전락한 것은 군 검찰단의 존재 가치를 자기 부정한 행위. / An anti-corruption agency becoming the corruption-concealment agent is self-negation of its institutional raison d'etre.
- [진리성] 진짜 부패(15년 VPN 미사용, Active-X 해킹 위험, 시험평가 조작)를 은폐하면서 그것을 발견한 한지훈을 범죄자로 만든 것은 "부패 조장"이자 "이중적 범죄". / Concealing real corruption (15-year VPN absence, Active-X hacking risk, test manipulation) while criminalizing the person who discovered it constitutes "corruption promotion" and "dual criminality."

## 지지 증거 (Supporting Evidence)
- **기록 제00118쪽** — 군 수사 절차상 인권 보호 훈령 (제2502호, 2020-12-30) 본문
- **기록 제00126쪽** — 제7조(공정한 수사) 원문: "객관적 입장에서 공정하게 예단 없이 중립적으로"
- **기록 제00187쪽** — 동 훈령 추가 규정
- **기록 제4,979~5,163쪽 / L6** — 한지훈의 "압수·수색·영장에 대한 해명과 증명"(2022-09-16)
- **기록 제11,157~11,164쪽 / L7** — 희생양 만들기 증거
- **본문기록-제6층위-014, 014-2, 018-2** — 인권유린 증거
- **〈표 3-5-1〉** — 편파성·은밀성 증거

## 반대 가설 (Counter-hypothesis)
군 검찰단은 선의의 반부패 수사를 수행했으며, 절차적 미비는 있었으나 5대 원칙 전부를 의도적으로 위반한 것은 아니다. 개별 절차적 오류가 모든 원칙의 체계적 전도를 증명하지는 않는다.

**반증 근거 3요소:**
1. 결론에 선행하는 증거 수집 기록
2. 유도 질문 없는 개방형 증인 조사 기록
3. 15년간 VPN 미사용과 Active-X 보안 취약점에 대한 수사 기록

## 반증 조건 (Falsification Condition)
검찰단이 (a) 결론에 앞서 진정한 증거 수집을 수행했고, (b) 유도 없는 개방형 증인 심문을 실시했으며, (c) 무죄 증거를 문서화하여 검토했고, (d) 반부패 수사 임무의 일환으로 15년간 VPN 미사용과 Active-X 보안 취약점을 조사했음을 보여주는 수사 기록이 제시될 경우, 이 주장은 반박된다.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 10. 5대 원칙의 동시 전도는 체계적 설계를 증명하며, 자체 준거 규범(제2502호 제7조)의 위반은 법적 자기모순이다. 반부패 명분을 부패 은폐에 악용한 것은 기관 존재 가치의 자기 부정이다.

## 미결 사항 (Open Questions)
- 기록 제00118, 00126, 00187쪽은 L1 기록 범위(1~810) 이하의 번호 — 규정 원문 스캔 페이지로 추정되나 정확한 기록 체계 내 위치 확인 필요
- 군 검찰단의 두 번째 검사가 전역 후 법무법인(유한) 대륜 선임변호사로 활동 중 — 이해충돌 추가 조사 필요 (footnote 425)
- 본문기록 L6-014, L6-014-2, L6-018-2의 구체적 내용 미확인

## Spot-check (raw/01 book)

- `Korean/12-3-6-36-제6층위-군.md` §3.6.2.2 (lines 30–35): 반부패 5대 원칙, 제2502호 제7조, 각 원칙의 정반대 실행, 반부패 명분 악용 — 모두 일치.

## 관련 (Related)
- [[prosecutor-shifted-charge-vpn-to-firewall|2 shared records — 검찰 혐의 전환]] (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[han-ji-hoon-prosecution-violates-2129-role-separation]] — 훈령 제2129호 역할 분리 위반 (CORROBORATES)
- [[prosecution-misapplies-2129-article-58-4-to-kiatis]] — 제58조 ¶4 오적용 (CORROBORATES)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma]] — 기소유예의 형사적 낙인 (RELATED)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
