<template lang="html">
  <div id="scroll-load">
    <div
      ref="touchNode"
      :class="{unset: scrollStatus === 1 || scrollStatus === 2}"
      :style="{ transform: scrollStatus === 5 ? 'unset' : `translate3d(0, ${diff}px, 0)` }"
      class="wrapper g-c-center"
    >
      <div class="top-text g-r-center">
        <span>{{ scrollTypeText[scrollStatus] }}</span>
      </div>
      <div
        ref="scrollNode"
        class="scroll-container">
        <slot name="scrollList"/>
        <div
          v-show="scrollStatus === 5"
          class="bottom-text g-r-center">
          <span>{{ scrollTypeText[scrollStatus] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let timer

export default {
  // requestStatus: 请求状态  默认为false
  props: ['requestStatus'],
  data() {
    return {
      scrollStatus: 0, // 滚动状态  0: 默认值  1: 下拉更新  2: 松开更新  3: 下拉更新加载中  4: 加载完成  5: 滚动加载中
      scrollTypeText: {
        1: '下拉更新',
        2: '松开更新',
        3: '加载中···',
        4: '加载完成',
        5: '加载中···'
      },
      diff: 0,
      startY: 0
    }
  },
  watch: {
    'requestStatus.request'(val) {
      if (!val) {
        if (this.scrollStatus === 5) {
          this.scrollStatus = 0
        } else {
          this.scrollStatus = 4
          setTimeout(() => {
            this.scrollStatus = 0
            this.diff = 0
          }, 200)
        }
      }

      // 没有更多数据时解绑滚动
      // if (this.operate !== 'touch') {
      //   if (this.requestStatus.noMore) {
      //     this.$refs.scrollNode.removeEventListener('scroll', this.handleScroll)
      //   } else {
      //     this.$refs.scrollNode.addEventListener('scroll', this.handleScroll)
      //   }
      // }
    }
  },
  mounted() {
    this.fontSizeRatio = document.documentElement.clientWidth / 7.5
    this.init()
  },
  methods: {
    init() {
      // 初始化
      // this.$refs.touchNode.addEventListener(
      //   'touchstart',
      //   this.handleTouchStart
      // )
      // this.$refs.touchNode.addEventListener('touchmove', this.handleTouchMove)
      // this.$refs.touchNode.addEventListener('touchend', this.handleTouchEnd)
      this.$refs.scrollNode.addEventListener('scroll', this.handleScroll)
    },
    handleScroll(e) {
      // 滚动侦听
      let node = this.$refs.scrollNode, // 滚动节点
        scrollTop = node.scrollTop, // 滚动条距离顶部高度
        scrollHeight = node.scrollHeight, // 滚动内容高度
        seeHeight = node.clientHeight, // 可见区域高度
        status = scrollTop >= scrollHeight - seeHeight - 50 // 滚动条是否见底

      // 阻止浏览器默认事件
      e.preventDefault()
      e.stopPropagation()
      clearTimeout(timer)

      if (status && !this.requestStatus.request) {
        this.scrollStatus = 5
        timer = setTimeout(() => {
          this.$emit('callback', 'scroll')
        }, 100)
      }
    },
    handleTouchStart(e) {
      // 开始
      this.startY = e.touches[0].clientY
      console.log(this.startY)
    },
    handleTouchMove(e) {
      // 移动
      let clientY = e.touches[0].clientY,
        scrollTop = this.$refs.touchNode.scrollTop || 0;
      console.log(clientY, scrollTop)
      if (
        clientY > this.startY &&
        this.scrollStatus !== 3 &&
        this.scrollStatus !== 4
      ) {
        if (scrollTop === 0) {
          this.scrollStatus = 1
          let moveY = clientY - this.startY

          // 阻止浏览器默认事件
          e.preventDefault()
          e.stopPropagation()

          if (moveY > 0) {
            this.scrollStatus = moveY >= this.fontSizeRatio * 4.2 ? 2 : 1
            this.diff = moveY / 3
          }
        } else {
          this.startY = clientY
        }
      }
    },
    handleTouchEnd(e) {
      // 结束
      if (this.scrollStatus === 2) {
        this.scrollStatus = 3
        this.diff = this.fontSizeRatio * 1
        this.$emit('callback', 'down')
      } else {
        this.diff = 0
      }
    }
  }
}
</script>
<style lang="scss">
#scroll-load {
  height: 100vh;
  .wrapper {
    height: 100%;
    transition: 300ms;
    &.unset {
      transition: unset;
    }
    .top-text {
      flex: unset;
      position: relative;
      height: 100px;
      margin-top: -100px;
      line-height: 100px;
      font-size: 16px;
    }
    .scroll-container {
      flex: 1;
      width: 100%;
      overflow-y: auto;
      over-flow: touch;
      -webkit-overflow-scrolling: touch;
    }
    .bottom-text {
      flex: unset;
      height: 80px;
    }
  }
}
</style>
