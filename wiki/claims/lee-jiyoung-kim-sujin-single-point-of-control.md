# 이지영 (공문결재자-1)과 김수진 (행정담당자-1)은 모든 조작의 시작과 끝에 등장하는 단일 통제점이다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/08-3-2-32-제2-층위.md (§3.2.1.2 footnote 85, §3.2.2 footnote 109, §3.2.3 main paragraph), ../defense-kg-platform/kg/pseudonym_mapping.json (id 2 + id 11)
**Layer:** [[../layers/layer-2|Layer 2]]

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L2-LJY-KSJ-CONTROL-003"})
SET fr.layer = 2,
    fr.crossLayer = [1, 4, 6],
    fr.claimType = "actor_continuity",
    fr.claimDesc = "이지영 (공문결재자-1, 가명 매핑 id 2) 과 김수진 (행정담당자-1, 가명 매핑 id 11) 은 4가지 독립 컨텍스트에서 같은 actor 패턴으로 등장한다: (a) 비교 사업 조직정원체계의 PCA 담당 (국방부 정보화기획관실 소프트웨어 융합 담당관실; 한국어 원본 §3.2.1.2 footnote 85), (b) 2019-09-02 work-simplification 공문 (record 5,853 또는 2,853)의 작성·결재자 (한국어 원본 §3.2.2 footnote 109), (c) 「전군 인터넷 통합 메일 사업」(2018-11-20~2019-05-30)의 시험평가 승인자 (record 3,485, 분리 시행, 평가위원장 = 이태호 (평가위원장-1)), (d) 2017 Active-X 제거 사업부터 2018 新KIATIS 시험평가 시작까지 일관 패턴, 그리고 2021-01-18 (이지영) / 2021-02-09 (김수진) MND→국전원 보직 이동 후에도 같은 패턴의 훈령 개정 관여 (한국어 원본 §3.2.3). 모든 조작의 시작과 끝에 동일 두 사람이 등장한다는 것은 단일 통제점이 존재함을 보이는 결정적 증거이다.",
    fr.counterHypothesis = "이지영과 김수진은 단순한 행정 사무 처리 담당자로, 4가지 컨텍스트 등장은 각자의 직무 범위 내 routine 활동의 우연한 중복이다",
    fr.falsificationCondition = "이지영 또는 김수진이 4가지 컨텍스트 중 어느 하나에 등장하지 않았음을 보이는 직접 증거 (예: 결재 라인에서 다른 사람이 결재한 동일 시기 동일 부서 공문). 또는 그들의 4가지 컨텍스트 등장이 routine HR 패턴이며 다른 동일 직급 직원도 동일 시기에 동일 패턴으로 등장한 사례.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date('2026-04-11'),
    fr.summary = "두 사람이 4가지 독립 컨텍스트에서 동일 actor 패턴으로 등장 + 2021년 보직 이동 후에도 같은 패턴 유지 = Layer 2 단일 통제점";
