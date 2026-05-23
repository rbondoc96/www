import "@/app/ui/globals.scss";
import { type Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { type PropsWithChildren, type ReactNode } from "react";
import { AnalyticsProvider } from "@/analytics/analytics-provider";
import { ThemeProvider } from "@/app/theme-provider";
import { sora } from "@/app/ui/fonts";
import { cn } from "@/utilities/cn";

export const metadata: Metadata = {
  title: "Rodrigo Bondoc",
  description: "My personal developer website.",
};

export default function RootLayout({ children }: PropsWithChildren): ReactNode {
  const year = new Date().getFullYear();

  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(sora.className, "relative", "antialiased", "min-h-screen", "flex flex-col")}>
          <AnalyticsProvider>
            <div className="relative container mx-auto flex h-full flex-1 flex-col px-4">
              <ThemeProvider>
                {children}
                <footer className="flex flex-col items-center gap-y-2.5 pb-8">
                  <p className="text-xs font-light tracking-tight md:text-sm">&copy; {year} All Rights Reserved.</p>
                </footer>
              </ThemeProvider>
            </div>
          </AnalyticsProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
