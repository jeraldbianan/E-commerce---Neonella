import axiosClient from '@/axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref({
    data: null,
    token: null,
  });

  const loading = ref(false);
  const errorMsg = ref(null);

  const login = async userData => {
    loading.value = true;
    errorMsg.value = null;

    try {
      const response = await axiosClient.post('/login', userData);
      if (response.status === 200) {
        user.value.token = response.data.token;

        if (userData.remember) {
          localStorage.setItem('token', response.data.token);
        } else {
          sessionStorage.setItem('token', response.data.token);
        }
      }

      await fetchUser();
    } catch (err) {
      errorMsg.value = err.response.data.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    loading.value = true;
    errorMsg.value = null;

    try {
      const res = await axiosClient.post('/logout');
      if (res.status === 204) {
        user.value.data = null;
        user.value.token = null;
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
      }
    } catch (err) {
      errorMsg.value = err.response.data.message;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axiosClient.get('/user');
      user.value.data = response.data;
    } catch (err) {
      console.error('Failed to fetch user:', err);
      logout();
    }
  };

  const initialize = () => {
    const existingToken =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    if (existingToken) {
      user.value.token = existingToken;
      fetchUser();
    }
  };

  return { user, login, loading, errorMsg, logout, initialize };
});
