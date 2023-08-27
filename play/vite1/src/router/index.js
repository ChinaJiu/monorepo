import { createRouter, createWebHistory } from 'vue-router';

const A = {
  render(){ return '<div>A</div>'}
}

const B = {
  render(){ return '<div>B</div>'}
}

const basename = process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "";

export const routes = [
  {
    path: "/vite1/a",
    name: "a",
    component: A,
  },
  {
    path: "/vite1/b",
    name: "b",
    component: B,
  },
  {
    path: "/",
    redirect: "/a",
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  base: basename,
  routes, // `routes: routes` 的缩写
})

export default router;


