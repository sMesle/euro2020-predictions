import Vue from 'vue'
import App from './App.vue'
import './quasar'
import router from "./router";
import store from "./store"

import Amplify from 'aws-amplify'
import config from './aws-exports'
import { Auth } from 'aws-amplify'

Amplify.configure(config)

Auth.currentAuthenticatedUser()
.then((user) => {
  console.log(user)
  store.commit('profile/SET_USER', user)
})
.catch(() => console.log("Not signed in"));


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
