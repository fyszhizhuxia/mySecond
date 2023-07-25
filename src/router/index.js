import { createRouter, createWebHistory } from "vue-router";
import baseRouters from "./modules/base";
import Account from "./modules/account";
const routes = [...baseRouters, ...Account];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
