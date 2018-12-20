<template>
  <section class="container ">
    <div class="life">
      <h1>life</h1>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      startY: 0
    }
  },
  methods: {
    handleTouchMove(e){
      console.log(e.touches[0].clientY)
    }
  },
  mounted(){
    window.onscroll = function(){
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      //滚动条到底部的条件
      if(scrollTop+windowHeight==scrollHeight){
        //写后台加载数据的函数
        console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
      }
    };
     document.addEventListener('touchstart', this.handleTouchStart, false);
     document.addEventListener('touchmove', this.handleTouchMove, false);
     document.addEventListener('touchend', this.handleTouchEnd, false);
  }
}
</script>

<style>
  .life{
    height: 2000px;
  }

</style>
