# SearchFilter

Source: `src/components/ui/search-filter.tsx` · React: `<SearchFilter options value onValueChange searchPlaceholder searchMode="numeric|text" size>`

A search box that filters a list and picks one result — built for phone numbers (numeric mode highlights the matched digits in **semibold**).

## Specs

- Width: `max-w-[360px]` (`sm` 320px, `lg` 420px), full width below that.
- Input: the Input box (42px) with a 16px `search` icon at `left-4` and `pl-10 pr-9`; a 20px clear button (`x` 16px) at `right-3` when there is text.
- List: 8px below the input, full width, `rounded border-semantic-border-layout shadow-md`, max height 368px; inner list `max-h-60 overflow-auto p-1`.
- Option: `px-4 py-2 pr-9 text-sm`, hover `bg-semantic-bg-ui`; selected row `bg-semantic-bg-ui` + 16px turquoise `check` at `right-3`.
- Empty: `px-4 py-6 text-center text-sm` muted "No options found".

### Closed
```html
<div class="relative flex min-w-0 flex-col w-full max-w-[360px]">
  <div class="relative">
    <i data-lucide="search" class="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-semantic-text-muted" aria-hidden="true"></i>
    <input class="h-[42px] w-full rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:text-base file:font-semibold file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] pl-10 pr-9" inputmode="numeric" role="searchbox" placeholder="Search number" pattern="[0-9]*" aria-expanded="false" type="text" value>
  </div>
</div>
```

### Open (selected row)
```html
<div class="relative flex min-w-0 flex-col w-full max-w-[360px]">
  <div class="relative" data-popover>
    <i data-lucide="search" class="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-semantic-text-muted" aria-hidden="true"></i>
    <input data-popover-trigger class="h-[42px] w-full rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:text-base file:font-semibold file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] pl-10 pr-9" inputmode="numeric" role="searchbox" placeholder="Search number" pattern="[0-9]*" aria-expanded="true" type="text" value="+91 80 4718 2001">
    <button type="button" aria-label="Clear search" class="absolute right-3 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center rounded text-semantic-text-muted transition-colors hover:text-semantic-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-1">
      <i data-lucide="x" class="size-4" aria-hidden="true"></i>
    </button>
    <div class="absolute left-0 top-full z-[9999] mt-2 w-full text-start" data-popover-content>
      <div class="rounded border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-primary shadow-md flex flex-col overflow-hidden p-0 max-h-[368px]" role="presentation">
        <div class="max-h-60 overflow-auto p-1" role="listbox" aria-label="Filter options">
          <button type="button" role="option" aria-selected="false" class="relative flex w-full min-w-0 cursor-pointer select-none items-center gap-2 rounded-sm px-4 py-2 pr-9 text-left text-sm text-semantic-text-primary outline-none hover:bg-semantic-bg-ui focus:bg-semantic-bg-ui">
            <span class="min-w-0 flex-1 truncate text-left">+91 80 4718 2000</span>
          </button>
          <button type="button" role="option" aria-selected="true" class="relative flex w-full min-w-0 cursor-pointer select-none items-center gap-2 rounded-sm px-4 py-2 pr-9 text-left text-sm text-semantic-text-primary outline-none bg-semantic-bg-ui">
            <span class="min-w-0 flex-1 truncate text-left">+91 80 4718 2001</span>
            <i data-lucide="check" class="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-semantic-brand" aria-hidden="true"></i>
          </button>
          <button type="button" role="option" aria-selected="false" class="relative flex w-full min-w-0 cursor-pointer select-none items-center gap-2 rounded-sm px-4 py-2 pr-9 text-left text-sm text-semantic-text-primary outline-none hover:bg-semantic-bg-ui focus:bg-semantic-bg-ui">
            <span class="min-w-0 flex-1 truncate text-left">+91 80 4718 2002</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```
