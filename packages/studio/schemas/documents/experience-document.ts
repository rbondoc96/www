import { defineType } from 'sanity';

export const ExperienceDocument = defineType({
    name: 'experience',
    title: 'Experiences',
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
});
