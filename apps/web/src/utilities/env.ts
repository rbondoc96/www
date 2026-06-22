import { email, object, parse, pipe, string } from "valibot";

const envShape = {
  VITE_POSTHOG_HOST: string(),
  VITE_POSTHOG_KEY: string(),
  VITE_SANITY_DATASET: string(),
  VITE_SANITY_PROJECT_ID: string(),
};

const serverEnvShape = {
  CONTACT_FROM: pipe(string(), email()),
  CONTACT_TO: pipe(string(), email()),
  RESEND_API_KEY: string(),
};

const PublicEnv = object(envShape);
const ServerEnv = object(serverEnvShape);

type PublicEnvKey = keyof typeof envShape;
type ServerEnvKey = keyof typeof serverEnvShape;

function readPublicEnv(key: PublicEnvKey): string | undefined {
  const processEnv = typeof process === "undefined" ? undefined : process.env;

  return import.meta.env[key] ?? processEnv?.[key];
}

function readServerEnv(key: ServerEnvKey): string | undefined {
  return typeof process === "undefined" ? undefined : process.env[key];
}

export const env = parse(PublicEnv, {
  VITE_POSTHOG_HOST: readPublicEnv("VITE_POSTHOG_HOST"),
  VITE_POSTHOG_KEY: readPublicEnv("VITE_POSTHOG_KEY"),
  VITE_SANITY_DATASET: readPublicEnv("VITE_SANITY_DATASET"),
  VITE_SANITY_PROJECT_ID: readPublicEnv("VITE_SANITY_PROJECT_ID"),
});

export const serverEnv = parse(ServerEnv, {
  CONTACT_FROM: readServerEnv("CONTACT_FROM"),
  CONTACT_TO: readServerEnv("CONTACT_TO"),
  RESEND_API_KEY: readServerEnv("RESEND_API_KEY"),
});
