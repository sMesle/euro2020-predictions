import Vue from "vue";
import Vuex from "vuex";

import profile from "./store/profile";

Vue.use(Vuex);

const modules = {
  profile
};

const store = new Vuex.Store({ modules });

export default store;