import { ArrowUpRightIcon } from "lucide-react";
import { type ReactNode } from "react";
import { type Experience } from "@/lib/experiences.ts";
import { fraunces } from "@/styles/fonts.ts";
import { cn } from "@/utilities/cn.ts";

type TimelineItemProps = {
  experience: Experience;
};

function TimelineItem({ experience }: TimelineItemProps): ReactNode {
  return (
    <li className="relative border-l border-accent/30 pb-14 pl-8 last:border-transparent last:pb-0">
      {/* Node on the green spine */}
      <span
        aria-hidden
        className="absolute top-1.5 -left-[6px] h-3 w-3 rounded-full bg-accent ring-4 ring-background"
      />

      <a
        className="group inline-flex items-baseline gap-1.5 transition-colors duration-300 hover:text-accent"
        href={experience.url}
        rel="noreferrer"
        target="_blank"
      >
        <span className={cn(fraunces.className, "text-2xl font-medium tracking-[-0.02em] md:text-3xl")}>
          {experience.company_name}
        </span>
        <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent md:h-5 md:w-5" />
      </a>

      <div className="mt-5 flex flex-col gap-y-3">
        {experience.titles.map((title, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-medium md:text-lg">{title.title}</span>
            <span className="text-sm text-muted-foreground">{title.period}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-y-3">
        {experience.description.map((text, index) => (
          <p key={index} className="max-w-prose text-sm leading-relaxed text-muted-foreground">
            {text}
          </p>
        ))}
      </div>

      {experience.tags.length > 0 && (
        <p className="mt-5 text-xs leading-relaxed tracking-wide text-muted-foreground">
          {experience.tags.join("  ·  ")}
        </p>
      )}
    </li>
  );
}

TimelineItem.displayName = "TimelineItem";

type TimelineProps = {
  experiences: Experience[];
};

export function Timeline({ experiences }: TimelineProps): ReactNode {
  return (
    <ol className="mx-auto mt-4 w-full max-w-2xl">
      {experiences.map((experience, index) => (
        <TimelineItem key={index} experience={experience} />
      ))}
    </ol>
  );
}
