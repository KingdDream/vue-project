let sceneArr = {
  target: '0',                    // 当前模块打包
  0: 'a',        
  1: 'b',         
}

module.exports = {
compile: sceneArr[sceneArr.target],
}
