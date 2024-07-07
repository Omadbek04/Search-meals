import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import MealList from "../views/MealsList.vue"
import MealByName from "../views/MealByName.vue";
import MealByIngredient from "../views/MealByIngredient.vue";
import MealByLeter from "../views/MealByLetter.vue";
const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
