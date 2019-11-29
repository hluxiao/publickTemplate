<template>
  <div id="home" class="pw100-ph100">
    <!-- <app-header :title='title' :rightFlag='rightFlag'></app-header> -->
    <!-- 搜索 -->
    <div id="search" class="mb10 pr10">
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="scroll-list-wrap" id="contentWrap">
      <cube-scroll ref="scroll">
        <!-- 内容区 -->
        <!-- banner -->
        <div id="banner">
          <van-swipe :autoplay="5000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- NoticeBar 通知栏 -->
        <div id="news" class="mt10 mb10">
          <van-notice-bar left-icon="info-o">
            <span>{{notice}}</span>
          </van-notice-bar>
        </div>
        <!-- small grid -->
        <div id="smallGrid" class="ml-mr-15">
          <van-grid :column-num="3" :gutter="5">
            <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
          </van-grid>
        </div>
      </cube-scroll>
    </div>
    <app-bottom></app-bottom>
  </div>
</template>
<script>
// import Header from '../../common/header/index';
import Bottom from "../../common/bottom/index";
export default {
  data() {
    return {
      // title:this.$route.meta.title,
      // rightFlag:false,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      searchValue: "",
      notice:
        "这里是公告区域这里是公告区域这里是公告区域这里是公告区域这里是公告区域这里是公告区域这里是公告区域这里是公告区域这里是公告区域"
    };
  },
  components: {
    // 'app-header':Header,
    "app-bottom": Bottom
  },
  methods: {
      onSearch(){
          this.$toast(this.searchValue)
      }
  },
  mounted() {
    let that = this;
    // 自适应显示区域
    that.$common.initCotentH(1);
    window.onresize = function() {
      that.$common.initCotentH(1);
    };
  }
};
</script>
<style lang='less' scoped>
#banner {
  height: 200px;
  .van-swipe {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.van-search--show-action{
    padding-right: 5px;
}
</style>
