import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterClient from "../views/RegisterClient.vue";
import RegisterProduct from "../views/RegisterProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/client:mode",
      name: "client",
      component: RegisterClient,
    },
    {
      path: "/product",
      name: "produtc",
      component: RegisterProduct,
    },
  ],
});

export default router;
