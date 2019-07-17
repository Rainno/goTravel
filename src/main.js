import Vue from 'vue'
import App from './App'
import router from 'vue-router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false
// 解决移动端点击延迟300毫秒的问题
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
