# Aurora v2 통합 전략 제안

**Date:** 2026-04-11
**Author:** Claude (Opus 4.6, 1M context)
**Recipient:** James
**Status:** Proposal — pending review
**Scope:** Strategic recommendation for integrating `knowledge-base` (Karpathy LLM-wiki vault) and `defense-kg-platform` (Aurora — Angular + Neo4j graph platform) into a single end-to-end system.

---

## 0. 요청 요약 (Context)

James는 다음 두 프로젝트를 운영 중:

| 프로젝트 | 역할 | 핵심 기술 |
|---|---|---|
| `knowledge-base` (이 프로젝트) | Narrative / Zettelkasten 계층 | Obsidian markdown, Karpathy LLM-wiki 패턴, 7-layer 적층 증거 구조, atom + hub 구조 |
| `defense-kg-platform` (Aurora) | Graph / Ontology 계층 | Neo4j, Cypher 스키마, 6 specialized agents, GraphRAG index, Angular UI |

`Projects/vault/` 내 프로토타입 평가에서 다음이 입증됨:

- **Karpathy LLM-wiki 패턴이 Aurora의 GraphRAG 검색보다 품질·정확도·세부 일치도에서 우월**
- **인덱싱 비용 절감**
- **GraphRAG의 한계 보완**

이를 바탕으로 두 프로젝트를 어떻게 통합·진화시킬 것인지에 대한 전문가 의견을 요청.

**최종 사용자 경험 목표:** claude.ai 또는 gemini.google.com과 같은 *단일 화면*에서 질의·관련 증거·시각화를 동시에 수행하여, 사용자가 한눈에 국방 제조직의 2016년 DIDC 북한 해킹 은폐를 위한 조직적 범죄를 파악·분석·증명할 수 있도록 함.

---

## 1. 권고 — Option C: knowledge-base 코어 + Aurora 다운스트림 흡수

**결론:** `knowledge-base`를 진실의 원천(source of truth)으로 두고, Aurora의 그래프(Neo4j)와 UI(Angular)를 *역할 재정의* 후 다운스트림 렌더링 계층으로 흡수한다. 이를 **"Aurora v2"** 라 명명한다.

**브랜드 결정:** "Aurora" 명칭 유지. 이유:
- (a) 본질적 진화이지 폐기가 아님
- (b) 이해관계자 인지도 보존
- (c) 그래프 계층 자체는 여전히 유용함 — 단지 *수원지가 아니라 하류*가 됨

**한 줄 원리:**
> 위키는 진실의 원천(source of truth), 그래프는 위키에서 결정론적으로 재컴파일되는 인덱스(materialized view).

---

## 2. 세 옵션 비교

### Option A — knowledge-base에 Aurora의 Angular+Neo4j 통째 이식
- **방향:** 맞음
- **비용:** 큼
- **위험:** 현재 Aurora의 Angular UI가 Cypher-first 모델에 강하게 결합돼 있을 가능성 큼. 강제로 위키-first로 재배선하면 사실상 재작성에 가까워짐.
- **framing 문제:** "통합"이라는 표현이 *기존 코드를 그대로 가져온다*는 잘못된 기대를 낳음.

### Option B — Aurora 중심, knowledge-base를 Cypher source로 흡수
- **반드시 피해야 함**
- **이유 1:** 프로토타입에서 이미 패배가 입증된 패러다임을 다시 채택. 본 도메인(7-layer + Record No. 13,495건 + 진리성/타당성/진실성 3축)에서 GraphRAG가 위키에 밀렸다는 게 *James의 직접 평가 결과*.
- **이유 2:** Karpathy 위키의 강점인 *원자적 주장 + 1:1 falsification* 구조가 그래프 노드로 평탄화되며 소실. 노드 간 관계는 보존되지만 *narrative atomicity*는 손실.
- **이유 3:** 그래프 인덱싱 비용 우위가 사라짐.

