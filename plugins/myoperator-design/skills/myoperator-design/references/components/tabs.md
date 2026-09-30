# Tabs

Source: `src/components/ui/tabs.tsx` (Radix Tabs) · React: `<Tabs defaultValue><TabsList fullWidth><TabsTrigger value/></TabsList><TabsContent value/></Tabs>`

Underline tabs for switching between **sections of content** — Overview / Call journey / Notes, or a modal's Variables / Media.

**Not for filtering a list or table.** "All / Answered / Missed" above a table are **view tabs** (`patterns.md` → Filters), never these Tabs and never a row of Buttons. The one exception is the chat inbox list, which uses full-width Tabs with count badges (second example).

- List: `inline-flex w-full border-b border-semantic-border-layout`. `fullWidth` stretches triggers equally (`[&>*]:flex-1`).
- Trigger: **46px** tall, `py-3 px-3`, `text-sm font-medium` (renders 400), `gap-2`, 2px bottom border overlapping the list border (`-mb-px`).
  - Inactive `text-semantic-text-muted`, hover `text-semantic-text-secondary`, transparent underline.
  - Active `text-semantic-text-primary` + `border-semantic-primary` underline (dark, not turquoise).
  - Disabled 50% opacity.
- Content: `mt-2`.
- Counts: put a Badge `sm` inside the trigger after the label.

## Interactivity

Root has `data-tabs`; triggers and panels share `data-value`. Clicking a trigger sets `data-state="active"` on it and its panel, hides the other panels. Add one `role="tabpanel"` **per trigger**, each with the trigger's `data-value` (copy the panel element; inactive panels get `data-state="inactive" hidden`) — with a single panel, clicking another tab hides the content.

### Default (with a disabled tab)
```html
<div data-tabs>
  <div role="tablist" aria-orientation="horizontal" class="inline-flex items-center border-b border-solid border-semantic-border-layout w-full">
    <button type="button" role="tab" data-value="overview" aria-selected="true" data-state="active" class="inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 px-3 text-sm font-medium border-b-2 border-solid -mb-px cursor-pointer transition-colors text-semantic-text-muted border-transparent hover:text-semantic-text-secondary data-[state=active]:text-semantic-text-primary data-[state=active]:border-semantic-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">Overview</button>
    <button type="button" role="tab" data-value="journey" aria-selected="false" data-state="inactive" class="inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 px-3 text-sm font-medium border-b-2 border-solid -mb-px cursor-pointer transition-colors text-semantic-text-muted border-transparent hover:text-semantic-text-secondary data-[state=active]:text-semantic-text-primary data-[state=active]:border-semantic-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">Call journey</button>
    <button type="button" role="tab" data-value="notes" aria-selected="false" data-state="inactive" class="inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 px-3 text-sm font-medium border-b-2 border-solid -mb-px cursor-pointer transition-colors text-semantic-text-muted border-transparent hover:text-semantic-text-secondary data-[state=active]:text-semantic-text-primary data-[state=active]:border-semantic-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">Notes</button>
    <button type="button" role="tab" data-value="recordings" aria-selected="false" data-state="inactive" data-disabled disabled class="inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 px-3 text-sm font-medium border-b-2 border-solid -mb-px cursor-pointer transition-colors text-semantic-text-muted border-transparent hover:text-semantic-text-secondary data-[state=active]:text-semantic-text-primary data-[state=active]:border-semantic-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">Recordings</button>
  </div>
  <div data-state="active" role="tabpanel" data-value="overview" class="mt-2 focus-visible:outline-none">
    <p class="m-0 text-sm text-semantic-text-muted">Caller details, disposition and call summary.</p>
  </div>
</div>
```

### Full width with count badges (chat inbox list)
```html
<div data-tabs>
  <div role="tablist" aria-orientation="horizontal" class="inline-flex items-center border-b border-solid border-semantic-border-layout w-full [&>*]:flex-1">
    <button type="button" role="tab" data-value="open" aria-selected="true" data-state="active" class="inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 px-3 text-sm font-medium border-b-2 border-solid -mb-px cursor-pointer transition-colors text-semantic-text-muted border-transparent hover:text-semantic-text-secondary data-[state=active]:text-semantic-text-primary data-[state=active]:border-semantic-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
      Open
      <div class="inline-flex items-center justify-center rounded-full font-medium transition-colors whitespace-nowrap bg-semantic-bg-ui text-semantic-text-primary px-2 py-0.5 text-xs gap-1">12</div>
    </button>
    <button type="button" role="tab" data-value="closed" aria-selected="false" data-state="inactive" class="inline-flex items-center justify-center gap-2 whitespace-nowrap py-3 px-3 text-sm font-medium border-b-2 border-solid -mb-px cursor-pointer transition-colors text-semantic-text-muted border-transparent hover:text-semantic-text-secondary data-[state=active]:text-semantic-text-primary data-[state=active]:border-semantic-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
      Closed
      <div class="inline-flex items-center justify-center rounded-full font-medium transition-colors whitespace-nowrap bg-semantic-bg-ui text-semantic-text-primary px-2 py-0.5 text-xs gap-1">48</div>
    </button>
  </div>
</div>
```
