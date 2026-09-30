# MultiSelect

## Contents
- Specs
- Interactivity
  - Placeholder
  - With chips
  - Error
  - Helper text
  - Open — simple rows
  - Open — detailed rows (checkbox + secondary text, disabled row)

Source: `src/components/ui/multi-select.tsx` · React: `<MultiSelect label required helperText error options value onValueChange placeholder searchable maxSelections optionVariant="simple|detailed" summaryLabel selectAllLabel showClearAll>`

Multiple choices from a known list. Selected values show as chips in the trigger.

## Specs

- Trigger: min-height **42px** (grows as chips wrap), `px-4 py-2`, same border/focus/error as Input. Right side: clear-all `x` (16px, muted, turns red on hover), then the chevron (rotates 180° while open).
- Chip: `bg-semantic-bg-ui text-sm px-2 py-0.5 rounded` with a 12px `x` (hover red).
- Menu: 4px below the trigger, full width, `rounded border-semantic-border-layout shadow-md`, list `max-h-60 p-1`.
- `simple` rows: `py-2 pl-4 pr-8 text-base`, hover `bg-semantic-bg-ui`; selected rows get a 16px primary-colored (`text-semantic-primary`) `check` on the right.
- `detailed` rows: 16px checkbox + label + right-aligned muted secondary text (`text-sm`), `px-2 py-2`, single line.
- Placeholder: `text-base text-semantic-text-placeholder`. Error message: `text-sm text-semantic-error-primary` with a 14px `circle-alert`.
- `summaryLabel` collapses chips into one line ("3 lines selected"); `maxSelections` adds a footer "2 / 5 selected" (`p-2 border-t text-sm` muted).

## Interactivity

The anchor has `data-popover="multiple"`: clicking a row toggles its `data-state`/`aria-selected` (and its checkbox) without closing. Add `hidden` to `data-popover-content` to start closed.

### Placeholder
```html
<div class="flex min-w-0 flex-col gap-1">
  <label class="break-words text-sm font-semibold text-semantic-text-secondary">Departments</label>
  <div class="relative w-full min-w-0 flex flex-col gap-1">
    <button type="button" role="combobox" aria-expanded="false" aria-invalid="false" class="flex min-h-[42px] w-full items-center justify-between rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus/50 focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] text-left gap-2">
      <div class="min-w-0 flex-1 flex flex-wrap gap-1">
        <span class="text-base text-semantic-text-placeholder">Select departments</span>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <i data-lucide="chevron-down" class="size-4 text-semantic-text-muted transition-transform shrink-0" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>
```

### With chips
```html
<div class="flex min-w-0 flex-col gap-1">
  <label class="break-words text-sm font-semibold text-semantic-text-secondary">Departments</label>
  <div class="relative w-full min-w-0 flex flex-col gap-1">
    <button type="button" role="combobox" aria-expanded="false" aria-invalid="false" class="flex min-h-[42px] w-full items-center justify-between rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus/50 focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] text-left gap-2">
      <div class="min-w-0 flex-1 flex flex-wrap gap-1">
        <span class="inline-flex min-w-0 max-w-full items-center gap-1 bg-semantic-bg-ui text-semantic-text-primary text-sm px-2 py-0.5 rounded">
          <span class="min-w-0 truncate" title="Sales">Sales</span>
          <span role="button" class="shrink-0 cursor-pointer hover:text-semantic-error-primary focus:outline-none" aria-label="Remove Sales">
            <i data-lucide="x" class="size-3" aria-hidden="true"></i>
          </span>
        </span>
        <span class="inline-flex min-w-0 max-w-full items-center gap-1 bg-semantic-bg-ui text-semantic-text-primary text-sm px-2 py-0.5 rounded">
          <span class="min-w-0 truncate" title="Support">Support</span>
          <span role="button" class="shrink-0 cursor-pointer hover:text-semantic-error-primary focus:outline-none" aria-label="Remove Support">
            <i data-lucide="x" class="size-3" aria-hidden="true"></i>
          </span>
        </span>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <span role="button" class="p-0.5 cursor-pointer hover:text-semantic-error-primary focus:outline-none" aria-label="Clear all">
          <i data-lucide="x" class="size-4 text-semantic-text-muted" aria-hidden="true"></i>
        </span>
        <i data-lucide="chevron-down" class="size-4 text-semantic-text-muted transition-transform shrink-0" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>
```

### Error
```html
<div class="flex min-w-0 flex-col gap-1">
  <label class="break-words text-sm font-semibold text-semantic-text-secondary">Departments<span class="text-semantic-error-primary ml-0.5">*</span></label>
  <div class="relative w-full min-w-0 flex flex-col gap-1">
    <button type="button" role="combobox" aria-expanded="false" aria-invalid="true" class="flex min-h-[42px] w-full items-center justify-between rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-error-primary/40 focus:outline-none focus:border-semantic-error-primary/60 focus:shadow-[0_0_0_1px_rgba(240,68,56,0.1)] text-left gap-2">
      <div class="min-w-0 flex-1 flex flex-wrap gap-1">
        <span class="text-base text-semantic-text-placeholder">Select options</span>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <i data-lucide="chevron-down" class="size-4 text-semantic-text-muted transition-transform shrink-0" aria-hidden="true"></i>
      </div>
    </button>
    <div class="flex justify-between items-start gap-2">
      <div role="alert" class="flex items-center gap-1.5 min-w-0">
        <i data-lucide="circle-alert" class="size-3.5 shrink-0 text-semantic-error-primary" aria-hidden="true"></i>
        <span class="min-w-0 break-words text-sm text-semantic-error-primary">Select at least one department</span>
      </div>
    </div>
  </div>
</div>
```

