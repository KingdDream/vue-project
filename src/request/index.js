/*
 * @Descripttion           : 
 * @version                : 
 * @Author                 : yangliang
 * @Date                   : 2020-08-14 17:51:27
 * @LastEditTime           : 2020-08-14 18:04:25
 */

import Vue from 'vue';
import axios from 'axios';
import {apiUrl} from './api';

Object.defineProperty(Vue.prototype, '$http', {
    value: apiUrl
});
Vue.prototype.$axios = axios
export default apiUrl;
