/*
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-08-14 17:51:27
 * @LastEditors: yangliang
 * @LastEditTime: 2020-12-28 15:35:22
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../../store'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
