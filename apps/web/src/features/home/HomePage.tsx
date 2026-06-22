import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { type CSSProperties, type ReactNode } from "react";
import { TrackedEvent } from "@/analytics/TrackedEvent.ts";
import { TrackedLink } from "@/analytics/TrackedLink.tsx";
import { IconButton } from "@/components/buttons/IconButton.tsx";
import { SiteNavigation } from "@/components/site/navigation.tsx";
import { ThemeSwitch } from "@/components/theme/ThemeProvider";
import { fraunces } from "@/styles/fonts.ts";
import { cn } from "@/utilities/cn.ts";

type HomePageProps = {
  sanityTest?: ReactNode;
};

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

export function HomePage({ sanityTest: _sanityTest = null }: HomePageProps): ReactNode {
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
              fraunces.className,
              "animate-enter-rise text-center font-medium tracking-[-0.02em] text-balance",
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
          <div className="animate-enter-rise flex justify-center" style={delay(270)}>
            <TrackedLink
              className="cursor-pointer text-gray-500 hover:text-accent"
              event={TrackedEvent.GitHubView}
              href="https://github.com/rbondoc96"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <GitHubLogoIcon />
                <span className="sr-only">GitHub</span>
              </IconButton>
            </TrackedLink>

            <TrackedLink
              className="cursor-pointer text-gray-500 hover:text-accent"
              event={TrackedEvent.LinkedInView}
              href="https://linkedin.com/in/rbondoc96"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <LinkedInLogoIcon />
                <span className="sr-only">LinkedIn</span>
              </IconButton>
            </TrackedLink>
          </div>
          {/* {sanityTest} */}
        </div>
      </main>
    </>
  );
}
