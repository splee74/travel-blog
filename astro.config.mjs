import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 배포할 때 실제 주소로 바꾸세요 (RSS·사이트맵 링크에 쓰임)
  site: 'https://travel-blog-nine-jade.vercel.app',
  integrations: [sitemap()],
});
