import cloneDeep from 'lodash/cloneDeep'

function query() {
  let payload = []
  setTimeout(() => {
    const data = {
      img: require('../../../assets/test-img.jpeg'),
      title: 'F1 Phenom',
      description: 'Men\'s 29" Running Shoes',
      price: '$90',
    }

    for (let i = 0; i < 50; i++) {
      let _data = cloneDeep(data)
      _data.id = i
      payload.push(_data)
    }
  }, 500)
  return payload
}

const products = {
  namespaced: true,
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
    async fetchProducts({ commit }) {
      let payload = []
      try {
        payload = await query()
      } catch (e) {
        return
      }

      commit('update', payload)
    },
  },
  mutations: {
    update(state, products) {
      state.products = products
    },
  },
  getters: {},
}

export default products
