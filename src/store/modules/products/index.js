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
      const { productsQuery } = rootState.products
      console.log('route', route)
      console.log('productsQuery', productsQuery)

      const { category, filters } = productsQuery.queries

      let payload

      try {
        payload = await query.fetchProducts({ category, filters })
      } catch (e) {
        throw e
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
