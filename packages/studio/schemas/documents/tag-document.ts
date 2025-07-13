import { defineType } from 'sanity';

export const TagDocument = defineType({
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
});
