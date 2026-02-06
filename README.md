# myOperator Plugins for Claude Code

Official Claude Code plugins from myOperator.

## Available Plugins

### myoperator-design

Create UIs matching the myOperator design system aesthetic. Generates standalone React/Tailwind code with the design system's color tokens, typography, and component patterns.

**Features:**
- Complete color system with semantic tokens (primary blue-gray, turquoise accent)
- Typography system with Source Sans Pro
- Component patterns for buttons, inputs, cards, badges, tables, modals, and more
- Auto-generated component catalog with props, variants, and examples

## Installation

```bash
# Add the marketplace
/plugin marketplace add Ankish8/myoperator-plugins

# Install the design plugin
/plugin install myoperator-design@myoperator-plugins
```

## Usage

Once installed, the `myoperator-design` skill activates when you ask Claude to build UI matching the myOperator design system:

- "Build a dashboard with myoperator design"
- "Create a settings page using myoperator design system"
- "Make a user management table"

You can also invoke it directly with `/myoperator-design`.
