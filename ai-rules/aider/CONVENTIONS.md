# myOperator Design System Conventions

## Colors — CRITICAL RULE
NEVER use hardcoded hex colors. Always use semantic CSS variables.

Required mapping when you see these hex values:
- `#343E55` → `var(--semantic-primary)`
- `#F5F5F5` → `var(--semantic-bg-ui)`
- `#FFFFFF` → `var(--semantic-bg-primary)`
- `#181D27` → `var(--semantic-text-primary)`
- `#717680` → `var(--semantic-text-muted)`
- `#A2A6B1` → `var(--semantic-text-placeholder)`
- `#E9EAEB` → `var(--semantic-border-layout)` or `var(--semantic-border-input)`
- `#2BBCCA` → `var(--semantic-brand)` (focus rings and active states ONLY)
- `#F04438` → `var(--semantic-error-primary)`
- `#17B26A` → `var(--semantic-success-primary)`
- `#F79009` → `var(--semantic-warning-primary)`

The turquoise brand color (#2BBCCA) is for interactive elements only — never for charts, graphs, or decoration.

## Typography
- Font: 'Source Sans Pro', sans-serif — import from Google Fonts with wght@400;600;700
- Default body text: 16px (not 14px)
- Secondary/helper text: 14px
- Rare metadata: 12px max

## Modal / Overlay z-index Rule
Always use `z-[9999]` for modals, dialogs, drawers, and overlays.
The host app navigation bar sits at z-index 1000+. Using `z-50` (z-index: 50) causes modals to render behind the nav.

## Component Patterns

### Tailwind class style
Use CSS variable syntax: `bg-[var(--semantic-primary)]` not `bg-[#343E55]`

### Cards
`rounded-lg border border-[var(--semantic-border-layout)] bg-[var(--semantic-bg-primary)] p-6 shadow-sm`

### Buttons — primary
`inline-flex items-center justify-center gap-2 rounded text-sm font-medium min-w-20 py-2.5 px-4 bg-[var(--semantic-primary)] text-[var(--semantic-text-inverted)] hover:bg-[var(--semantic-primary-hover)] transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none`

### Inputs
`h-10 w-full rounded px-4 py-2.5 text-sm bg-[var(--semantic-bg-primary)] text-[var(--semantic-text-primary)] border border-[var(--semantic-border-input)] placeholder:text-[var(--semantic-text-placeholder)] focus:outline-none focus:border-[var(--semantic-border-input-focus)] transition-all`

## CLI Component Installation
If the project uses myoperator-ui, install components via:
`npx myoperator-ui add <component-name>`
Available: button, input, select, checkbox, switch, table, dialog, badge, alert, spinner, pagination, and more.
