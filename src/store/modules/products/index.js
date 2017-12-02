import { query } from 'src/api/products'

import productsQuery from 'src/store/modules/products/productsQuery'

const products = {
  namespaced: true,
  modules: {
    productsQuery,
  },

  state: {
    /**
     *
     * @type {Array} products
     */
    products: [],
  },
  actions: {
    /**
     * fetch product list
     *
     */
    async fetchProducts({ commit, rootState }) {
      const { route } = rootState
      const variables = {
        category: parseInt(route.query.category, 10),
      }
      let payload

      try {
        payload = await query.fetchProducts(variables)
      } catch (e) {
        return
      }
      commit('update', payload.data)
    },
  },
  mutations: {
    update(state, { products }) {
      state.products = products
      console.log('state.products', state.products)
    },
  },
  getters: {},
}

export default products
