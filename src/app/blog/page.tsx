import { type Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Rodrigo Bondoc | Blog',
};

export default function Page(): ReactNode {
    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <p>Coming soon...</p>
        </div>
    );
}
