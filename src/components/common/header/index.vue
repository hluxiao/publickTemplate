<template>
    <div id='header'>
        <van-nav-bar 
        :title="title" 
        left-text="返回" 
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        >
            <van-icon name="search" slot="right" v-show='rightFlag'/>
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:[
        'title',
        'rightFlag'
    ],
    components:{
    },
    methods: {
        onClickLeft() {
            this.$toast('逻辑自行实现');
        },
        onClickRight() {
            this.$toast('自定义按钮');
        }
    },
}
</script>
<style lang='less' scoped>
    .van-nav-bar__text{
        color: #fff
    }
</style>
