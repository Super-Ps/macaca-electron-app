
被测应用属于electron.app的应用，请操作以下测试演示步骤：

$ npm install  
$ npm run build // 先打包React应用到`build`目录下    
$ npm run dist // 再用electron-builder打包Electron应用  
在 dist 选择dmg或者exe安装，然后找到安装路劲 替换到demo.test.js的chromeOptions对象下的binary参数  
mac:启动服务执行  npm run mac-start  
执行测试示例  npm run test  
win:启动服务执行  npm run win-start    
再启动: npm run win-server   
执行测试示例  npm run test   

case:  
1.明确case标题  
2.断言方式遵循macaca assert，明确断言内容，不局限于一种断言方式  
3.覆盖基本操作：点击，输入，滚动，悬浮，js操作dom，切换窗口  




