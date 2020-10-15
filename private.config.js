/*
 * @Description                      : 
 * @Author                           : yangliang
 * @Date                             : 2020-08-14 17:51:28
 * @LastEditors: yangliang
 * @LastEditTime: 2020-09-11 09:49:33
 */


let sceneArr = {
  target: '0',                    // 当前模块打包
  0: 'a',        
  1: 'b',
  2: 'c',
  3: 'd',
}

module.exports = {
compile: sceneArr[sceneArr.target],
}
