import 'amfe-flexible'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Lazyload } from 'vant';
Vue.use(Lazyload);
//手动引入cube-ui组件。补足vant
import {
  Style,
  Scroll,

} from 'cube-ui'
Vue.use(Style)
Vue.use(Scroll)

//引入自定义公共方法
import common from './commonJs/index';
Vue.prototype.$common = common;



//挂载axios请求，实际需求 可调试api.js 进行统一管理   或者直接使用
import {post,get} from './server/server'
Vue.prototype.$post=post;
Vue.prototype.$get=get;

// vconsole引入
import vconsole from './vconsole/index'
//引入vuex
import {store} from './store'


Vue.config.productionTip = false

//实例化vue并暴露
var vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
export default vue;
