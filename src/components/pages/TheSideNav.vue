<template>
  <div class="left-nav">
    <h2 class="left-nav-heading">men's</h2>
    <div class="left-nav-item categories">
      <ul class="categories-main">
        <li v-for="c in categories.main">
          <a @click.prevent="update('category', c.id)"
             :class="{ 'current': isCurrentCategory(c.id) }">{{ c.name }}</a>
          <ul class="categories-sub" v-if="categories.sub[c.id]">
            <li v-for="sub in categories.sub[c.id]">
              <a @click.prevent="update('category', sub.id)"
                 :class="{ 'current': isCurrentCategory(sub.id) }">{{ sub.name }}</a>
            </li>
          </ul>
        </li>
      </ul>

    </div>
    <div class="left-nav-item filters">
      <h3 class="left-nav-heading">filters</h3>

      <div class="filters-list-wrapper"
           v-for="(filter, key) in filters"
           :key="key"
           :class="{ hide: isHideList[key] }" >
        <h4 class="filters-list-wrapper-heading" @click="toggleList(key)">{{ filter.name }}</h4>
        <ul class="filters-categories filters-list">
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

      <div class="filters-list-wrapper" :class="{ hide: isHideList['colours'] }">
        <h4 class="filters-list-wrapper-heading" @click="toggleList('colours')">Colour</h4>

        <ul class="colours filters-list">
          <li v-for="colour in colours">
            <a @click.prevent="update('colour', colour.id)" class="colour-item" :class="colour.name"></a>
          </li>
        </ul>
      </div>

      <div class="filters-list-wrapper" :class="{ hide: isHideList['sizes'] }">
        <h4 class="filters-list-wrapper-heading" @click="toggleList('sizes')">Size</h4>

        <ul class="sizes filters-list">
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
  import PerfectScrollbar from 'perfect-scrollbar'
  import createMapHelpers from 'src/utils/createMapHelpers'

  const { mapActions, mapGetters } = createNamespacedHelpers('products/productsQuery')

  const { mapSetGet } = createMapHelpers('products/productsQuery', { state: 'queries', action: 'updateQueries' })

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
      ...mapSetGet({ filtersInput: 'filters' }),
      ...mapGetters(['isCurrentCategory']),
    },

    created() {
      this.isHideList = [Object.keys(this.filters), 'colours', 'sizes'].reduce((acc, key) => {
        acc[key] = false
        return acc
      },{})
    },

    mounted() {
      window.setTimeout(() => {
        this.ps = new PerfectScrollbar('.left-nav')
      })
    },

    destroyed() {
      this.ps.destroy()
      this.ps = null
    },

    data() {
      return {
        isHideList: {},
      }
    },

    methods: {
      ...mapActions(['updateQueries']),
      ...mapActions({
        update(dispatch, key, val) {
          dispatch('updateQueries', { [key]: val })
        },
      }),

      toggleList(key) {
        this.isHideList[key] = !this.isHideList[key]
      },
    },
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .left-nav {
    padding: 20px;
    width: 260px;
    height: 100vh;
    text-align: left;
    background: $bg-main;
    position: relative;

    .left-nav-item {
      margin-bottom: 20px;
    }

    .left-nav-heading {
      padding-bottom: 15px;
      margin-bottom: 20px;
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

      a {
        &.current {
          font-weight: 700;
        }
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

      .filters-list-wrapper {
        padding: 20px 0;
        border-bottom: 1px solid $bc;

        &:first-of-type {
          padding-top: 0;
        }
      }

      // open filter list
      .filters-list-wrapper.hide {
        .filters-list-wrapper-heading {
          margin-bottom: 0;

          &:after {
            content: '−';
            font-size: 17px;
            font-weight: 500;
          }
        }

        .filters-list {
          display: none;
          opacity: 0;

          transition: .25s;
        }
      }

      .filters-list-wrapper-heading {
        font-size: 14px;
        margin-bottom: 20px;
        text-transform: uppercase;
        position: relative;
        cursor: pointer;

        &:after {
          content: '＋';
          display: inline-block;
          position: absolute;
          right: 0;
          top: 0;
          font-weight: 100;
        }
      }

      .filters-categories > li {
        margin-top: 5px;
        text-transform: capitalize;
        font-size: 14px;
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
