import { createRouter, createWebHistory } from "vue-router";
import MainContent from "../views/MainContent.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: MainContent,
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("../components/MyPage.vue"),
  },
  {
    path: "/join",
    name: "join",
    component: () => import("../components/Join.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/write",
    name: "write",
    component: () => import("../components/Write.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
