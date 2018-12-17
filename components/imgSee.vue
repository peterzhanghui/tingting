<template>
  <div
    v-if="status"
    class="imgSee">
    <div
      class="mask"
      @click="status = false"/>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="item in imgSee.list"
          :key="item"
          class="swiper-slide">
          <img
            :src="item + img_after + 750"
            alt="" >
        </div>
      </div>
    </div>
    <div
      v-show="imgSee.list.length > 1"
      class="swiper-pagination swiper-pagination-bullets"/>
  </div>
</template>

<script>

export default {
  props: ['imgSee'],
  data() {
    return {
      status: false,
      swiperOption: {
        initialSlide: 0,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  watch: {
    imgSee() {
      this.status = true
      this.swiperOption.initialSlide = this.imgSee.index || 0
    },
    status(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.imgSee {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .swiper-container {
    position: relative;
    top: 50%;
    left: 43%;
    width: 86%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>
