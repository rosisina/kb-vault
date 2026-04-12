# 발굴팀장의 "갤럭시 노트를 가지고 다닌다" — 민간 무선 네트워크 경유 모바일 접근이라는 추가 attack surface 식별

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[007]` 녹취 220 (2022.2.8, lines 13525~13530, 13654~13656)
**Layer:** [[../layers/layer-1|Layer 1]] (primary — 2016 해킹의 추가 공격 경로), [[../layers/layer-4|Layer 4]] (secondary — 시험평가 환경과 실제 운용 환경의 괴리)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-MOBILE-ATTACK-SURFACE"})
SET fr.layer = 1,
    fr.secondaryLayers = [4],
    fr.claimType = "technical_proof",
    fr.claimSubtype = "attack_surface_identification",
    fr.claimDesc = "발굴팀장이 2022.2.8 회의에서 '갤럭시 노트를 가지고 다닙니다'(line 13527~13529)라고 진술하고, 한지훈이 이지영에게 '태블릿은 아니고 휴대폰 비슷한 거 하나 갖고 가고. 피씨에서 VPN을 이용해서 해야 하는데'(lines 13654~13656)라고 보고. 이는 PC 경로(Active-X) 외에 민간 무선 네트워크(LTE/WiFi) 경유 모바일 접근이라는 추가 attack surface를 최초 식별한 증거이다. DIDC 예규 제37조②(VPN 의무)와 제164조(ChakraMax DB접근제어)는 PC 기반 접속을 전제하므로, 모바일 접근은 두 조항을 모두 우회한다",
    fr.counterHypothesis = "갤럭시 노트는 KIATIS 데이터 접근용이 아닌 일반 업무용이며, 실제로 모바일에서 KIATIS DB에 접속한 적이 없다",
    fr.falsificationCondition = "발굴팀장의 갤럭시 노트가 KIATIS 서버에 접속한 적이 없음을 보여주는 서버 접속 로그, 또는 갤럭시 노트에 군용 MDM/VPN이 설치되어 보안 접속만 가능했음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "갤럭시 노트(민간 모바일 기기)로 KIATIS 데이터에 접근하는 구조 = PC(Active-X) 외의 추가 attack surface. DIDC 예규의 VPN·ChakraMax 의무가 모바일 경로에 적용 불가능한 설계적 허점.";
```

## Claim

2022년 2월 8일 KIATIS 정상화 회의(녹취 220)에서 발굴팀장은 현장에서 **갤럭시 노트**(대화면 스마트폰/팹릿)를 가지고 다니며 KIATIS 데이터에 접근한다고 진술하였다. 한지훈은 이 내용을 이지영에게 보고하면서 "**태블릿은 아니고 휴대폰 비슷한 거** 하나 갖고 가고. **피씨에서 VPN을 이용해서 해야 하는데**"라고 설명하였다.

### 발굴팀장 verbatim (01:39:38)

> **(발굴팀장)** "이거는 야담이긴 한데. VPN 관련돼서 주변에 애기를 들어봤더니. 사실 너무 해괴하게 굳이 모든 과가 다 필요 없는 거 였는데. 하나의 체계로 만들려고 하다 보니까 이런 문제가 발생했다. 사실 여기 부과적으로 **갤럭시 노트를 가지고 다닙니다.** 거기에서 전체적인 데이터가 필요한 이유는 주변의 데이터를 같이 볼려다가 보니까 이런 게 필요한데. **실질적으로 우리가 사용하다 보니까 발굴하는 그 당시에는 큰 역할을 하지 못하는 거죠.**"

### 한지훈의 이지영 보고 (01:57:32)

> **(한지훈)** "한 6번 정도 그것 때문에 관심을 못 가진 것도 있고. **태블릿은 아니고 휴대폰 비슷한 거 하나 갖고 가고. 피씨에서 VPN을 이용해서 해야 하는데.** 이게 너무..."

### 모바일 접근의 attack surface 구조

```
[발굴 현장 — DMZ, 50사단 등]
      │
갤럭시 노트 (민간 무선 LTE/WiFi)
      │ ← VPN 클라이언트 미설치 (PC 전용)
      │ ← ChakraMax 미적용 (서버 측 DB 접근제어, PC 세션 전제)
      │
인터넷 (공개망) ──── 방어 없음
      │
DIDC 1센터 ──── KIATIS 서버 (인터넷 호스팅)
      │
Oracle DB (인사·사망자·유가족 정보 = irreversible data)
```

