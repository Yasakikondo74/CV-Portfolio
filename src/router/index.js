import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Mobile',
      name: 'Mobile',
      component: () => import('../views/MobileView.vue'),
    },
    {
      path: '/Website',
      name: 'Website',
      component: () => import('../views/WebsiteView.vue'),
    },
  ],
})

export default router
