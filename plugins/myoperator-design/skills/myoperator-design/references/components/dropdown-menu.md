# DropdownMenu

## Contents
- Placement in static mockups
- Interactivity
  - Open — label, icon item + shortcut, description + suffix, disabled, submenu, destructive
  - Open — checkbox and radio items

Source: `src/components/ui/dropdown-menu.tsx` (Radix DropdownMenu) · React: `<DropdownMenu><DropdownMenuTrigger asChild/><DropdownMenuContent align><DropdownMenuItem description suffix/>…</DropdownMenuContent></DropdownMenu>` (+ `Label`, `Separator`, `Shortcut`, `CheckboxItem`, `RadioGroup/RadioItem`, `Sub/SubTrigger/SubContent`)

Action menus (row ⋮ menus, "More" buttons, column pickers). For choosing a form value use Select.

- Opens 4px below the trigger, aligned to its start (`align="start"`) or end.
- Content: `min-w-[8rem]` (set a width like `w-56` = 224px), max 20rem tall/wide, **`rounded-md`** (6px), `border-semantic-border-layout`, `bg-semantic-bg-primary`, `p-1`, `shadow-md`, `z-[9999]`.
- Item: `px-2 py-2 text-sm text-semantic-text-secondary rounded-sm gap-2`, focus/hover `bg-semantic-bg-ui` + `text-semantic-text-primary`; 16px leading icon; disabled 50%.
- Optional: second line `description` (`text-xs` muted), right `suffix` or keyboard shortcut (`text-xs tracking-widest opacity-60`), submenu trigger with a 16px `chevron-right`.
- Label: `px-2 py-1.5 text-sm font-semibold`. Separator: `-mx-1 my-1 h-px bg-semantic-border-layout`.
- Destructive item: add `text-semantic-error-primary focus:text-semantic-error-primary`.
- Checkbox/radio items: `pl-8`, a 16px primary-colored `check` at `left-2` when checked (`aria-checked`).

## Placement in static mockups

In production the menu is portaled to `<body>`; in a mockup it sits next to its trigger, so:
- **Align end** (row ⋮ menus, right-hand buttons): use `right-0` instead of `left-0` on the `data-popover-content` wrapper.
- **Near the bottom of a Table** the table wrapper (`overflow-auto`) clips the menu — open it upward: `bottom-full mb-1` instead of `top-full mt-1`.
- Keep `text-start` on the wrapper; without it the menu inherits the `text-right` of an actions cell.

## Interactivity

Wrapper `data-popover`, trigger `data-popover-trigger`, menu wrapper `data-popover-content` (add `hidden` to start closed). Menu indicators carry `data-indicator`; the starter hides them when `aria-checked="false"`.

### Open — label, icon item + shortcut, description + suffix, disabled, submenu, destructive
```html
<div class="relative inline-block" data-popover>
  <button data-popover-trigger class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 w-9 rounded-md focus-visible:outline-none focus-visible:ring-0" aria-label="Actions" type="button" aria-expanded="true" data-state="open">
    <i data-lucide="ellipsis-vertical" aria-hidden="true"></i>
  </button>
  <div class="absolute left-0 top-full z-[9999] mt-1 text-start" data-popover-content>
    <div data-side="bottom" role="menu" aria-orientation="vertical" data-state="open" class="z-[9999] max-h-80 max-w-80 min-w-[8rem] overflow-x-hidden overflow-y-auto overscroll-contain rounded-md border border-solid border-semantic-border-layout bg-semantic-bg-primary p-1 text-semantic-text-primary shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-56">
      <div class="px-2 py-1.5 text-sm font-semibold">Webhook</div>
      <div role="menuitem" class="relative flex min-w-0 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm text-semantic-text-secondary outline-none transition-colors focus:bg-semantic-bg-ui focus:text-semantic-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:shrink-0">
        <i data-lucide="pencil" class="size-4" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 whitespace-normal break-words leading-normal">Edit</span>
        <span class="ml-auto text-xs tracking-widest opacity-60">⌘E</span>
      </div>
      <div role="menuitem" class="relative flex min-w-0 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm text-semantic-text-secondary outline-none transition-colors focus:bg-semantic-bg-ui focus:text-semantic-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:shrink-0">
        <div class="flex min-w-0 flex-1 flex-col">
          <span class="min-w-0 whitespace-normal break-words leading-normal">
            <span class="min-w-0 flex-1 whitespace-normal break-words leading-normal">Send test event</span>
          </span>
          <span class="min-w-0 whitespace-normal break-words text-xs text-semantic-text-muted">Send a sample payload</span>
        </div>
        <span class="ml-auto text-xs text-semantic-text-muted shrink-0 pl-4">Test</span>
      </div>
      <div role="menuitem" aria-disabled="true" data-disabled class="relative flex min-w-0 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm text-semantic-text-secondary outline-none transition-colors focus:bg-semantic-bg-ui focus:text-semantic-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:shrink-0">
        <span class="min-w-0 flex-1 whitespace-normal break-words leading-normal">Duplicate</span>
      </div>
      <div role="menuitem" aria-expanded="false" data-state="closed" class="flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm text-semantic-text-secondary outline-none focus:bg-semantic-bg-ui focus:text-semantic-text-primary data-[state=open]:bg-semantic-bg-ui">
        Move to
        <i data-lucide="chevron-right" class="ml-auto h-4 w-4" aria-hidden="true"></i>
      </div>
      <div role="separator" aria-orientation="horizontal" class="-mx-1 my-1 h-px bg-semantic-border-layout"></div>
      <div role="menuitem" class="relative flex min-w-0 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none transition-colors focus:bg-semantic-bg-ui data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:shrink-0 text-semantic-error-primary focus:text-semantic-error-primary">
        <i data-lucide="trash-2" class="size-4" aria-hidden="true"></i>
        <span class="min-w-0 flex-1 whitespace-normal break-words leading-normal">Delete</span>
      </div>
    </div>
  </div>
</div>
```

