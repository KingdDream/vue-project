/*
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-08-14 17:51:27
 * @LastEditors: yangliang
 * @LastEditTime: 2020-09-11 09:45:49
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../page/index.vue')

  }
]

const router = new VueRouter({
  routes
})

export default router
