import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import dnc from '../views/dnc.vue'
import dnc2 from '../views/dnc2.vue'
import dnd from '../views/dnd.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/dnc',
      name: 'dnc',
      component: dnc,
    },
    {
      path: '/dnc2',
      name: 'dnc2',
      component: dnc2,
    },
    {
      path: '/dnd',
      name: 'dnd',
      component: dnd,
    },
  ],
})

export default router
