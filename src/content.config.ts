import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(4),
    description: z.string().min(20),
    showSubtitle: z.boolean().default(true),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    kind: z.enum(['essay', 'note', 'link', 'idea']),
    minutes: z.number().int().positive(),
    topics: z.array(z.string()).min(1),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    externalUrl: z.url().optional(),
  }),
});

export const collections = { writing };
