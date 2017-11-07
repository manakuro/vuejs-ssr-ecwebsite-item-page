<template>
  <div class="products-item-list">
    <div class="products-item-list-box">
      <div class="products-item-list-content">
        <div class="products-item-img-wrapper">
          <img :src="img"/>
        </div>

        <div class="products-item-thumbs">
          <div class="products-item-thumbs-img-wrapper">
            <ul>
              <li><a href="#"><img :src="img"/></a></li>
              <li><a href="#"><img :src="img" class="sprite-index-1"/></a></li>
              <li><a href="#"><img :src="img" class="sprite-index-2"/></a></li>
            </ul>

          </div>
        </div>

        <div class="products-item-info">
          <ul class="products-item-info-colours colours">
            <li><span class="colour-item red"></span></li>
            <li><span class="colour-item brown"></span></li>
            <li><span class="colour-item cream"></span></li>
          </ul>

          <h4 class="products-item-info-heading">{{ title }}</h4>
          <p class="products-item-info-para">{{ description }}</p>
          <p class="products-item-info-para">{{ price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'products-item',

  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
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
  // its hovered
  .products-item-list {
    &:hover > .products-item-list-box {
      visibility: visible;
      z-index: z(product-item-on);
    }

    &:hover .products-item-thumbs-img-wrapper {
      display: block;
    }
  }

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
</style>
