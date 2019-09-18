
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
          "binary": "/Applications/electron-builder-start.app/Contents/MacOS/electron-builder-start"
        }
      })
      //.sleep(10*1000)
    });

    after(function(){
      return driver
        .sleep(5000)
        .quit()
    })

    it('#1 electron test...',function(){

      return driver.elementByCss('#root > div > header > a:nth-child(3)')
      .click()
      .sleep(3000)
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