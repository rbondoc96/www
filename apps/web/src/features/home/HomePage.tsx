import { type CSSProperties, type ReactNode } from "react";
import { SiteNavigation } from "@/components/site/navigation.tsx";
import { ThemeSwitch } from "@/components/theme/ThemeProvider";
import { newsreader } from "@/styles/fonts.ts";
import { cn } from "@/utilities/cn.ts";

type HomePageProps = {
  sanityTest?: ReactNode;
};

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

export function HomePage({ sanityTest = null }: HomePageProps): ReactNode {
  return (
    <>
      <header>
        <div className="my-8 flex justify-end">
          <ThemeSwitch />
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <div className="mb-12 flex flex-1 flex-col items-center justify-center gap-5">
          <h1
            className={cn(
              newsreader.className,
              "animate-enter-rise text-center font-normal tracking-[-0.01em] text-balance",
              "text-[clamp(2.75rem,7vw,5rem)] leading-[1.05]",
              "[view-transition-name:site-logo]",
            )}
            style={delay(0)}
          >
            Rodrigo Bondoc
          </h1>
          <p
            className="animate-enter-rise text-center text-sm font-light text-muted-foreground md:text-base"
            style={delay(90)}
          >
            Software Engineer · San Francisco, CA
          </p>
          <div className="animate-enter-rise" style={delay(180)}>
            <SiteNavigation />
          </div>
          {sanityTest}
        </div>
      </main>
    </>
  );
}
