export const TrackedEvent = {
    GitHubView: 'github_view',
    LinkedInView: 'linked_in_view',
    PageView: '$pageview',
    ResumeView: 'resume_view',
} as const;

export type TrackedEvent = (typeof TrackedEvent)[keyof typeof TrackedEvent];
