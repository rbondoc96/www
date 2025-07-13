import { createClient } from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';
// import { type SanityImageSource } from '@sanity/image-url/lib/types';
import { env } from '@/utilities/env';

export const sanity = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    apiVersion: '2024-07-15', // Use current date (YYYY-MM-DD) to target the latest API version
});

// Helper for generating image URLs
// const builder = imageUrlBuilder(client);

// export function urlFor(source: SanityImageSource) {
//     return builder.image(source);
// }
