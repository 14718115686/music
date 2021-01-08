import Vue from "vue";
import VueRouter from "vue-router";
// 组件
import Recommend from "../views/Recommend.vue";
import HotMusic from "../views/HotMusic.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", //路由默认的首页
    name: "Recommend",
    component: Recommend,
  },
  {
    path: "/hotmusic",
    name: "HotMusic",
    component: HotMusic,
  },

  // 可复制
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
