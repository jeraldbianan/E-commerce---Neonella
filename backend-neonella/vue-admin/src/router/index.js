import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/components/AppLayout.vue';

import { useUserStore } from '@/store/user';

const routes = [
  {
    path: '/',
    redirect: '/app/dashboard',
  },
  {
    path: '/app',
    name: 'app',
    component: AppLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'dashboard',
        name: 'app.dashboard',
        component: () => import('@/views/DashboardView.vue'),
      },
      {
        path: 'products',
        name: 'app.products',
        component: () => import('@/views/ProductsView.vue'),
      },
      {
        path: 'users',
        name: 'app.users',
        component: () => import('@/views/UsersView.vue'),
      },
      {
        path: 'reports',
        name: 'app.reports',
        component: () => import('@/views/ReportsView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: '/request-password-reset',
    name: 'requestPasswordReset',
    component: () => import('@/views/RequestPasswordResetView.vue'),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: '/reset-password/:token',
    name: 'resetPassword',
    component: () => import('@/views/ResetPasswordView.vue'),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && userStore.user.token === null) {
    next({ name: 'login' });
  } else if (to.meta.requiresGuest && userStore.user.token !== null) {
    next({ name: 'app.dashboard' });
  } else {
    next();
  }
});

export default router;
