# DateRangePicker

## Contents
- Specs
  - Placeholder
  - Filled + clearable
  - Open with presets

Source: `src/components/ui/date-range-picker.tsx` · React: `<DateRangePicker value onValueChange placeholder presets clearable disablePastDates minDate maxDate state>`

Start–end range for filters and reports ("7 Sep 2026 - 12 Sep 2026"). Placeholder "Date Range".

## Specs

- Trigger: **40px** (`h-10`), `px-4 py-2.5`, **14px** text, `rounded`, `border-semantic-border-input` (hover turquoise 50%, turquoise glow while open). Leading 18px calendar icon (`text-semantic-text-secondary`). Placeholder in `text-semantic-text-placeholder`. `clearable` adds a 16px `x` at `right-3` once a range is set.
- Popover: 4px below, width fits content (≈418px with presets), `rounded-lg`, `border-semantic-border-layout`, `shadow-lg`, max height 420px.
  - Presets column on the left: Today, Yesterday, Last 7 days, Last 30 days, This month, Last month.
  - Calendar: month/year header with prev/next, 7-column grid of 32px day buttons (`text-xs`, 36px on mobile). Range start/end: `bg-semantic-primary` circles with white semibold text; the cells in between (and behind the ends) get `bg-semantic-info-surface`. Today: a 4px `bg-semantic-primary` dot under the number.

### Placeholder
```html
<div class="relative inline-block w-full max-w-full">
  <button type="button" aria-expanded="false" class="flex h-10 w-full items-center gap-2 rounded border border-solid border-semantic-border-input bg-semantic-bg-primary px-4 py-2.5 text-left text-sm outline-none transition-colors hover:border-semantic-border-input-focus/50 disabled:cursor-not-allowed disabled:opacity-50 text-semantic-text-placeholder">
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-[18px] shrink-0 text-semantic-text-secondary" aria-hidden="true"><path d="M6 1.5V4.5M12 1.5V4.5M2.25 7.5H15.75M3.75 3H14.25C15.0784 3 15.75 3.67157 15.75 4.5V15C15.75 15.8284 15.0784 16.5 14.25 16.5H3.75C2.92157 16.5 2.25 15.8284 2.25 15V4.5C2.25 3.67157 2.92157 3 3.75 3Z" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    <span class="min-w-0 flex-1 truncate font-normal">Date Range</span>
  </button>
</div>
```

### Filled + clearable
```html
<div class="relative inline-block w-full max-w-full">
  <button type="button" aria-expanded="false" class="flex h-10 w-full items-center gap-2 rounded border border-solid border-semantic-border-input bg-semantic-bg-primary px-4 py-2.5 text-left text-sm text-semantic-text-primary outline-none transition-colors hover:border-semantic-border-input-focus/50 disabled:cursor-not-allowed disabled:opacity-50 pr-9">
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-[18px] shrink-0 text-semantic-text-secondary" aria-hidden="true"><path d="M6 1.5V4.5M12 1.5V4.5M2.25 7.5H15.75M3.75 3H14.25C15.0784 3 15.75 3.67157 15.75 4.5V15C15.75 15.8284 15.0784 16.5 14.25 16.5H3.75C2.92157 16.5 2.25 15.8284 2.25 15V4.5C2.25 3.67157 2.92157 3 3.75 3Z" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    <span class="min-w-0 flex-1 truncate">1 Sep 2026 - 18 Sep 2026</span>
  </button>
  <button type="button" aria-label="Clear date range" class="absolute right-3 top-1/2 flex size-4 -translate-y-1/2 items-center justify-center rounded-sm text-semantic-text-secondary outline-none transition-colors hover:text-semantic-text-primary focus-visible:ring-2 focus-visible:ring-semantic-border-focus">
    <i data-lucide="x" class="size-4" aria-hidden="true"></i>
  </button>
</div>
```

