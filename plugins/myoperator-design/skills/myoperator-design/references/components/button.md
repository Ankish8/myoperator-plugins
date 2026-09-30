# Button

## Contents
- When to use which variant
- Specs
- Variants
  - Default (primary)
  - Outline
  - Secondary
  - Ghost
  - Link
  - Destructive
  - Success
  - Dashed (with left icon)
- Sizes
  - Small
  - Large
  - Icon (outline, 16px icon)
  - Icon small (ghost) — the row-actions button in tables
  - Icon large (primary, 20px icon)
- With icons
  - Left icon
  - Right icon
- States
  - Loading — spinner replaces the left icon, label becomes the loading text, button is disabled
  - Disabled
  - Disabled outline
- Don't

Source: `src/components/ui/button.tsx` · React: `<Button variant size leftIcon rightIcon loading loadingText asChild>`

## When to use which variant

| Variant | Use for | Example labels |
|---|---|---|
| `default` (alias `primary`) | The main action of a view or dialog — **one per view** | Save, Submit, Create, Add webhook |
| `outline` | The secondary action next to a primary; Cancel in dialogs; toolbar actions | Cancel, Edit, Download CSV |
| `secondary` | Less prominent actions that complement the primary | Filter, Export |
| `ghost` | Toolbar and icon-only actions, low-emphasis actions | More, Skip, ⋮ |
| `link` | Navigation-like actions inside content | Learn more, View details |
| `destructive` | Irreversible actions (always confirm first — see `modals.md`) | Delete, Remove |
| `success` | Positive confirmation actions | Approve, Mark resolved |
| `dashed` | "Add another" zones inside forms/lists | + Add condition |

Adjacent buttons: `flex items-center gap-2`, secondary (outline) **left**, primary **right**.

## Specs

| Size | Height | Min width | Padding-x | Text | Icon (svg) | Radius |
|---|---|---|---|---|---|---|
| `default` | 36px `h-9` | 80px | 16px | 14px semibold | 16px | 4px `rounded` |
| `sm` | 32px `h-8` | 64px | 12px | 12px semibold | 18px | 4px |
| `lg` | 40px `h-10` | 96px | 24px | 14px semibold | 20px | 4px |
| `icon` / `icon-sm` / `icon-lg` | 36 / 32 / 40px square | — | — | — | not sized by the button — put `size-4` (16px) on the icon, `size-5` (20px) for close buttons / `icon-lg`; an unsized Lucide icon renders 24px | 6px `rounded-md` |

Text is `leading-none` (14px line box). Disabled = `opacity-50` + no pointer events. Focus = 2px `ring-semantic-primary` with 2px offset. Hover colors are encoded in the classes (`hover:bg-semantic-primary-hover`, …).

## Variants

### Default (primary)
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">Save changes</button>
```

### Outline
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4">Cancel</button>
```

### Secondary
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary-surface text-semantic-text-secondary hover:bg-semantic-bg-hover h-9 min-w-20 px-4 [&_svg]:size-4">Export</button>
```

### Ghost
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 min-w-20 px-4 [&_svg]:size-4">Skip</button>
```

### Link
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-link underline-offset-4 hover:underline h-9 min-w-20 px-4 [&_svg]:size-4">View details</button>
```

### Destructive
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-error-primary text-semantic-text-inverted hover:bg-semantic-error-hover h-9 min-w-20 px-4 [&_svg]:size-4">Delete</button>
```

### Success
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-success-primary text-semantic-text-inverted hover:bg-semantic-success-hover h-9 min-w-20 px-4 [&_svg]:size-4">Approve</button>
```

### Dashed (with left icon)
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-dashed border-semantic-bg-hover bg-transparent text-semantic-text-muted hover:border-semantic-border-primary hover:text-semantic-text-secondary hover:bg-[var(--color-neutral-50)] h-9 min-w-20 px-4 [&_svg]:size-4">
  <i data-lucide="plus" aria-hidden="true"></i>
  Add condition
</button>
```

## Sizes

### Small
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-8 min-w-16 px-3 text-xs [&_svg]:size-[18px]">Save</button>
```

### Large
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-10 min-w-24 px-6 [&_svg]:size-5">Continue</button>
```

### Icon (outline, 16px icon)
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 w-9 rounded-md" aria-label="Edit">
  <i data-lucide="pencil" class="size-4" aria-hidden="true"></i>
</button>
```

### Icon small (ghost) — the row-actions button in tables
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-8 w-8 rounded-md" aria-label="More actions">
  <i data-lucide="ellipsis-vertical" class="size-4" aria-hidden="true"></i>
</button>
```

### Icon large (primary, 20px icon)
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-10 w-10 rounded-md" aria-label="Add">
  <i data-lucide="plus" class="size-5" aria-hidden="true"></i>
</button>
```

## With icons

Icons go **inside** the button, before or after the label; the button's `[&_svg]:size-*` sizes them.

### Left icon
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">
  <i data-lucide="plus" aria-hidden="true"></i>
  Add webhook
</button>
```

### Right icon
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4">
  Download CSV
  <i data-lucide="download" aria-hidden="true"></i>
</button>
```

## States

### Loading — spinner replaces the left icon, label becomes the loading text, button is disabled
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4" disabled>
  <i data-lucide="loader-circle" class="animate-spin" aria-hidden="true"></i>
  Saving...
</button>
```

### Disabled
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4" disabled>Save changes</button>
```

### Disabled outline
```html
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4" disabled>Cancel</button>
```

## Don't

- Don't change heights/paddings or put two `default` buttons side by side.
- Don't use turquoise (`semantic-brand`) for buttons — primary actions are `semantic-primary` (#343E55).
- Don't use `link` for primary navigation (use the sidebar pattern in `patterns.md`).
- Icon-only buttons need an `aria-label`.
