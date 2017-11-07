import Vue from 'vue'
import Vuex from 'vuex'

import products from 'src/store/modules/products'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    products,
  },
})

export default store
