import * as VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import store from "../store";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../pages/Dashboard.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../pages/Register.vue"),
  },
  {
    path: "/todos/:id",
    name: "SingleTodo",
    component: () => import("../pages/SingleTodo.vue"),
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("../pages/Todos.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/login",
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.fullPath === "/") {
    if (!store.state.moduleAuthor.currentUser?.username) {
      next("/login");
      return;
    }
  } else if (to.fullPath === "/todos") {
    if (!store.state.moduleAuthor.currentUser?.username) {
      next("/login");
      return;
    }
  } else if (to.fullPath === "/login") {
    if (store.state.moduleAuthor.currentUser?.username) {
      next("/");
      return;
    }
  }
  next();
  return;
});

export default router;
