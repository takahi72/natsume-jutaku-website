import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string(),
      completedYear: z.number().int(),
      structure: z.string(),
      floorArea: z.string(),
      summary: z.string(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      coverImage: image(),
      coverAlt: z.string(),
      gallery: z
        .array(
          z.object({
            image: image(),
            alt: z.string(),
          }),
        )
        .default([]),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    customerName: z.string(),
    projectTitle: z.string().optional(),
    quote: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  testimonials,
};
