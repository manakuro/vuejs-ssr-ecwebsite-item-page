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
import cloneDeep from 'lodash/cloneDeep'

import ProductsItem from 'src/components/pages/ProductsItem'

export default {
  name: 'products',

  components: {
    ProductsItem,
  },

  created() {},

  computed: {
    products() {
      const products = []
      const data = {
        img: require('../../assets/test-img.jpeg'),
        title: 'F1 Phenom',
        description: 'Men\'s 29" Running Shoes',
        price: '$90',
      }

      for (let i = 0; i < 33; i++) {
        let _data = cloneDeep(data)
        _data.id = i
        products.push(_data)
      }

      return products
    },
  },

  data() {
    return {}
  },

  methods: {
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
