# GitHub Copilot Instructions

This file provides project-specific context and coding standards for GitHub Copilot Chat.

---

## Project Overview

This is a **React + Vite + TypeScript** starter built on the **JPMC Salt Design System (`@salt-ds`)**.
It uses **React Router v6** for client-side routing and **Salt's `SaltProvider`** for theming (light/dark mode, HD/MD/LD/TD density).

---

## Project Structure

```
src/
├── main.tsx              # Entry point — mounts app, imports Salt theme CSS
├── router.tsx            # All route definitions (createBrowserRouter)
├── components/
│   ├── Layout.tsx        # App shell: SaltProvider, top nav, <Outlet />
│   ├── Layout.css        # Shell styles using Salt CSS custom properties
│   └── ThemeSwitcher.tsx # Mode (light/dark) + density toggle
├── pages/                # One file per route
│   ├── Home.tsx
│   ├── Components.tsx
│   └── Forms.tsx
└── styles/
    └── index.css         # Global resets and shared utility classes
```

---

## Coding Standards

### TypeScript

- **Strict mode is enabled** — never use `any`; prefer `unknown` and narrow with type guards.
- Use `type` for unions, primitives, and mapped types. Use `interface` for object shapes and component props.
- Always type component props explicitly — do not rely on inference from `useState` or `useReducer` initial values alone.
- Import types with `import type { ... }` to avoid accidental value imports.
- Avoid non-null assertions (`!`) unless unavoidable (e.g. `document.getElementById('root')!` in `main.tsx`).

### React

- Use **functional components only** — no class components.
- Co-locate component state close to where it's used; lift state only when necessary.
- Prefer named exports for all components (e.g. `export function MyComponent`), not default exports.
- Keep components focused — if a component exceeds ~150 lines, split it.
- Use the `children` prop pattern for layout wrappers.
- Never use `index` as a React `key` unless the list is static and never reordered.

### Salt Design System

- **Always use Salt components** instead of raw HTML equivalents where one exists:
  - Use `<Button>` not `<button>`, `<Text>` not `<p>`, `<H1>`–`<H4>` not `<h1>`–`<h4>`.
  - Use `<Input>` / `<Textarea>` / `<ComboBox>` not native form controls.
  - Use `<StackLayout>` / `<FlexLayout>` / `<GridLayout>` for spacing and alignment — avoid custom flexbox/grid where Salt layouts suffice.
- **Always use Salt CSS custom properties** for spacing, colour, typography, and border tokens — never hard-code values like `16px`, `#fff`, or `bold`:

  ```css
  /* ✅ correct */
  padding: var(--salt-spacing-300);
  color: var(--salt-content-primary-foreground);

  /* ❌ avoid */
  padding: 12px;
  color: #333;
  ```

- Wrap the entire app (or a subtree) in `<SaltProvider mode={mode} density={density}>`. Never nest `SaltProvider` unless intentionally overriding theme for a subtree.
- Use `@salt-ds/icons` for all icons — do not import from other icon libraries.
- Prefer `@salt-ds/core` components over `@salt-ds/lab` where both exist; lab components are experimental and subject to breaking changes.

### Styling

- Component-level styles live in a `.css` file co-located with the component (e.g. `Layout.css` next to `Layout.tsx`).
- Global/utility styles go in `src/styles/index.css`.
- Class names use BEM-like convention: `.block__element--modifier`.
- Do not use inline `style` props for anything other than dynamic values (e.g. computed widths). Use CSS classes for static styles.
- Never use `!important`.

### Routing

- All routes are defined in `src/router.tsx` using `createBrowserRouter`.
- Pages live in `src/pages/` — one file per route, named after the route (e.g. `Home.tsx` for `/`).
- Use `<NavLink>` for navigation links so active state styling is automatic.
- Use `<Link>` (from `react-router-dom`) for programmatic navigation links inside content.
- Do not use `<a href>` for internal navigation.

### Forms

- Wrap every input in a `<FormField>` with a `<FormFieldLabel>`.
- Always include `<FormFieldHelperText>` for validation feedback.
- Use `validationStatus="error" | "warning" | "success"` on `<FormField>` to communicate state — do not rely on colour alone.
- Controlled inputs are preferred over uncontrolled — use `value` + `onChange`.

---

## Dos and Don'ts

| ✅ Do                                            | ❌ Don't                                            |
| ------------------------------------------------ | --------------------------------------------------- |
| Use Salt components and tokens                   | Hard-code colours, spacing, or font sizes           |
| Use `import type` for type-only imports          | Import types as values                              |
| Name components with PascalCase                  | Use default exports for components                  |
| Keep pages in `src/pages/`                       | Put business logic inside page files                |
| Use `<StackLayout gap={n}>` for vertical spacing | Add `margin-top` to every element manually          |
| Use `validationStatus` on `<FormField>`          | Show errors with custom styled `<div>`s             |
| Use Salt icons from `@salt-ds/icons`             | Import icons from `lucide-react`, `heroicons`, etc. |
| Define all routes in `router.tsx`                | Create `<Route>` elements scattered across the app  |

---

## Adding a New Page

1. Create `src/pages/MyPage.tsx` and export a named function component.
2. Add the route in `src/router.tsx` under the existing `Layout` parent route.
3. Add a `<NavLink>` in `src/components/Layout.tsx`.

```tsx
// src/pages/MyPage.tsx
import { H1, Text, StackLayout } from "@salt-ds/core";

export function MyPage() {
  return (
    <StackLayout gap={4}>
      <H1>My Page</H1>
      <Text>Page content here.</Text>
    </StackLayout>
  );
}
```

---

## Useful References

- [Salt DS Documentation](https://saltdesignsystem.com)
- [Salt DS GitHub](https://github.com/jpmorganchase/salt-ds)
- [Salt DS Storybook](https://storybook.saltdesignsystem.com)
- [React Router v6 Docs](https://reactrouter.com/en/main)
- [Vite Docs](https://vitejs.dev)
