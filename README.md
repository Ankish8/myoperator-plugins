# myOperator Plugins

AI rules and skills for the myOperator design system — works with Claude Code, Cursor, Windsurf, Gemini CLI, GitHub Copilot, Aider, Continue, and more.

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

```bash
cp -r ai-rules/cursor/.cursor .cursor
# or manually:
mkdir -p .cursor/rules
cp ai-rules/cursor/*.mdc .cursor/rules/
```

Two rules are included:
- `myoperator-tokens.mdc` — always applied, enforces color tokens
- `myoperator-patterns.mdc` — applied when editing `.tsx`/`.jsx` files

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

## What the Rules Enforce

| Rule | Why it matters |
|------|---------------|
| No hardcoded hex colors — use `--semantic-*` CSS variables | Design consistency, theme support |
| Source Sans Pro font, weights 400/600/700 | Brand typography |
| Modals use `z-[9999]`, never `z-50` | Host app navbar is at z-index 1000+ |
| Turquoise (#2BBCCA) only for interactive elements | Not for charts/decoration |
| Default body text = 16px | Correct type scale |
| Enterprise SaaS aesthetic — no flashy animations | Design language consistency |

---

## Available Plugins

| Plugin | Description |
|--------|-------------|
| `myoperator-design` | Claude Code skill — generates UIs matching the myOperator design system |

More plugins coming soon.