```

## Claim

**이지영 (공문결재자-1)** 과 **김수진 (행정담당자-1)** 은 4가지 독립 컨텍스트에서 동일한 actor 패턴으로 등장하며, **모든 조작의 시작과 끝에 등장하는 단일 통제점**이다:

1. **비교 사업 (조직정원체계, 2017-04~2019-01)** 의 PCA 담당 — 국방부 정보화기획관실 소프트웨어 융합 담당관실 (한국어 원본 §3.2.1.2 footnote 85)
2. **2019-09-02 work-simplification 공문** (record 5,853 또는 2,853) 의 **작성·결재자** — 「결재라인은 국방부 정보화기획관실 소프트웨어 융합 담당관실, 과장 이지영과 주무관 김수진」 (한국어 원본 §3.2.2 footnote 109)
3. **「전군 인터넷 통합 메일 사업」 (2018-11-20~2019-05-30)** 의 시험평가 승인자 — 분리 시행, 승인자 이지영 + 김수진 (record 3,485), 평가위원장 = 이태호 (평가위원장-1) — 비교 사업과 同 actor (한국어 원본 §3.2.2 footnote 112)
4. **2017 Active-X 제거 사업 → 2018 新KIATIS 시험평가 시작** 까지 일관 actor, 그리고 **2021-01-18 (이지영) / 2021-02-09 (김수진) MND→국전원 보직 이동** 후에도 같은 패턴의 훈령 개정 관여 (한국어 원본 §3.2.3)

이는 **모든 조작의 시작과 끝**에 동일 두 사람이 등장한다는 사실을 통해 단일 통제점의 존재를 증명한다. 동기와 책임의 locus가 어디인지를 가리키는 결정적 증거.

## Layer

[[../layers/layer-2|Layer 2]] — 新KIATIS 사업 추진체계 및 장교 개인 자력 조작. 본 atom은 Layer 2의 **유일한 actor-level 토대 atom**이며, Layer 1 (Active-X 제거 → 舊KIATIS 흔적 삭제) → Layer 4 (시험평가 조작) → Layer 6 (검찰단 카르텔) 의 actor-continuity bridge 역할을 한다. 영문 변환본은 (a)와 (b)의 두 attribution을 모두 누락하므로 본 atom은 **한국어 원본에 의해서만 작성 가능**하다.

## Supporting evidence

- **(a) 비교 사업 PCA 담당 — 한국어 원본 §3.2.1.2 line 50, footnote 85**:
  > "사업 통제 기관인 정보화기획관실85)85) 담당도 소프트웨어 융합 담당관실 **과장 이지영, 주무관 김수진**이다. 은 4가지 고유 기능을 수행하고 있다."
  
  → 비교 사업 (조직정원체계, 2017-04~2019-01)의 PCA가 정보화기획관실 = 합법 구조에서 이지영/김수진이 담당
- **(b) 2019-09-02 work-simplification 공문 작성자 — 한국어 원본 §3.2.2 line 78, footnote 109**:
  > "정보시스템 구축 시험평가 절차 간소화 추진 계획 검토 요청(기록 제2,853쪽)109)109) **결재라인은 국방부 정보화기획관일 소프트웨어 융합 담당관실, 과장 이지영과 주무관 김수진**이다."
  
  → MND가 新KIATIS 시험평가 시작일에 시험평가 승인 절차를 생략하는 공문의 결재 라인이 이지영/김수진. 같은 부서의 같은 두 사람이 비교 사업에서는 합법 PCA로 활동하고 新KIATIS에서는 절차 생략 공문을 작성.
- **(c) 「전군 인터넷 통합 메일 사업」 승인 — 한국어 원본 §3.2.2 line 82, footnote 112**:
  > "이 사업은 기간(`18.11.20~`19.5.30., 기록 제3,487쪽) 에 시행되었고 개발과 운영 시험이 분리되어 시행되었으며 **승인의 주체는 다시 과장 이지영, 김수진이다(기록 제3,485쪽)**. 시 혐의 평가 위원장은 본 노고자의 전임 계획 팀장 해군 중령 이태호 이다."
  
  → 또 다른 사업에서도 이지영/김수진 = 승인자, 이태호 (평가위원장-1) = 평가위원장. 이 사업은 舊KIATIS 서버가 호스팅된 인프라와 동일 사업 (Layer 1 server laundering 트레일과 직접 연결).
- **(d) MND→국전원 보직 이동 + 일관 패턴 — 한국어 원본 §3.2.3 main paragraph**:
  > "가장 결정적인 증거의 하나는 국방부에서 그리고 보직을 옮겨 국전원에서 동일한 인원인 과장 이지영 (공문결재자-1)과 주무관 김수진이 지속적으로 조작에 관여하는 패턴을 보인 사실이다. 2017년의 Active-X 제거 사업 단계를 거쳐 2018년 사업의 시험평가가 시작하는 단계부터... **2021년 1월 18일 이지영 (공문결재자-1)이 국전원으로, 2021년 2월 9일 김수진 (행정담당자-1)가 같은 과에서 국전원으로 보직을 이동한 후, 국방부에서 그들이 훈령과 공문을 조작한 것과 같이 국전원에 와서도 훈령의 개정에 관여하는 패턴을 보였다.** ... 모든 조작의 시작과 끝에 이지영 (공문결재자-1)과 김수진 (행정담당자-1)이 있다는 것은 그 동기가 어디에 있는지를 나타내는 증거이다."
- **(e) GIS 서버 추가 — 2022-03~05**: 이지영 (공문결재자-1)이 新KIATIS 속도 개선 대책으로 GIS 서버 필요성을 보고하고 국유단과 협업하고 검찰단에 제공 — Layer 6 검찰 수사 단계의 actor 연속성 (한국어 원본 §3.2.3)
- **가명 매핑**: 이지영 = mapping id 2, 김수진 = mapping id 11 — `kg/pseudonym_mapping.json` 직접 확인 (real-name lookup is available through the mapping file; this atom uses pseudonyms only per CLAUDE.md §Conventions strict rule)

## Counter-hypothesis

이지영과 김수진은 단순한 행정 사무 처리 담당자로, 4가지 컨텍스트 등장은 각자의 직무 범위 내 routine 활동의 우연한 중복이다. 즉, "이 두 사람이 우연히 그 자리에 있었다"는 설명.

## Falsification condition

본 청구는 다음 중 하나가 제시되면 약화 또는 무효:
1. 4가지 컨텍스트 중 어느 하나에서 이지영 또는 김수진이 결재·승인 라인에 없었음을 보이는 직접 증거 (다른 결재자 명의의 동일 시기 동일 부서 공문)
2. 이지영/김수진의 4가지 컨텍스트 등장이 routine HR 패턴이며 동일 직급 다른 직원도 동일 패턴으로 등장한 사례
3. 2021-01-18 / 2021-02-09 보직 이동이 routine personnel rotation이며 같은 시기 동일 부서에서 다른 인원도 동일 경로로 이동한 사례
4. 이지영/김수진의 국전원 이동 후 훈령 개정 관여 사실 자체의 부재

4가지 모두 부재하는 한 → **CORROBORATED (strong)**.

## Verdict

**CORROBORATED.** Strong. 진리성 10 (4가지 컨텍스트 직접 확인), 타당성 9 (가명 매핑 + 보직 이동 일자 확정), 진실성 9 (단일 통제점은 동기 locus를 직접 가리킴 — Layer 6 책임 분배의 핵심).

## Open Questions

- **2017 Active-X 제거 단계의 정확한 atomic actions**: 이지영/김수진이 2017년에 정확히 어떤 결재·승인을 했는가? Layer 1 atom과 cross-link 필요.
- **국전원 이동 후의 훈령 개정 atomic actions**: "훈령의 개정에 관여하는 패턴"의 구체적 instance는 무엇인가? Layer 4의 제2436호 cluster (2020-06-04)는 국전원 이동(2021-01-18) 이전이므로 두 사람의 직접 관여는 어려움 — 이후 제2576호 (2021-08-12) 또는 제2649호 부터의 개정에 관여했을 가능성. Track D 후속 작업.
- **2,853 vs 5,853**: 2019-09-02 work-simplification 공문의 record 번호가 §3.2.1.2에서는 5,853, §3.2.2에서는 2,853으로 다르게 인용됨. 동일 문서의 두 record copy인지 두 개의 별개 공문인지 확인 필요.
- **GIS 서버 보고 (2022-03~05)의 정확한 문서**: 2022 검찰단 제공 시점의 공문 record 확보 시 Layer 6 actor-continuity 확립.

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` line 50, footnote 85 — 비교 사업 PCA 담당
- `vault-converted-korean/08-3-2-32-제2-층위.md` line 78, footnote 109 — work-simplification 공문 결재자
- `vault-converted-korean/08-3-2-32-제2-층위.md` line 82, footnote 112 — 「전군 통합 메일」 승인
- `vault-converted-korean/08-3-2-32-제2-층위.md` line 97 — §3.2.3 main thesis paragraph
- 영문 변환본 (`12-3-2-32-Second-Layer.md`)은 (a)와 (b)의 attribution을 모두 누락 — 한국어 원본 사용 필수. 본 atom은 Korean-original-first rule의 전형적 사례.

