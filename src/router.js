import Vue from "vue";
import VueRouter from "vue-router";
import Matches from './views/Matches';
import Authentication from './views/Authentication';

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "matches",
    component: Matches
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: Authentication
  }    
]


const router = new VueRouter({
    mode: "history",
    //eslint-disable-next-line
    base: process.env.BASE_URL,
    routes
  });

export default router;
  

