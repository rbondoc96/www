'use client';

import { MenuIcon } from 'lucide-react';
import { type ReactNode } from 'react';
import { orbitron } from '@/app/ui/fonts';
import { Link } from '@/components/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/utilities/cn';

export function MobileSiteNavigation(): ReactNode {
    return (
        <Sheet>
            <SheetTrigger>
                <MenuIcon className="h-4.5 w-4.5" />
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
            <div className="grid grid-cols-3 items-center">
                <div className="m-1">
                    <div className="hidden sm:block">
                        <SiteNavigation />
                    </div>
                    <div className="sm:hidden">
                        <MobileSiteNavigation />
                    </div>
                </div>
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
        </header>
    );
}
