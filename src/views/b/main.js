/** 
 * @Descripttion           : 
 * @version                : 
 * @Author                 : yl
 * @Date                   : 2020-08-11 17:40:23
 * @LastEditors            : yl
 * @LastEditTime           : 2020-08-14 15:16:07
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
