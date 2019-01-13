<template>
  <div>
    <!--<div class="v-nav"></div>-->
    <p class="copyRight">浙ICP备18051229号-1</p>
    <p>{{hour.length == 1 ? '0' + hour : hour}}:{{ min.length == 1 ? '0' + min : min}}:{{second.length == 1 ? '0' + second : second}}</p>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        // phoneNav: false
        hour: '',
        min: '',
        second: '',
      }
    },
    created(){
        let date = new Date();
        this.hour = date.getHours();
        this.min = date.getMinutes();
        this.second = date.getSeconds();
        let that = this
        setInterval(function () {
            if (that.second == 59) {
                that.second = 0
                if (that.min == 59) {
                    that.min = 0
                    that.hour++
                }
                else {
                  that.min ++
                }
            } else {
              that.second ++;
            }
        }, 1000)

        console.log(date)

    }
  }
</script>

<style type="text/css" lang="scss" scoped>
  .copyRight{
    height: 30px;
    color: #666;
    line-height: 30px;
    text-align: center;
  }
  .v-nav {
    height: 500px;
    background: url("https://open.saintic.com/api/bingPic/") center bottom no-repeat;
  }
</style>
