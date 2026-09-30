# Typography

Source: `src/components/ui/typography.tsx` · React: `<Typography kind variant color align truncate tag>`

Font: **Source Sans Pro**, weights **400 and 600 only** (loaded by the starter). `font-medium` (500) therefore renders at 400 and `font-bold` (700) at 600 — this is how production looks; do not load extra weights.

## Scale

Every style includes `m-0`. Use these exact class strings for text that is not inside a component.

| Kind / variant | Element | Classes | Size / line |
|---|---|---|---|
| display large | `h4` | `m-0 text-[57px] leading-[64px] font-normal` | 57 / 64 |
| display medium | `h4` | `m-0 text-[45px] leading-[52px] font-normal` | 45 / 52 |
| display small | `h4` | `m-0 text-[36px] leading-[44px] font-normal` | 36 / 44 |
| headline large | `h1` | `m-0 text-[32px] leading-[40px] font-semibold` | 32 / 40 |
| headline medium | `h2` | `m-0 text-[28px] leading-[36px] font-semibold` | 28 / 36 |
| headline small | `h3` | `m-0 text-[24px] leading-[32px] font-semibold` | 24 / 32 |
| title large | `h5` | `m-0 text-lg leading-[22px] font-semibold` | 18 / 22 |
| title medium | `h5` | `m-0 text-base leading-5 font-semibold` | 16 / 20 |
| title small | `h5` | `m-0 text-sm leading-[18px] font-semibold` | 14 / 18 |
| label large | `label` | `m-0 text-sm leading-5 font-semibold` | 14 / 20 |
| label medium | `label` | `m-0 text-xs leading-4 font-semibold` | 12 / 16 |
| label small | `label` | `m-0 text-[10px] leading-[14px] font-semibold` | 10 / 14 |
| body large | `span` | `m-0 text-base leading-5 font-normal` | 16 / 20 |
| body medium (default) | `span` | `m-0 text-sm leading-[18px] font-normal` | 14 / 18 |
| body small | `span` | `m-0 text-xs leading-4 font-normal` | 12 / 16 |

## Colors

| `color` | Class | Use |
|---|---|---|
| primary | `text-semantic-text-primary` (#181D27) | Main text |
| secondary | `text-semantic-text-secondary` (#343E55) | Labels, secondary emphasis |
| muted | `text-semantic-text-muted` (#717680) | Helper text, descriptions, metadata |
| placeholder | `text-semantic-text-placeholder` (#A2A6B1) | Placeholder-like text |
| link | `text-semantic-text-link` (#4275D6) | Links |
| inverted | `text-semantic-text-inverted` (#FFFFFF) | On dark surfaces |
| error | `text-semantic-error-primary` (#F04438) | Errors |
| success | `text-semantic-success-primary` (#17B26A) | Success |

Truncate with `truncate`; alignment with `text-left|center|right`.

## Rendered

### Full scale
```html
<div class="flex flex-col gap-3">
  <h4 class="m-0 text-[57px] leading-[64px] font-normal">Display large</h4>
  <h4 class="m-0 text-[45px] leading-[52px] font-normal">Display medium</h4>
  <h4 class="m-0 text-[36px] leading-[44px] font-normal">Display small</h4>
  <h1 class="m-0 text-[32px] leading-[40px] font-semibold">Headline large</h1>
  <h2 class="m-0 text-[28px] leading-[36px] font-semibold">Headline medium</h2>
  <h3 class="m-0 text-[24px] leading-[32px] font-semibold">Headline small</h3>
  <h5 class="m-0 text-lg leading-[22px] font-semibold">Title large</h5>
  <h5 class="m-0 text-base leading-5 font-semibold">Title medium</h5>
  <h5 class="m-0 text-sm leading-[18px] font-semibold">Title small</h5>
  <label class="m-0 text-sm leading-5 font-semibold">Label large</label>
  <label class="m-0 text-xs leading-4 font-semibold">Label medium</label>
  <label class="m-0 text-[10px] leading-[14px] font-semibold">Label small</label>
  <span class="m-0 text-base leading-5 font-normal">Body large</span>
  <span class="m-0 text-sm leading-[18px] font-normal">Body medium</span>
  <span class="m-0 text-xs leading-4 font-normal">Body small</span>
</div>
```

### Colors
```html
<div class="flex flex-col gap-2">
  <span class="m-0 text-sm leading-[18px] font-normal text-semantic-text-primary">Primary text</span>
  <span class="m-0 text-sm leading-[18px] font-normal text-semantic-text-secondary">Secondary text</span>
  <span class="m-0 text-sm leading-[18px] font-normal text-semantic-text-muted">Muted text</span>
  <span class="m-0 text-sm leading-[18px] font-normal text-semantic-text-link">Link text</span>
  <span class="m-0 text-sm leading-[18px] font-normal text-semantic-error-primary">Error text</span>
  <span class="m-0 text-sm leading-[18px] font-normal text-semantic-success-primary">Success text</span>
</div>
```

## Conventions used by the components

- Page title (PageHeader): `text-lg font-semibold leading-normal` (18px).
- Dialog title: `text-lg font-semibold leading-none tracking-tight`.
- Form label: `text-sm font-semibold text-semantic-text-secondary`.
- Helper / description: `text-sm text-semantic-text-muted`.
- Body copy in forms and inputs: 16px (`text-base`); dense UI (tables, menus, tooltips): 14px / 12px.
- Every `<p>` gets `m-0` (the host app ships Bootstrap, which adds `margin-bottom: 1rem` to paragraphs).
