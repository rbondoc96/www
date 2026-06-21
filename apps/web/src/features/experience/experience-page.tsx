import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { type ReactNode } from "react";
import { TrackedEvent } from "@/analytics/tracked-event.ts";
import { TrackedLink } from "@/analytics/tracked-link.tsx";
import { IconButton } from "@/components/buttons/icon-button.tsx";
import { HeaderNavigation } from "@/components/site/navigation.tsx";
import { orbitron } from "@/styles/fonts.ts";
import { cn } from "@/utilities/cn.ts";

type ExperiencePageProps = {
  timeline: ReactNode;
};

export function ExperiencePage({ timeline }: ExperiencePageProps): ReactNode {
  return (
    <>
      <HeaderNavigation />
      <main className="mb-12 flex flex-1 flex-col gap-6 md:mt-6 md:gap-8 lg:mt-8">
        <h1
          className={cn(
            orbitron.className,
            "font-semibold tracking-tight",
            "text-3xl md:text-5xl lg:text-7xl",
            "text-center font-semibold",
            "mt-8",
          )}
        >
          Rodrigo Bondoc
        </h1>

        <p className="text-center text-lg font-light sm:text-xl md:text-2xl">Software Engineer</p>

        <div>
          <div className="flex justify-center">
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
        </div>

        {timeline}
      </main>
    </>
  );
}
