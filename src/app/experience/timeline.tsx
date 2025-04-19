'use client';

import { ArrowUpRightIcon } from 'lucide-react';
import { type ReactNode } from 'react';
import { Link } from '@/components/link';
import { Badge } from '@/components/ui/badge';

type Section = {
    company: string;
    href: string;
    positions: Array<{
        title: string;
        period: string;
    }>;
    body: string[];
    tags: string[];
};

const sections: Section[] = [
    {
        company: 'Sourcetoad',
        href: 'https://sourcetoad.com/',
        positions: [
            { title: 'Software Engineer II', period: '2023 - Present' },
            { title: 'Software Engineer I', period: '2022 - 2023' },
        ],
        body: [
            'Build and maintain responsive web and mobile apps for internal use and for clients across healthcare, cruise, retail, and other industries.',
            'Collaborate with developers, designers, and product owners to deliver new features, modernize legacy codebases, and integrate third-party APIs like Stripe and OpenAI.',
        ],
        tags: [
            'AI Integration',
            'JavaScript',
            'TypeScript',
            'HTML & SCSS',
            'React',
            'React Native',
            'Vue.js',
            'PHP',
            'Laravel',
            'REST APIs',
        ],
    },
    {
        company: 'snapClinical',
        href: 'https://www.snapclinical.cn/',
        positions: [{ title: 'Software QA Engineer', period: '2021 - 2022' }],
        body: [
            'Test web and mobile apps built with a proprietary, low-code development system for pharmaceutical companies conducting decentralized clinical trials.',
            'Report bugs based on project requirements, device compatibility, and FDA/HIPAA compliance.',
        ],
        tags: ['Web App Testing', 'Mobile App Testing', 'HIPAA', 'Medical Compliance'],
    },
    {
        company: 'Raveon',
        href: 'https://www.raveon.com/',
        positions: [{ title: 'Electrical Engineer', period: '2019' }],
        body: [
            'Research and integrate MQTT and MODBUS protocols to support new features in RF devices used in telemetry and SCADA systems.',
        ],
        tags: ['C', 'Linux', 'Embedded Systems', 'Telemetry'],
    },
];

type TimelineItemProps = {
    section: Section;
};

const TimelineItem = ({ section }: TimelineItemProps) => {
    return (
        <div className="grid grid-cols-2">
            <div className="hidden sm:block mt-2">
                <Link
                    className="group relative inline-flex tracking-tight text-3xl md:text-4xl lg:text-5xl hover:text-accent transition-colors duration-400"
                    href={section.href}
                    rel="noreferrer"
                    target="_blank"
                >
                    {section.company}
                    <ArrowUpRightIcon className="absolute top-1/3 -right-8 transition-transform group-hover:-translate-y-1/2 group-hover:translate-x-1/4" />
                </Link>
            </div>
            <div className="relative col-span-2 sm:col-span-1 flex flex-col gap-y-4 border-l border-zinc-700 pl-8 ml-4 sm:ml-0">
                <div className="absolute top-0 left-0 -translate-x-1/2 h-5 w-5 rounded-full bg-black dark:bg-white" />
                <Link
                    className="sm:hidden inline-block tracking-tight text-xl hover:text-accent hover:-translate-y-[5px] transition-all duration-400"
                    href={section.href}
                    rel="noreferrer"
                    target="_blank"
                >
                    {section.company}
                </Link>
                <div className="mt-2">
                    {section.positions.map((position, index) => (
                        <div key={index} className="flex flex-col gap-y-1 mb-4">
                            <span className="sm:text-lg md:text-xl font-medium">{position.title}</span>
                            <span className="text-xs sm:text-sm text-zinc-400">{position.period}</span>
                        </div>
                    ))}
                </div>
                <div>
                    {section.body.map((text, index) => (
                        <p key={index} className="leading-normal text-xs sm:text-sm font-light mb-4">
                            {text}
                        </p>
                    ))}
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-2 pb-20">
                    {section.tags.map((tag, index) => (
                        <Badge key={index} variant="accent">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

TimelineItem.displayName = 'TimelineItem';

export function Timeline(): ReactNode {
    return (
        <div className="mt-4">
            {sections.map((section, index) => (
                <TimelineItem key={index} section={section} />
            ))}
        </div>
    );
}
