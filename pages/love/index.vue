<template>
  <section class="container">
    <div>
      <h1></h1>
      <button @click="nihao=!nihao">点击出现</button>
      <transition name="slide-fade">
        <div v-if="nihao">
          <p>dslkagjlsadjgdl</p>
          <img style="width: 400px; height: 400px;" src='https://open.saintic.com/api/bingPic/'/>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      nihao: false
    }
  }
}
</script>

<style>

</style>
