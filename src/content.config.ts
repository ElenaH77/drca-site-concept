import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.string().optional().default(''),
    type: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    cadence: z.string().optional().default(''),
    blurb: z.string().optional().default(''),
    order: z.number().optional().default(99),
    cta_label: z.string().optional().default(''),
    cta_url: z.string().optional().default(''),
  }),
});

export const collections = { news, events };
