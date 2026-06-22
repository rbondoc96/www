import { object, parse, string } from "valibot";

const envShape = {
  VITE_POSTHOG_HOST: string(),
  VITE_POSTHOG_KEY: string(),
  VITE_SANITY_DATASET: string(),
  VITE_SANITY_PROJECT_ID: string(),
};

const PublicEnv = object(envShape);

type PublicEnvKey = keyof typeof envShape;

function readPublicEnv(key: PublicEnvKey): string | undefined {
  const processEnv = typeof process === "undefined" ? undefined : process.env;

  return import.meta.env[key] ?? processEnv?.[key];
}

export const env = parse(PublicEnv, {
  VITE_POSTHOG_HOST: readPublicEnv("VITE_POSTHOG_HOST"),
  VITE_POSTHOG_KEY: readPublicEnv("VITE_POSTHOG_KEY"),
  VITE_SANITY_DATASET: readPublicEnv("VITE_SANITY_DATASET"),
  VITE_SANITY_PROJECT_ID: readPublicEnv("VITE_SANITY_PROJECT_ID"),
});
