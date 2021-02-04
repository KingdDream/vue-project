/*
 * @Description                      : 
 * @Author                           : yangliang
 * @Date                             : 2020-08-14 17:51:28
 * @LastEditors: yangliang
 * @LastEditTime: 2021-01-22 15:43:46
 */

// npm run dev
let sceneArr = {
  target: '3',                    // 当前模块打包
  0: 'Drag',                      //拖拽        
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'clock',                     //时钟
  5: 'mobileMap',                 //手机地图
}

module.exports = {
compile: sceneArr[sceneArr.target],
}
