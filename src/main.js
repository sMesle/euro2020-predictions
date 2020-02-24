import Vue from 'vue'
import App from './App.vue'
import './quasar'
import router from "./router";

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from './aws-exports'


Vue.use(AmplifyPlugin, AmplifyModules);
Amplify.configure(awsconfig);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
