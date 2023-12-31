import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';

const app = createApp(App);
app.config.globalProperties.$store = store;
app.provide('$store', store).use(store).use(router).mount('#app');
