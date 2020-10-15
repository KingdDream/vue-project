/*
 * @Descripttion: 
 * @version: 
 * @Author: yl
 * @Date: 2020-07-27 10:23:24
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-11 15:14:19
 */

import toast from './toast'
//空对象
const Toast = {};
let isToast = true;
//构建插件的时候 必须有个属性叫做 install 接收一个参数 Vue --实例
Toast.install = function (Vue) {
    Vue.prototype.$toast = function (msg, showTime = 1000) {
        if (isToast) {
            isToast = false
            let dom = document.createElement('div');
            let T = Vue.extend(toast);

            let t = new T().$mount(dom);
            t.msg = msg;

            document.body.appendChild(t.$el);

            setTimeout(function () {
                document.body.removeChild(t.$el);
                isToast = true
            }, showTime)
        }
    }
};


export default Toast
