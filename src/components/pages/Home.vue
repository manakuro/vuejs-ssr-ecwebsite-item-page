<template>
  <div>
    <header>
      <nav>
        <div class="nav-bar">
          <ul class="nav-bar-account-info">
            <li>
              <a href="#">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                <span>My Account</span>
              </a>
            </li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>

        <div class="nav-menu">
          <div class="container">
            <div class="logo"></div>
            <ul class="nav-menu-list">
              <li><a href="#">men</a></li>
              <li><a href="#">women</a></li>
              <li><a href="#">boys</a></li>
              <li><a href="#">girls</a></li>
              <li><a href="#">customize</a></li>
            </ul>
            <div class="search-wrapper">
              <i class="fa fa-search" aria-hidden="true"></i>
              <form>
                <input type="search" class="input search" value="" placeholder="Search for"/>
                <input type="submit" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div class="banner">
        <div class="banner-container">
          <div class="arrow arrow-let">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div class="banner-content">
            <p>Shoes, Clothes on Big Sale! <a href="#">Check it out</a></p>
          </div>
          <div class="arrow arrow-right">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>

    </header>

    <main class="main">
      <div class="container">
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
        <div class="main-content">
          <div class="main-content-header">
            <h1 class="main-content-heading">MEN'S PANTS & TIGHTS (70)</h1>

          </div>

          <div class="products">
            <div class="products-item-list"
                 v-for="product in products"
                 :key="product.id"
                 @mouseenter="toggleActive(product.id)"
                 @mouseleave="toggleActive(product.id)">
              <div class="products-item-list-box" :class="{ on: isActive(product.id) }">
                <div class="products-item-list-content">
                  <div class="products-item-img-wrapper">
                    <img :src="product.img"/>
                  </div>

                  <div class="products-item-thumbs">
                    <div class="products-item-thumbs-img-wrapper">
                      <ul>
                        <li><a href="#"><img :src="product.img"/></a></li>
                        <li><a href="#"><img :src="product.img" class="sprite-index-1"/></a></li>
                        <li><a href="#"><img :src="product.img" class="sprite-index-2"/></a></li>
                      </ul>

                    </div>
                  </div>

                  <div class="products-item-info">
                    <ul class="products-item-info-colours colours">
                      <li><span class="colour-item red"></span></li>
                      <li><span class="colour-item brown"></span></li>
                      <li><span class="colour-item cream"></span></li>
                    </ul>

                    <h4 class="products-item-info-heading">{{ product.title }}</h4>
                    <p class="products-item-info-para">{{ product.description }}</p>
                    <p class="products-item-info-para">{{ product.price }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-info">
          <ul>
            <li><a href="#">GIFT CARDS</a></li>
            <li><a href="#">STUDENT DISCOUNT</a></li>
            <li><a href="#">MILITARY DISCOUNT</a></li>
            <li><a href="#">FIND A STORE</a></li>
            <li><a href="#">SIGN UP FOR EMAIL</a></li>
            <li><a href="#">BECOME A MEMBER</a></li>
            <li><a href="#">SITE FEEDBACK</a></li>
          </ul>
          <ul>
            <li class="footer-info-title"><a href="#">HELP</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <ul>
            <li class="footer-info-title"><a href="#">ABOUT US</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
          </ul>
        </div>
        <div class="social-media">
          <ul>
            <li><a href="#"><i class="fa fa-twitter icon" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-facebook-official icon" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram icon" aria-hidden="true"></i></a></li>
          </ul>
        </div>

      </div>
    </footer>

  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'home',

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

    this.activeStatuses = this.products
      .map(p => ({ [p.id]: false }))
      .reduce((a, b) => ({ ...a, ...b }))
  },

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

      return products;
    },
  },

  data() {
    return {
      activeStatuses: {},
    }
  },

  methods: {
    toggleActive(key) {
      this.activeStatuses[key] = !this.activeStatuses[key]
    },
    isActive(key) {
      return this.activeStatuses[key]
    },
  },
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.container {
  width: 1200px;
  margin: 0 auto;
}

/* -----------------------
 Header
----------------------- */
header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: z(header);
}

.nav-bar {
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid $bc;
  font-family: $font-heading;
  background: $bg-main;

  .nav-bar-account-info {
    display: flex;

    > li {
      padding: 0 10px;
    }

    > li > a {
      font-size: $font-size-link;
      color: $fc-subtitle;
      display: inline-block;

      > i {
        font-size: $font-size-icon;
        vertical-align: middle;
        margin-right: 2px;
      }
    }
  }
}

.nav-menu {
  width: 100%;
  height: 70px;
  padding: 15px 0;
  border-bottom: 1px solid $bc;
  font-family: $font-heading;
  background: $bg-main;

  > .container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 60% 1fr;
  }

  .nav-menu-list {
    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    color: $fc-heading;

    > li {
      padding: 0 10px;

      > a {
        color: inherit;
      }
    }
  }

  .search-wrapper {
    position: relative;

    > i {
      position: absolute;
      top: 50%;
      left: 12px;
      margin-top: -8px;
    }

    input[type=submit] {
      display: none;
    }
  }
}