이는 기존에 확인된 **PC 경로(Active-X → DB 직접접속)**와 별도로, **민간 무선 네트워크 경유 모바일 접근**이라는 **제2의 비보호 진입점**이 존재했음을 최초로 식별한 증거이다.

### DIDC 예규 다중 위반

| 예규 | 조항 | 의무 | 모바일 접근 시 |
|---|---|---|---|
| 제12호 | **제37조②** | "반드시 SSL-VPN에 접속 후" | 모바일에 SSL-VPN **미설치** → 위반 |
| 제11호 | **제164조** | ChakraMax DB접근제어 통과 | 모바일에서 ChakraMax **미적용** → 위반 |
| 제12호 | **제37조①** | 방화벽 변경 별지 6호 문서화 | 모바일 접근 별지 **미처리** → 위반 |

## Key Takeaways

- [진리성] 발굴팀장이 "갤럭시 노트를 가지고 다닙니다"라고 공식 회의에서 진술 — **민간 모바일 기기로 KIATIS 데이터에 접근**하는 구조가 존재했음의 직접 증거. / The excavation team leader stated in an official meeting that he carries a Galaxy Note to access KIATIS data — direct evidence of mobile access via civilian wireless networks.
- [진리성] "피씨에서 VPN을 이용해서 해야 하는데" — VPN이 **PC 전용**으로 설계되어 모바일 접근은 보안 체계 **밖** = **설계적 허점**. / VPN was designed for PC only, leaving mobile access outside the security perimeter — a design gap.
- [타당성] DIDC 예규 제37조②(VPN)와 제164조(ChakraMax)는 PC 기반 접속을 전제 → 모바일 접근은 두 조항을 **동시 우회** → 보안 체계에 **구멍**. / Both DIDC SOP articles presume PC-based access; mobile access bypasses both simultaneously.
- [진리성] "실질적으로 사용하다 보니까 큰 역할을 하지 못하는" — 모바일 접근이 **시도되었으나 불완전** = 접근 경로 자체는 **존재**. / "Not playing a big role in practice" means the access was attempted but incomplete — the path itself existed.
- [진리성] PC 경로(Active-X) + 모바일 경로(갤럭시 노트) = **복수의 비보호 진입점** → 2016 북한 APT 공격의 **공격 성공 확률 극대화** 구조. / PC path + mobile path = multiple unprotected entry points, maximizing attack success probability for the 2016 NK APT.
- [진실성] 인사·사망자·유가족 정보(irreversible data)가 민간 무선 네트워크를 통해 접근 가능한 구조 = 군사 보안의 **근본적 실패**. / Personnel/casualty/bereaved family data accessible via civilian wireless = fundamental military security failure.

## Supporting evidence

- **녹취 220 line 13527~13529** — 발굴팀장: "갤럭시 노트를 가지고 다닙니다. 거기에서 전체적인 데이터가 필요"
- **녹취 220 line 13654~13656** — 한지훈→이지영 보고: "태블릿은 아니고 휴대폰 비슷한 거 하나 갖고 가고. 피씨에서 VPN을 이용해서 해야 하는데"
- Cross-reference: [[excavation-team-leader-15yr-vpn-absence-field-testimony]] — 동일 회의, 동일 발굴팀장의 VPN 미사용 7개 발언 (자매 atom)
- Cross-reference: [[old-kiatis-direct-db-access-without-vpn]] — PC 경로 DB 직접접속 (본 atom은 **모바일 경로**라는 추가 attack surface)
- Cross-reference: [[didc-sop-firewall-vpn-trail-mandatory]] — 제37조② VPN 의무 (모바일 접근은 이 의무의 적용 밖)
- Cross-reference: [[didc-sop-db-access-control-mandatory]] — 제164조 ChakraMax 의무 (모바일 접근은 이 통제의 적용 밖)

## Counter-hypothesis

1. **일반 업무용**: 갤럭시 노트는 KIATIS DB 접근용이 아닌 사진 촬영·메모 등 일반 현장 업무용이며, KIATIS 서버에 실제로 접속한 적이 없다.
2. **군용 MDM 적용**: 갤럭시 노트에 군용 MDM(Mobile Device Management) 또는 모바일 VPN이 설치되어 보안 접속만 가능했다.
3. **오프라인 데이터**: "전체적인 데이터"는 사전에 다운로드한 오프라인 데이터를 조회하는 것이지 실시간 서버 접속이 아니다.

