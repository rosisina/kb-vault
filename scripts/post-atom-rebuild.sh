#!/usr/bin/env bash
# post-atom-rebuild.sh — lightweight PostToolUse rebuild hook.
#
# If the edited file is under wiki/claims/, rebuilds graph.json and
# deploys to Angular assets. Target runtime: <2 seconds.

set -euo pipefail

VAULT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ANGULAR_ASSETS="/Users/a0/Projects/defense-kg-platform/angular-app/src/assets"

# Read tool input from stdin (Claude Code hooks convention)
INPUT="$(cat || true)"
FILE_PATH="$(printf '%s' "$INPUT" | python3 -c '
import json, sys
try:
    d = json.loads(sys.stdin.read())
    p = d.get("tool_input", {}).get("file_path", "")
    print(p)
except Exception:
    print("")
' 2>/dev/null || echo "")"

# Only act on wiki/claims/ edits
case "$FILE_PATH" in
  */wiki/claims/*) ;;
  *) exit 0 ;;
esac

# Rebuild graph.json
cd "$VAULT_ROOT"
python3 scripts/atoms-to-graph-json.py 2>/dev/null

# Deploy to Angular assets
if [ -d "$ANGULAR_ASSETS" ] && [ -f "output/graph.json" ]; then
    cp "output/graph.json" "$ANGULAR_ASSETS/graph.json"
fi

printf '[rebuild] graph.json updated (%s)\n' "$(basename "$FILE_PATH")"
exit 0
