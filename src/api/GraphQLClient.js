import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

class GraphQLClient {
  constructor() {
    const uri = 'http://localhost:3000/queries'
    const link = new HttpLink({ uri })
    const cache = new InMemoryCache()

    this.client = new ApolloClient({
      link,
      cache,
      addTypename: false,
      transportBatching: true,
    })
  }

  /**
   * execute query
   *
   * @param {string} query
   * @param {object} variables
   * @param {string} fetchPolicy
   */
  query({ query, variables, fetchPolicy = 'network-only' }) {
    return this.client.query({ query, variables, fetchPolicy })
  }

  /**
   * execute mutation
   *
   * @param {string} mutation
   */
  mutate(mutation) {
    return this.client.mutate(mutation)
  }
}

export default new GraphQLClient()
