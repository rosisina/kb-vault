#!/usr/bin/env python3
"""
generate-preset-answers.py
Aurora v2 — 150개 질문 → preset-answers.json 생성

모델: claude-haiku-4-5-20251001 (프롬프트 캐싱 적용)
출력: ui/src/assets/preset-answers.json

사용법:
  python3 scripts/generate-preset-answers.py
  python3 scripts/generate-preset-answers.py --start 1 --end 50   # 배치 처리
  python3 scripts/generate-preset-answers.py --resume              # 기존 결과 이어서
  python3 scripts/generate-preset-answers.py --dry-run             # API 호출 없이 파싱만 확인
"""

import json, re, os, sys, time, argparse
from pathlib import Path

try:
    import anthropic
except ImportError:
    print("ERROR: anthropic SDK 미설치. pip install anthropic")
    sys.exit(1)

# ── 경로 설정 ──────────────────────────────────────────────────────────────
ROOT = Path(__file__).parent.parent
QUESTIONS_FILE = ROOT / "raw/77. 100-pages summerizing paper(english)/150 question/150 questions for aurora v2(updated).md"
GRAPH_JSON     = ROOT / "ui/src/assets/graph.json"
DETAIL_JSON    = ROOT / "ui/src/assets/detail.json"
OUTPUT_FILE    = ROOT / "ui/src/assets/preset-answers.json"
PROGRESS_FILE  = ROOT / "output/preset-answers-progress.json"

MODEL_HAIKU  = "claude-haiku-4-5-20251001"   # 기본 — factual 질문 (130개)
MODEL_SONNET = "claude-sonnet-4-6"            # 보강 — narrative 질문 (20개)
MODEL = MODEL_HAIKU  # 기본값

# 에세이형 질문 (서술 답변, atom 링크 없음)
NARRATIVE_IDS = {2, 84, 114, 115, 116, 117, 118, 131, 132, 133,
                 136, 138, 139, 140, 141, 142, 145, 148, 149, 150}

# ── 질문 파싱 ──────────────────────────────────────────────────────────────
def parse_questions(md_path: Path) -> list[dict]:
    text = md_path.read_text(encoding="utf-8")
    questions = []

    # 테이블 행에서 번호 + 질문 추출
    # 형식: | 번호 | 질문 텍스트 | (선택: 기획 의도) |
    row_pat = re.compile(
        r'^\|\s*(\d+)\s*\|\s*([^|]+?)(?:\s*\|\s*[^|]*)?\s*\|?\s*$',
        re.MULTILINE
    )
    # 섹션 헤더로 카테고리 추적
    category_map = {
        '전체 개요': 'overview',
        '제1층위': 'layer1', '제2층위': 'layer2', '제3층위': 'layer3',
        '제4층위': 'layer4', '제5층위': 'layer5', '제6층위': 'layer6',
        '제7층위': 'layer7',
        '인물별': 'person',
        '법령': 'legal',
        '시간 순서': 'timeline',
        '이론적': 'theory',
        '결정적 증거': 'evidence',
        '기타': 'misc',
    }

    current_category = 'misc'
    # 층위→레이어 번호 매핑
    layer_map = {
        'layer1': [1], 'layer2': [2], 'layer3': [3], 'layer4': [4],
        'layer5': [5], 'layer6': [6], 'layer7': [7],
        'overview': [], 'person': [], 'legal': [], 'timeline': [],
        'theory': [], 'evidence': [], 'misc': [],
    }

    for line in text.splitlines():
        # 카테고리 헤더 추적
        for kw, cat in category_map.items():
            if kw in line and line.strip().startswith('#'):
                current_category = cat
                break

        m = row_pat.match(line)
        if not m:
            continue
        num_str, q_text = m.group(1), m.group(2).strip()
        try:
            num = int(num_str)
        except ValueError:
            continue
        if num < 1 or num > 150:
            continue
        # 헤더 행 스킵 ("번호", "질문" 등)
        if '번호' in q_text or '질문' in q_text.lower():
            continue
        if len(q_text) < 5:
            continue

        questions.append({
            "id": f"Q{num:03d}",
            "num": num,
            "q_ko": q_text,
            "category": current_category,
            "layers": layer_map.get(current_category, []),
            "type": "narrative" if num in NARRATIVE_IDS else "factual",
        })

    # 중복 제거 (같은 번호 최초만)
    seen, deduped = set(), []
    for q in questions:
        if q['num'] not in seen:
            seen.add(q['num'])
            deduped.append(q)

    return sorted(deduped, key=lambda x: x['num'])


