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
    version: z.string().optional(),
    tested_models: z.array(z.string()).optional(),
    tested_date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    updated_at: z.coerce.date().optional(),
    changelog: z.array(z.object({
      version: z.string(),
      date: z.coerce.date(),
      change: z.string(),
    })).optional(),
  }),
});

const flows = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: '../content/flows' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    estimated_time: z.string().optional(),
    level: z.enum(['nyborjare', 'medel', 'expert']).optional(),
    version: z.string().optional(),
    tags: z.array(z.string()).optional(),
    steps: z.array(z.object({
      prompt: z.string(),
      role: z.string(),
    })),
  }),
});

export const collections = { prompts, flows };
