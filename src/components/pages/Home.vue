<template>
  <div>
    <the-header />

    <main class="main">
      <div class="container">
        <the-side-nav />
        <div class="main-content">
          <products />
        </div>
      </div>
    </main>

    <the-footer />

  </div>
</template>

<script>
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

  data() {
    return {}
  },

  methods: {
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
