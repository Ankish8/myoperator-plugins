# NumberStepField

Source: `src/components/ui/number-step-field.tsx` · React: `<NumberStepField value onValueChange min max step suffix>`

Whole-number input with inline up/down steppers and a unit suffix (hours, minutes, retries).

- One bordered group, **42px** tall, `rounded-md` (6px), turquoise focus border + glow on the group.
- Number input `h-10 px-3` (native spinners hidden), stacked 12px `chevron-up`/`chevron-down` steppers (muted, hover primary, 40% opacity at the limit), suffix cell `bg-semantic-bg-ui text-sm text-semantic-text-secondary pl-3 pr-3.5`.

```html
<div class="flex min-w-0 w-full flex-1">
  <div class="flex min-w-0 flex-1 items-center rounded-md border border-solid border-semantic-border-input overflow-hidden focus-within:border-semantic-border-input-focus focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]">
    <input class="w-full text-base text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:text-base file:font-semibold file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] rounded-none border-0 h-10 min-w-0 flex-1 bg-semantic-bg-primary px-3 py-2 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" inputmode="decimal" step="1" min="0" max="9007199254740991" aria-label="Duration" type="number" value="2">
    <div class="flex flex-col items-center shrink-0 gap-0.5 bg-semantic-bg-primary pl-0.5 pr-1.5">
      <button type="button" aria-label="Increase value" class="flex items-center justify-center text-semantic-text-muted hover:text-semantic-text-primary transition-colors disabled:cursor-not-allowed disabled:opacity-40">
        <i data-lucide="chevron-up" class="size-3" aria-hidden="true"></i>
      </button>
      <button type="button" aria-label="Decrease value" class="flex items-center justify-center text-semantic-text-muted hover:text-semantic-text-primary transition-colors disabled:cursor-not-allowed disabled:opacity-40">
        <i data-lucide="chevron-down" class="size-3" aria-hidden="true"></i>
      </button>
    </div>
    <span class="inline-flex h-10 items-center pl-3 pr-3.5 shrink-0 bg-semantic-bg-ui text-sm text-semantic-text-secondary" aria-hidden="true">hours</span>
  </div>
</div>
```

### Labelled — wrap it in the standard field stack (label + control + helper, `gap-1`)
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Retry timeout</label>
  <div class="flex min-w-0 w-full flex-1">
    <div class="flex min-w-0 flex-1 items-center rounded-md border border-solid border-semantic-border-input overflow-hidden focus-within:border-semantic-border-input-focus focus-within:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]">
      <input class="w-full text-base text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:text-base file:font-semibold file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] rounded-none border-0 h-10 min-w-0 flex-1 bg-semantic-bg-primary px-3 py-2 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" inputmode="decimal" step="1" min="0" max="9007199254740991" aria-label="Retry timeout" type="number" value="3">
      <div class="flex flex-col items-center shrink-0 gap-0.5 bg-semantic-bg-primary pl-0.5 pr-1.5">
        <button type="button" aria-label="Increase value" class="flex items-center justify-center text-semantic-text-muted hover:text-semantic-text-primary transition-colors disabled:cursor-not-allowed disabled:opacity-40">
          <i data-lucide="chevron-up" class="size-3" aria-hidden="true"></i>
        </button>
        <button type="button" aria-label="Decrease value" class="flex items-center justify-center text-semantic-text-muted hover:text-semantic-text-primary transition-colors disabled:cursor-not-allowed disabled:opacity-40">
          <i data-lucide="chevron-down" class="size-3" aria-hidden="true"></i>
        </button>
      </div>
      <span class="inline-flex h-10 items-center pl-3 pr-3.5 shrink-0 bg-semantic-bg-ui text-sm text-semantic-text-secondary" aria-hidden="true">minutes</span>
    </div>
  </div>
  <span class="text-sm text-semantic-text-muted">How long to ring a department before escalating.</span>
</div>
```
