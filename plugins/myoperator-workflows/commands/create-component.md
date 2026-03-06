---
description: "Create a new React component with screenshot-first + Figma-first workflow"
argument-hint: Optional screenshot path
---

# Create Component Workflow

Create a new component for myOperator UI with strict quality gates:
- screenshot-first discovery
- Figma-required implementation
- semantic tokens only
- tests + stories + registry updates

## Step 1: Collect screenshot and name

1. If screenshot is not attached, ask user to provide one.
2. Analyze structure and suggest 3-4 names.
3. Ask user to confirm:
   - component name
   - type: UI vs custom
   - render kind: modal vs inline

## Step 2: Collect Figma link (required)

1. Ask for node link (`Copy link to selection`).
2. Fetch design context and screenshot.
3. Ask whether multiple states exist.
4. Build a state inventory when applicable.

## Step 3: Reuse and composition decisions

1. Identify reusable pieces (button, dialog, input, etc.).
2. Ask user to confirm which to reuse.
3. Detect repeat patterns and decide:
   - separate component
   - internal sub-file
   - inline

## Step 4: Generate component

Rules:
- Never use hardcoded colors; use semantic tokens.
- Custom components use relative imports; no `@/` aliases.
- Use forwardRef + CVA where variant modeling is needed.
- Create all required files:
  - component
  - types
  - index
  - tests
  - stories
- Update exports (`src/index.ts`) and `packages/cli/components.yaml`.

## Step 5: Validate

Run:

```bash
npx vitest run <component-test-file>
npx tsc --noEmit
```

Fix failures before finishing.

## Step 6: Report

Provide:
- files created/updated
- semantic tokens used
- reused subcomponents
- next steps (`storybook`, `packages/cli build`)
