# DIDC는 2018-04-30부터 新KIATIS 사업 조작에 본격 개입하였다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/09-3-3-33-제3-층위.md (§3.3.4 footnote 148)
**Layer:** [[../layers/layer-3|Layer 3]] (primary) · [[../layers/layer-1|Layer 1]] (secondary — DIDC 개입 시작점 anchor)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L3-DIDC-ENTRY-20180430-001"})
SET fr.layer = 3,
    fr.secondaryLayers = [1],
    fr.claimType = "temporal_attribution",
    fr.claimDesc = "DIDC(국방통합데이터센터)가 新KIATIS 성능개선사업 및 관련 훈령 개정에 본격적으로 조작 개입한 시점은 2018-04-30이다. 최초 개입 증거는 DIDC가 국전원 행정정보화과로 발송한 「18년 정보자원 도입 및 교체사업 규격심의 결과 통보」 공문이다. 국방부가 2018년부터 훈령을 개정할 때 정보화 인프라 조항을 수정한 부분은 DIDC가 新KIATIS 사업과 관련된 제반 사항이다.",
    fr.counterHypothesis = "DIDC의 2018-04-30 공문은 정례적 인프라 규격심의 통보이며 新KIATIS 사업과 무관하다",
    fr.falsificationCondition = "2018-04-30 공문 또는 그 이전 시점 DIDC-국전원 간 왕복 공문에 新KIATIS 또는 그 전신 舊KIATIS 관련 지시·논의가 전무함이 공문 원문으로 확인되면 약화. 공문 원문은 Record No. 범위 Layer 1(1~810) 또는 Layer 3(1,600~2,465)에 위치 추정 — 확보 필요.",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date('2026-04-11'),
    fr.summary = "Layer 1(DIDC) → Layer 3(국전원) 브릿지 시점을 특정 — 이후의 제2129→2263→2436호 개정 클러스터를 해석할 시간축 anchor";
