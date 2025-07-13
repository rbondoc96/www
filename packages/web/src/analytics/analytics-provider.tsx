'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import posthogJs from 'posthog-js';
import { PostHogProvider, usePostHog } from 'posthog-js/react';
import { type PropsWithChildren, type ReactNode, Suspense, useEffect } from 'react';
import { TrackedEvent } from '@/analytics/tracked-event';
import { env } from '@/utilities/env';

function PostHogPageView(): ReactNode {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const posthog = usePostHog();

    useEffect(() => {
        if (pathname && posthog) {
            let url = window.origin + pathname;
            if (searchParams.toString()) {
                url += `?${searchParams.toString()}`;
            }

            posthog.capture(TrackedEvent.PageView, { $current_url: url });
        }
    }, [pathname, posthog, searchParams]);

    return null;
}

/**
 * Wrap this in Suspense to avoid the `useSearchParams` usage above
 * from de-opting the whole app into client-side rendering
 *
 * @see {@link https://nextjs.org/docs/messages/deopted-into-client-rendering}
 */
function SuspensedPostHogPageView(): ReactNode {
    return (
        <Suspense fallback={null}>
            <PostHogPageView />
        </Suspense>
    );
}

export function AnalyticsProvider({ children }: PropsWithChildren): ReactNode {
    useEffect(() => {
        posthogJs.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
            api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
            // Next.js acts as a SPA, so this event doesn't trigger on navigation.
            // Page View events will need to be captured manually.
            capture_pageview: false,
        });
    }, []);

    return (
        <PostHogProvider client={posthogJs}>
            <SuspensedPostHogPageView />
            {children}
        </PostHogProvider>
    );
}
