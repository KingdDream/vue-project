/*
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-08-25 15:20:27
 * @LastEditors: yangliang
 * @LastEditTime: 2020-08-25 15:36:45
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QRcodeIndex',
      component: () => import('@/views/c/page/index')//一码办电 
    },
    {
      path: '/QRcodeColor',
      name: 'QRcodeColor',
      component: () => import('@/views/c/page/QRcodeColor') //二维码颜色说明
    },
    {
      path: '/Overdue',
      name: 'Overdue',
      component: () => import('@/views/c/page/Overdue') //超期电气试验
    },
    {
      path: '/UploadSuccessful',
      name: 'UploadSuccessful',
      component: () => import('@/views/c/page/UploadSuccessful') //上传成功
    }
  ]
})
