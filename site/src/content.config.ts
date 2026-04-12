import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const prompts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: '../content/prompts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    source_author: z.string().optional(),
    source_url: z.string().optional(),
    source_lang: z.string().optional(),
    rating: z.number().optional(),
    tested_models: z.array(z.string()).optional(),
    tested_date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { prompts };
