<template>
    <div id='my' class="pw100-ph100 tx-l">
        <div id="contentWrap">
            <div class="scroll-list-wrap">
                <cube-scroll
                    ref="scroll">
                    <!-- 这里显示代码主体内容 -->
                    <!-- 用户信息 -->
                    <div id="userInfo" class="ov-h flex justify-content_flex-start align-items_center">
                        <div class="ml15">
                            <van-image
                            round
                                width="65"
                                height="65"
                                lazy-load
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                            />
                        </div>
                        <div class="f16 fb white ml20">{{userName}}</div>
                    </div>
                    <!-- 其他信息 -->
                    
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
            userName:'陆晓'
        }
    },
    components:{
         'app-bottom':Bottom
    },
    methods: {
    },
}
</script>
<style lang='less' scoped>
    #userInfo{
        height: 130px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background: #f75252
        
    }
</style>
