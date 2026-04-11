# Layer 2 — New KIATIS Framework and Officer Self-Record Manipulation (新KIATIS 사업 추진체계 및 장교 개인 자력 조작)

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-english/ (book §3.2), ../defense-kg-platform/kg/evidence_record_mapping.json
**Layer:** 2
**Evidence record range:** Record No. 1000–1587

## Thesis

Layer 2 is the **bridge layer** between Layer 1 (legacy KIATIS trace removal) and Layer 3 (transfer to 국전원 SW project management). It documents (a) the construction of the 新KIATIS project framework — the institutional vehicle that justified replacing the compromised legacy system without acknowledging the 2016 hacking — and (b) the manipulation of individual officer self-records (장교 개인 자력) to engineer the personnel topology required for that framework.

The Layer 2 thesis connects organizational concealment to individual career manipulation: removing or altering an officer's posting history, qualifications, or assignment record is the personnel-level analogue to removing a system's operational history. Both are *erase-and-rebrand* operations.

## Atoms (6 — Track C compile pass 2026-04-11)

The Layer 2 compile pass extracted 6 initial atoms from the Korean original (`vault-converted-korean/08-3-2-32-제2-층위.md`, §3.2.1.1 / §3.2.1.2 / §3.2.2 / §3.2.3) under the Korean-original-first rule established 2026-04-11 after discovering that the English conversion had lost ~30–40% of diagnostically relevant information including role-anchor identifiers, document author attributions, and counter-narrative footnotes.

### Structural / legal foundation

- [[../claims/kiatis-mnd-controlled-not-delegated]] — **L2-01**. 新KIATIS는 국방부 통제 사업이며 위임 사업이 될 수 없다. 5근거 (서버 호스팅, 갱신 이력, 예산 분류, 훈령 효력, 국정과제). **CORROBORATED (strong)**
- [[../claims/kiatis-mkia-multi-cap-inscription]] — **L2-02**. 국유단(MKIA)이 사업통제·관리·주관·수행기관 슬롯에 다중 cap으로 inscription. 〈표 3-2-1〉 직접 증명. **CORROBORATED (strong)**

### Actor continuity (single point of control)

- [[../claims/lee-jiyoung-kim-sujin-single-point-of-control]] — **L2-03**. 이지영 (공문결재자-1) + 김수진 (행정담당자-1) 이 4가지 독립 컨텍스트에서 동일 actor 패턴, 2021 MND→국전원 동반 보직 이동 후에도 같은 패턴 유지. 모든 조작의 시작과 끝에 등장하는 단일 통제점. **CORROBORATED (strong)** ← Layer 2의 유일한 actor-level 토대 + Layer 1·4·6 cross-bridge

### Server laundering (Layer 1 bridge)

- [[../claims/kiatis-server-laundering-dcia-to-didc1]] — **L2-04**. 舊KIATIS 서버: 국전원 지하 → 「전군 인터넷 통합 메일」 인프라 → DIDC 1센터 클라우드. VPN 부재 + Active-X = 2016 DIDC1 해킹 attack surface 직접 인접. 장우진 직접 진술 + 2명 독립 attestation (records 11,098 + 11,354). **CORROBORATED (strong)**

### Active defense (Layer 6 reverse-bridge, exculpatory)

- [[../claims/han-ji-hoon-three-braking-devices-active-defense]] — **L2-05**. 한지훈의 3가지 능동적 방어 메커니즘 (장우진 상주 요구, 일대일 승인 트레일, 국유단 직접 방문 강제) + 사업 감리 거절. Layer 6 군 검찰단 기소의 사기 의도 주장에 대한 직접 exculpatory 증거. **CORROBORATED (strong)** ← Layer 2 origin이지만 Layer 6에 reverse-bridge

### Officer personal record manipulation (§3.2.3 main thesis)

- [[../claims/han-ji-hoon-officer-personal-record-manipulation]] — **L2-06**. 한지훈의 보직이 본인 부지불식간에 2회 변경. 핵심 실무자 모두 해군 장교 (이태호 평가위원장-1, 오현수 실무자-5, 이준호 공모자-1). Layer 5 6개월 격리 + Layer 6 직책 불일치의 origin. **CORROBORATED (strong)**

### Verdict distribution

| Verdict | Count |
|---|---|
| CORROBORATED (strong) | 6 |
| 그외 | 0 |

**Layer 2 공백 해소** — atom 0개 → 6개. 추후 compile pass로 5–8개 추가 가능 (drop된 candidate: 비교 사업 조직정원체계 actor mapping, 2018-08-14 군수실 routine audit pre-coordination, 2019-09-02 work-simplification 시간역전, 80건 추가 요구사항 결재 패턴, 해군 장교 집중도 통계 baseline).

## Contradictions

- [[../_contradictions]] entries C-L2-01 through C-L2-06 — added during Track C compile pass. All 6 candidates promotable-to-Open (strong), can join Track B promotion batch.

## Regulations

- [[../regulations/defense-it-operations-directive-2129|훈령 제2129호 (hub)]] — references to 사업관리기관 framework

## Events

- *(pending — 2018-2019 KIATIS performance improvement event already exists at [[../events/2018-2019-kiatis-performance-improvement-project]] but is currently linked to Layers 3/4)*

## Entities

- [[../entities/organizations/mnd-it-planning-office|MND 지능정보화정책관실]]
- [[../entities/organizations/gukjeonwon|국전원]]

## Topics

- [[../topics/kiatis-systems|KIATIS Systems (舊 / 新)]] — primary topic anchor
- [[../topics/apt-style-individual-targeting|APT-Style Individual Targeting]] — personnel-targeting mechanics

## Aurora correspondence

Aurora `:Layer {layer: 2}` node will be empty until the compile pass produces atoms. This is a known schema gap.

## Open Questions

- **Compile pass scope**: How many atoms should the initial Layer 2 pass produce? Target: 5–10.
- **Sub-thesis split**: Should "framework construction" and "officer self-record manipulation" be tracked as separate sub-layers (2a / 2b), or as a single Layer 2?
- **Personnel evidence pseudonymization**: Officer self-record manipulation atoms will involve specific names — verify pseudonym mapping coverage before drafting.

## Key Takeaways

- [진리성] **Layer 2 is the largest coverage gap in the vault.** Zero atoms, despite the book devoting §3.2 to it.
- [진리성] **Layer 2 is the bridge** between Layer 1 (system trace removal) and Layer 3 (organizational handoff to 국전원). Without it, the cover-up chain has a missing link.
- [진리성] **Erase-and-rebrand symmetry**: removing a system's history (Layer 1) and rewriting an officer's posting record (Layer 2) are the same operation at different scales.
- [진리성] **Compile pass is queued** as Track C of the 2026-04-11 Checkpoint plan; this hub will be the first wiki page updated when atoms land.
- [진리성] **Layer 2는 vault의 최대 공백**. 책의 §3.2가 다루는데도 atom 0개.
- [진리성] **Layer 2 = 가교층**: 시스템 이력 삭제(L1) ↔ 조직 이관(L3) 사이를 연결.

## Related

- [[_index|Layers index]]
- [[../_master-index|Master index]]
- [[../_contradictions|Contradictions]]
- [[../claims/_index|Claims]]
- [[layer-1|← Layer 1]] | [[layer-3|Layer 3 →]]
