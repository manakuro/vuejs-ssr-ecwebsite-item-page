import GraphQLClient from 'src/api/GraphQLClient'
import Product from 'src/api/graphql/products.graphql'

export const query = {
  async fetchProducts(variables) {
    const payload = await GraphQLClient.query({
      query: Product,
      variables,
    })
    return payload
  },
}
