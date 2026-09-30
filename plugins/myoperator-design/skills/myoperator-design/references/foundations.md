# Foundations

## Contents
- Color — how to use it
  - Color roles
  - Semantic tokens
  - Primitive palettes
- Typography
- Sizing and spacing
- Radius
- Shadows (theme overrides Tailwind's defaults)
- Layers
- Icons
- Breakpoints

Everything below is generated from, or checked against, myoperator-ui v0.0.459 (`src/index.css`, `tailwind.config.js`). The starter already contains all of it — this page is for choosing values when you write layout around the components.

## Color — how to use it

- Use the **semantic** classes: `bg-semantic-bg-ui`, `text-semantic-text-muted`, `border-semantic-border-layout`, … (or `var(--semantic-…)` in raw CSS). Never type a hex value.
- Primitives (`var(--color-neutral-50)`, `var(--color-primary-800)`) are allowed only where a component already uses them or no semantic token fits — write them as arbitrary values: `bg-[var(--color-neutral-50)]`.
- Names describe **role, not lightness** — check the value before using a token:
  - `semantic-bg-secondary` is **near-black** (#0C0F12, the sidebar), not a light grey. Light page surfaces are `semantic-bg-ui` (#F5F5F5) and `semantic-bg-grey` (#E9EAEB).
  - `semantic-bg-hover` is #F5F5F5 (same as `bg-ui`).
  - `semantic-text-secondary` is the dark blue-grey #343E55 (used for labels), darker than `text-muted`.

### Color roles

| Role | Use |
|---|---|
| `semantic-primary` #343E55 | Primary buttons, checked checkboxes, switch on, active tab underline, selected dates, tooltips |
| `semantic-brand` #2BBCCA (turquoise) | **Only**: input focus borders (`border-input-focus`), selected-option checkmarks in lists, the logo tile, the reply-quote accent. Never buttons, badges, tags, charts, large fills |
| `semantic-text-link` #4275D6 | Links and link-style buttons (blue, not turquoise) |
| Status (success / warning / error / info) | `*-primary` for icons and strong text, `*-surface` for tinted backgrounds, `*-border` for tinted borders, `*-text` for text on surfaces |
| Neutrals | `bg-primary` white cards · `bg-ui` #F5F5F5 subtle fills, hovers, table header · `bg-grey` #E9EAEB app canvas behind cards, skeletons · `border-layout` #E9EAEB all dividers and container borders |
| Charts (no chart component exists) | Default series `semantic-primary`; meaning via status colors; never turquoise |

### Semantic tokens

| Token | Value | Tailwind | Aliases |
|---|---|---|---|
| **Primary** | | | |
| `--semantic-primary` | `#343E55` | `bg-semantic-primary` / `text-semantic-primary` / `border-semantic-primary` | `--color-primary-500` |
| `--semantic-primary-hover` | `#2F384D` | `bg-semantic-primary-hover` / `text-semantic-primary-hover` / `border-semantic-primary-hover` | `--color-primary-600` |
| `--semantic-primary-selected` | `#777E8D` | `bg-semantic-primary-selected` / `text-semantic-primary-selected` / `border-semantic-primary-selected` | `--color-primary-300` |
| `--semantic-primary-selected-hover` | `#5D6577` | `bg-semantic-primary-selected-hover` / `text-semantic-primary-selected-hover` / `border-semantic-primary-selected-hover` | `--color-primary-400` |
| `--semantic-primary-highlighted` | `#252C3C` | `bg-semantic-primary-highlighted` / `text-semantic-primary-highlighted` / `border-semantic-primary-highlighted` | `--color-primary-700` |
| `--semantic-primary-surface` | `#EBECEE` | `bg-semantic-primary-surface` / `text-semantic-primary-surface` / `border-semantic-primary-surface` | `--color-primary-50` |
| **Brand (turquoise)** | | | |
| `--semantic-brand` | `#2BBCCA` | `bg-semantic-brand` / `text-semantic-brand` / `border-semantic-brand` | `--color-secondary-500` |
| `--semantic-brand-hover` | `#1F858F` | `bg-semantic-brand-hover` / `text-semantic-brand-hover` / `border-semantic-brand-hover` | `--color-secondary-700` |
| `--semantic-brand-selected` | `#71D2DB` | `bg-semantic-brand-selected` / `text-semantic-brand-selected` / `border-semantic-brand-selected` | `--color-secondary-300` |
| `--semantic-brand-selected-hover` | `#27ABB8` | `bg-semantic-brand-selected-hover` / `text-semantic-brand-selected-hover` / `border-semantic-brand-selected-hover` | `--color-secondary-600` |
| `--semantic-brand-highlighted` | `#27ABB8` | `bg-semantic-brand-highlighted` / `text-semantic-brand-highlighted` / `border-semantic-brand-highlighted` | `--color-secondary-600` |
| `--semantic-brand-surface` | `#EAF8FA` | `bg-semantic-brand-surface` / `text-semantic-brand-surface` / `border-semantic-brand-surface` | `--color-secondary-50` |
| `--semantic-brand-text` | `#18676F` | `bg-semantic-brand-text` / `text-semantic-brand-text` / `border-semantic-brand-text` | `--color-secondary-800` |
| **Backgrounds** | | | |
| `--semantic-bg-primary` | `#FFFFFF` | `bg-semantic-bg-primary` / `text-semantic-bg-primary` / `border-semantic-bg-primary` | `--color-white` |
| `--semantic-bg-secondary` | `#0C0F12` | `bg-semantic-bg-secondary` / `text-semantic-bg-secondary` / `border-semantic-bg-secondary` | `--color-primary-950` |
| `--semantic-bg-ui` | `#F5F5F5` | `bg-semantic-bg-ui` / `text-semantic-bg-ui` / `border-semantic-bg-ui` | `--color-neutral-100` |
| `--semantic-bg-canvas` | `#F1F5F9` | `bg-semantic-bg-canvas` / `text-semantic-bg-canvas` / `border-semantic-bg-canvas` | `--color-slate-100` |
| `--semantic-bg-subtle` | `#FAFAFA` | `bg-semantic-bg-subtle` / `text-semantic-bg-subtle` / `border-semantic-bg-subtle` | `--color-neutral-50` |
| `--semantic-bg-grey` | `#E9EAEB` | `bg-semantic-bg-grey` / `text-semantic-bg-grey` / `border-semantic-bg-grey` | `--color-neutral-200` |
| `--semantic-bg-grey-hover` | `#A4A7AE` | `bg-semantic-bg-grey-hover` / `text-semantic-bg-grey-hover` / `border-semantic-bg-grey-hover` | `--color-neutral-400` |
| `--semantic-bg-inverted` | `#000000` | `bg-semantic-bg-inverted` / `text-semantic-bg-inverted` / `border-semantic-bg-inverted` | `--color-black` |
| `--semantic-bg-hover` | `#F5F5F5` | `bg-semantic-bg-hover` / `text-semantic-bg-hover` / `border-semantic-bg-hover` | `--color-neutral-100` |
| **Text** | | | |
| `--semantic-text-primary` | `#181D27` | `bg-semantic-text-primary` / `text-semantic-text-primary` / `border-semantic-text-primary` | `--color-neutral-900` |
| `--semantic-text-secondary` | `#343E55` | `bg-semantic-text-secondary` / `text-semantic-text-secondary` / `border-semantic-text-secondary` | `--color-primary-500` |
| `--semantic-text-placeholder` | `#A2A6B1` | `bg-semantic-text-placeholder` / `text-semantic-text-placeholder` / `border-semantic-text-placeholder` | `--color-primary-200` |
| `--semantic-text-link` | `#4275D6` | `bg-semantic-text-link` / `text-semantic-text-link` / `border-semantic-text-link` | `--color-info-500` |
| `--semantic-text-inverted` | `#FFFFFF` | `bg-semantic-text-inverted` / `text-semantic-text-inverted` / `border-semantic-text-inverted` | `--color-white` |
| `--semantic-text-muted` | `#717680` | `bg-semantic-text-muted` / `text-semantic-text-muted` / `border-semantic-text-muted` | `--color-neutral-500` |
| **Borders** | | | |
| `--semantic-border-primary` | `#343E55` | `bg-semantic-border-primary` / `text-semantic-border-primary` / `border-semantic-border-primary` | `--color-primary-500` |
| `--semantic-border-secondary` | `#777E8D` | `bg-semantic-border-secondary` / `text-semantic-border-secondary` / `border-semantic-border-secondary` | `--color-primary-300` |
| `--semantic-border-accent` | `#27ABB8` | `bg-semantic-border-accent` / `text-semantic-border-accent` / `border-semantic-border-accent` | `--color-secondary-600` |
| `--semantic-border-layout` | `#E9EAEB` | `bg-semantic-border-layout` / `text-semantic-border-layout` / `border-semantic-border-layout` | `--color-neutral-200` |
| `--semantic-border-input` | `#E9EAEB` | `bg-semantic-border-input` / `text-semantic-border-input` / `border-semantic-border-input` | `--color-neutral-200` |
| `--semantic-border-input-focus` | `#2BBCCA` | `bg-semantic-border-input-focus` / `text-semantic-border-input-focus` / `border-semantic-border-input-focus` | `--color-secondary-500` |
| `--semantic-border-focus` | `#2BBCCA` | `bg-semantic-border-focus` / `text-semantic-border-focus` / `border-semantic-border-focus` | `--color-secondary-500` |
| **Disabled** | | | |
| `--semantic-disabled-primary` | `#A2A6B1` | `bg-semantic-disabled-primary` / `text-semantic-disabled-primary` / `border-semantic-disabled-primary` | `--color-primary-200` |
| `--semantic-disabled-secondary` | `#EBECEE` | `bg-semantic-disabled-secondary` / `text-semantic-disabled-secondary` / `border-semantic-disabled-secondary` | `--color-primary-50` |
| `--semantic-disabled-text` | `#717680` | `bg-semantic-disabled-text` / `text-semantic-disabled-text` / `border-semantic-disabled-text` | `--color-neutral-500` |
| `--semantic-disabled-border` | `#D5D7DA` | `bg-semantic-disabled-border` / `text-semantic-disabled-border` / `border-semantic-disabled-border` | `--color-neutral-300` |
| **Error** | | | |
| `--semantic-error-primary` | `#F04438` | `bg-semantic-error-primary` / `text-semantic-error-primary` / `border-semantic-error-primary` | `--color-error-500` |
| `--semantic-error-surface-subtle` | `#FFFBFA` | `bg-semantic-error-surface-subtle` / `text-semantic-error-surface-subtle` / `border-semantic-error-surface-subtle` | `--color-error-25` |
| `--semantic-error-surface` | `#FEF3F2` | `bg-semantic-error-surface` / `text-semantic-error-surface` / `border-semantic-error-surface` | `--color-error-50` |
| `--semantic-error-text` | `#B42318` | `bg-semantic-error-text` / `text-semantic-error-text` / `border-semantic-error-text` | `--color-error-700` |
| `--semantic-error-border` | `#FDA29B` | `bg-semantic-error-border` / `text-semantic-error-border` / `border-semantic-error-border` | `--color-error-300` |
| `--semantic-error-hover` | `#D92D20` | `bg-semantic-error-hover` / `text-semantic-error-hover` / `border-semantic-error-hover` | `--color-error-600` |
| **Warning** | | | |
| `--semantic-warning-primary` | `#F79009` | `bg-semantic-warning-primary` / `text-semantic-warning-primary` / `border-semantic-warning-primary` | `--color-warning-500` |
| `--semantic-warning-surface-subtle` | `#FFFCF5` | `bg-semantic-warning-surface-subtle` / `text-semantic-warning-surface-subtle` / `border-semantic-warning-surface-subtle` | `--color-warning-25` |
| `--semantic-warning-surface` | `#FFFAEB` | `bg-semantic-warning-surface` / `text-semantic-warning-surface` / `border-semantic-warning-surface` | `--color-warning-50` |
| `--semantic-warning-text` | `#B54708` | `bg-semantic-warning-text` / `text-semantic-warning-text` / `border-semantic-warning-text` | `--color-warning-700` |
| `--semantic-warning-border` | `#FEC84B` | `bg-semantic-warning-border` / `text-semantic-warning-border` / `border-semantic-warning-border` | `--color-warning-300` |
| `--semantic-warning-hover` | `#DC6803` | `bg-semantic-warning-hover` / `text-semantic-warning-hover` / `border-semantic-warning-hover` | `--color-warning-600` |
| **Success** | | | |
| `--semantic-success-primary` | `#17B26A` | `bg-semantic-success-primary` / `text-semantic-success-primary` / `border-semantic-success-primary` | `--color-success-500` |
| `--semantic-success-surface-subtle` | `#F6FEF9` | `bg-semantic-success-surface-subtle` / `text-semantic-success-surface-subtle` / `border-semantic-success-surface-subtle` | `--color-success-25` |
| `--semantic-success-surface` | `#ECFDF3` | `bg-semantic-success-surface` / `text-semantic-success-surface` / `border-semantic-success-surface` | `--color-success-50` |
| `--semantic-success-text` | `#067647` | `bg-semantic-success-text` / `text-semantic-success-text` / `border-semantic-success-text` | `--color-success-700` |
| `--semantic-success-border` | `#75E0A7` | `bg-semantic-success-border` / `text-semantic-success-border` / `border-semantic-success-border` | `--color-success-300` |
| `--semantic-success-hover` | `#079455` | `bg-semantic-success-hover` / `text-semantic-success-hover` / `border-semantic-success-hover` | `--color-success-600` |
| **Info** | | | |
| `--semantic-info-primary` | `#4275D6` | `bg-semantic-info-primary` / `text-semantic-info-primary` / `border-semantic-info-primary` | `--color-info-500` |
| `--semantic-info-surface-subtle` | `#F6F8FD` | `bg-semantic-info-surface-subtle` / `text-semantic-info-surface-subtle` / `border-semantic-info-surface-subtle` | `--color-info-25` |
| `--semantic-info-surface` | `#ECF1FB` | `bg-semantic-info-surface` / `text-semantic-info-surface` / `border-semantic-info-surface` | `--color-info-50` |
| `--semantic-info-text` | `#2F5398` | `bg-semantic-info-text` / `text-semantic-info-text` / `border-semantic-info-text` | `--color-info-700` |
| `--semantic-info-border` | `#A8C0EC` | `bg-semantic-info-border` / `text-semantic-info-border` / `border-semantic-info-border` | `--color-info-200` |
| `--semantic-info-hover` | `#3C6AC3` | `bg-semantic-info-hover` / `text-semantic-info-hover` / `border-semantic-info-hover` | `--color-info-600` |

Also used by a few components: `--color-neutral-50` (#FAFAFA: disabled fields, dashed-button hover), `--color-neutral-100` (table header), `--color-neutral-400` (checkbox hover border), `--color-neutral-700` (secondary tag text), `--color-primary-800` #1D222F (app top bar).

The Dialog still uses the legacy shadcn tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `ring-ring`) — they are defined in the starter; use them only inside dialog markup copied from `modals.md`.

### Primitive palettes

| Palette | Steps |
|---|---|
| `--color-neutral-*` | 25 `#FDFDFD` · 50 `#FAFAFA` · 100 `#F5F5F5` · 200 `#E9EAEB` · 300 `#D5D7DA` · 400 `#A4A7AE` · 500 `#717680` · 600 `#535862` · 700 `#414651` · 800 `#252B37` · 900 `#181D27` · 950 `#0A0D12` |
| `--color-slate-*` | 100 `#F1F5F9` |
| `--color-primary-*` | 25 `#F9FAFB` · 50 `#EBECEE` · 100 `#C0C3CA` · 200 `#A2A6B1` · 300 `#777E8D` · 400 `#5D6577` · 500 `#343E55` · 600 `#2F384D` · 700 `#252C3C` · 800 `#1D222F` · 900 `#161A24` · 950 `#0C0F12` |
| `--color-secondary-*` | 25 `#F6FCFD` · 50 `#EAF8FA` · 100 `#BDEAEF` · 200 `#9DE0E7` · 300 `#71D2DB` · 400 `#55C9D5` · 500 `#2BBCCA` · 600 `#27ABB8` · 700 `#1F858F` · 800 `#18676F` · 900 `#124F55` · 950 `#0F3D3D` |
| `--color-error-*` | 25 `#FFFBFA` · 50 `#FEF3F2` · 100 `#FEE4E2` · 200 `#FECDCA` · 300 `#FDA29B` · 400 `#F97066` · 500 `#F04438` · 600 `#D92D20` · 700 `#B42318` · 800 `#912018` · 900 `#7A271A` · 950 `#55160C` |
| `--color-warning-*` | 25 `#FFFCF5` · 50 `#FFFAEB` · 100 `#FEF0C7` · 200 `#FEDF89` · 300 `#FEC84B` · 400 `#FDB022` · 500 `#F79009` · 600 `#DC6803` · 700 `#B54708` · 800 `#93370D` · 900 `#7A2E0E` · 950 `#4E1D09` |
| `--color-success-*` | 25 `#F6FEF9` · 50 `#ECFDF3` · 100 `#DCFAE6` · 200 `#ABEFC6` · 300 `#75E0A7` · 400 `#47CD89` · 500 `#17B26A` · 600 `#079455` · 700 `#067647` · 800 `#085D3A` · 900 `#074D31` · 950 `#053321` |
| `--color-info-*` | 25 `#F6F8FD` · 50 `#ECF1FB` · 100 `#C4D4F2` · 200 `#A8C0EC` · 300 `#80A3E4` · 400 `#6891DE` · 500 `#4275D6` · 600 `#3C6AC3` · 700 `#2F5398` · 800 `#244076` · 900 `#1C315A` · 950 `#182A44` |

## Typography

Source Sans Pro, **400 and 600 only**. Scale and color classes: `components/typography.md`. Rules of thumb:
- Form controls and body text: 16px (`text-base`). Dense UI (tables, menus, tags, badges, buttons, helper text): 14px (`text-sm`). Metadata, tooltips, toasts' description: 12px (`text-xs`).
- Labels `text-sm font-semibold text-semantic-text-secondary`; helper/description `text-sm text-semantic-text-muted`; page title `text-lg font-semibold`.
- `m-0` on every `<p>`.

## Sizing and spacing

Tailwind's 4px scale. Values the components and measured screens use:

| Thing | Value |
|---|---|
| Control heights | Button 36px (sm 32, lg 40) · Input / Select / TextField / MultiSelect / PhoneInput / DateTimePicker **42px** (TextField `sm` 36) · DateRangePicker 40px · Table head 48px · Tabs 46px |
| Label → control → helper | `gap-1` (4px) |
| Between form fields | `gap-4` (16px) |
| Between buttons | `gap-2` (8px) |
| Card / section padding | `p-4`–`p-6`; the app's content card uses `px-5`, body `pt-6 pb-5` |
| Dialog | `p-6`, `gap-4` |
| App canvas around the content card | `p-4` on `bg-semantic-bg-grey` |

## Radius

| Class | px | Used by |
|---|---|---|
| `rounded-sm` | **4px** (the theme overrides Tailwind's 2px) | list options, menu items, small icon buttons |
| `rounded` | 4px | buttons, inputs, selects, tags, alerts, dropdown lists, cards |
| `rounded-md` | 6px | icon buttons, dropdown menus, tooltips, NumberStepField |
| `rounded-lg` | 8px | dialogs, tables, bordered accordions, date popovers |
| `rounded-[5px]` | 5px | toasts |
| `rounded-full` | — | badges, avatars, switches, calendar days |

## Shadows (theme overrides Tailwind's defaults)

| Class | Value |
|---|---|
| `shadow-xs` | `0px 1px 2px 0px rgba(16, 24, 40, 0.05)` |
| `shadow-sm` | `0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)` |
| `shadow-md` | `0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)` |
| `shadow-lg` | `0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)` |
| `shadow-xl` | `0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)` |
| `shadow-2xl` | `0px 24px 48px -12px rgba(16, 24, 40, 0.18)` |

`shadow-md` dropdowns, selects, tooltips, toasts · `shadow-lg` dialogs, date popovers, switch thumb · cards usually have no shadow (border only).

## Layers

Every overlay (dialogs, dropdowns, selects, tooltips, popovers) uses **`z-[9999]`** — the host app's navbar sits at 1000+. Toast viewport `z-[9999999]`. Never `z-50`.

## Icons

- **Lucide**, pinned to the version the components use (0.554.0). HTML: `<i data-lucide="chevron-down" class="size-4"></i>` (the starter converts it to the exact SVG and keeps your classes). React: `import { ChevronDown } from "lucide-react"` → `<ChevronDown className="size-4" />`. Kebab name ↔ PascalCase (`circle-check` ↔ `CircleCheck`).
- Stroke width 2 (checkbox checks use `stroke-[3]`). Color inherits `currentColor`.
- Sizes: 16px (`size-4`) default in controls, menus and buttons; 18px in `sm` buttons and ReadableField; 20px in alerts and `lg` buttons; 24px in toasts and page-header icons; 12px in chips, badges and steppers.
- Icons the components use: `chevron-down/up/left/right`, `x`, `check`, `minus`, `plus`, `search`, `info`, `circle-check`, `circle-x`, `circle-alert`, `triangle-alert`, `loader-circle` (spinning), `ellipsis`, `ellipsis-vertical`, `arrow-left`, `copy`, `eye`, `eye-off`, `clock-2`, `pencil`, `trash-2`, `download`, `inbox`, `webhook`.

## Breakpoints

Tailwind defaults: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536 (`container` max 1400px, centered, 2rem padding). The app shell collapses the sidebar below `md`.
