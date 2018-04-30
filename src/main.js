// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosPlugin from "./server"
//import store from './store/'
import { Tabbar, TabItem, Cell } from 'mint-ui';
import './assets/css/my-mint.scss';   //全局修改mint-UI样式  

Vue.use(require('vue-wechat-title'))
Vue.use(axiosPlugin)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //store,
  components: { App },
  template: '<App/>'
})
