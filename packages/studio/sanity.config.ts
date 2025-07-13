import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
    name: 'default',
    title: 'Rodrigo Bondoc Studio',

    projectId: 'f8bpnbiz',
    dataset: 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: [
            // Define your schema types here
            // Example:
            {
                name: 'post',
                title: 'Post',
                type: 'document',
                fields: [
                    {
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                    },
                ],
            },
        ],
    },
});
