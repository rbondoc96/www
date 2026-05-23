import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { type Metadata } from "next";
import { type ReactNode } from "react";
import { TrackedEvent } from "@/analytics/tracked-event";
import { TrackedLink } from "@/analytics/tracked-link";
import { Timeline } from "@/app/experience/timeline";
import { orbitron } from "@/app/ui/fonts";
import { IconButton } from "@/components/buttons/icon-button";
import { listExperiences } from "@/lib/experiences";
import { cn } from "@/utilities/cn";
import { env } from "@/utilities/env";

export const metadata: Metadata = {
  title: "Rodrigo Bondoc | Experience",
};

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

export default async function Page(): Promise<ReactNode> {
  const experiences = await listExperiences();

  return (
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

      <div className="flex justify-center">
        <TrackedLink
          className="text-center text-xs text-accent underline underline-offset-4 sm:text-sm md:text-base"
          event={TrackedEvent.ResumeView}
          href={env.NEXT_PUBLIC_RESUME_URL}
          rel="noreferrer"
          target="_blank"
        >
          View My Resumé
        </TrackedLink>
      </div>

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

      <Timeline experiences={experiences} />
    </main>
  );
}
