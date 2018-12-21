<template>
    <div class="img-box">
        <div class="img"
             @click="bigShow = true; changeOverflow('hidden')"
             :style="imgStyle"
             @mouseenter="tipsShow = true"
             @mouseleave="tipsShow=false">
            <img :src="src" alt="" >
            <div class="tips" v-if="tipsShow"><p>查看大图</p></div>
        </div>
        <div class="model"
             @click="bigShow = false;
             changeOverflow()"
             v-if="bigShow">
            <img :src="src" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['src', 'imgStyle'],
        name: "imgSee",
        data() {
            return {
                bigShow: false,
                tipsShow: false
            }
        },
        methods: {
            changeOverflow (status) {
                document.body.style.overflow= status || '';
            }
        }
    }
</script>

<style scoped lang="scss">
    .img-box{
        display: inline-block;
        cursor: pointer;
    }
    .img{
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .tips{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(00, 00, 00, .5);
            p{
                position: absolute;
                top: 40%;
                width: 100%;
                text-align: center;
                font-size: 12px;
                color: #fff;
            }
        }
    }
    .model{
        z-index: 2;
        background: rgba(00, 00, 00, .4);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: auto;
        padding: 200px 100px 100px;
        img{
            display: inherit;
            margin: 0 auto;
        }
    }
</style>
