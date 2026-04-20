#!/usr/bin/env python3
"""
Generate paper.json from Beyond Cybersecurity summary paper (127-page version)

Pre-processing pipeline:
  1. Skip YAML frontmatter
  2. Skip cover OCR noise (before # TERMS AND ABBREVIATIONS)
  3. Skip TOC-only zone (## 1. Introduction → # PREFACE)
  4. Upgrade plain-text section numbers to markdown headings
     e.g. "3.1.\n\nLayer 1: Title" → "### 3.1. Layer 1: Title"
  5. Inject figure/table images before <Figure N> captions
  6. Remove inline footnote numbers / URL blocks
  7. Normalize image references (Obsidian wiki-links → standard markdown)
  8. Sanitize image filenames for URL safety
"""

import re
import json
import shutil
from pathlib import Path

# ── Paths ──────────────────────────────────────────────────────────────────
MD_FILE   = Path("/Users/a0/Projects/knowledge-base/raw/77. 100-pages summerizing paper(english)/updated-paper-beyond-cybersecurity.md")
OUTPUT_FILE = Path("/Users/a0/Projects/knowledge-base/.claude/worktrees/hardcore-cerf-d5b6c0/ui/src/assets/paper.json")
IMG_SRC   = Path("/Users/a0/Projects/knowledge-base/raw/77. 100-pages summerizing paper(english)/image-files/")
IMG_DEST  = Path("/Users/a0/Projects/knowledge-base/.claude/worktrees/hardcore-cerf-d5b6c0/ui/src/assets/paper-images/")

# ── Figure / Table → safe filename mapping ─────────────────────────────────
# Maps (kind, number) → (source filename in image-files/, safe dest filename)
FIGURE_FILE_MAP: dict[tuple[str, int], tuple[str, str]] = {
    ('Figure', 1):  ('<Figure 1> Diagram revealing the source server, location, and operation of the DIDC hacking incident exposed by this thesis  .png',
                     'Figure_1_DIDC_Hacking_Root_Server_Diagram.png'),
    ('Figure', 2):  ('<Figure 2> Visualization of the integrated 7-layer proof system of this thesis .png',
                     'Figure_2_7Layer_Proof_System_Visualization.png'),
    ('Figure', 3):  ("<Figure 3> Cyberspace centered on the Republic of Korea's defense .png",
                     'Figure_3_ROK_Defense_Cyberspace.png'),
    ('Figure', 4):  ('<Figure 4> Cyberspace as a Mirror Image of Behavior Patterns of a Human Being .png',
                     'Figure_4_Cyberspace_Mirror_Image_Behavior_Patterns.png'),
    ('Figure', 5):  ('<Figure 5> Operational view of the old KIATIS within the DIDC server on the Internet .png',
                     'Figure_5_Old_KIATIS_Operational_View_DIDC_Server.png'),
    ('Figure', 6):  (' <Figure 6> Connection to the Old KIATIS in the Active-X Removal Project .png',
                     'Figure_6_Old_KIATIS_ActiveX_Removal_Project.png'),
    ('Figure', 7):  ('<Figure 7> Roles and Responsibilities of Agencies in Defense Informatization Projects .png',
                     'Figure_7_Roles_Responsibilities_Defense_Informatization.png'),
    ('Figure', 8):  ('<Figure 8> Comparative Analysis of Roles and Responsibilities in Separation:Integration Testing and Evaluation of Development and Operations.png',
                     'Figure_8_Separation_Integration_Testing.png'),
    ('Figure', 9):  ("<Figure 9> Comparative Analysis of KIATIS' Actual Operational Environment and (Operational) Test Evaluation Environment .png",
                     'Figure_9_KIATIS_Operational_vs_Test_Environment.png'),
    ('Figure', 10): ('<Figure 10> Comparative Analysis of the Actual Operating Environment of Old:New KIATIS and the Test Evaluation Environment of the New KIATIS Project .png',
                     'Figure_10_Old_New_KIATIS_Operating_vs_Test_Environment.png'),
    ('Figure', 11): ('<Figure 11> Planning and operation of the defense informatization cartel appearing in test and evaluation integration logic.png',
                     'Figure_11_Defense_Informatization_Cartel_Logic.png'),
    ('Figure', 12): ('<Figure 12> Panorama of long-term organized and collective collusion, manipulation, and concealment by Ministry of National Defense organizations.png',
                     'Figure_12_Panorama_Organized_Collusion_MND.png'),
    ('Figure', 13): ('<Figure 13> Key Source Materials and Approach for Proving the Substance of False Abuse Reports and Fraudulent Audits.png',
                     'Figure_13_Key_Sources_Proving_False_Abuse.png'),
    ('Figure', 14): ('<Figure 14> Traceability Diagram of the Entire Organized Manipulation Network.png',
                     'Figure_14_Traceability_Diagram_Manipulation_Network.png'),
    ('Table',  1):  ('<Table 1> Organizational Structure for the New KIATIS Project  .png',
                     'Table_1_Organizational_Structure_New_KIATIS.png'),
    ('Table',  3):  ('<Table 3> Manipulation of KIDA Research Reports and Associated Manipulation of Evaluation Procedures in Defense Ministry Directives .png',
                     'Table_3_KIDA_Research_Manipulation_Evaluation.png'),
}
# Table 2 has no image-files/ source → keep existing ZIP-extracted file
TABLE2_DEST = 'Table_2_Comparative_Analysis_Roles_Responsibilities.png'