### Open — checkbox and radio items
```html
<div class="relative inline-block" data-popover>
  <button data-popover-trigger class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4 focus-visible:outline-none focus-visible:ring-0" type="button" aria-expanded="true" data-state="open">Columns</button>
  <div class="absolute left-0 top-full z-[9999] mt-1 text-start" data-popover-content>
    <div data-side="bottom" role="menu" aria-orientation="vertical" data-state="open" class="z-[9999] max-h-80 max-w-80 min-w-[8rem] overflow-x-hidden overflow-y-auto overscroll-contain rounded-md border border-solid border-semantic-border-layout bg-semantic-bg-primary p-1 text-semantic-text-primary shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-56">
      <div class="px-2 py-1.5 text-sm font-semibold">Show columns</div>
      <div role="menuitemcheckbox" aria-checked="true" class="relative flex min-w-0 cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm text-semantic-text-secondary outline-none transition-colors focus:bg-semantic-bg-ui focus:text-semantic-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-state="checked">
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-semantic-primary">
          <span data-state="checked" data-indicator>
            <i data-lucide="check" class="h-4 w-4" aria-hidden="true"></i>
          </span>
        </span>
        <span class="min-w-0 flex-1 whitespace-normal break-words leading-normal">Caller</span>
      </div>
      <div role="menuitemcheckbox" aria-checked="true" class="relative flex min-w-0 cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm text-semantic-text-secondary outline-none transition-colors focus:bg-semantic-bg-ui focus:text-semantic-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-state="checked">
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-semantic-primary">
          <span data-state="checked" data-indicator>
            <i data-lucide="check" class="h-4 w-4" aria-hidden="true"></i>
          </span>
        </span>
        <span class="min-w-0 flex-1 whitespace-normal break-words leading-normal">Duration</span>
      </div>
      <div role="menuitemcheckbox" aria-checked="false" class="relative flex min-w-0 cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm text-semantic-text-secondary outline-none transition-colors focus:bg-semantic-bg-ui focus:text-semantic-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-state="unchecked">
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-semantic-primary">
          <span data-state="unchecked" data-indicator>
            <i data-lucide="check" class="h-4 w-4" aria-hidden="true"></i>
          </span>
        </span>
        <span class="min-w-0 flex-1 whitespace-normal break-words leading-normal">Recording</span>
      </div>
      <div role="separator" aria-orientation="horizontal" class="-mx-1 my-1 h-px bg-semantic-border-layout"></div>
      <div class="px-2 py-1.5 text-sm font-semibold">Sort by</div>
      <div role="group">
        <div role="menuitemradio" aria-checked="true" class="relative flex min-w-0 cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm text-semantic-text-secondary outline-none transition-colors focus:bg-semantic-bg-ui focus:text-semantic-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-state="checked">
          <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-semantic-primary">
            <span data-state="checked" data-indicator>
              <i data-lucide="check" class="h-4 w-4" aria-hidden="true"></i>
            </span>
          </span>
          <span class="min-w-0 flex-1 whitespace-normal break-words leading-normal">Newest first</span>
        </div>
        <div role="menuitemradio" aria-checked="false" class="relative flex min-w-0 cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm text-semantic-text-secondary outline-none transition-colors focus:bg-semantic-bg-ui focus:text-semantic-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50" data-state="unchecked">
          <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center text-semantic-primary">
            <span data-state="unchecked" data-indicator>
              <i data-lucide="check" class="h-4 w-4" aria-hidden="true"></i>
            </span>
          </span>
          <span class="min-w-0 flex-1 whitespace-normal break-words leading-normal">Oldest first</span>
        </div>
      </div>
    </div>
  </div>
</div>
```
