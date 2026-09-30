# EmptyState

Source: `src/components/ui/empty-state.tsx` · React: `<EmptyState icon title description actions>`

Shown when a list, table or page has nothing yet (or a search has no results).

- Centered column, `gap-5`, `py-16 px-4`.
- Icon: in a **90px** `bg-semantic-primary-surface` circle-ish tile (`rounded-[40px]`), icon ≈ 40px (`size-10`) in `text-semantic-text-secondary`.
- Title: `text-base font-semibold text-semantic-text-primary`. Description: `text-sm text-semantic-text-muted`, 6px below.
- Actions: `gap-4` — usually a secondary (outline) + a primary (with `plus` icon) button.
- Copy: title says what's missing ("No webhooks yet"), description says what to do next.

### With icon + actions
```html
<div class="flex flex-col items-center justify-center gap-5 py-16 px-4">
  <div class="bg-semantic-primary-surface rounded-[40px] size-[90px] flex items-center justify-center text-semantic-text-secondary">
    <i data-lucide="inbox" class="size-10" aria-hidden="true"></i>
  </div>
  <div class="flex flex-col items-center gap-1.5 text-center">
    <p class="m-0 text-base font-semibold text-semantic-text-primary">No webhooks yet</p>
    <p class="m-0 text-sm text-semantic-text-muted">Create a webhook to send call events to your CRM.</p>
  </div>
  <div class="flex items-center gap-4">
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4">Read docs</button>
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">
      <i data-lucide="plus" aria-hidden="true"></i>
      Add webhook
    </button>
  </div>
</div>
```

### Without icon (e.g. empty search)
```html
<div class="flex flex-col items-center justify-center gap-5 py-16 px-4">
  <div class="flex flex-col items-center gap-1.5 text-center">
    <p class="m-0 text-base font-semibold text-semantic-text-primary">No results</p>
    <p class="m-0 text-sm text-semantic-text-muted">Try a different search term.</p>
  </div>
</div>
```
