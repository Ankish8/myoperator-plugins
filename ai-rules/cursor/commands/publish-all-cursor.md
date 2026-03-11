# Full Publish Workflow (Cursor)

Run production-safe release flow for myOperator UI.

## 1) Choose release type

- **Beta**: publish CLI with beta tag, commit/push to `beta/cli` branch, no MCP.
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

Then commit and push to beta branch (does NOT trigger Storybook deploy):
```bash
BETA_VERSION=$(cd packages/cli && node -p "require('./package.json').version")
git checkout -B beta/cli
git add .
MYOPERATOR_GIT_ALLOWED=1 git commit -m "chore: publish myoperator-ui v${BETA_VERSION} (beta)"
MYOPERATOR_GIT_ALLOWED=1 git push -u origin beta/cli --force
git checkout main
```

Report published beta version, pushed branch, and stop. Do not publish MCP for beta.

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
