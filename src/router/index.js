import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '../views/Home.vue'

const routes = [
  { path: '/', name: 'MainHome', component: MainHome }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
