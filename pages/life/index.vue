<template>
  <section class="container ">
    <div class="life"></div>
    <div class="life life1" style=""></div>
    <div class="life life2"></div>
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

<style>
  .container{
    margin: 0 auto;
  }
  .life{
    height: 200px;
    width: 200px;
    background: #2A7FF3;
    margin: 0 auto;
  }
  .life1{
    background: #40BF88;
    width: 300px;
    transition: 300ms;
    transform: translateY(20px);
  }
  .life2{
    background: #FD8C37;
  }
</style>
