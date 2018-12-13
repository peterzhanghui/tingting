<template>
  <div>
    <div class="v-nav"></div>
    <p class="copyRight">浙ICP备18051229号-1</p>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        // phoneNav: false
      }
    }
  }
</script>

<style type="text/css" lang="scss" scoped>
  .copyRight{
    height: 30px;
    color: #666;
    line-height: 30px;
    text-align: center;
  }
  .v-nav {
    height: 500px;
    background: url("https://open.saintic.com/api/bingPic/") center bottom no-repeat;
  }
</style>
