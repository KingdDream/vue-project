import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../page/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
