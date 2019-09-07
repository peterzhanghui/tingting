<template>
  <section class="container">
    <div class="contactBox">
      <p class="item g-r-center"><img class="item-icon" src="~/assets/img/github.png" alt=""><a class="content" target="_blank" href="https://github.com/peterzhanghui">1226559563@qq.com</a> </p>
      <p class="item g-r-center"><img class="item-icon" src="~/assets/img/youxiang.png" alt=""><a class="content" href="mailto:zh18237107797@gmail.com?cc=1226559563@qq.com&subject=个人网站反馈主题&body=Hello, Mr. Zhang">zh18237107797@gmail.com</a>  </p>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  .contactBox{
    margin: 0 auto;
    padding-top: 60px ;
    .item{
      width: 300px;
      margin: 0 auto;
      &-icon{
        width: 30px;
      }
      &-content{
        text-indent: 10px;
      }
    }
  }

</style>
