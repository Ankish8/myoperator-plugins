# Checkbox

Source: `src/components/ui/checkbox.tsx` (Radix Checkbox) · React: `<Checkbox checked onCheckedChange label labelPosition size disabled>`

| Size | Box | Check icon |
|---|---|---|
| `sm` | 16px | 12px |
| `default` | 20px | 14px |
| `lg` | 24px | 16px |

- 2px border, 4px radius. Unchecked: white + `border-semantic-border-input` (hover `neutral-400`). Checked / indeterminate: `bg-semantic-primary` (#343E55) with a white `check` / `minus` icon at `stroke-[3]`.
- State lives in `data-state="checked|unchecked|indeterminate"` + `aria-checked`. The starter's behaviours toggle it on click and hide the indicator `<span>` while unchecked — so an interactive unchecked checkbox can keep the indicator markup (copy the checked snippet and set `data-state="unchecked"` on both the button and the span).
- Label: `text-sm font-semibold text-semantic-text-secondary` (12px for `sm`, 16px for `lg`), `gap-2`, the whole label is clickable.
- Checked color is **primary**, never turquoise.
- Use for selecting items (table rows, list options), consent and multi-choice lists; on/off settings use a Switch (`switch.md`).

### Unchecked
```html
<button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-5 w-5 cursor-pointer" aria-label="Select row"></button>
```

### Checked
```html
<button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-5 w-5 cursor-pointer" aria-label="Select row">
  <span data-state="checked" class="flex items-center justify-center">
    <i data-lucide="check" class="h-3.5 w-3.5 stroke-[3]" aria-hidden="true"></i>
  </span>
</button>
```

### Indeterminate (e.g. "select all" with a partial selection)
```html
<button type="button" role="checkbox" aria-checked="mixed" data-state="indeterminate" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-5 w-5 cursor-pointer" aria-label="Select all">
  <span data-state="indeterminate" class="flex items-center justify-center">
    <i data-lucide="minus" class="h-3.5 w-3.5 stroke-[3]" aria-hidden="true"></i>
  </span>
</button>
```

### With label (checked)
```html
<label class="inline-flex items-center gap-2 cursor-pointer">
  <button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-5 w-5 cursor-pointer">
    <span data-state="checked" class="flex items-center justify-center">
      <i data-lucide="check" class="h-3.5 w-3.5 stroke-[3]" aria-hidden="true"></i>
    </span>
  </button>
  <span class="text-sm font-semibold text-semantic-text-secondary">Send email notifications</span>
</label>
```

### Label on the left
```html
<label class="inline-flex items-center gap-2 cursor-pointer">
  <span class="text-sm font-semibold text-semantic-text-secondary">Record calls</span>
  <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-5 w-5 cursor-pointer"></button>
</label>
```

### Sizes sm / default / lg
```html
<div class="flex items-center gap-4">
  <button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-4 w-4 cursor-pointer" aria-label="sm">
    <span data-state="checked" class="flex items-center justify-center">
      <i data-lucide="check" class="h-3 w-3 stroke-[3]" aria-hidden="true"></i>
    </span>
  </button>
  <button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-5 w-5 cursor-pointer" aria-label="default">
    <span data-state="checked" class="flex items-center justify-center">
      <i data-lucide="check" class="h-3.5 w-3.5 stroke-[3]" aria-hidden="true"></i>
    </span>
  </button>
  <button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-6 w-6 cursor-pointer" aria-label="lg">
    <span data-state="checked" class="flex items-center justify-center">
      <i data-lucide="check" class="h-4 w-4 stroke-[3]" aria-hidden="true"></i>
    </span>
  </button>
</div>
```

### Disabled (unchecked + checked)
```html
<div class="flex items-center gap-4">
  <label class="inline-flex items-center gap-2 cursor-not-allowed">
    <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" data-disabled disabled value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-5 w-5 cursor-pointer"></button>
    <span class="text-sm font-semibold text-semantic-text-secondary opacity-50">Unavailable</span>
  </label>
  <label class="inline-flex items-center gap-2 cursor-not-allowed">
    <button type="button" role="checkbox" aria-checked="true" data-state="checked" data-disabled disabled value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-5 w-5 cursor-pointer">
      <span data-state="checked" data-disabled class="flex items-center justify-center">
        <i data-lucide="check" class="h-3.5 w-3.5 stroke-[3]" aria-hidden="true"></i>
      </span>
    </button>
    <span class="text-sm font-semibold text-semantic-text-secondary opacity-50">Locked on</span>
  </label>
</div>
```
