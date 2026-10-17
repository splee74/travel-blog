# 주말엔 기차 (블로그)

Astro로 만든 여행 블로그입니다.

## 실행

```bash
npm install      # 처음 한 번
npm run dev      # http://localhost:4321 에서 미리보기 (초안 글도 보임)
npm run build    # dist/ 폴더에 배포용 파일 생성 (초안 글은 빠짐)
```

## 글 쓰기

1. `src/content/posts/_template.md`를 복사해서 영문 파일명으로 저장합니다. (예: `busan-haeundae.md`)
2. 위쪽 `---` 사이의 제목·요약·날짜·지역·태그를 채웁니다.
3. 사진은 `public/images/`에 넣고 본문에 `![설명](/images/파일명.jpg)`로 씁니다.
4. 다 쓰면 `draft: true`를 `false`로 바꿉니다.

## 바꾸기 쉬운 곳

- 블로그 이름·소개 문구: `src/consts.ts`
- 색·글꼴: `src/styles/global.css` 맨 위 `:root`
- 소개 페이지: `src/pages/about.astro`
- 배포 주소: `astro.config.mjs`의 `site`
