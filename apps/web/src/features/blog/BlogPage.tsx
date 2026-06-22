import { type ReactNode } from "react";
import { HeaderNavigation } from "@/components/site/navigation.tsx";
import { fraunces } from "@/styles/fonts.ts";
import { cn } from "@/utilities/cn.ts";

export function BlogPage(): ReactNode {
  return (
    <>
      <HeaderNavigation />
      <main className="mb-12 flex flex-1 flex-col gap-6 md:mt-6 md:gap-8 lg:mt-8">
        <div className="mx-auto mt-8 w-full max-w-2xl">
          <h1 className={cn(fraunces.className, "font-medium tracking-[-0.02em]", "text-4xl md:text-5xl")}>Blog</h1>
          <p className="mt-2 text-sm text-muted-foreground">Notes on software and craft.</p>
          <p className="mt-8 text-sm text-muted-foreground">No posts yet.</p>
        </div>
      </main>
    </>
  );
}
