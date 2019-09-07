<template>
  <section class="container ">
    <div>
      <h1>life</h1>
    </div>
<!--    <div class="box g-r-center">-->
<!--      <span class="content">-->
<!--        中文厉害$￥-->
<!--      </span>-->

<!--      <img class="header img " src="~/assets/img/header.png" alt="">-->
<!--      <img class="right img" src="~/assets/img/right.png" alt="">-->
<!--    </div>-->
  </section>
</template>

<script>

  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .box {
    line-height: 120px;
    height: 120px;
    width: 90%;
    margin: 0 auto;
    border: 1px solid;
  }

  .content {
    flex: auto;
  }

  .header {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    overflow: hidden;
  }

  .right {
    width: 26px;
    height: 26px;
  }

  .container {
    margin: 0 auto;
  }
</style>
