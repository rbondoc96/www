import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { ProjectsPage } from "@/features/projects/ProjectsPage.tsx";
import { getProjectListRenderable } from "@/server/projects-list-rsc.tsx";

export const Route = createFileRoute("/projects")({
  component: ProjectsRoute,
  head: () => ({
    meta: [
      {
        title: "Rodrigo Bondoc | Projects",
      },
    ],
  }),
  loader: () => getProjectListRenderable(),
  staleTime: 60_000,
});

function ProjectsRoute(): ReactNode {
  const { ProjectList } = Route.useLoaderData();

  return <ProjectsPage projectList={ProjectList} />;
}
