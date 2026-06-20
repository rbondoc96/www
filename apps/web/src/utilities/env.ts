import { object, parse, pipe, string, url } from "valibot";

const envShape = {
  NEXT_PUBLIC_POSTHOG_HOST: string(),
  NEXT_PUBLIC_POSTHOG_KEY: string(),
  NEXT_PUBLIC_RESUME_URL: pipe(string(), url()),
  NEXT_PUBLIC_SANITY_DATASET: string(),
  NEXT_PUBLIC_SANITY_PROJECT_ID: string(),
};

const PublicEnv = object(envShape);

type PublicEnvKey = keyof typeof envShape;

function readPublicEnv(key: PublicEnvKey): string | undefined {
  const processEnv = typeof process === "undefined" ? undefined : process.env;

  return import.meta.env[key] ?? processEnv?.[key];
}

export const env = parse(PublicEnv, {
  NEXT_PUBLIC_POSTHOG_HOST: readPublicEnv("NEXT_PUBLIC_POSTHOG_HOST"),
  NEXT_PUBLIC_POSTHOG_KEY: readPublicEnv("NEXT_PUBLIC_POSTHOG_KEY"),
  NEXT_PUBLIC_RESUME_URL: readPublicEnv("NEXT_PUBLIC_RESUME_URL"),
  NEXT_PUBLIC_SANITY_DATASET: readPublicEnv("NEXT_PUBLIC_SANITY_DATASET"),
  NEXT_PUBLIC_SANITY_PROJECT_ID: readPublicEnv("NEXT_PUBLIC_SANITY_PROJECT_ID"),
});
