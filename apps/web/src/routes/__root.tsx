import "@/styles/globals.css";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AnalyticsProvider } from "@/analytics/AnalyticsProvider.tsx";
import { ThemeProvider } from "@/components/theme/ThemeProvider.tsx";
import { ThemeScript } from "@/components/theme/ThemeScript.tsx";
import { sora } from "@/styles/fonts.ts";
import { cn } from "@/utilities/cn.ts";

export const Route = createRootRoute({
  component: RootLayout,
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        title: "Rodrigo Bondoc",
      },
      {
        content: "My personal developer website.",
        name: "description",
      },
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootShell,
});

function NotFound(): ReactNode {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <p>Not found</p>
    </main>
  );
}

function RootLayout(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <AnalyticsProvider>
      <div className="relative container mx-auto flex h-full flex-1 flex-col px-4">
        <ThemeProvider>
          <Outlet />
          <footer className="flex flex-col items-center gap-y-2.5 pb-8">
            <p className="text-xs font-light tracking-tight md:text-sm">&copy; {year} All Rights Reserved.</p>
          </footer>
        </ThemeProvider>
      </div>
    </AnalyticsProvider>
  );
}

function RootShell({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <HeadContent />
      </head>
      <body className={cn(sora.className, "relative", "antialiased", "min-h-screen", "flex flex-col")}>
        {children}
        <Scripts />
              </body>
    </html>
  );
}