### Open with presets
```html
<div class="relative inline-block w-full max-w-full" data-popover>
  <button data-popover-trigger type="button" aria-expanded="true" class="flex h-10 w-full items-center gap-2 rounded border border-solid bg-semantic-bg-primary px-4 py-2.5 text-left text-sm text-semantic-text-primary outline-none transition-colors hover:border-semantic-border-input-focus/50 disabled:cursor-not-allowed disabled:opacity-50 border-semantic-border-input-focus/50 shadow-[0_0_0_1px_rgba(43,188,202,0.15)]">
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-[18px] shrink-0 text-semantic-text-secondary" aria-hidden="true"><path d="M6 1.5V4.5M12 1.5V4.5M2.25 7.5H15.75M3.75 3H14.25C15.0784 3 15.75 3.67157 15.75 4.5V15C15.75 15.8284 15.0784 16.5 14.25 16.5H3.75C2.92157 16.5 2.25 15.8284 2.25 15V4.5C2.25 3.67157 2.92157 3 3.75 3Z" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    <span class="min-w-0 flex-1 truncate">7 Sep 2026 - 12 Sep 2026</span>
  </button>
  <div class="absolute left-0 top-full z-[9999] mt-1 text-start" data-popover-content>
    <div role="dialog" class="max-w-[calc(100vw-16px)] max-h-[420px] flex flex-col rounded-lg border border-solid border-semantic-border-layout bg-semantic-bg-primary shadow-lg overflow-y-auto overflow-x-hidden overscroll-contain pointer-events-auto [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:var(--semantic-border-secondary)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-semantic-border-secondary">
      <div class="flex flex-col sm:flex-row">
        <div class="flex shrink-0 gap-0.5 border-solid border-semantic-border-layout p-3 max-sm:w-full max-sm:flex-row max-sm:overflow-x-auto max-sm:border-b sm:w-36 sm:flex-col sm:border-r">
          <button type="button" class="shrink-0 whitespace-nowrap rounded px-2 py-2 text-left text-sm text-semantic-text-primary transition-colors hover:bg-semantic-bg-hover max-sm:border max-sm:border-solid max-sm:border-semantic-border-layout sm:w-full sm:py-1.5">Today</button>
          <button type="button" class="shrink-0 whitespace-nowrap rounded px-2 py-2 text-left text-sm text-semantic-text-primary transition-colors hover:bg-semantic-bg-hover max-sm:border max-sm:border-solid max-sm:border-semantic-border-layout sm:w-full sm:py-1.5">Yesterday</button>
          <button type="button" class="shrink-0 whitespace-nowrap rounded px-2 py-2 text-left text-sm text-semantic-text-primary transition-colors hover:bg-semantic-bg-hover max-sm:border max-sm:border-solid max-sm:border-semantic-border-layout sm:w-full sm:py-1.5">Last 7 days</button>
          <button type="button" class="shrink-0 whitespace-nowrap rounded px-2 py-2 text-left text-sm text-semantic-text-primary transition-colors hover:bg-semantic-bg-hover max-sm:border max-sm:border-solid max-sm:border-semantic-border-layout sm:w-full sm:py-1.5">Last 30 days</button>
          <button type="button" class="shrink-0 whitespace-nowrap rounded px-2 py-2 text-left text-sm text-semantic-text-primary transition-colors hover:bg-semantic-bg-hover max-sm:border max-sm:border-solid max-sm:border-semantic-border-layout sm:w-full sm:py-1.5">This month</button>
          <button type="button" class="shrink-0 whitespace-nowrap rounded px-2 py-2 text-left text-sm text-semantic-text-primary transition-colors hover:bg-semantic-bg-hover max-sm:border max-sm:border-solid max-sm:border-semantic-border-layout sm:w-full sm:py-1.5">Last month</button>
        </div>
        <div class="min-w-0 flex-1 p-3 touch-pan-y sm:min-w-[272px]">
          <div class="mb-3 flex items-center justify-between gap-2">
            <button type="button" aria-label="Previous month" class="p-1 rounded hover:bg-semantic-bg-hover text-semantic-text-secondary transition-colors">
              <i data-lucide="chevron-left" class="size-4" aria-hidden="true"></i>
            </button>
            <div class="flex items-center gap-2">
              <button type="button" data-calendar-menu="month" class="focus-visible:outline-none focus-visible:ring-0 rounded border border-solid border-semantic-border-layout px-3 py-1.5 text-sm font-semibold text-semantic-text-primary transition-colors hover:bg-semantic-bg-hover" aria-expanded="false" data-state="closed">September</button>
              <button type="button" data-calendar-menu="year" class="focus-visible:outline-none focus-visible:ring-0 flex items-center gap-1 rounded border border-solid border-semantic-border-layout px-3 py-1.5 text-sm font-semibold text-semantic-text-primary transition-colors hover:bg-semantic-bg-hover" aria-expanded="false" data-state="closed">
                2026
                <i data-lucide="chevron-down" class="size-3.5 text-semantic-text-muted" aria-hidden="true"></i>
              </button>
            </div>
            <button type="button" aria-label="Next month" class="p-1 rounded hover:bg-semantic-bg-hover text-semantic-text-secondary transition-colors">
              <i data-lucide="chevron-right" class="size-4" aria-hidden="true"></i>
            </button>
          </div>
          <div class="grid w-full grid-cols-7">
            <div class="flex h-9 items-center justify-center text-xs font-medium text-semantic-text-muted sm:h-8">SU</div>
            <div class="flex h-9 items-center justify-center text-xs font-medium text-semantic-text-muted sm:h-8">MO</div>
            <div class="flex h-9 items-center justify-center text-xs font-medium text-semantic-text-muted sm:h-8">TU</div>
            <div class="flex h-9 items-center justify-center text-xs font-medium text-semantic-text-muted sm:h-8">WE</div>
            <div class="flex h-9 items-center justify-center text-xs font-medium text-semantic-text-muted sm:h-8">TH</div>
            <div class="flex h-9 items-center justify-center text-xs font-medium text-semantic-text-muted sm:h-8">FR</div>
            <div class="flex h-9 items-center justify-center text-xs font-medium text-semantic-text-muted sm:h-8">SA</div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="August 30, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">30</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="August 31, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">31</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 1, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">1</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 2, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">2</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 3, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">3</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 4, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">4</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 5, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">5</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 6, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">6</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8 bg-semantic-info-surface rounded-l-full">
              <button type="button" aria-label="September 7, 2026" aria-pressed="true" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 bg-semantic-primary text-semantic-text-inverted font-semibold">7</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8 bg-semantic-info-surface">
              <button type="button" aria-label="September 8, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">8</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8 bg-semantic-info-surface">
              <button type="button" aria-label="September 9, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">9</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8 bg-semantic-info-surface">
              <button type="button" aria-label="September 10, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">10</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8 bg-semantic-info-surface">
              <button type="button" aria-label="September 11, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">11</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8 bg-semantic-info-surface rounded-r-full">
              <button type="button" aria-label="September 12, 2026" aria-pressed="true" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 bg-semantic-primary text-semantic-text-inverted font-semibold">12</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 13, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">13</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 14, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">14</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 15, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">15</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 16, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">16</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 17, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">17</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 18, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">18</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 19, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">19</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 20, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">20</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 21, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">21</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 22, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">22</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 23, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">23</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 24, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">24</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 25, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">25</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 26, 2026" aria-pressed="false" aria-current="date" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">
                26
                <span class="absolute bottom-0.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-semantic-primary"></span>
              </button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 27, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">27</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 28, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">28</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 29, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">29</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="September 30, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-primary hover:bg-semantic-bg-hover">30</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="October 1, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">1</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="October 2, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">2</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="October 3, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">3</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="October 4, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">4</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="October 5, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">5</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="October 6, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">6</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="October 7, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">7</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="October 8, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">8</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="October 9, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">9</button>
            </div>
            <div class="relative flex h-9 items-center justify-center sm:h-8">
              <button type="button" aria-label="October 10, 2026" aria-pressed="false" class="relative flex h-9 w-full max-w-9 items-center justify-center rounded-full text-xs transition-colors sm:h-8 sm:max-w-8 text-semantic-text-muted hover:bg-semantic-bg-hover">10</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
