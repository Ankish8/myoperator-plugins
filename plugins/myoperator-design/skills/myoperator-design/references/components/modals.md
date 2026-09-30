# Dialog, ConfirmationModal, DeleteConfirmationModal, FormModal

## Contents
- Which one
- Specs
- Interactivity
  - Dialog (default size) with a form field
  - Dialog lg
  - ConfirmationModal
  - ConfirmationModal — destructive
  - DeleteConfirmationModal (Delete stays disabled until the input reads exactly DELETE)
  - FormModal

Sources: `dialog.tsx` (Radix Dialog), `confirmation-modal.tsx`, `delete-confirmation-modal.tsx`, `form-modal.tsx`
React: `<Dialog open onOpenChange><DialogContent size hideCloseButton><DialogHeader><DialogTitle/><DialogDescription/></DialogHeader>…<DialogFooter/></DialogContent></Dialog>` · `<ConfirmationModal open title description variant confirmButtonText onConfirm>` · `<DeleteConfirmationModal open itemName confirmText onConfirm>` · `<FormModal open title description onSave saveButtonText size>`

## Which one

| Need | Use |
|---|---|
| Yes/no decision, nothing to type | **ConfirmationModal** (`default`, or `destructive` for Archive/Remove) |
| Permanent deletion | **DeleteConfirmationModal** — user must type `DELETE` before the red button enables |
| A short form (add/edit a thing) | **FormModal** — fields in a `grid gap-4 py-4`, Cancel + Save |
| Anything else | **Dialog** with your own body |

## Specs

