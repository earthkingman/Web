//TDD 엄밀하게 말해서 100%는 아니다. 테스트코드를 만들고 테스트코드를 통과하는 코드를 만들고 리팩토링하는 싸이클
// 여기에선 api를 만들고 테스트코드를 만들거나 테스크코드를 만들고 api를 만들거임
// mocha를 사용해보자 npm i mocha --save-dev 로 설치하자
// devDependencies 에 mocha가 추가되는걸 확인할 수 있다. 개발 환경에 필요한 모듈
// dependencies에 는 express 등등 분류가 되어있음 실제 서비스가 돌아갈때 필요한 모듈

const express = require('express')
const logger = require('morgan')
const app = express()
const users = [
  {id : 1, name : 'Alice'},
  {id : 2, name : 'Bek'},
  {id : 3, name : 'Chris'}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res)=> {

    res.send(users);
})

module.exports = app