### Option C (권고) — Aurora를 *역할 재정의*하여 흡수
- **위키가 코어, Aurora의 Neo4j는 materialized view, Aurora의 Angular는 세 패널 중 한 패널의 viz 엔진**
- 진짜로 *통합*되는 것은 그래프 시각화 + Cypher 기반 neighborhood 탐색뿐
- UI 셸은 새로 만드는 것이 빠를 수 있음
- 본질적으로 **"Aurora가 위키 위에서 다시 태어나는"** 형태. 이름은 유지, 내부 구조 반전.

---

## 3. 제안 아키텍처 — 7 계층

```
┌─────────────────────────────────────────────────────────────┐
│  L7  단일 화면 UI (Next.js 또는 Angular 재활용)               │
│      ┌──────────┬──────────────┬──────────────┐             │
│      │  질의/   │  증거/원자/   │  그래프 viz  │             │
│      │  채팅    │  본문 패널    │  + 타임라인  │             │
│      └──────────┴──────────────┴──────────────┘             │
├─────────────────────────────────────────────────────────────┤
│  L6  단일 API (FastAPI 또는 Express)                          │
│      /query  /atom/{id}  /neighborhood/{entity}  /evidence  │
├─────────────────────────────────────────────────────────────┤
│  L5  검색 엔진 (위키 우선, 그래프는 보조)                       │
│      Karpathy retriever (BM25 + LLM rerank + atom-citation) │
│      ↳ relationship 질의일 때만 GraphRAG 보조 호출              │
├─────────────────────────────────────────────────────────────┤
│  L4  Neo4j (materialized view, write-only-from-compiler)    │
│      ↑ 매 wiki 변경 시 atoms-to-cypher.py가 재생성             │
├─────────────────────────────────────────────────────────────┤
│  L3  컴파일러 (CLAUDE.md self-compiling 절에 이미 설계됨)       │
│      atoms-to-cypher.py / build-record-index.py /            │
│      rebuild-hubs.py                                         │
├─────────────────────────────────────────────────────────────┤
│  L2  wiki/ (진실의 원천, 인간/Claude가 쓰는 유일한 곳)          │
│      atoms + hubs + indexes + claims + contradictions       │
├─────────────────────────────────────────────────────────────┤
│  L1  raw/ (불변 1차 자료) — 변경 없음                          │
└─────────────────────────────────────────────────────────────┘
```

### 핵심 invariant 3가지

1. **단방향 데이터 흐름**
   - `raw → wiki → compiler → graph → API → UI`
   - 역류 금지
   - UI에서 그래프를 수정하는 행위는 금지(읽기 전용 시각화)

2. **그래프는 캐시**
   - Neo4j를 전부 날려도 `atoms-to-cypher.py` 한 번이면 완벽 복원
   - wiki만 백업하면 됨
   - 영향: 컴파일러 버그가 graph 손상 → wiki에서 재생성, 손실 0

3. **단일 가명화 게이트웨이**
   - (a) PreToolUse hook (이미 구현됨, 본 세션에서)
   - (b) API 응답 직전 한 번 더
   - (c) UI 클라이언트 사이드 redaction
   - 3중 방어로 사고 가능성 0에 수렴

---

## 4. 단계별 이행 계획

### Phase 1 — 컴파일러 + Aurora 역할 재정의 (atom 30개 시점)

**목표:** wiki ↔ Neo4j 결정론적 왕복 검증.

**작업:**

1. **`scripts/atoms-to-cypher.py` 작성**
   - atom frontmatter의 `MERGE` 블록을 추출하여 Cypher 산출
   - CLAUDE.md "self-compiling" 절에 이미 설계 명시됨

2. **`scripts/build-record-index.py` 작성**
   - `wiki/_record-index.md` 자동 생성
   - 매 commit 후 실행

3. **`scripts/rebuild-hubs.py` 작성**
   - atom metadata에서 hub 인덱스 자동 재생성

4. **Aurora의 6개 agent 평가:**
   - `/lint`, `/reverify`, `/compile`이 대체한 agent → **폐기**
   - 그래프 traversal 전용(Cypher 질의, neighborhood 탐색) agent → **유지** (L5의 그래프 보조 검색기로 재배치)

