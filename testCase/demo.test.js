const wd = require('macaca-wd');

const remoteConfig = {
  host: 'localhost',
  port: 3456 // Macaca server 默认使用 3456 端口
};

const driver = wd.promiseChainRemote(remoteConfig);

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
      return driver.waitForElementById('macacaId',5000,100)
      .click()
      
    })

    it('#2 ',function(){
       return driver.elementByCss('#app > div > header > div.sidebar-button')
      .click()
    
     })
     it('#3 ',function(){

      return driver.elementByCss('#app > div > div.sidebar > nav > div:nth-child(2) > div > a > span.title')
      .sleep(2000)
      .click()
     })

     it('#4 ',function(){

      return  driver.elementByCss('#app > div > div.sidebar > nav > div:nth-child(3) > div > a > span.title')
      .sleep(2000)
      .click()
      
     })

     it('#5',function(){
      return  driver.elementByCss('#app > div > header > div.links > div > input')
      .sleep(2000)
      .click()
      .sendKeys('计算机') 
     })
     })