"use client";

import { type PropsWithChildren, type ReactNode } from "react";
import { Link } from "@/components/Link.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { cn } from "@/utilities/cn.ts";

type Props = PropsWithChildren<{
  company: string;
  companyUrl?: string;
  positions: Array<{
    period: string;
    title: string;
  }>;
  tags: string[];
}>;

function ExperienceCardBody({ children, company, companyUrl, positions, tags }: Props): ReactNode {
  return (
    <Card className="relative h-full transition-all duration-300 group-hover:translate-y-[-10px]">
      <CardContent className="flex flex-col gap-y-4 p-6">
        <div>
          <h3
            className={cn("text-xl font-bold", companyUrl && "transition-colors duration-400 group-hover:text-accent")}
          >
            {company}
          </h3>
        </div>

        <div className="flex flex-col gap-y-1">
          {positions.map((position, index) => (
            <div key={index} className="text-sm [&>*]:block">
              <span className="font-medium">{position.title}</span>
              <span>{position.period}</span>
            </div>
          ))}
        </div>

        <div>{children}</div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function ExperienceCard(props: Props): ReactNode {
  return (
    <div className="group relative">
      <div
        className={cn(
          "absolute -inset-0.5 -translate-y-[5px]",
          "rounded-lg",
          "bg-gradient-to-tr from-gray-500/50 to-accent/70 dark:from-white/50",
          "blur",
          "opacity-0",
          "transition duration-500 group-hover:opacity-100",
        )}
      />
      {props.companyUrl ? (
        <Link href={props.companyUrl} target="_blank" rel="noreferrer">
          <ExperienceCardBody {...props} />
        </Link>
      ) : (
        <ExperienceCardBody {...props} />
      )}
    </div>
  );
}
