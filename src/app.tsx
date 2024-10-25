import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { type ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Link } from '@/components/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { router } from '@/routes/_router';
import { env } from '@/utilities/env';

export function App(): ReactNode {
    return (
        <div className="container max-w-2xl min-h-screen flex flex-col justify-between p-8">
            <div>
                <header className="my-6">
                    <div className="flex justify-between items-center">
                        <Link className="text-gray-500" href={env('VITE_RESUME_URL')} target="_blank" rel="noreferrer">
                            My Resume
                        </Link>
                        <ThemeToggle />
                    </div>
                </header>
                <main>
                    <RouterProvider router={router} />
                </main>
            </div>
            <footer className="flex justify-center">
                <Link
                    className="text-gray-400"
                    href="https://github.com/rbondoc96"
                    target="_blank"
                    rel="noreferrer"
                    variant="icon-button"
                >
                    <GitHubLogoIcon />
                    <span className="sr-only">GitHub</span>
                </Link>

                <Link
                    className="text-gray-400"
                    href="https://linkedin.com/in/rbondoc96"
                    target="_blank"
                    rel="noreferrer"
                    variant="icon-button"
                >
                    <LinkedInLogoIcon />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </footer>
        </div>
    );
}
