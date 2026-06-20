import { createElement, type AnchorHTMLAttributes, type PropsWithChildren } from "react";
import { vi } from "vitest";

process.env.NEXT_PUBLIC_POSTHOG_HOST = "https://us.i.posthog.com";
process.env.NEXT_PUBLIC_POSTHOG_KEY = "test-posthog-key";
process.env.NEXT_PUBLIC_RESUME_URL = "https://example.com/resume.pdf";
process.env.NEXT_PUBLIC_SANITY_DATASET = "test-dataset";
process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "test-project-id";

vi.mock("@tanstack/react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@tanstack/react-router")>();

  return {
    ...actual,
    Link: ({ children, to, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }>) =>
      createElement("a", { href: to, ...props }, children),
  };
});
