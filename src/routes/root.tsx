import '@/styles/routes/root.scss';

import { type ReactNode } from 'react';
import { Link } from '@/components/link';

export function Root(): ReactNode {
    return (
        <div className="flex flex-col gap-6 mb-12">
            <h1 className="font-medium transition-root-name">Rodrigo Bondoc</h1>
            <p>
                I&apos;m a software engineer based in San Francisco, CA and am currently employed at{' '}
                <Link to="/work">Sourcetoad</Link>. I specialize in creating seamless web and mobile experiences using
                technologies such as React, Vue.js, and Laravel, with a focus on scalable, user-centered design.
            </p>
        </div>
    );
}
