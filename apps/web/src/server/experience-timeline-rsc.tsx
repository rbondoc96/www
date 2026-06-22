import { createServerFn } from "@tanstack/react-start";
import { renderServerComponent } from "@tanstack/react-start/rsc";
import { Timeline } from "@/features/experience/Timeline.tsx";
import { listExperiences } from "@/lib/experiences.ts";

export const getExperienceTimelineRenderable = createServerFn().handler(async () => {
  const experiences = await listExperiences();
  const TimelineRenderable = await renderServerComponent(<Timeline experiences={experiences} />);

  return {
    Timeline: TimelineRenderable,
  };
});
