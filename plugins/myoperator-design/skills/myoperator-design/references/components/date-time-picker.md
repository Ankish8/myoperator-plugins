# DateTimePicker

## Contents
- Specs
  - With label (empty)
  - Filled
  - Error
  - Open

Source: `src/components/ui/date-time-picker.tsx` · React: `<DateTimePicker label required helperText error value onValueChange variant="date-time|date-only|time-only" size showEndTime showSeconds minDate maxDate disablePastDates>`

Single date + time. The trigger is a masked text input (`DD/MM/YYYY hh:mm AM`), the popover holds a month calendar and a time selector.

## Specs

- Width: 336px on ≥ sm (`sm` size 280px, `lg` 360px), full width on mobile.
- Trigger: **42px**, `px-4 py-2.5`, 16px text, `rounded`, `border-semantic-border-input` (hover turquoise 50%), placeholder mask `--/--/---- --:-- --`; a 20px clear `x` once filled; 18px calendar icon button.
- Label/helper/error: same as TextField (`text-sm font-semibold text-semantic-text-secondary`, error `text-sm text-semantic-error-primary`).
- Popover: 4px below, **336px** wide, `rounded-lg` (8px), `border-semantic-border-layout`, `shadow-lg`, max height 420px (scrolls).
  - Header: prev/next month buttons (16px chevrons) and Month/Year dropdown triggers (`h-9 min-w-[90px] rounded-md border text-sm`).
  - Weekday row: `size-8 text-xs font-semibold` muted. Days: 32px circles (`size-8 text-xs`); selected day `bg-semantic-primary` + white semibold text; days outside the month are muted.
  - Time section (`p-3 space-y-3 border-t`): "Start Time" (and optional "End Time") labels in `text-sm font-semibold text-semantic-text-secondary`, each over a 42px dropdown trigger with a 16px `clock-2` icon, the time, and a `chevron-down`.

### With label (empty)
```html
<div class="relative inline-block w-full max-w-full sm:w-[336px]">
  <label class="mb-1.5 block text-sm font-semibold text-[var(--semantic-text-secondary,#343E55)]">Schedule for<span class="text-[var(--semantic-error-primary,#F04438)] ml-0.5">*</span></label>
  <div class="flex w-full items-center justify-between border border-solid border-[var(--semantic-border-input,#E9EAEB)] bg-[var(--semantic-bg-primary,#FFFFFF)] text-left outline-none transition-colors hover:border-semantic-border-input-focus/50 disabled:cursor-not-allowed disabled:opacity-50 h-[42px] gap-2 rounded px-4 py-2.5 text-base text-[var(--semantic-text-placeholder,#A2A6B1)]">
    <input placeholder="--/--/---- --:-- --" aria-expanded="false" aria-label="Date and time" class="min-w-0 flex-1 bg-transparent text-base text-[var(--semantic-text-primary,#181D27)] outline-none placeholder:text-[var(--semantic-text-placeholder,#A2A6B1)] disabled:cursor-not-allowed read-only:cursor-not-allowed" type="text" value>
    <button type="button" aria-label="Open calendar" class="inline-flex shrink-0 items-center justify-center rounded text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)] hover:text-[var(--semantic-text-primary,#181D27)] disabled:cursor-not-allowed">
      <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-[18px]" aria-hidden="true"><path d="M6 1.5V4.5M12 1.5V4.5M2.25 6.375H15.75M3.75 3H14.25C15.0784 3 15.75 3.67157 15.75 4.5V15C15.75 15.8284 15.0784 16.5 14.25 16.5H3.75C2.92157 16.5 2.25 15.8284 2.25 15V4.5C2.25 3.67157 2.92157 3 3.75 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
  </div>
</div>
```