# Flat lookup: safe filename → exists
SAFE_NAMES: set[str] = {v[1] for v in FIGURE_FILE_MAP.values()} | {TABLE2_DEST}

# Number → safe filename for injection
def _build_num_map() -> dict[tuple[str, int], str]:
    m: dict[tuple[str, int], str] = {k: v[1] for k, v in FIGURE_FILE_MAP.items()}
    m[('Table', 2)] = TABLE2_DEST
    return m
NUM_TO_SAFE = _build_num_map()

# ── Image filename normalization (for Obsidian ![[images/...]]) ────────────
def sanitize_img_name(raw_name: str) -> str:
    """<Figure N> Description .png → Figure_N_*.png (URL-safe)"""
    m = re.match(r'\s*<(Figure|Table)\s+(\d+(?:\.\d+)?)>', raw_name, re.IGNORECASE)
    if m:
        kind = m.group(1).title()
        num  = int(m.group(2)) if m.group(2).isdigit() else 0
        key  = (kind, num)
        if key in FIGURE_FILE_MAP:
            return FIGURE_FILE_MAP[key][1]
        # Fallback: build safe name
        slug = re.sub(r'[<>:"/\\|?*\s]+', '_', raw_name.strip()).strip('_')
        return f"{kind}_{num}_{slug}.png"
    n = re.sub(r'[<>:"/\\|?*]+', '', raw_name.strip())
    n = re.sub(r'\s+', '-', n)
    return n

def normalize_img_refs(text: str) -> str:
    """Replace ![[images/RAW.png]] with ![ALT](./images/SAFE.png)"""
    def sub(m):
        raw  = m.group(1)
        safe = sanitize_img_name(raw)
        am   = re.match(r'\s*<(Figure|Table)\s+(\d+(?:\.\d+)?)>', raw, re.IGNORECASE)
        alt  = f"{am.group(1)} {am.group(2)}" if am else raw.strip()
        return f"![{alt}](./images/{safe})"
    return re.sub(r'!\[\[images/([^\]]+\.png)\]\]', sub, text)

