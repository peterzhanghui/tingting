<template>
  <section class="container">
    <div class="box">
      <load-more :request-status="scrollStatus" @callback="scrollCallback">
        <ul class="clear" slot="scrollList">
          <li class="li_item" v-for="item in dataList">
              <p>
                <img class="profile_image" :src="item.header" alt="">
                <span class="name color9" v-text="item.name"></span>
              </p>
              <p v-text="item.text"></p>
              <!--pc跳详情看大图，mobile不跳-->
              <img v-if="item.type == 'image' || item.type == 'gif'" @click="$store.state.isPc ? $router.push({name: 'fun-detail', query : {sid: item.sid}}) : '';" class="image" :src="item.images" alt="">
            <!--<video ref="item.sid" v-else-if="item.type == 'video'" class="video" :src="item.video" controls @click="videoPlay(item.sid)"></video>-->
            <video v-else-if="item.type == 'video'" class="video" :src="item.video" controls></video>
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
      this.$axios.get("/getJoke", {params: this.apidata}).then(res=>{
        if (res.data.code == 200) {
          if (type == 'scroll') {
            this.dataList = [...this.dataList, ...res.data.result]
          } else {
            this.dataList = res.data.result
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
    },
    videoPlay(id) {
      console.log(this.$refs)
      console.log(this.$refs[id])
      this.$refs[id].play()
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  @media screen and (min-width: 480px){
    .li_item{
      height: 320px;
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
    .video{
      margin-top: 20px;
      width: 100%;
      height: 168px;
    }
  }

</style>
