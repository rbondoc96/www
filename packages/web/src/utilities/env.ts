import { createEnv } from '@t3-oss/env-nextjs';
import { pipe, string, url } from 'valibot';

export const env = createEnv({
    client: {
        NEXT_PUBLIC_POSTHOG_HOST: string(),
        NEXT_PUBLIC_POSTHOG_KEY: string(),
        NEXT_PUBLIC_RESUME_URL: pipe(string(), url()),
    },
    runtimeEnv: {
        NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
        NEXT_PUBLIC_RESUME_URL: process.env.NEXT_PUBLIC_RESUME_URL,
    },
});
