
const wd = require('macaca-wd');
const { assert } = require('chai');

var remoteConfig = {
  host: 'localhost',
  port: 3456 // Macaca server 默认使用 3456 端口
};


const driver = wd.promiseChainRemote(remoteConfig);

console.log('driver',driver)
var browser = process.env.browser || 'electron' || 'puppeteer';
browser = browser.toLowerCase();

describe('test',function(){
  this.timeout(5 * 60 * 1000);

  var driver = wd.promiseChainRemote({
    host: 'localhost',
    port: process.env.MACACA_SERVER_PORT || 3456
  });

    before(function() {
     
      return driver.init({
        platformName: 'desktop',
        browserName: 'chrome',
        chromeOptions: {
          "binary": "/Applications/macaca-electron-builder.app/Contents/MacOS/macaca-electron-builder"// 填写自己的执行文件路劲

        }
      }).sleep(2*1000)
      
    });

    after(function(){
      
      return driver
        .sleep(1000)
        .close()
        
        
    })


    //*[@id="root"]/div/header/a[1]
    it('#1 electron test...',function(){
     console.log('it start')
     //driver.elementByCss('#root > div > header > a:nth-child(3)')
      //return driver.elementById('macacaId')
      return driver.waitForElementById('macacaId',5000,100)
      .click()
      
    })

    it('#2 macaca home',function(){
       console.log('home')
       return driver.elementByCss('#app > div > header > div.sidebar-button')
       
       .click()
    
     })
     it('#3 ',function(){

      return driver.elementByCss('#app > div > div.sidebar > nav > div:nth-child(2) > div > a > span.title')
      .sleep(3000)
      .click()
     })

     it('#4 ',function(){

      return  driver.elementByCss('#app > div > div.sidebar > nav > div:nth-child(3) > div > a > span.title')
      .sleep(3000)
      .click()
      
     })

     it('#5',function(){

     
      return  driver.elementByCss('#app > div > header > div.links > div > input')
      .sleep(2000)
      .click()
      .sendKeys('计算机')
      
     })




    

 

    // it('#2 should works with web', function() {
    //   const initialURL = 'https://www.baidu.com';
    //   return driver
    //     .get(initialURL)
    //     .sleep(2000)
    //     .elementById('kw')
    //     .sendKeys('makeblock-教育解决方案')
    //     .sleep(2000)
    //     .elementById('su')
    //     .click()
    //     .sleep(4000)
    //     .source()
    //     .then(html => {
    //       assert.ok(html.includes('makeblock'));
    //     })
        
    //   });

     })