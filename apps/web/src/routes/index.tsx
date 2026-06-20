import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { HomePage } from "@/features/home/home-page";
import { getSanityTestRenderable } from "@/server/sanity-test-rsc";

export const Route = createFileRoute("/")({
  component: HomeRoute,
  loader: async () => {
    if (!import.meta.env.DEV) {
      return {
        SanityTest: null,
      };
    }

    return getSanityTestRenderable();
  },
});

function HomeRoute(): ReactNode {
  const { SanityTest } = Route.useLoaderData();

  return <HomePage sanityTest={SanityTest} />;
}
