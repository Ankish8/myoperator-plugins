# Toast

## Contents
  - Success
  - Error
  - Warning
  - Info
  - Default with an action (Undo)

Source: `src/components/ui/toast.tsx` (Radix Toast) · React: `<Toaster />` once at the app root, then `toast({ title, description, action })`, `toast.success(...)`, `toast.error(...)`, `toast.warning(...)`, `toast.info(...)`

Brief, auto-dismissing feedback after an action ("Changes saved"). Keep titles to a few words and descriptions to one line.

- Viewport: `fixed z-[9999999]`, bottom-right on ≥ sm (top on mobile), `p-4`, max width 420px; newest on top, up to 5.
- Toast: `rounded-[5px]` (5px), 1px border, **`p-3`**, `shadow-md`, `gap-4`.
  - `default`: white + layout border. `success` / `error` / `warning` / `info`: the matching **surface** color with a transparent border.
  - Icon (not on `default`): 24px — `circle-check` success, `circle-x` error, `triangle-alert` warning, `info` info — in the variant's primary color.
  - Title `text-sm font-semibold`; description `text-xs`; both `text-semantic-text-primary`.
  - Optional action: `h-8 px-3 text-sm rounded border` (outline-like). Close: 12px `x`, muted.

### Success
```html
<div role="region" aria-label="Notifications (F8)">
  <ol class="fixed top-0 z-[9999999] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
    <li data-state="open" class="group pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-[5px] border border-solid p-3 shadow-md transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full border-transparent bg-semantic-success-surface text-semantic-text-primary success" style="user-select: none; touch-action: none">
      <div class="flex items-center gap-4">
        <i data-lucide="circle-check" class="size-6 shrink-0 text-semantic-success-primary" aria-hidden="true"></i>
        <div class="flex flex-col gap-0.5">
          <div class="text-sm font-semibold tracking-[0.014px]">Changes saved</div>
          <div class="text-xs tracking-[0.048px]">Your webhook is live.</div>
        </div>
      </div>
      <button type="button" class="shrink-0 rounded p-0.5 text-semantic-text-muted transition-colors hover:text-semantic-text-primary focus:outline-none focus:ring-2 focus:ring-semantic-border-focus" toast-close data-dismiss="li">
        <i data-lucide="x" class="h-3 w-3" aria-hidden="true"></i>
      </button>
    </li>
  </ol>
</div>
```

### Error
```html
<div role="region" aria-label="Notifications (F8)">
  <ol class="fixed top-0 z-[9999999] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
    <li data-state="open" class="group pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-[5px] border border-solid p-3 shadow-md transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full border-transparent bg-semantic-error-surface text-semantic-text-primary error" style="user-select: none; touch-action: none">
      <div class="flex items-center gap-4">
        <i data-lucide="circle-x" class="size-6 shrink-0 text-semantic-error-primary" aria-hidden="true"></i>
        <div class="flex flex-col gap-0.5">
          <div class="text-sm font-semibold tracking-[0.014px]">Could not save</div>
          <div class="text-xs tracking-[0.048px]">Please try again.</div>
        </div>
      </div>
      <button type="button" class="shrink-0 rounded p-0.5 text-semantic-text-muted transition-colors hover:text-semantic-text-primary focus:outline-none focus:ring-2 focus:ring-semantic-border-focus" toast-close data-dismiss="li">
        <i data-lucide="x" class="h-3 w-3" aria-hidden="true"></i>
      </button>
    </li>
  </ol>
</div>
```

### Warning
```html
<div role="region" aria-label="Notifications (F8)">
  <ol class="fixed top-0 z-[9999999] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
    <li data-state="open" class="group pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-[5px] border border-solid p-3 shadow-md transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full border-transparent bg-semantic-warning-surface text-semantic-text-primary warning" style="user-select: none; touch-action: none">
      <div class="flex items-center gap-4">
        <i data-lucide="triangle-alert" class="size-6 shrink-0 text-semantic-warning-primary" aria-hidden="true"></i>
        <div class="flex flex-col gap-0.5">
          <div class="text-sm font-semibold tracking-[0.014px]">Balance low</div>
          <div class="text-xs tracking-[0.048px]">Recharge to avoid interruption.</div>
        </div>
      </div>
      <button type="button" class="shrink-0 rounded p-0.5 text-semantic-text-muted transition-colors hover:text-semantic-text-primary focus:outline-none focus:ring-2 focus:ring-semantic-border-focus" toast-close data-dismiss="li">
        <i data-lucide="x" class="h-3 w-3" aria-hidden="true"></i>
      </button>
    </li>
  </ol>
</div>
```

### Info
```html
<div role="region" aria-label="Notifications (F8)">
  <ol class="fixed top-0 z-[9999999] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
    <li data-state="open" class="group pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-[5px] border border-solid p-3 shadow-md transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full border-transparent bg-semantic-info-surface text-semantic-text-primary info" style="user-select: none; touch-action: none">
      <div class="flex items-center gap-4">
        <i data-lucide="info" class="size-6 shrink-0 text-semantic-info-primary" aria-hidden="true"></i>
        <div class="flex flex-col gap-0.5">
          <div class="text-sm font-semibold tracking-[0.014px]">Heads up</div>
          <div class="text-xs tracking-[0.048px]">3 new voicemails.</div>
        </div>
      </div>
      <button type="button" class="shrink-0 rounded p-0.5 text-semantic-text-muted transition-colors hover:text-semantic-text-primary focus:outline-none focus:ring-2 focus:ring-semantic-border-focus" toast-close data-dismiss="li">
        <i data-lucide="x" class="h-3 w-3" aria-hidden="true"></i>
      </button>
    </li>
  </ol>
</div>
```

### Default with an action (Undo)
```html
<div role="region" aria-label="Notifications (F8)">
  <ol class="fixed top-0 z-[9999999] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
    <li data-state="open" class="group pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-[5px] border border-solid p-3 shadow-md transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-primary" style="user-select: none; touch-action: none">
      <div class="flex items-center gap-4">
        <div class="flex flex-col gap-0.5">
          <div class="text-sm font-semibold tracking-[0.014px]">Event created</div>
          <div class="text-xs tracking-[0.048px]">Friday, 26 Sep at 10:30 AM</div>
        </div>
      </div>
      <button type="button" class="inline-flex h-8 shrink-0 items-center justify-center rounded border border-solid border-semantic-border-layout bg-transparent px-3 text-sm font-medium transition-colors hover:bg-semantic-bg-ui focus:outline-none focus:ring-2 focus:ring-semantic-info-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.success]:border-semantic-success-primary/30 group-[.success]:hover:border-semantic-success-primary/50 group-[.success]:hover:bg-semantic-success-primary/10 group-[.error]:border-semantic-error-primary/30 group-[.error]:hover:border-semantic-error-primary/50 group-[.error]:hover:bg-semantic-error-primary/10 group-[.warning]:border-semantic-warning-primary/30 group-[.warning]:hover:border-semantic-warning-primary/50 group-[.warning]:hover:bg-semantic-warning-primary/10 group-[.info]:border-semantic-info-primary/30 group-[.info]:hover:border-semantic-info-primary/50 group-[.info]:hover:bg-semantic-info-primary/10">Undo</button>
      <button type="button" class="shrink-0 rounded p-0.5 text-semantic-text-muted transition-colors hover:text-semantic-text-primary focus:outline-none focus:ring-2 focus:ring-semantic-border-focus" toast-close data-dismiss="li">
        <i data-lucide="x" class="h-3 w-3" aria-hidden="true"></i>
      </button>
    </li>
  </ol>
</div>
```
