<template>
  <div
    id="message"
    :class="{active: status}"
    class="">
    {{ message.text }}
  </div>
</template>

<script>
let timer

export default {
  props: ['message'],
  data() {
    return {
      status: false,
      length: 1500
    }
  },
  watch: {
    message(val) {
      clearTimeout(timer)
      this.status = true
      if (val.length) {
        this.length = val.length
      }
      timer = setTimeout(() => {
        this.status = false
      }, this.length)
    }
  }
}
</script>

<style lang="scss" scoped>
#message {
  position: fixed;
  top: 40%;
  left: 50%;
  z-index: -1;
  min-width: 30px;
  max-width: 150px;
  padding: 10px 15px;
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.15rem;
  -webkit-transform: translate(-50%, -50%) scale(0.7);
  -moz-transform: translate(-50%, -50%) scale(0.7);
  -ms-transform: translate(-50%, -50%) scale(0.7);
  -o-transform: translate(-50%, -50%) scale(0.7);
  transform: translate(-50%, -50%) scale(0.7);
  opacity: 0;
  &.active {
    z-index: 1000;
    -webkit-transform: translate(-50%, -50%) scale(1);
    -moz-transform: translate(-50%, -50%) scale(1);
    -ms-transform: translate(-50%, -50%) scale(1);
    -o-transform: translate(-50%, -50%) scale(1);
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
</style>
