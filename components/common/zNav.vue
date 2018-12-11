<template>
  <div>
    <div class="pc">
      <header class="v-nav">
        <ul class="nav_ul">
          <li
            v-for="item in list"
            v-text="item.name"
            :class="{'nav_li': true, 'nav_active': item.id == active}"
            @click="active = item.id; $router.push(item.path)"
          >
          </li>
        </ul>
      </header>
    </div>
    <div class="phone">
      <header class="v-nav" v-if="phoneNav">
        <transition name="slide-fade">
          <ul class="nav_ul">
            <li
              v-for="item in list"
              v-text="item.name"
              :class="{'nav_li': true, 'nav_active': item.id == active}"
              @click="active = item.id; $router.push(item.path);phoneNav = false"
            >
            </li>
          </ul>
        </transition>
      </header>

      <transition name="slide-fade">
        <div class="nav_btn"
             v-if="!phoneNav"
             @click="phoneNav = true"
        >
        </div>
      </transition>


    </div>
  </div>

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
        active: this.activeId || 1,
        phoneNav: false
      }
    }
  }
</script>

<style type="text/css" lang="scss">

  @media screen and (max-width: 480px) {
    .pc {
      display: none
    }
    .phone {
      display: block
    }
    .nav_btn {
      position: fixed;
      right: 10px;
      top: 50%;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background: url("../../static/t.png"), no-repeat;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .v-nav {
      height: 100vh;
      width: 100vW;
      background: rgba(0, 0, 0, 0.4);
      position: relative;
      .nav_ul {
        /*margin: 0 auto;*/
        height: 100%;
        padding-top: 20vh;
        width: 30vw;
        background: #fff;
        position: absolute;
        right: 0;
        .nav_li {
          font-size: 18px;
          color: #47494e;
          height: 54px;
          line-height: 54px;
          letter-spacing: 16px;
          font-weight: bold;
          text-align: center;
        }
        .nav_active {
          color: darkcyan;
        }
      }
    }
    /*动画*/
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
      /* .slide-fade-leave-active for below version 2.1.8 */
    {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @media screen and (min-width: 480px) {
    .pc {
      display: block
    }
    .phone {
      display: none
    }
    .v-nav {
      height: 80px;
      width: 100%;
      background: #ffffff;
      box-shadow: rgba(29, 29, 31, 0.07) 0px 10px 60px 0px;
      .nav_ul {
        margin: 0 auto;
        height: 100%;
        .nav_li {
          float: left;
          font-size: 24px;
          color: #47494e;
          height: 100%;
          line-height: 80px;
          padding: 0 20px;
          display: inline-block;
          margin: 0 auto;
          cursor: pointer;
          letter-spacing: 6px;
        }
        .nav_active {
          color: darkcyan;
        }
      }
    }
  }

</style>