.banner {
  width: 100%;
  border-bottom: 1px solid $bc;
  background: $bg-card;

  .banner-container {
    width: 600px;
    height: 60px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 10% 80% 10%;

    > * {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .arrow > i {
    font-size: 20px;
  }
}

/* -----------------------
 Footer
----------------------- */
.footer {
  width: 100%;
  padding: 40px 20px 20px;
  background: $bg-footer;
  color: $fc-footer;

  .footer-container {
    width: 700px;
    margin: 0 auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 80% 20%;
  }

  .footer-info {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3,1fr);

    font-family: $font-heading;

    > ul {
      text-align: left;

      > li {
        margin-bottom: 10px;
      }
    }

    .footer-info-title {
      text-transform: uppercase;
    }
  }

  .social-media {
    > ul {
      display: flex;
      justify-content: flex-end;
    }

    > ul > li {
      margin-left: 20px;
    }

    a {
      opacity: .8;

      transition: opacity .25s;

      &:hover {
        opacity: 1;
      }
    }

    .icon {
      font-size: 20px;
    }
  }

  a {
    color: inherit;
  }
}

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
 Left Navigation
----------------------- */
.left-nav {
  /*position: fixed;*/
  /*top: 170px;*/

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

// Colours
.colours {
  display: flex;
  flex-wrap: wrap;

  > li {
    margin: 0 10px 10px 0;
  }

  > li > .colour-item {
    height: 24px;
    width: 24px;
    display: inline-block;
    border-radius: 24px;
    cursor: pointer;
  }

  .white {
    background-color: $cp-white;
    border: 1px solid $cp-white-bd;
  }
  .khaki {
    background-color: $cp-khaki;
    border: 1px solid $cp-khaki-bd;
  }
  .yellow {
    background-color: $cp-yellow;
  }
  .green {
    background-color: $cp-green;
  }
  .blue {
    background-color: $cp-blue;
  }
  .olive {
    background-color: $cp-olive;
  }
  .red {
    background-color: $cp-red;
  }
  .grey {
    background-color: $cp-grey;
  }
  .brown {
    background-color: $cp-brown;
  }
  .black {
    background-color: $cp-black;
  }
  .cream {
    background-color: $cp-cream;
    border: 1px solid $cp-cream-bd;
  }
}


/* -----------------------
 Main Content
----------------------- */
.main-content {
  margin-bottom: 30px;

  .main-content-header {
    font-family: $font-heading;
    padding-top: 20px;
    margin-bottom: 20px;

    > .main-content-heading {
      font-size: 20px;
      text-align: left;
      text-transform: uppercase;
    }
  }

  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;

    .products-item-list {
      position: relative;
      min-height: 310px;
      margin-bottom: 20px;

      .products-item-list-box {
        position: absolute;
        left: 0;
        top: 0;
        width: 235px;
        height: auto;
        z-index: z(product-item);
        background: $bg-main;

        visibility: hidden;
        padding: 10px;
        border: 1px solid $bc-product-item;

        &.on {
          visibility: visible;
          z-index: z(product-item-on);
        }
      }

      // product image
      .products-item-img-wrapper {
        margin: 0 auto;
        text-align: center;
        max-height: 220px;
        cursor: pointer;
        background: $bg-product-item;
        overflow: hidden;
      }

      .products-item-list-content {
        visibility: visible;
      }

      // thumbnails
      .products-item-list-box.on  .products-item-thumbs-img-wrapper {
        display: block;
      }

      .products-item-thumbs-img-wrapper {
        display: none;
        width: 180px;
        height: 60px;
        margin: 10px auto;

        > ul {
          display: flex;
          height: 60px;
        }

        > ul > li {
          height: 60px;
        }

        > ul > li > a {
          display: inline-block;
          width: 60px;
          height: 60px;
          overflow: hidden;
        }

        > ul > li > a > img {
          height: 60px;
        }

        .sprite-index-1 {
          margin-left: -60px;
        }

        .sprite-index-2 {
          margin-left: -120px;
        }
      }

      .products-item-info {
        text-align: left;
        margin-top: 10px;
      }

      .products-item-info-colours {
        padding: 5px 0;
        border-bottom: 1px solid $bc;

        > li {
          margin-bottom: 0;
          height: 14px;
        }

        > li > .colour-item {
          width: 14px;
          height: 14px;
        }
      }

      .products-item-info-heading {
        margin: 10px 0 5px 0;
      }

      .products-item-info-para {
        font-size: 14px;
      }
    }
  }
}




/* -----------------------
 Components
----------------------- */
.input {
  width: 100%;
  border: 1px solid #ddd;
}

.search {
  padding: 10px 10px 10px 35px;
}

</style>
