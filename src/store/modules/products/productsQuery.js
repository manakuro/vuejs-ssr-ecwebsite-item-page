import omitBy from 'lodash/omitBy'
import isNull from 'lodash/isNull'
import isArray from 'lodash/isArray'

const productsQuery = {
  namespaced: true,
  state: {
    queries: {
      category: null,
      filters: [],
      colour: null,
      size: null,
    },
  },
  actions: {
    updateQueries({ commit }, payload) {
      commit('update', payload)
    },
  },
  mutations: {
    update(state, query) {
      state.queries = { ...state.queries, ...query }
      console.log('state', state)
    },
  },
  getters: {
    query({ queries }) {
      return omitBy(queries, val => {
        return isNull(val) || (isArray(val) && !val.length)
      })
    },
  },
}

export default productsQuery