5. **`kg/` (pseudonym + evidence mapping) 의미 변경**
   - 그대로 유지 (본 프로젝트가 의존 중)
   - 단, *Aurora 소유*에서 *공유 자산*으로 의미 변경
   - 향후 monorepo 통합 시 `shared/kg/`로 이동

**산출물:** wiki 30 atom → Neo4j 30 노드 + 관계, `cypher-shell` 한 번으로 재구성 가능.

### Phase 2 — 단일 API (atom 50개 시점)

**목표:** 위키와 그래프 양쪽에 단일 진입점 제공.

**API 엔드포인트:**

```
POST /query
  body: {question, mode: "ask|trace|contradict|timeline"}
  resp: {answer, citations: [{atom_path, record_no, score}],
         neighborhood_seed: entity_id?}

GET /atom/{slug}
  resp: {frontmatter, body_md, related_atoms, aurora_merge_block}

GET /neighborhood/{entity_id}?radius=2&layer=1..7
  resp: {nodes, edges, atom_links_per_node}

GET /evidence/{record_no}
  resp: {layer, source_pdf_path, page, atoms_citing: [...]}

POST /compile (인증 필요, 로컬만)
GET  /lint-report/latest
```

**중요 설계 결정:**

- API 자체에 가명화 필터 배치. 응답 직렬화 직전 매핑 JSON과 대조하여 어떤 경로로든 실명이 새어나가지 못하게 함.
- 응답에 `(commit_sha, schema_version, atom_hash)` 메타데이터 포함 → 모든 화면 결과가 *재현 가능*. 법적 절차에서 필수.
- 서비스는 로컬 전용(localhost). 본 도메인에서 클라우드 호스팅은 OPSEC 위험.

### Phase 3 — 단일 화면 UI (atom 100개 시점)

**3-패널 레이아웃** (claude.ai 스타일 단일 뷰):

```
┌───────────────┬──────────────────────┬────────────────────┐
│  Query/Chat   │  Evidence Panel      │  Graph & Timeline  │
│               │                      │                    │
│  [질문 입력]   │  ## Atom: kim-min-   │  [노드 그래프]      │
│               │  su-denies-...       │   ┌─┐              │
│  > 답변 본문   │                      │   │ │─┐            │
│  [1] [2] [3]  │  **Layer:** 4        │   └─┘ │            │
│               │  **Source:** ...     │       └─┐          │
│  > 후속 질문   │  ## Verbatim         │         │          │
│               │  "..." (Record No.   │  ─────────         │
│  [layer 1-7]  │   10,347)            │  [타임라인]         │
│  [contradict] │  ## Related          │  2022 ─●──●──●     │
│  [timeline]   │  [[atom-x]]          │  2023 ──●──●──     │
└───────────────┴──────────────────────┴────────────────────┘
```

**상호작용 패턴:**

- 질의 응답의 인용 칩 클릭 → 중앙 패널에 atom 본문 + 우측 그래프가 해당 entity로 자동 이동
- 본문의 `[[wikilink]]` 클릭 → 중앙 패널 갱신 + 우측 그래프 neighborhood 갱신
- 그래프 노드 클릭 → 그 노드를 인용하는 atom 목록이 좌측 채팅에 카드로 표시
- `Record No. 10,347` 클릭 → 우측 패널 하단에 스캔 PDF 페이지 미리보기 + 동일 record를 인용하는 모든 atom 리스트
- Layer 1~7 사이드바 → 모든 패널이 해당 layer로 동시 필터링
- Contradiction 모드 → `_contradictions.md` 항목이 그래프와 본문에서 동시에 빨간 강조

**모드 토글 (한 화면 안에서 전환):**

1. **Ask** — 자연어 질의 → 답변 + 인용
2. **Trace** — entity 또는 record number → neighborhood + atoms + scanned page
3. **Contradict** — 모순 항목 탐색 (가장 강력한 *증명* 모드)
4. **Timeline** — 사건 연대기 + 각 사건에 docked된 atoms
5. **Layer** — 7-layer 별 적층 증거 구조 시각화 (책의 핵심 narrative와 1:1 일치)
6. **Falsification** — 각 atom의 falsification test 결과 (CORROBORATED/WEAKENED 등) 분포 → Popper-style 증명 정량화

