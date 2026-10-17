import type { APIRoute } from 'astro';

// 검색엔진 로봇에게 사이트 전체 수집을 허용하고 사이트맵 위치를 알려 줍니다.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
