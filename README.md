# macaca-electron-app

[![node version][node-image]][node-url]

[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

Test electron. App

## start
```bash
$ npm i
$ npm run build   
$ npm run dist  
```
Select dmg,mac.zip or exe installation in dist directory, and then find the installation path to replace the binary parameter under the chromeOptions object of demo.test.js  

- Mac:
```bash
$ npm run mac-start 
```  
```bash
$ npm run test 
```  

- Win:
```bash
$ npm run win-start 
```   
```bash
$ npm run win-server  
```  
```bash
$ npm run test   
```  

## License

The MIT License (MIT)