# ── atom 컨텍스트 빌드 ─────────────────────────────────────────────────────
def build_atom_context(graph_path: Path, detail_path: Path) -> str:
    with open(graph_path, encoding='utf-8') as f:
        graph = json.load(f)
    with open(detail_path, encoding='utf-8') as f:
        detail_data = json.load(f)

    detail = detail_data.get('atoms', {})
    nodes = graph.get('nodes', [])

    lines = ["# Aurora v2 — 증거 atom 컨텍스트 (150개 질의 답변용)\n"]
    lines.append("## 프로젝트 개요")
    lines.append("2016년 국방통합데이터센터(DIDC) 북한 해킹 사건과 국방부·조사본부·군 검찰단의 조직적 은폐를 7층위 증명체계로 입증하는 시스템.")
    lines.append("저자: 한지훈 (KIATIS 사업관리팀장, 피해 당사자·제보자)\n")

    lines.append("## 7층위 구조")
    layers = [
        "L1: Active-X 제거 사업 간 舊KIATIS 이력 제거 (해킹 근원서버 은폐)",
        "L2: 新KIATIS 사업 추진체계 및 장교 개인 자력 조작",
        "L3: 국전원 전속 후 SW개발사업관리 착수·종결 (카르텔 공모 구조)",
        "L4: 新KIATIS 개발·운영·시험평가 전·중·후 조작",
        "L5: 허위 갑질 신고와 조사본부의 조작 감사 (인권침해·고립화)",
        "L6: 군 검찰단의 사기 수사와 범죄자 낙인 (증거 인멸·문서 조작)",
        "L7: 진정서 제출·수사 촉구 후 기소유예 (국방부의 지속적 범죄 정당화)",
    ]
    lines.extend(layers)
    lines.append("")

    lines.append("## 핵심 atom 목록 (증거 단위)\n")
    for node in nodes:
        nid = node['id']
        det = detail.get(nid, {})
        title = node.get('titleKo') or node.get('title', '')
        layer = node.get('layer', 0)
        verdict = node.get('verdict', '')
        persons = node.get('persons', [])
        record_nos = node.get('recordNos', [])
        claim = det.get('claim', '')[:200] if det else ''
        fracture = node.get('fractureType', '')

        line_parts = [f"[{nid}] L{layer} | {verdict}"]
        if title:
            line_parts.append(f"제목: {title}")
        if persons:
            line_parts.append(f"관련인물: {', '.join(persons)}")
        if record_nos:
            recs = [f"R.{r:,}" for r in record_nos[:3]]
            line_parts.append(f"Record: {', '.join(recs)}")
        if fracture:
            line_parts.append(f"균열유형: {fracture}")
        if claim:
            line_parts.append(f"주장: {claim}")

        lines.append(" | ".join(line_parts))

    return "\n".join(lines)


# ── 단일 질문 답변 생성 ────────────────────────────────────────────────────
SYSTEM_PROMPT = """당신은 Aurora v2 자기 증명 시스템의 답변 생성 전문가입니다.
13,528쪽 증거 기록과 296개 atom에 기반하여 정확하고 증거 기반의 답변을 생성합니다.

규칙:
1. 모든 답변은 증거 atom에 근거해야 합니다 (atom ID 인용)
2. 추측이나 의견이 아닌 증거 사실만 서술
3. 가명 사용 필수 — 실명 절대 금지
4. Record No. 인용 시 원본 형식 유지 (예: Record No. 2,853)
5. 기소유예 = 범죄 낙인 (무죄 아님, 사건 종료 아님)
6. 한글 답변: 300~500자 / 영문 답변: 200~350 words"""

def generate_answer(client: anthropic.Anthropic, question: dict,
                    atom_context: str, dry_run: bool = False) -> dict:
    if dry_run:
        return {
            "id": question['id'],
            "q_ko": question['q_ko'],
            "q_en": f"[DRY-RUN] {question['q_ko'][:50]}",
            "answer_ko": "[DRY-RUN] 답변",
            "answer_en": "[DRY-RUN] Answer",
            "relatedAtoms": [],
            "fractures": [],
            "layers": question['layers'],
            "keyPersons": [],
            "category": question['category'],
            "type": question['type'],
        }

    user_content = f"""다음 질문에 대해 atom 컨텍스트를 참고하여 답변을 생성하세요.

질문 번호: {question['id']}
질문 유형: {question['type']}
질문 (한글): {question['q_ko']}

다음 JSON 형식으로만 응답하세요 (다른 텍스트 없이):
{{
  "q_en": "English translation of the question",
  "answer_ko": "한글 답변 (300~500자, 증거 atom ID 인용)",
  "answer_en": "English answer (200~350 words, citing atom IDs)",
  "relatedAtoms": ["FR-L1-XXX", "FR-L4-YYY"],
  "fractures": ["F-SC", "F-AA"],
  "layers": [1, 4],
  "keyPersons": ["김민수", "이지영"]
}}"""

    # 혼합 모델: narrative형은 Sonnet, factual형은 Haiku
    model = MODEL_SONNET if question['type'] == 'narrative' else MODEL_HAIKU

    response = client.messages.create(
        model=model,
        max_tokens=1200,
        system=SYSTEM_PROMPT,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": atom_context,
                        "cache_control": {"type": "ephemeral"},
                    },
                    {
                        "type": "text",
                        "text": user_content,
                    }
                ]
            }
        ]
    )

    raw = response.content[0].text.strip()
    # JSON 추출
    json_match = re.search(r'\{[\s\S]+\}', raw)
    if not json_match:
        raise ValueError(f"JSON 파싱 실패: {raw[:200]}")

    data = json.loads(json_match.group())

    return {
        "id": question['id'],
        "num": question['num'],
        "q_ko": question['q_ko'],
        "q_en": data.get('q_en', ''),
        "answer_ko": data.get('answer_ko', ''),
        "answer_en": data.get('answer_en', ''),
        "relatedAtoms": data.get('relatedAtoms', []),
        "fractures": data.get('fractures', []),
        "layers": data.get('layers', question['layers']),
        "keyPersons": data.get('keyPersons', []),
        "category": question['category'],
        "type": question['type'],
    }


