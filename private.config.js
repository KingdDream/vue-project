/*
 * @Descripttion           : 
 * @version                : 
 * @Author                 : yangliang
 * @Date                   : 2020-08-14 17:51:28
 * @LastEditTime           : 2020-08-14 17:59:10
 */
let sceneArr = {
  target: '0',                    // 当前模块打包
  0: 'a',        
  1: 'b',         
}

module.exports = {
compile: sceneArr[sceneArr.target],
}
