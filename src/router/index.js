import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterClient from "../views/RegisterClient.vue";
import RegisterProduct from "../views/RegisterProduct.vue";
import AssociateClientProduct from "../views/AssociateClientProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/client/:id",
      name: "client",
      component: RegisterClient,
    },
    {
      path: "/product/:id",
      name: "product",
      component: RegisterProduct,
    },
    {
      path: "/association/:id",
      name: "association",
      component: AssociateClientProduct,
    },
  ],
});

export default router;
