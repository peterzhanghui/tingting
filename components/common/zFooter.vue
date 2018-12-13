<template>
  <div>
    <div class="pc">
      <div class="v-nav">
      </div>
      <p class="copyRight">浙ICP备18051229号-1</p>
    </div>
    <!--<div class="phone">-->
      <!--<header class="v-nav" v-if="phoneNav" @click="phoneNav = false">-->
        <!--<transition name="slide-fade">-->
          <!--<ul class="nav_ul">-->
            <!--<li-->
              <!--v-for="item in list"-->
              <!--v-text="item.name"-->
              <!--:class="{'nav_li': true, 'nav_active': item.id == active}"-->
              <!--@click="active = item.id; $router.push(item.path);phoneNav = false"-->
            <!--&gt;-->
            <!--</li>-->
          <!--</ul>-->
        <!--</transition>-->
      <!--</header>-->
    <!--</div>-->
  </div>

</template>
<script>
  export default {
    data() {
      return {
        phoneNav: false
      }
    }
  }
</script>

<style type="text/css" lang="scss" scoped>
  .copyRight{
    height: 30px;
    /*width: 100vW;*/
    /*background: rgba(0, 0, 0, 0.4);*/
    color: #666;
    line-height: 30px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    .pc {
      display: none
    }
    .phone {
      display: block
    }
    .v-nav {
      height: 100vh;
      width: 100vW;
      background: rgba(0, 0, 0, 0.4);
      position: relative;
    }
  }

  @media screen and (min-width: 480px) {
    .pc {
      display: block
    }
    .phone {
      display: none
    }
    .v-nav {
      height: 500px;
      background: url("https://open.saintic.com/api/bingPic/") center bottom no-repeat;
    }
  }

</style>
