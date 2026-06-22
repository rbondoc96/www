import { ArrowUpRightIcon } from "lucide-react";
import { type ReactNode } from "react";
import { type Project } from "@/lib/projects.ts";
import { fraunces } from "@/styles/fonts.ts";
import { cn } from "@/utilities/cn.ts";

type ProjectListItemProps = {
  project: Project;
};

function ProjectListItem({ project }: ProjectListItemProps): ReactNode {
  const nameClassName = cn(fraunces.className, "text-2xl font-medium tracking-[-0.02em] md:text-3xl");

  return (
    <li className="py-8 first:pt-0 last:pb-0">
      {project.url ? (
        <a
          className="group inline-flex items-baseline gap-1.5 transition-colors duration-300 hover:text-accent"
          href={project.url}
          rel="noreferrer"
          target="_blank"
        >
          <span className={nameClassName}>{project.name}</span>
          <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent md:h-5 md:w-5" />
        </a>
      ) : (
        <span className={nameClassName}>{project.name}</span>
      )}

      <div className="mt-5 flex flex-col gap-y-3">
        {project.description.map((text, index) => (
          <p key={index} className="max-w-prose text-sm leading-relaxed text-muted-foreground">
            {text}
          </p>
        ))}
      </div>

      {project.repoUrl !== null && project.repoUrl !== undefined && (
        <a
          className="group mt-5 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-300 hover:text-accent"
          href={project.repoUrl}
          rel="noreferrer"
          target="_blank"
        >
          <span className="hover:underline">Source</span>
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}

      {project.tags.length > 0 && (
        <p className="mt-5 text-xs leading-relaxed tracking-wide text-muted-foreground">{project.tags.join("  ·  ")}</p>
      )}
    </li>
  );
}

ProjectListItem.displayName = "ProjectListItem";

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps): ReactNode {
  if (projects.length === 0) {
    return <p className="mt-4 text-center text-sm text-muted-foreground">No projects to show yet.</p>;
  }

  return (
    <ol className="mx-auto mt-4 w-full max-w-2xl divide-y divide-border">
      {projects.map((project) => (
        <ProjectListItem key={project._id} project={project} />
      ))}
    </ol>
  );
}