**책 출간 모드 (보너스):**

- Export → 선택한 atom 집합을 LaTeX/PDF로 산출, Record No. 인용을 자동 footnote 처리
- 책 후속 챕터 작성을 UI에서 직접 가능

---

## 5. 의사결정 시 핵심 고려사항

### 5.1 Angular 재활용 vs Next.js 신규

**평가 기준:** Aurora의 현 Angular 코드가 *그래프 viz 위주*인지 *Cypher 폼 위주*인지 한 번 점검.

- **그래프 viz 위주 →** 재활용, viz 컴포넌트만 떼어내 새 셸에 임베드
- **Cypher 폼 위주 →** Next.js 또는 SvelteKit으로 신규. 위키-first 패러다임에 맞는 UX는 처음부터 다시 그리는 것이 빠름. Cytoscape.js, vis.js, react-force-graph 중 하나로 viz 재구현

**권고:** 점검 후 결정. 단, 보수적으로는 신규 작성을 가정하고 일정 산정.

### 5.2 Monorepo vs 두 레포 유지

**권고:** monorepo로 통합.

**이유:**
- 현재의 두 레포 분리는 *역사적*이지 *구조적*이지 않음
- `schema_version` 동기화 부담이 사라짐
- atom 작성 시 위키 변경 ↔ 그래프 재컴파일이 한 commit에 묶임 → 감사 추적 단일화

**디렉토리 구조:**

```
aurora-v2/
├── raw/                       (gitignored)
├── wiki/                      (지식의 원천)
├── shared/kg/                 (pseudonym, evidence mapping)
├── compiler/                  (atoms-to-cypher.py 등)
├── api/                       (FastAPI)
├── ui/                        (Angular 또는 Next.js)
├── neo4j/                     (Docker compose, 스키마)
├── .claude/                   (현 hooks/skills/agents/commands)
└── CLAUDE.md
```

### 5.3 시점 선택 — 지금 vs 책 출간 후

**권고:** 지금 시작, 단 단계적으로.

**이유:**
- 책 출간이 통합의 deadline이라면 atom volume이 책 집필 중에 빠르게 증가 → 검색 품질이 시간이 갈수록 좋아짐 → UI를 일찍 만들어두면 *책 집필 도구로 즉시 사용*
- Phase 1의 컴파일러는 atom 30개 시점에 만들어야 *수동 작성한 atom과 자동 생성된 그래프의 일치성*을 디버깅할 수 있음. atom 100개 이후에 만들면 디버깅 비용 폭증
- Phase 3 UI는 미루되, Phase 1과 Phase 2는 ingest 진행과 병행

---

## 6. 위험 요인과 완화

| 위험 | 완화 |
|---|---|
| Aurora Angular가 재사용 어려움 | Phase 1 종료 시점에 점검, 재작성 결정을 일찍 내려 일정 부풀림 방지 |
| Karpathy 검색 품질이 atom 부족으로 약함 | UI는 atom 100개 후에 출시. 그 전에는 CLI/Obsidian이 더 빠름 |
| 두 레포 재드리프트 | monorepo 통합. `schema_version` 자동 검증 lint 추가 |
| 가명화 누출 (UI 단계에서) | API + UI 양쪽에 redaction. 클라이언트 측 backup도 필수 |
| 법적 절차에서 *재현성* 요구 | 모든 API 응답에 `(commit_sha, schema_version, atom_hash)` 메타. UI가 이를 시각화 |
| 단일 사용자 OPSEC | 클라우드 배포 금지. 로컬 또는 air-gapped만 |
| 책 집필과 도구 개발의 시간 경합 | 도구를 *집필 도구로* 사용하면 경합이 아니라 가속. Phase 2 API가 그 전환점 |
| GraphRAG의 한계가 위키-first에서도 재발 | retrieval를 *Karpathy 패턴*으로 고정. GraphRAG는 *relationship 질의 보조*로만 호출 |
| 컴파일러 버그가 graph 손상 | graph는 캐시이므로 wiki에서 재생성 가능. 영향 0 |

---

