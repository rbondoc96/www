import { type ReactNode } from 'react';
import { SiteNavigation } from '@/app/navigation';
import { orbitron } from '@/app/ui/fonts';

export default function Page(): ReactNode {
    return (
        <main className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col justify-center items-center gap-6 mb-12">
                <h1 className={`${orbitron.className} font-semibold text-8xl md:text-9xl tracking-tight`}>RDB</h1>
                <p className="font-light text-center text-sm md:text-lg">Rodrigo Bondoc · San Francisco, CA</p>
                <SiteNavigation />
            </div>
        </main>
    );
}
