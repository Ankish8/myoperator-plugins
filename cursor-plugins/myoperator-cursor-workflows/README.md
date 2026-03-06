# myoperator-cursor-workflows

Installable Cursor plugin for myOperator developer workflows.

## Includes

- `create-component-cursor`
- `publish-all-cursor`
- Bootstrap compatibility hook guard
- Bootstrap paragraph compatibility rule

## Purpose

Provides Cursor commands for two high-signal developer workflows in the myOperator UI repo:

- screenshot + Figma driven component creation
- gated beta/latest publishing with Storybook and validation steps

It also bundles a shell hook + scan script that blocks matching commit/push/publish/version commands when Bootstrap paragraph margin compatibility fails.
