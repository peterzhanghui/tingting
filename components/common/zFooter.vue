<template>
  <div>
<!--    <div class="v-nav"></div>-->
    <p class="copyRight">
      <span class="copyRight-item">浙ICP备18051229号-1</span>
      <span class="copyRight-item">© 2019 jiatt</span>
    </p>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        // phoneNav: false
      }
    },
    created(){

    }
  }
</script>

<style type="text/css" lang="scss" scoped>
  .copyRight{
    height: 60px;
    color: #999;
    line-height: 50px;
    text-align: center;
    &-item {
      margin: 0px 20px;
      &:hover {
        color: #333;
      }
    }
  }
  .v-nav {
    height: 500px;
    background: url("https://open.saintic.com/api/bingPic/") center bottom no-repeat;
  }
</style>
