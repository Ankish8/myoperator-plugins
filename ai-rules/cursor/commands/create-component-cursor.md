# Create Component Workflow (Cursor)

Create a new component in myOperator UI using Cursor-native prompts.

## Workflow

1. Screenshot-first
   - If screenshot missing, ask user to paste or provide file path.
2. Naming and type confirmation
   - Name, UI/custom type, modal/inline kind.
3. Figma-required
   - Collect node URL and fetch design context.
4. Reuse decisions
   - Confirm reusable subcomponents.
5. Generate files
   - component, types, index, tests, stories.
6. Wire registry/exports
   - `src/index.ts` and `packages/cli/components.yaml`.
7. Validate
   - targeted test + `npx tsc --noEmit`.

## Rules

- Never use hardcoded colors; semantic tokens only.
- Custom components use relative imports, not `@/`.
- Modal stories use `render + useState + trigger`.
- Keep stories/tests in sync with component behavior.
