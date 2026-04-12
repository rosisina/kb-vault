#!/usr/bin/env bash
# Validates wiki article contract on write/edit.
# Runs on every Write/Edit. Only inspects files under wiki/ that look like articles
# (not _index.md, not log.md, not _master-index.md, not _contradictions.md, not _examples/).
# Exits 0 on success, non-zero with a message on violation.

set -euo pipefail

# Read the tool input from stdin (Claude Code hooks convention)
INPUT="$(cat || true)"
FILE_PATH="$(printf '%s' "$INPUT" | python3 -c 'import json,sys
try:
    d=json.loads(sys.stdin.read())
    p=d.get("tool_input",{}).get("file_path","")
    print(p)
except Exception:
    print("")' 2>/dev/null || echo "")"

# Nothing to check if no file path
[ -z "$FILE_PATH" ] && exit 0

# Only validate wiki article files
case "$FILE_PATH" in
  */wiki/*) ;;
  *) exit 0 ;;
esac

# Skip non-articles
base="$(basename "$FILE_PATH")"
case "$base" in
  _index.md|_master-index.md|log.md|_contradictions.md|timeline.md|_record-index.md|_evidence-catalog.md) exit 0 ;;
esac
case "$FILE_PATH" in
  */_examples/*) exit 0 ;;
esac

# File may not exist yet if Write hasn't flushed; tolerate that
[ -f "$FILE_PATH" ] || exit 0

missing=()
grep -q '^\*\*Source:\*\*' "$FILE_PATH" || missing+=("**Source:** line")
grep -q '^\*\*Layer:\*\*'  "$FILE_PATH" || missing+=("**Layer:** line")
grep -q '^## Key Takeaways' "$FILE_PATH" || missing+=("## Key Takeaways section")
grep -q '^## Related'      "$FILE_PATH" || missing+=("## Related section")

# Extra contract for claim atoms under wiki/claims/ (A.6 Re-verify requirements)
case "$FILE_PATH" in
  */wiki/claims/*)
    grep -q '^## Supporting evidence' "$FILE_PATH" || missing+=("## Supporting evidence section (required for claim atoms)")
    grep -q '^## Spot-check'          "$FILE_PATH" || missing+=("## Spot-check (raw/01 book) section (required for claim atoms per A.6 spot-check rule)")
    ;;
esac

if [ ${#missing[@]} -gt 0 ]; then
  printf 'wiki article contract violation in %s: missing %s\n' "$FILE_PATH" "${missing[*]}" >&2
  exit 2
fi

exit 0
