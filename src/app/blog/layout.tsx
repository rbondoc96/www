import { type PropsWithChildren, type ReactNode } from 'react';
import { HeaderNavigation } from '@/app/navigation';

export default function BlogLayout({ children }: PropsWithChildren): ReactNode {
    return (
        <>
            <HeaderNavigation />
            <main className="flex-1 flex flex-col">{children}</main>
        </>
    );
}
