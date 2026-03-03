# myOperator Design System Rules

## CRITICAL: Never Use Hardcoded Colors

All UI code must use CSS variables, never hardcoded hex values.

**Quick reference:**
- Primary actions: `var(--semantic-primary)` = #343E55
- Page/card bg: `var(--semantic-bg-primary)` = #FFFFFF
- Subtle surface: `var(--semantic-bg-ui)` = #F5F5F5
- Body text: `var(--semantic-text-primary)` = #181D27
- Secondary text: `var(--semantic-text-secondary)` = #343E55
- Muted/helper text: `var(--semantic-text-muted)` = #717680
- Focus/accent: `var(--semantic-brand)` = #2BBCCA (interactive elements ONLY)
- Input border: `var(--semantic-border-input)` = #E9EAEB
- Layout dividers: `var(--semantic-border-layout)` = #E9EAEB
- Error: `var(--semantic-error-primary)` = #F04438
- Success: `var(--semantic-success-primary)` = #17B26A
- Warning: `var(--semantic-warning-primary)` = #F79009

**When you see these Figma hex values, map them:**
- `#343E55` → `var(--semantic-primary)`
- `#F5F5F5` → `var(--semantic-bg-ui)`
- `#717680` → `var(--semantic-text-muted)`
- `#F04438` → `var(--semantic-error-primary)`
- `#17B26A` → `var(--semantic-success-primary)`
- `#E9EAEB` → `var(--semantic-border-layout)`

## Typography

Font: `'Source Sans Pro', sans-serif` — always import from Google Fonts with weights 400, 600, 700.
Default body text = 16px. Secondary/helper = 14px. Metadata = 12px max.

## Modal / Overlay z-index

Always use `z-[9999]` for modals, dialogs, and overlays. The host app has navigation at z-index 1000+. Never use `z-50` (only 50) for overlays.

## Component Style

Design language: enterprise SaaS — professional, clean, purposeful. Not flashy, not playful.
- Rounded: `rounded` (4px) for small elements, `rounded-lg` (8px) for cards/modals
- Transitions: `transition-all duration-200` for smooth interactions
- Focus: all interactive elements need visible focus rings
- Disabled: `disabled:opacity-50 disabled:pointer-events-none`

## Installing Components

If the user has `myoperator-ui` installed, they can add components via:
```
npx myoperator-ui add button
npx myoperator-ui add input
npx myoperator-ui add table
npx myoperator-ui add dialog
```

Otherwise, generate standalone React + Tailwind code using the CSS variables above.
