<template>
  <div id="header">
    <van-tabbar v-model="active" safe-area-inset-bottom route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/tabbar2" icon="photo-o">文字</van-tabbar-item>
      <van-tabbar-item replace to="/tabbar3" icon="photo-o">文字</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {},
  methods: {}
};
</script>
<style scoped>
</style>
