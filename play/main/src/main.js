import Vue from 'vue'
import App from './App.vue'

import router from "./router";
import WujieVue from "wujie-vue2";
import credentialsFetch from "./fetch";


const { setupApp, preloadApp } = WujieVue;

const degrade = window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry;
const props = {
  jump: (name) => {
    router.push({ name });
  },
};

Vue.use(WujieVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

setupApp({
  name: "vite1",
  url: "http://172.16.8.23:8000/",
  exec: true,
  props,
  fetch: credentialsFetch,
  degrade,
});

// setupApp({
//   name: "vite2",
//   url: "http://172.16.8.232:5174/",
//   exec: true,
//   props,
//   fetch: credentialsFetch,
//   degrade,
// });

preloadApp({
  name: "vite1",
});

// preloadApp({
//   name: "vite2",
// });


