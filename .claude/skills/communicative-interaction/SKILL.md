---
name: communicative-interaction
description: Generate a new communicative-interaction session log capturing the current Claude Code session's decisions, methodology, infrastructure changes, and state; rebuild the cumulative ALL-SESSIONS.docx; optionally commit and push the resulting changes to git. Invoke at end of session or at any natural checkpoint. TRIGGERS "세션 로그 만들어줘", "interaction log 작성", "체크포인트 만들어", "/communicative-interaction".
user-invocable: true
allowed-tools: Read Write Edit Glob Grep Bash(git *) Bash(python3 *) Bash(pip *) Bash(date *) Bash(ls *) Bash(cat *)
model: claude-opus-4-6
effort: medium
argument-hint: [commit] [push] [dry-run] [scope:<text>]
paths:
  - communicative-interaction/**
  - wiki/log.md
---

## Arguments (authorization-by-invocation)

This skill accepts optional arguments that extend the workflow. **Including an argument constitutes explicit authorization** for the corresponding action — James typing `commit` is the commit consent; James typing `push` is the push consent. No separate interactive confirmation is required for actions named in the invocation, though the draft commit message is still shown for review before it is used.

| Argument | Effect |
|---|---|
| (no args) | Session log + docx + INDEX + ALL-SESSIONS + wiki/log.md only. No git operations. |
| `commit` | Above + `git add` (whitelisted paths only) + `git commit` with auto-drafted message. |
| `push` | Above + `git push` to the current branch's upstream (fail closed if no upstream). Requires `commit` also being present, OR the working tree must already be clean before invocation. |
| `dry-run` | Preview mode: produce the markdown to stdout for review but do NOT write the file, do NOT build docx, do NOT update INDEX, do NOT modify git. Can be combined with others for dry-run of the full workflow. |
| `scope: <text>` | Constrain session reconstruction to only the portion matching the scope hint. Example: `scope: Phase A.3 execution only`. |

Argument examples:
- `/communicative-interaction` — log only
- `/communicative-interaction commit` — log + commit
- `/communicative-interaction commit push` — log + commit + push
- `/communicative-interaction dry-run` — preview log only
- `/communicative-interaction scope: A.3 batch results commit` — scoped log + commit

# Communicative Interaction — Session Log Generator

Creates a new session log in `communicative-interaction/` that captures everything substantive from the current Claude Code session, then updates the cumulative artifacts.

## When to invoke

- **End of session** — the most common trigger. Captures a retrospective snapshot.
- **Natural checkpoints** — after finishing a major Phase A step (e.g., A.2, A.3) and before moving to the next.
- **Before a risky operation** — to preserve state in case the next operation goes wrong.
- **On explicit request** — when James says anything equivalent to "세션 로그 만들어줘" or "interaction log 작성" or invokes `/communicative-interaction`.

## Procedure

### Step 1 — Determine the session filename

1. Resolve today's date in ISO form: `YYYY-MM-DD`.
2. Glob `communicative-interaction/YYYY-MM-DD-session-*.md` to find the highest existing session number for today.
3. Increment by 1 (or start at 01 if none exists).
4. Target filename: `communicative-interaction/YYYY-MM-DD-session-NN.md` (NN zero-padded to 2 digits).

### Step 2 — Reconstruct session content

Write the session markdown file with this structure (mirror `2026-04-11-session-01.md` shape):

**Header block:**
- Title: `# Communicative Interaction Log — Session NN`
- Date, Session ID, Participants (James ↔ Claude), Scope (1 sentence)

**§1 Starting state** — what the project looked like at the beginning of this session. Reconstruct from git log, log.md tail, wiki file mtimes, or your memory of the session opening.

**§2 Major decisions made during this session** — organized by theme. Include **reasoning**, not just outcomes. Themes typically include:
- Session shape and process decisions
- Methodological principles established or refined
- Infrastructure built

**§3 Phase progress — what was done** — map to the current Phase A/B/C sequence. For each Phase A step completed (e.g., A.3.5), name the step and list what was produced.

**§4 Still pending (queue as of end-of-session)** — what's waiting in the execution queue.

**§5 Open methodological questions** — items that need James's decision.

**§6 Key files touched this session** — one line per file with short description.

**§7 Token economics note (optional)** — rough breakdown if notable.

### Step 3 — Reconstruction rules

- **No verbatim chat transcripts.** Structural reconstruction only. Memory of the session's arc, not quotation.
- **No real person names.** Pseudonym policy applies (see `../defense-kg-platform/kg/pseudonym_mapping.json`). Organization names are fine.
- **Include file paths.** A future session should be able to reconstruct context by reading the log + the files it references.
- **Include reasoning, not just decisions.** "We chose X because Y" not "We chose X".
- **Reference specific artifacts.** Wiki articles, output reports, raw files touched — by full path.
- **Readable standalone.** A human reviewer without access to the chat transcript should understand the session's arc from the log alone.

### Step 4 — Convert to DOCX

```bash
cd /Users/a0/Projects/knowledge-base/communicative-interaction
python3 md_to_docx.py YYYY-MM-DD-session-NN.md YYYY-MM-DD-session-NN.docx
```

If `python-docx` is missing, instruct James to install with `pip install python-docx`.

### Step 5 — Update INDEX.md

Append a new row to the "Session log" table in `communicative-interaction/INDEX.md`:

```markdown
| NN | YYYY-MM-DD | `YYYY-MM-DD-session-NN` | [md](./YYYY-MM-DD-session-NN.md) | [docx](./YYYY-MM-DD-session-NN.docx) | <one-sentence summary> |
```

### Step 6 — Rebuild cumulative DOCX

```bash
cd /Users/a0/Projects/knowledge-base/communicative-interaction
python3 build_all_sessions.py
```

This regenerates `ALL-SESSIONS.docx` from every session markdown file in the folder, sorted by filename (chronological).

### Step 7 — Append wiki log entry

Add one line to `wiki/log.md`:

```markdown
## [YYYY-MM-DD HH:MM] communicative-interaction | session NN log created | communicative-interaction/YYYY-MM-DD-session-NN.{md,docx}, INDEX.md, ALL-SESSIONS.docx
```

### Step 8 — Report to James

Brief summary back to James:
- Filename of the new session file
- Approximate word count / size
- Total number of sessions now indexed
- Any notable observations from the reconstruction (e.g., "this session was unusually long", "three unresolved open questions added to pending queue", "X decisions made that should be codified into CLAUDE.md")

---

## Step 9 — Git commit (only if `commit` argument present)

### 9a — First-commit detection

Run `git rev-list --count HEAD 2>/dev/null || echo 0` to determine the current commit count.

**If the project has ZERO commits** (first-commit case):
1. STOP here. Do not proceed with auto-commit.
2. Report to James: "This project has no commits yet. The first commit should be made manually so you control author attribution, co-author tags, and the initial file selection. Run `git status` to see what's pending; I can help draft the first commit message if you'd like."
3. Exit skill successfully (log was generated, which is the core deliverable).

**If the project has ≥ 1 commit**, proceed to 9b.

### 9b — Whitelist file staging

Do NOT use `git add -A` or `git add .`. Stage only whitelisted paths:

```bash
git add wiki/ CLAUDE.md .claude/ .gitignore communicative-interaction/ output/ 2>/dev/null || true
# ai-research/ is tracked when present; add it if it has changes
git add ai-research/ 2>/dev/null || true
```

**Explicitly excluded** (do not stage, these are gitignored anyway but defensive double-check):
- `raw/` — contains real names, must never enter git
- `__pycache__/`, `*.pyc` — Python artifacts
- `.DS_Store` — macOS artifact
- `*.converted.md` — PDF conversion cache

After staging, run `git status --short` and show the staged list to James before commit. If any unexpected file appears (e.g., a file in a path you didn't stage), investigate before proceeding.

### 9c — Auto-draft commit message

Extract this session's new entries from `wiki/log.md`. The entries are the lines added during this session (typically 2–10 lines with `## [YYYY-MM-DD ...]` headings).

Draft a commit message using this template:

```
<session scope in one line, max 70 chars>

<bullet list of 2–6 high-level changes, derived from the log entries>

Session log: communicative-interaction/YYYY-MM-DD-session-NN.md

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
```

Show the draft message to James **before** running `git commit`. If James has not already confirmed by including `commit` in the invocation, pause for explicit approval. If `commit` was in the invocation, show the draft and proceed unless James interrupts — the `commit` argument already authorized the operation.

### 9d — Execute commit

Use HEREDOC format to preserve formatting:

```bash
git commit -m "$(cat <<'EOF'
<drafted message>
EOF
)"
```

**Do NOT use `--no-verify`.** Pre-commit hooks must run. If they fail:
1. Do NOT amend or bypass.
2. Report the failure to James with the hook output.
3. If the fix is obvious (e.g., the hook reported a specific file needs correction), apply the fix, re-stage, and create a NEW commit (do not `--amend` unless James explicitly requests it).

### 9e — Verify

After commit, run `git status` to verify the working tree is clean and `git log -1 --oneline` to confirm the commit landed.

---

## Step 10 — Git push (only if `push` argument present)

### 10a — Preconditions

- `commit` must also be in the invocation, OR the working tree must be clean before push.
- `git rev-parse --abbrev-ref HEAD@{upstream}` must succeed (branch has upstream). If not, report: "Current branch has no upstream configured. Run `git push -u origin <branch>` manually once, then `/communicative-interaction push` will work."
- Current branch must not be `main` or `master` UNLESS the remote is known to be personal (e.g., `origin` points to your own GitHub username). If branch is `main`/`master`, pause and ask James to confirm, noting that this is a shared-state operation.

### 10b — Execute push

```bash
git push
```

**Do NOT use `--force` or `-f`.** If the push fails due to non-fast-forward:
1. Report the failure and the local/remote commit divergence.
2. Do NOT auto-rebase, auto-merge, or auto-force.
3. Ask James how to proceed.

### 10c — Verify

After push, run `git log @{upstream}..HEAD --oneline` — if empty, push succeeded. Report the remote's URL and the pushed commit SHA to James.

---

## Step 11 — Final report (replaces step 8 when commit/push ran)

Extended report to James:
- Log file path, word count, session count
- **If commit ran**: commit SHA (short), commit message first line, number of files changed
- **If push ran**: remote URL, upstream branch, push result
- Any warnings or skipped steps (e.g., "first-commit detection halted auto-commit, manual action needed")

---

## Invocation examples

- `/communicative-interaction` — standard: log + docx + INDEX + ALL-SESSIONS only
- `/communicative-interaction commit` — log + auto-commit (whitelisted paths only, draft message shown, pre-commit hooks respected)
- `/communicative-interaction commit push` — log + commit + push to upstream
- `/communicative-interaction dry-run` — preview mode, no file writes
- `/communicative-interaction commit scope: A.3 batch only` — scoped log + commit
- Natural-language equivalents:
  - `세션 로그 만들어줘` — log only
  - `세션 로그 만들고 commit해` — log + commit
  - `체크포인트 만들고 commit + push` — log + commit + push

## Non-goals

- Do NOT re-read the entire chat transcript verbatim. Reconstruct from file artifacts and memory of structural decisions.
- Do NOT include private keys, pseudonym mapping content, or any real names in the log.
- Do NOT write into `raw/` (immutable by vault rule).
- Do NOT use `git add -A` or `git add .`. Always whitelist paths.
- Do NOT use `git commit --no-verify`. Pre-commit hooks must pass.
- Do NOT use `git commit --amend` unless James explicitly requests.
- Do NOT use `git push --force` or `git push -f`.
- Do NOT force-push to `main` or `master` under any circumstances.
- Do NOT auto-commit or auto-push when the project has zero commits yet — first commit must be manual.

## Failure modes and recovery

- **`python-docx` missing**: instruct James to `pip install python-docx` and retry step 4.
- **Session file already exists for target NN**: increment NN and retry step 1 (likely concurrent invocation).
- **`build_all_sessions.py` partial failure**: existing `ALL-SESSIONS.docx` is not overwritten until the new one is successfully generated. Retry safely.
- **INDEX.md merge conflict**: if James edited INDEX.md mid-invocation, resolve by re-reading the current INDEX.md, then appending the new row.

## Architectural note

This skill deliberately lives at `.claude/skills/communicative-interaction/SKILL.md` rather than `.claude/commands/` or the CLAUDE.md Trigger phrases table. Rationale:

- **CLAUDE.md hygiene**: session-logging workflow details do not belong in the vault's constitutional definition file, which Claude reads on every session start. Skills are loaded on demand, preserving the token budget of every future session.
- **Skill semantics**: session logging is a reusable workflow (parallel to `commit`, `loop`, `schedule`, `simplify`), not a vault operation mode. Skill is the correct abstraction.
- **Portability**: the skill file is self-describing and does not depend on CLAUDE.md trigger-table position, making future CLAUDE.md refactoring safer.
