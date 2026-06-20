export const Theme = {
  Dark: "dark",
  Light: "light",
  System: "system",
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

export const themeStorageKey = "theme";

export function isTheme(value: string | null): value is Theme {
  return value === Theme.Dark || value === Theme.Light || value === Theme.System;
}

export function resolveTheme(theme: Theme, prefersDark: boolean): "dark" | "light" {
  if (theme === Theme.System) {
    return prefersDark ? Theme.Dark : Theme.Light;
  }

  return theme;
}
