# Page patterns

## Contents
- 1. App shell
- 2. List page (goes inside the content card)
- 3. Form page (goes inside the content card)
- 4. Other compositions
- Responsive

How MyOperator screens are assembled. The app chrome is measured from the product's Figma handoffs; the pages are compositions of the real components. All three snippets below were verified pixel-identical against the real components.

## 1. App shell

Use for any full-page screen of the MyOperator web panel.

- **Canvas**: `bg-semantic-bg-grey` (#E9EAEB), full height (`h-screen`, content scrolls inside `main`).
- **Sidebar**: 188px, `bg-semantic-bg-secondary` (#0C0F12, near-black), hidden below `md` (becomes a drawer). Logo row: 33px turquoise tile (`bg-semantic-brand rounded-[10px]`) with a white `phone` icon + "MyOperator" (`text-sm font-semibold`) over the number (`text-xs`), both white. Nav items: 33px tall, `rounded px-2.5 gap-2.5 text-sm`, 14px icons, `text-semantic-primary-selected` (#777E8D); active item `bg-semantic-primary-highlighted font-semibold text-semantic-text-inverted`; expandable items end with a 14px `chevron-right`. A 20px round collapse toggle straddles the right edge at `top-4`.
- **Top bar**: 48px (`h-12`), `bg-[var(--color-primary-800)]` (#1D222F), `px-4`, right-aligned white 24px icon buttons (`bell`, `power`) in 32px hit areas.
- **Main**: `p-4`, holding **one white content card**: `rounded border border-semantic-border-layout bg-semantic-bg-primary`, with a PageHeader (`px-5`) and a body `flex flex-col gap-4 px-5 pb-5 pt-6`.
- Change the active nav item to match the screen; keep the item list (Home, Dashboard, Chat, Call logs, Whatsapp, Call, Bots, Contact, Reports, APIs & Webhook, Permission, System logs, Manage, Billing) unless the user says otherwise.

```html
<div class="flex h-screen bg-semantic-bg-grey">
  <div class="relative hidden w-[188px] shrink-0 flex-col bg-semantic-bg-secondary md:flex">
    <div class="flex shrink-0 items-center gap-[5px] px-4 pb-4 pt-3">
      <span class="flex size-[33px] shrink-0 items-center justify-center rounded-[10px] bg-semantic-brand">
        <i data-lucide="phone" class="size-4 text-semantic-text-inverted" aria-hidden="true"></i>
      </span>
      <span class="flex min-w-0 flex-col">
        <span class="truncate text-sm font-semibold leading-[18px] text-semantic-text-inverted">MyOperator</span>
        <span class="truncate text-xs leading-[15px] text-semantic-text-inverted">+91 80 4718 2000</span>
      </span>
    </div>
    <nav class="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-1">
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="house" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Home</span>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="layout-grid" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Dashboard</span>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="message-circle-more" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Chat</span>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="phone-call" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Call logs</span>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="message-circle" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Whatsapp</span>
        <i data-lucide="chevron-right" class="size-3.5 shrink-0" aria-hidden="true"></i>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="phone" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Call</span>
        <i data-lucide="chevron-right" class="size-3.5 shrink-0" aria-hidden="true"></i>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="bot" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Bots</span>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="contact" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Contact</span>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="file-text" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Reports</span>
        <i data-lucide="chevron-right" class="size-3.5 shrink-0" aria-hidden="true"></i>
      </button>
      <button type="button" aria-current="page" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded bg-semantic-primary-highlighted px-2.5 text-sm font-semibold text-semantic-text-inverted transition-colors">
        <i data-lucide="webhook" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">APIs &amp; Webhook</span>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="shield-check" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Permission</span>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="clipboard-list" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">System logs</span>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="folder-closed" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Manage</span>
        <i data-lucide="chevron-right" class="size-3.5 shrink-0" aria-hidden="true"></i>
      </button>
      <button type="button" class="flex h-[33px] shrink-0 items-center justify-start gap-2.5 rounded px-2.5 text-sm text-semantic-primary-selected transition-colors hover:bg-semantic-primary-highlighted">
        <i data-lucide="credit-card" class="size-3.5 shrink-0" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 truncate text-left">Billing</span>
        <i data-lucide="chevron-right" class="size-3.5 shrink-0" aria-hidden="true"></i>
      </button>
    </nav>
    <button type="button" aria-label="Collapse sidebar" class="absolute right-0 top-4 z-10 flex size-5 translate-x-1/2 items-center justify-center rounded-full bg-semantic-bg-secondary text-semantic-primary-selected shadow-md ring-1 ring-semantic-primary-highlighted hover:text-semantic-text-inverted">
      <i data-lucide="chevron-left" class="size-3" aria-hidden="true"></i>
    </button>
  </div>
  <div class="flex min-w-0 flex-1 flex-col">
    <header class="flex h-12 shrink-0 items-center gap-2 bg-[var(--color-primary-800)] px-4">
      <div class="flex-1"></div>
      <button type="button" aria-label="Notifications" class="flex size-8 items-center justify-center rounded text-semantic-text-inverted hover:bg-semantic-primary-highlighted">
        <i data-lucide="bell" class="size-6" aria-hidden="true"></i>
      </button>
      <button type="button" aria-label="Switch account" class="flex size-8 items-center justify-center rounded text-semantic-text-inverted hover:bg-semantic-primary-highlighted">
        <i data-lucide="power" class="size-6" aria-hidden="true"></i>
      </button>
    </header>
    <main class="min-w-0 flex-1 overflow-auto p-4">
      <div class="flex min-h-full flex-col rounded border border-solid border-semantic-border-layout bg-semantic-bg-primary">
        <div class="flex w-full bg-semantic-bg-primary flex-col sm:flex-row sm:items-center py-4 lg:py-[18px] border-b border-solid border-semantic-border-layout px-5">
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
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">
              <i data-lucide="plus" aria-hidden="true"></i>
              Add webhook
            </button>
          </div>
          <div class="sm:hidden mt-3 w-full">
            <div class="flex flex-col gap-2 w-full">
              <div class="grid gap-2" style="grid-template-columns: repeat(1, 1fr)">
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
        <div class="flex min-w-0 flex-col gap-4 px-5 pb-5 pt-6">
          <p class="m-0 text-sm text-semantic-text-muted">Page content goes here.</p>
        </div>
      </div>
    </main>
  </div>
</div>
```

## 2. List page (goes inside the content card)

The most common screen: PageHeader (title + count badge, search + primary action) → filter bar (Tabs left; filters right: MultiSelect, DateRangePicker, outline "More filters") → Table → PaginationWidget.

- Filter bar: `flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between`; filter group `flex flex-wrap items-center gap-2.5 lg:flex-nowrap`, give filters fixed widths.
- Header search: TextField with `search` icon, `w-full lg:w-[320px]`.
- Empty result → EmptyState inside the card instead of the table; loading → Table skeleton rows.

```html
<div class="flex flex-col rounded border border-solid border-semantic-border-layout bg-semantic-bg-primary">
  <div class="flex w-full bg-semantic-bg-primary flex-col sm:flex-row sm:items-center py-4 lg:py-[18px] border-b border-solid border-semantic-border-layout px-5">
    <div class="flex min-h-0 flex-1 min-w-0 items-center">
      <div class="min-h-0 flex-1 min-w-0">
        <div class="flex h-auto min-h-0 items-center gap-2">
          <h1 class="m-0 text-lg font-semibold leading-normal text-semantic-text-primary truncate">Webhooks</h1>
          <span class="flex-shrink-0">
            <div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-bg-ui text-semantic-text-primary px-3 py-1 gap-1">3 webhooks</div>
          </span>
        </div>
      </div>
    </div>
    <div class="hidden sm:flex items-center gap-2 ml-6">
      <div class="flex flex-col gap-1 w-full lg:w-[320px]">
        <div class="relative flex items-center rounded bg-semantic-bg-primary transition-all border border-solid border-semantic-border-input focus-within:border-semantic-border-input-focus focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4">
          <span class="mr-2 text-semantic-text-muted [&_svg]:size-4 flex-shrink-0">
            <i data-lucide="search" aria-hidden="true"></i>
          </span>
          <input class="flex-1 bg-transparent border-0 outline-none focus:ring-0 px-0 h-full text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed text-base" aria-invalid="false" placeholder="Search webhooks">
        </div>
      </div>
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">
        <i data-lucide="plus" aria-hidden="true"></i>
        Add webhook
      </button>
    </div>
    <div class="sm:hidden mt-3 w-full">
      <div class="flex flex-col gap-2 w-full">
        <div class="grid gap-2" style="grid-template-columns: repeat(2, 1fr)">
          <div class="[&>*]:w-full [&>*]:min-h-9">
            <div class="flex flex-col gap-1 w-full lg:w-[320px]">
              <div class="relative flex items-center rounded bg-semantic-bg-primary transition-all border border-solid border-semantic-border-input focus-within:border-semantic-border-input-focus focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4">
                <span class="mr-2 text-semantic-text-muted [&_svg]:size-4 flex-shrink-0">
                  <i data-lucide="search" aria-hidden="true"></i>
                </span>
                <input class="flex-1 bg-transparent border-0 outline-none focus:ring-0 px-0 h-full text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed text-base" aria-invalid="false" placeholder="Search webhooks">
              </div>
            </div>
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
  <div class="flex min-w-0 flex-col gap-4 px-5 pb-5 pt-6">
    <div class="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div class="min-w-0 flex-1">
        <div role="tablist" aria-orientation="horizontal" class="inline-flex items-center border-b border-solid border-semantic-border-layout w-full">
          <button type="button" role="tab" aria-selected="true" data-state="active" class="inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 px-3 text-sm font-medium border-b-2 border-solid -mb-px cursor-pointer transition-colors text-semantic-text-muted border-transparent hover:text-semantic-text-secondary data-[state=active]:text-semantic-text-primary data-[state=active]:border-semantic-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">All</button>
          <button type="button" role="tab" aria-selected="false" data-state="inactive" class="inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 px-3 text-sm font-medium border-b-2 border-solid -mb-px cursor-pointer transition-colors text-semantic-text-muted border-transparent hover:text-semantic-text-secondary data-[state=active]:text-semantic-text-primary data-[state=active]:border-semantic-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">Active</button>
          <button type="button" role="tab" aria-selected="false" data-state="inactive" class="inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 px-3 text-sm font-medium border-b-2 border-solid -mb-px cursor-pointer transition-colors text-semantic-text-muted border-transparent hover:text-semantic-text-secondary data-[state=active]:text-semantic-text-primary data-[state=active]:border-semantic-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">Failed</button>
        </div>
      </div>
      <div class="flex min-w-0 shrink-0 flex-wrap items-center gap-2.5 lg:flex-nowrap">
        <div class="w-[200px]">
          <div class="flex min-w-0 flex-col gap-1">
            <div class="relative w-full min-w-0 flex flex-col gap-1">
              <button type="button" role="combobox" aria-expanded="false" aria-invalid="false" class="flex min-h-[42px] w-full items-center justify-between rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus/50 focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] text-left gap-2">
                <div class="min-w-0 flex-1 flex flex-wrap gap-1">
                  <span class="text-base text-semantic-text-placeholder">All events</span>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <i data-lucide="chevron-down" class="size-4 text-semantic-text-muted transition-transform shrink-0" aria-hidden="true"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="w-[240px]">
          <div class="relative inline-block w-full max-w-full">
            <button type="button" aria-expanded="false" class="flex h-10 w-full items-center gap-2 rounded border border-solid border-semantic-border-input bg-semantic-bg-primary px-4 py-2.5 text-left text-sm outline-none transition-colors hover:border-semantic-border-input-focus/50 disabled:cursor-not-allowed disabled:opacity-50 text-semantic-text-placeholder">
              <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-[18px] shrink-0 text-semantic-text-secondary" aria-hidden="true"><path d="M6 1.5V4.5M12 1.5V4.5M2.25 7.5H15.75M3.75 3H14.25C15.0784 3 15.75 3.67157 15.75 4.5V15C15.75 15.8284 15.0784 16.5 14.25 16.5H3.75C2.92157 16.5 2.25 15.8284 2.25 15V4.5C2.25 3.67157 2.92157 3 3.75 3Z" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <span class="min-w-0 flex-1 truncate font-normal">Date Range</span>
            </button>
          </div>
        </div>
        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4">
          <i data-lucide="settings-2" aria-hidden="true"></i>
          More filters
        </button>
      </div>
    </div>
    <div class="relative w-full overflow-auto rounded-lg border border-solid border-semantic-border-layout">
      <table class="w-full caption-bottom text-sm [&_td]:py-3 [&_th]:py-3 [&_th]:whitespace-nowrap [&_td]:whitespace-nowrap">
        <thead class="bg-[var(--color-neutral-100)] [&_tr]:border-b [&_tr]:border-solid">
          <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
            <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
              <div class="flex items-center gap-1">Name</div>
            </th>
            <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
              <div class="flex items-center gap-1">Event</div>
            </th>
            <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
              <div class="flex items-center gap-1">Status</div>
            </th>
            <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
              <div class="flex items-center gap-1">Enabled</div>
            </th>
            <th class="h-12 px-4 align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0 text-right">
              <div class="flex items-center gap-1">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody class="[&_tr:last-child]:border-0">
          <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">CRM sync</td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
              <span class="inline-flex items-center rounded text-sm bg-semantic-bg-ui text-semantic-text-primary px-2 py-1">
                <span class="font-normal inline-flex items-center gap-1">After Call Event</span>
              </span>
            </td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
              <div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-success-surface text-semantic-success-primary px-3 py-1 gap-1">Active</div>
            </td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
              <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-5 w-9" aria-label="Enabled">
                <span data-state="checked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-4 w-4 data-[state=checked]:translate-x-4"></span>
              </button>
            </td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0 text-right">
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-8 w-8 rounded-md" aria-label="More actions">
                <i data-lucide="ellipsis-vertical" class="size-4" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">Ticket bot</td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
              <span class="inline-flex items-center rounded text-sm bg-semantic-bg-ui text-semantic-text-primary px-2 py-1">
                <span class="font-normal inline-flex items-center gap-1">In Call Event</span>
              </span>
            </td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
              <div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-error-surface text-semantic-error-primary px-3 py-1 gap-1">Failed</div>
            </td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
              <button type="button" role="switch" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-5 w-9" aria-label="Enabled">
                <span data-state="unchecked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-4 w-4 data-[state=checked]:translate-x-4"></span>
              </button>
            </td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0 text-right">
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-8 w-8 rounded-md" aria-label="More actions">
                <i data-lucide="ellipsis-vertical" class="size-4" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">Lead scoring</td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
              <span class="inline-flex items-center rounded text-sm bg-semantic-bg-ui text-semantic-text-primary px-2 py-1">
                <span class="font-normal inline-flex items-center gap-1">Call Disposition</span>
              </span>
            </td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
              <div class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors whitespace-nowrap bg-semantic-success-surface text-semantic-success-primary px-3 py-1 gap-1">Active</div>
            </td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
              <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-5 w-9" aria-label="Enabled">
                <span data-state="checked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-4 w-4 data-[state=checked]:translate-x-4"></span>
              </button>
            </td>
            <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0 text-right">
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-8 w-8 rounded-md" aria-label="More actions">
                <i data-lucide="ellipsis-vertical" class="size-4" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p class="m-0 text-sm text-semantic-text-muted whitespace-nowrap">Showing <span class="font-medium text-semantic-text-primary">1–10 of 36</span></p>
      <nav role="navigation" aria-label="pagination" class="flex mx-0 w-auto justify-end">
        <ul class="flex flex-row items-center gap-1 list-none m-0 p-0">
          <li>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 min-w-20 [&_svg]:size-4 gap-1 px-2.5 sm:pl-2.5 pointer-events-none opacity-50" aria-label="Go to previous page" aria-disabled="true" href="#">
              <i data-lucide="chevron-left" aria-hidden="true"></i>
              <span class="hidden sm:block">Previous</span>
            </a>
          </li>
          <li>
            <a aria-current="page" data-active="true" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 w-9 rounded-md" href="#">1</a>
          </li>
          <li>
            <a data-active="false" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 w-9 rounded-md" href="#">2</a>
          </li>
          <li>
            <span aria-hidden="true" class="flex size-9 items-center justify-center">
              <i data-lucide="ellipsis" class="size-4" aria-hidden="true"></i>
              <span class="sr-only">More pages</span>
            </span>
          </li>
          <li>
            <a data-active="false" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 w-9 rounded-md" href="#">4</a>
          </li>
          <li>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 min-w-20 [&_svg]:size-4 gap-1 px-2.5 sm:pr-2.5" aria-label="Go to next page" aria-disabled="false" href="#">
              <span class="hidden sm:block">Next</span>
              <i data-lucide="chevron-right" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
```

## 3. Form page (goes inside the content card)

Create/edit screens that are too big for a FormModal.

- PageHeader with back button + short description.
- Sections: `flex flex-col gap-4`; heading `text-base font-semibold` + description `text-sm text-semantic-text-muted` (`gap-1`); sections separated by `border-t border-semantic-border-layout pt-6`, `gap-8` between them.
- Fields: full-width stack, or `grid grid-cols-1 gap-4 sm:grid-cols-2` for short pairs.
- Footer: `flex items-center justify-end gap-2 border-t pt-5` — Cancel (outline) then the primary action.
- On/off settings use Switch (with label), also inside a form; Checkbox is for selecting items, consent and multi-choice lists.

```html
<div class="flex flex-col rounded border border-solid border-semantic-border-layout bg-semantic-bg-primary">
  <div class="flex w-full bg-semantic-bg-primary flex-col sm:flex-row sm:items-center py-4 lg:py-[18px] border-b border-solid border-semantic-border-layout px-5">
    <div class="flex min-h-0 flex-1 min-w-0 items-start sm:items-center">
      <div class="flex-shrink-0 mr-4">
        <button type="button" class="flex items-center justify-center w-10 h-10 rounded hover:bg-semantic-bg-ui transition-colors text-semantic-text-primary" aria-label="Go back">
          <i data-lucide="arrow-left" class="w-5 h-5" aria-hidden="true"></i>
        </button>
      </div>
      <div class="min-h-0 flex-1 min-w-0">
        <div class="flex h-auto min-h-0 items-center gap-2">
          <h1 class="m-0 text-lg font-semibold leading-normal text-semantic-text-primary truncate">Add webhook</h1>
        </div>
        <p class="m-0 text-sm text-semantic-text-muted font-normal mt-1 line-clamp-2">Events are sent as JSON over HTTPS POST.</p>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-8 px-5 pb-5 pt-6">
    <section class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <h2 class="m-0 text-base font-semibold text-semantic-text-primary">Endpoint</h2>
        <p class="m-0 text-sm text-semantic-text-muted">Where we send the events.</p>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-semibold text-semantic-text-secondary">Webhook name<span class="text-semantic-error-primary ml-0.5">*</span></label>
          <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4 py-2 text-base file:text-base" aria-invalid="false" placeholder="e.g. CRM sync">
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-semibold text-semantic-text-secondary">Authentication</label>
          <button type="button" role="combobox" aria-expanded="false" data-state="closed" data-placeholder class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-border-input,#E9EAEB)] focus:outline-none focus:border-[var(--semantic-border-input-focus,#2BBCCA)] focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]" aria-invalid="false">
            <span>Select authentication</span>
            <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-sm font-semibold text-semantic-text-secondary">Endpoint URL<span class="text-semantic-error-primary ml-0.5">*</span></label>
        <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4 py-2 text-base file:text-base" aria-invalid="false" placeholder="https://">
        <div class="flex justify-between items-start gap-2">
          <span class="text-sm text-semantic-text-muted">Must accept POST requests.</span>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-sm font-semibold text-semantic-text-secondary">Description</label>
        <textarea rows="3" class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] px-4 py-2.5 text-base resize-none" aria-invalid="false" placeholder="What does this webhook do?"></textarea>
      </div>
    </section>
    <section class="flex flex-col gap-4 border-t border-solid border-semantic-border-layout pt-6">
      <div class="flex flex-col gap-1">
        <h2 class="m-0 text-base font-semibold text-semantic-text-primary">Delivery</h2>
        <p class="m-0 text-sm text-semantic-text-muted">Retries and notifications.</p>
      </div>
      <label class="inline-flex items-center gap-2 cursor-pointer">
        <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-6 w-11">
          <span data-state="checked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-5 w-5 data-[state=checked]:translate-x-5"></span>
        </button>
        <span class="text-sm font-semibold text-semantic-text-secondary">Retry failed deliveries</span>
      </label>
      <label class="inline-flex items-center gap-2 cursor-pointer">
        <button type="button" role="switch" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-6 w-11">
          <span data-state="unchecked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-5 w-5 data-[state=checked]:translate-x-5"></span>
        </button>
        <span class="text-sm font-semibold text-semantic-text-secondary">Email me when deliveries fail</span>
      </label>
    </section>
    <div class="flex items-center justify-end gap-2 border-t border-solid border-semantic-border-layout pt-5">
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4">Cancel</button>
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">Save webhook</button>
    </div>
  </div>
</div>
```

## 4. Other compositions

- **Detail + side panel**: `flex` row — main content (`flex-1`) + Panel (`panel.md`) as the last child.
- **Confirm before destructive actions**: ConfirmationModal (`destructive`) or DeleteConfirmationModal (`modals.md`); after success, a `success` Toast.
- **Inline problems** (failed deliveries, low balance): Alert at the top of the card body, above the filters.
- **Settings list**: rows of `flex items-center justify-between py-4 border-b` with a title (`text-sm font-semibold`) + description (`text-sm` muted) on the left and a Switch/Button on the right.
- **Read-only credentials** (API keys, URLs): ReadableField, two columns on ≥ sm.
- **Chat / inbox**: ContactListItem list on the left, conversation with DateDivider / UnreadSeparator / SystemMessage in the middle (`chat.md`).

## Responsive

The components are responsive by themselves (PageHeader stacks actions, dialogs go full-width, Previous/Next labels hide). For layout: sidebar hidden below `md`; filter bars wrap below `lg`; two-column forms collapse below `sm`; tables scroll horizontally (never squeeze columns — give the table a `min-w-[…]` inside an `overflow-x-auto` wrapper).