### Filled
```html
<div class="relative inline-block w-full max-w-full sm:w-[336px]">
  <label class="mb-1.5 block text-sm font-semibold text-[var(--semantic-text-secondary,#343E55)]">Schedule for</label>
  <div class="flex w-full items-center justify-between border border-solid border-[var(--semantic-border-input,#E9EAEB)] bg-[var(--semantic-bg-primary,#FFFFFF)] text-left text-[var(--semantic-text-primary,#181D27)] outline-none transition-colors hover:border-semantic-border-input-focus/50 disabled:cursor-not-allowed disabled:opacity-50 h-[42px] gap-2 rounded px-4 py-2.5 text-base">
    <input placeholder="--/--/---- --:-- --" aria-expanded="false" aria-label="Date and time" class="min-w-0 flex-1 bg-transparent text-base text-[var(--semantic-text-primary,#181D27)] outline-none placeholder:text-[var(--semantic-text-placeholder,#A2A6B1)] disabled:cursor-not-allowed read-only:cursor-not-allowed" type="text" value="18/09/2026 10:30 AM">
    <button type="button" aria-label="Clear date" class="inline-flex size-5 items-center justify-center rounded text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)] hover:text-[var(--semantic-text-primary,#181D27)]">
      <i data-lucide="x" class="size-4" aria-hidden="true"></i>
    </button>
    <button type="button" aria-label="Open calendar" class="inline-flex shrink-0 items-center justify-center rounded text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)] hover:text-[var(--semantic-text-primary,#181D27)] disabled:cursor-not-allowed">
      <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-[18px]" aria-hidden="true"><path d="M6 1.5V4.5M12 1.5V4.5M2.25 6.375H15.75M3.75 3H14.25C15.0784 3 15.75 3.67157 15.75 4.5V15C15.75 15.8284 15.0784 16.5 14.25 16.5H3.75C2.92157 16.5 2.25 15.8284 2.25 15V4.5C2.25 3.67157 2.92157 3 3.75 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
  </div>
</div>
```

### Error
```html
<div class="relative inline-block w-full max-w-full sm:w-[336px]">
  <label class="mb-1.5 block text-sm font-semibold text-[var(--semantic-text-secondary,#343E55)]">Schedule for</label>
  <div class="flex w-full items-center justify-between border border-solid bg-[var(--semantic-bg-primary,#FFFFFF)] text-left outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 h-[42px] gap-2 rounded px-4 py-2.5 text-base border-[var(--semantic-error-primary,#F04438)] hover:border-[var(--semantic-error-primary,#F04438)] text-[var(--semantic-text-placeholder,#A2A6B1)]">
    <input placeholder="--/--/---- --:-- --" aria-expanded="false" aria-invalid="true" aria-label="Date and time" class="min-w-0 flex-1 bg-transparent text-base text-[var(--semantic-text-primary,#181D27)] outline-none placeholder:text-[var(--semantic-text-placeholder,#A2A6B1)] disabled:cursor-not-allowed read-only:cursor-not-allowed" type="text" value>
    <button type="button" aria-label="Open calendar" class="inline-flex shrink-0 items-center justify-center rounded text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)] hover:text-[var(--semantic-text-primary,#181D27)] disabled:cursor-not-allowed">
      <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-[18px]" aria-hidden="true"><path d="M6 1.5V4.5M12 1.5V4.5M2.25 6.375H15.75M3.75 3H14.25C15.0784 3 15.75 3.67157 15.75 4.5V15C15.75 15.8284 15.0784 16.5 14.25 16.5H3.75C2.92157 16.5 2.25 15.8284 2.25 15V4.5C2.25 3.67157 2.92157 3 3.75 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
  </div>
  <div class="mt-1">
    <span role="alert" class="text-sm text-[var(--semantic-error-primary,#F04438)]">Pick a future date</span>
  </div>
</div>
```

