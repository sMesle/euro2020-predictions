import Vue from "vue";
import VueRouter from "vue-router";
import Matches from './views/Matches';

Vue.use(VueRouter);


const routes = [
    {
        path: "/matches",
        name: "matches",
        component: Matches
      },    
]


const router = new VueRouter({
    mode: "history",
    //eslint-disable-next-line
    base: process.env.BASE_URL,
    routes
  });

export default router;
  

