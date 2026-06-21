import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/features/projects/projects-page.tsx";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      {
        title: "Rodrigo Bondoc | Projects",
      },
    ],
  }),
});
