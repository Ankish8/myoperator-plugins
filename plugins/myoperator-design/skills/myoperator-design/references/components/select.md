# Select and SelectField

## Contents
- Specs
- Interactivity (HTML output)
- Select — trigger states
  - Placeholder
  - With value
  - Error
  - Disabled
- Select — open
  - Selected option + disabled option
  - Groups + separator
- SelectField
  - Label + required + helper
  - Error
  - Loading (spinner, disabled)
  - Open, searchable (search row above the options)

Sources: `src/components/ui/select.tsx` (Radix Select), `src/components/ui/select-field.tsx`
React: `<Select><SelectTrigger state><SelectValue placeholder/></SelectTrigger><SelectContent><SelectItem value/>…</SelectContent></Select>` · `<SelectField label required helperText error loading searchable options placeholder>`

- **SelectField** = labelled single-choice field (label + trigger + helper/error). Use it in forms.
- **Select** = the bare dropdown (toolbars, inline filters).
- Multiple choices → `multi-select.md`. User may type a new value → `creatable-select.md`. Searching a long list of numbers → `search-filter.md` or `searchable` SelectField.

## Specs

- Trigger: identical box to Input — **42px**, `px-4`, 16px text, 4px radius, `border-semantic-border-input`, turquoise focus border + glow, red error border. Chevron: 16px `chevron-down`, muted, 70% opacity.
- Menu: full trigger width, 4px below the trigger (`translate-y-1` on the menu), `rounded` (4px), `border-semantic-border-layout`, `shadow-md`, `p-1`, max height 384px (`max-h-96`).
- Option: `py-2 pl-4 pr-8`, 16px text, hover/focus `bg-semantic-bg-ui`, disabled 50% opacity. Selected option shows a 16px turquoise `check` at the right (`absolute right-2`).
- Group label: `px-4 py-1.5 text-xs font-semibold` muted. Separator: 1px `bg-semantic-border-layout`, `-mx-1 my-1`.
- Placeholder text renders in the trigger's text color (#181D27) in production — keep it as in the snippet.

## Interactivity (HTML output)

The open snippets carry the starter's hooks: `data-popover` (anchor), `data-popover-trigger`, `data-popover-content` (menu), `data-value` (trigger label), `data-indicator` (check). To render **closed**, add `hidden` to the `data-popover-content` element and set the trigger to `aria-expanded="false" data-state="closed"`. Clicking an option then updates the label, moves the check and closes the menu. Every option keeps its `data-indicator` span; the starter hides it unless the option has `data-state="checked"`.

## Select — trigger states

### Placeholder
```html
<button type="button" role="combobox" aria-expanded="false" data-state="closed" data-placeholder class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-border-input,#E9EAEB)] focus:outline-none focus:border-[var(--semantic-border-input-focus,#2BBCCA)] focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]">
  <span>Select authentication</span>
  <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
</button>
```

### With value
```html
<button type="button" role="combobox" aria-expanded="false" data-state="closed" class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-border-input,#E9EAEB)] focus:outline-none focus:border-[var(--semantic-border-input-focus,#2BBCCA)] focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]">
  <span>Bearer Token</span>
  <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
</button>
```

### Error
```html
<button type="button" role="combobox" aria-expanded="false" data-state="closed" data-placeholder class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-error-primary,#F04438)] focus:outline-none focus:border-[var(--semantic-error-primary,#F04438)] focus:shadow-[0_0_0_1px_rgba(240,68,56,0.12)]">
  <span>Select authentication</span>
  <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
</button>
```

### Disabled
```html
<button type="button" role="combobox" aria-expanded="false" data-state="closed" disabled data-disabled data-placeholder class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-border-input,#E9EAEB)] focus:outline-none focus:border-[var(--semantic-border-input-focus,#2BBCCA)] focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]">
  <span>Select authentication</span>
  <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
</button>
```

## Select — open