# ── Pre-processing: upgrade plain-text section numbers to headings ──────────
def upgrade_plain_section_headings(text: str) -> str:
    """
    Convert isolated section-number lines to markdown headings.

    Pattern in source content:
        3.1.          (alone on a line, preceded by blank)

        Layer 1: Title Text   (next non-blank line = title)

    Becomes:  ### 3.1. Layer 1: Title Text

    Depth mapping:
        N.N.     (depth=2) → ###
        N.N.N.   (depth=3) → ####
        N.N.N.N. (depth=4) → #####

    Only lines with a TRAILING DOT are treated as section numbers,
    to avoid converting date strings like "7.1" or "12.4".
    """
    lines = text.split('\n')
    result: list[str] = []
    i = 0

    while i < len(lines):
        stripped = lines[i].strip()

        # Must have trailing dot AND depth >= 2 to be a section number
        m = re.match(r'^(\d+(?:\.\d+)+\.)\s*$', stripped)
        if m:
            num_str = m.group(1).rstrip('.')
            parts   = [p for p in num_str.split('.') if p]
            depth   = len(parts)

            if 2 <= depth <= 5:
                # Only convert if IMMEDIATELY preceded by blank line (or start of text)
                prev_raw = result[-1] if result else ''
                if not prev_raw.strip():
                    # Skip blank lines to find title
                    j = i + 1
                    while j < len(lines) and not lines[j].strip():
                        j += 1

                    if j < len(lines):
                        next_line = lines[j].strip()
                        # If next non-blank is also a section number → stub heading
                        m2 = re.match(r'^(\d+(?:\.\d+)+\.)\s*$', next_line)
                        if m2:
                            hashes = '#' * (depth + 1)
                            result.append(f'{hashes} {num_str}.')
                            i += 1
                            continue

                        # Next is a title line
                        if next_line and not re.match(r'^#+\s', next_line):
                            hashes = '#' * (depth + 1)
                            result.append(f'{hashes} {num_str}. {next_line}')
                            i = j + 1
                            continue

        result.append(lines[i])
        i += 1

    return '\n'.join(result)

# ── Pre-processing: inject images before <Figure N> / <Table N> captions ───
def inject_figure_images(text: str) -> str:
    """
    For each line beginning with '<Figure N>' or '<Table N>' that is NOT
    already preceded by an image reference, inject the corresponding
    '![Figure N](./images/SAFE.png)' on the line above.
    """
    lines = text.split('\n')
    result: list[str] = []

    for line in lines:
        m = re.match(r'^<(Figure|Table)\s+(\d+)>', line.strip(), re.IGNORECASE)
        if m:
            kind = m.group(1).title()
            num  = int(m.group(2))
            key  = (kind, num)
            if key in NUM_TO_SAFE:
                safe = NUM_TO_SAFE[key]
                # Check if the previous non-empty line is already an image ref
                prev = next((l for l in reversed(result) if l.strip()), '')
                if not prev.startswith('![') and not prev.startswith('![['):
                    result.append(f'![{kind} {num}](./images/{safe})')
        result.append(line)

    return '\n'.join(result)

# ── Text cleaning ───────────────────────────────────────────────────────────
FOOTNOTE_INLINE = re.compile(r'(?<=[a-zA-Z\)\.\,])\s{1,3}(\d{1,3})[,\.](?=\s|$)')
URL_LINE        = re.compile(r'^\s*https?://\S+\s*$', re.MULTILINE)

def clean_body(text: str) -> str:
    # Remove inline footnote numbers
    text = FOOTNOTE_INLINE.sub('', text)
    # Remove footnote reference blocks (digit + citation + URL)
    text = re.sub(r'\n\d{1,3}\s+[A-Z][^\n]+\n\s*https?://[^\n]+', '', text)
    # Remove standalone URL lines
    text = URL_LINE.sub('', text)
    # Normalize figure/table captions: <Figure N> text → **<Figure N> text**
    text = re.sub(r'^<(Figure|Table)\s+(\d+(?:\.\d+)?)>([^\n]+)',
                  lambda m: f"**<{m.group(1)} {m.group(2)}>{m.group(3)}**",
                  text, flags=re.MULTILINE)
    # Normalize image refs
    text = normalize_img_refs(text)
    # Clean trailing whitespace
    text = '\n'.join(line.rstrip() for line in text.split('\n'))
    # Collapse 3+ blank lines to 2
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()