### Helper text
```html
<div class="flex min-w-0 flex-col gap-1">
  <label class="break-words text-sm font-semibold text-semantic-text-secondary">Departments</label>
  <div class="relative w-full min-w-0 flex flex-col gap-1">
    <button type="button" role="combobox" aria-expanded="false" aria-invalid="false" class="flex min-h-[42px] w-full items-center justify-between rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus/50 focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] text-left gap-2">
      <div class="min-w-0 flex-1 flex flex-wrap gap-1">
        <span class="inline-flex min-w-0 max-w-full items-center gap-1 bg-semantic-bg-ui text-semantic-text-primary text-sm px-2 py-0.5 rounded">
          <span class="min-w-0 truncate" title="Support">Support</span>
          <span role="button" class="shrink-0 cursor-pointer hover:text-semantic-error-primary focus:outline-none" aria-label="Remove Support">
            <i data-lucide="x" class="size-3" aria-hidden="true"></i>
          </span>
        </span>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <span role="button" class="p-0.5 cursor-pointer hover:text-semantic-error-primary focus:outline-none" aria-label="Clear all">
          <i data-lucide="x" class="size-4 text-semantic-text-muted" aria-hidden="true"></i>
        </span>
        <i data-lucide="chevron-down" class="size-4 text-semantic-text-muted transition-transform shrink-0" aria-hidden="true"></i>
      </div>
    </button>
    <div class="flex justify-between items-start gap-2">
      <span class="min-w-0 break-words text-sm text-semantic-text-muted">Callers can reach any selected department.</span>
    </div>
  </div>
</div>
```

