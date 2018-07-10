// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosPlugin from "./server"
import {
  Toast,
  Navbar,
  Tabbar,
  TabItem,
  Cell,
  Picker,
  Popup,
  DatetimePicker,
  TabContainer,
  TabContainerItem,
  Loadmore
} from 'mint-ui';
import './assets/css/my-mint.scss'; //全局修改mint-UI样式  
import VWechatAuth from 'v-wechat-auth'
import {
  server
} from './server/server'
import api from './server/api'

Vue.use(axiosPlugin)
Vue.use(VWechatAuth)
Vue.component(Navbar.name, Navbar);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Loadmore.name, Loadmore);
Vue.config.productionTip = false

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin)) {
    let renter = parseInt(localStorage.getItem('renter'))
    if (renter === 0) {
      Toast({
        message: '只有业主才能操作哦~'
      })
      next({
        path: from.path
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  wechatAuth: new VWechatAuth({
    appId: 'wx2ad4b79558eb24ef',
    scope: 'snsapi_userinfo',
    authorize(code, success, fail) {
      return server.get(api.code, {
          params:{
            code: code
          }
        })
        .then(function (res) {
          localStorage.setItem('renter',res.data.renter)
					localStorage.setItem('user_token',res.data.user_token)
          localStorage.setItem('user_id',res.data.user_id)
          var data = (res && res.data) || {}
          return data
        })
    }
  })
})
