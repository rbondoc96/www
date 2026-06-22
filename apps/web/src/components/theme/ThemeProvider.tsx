"use client";

import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { type PropsWithChildren, type ReactNode, useEffect, useSyncExternalStore } from "react";
import { isTheme, resolveTheme, Theme, themeStorageKey } from "@/components/theme/theme-store.ts";
import { cn } from "@/utilities/cn.ts";

type ThemeSwitchProps = {
  className?: string;
};

type ThemeSubscriber = () => void;

const subscribers = new Set<ThemeSubscriber>();

let themeSnapshot: Theme = Theme.System;

function applyResolvedTheme(theme: Theme): void {
  if (typeof window === "undefined") {
    return;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolvedTheme = resolveTheme(theme, prefersDark);

  document.documentElement.classList.toggle("dark", resolvedTheme === Theme.Dark);
}

function disableTransitions(): () => void {
  const style = document.createElement("style");

  style.appendChild(document.createTextNode("*{transition:none!important}"));
  document.head.append(style);

  return () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => style.remove());
    });
  };
}

function getClientMountSnapshot(): boolean {
  return true;
}

function getServerMountSnapshot(): boolean {
  return false;
}

function getServerThemeSnapshot(): Theme {
  return Theme.System;
}

function getThemeSnapshot(): Theme {
  return themeSnapshot;
}

function notifyThemeSubscribers(): void {
  subscribers.forEach((subscriber) => subscriber());
}

function readStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return Theme.System;
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);

  return isTheme(storedTheme) ? storedTheme : Theme.System;
}

function setTheme(theme: Theme): void {
  const enableTransitions = disableTransitions();

  themeSnapshot = theme;
  window.localStorage.setItem(themeStorageKey, theme);
  applyResolvedTheme(theme);
  notifyThemeSubscribers();
  enableTransitions();
}

function subscribeToMount(): () => void {
  return () => {};
}

function subscribeToTheme(subscriber: ThemeSubscriber): () => void {
  subscribers.add(subscriber);

  return () => subscribers.delete(subscriber);
}

function syncThemeFromStorage(): void {
  themeSnapshot = readStoredTheme();
  applyResolvedTheme(themeSnapshot);
  notifyThemeSubscribers();
}

export function ThemeProvider({ children }: PropsWithChildren): ReactNode {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    syncThemeFromStorage();

    const handleMediaChange = (): void => {
      if (themeSnapshot === Theme.System) {
        applyResolvedTheme(themeSnapshot);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    window.addEventListener("storage", syncThemeFromStorage);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("storage", syncThemeFromStorage);
    };
  }, []);

  return children;
}

export function ThemeSwitch({ className }: ThemeSwitchProps): ReactNode {
  const mounted = useSyncExternalStore(subscribeToMount, getClientMountSnapshot, getServerMountSnapshot);
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  // Return a skeleton without the selected theme highlighted.
  if (!mounted) {
    return (
      <div className={className}>
        <button
          aria-label="Use light theme"
          className="cursor-pointer appearance-none rounded-sm border-none bg-transparent p-2 opacity-35"
          type="button"
        >
          <SunIcon className="h-4 w-4" />
        </button>
        <button
          aria-label="Use dark theme"
          className="cursor-pointer appearance-none rounded-sm border-none bg-transparent p-2 opacity-35"
          type="button"
        >
          <MoonIcon className="h-4 w-4" />
        </button>
        <button
          aria-label="Use system theme"
          className="cursor-pointer appearance-none rounded-sm border-none bg-transparent p-2 opacity-35"
          type="button"
        >
          <LaptopIcon className="h-4 w-4" />
        </button>
      </div>
    );
  }

  // Return the component with the selected theme highlighted.
  return (
    <div className={className}>
      <button
        aria-label="Use light theme"
        className={cn(
          "cursor-pointer appearance-none rounded-sm border-none bg-transparent p-2 opacity-35",
          theme === Theme.Light && "bg-accent/80 opacity-100",
        )}
        onClick={() => setTheme(Theme.Light)}
        type="button"
      >
        <SunIcon className="h-4 w-4" />
      </button>
      <button
        aria-label="Use dark theme"
        className={cn(
          "cursor-pointer appearance-none rounded-sm border-none bg-transparent p-2 opacity-35",
          theme === Theme.Dark && "bg-accent/80 opacity-100",
        )}
        onClick={() => setTheme(Theme.Dark)}
        type="button"
      >
        <MoonIcon className="h-4 w-4" />
      </button>
      <button
        aria-label="Use system theme"
        className={cn(
          "cursor-pointer appearance-none rounded-sm border-none bg-transparent p-2 opacity-35",
          theme === Theme.System && "bg-accent/80 opacity-100",
        )}
        onClick={() => setTheme(Theme.System)}
        type="button"
      >
        <LaptopIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