### Selected option + disabled option
```html
<div class="relative" data-popover>
  <button data-popover-trigger type="button" role="combobox" aria-expanded="true" data-state="open" class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-border-input,#E9EAEB)] focus:outline-none focus:border-[var(--semantic-border-input-focus,#2BBCCA)] focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]">
    <span data-value>Bearer Token</span>
    <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
  </button>
  <div class="absolute left-0 top-full z-[9999] w-full text-start" data-popover-content>
    <div data-side="bottom" role="listbox" data-state="open" class="relative z-[9999] flex max-h-96 w-full flex-col overflow-hidden rounded bg-[var(--semantic-bg-primary,#FFFFFF)] border border-solid border-[var(--semantic-border-layout,#E9EAEB)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1">
      <div role="presentation" class="relative flex-1 overflow-y-auto overflow-x-hidden p-1">
        <div role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <span class="absolute right-2 flex size-4 items-center justify-center">
            <span aria-hidden="true" data-indicator>
              <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
            </span>
          </span>
          <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
            <span>None</span>
          </span>
        </div>
        <div role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <span class="absolute right-2 flex size-4 items-center justify-center">
            <span aria-hidden="true" data-indicator>
              <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
            </span>
          </span>
          <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
            <span>Basic Auth</span>
          </span>
        </div>
        <div role="option" aria-selected="false" data-state="checked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <span class="absolute right-2 flex size-4 items-center justify-center">
            <span aria-hidden="true" data-indicator>
              <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
            </span>
          </span>
          <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
            <span>Bearer Token</span>
          </span>
        </div>
        <div role="option" aria-selected="false" data-state="unchecked" aria-disabled="true" data-disabled class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <span class="absolute right-2 flex size-4 items-center justify-center">
            <span aria-hidden="true" data-indicator>
              <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
            </span>
          </span>
          <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
            <span>API Key</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Groups + separator
```html
<div class="relative" data-popover>
  <button data-popover-trigger type="button" role="combobox" aria-expanded="true" data-state="open" data-placeholder class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-border-input,#E9EAEB)] focus:outline-none focus:border-[var(--semantic-border-input-focus,#2BBCCA)] focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]">
    <span data-value>Route calls to</span>
    <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
  </button>
  <div class="absolute left-0 top-full z-[9999] w-full text-start" data-popover-content>
    <div data-side="bottom" role="listbox" data-state="open" class="relative z-[9999] flex max-h-96 w-full flex-col overflow-hidden rounded bg-[var(--semantic-bg-primary,#FFFFFF)] border border-solid border-[var(--semantic-border-layout,#E9EAEB)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1">
      <div role="presentation" class="relative flex-1 overflow-y-auto overflow-x-hidden p-1">
        <div role="group">
          <div class="px-4 py-1.5 text-xs font-semibold text-[var(--semantic-text-muted,#717680)]">Departments</div>
          <div role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <span aria-hidden="true" data-indicator>
                <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
              </span>
            </span>
            <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
              <span>Sales</span>
            </span>
          </div>
          <div role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <span aria-hidden="true" data-indicator>
                <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
              </span>
            </span>
            <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
              <span>Support</span>
            </span>
          </div>
        </div>
        <div aria-hidden="true" class="-mx-1 my-1 h-px bg-[var(--semantic-border-layout,#E9EAEB)]"></div>
        <div role="group">
          <div class="px-4 py-1.5 text-xs font-semibold text-[var(--semantic-text-muted,#717680)]">Agents</div>
          <div role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <span aria-hidden="true" data-indicator>
                <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
              </span>
            </span>
            <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
              <span>Aditi Kumar</span>
            </span>
          </div>
          <div role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <span aria-hidden="true" data-indicator>
                <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
              </span>
            </span>
            <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
              <span>Rahul Verma</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## SelectField

### Label + required + helper
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Authentication<span class="text-semantic-error-primary ml-0.5">*</span></label>
  <button type="button" role="combobox" aria-expanded="false" data-state="closed" data-placeholder class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-border-input,#E9EAEB)] focus:outline-none focus:border-[var(--semantic-border-input-focus,#2BBCCA)] focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]" aria-invalid="false">
    <span>Select authentication method</span>
    <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
  </button>
  <div class="flex justify-between items-start gap-2">
    <span class="text-sm text-semantic-text-muted">How we sign requests to your endpoint.</span>
  </div>
