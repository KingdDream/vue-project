/*
 * @Description: 
 * @Author: yangliang
 * @Date: 2020-08-14 17:51:27
 * @LastEditors: yangliang
 * @LastEditTime: 2020-08-26 15:36:06
 */

import {get, post} from './http'
export const apiUrl = {
    // demo
    FoodSortOperateType: p => post('/CockpitPc/FoodSortOperateType', p)
}
