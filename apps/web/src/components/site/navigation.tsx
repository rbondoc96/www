import { MenuIcon } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { Link } from "@/components/Link.tsx";
import { ThemeSwitch } from "@/components/theme/ThemeProvider";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet.tsx";
import { fraunces } from "@/styles/fonts.ts";
import { cn } from "@/utilities/cn.ts";

// Flip `enabled` to true once a section has real content. Empty pages behind a nav link
// read worse than no link, so Blog/Projects stay hidden until they're populated.
const navItems = [
  { enabled: false, label: "Blog", to: "/blog" },
  { enabled: true, label: "Experience", to: "/experience" },
  { enabled: false, label: "Projects", to: "/projects" },
] as const;

const enabledNavItems = navItems.filter((item) => item.enabled);

export function HeaderNavigation(): ReactNode {
  return (
    <header>
      <div className="my-8 grid grid-cols-3 items-center">
        <div className="inline-flex md:block">
          <div className="hidden sm:block">
            <SiteNavigation />
          </div>
          <div className="inline-flex sm:hidden">
            <MobileSiteNavigation />
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            className={cn(
              fraunces.className,
              "text-center text-lg font-medium tracking-[-0.01em] md:text-xl",
              "hidden whitespace-nowrap sm:inline",
              "[view-transition-name:site-logo]",
            )}
            to="/"
          >
            Rodrigo Bondoc
          </Link>
        </div>
        <ThemeSwitch className="flex justify-end" />
      </div>
    </header>
  );
}

export function MobileSiteNavigation(): ReactNode {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent aria-describedby={undefined} side="top">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="flex flex-col gap-y-4 text-sm">
          <Link to="/" underline>
            Home
          </Link>
          {enabledNavItems.map((item) => (
            <Link key={item.to} to={item.to} underline>
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteNavigation(): ReactNode {
  return (
    <nav className="flex gap-x-1 text-sm font-light md:gap-x-2 md:text-base">
      {enabledNavItems.map((item, index) => (
        <Fragment key={item.to}>
          {index > 0 && <span>·</span>}
          <Link to={item.to} underline>
            {item.label}
          </Link>
        </Fragment>
      ))}
    </nav>
  );
}
