<template>
  <div class="left-nav">
    <h3 class="left-nav-heading">men's</h3>
    <div class="left-nav-item categories">
      <ul class="categories-main">
        <li v-for="category in categories">
          <a href="#">{{ category.name }}</a>
          <ul class="categories-sub" v-if="category.sub.length">
            <li v-for="sub in category.sub"><a href="#">{{ sub.name }}</a></li>
          </ul>
        </li>
      </ul>

    </div>
    <div class="left-nav-item filters">
      <h3 class="left-nav-heading">filters</h3>

      <div class="filters-list" v-for="n in 5">
        <h4 class="filters-list-heading">Sport</h4>
        <ul class="filters-categories">
          <li>
            <label for="lifestyle">
              <input type="checkbox" id="lifestyle" value="0">
              <span class="checkbox"><span>Lifestyle</span></span>
            </label>
          </li>
          <li>
            <label for="running">
              <input type="checkbox" id="running" value="1">
              <span class="checkbox"><span>Running</span></span>
            </label>
          </li>
          <li>
            <label for="basketball">
              <input type="checkbox" id="basketball" value="2">
              <span class="checkbox"><span>Basketball</span></span>
            </label>
          </li>
          <li>
            <label for="football">
              <input type="checkbox" id="football" value="3">
              <span class="checkbox"><span>Football</span></span>
            </label>
          </li>
          <li>
            <label for="soccer">
              <input type="checkbox" id="soccer" value="4">
              <span class="checkbox"><span>Soccer</span></span>
            </label>
          </li>
          <li>
            <label for="training-gym">
              <input type="checkbox" id="training-gym" value="5">
              <span class="checkbox"><span>Training & Gym</span></span>
            </label>
          </li>
        </ul>
      </div>

      <div class="filters-list">
        <h4 class="filters-list-heading">Colour</h4>

        <ul class="colours">
          <li v-for="colour in colours"><span class="colour-item" :class="colour"></span></li>
        </ul>
      </div>

      <div class="filters-list">
        <h4 class="filters-list-heading">Size</h4>

        <ul class="sizes">
          <li v-for="size in sizes"><span class="size-item">{{ size }}</span></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'the-sidenav',

    created() {
      this.categories = [
        {
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
          name: 'Tops & T-Shir',
          sub: [],
        },
        {
          name: 'Hoodies & Pullovers',
          sub: [],
        },
        {
          name: 'Jackets & Vests',
          sub: [],
        },
        {
          name: 'Pants & Tights',
          sub: [],
        },
        {
          name: 'Shorts',
          sub: [],
        },
        {
          name: 'Surf & Swimwear',
          sub: [],
        },
        {
          name: 'Socks',
          sub: [],
        },
        {
          name: 'Accessories & Equipment',
          sub: [],
        },
      ]

      this.colours = [
        'white',
        'khaki',
        'yellow',
        'green',
        'blue',
        'olive',
        'red',
        'grey',
        'brown',
        'black',
        'cream',
        'black',
      ]

      this.sizes = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        '2xl',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '36',
        '38',
        '40',
      ]
    },

    data() {
      return {}
    },

    methods: {},
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

    // Categories
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
      @include hover;
    }

    // Filters
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

    // Sizes
    .sizes {
      display: flex;
      flex-wrap: wrap;

      > li {
        width: 42px;
        height: 42px;
        line-height: 42px;
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
      }

      > li > .size-item {
        font-size: 14px;
        text-transform: uppercase;
      }
    }
  }


</style>