import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
// import Faculties from "../views/Faculties.vue";
// import Trainers from "../views/Trainers.vue";
// import Games from "../views/Games.vue";
// import Trainer from "../views/Trainer.vue";
// import Gamer from "../views/Gamer.vue";
// import Lecture from "../views/Lecture.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/main",
    redirect: "/"
  },
  {
    path: "/faculties",
    name: "Faculties",
    component: () =>
      import(/* webpackChunkName: "faculties" */ "../views/Faculties.vue"),
  },
  {
    path: "/trainers",
    name: "Trainers",
    component: () =>
      import(/* webpackChunkName: "trainers" */ "../views/Trainers.vue"),
  },
  {
    path: "/games",
    name: "Games",
    component: () =>
      import(/* webpackChunkName: "games" */ "../views/Games.vue"),
  },
  {
    path: "/trainer-account/:id",
    name: "Trainer",
    component: () =>
      import(/* webpackChunkName: "trainer-account" */ "../views/Trainer.vue"),
  },
  {
    path: "/gamer-account/:id",
    name: "Gamer",
    component: () =>
      import(/* webpackChunkName: "gamer-account" */ "../views/Gamer.vue"),
  },
  {
    path: "/lectures/:id",
    name: "Lectures",
    component: () =>
      import(/* webpackChunkName: "lectures" */ "../views/Lectures.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/404",
    name: "Page404",
    component: () =>
      import(/* webpackChunkName: "Page404" */ "../views/Page404.vue"),
  },
  {
    path: "/*",
    redirect: "/404"
  }  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
