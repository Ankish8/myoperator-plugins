# myOperator Plugins for Claude Code

AI skills for [Claude Code](https://claude.ai/code) that generate UI matching the myOperator design system.

---

## Install

Run these two commands inside any Claude Code session:

```
/plugin marketplace add Ankish8/myoperator-plugins
```
```
/plugin install myoperator-design@Ankish8/myoperator-plugins
```

Or use the Claude Code CLI:

```bash
claude plugin install myoperator-design@Ankish8/myoperator-plugins
```

> First-time only: the marketplace step registers the source. After that, future installs and updates are a single command.

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

To share the plugin across your whole team, add this to your project's `.claude/settings.json`:

```json
{
  "enabledPlugins": {
    "myoperator-design@Ankish8/myoperator-plugins": true
  }
}
```

Then each developer runs the install once:

```
/plugin install myoperator-design@Ankish8/myoperator-plugins
```

---

## Update

```
/plugin update myoperator-design@Ankish8/myoperator-plugins
```

Or via CLI:

```bash
claude plugin update myoperator-design@Ankish8/myoperator-plugins
```

---

## Available Plugins

| Plugin | Description |
|--------|-------------|
| `myoperator-design` | Generate UIs matching the myOperator design system |

More plugins coming soon.
