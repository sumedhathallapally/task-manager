import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { SaltProvider, FlexLayout, StackLayout } from "@salt-ds/core";
import type { Density, Mode } from "@salt-ds/core";
import { ThemeSwitcher } from "./ThemeSwitcher";
import "./Layout.css";

export function Layout() {
  const [mode, setMode] = useState<Mode>("light");
  const [density, setDensity] = useState<Density>("medium");

  return (
    <SaltProvider mode={mode} density={density}>
      <div className="app-shell">
        {/* Top Nav Bar */}
        <header className="app-header">
          <div className="app-header__brand">
            <span className="app-header__logo">⬡</span>
            <span className="app-header__title">Demo</span>
          </div>

          <nav className="app-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `app-nav__link${isActive ? " app-nav__link--active" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/components"
              className={({ isActive }) =>
                `app-nav__link${isActive ? " app-nav__link--active" : ""}`
              }
            >
              Components
            </NavLink>
          </nav>

          <ThemeSwitcher
            currentMode={mode}
            currentDensity={density}
            onModeChange={setMode}
            onDensityChange={setDensity}
          />
        </header>

        {/* Page Content */}
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </SaltProvider>
  );
}
