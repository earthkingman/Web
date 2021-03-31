const http = require('http');
const express = require('express');
const logger = require('morgan');
const app = express()

const mw = (req, res, next) => {
    console.log("미들웨어 log..")
    next(); //미들웨어 함수를 만들때 가장 중요한점 next() 함수를 꼭 호출해야 다음 미들웨어 혹은 어플리케이션행동을 실행할 수 있다.
}

app.use(mw) //미들웨어는 함수들의 연속 내가만든거
app.listen(3000, () => console.log('running'))