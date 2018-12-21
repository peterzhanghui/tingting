<template>
  <div>
    <z-nav
      :list="navList"
      :activeId="activeId"
    />
    <nuxt/>
    <z-footer/>
    <message :message="$store.state.message"></message>
  </div>

</template>

<script>
  import zNav from '~/components/common/zNav.vue'
  import zFooter from '~/components/common/zFooter.vue'
  import message from '~/components/common/message.vue'

  export default {
    components: {
      zNav,
      zFooter,
      message
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
            name: '开心',
            path: '/fun'
          },{
            id: 3,
            name: '生活',
            path: '/life'
          },{
            id: 4,
            name: '博客',
            path: '/blog'
          },{
            id: 5,
            name: '联系',
            path: '/contact'
          },
        ]
      }
    },
    mounted() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            this.$store.commit('setPc', false)
            break;
          }
        }
      }
  }
</script>


<style>
  @media screen and (max-width: 480px){
    .pc {
      display: none
    }
    .phone {
      display: block
    }
  }
  @media screen and (min-width: 480px){
    .pc {
      display: block
    }
    .phone {
      display: none
    }
  }
   .container {
     width: 100%;
     min-height: 90vh;
     background: #f9f9f9;
   }
</style>
