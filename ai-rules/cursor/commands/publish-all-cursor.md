# Full Publish Workflow (Cursor)

Run production-safe release flow for myOperator UI.

## 1) Choose release type

- **Beta**: publish CLI with beta tag, no commit/push, no MCP.
- **Latest**: full CLI + MCP publish flow.

## 2) Pre-flight checks (required)

```bash
npm test
cd packages/cli && npm test
cd /Users/ankish/Downloads/Code/storybook-npm && npm run lint
npm run api:check
```

If intentional API changes, run `npm run api:snapshot`.

## 3) Storybook sync check

```bash
git diff --name-only HEAD
npx storybook build --test 2>&1 | tail -5
```

Update stories when component behavior/props/variants changed.

## 4) Execute release branch

### Beta
```bash
cd packages/cli && npm version prerelease --preid=beta --no-git-tag-version && npm run build && MYOPERATOR_PUBLISH_ALLOWED=1 npm publish --tag beta
```

### Latest
```bash
cd packages/cli && npm version patch --no-git-tag-version && npm run build && MYOPERATOR_PUBLISH_ALLOWED=1 npm publish
git add .
MYOPERATOR_GIT_ALLOWED=1 git commit -m "chore: publish myoperator-ui v$(cd packages/cli && node -p "require('./package.json').version")"
MYOPERATOR_GIT_ALLOWED=1 git push
node scripts/sync-mcp-metadata.js
cd packages/mcp && npm version patch --no-git-tag-version && npm run build && MYOPERATOR_PUBLISH_ALLOWED=1 npm publish
node scripts/sync-design-skill.js --write
git add packages/mcp .claude/plugins/myoperator-design
MYOPERATOR_GIT_ALLOWED=1 git commit -m "chore: publish myoperator-mcp v$(cd packages/mcp && node -p "require('./package.json').version")"
MYOPERATOR_GIT_ALLOWED=1 git push
```

## 5) Report

Include published versions and verification:

```bash
npm view myoperator-ui version
npm view myoperator-mcp version
```
