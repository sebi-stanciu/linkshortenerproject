# UI Standards

## shadcn/ui — Required for All UI

All UI elements in this app use **shadcn/ui**. Do not create custom components.

## Rules

- **Always** use shadcn/ui components for any UI element (buttons, inputs, dialogs, cards, badges, etc.).
- **Never** build custom components from scratch — check the shadcn/ui library first.
- If a required component is not yet installed, add it with:
  ```bash
  npx shadcn@latest add <component-name>
  ```
- Components live in `components/ui/` — do not modify them directly; re-add via the CLI if updates are needed.
- Compose layouts and pages by combining shadcn/ui primitives.
- Tailwind CSS v4 utility classes may be used for spacing and layout, but interactive/styled elements must use shadcn/ui.
