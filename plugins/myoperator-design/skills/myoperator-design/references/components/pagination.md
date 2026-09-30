# Pagination

Source: `src/components/ui/pagination.tsx` · React: `<PaginationWidget currentPage totalPages onPageChange totalItems pageSize siblingCount align>` (or compose `Pagination > PaginationContent > PaginationItem > PaginationLink|PaginationPrevious|PaginationNext|PaginationEllipsis`)

- Built from Button styles: page numbers are **ghost `icon` buttons (36px)**; the current page is an **outline** icon button. Previous/Next are ghost default-size buttons with 16px chevrons, `px-2.5 gap-1`; their labels hide below `sm`. Disabled = 50% opacity, no pointer events.
- Items `gap-1` (4px). Ellipsis: 36px box with a 16px `ellipsis` icon.
- `PaginationWidget` with totals: "Showing **13–24 of 96**" (`text-sm text-semantic-text-muted`, numbers `font-medium text-semantic-text-primary`) on the left, controls on the right (`sm:flex-row sm:justify-between`, stacked on mobile).
- Page range: first, last, current ± `siblingCount` (default 1), ellipses in between.

### Widget with summary (page 2 of 8)
```html
<div class="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
  <p class="m-0 text-sm text-semantic-text-muted whitespace-nowrap">Showing <span class="font-medium text-semantic-text-primary">13–24 of 96</span></p>
  <nav role="navigation" aria-label="pagination" class="flex mx-0 w-auto justify-end">
    <ul class="flex flex-row items-center gap-1 list-none m-0 p-0">
      <li>
        <a class="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 min-w-20 [&_svg]:size-4 gap-1 px-2.5 sm:pl-2.5" aria-label="Go to previous page" aria-disabled="false" href="#">
          <i data-lucide="chevron-left" aria-hidden="true"></i>
          <span class="hidden sm:block">Previous</span>
        </a>
      </li>
      <li>
        <a data-active="false" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 w-9 rounded-md" href="#">1</a>
      </li>
      <li>
        <a aria-current="page" data-active="true" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 w-9 rounded-md" href="#">2</a>
      </li>
      <li>
        <a data-active="false" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 w-9 rounded-md" href="#">3</a>
      </li>
      <li>
        <span aria-hidden="true" class="flex size-9 items-center justify-center">
          <i data-lucide="ellipsis" class="size-4" aria-hidden="true"></i>
          <span class="sr-only">More pages</span>
        </span>
      </li>
      <li>
        <a data-active="false" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 w-9 rounded-md" href="#">8</a>
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
```

### Composed: first page active, Previous disabled, ellipsis
```html
<nav role="navigation" aria-label="pagination" class="mx-auto flex w-full justify-center">
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
      <a class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 w-9 rounded-md" href="#">2</a>
    </li>
    <li>
      <span aria-hidden="true" class="flex size-9 items-center justify-center">
        <i data-lucide="ellipsis" class="size-4" aria-hidden="true"></i>
        <span class="sr-only">More pages</span>
      </span>
    </li>
    <li>
      <a class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 w-9 rounded-md" href="#">10</a>
    </li>
    <li>
      <a class="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 min-w-20 [&_svg]:size-4 gap-1 px-2.5 sm:pr-2.5" aria-label="Go to next page" href="#">
        <span class="hidden sm:block">Next</span>
        <i data-lucide="chevron-right" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</nav>
```