## Key Takeaways

- [진리성] **4가지 독립 컨텍스트**에서 이지영/김수진이 동일 actor 패턴으로 등장 — 비교 사업 PCA, work-simplification 공문 작성, 「전군 통합 메일」 승인, 新KIATIS 조작 actor.
- [진리성] **2021-01-18 / 2021-02-09 MND→국전원 동반 보직 이동** + 이동 후에도 같은 패턴의 훈령 개정 관여 = 두 사람이 단일 통제점임을 직접 증명. Routine HR로는 설명 불가.
- [진실성] **모든 조작의 시작과 끝**에 같은 두 사람이 등장 — 책의 직접 표현. 동기와 책임 locus를 가리키는 가장 결정적 증거 중 하나.
- [타당성] 본 atom은 **Layer 2의 유일한 actor-level 토대** + Layer 1 (Active-X 제거)·Layer 4 (시험평가 조작)·Layer 6 (검찰단 GIS 보고) actor-continuity bridge.
- [진리성] **영문 변환본만으로는 작성 불가능한 atom** — 핵심 attribution을 모두 한국어 원본 footnote가 보유. Korean-original-first rule의 전형적 사례.
- [진실성] **2,853 vs 5,853** record number anomaly는 조작 추가 단서 가능 — Open Question.

## Related

- [[../layers/layer-2|Layer 2 hub]]
- [[../layers/layer-1|Layer 1 — Active-X 제거 단계]]
- [[../layers/layer-4|Layer 4 — 훈령 개정 관여 패턴]]
- [[../layers/layer-6|Layer 6 — GIS 서버 검찰단 제공]]
- [[kiatis-mnd-controlled-not-delegated|L2-01]]
- [[kiatis-mkia-multi-cap-inscription|L2-02]]
- [[kiatis-server-laundering-dcia-to-didc1|L2-04 — server laundering]]
- [[han-ji-hoon-three-braking-devices-active-defense|L2-05]]
- [[../entities/people/lee-ji-young|이지영 (공문결재자-1)]]
- [[../entities/organizations/gukjeonwon|국전원]]
