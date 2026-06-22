import { type ReactNode } from "react";
import { Link } from "@/components/Link.tsx";
import { HeaderNavigation } from "@/components/site/navigation.tsx";
import { ContactForm } from "@/features/contact/ContactForm.tsx";
import { fraunces } from "@/styles/fonts.ts";
import { cn } from "@/utilities/cn.ts";

export function ContactPage(): ReactNode {
  return (
    <>
      <HeaderNavigation />
      <main className="mb-12 flex flex-1 flex-col gap-6 md:mt-6 md:gap-8 lg:mt-8">
        <div className="mx-auto mt-8 w-full max-w-2xl">
          <h1 className={cn(fraunces.className, "font-medium tracking-[-0.02em]", "text-4xl md:text-5xl")}>Contact</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Have a role, a project, or just want to talk? Send a note, or reach me on{" "}
            <Link
              className="text-foreground"
              href="https://linkedin.com/in/rbondoc96"
              rel="noreferrer"
              target="_blank"
              underline
            >
              LinkedIn
            </Link>
            .
          </p>

          <div className="mt-8 max-w-xl">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
