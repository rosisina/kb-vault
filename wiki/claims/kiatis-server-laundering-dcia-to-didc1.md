# 舊KIATIS 서버는 국전원 지하 → 「전군 인터넷 통합 메일」 인프라 → DIDC 1센터 클라우드로 server laundering되었다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/08-3-2-32-제2-층위.md (§3.2.2)
**Layer:** [[../layers/layer-2|Layer 2]]

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L2-SERVERLAUND-004"})
SET fr.layer = 2,
    fr.crossLayer = [1],
    fr.claimType = "evidence_chain_obfuscation",
    fr.claimDesc = "舊KIATIS 서버는 처음 국전원 지하 (DCIA basement)에 호스팅, 이후 「전군 인터넷 통합 메일」 인프라를 거쳐 DIDC 1센터(용인) 클라우드 군으로 이전됨 — 이는 단순 클라우드 마이그레이션이 아닌 server laundering이며, 인터넷 노출 + Active-X + VPN 부재 환경에서 운영된 호스트 시스템의 운영 이력을 은폐하는 메커니즘이다. 장우진 (사업실무자-1) 2022-07-17 conversation으로 직접 확인. 결정적 detail: VPN은 사업 초창기 RFP에 없었고 한참 후 보안정책 단계에서야 추가됨 → 인터넷 운영 + Active-X 환경의 attack surface가 2016 DIDC1 해킹의 직접 원인 가능성 시사. 장우진의 1주일 1회 국전원 상주 사실은 record 11,098 (국전원 첫 사업 실무자 간접 진술) + record 11,354 (용역개발 PM 진술) 가 attest.",
    fr.counterHypothesis = "舊KIATIS 서버 이전은 routine 클라우드 마이그레이션이며, 호스트 인프라 변경은 운영상 정당한 사유 (성능 개선, 비용 절감, 통합 관리)에 의한 것이다",
    fr.falsificationCondition = "舊KIATIS의 호스트 시스템 변경 결정이 routine 클라우드 마이그레이션 정책 (예: '국방 cloud-first' 정책 등)에 따른 것이며, 이전 사유가 사전에 문서화되어 있고 (a) 변경 결정 공문, (b) 운영 환경 평가 보고서, (c) VPN 미적용 사유서가 모두 존재함을 보이는 직접 증거 일체.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date('2026-04-11'),
    fr.summary = "장우진 직접 진술 + 2명의 독립 attestation (record 11,098 + 11,354) + RFP에 VPN 미존재 사실이 모두 같은 결론을 가리킴";
