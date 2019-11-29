<template>
    <div id='login'>
        <div id="userLoginInfo">
            <van-cell-group>
                <van-field
                    type="tel"
                    v-model="username"
                    clearable
                    label="账号"
                    placeholder="请输入手机号"
                    maxlength="11"
                    autocomplete="false"
                />

                <van-field
                    v-model="password"
                    type="password"
                    label='密码'
                    maxlength="12"
                    placeholder="请输入密码"
                    autocomplete="false"
                />
                </van-cell-group>
        </div>
        <div id="loginBtn">
            <van-button 
                :loading='loadingFlag' 
                :disabled ='disabledFlag'
                type="info" 
                loading-text="登录中..."
                @click="userLogin"
            >
            登录
            </van-button>
        </div>
    </div>
</template>
<script>
let phoneReg = /^1[345789]\d{9}$/;
export default {
    data(){
        return{
            username:'',
            password:'',
            loadingFlag:false,
            disabledFlag:false,
            initH:'',//初始化获取浏览器高度
        }
    },
    watch:{
        username(value){
            value = value.replace(/\s+/g, "");
            this.username = value
        }
    },
    components:{
    },
    methods: {
        //解决登录页输入框聚焦，背景图片变形
        initBg(){
            this.initH = document.body.clientHeight || document.documentElement.clientHeight 
            document.getElementById('login').style.height = this.initH + 'px'
        },
        //用户登录
        userLogin(){
            let that = this;
            if(that.username){
                if(!phoneReg.test(that.username)){
                    that.$toast('手机号格式错误');
                    return;
                }
            }else{
                that.$toast('账号不能为空');
                return;
            }
            if(!that.username){
                that.$toast('密码不能为空');
                return;
            }
            that.loadingFlag = that.disabledFlag = true
            //走登录接口进行登录，登录成功  存储用户信息到vuex、localStorage
            //模拟登录成功存储用户信息
            setTimeout(()=>{
                that.loadingFlag = that.disabledFlag = false;
                that.$toast('登录成功')
                let userInfo = {
                    token:'123456789454',
                    name:'陆晓',
                    phone:'14752251266'
                }
                // // 将用户信息存储到vuex
                that.$store.commit('saveUserInfo',JSON.stringify(userInfo));
                that.$router.push(that.$route.query.redirect || '/')
                
            },3000)
        }
    },
    mounted(){
        this.initBg()
    }
}
</script>
<style lang='less' scoped>
#login{
    width: 100%;
    height: 100%;
}
#userLoginInfo{
    margin-top: 200px;
    padding: 0 50px;
    .van-cell-group{
        background: transparent;
        .van-cell{
            border-radius: 30px;
            margin-bottom: 20px;
            &:not(:last-child)::after{
                border-bottom: 0;
            }
        }
    }   
}
#loginBtn{
    margin-top: 100px;
    .van-button{
        padding: 0;
        width: 200px;
        border-radius:30px;
    }
    .van-button--disabled{
        opacity: .8;
    }
}
[class*=van-hairline]::after{
    border: 0
}
</style>
