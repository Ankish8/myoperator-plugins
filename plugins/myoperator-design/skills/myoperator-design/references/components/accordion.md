# Accordion

Source: `src/components/ui/accordion.tsx` · React: `<Accordion type="multiple|single" variant="default|bordered" defaultValue><AccordionItem value disabled><AccordionTrigger showChevron/><AccordionContent/></AccordionItem></Accordion>`

- `default`: no borders; trigger **48px** (`py-3`), full-width, 16px `chevron-down` (muted) that rotates 180° when open. Content `pb-4`.
- `bordered`: `rounded-lg border divide-y` (8px radius, dividers between items); trigger **56px** (`p-4`), hover `bg-[var(--color-neutral-50)]`; content `px-4`.
- Open/close animates height (`transition-all duration-300`); closed content has `height: 0px`.
- Disabled item: 50% opacity.

## Interactivity

Root has `data-accordion="multiple"` (or `"single"` to close siblings). Clicking a trigger toggles `aria-expanded`, the item's `data-state`, the chevron's `rotate-180`, and the content height.

### Default (first item open)
```html
<div data-accordion="multiple" class="w-full">
  <div data-state="open" class>
    <button type="button" aria-expanded="true" class="flex w-full items-center justify-between text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 py-3">
      <span class="flex-1">How are calls recorded?</span>
      <i data-lucide="chevron-down" class="h-4 w-4 shrink-0 text-semantic-text-muted transition-transform duration-300 rotate-180" aria-hidden="true"></i>
    </button>
    <div class="overflow-hidden transition-all duration-300 ease-in-out" aria-hidden="false" style="height: 40px">
      <div class="pb-4">Recording starts when the call is bridged.</div>
    </div>
  </div>
  <div data-state="closed" class>
    <button type="button" aria-expanded="false" class="flex w-full items-center justify-between text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 py-3">
      <span class="flex-1">Where are recordings stored?</span>
      <i data-lucide="chevron-down" class="h-4 w-4 shrink-0 text-semantic-text-muted transition-transform duration-300" aria-hidden="true"></i>
    </button>
    <div class="overflow-hidden transition-all duration-300 ease-in-out" aria-hidden="true" style="height: 0px">
      <div class="pb-4">In your account for 90 days.</div>
    </div>
  </div>
</div>
```

### Bordered (first open, last disabled)
```html
<div data-accordion="multiple" class="w-full border border-solid border-semantic-border-layout rounded-lg divide-y divide-semantic-border-layout">
  <div data-state="open" class>
    <button type="button" aria-expanded="true" class="flex w-full items-center justify-between text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 p-4 hover:bg-[var(--color-neutral-50)]">
      <span class="flex-1">Business hours</span>
      <i data-lucide="chevron-down" class="h-4 w-4 shrink-0 text-semantic-text-muted transition-transform duration-300 rotate-180" aria-hidden="true"></i>
    </button>
    <div class="overflow-hidden transition-all duration-300 ease-in-out px-4" aria-hidden="false" style="height: 40px">
      <div class="pb-4">Mon–Fri, 9:00 AM – 6:00 PM IST</div>
    </div>
  </div>
  <div data-state="closed" class>
    <button type="button" aria-expanded="false" class="flex w-full items-center justify-between text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 p-4 hover:bg-[var(--color-neutral-50)]">
      <span class="flex-1">Holidays</span>
      <i data-lucide="chevron-down" class="h-4 w-4 shrink-0 text-semantic-text-muted transition-transform duration-300" aria-hidden="true"></i>
    </button>
    <div class="overflow-hidden transition-all duration-300 ease-in-out px-4" aria-hidden="true" style="height: 0px">
      <div class="pb-4">12 holidays configured</div>
    </div>
  </div>
  <div data-state="closed" class>
    <button type="button" aria-expanded="false" disabled class="flex w-full items-center justify-between text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 p-4 hover:bg-[var(--color-neutral-50)]">
      <span class="flex-1">After-hours routing</span>
      <i data-lucide="chevron-down" class="h-4 w-4 shrink-0 text-semantic-text-muted transition-transform duration-300" aria-hidden="true"></i>
    </button>
    <div class="overflow-hidden transition-all duration-300 ease-in-out px-4" aria-hidden="true" style="height: 0px">
      <div class="pb-4">Voicemail</div>
    </div>
  </div>
</div>
```
