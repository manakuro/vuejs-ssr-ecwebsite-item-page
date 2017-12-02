<template>
  <div>
    <the-header />
    <main class="main">
      <div class="container">
        <the-side-nav v-bind="searchItems"/>
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
    ...mapGetters('products/productsQuery', ['query']),
  },

  created() {
    // initialize query state and fetch products
    const { route } = this.$store.state
    this.updateQueries(route.query || {})

    this.searchItems = {
      categories: [
        {
          id: 1,
          name: 'Shoes',
          sub: [
            { name: 'Lifestyle (265)' },
            { name: 'Running (60)' },
            { name: 'Basketball (90)' },
            { name: 'Football (24)' },
            { name: 'Soccer (43)' },
            { name: 'Training & Gym (37)' },
            { name: 'Skateboarding (60)' },
            { name: 'Baseball / Softball (27)' },
            { name: 'Golf (19)' },
            { name: 'Tennis (11)' },
            { name: 'Track & Field (31)' },
            { name: 'Yoga (1)' },
            { name: 'Lacrosse (19)' },
          ],
        },
        {
          id: 2,
          name: 'Tops & T-Shir',
          sub: [
            { name: 'Lifestyle (265)' },
            { name: 'Running (60)' },
            { name: 'Basketball (90)' },
            { name: 'Football (24)' },
          ],
        },
        {
          id: 3,
          name: 'Hoodies & Pullovers',
          sub: [],
        },
        {
          id: 4,
          name: 'Jackets & Vests',
          sub: [],
        },
        {
          id: 5,
          name: 'Pants & Tights',
          sub: [],
        },
        {
          id: 6,
          name: 'Shorts',
          sub: [],
        },
        {
          id: 7,
          name: 'Surf & Swimwear',
          sub: [],
        },
        {
          id: 8,
          name: 'Socks',
          sub: [],
        },
        {
          id: 9,
          name: 'Accessories & Equipment',
          sub: [],
        },
      ],
      filters: {
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
      },
      colours: [
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
      ],
      sizes: [
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
      ],
    }
  },

  data() {
    return {}
  },

  methods: {
    ...mapActions('products', ['fetchProducts']),
    ...mapActions('products/productsQuery', ['updateQueries']),

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
