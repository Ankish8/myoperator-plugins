# Panel

Source: `src/components/ui/panel.tsx` · React: `<Panel open title onClose footer header size>`

Collapsible right-side panel for details and edit forms, pushed in beside the main content (not an overlay).

- `aside` with `border-l border-semantic-border-layout bg-semantic-bg-primary`, width **320px** (`sm` 280, `lg` 400); collapsed = `w-0`.
- Header: **56px** (`h-14`), `px-4 gap-3 border-b`, title `text-base font-semibold`, close = ghost `icon` button with a 20px `x`.
- Body scrolls (`flex-1 overflow-y-auto`); give it its own padding (`p-4`, fields `gap-4`, TextField `sm`).
- Footer: `px-4 py-3 gap-3 border-t`; buttons usually `flex-1` (Cancel outline + Save).
- Place it as the last child of a `flex` row with the main area.

```html
<div class="flex h-[360px] border border-solid border-semantic-border-layout">
  <div class="flex-1 bg-semantic-bg-ui"></div>
  <aside class="border-l border-solid border-semantic-border-layout bg-semantic-bg-primary flex flex-col overflow-hidden transition-all duration-300 ease-in-out shrink-0 w-[320px]" aria-label="Contact details" aria-hidden="false">
    <div class="w-[320px] flex flex-col h-full outline-none">
      <div class="flex items-center gap-3 px-4 h-14 border-b border-solid border-semantic-border-layout shrink-0">
        <span class="flex-1 text-base font-semibold text-semantic-text-primary truncate">Contact details</span>
        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 w-9 rounded-md" aria-label="Close">
          <i data-lucide="x" class="size-5" aria-hidden="true"></i>
        </button>
      </div>
      <div class="flex-1 overflow-y-auto">
        <div class="flex flex-col gap-4 p-4">
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-semantic-text-secondary">Name</label>
            <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-9 px-3 py-1.5 text-sm file:text-sm" aria-invalid="false" value="Aditi Kumar">
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-semantic-text-secondary">Phone</label>
            <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-9 px-3 py-1.5 text-sm file:text-sm" aria-invalid="false" value="+91 98765 43210">
          </div>
        </div>
      </div>
      <div class="flex gap-3 px-4 py-3 shrink-0 border-t border-solid border-semantic-border-layout">
        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4 flex-1">Cancel</button>
        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4 flex-1">Save</button>
      </div>
    </div>
  </aside>
</div>
```
