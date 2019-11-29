<template>
    <div id='err' class="pw100-ph100">
        <div class="err f15 grey pos-fx">
            <span>404:页面丢失&nbsp;&nbsp;&nbsp;</span>
            <span class="blue" @click="initGotoHome">返回首页</span>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    components:{
    },
    methods: {
        initGotoHome(){
            this.$router.replace('/')
        }
    },
}
</script>
<style scoped>
    .err{
        top: 50%;
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin-top: -30px;
    }
</style>
