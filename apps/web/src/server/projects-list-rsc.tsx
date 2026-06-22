import { createServerFn } from "@tanstack/react-start";
import { renderServerComponent } from "@tanstack/react-start/rsc";
import { ProjectList } from "@/features/projects/ProjectList.tsx";
import { listProjects } from "@/lib/projects.ts";

export const getProjectListRenderable = createServerFn().handler(async () => {
  const projects = await listProjects();
  const ProjectListRenderable = await renderServerComponent(<ProjectList projects={projects} />);

  return {
    ProjectList: ProjectListRenderable,
  };
});
