import axios from 'axios';
import router from '@/router';
import { useAuthStore } from '@/store/auth';

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use(config => {
  const authStore = useAuthStore();
  if (authStore.user.token) {
    config.headers.Authorization = `Bearer ${authStore.user.token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      const authStore = useAuthStore();
      authStore.user.token = null;
      router.push({ name: 'login' });
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
