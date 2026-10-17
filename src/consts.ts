// 블로그 이름·소개는 여기 한 곳에서만 바꾸면 사이트 전체에 반영됩니다.
export const SITE_TITLE = '주말엔 기차';
export const SITE_TAGLINE = '차 없이 떠나는 국내 여행 기록';
export const SITE_DESCRIPTION =
  '기차와 지하철, 버스만으로 다니는 국내 여행. 코스, 먹거리, 카페, 그리고 미리 알아두면 좋은 준비 팁을 기록합니다.';
export const SITE_LANG = 'ko';
export const SITE_AUTHOR = SITE_TITLE; // 필명이 있으면 여기에 적으세요

// 대표 사진이 없는 페이지(첫 화면, 태그 목록 등)를 공유할 때 보이는 기본 미리보기 이미지
// 사진: 해운대 블루라인파크 해변열차 — Luis Benito, Unsplash (https://unsplash.com/photos/4kvN7dGuO74)
export const SITE_OG_IMAGE = {
  src: '/og-default.jpg',
  width: 1200,
  height: 630,
  alt: `${SITE_TITLE} — ${SITE_TAGLINE}`,
};

// 검색엔진 소유 확인 코드. 구글 서치 콘솔 / 네이버 서치어드바이저에서 받은
// <meta ... content="여기 값"> 의 content 값만 붙여 넣으세요. 비워 두면 태그가 생략됩니다.
export const GOOGLE_SITE_VERIFICATION = '';
export const NAVER_SITE_VERIFICATION = '';

// '다른 지역 신청하기' 팝업에 띄울 에어테이블 폼의 공유 링크 (예: https://airtable.com/app.../shr...)
// 비워 두면 팝업에 "준비 중" 문구가 나옵니다.
export const REGION_REQUEST_FORM_URL = 'https://airtable.com/app0nGCqa9jzZK6iU/shrufTJktTWW0FYcR';
