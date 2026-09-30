---
name: myoperator-design
description: This skill should be used when the user asks to design, mock up, prototype or build a screen, page, dashboard, form, modal or component "in myOperator style", "with the myOperator design system", "using myoperator-ui" / "MyOperator UI", or for MyOperator products (call logs, IVR, WhatsApp, contacts, webhooks, APIs, billing, bots, inbox). It reproduces the production myoperator-ui React components exactly — same classes, tokens, typography, icons and states — as a single HTML file (default) or React/Tailwind code.
compatibility: HTML output loads Tailwind CSS 3.4, the Source Sans Pro font and Lucide icons from public CDNs, so viewing a generated screen needs internet access.
metadata:
  version: "2.0.0"
  mirrors: "myoperator-ui 0.0.459"
---

# myOperator Design System

This skill is an exact replica of **myoperator-ui v0.0.459** — the component library MyOperator ships to production (45 core components in `src/components/ui`). Every snippet in `references/components/` is the real component's rendered markup with its **verbatim Tailwind classes**, verified pixel-identical against the real React component (computed styles, sizes and positions of 1,600+ elements across 162 cases).

The job is to **assemble** screens from these parts — not to restyle, simplify or reinvent them.

## Workflow

1. **Choose the output.** Default: one self-contained `.html` file (opens in any browser). React/JSX only when asked or when working inside a React codebase — then read `references/react.md`.
2. **Start from the starter.** Copy `assets/starter.html` to the output path with a file copy (`cp`) — do not retype or trim it — put the screen inside `<body>` in place of `<!-- SCREEN CONTENT GOES HERE -->`, and set the `<title>`. It carries the tokens, the Tailwind theme (via Tailwind's CDN runtime), the Source Sans Pro font, Lucide icons, and a small behaviours script. Without it nothing renders correctly. (If files cannot be copied, reproduce it exactly.)
3. **Plan the screen.** Map every piece of UI to a component in the index below; lay the page out with `references/patterns.md` (app shell, list page, form page).
4. **For every component, open its reference file and copy the markup verbatim.** Change only text, icon names (`data-lucide`), the number of rows/options, and state (`data-state`, `aria-*`, `disabled`, `hidden`). Never add, drop or "tidy" classes on component markup.
5. **Write only layout yourself** — wrappers with flex/grid/gap/padding/width. Any color, radius, shadow or font size in that layout comes from `references/foundations.md`.
6. **Run the checklist** at the end before handing over.

## Component index

| Need | Component | Reference |
|---|---|---|
| Actions | Button (default, outline, secondary, ghost, link, destructive, success, dashed; sm/lg/icon) | `references/components/button.md` |
| Status label | Badge (pill) | `references/components/badge-and-tag.md` |
| Category / event / filter chip, "NEW"/"Beta" | Tag, TagGroup (rectangle) | `references/components/badge-and-tag.md` |
| Text styles | Typography scale | `references/components/typography.md` |
| User / contact picture or initials | Avatar | `references/components/avatar.md` |
| Labelled text input (icons, prefix/suffix, clear, count) | TextField · bare control: Input | `references/components/text-field.md` |
| Multi-line text | Textarea | `references/components/textarea.md` |
| Pick one option | SelectField · bare: Select | `references/components/select.md` |
| Pick several options | MultiSelect | `references/components/multi-select.md` |
| Pick or type a new value | CreatableSelect, CreatableMultiSelect | `references/components/creatable-select.md` |
| Search a list of numbers and pick one | SearchFilter | `references/components/search-filter.md` |
| Boolean in a form | Checkbox | `references/components/checkbox.md` |
| Instant on/off setting | Switch | `references/components/switch.md` |
| Read-only value with copy (keys, URLs) | ReadableField | `references/components/readable-field.md` |
| Number with steppers + unit | NumberStepField | `references/components/number-step-field.md` |
| Phone number with country code | PhoneInput | `references/components/phone-input.md` |
| Date + time | DateTimePicker | `references/components/date-time-picker.md` |
| Date range with presets | DateRangePicker | `references/components/date-range-picker.md` |
| Tabular data (+ loading, empty, toggles, row actions) | Table | `references/components/table.md` |
| Paging | Pagination, PaginationWidget | `references/components/pagination.md` |
| Switch views in a page | Tabs | `references/components/tabs.md` |
| Collapsible sections / FAQ | Accordion | `references/components/accordion.md` |
| Page title bar | PageHeader | `references/components/page-header.md` |
| Side details/edit panel | Panel | `references/components/panel.md` |
| Modal window, confirm, delete-confirm, form modal | Dialog, ConfirmationModal, DeleteConfirmationModal, FormModal | `references/components/modals.md` |
| Action menu (⋮ / More) | DropdownMenu | `references/components/dropdown-menu.md` |
| Hint on hover | Tooltip | `references/components/tooltip.md` |
| Inline banner | Alert | `references/components/alert.md` |
| Transient feedback | Toast | `references/components/toast.md` |
| Loading | Spinner, Skeleton, BouncingLoader | `references/components/loading.md` |
| Nothing to show yet | EmptyState | `references/components/empty-state.md` |
| Chat building blocks | ContactListItem, DateDivider, UnreadSeparator, SystemMessage, ImageMedia, ReplyQuote | `references/components/chat.md` |

Not in the library (compose from tokens + patterns): app sidebar/top bar (`patterns.md`), cards, charts, steppers/wizards, breadcrumbs, file upload zones. Keep them visually consistent with the components (4px radius, `border-semantic-border-layout`, 14–16px text).

## Foundations at a glance (details: `references/foundations.md`)

- **Font** Source Sans Pro 400/600 only. Body/controls 16px, dense UI 14px, meta 12px. Labels `text-sm font-semibold text-semantic-text-secondary`; helper `text-sm text-semantic-text-muted`.
- **Colors** via semantic classes only: `semantic-primary` #343E55 (primary actions, checked, active), `semantic-bg-ui` #F5F5F5 (subtle fills, table header), `semantic-bg-grey` #E9EAEB (app canvas), `semantic-border-layout` #E9EAEB (every border), text `-primary` #181D27 / `-secondary` #343E55 / `-muted` #717680, `semantic-text-link` #4275D6. Status: `semantic-{success|warning|error|info}-{primary|surface|border|text}`.
- **Turquoise** (`semantic-brand` #2BBCCA) only for input focus borders, selected-option checkmarks, the logo tile and the reply-quote accent — never for buttons, badges, tags, switches, tabs or charts.
- **Heights** buttons 36 (sm 32, lg 40) · inputs, selects, pickers **42** · table head 48 · tabs 46.
- **Radius** 4px (`rounded`/`rounded-sm`) controls and cards · 6px (`rounded-md`) menus, tooltips, icon buttons · 8px (`rounded-lg`) dialogs, tables, popovers · pills only for badges/avatars/switches.
- **Shadows** `shadow-md` popovers/menus/toasts · `shadow-lg` dialogs · cards: border, no shadow.
- **Overlays** always `z-[9999]`.
- **Icons** Lucide: `<i data-lucide="name" class="size-4"></i>` (16px default).

## Non-negotiables

1. Copy component markup verbatim from the reference files; never approximate a component that exists.
2. No hex/rgb colors, no Tailwind palette colors (`bg-gray-100`, `text-blue-600`, …) — semantic classes or `var(--semantic-…)` only.
3. Don't change the starter's `<head>`, and don't load other fonts, weights or Tailwind versions.
4. Badge = status pill; Tag = category rectangle. One `default` (primary) button per view; Cancel is `outline` and sits left of the primary action.
5. Every `<p>` has `m-0`. Every overlay has `z-[9999]`. Icon-only buttons have `aria-label`.
6. Realistic MyOperator copy (Indian names and numbers, call/WhatsApp/IVR/webhook domain) — no lorem ipsum.

## Interactivity (HTML output)

The starter's behaviours script makes copied markup clickable with no extra code: switches, checkboxes, tabs (`data-tabs` + `data-value`; give every tab its own `role="tabpanel"`), accordions (`data-accordion`), popovers — select, multi-select, dropdown, date pickers (`data-popover`, `data-popover-trigger`, `data-popover-content`), dialogs (`data-dialog`, `data-dialog-open="#id"`, `data-dialog-close`), tooltips (`data-tooltip`), and removable alerts/tags/toasts (`data-dismiss`). Reference snippets show open states; add `hidden` to a popover/dialog/tooltip content element to start it closed. Anything else: plain `<script>` at the end of `<body>`.

## Checklist before finishing

- [ ] File starts from an unmodified copy of `assets/starter.html` (only `<title>` and `<body>` changed).
- [ ] Every component came from its reference file; class strings untouched.
- [ ] No hex values, no `gray-*`/`blue-*`/`slate-*` Tailwind colors, no inline color styles.
- [ ] Heights: buttons 36/32/40, fields 42; field stacks `gap-1`, forms `gap-4`, button rows `gap-2`.
- [ ] Turquoise appears only as focus borders / selection checks / logo.
- [ ] Page uses the app shell + white content card (unless the user asked for a single component).
- [ ] Opened the file in a browser (or rendered it) and looked at it when tooling allows.