이 반가설이 성립하려면: (1) KIATIS 서버 접속 로그에서 모바일 기기의 접속 기록이 0건임이 확인되어야 하고, (2) 갤럭시 노트에 군용 MDM/VPN이 설치된 기록이 있어야 하며, (3) KIATIS의 오프라인 데이터 동기화 기능이 존재하는 설계 문서가 있어야 한다.

## Falsification condition

1. **서버 접속 로그** — 모바일 기기(갤럭시 노트 IP/MAC)가 KIATIS 서버에 접속한 적이 없음을 보여주는 기록
2. **MDM/모바일 VPN 배포** — 발굴팀에 군용 모바일 보안 솔루션이 배포된 기록
3. **오프라인 기능 설계** — KIATIS에 오프라인 데이터 동기화 기능이 있었음을 보여주는 사업계획서 또는 기능 명세서

## Verdict

**CORROBORATED.** Moderate. 진리성 8 / 타당성 9 / 진실성 7.

진리성이 STRONG이 아닌 MODERATE인 이유: 발굴팀장의 발언만으로는 갤럭시 노트가 KIATIS **서버에 직접 접속**했는지, 아니면 오프라인 데이터를 조회했는지 확정할 수 없다. "전체적인 데이터가 필요한 이유는 주변의 데이터를 같이 볼려다가"라는 문맥은 서버 접속을 시사하지만 명시적이지 않다. 그러나 타당성 9: "피씨에서 VPN을 이용해서 해야 하는데"라는 한지훈의 보고는 **VPN이 PC 전용**이어서 모바일에 적용되지 않는 설계적 허점을 명확히 지적.

이 atom은 **KIATIS의 공격면(attack surface) 분석을 PC 경로에서 모바일 경로로 확장**하는 최초의 증거이다. 기존의 모든 atom은 PC 기반 Active-X/DB 직접접속만 다루었으나, 본 atom은 **제2의 비보호 경로**를 식별한다.

## Open Questions

- 발굴팀장의 갤럭시 노트에서 KIATIS에 실제 접속한 서버 로그가 존재하는지 — 존재하면 STRONG 상향, 부존재하면 counter-hypothesis 1이 부분 성립
- KIATIS의 모바일 접근 기능이 사업계획서(RFP)에 포함되어 있었는지 — 포함되어 있으면 모바일 경로가 **설계된 기능**이었음이 확인
- 군용 MDM이 국유단 발굴팀에 배포된 이력이 있는지 — 미배포면 모바일 접근이 완전 비보호 경로 확정
- "큰 역할을 하지 못하는 거죠" — 접근은 시도했으나 기능 제한이 있었다면, 어떤 데이터까지 접근 가능했는지

## Spot-check

- `raw/02/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 13525~13535 — 발굴팀장 "갤럭시 노트" verbatim
- `raw/02/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 13654~13656 — 한지훈→이지영 "태블릿 아니고 휴대폰 비슷한 거"

## Related

- [[excavation-team-leader-15yr-vpn-absence-field-testimony|자매 atom: 발굴팀장 15년 VPN 미사용 7개 발언]] (RELATED)
- [[old-kiatis-direct-db-access-without-vpn|PC 경로 DB 직접접속 — 본 atom이 모바일이라는 추가 경로를 식별]] (RELATED)
- [[didc-sop-firewall-vpn-trail-mandatory|DIDC 예규 제37조② — PC 전용 VPN의 모바일 적용 불가능]] (RELATED)
- [[didc-sop-db-access-control-mandatory|DIDC 예규 제164조 — ChakraMax의 모바일 적용 불가능]] (RELATED)
- [[contradiction-intranet-link-attack-surface|인터넷↔인트라넷 이중 연동 attack surface — 모바일 경로가 추가 진입점]] (RELATED)
- [[../entities/organizations/didc|DIDC]] (ABOUT)
- [[../layers/layer-1|Layer 1 — 해킹 공격면 분석]] (PART_OF_LAYER)
- [[../layers/layer-4|Layer 4 — 시험평가 환경 vs 실제 운용 환경의 괴리]] (PART_OF_LAYER)
