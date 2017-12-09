<template>
  <div class="left-nav">
    <h2 class="left-nav-heading">men's</h2>
    <div class="left-nav-item categories">
      <ul class="categories-main">
        <li v-for="c in categories.main">
          <a @click.prevent="update('category', c.id)">{{ c.name }}</a>
          <ul class="categories-sub" v-if="categories.sub[c.id]">
            <li v-for="sub in categories.sub[c.id]">
              <a @click.prevent="update('category', sub.id)">{{ sub.name }}</a>
            </li>
          </ul>
        </li>
      </ul>

    </div>
    <div class="left-nav-item filters">
      <h3 class="left-nav-heading">filters</h3>

      <div class="filters-list" v-for="(filter, key) in filters" :key="key">
        <h4 class="filters-list-heading">{{ filter.name }}</h4>
        <ul class="filters-categories">
          <li v-for="filterCategory in filter.categories" class="filters-categories-list-item">
            <label :for="filterCategory.id">
              <input type="checkbox"
                     :id="filterCategory.id"
                     :value="filterCategory.id"
                     v-model="filtersInput" />
              <span class="checkbox"><span>{{ filterCategory.name }}</span></span>
            </label>
          </li>
        </ul>
      </div>

      <div class="filters-list">
        <h4 class="filters-list-heading">Colour</h4>

        <ul class="colours">
          <li v-for="colour in colours">
            <a @click.prevent="update('colour', colour.id)" class="colour-item" :class="colour.name"></a>
          </li>
        </ul>
      </div>

      <div class="filters-list">
        <h4 class="filters-list-heading">Size</h4>

        <ul class="sizes">
          <li v-for="size in sizes">
            <a @click.prevent="update('size', size.id)">
              <span class="size-item">{{ size.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const { mapActions } = createNamespacedHelpers('products/productsQuery')

  export default {
    name: 'the-sidenav',

    props: {
      categories: {
        type: Object,
        required: true,
      },
      filters: {
        type: Object,
        required: true,
      },
      sizes: {
        type: Array,
        required: true,
      },
      colours: {
        type: Array,
        required: true,
      },
    },

    computed: {
      filtersInput: {
        get() {
          return this.$store.state.products.productsQuery.queries.filters
        },
        set(value) {
          this.updateQueries({ filters: value })
        },
      },
    },

    data() {
      return {}
    },

    methods: {
      ...mapActions(['updateQueries']),
      ...mapActions({
        update(dispatch, queryKey, queryVal) {
          dispatch('updateQueries', { [queryKey]: queryVal })
        },
      }),
    },
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .left-nav {
    padding: 20px;
    width: 260px;
    text-align: left;
    background: $bg-main;

    .left-nav-item {
      margin-bottom: 20px;
    }

    .left-nav-heading {
      padding-bottom: 15px;
      margin-bottom: 30px;
      text-transform: uppercase;
      font-family: $font-heading;
      border-bottom: 1px solid $bc;
    }

    /* --------------------------
      Categories
     ---------------------------*/
    .categories-main {
      > li {
        margin-bottom: 10px;
      }
    }

    .categories-sub {
      padding-left: 15px;

      > li {
        margin-top: 5px;
      }

      > li > a {
        font-size: 14px;
      }
    }

    a {
      color: inherit;
      cursor: pointer;
      @include hover;
    }

    /* --------------------------
      Filters
    ---------------------------*/
    .filters {

      .filters-list {
        padding: 20px 0;
        border-bottom: 1px solid $bc;

        &:first-of-type {
          padding-top: 0;
        }
      }

      .filters-list-heading {
        font-size: 14px;
        margin-bottom: 10px;
        text-transform: uppercase;
      }

      .filters-categories > li {
        margin-top: 5px;
        text-transform: capitalize;
      }

      .filters-categories > li > label {
        cursor: pointer;

        > input {
          display: none;
        }

        > .checkbox {
          position: relative;

          > span {
            @include hover;
          }

          &:before {
            content: '';
            width: 14px;
            height: 14px;
            border: 1px solid $bc;
            border-radius: 2px;
            display: inline-block;
            position: relative;
            top: 3px;
            margin-right: 6px;
          }
        }

        > input:checked + .checkbox {
          &:after {
            position: absolute;
            transform: rotate(-45deg);
            content: '';
            border-width: 0 0 2px 2px !important;
            height: 5px;
            width: 8px;
            border: solid $fc-main;
            margin: 6px 0 0 3px;
            left: 0;
            top: 0;
          }
        }
      }
    }

    /* --------------------------
      Sizes
    ---------------------------*/
    .sizes {
      display: flex;
      flex-wrap: wrap;

      > li {
        text-align: center;
        margin-right: -1px;
        margin-bottom: -1px;
        border: 1px solid $bc;
        cursor: pointer;

        transition: .25s;

        &:hover {
          background: $bg-size;
          color: $fc-size;
        }

        > a {
          display: inline-block;
          width: 42px;
          height: 42px;
          line-height: 42px;

          &:hover {
            color: $fc-size;
            opacity: 1;
          }
        }
      }

      > li > .size-item {
        font-size: 14px;
        text-transform: uppercase;
      }
    }
  }


</style>