- Overlay: `fixed inset-0 z-[9999] bg-black/50`. Content: `fixed` centered, **`z-[9999]`** (the host app's navbar sits at z-index 1000+ — never use `z-50`).
- Content: white (`bg-background`), `border`, **`rounded-lg`** (8px), **`p-6`**, `gap-4` between header/body/footer, `shadow-lg`, max height `100vh - 2rem` (scrolls).
- Widths: `sm` 384px (`max-w-sm` — all three modal presets use it), `default` 512px, `lg` 672px, `xl` 896px, `full` = viewport − 2rem.
- Title: `text-lg font-semibold leading-none tracking-tight` (18px). Description: `text-sm text-muted-foreground`.
- Close: 16px `x` at `top-4 right-4`, 70% opacity.
- Footer: right-aligned; Cancel (outline) **then** the primary/destructive action; `gap-2` (stacked full-width, reversed, on mobile).
- Titles are questions for confirmations ("Disable webhook?"); the description says what happens; the confirm button repeats the verb ("Disable", "Archive") — not "Yes/OK".

## Interactivity

Everything sits in a `<div data-dialog>` wrapper. Give it an `id` and `hidden` to start closed; open with any element carrying `data-dialog-open="#that-id"`. The close `x`, Cancel buttons (`data-dialog-close`) and Escape close it.

### Dialog (default size) with a form field
```html
<div data-dialog>
  <div data-state="open" class="fixed inset-0 z-[9999] bg-black/50 overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" aria-hidden="true"></div>
  <div role="dialog" data-state="open" class="fixed left-[50%] top-[50%] z-[9999] flex flex-col translate-x-[-50%] translate-y-[-50%] gap-4 border border-solid border-border bg-background p-6 shadow-lg duration-200 max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg w-full max-w-lg">
    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
      <h2 class="text-lg font-semibold leading-none tracking-tight text-foreground">Edit webhook</h2>
      <p class="m-0 text-sm text-muted-foreground">Changes apply to new events only.</p>
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-sm font-semibold text-semantic-text-secondary">Webhook name</label>
      <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4 py-2 text-base file:text-base" aria-invalid="false" value="CRM sync">
    </div>
    <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4" data-dialog-close>Cancel</button>
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">Save</button>
    </div>
    <button type="button" data-dialog-close class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <i data-lucide="x" class="h-4 w-4" aria-hidden="true"></i>
      <span class="sr-only">Close</span>
    </button>
  </div>
</div>
```

### Dialog `lg`
```html
<div data-dialog>
  <div data-state="open" class="fixed inset-0 z-[9999] bg-black/50 overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" aria-hidden="true"></div>
  <div role="dialog" data-state="open" class="fixed left-[50%] top-[50%] z-[9999] flex flex-col translate-x-[-50%] translate-y-[-50%] gap-4 border border-solid border-border bg-background p-6 shadow-lg duration-200 max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg w-full max-w-2xl">
    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
      <h2 class="text-lg font-semibold leading-none tracking-tight text-foreground">Call details</h2>
      <p class="m-0 text-sm text-muted-foreground">Inbound call from +91 98765 43210</p>
    </div>
    <p class="m-0 text-sm text-semantic-text-muted">Recording and notes appear here.</p>
    <button type="button" data-dialog-close class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <i data-lucide="x" class="h-4 w-4" aria-hidden="true"></i>
      <span class="sr-only">Close</span>
    </button>
  </div>
</div>
```

### ConfirmationModal
```html
<div data-dialog>
  <div data-state="open" class="fixed inset-0 z-[9999] bg-black/50 overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" aria-hidden="true"></div>
  <div role="dialog" data-state="open" class="fixed left-[50%] top-[50%] z-[9999] flex flex-col translate-x-[-50%] translate-y-[-50%] gap-4 border border-solid border-border bg-background p-6 shadow-lg duration-200 max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg w-full max-w-sm">
    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
      <h2 class="text-lg font-semibold leading-none tracking-tight text-foreground">Disable webhook?</h2>
      <p class="m-0 text-sm text-muted-foreground">Events will stop being sent until you enable it again.</p>
    </div>
    <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0">
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4" data-dialog-close>Cancel</button>
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">Disable</button>
    </div>
    <button type="button" data-dialog-close class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <i data-lucide="x" class="h-4 w-4" aria-hidden="true"></i>
      <span class="sr-only">Close</span>
    </button>
  </div>
</div>
```

### ConfirmationModal — destructive
```html
<div data-dialog>
  <div data-state="open" class="fixed inset-0 z-[9999] bg-black/50 overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" aria-hidden="true"></div>
  <div role="dialog" data-state="open" class="fixed left-[50%] top-[50%] z-[9999] flex flex-col translate-x-[-50%] translate-y-[-50%] gap-4 border border-solid border-border bg-background p-6 shadow-lg duration-200 max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg w-full max-w-sm">
    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
      <h2 class="text-lg font-semibold leading-none tracking-tight text-foreground">Archive this IVR?</h2>
      <p class="m-0 text-sm text-muted-foreground">Callers will hear the fallback message.</p>
    </div>
    <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0">
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4" data-dialog-close>Cancel</button>
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-error-primary text-semantic-text-inverted hover:bg-semantic-error-hover h-9 min-w-20 px-4 [&_svg]:size-4">Archive</button>
    </div>
    <button type="button" data-dialog-close class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <i data-lucide="x" class="h-4 w-4" aria-hidden="true"></i>
      <span class="sr-only">Close</span>
    </button>
  </div>
</div>
```

### DeleteConfirmationModal (Delete stays disabled until the input reads exactly `DELETE`)
```html
<div data-dialog>
  <div data-state="open" class="fixed inset-0 z-[9999] bg-black/50 overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" aria-hidden="true"></div>
  <div role="dialog" data-state="open" class="fixed left-[50%] top-[50%] z-[9999] flex flex-col translate-x-[-50%] translate-y-[-50%] gap-4 border border-solid border-border bg-background p-6 shadow-lg duration-200 max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg w-full max-w-sm">
    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
      <h2 class="text-lg font-semibold leading-none tracking-tight text-foreground">Are you sure you want to delete this webhook?</h2>
      <p class="m-0 text-sm text-muted-foreground sr-only">Delete confirmation dialog - this action cannot be undone</p>
    </div>
    <div class="grid gap-2 py-4">
      <label class="text-sm font-semibold text-semantic-text-secondary">Enter "DELETE" in uppercase to confirm</label>
      <input class="h-[42px] w-full rounded bg-semantic-bg-primary px-4 py-2 text-base text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:text-base file:font-semibold file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]" placeholder="DELETE" autocomplete="off" value>
    </div>
    <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0">
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4" data-dialog-close>Cancel</button>
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-error-primary text-semantic-text-inverted hover:bg-semantic-error-hover h-9 min-w-20 px-4 [&_svg]:size-4" disabled>Delete</button>
    </div>
    <button type="button" data-dialog-close class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <i data-lucide="x" class="h-4 w-4" aria-hidden="true"></i>
      <span class="sr-only">Close</span>
    </button>
  </div>
</div>
```

### FormModal
```html
<div data-dialog>
  <div data-state="open" class="fixed inset-0 z-[9999] bg-black/50 overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" aria-hidden="true"></div>
  <div role="dialog" data-state="open" class="fixed left-[50%] top-[50%] z-[9999] flex flex-col translate-x-[-50%] translate-y-[-50%] gap-4 border border-solid border-border bg-background p-6 shadow-lg duration-200 max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg w-full max-w-sm">
    <div class="flex flex-col space-y-1.5 text-center sm:text-left">
      <h2 class="text-lg font-semibold leading-none tracking-tight text-foreground">Add contact</h2>
      <p class="m-0 text-sm text-muted-foreground">Saved to your shared address book.</p>
    </div>
    <div class="grid gap-4 py-4">
      <div class="flex flex-col gap-1">
        <label class="text-sm font-semibold text-semantic-text-secondary">Full name<span class="text-semantic-error-primary ml-0.5">*</span></label>
        <input class="w-full rounded bg-semantic-bg-primary text-semantic-text-primary outline-none transition-all file:border-0 file:bg-transparent file:font-medium file:text-semantic-text-primary placeholder:text-semantic-text-placeholder disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] border border-solid border-semantic-border-input focus:outline-none focus:border-semantic-border-input-focus focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)] h-[42px] px-4 py-2 text-base file:text-base" aria-invalid="false" placeholder="e.g. Aditi Kumar">
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-sm font-semibold text-semantic-text-secondary">Department</label>
        <button type="button" role="combobox" aria-expanded="false" data-state="closed" data-placeholder class="flex h-[42px] w-full items-center justify-between gap-2 rounded bg-[var(--semantic-bg-primary,#FFFFFF)] px-4 py-2 text-left text-base text-[var(--semantic-text-primary,#181D27)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-neutral-50)] [&>span]:min-w-0 [&>span]:flex-1 [&>span]:truncate border border-solid border-[var(--semantic-border-input,#E9EAEB)] focus:outline-none focus:border-[var(--semantic-border-input-focus,#2BBCCA)] focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]" aria-invalid="false">
          <span>Select department</span>
          <i data-lucide="chevron-down" class="size-4 shrink-0 text-[var(--semantic-text-muted,#717680)] opacity-70" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0">
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-solid border-semantic-border-layout bg-semantic-bg-primary text-semantic-text-secondary hover:bg-semantic-primary-surface h-9 min-w-20 px-4 [&_svg]:size-4" data-dialog-close>Cancel</button>
      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-semantic-primary text-semantic-text-inverted hover:bg-semantic-primary-hover h-9 min-w-20 px-4 [&_svg]:size-4">Save</button>
    </div>
    <button type="button" data-dialog-close class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
      <i data-lucide="x" class="h-4 w-4" aria-hidden="true"></i>
      <span class="sr-only">Close</span>
    </button>
  </div>
</div>
```
