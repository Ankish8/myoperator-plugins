# myOperator Plugins

Installable plugins for **Claude Code** and **Cursor**.

Use this repo for:
- **Design plugins** to generate UI that follows the myOperator design system
- **Dev workflow plugins** for component creation and release/publish flows
- **Universal fallback** via `AGENTS.md` for tools that support agent instruction files

---

## Quick Install

| I want... | Install this |
|---|---|
| Claude Code: design plugin | `/plugin install myoperator-design@myoperator-plugins` |
| Claude Code: dev workflow plugin | `/plugin install myoperator-workflows@myoperator-plugins` |
| Cursor: design plugin | `myoperator-cursor-design` from the Cursor Marketplace / team marketplace |
| Cursor: dev workflow plugin | `myoperator-cursor-workflows` from the Cursor Marketplace / team marketplace |
| Any tool with agent instructions | `cp AGENTS.md ./AGENTS.md` |

---

## Claude Code

Run these inside a Claude Code session:

**1. Register the marketplace**
```bash
/plugin marketplace add Ankish8/myoperator-plugins
```

**2. Install the plugins you want**
```bash
/plugin install myoperator-design@myoperator-plugins
/plugin install myoperator-workflows@myoperator-plugins
```

Recommended Claude setup:
- `myoperator-design` — design system generation and UI guidance
- `myoperator-workflows` — day-to-day dev commands for creating components and shipping releases

Update:
```bash
/plugin update myoperator-design@myoperator-plugins
/plugin update myoperator-workflows@myoperator-plugins
```

Team setup for `.claude/settings.json`:
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

This repo includes installable Cursor plugins through:

```text
.cursor-plugin/marketplace.json
```

Recommended Cursor setup:
- `myoperator-cursor-design` — installable design-system rules
- `myoperator-cursor-workflows` — installable dev workflow commands

Install them through the Cursor Marketplace or a Cursor Team Marketplace that imports this repository.

Manual fallback is still available if needed:
```bash
mkdir -p .cursor/rules .cursor/commands
cp ai-rules/cursor/*.mdc .cursor/rules/
cp ai-rules/cursor/commands/*.md .cursor/commands/
```

---

## Universal — AGENTS.md

`AGENTS.md` works across many tools and is the simplest cross-editor option.

```bash
cp AGENTS.md ./AGENTS.md
```

If you only copy one file, copy this one.

---

## Available Plugins

| Plugin | Description |
|--------|-------------|
| `myoperator-design` | Claude Code plugin for myOperator UI generation and design-system guidance |
| `myoperator-workflows` | Claude Code dev workflow plugin for `/create-component` and `/publish-all` |
| `myoperator-cursor-design` | Cursor plugin with installable myOperator design rules |
| `myoperator-cursor-workflows` | Cursor dev workflow plugin with installable component and publish commands |