</div>
```

### Error
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Department<span class="text-semantic-error-primary ml-0.5">*</span></label>
  <button type="button" role="combobox" aria-expanded="false" data-state="closed" data-placeholder class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-error-primary,#F04438)] focus:outline-none focus:border-[var(--semantic-error-primary,#F04438)] focus:shadow-[0_0_0_1px_rgba(240,68,56,0.12)]" aria-invalid="true">
    <span>Select an option</span>
    <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
  </button>
  <div class="flex justify-between items-start gap-2">
    <span class="text-sm text-semantic-error-primary">Select a department</span>
  </div>
</div>
```

### Loading (spinner, disabled)
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Department</label>
  <button type="button" role="combobox" aria-expanded="false" data-state="closed" disabled data-disabled data-placeholder class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-border-input,#E9EAEB)] focus:outline-none focus:border-[var(--semantic-border-input-focus,#2BBCCA)] focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] pr-10" aria-invalid="false">
    <span>Select an option</span>
    <i data-lucide="loader-circle" class="absolute right-8 size-4 animate-spin text-semantic-text-muted" aria-hidden="true"></i>
    <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
  </button>
</div>
```

### Open, searchable (search row above the options)
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Department</label>
  <div class="relative" data-popover>
    <button data-popover-trigger type="button" role="combobox" aria-expanded="true" data-state="open" class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-border-input,#E9EAEB)] focus:outline-none focus:border-[var(--semantic-border-input-focus,#2BBCCA)] focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]" aria-invalid="false">
      <span data-value>Support</span>
      <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
    </button>
    <div class="absolute left-0 top-full z-[9999] w-full text-start" data-popover-content>
      <div data-side="bottom" role="listbox" data-state="open" class="relative z-[9999] flex max-h-96 w-full flex-col overflow-hidden rounded bg-[var(--semantic-bg-primary,#FFFFFF)] border border-solid border-[var(--semantic-border-layout,#E9EAEB)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1">
        <div role="presentation" class="relative flex-1 overflow-y-auto overflow-x-hidden p-1">
          <div class="flex items-center gap-2 px-3 pb-1.5 border-b border-solid border-semantic-border-layout">
            <i data-lucide="search" class="size-4 text-semantic-text-muted shrink-0" aria-hidden="true"></i>
            <input placeholder="Search..." class="w-full h-[42px] text-base text-semantic-text-primary bg-transparent placeholder:text-semantic-text-placeholder focus:outline-none" type="text" value>
          </div>
          <div role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <span aria-hidden="true" data-indicator>
                <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
              </span>
            </span>
            <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
              <span>Sales</span>
            </span>
          </div>
          <div role="option" aria-selected="false" data-state="checked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <span aria-hidden="true" data-indicator>
                <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
              </span>
            </span>
            <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
              <span>Support</span>
            </span>
          </div>
          <div role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <span aria-hidden="true" data-indicator>
                <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
              </span>
            </span>
            <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
              <span>Billing</span>
            </span>
          </div>
          <div role="option" aria-selected="false" data-state="unchecked" class="relative flex w-full cursor-pointer select-none items-start rounded-sm py-2 pl-4 pr-8 text-base text-[var(--semantic-text-primary,#181D27)] outline-none hover:bg-[var(--semantic-bg-ui,#F5F5F5)] focus:bg-[var(--semantic-bg-ui,#F5F5F5)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            <span class="absolute right-2 flex size-4 items-center justify-center">
              <span aria-hidden="true" data-indicator>
                <i data-lucide="check" class="size-4 text-[var(--semantic-brand,#2BBCCA)]" aria-hidden="true"></i>
              </span>
            </span>
            <span class="min-w-0 flex-1 leading-normal whitespace-normal break-words">
              <span>Onboarding</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

Empty list → a centered `px-3 py-6 text-center text-sm text-semantic-text-muted` row reading "No options available" (or a custom message); no search matches → "No results found" (`py-6`).
