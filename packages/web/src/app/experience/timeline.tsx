'use client';

import { ArrowUpRightIcon } from 'lucide-react';
import { type ReactNode } from 'react';
import { Link } from '@/components/link';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/lib/sanity-queries';

type TimelineItemProps = {
    experience: Experience;
};

const TimelineItem = ({ experience }: TimelineItemProps) => {
    return (
        <div className="grid grid-cols-2">
            <div className="hidden sm:block mt-2">
                <Link
                    className="group relative inline-flex tracking-tight text-3xl md:text-4xl lg:text-5xl hover:text-accent transition-colors duration-400"
                    href={experience.url}
                    rel="noreferrer"
                    target="_blank"
                >
                    {experience.company_name}
                    <ArrowUpRightIcon className="absolute top-1/3 -right-8 transition-transform group-hover:-translate-y-1/2 group-hover:translate-x-1/4" />
                </Link>
            </div>
            <div className="relative col-span-2 sm:col-span-1 flex flex-col gap-y-4 border-l border-zinc-700 pl-8 ml-4 sm:ml-0">
                <div className="absolute top-0 left-0 -translate-x-1/2 h-5 w-5 rounded-full bg-black dark:bg-white" />
                <div className="sm:hidden">
                    <Link
                        className="group relative sm:hidden inline-flex tracking-tight text-xl hover:text-accent transition-colors duration-400"
                        href={experience.url}
                        rel="noreferrer"
                        target="_blank"
                    >
                        {experience.url}
                        <ArrowUpRightIcon className="absolute top-1/3 -right-5 h-4 w-4 transition-transform group-hover:-translate-y-1/3 group-hover:translate-x-1/5" />
                    </Link>
                </div>
                <div className="mt-2">
                    {experience.titles.map((title, index) => (
                        <div key={index} className="flex flex-col gap-y-1 mb-4">
                            <span className="sm:text-lg md:text-xl font-medium">{title.title}</span>
                            <span className="text-xs sm:text-sm text-zinc-400">{title.period}</span>
                        </div>
                    ))}
                </div>
                <div>
                    {experience.description.map((text, index) => (
                        <p key={index} className="leading-normal text-xs sm:text-sm font-light mb-4">
                            {text}
                        </p>
                    ))}
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-2 pb-20">
                    {experience.tags.map((tag, index) => (
                        <Badge key={index} variant="accent">
                            {tag.label}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

TimelineItem.displayName = 'TimelineItem';

type TimelineProps = {
    experiences: Experience[];
};

export function Timeline({ experiences }: TimelineProps): ReactNode {
    console.log(experiences);
    return (
        <div className="mt-4">
            {experiences.map((experience, index) => (
                <TimelineItem key={index} experience={experience} />
            ))}
        </div>
    );
}
