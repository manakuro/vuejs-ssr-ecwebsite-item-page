// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import App from './App'

Vue.config.productionTip = false

sync(store, router)

// global style
require('sanitize.css/sanitize.css')
require('font-awesome/css/font-awesome.min.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: h => h(App),
})
