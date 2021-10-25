var express = require('express')
var path = require('path') //开放文件新方法需要的
var app = express()
// 开放公共文件
app.use('/public/',express.static( path.join('__dirname','./public/')))
app.use('/node_modules/',express.static( path.join('__dirname','./node_modules/')))



app.get('/',function(req,res){
  res.send('111')
})


app.listen(5008,function(){
  console.log('running')
})