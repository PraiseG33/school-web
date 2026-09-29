import { createRouter, createWebHistory } from 'vue-router'

const routeList = [
  {
    path: '/',
    name: 'Guest',
    component: () => import('@/views/Guest.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/apply',
    name: 'apply',
    component: () => import('@/views/Apply.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeList,
})

import AOS from 'aos'

router.afterEach(() => {
  AOS.refresh()
})

export default router
