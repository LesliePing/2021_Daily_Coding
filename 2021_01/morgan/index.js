var express = require('express');
var logger = require('morgan');
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator');
// 处理post请求，需要body-parser
var bodyParser = require('body-parser')

var app = new express();
app.use(bodyParser.json({ limit: '50mb' }));
//设置日志文件目录
var logDirectory = __dirname + '/logs';
//确保日志文件目录存在 没有则创建
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

//创建一个写路由
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/accss-%DATE%.log',
  frequency: 'daily',
  verbose: false
})

app.use(logger('combined', { stream: accessLogStream }));//写入日志文件

app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/testPost', function (req, res) {
  res.send('hello world');
  console.log('req params', req.body)
});


console.log('Server Listening On Port: 3000')
app.listen(3000);