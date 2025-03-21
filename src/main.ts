import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia';
import dayjs from '@/plugins/dayjs';
import './assets/index.scss';

const app = createApp(App);

Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
  app.component(key, component);
});

app.config.globalProperties.$dayjs = dayjs;

app
  .use(router)
  .use(ElementPlus)
  .use(createPinia())
  .mount('#app');
