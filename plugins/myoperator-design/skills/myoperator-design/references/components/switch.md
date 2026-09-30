# Switch

Source: `src/components/ui/switch.tsx` (Radix Switch) · React: `<Switch checked onCheckedChange label labelPosition size disabled>`

Use for on/off settings — both settings that apply instantly and enable/disable options inside a settings form ("Record calls", "Retry failed deliveries"). Use a Checkbox for selecting items (table rows, options in a list), consent ("I agree…") and multi-choice lists.

| Size | Track | Thumb | Thumb travel |
|---|---|---|---|
| `sm` | 36×20 | 16px | 16px |
| `default` | 44×24 | 20px | 20px |
| `lg` | 56×28 | 24px | 28px |

- On: track `bg-semantic-primary` (#343E55). Off: track `bg-semantic-bg-grey` (#E9EAEB). Thumb white with `shadow-lg`. **Not turquoise.**
- State: `data-state="checked|unchecked"` on the button **and** the thumb span (`aria-checked` on the button). The starter's behaviours toggle all three on click.
- In tables use size `sm` (that is what `TableToggle` renders).
- Label: `text-sm font-semibold text-semantic-text-secondary`, `gap-2`.

### Off
```html
<button type="button" role="switch" aria-checked="false" data-state="unchecked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-6 w-11" aria-label="Toggle">
  <span data-state="unchecked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-5 w-5 data-[state=checked]:translate-x-5"></span>
</button>
```

### On
```html
<button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-6 w-11" aria-label="Toggle">
  <span data-state="checked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-5 w-5 data-[state=checked]:translate-x-5"></span>
</button>
```

### With label
```html
<label class="inline-flex items-center gap-2 cursor-pointer">
  <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-6 w-11">
    <span data-state="checked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-5 w-5 data-[state=checked]:translate-x-5"></span>
  </button>
  <span class="text-sm font-semibold text-semantic-text-secondary">Call recording</span>
</label>
```

### Sizes sm / default / lg (on)
```html
<div class="flex items-center gap-4">
  <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-5 w-9" aria-label="sm">
    <span data-state="checked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-4 w-4 data-[state=checked]:translate-x-4"></span>
  </button>
  <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-6 w-11" aria-label="default">
    <span data-state="checked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-5 w-5 data-[state=checked]:translate-x-5"></span>
  </button>
  <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-7 w-14" aria-label="lg">
    <span data-state="checked" class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-6 w-6 data-[state=checked]:translate-x-7"></span>
  </button>
</div>
```

### Disabled (off + on)
```html
<div class="flex items-center gap-4">
  <button type="button" role="switch" aria-checked="false" data-state="unchecked" data-disabled disabled value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-6 w-11" aria-label="off">
    <span data-state="unchecked" data-disabled class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-5 w-5 data-[state=checked]:translate-x-5"></span>
  </button>
  <button type="button" role="switch" aria-checked="true" data-state="checked" data-disabled disabled value="on" class="peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-solid border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-semantic-primary data-[state=unchecked]:bg-semantic-bg-grey h-6 w-11" aria-label="on">
    <span data-state="checked" data-disabled class="pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 h-5 w-5 data-[state=checked]:translate-x-5"></span>
  </button>
</div>
```
