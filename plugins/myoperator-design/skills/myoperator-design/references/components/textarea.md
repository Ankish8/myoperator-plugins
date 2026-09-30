# Textarea

Source: `src/components/ui/textarea.tsx` · React: `<Textarea label required helperText error errorIcon showCount maxLength rows size resize>`

Multi-line input with the same field anatomy as TextField (label, helper/error, counter).

- Default: `px-4 py-2.5 text-base`, 4 rows by default (`rows="4"`), `resize-none`. `sm`: `px-3 py-2 text-sm`.
- Same border/focus/error/disabled treatment as Input (turquoise focus border + glow, red error border + glow).
- `errorIcon`: error message gets a leading 14px `circle-alert` icon.
- Resize options: `resize-none` (default), `resize-y`, `resize-x`, `resize`.

### Label + placeholder (3 rows)
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Description</label>
  <textarea rows="3" class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] px-4 py-2.5 text-base resize-none" aria-invalid="false" placeholder="Describe what this webhook does"></textarea>
</div>
```

### Helper text + character count
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Greeting message</label>
  <textarea rows="3" class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] px-4 py-2.5 text-base resize-none" maxlength="160" aria-invalid="false">Thanks for calling Acme. Please hold while we connect you.</textarea>
  <div class="flex justify-between items-start gap-2">
    <span class="text-sm text-semantic-text-muted">Played when a caller connects.</span>
    <span class="text-sm text-semantic-text-muted">58/160</span>
  </div>
</div>
```

### Error with icon
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Message<span class="text-semantic-error-primary ml-0.5">*</span></label>
  <textarea rows="3" class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid focus:outline-none px-4 py-2.5 text-base border-semantic-error-primary shadow-[0_0_0_1px_rgba(240,68,56,0.12)] focus:border-semantic-error-primary focus:shadow-[0_0_0_1px_rgba(240,68,56,0.12)] resize-none" required aria-invalid="true">Hi {{name</textarea>
  <div class="flex justify-between items-start gap-2">
    <div role="alert" class="flex items-center gap-1.5 min-w-0">
      <i data-lucide="circle-alert" class="size-3.5 shrink-0 text-semantic-error-primary" aria-hidden="true"></i>
      <span class="text-sm text-semantic-error-primary">Invalid characters not allowed.</span>
    </div>
  </div>
</div>
```

### Small
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Notes</label>
  <textarea rows="3" class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] px-3 py-2 text-sm resize-none" aria-invalid="false" placeholder="Add a note"></textarea>
</div>
```

### Disabled
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Notes</label>
  <textarea rows="3" class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] px-4 py-2.5 text-base resize-none" disabled aria-invalid="false">Read only</textarea>
</div>
```
