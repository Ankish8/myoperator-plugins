# ReadableField

Source: `src/components/ui/readable-field.tsx` · React: `<ReadableField label value secret helperText headerAction={{label,onClick}}>`

Read-only value with copy-to-clipboard — API base URLs, keys, IDs. Use this instead of a disabled input.

- Label row: `text-sm font-semibold text-semantic-text-secondary`; optional header action on the right (`text-sm font-semibold text-semantic-text-muted`, hover primary) — e.g. "Regenerate".
- Value box: **42px**, `bg-semantic-bg-ui`, `border-semantic-border-layout`, `rounded`, `pl-4 pr-2.5`, value `text-base` truncated.
- Icons (18px, muted, hover primary): `eye`/`eye-off` toggle for `secret` values (masked as `••••••••••••••••••••`), then `copy` (turns into a green `check` for 2s after copying).
- Helper: `text-sm text-semantic-text-muted`.

### Default
```html
<div class="flex flex-col gap-1">
  <div class="flex items-start justify-between">
    <span class="text-sm font-semibold text-semantic-text-secondary">Base URL</span>
  </div>
  <div class="flex h-[42px] items-center justify-between rounded border border-solid border-semantic-border-layout bg-semantic-bg-ui pl-4 pr-2.5 py-2.5">
    <span class="text-base text-semantic-text-primary tracking-[0.08px] truncate">https://api.myoperator.co/v3/voice/gateway</span>
    <div class="flex items-center gap-4 shrink-0">
      <button type="button" class="rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-text-primary text-semantic-text-muted hover:text-semantic-text-primary" aria-label="Copy to clipboard">
        <i data-lucide="copy" class="size-[18px]" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>
```

### Secret + header action + helper
```html
<div class="flex flex-col gap-1">
  <div class="flex items-start justify-between">
    <span class="text-sm font-semibold text-semantic-text-secondary">Secret key</span>
    <button type="button" class="text-sm font-semibold text-semantic-text-muted tracking-[0.014px] hover:text-semantic-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-text-primary rounded transition-colors">Regenerate</button>
  </div>
  <div class="flex h-[42px] items-center justify-between rounded border border-solid border-semantic-border-layout bg-semantic-bg-ui pl-4 pr-2.5 py-2.5">
    <span class="text-base text-semantic-text-primary tracking-[0.08px] truncate">••••••••••••••••••••</span>
    <div class="flex items-center gap-4 shrink-0">
      <button type="button" class="text-semantic-text-muted hover:text-semantic-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-text-primary rounded transition-colors" aria-label="Show value">
        <i data-lucide="eye" class="size-[18px]" aria-hidden="true"></i>
      </button>
      <button type="button" class="rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-semantic-text-primary text-semantic-text-muted hover:text-semantic-text-primary" aria-label="Copy to clipboard">
        <i data-lucide="copy" class="size-[18px]" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <p class="m-0 text-sm text-semantic-text-muted">Used to sign webhook payloads.</p>
</div>
```
