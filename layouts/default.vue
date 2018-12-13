<template>
  <div>
    <z-nav
      :list="navList"
      :activeId="activeId"
    />
    <nuxt/>
    <z-footer/>
  </div>

</template>

<script>
  import zNav from '~/components/common/zNav.vue'
  import zFooter from '~/components/common/zFooter.vue'

  export default {
    components: {
      zNav,
      zFooter
    },
    data() {
      return {
        activeId: 1,
        navList: [
          {
            id: 1,
            name: '首页',
            path: '/'
          },{
            id: 2,
            name: '文章',
            path: '/blog'
          },{
            id: 3,
            name: '生活',
            path: '/life'
          },{
            id: 4,
            name: '关于',
            path: '/about'
          },{
            id: 5,
            name: '联系',
            path: '/contact'
          },
        ]
      }
    }
  }
</script>


<style>
   /*reset css 重置默认样式 */
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
</style>
