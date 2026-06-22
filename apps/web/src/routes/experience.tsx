import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { ExperiencePage } from "@/features/experience/ExperiencePage.tsx";
import { getExperienceTimelineRenderable } from "@/server/experience-timeline-rsc.tsx";

export const Route = createFileRoute("/experience")({
  component: ExperienceRoute,
  head: () => ({
    meta: [
      {
        title: "Rodrigo Bondoc | Experience",
      },
    ],
  }),
  loader: () => getExperienceTimelineRenderable(),
  staleTime: 60_000,
});

function ExperienceRoute(): ReactNode {
  const { Timeline } = Route.useLoaderData();

  return <ExperiencePage timeline={Timeline} />;
}
