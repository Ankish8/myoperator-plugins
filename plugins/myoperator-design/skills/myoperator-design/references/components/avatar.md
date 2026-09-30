# Avatar

Source: `src/components/ui/avatar.tsx` · React: `<Avatar name src initials size variant status>`

Initials = first letter of the first and last word ("Aditi Kumar" → AK); a single word gives its first two letters.

| Size | Box | Text | Status dot |
|---|---|---|---|
| `xs` | 24px | 10px | 8px, 1px border |
| `sm` | 32px | 12px | 10px, 1.5px border |
| `md` (default) | 40px | 14px | 12px, 2px border |
| `lg` | 48px | 16px | 14px, 2px border |
| `xl` | 64px | 18px | 16px, 2px border |

Variants: `soft` (default) = `bg-semantic-bg-grey text-semantic-text-muted`; `filled` = `bg-semantic-primary text-semantic-text-inverted`.
Status colors: online `bg-semantic-success-primary`, away `bg-semantic-warning-primary`, busy `bg-semantic-error-primary`, offline `bg-semantic-bg-grey`.

### Sizes (soft)
```html
<div class="flex items-end gap-3">
  <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-6 text-[10px]" aria-label="Aditi Kumar" role="img">
    <span aria-hidden="true">AK</span>
  </div>
  <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-8 text-xs" aria-label="Aditi Kumar" role="img">
    <span aria-hidden="true">AK</span>
  </div>
  <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-10 text-sm" aria-label="Aditi Kumar" role="img">
    <span aria-hidden="true">AK</span>
  </div>
  <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-12 text-base" aria-label="Aditi Kumar" role="img">
    <span aria-hidden="true">AK</span>
  </div>
  <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-16 text-lg" aria-label="Aditi Kumar" role="img">
    <span aria-hidden="true">AK</span>
  </div>
</div>
```

### Filled
```html
<div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-primary text-semantic-text-inverted size-10 text-sm" aria-label="Rahul Verma" role="img">
  <span aria-hidden="true">RV</span>
</div>
```

### With status (online, away, busy, offline)
```html
<div class="flex items-center gap-3">
  <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-10 text-sm" aria-label="Aditi Kumar" role="img">
    <span aria-hidden="true">AK</span>
    <span class="absolute bottom-0 right-0 rounded-full border-background size-3 border-2 border-solid bg-semantic-success-primary" data-status="online"></span>
  </div>
  <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-10 text-sm" aria-label="Rahul Verma" role="img">
    <span aria-hidden="true">RV</span>
    <span class="absolute bottom-0 right-0 rounded-full border-background size-3 border-2 border-solid bg-semantic-warning-primary" data-status="away"></span>
  </div>
  <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-10 text-sm" aria-label="Sana Shaikh" role="img">
    <span aria-hidden="true">SS</span>
    <span class="absolute bottom-0 right-0 rounded-full border-background size-3 border-2 border-solid bg-semantic-error-primary" data-status="busy"></span>
  </div>
  <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-10 text-sm" aria-label="Neha Joshi" role="img">
    <span aria-hidden="true">NJ</span>
    <span class="absolute bottom-0 right-0 rounded-full border-background size-3 border-2 border-solid bg-semantic-bg-grey" data-status="offline"></span>
  </div>
</div>
```

### With image
```html
<div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-12 text-base" aria-label="Aditi Kumar" role="img">
  <img alt="Aditi Kumar" class="size-full object-cover" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22480%22%20height%3D%22320%22%3E%3Crect%20width%3D%22480%22%20height%3D%22320%22%20fill%3D%22%23C0C3CA%22%2F%3E%3Ccircle%20cx%3D%22240%22%20cy%3D%22160%22%20r%3D%2260%22%20fill%3D%22%23777E8D%22%2F%3E%3C%2Fsvg%3E">
</div>
```
