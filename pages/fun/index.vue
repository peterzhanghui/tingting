<template>
  <section class="container">
    <div class="box">
      <ul class="clear">
        <li class="li_item" v-for="item in dataList">
          <p>
            <!--<b class="profile_image">-->
              <img class="profile_image" :src="item.profile_image" alt="">
            <!--</b>-->
            <span class="name color9" v-text="item.name"></span>
          </p>
          <p v-text="item.text"></p>
          <img class="image" :src="item.image0" alt="">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      apidata: {
        type: 1,
        page: 1
      },
      dataList: []
    }
  },
  created () {
    this.$axios.get("/satinApi", this.apidata).then(res=>{
      if (res.data.code == 200) {
        this.dataList = res.data.data
      } else {
        this.$store.commit('message', {text: '数据有误'})
      }
    })
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  @media screen and (max-width: 480px){
    .li_item{
      width: 100%;
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
