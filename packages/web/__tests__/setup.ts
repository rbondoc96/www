import { createElement, type AnchorHTMLAttributes, type PropsWithChildren } from "react";
import { vi } from "vitest";

process.env.NEXT_PUBLIC_POSTHOG_HOST = "https://us.i.posthog.com";
process.env.NEXT_PUBLIC_POSTHOG_KEY = "test-posthog-key";
process.env.NEXT_PUBLIC_RESUME_URL = "https://example.com/resume.pdf";
process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "test-project-id";
process.env.NEXT_PUBLIC_SANITY_DATASET = "test-dataset";

vi.mock("next/font/google", () => ({
  Orbitron: vi.fn().mockReturnValue({ className: "orbitron" }),
  Sora: vi.fn().mockReturnValue({ className: "sora" }),
}));

vi.mock("next-view-transitions", () => ({
  Link: ({ children, href, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) =>
    createElement("a", { href, ...props }, children),
  ViewTransitions: ({ children }: PropsWithChildren) => children,
}));
