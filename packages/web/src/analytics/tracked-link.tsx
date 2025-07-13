'use client';

import { type CaptureOptions, type Properties } from 'posthog-js';
import { usePostHog } from 'posthog-js/react';
import { type ReactNode } from 'react';
import type { TrackedEvent } from '@/analytics/tracked-event';
import { Link, type LinkProps } from '@/components/link';

interface Props extends Omit<LinkProps, 'href' | 'onClick' | 'to'> {
    event: TrackedEvent;
    href: string;
    options?: CaptureOptions;
    properties?: Properties | null;
}

export function TrackedLink({ children, event, href, options, properties, ...props }: Props): ReactNode {
    const posthog = usePostHog();

    return (
        <Link href={href} onClick={() => posthog.capture(event, properties, options)} {...props}>
            {children}
        </Link>
    );
}
