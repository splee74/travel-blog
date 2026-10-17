import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** 최신순 글 목록. 초안(draft: true)은 개발 서버에서만 보이고, 배포 빌드에서는 빠집니다. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
}

/** 한국어 기준 분당 약 500자로 계산한 읽는 시간 */
export function readingMinutes(body = ''): number {
  const chars = body.replace(/[#>*_`|\-\[\]()!]/g, '').replace(/\s+/g, '').length;
  return Math.max(1, Math.round(chars / 500));
}

export function tagHref(tag: string): string {
  return `/tags/${encodeURIComponent(tag)}/`;
}
