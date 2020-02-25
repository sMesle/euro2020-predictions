import Vue from 'vue'

import './styles/quasar.styl'
//import '@quasar/extras/material-icons/material-icons.css'
import iconSet from '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Quasar } from 'quasar'


Vue.use(Quasar, {
  config: {},
  components: { /* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
  },
  extras: [ iconSet ]
 })