# myOperator Design System — AI Rules

Rules for every major AI coding assistant to enforce the myOperator design system when generating UI code.

## Quick Start

Copy the folder for your AI tool into your project root.

---

## Tool-by-Tool Guide

### Cursor

Preferred option: use the installable Cursor plugins defined in the repository's `.cursor-plugin/marketplace.json`.

Available Cursor plugins:
- `myoperator-cursor-design`
- `myoperator-cursor-workflows`

Manual fallback:

Copy `.cursor/rules/` files into your project:

```bash
# From this repo
cp ai-rules/cursor/*.mdc .cursor/rules/
```

Two files are provided:
- `myoperator-tokens.mdc` — always applied, enforces color token rules
- `myoperator-patterns.mdc` — applied when editing `.tsx`/`.jsx` files, provides component patterns

Rules use Cursor's MDC frontmatter format with `alwaysApply` and `globs`.

Optional Cursor command pack:

```bash
mkdir -p .cursor/commands
cp ai-rules/cursor/commands/*.md .cursor/commands/
```

Included commands:
- `create-component-cursor.md`
- `publish-all-cursor.md`

---

### Windsurf

Copy `.windsurf/rules/` files into your project:

```bash
cp ai-rules/windsurf/*.md .windsurf/rules/
```

Two files are provided:
- `myoperator-tokens.md` — `trigger: always_on`
- `myoperator-patterns.md` — `trigger: glob` for `.tsx`/`.jsx` files

---

### GitHub Copilot

Copy the instructions file into `.github/instructions/`:

```bash
mkdir -p .github/instructions
cp ai-rules/copilot/myoperator.instructions.md .github/instructions/
```

This uses Copilot's `applyTo:` frontmatter to scope rules to TypeScript/React files.

Alternatively, paste the content into `.github/copilot-instructions.md` for repo-wide rules.

---

### Gemini CLI

Copy `GEMINI.md` to your project root (or `~/.gemini/GEMINI.md` for global):

```bash
cp ai-rules/gemini/GEMINI.md ./GEMINI.md
# or global:
cp ai-rules/gemini/GEMINI.md ~/.gemini/GEMINI.md
```

Gemini CLI auto-discovers `GEMINI.md` in the project root and parent directories.

---

### Aider

Copy `CONVENTIONS.md` to your project root, then configure auto-load:

```bash
cp ai-rules/aider/CONVENTIONS.md ./CONVENTIONS.md
```

Add to `.aider.conf.yml` for automatic loading:
```yaml
read: CONVENTIONS.md
```

Or load manually per session:
```
/read CONVENTIONS.md
```

---

### Continue.dev

Copy the rules file into `.continue/rules/`:

```bash
mkdir -p .continue/rules
cp ai-rules/continue/myoperator-rules.md .continue/rules/
```

The file uses Continue's frontmatter format with `alwaysApply: true`.

---

## Universal — AGENTS.md

The `AGENTS.md` file at the repo root is a universal format recognized by 20+ AI tools including:
GitHub Copilot coding agent, Gemini CLI, OpenAI Codex, Cursor, Aider, Warp, Zed, Kilo Code, Devin, Factory, and more.

```bash
cp AGENTS.md ./AGENTS.md
```

If you only copy one file, copy this one.

---

## Claude Code

Use the myoperator-design plugin:

```
/plugin marketplace add Ankish8/myoperator-plugins
/plugin install myoperator-design@myoperator-plugins
```

Then invoke with `/myoperator-design` or describe what to build — Claude will automatically apply the skill.