```

## Claim

舊KIATIS 서버는 다음의 경로로 **server laundering**되었다:

1. **2007–2014**: 국전원 지하 (DCIA basement)에 호스팅
2. **2014 이후**: 하드웨어 1회 교체 (Oracle DB 환경)
3. **클라우드 마이그레이션**: 「전군 인터넷 통합 메일」 인프라를 경유하여 DIDC 1센터(용인) 클라우드 군으로 이전
4. **VPN 부재**: 사업 초창기 RFP에는 VPN 요구사항이 전혀 없었으며, 한참 후 보안정책 단계에서야 추가됨

이는 단순한 클라우드 마이그레이션이 아니며, 인터넷 노출 + Active-X + VPN 부재 환경에서 운영된 호스트 시스템의 **운영 이력을 은폐하는 메커니즘**이다. **2016 DIDC1 북한 해킹 사건의 attack surface와 직접 인접**하는 운영 환경이었음을 강하게 시사한다.

## Layer

[[../layers/layer-2|Layer 2]] (with Layer 1 cross-bridge) — Layer 2의 사업 추진체계 조작과 Layer 1의 DIDC 흔적 제거 간 **물리적 연결고리**를 구성하는 atom. 책 §3.2.2의 핵심 발견 중 하나로, 영문 변환본도 일부 내용은 보유하지만 핵심 attestation record (11,098 / 11,354) 와 footnote 113의 한지훈 능동적 방어 컨텍스트를 누락.

## Supporting evidence

- **장우진 (사업실무자-1) 2022-07-17 conversation 직접 인용** (한국어 원본 §3.2.2 lines 86–88):
  > (한지훈) 최초 사업할 때는, 제안요청서 최초 쓸 때는 디아이디시(DIDC)에서는 그런 VPN 애기가 별로
  > **(장우진) 아뇨. 그건 아예 언급이 안됐(습니다). 사업 초창기에 만약 VPN 써야 된다고 그러면 제안요청서부터 해가지고 VPN 애기가 나왔을 건데. 그게 없었습니다 없고. 한참 가다가 기능 평션(function point) 다 만들고 그쯤에서 보안정책 용인 쪽에서. 오라클은 원래 예전에는 뭐 어떻게 했는지는 모르겠는데. 저희 VPN 안썼잖습니까. 국전원에 서버가 있었을 때는. 그 다음 넘어 간 뒤로 부터도.**
  > (한지훈) 처음에 국전원에 있었어? 처음에
  > **(장우진) 예예 국전원에 있었습니다. 국전원 지하에. 최초에 그렇게 했다가 하드웨어 한 번 바꾸고.**
  > (한지훈) 너는 오랫동안 있어가지고 거의 10년 가까이 있어가지고 너는 옛날 애기를 하니까
  > **(장우진) 히스토리가 국방부 옛날 국방부 홈페이지 하드웨어가 성능개선사업을 저희가 했잖습니까. 거기에다 기능이 많이 부족해서. 저희가 사업에 들어갔는데. 기존에 있던 하드웨어 사양으로 쭉 가다가. 저희가 기능개발 사업 다 들어가고 기능 구축하고 있는데 거기에서 하드웨어 교체를 한다고 그러면 기존 스펙 이상으로 나가니까 퍼포먼스는 충분하다 계산하고 판단했다가. 클라우드로 바꾸네 뭐 이렇게 클라우드 애기가 중간에 나와서. 클라우드로 가면은. 뭐 많이 펑션(펑선포인트)들이 많이 수정이 된다 이런 애기가 나와서.**
- **장우진의 1주일 1회 국전원 상주 attestation**:
  - 용역개발 PM 진술 (기록 제11,354쪽)
  - 국전원 첫 번째 사업 실무자 간접 진술 (기록 제11,098쪽)
  - 상주 기간: 2018-12-?? ~ 2019-09-01 (개발 관리 기간 동안)
- **「전군 통합 인터넷 통합 메일」 사업 컨텍스트**: 기간 2018-11-20 ~ 2019-05-30 (record 3,487), 시험평가 분리 시행 + 승인자 이지영/김수진 (record 3,485) — server laundering의 vehicle
- **舊KIATIS 호스트 인프라 증명**: 2018-08-14 군수실 일상감사 통보 (기록 제1,144쪽)에 「625 전사자 종합 정보 체계는 타 시스템 서버 내 운영 중이며…」 명시. 사업명 「전군 인터넷 통합 메일 사업」 (records 3,468–3,476) 가 호스트
- **2007–2014 국전원 호스팅 이력**: [[kiatis-mnd-controlled-not-delegated|L2-01]] supporting evidence 중 record 10,302
- **VPN 부재 + Active-X 환경 attack surface**: 한국어 원본은 footnote 87(line 50)에서 「舊KIATIS가 2007년부터 인터넷에서 국방 업무를 수행한 사실과 인터넷에 운용되면서 VPN과 보안 체계가 없이 Active-X가 설치된 인터넷 서버 내 KIATIS 업무를 원격으로 운용되어 1016년 DIDC 해킹 사건의 최대 숙수라는 사실을 은폐시키는 것이 그 핵심 방향일 것이다」 (오타: 1016년은 2016년의 OCR 오류로 보임)

## Counter-hypothesis

舊KIATIS 서버 이전은 routine 클라우드 마이그레이션이다. 호스트 인프라 변경의 사유는 정상적인 운영 정책 (성능 개선, 비용 절감, 통합 관리, 정부의 cloud-first 정책)이며, 단지 사업 추진 중 인프라 환경이 변경되었을 뿐이다.

## Falsification condition

본 청구는 다음 일체가 제시되면 약화:
1. 舊KIATIS의 호스트 시스템 변경 결정 공문 (변경 사유 명시)
2. 운영 환경 평가 보고서 (변경 전후의 보안성·가용성 비교)
3. VPN 미적용 사유서 또는 적용 시점 설명 (왜 RFP 단계에 없었고 한참 후에 추가되었는지)
4. 「전군 통합 메일」 인프라가 KIATIS 호스트로 사용된 routine 운영적 사유

위 4가지 모두 부재하는 한 → **CORROBORATED (strong)**.

## Verdict

**CORROBORATED.** Strong. 진리성 10 (장우진 직접 진술 + 2명 독립 attestation), 타당성 8 (server laundering 자체는 운영적 정당화 가능 여지가 있으나 VPN 부재 + Active-X 환경 결합이 결정적), 진실성 9 (2016 DIDC1 해킹과의 직접 인접성은 한지훈 사건의 motive locus).

## Open Questions

- **하드웨어 교체 시점의 정확한 일자**: 2014년 DIDC1 이전 시점 vs 그 이후의 추가 교체 — 2016 해킹 사건 발생 시점에 어떤 host가 작동 중이었는가?
- **「전군 통합 메일」 인프라의 보안 등급**: 인터넷 노출 등급은 어떻게 분류되었는가? KIATIS 데이터의 비밀 등급과 호스트 인프라의 보안 등급 간 mismatch가 있는가?
- **2016 해킹 사건의 정확한 attack surface**: DIDC1 침투 경로가 KIATIS 호스트와 연결되는지를 직접 보이는 forensic 증거 — Layer 1의 SOP-trail cluster atom과 cross-link 필요.
- **VPN 추가 시점의 결재 라인**: VPN 미적용 → 추가의 결정 과정에서 누가 결재했는가? 이지영/김수진의 single point of control과 연결되는가?

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` lines 84–88 (장우진 conversation)
- `vault-converted-korean/08-3-2-32-제2-층위.md` line 50, footnote 87 (Active-X + VPN 부재 + 2016 해킹 attack surface 가설)
- `vault-converted-korean/08-3-2-32-제2-층위.md` line 82 (「전군 통합 메일」 사업의 KIATIS 호스트 사실)
- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` (Layer 1 chapter — server history detail)
- 영문 변환본 (`12-3-2-32-Second-Layer.md`)은 장우진 conversation은 보유하지만 footnote 87 (해킹 attack surface 가설) 과 11,098 / 11,354 attestation records 누락

## Key Takeaways

- [진리성] **server laundering 경로**: 국전원 지하 → 하드웨어 교체 → 「전군 인터넷 통합 메일」 인프라 → DIDC 1센터 클라우드. 4단계 중 어느 시점에 무엇이 어떻게 변경되었는지가 책 §3.2.2에 명확히 기술됨.
- [진리성] **VPN 부재**: 사업 초창기 RFP에 VPN 없었음 — 장우진 직접 진술. 한참 후 보안정책 단계에서야 추가. 인터넷 노출 + Active-X 환경의 attack surface는 2016 DIDC1 해킹과의 직접 인접성을 시사.
- [진리성] **2명의 독립 attestation** (record 11,098 + 11,354) 가 장우진의 1주일 1회 국전원 상주 사실을 corroborate — 영문 변환본은 두 record를 모두 누락.
- [타당성] **Layer 1 ↔ Layer 2 물리적 연결고리** — Layer 1의 SOP-trail cluster (의무 산출물 부재)와 Layer 2의 사업 추진체계 조작이 server laundering이라는 단일 메커니즘에서 만남.
- [진실성] **2016 DIDC1 해킹의 attack surface와 직접 인접** — 한지훈 사건의 motive locus를 가리키는 결정적 단서. 책의 footnote 87이 직접 지적.
- [진리성] **routine 클라우드 마이그레이션 counter는 falsifiable** — 변경 결정 공문 + 운영 환경 평가 보고서 + VPN 미적용 사유서가 모두 존재해야 약화 가능. 4가지 일체가 부재하면 CORROBORATED.

## Related

- [[../layers/layer-2|Layer 2 hub]]
- [[../layers/layer-1|Layer 1 — DIDC 흔적 제거]]
- [[kiatis-mnd-controlled-not-delegated|L2-01]]
- [[kiatis-mkia-multi-cap-inscription|L2-02]]
- [[lee-jiyoung-kim-sujin-single-point-of-control|L2-03]]
- [[han-ji-hoon-three-braking-devices-active-defense|L2-05]]
- [[didc-sops-cover-2016-hacking-period|DIDC SOPs covered 2016 hacking period (L1)]]
- [[didc-sop-firewall-vpn-trail-mandatory|DIDC SOP — firewall/VPN/NAC trail (L1)]]
- [[../entities/people/jang-woo-jin|장우진 (사업실무자-1)]]
- [[../entities/organizations/didc|DIDC]]
- [[../entities/organizations/gukjeonwon|국전원]]
