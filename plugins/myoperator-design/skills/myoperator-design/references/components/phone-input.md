# PhoneInput

Source: `src/components/ui/phone-input.tsx` · React: `<PhoneInput countryIso countryCode placeholder validation phoneMaxNumber onCountryClick>`

Phone number field with a country-code prefix. Digits only.

- **42px** group, `rounded`, `border-semantic-border-input`; focus: turquoise border + 1px turquoise ring at 15%.
- Prefix: flag image 20×15 + dial code (`text-base text-semantic-text-secondary`) + 12px `chevron-down` (muted), `pl-3 pr-2 gap-1.5`; then a 1×20px `bg-semantic-border-layout` divider; then the input (`px-3 text-base`).
- Validation message below: `text-sm text-semantic-error-primary`, 6px gap; border turns error red.
- Flags come from `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/<iso>.svg` (lowercase ISO code).

### Default (India, +91)
```html
<div class="flex items-center border h-[42px] border-solid rounded transition-all border-semantic-border-input focus-within:outline-none focus-within:border-semantic-border-input-focus focus-within:ring-1 focus-within:ring-semantic-border-input-focus/15">
  <div class="flex h-full items-center gap-1.5 pl-3 pr-2 shrink-0">
    <img class="!w-5 !h-[15px] object-cover shrink-0" title="IN" aria-label="IN" src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/in.svg" style="display: inline-block; width: 1em; height: 1em; vertical-align: middle">
    <span class="text-base text-semantic-text-secondary">+91</span>
    <i data-lucide="chevron-down" class="size-3 text-semantic-text-muted" aria-hidden="true"></i>
  </div>
  <div class="w-px h-5 bg-semantic-border-layout shrink-0"></div>
  <input inputmode="numeric" pattern="[0-9]*" aria-invalid="false" class="flex-1 h-full px-3 text-base text-semantic-text-primary placeholder:text-semantic-text-placeholder outline-none bg-transparent disabled:cursor-not-allowed" placeholder="Enter phone number" type="tel">
</div>
```

### Validation error
```html
<div class="flex flex-col gap-1.5">
  <div class="flex items-center border h-[42px] border-solid rounded transition-all border-semantic-error-primary focus-within:outline-none focus-within:border-semantic-error-primary focus-within:ring-1 focus-within:ring-semantic-error-primary/15">
    <div class="flex h-full items-center gap-1.5 pl-3 pr-2 shrink-0">
      <img class="!w-5 !h-[15px] object-cover shrink-0" title="IN" aria-label="IN" src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/in.svg" style="display: inline-block; width: 1em; height: 1em; vertical-align: middle">
      <span class="text-base text-semantic-text-secondary">+91</span>
      <i data-lucide="chevron-down" class="size-3 text-semantic-text-muted" aria-hidden="true"></i>
    </div>
    <div class="w-px h-5 bg-semantic-border-layout shrink-0"></div>
    <input inputmode="numeric" pattern="[0-9]*" aria-invalid="true" class="flex-1 h-full px-3 text-base text-semantic-text-primary placeholder:text-semantic-text-placeholder outline-none bg-transparent disabled:cursor-not-allowed" type="tel" value="98765">
  </div>
  <p class="m-0 text-sm text-semantic-error-primary">Enter a valid 10-digit number</p>
</div>
```

### Labelled — PhoneInput has no label of its own; wrap it in the standard field stack (label + control + helper, `gap-1`)
```html
<div class="flex flex-col gap-1">
  <label class="text-sm font-semibold text-semantic-text-secondary">Escalation number<span class="text-semantic-error-primary ml-0.5">*</span></label>
  <div class="flex items-center border h-[42px] border-solid rounded transition-all border-semantic-border-input focus-within:outline-none focus-within:border-semantic-border-input-focus focus-within:ring-1 focus-within:ring-semantic-border-input-focus/15">
    <div class="flex h-full items-center gap-1.5 pl-3 pr-2 shrink-0">
      <img class="!w-5 !h-[15px] object-cover shrink-0" title="IN" aria-label="IN" src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/in.svg" style="display: inline-block; width: 1em; height: 1em; vertical-align: middle">
      <span class="text-base text-semantic-text-secondary">+91</span>
      <i data-lucide="chevron-down" class="size-3 text-semantic-text-muted" aria-hidden="true"></i>
    </div>
    <div class="w-px h-5 bg-semantic-border-layout shrink-0"></div>
    <input inputmode="numeric" pattern="[0-9]*" aria-invalid="false" class="flex-1 h-full px-3 text-base text-semantic-text-primary placeholder:text-semantic-text-placeholder outline-none bg-transparent disabled:cursor-not-allowed" placeholder="Enter phone number" type="tel">
  </div>
  <span class="text-sm text-semantic-text-muted">Calls go here when no department answers.</span>
</div>
```
