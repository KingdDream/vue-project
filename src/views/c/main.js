/*
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-08-14 17:51:27
 * @LastEditors: yangliang
 * @LastEditTime: 2020-08-25 15:50:51
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueScroller from 'vue-scroller'
import store from '@/store'
import Toast from '@/directive/toast'
import '@/style/base.css'


Vue.config.productionTip = false
Vue.use(vueScroller)
Vue.use(Toast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
