const express = require('express')
const router = express.Router()
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bek' },
    { id: 3, name: 'Chris' }
  ]


  router.get('/', (req, res) => {
    req.query.limit = req.query.limit || 10; //limit에 값이 없다면 0을넣자
    const limit = parseInt(req.query.limit, 10);
  
    if (Number.isNaN(limit)) {
      res.status(400).end();
    }
    else {
      res.json(users.slice(0, limit));
    }
  })
  router.get('/:id', (req, res) => { //이 아이디 부분은 다이나믹하게 들어오는데 라우트 핸들러로 id 값으로 그냥 인식 
    //id 값을 얻어낸다  이번에는 쿼리로 안가져오고 params로 가져온다   총 3가지임  쿼리 바디 파람스
    // '/users/:id'  -> path라고함
    const id = parseInt(req.params.id, 10) // 10 진수로 변환
  
    if (Number.isNaN(id)) {
      return res.status(400).end()
    }
    // users 배열 조회 
    const user = users.filter(user => user.id === id)[0] //필터함수는 어레이를 다 하나씩 돌면서 비교하고 같은것들만 어레이로 반환함 그래서 첫번쨰에 들어있을꺼니간 [0]을 사용함
    if (!user) {
      return res.status(404).end()
    }
    res.json(user)
  })
  router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)
    if (Number.isNaN(id)) {
      return res.status(400).end()
    }
    users = users.filter(user => user.id !== id)
    return res.status(204).end()
  })
  router.post('/', (req, res) => {
    const name = req.body.name
    if (!name) {
      return res.status(400).end()
    }
    const found = users.filter(user => user.name === name).length
    if (found){
      return res.status(409).end()
    }
    const id = Date.now()
    const user = {id, name}
    users.push(user)
    res.status(201).json(user)
  })

  module.exports = router