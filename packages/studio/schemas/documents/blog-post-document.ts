import { defineType } from 'sanity';

export const BlogPostDocument = defineType({
    name: 'blog_post',
    title: 'Blog Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
    ],
});
