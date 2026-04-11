#!/usr/bin/env bash
# PreToolUse hook for Write|Edit on wiki/ files.
# Reads the proposed file content from the tool input and rejects it if any
# real name from defense-kg-platform/kg/pseudonym_mapping.json appears.
# Exits 2 with a message on violation (Claude must fix and retry).

set -euo pipefail

INPUT="$(cat || true)"

# Extract file_path and content from the tool input. Both Write and Edit
# use a JSON envelope under tool_input. Write uses `content`; Edit uses
# `new_string`. We check whichever is present.
read -r FILE_PATH BODY < <(printf '%s' "$INPUT" | python3 -c '
import json, sys
try:
    d = json.loads(sys.stdin.read())
    ti = d.get("tool_input", {}) or {}
    fp = ti.get("file_path", "") or ""
    body = ti.get("content", "") or ti.get("new_string", "") or ""
    # Single-line escape: replace newlines with \x1f so we can pass via read
    body = body.replace("\n", "\x1f")
    print(fp, body)
except Exception:
    print("", "")
' 2>/dev/null || echo "")

# Nothing to check if no file path or no body
[ -z "${FILE_PATH:-}" ] && exit 0
[ -z "${BODY:-}" ] && exit 0

# Only enforce on wiki/ writes
case "$FILE_PATH" in
  */wiki/*) ;;
  *) exit 0 ;;
esac

# Locate the pseudonym mapping (sister project)
REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
MAPPING="$REPO_ROOT/../defense-kg-platform/kg/pseudonym_mapping.json"

# If the mapping is not present, fail open with a warning to stderr
# (developers without the sister project should not be blocked, but should be told)
if [ ! -f "$MAPPING" ]; then
  printf 'check-pseudonym: mapping file not found at %s — skipping enforcement\n' "$MAPPING" >&2
  exit 0
fi

# Restore newlines, then run the Python checker
printf '%s' "$BODY" | tr '\x1f' '\n' | python3 - "$MAPPING" "$FILE_PATH" <<'PY'
import json, re, sys

mapping_path = sys.argv[1]
file_path = sys.argv[2]
body = sys.stdin.read()

try:
    with open(mapping_path, "r", encoding="utf-8") as f:
        mapping = json.load(f)
except Exception as e:
    # Fail open on mapping read error — log to stderr but do not block
    print(f"check-pseudonym: failed to read mapping ({e}) — skipping", file=sys.stderr)
    sys.exit(0)

# Mapping shape: list of dicts with origin_name_kr / origin_name_en /
# pseudo_name_kr / pseudo_name_en (per evidence-linker SKILL.md).
# Some projects wrap it as {"mappings": [...]}; tolerate both.
if isinstance(mapping, dict):
    entries = mapping.get("mappings") or mapping.get("entries") or list(mapping.values())
elif isinstance(mapping, list):
    entries = mapping
else:
    entries = []

violations = []
for entry in entries:
    if not isinstance(entry, dict):
        continue
    for key in ("origin_name_kr", "origin_name_en"):
        real = entry.get(key)
        if not real or not isinstance(real, str):
            continue
        real = real.strip()
        if len(real) < 2:
            continue
        # Word-boundary match for ASCII; substring match for Hangul
        if re.search(r"[A-Za-z]", real):
            pattern = r"\b" + re.escape(real) + r"\b"
            if re.search(pattern, body):
                violations.append((real, entry.get("pseudo_name_kr") or entry.get("pseudo_name_en") or "?"))
        else:
            if real in body:
                violations.append((real, entry.get("pseudo_name_kr") or entry.get("pseudo_name_en") or "?"))

if violations:
    print(f"check-pseudonym: REAL NAME(S) DETECTED in proposed write to {file_path}", file=sys.stderr)
    for real, pseudo in violations:
        print(f"  - '{real}' must be redacted to pseudonym '{pseudo}'", file=sys.stderr)
    print("", file=sys.stderr)
    print("This is a critical vault rule. Substitute every occurrence with the listed", file=sys.stderr)
    print("pseudonym before retrying the write. See CLAUDE.md §Conventions and", file=sys.stderr)
    print("../defense-kg-platform/kg/pseudonym_mapping.json.", file=sys.stderr)
    sys.exit(2)

sys.exit(0)
PY
