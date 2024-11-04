import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Dashboard from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
