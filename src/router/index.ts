// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Senarios from "../pages/Senarios.vue";
import Pricing from "../pages/Pricing.vue";

// 👇 Add RouteRecordRaw type here
const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/pricing", component: Pricing },
  { path: "/senarios", component: Senarios },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   // Example: block access to dashboard if not logged in
//   if (to.path.includes("/dashboard") && !token) {
//     next("/auth/login");
//   } else {
//     next();
//   }
// });

export default router;
