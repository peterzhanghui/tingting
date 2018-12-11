<template>
  <section class="container">
    <div class="banner_box">
      <div class="content"><p>欲穷千里目</p><p>更上一层楼</p></div>
      <div class="banner"></div>
    </div>
    <div>
      <!--<img src='https://open.saintic.com/api/bingPic/' />-->
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    },
    data() {
      return {}
    }
  }
</script>

<style type="text/css" lang="scss">
  .container {
    width: 100%;
    min-height: 90vh;
    .banner_box{
      display: flex;
      flex-grow: 1;
      align-items: center;
      .banner {
        flex-grow: 1;
        width: 65%;
        height: 70vh;
        background: url("../static/banner.jpg") no-repeat;
        background-size: cover;
      }
      .content{
        transform: translateX(50px);
        margin-left: -50px;
        width: 35%;
        height: 200px;
        background: #fff;
        color: black;
        box-shadow: 0.5rem 0 4rem -1rem rgba(0,0,0,.35);
        z-index: 10;
      }
    }

  }
</style>
