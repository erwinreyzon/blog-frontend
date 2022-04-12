import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostShow from "../views/PostShow.vue";
import PostNew from "../views/PostNew.vue";
import LogOut from "../views/LogOut.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostsIndex,
  },
  {
    path: "/posts/:id",
    name: "post",
    component: PostShow,
  },
  {
    path: "/posts/new",
    name: "new",
    component: PostNew,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogOut,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
