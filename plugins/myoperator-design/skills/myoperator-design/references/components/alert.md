# Alert

## Contents
  - Default
  - Success
  - Error
  - Warning
  - Info
  - With actions + close (data-dismiss removes it)
  - Without icon

Source: `src/components/ui/alert.tsx` · React: `<Alert variant icon showIcon closable onClose action secondaryAction><AlertTitle/><AlertDescription/></Alert>`

Inline, persistent banners inside the page (errors, warnings, info). For transient feedback after an action use Toast.

- `rounded` (**4px**), 1px border, `p-4`, `text-sm text-semantic-text-primary` — body text stays dark in every variant; only surface, border and icon change color.
- Icon: 20px, `absolute left-4 top-4`, content indented `pl-8`.

| Variant | Surface / border | Icon |
|---|---|---|
| `default` | `bg-semantic-bg-ui` / layout | `info`, primary text color |
| `success` | success surface / success border | `circle-check`, success |
| `error` (alias `destructive`) | error surface / error border | `circle-x`, error |
| `warning` | warning surface / warning border | `triangle-alert`, warning |
| `info` | info surface / info border | `info`, info |

- Title: `h5`, `font-semibold leading-tight tracking-tight`. Description: `p`, `m-0 mt-1 text-sm`.
- Actions (Buttons `sm`) and the close `x` (20px, 70% opacity) sit on the right, `gap-2`, vertically centered.

### Default
```html
<div role="alert" class="relative w-full rounded border border-solid p-4 text-sm text-semantic-text-primary [&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 bg-semantic-bg-ui border-semantic-border-layout [&>svg]:text-semantic-text-primary">
  <i data-lucide="info" class="size-5" aria-hidden="true"></i>
  <div class="flex flex-1 items-center justify-between gap-4">
    <div class="flex-1">
      <h5 class="font-semibold leading-tight tracking-tight">Heads up</h5>
      <p class="m-0 mt-1 text-sm">You can change this later in Settings.</p>
    </div>
  </div>
</div>
```

### Success
```html
<div role="alert" class="relative w-full rounded border border-solid p-4 text-sm text-semantic-text-primary [&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 bg-semantic-success-surface border-semantic-success-border [&>svg]:text-semantic-success-primary">
  <i data-lucide="circle-check" class="size-5" aria-hidden="true"></i>
  <div class="flex flex-1 items-center justify-between gap-4">
    <div class="flex-1">
      <h5 class="font-semibold leading-tight tracking-tight">Webhook saved</h5>
      <p class="m-0 mt-1 text-sm">Events will be sent to your endpoint.</p>
    </div>
  </div>
</div>
```

### Error
```html
<div role="alert" class="relative w-full rounded border border-solid p-4 text-sm text-semantic-text-primary [&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 bg-semantic-error-surface border-semantic-error-border [&>svg]:text-semantic-error-primary">
  <i data-lucide="circle-x" class="size-5" aria-hidden="true"></i>
  <div class="flex flex-1 items-center justify-between gap-4">
    <div class="flex-1">
      <h5 class="font-semibold leading-tight tracking-tight">Delivery failed</h5>
      <p class="m-0 mt-1 text-sm">Your endpoint returned 500. We will retry in 5 minutes.</p>
    </div>
  </div>
</div>
```

### Warning
```html
<div role="alert" class="relative w-full rounded border border-solid p-4 text-sm text-semantic-text-primary [&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 bg-semantic-warning-surface border-semantic-warning-border [&>svg]:text-semantic-warning-primary">
  <i data-lucide="triangle-alert" class="size-5" aria-hidden="true"></i>
  <div class="flex flex-1 items-center justify-between gap-4">
    <div class="flex-1">
      <h5 class="font-semibold leading-tight tracking-tight">Low balance</h5>
      <p class="m-0 mt-1 text-sm">Recharge before 30 Sep to avoid interruption.</p>
    </div>
  </div>
</div>
```

### Info
```html
<div role="alert" class="relative w-full rounded border border-solid p-4 text-sm text-semantic-text-primary [&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 bg-semantic-info-surface border-semantic-info-border [&>svg]:text-semantic-info-primary">
  <i data-lucide="info" class="size-5" aria-hidden="true"></i>
  <div class="flex flex-1 items-center justify-between gap-4">
    <div class="flex-1">
      <h5 class="font-semibold leading-tight tracking-tight">New IVR builder</h5>
      <p class="m-0 mt-1 text-sm">Try the drag-and-drop flow editor.</p>
    </div>
  </div>
</div>
```

### With actions + close (`data-dismiss` removes it)
```html
<div role="alert" class="relative w-full rounded border border-solid p-4 text-sm text-semantic-text-primary [&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 bg-semantic-warning-surface border-semantic-warning-border [&>svg]:text-semantic-warning-primary">
  <i data-lucide="triangle-alert" class="size-5" aria-hidden="true"></i>
  <div class="flex flex-1 items-center justify-between gap-4">
    <div class="flex-1">
      <h5 class="font-semibold leading-tight tracking-tight">Low balance</h5>
      <p class="m-0 mt-1 text-sm">₹ 240 left — about 2 days of calling.</p>
    </div>
    <div class="flex shrink-0 items-center gap-2">
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-8 min-w-16 px-3 text-xs [&_svg]:size-[18px]">Later</button>
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-8 min-w-16 px-3 text-xs [&_svg]:size-[18px]">Recharge</button>
      <button type="button" class="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-semantic-warning-primary" aria-label="Close alert" data-dismiss='[role="alert"]'>
        <i data-lucide="x" class="size-5" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>
```

### Without icon
```html
<div role="alert" class="relative w-full rounded border border-solid p-4 text-sm text-semantic-text-primary [&>svg~*]:pl-8 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 bg-semantic-info-surface border-semantic-info-border [&>svg]:text-semantic-info-primary">
  <div class="flex flex-1 items-center justify-between gap-4">
    <div class="flex-1">
      <p class="m-0 mt-1 text-sm">Scheduled maintenance on Sunday, 2:00–3:00 AM IST.</p>
    </div>
  </div>
</div>
```
