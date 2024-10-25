import '@/styles/routes/work.scss';

import { type ReactNode } from 'react';
import { Link } from '@/components/link';

export function Work(): ReactNode {
    return (
        <div className="flex flex-col gap-8 mb-12">
            <div>
                <h1 className="font-medium xanim-fade-in">Work</h1>
                <Link to="/" className="font-medium text-gray-500 hover:text-gray-500 transition-work-name">
                    Rodrigo Bondoc
                </Link>
            </div>

            <p>
                Mid-level software engineer, certified{' '}
                <Link href="https://bcert.me/bc/html/show-badge.html?b=hylkcbui" rel="noreferrer" target="_blank">
                    Scrum Master
                </Link>
                , and certified{' '}
                <Link href="https://bcert.me/bc/html/show-badge.html?b=cbvfgdpt" rel="noreferrer" target="_blank">
                    Scrum Developer
                </Link>{' '}
                with 4 years of industry experience. I&apos;ve led integrations across web and mobile platforms,
                contributing to both design and development. Here&apos;s a summary of my career so far.
            </p>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                    <h2 className="font-medium">Sourcetoad</h2>
                    <small className="text-sm text-gray-500">Software Engineer II, 2023 - present</small>
                    <small className="text-sm text-gray-500">Software Engineer I, 2022 - 2023</small>
                </div>

                <p>
                    Sourcetoad is a product development agency based in Tampa, FL, serving a variety of clients from
                    small businesses to large enterprises. We specialize in designing and implementing market solutions
                    across industries, including the cruise and ferry sectors.
                </p>

                <p>
                    I initially focused on mobile development with React Native but quickly grew into a full-stack role,
                    contributing to both backend and frontend efforts using Laravel and Vue.js. I&apos;m now the
                    designated subject matter expert for a project built with React Native and Laravel.
                </p>

                <p>
                    In addition to our primary tech stack, my team tackles diverse technologies. I&apos;ve worked on a
                    microservices project using Python and FastAPI and developed an AI categorization feature using
                    OpenAI&apos;s API and retrieval-augmented generation (RAG).
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                    <h2 className="font-medium">snapClinical, by Fortrea</h2>
                    <small className="text-sm text-gray-500">Software QA Analyst, 2021 - 2022</small>
                </div>

                <p>
                    snapClinical creates web and mobile applications with a proprietary low-code platform. As part of
                    the quality assurance team, I tested applications to meet pharmaceutical client requirements and
                    ensured FDA, HIPAA, and 21 CFR Part 11 compliance.
                </p>

                <p>
                    I developed a strong understanding of our single-tenant SaaS admin platform, enabling me to support
                    critical bug fixes and add key features by providing root-cause analysis and detailed evidence for
                    developers.
                </p>

                <p>
                    As a trusted team member, I led the adoption of new testing and documentation processes for thorough
                    compliance. I collaborated across teams, training testers to utilize tools like browser developer
                    tools, Android Studio, and Xcode to improve bug report quality and enhance testing efforts
                    company-wide.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                    <h2 className="font-medium">Aya Healthcare</h2>
                    <small className="text-sm text-gray-500">Compliance Specialist, 2019 - 2020</small>
                </div>

                <p>
                    Aya Healthcare is one of the largest travel nursing agencies in the United States. In my time at
                    Aya, I worked in the compliance department during the height of the COVID-19 pandemic.
                </p>

                <p>
                    Outside of work, I dedicated time to learning HTML, CSS, JavaScript, and Python, building my
                    technical foundation through side projects. With that knowledge, I automated repetitive tasks by
                    adding JavaScript to our template PDFs, improving team efficiency and reducing manual work.
                </p>
            </div>
        </div>
    );
}
