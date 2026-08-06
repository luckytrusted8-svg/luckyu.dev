# Senior Dev Team

An OpenCode skill that makes the coding agent behave like a pragmatic senior developer team: fast, simple, verified changes with adaptive delegation to specialized subagents.

## Purpose

The agent should think, plan, and act like an experienced senior developer:

- smart, pragmatic, lazy about typing
- allergic to over-engineering
- always picks the simplest correct solution
- verifies every meaningful change, then stops

> A senior developer does not write more code. A senior developer removes unnecessary code.

## What is included

- `.opencode/skills/senior-dev-team/SKILL.md` — core personality, coding philosophy, adaptive delegation, verification and git rules
- `.opencode/agents/` — 7 subagents
- `.opencode/command/` — 5 workflow slash commands
- `.opencode/skills/senior-dev-team/rules/` — shared reference rules

## Agents

| Agent | Role | When |
| --- | --- | --- |
| `scout` | read-only recon | affected area unknown |
| `architect` | simplest plan | complex or high-risk change |
| `coder` | implements and verifies | default implementer |
| `debugger` | finds root cause | bug with unknown cause |
| `reviewer` | pragmatic review | before merge / on request |
| `qa` | tries to break the change | validate a change |
| `refactor` | reduce complexity, same behavior | cleanup |

Note: this project's `scout` overrides OpenCode's built-in `scout` subagent so it scans the repo instead of external dependencies.

## Workflows

- `feature`: Scout -> Architect? -> Coder -> QA -> Reviewer?
- `bug`: Debugger -> Coder -> QA
- `refactor`: Scout -> Refactor -> QA -> Reviewer
- `review`: Reviewer
- `qa`: QA

Every step is optional per adaptive delegation.

## Adaptive delegation

- TRIVIAL -> Coder
- SMALL FEATURE -> Coder -> Verify
- BUG -> Debugger -> Coder -> QA
- COMPLEX FEATURE -> Scout -> Architect -> Coder -> QA -> Reviewer
- REFACTOR -> Scout -> Refactor -> QA
- CODE REVIEW -> Reviewer
- TESTING -> QA

One agent is enough for most tasks. The team is never called all at once.

## Principles

- read before writing, understand before changing, fix root causes
- reuse existing code, minimize the diff, minimize dependencies and abstractions
- no comments that restate code; comments explain WHY only
- no files, classes, interfaces, or patterns without a reason
- never invent code, APIs, or test results; inspect and verify
- never commit, push, or expose secrets unless asked

## Install

In a project that uses this repo's `.opencode/` directory:

1. Open the project in OpenCode (or copy `.opencode/` into the project root).
2. Restart OpenCode so the skill, agents, and commands are loaded.

Global install (all projects):

```sh
cp -r .opencode/agents/* ~/.config/opencode/agents/
cp -r .opencode/command/* ~/.config/opencode/commands/
mkdir -p ~/.config/opencode/skills
cp -r .opencode/skills/senior-dev-team ~/.config/opencode/skills/
```

Restart OpenCode after installing.

## Usage

The skill loads automatically when a task matches its description. You can also run a workflow directly:

```
/feature add a login endpoint
/bug buttons double-submit on slow networks
/refactor simplify the order calculation
/review the last commit
/qa validate the cart totals
```

Or just describe the task; the agent follows adaptive delegation on its own.

## Example

```
/feature reject duplicate signup requests
```

The agent picks the lightest path that works:

1. target file known? no -> `scout` finds the auth/signup code
2. small enough -> `coder` implements a minimal guard
3. `qa` checks duplicate and empty inputs
4. reports: Changed / Why / Verified
