'use client';

import { LaptopIcon, MoonIcon, SunIcon } from 'lucide-react';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import { type PropsWithChildren, type ReactNode, useEffect, useState } from 'react';
import { cn } from '@/utilities/cn';

type ThemeSwitchProps = {
    className?: string;
};

export function ThemeSwitch({ className }: ThemeSwitchProps): ReactNode {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Because we cannot know the theme on the server, many of the values returned from useTheme will be undefined until mounted on the client.
    // This means if you try to render UI based on the current theme before mounting on the client, you will see a hydration mismatch error.
    // The state is set here to trigger a re-render of this component. Without this re-render, the hydration mismatch error
    // will still occur.
    useEffect(() => {
        setMounted(true);
    }, []);

    // Return a skeleton without the selected theme highlighted.
    if (!mounted) {
        return (
            <div className={className}>
                <button className="appearance-none bg-transparent rounded-sm border-none cursor-pointer p-2 opacity-35">
                    <SunIcon className="h-4 w-4" />
                </button>
                <button className="appearance-none bg-transparent rounded-sm border-none cursor-pointer p-2 opacity-35">
                    <MoonIcon className="h-4 w-4" />
                </button>
                <button className="appearance-none bg-transparent rounded-sm border-none cursor-pointer p-2 opacity-35">
                    <LaptopIcon className="h-4 w-4" />
                </button>
            </div>
        );
    }

    // Return the component with the selected theme highlighted.
    return (
        <div className={className}>
            <button
                className={cn(
                    'appearance-none bg-transparent rounded-sm border-none cursor-pointer p-2 opacity-35',
                    theme === 'light' && 'bg-accent/80 opacity-100',
                )}
                onClick={() => setTheme('light')}
            >
                <SunIcon className="h-4 w-4" />
            </button>
            <button
                className={cn(
                    'appearance-none bg-transparent rounded-sm border-none cursor-pointer p-2 opacity-35',
                    theme === 'dark' && 'bg-accent/80 opacity-100',
                )}
                onClick={() => setTheme('dark')}
            >
                <MoonIcon className="h-4 w-4" />
            </button>
            <button
                className={cn(
                    'appearance-none bg-transparent rounded-sm border-none cursor-pointer p-2 opacity-35',
                    theme === 'system' && 'bg-accent/80 opacity-100',
                )}
                onClick={() => setTheme('system')}
            >
                <LaptopIcon className="h-4 w-4" />
            </button>
        </div>
    );
}

export function ThemeProvider({ children }: PropsWithChildren): ReactNode {
    return (
        <NextThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
            {children}
        </NextThemeProvider>
    );
}
