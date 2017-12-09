import GraphQLClient from 'src/api/GraphQLClient'
import Product from 'src/api/graphql/products'
import ProductCategories from 'src/api/graphql/productsCategories'

export const query = {
  async fetchProducts(variables) {
    const payload = await GraphQLClient.query({
      query: Product,
      variables,
    })
    return payload
  },

  async fetchProductsCategories(variables) {
    const payload = await GraphQLClient.query({
      query: ProductCategories,
      variables,
    })
    return payload
  },
}
