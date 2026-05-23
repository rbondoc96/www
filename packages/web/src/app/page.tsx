import { type ReactNode } from "react";
import { SiteNavigation } from "@/app/navigation";
import { ThemeSwitch } from "@/app/theme-provider";
import { orbitron } from "@/app/ui/fonts";
import { SanityTest } from "@/components/sanity-test";

export default function Page(): ReactNode {
  return (
    <>
      <header>
        <div className="my-8 flex justify-end">
          <ThemeSwitch />
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <div className="mb-12 flex flex-1 flex-col items-center justify-center gap-6">
          <h1 className={`${orbitron.className} text-8xl font-semibold tracking-tight md:text-9xl`}>RDB</h1>
          <p className="text-center text-sm font-light md:text-lg">Rodrigo Bondoc · San Francisco, CA</p>
          <SiteNavigation />
          {process.env.NODE_ENV === "development" && <SanityTest />}
        </div>
      </main>
    </>
  );
}