# ── Layer detection ─────────────────────────────────────────────────────────
def detect_layer(title: str) -> int | None:
    t = title.lower()
    # Ordinals must appear adjacent to "layer" (e.g. "first layer", "fifth layer")
    # to avoid false positives from sentence-initial words like "First, both..."
    ordinals = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']
    for i, word in enumerate(ordinals, 1):
        if re.search(r'\b' + word + r'[-\s]layer\b|\blayer[-\s]' + word + r'\b', t):
            return i
    for i in range(1, 8):
        if f'layer {i}' in t or f'layer‑{i}' in t or f'layer-{i}' in t:
            return i
    # Section-number prefix: 3.N.xxx → Layer N (handles deep nesting like 3.1.1.1.)
    m = re.match(r'3\.(\d)[\.\s]', title)
    if m and 1 <= int(m.group(1)) <= 7:
        return int(m.group(1))
    return None

# ── Section ID generation ───────────────────────────────────────────────────
def make_id(counter: int, title: str) -> str:
    slug = re.sub(r'[^\w\s-]', '', title.lower())
    slug = re.sub(r'[\s_]+', '-', slug.strip())[:50].strip('-')
    return f"s{counter:03d}-{slug}"

# ── Main parsing ────────────────────────────────────────────────────────────
def parse(content: str):
    lines = content.split('\n')

    # 1. Skip YAML frontmatter
    start = 0
    if lines[0].strip() == '---':
        for i in range(1, len(lines)):
            if lines[i].strip() == '---':
                start = i + 1
                break

    # 2. Find "# TERMS AND ABBREVIATIONS" — real content starts here
    terms_start = None
    for i, line in enumerate(lines[start:], start):
        if re.match(r'^#\s+TERMS AND ABBREVIATIONS', line):
            terms_start = i
            break
    if terms_start is None:
        terms_start = start

    # 3. Find TOC zone: ## 1. Introduction → # PREFACE
    #    Everything between these two headings is the Table of Contents listing
    #    (headings without body content) — skip to avoid duplicate empty sections.
    preface_line = None
    intro_line   = None
    for i, line in enumerate(lines[terms_start:], terms_start):
        if re.match(r'^##\s+1\.\s+Introduction', line) and intro_line is None:
            intro_line = i
        if re.match(r'^#\s+PREFACE', line):
            preface_line = i
            break

    def in_toc_zone(i: int) -> bool:
        if intro_line is None or preface_line is None:
            return False
        return intro_line <= i < preface_line

    # 4. Apply section-number upgrade AFTER identifying zone boundaries
    #    Only process post-PREFACE content lines
    upgraded_lines: list[str] = []
    for i, line in enumerate(lines):
        upgraded_lines.append(line)

    # Build text from post-PREFACE content for upgrade
    if preface_line is not None:
        post_content = '\n'.join(lines[preface_line:])
        post_upgraded = upgrade_plain_section_headings(post_content)
        post_upgraded = inject_figure_images(post_upgraded)
        upgraded_lines = lines[:preface_line] + post_upgraded.split('\n')
    else:
        full_text = '\n'.join(lines[terms_start:])
        full_upgraded = upgrade_plain_section_headings(full_text)
        full_upgraded = inject_figure_images(full_upgraded)
        upgraded_lines = lines[:terms_start] + full_upgraded.split('\n')

    lines = upgraded_lines  # Use upgraded lines for parsing

    # ── Build segments ─────────────────────────────────────────────────────
    segments: list[tuple[int, str, list[str]]] = []
    cur_level = 0
    cur_title = ''
    cur_body:  list[str] = []

    def flush():
        if cur_title:
            body = clean_body('\n'.join(cur_body))
            segments.append((cur_level, cur_title, body))

    for i, line in enumerate(lines[terms_start:], terms_start):
        if in_toc_zone(i):
            continue

        m = re.match(r'^(#{1,6})\s+(.+)$', line)
        if m:
            flush()
            cur_level = len(m.group(1))
            cur_title = m.group(2).strip()
            # Remove trailing dot-leaders (TOC page numbers): "Title…………1"
            cur_title = re.sub(r'[.…·⋯\u2026]+\s*\d*\s*$', '', cur_title).strip()
            cur_body  = []
        else:
            if cur_title:
                cur_body.append(line)

    flush()

    # ── Build sections + TOC ────────────────────────────────────────────────
    toc:      list[dict] = []
    sections: list[dict] = []
    counter = 0

    for level, title, body in segments:
        counter += 1
        sid   = make_id(counter, title)
        layer = detect_layer(title)

        # Map heading depth → section level (1=major, 2=sub, 3=detail)
        if level == 1:
            sec_level = 1
        elif level == 2:
            sec_level = 2
        else:
            sec_level = 3

        section: dict = {'id': sid, 'level': sec_level, 'title': title, 'body': body}
        if layer is not None:
            section['layer'] = layer
        sections.append(section)

        # TOC: include levels 1–4 (####); level 5–6 stay in body only
        if level <= 4:
            entry: dict = {
                'id':    sid,
                'title': title[:60] + ('…' if len(title) > 60 else ''),
                'level': 1 if level == 1 else 2,
            }
            if layer is not None:
                entry['layer'] = layer
            toc.append(entry)

    return toc, sections

