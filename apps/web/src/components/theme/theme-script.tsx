import { type ReactNode } from "react";
import { themeStorageKey } from "@/components/theme/theme-store";

type ThemeScriptProps = {
  nonce?: string;
};

const serializedThemeStorageKey = JSON.stringify(themeStorageKey);

export const themeScriptContent = `
;(function () {
  try {
    var storedTheme = window.localStorage.getItem(${serializedThemeStorageKey});
    var theme = storedTheme === "dark" || storedTheme === "light" || storedTheme === "system" ? storedTheme : "system";
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var resolvedTheme = theme === "system" ? (prefersDark ? "dark" : "light") : theme;

    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  } catch {
  }
})();
`;

export function ThemeScript({ nonce }: ThemeScriptProps): ReactNode {
  return <script dangerouslySetInnerHTML={{ __html: themeScriptContent }} nonce={nonce} suppressHydrationWarning />;
}
