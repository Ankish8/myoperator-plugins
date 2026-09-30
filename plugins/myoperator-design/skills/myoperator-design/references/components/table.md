# Table

## Contents
- Specs
  - Default (md) — tags, badges, toggle, actions, highlighted row
  - Small with row checkboxes
  - Loading
  - Empty

Source: `src/components/ui/table.tsx` · React: `<Table size withoutBorder wrapContent><TableHeader><TableRow><TableHead/></TableRow></TableHeader><TableBody isLoading><TableRow highlighted><TableCell/></TableRow></TableBody></Table>` (+ `TableEmpty`, `TableToggle`)

## Specs

- Wrapper: `relative w-full overflow-auto rounded-lg border border-semantic-border-layout` (8px radius; `withoutBorder` drops it when the table already sits in a bordered card).
- Table: `w-full text-sm` (14px). Cells don't wrap (`whitespace-nowrap`) unless `wrapContent`; the wrapper scrolls horizontally.
- Header: `bg-[var(--color-neutral-100)]` (#F5F5F5); head cells **48px** (`h-12`), `px-4`, `text-sm font-semibold text-semantic-text-muted`, left aligned.
- Rows: `border-b border-semantic-border-layout` (last row none); cells `px-4` + vertical padding by size: `sm` 8px, `md` (default) 12px, `lg` 16px. A text row = 20px line + padding + 1px border → 37px (sm) / 45px (md) / 53px (lg); rows holding 32px content (icon buttons) measure ≈ 58px at md.
- Highlighted row: `bg-semantic-info-surface`.
- Cell content conventions: status → Badge; categories/events → Tag; on/off → Switch `sm`; row actions → ghost `icon-sm` button with a 16px (`size-4`) `ellipsis-vertical`, right-aligned (`text-right`) — its open menu: see `dropdown-menu.md` (align end, open upward on the last rows); selection → Checkbox `sm` in the first column (`w-10`).
- Loading: skeleton bars (`h-4 bg-semantic-bg-grey rounded animate-pulse`, widths 60% / 80% / 30%). Empty: one full-width row, `text-center py-8 text-semantic-text-muted`.
- Pagination goes below the table (`pagination.md`), typically `mt-4`.

### Default (md) — tags, badges, toggle, actions, highlighted row
```html
<div class="relative w-full overflow-auto rounded-lg border border-solid border-semantic-border-layout">
  <table class="w-full caption-bottom text-sm [&_td]:py-3 [&_th]:py-3 [&_th]:whitespace-nowrap [&_td]:whitespace-nowrap">
    <thead class="bg-[var(--color-neutral-100)] [&_tr]:border-b [&_tr]:border-solid">
      <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
        <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
          <div class="flex items-center gap-1">Webhook</div>
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
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-8 w-8 rounded-md" aria-label="More">
            <i data-lucide="ellipsis-vertical" class="size-4" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
      <tr class="border-b border-solid border-semantic-border-layout transition-colors bg-semantic-info-surface">
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
          <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-8 w-8 rounded-md" aria-label="More">
            <i data-lucide="ellipsis-vertical" class="size-4" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Small with row checkboxes
```html
<div class="relative w-full overflow-auto rounded-lg border border-solid border-semantic-border-layout">
  <table class="w-full caption-bottom text-sm [&_td]:py-2 [&_th]:py-2 [&_th]:whitespace-nowrap [&_td]:whitespace-nowrap">
    <thead class="bg-[var(--color-neutral-100)] [&_tr]:border-b [&_tr]:border-solid">
      <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
        <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0 w-10">
          <div class="flex items-center gap-1">
            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-4 w-4 cursor-pointer" aria-label="Select all"></button>
          </div>
        </th>
        <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
          <div class="flex items-center gap-1">Caller</div>
        </th>
        <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
          <div class="flex items-center gap-1">Duration</div>
        </th>
      </tr>
    </thead>
    <tbody class="[&_tr:last-child]:border-0">
      <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-4 w-4 cursor-pointer" aria-label="Select">
            <span data-state="checked" class="flex items-center justify-center">
              <i data-lucide="check" class="h-3 w-3 stroke-[3]" aria-hidden="true"></i>
            </span>
          </button>
        </td>
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">+91 98765 43210</td>
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">02:14</td>
      </tr>
      <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex items-center justify-center shrink-0 rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-4 w-4 cursor-pointer" aria-label="Select"></button>
        </td>
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">+91 91234 56780</td>
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">00:48</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Loading
```html
<div class="relative w-full overflow-auto rounded-lg border border-solid border-semantic-border-layout">
  <table class="w-full caption-bottom text-sm [&_td]:py-3 [&_th]:py-3 [&_th]:whitespace-nowrap [&_td]:whitespace-nowrap">
    <thead class="bg-[var(--color-neutral-100)] [&_tr]:border-b [&_tr]:border-solid">
      <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
        <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
          <div class="flex items-center gap-1">Name</div>
        </th>
        <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
          <div class="flex items-center gap-1">Number</div>
        </th>
        <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
          <div class="flex items-center gap-1">Status</div>
        </th>
      </tr>
    </thead>
    <tbody class="[&_tr:last-child]:border-0">
      <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <div class="h-4 bg-semantic-bg-grey rounded animate-pulse" style="width: 60%"></div>
        </td>
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <div class="h-4 bg-semantic-bg-grey rounded animate-pulse" style="width: 80%"></div>
        </td>
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <div class="h-4 bg-semantic-bg-grey rounded animate-pulse" style="width: 30%"></div>
        </td>
      </tr>
      <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <div class="h-4 bg-semantic-bg-grey rounded animate-pulse" style="width: 60%"></div>
        </td>
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <div class="h-4 bg-semantic-bg-grey rounded animate-pulse" style="width: 80%"></div>
        </td>
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <div class="h-4 bg-semantic-bg-grey rounded animate-pulse" style="width: 30%"></div>
        </td>
      </tr>
      <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <div class="h-4 bg-semantic-bg-grey rounded animate-pulse" style="width: 60%"></div>
        </td>
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <div class="h-4 bg-semantic-bg-grey rounded animate-pulse" style="width: 80%"></div>
        </td>
        <td class="px-4 align-middle text-semantic-text-primary [&:has([role=checkbox])]:pr-0">
          <div class="h-4 bg-semantic-bg-grey rounded animate-pulse" style="width: 30%"></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Empty
```html
<div class="relative w-full overflow-auto rounded-lg border border-solid border-semantic-border-layout">
  <table class="w-full caption-bottom text-sm [&_td]:py-3 [&_th]:py-3 [&_th]:whitespace-nowrap [&_td]:whitespace-nowrap">
    <thead class="bg-[var(--color-neutral-100)] [&_tr]:border-b [&_tr]:border-solid">
      <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
        <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
          <div class="flex items-center gap-1">Name</div>
        </th>
        <th class="h-12 px-4 text-left align-middle font-semibold text-semantic-text-muted text-sm [&:has([role=checkbox])]:pr-0">
          <div class="flex items-center gap-1">Number</div>
        </th>
      </tr>
    </thead>
    <tbody class="[&_tr:last-child]:border-0">
      <tr class="border-b border-solid border-semantic-border-layout transition-colors hover:bg-[var(--color-neutral-50)]/50 data-[state=selected]:bg-semantic-bg-ui">
        <td class="px-4 align-middle [&:has([role=checkbox])]:pr-0 text-center py-8 text-semantic-text-muted" colspan="2">No contacts yet</td>
      </tr>
    </tbody>
  </table>
</div>
```
