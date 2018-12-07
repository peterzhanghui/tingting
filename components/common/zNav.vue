<template>
  <header class="v-nav">
    <ul class="nav_ul">
      <li
        v-for="item in list"
        v-text="item.name"
        :class="{'nav_li': true, 'nav_active': item.id == activeId}"
        @click="activeId = item.id; $router.push(item.path)"
      >
      </li>
    </ul>
  </header>
</template>
<script>
  export default {
    /**
     *
     * {string}  activeId         当前选中id
     * {array}   list             nav数据数组
     * {string}  list.id          元素id
     * {string}  list.name        元素name
     *
     * */
    props: ['list', 'activeId'],
    data() {
      return {
      }
    }
  }
</script>

<style >
.v-nav {
  height: 180px;
  width: 100%;
  background: #ffffff;
  box-shadow: rgba(29, 29, 31, 0.07) 0px 10px 60px 0px;
  .nav_ul{
    margin: 0 auto;
    .nav-li{
      float: left;
      font-size: 24px;
      color: #47494e;
      height: 100%;
      padding: 0 20px;
      display: inline-block;
    }
    .nav_active{
      color: darkcyan;
    }
  }
}
</style>
