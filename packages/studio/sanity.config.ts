import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { BlogPostDocument } from './schemas/documents/blog-post-document';
import { ExperienceDocument } from './schemas/documents/experience-document';
import { TagDocument } from './schemas/documents/tag-document';

export default defineConfig({
    name: 'default',
    title: 'Rodrigo Bondoc Studio',

    projectId: process.env.SANITY_STUDIO_PRODUCT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET!,

    plugins: [structureTool(), visionTool()],

    schema: {
        types: [BlogPostDocument, ExperienceDocument, TagDocument],
    },
});
