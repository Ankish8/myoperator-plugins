/**
 * myOperator design system — Tailwind v3 preset.
 * VERBATIM theme from myoperator-ui tailwind.config.js (generated; do not edit).
 *
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require("./tailwind.preset.js")],
 *     content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
 *   };
 *
 * Requires: npm i -D tailwindcss@3 tailwindcss-animate
 */
module.exports = {
  ...{
    "darkMode": ["class"],
    "theme": {
      "container": {"center":true,"padding":"2rem","screens":{"2xl":"1400px"}},
      "extend": {
        "fontFamily": {
          "sans": ["Source Sans Pro", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"]
        },
        "colors": {
          "border": "hsl(var(--border))",
          "input": "hsl(var(--input))",
          "ring": "hsl(var(--ring))",
          "background": "hsl(var(--background))",
          "foreground": "hsl(var(--foreground))",
          "primary": {"DEFAULT":"hsl(var(--primary))","foreground":"hsl(var(--primary-foreground))"},
          "secondary": {"DEFAULT":"hsl(var(--secondary))","foreground":"hsl(var(--secondary-foreground))"},
          "destructive": {"DEFAULT":"hsl(var(--destructive))","foreground":"hsl(var(--destructive-foreground))"},
          "muted": {"DEFAULT":"hsl(var(--muted))","foreground":"hsl(var(--muted-foreground))"},
          "accent": {"DEFAULT":"hsl(var(--accent))","foreground":"hsl(var(--accent-foreground))"},
          "popover": {"DEFAULT":"hsl(var(--popover))","foreground":"hsl(var(--popover-foreground))"},
          "card": {"DEFAULT":"hsl(var(--card))","foreground":"hsl(var(--card-foreground))"},
          "semantic-primary": "var(--semantic-primary)",
          "semantic-primary-hover": "var(--semantic-primary-hover)",
          "semantic-primary-selected": "var(--semantic-primary-selected)",
          "semantic-primary-selected-hover": "var(--semantic-primary-selected-hover)",
          "semantic-primary-highlighted": "var(--semantic-primary-highlighted)",
          "semantic-primary-surface": "var(--semantic-primary-surface)",
          "semantic-brand": "var(--semantic-brand)",
          "semantic-brand-hover": "var(--semantic-brand-hover)",
          "semantic-brand-selected": "var(--semantic-brand-selected)",
          "semantic-brand-selected-hover": "var(--semantic-brand-selected-hover)",
          "semantic-brand-highlighted": "var(--semantic-brand-highlighted)",
          "semantic-brand-surface": "var(--semantic-brand-surface)",
          "semantic-brand-text": "var(--semantic-brand-text)",
          "semantic-bg-primary": "var(--semantic-bg-primary)",
          "semantic-bg-secondary": "var(--semantic-bg-secondary)",
          "semantic-bg-ui": "var(--semantic-bg-ui)",
          "semantic-bg-canvas": "var(--semantic-bg-canvas)",
          "semantic-bg-subtle": "var(--semantic-bg-subtle)",
          "semantic-bg-grey": "var(--semantic-bg-grey)",
          "semantic-bg-grey-hover": "var(--semantic-bg-grey-hover)",
          "semantic-bg-inverted": "var(--semantic-bg-inverted)",
          "semantic-bg-hover": "var(--semantic-bg-hover)",
          "semantic-text-primary": "var(--semantic-text-primary)",
          "semantic-text-secondary": "var(--semantic-text-secondary)",
          "semantic-text-placeholder": "var(--semantic-text-placeholder)",
          "semantic-text-link": "var(--semantic-text-link)",
          "semantic-text-inverted": "var(--semantic-text-inverted)",
          "semantic-text-muted": "var(--semantic-text-muted)",
          "semantic-border-primary": "var(--semantic-border-primary)",
          "semantic-border-secondary": "var(--semantic-border-secondary)",
          "semantic-border-accent": "var(--semantic-border-accent)",
          "semantic-border-layout": "var(--semantic-border-layout)",
          "semantic-border-input": "var(--semantic-border-input)",
          "semantic-border-input-focus": "var(--semantic-border-input-focus)",
          "semantic-border-focus": "var(--semantic-border-focus)",
          "semantic-disabled-primary": "var(--semantic-disabled-primary)",
          "semantic-disabled-secondary": "var(--semantic-disabled-secondary)",
          "semantic-disabled-text": "var(--semantic-disabled-text)",
          "semantic-disabled-border": "var(--semantic-disabled-border)",
          "semantic-error-primary": "var(--semantic-error-primary)",
          "semantic-error-surface-subtle": "var(--semantic-error-surface-subtle)",
          "semantic-error-surface": "var(--semantic-error-surface)",
          "semantic-error-text": "var(--semantic-error-text)",
          "semantic-error-border": "var(--semantic-error-border)",
          "semantic-error-hover": "var(--semantic-error-hover)",
          "semantic-warning-primary": "var(--semantic-warning-primary)",
          "semantic-warning-surface-subtle": "var(--semantic-warning-surface-subtle)",
          "semantic-warning-surface": "var(--semantic-warning-surface)",
          "semantic-warning-text": "var(--semantic-warning-text)",
          "semantic-warning-border": "var(--semantic-warning-border)",
          "semantic-warning-hover": "var(--semantic-warning-hover)",
          "semantic-success-primary": "var(--semantic-success-primary)",
          "semantic-success-surface-subtle": "var(--semantic-success-surface-subtle)",
          "semantic-success-surface": "var(--semantic-success-surface)",
          "semantic-success-text": "var(--semantic-success-text)",
          "semantic-success-border": "var(--semantic-success-border)",
          "semantic-success-hover": "var(--semantic-success-hover)",
          "semantic-info-primary": "var(--semantic-info-primary)",
          "semantic-info-surface-subtle": "var(--semantic-info-surface-subtle)",
          "semantic-info-surface": "var(--semantic-info-surface)",
          "semantic-info-text": "var(--semantic-info-text)",
          "semantic-info-border": "var(--semantic-info-border)",
          "semantic-info-hover": "var(--semantic-info-hover)"
        },
        "borderRadius": {"lg":"var(--radius)","md":"calc(var(--radius) - 2px)","sm":"calc(var(--radius) - 4px)"},
        "lineHeight": {
          "none": "var(--line-height-none)",
          "tight": "var(--line-height-tight)",
          "snug": "var(--line-height-snug)",
          "normal": "var(--line-height-normal)",
          "relaxed": "var(--line-height-relaxed)",
          "loose": "var(--line-height-loose)"
        },
        "boxShadow": {
          "xs": "var(--shadow-xs)",
          "sm": "var(--shadow-sm)",
          "md": "var(--shadow-md)",
          "lg": "var(--shadow-lg)",
          "xl": "var(--shadow-xl)",
          "2xl": "var(--shadow-2xl)"
        },
        "keyframes": {
          "accordion-down": {"from":{"height":"0"},"to":{"height":"var(--radix-accordion-content-height)"}},
          "accordion-up": {"from":{"height":"var(--radix-accordion-content-height)"},"to":{"height":"0"}}
        },
        "animation": {"accordion-down":"accordion-down 0.2s ease-out","accordion-up":"accordion-up 0.2s ease-out"}
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
