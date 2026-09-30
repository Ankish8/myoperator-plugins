# Input and TextField

## Contents
- Specs
- Input
  - Default
  - With value
  - Error
  - Disabled
- TextField
  - Label + required + helper
  - Error
  - Small (36px)
  - Left icon (search)
  - Prefix + suffix
  - Clearable (× shows when there is a value)
  - Loading
  - Character count
  - Disabled
- Layout in forms

Sources: `src/components/ui/input.tsx`, `src/components/ui/text-field.tsx`
React: `<Input state placeholder>` · `<TextField label required helperText error leftIcon rightIcon prefix suffix clearable loading showCount maxLength size>`

- **TextField** = the form field: label + control + helper/error/count. Use it for any labelled form input.
- **Input** = the bare control (search boxes in toolbars, inline edits, inputs inside other components).

## Specs

| | default | `sm` (TextField only) |
|---|---|---|
| Height | **42px** `h-[42px]` | 36px `h-9` |
| Padding-x | 16px | 12px |
| Text | 16px `text-base` | 14px |
| Radius | 4px | 4px |

- Border `border-semantic-border-input` (#E9EAEB) → focus `border-semantic-border-input-focus` (turquoise #2BBCCA) + `0 0 0 1px rgba(43,188,202,.15)` glow.
- Error: `border-semantic-error-primary` + `0 0 0 1px rgba(240,68,56,.12)` glow; message `text-sm text-semantic-error-primary`.
- Placeholder `text-semantic-text-placeholder` (#A2A6B1). Disabled: `opacity-50` + `bg-[var(--color-neutral-50)]`.
- Label: `text-sm font-semibold text-semantic-text-secondary`; required asterisk `text-semantic-error-primary ml-0.5`.
- Field stack: `flex flex-col gap-1` (4px label→control→helper).
- Helper `text-sm text-semantic-text-muted`; counter right-aligned in the same row, turns error-red past the limit.
- Adornments (icons, prefix/suffix, clear, spinner) move the border to a wrapper `div` and make the inner `input` borderless — copy the adornment snippets as a whole.

## Input

### Default
```html
<input class="h-[42px] w-full rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:text-base file:font-semibold file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]" placeholder="Enter your email">
```

### With value
```html
<input class="h-[42px] w-full rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:text-base file:font-semibold file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]" value="support@acme.in">
```

### Error
```html
<input class="h-[42px] w-full rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:text-base file:font-semibold file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid focus:outline-none border-semantic-error-primary shadow-[0_0_0_1px_rgba(240,68,56,0.12)] focus:border-semantic-error-primary focus:shadow-[0_0_0_1px_rgba(240,68,56,0.12)]" value="support@acme">
```

### Disabled
```html
<input class="h-[42px] w-full rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:text-base file:font-semibold file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]" disabled placeholder="Not editable">
```

## TextField

### Label + required + helper
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Webhook name<span class="text-semantic-error-primary ml-0.5">*</span></label>
  <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4 py-2 text-base file:text-base" aria-invalid="false" placeholder="e.g. CRM sync">
  <div class="flex justify-between items-start gap-2">
    <span class="text-sm text-semantic-text-muted">Visible only to your team.</span>
  </div>
</div>
```

### Error
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Endpoint URL<span class="text-semantic-error-primary ml-0.5">*</span></label>
  <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid focus:outline-none h-[42px] px-4 py-2 text-base file:text-base border-semantic-error-primary shadow-[0_0_0_1px_rgba(240,68,56,0.12)] focus:border-semantic-error-primary focus:shadow-[0_0_0_1px_rgba(240,68,56,0.12)]" aria-invalid="true" value="htp://crm">
  <div class="flex justify-between items-start gap-2">
    <span class="text-sm text-semantic-error-primary">Enter a valid URL</span>
  </div>
</div>
```

### Small (36px)
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Extension</label>
  <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-9 px-3 py-1.5 text-sm file:text-sm" aria-invalid="false" placeholder="101">
</div>
```

### Left icon (search)
```html
<div class="flex flex-col gap-1">
  <div class="relative flex items-center rounded bg-semantic-bg-primary transition-all border border-solid border-semantic-border-input focus-within:border-semantic-border-input-focus focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4">
    <span class="mr-2 text-semantic-text-muted [&_svg]:size-4 flex-shrink-0">
      <i data-lucide="search" aria-hidden="true"></i>
    </span>
    <input class="flex-1 bg-transparent border-0 outline-none focus:ring-0 px-0 h-full text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed text-base" aria-invalid="false" placeholder="Search by name or number">
  </div>
</div>
```

### Prefix + suffix
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Website</label>
  <div class="relative flex items-center rounded bg-semantic-bg-primary transition-all border border-solid border-semantic-border-input focus-within:border-semantic-border-input-focus focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4">
    <span class="text-sm text-semantic-text-muted mr-2 select-none">https://</span>
    <input class="flex-1 bg-transparent border-0 outline-none focus:ring-0 px-0 h-full text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed text-base" aria-invalid="false" placeholder="acme">
    <span class="text-sm text-semantic-text-muted ml-2 select-none">.com</span>
  </div>
</div>
```

### Clearable (× shows when there is a value)
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Location</label>
  <div class="relative flex items-center rounded bg-semantic-bg-primary transition-all border border-solid border-semantic-border-input focus-within:border-semantic-border-input-focus focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4">
    <input class="flex-1 bg-transparent border-0 outline-none focus:ring-0 px-0 h-full text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed text-base" aria-invalid="false" value="Bangalore office">
    <button type="button" class="ml-2 text-semantic-text-muted hover:text-semantic-text-primary flex-shrink-0 cursor-pointer" aria-label="Clear input">
      <i data-lucide="x" class="size-4" aria-hidden="true"></i>
    </button>
  </div>
</div>
```

### Loading
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Domain</label>
  <div class="relative flex items-center rounded transition-all border border-solid border-semantic-border-input focus-within:border-semantic-border-input-focus focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] cursor-not-allowed opacity-50 bg-[var(--color-neutral-50)] h-[42px] px-4">
    <input class="flex-1 bg-transparent border-0 outline-none focus:ring-0 px-0 h-full text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed text-base" disabled aria-invalid="false" value="Checking…">
    <i data-lucide="loader-circle" class="animate-spin size-4 text-semantic-text-muted ml-2 flex-shrink-0" aria-hidden="true"></i>
  </div>
</div>
```

### Character count
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Display name</label>
  <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4 py-2 text-base file:text-base" maxlength="30" aria-invalid="false" value="Acme Support">
  <div class="flex justify-between items-start gap-2">
    <span></span>
    <span class="text-sm text-semantic-text-muted">12/30</span>
  </div>
</div>
```

### Disabled
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Account ID</label>
  <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4 py-2 text-base file:text-base" disabled aria-invalid="false" value="MY-20931">
</div>
```

## Layout in forms

- Stack fields with `flex flex-col gap-4` (16px); two columns with `grid grid-cols-1 gap-4 sm:grid-cols-2`.
- Full width of their container by default — constrain the container, not the input.
- For a read-only value with copy, use **ReadableField** (`readable-field.md`), not a disabled TextField.
