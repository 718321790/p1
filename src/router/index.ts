import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../views/home/Home.vue")
  },
  {
    path: "/all",
    name: "All",
    meta: {
      title: "全部",
      keepAlive: true
    },
    component: () => import("../views/all/All.vue")
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router