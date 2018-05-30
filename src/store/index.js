import Vue from 'vue'
import Vuex from 'vuex'
import api from '../server/api'
import { server } from '../server/server'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loginStatus: 0
	},
	// 类似 vue 的 computed
  getters:{
    
  },
  // 类似 vue 里的 mothods(同步方法)
  mutations: {
    setLogStatus (state,status) {
			console.log('mutations',status)
			state.loginStatus = status
		}
  },
  // 类似 vue 里的 mothods(异步方法) -------- 以下7行为新增
  actions: {
		setLoginStatus ({ commit }, status) {
			console.log('actions',status)
			commit('setLogStatus', status)
		},
		loginWechatAuth ({ commit }, code) {
			return new Promise(resolve => {
        server.post(api.code,{code: code}).then(res => {
					console.log('res',res)
					localStorage.setItem('user_token',res.data.user_token)
					localStorage.setItem('user_id',res.data.user_id)
          resolve(res)
        })
      })
		}
  }
})