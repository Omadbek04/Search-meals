import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealByName from "../views/MealByName.vue";
import MealByIngredient from "../views/MealByIngredient.vue";
import MealByLeter from "../views/MealByLetter.vue";
const routes = [
  {
    path: "/",
    component: () => import("../components/DefaultLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealByLeter,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealByIngredient,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealByName,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: () => import("../views/MealDetail.vue"),
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../components/GuestLayout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
