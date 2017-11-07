<template>
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
            <li class="nav-menu-list-item men"
                :class="{ on: isNavSubMenuShow('men') }"
                @mouseenter="toggleNavSubMenu('men', true)">
              <a href="#">men</a>
              <div class="nav-menu-sub" @mouseleave="toggleNavSubMenu('men', false)">
                <div class="nav-menu-sub-container">
                  <div class="nav-menu-sub-content">
                    <div class="nav-menu-sub-column">
                      <a  href="#" class="nav-menu-sub-column-heading">BY SPORT</a>
                      <ul>
                        <li><a href="#">Lifestyle</a></li>
                        <li><a href="#">Running</a></li>
                        <li><a href="#">Basketball</a></li>
                        <li><a href="#">Soccer</a></li>
                        <li><a href="#">Training</a></li>
                        <li><a href="#">Skateboarding</a></li>
                      </ul>
                    </div>

                    <div class="nav-menu-sub-column">
                      <a  href="#" class="nav-menu-sub-column-heading">F1iD</a>
                      <ul>
                        <li><a href="#">Mens</a></li>
                        <li><a href="#">Womens</a></li>
                        <li><a href="#">Boys</a></li>
                        <li><a href="#">Girls</a></li>
                      </ul>
                    </div>

                    <div class="nav-menu-sub-column">
                      <a  href="#" class="nav-menu-sub-column-heading">BY COLLECTION</a>
                      <ul>
                        <li><a href="#">Classic Chuck Taylor</a></li>
                        <li><a href="#">One Star</a></li>
                        <li><a href="#">Converse Chuck 70</a></li>
                        <li><a href="#">Premium Leather</a></li>
                        <li><a href="#">Counter Climate</a></li>
                      </ul>
                    </div>

                    <div class="nav-menu-sub-column">
                      <a  href="#" class="nav-menu-sub-column-heading">SALE</a>
                      <div>
                        <a href="#" class="nav-menu-sub-column-img-wrapper">
                          <img :src="require('../../assets/logo.png')"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
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

</template>

<script>
  export default {
    name: 'the-header',
    data() {
      return {
        navSubMenuStatues: {
          men: false,
          women: false,
          boys: false,
          girls: false,
          custom: false,
        },
      }
    },

    methods: {
      toggleNavSubMenu(key, status) {
        this.navSubMenuStatues[key] = status
      },
      isNavSubMenuShow(key) {
        return this.navSubMenuStatues[key]
      },
    },
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
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

      > li {
        padding: 0 10px;

        > a {
          font-family: $font-heading;
          text-transform: uppercase;
          color: $fc-heading;
        }

        > a:after {
          content: '';
          display: block;
          visibility: hidden;
          width: 100%;
          height: 1px;
          margin-top: 2px;
          background: $bc-nav-menu-list;
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

  .nav-menu-list {
    .nav-menu-list-item.on {
      .nav-menu-sub {
        display: block;
      }

      > a:after {
        visibility: visible;
      }
    }
  }

  .nav-menu-sub {
    display: none;
    width: 100%;
    position: absolute;
    top: calc(100% - 61px);
    left: 0;
    background: $bg-main;
    border-bottom: 1px solid $bc;

    .nav-menu-sub-container {
      width: 700px;
      height: 100%;
      margin: 0 auto;
      padding: 30px 0;
    }

    .nav-menu-sub-content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 15px;
      text-align: left;
    }

    .nav-menu-sub-column {
      color: $fc-heading;

      .nav-menu-sub-column-heading {
        display: inline-block;
        margin-bottom: 15px;

        font-family: $font-heading;
        font-weight: 500;
        text-transform: uppercase;
        color: inherit;

        @include hover;
      }

      > ul > li {
        margin-bottom: 7px;
      }

      > ul > li > a {
        color: inherit;
        font-size: 14px;
        @include hover;
      }

      // image
      .nav-menu-sub-column-img-wrapper {
        display: inline-block;
        width: 200px;
        height: 150px;
        overflow: hidden;
        background: $bg-product-item;
      }
    }
  }

</style>