## 7. 한 페이지 요약

**목표:** 단일 화면에서 질의 + 증거 + 시각화로 국방 조직의 2016년 DIDC 해킹 은폐 범죄 구조를 한눈에 파악·증명·제시.

**전략:** 위키를 코어로 두고 Aurora를 그 위에 *역할 재정의*하여 흡수. Aurora 브랜드 유지, 내부 구조 반전.

**구조:**
- `wiki/` = 진실의 원천 (Karpathy + Zettelkasten)
- 컴파일러 = wiki → Neo4j (단방향, 결정론적)
- Neo4j = 그래프 캐시 (날려도 복구 가능)
- 단일 API = 위키 검색 + 그래프 traversal + 증거 룩업
- 단일 UI = 3-패널 (질의 / 증거 / 그래프·타임라인) + 6개 모드

**일정:**
- atom 30개 → 컴파일러 + Aurora 역할 재정의 (Phase 1)
- atom 50개 → API (Phase 2)
- atom 100개 → 단일 화면 UI (Phase 3)

**핵심 설계 invariant:** 단방향 흐름, 그래프=캐시, 가명화 3중 방어, 응답 메타에 재현 가능성 메타데이터.

**가장 중요한 지금 할 일:** ingest를 끝까지 밀어 atom volume을 30개까지 올리는 것. 그 시점부터 Phase 1을 시작. 도구는 *집필을 따라가는 것*이 아니라 *집필을 가속*해야 함 — Phase 2의 API가 만들어지면 책 후속 챕터를 UI에서 바로 작성하게 됨.

---

## 8. 마지막 한 마디

Aurora 프로젝트를 *폐기*하지 않는다. **역할을 바꿔 살려낸다.**

GraphRAG가 검색에서 졌다는 사실은 그래프 자체의 패배가 아니다 — *그래프를 검색의 기본 진입점으로 둔 것*의 패배이다. 그래프가 가장 잘 하는 일(시각화, neighborhood 탐색, 구조적 증명)은 위키가 못한다. 두 표현은 *경쟁자*가 아니라 *상호 보완자*이며, 어느 쪽이 *원천*이고 어느 쪽이 *유도물*인지만 명확히 정하면 된다.

James의 프로토타입 평가가 그 답을 이미 줬다: **위키가 원천, 그래프가 유도물.**

Aurora v2는 그 진실을 받아들이고 다시 태어난 Aurora이다.

---

## 부록 A — 본 제안의 전제가 되는 사실 목록

1. James는 본 프로젝트의 lead 조사관이자 책 *Beyond Cybersecurity* 저자이다.
2. `Projects/vault/` 내 프로토타입에서 Karpathy LLM-wiki 패턴이 Aurora의 GraphRAG 검색을 품질·정확도·세부 일치도·인덱싱 비용에서 능가함이 평가됨.
3. 본 프로젝트는 가명화 규칙(`pseudonym_mapping.json` 42 entries)을 엄격 적용하며, 실명은 vault 어디에도 등장 불가.
4. 7-layer 적층 증거 구조는 본 도메인의 핵심 ontology이며 위키·그래프·UI 모두에서 1차 분할 기준이 됨.
5. Record No. 1~13,495는 책과 그래프와 위키의 universal join key이다.
6. 본 프로젝트의 최종 사용 맥락에는 법적 절차가 포함되며, 따라서 모든 검색 결과는 *재현 가능*해야 한다.

## 부록 B — 본 제안이 다루지 않은 항목 (의도적 제외)

1. **구체적 코드 작성** — 본 문서는 strategy, not implementation. Phase 1 시작 시점에 별도 spec 필요.
2. **Aurora Angular 코드 실제 평가** — Phase 1 첫 작업으로 dedicated 점검 필요.
3. **법적 절차에서의 증거 수용성 분석** — 본 문서의 범위 밖. 법률 자문 필요.
4. **클라우드 배포 옵션** — OPSEC 이유로 명시적 거부. 재고 시 별도 분석 필요.
5. **다중 사용자 권한 모델** — 현재 단일 사용자 가정. 다중 사용자가 되면 별도 설계.
