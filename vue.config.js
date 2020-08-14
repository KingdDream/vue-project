/*
 * @Descripttion: 
 * @version: 
 * @Author: yl
 * @Date: 2020-08-12 10:24:47
 * @LastEditors            : Please set LastEditors
 * @LastEditTime           : 2020-08-14 15:28:45
 */
let path = require('path')
let glob = require('glob')
let myModule = require('./private.config.js')
 
function handleEntry(entry) {
 let entries = {}
 let entryBaseName = ''
 let entryPathName = ''
 let entryTemplate = ''
 
 glob.sync(entry).forEach(item => {
  entryBaseName = path.basename(item, path.extname(item))
  console.log('entry:', entryBaseName)
  entryTemplate = item.split('/').splice(-3)
  console.log('template:', entryTemplate)
  entryPathName = entryBaseName 
  console.log('filename', entryPathName)
 
  entries[entryPathName] = {
   // 配置入口js文件
   entry: 'src/' + entryTemplate[0] + '/' + entryTemplate[1] + '/' + 'main.js',
   // 模板来源
   template: 'src/' + entryTemplate[0] + '/' + entryTemplate[1] + '/' + entryTemplate[2],
   // 打包后的.html中<title>标签的文本内容
   title: entryTemplate[2],
   // 打包后的html文件名称
   filename: entryTemplate[2]
  }
 })
 
 return entries
}
 
let pages = handleEntry(`./src/views/${myModule.compile}/index.html`)

// 以下开始配置
module.exports = {
 lintOnSave: false, // 关掉eslint
 publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
 productionSourceMap: false,
 // 入口设置
 pages,
 devServer: {
    // 运行时，默认打开application1页面
    index: '/',
    // 告诉dev-server在服务器启动后打开浏览器，将其设置true为打开默认浏览器
    open: false,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: { //配置多个跨域
      "/api": {
          target: "http://172.11.11.11:7071",
          changeOrigin: true,
          // ws: true,//websocket支持
          secure: false,
          pathRewrite: {
              "^/api": "/"
          }
      }
   }
 }
}
 console.log(process.dev)