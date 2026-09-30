# React / JSX output

Two ways to produce React code that matches production.

## A. Use the real components (preferred inside a real codebase)

In a React + Tailwind v3 project that can install packages:

```bash
npx myoperator-ui init
npx myoperator-ui add button text-field select-field table dialog
```

Then use the components with the props listed at the top of each `components/*.md` file. CLI-installed components use a `tw-` class prefix (for Bootstrap compatibility) — do not mix them with the unprefixed markup from this skill in one bundle.

## B. Convert the skill's markup (standalone prototypes, sandboxes, artifacts)

Setup once:
1. Tailwind **v3** (`npm i -D tailwindcss@3 tailwindcss-animate`) with `presets: [require("./tailwind.preset.js")]` — copy `assets/tailwind.preset.js`.
2. Import `assets/myoperator.css` as the global stylesheet (tokens, base layer, font import).
3. `npm i lucide-react`.

Conversion rules (mechanical — do not change class strings):

| HTML (snippets) | JSX |
|---|---|
| `class="…"` | `className="…"` |
| `for="…"` | `htmlFor="…"` |
| `style="width: 60%"` | `style={{ width: "60%" }}` |
| `<i data-lucide="chevron-down" class="size-4"></i>` | `<ChevronDown className="size-4" />` (`import { ChevronDown } from "lucide-react"`) |
| `<input …>` / `<img …>` | self-close: `<input … />` |
| `disabled` / `data-disabled` | `disabled` / `data-disabled=""` |
| `data-state="checked"` | drive from state: `data-state={on ? "checked" : "unchecked"}` |
| `hidden` on popover/dialog content | render conditionally: `{open && …}` |
| `data-popover*`, `data-dialog*`, `data-tooltip*`, `data-dismiss`, `data-indicator`, `data-value` | behaviour hooks for the HTML starter — drop them and use React state |

Keep every `data-state`, `data-side`, `data-placeholder`, `aria-*` attribute the snippet has — the classes style off them (`data-[state=checked]:bg-semantic-primary`).

Minimal state patterns:

```jsx
const [on, setOn] = useState(true);
<button role="switch" aria-checked={on} data-state={on ? "checked" : "unchecked"} onClick={() => setOn(!on)} className="…switch classes…">
  <span data-state={on ? "checked" : "unchecked"} className="…thumb classes…" />
</button>

const [open, setOpen] = useState(false);
<div className="relative">
  <button onClick={() => setOpen(!open)} aria-expanded={open} data-state={open ? "open" : "closed"} className="…trigger…">…</button>
  {open && <div className="absolute left-0 top-full z-[9999] w-full">…menu markup…</div>}
</div>
```

Sandboxed React artifact viewers usually cannot load a custom Tailwind config — produce the HTML file instead and open it in a browser (the starter loads its own Tailwind runtime from a CDN).
