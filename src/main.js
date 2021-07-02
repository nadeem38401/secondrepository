import Vue from 'vue'
import App from './App.vue'

import {router} from './router/index.js'
import jQuery from 'jquery'
import bootstrap from 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  jQuery,
  bootstrap,
  vuetify,
  render: h => h(App)
}).$mount('#app')
