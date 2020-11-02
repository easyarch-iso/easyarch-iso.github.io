import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/download",
    name: "Download",
    component: () =>
      import(/* webpackChunkName: "download" */ "../views/Download.vue")
  },
  {
    path: "/release-info",
    name: "Release Info",
    component: () =>
      import(/* webpackChunkName: "download" */ "../views/ReleaseInfo.vue")
  },
  {
    path: "/git",
    name: "Git",
    component: () => import(/* webpackChunkName: "git" */ "../views/Git.vue")
  },
  {
    path: "/guide",
    name: "Guide",
    component: () =>
      import(/* webpackChunkName: "guide" */ "../views/Guide.vue")
  },
  {
    path: "/thanks",
    name: "Thanks",
    component: () =>
      import(/* webpackChunkName: "thanks" */ "../views/Thanks.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
