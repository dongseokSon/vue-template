import { createRouter, createWebHistory } from 'vue-router'
import { AppRoutes } from './routes'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: AppRoutes.HOME.path,
      name: AppRoutes.HOME.name,
      component: HomeView,
    },
    {
      path: AppRoutes.ABOUT.path,
      name: AppRoutes.ABOUT.name,
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: AppRoutes.TEST.path,
      name: AppRoutes.TEST.name,
      component: () => import('../views/TestView.vue'),
    },
  ],
})

export default router
