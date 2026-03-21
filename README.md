# Salt DS + Vite + React

A starter template using [JPMC Salt Design System](https://saltdesignsystem.com) with React, Vite, TypeScript, and React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Stack

| Package | Purpose |
|---|---|
| `vite` | Build tool & dev server |
| `react` + `react-dom` | UI framework |
| `react-router-dom` | Client-side routing |
| `@salt-ds/core` | Salt components |
| `@salt-ds/theme` | Salt CSS tokens & themes |
| `@salt-ds/icons` | Salt icon set |
| `@salt-ds/lab` | Experimental Salt components |
| `typescript` | Type safety |

## Features

- **Theme switcher** — Toggle Light / Dark mode and HD / MD / LD / TD density from the top nav bar
- **React Router v6** — Shared `<Layout>` shell with nested pages (`/`, `/components`, `/forms`)
- **Component demo** — Buttons, Banners, Checkboxes, Radio buttons, Switches, Progress, Tags, Tooltips
- **Form demo** — Inputs, Textarea, ComboBox, validation states

## Project structure

```
src/
├── main.tsx              # Entry point, imports Salt theme CSS
├── router.tsx            # Route definitions
├── components/
│   ├── Layout.tsx        # App shell with SaltProvider + nav
│   ├── Layout.css        # Shell styles (Salt tokens)
│   └── ThemeSwitcher.tsx # Mode + density toggle controls
├── pages/
│   ├── Home.tsx          # Landing page with component preview
│   ├── Components.tsx    # Full component showcase
│   └── Forms.tsx         # Form components & validation states
└── styles/
    └── index.css         # Global resets & utility classes
```

## Customising the theme

Salt theming is controlled by the `<SaltProvider>` in `Layout.tsx`:

```tsx
<SaltProvider mode="light" density="medium">
  {/* your app */}
</SaltProvider>
```

Available modes: `"light"` | `"dark"`
Available densities: `"high"` | `"medium"` | `"low"` | `"touch"`

## Useful links

- [Salt DS Documentation](https://saltdesignsystem.com)
- [Salt DS GitHub](https://github.com/jpmorganchase/salt-ds)
- [Vite Documentation](https://vitejs.dev)
