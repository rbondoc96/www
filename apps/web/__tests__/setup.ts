import { createElement, type AnchorHTMLAttributes, type PropsWithChildren } from "react";
import { vi } from "vitest";

process.env.VITE_POSTHOG_HOST = "https://us.i.posthog.com";
process.env.VITE_POSTHOG_KEY = "test-posthog-key";
process.env.VITE_RESUME_URL = "https://example.com/resume.pdf";
process.env.VITE_SANITY_DATASET = "test-dataset";
process.env.VITE_SANITY_PROJECT_ID = "test-project-id";

vi.mock("@tanstack/react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@tanstack/react-router")>();

  return {
    ...actual,
    Link: ({ children, to, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }>) =>
      createElement("a", { href: to, ...props }, children),
  };
});
