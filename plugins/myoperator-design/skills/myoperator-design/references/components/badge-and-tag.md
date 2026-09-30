# Badge and Tag

## Contents
- Badge
  - Active
  - Information
  - Warning
  - Failed
  - Disabled
  - Default
  - Outline
  - Small
  - Large
  - With left icon (icon sits in a [&_svg]:size-3 span)
- Tag
  - Default
  - Accent
  - Secondary
  - Success
  - Warning
  - Error
  - Info
  - Small info — use for "NEW" / "Beta" markers
  - Large
  - With bold label prefix
  - Removable (filters / chips) — data-dismiss removes it via the starter's behaviours
  - TagGroup — first maxVisible tags, the last one followed by a "+N more" tag
- Don't

Two different components that are easy to confuse. **Badge = status (pill). Tag = category/metadata (rectangle).**

| | Badge | Tag |
|---|---|---|
| Shape | Pill — `rounded-full` | Rectangle — `rounded` (4px) |
| Meaning | State of a thing: Active, Failed, Pending | What a thing is / belongs to: event types, channels, filters |
| Text | 14px, `font-medium` (renders at 400 — only 400/600 are loaded) | 14px regular; optional **bold label prefix** |
| Extras | left/right icon (12px) | bold `label`, remove (×), `TagGroup` with "+N more" |
| React | `<Badge variant size leftIcon rightIcon>` | `<Tag variant size label onRemove>` / `<TagGroup tags maxVisible>` |

"NEW" / "Beta" markers next to titles or menu items → **Tag** `info` `sm`.
Count badges on tabs → **Badge** `sm` (see `tabs.md`).

---

## Badge

Source: `src/components/ui/badge.tsx`

| Variant | Colors | Use for |
|---|---|---|
| `active` | success surface + success text | Active, Live, Connected, Answered |
| `information` | info surface + info text | Coming soon, Scheduled |
| `warning` | warning surface + warning text | Pending, Expiring |
| `failed` (alias `destructive`) | error surface + error text | Failed, Rejected |
| `disabled` | bg-ui + muted text | Inactive, Archived |
| `default` (aliases `primary`, `secondary`) | bg-ui + primary text | Neutral labels, counts |
| `outline` | transparent + layout border | Neutral, low emphasis |

Sizes: `default` 28px tall (`px-3 py-1`), `sm` 20px (`px-2 py-0.5 text-xs`), `lg` 32px (`px-4 py-1.5`). `outline` adds its 1px border (30px at default size).

### Active
```html
<div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-success-surface text-semantic-success-primary px-3 py-1 gap-1">Active</div>
```

### Information
```html
<div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-info-surface text-semantic-info-text px-3 py-1 gap-1">Coming soon</div>
```

### Warning
```html
<div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-warning-surface text-semantic-warning-primary px-3 py-1 gap-1">Pending</div>
```

### Failed
```html
<div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-error-surface text-semantic-error-primary px-3 py-1 gap-1">Failed</div>
```

### Disabled
```html
<div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-bg-ui text-semantic-text-muted px-3 py-1 gap-1">Inactive</div>
```

### Default
```html
<div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-bg-ui text-semantic-text-primary px-3 py-1 gap-1">Draft</div>
```

### Outline
```html
<div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap border border-solid border-semantic-border-layout bg-transparent text-semantic-text-primary px-3 py-1 gap-1">Manual</div>
```

### Small
```html
<div class="inline-flex items-center justify-center rounded-full font-medium transition-colors whitespace-nowrap bg-semantic-success-surface text-semantic-success-primary px-2 py-0.5 text-xs gap-1">Live</div>
```

### Large
```html
<div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-success-surface text-semantic-success-primary px-4 py-1.5 gap-1">Connected</div>
```

### With left icon (icon sits in a `[&_svg]:size-3` span)
```html
<div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-success-surface text-semantic-success-primary px-3 py-1 gap-1">
  <span class="[&_svg]:size-3">
    <i data-lucide="check" aria-hidden="true"></i>
  </span>
  Verified
</div>
```

---

## Tag

Source: `src/components/ui/tag.tsx`

| Variant | Colors | Use for |
|---|---|---|
| `default` (alias `primary`) | bg-ui + primary text | Event names, generic categories |
| `accent` | primary surface + secondary text | Direction/type (Inbound, Outbound) |
| `secondary` | bg-grey + neutral-700 text | System types (IVR, API) |
| `success` | success surface + success text | Positive outcomes (Answered) |
| `warning` | warning surface + warning text | On hold, Queued |
| `error` (alias `destructive`) | error surface + error text | Missed, Blocked |
| `info` | info surface + **primary** text | New, Beta |

