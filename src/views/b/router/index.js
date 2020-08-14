/*
 * @Descripttion: 
 * @version: 
 * @Author: yl
 * @Date: 2020-08-12 10:05:45
 * @LastEditors: yl
 * @LastEditTime: 2020-08-12 11:16:18
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../page/Home.vue')

  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../page/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
