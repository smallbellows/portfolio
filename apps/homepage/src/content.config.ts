import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
    work: defineCollection({
        // Load Markdown files in the src/content/work directory.
        loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
        schema: ({ image }) =>
            z.object({
                title: z.string(),
                description: z.string(),
                sortOrder: z.coerce.number(),
                tags: z.array(z.string()),
                img: image().optional(),
                img_alt: z.string().optional(),
            }),
    }),
};
