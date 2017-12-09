<template>
  <div>
    <the-header />
    <main class="main">
      <div class="container">
        <the-side-nav v-bind="categoryList"/>
        <div class="main-content">
          <products :products="products" />
        </div>
      </div>
    </main>
    <the-footer />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import TheHeader from 'src/components/pages/TheHeader'
import TheFooter from 'src/components/pages/TheFooter'
import TheSideNav from 'src/components/pages/TheSideNav'
import Products from 'src/components/pages/Products'

export default {
  name: 'home',

  components: {
    TheHeader,
    TheFooter,
    TheSideNav,
    Products,
  },

  computed: {
    ...mapState('products', ['products']),
    ...mapGetters('products/productsQuery', ['query', 'categoryList']),
  },

  created() {
    // initialize query state and fetch products
    const { route } = this.$store.state
    this.updateQueries(route.query || {})
    this.fetchProductsCategories()
  },

  data() {
    return {}
  },

  methods: {
    ...mapActions('products', ['fetchProducts']),
    ...mapActions('products/productsQuery', ['updateQueries', 'fetchProductsCategories']),

    onUpdateQuery() {
      const { query } = this
      this.$router.push({ name: 'home', query })
      this.fetchProducts()
    },
  },

  watch: {
    query() {
      this.onUpdateQuery()
    },
  },

}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
/* -----------------------
 Main
----------------------- */
.main {
  margin-top: 170px;

  > .container {
    display: grid;
    grid-template-columns: 260px 940px;
    grid-gap: 30px;
  }
}

/* -----------------------
 Main Content
----------------------- */
.main-content {
  margin-bottom: 30px;
}

</style>