# ── Image copy ──────────────────────────────────────────────────────────────
def copy_images():
    IMG_DEST.mkdir(parents=True, exist_ok=True)
    copied = 0

    # Copy from image-files/ using the explicit mapping
    for (kind, num), (src_name, dest_name) in FIGURE_FILE_MAP.items():
        src = IMG_SRC / src_name
        dst = IMG_DEST / dest_name
        if src.exists():
            shutil.copy2(src, dst)
            copied += 1
            print(f"  [{kind} {num}]  {src_name[:60]!r} → {dest_name}")
        else:
            print(f"  ⚠ missing: {src}")

    # Table 2 has no image-files/ source; keep the ZIP-extracted file if present
    t2 = IMG_DEST / TABLE2_DEST
    if t2.exists():
        print(f"  [Table 2]  kept existing: {TABLE2_DEST}")
    else:
        print(f"  ⚠ Table 2 image not found (no source in image-files/)")

    return copied

# ── Entry point ─────────────────────────────────────────────────────────────
def main():
    print(f"Reading: {MD_FILE}")
    content = MD_FILE.read_text(encoding='utf-8')

    toc, sections = parse(content)

    paper = {
        'title':    'Beyond Cybersecurity',
        'subtitle': "APT-Style Individual Targeted Attacks by ROK MND's Defense Department Agencies "
                    "and Affiliated Organizations (2017.8.7 ~ 2022.10.11)",
        'author':   'Youngju, LEE',
        'date':     'November 2025',
        'toc':      toc,
        'sections': sections,
    }

    OUTPUT_FILE.write_text(json.dumps(paper, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f"\n✓ paper.json written: {OUTPUT_FILE}")
    print(f"  TOC entries : {len(toc)}")
    print(f"  Sections    : {len(sections)}")

    empty = [s for s in sections if not s['body'].strip()]
    large = [s for s in sections if len(s['body']) > 50000]
    print(f"  Empty bodies: {len(empty)}")
    print(f"  Large (>50k): {len(large)}")
    for s in large:
        print(f"    [{s['id']}] {s['title'][:60]} — {len(s['body'])} chars")

    # Show layer assignment summary
    from collections import Counter
    layer_counts = Counter(s.get('layer') for s in sections if s.get('layer'))
    print(f"\n  Layer assignments: {dict(sorted(layer_counts.items()))}")

    # Show new ### sections (the converted plain-text headings)
    new_secs = [s for s in sections if re.match(r'^\d+\.\d+', s['title'])]
    print(f"\n  Numbered sections (converted): {len(new_secs)}")
    for s in new_secs[:20]:
        print(f"    L{s.get('layer', '-')}  {s['title'][:70]}")

    print(f"\nCopying images: {IMG_SRC} → {IMG_DEST}")
    n = copy_images()
    print(f"✓ {n} images copied/verified")

if __name__ == '__main__':
    main()
