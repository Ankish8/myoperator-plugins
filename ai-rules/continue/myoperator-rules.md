---
name: myOperator Design System
alwaysApply: true
description: "Apply myOperator design system rules when generating React/Tailwind UI components"
---

# myOperator Design System

## Color Tokens — Never hardcode hex values

Always use CSS variables. Key tokens:

| Token | Value | Use For |
|-------|-------|---------|
| `var(--semantic-primary)` | #343E55 | Primary buttons, headers |
| `var(--semantic-primary-hover)` | #2F384D | Button hover |
| `var(--semantic-primary-surface)` | #EBECEE | Light bg for primary elements |
| `var(--semantic-brand)` | #2BBCCA | Focus rings, active states (interactive only) |
| `var(--semantic-bg-primary)` | #FFFFFF | Page / card background |
| `var(--semantic-bg-ui)` | #F5F5F5 | Subtle surface background |
| `var(--semantic-text-primary)` | #181D27 | Body text |
| `var(--semantic-text-secondary)` | #343E55 | Emphasized text |
| `var(--semantic-text-muted)` | #717680 | Helper / secondary text |
| `var(--semantic-text-inverted)` | #FFFFFF | Text on dark backgrounds |
| `var(--semantic-border-layout)` | #E9EAEB | Dividers, card borders |
| `var(--semantic-border-input)` | #E9EAEB | Input borders |
| `var(--semantic-border-input-focus)` | #2BBCCA | Focused input border |
| `var(--semantic-error-primary)` | #F04438 | Error text and borders |
| `var(--semantic-error-surface)` | #FEF3F2 | Error background |
| `var(--semantic-success-primary)` | #17B26A | Success text |
| `var(--semantic-success-surface)` | #ECFDF3 | Success background |

## Typography
Font: `'Source Sans Pro', sans-serif` — Google Fonts, weights 400/600/700.
Body default = 16px. Helper text = 14px. Metadata = 12px max.

## Modals — z-[9999] required
Host app navbar is at z-index 1000+. Always use `z-[9999]` for overlays. Never `z-50`.

## Design Language
Enterprise SaaS: professional, clean, purposeful. Not flashy. Not experimental.
- Cards: `rounded-lg border border-[var(--semantic-border-layout)] bg-[var(--semantic-bg-primary)] p-6 shadow-sm`
- Transitions: `transition-all duration-200`
- All interactive elements need visible focus rings
