import { createClient } from '@sanity/client';
import { env } from '@/utilities/env';

export const sanity = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
    apiVersion: '2024-07-15',
});

export async function testSanityConnection(): Promise<boolean> {
    try {
        await sanity.fetch('*[_type == "experience"][0]');
        return true;
    } catch (error) {
        console.error('Sanity connection failed:', error);
        return false;
    }
}

// import imageUrlBuilder from '@sanity/image-url';
// import { type SanityImageSource } from '@sanity/image-url/lib/types';

// Helper for generating image URLs
// const builder = imageUrlBuilder(client);

// export function urlFor(source: SanityImageSource) {
//     return builder.image(source);
// }
