---
applyTo: "**/*.tsx,**/*.jsx,**/*.ts"
---

# myOperator Design System

When generating React/TypeScript UI code for this project, always follow these rules:

## Color Tokens — NEVER use hardcoded hex colors

Always use CSS variables. Include the `:root` block in generated standalone files.

| Purpose | Token |
|---------|-------|
| Primary action bg | `var(--semantic-primary)` (#343E55) |
| Primary text on dark | `var(--semantic-text-inverted)` (#FFFFFF) |
| Surface / subtle bg | `var(--semantic-bg-ui)` (#F5F5F5) |
| Page background | `var(--semantic-bg-primary)` (#FFFFFF) |
| Body text | `var(--semantic-text-primary)` (#181D27) |
| Secondary text | `var(--semantic-text-secondary)` (#343E55) |
| Muted / helper text | `var(--semantic-text-muted)` (#717680) |
| Input border | `var(--semantic-border-input)` (#E9EAEB) |
| Focus ring / accent | `var(--semantic-border-input-focus)` (#2BBCCA) |
| Layout dividers | `var(--semantic-border-layout)` (#E9EAEB) |
| Error | `var(--semantic-error-primary)` / `var(--semantic-error-surface)` |
| Success | `var(--semantic-success-primary)` / `var(--semantic-success-surface)` |
| Warning | `var(--semantic-warning-primary)` / `var(--semantic-warning-surface)` |
| Disabled bg | `var(--semantic-disabled-secondary)` |
| Disabled text | `var(--semantic-disabled-text)` |

## Typography
- Font: `'Source Sans Pro', sans-serif` (import from Google Fonts wght@400;600;700)
- Default body: 16px. Secondary/helper: 14px. Metadata: 12px max.

## Modal z-index
Always use `z-[9999]` for modals and overlays. The host app navbar is at z-index 1000+. Never use `z-50`.

## Component tokens in Tailwind
Use `bg-[var(--semantic-primary)]`, `text-[var(--semantic-text-inverted)]`, etc.
Never write `bg-[#343E55]` or any hardcoded hex in className.
