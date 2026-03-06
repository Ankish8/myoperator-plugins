# myOperator Plugins

AI rules and skills for the myOperator design system — works with Claude Code, Cursor, Windsurf, Gemini CLI, GitHub Copilot, Aider, Continue, and more.

---

## Quick Install Matrix

| I want... | Install this |
|---|---|
| Design generation skill in Claude Code | `/plugin install myoperator-design@myoperator-plugins` |
| Component + publish workflows in Claude Code | `/plugin install myoperator-workflows@myoperator-plugins` |
| Installable Cursor design plugin | `myoperator-cursor-design` from the Cursor Marketplace / team marketplace |
| Installable Cursor workflow plugin | `myoperator-cursor-workflows` from the Cursor Marketplace / team marketplace |
| Cursor manual fallback: rules only | `cp ai-rules/cursor/*.mdc .cursor/rules/` |
| Cursor manual fallback: workflow commands only | `cp ai-rules/cursor/commands/*.md .cursor/commands/` |

---

## Claude Code

Two steps, both run inside a Claude Code session:

**Step 1 — Register the marketplace (one-time only):**
```
/plugin marketplace add Ankish8/myoperator-plugins
```

**Step 2 — Install the plugin:**
```
/plugin install myoperator-design@myoperator-plugins
```

> Step 1 registers the source under the name `myoperator-plugins`. After that, reference it as `@myoperator-plugins` for installs and updates.

Once installed, describe what you want to build or invoke directly with `/myoperator-design`:

- *"Build a user management dashboard with myoperator design"*
- *"Create a settings page using myoperator design system"*
- *"Make a data table with filters and pagination"*

**Update:**
```
/plugin update myoperator-design@myoperator-plugins
```

### Additional workflow plugin (component + release commands)

Install:
```bash
/plugin install myoperator-workflows@myoperator-plugins
```

This adds:
- `/create-component`
- `/publish-all`

Update:
```bash
/plugin update myoperator-workflows@myoperator-plugins
```

**Team setup** — add this to `.claude/settings.json` so teammates skip Step 1:
```json
{
  "extraKnownMarketplaces": {
    "myoperator-plugins": {
      "source": {
        "source": "github",
        "repo": "Ankish8/myoperator-plugins"
      }
    }
  }
}
```

---

## Cursor

This repo now includes **proper installable Cursor plugins** in addition to the file-copy fallback.

### Installable Cursor plugins

The repository includes a Cursor marketplace manifest at:

```text
.cursor-plugin/marketplace.json
```

Included Cursor plugins:
- `myoperator-cursor-design`
- `myoperator-cursor-workflows`

Use these when importing this repo into the **Cursor Marketplace** or a **Cursor Team Marketplace**.

### Manual fallback

```bash
cp -r ai-rules/cursor/.cursor .cursor
# or manually:
mkdir -p .cursor/rules
cp ai-rules/cursor/*.mdc .cursor/rules/
```

Two rules are included:
- `myoperator-tokens.mdc` — always applied, enforces color tokens
- `myoperator-patterns.mdc` — applied when editing `.tsx`/`.jsx` files

### Optional Cursor command pack (component + publish)

```bash
mkdir -p .cursor/commands
cp ai-rules/cursor/commands/*.md .cursor/commands/
```

Includes:
- `create-component-cursor.md`
- `publish-all-cursor.md`

---

## Windsurf

```bash
mkdir -p .windsurf/rules
cp ai-rules/windsurf/*.md .windsurf/rules/
```

---

## GitHub Copilot

```bash
mkdir -p .github/instructions
cp ai-rules/copilot/myoperator.instructions.md .github/instructions/
```

---

## Gemini CLI

```bash
# Project-level (recommended):
cp ai-rules/gemini/GEMINI.md ./GEMINI.md

# Global (applies to all your projects):
cp ai-rules/gemini/GEMINI.md ~/.gemini/GEMINI.md
```

---

## Aider

```bash
cp ai-rules/aider/CONVENTIONS.md ./CONVENTIONS.md
```

Add to `.aider.conf.yml` for auto-load:
```yaml
read: CONVENTIONS.md
```

---

## Continue.dev

```bash
mkdir -p .continue/rules
cp ai-rules/continue/myoperator-rules.md .continue/rules/
```

---

## Universal — AGENTS.md (works with 20+ tools)

`AGENTS.md` is recognized by GitHub Copilot coding agent, Gemini CLI, OpenAI Codex, Cursor, Aider, Warp, Zed, Kilo Code, Devin, Factory, and more.

```bash
cp AGENTS.md ./AGENTS.md
```

**If you only copy one file, copy this one.**

---

## Available Plugins

| Plugin | Description |
|--------|-------------|
| `myoperator-design` | Claude Code skill — generates UIs matching the myOperator design system |
| `myoperator-workflows` | Claude Code command plugin with `/create-component` and `/publish-all` workflows |
| `myoperator-cursor-design` | Cursor plugin with installable myOperator design-system rules |
| `myoperator-cursor-workflows` | Cursor plugin with installable component and publish workflow commands |

More plugins coming soon.
