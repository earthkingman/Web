//TDD 엄밀하게 말해서 100%는 아니다. 테스트코드를 만들고 테스트코드를 통과하는 코드를 만들고 리팩토링하는 싸이클
// 여기에선 api를 만들고 테스트코드를 만들거나 테스크코드를 만들고 api를 만들거임
// mocha를 사용해보자 npm i mocha --save-dev 로 설치하자
// devDependencies 에 mocha가 추가되는걸 확인할 수 있다. 개발 환경에 필요한 모듈
// dependencies에 는 express 등등 분류가 되어있음 실제 서비스가 돌아갈때 필요한 모듈

const express = require('express')
const logger = require('morgan')
const app = express()
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bek' },
  { id: 3, name: 'Chris' }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  req.query.limit = req.query.limit || 10; //limit에 값이 없다면 0을넣자
  const limit = parseInt(req.query.limit, 10);

  if (Number.isNaN(limit)) {
    res.status(400).end();
  }
  else {
    res.json(users.slice(0, limit));
  }
})

app.get('/users/:id', (req,res) => { //이 아이디 부분은 다이나믹하게 들어오는데 라우트 핸들러로 id 값으로 그냥 인식 
  //id 값을 얻어낸다  이번에는 쿼리로 안가져오고 params로 가져온다   총 3가지임  쿼리 바디 파람스
  // '/users/:id'  -> path라고함
  const id = parseInt(req.params.id, 10) // 10 진수로 변환
  
  if (Number.isNaN(id)){
    return res.status(400).end()
  }
  // users 배열 조회 
  const user = users.filter(user => user.id === id)[0] //필터함수는 어레이를 다 하나씩 돌면서 비교하고 같은것들만 어레이로 반환함 그래서 첫번쨰에 들어있을꺼니간 [0]을 사용함
  if (!user){
    return res.status(404).end()
  }
  res.json(user)
})

module.exports = app