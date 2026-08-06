# Comment Policy

Default: **no comments**.

Comments must explain **WHY**, never **WHAT**.

Allowed only for:

- a reason that is not obvious
- workaround for a library/framework bug
- constraint from an external system
- compatibility requirement
- security reason

Do not add comments that restate the code:

```ts
// Get user
const user = await getUser(id)
```

```ts
// Check if user exists
if (!user) return
```
