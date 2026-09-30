# Tooltip

Source: `src/components/ui/tooltip.tsx` (Radix Tooltip) · React: `<TooltipProvider><Tooltip><TooltipTrigger asChild/><TooltipContent side>text<TooltipArrow/></TooltipContent></Tooltip></TooltipProvider>`

Short hints for icon buttons and truncated text. Not for essential information.

- Dark: `bg-semantic-primary` (#343E55), `text-semantic-text-inverted`, **`text-xs`** (12px), `px-3 py-1.5`, `rounded-md` (6px), `shadow-md`, `max-w-xs` (wraps beyond 320px), `z-[9999]`.
- Default side is top, centered on the trigger, 4px gap plus a 10×5px arrow (`fill-semantic-primary`) — 9px from trigger to box.
- On touch devices it opens on tap.

## Interactivity

Wrapper `data-tooltip`, content `data-tooltip-content`. Add `hidden` to the content to start hidden; the starter shows it on hover/focus of the wrapper.

### Open, with arrow (above an icon button)
```html
<div class="relative inline-block" data-tooltip>
  <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-semantic-text-muted hover:bg-semantic-bg-ui hover:text-semantic-text-primary h-9 w-9 rounded-md cursor-pointer" aria-label="Info" data-state="instant-open">
    <i data-lucide="info" aria-hidden="true"></i>
  </button>
  <div class="absolute bottom-full left-1/2 z-[9999] mb-[9px] w-max max-w-xs -translate-x-1/2 text-start" data-tooltip-content>
    <div data-side="top" data-state="instant-open" class="z-[9999] pointer-events-none data-[state=delayed-open]:pointer-events-auto data-[state=instant-open]:pointer-events-auto rounded-md bg-semantic-primary px-3 py-1.5 text-xs text-semantic-text-inverted shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-w-xs whitespace-normal">Calls are recorded for 90 days<span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full"><svg class="fill-semantic-primary" width="10" height="5" viewBox="0 0 30 10" preserveAspectRatio="none" style="display: block"><polygon points="0,0 30,0 15,10"></polygon></svg></span></div>
  </div>
</div>
```
