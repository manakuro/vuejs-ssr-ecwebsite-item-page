<template>
  <div class="products-wrapper">
    <div class="products-header">
      <h1 class="products-heading">MEN'S PANTS & TIGHTS (70)</h1>
    </div>
    <div class="products">
      <products-item
        v-for="product in products"
        v-bind="product"
        :key="product.id" />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import ProductsItem from 'src/components/pages/ProductsItem'

const { mapActions, mapState } = createNamespacedHelpers('products')

export default {
  name: 'products',

  components: {
    ProductsItem,
  },

  created() {
    this.fetchProducts()
  },

  computed: {
    ...mapState(['products']),
  },

  data() {
    return {}
  },

  methods: {
    ...mapActions(['fetchProducts']),
  },
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.products-header {
  font-family: $font-heading;
  padding-top: 20px;
  margin-bottom: 20px;

  > .products-heading {
    font-size: 20px;
    text-align: left;
    text-transform: uppercase;
  }
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin-left: -10px;
}
</style>
