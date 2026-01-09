// src/constants/routes.ts

export const AppRoutes = {
  HOME: {
    name: 'home',
    path: '/',
    label: '홈' // 메뉴 렌더링할 때 유용함
  },
  LOGIN: {
    name: 'login',
    path: '/auth/login',
    label: '로그인'
  },
  MY_PAGE: {
    name: 'mypage',
    path: '/user/mypage',
    label: '마이페이지'
  },
  USER_DETAIL: {
    name: 'user-detail',
    path: '/user/:id', // 동적 파라미터
    label: '유저 상세'
  }
} as const // 👈 핵심: 이게 있어야 TS가 string이 아니라 리터럴 값으로 인식함

// (선택) 타입 정의가 필요하다면 추출해서 쓸 수 있습니다.
export type AppRouteKey = keyof typeof AppRoutes