### Open
```html
<div class="relative inline-block w-full max-w-full sm:w-[336px]" data-popover>
  <div class="flex w-full items-center justify-between border border-solid bg-[var(--semantic-bg-primary,#FFFFFF)] text-left text-[var(--semantic-text-primary,#181D27)] outline-none transition-colors hover:border-semantic-border-input-focus/50 disabled:cursor-not-allowed disabled:opacity-50 h-[42px] gap-2 rounded px-4 py-2.5 text-base border-semantic-border-input-focus/50 shadow-[0_0_0_1px_rgba(43,188,202,0.15)]">
    <input placeholder="--/--/---- --:-- --" aria-expanded="true" aria-label="Date and time" class="min-w-0 flex-1 bg-transparent text-base text-[var(--semantic-text-primary,#181D27)] outline-none placeholder:text-[var(--semantic-text-placeholder,#A2A6B1)] disabled:cursor-not-allowed read-only:cursor-not-allowed" type="text" value="18/09/2026 10:30 AM">
    <button type="button" aria-label="Clear date" class="inline-flex size-5 items-center justify-center rounded text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)] hover:text-[var(--semantic-text-primary,#181D27)]">
      <i data-lucide="x" class="size-4" aria-hidden="true"></i>
    </button>
    <button data-popover-trigger type="button" aria-label="Open calendar" class="inline-flex shrink-0 items-center justify-center rounded text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)] hover:text-[var(--semantic-text-primary,#181D27)] disabled:cursor-not-allowed">
      <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-[18px]" aria-hidden="true"><path d="M6 1.5V4.5M12 1.5V4.5M2.25 6.375H15.75M3.75 3H14.25C15.0784 3 15.75 3.67157 15.75 4.5V15C15.75 15.8284 15.0784 16.5 14.25 16.5H3.75C2.92157 16.5 2.25 15.8284 2.25 15V4.5C2.25 3.67157 2.92157 3 3.75 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
  </div>
  <div class="absolute left-0 top-full z-[9999] mt-1 text-start" data-popover-content>
    <div role="dialog" class="w-[336px] max-h-[420px] rounded-lg border border-solid border-[var(--semantic-border-layout,#E9EAEB)] bg-[var(--semantic-bg-primary,#FFFFFF)] shadow-lg flex flex-col min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain pointer-events-auto [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:var(--semantic-border-secondary)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-semantic-border-secondary">
      <div class="p-3 touch-pan-y">
        <div class="mb-3 flex items-center justify-between gap-2">
          <button type="button" aria-label="Previous month" class="p-1 rounded hover:bg-[var(--semantic-bg-hover,#D5D7DA)] text-[var(--semantic-text-secondary,#343E55)] transition-colors">
            <i data-lucide="chevron-left" class="size-4" aria-hidden="true"></i>
          </button>
          <div class="flex min-w-0 items-center gap-1.5">
            <div class="relative">
              <label class="sr-only">Month</label>
              <button type="button" role="combobox" aria-label="Month" aria-expanded="false" data-value="8" class="h-9 min-w-[90px] rounded-md border border-solid border-semantic-border-input bg-semantic-bg-primary px-3 text-sm text-semantic-text-primary outline-none transition-colors hover:border-semantic-border-input-focus/50 focus:border-semantic-border-input-focus/50 focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] inline-flex items-center justify-between gap-2">
                <span>Sep</span>
                <i data-lucide="chevron-right" class="size-3 transition-transform" aria-hidden="true"></i>
              </button>
            </div>
            <div class="relative">
              <label class="sr-only">Year</label>
              <button type="button" role="combobox" aria-label="Year" aria-expanded="false" data-value="2026" class="h-9 min-w-[90px] rounded-md border border-solid border-semantic-border-input bg-semantic-bg-primary px-3 text-sm text-semantic-text-primary outline-none transition-colors hover:border-semantic-border-input-focus/50 focus:border-semantic-border-input-focus/50 focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] inline-flex items-center justify-between gap-2">
                <span>2026</span>
                <i data-lucide="chevron-right" class="size-3 transition-transform" aria-hidden="true"></i>
              </button>
            </div>
            <div class="sr-only">September 2026</div>
          </div>
          <button type="button" aria-label="Next month" class="p-1 rounded hover:bg-[var(--semantic-bg-hover,#D5D7DA)] text-[var(--semantic-text-secondary,#343E55)] transition-colors">
            <i data-lucide="chevron-right" class="size-4" aria-hidden="true"></i>
          </button>
        </div>
        <div class="grid grid-cols-7">
          <div class="mx-auto flex size-8 items-center justify-center text-xs font-semibold text-[var(--semantic-text-muted,#717680)]">Su</div>
          <div class="mx-auto flex size-8 items-center justify-center text-xs font-semibold text-[var(--semantic-text-muted,#717680)]">Mo</div>
          <div class="mx-auto flex size-8 items-center justify-center text-xs font-semibold text-[var(--semantic-text-muted,#717680)]">Tu</div>
          <div class="mx-auto flex size-8 items-center justify-center text-xs font-semibold text-[var(--semantic-text-muted,#717680)]">We</div>
          <div class="mx-auto flex size-8 items-center justify-center text-xs font-semibold text-[var(--semantic-text-muted,#717680)]">Th</div>
          <div class="mx-auto flex size-8 items-center justify-center text-xs font-semibold text-[var(--semantic-text-muted,#717680)]">Fr</div>
          <div class="mx-auto flex size-8 items-center justify-center text-xs font-semibold text-[var(--semantic-text-muted,#717680)]">Sa</div>
          <button type="button" aria-label="August 30, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">30</button>
          <button type="button" aria-label="August 31, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">31</button>
          <button type="button" aria-label="September 1, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">1</button>
          <button type="button" aria-label="September 2, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">2</button>
          <button type="button" aria-label="September 3, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">3</button>
          <button type="button" aria-label="September 4, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">4</button>
          <button type="button" aria-label="September 5, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">5</button>
          <button type="button" aria-label="September 6, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">6</button>
          <button type="button" aria-label="September 7, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">7</button>
          <button type="button" aria-label="September 8, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">8</button>
          <button type="button" aria-label="September 9, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">9</button>
          <button type="button" aria-label="September 10, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">10</button>
          <button type="button" aria-label="September 11, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">11</button>
          <button type="button" aria-label="September 12, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">12</button>
          <button type="button" aria-label="September 13, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">13</button>
          <button type="button" aria-label="September 14, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">14</button>
          <button type="button" aria-label="September 15, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">15</button>
          <button type="button" aria-label="September 16, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">16</button>
          <button type="button" aria-label="September 17, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">17</button>
          <button type="button" aria-label="September 18, 2026" aria-pressed="true" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors bg-[var(--semantic-primary,#343E55)] text-[var(--semantic-text-inverted,#FFFFFF)] font-semibold">18</button>
          <button type="button" aria-label="September 19, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">19</button>
          <button type="button" aria-label="September 20, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">20</button>
          <button type="button" aria-label="September 21, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">21</button>
          <button type="button" aria-label="September 22, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">22</button>
          <button type="button" aria-label="September 23, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">23</button>
          <button type="button" aria-label="September 24, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">24</button>
          <button type="button" aria-label="September 25, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">25</button>
          <button type="button" aria-label="September 26, 2026" aria-pressed="false" aria-current="date" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)] ring-1 ring-inset ring-[var(--semantic-border-secondary,#777E8D)]">26</button>
          <button type="button" aria-label="September 27, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">27</button>
          <button type="button" aria-label="September 28, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">28</button>
          <button type="button" aria-label="September 29, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">29</button>
          <button type="button" aria-label="September 30, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-primary,#181D27)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">30</button>
          <button type="button" aria-label="October 1, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">1</button>
          <button type="button" aria-label="October 2, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">2</button>
          <button type="button" aria-label="October 3, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">3</button>
          <button type="button" aria-label="October 4, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">4</button>
          <button type="button" aria-label="October 5, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">5</button>
          <button type="button" aria-label="October 6, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">6</button>
          <button type="button" aria-label="October 7, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">7</button>
          <button type="button" aria-label="October 8, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">8</button>
          <button type="button" aria-label="October 9, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">9</button>
          <button type="button" aria-label="October 10, 2026" aria-pressed="false" class="relative flex items-center justify-center size-8 mx-auto rounded-full text-xs transition-colors text-[var(--semantic-text-muted,#717680)] hover:bg-[var(--semantic-bg-hover,#D5D7DA)]">10</button>
        </div>
      </div>
      <div class="space-y-3 bg-[var(--semantic-bg-primary,#FFFFFF)] p-3 border-t border-solid border-[var(--semantic-border-layout,#E9EAEB)]">
        <div class="flex flex-col gap-1.5">
          <span class="block text-sm font-semibold text-[var(--semantic-text-secondary,#343E55)]">Start Time</span>
          <button type="button" aria-label="Start Time" aria-expanded="false" class="flex h-[42px] w-full items-center gap-2 rounded border border-solid border-[var(--semantic-border-input,#E9EAEB)] bg-[var(--semantic-bg-primary,#FFFFFF)] px-3 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-colors hover:border-semantic-border-input-focus/50">
            <i data-lucide="clock-2" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)]" aria-hidden="true"></i>
            <span class="m-0 min-w-0 flex-1 truncate">10:30 AM</span>
            <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] transition-transform" aria-hidden="true"></i>
          </button>
        </div>
        <div class="flex flex-col gap-1.5">
          <span class="block text-sm font-semibold text-[var(--semantic-text-secondary,#343E55)]">End Time</span>
          <button type="button" aria-label="End Time" aria-expanded="false" class="flex h-[42px] w-full items-center gap-2 rounded border border-solid border-[var(--semantic-border-input,#E9EAEB)] bg-[var(--semantic-bg-primary,#FFFFFF)] px-3 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-colors hover:border-semantic-border-input-focus/50">
            <i data-lucide="clock-2" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)]" aria-hidden="true"></i>
            <span class="m-0 min-w-0 flex-1 truncate">12:00 AM</span>
            <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] transition-transform" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```
