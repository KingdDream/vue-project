import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../../store'
// 添加vans---插件
import vueVant from 'vant'
import 'vant/lib/index.css';


Vue.config.productionTip = false
Vue.use(vueVant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
