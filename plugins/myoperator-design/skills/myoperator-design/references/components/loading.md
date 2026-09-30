# Loading: Spinner, Skeleton, BouncingLoader

Sources: `spinner.tsx`, `skeleton.tsx`, `bouncing-loader.tsx`

| Situation | Use |
|---|---|
| Button busy | Button `loading` (built-in spinner — `button.md`) |
| A region/page is loading and its shape is known | **Skeleton** placeholders in that shape |
| Unknown shape, small area | **Spinner** |
| Someone is typing / bot is thinking (chat) | **BouncingLoader** |
| Table data loading | Table's skeleton rows (`table.md`) |

## Spinner

React: `<Spinner size variant aria-label>` · sizes `sm` 16px, `default` 24px, `lg` 32px, `xl` 48px · stroke 3 / 3 / 2.5 / 2.
Colors: `default` `text-semantic-primary`, `secondary` `text-semantic-text-secondary`, `muted` `text-semantic-text-muted`, `inverted` white (on dark), `current` inherits.
A custom SVG: 25%-opacity track circle + a quarter arc, spinning.

### Sizes
```html
<div class="flex items-center gap-4">
  <div role="status" aria-label="Loading" class="inline-flex shrink-0">
    <svg class="animate-spin size-4 text-semantic-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"></circle><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="62.83185307179586" stroke-dashoffset="47.12388980384689"></circle></svg>
    <span class="sr-only">Loading</span>
  </div>
  <div role="status" aria-label="Loading" class="inline-flex shrink-0">
    <svg class="animate-spin size-6 text-semantic-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"></circle><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="62.83185307179586" stroke-dashoffset="47.12388980384689"></circle></svg>
    <span class="sr-only">Loading</span>
  </div>
  <div role="status" aria-label="Loading" class="inline-flex shrink-0">
    <svg class="animate-spin size-8 text-semantic-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2.5" opacity="0.25"></circle><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="62.83185307179586" stroke-dashoffset="47.12388980384689"></circle></svg>
    <span class="sr-only">Loading</span>
  </div>
  <div role="status" aria-label="Loading" class="inline-flex shrink-0">
    <svg class="animate-spin size-12 text-semantic-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" opacity="0.25"></circle><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="62.83185307179586" stroke-dashoffset="47.12388980384689"></circle></svg>
    <span class="sr-only">Loading</span>
  </div>
</div>
```

### Variants (on a dark surface to show `inverted`)
```html
<div class="flex items-center gap-4 rounded bg-semantic-bg-secondary p-3">
  <div role="status" aria-label="Loading" class="inline-flex shrink-0">
    <svg class="animate-spin size-6 text-semantic-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"></circle><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="62.83185307179586" stroke-dashoffset="47.12388980384689"></circle></svg>
    <span class="sr-only">Loading</span>
  </div>
  <div role="status" aria-label="Loading" class="inline-flex shrink-0">
    <svg class="animate-spin size-6 text-semantic-text-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"></circle><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="62.83185307179586" stroke-dashoffset="47.12388980384689"></circle></svg>
    <span class="sr-only">Loading</span>
  </div>
  <div role="status" aria-label="Loading" class="inline-flex shrink-0">
    <svg class="animate-spin size-6 text-semantic-text-muted" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"></circle><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="62.83185307179586" stroke-dashoffset="47.12388980384689"></circle></svg>
    <span class="sr-only">Loading</span>
  </div>
  <div role="status" aria-label="Loading" class="inline-flex shrink-0">
    <svg class="animate-spin size-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"></circle><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="62.83185307179586" stroke-dashoffset="47.12388980384689"></circle></svg>
    <span class="sr-only">Loading</span>
  </div>
</div>
```

## Skeleton

React: `<Skeleton shape="line|circle|rectangle" variant="default|subtle" width height>`
`animate-pulse`; `default` `bg-semantic-bg-grey`, `subtle` `bg-semantic-bg-ui`. `line` = `h-4 w-full rounded`; set width/height inline for circles and rectangles.

```html
<div class="flex flex-col gap-3">
  <div class="flex items-center gap-3">
    <div aria-hidden="true" class="animate-pulse bg-semantic-bg-grey rounded-full" style="width: 40px; height: 40px"></div>
    <div class="flex flex-1 flex-col gap-2">
      <div aria-hidden="true" class="animate-pulse bg-semantic-bg-grey h-4 w-full rounded" style="width: 60%"></div>
      <div aria-hidden="true" class="animate-pulse bg-semantic-bg-grey h-4 w-full rounded" style="width: 40%"></div>
    </div>
  </div>
  <div aria-hidden="true" class="animate-pulse bg-semantic-bg-grey rounded" style="height: 96px"></div>
  <div aria-hidden="true" class="animate-pulse bg-semantic-bg-ui h-4 w-full rounded"></div>
</div>
```

## BouncingLoader

React: `<BouncingLoader size color spacing>` · three 8px dots in `--semantic-text-placeholder`, 6px apart, bouncing 6px in a 1.4s wave. The keyframes `<style>` is part of the markup — keep it.

```html
<span role="status" aria-label="Loading" class="bouncing-loader inline-flex shrink-0 min-w-0 items-center justify-center leading-[0] align-middle gap-[var(--bouncing-loader-spacing,0.375rem)]">
  <style>@keyframes bouncing-typing-wave { 0%, 60%, 100% { transform: translate3d(0, 0, 0); } 30% { transform: translate3d(0, -6px, 0); } }</style>
  <span class="bouncing-loader__dot box-border block h-[var(--bouncing-loader-size,8px)] w-[var(--bouncing-loader-size,8px)] shrink-0 rounded-full bg-[var(--bouncing-loader-color,var(--semantic-text-placeholder,currentColor))]" aria-hidden="true" style="animation: 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0s infinite normal none running bouncing-typing-wave"></span>
  <span class="bouncing-loader__dot box-border block h-[var(--bouncing-loader-size,8px)] w-[var(--bouncing-loader-size,8px)] shrink-0 rounded-full bg-[var(--bouncing-loader-color,var(--semantic-text-placeholder,currentColor))]" aria-hidden="true" style="animation: 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.2s infinite normal none running bouncing-typing-wave"></span>
  <span class="bouncing-loader__dot box-border block h-[var(--bouncing-loader-size,8px)] w-[var(--bouncing-loader-size,8px)] shrink-0 rounded-full bg-[var(--bouncing-loader-color,var(--semantic-text-placeholder,currentColor))]" aria-hidden="true" style="animation: 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.4s infinite normal none running bouncing-typing-wave"></span>
</span>
```
