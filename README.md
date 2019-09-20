创建项目步骤  
$ yarn create react-app YOUR_APP_NAME  
$ cd /PATH/TO/PROJECTS/YOUR_APP_NAME  
$ yarn add electron --dev  

package.json中lectron应用的入口文件，添加main配置：  
{  
  ...  
  "main": "public/electron.js",  
  ...  
}  

合并启动应用  

$ yarn add electron-is-dev  

$ yarn add concurrently --dev  
$ yarn add wait-on --dev  

修改package.json，添加一个electron-dev脚本命令：  
{  
  ...  
  "scripts": {  
    ...  
    "electron-dev": "concurrently \"BROWSER=none react-scripts start\" \"wait-on http://localhost:3000 && electron .\"",  
    ...  
  }  
  ...  
}  
执行一句yarn electron-dev就可以启动React + Electron应用了。  

应用打包  
yarn  add electron-builder --dev  

添加build配置  
  




如果你只是想知道如何运行，看下面测试演示步骤：

$ npm install 
$ npm run build // 先打包React应用到`build`目录下    
$ npm run dist // 再用electron-builder打包Electron应用  
在 dist 选择dmg安装，然后找到安装路劲 替换到demo.test.js的chromeOptions对象下的binary参数  
mac:启动服务执行  npm run mac-start   
win:启动服务执行  npm run win-start  
最后执行测试示例  npm run test   

case:  
1.明确case标题  
2.断言方式遵循macaca assert，明确断言内容，不局限于一种断言方式  
3.覆盖基本操作：点击，输入，滚动，悬浮，js操作dom，切换窗口  




