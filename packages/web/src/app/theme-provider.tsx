"use client";

import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { type PropsWithChildren, type ReactNode, useSyncExternalStore } from "react";
import { cn } from "@/utilities/cn";

type ThemeSwitchProps = {
  className?: string;
};

const subscribeToMount = (): (() => void) => () => {};
const getClientSnapshot = (): boolean => true;
const getServerSnapshot = (): boolean => false;

export function ThemeSwitch({ className }: ThemeSwitchProps): ReactNode {
  const mounted = useSyncExternalStore(subscribeToMount, getClientSnapshot, getServerSnapshot);
  const { theme, setTheme } = useTheme();

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
          theme === "light" && "bg-accent/80 opacity-100",
        )}
        onClick={() => setTheme("light")}
        type="button"
      >
        <SunIcon className="h-4 w-4" />
      </button>
      <button
        aria-label="Use dark theme"
        className={cn(
          "cursor-pointer appearance-none rounded-sm border-none bg-transparent p-2 opacity-35",
          theme === "dark" && "bg-accent/80 opacity-100",
        )}
        onClick={() => setTheme("dark")}
        type="button"
      >
        <MoonIcon className="h-4 w-4" />
      </button>
      <button
        aria-label="Use system theme"
        className={cn(
          "cursor-pointer appearance-none rounded-sm border-none bg-transparent p-2 opacity-35",
          theme === "system" && "bg-accent/80 opacity-100",
        )}
        onClick={() => setTheme("system")}
        type="button"
      >
        <LaptopIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

export function ThemeProvider({ children }: PropsWithChildren): ReactNode {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
      {children}
    </NextThemeProvider>
  );
}