### Open — simple rows
```html
<div class="flex min-w-0 flex-col gap-1">
  <label class="break-words text-sm font-semibold text-semantic-text-secondary">Departments</label>
  <div class="relative w-full min-w-0 flex flex-col gap-1" data-popover="multiple">
    <button data-popover-trigger type="button" role="combobox" aria-expanded="true" aria-invalid="false" class="flex min-h-[42px] w-full items-center justify-between rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus/50 focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] text-left gap-2">
      <div class="min-w-0 flex-1 flex flex-wrap gap-1">
        <span class="inline-flex min-w-0 max-w-full items-center gap-1 bg-semantic-bg-ui text-semantic-text-primary text-sm px-2 py-0.5 rounded">
          <span class="min-w-0 truncate" title="Sales">Sales</span>
          <span role="button" class="shrink-0 cursor-pointer hover:text-semantic-error-primary focus:outline-none" aria-label="Remove Sales">
            <i data-lucide="x" class="size-3" aria-hidden="true"></i>
          </span>
        </span>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <span role="button" class="p-0.5 cursor-pointer hover:text-semantic-error-primary focus:outline-none" aria-label="Clear all">
          <i data-lucide="x" class="size-4 text-semantic-text-muted" aria-hidden="true"></i>
        </span>
        <i data-lucide="chevron-down" class="size-4 text-semantic-text-muted transition-transform shrink-0 rotate-180" aria-hidden="true"></i>
      </div>
    </button>
    <div class="absolute left-0 top-full z-[9999] mt-1 w-full text-start" data-popover-content>
      <div role="listbox" aria-multiselectable="true" class="rounded bg-semantic-bg-primary border border-solid border-semantic-border-layout shadow-md">
        <div class="max-h-60 overflow-auto overscroll-contain p-1">
          <button type="button" role="option" aria-selected="true" data-state="checked" class="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-sm text-left text-semantic-text-primary outline-none py-2 pl-4 pr-8 text-base">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <i data-indicator data-lucide="check" class="size-4 text-semantic-primary" aria-hidden="true"></i>
            </span>
            <span class="min-w-0 flex-1 text-left whitespace-normal break-words">Sales</span>
          </button>
          <button type="button" role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-sm text-left text-semantic-text-primary outline-none py-2 pl-4 pr-8 text-base hover:bg-semantic-bg-ui focus:bg-semantic-bg-ui">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <i data-indicator data-lucide="check" class="size-4 text-semantic-primary" aria-hidden="true"></i>
            </span>
            <span class="min-w-0 flex-1 text-left whitespace-normal break-words">Support</span>
          </button>
          <button type="button" role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-sm text-left text-semantic-text-primary outline-none py-2 pl-4 pr-8 text-base hover:bg-semantic-bg-ui focus:bg-semantic-bg-ui">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <i data-indicator data-lucide="check" class="size-4 text-semantic-primary" aria-hidden="true"></i>
            </span>
            <span class="min-w-0 flex-1 text-left whitespace-normal break-words">Billing</span>
          </button>
          <button type="button" role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-sm text-left text-semantic-text-primary outline-none py-2 pl-4 pr-8 text-base hover:bg-semantic-bg-ui focus:bg-semantic-bg-ui">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <i data-indicator data-lucide="check" class="size-4 text-semantic-primary" aria-hidden="true"></i>
            </span>
            <span class="min-w-0 flex-1 text-left whitespace-normal break-words">Onboarding</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Open — detailed rows (checkbox + secondary text, disabled row)
```html
<div class="flex min-w-0 flex-col gap-1">
  <label class="break-words text-sm font-semibold text-semantic-text-secondary">Assign numbers</label>
  <div class="relative w-full min-w-0 flex flex-col gap-1" data-popover="multiple">
    <button data-popover-trigger type="button" role="combobox" aria-expanded="true" aria-invalid="false" class="flex min-h-[42px] w-full items-center justify-between rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus/50 focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] text-left gap-2">
      <div class="min-w-0 flex-1 flex flex-wrap gap-1">
        <span class="inline-flex min-w-0 max-w-full items-center gap-1 bg-semantic-bg-ui text-semantic-text-primary text-sm px-2 py-0.5 rounded">
          <span class="min-w-0 truncate" title="+91 80 4718 2000">+91 80 4718 2000</span>
          <span role="button" class="shrink-0 cursor-pointer hover:text-semantic-error-primary focus:outline-none" aria-label="Remove +91 80 4718 2000">
            <i data-lucide="x" class="size-3" aria-hidden="true"></i>
          </span>
        </span>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <span role="button" class="p-0.5 cursor-pointer hover:text-semantic-error-primary focus:outline-none" aria-label="Clear all">
          <i data-lucide="x" class="size-4 text-semantic-text-muted" aria-hidden="true"></i>
        </span>
        <i data-lucide="chevron-down" class="size-4 text-semantic-text-muted transition-transform shrink-0 rotate-180" aria-hidden="true"></i>
      </div>
    </button>
    <div class="absolute left-0 top-full z-[9999] mt-1 w-full text-start" data-popover-content>
      <div role="listbox" aria-multiselectable="true" class="rounded bg-semantic-bg-primary border border-solid border-semantic-border-layout shadow-md">
        <div class="max-h-60 overflow-auto overscroll-contain p-1">
          <div role="option" aria-selected="true" data-state="checked" aria-disabled="false" class="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-sm text-left text-semantic-text-primary outline-none gap-2 px-2 py-2 text-sm">
            <button type="button" role="checkbox" aria-checked="true" data-state="checked" value="on" class="peer inline-flex items-center justify-center rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-4 w-4 cursor-pointer pointer-events-none shrink-0" aria-hidden="true">
              <span data-state="checked" class="flex items-center justify-center">
                <i data-lucide="check" class="h-3 w-3 stroke-[3]" aria-hidden="true"></i>
              </span>
            </button>
            <span title="+91 80 4718 2000" class="min-w-0 flex-1 text-left truncate">+91 80 4718 2000</span>
            <span class="shrink-0 max-w-[55%] truncate text-right text-sm text-semantic-text-muted">Sales line</span>
          </div>
          <div role="option" aria-selected="false" data-state="unchecked" aria-disabled="false" class="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-sm text-left text-semantic-text-primary outline-none gap-2 px-2 py-2 text-sm hover:bg-semantic-bg-ui focus:bg-semantic-bg-ui">
            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex items-center justify-center rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-4 w-4 cursor-pointer pointer-events-none shrink-0" aria-hidden="true"></button>
            <span title="+91 80 4718 2001" class="min-w-0 flex-1 text-left truncate">+91 80 4718 2001</span>
            <span class="shrink-0 max-w-[55%] truncate text-right text-sm text-semantic-text-muted">Support line</span>
          </div>
          <div role="option" aria-selected="false" data-state="unchecked" aria-disabled="true" data-disabled class="relative flex w-full min-w-0 select-none items-center rounded-sm text-left text-semantic-text-primary outline-none gap-2 px-2 py-2 text-sm hover:bg-semantic-bg-ui focus:bg-semantic-bg-ui opacity-50 cursor-not-allowed">
            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" data-disabled disabled value="on" class="peer inline-flex items-center justify-center rounded border-2 border-solid transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=checked]:border-semantic-primary data-[state=checked]:text-semantic-text-inverted data-[state=indeterminate]:bg-semantic-primary data-[state=indeterminate]:border-semantic-primary data-[state=indeterminate]:text-semantic-text-inverted data-[state=unchecked]:bg-semantic-bg-primary data-[state=unchecked]:border-semantic-border-input data-[state=unchecked]:hover:border-[var(--color-neutral-400)] h-4 w-4 cursor-pointer pointer-events-none shrink-0" aria-hidden="true"></button>
            <span title="+91 80 4718 2002" class="min-w-0 flex-1 text-left truncate">+91 80 4718 2002</span>
            <span class="shrink-0 max-w-[55%] truncate text-right text-sm text-semantic-text-muted">Assigned to Billing</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
