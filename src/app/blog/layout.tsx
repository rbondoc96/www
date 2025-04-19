import { type PropsWithChildren, type ReactNode, unstable_ViewTransition as ViewTransition } from 'react';
import { HeaderNavigation } from '@/app/navigation';

export default function BlogLayout({ children }: PropsWithChildren): ReactNode {
    return (
        <ViewTransition>
            <HeaderNavigation />
            <main className="flex-1 flex flex-col">{children}</main>
        </ViewTransition>
    );
}
