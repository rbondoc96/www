import { type PropsWithChildren, type ReactNode } from 'react';
import { listExperiences } from '@/lib/experiences';
import { testSanityConnection } from '@/lib/sanity';
import { cn } from '@/utilities/cn';

type SanityTestShellProps = PropsWithChildren<{
    isConnected: boolean;
}>;

function SanityTestShell({ children, isConnected }: SanityTestShellProps): ReactNode {
    return (
        <div className="border rounded-lg p-4 mt-4">
            <h3 className="font-semibold mb-2">Sanity Connection Test</h3>
            <div className="space-y-2">
                <div>
                    Status:{' '}
                    <span
                        className={cn('font-medium', isConnected && 'text-green-600', !isConnected && 'text-red-600')}
                    >
                        {isConnected ? '✅ Connected' : '❌ Failed'}
                    </span>
                </div>

                {children}
            </div>
        </div>
    );
}

export async function SanityTest() {
    const isConnected = await testSanityConnection();

    if (!isConnected) {
        return <SanityTestShell isConnected={isConnected} />;
    }

    const experiences = await listExperiences();

    return (
        <SanityTestShell isConnected>
            <div>
                <div className="text-sm text-gray-600">Found {experiences.length} experiences</div>
            </div>
        </SanityTestShell>
    );
}
