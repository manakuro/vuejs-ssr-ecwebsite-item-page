const productsQuery = {
  namespaced: true,
  state: {
    query: {
      category: null,
      filters: [],
      colour: null,
      size: null,
    },
  },
  actions: {
    updateQuery({ commit }, payload) {
      commit('update', payload)
    },
  },
  mutations: {
    update(state, query) {
      state.query = { ...state.query, ...query }
      console.log('state', state)
    },
  },
  getters: {},
}

export default productsQuery
