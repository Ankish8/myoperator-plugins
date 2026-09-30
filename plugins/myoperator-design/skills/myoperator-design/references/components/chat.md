# Chat primitives

Sources: `contact-list-item.tsx`, `date-divider.tsx`, `unread-separator.tsx`, `system-message.tsx`, `image-media.tsx`, `reply-quote.tsx`

Small building blocks used in inbox / conversation screens.

## ContactListItem

React: `<ContactListItem name subtitle trailing avatarSrc isSelected onClick>`
60px row, `px-3 py-3 gap-3`: Avatar `sm` (32px) + name (`text-sm font-medium leading-5` primary, truncates) over subtitle (`text-xs` muted) + trailing text (`text-xs font-medium` muted). Hover `bg-semantic-bg-hover`; selected `bg-semantic-bg-ui`.

```html
<div class="flex flex-col">
  <div role="button" class="flex items-center gap-3 px-3 py-3 cursor-pointer transition-colors hover:bg-semantic-bg-hover">
    <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-8 text-xs" aria-label="Aditi Kumar" role="img">
      <span aria-hidden="true">AK</span>
    </div>
    <div class="flex-1 flex items-center justify-between min-w-0">
      <div class="flex flex-col min-w-0">
        <span class="text-sm font-medium text-semantic-text-primary leading-5 truncate">Aditi Kumar</span>
        <span class="text-xs text-semantic-text-muted">+91 98765 43210</span>
      </div>
      <span class="text-xs font-medium text-semantic-text-muted shrink-0 ml-2">MY01</span>
    </div>
  </div>
  <div role="button" class="flex items-center gap-3 px-3 py-3 cursor-pointer transition-colors bg-semantic-bg-ui">
    <div class="relative inline-flex items-center justify-center rounded-full font-semibold select-none shrink-0 overflow-hidden bg-semantic-bg-grey text-semantic-text-muted size-8 text-xs" aria-label="Rahul Verma" role="img">
      <span aria-hidden="true">RV</span>
    </div>
    <div class="flex-1 flex items-center justify-between min-w-0">
      <div class="flex flex-col min-w-0">
        <span class="text-sm font-medium text-semantic-text-primary leading-5 truncate">Rahul Verma</span>
        <span class="text-xs text-semantic-text-muted">rahul@acme.in</span>
      </div>
      <span class="text-xs font-medium text-semantic-text-muted shrink-0 ml-2">WA</span>
    </div>
  </div>
</div>
```

## DateDivider

React: `<DateDivider>Today</DateDivider>` — 1px `bg-semantic-border-layout` lines either side of `text-xs` muted text, `gap-4 my-4`.

```html
<div class="flex items-center gap-4 my-4">
  <div class="flex-1 h-px bg-semantic-border-layout"></div>
  <span class="text-xs text-semantic-text-muted shrink-0">Today</span>
  <div class="flex-1 h-px bg-semantic-border-layout"></div>
</div>
```

## UnreadSeparator

React: `<UnreadSeparator count={3} />` — like DateDivider, the label sits on a `bg-semantic-bg-ui px-2` chip, `my-2`.

```html
<div class="flex items-center gap-4 my-2">
  <div class="flex-1 h-px bg-semantic-border-layout"></div>
  <span class="text-xs text-semantic-text-muted bg-semantic-bg-ui px-2 shrink-0">3 unread messages</span>
  <div class="flex-1 h-px bg-semantic-border-layout"></div>
</div>
```

## SystemMessage

React: `<SystemMessage>Assigned to **Aditi Kumar** by **Admin**</SystemMessage>` — centered 13px muted text; `**bold**` parts render as `text-semantic-text-link font-medium`.

```html
<div class="flex justify-center my-1">
  <span class="text-[13px] text-semantic-text-muted">Assigned to <span class="text-semantic-text-link font-medium">Aditi Kumar</span> by <span class="text-semantic-text-link font-medium">Admin</span></span>
</div>
```

## ImageMedia

React: `<ImageMedia src alt maxHeight>` — full-width image, top corners rounded (`rounded-t`), `object-cover`, max height 280px by default.

```html
<div class="relative">
  <img alt="Attachment" class="w-full rounded-t object-cover" src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22480%22%20height%3D%22320%22%3E%3Crect%20width%3D%22480%22%20height%3D%22320%22%20fill%3D%22%23C0C3CA%22%2F%3E%3Ccircle%20cx%3D%22240%22%20cy%3D%22160%22%20r%3D%2260%22%20fill%3D%22%23777E8D%22%2F%3E%3C%2Fsvg%3E" style="max-height: 200px">
</div>
```

## ReplyQuote

React: `<ReplyQuote sender message thumbnailUrl onClick>` — quoted message above a reply: 56px tall, `bg-semantic-bg-ui`, **3px turquoise-600 left border** (`--semantic-border-accent` #27ABB8), `rounded-sm px-4 py-1.5`, sender 14px semibold over a one-line 14px muted message; hover `bg-semantic-bg-hover`. With a thumbnail it becomes a row with a 44px image on the right.

```html
<div class="w-full min-w-0 bg-[var(--semantic-bg-ui,#F5F5F5)] border-l-[3px] border-solid border-[var(--semantic-border-accent,#27ABB8)] rounded-sm px-4 py-1.5 mb-2 h-[56px] overflow-hidden cursor-pointer hover:bg-[var(--semantic-bg-hover,#D5D7DA)] transition-colors text-left flex flex-col justify-start gap-0">
  <div class="min-w-0 flex flex-col justify-start w-full">
    <p class="m-0 min-w-0 shrink-0 truncate text-[14px] font-semibold leading-5 tracking-[0.014px] text-[var(--semantic-text-primary,#181D27)]">Aditi Kumar</p>
    <p class="m-0 min-w-0 line-clamp-1 text-[14px] leading-5 text-[var(--semantic-text-muted,#717680)]">Can you share the invoice for September?</p>
  </div>
</div>
```
