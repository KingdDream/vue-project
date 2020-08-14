
import Vue from 'vue';
import axios from 'axios';
import {apiUrl} from './api';

// 将 $http 挂载到vue的原型上
// 业务中引用的方法：
// this.$http.GetStaffInfoT({
//     userid: 'aac86030-8d72-4903-9148-149a08fa97d7'
// }).then((res) => {
//
// }).catch((e) => {
//
// })
Object.defineProperty(Vue.prototype, '$http', {
    value: apiUrl
});
Vue.prototype.$axios = axios
export default apiUrl;
