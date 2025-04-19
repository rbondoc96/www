'use client';

import { LaptopIcon, MoonIcon, SunIcon } from 'lucide-react';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import { type PropsWithChildren, type ReactNode, useEffect, useState } from 'react';
import { cn } from '@/utilities/cn';

export function ThemeSwitch(): ReactNode {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Because we cannot know the theme on the server, many of the values returned from useTheme will be undefined until mounted on the client.
    // This means if you try to render UI based on the current theme before mounting on the client, you will see a hydration mismatch error.
    // The state is set here to trigger a re-render of this component. Without this re-render, the hydration mismatch error
    // will still occur.
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="absolute top-0 right-0 m-8">
            <button
                className={cn(
                    'appearance-none bg-transparent rounded-sm border-none cursor-pointer p-2 opacity-35',
                    theme === 'light' && 'bg-accent/80 opacity-100',
                )}
                onClick={() => setTheme('light')}
            >
                <SunIcon className="h-2.5 w-2.5 md:h-4 md:w-4" />
            </button>
            <button
                className={cn(
                    'appearance-none bg-transparent rounded-sm border-none cursor-pointer p-2 opacity-35',
                    theme === 'dark' && 'bg-accent/80 opacity-100',
                )}
                onClick={() => setTheme('dark')}
            >
                <MoonIcon className="h-2.5 w-2.5 md:h-4 md:w-4" />
            </button>
            <button
                className={cn(
                    'appearance-none bg-transparent rounded-sm border-none cursor-pointer p-2 opacity-35',
                    theme === 'system' && 'bg-accent/80 opacity-100',
                )}
                onClick={() => setTheme('system')}
            >
                <LaptopIcon className="h-2.5 w-2.5 md:h-4 md:w-4" />
            </button>
        </div>
    );
}

export function ThemeProvider({ children }: PropsWithChildren): ReactNode {
    return (
        <NextThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
            <ThemeSwitch />
            {children}
        </NextThemeProvider>
    );
}
