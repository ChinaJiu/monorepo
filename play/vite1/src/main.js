import { createApp } from 'vue'
import App from './App.vue'

import router, { routes } from './router/index.js'

// createApp(App).use(router).mount('#app')

// if(window.__POWERED_BY_WUJIE__) {
//   console.log('wujie启动');
// } else {
//   console.log('sub');
// }

import { createRouter, createWebHistory } from 'vue-router';

const basename = process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "";


if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    const router = createRouter({ history: createWebHistory(), routes });
    instance = createApp(App);
    instance.use(router);
    instance.mount("#app");
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount();
  };
} else {
  createApp(App).use(createRouter({ history: createWebHistory(), routes })).mount("#app");
}