import Vue from "vue";
import VueRouter from "vue-router";
import Vite1 from "../views/Vite1.vue";
import Vite2 from "../views/Vite2.vue";


const basename = process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/vite1",
  //   name: "vite1",
  //   component: Vite1,
  // },
  // {
  //   path: "/vite2",
  //   name: "vite2",
  //   component: Vite2,
  // },
  {
    path: "/",
    redirect: "/vite1/a",
  },
];

const router = new VueRouter({
  mode: "history",
  base: basename,
  routes,
});

export default router;
