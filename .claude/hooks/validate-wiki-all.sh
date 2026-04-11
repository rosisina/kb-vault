#!/usr/bin/env bash
# Sweep-validates every wiki article against the contract.
# Runs on SessionStart to catch drift introduced by manual edits between sessions.
# Reports violations to stdout (additionalContext for SessionStart) but does not block.

set -euo pipefail

WIKI_DIR="$(cd "$(dirname "$0")/../.." && pwd)/wiki"

# Nothing to do if wiki/ does not yet exist
[ -d "$WIKI_DIR" ] || exit 0

violations=()
total=0

while IFS= read -r -d '' f; do
  base="$(basename "$f")"
  case "$base" in
    _index.md|_master-index.md|log.md|_contradictions.md|timeline.md|_record-index.md) continue ;;
  esac
  case "$f" in
    */_examples/*) continue ;;
  esac

  total=$((total + 1))
  missing=()
  grep -q '^\*\*Source:\*\*' "$f" || missing+=("Source")
  grep -q '^\*\*Layer:\*\*'  "$f" || missing+=("Layer")
  grep -q '^## Key Takeaways' "$f" || missing+=("Key Takeaways")
  grep -q '^## Related'      "$f" || missing+=("Related")

  # Extra contract for claim atoms (A.6 Re-verify)
  case "$f" in
    */wiki/claims/*)
      grep -q '^## Supporting evidence' "$f" || missing+=("Supporting evidence")
      grep -q '^## Spot-check'          "$f" || missing+=("Spot-check")
      ;;
  esac

  if [ ${#missing[@]} -gt 0 ]; then
    rel="${f#"$WIKI_DIR"/}"
    violations+=("- wiki/$rel — missing: ${missing[*]}")
  fi
done < <(find "$WIKI_DIR" -type f -name '*.md' -print0)

if [ ${#violations[@]} -gt 0 ]; then
  printf 'WIKI CONTRACT DRIFT (%d/%d files violating, likely from manual edits):\n' "${#violations[@]}" "$total"
  printf '%s\n' "${violations[@]}"
  printf '\nFix these before further ingest. Each must have **Source:**, **Layer:**, ## Key Takeaways, ## Related. Claim atoms additionally need ## Supporting evidence and ## Spot-check.\n'
fi

exit 0
