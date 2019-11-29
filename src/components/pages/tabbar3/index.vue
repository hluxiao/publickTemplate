<template>
    <div id='type' class="pw100-ph100">
        <div id="contentWrap">
            <div class="scroll-list-wrap flex1">
                <cube-scroll
                    ref="scroll">
                    <!-- 这里显示代码主体内容 -->
    tabbar3
                </cube-scroll>
            </div>
        </div>
        <app-bottom></app-bottom>
    </div>
</template>
<script>
import Bottom from '../../common/bottom/index';
export default {
    data(){
        return{
            active: 0
        }
    },
    components:{
         'app-bottom':Bottom
    },
    methods: {
    },
}
</script>
<style scoped>
    
</style>
