import { ToggleButton, ToggleButtonGroup } from "@salt-ds/core";
import type { Density, Mode } from "@salt-ds/core";

interface ThemeSwitcherProps {
  onModeChange: (mode: Mode) => void;
  onDensityChange: (density: Density) => void;
  currentMode: Mode;
  currentDensity: Density;
}

export function ThemeSwitcher({
  onModeChange,
  currentMode,
}: ThemeSwitcherProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--salt-spacing-200)",
      }}
    >
      <span
        style={{
          fontSize: "var(--salt-text-label-fontSize)",
          color: "var(--salt-content-secondary-foreground)",
        }}
      >
        Mode:
      </span>
      <ToggleButtonGroup
        value={currentMode}
        onChange={(e) => onModeChange(e.currentTarget.value as Mode)}
      >
        <ToggleButton value="light">Light</ToggleButton>
        <ToggleButton value="dark">Dark</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
