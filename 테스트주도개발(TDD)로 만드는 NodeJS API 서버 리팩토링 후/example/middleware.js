const http = require('http'); 
const express = require('express');
const logger = require('morgan');
const app = express()

const mw = (req, res, next) =>{
   next();
}

const errorMw = (err, req, res, next) => {
  console.log(err.message)  
}

app.use(mw) //미들웨어는 함수들의 연속 내가만든거
app.use(errorMw) //미들웨어는 함수들의 연속 내가만든거

app.listen(3000, ()=> console.log('running'))