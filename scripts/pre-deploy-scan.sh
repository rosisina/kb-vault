#!/usr/bin/env bash
# pre-deploy-scan.sh — Layer 3 pseudonymization defense gate.
#
# Run this script BEFORE any deployment command (netlify deploy, gh-pages push, etc.).
# It scans the Angular production build output (ui/dist/) for real person names.
#
# Layer 1 (hook):    check-pseudonym.sh  — wiki/ writes blocked at author time
# Layer 2 (build):   scan-for-real-names.py — compiled JSON assets scanned post-build
# Layer 3 (deploy):  THIS SCRIPT — full dist/ tree scanned after ng build
#
# Usage:
#   bash scripts/pre-deploy-scan.sh [dist-path]
#
# Arguments:
#   dist-path   Optional. Path to the Angular dist output directory.
#               Defaults to ui/dist/aurora-ui (Angular 17 default output).
#
# Exit codes:
#   0  — clean, safe to deploy
#   1  — real names found in dist/  → DO NOT DEPLOY
#   2  — dist/ not found (run ng build first)

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PYTHON="${PYTHON:-python3}"

# Determine dist path
DIST_PATH="${1:-}"
if [[ -z "$DIST_PATH" ]]; then
    # Try common Angular output paths
    for candidate in \
        "$REPO_ROOT/ui/dist/aurora-ui/browser" \
        "$REPO_ROOT/ui/dist/aurora-ui" \
        "$REPO_ROOT/ui/dist"; do
        if [[ -d "$candidate" ]]; then
            DIST_PATH="$candidate"
            break
        fi
    done
fi

if [[ -z "$DIST_PATH" || ! -d "$DIST_PATH" ]]; then
    echo "[pre-deploy-scan] ERROR: dist/ directory not found."
    echo "  Run 'cd ui && ng build --configuration production' first,"
    echo "  then re-run this script."
    exit 2
fi

echo "[pre-deploy-scan] Layer 3 pseudonymization scan"
echo "  target : $DIST_PATH"
echo "  scanner: $PYTHON scripts/scan-for-real-names.py"
echo ""

# Run Layer 2 scanner against dist/
"$PYTHON" "$REPO_ROOT/scripts/scan-for-real-names.py" "$DIST_PATH"
EXIT_CODE=$?

if [[ $EXIT_CODE -eq 0 ]]; then
    echo ""
    echo "[pre-deploy-scan] ✓ SAFE TO DEPLOY — dist/ is clean."
    echo "  Proceed with your deployment command."
elif [[ $EXIT_CODE -eq 1 ]]; then
    echo ""
    echo "[pre-deploy-scan] ✗ DEPLOYMENT BLOCKED — real names detected in dist/."
    echo "  Fix the source atoms, rebuild (ng build), then re-run this script."
    exit 1
else
    echo "[pre-deploy-scan] Configuration error — see above."
    exit 2
fi
