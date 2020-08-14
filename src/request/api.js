/*
 * @Descripttion           : 
 * @version                : 
 * @Author                 : yangliang
 * @Date                   : 2020-08-14 17:51:27
 * @LastEditTime           : 2020-08-14 18:03:05
 */

import {get, post} from './http'
export const apiUrl = {
    mock,
    // demo
    demo: p => post('/CockpitMobile/ExposureListStore', p)
}
