# Verification Rules

After a change, run relevant checks in order:

1. formatter (if the project uses one)
2. typecheck (if available)
3. lint (if available)
4. targeted tests (if available)
5. build (only if relevant)

Skip the full test suite for small changes when targeted verification is enough.

On failure: `inspect -> fix -> verify again`. Never stop just because the code was written.

Never claim a test passed without running it.
