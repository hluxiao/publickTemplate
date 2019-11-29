import Vue from 'vue'
import Router from 'vue-router'

//首页
const Home = ()=>import('../components/pages/Home')
//tabbar2
const Tabbar2 = ()=>import('../components/pages/tabbar2')
//tabbar3
const Tabbar3 = ()=>import('../components/pages/tabbar3')
//我的
const My = ()=>import('../components/pages/My')
//登录页面
const Login = ()=>import('../components/common/Login')

//404页面
const Err = ()=>import('../components/common/Err')

const router = new Router({
  routes: [
    {
      meta:{
        index:0,
        title:'首页',
        needLogin:false
      },
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      meta:{
        index:0,
        title:'tabbar2',
        needLogin:false
      },
      path: '/tabbar2',
      name: 'Tabbar2',
      component: Tabbar2
    },
    {
      meta:{
        index:0,
        title:'tabbar3',
        needLogin:false
      },
      path: '/tabbar3',
      name: 'Tabbar3',
      component: Tabbar3
    },
    {
      meta:{
        index:0,
        title:'我的',
        needLogin:false
      },
      path: '/my',
      name: 'My',
      component: My
    },
    {
      meta:{
        index:0,
        title:'用户登录',
        needLogin:false
      },
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      meta:{
        index:100,
        title:'404:页面未找到',
        needLogin:false
      },
      path: '*',
      name: 'Err',
      component: Err
    }
  ]
})
Vue.use(Router)
// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.needLogin)) { // 判断是否需要登录权限
    if (localStorage.getItem('saveUserInfo')) { // 判断是否存在用户登录信息
      next()
    } else { // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
