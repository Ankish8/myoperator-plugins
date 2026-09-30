# PageHeader

Source: `src/components/ui/page-header.tsx` · React: `<PageHeader title description icon showBackButton onBackClick badge infoIcon actions showBorder layout>`

The title bar at the top of every page's content card.

- `bg-semantic-bg-primary px-4`, `py-4` (18px on ≥ lg → **88px** tall with a description), bottom border `border-semantic-border-layout` (omit with `showBorder={false}`).
- Left: a 40px icon box (icon 24px, muted) **or** a 40px back button (`arrow-left` 20px, hover `bg-semantic-bg-ui`), `mr-4`.
- Title: `h1`, `text-lg font-semibold leading-normal text-semantic-text-primary truncate`; optional badge/info icon beside it (`gap-2`).
- Description: `text-sm text-semantic-text-muted mt-1`, max 2 lines.
- Actions: right side, `gap-2`, `ml-6`; on mobile they stack below the title as a full-width grid (first 2 visible, the rest behind a "more" button).
- Inside the app shell's content card, the twins use `px-5` for the header and the content below it (`patterns.md`).

### Icon + title + description + actions
```html
<div class="flex w-full bg-semantic-bg-primary px-4 flex-col sm:flex-row sm:items-center py-4 lg:py-[18px] border-b border-solid border-semantic-border-layout">
  <div class="flex min-h-0 flex-1 min-w-0 items-start sm:items-center">
    <div class="flex-shrink-0 mr-4">
      <div class="flex items-center justify-center w-10 h-10 [&_svg]:w-6 [&_svg]:h-6 text-semantic-text-muted">
        <i data-lucide="webhook" aria-hidden="true"></i>
      </div>
    </div>
    <div class="min-h-0 flex-1 min-w-0">
      <div class="flex h-auto min-h-0 items-center gap-2">
        <h1 class="m-0 text-lg font-semibold leading-normal text-semantic-text-primary truncate">Webhooks</h1>
      </div>
      <p class="m-0 text-sm text-semantic-text-muted font-normal mt-1 line-clamp-2">Send real-time call events to your systems.</p>
    </div>
  </div>
  <div class="hidden sm:flex items-center gap-2 ml-6">
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4">Documentation</button>
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">
      <i data-lucide="plus" aria-hidden="true"></i>
      Add webhook
    </button>
  </div>
  <div class="sm:hidden mt-3 w-full">
    <div class="flex flex-col gap-2 w-full">
      <div class="grid gap-2" style="grid-template-columns: repeat(2, 1fr)">
        <div class="[&>*]:w-full [&>*]:min-h-9">
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4">Documentation</button>
        </div>
        <div class="[&>*]:w-full [&>*]:min-h-9">
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">
            <i data-lucide="plus" aria-hidden="true"></i>
            Add webhook
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Back button + status badge
```html
<div class="flex w-full bg-semantic-bg-primary px-4 flex-col sm:flex-row sm:items-center py-4 lg:py-[18px] border-b border-solid border-semantic-border-layout">
  <div class="flex min-h-0 flex-1 min-w-0 items-start sm:items-center">
    <div class="flex-shrink-0 mr-4">
      <button type="button" class="flex items-center justify-center w-10 h-10 rounded hover:bg-semantic-bg-ui transition-colors text-semantic-text-primary" aria-label="Go back">
        <i data-lucide="arrow-left" class="w-5 h-5" aria-hidden="true"></i>
      </button>
    </div>
    <div class="min-h-0 flex-1 min-w-0">
      <div class="flex h-auto min-h-0 items-center gap-2">
        <h1 class="m-0 text-lg font-semibold leading-normal text-semantic-text-primary truncate">CRM sync</h1>
        <span class="flex-shrink-0">
          <div class="inline-flex items-center justify-center rounded-full font-medium transition-colors whitespace-nowrap bg-semantic-success-surface text-semantic-success-primary px-2 py-0.5 text-xs gap-1">Active</div>
        </span>
      </div>
      <p class="m-0 text-sm text-semantic-text-muted font-normal mt-1 line-clamp-2">Created on 12 Sep 2026</p>
    </div>
  </div>
  <div class="hidden sm:flex items-center gap-2 ml-6">
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4">Cancel</button>
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">Save</button>
  </div>
  <div class="sm:hidden mt-3 w-full">
    <div class="flex flex-col gap-2 w-full">
      <div class="grid gap-2" style="grid-template-columns: repeat(2, 1fr)">
        <div class="[&>*]:w-full [&>*]:min-h-9">
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4">Cancel</button>
        </div>
        <div class="[&>*]:w-full [&>*]:min-h-9">
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>
```
