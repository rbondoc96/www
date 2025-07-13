import { type ReactNode } from 'react';
import { SiteNavigation } from '@/app/navigation';
import { ThemeSwitch } from '@/app/theme-provider';
import { orbitron } from '@/app/ui/fonts';
import { SanityTest } from '@/components/sanity-test';

export default function Page(): ReactNode {
    return (
        <>
            <header>
                <div className="flex justify-end my-8">
                    <ThemeSwitch />
                </div>
            </header>
            <main className="flex-1 flex flex-col">
                <div className="flex-1 flex flex-col justify-center items-center gap-6 mb-12">
                    <h1 className={`${orbitron.className} font-semibold text-8xl md:text-9xl tracking-tight`}>RDB</h1>
                    <p className="font-light text-center text-sm md:text-lg">Rodrigo Bondoc · San Francisco, CA</p>
                    <SiteNavigation />
                    <SanityTest />
                </div>
            </main>
        </>
    );
}
