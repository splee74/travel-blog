import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  // 이름이 _ 로 시작하는 파일(예: _template.md)은 글로 취급하지 않습니다.
  loader: glob({ base: './src/content/posts', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    region: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
