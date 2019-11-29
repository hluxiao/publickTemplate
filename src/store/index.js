import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    saveUserInfo:""||localStorage.getItem('saveUserInfo'),//存储用户信息
}

//非必须  类似mutations
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
const actions = {

}

//更新 Vuex 的 state的状态的唯一方法
const mutations = {
    saveUserInfo: (state, saveUserInfo) => {
        state.saveUserInfo = saveUserInfo
            // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex数据丢失
        localStorage.setItem('saveUserInfo',saveUserInfo)
    }
}

// getters 只会依赖 state 中的成员去更新   类似计算属性
const getters = {
    
}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
export { store }