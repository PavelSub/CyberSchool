import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/Main.vue"),
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
    path: "/lectures",
    name: "Lectures",
    component: () =>
      import(/* webpackChunkName: "lectures" */ "../views/Lectures.vue"),
  },
  // {
  //   path: "/lectures/:id",
  //   name: "Lectures",
  //   component: () =>
  //     import(/* webpackChunkName: "lectures" */ "../views/Lectures.vue"),
  // },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
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
