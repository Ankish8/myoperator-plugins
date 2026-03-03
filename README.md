# myOperator Plugins for Claude Code

AI skills for [Claude Code](https://claude.ai/code) that generate UI matching the myOperator design system.

---

## Install

Two steps, both run inside a Claude Code session:

**Step 1 — Register the marketplace (one-time only):**
```
/plugin marketplace add Ankish8/myoperator-plugins
```

**Step 2 — Install the plugin:**
```
/plugin install myoperator-design@myoperator-plugins
```

> Step 1 is required before Step 2. It registers the source under the name `myoperator-plugins`. After that, you reference it as `@myoperator-plugins` for installs and updates.

---

## Usage

Once installed, just describe what you want to build:

- *"Build a user management dashboard with myoperator design"*
- *"Create a settings page using myoperator design system"*
- *"Make a data table with filters and pagination"*
- *"Build a form modal for adding a new agent"*

Or invoke directly with `/myoperator-design`.

The skill generates **standalone React + Tailwind CSS** code — no package installation required, just copy and use.

---

## What You Get

The `myoperator-design` skill knows the full design system:

| Token type | Examples |
|------------|---------|
| Colors | `--semantic-primary` (#343E55), `--semantic-brand` (#2BBCCA) |
| States | error, warning, success, info — all with surface + text + border tokens |
| Disabled | `--semantic-disabled-primary/secondary/text/border` |
| Typography | Source Sans Pro, 9-step scale from display to label |
| Components | Buttons, inputs, cards, badges, modals, tables, sidebars, alerts |

All generated code uses CSS variables — never hardcoded colors.

---

## Team Setup

To share the plugin across your whole team without everyone running Step 1, add this to your project's `.claude/settings.json`:

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

Then each developer only needs Step 2:

```
/plugin install myoperator-design@myoperator-plugins
```

---

## Update

```
/plugin update myoperator-design@myoperator-plugins
```

---

## Available Plugins

| Plugin | Description |
|--------|-------------|
| `myoperator-design` | Generate UIs matching the myOperator design system |

More plugins coming soon.
