import omitBy from 'lodash/omitBy'
import isNull from 'lodash/isNull'
import isArray from 'lodash/isArray'

import { query } from 'src/api/products'

import { toInt } from 'src/utils'

const productsQuery = {
  namespaced: true,
  state: {
    /**
     * query for url
     *
     * @type {object} queries
     * @type {number} queries.category
     * @type {array}  queries.filters
     * @type {array}  queries.colours
     * @type {array}  queries.sizes
     */
    queries: {
      category: null,
      filters: [],
      colour: null,
      size: null,
    },

    /**
     * items for category list
     *
     * @type {object} productsCategories
     * @type {array}  productsCategories.categories
     * @type {object} productsCategories.filters
     * @type {array}  productsCategories.colours
     * @type {array}  productsCategories.sizes
     */
    productsCategories: {
      categories: [],
      filters: {},
      colours: [],
      sizes: [],
    },
  },
  actions: {
    async fetchProductsCategories({ commit }, variables) {
      let payload
      try {
        payload = await query.fetchProductsCategories(variables)
      } catch (err) {
        throw err
      }

      commit('updateCategories', payload.data)
    },

    updateQueries({ commit }, payload) {
      const parsed = toInt(payload)
      commit('update', parsed)
    },
  },
  mutations: {
    update(state, query) {
      state.queries = { ...state.queries, ...query }
      console.log('state', state)
    },
    updateCategories(state, productsCategories) {
      state.productsCategories = {
        ...state.productsCategories,
        ...productsCategories,
      }
    },
  },
  getters: {
    query({ queries }) {
      return omitBy(queries, val => {
        return isNull(val) || (isArray(val) && !val.length)
      })
    },
    categories({ productsCategories }) {
      const { categories } = productsCategories

      let result = { main: [], sub: {} }
      categories.forEach(c => {
        if (c.parentId === 0) {
          result.main.push(c)
        } else {
          result.sub[c.parentId] = result.sub[c.parentId] || []
          result.sub[c.parentId].push(c)
        }
      })

      return result
    },
    filters() {
      return {
        sport: {
          name: 'sport',
          categories: [
            { id: 1, name: 'lifestyle' },
            { id: 2, name: 'running' },
            { id: 3, name: 'basketball' },
            { id: 4, name: 'soccer' },
            { id: 5, name: 'training & gym' },
            { id: 6, name: 'football' },
          ],
        },
      }
    },
    colours() {
      return [
        { id: 1, name: 'white' },
        { id: 2, name: 'khaki' },
        { id: 3, name: 'yellow' },
        { id: 4, name: 'green' },
        { id: 5, name: 'blue' },
        { id: 6, name: 'olive' },
        { id: 7, name: 'red' },
        { id: 8, name: 'grey' },
        { id: 9, name: 'brown' },
        { id: 10, name: 'black' },
        { id: 11, name: 'cream' },
        { id: 12, name: 'black' },
      ]
    },
    sizes() {
      return [
        { id: 1, name: 'xs' },
        { id: 2, name: 's' },
        { id: 3, name: 'm' },
        { id: 4, name: 'l' },
        { id: 5, name: 'xl' },
        { id: 6, name: '2xl' },
        { id: 7, name: '28' },
        { id: 8, name: '29' },
        { id: 9, name: '30' },
        { id: 10, name: '31' },
        { id: 11, name: '32' },
        { id: 12, name: '33' },
        { id: 13, name: '34' },
        { id: 15, name: '36' },
        { id: 16, name: '38' },
        { id: 17, name: '40' },
      ]
    },

    categoryList(state, { categories, colours, sizes, filters }) {
      return { categories, colours, sizes, filters }
    },

    isCurrentCategory({ queries }) {
      return category => queries.category === category
    },
  },
}

export default productsQuery
