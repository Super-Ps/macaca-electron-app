# macaca-electron-app

[![node version][node-image]][node-url]

[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

>Test electron. App
```bash
$ npm install  
```

## Usage
```bash
$ npm run build   
$ npm run dist  
```
在 dist 选择dmg或者exe安装，然后找到安装路劲 替换到demo.test.js的chromeOptions对象下的binary参数  
mac:启动服务执行  npm run mac-start  
执行测试示例  npm run test  
win:启动服务执行  npm run win-start    
再启动: npm run win-server   
执行测试示例  npm run test   

## License

The MIT License (MIT)






