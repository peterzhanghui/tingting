<template>
  <section class="container">
    <div class="box">
      <p>
        <img class="profile_image" :src="detailData.header" alt="">
        <span class="name color9" v-text="detailData.name"></span>
      </p>
      <p v-text="detailData.text"></p>
      <!--pc跳详情看大图，mobile不跳-->
      <img v-if="detailData.type == 'image' || detailData.type == 'gif'" class="image" :src="detailData.images" alt="">
      <!--<video ref="item.sid" v-else-if="item.type == 'video'" class="video" :src="item.video" controls @click="videoPlay(item.sid)"></video>-->
      <video v-else-if="detailData.type == 'video'" class="video" :src="detailData.video" controls></video>
      <img :src="detailData.src" alt="" style="display: block; margin: 0 auto;">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      detailData: {
      }
    }
  },
  asyncData ({ $axios, route}) {

    return $axios.get("/getSingleJoke", {params: {
        sid: route.query.sid
      }}).then(res=>{
        if (res.data.code == 200) {
          return {detailData: res.data.result}
        }
      })
  }
}
</script>
<style type="text/css" lang="scss" scoped>
  .box{
    margin: 10px;
    padding: 10px;
    background: #fff;
    .profile_image{
      vertical-align:middle;
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    .image{
      display: block;
      margin: 20px auto;
      width: 50%;
    }
    .video{
      margin-top: 20px;
      width: 100%;
      height: 168px;
    }
  }

</style>

