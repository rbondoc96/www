import { MenuIcon } from 'lucide-react';
import { type ReactNode } from 'react';
import { ThemeSwitch } from '@/app/theme-provider';
import { orbitron } from '@/app/ui/fonts';
import { Link } from '@/components/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/utilities/cn';

export function MobileSiteNavigation(): ReactNode {
    return (
        <Sheet>
            <SheetTrigger>
                <MenuIcon className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="top">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="flex flex-col gap-y-4 text-sm">
                    <Link to="/" underline>
                        Home
                    </Link>
                    <Link to="/blog" underline>
                        Blog
                    </Link>
                    <Link to="/experience" underline>
                        Experience
                    </Link>
                    <Link to="/projects" underline>
                        Projects
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export function SiteNavigation(): ReactNode {
    return (
        <nav className="flex gap-x-1 md:gap-x-2 font-light text-sm md:text-base">
            <Link to="/blog" underline>
                Blog
            </Link>
            <span>·</span>
            <Link to="/experience" underline>
                Experience
            </Link>
            <span>·</span>
            <Link to="/projects" underline>
                Projects
            </Link>
        </nav>
    );
}

export function HeaderNavigation(): ReactNode {
    return (
        <header>
            <div className="grid grid-cols-3 items-center my-8">
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
                            orbitron.className,
                            'font-semibold text-center text-xl md:text-2xl',
                            'hidden sm:inline',
                        )}
                        to="/"
                    >
                        RDB
                    </Link>
                </div>
                <ThemeSwitch className="flex justify-end" />
            </div>
        </header>
    );
}
