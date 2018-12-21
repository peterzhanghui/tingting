<template>
  <section class="container">
    <div class="box">
      <load-more :request-status="scrollStatus" @callback="scrollCallback">
        <ul class="clear" slot="scrollList">
          <li class="li_item" v-for="item in dataList">
            <p>
              <img class="profile_image" :src="item.profile_image" alt="">
              <span class="name color9" v-text="item.name"></span>
            </p>
            <p v-text="item.text"></p>
            <img class="image" :src="item.image0" alt="">
          </li>
        </ul>
      </load-more>
    </div>
  </section>
</template>

<script>
import loadMore from '~/components/common/loadMor.vue'
export default {
  components: {
    loadMore
  },
  data() {
    return {
      apidata: {
        type: 1,
        page: 1
      },
      dataList: [],
      loadStatus: 1, // 加载状态  1: 未请求 2: 已请求  3: 加载更多
      scrollStatus: {
        request: true,
        noMore: false
      },
    }
  },
  created () {
    this.getList('down')
  },
  methods: {
    getList (type) {
      this.scrollStatus.request = true;
      this.$axios.get("/satinApi", {params: this.apidata}).then(res=>{
        if (res.data.code == 200) {
          if (type == 'scroll') {
            this.dataList = [...this.dataList, ...res.data.data]
          } else {
            this.dataList = res.data.data
          }
          this.scrollStatus.request = false;
        } else {
          this.$store.commit('message', {text: '数据有误'})
        }
      })
    },
    /**
     * 滚动回调
     * @param {type}    类型  scroll：加载更多  down：下拉刷新
     */
    scrollCallback(type) {
      if (type === 'scroll') {
        this.apidata.page++
        this.getList('scroll')
      } else if (type === 'down') {
        this.apidata.page = 1
        this.getList('down')
      }
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  @media screen and (max-width: 480px){
    .li_item{
      /*width: 100%;*/
    }
  }
  @media screen and (min-width: 480px){
    .li_item{
      height: 300px;
      width: 280px;
      float: left;
    }
  }
  .li_item{
    margin: 10px;
    padding: 10px;
    background: #fff;
    overflow: hidden;
    .profile_image{
      vertical-align:middle;
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    .image{
      margin-top: 20px;
      width: 100%;
    }
  }

</style>
