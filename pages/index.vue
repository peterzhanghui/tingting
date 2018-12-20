<template>
  <section class="container">
    <div class="banner_box">

      <div class="content"><p>欲穷千里目</p><p>更上一层楼</p></div>
      <transition name="slide-fade">
        <div class="banner"></div>
      </transition>
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
  @media screen and (max-width: 480px){
    .container {
      .banner_box{
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        .banner {
          flex: 1;
          order: 1;
          width: 100%;
          height: 70vh;
          background: url("http://img.jiatt.top/banner.jpg") no-repeat;
          background-size: cover;
        }
        .content{
          order: 2;
          transform: translateY(-80px);
          /*<!--margin-top: -100px;-->*/
          width: 60%;
          height: 200px;
          background: #fff;
          color: black;
          box-shadow: 0.5rem 0 4rem -1rem rgba(0,0,0,.35);
          z-index: 10;
          text-align: center;
          line-height: 40px;
          font-size: 24px;
          padding-top: 40px;
          letter-spacing: 10px;
          font-weight: bold;
        }
      }
    }
  }
  @media screen and (min-width: 480px){
    .container {
      width: 100%;
      min-height: 90vh;
      .banner_box{
        padding: 100px 20px;
        display: flex;
        align-items: center;
        .banner {
          flex: 1;
          width: 76%;
          height: 70vh;
          background: url("http://img.jiatt.top/banner.jpg") no-repeat;
          background-size: cover;
        }
        .content{
          transform: translateX(100px);
          margin-left: -100px;
          width: 20%;
          height: 200px;
          background: #fff;
          color: black;
          box-shadow: 0.5rem 0 4rem -1rem rgba(0,0,0,.35);
          z-index: 1;
          text-align: center;
          line-height: 40px;
          font-size: 24px;
          padding-top: 40px;
          letter-spacing: 10px;
          font-weight: bold;
        }
      }
    }
  }

</style>
