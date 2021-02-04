/*
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-08-14 17:51:27
 * @LastEditors: yangliang
 * @LastEditTime: 2020-08-19 10:56:32
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../../store'
import vueScroller from 'vue-scroller'

Vue.config.productionTip = false
Vue.use(vueScroller)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
