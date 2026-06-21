import { ArrowUpRightIcon } from "lucide-react";
import { type ReactNode } from "react";
import { Badge } from "@/components/ui/Badge.tsx";
import { type Experience } from "@/lib/experiences.ts";

type TimelineItemProps = {
  experience: Experience;
};

function TimelineItem({ experience }: TimelineItemProps): ReactNode {
  return (
    <div className="grid grid-cols-2">
      <div className="mt-2 hidden sm:block">
        <a
          className="group relative inline-flex text-3xl tracking-tight transition-colors duration-400 hover:text-accent md:text-4xl lg:text-5xl"
          href={experience.url}
          rel="noreferrer"
          target="_blank"
        >
          {experience.company_name}
          <ArrowUpRightIcon className="absolute top-1/3 -right-8 transition-transform group-hover:translate-x-1/4 group-hover:-translate-y-1/2" />
        </a>
      </div>
      <div className="relative col-span-2 ml-4 flex flex-col gap-y-4 border-l border-zinc-700 pl-8 sm:col-span-1 sm:ml-0">
        <div className="absolute top-0 left-0 h-5 w-5 -translate-x-1/2 rounded-full bg-black dark:bg-white" />
        <div className="sm:hidden">
          <a
            className="group relative inline-flex text-xl tracking-tight transition-colors duration-400 hover:text-accent sm:hidden"
            href={experience.url}
            rel="noreferrer"
            target="_blank"
          >
            {experience.url}
            <ArrowUpRightIcon className="absolute top-1/3 -right-5 h-4 w-4 transition-transform group-hover:translate-x-1/5 group-hover:-translate-y-1/3" />
          </a>
        </div>
        <div className="mt-2">
          {experience.titles.map((title, index) => (
            <div key={index} className="mb-4 flex flex-col gap-y-1">
              <span className="font-medium sm:text-lg md:text-xl">{title.title}</span>
              <span className="text-xs text-zinc-400 sm:text-sm">{title.period}</span>
            </div>
          ))}
        </div>
        <div>
          {experience.description.map((text, index) => (
            <p key={index} className="mb-4 text-xs leading-normal font-light sm:text-sm">
              {text}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-2 pb-20">
          {experience.tags.map((tag, index) => (
            <Badge key={index} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

TimelineItem.displayName = "TimelineItem";

type TimelineProps = {
  experiences: Experience[];
};

export function Timeline({ experiences }: TimelineProps): ReactNode {
  return (
    <div className="mt-4">
      {experiences.map((experience, index) => (
        <TimelineItem key={index} experience={experience} />
      ))}
    </div>
  );
}
