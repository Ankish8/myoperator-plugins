# CreatableSelect and CreatableMultiSelect

Sources: `src/components/ui/creatable-select.tsx`, `src/components/ui/creatable-multi-select.tsx`
React: `<CreatableSelect value onValueChange options placeholder creatableHint maxLength state>` · `<CreatableMultiSelect value onValueChange options placeholder helperText state maxItems maxLengthPerItem triggerDisplay>`

Pick from presets **or type a new value** (roles, tones, tags). When the typed text matches nothing, the list shows a link-colored `Create "…"` row.

## Specs

- Closed trigger: the Input box (42px, `px-4`, 16px text) with a muted 70% chevron; placeholder `text-semantic-text-placeholder`.
- Open: the trigger turns into a text input (chevron rotated), a panel opens 4px below: `rounded border-semantic-border-layout shadow-md`.
- Optional hint row at the top of the panel: `px-4 py-2 border-b`, muted `text-sm` hint + a `kbd` "Enter ↵" (`rounded border bg-semantic-bg-ui px-1.5 py-0.5 text-[10px]` muted).
- Options: `py-2 pl-4 pr-8` 16px, hover `bg-semantic-bg-ui`, selected turquoise check at the right.
- Multi chips: `bg-semantic-bg-ui rounded py-1 pl-2 pr-0.5 text-sm` + a 24px remove button with a 14px `x`. Helper text: 18px `info` icon + `text-sm` muted.

### CreatableSelect — closed (placeholder)
```html
<div class="relative w-full">
  <button type="button" class="flex h-[42px] w-full items-center justify-between rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus-within:border-semantic-border-input-focus/50 focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] cursor-pointer text-left" aria-expanded="false">
    <span class="line-clamp-1 text-semantic-text-placeholder">Select a role</span>
    <i data-lucide="chevron-down" class="size-4 text-semantic-text-muted opacity-70 shrink-0" aria-hidden="true"></i>
  </button>
</div>
```

### CreatableSelect — open with hint (the panel is positioned by the component itself: `absolute top-full mt-1`)
```html
<div class="relative w-full">
  <div class="flex h-[42px] w-full items-center justify-between rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus-within:border-semantic-border-input-focus/50 focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] cursor-text">
    <input class="flex-1 min-w-0 bg-transparent outline-none text-base text-semantic-text-primary placeholder:text-semantic-text-placeholder" placeholder="Agent" aria-expanded="true" role="combobox" type="text" value>
    <i data-lucide="chevron-down" class="size-4 text-semantic-text-muted opacity-70 shrink-0 rotate-180 transition-transform" aria-hidden="true"></i>
  </div>
  <div class="absolute left-0 top-full z-[9999] mt-1 w-full rounded border border-solid border-semantic-border-layout bg-semantic-bg-primary shadow-md animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
    <div class="flex items-center justify-between border-b border-solid border-semantic-border-layout px-4 py-2">
      <span class="text-sm text-semantic-text-muted">Type to create a custom role</span>
      <kbd class="inline-flex items-center gap-0.5 rounded border border-solid border-semantic-border-layout bg-semantic-bg-ui px-1.5 py-0.5 font-sans text-[10px] font-medium text-semantic-text-muted">Enter ↵</kbd>
    </div>
    <div role="listbox" class="max-h-60 overflow-y-auto p-1">
      <button type="button" role="option" aria-selected="true" class="relative flex w-full items-center rounded-sm py-2 pl-4 pr-8 text-base text-semantic-text-primary outline-none cursor-pointer select-none hover:bg-semantic-bg-ui">
        Agent
        <span class="absolute right-2 flex size-4 items-center justify-center">
          <i data-lucide="check" class="size-4 text-semantic-brand" aria-hidden="true"></i>
        </span>
      </button>
      <button type="button" role="option" aria-selected="false" class="relative flex w-full items-center rounded-sm py-2 pl-4 pr-8 text-base text-semantic-text-primary outline-none cursor-pointer select-none hover:bg-semantic-bg-ui">Supervisor</button>
      <button type="button" role="option" aria-selected="false" class="relative flex w-full items-center rounded-sm py-2 pl-4 pr-8 text-base text-semantic-text-primary outline-none cursor-pointer select-none hover:bg-semantic-bg-ui">Admin</button>
    </div>
  </div>
</div>
```

### CreatableMultiSelect — chips
```html
<div class="relative w-full">
  <div class="relative w-full">
    <div role="combobox" aria-expanded="false" class="w-full justify-between rounded bg-semantic-bg-primary px-4 text-base text-semantic-text-primary transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus-within:border-semantic-border-input-focus/50 focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] flex h-auto min-h-[42px] cursor-pointer items-start gap-2 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-semantic-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-semantic-bg-primary">
      <div class="flex min-h-0 min-w-0 flex-1 flex-wrap content-start items-center gap-1.5">
        <span class="inline-flex max-w-full items-center gap-0.5 rounded bg-semantic-bg-ui py-1 pl-2 pr-0.5 text-sm text-semantic-text-primary">
          <span class="min-w-0 truncate">Friendly</span>
          <button type="button" aria-label="Remove Friendly" class="inline-flex size-6 shrink-0 items-center justify-center rounded text-semantic-text-muted transition-colors hover:bg-semantic-bg-hover hover:text-semantic-text-primary">
            <i data-lucide="x" class="size-3.5" aria-hidden="true"></i>
          </button>
        </span>
        <span class="inline-flex max-w-full items-center gap-0.5 rounded bg-semantic-bg-ui py-1 pl-2 pr-0.5 text-sm text-semantic-text-primary">
          <span class="min-w-0 truncate">Concise</span>
          <button type="button" aria-label="Remove Concise" class="inline-flex size-6 shrink-0 items-center justify-center rounded text-semantic-text-muted transition-colors hover:bg-semantic-bg-hover hover:text-semantic-text-primary">
            <i data-lucide="x" class="size-3.5" aria-hidden="true"></i>
          </button>
        </span>
      </div>
      <i data-lucide="chevron-down" class="mt-1 size-4 shrink-0 self-start text-semantic-text-muted opacity-70 transition-transform" aria-hidden="true"></i>
    </div>
  </div>
</div>
```

### CreatableMultiSelect — error + helper
```html
<div class="relative w-full">
  <div class="relative w-full">
    <div role="combobox" aria-expanded="false" class="w-full justify-between rounded bg-semantic-bg-primary px-4 text-base text-semantic-text-primary transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-error-primary focus-within:border-semantic-error-primary focus-within:shadow-[0_0_0_1px_rgba(240,68,56,0.12)] flex h-auto min-h-[42px] cursor-pointer items-start gap-2 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-semantic-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-semantic-bg-primary">
      <div class="flex min-h-0 min-w-0 flex-1 flex-wrap content-start items-center gap-1.5">
        <span class="line-clamp-2 flex-1 text-base text-semantic-text-placeholder">Select tones</span>
      </div>
      <i data-lucide="chevron-down" class="mt-1 size-4 shrink-0 self-start text-semantic-text-muted opacity-70 transition-transform" aria-hidden="true"></i>
    </div>
  </div>
  <div class="mt-1.5 flex items-center gap-1.5">
    <i data-lucide="info" class="size-[18px] shrink-0 text-semantic-text-muted" aria-hidden="true"></i>
    <p class="m-0 text-sm text-semantic-text-muted">Pick up to 3 tones.</p>
  </div>
</div>
```
