import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/components/AppLayout.vue';

import Dashboard from '@/views/DashboardView.vue';
import Products from '@/views/ProductsView.vue';
import Users from '@/views/UsersView.vue';
import Reports from '@/views/ReportsView.vue';

import Login from '@/views/LoginView.vue';
import RequestPasswordReset from '@/views/RequestPasswordResetView.vue';
import ResetPassword from '@/views/ResetPasswordView.vue';

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
        component: Dashboard,
      },
      {
        path: 'products',
        name: 'app.products',
        component: Products,
      },
      {
        path: 'users',
        name: 'app.users',
        component: Users,
      },
      {
        path: 'reports',
        name: 'app.reports',
        component: Reports,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: '/request-password-reset',
    name: 'requestPasswordReset',
    component: RequestPasswordReset,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: '/reset-password/:token',
    name: 'resetPassword',
    component: ResetPassword,
    meta: {
      requiresGuest: true,
    },
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
