// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosPlugin from "./server"
import store from './store'
import { Navbar, Tabbar, TabItem, Cell, Picker, Popup, DatetimePicker, TabContainer, TabContainerItem, Loadmore } from 'mint-ui';
import './assets/css/my-mint.scss';   //全局修改mint-UI样式  
import wechatAuth from './utils/wechatAuth' //微信登录插件
const queryString = require('query-string')

Vue.use(axiosPlugin)
Vue.use(wechatAuth, {appid: 'wx2ad4b79558eb24ef'})
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
  if (store.state.loginStatus == 0) {
      //微信未授权登录跳转到授权登录页面
      let url = window.location.href;
      //解决重复登录url添加重复的code与state问题
      let parseUrl = queryString.parse(url.split('?')[1]);
      let loginUrl;
      if (parseUrl.code && parseUrl.state) {
          delete parseUrl.code;
          delete parseUrl.state;
          loginUrl = `${url.split('?')[0]}?${queryString.stringify(parseUrl)}`;
      } else {
          loginUrl = url;
      }
      wechatAuth.redirect_uri = loginUrl;
      store.dispatch('setLoginStatus', 1);
      window.location.href = wechatAuth.authUrl
  } else if (store.state.loginStatus == 1) {
      try {
          wechatAuth.returnFromWechat(to.fullPath);
      } catch (err) {
          store.dispatch('setLoginStatus', 0)
          next()
      }
      store.dispatch('loginWechatAuth', wechatAuth.code).then((res) => {
          if (res.status == 1) {
              store.dispatch('setLoginStatus', 2)
          } else {
              store.dispatch('setLoginStatus', 0)
          }
          next()
      }).catch((err) => {
          next()
      })
  } else {
      next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
