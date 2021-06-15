import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Favorites from "../views/Favorites.vue";
import EditCar from "../views/carEdit.vue";
import AddCar from "../views/AddCar.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/editCar/:id",
    name: "EditCar",
    component: EditCar,
    props: true,
  },
  {
    path: "/addCar",
    name: AddCar,
    component: AddCar,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let authenticated = localStorage.getItem("token");
  if (!authenticated && to.name !== "Login") {
    next({ name: "Login" });
  } else if (authenticated && to.name === "Login") {
    next({ name: "Home" });
  } else next();
});

export default router;
