import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { TrackedEvent } from '@/analytics/tracked-event';
import { TrackedLink } from '@/analytics/tracked-link';
import { Timeline } from '@/app/experience/timeline';
import { orbitron } from '@/app/ui/fonts';
import { IconButton } from '@/components/buttons/icon-button';
import { listExperiences } from '@/lib/experiences';
import { cn } from '@/utilities/cn';
import { env } from '@/utilities/env';

export const metadata: Metadata = {
    title: 'Rodrigo Bondoc | Experience',
};

export default async function Page(): Promise<ReactNode> {
    const experiences = await listExperiences();

    return (
        <main className="flex-1 flex flex-col gap-6 md:gap-8 md:mt-6 lg:mt-8 mb-12">
            <h1
                className={cn(
                    orbitron.className,
                    'font-semibold tracking-tight',
                    'lg:text-7xl md:text-5xl text-3xl',
                    'text-center font-semibold',
                    'mt-8',
                )}
            >
                Rodrigo Bondoc
            </h1>

            <p className="text-center text-lg sm:text-xl md:text-2xl font-light">Software Engineer</p>

            <div className="flex justify-center">
                <TrackedLink
                    className="text-center text-xs sm:text-sm md:text-base text-accent underline underline-offset-4"
                    event={TrackedEvent.ResumeView}
                    href={env.NEXT_PUBLIC_RESUME_URL}
                    rel="noreferrer"
                    target="_blank"
                >
                    View My Resumé
                </TrackedLink>
            </div>

            <div>
                <div className="flex justify-center">
                    <TrackedLink
                        className="text-gray-500 hover:text-accent cursor-pointer"
                        event={TrackedEvent.GitHubView}
                        href="https://github.com/rbondoc96"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <IconButton>
                            <GitHubLogoIcon />
                            <span className="sr-only">GitHub</span>
                        </IconButton>
                    </TrackedLink>

                    <TrackedLink
                        className="text-gray-500 hover:text-accent cursor-pointer"
                        event={TrackedEvent.LinkedInView}
                        href="https://linkedin.com/in/rbondoc96"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <IconButton>
                            <LinkedInLogoIcon />
                            <span className="sr-only">LinkedIn</span>
                        </IconButton>
                    </TrackedLink>
                </div>
            </div>

            <Timeline experiences={experiences} />
        </main>
    );
}
