---
description: Build a feature using the senior-dev-team workflow (Scout -> Architect? -> Coder -> QA -> Reviewer?).
---

Build this feature using the senior-dev-team workflow:

$ARGUMENTS

Load the senior-dev-team skill and follow its principles.

Adaptive delegation:
- Small change, target file known: implement directly, verify, stop. Do not delegate.
- Affected area unknown: Scout first, then Coder, then verify.
- Complexity warrants it: Scout -> Architect -> Coder -> QA.
- Reviewer only for meaningful changes.

Invoke subagents via the task tool. Keep reports compact: Changed / Why / Verified.
