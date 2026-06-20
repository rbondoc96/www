"use client";

import { useRouterState } from "@tanstack/react-router";
import posthogJs from "posthog-js";
import { PostHogProvider, usePostHog } from "posthog-js/react";
import { type PropsWithChildren, type ReactNode, Suspense, useEffect } from "react";
import { TrackedEvent } from "@/analytics/tracked-event";
import { env } from "@/utilities/env";

function PostHogPageView(): ReactNode {
  const href = useRouterState({ select: (state) => state.location.href });
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture(TrackedEvent.PageView, { $current_url: `${window.location.origin}${href}` });
  }, [href, posthog]);

  return null;
}

function SuspensedPostHogPageView(): ReactNode {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
}

export function AnalyticsProvider({ children }: PropsWithChildren): ReactNode {
  useEffect(() => {
    posthogJs.init(env.VITE_POSTHOG_KEY, {
      api_host: env.VITE_POSTHOG_HOST,
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
