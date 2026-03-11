---
description: "Run full release workflow: pre-flight checks, Storybook sync, and beta/latest publish path"
argument-hint: Optional release type (beta|latest)
---

# Full Publish Workflow

## Step 1: Ask release type

Ask user to choose:
- **Beta**: publish CLI with `--tag beta`; stop after CLI publish.
- **Latest**: publish CLI, commit/push, publish MCP, sync design skill.

## Step 2: Pre-flight checks (must pass)

```bash
npm test
cd packages/cli && npm test
cd /Users/ankish/Downloads/Code/storybook-npm && npm run lint
npm run api:check
```

If intentional API break: run `npm run api:snapshot`.

## Step 3: Storybook sync + build check

1. Detect changed components:
```bash
git diff --name-only HEAD
```
2. Ensure stories reflect component changes.
3. Build-test Storybook:
```bash
npx storybook build --test 2>&1 | tail -5
```

## Step 4A: Beta path

### Publish CLI as Beta
```bash
cd packages/cli && npm version prerelease --preid=beta --no-git-tag-version && npm run build && MYOPERATOR_PUBLISH_ALLOWED=1 npm publish --tag beta
```

### Git commit and push to beta branch (does NOT trigger Storybook deploy)
```bash
BETA_VERSION=$(cd packages/cli && node -p "require('./package.json').version")
git checkout -B beta/cli
git add .
MYOPERATOR_GIT_ALLOWED=1 git commit -m "chore: publish myoperator-ui v${BETA_VERSION} (beta)"
MYOPERATOR_GIT_ALLOWED=1 git push -u origin beta/cli --force
git checkout main
```

Report published beta version, pushed branch, and stop. Do not publish MCP for beta.

## Step 4B: Latest path

### Publish CLI
```bash
cd packages/cli && npm version patch --no-git-tag-version && npm run build && MYOPERATOR_PUBLISH_ALLOWED=1 npm publish
```

### Commit + push
```bash
git add .
MYOPERATOR_GIT_ALLOWED=1 git commit -m "chore: publish myoperator-ui v$(cd packages/cli && node -p "require('./package.json').version")"
MYOPERATOR_GIT_ALLOWED=1 git push
```

### Sync + publish MCP
```bash
node scripts/sync-mcp-metadata.js
cd packages/mcp && npm version patch --no-git-tag-version && npm run build && MYOPERATOR_PUBLISH_ALLOWED=1 npm publish
```

### Sync design skill
```bash
node scripts/sync-design-skill.js --write
```

### Final commit + push
```bash
git add packages/mcp .claude/plugins/myoperator-design
MYOPERATOR_GIT_ALLOWED=1 git commit -m "chore: publish myoperator-mcp v$(cd packages/mcp && node -p "require('./package.json').version")"
MYOPERATOR_GIT_ALLOWED=1 git push
```

## Completion report

Always include:
- CLI version/tag
- MCP version (latest only)
- commit/push status (latest only)
- post-publish check:
```bash
npm view myoperator-ui version
npm view myoperator-mcp version
```
