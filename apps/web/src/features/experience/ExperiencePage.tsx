import { type ReactNode } from "react";
import { HeaderNavigation } from "@/components/site/navigation.tsx";
import { fraunces } from "@/styles/fonts.ts";
import { cn } from "@/utilities/cn.ts";

type ExperiencePageProps = {
  timeline: ReactNode;
};

export function ExperiencePage({ timeline }: ExperiencePageProps): ReactNode {
  return (
    <>
      <HeaderNavigation />
      <main className="mb-12 flex flex-1 flex-col gap-6 md:mt-6 md:gap-8 lg:mt-8">
        <div className="mx-auto mt-8 w-full max-w-2xl">
          <h1 className={cn(fraunces.className, "font-medium tracking-[-0.02em]", "text-4xl md:text-5xl")}>
            Experience
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">A timeline of where I&apos;ve worked.</p>
        </div>

        {timeline}
      </main>
    </>
  );
}
