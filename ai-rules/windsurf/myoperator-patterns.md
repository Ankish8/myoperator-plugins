---
trigger: glob
globs: "**/*.tsx,**/*.jsx"
---

# myOperator Component Patterns

## Typography
Font: **Source Sans Pro** — always import from Google Fonts with wght@400;600;700.
Default body = 16px. Secondary/helper = 14px. Rare metadata = 12px.

## Buttons
```jsx
{/* Primary */}
<button className="inline-flex items-center justify-center gap-2 rounded text-sm font-medium
  min-w-20 py-2.5 px-4 bg-[var(--semantic-primary)] text-[var(--semantic-text-inverted)]
  hover:bg-[var(--semantic-primary-hover)] transition-all duration-200
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--semantic-primary)] focus-visible:ring-offset-2
  disabled:opacity-50 disabled:pointer-events-none">Save</button>
```

## Input
```jsx
<input className="h-10 w-full rounded px-4 py-2.5 text-sm
  bg-[var(--semantic-bg-primary)] text-[var(--semantic-text-primary)]
  border border-[var(--semantic-border-input)]
  placeholder:text-[var(--semantic-text-placeholder)]
  focus:outline-none focus:border-[var(--semantic-border-input-focus)]
  focus:shadow-[0_0_0_1px_rgba(43,188,202,0.15)]
  disabled:cursor-not-allowed disabled:bg-[var(--semantic-disabled-secondary)]
  transition-all" />
```

## Card
```jsx
<div className="rounded-lg border border-[var(--semantic-border-layout)] bg-[var(--semantic-bg-primary)] p-6 shadow-sm">
```

## Modal — ALWAYS z-[9999] (host app navbar is z-index 1000+, never use z-50)
```jsx
<div className="fixed inset-0 z-[9999] bg-black/50" />
<div className="fixed left-1/2 top-1/2 z-[9999] -translate-x-1/2 -translate-y-1/2
  w-full max-w-lg rounded-lg border border-[var(--semantic-border-layout)]
  bg-[var(--semantic-bg-primary)] p-6 shadow-lg">
```

## Table
```jsx
<div className="rounded-lg border border-[var(--semantic-border-layout)] overflow-hidden">
  <table className="w-full text-sm">
    <thead className="bg-[var(--semantic-bg-ui)]">
      <tr><th className="px-4 py-3 text-left font-semibold text-[var(--semantic-text-secondary)]">Header</th></tr>
    </thead>
    <tbody>
      <tr className="border-t border-[var(--semantic-border-layout)] hover:bg-[var(--semantic-bg-ui)] transition-colors">
        <td className="px-4 py-3 text-[var(--semantic-text-primary)]">Cell</td>
      </tr>
    </tbody>
  </table>
</div>
```
