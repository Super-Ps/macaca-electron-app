const { spawn } = require('child_process');
const fs = require('fs')
const path = require('path')
const join = require('path').join


var path1 = path.resolve(__dirname,'..') + '\\node_modules\\macaca-chromedriver\\exec\\'

function getJsonFiles(path1) {
    let fPath 
    let files = fs.readdirSync(path1)
      files.forEach((item, index)=> {
        
          fPath = join(path1, item);
      //  let stat = fs.statSync(fPath);
      console.log(`item${item},index${index}`)
      
      });
      console.log(fPath); 

      return  fPath

    }

const bat = spawn(getJsonFiles(path1));


 bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.error(data.toString());
});

bat.on('exit', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
 

