import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import dnd from '../views/dnd.vue'
import dndShilo from '../views/dnd-shilo.vue'

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
      path: '/dnd',
      name: 'dnd',
      component: dnd,
    },
    {
      path: '/dnd-shilo',
      name: 'dnd-shilo',
      component: dndShilo,
    },
  ],
})

export default router
