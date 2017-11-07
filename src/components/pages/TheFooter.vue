<template>
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
</template>

<script>
  export default {
    name: 'the-footer',
    data() {
      return {}
    },
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
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
</style>
