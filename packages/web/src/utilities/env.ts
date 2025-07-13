import { createEnv } from '@t3-oss/env-nextjs';
import { pipe, string, url } from 'valibot';

export const env = createEnv({
    client: {
        NEXT_PUBLIC_POSTHOG_HOST: string(),
        NEXT_PUBLIC_POSTHOG_KEY: string(),
        NEXT_PUBLIC_RESUME_URL: pipe(string(), url()),
        NEXT_PUBLIC_SANITY_PROJECT_ID: string(),
        NEXT_PUBLIC_SANITY_DATASET: string(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
        NEXT_PUBLIC_RESUME_URL: process.env.NEXT_PUBLIC_RESUME_URL,
        NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    },
});
