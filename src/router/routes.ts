export const AppRoutes = {
  HOME: {
    name: 'home',
    path: '/',
    label: '홈',
  },
  ABOUT: {
    name: 'about',
    path: '/about',
    label: '소개',
  },
  TEST: {
    name: 'test',
    path: '/test',
    label: '테스트',
  },
} as const

export type AppRouteKey = keyof typeof AppRoutes
