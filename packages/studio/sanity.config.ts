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
            {
                name: 'experience',
                title: 'Experience',
                type: 'document',
                fields: [
                    {
                        name: 'company_name',
                        title: 'Company Name',
                        type: 'string',
                    },
                    {
                        name: 'url',
                        title: 'URL',
                        type: 'url',
                    },
                    {
                        name: 'description',
                        title: 'Description',
                        type: 'array',
                        of: [{ type: 'string' }],
                    },
                    {
                        name: 'titles',
                        title: 'Titles',
                        type: 'array',
                        of: [
                            {
                                type: 'object',
                                fields: [
                                    {
                                        name: 'title',
                                        title: 'Title',
                                        type: 'string',
                                    },
                                    {
                                        name: 'period',
                                        title: 'Period',
                                        type: 'string',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'tags',
                        title: 'Tags',
                        type: 'array',
                        of: [
                            {
                                type: 'reference',
                                to: [{ type: 'tag' }],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'tag',
                title: 'Tags',
                type: 'document',
                fields: [
                    {
                        name: 'label',
                        title: 'Label',
                        type: 'string',
                    },
                ],
            },
        ],
    },
});

