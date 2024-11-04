import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/AppLayout.vue'

import Login from '@/views/LoginView.vue'
import Dashboard from '@/views/DashboardView.vue'
import RequestPasswordReset from '@/views/RequestPasswordResetView.vue'
import ResetPassword from '@/views/ResetPasswordView.vue'

const routes = [
  {
    path: '/app',
    name: 'app',
    component: AppLayout,
    children: [
      {
        path: 'dashboard',
        name: 'app.dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/request-password-reset',
    name: 'requestPasswordReset',
    component: RequestPasswordReset,
  },
  {
    path: '/reset-password/:token',
    name: 'resetPassword',
    component: ResetPassword,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
