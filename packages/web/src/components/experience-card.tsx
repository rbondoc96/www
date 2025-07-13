'use client';

import { type PropsWithChildren, type ReactNode } from 'react';
import { Link } from '@/components/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/utilities/cn';

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
                        className={cn(
                            'font-bold text-xl',
                            companyUrl && 'group-hover:text-accent transition-colors duration-400',
                        )}
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
                    'absolute -inset-0.5 -translate-y-[5px]',
                    'rounded-lg',
                    'bg-gradient-to-tr from-gray-500/50 dark:from-white/50 to-accent/70',
                    'blur',
                    'opacity-0',
                    'group-hover:opacity-100 transition duration-500',
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