# ── 메인 ───────────────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description='Aurora v2 preset-answers.json 생성')
    parser.add_argument('--start', type=int, default=1, help='시작 질문 번호 (1-150)')
    parser.add_argument('--end', type=int, default=150, help='종료 질문 번호 (1-150)')
    parser.add_argument('--resume', action='store_true', help='기존 진행 이어서')
    parser.add_argument('--dry-run', action='store_true', help='API 호출 없이 파싱만')
    parser.add_argument('--delay', type=float, default=0.5, help='API 호출 간 대기(초)')
    args = parser.parse_args()

    # 질문 파싱
    print(f"질문 파싱 중: {QUESTIONS_FILE.name}")
    questions = parse_questions(QUESTIONS_FILE)
    print(f"파싱 완료: {len(questions)}개 질문")

    # 범위 필터
    questions = [q for q in questions if args.start <= q['num'] <= args.end]
    print(f"처리 대상: {len(questions)}개 (Q{args.start:03d}~Q{args.end:03d})")

    # 기존 결과 로드 (resume 모드)
    existing = {}
    if args.resume and OUTPUT_FILE.exists():
        with open(OUTPUT_FILE, encoding='utf-8') as f:
            prev = json.load(f)
        for item in prev.get('answers', []):
            existing[item['id']] = item
        print(f"기존 결과 로드: {len(existing)}개")
        questions = [q for q in questions if q['id'] not in existing]
        print(f"미처리 질문: {len(questions)}개")

    if not questions:
        print("모든 질문 처리 완료.")
        return

    # atom 컨텍스트 빌드
    print("atom 컨텍스트 빌드 중...")
    atom_context = build_atom_context(GRAPH_JSON, DETAIL_JSON)
    print(f"컨텍스트 크기: {len(atom_context):,}자 (~{len(atom_context)//4:,} 토큰 추정)")

    if args.dry_run:
        print("\n[DRY-RUN 모드] API 호출 없이 파싱 결과만 확인")
        for q in questions[:5]:
            print(f"  {q['id']}: {q['q_ko'][:60]}... [{q['type']}]")
        print(f"  ... 총 {len(questions)}개")
        return

    # API 클라이언트
    api_key = os.environ.get('ANTHROPIC_API_KEY')
    if not api_key:
        print("ERROR: ANTHROPIC_API_KEY 환경변수 미설정")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key)

    # 생성 루프
    results = list(existing.values())
    errors = []

    for i, q in enumerate(questions, 1):
        model_tag = "S" if q['type'] == 'narrative' else "H"
        print(f"[{i:3d}/{len(questions)}][{model_tag}] {q['id']} {q['q_ko'][:40]}...", end=' ', flush=True)
        try:
            answer = generate_answer(client, q, atom_context)
            results.append(answer)
            print(f"✓ atoms:{len(answer['relatedAtoms'])} L:{answer['layers']}")

            # 중간 저장 (10개마다)
            if i % 10 == 0:
                _save(results, OUTPUT_FILE)
                print(f"  → 중간 저장: {len(results)}개")

        except Exception as e:
            errors.append({'id': q['id'], 'error': str(e)})
            print(f"✗ ERROR: {e}")

        if args.delay > 0 and i < len(questions):
            time.sleep(args.delay)

    # 최종 저장
    _save(results, OUTPUT_FILE)

    print(f"\n완료: {len(results)}개 저장 → {OUTPUT_FILE}")
    if errors:
        print(f"오류: {len(errors)}개")
        for e in errors:
            print(f"  {e['id']}: {e['error']}")


def _save(results: list, output_path: Path):
    output_path.parent.mkdir(parents=True, exist_ok=True)
    sorted_results = sorted(results, key=lambda x: x.get('num', 0))
    payload = {
        "_meta": {
            "generator": "generate-preset-answers.py",
            "model": MODEL,
            "count": len(sorted_results),
        },
        "answers": sorted_results,
    }
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    main()
