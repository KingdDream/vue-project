/*
 * @Descripttion           : 
 * @version                : 
 * @Author                 : yangliang
 * @Date                   : 2020-08-14 17:51:27
 * @LastEditTime           : 2020-08-14 18:03:40
 */

import axios from 'axios';
import QS from 'qs';
import {checkStatus} from './utils';

// 环境的切换
if (process.env.NODE_ENV == 'production') {
    if (process.env.PLATFORM == 'test') {
        // 测试环境地址
        axios.defaults.baseURL = '';
    } else if (process.env.PLATFORM == 'pre') {
        // 预发布环境地址
        axios.defaults.baseURL = '';
    } else if (process.env.PLATFORM == 'pro') {
        // 正式环境地址
        axios.defaults.baseURL = '';
    }
} else if (process.env.NODE_ENV == 'development') {
    // 开发环境地址
    axios.defaults.baseURL = 'https://dss.iuoooo.com'
}

// 创建axios实例
const instance = axios.create({
    // baseURL: process.env.BASE_URL,
    // timeout: 30000, // 请求超时时间
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }],
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return JSON.parse(data);
    }]
})

// let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
// let cancelToken = axios.CancelToken;
// let removePending = (ever) => {
//     for (let p in pending) {
//         if (pending[p].u === ever.url + '&' + ever.method) { // 当当前请求在数组中存在时执行函数体
//             pending[p].f(); // 执行取消操作
//             pending.splice(p, 1); // 把这条记录从数组中移除
//         }
//     }
// }

// 请求拦截器
instance.interceptors.request.use(
    // 在发送请求之前做处理...
    config => {
        // removePending(config); // 在一个ajax发送前执行一下取消操作
        // config.cancelToken = new cancelToken((c) => {
        //     // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        //     pending.push({u: config.url + '&' + config.method, f: c});
        // });
        config.headers = Object.assign(config.method === 'get' ? {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        } : {
            'Content-Type': 'application/json'
        }, config.headers);

        if (config.method === 'post') {
            const contentType = config.headers['Content-Type'];
            // 根据Content-Type转换data格式
            if (contentType) {
                if (contentType.includes('multipart')) { // 类型 multipart/form-data;
                    config.data = config.data;
                } else if (contentType.includes('json')) { // 类型 application/json;
                    // 服务器收到的raw body(原始数据) "{name:"heywei",age:"18"}"（JSON字符串）
                    config.data = JSON.stringify(config.data);
                } else { // 类型 'application/x-www-form-urlencoded;'
                    // 服务器收到的raw body(原始数据) name=heywei&age=18
                    config.data = QS.stringify(config.data);
                }
            }
        }
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

// 响应拦截器
instance.interceptors.response.use(
    response => {
        // 对响应数据做处理，以下根据实际数据结构改动！！...
        // removePending(res.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
        return Promise.resolve(checkStatus(response));
    },
    // 服务器状态码不是200的情况
    error => {
        // 对响应错误做处理...
        return Promise.reject(checkStatus(error));
    }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params, type = 1) {
    let config;
    if (type == 2) {
        config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
    }
    return new Promise((resolve, reject) => {
        instance.post(url, params, config).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    });
}
