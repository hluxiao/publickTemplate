<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="Router"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName"  mode="out-in">
        <router-view v-if="!$route.meta.keepAlive" class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else if(to.meta.index == from.meta.index) {
        this.transitionName = "ss"
      }else{
        this.transitionName = "slide-right";
      }
    }
  },
  methods: {
    polifyIosXrKeybord() {
        document.body.addEventListener('focusin', () =>{ 
          　　//软键盘弹起事件 
          window.scroll(0,200);
        })
        document.body.addEventListener('focusout', () =>{ //软键盘关闭事件 console.log("键盘收起")
          window.scroll(0,0);//失焦后强制让页面归位
        })
    }
  },
  created() {
    this.polifyIosXrKeybord();
  },
  mounted(){

  }
};
</script>

<style>
@import "../static/css/reset.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  background: #f7f6f6
}
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.5s ease;
  top: 0;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
