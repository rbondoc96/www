import { type ReactNode } from "react";
import { SiteNavigation } from "@/components/site/navigation.tsx";
import { ThemeSwitch } from "@/components/theme/ThemeProvider";
import { orbitron } from "@/styles/fonts.ts";

type HomePageProps = {
  sanityTest?: ReactNode;
};

export function HomePage({ sanityTest = null }: HomePageProps): ReactNode {
  return (
    <>
      <header>
        <div className="my-8 flex justify-end">
          <ThemeSwitch />
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <div className="mb-12 flex flex-1 flex-col items-center justify-center gap-6">
          <h1
            className={`${orbitron.className} text-8xl font-semibold tracking-tight [view-transition-name:site-logo] md:text-9xl`}
          >
            RDB
          </h1>
          <p className="text-center text-sm font-light md:text-lg">Rodrigo Bondoc · San Francisco, CA</p>
          <SiteNavigation />
          {sanityTest}
        </div>
      </main>
    </>
  );
}
