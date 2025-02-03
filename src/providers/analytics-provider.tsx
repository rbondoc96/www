import { PostHogProvider } from 'posthog-js/react';
import { type PropsWithChildren, type ReactNode } from 'react';
import { env } from '@/utilities/env';

export function AnalyticsProvider({ children }: PropsWithChildren): ReactNode {
    return (
        <PostHogProvider
            apiKey={env('VITE_POSTHOG_KEY')}
            options={{
                api_host: env('VITE_POSTHOG_HOST'),
            }}
        >
            {children}
        </PostHogProvider>
    );
}