Sizes: `default` 28px (`px-2 py-1`), `sm` 20px (`px-1.5 py-0.5 text-xs`), `lg` 32px (`px-3 py-1.5`).

### Default
```html
<span class="inline-flex items-center rounded text-sm bg-semantic-bg-ui text-semantic-text-primary px-2 py-1">
  <span class="font-normal inline-flex items-center gap-1">After Call Event</span>
</span>
```

### Accent
```html
<span class="inline-flex items-center rounded text-sm bg-semantic-primary-surface text-semantic-text-secondary px-2 py-1">
  <span class="font-normal inline-flex items-center gap-1">Inbound</span>
</span>
```

### Secondary
```html
<span class="inline-flex items-center rounded text-sm bg-semantic-bg-grey text-[var(--color-neutral-700)] px-2 py-1">
  <span class="font-normal inline-flex items-center gap-1">IVR</span>
</span>
```

### Success
```html
<span class="inline-flex items-center rounded text-sm bg-semantic-success-surface text-semantic-success-primary px-2 py-1">
  <span class="font-normal inline-flex items-center gap-1">Answered</span>
</span>
```

### Warning
```html
<span class="inline-flex items-center rounded text-sm bg-semantic-warning-surface text-semantic-warning-primary px-2 py-1">
  <span class="font-normal inline-flex items-center gap-1">On hold</span>
</span>
```

### Error
```html
<span class="inline-flex items-center rounded text-sm bg-semantic-error-surface text-semantic-error-primary px-2 py-1">
  <span class="font-normal inline-flex items-center gap-1">Missed</span>
</span>
```

### Info
```html
<span class="inline-flex items-center rounded text-sm bg-semantic-info-surface text-semantic-text-primary px-2 py-1">
  <span class="font-normal inline-flex items-center gap-1">New</span>
</span>
```

### Small info — use for "NEW" / "Beta" markers
```html
<span class="inline-flex items-center rounded bg-semantic-info-surface text-semantic-text-primary px-1.5 py-0.5 text-xs">
  <span class="font-normal inline-flex items-center gap-1">Beta</span>
</span>
```

### Large
```html
<span class="inline-flex items-center rounded text-sm bg-semantic-bg-ui text-semantic-text-primary px-3 py-1.5">
  <span class="font-normal inline-flex items-center gap-1">Sales team</span>
</span>
```

### With bold label prefix
```html
<span class="inline-flex items-center rounded text-sm bg-semantic-bg-ui text-semantic-text-primary px-2 py-1">
  <span class="font-semibold mr-1">In Call Event:</span>
  <span class="font-normal inline-flex items-center gap-1">Start of call, Bridge, Call ended</span>
</span>
```

### Removable (filters / chips) — `data-dismiss` removes it via the starter's behaviours
```html
<span class="inline-flex items-center rounded text-sm bg-semantic-bg-ui text-semantic-text-primary px-2 py-1">
  <span class="font-normal inline-flex items-center gap-1">Mumbai</span>
  <button type="button" class="inline-flex items-center justify-center shrink-0 bg-transparent border-none p-0 ml-0.5 cursor-pointer" aria-label="Remove" data-dismiss="span">
    <i data-lucide="x" class="size-3" aria-hidden="true"></i>
  </button>
</span>
```

### TagGroup — first `maxVisible` tags, the last one followed by a "+N more" tag
```html
<div class="flex flex-col items-start gap-2">
  <span class="inline-flex items-center rounded text-sm bg-semantic-bg-ui text-semantic-text-primary px-2 py-1">
    <span class="font-semibold mr-1">In Call Event:</span>
    <span class="font-normal inline-flex items-center gap-1">Call Begin, Start Dialing</span>
  </span>
  <div class="flex items-center gap-2">
    <span class="inline-flex items-center rounded text-sm bg-semantic-bg-ui text-semantic-text-primary px-2 py-1">
      <span class="font-semibold mr-1">WhatsApp Event:</span>
      <span class="font-normal inline-flex items-center gap-1">message.Delivered</span>
    </span>
    <span class="inline-flex items-center rounded text-sm bg-semantic-bg-ui text-semantic-text-primary px-2 py-1">
      <span class="font-normal inline-flex items-center gap-1">+1 more</span>
    </span>
  </div>
</div>
```

## Don't

- No turquoise badges or tags — neither component has a brand variant.
- Don't use a Badge for categories or a Tag for status.
- Don't round Tags (`rounded-full`) or square Badges.
