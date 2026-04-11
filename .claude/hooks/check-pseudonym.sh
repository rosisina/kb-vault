#!/usr/bin/env bash
# PreToolUse hook for Write|Edit on wiki/ files.
# Rejects any proposed write whose content contains a real name from
# ../defense-kg-platform/kg/pseudonym_mapping.json.
# Exits 2 with a message on violation (Claude must fix and retry).

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
MAPPING="$REPO_ROOT/../defense-kg-platform/kg/pseudonym_mapping.json"

# Capture the PreToolUse JSON envelope from the hook's stdin into an
# environment variable so the python heredoc can read it without
# colliding with its own heredoc stdin.
PRETOOL_PAYLOAD="$(cat || true)"
export PRETOOL_PAYLOAD
export PRETOOL_MAPPING="$MAPPING"

python3 <<'PY'
import json, os, re, sys

payload_raw = os.environ.get("PRETOOL_PAYLOAD", "")
mapping_path = os.environ.get("PRETOOL_MAPPING", "")

# 1. Parse the PreToolUse JSON envelope
try:
    payload = json.loads(payload_raw) if payload_raw else {}
except Exception:
    # Fail open on parse error — do not block on malformed input
    sys.exit(0)

ti = payload.get("tool_input", {}) or {}
file_path = ti.get("file_path", "") or ""
body = ti.get("content", "") or ti.get("new_string", "") or ""

# 2. Scope: only wiki/ writes with non-empty body
if not file_path or not body:
    sys.exit(0)
if "/wiki/" not in file_path:
    sys.exit(0)

# 3. Load mapping (fail open if absent)
if not mapping_path or not os.path.isfile(mapping_path):
    print(
        f"check-pseudonym: mapping not found at {mapping_path} — skipping enforcement",
        file=sys.stderr,
    )
    sys.exit(0)

try:
    with open(mapping_path, "r", encoding="utf-8") as f:
        mapping = json.load(f)
except Exception as e:
    print(f"check-pseudonym: mapping read failed ({e}) — skipping", file=sys.stderr)
    sys.exit(0)

# Tolerate both list-shaped and dict-wrapped mappings
if isinstance(mapping, dict):
    entries = mapping.get("mappings") or mapping.get("entries") or []
elif isinstance(mapping, list):
    entries = mapping
else:
    entries = []

# 4. Scan body for any origin (real) name
violations = []
seen = set()
for entry in entries:
    if not isinstance(entry, dict):
        continue
    for key in ("origin_name_kr", "origin_name_en"):
        real = entry.get(key)
        if not real or not isinstance(real, str):
            continue
        real = real.strip()
        if len(real) < 2 or real in seen:
            continue
        # Word-boundary match for ASCII; substring match for Hangul
        if re.search(r"[A-Za-z]", real):
            pattern = r"\b" + re.escape(real) + r"\b"
            hit = re.search(pattern, body) is not None
        else:
            hit = real in body
        if hit:
            pseudo = (
                entry.get("pseudo_name_kr")
                or entry.get("pseudo_name_en")
                or "?"
            )
            violations.append((real, pseudo, entry.get("id", "?")))
            seen.add(real)

# 5. Report and reject
if violations:
    print(
        f"check-pseudonym: REAL NAME(S) DETECTED in proposed write to {file_path}",
        file=sys.stderr,
    )
    for real, pseudo, rid in violations:
        print(
            f"  - '{real}' (mapping id {rid}) must be redacted to pseudonym '{pseudo}'",
            file=sys.stderr,
        )
    print("", file=sys.stderr)
    print(
        "This is a critical vault rule. Substitute every occurrence with the listed",
        file=sys.stderr,
    )
    print(
        "pseudonym before retrying the write. See CLAUDE.md §Conventions and",
        file=sys.stderr,
    )
    print(
        "../defense-kg-platform/kg/pseudonym_mapping.json.",
        file=sys.stderr,
    )
    sys.exit(2)

sys.exit(0)
PY
