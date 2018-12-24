const express=require('express');
const bodyParser=require('body-parser');
const pool=require('./pool');
const cors=require('cors');

var app=express();
app.listen(3000);
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(cors({
    origin:['http://localhost:3001','http://127.0.0.1:3001'],
    credentials:true
}));
const session=require('express-session'); 
//7.2 node.js里的app.js对这个模块进行配置
app.use(session({
  secret:'128位随机字符',
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge:1000*60*60*24
  }
}));


