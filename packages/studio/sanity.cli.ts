import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
    api: {
        projectId: 'f8bpnbiz',
        dataset: 'production',
    },
    studioHost: 'your-studio-host', // Optional: custom studio hostname
});