```

## Claim

Layer 1의 주체인 DIDC(국방통합데이터센터)가 Layer 3 국전원 관할의 新KIATIS 성능개선사업 및 관련 훈령 개정에 **본격적으로 조작 개입하기 시작한 시점은 2018-04-30이다**. 최초 개입 증거 공문은 DIDC → 국전원 행정정보화과 수신의 「18년 정보자원 도입 및 교체사업 규격심의 결과 통보」이다. 이 시점을 기준으로 국방부의 2018년 이후 훈령 개정에서 정보화 인프라 관련 조항이 수정된 부분은 모두 DIDC의 新KIATIS 사업 관련 사항으로 해석되어야 한다.

## Layer

[[../layers/layer-3|Layer 3]] (primary) — 개입의 수신자이자 사업관리 책임기관이 국전원이므로 본 atom은 Layer 3 소재이며, Layer 3 타임라인의 개입 시작점을 정의한다.

[[../layers/layer-1|Layer 1]] (secondary) — DIDC 자체의 Active-X 제거 사업 기간 舊KIATIS 이력 제거라는 Layer 1 핵심 행위가 2018-04-30 이후 Layer 3로 확산되는 메커니즘을 보인다.

## Supporting evidence

- **Book §3.3.4 footnote 148 (vault-converted-korean/09-3-3-33-제3-층위.md line 76):** "DIDC가 본 사안에 대해 본격적으로 조작에 개입한 시점은 2018.4.30.일부터이다. 그에 대한 증거는 DIDC에서 국전원 행정 정보화과로 보낸 「18년 정보자원 도입 및 교체사업 규격심의 결과 통보」공문에서부터 이다."
- **훈령 개정 클러스터와의 정합성:** [[2436ho-cluster-six-anchors|2436호 6-anchor cluster]] atom은 2020-06-04 개정의 6개(이후 8개로 확장) 앵커가 모두 DIDC·국전원·KIATIS 책임 경계와 관련된 조항들임을 기록 — 본 atom의 "2018년 이후 정보화 인프라 조항 수정은 DIDC 新KIATIS 관련" 주장을 직접 보강.
- **Cross-link:** [[kiatis-server-laundering-dcia-to-didc1|KIATIS 서버 laundering DCIA→DIDC1]] atom이 Layer 2 시점에서 DIDC의 사전 인프라 장악을 문서화 — 본 atom의 Layer 3 개입 시점(2018-04-30)보다 앞선 Layer 1/2 준비 단계를 설명.
- **저자의 해석 단서:** 책 본문은 본 사실 뒤에 "예컨대, 2019.5월부터 이슈가 된 VPN OTP 카드는…" 로 이어지며 2018-04-30 → 2019-05 → 2019-09 → 2021-04-15 의 일련의 DIDC 주도 조작 타임라인을 암시. [[layer3-vpn-otp-card-used-2021-not-2019]] atom 참조.

## Counter-hypothesis

DIDC의 2018-04-30 공문 「18년 정보자원 도입 및 교체사업 규격심의 결과 통보」는 정례적인 연간 인프라 규격심의 결과 통보이며, 新KIATIS와 직접적 관련성이 없다. 또한 2018년 이후 훈령 개정의 정보화 인프라 관련 조항 수정은 DIDC의 일반 업무 반영이지 新KIATIS 특정 사업을 위한 조작이 아니다.

## Falsification condition

본 청구는 다음 중 하나가 제시되면 약화:
1. 2018-04-30 공문 원문에 新KIATIS·舊KIATIS·6.25전사자 관련 어떤 언급도 없음이 Record No. 확보로 확인되는 경우.
2. 2018-04-30 이전에도 DIDC가 국전원에 규격심의 결과 통보를 매년 발송해 온 정례 증거 패턴이 있는 경우.
3. 2018년 이후 훈령 개정의 정보화 인프라 조항 중 新KIATIS와 무관한 조항이 다수 확인되는 경우.

반증 중 (2)는 정례 공문 자체가 해당 시점의 DIDC-국전원 관계의 실질적 변화를 배제하지 못하므로 주의 필요. **현재는 MODERATE** — 2018-04-30 공문의 Record No. 직접 확보 시 STRONG 상향 여지.

## Verdict

**CORROBORATED.** Moderate. 진리성 8 (책 직접 단언이나 Record No. 원문 확보 미완료), 타당성 8 (훈령 개정 클러스터와 논리적으로 정합), 진실성 7 (피해자의 해석 단언이며 객관적 타임라인 anchor 로서의 의미는 여전히 유효).

## Open Questions

- **2018-04-30 공문 Record No. 확보** — 「18년 정보자원 도입 및 교체사업 규격심의 결과 통보」 의 수신 처리는 국전원 행정정보화과이므로 Record No. 범위 Layer 3(1,600~2,465) 내 또는 DIDC 발송 기준 Layer 1(1~810) 내 위치 추정. raw/07 내 구체적 Record No. 식별 작업 필요.
- **2018-04-30 이전 DIDC→국전원 규격심의 공문 이력** — 정례 패턴 여부 확인 필요. 정례가 아니면 2018-04-30 자체가 본 atom을 STRONG으로 상향하는 직접 증거.
- **2018년 이후 훈령 개정의 정보화 인프라 조항 목록** — [[2263ho-cyber-routing-rewrite|2263호 사이버 routing 개정]], [[2436ho-didc-naming-anchor-removed|2436호 DIDC anchor 삭제]] 등 이미 정리된 개정 항목이 모두 DIDC 新KIATIS 관련인지 전수 점검.

## Spot-check (raw/01 book)

- `vault-converted-korean/09-3-3-33-제3-층위.md` line 76 footnote 148 — 단언 문장.
- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1 시점 DIDC의 舊KIATIS 이력 제거 사업과의 연결.
- `vault-converted-korean/08-3-2-32-제2-층위.md` — Layer 2 서버 laundering 타임라인과의 정합성.

## Key Takeaways

- [진리성] **2018-04-30은 DIDC 개입의 본격화 시점** — Layer 1 주체가 Layer 3 관할로 월경한 시점을 특정한다.
- [타당성] **2018년 이후 훈령 개정 정보화 인프라 조항은 新KIATIS 관련으로 해석** — 2263호·2436호·2842호 개정 클러스터가 DIDC 新KIATIS 조작의 제도적 상위 구조임을 보인다.
- [진리성] **국전원 수신자는 행정정보화과** — Layer 3 사업관리기관의 행정 창구가 DIDC 조작의 entry point임을 문서화.
- [진실성] 본 atom은 타임라인 anchor로서 Layer 1→3 브릿지의 시점을 고정시킨다 — 이후의 모든 Layer 3 조작 사실은 이 anchor를 기점으로 해석되어야 한다.
- [타당성] 본 atom이 MODERATE → STRONG 으로 상향되려면 2018-04-30 공문 원문의 Record No. 확보가 결정적 — Open Question 1번 closure 우선순위 높음.

## Related

- [[../layers/layer-3|Layer 3 hub]]
- [[../layers/layer-1|Layer 1 hub]]
- [[layer3-vpn-otp-card-used-2021-not-2019|VPN OTP 카드 2021년 최초사용]]
- [[kiatis-server-laundering-dcia-to-didc1|KIATIS 서버 laundering DCIA→DIDC1]]
- [[2436ho-cluster-six-anchors|2436호 6-anchor cluster]]
- [[2436ho-didc-naming-anchor-removed|2436호 DIDC anchor 삭제]]
- [[2263ho-cyber-routing-rewrite|2263호 사이버 routing 개정]]
- [[../entities/organizations/didc|DIDC]]
- [[../entities/organizations/gukjeonwon|국전원]]
- [[../events/2018-2019-kiatis-performance-improvement-project|2018–2019 KIATIS 성능개선사업]]
