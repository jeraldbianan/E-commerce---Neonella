import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useAuthStore } from '@/store/auth';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);

const authStore = useAuthStore();
authStore.initialize();

app.use(router);
app.mount('#app');
