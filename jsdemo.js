#!/usr/bin/env node
 
var fs = require('fs')

 var dirName = process.argv[2] 


 fs.stat(dirName,function(ex){
  if(ex == null){
    console.log("此文件已经存在!");
  }
  else{
   fs.mkdirSync(dirName)
   process.chdir(dirName)
   fs.mkdirSync('css') 
   fs.mkdirSync('js') 

   fs.writeFileSync("./index.html","<!DOCTYPE><title>Hello</title><script src=js/main.js></script><h1>Hi</h1>")
   fs.writeFileSync("css/style.css", "h1{color: red;}")
   fs.writeFileSync("./js/main.js", "var string = 'Hello World'; alert(string)")
  }
});

