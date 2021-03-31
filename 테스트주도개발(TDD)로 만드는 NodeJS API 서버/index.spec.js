//테스트파일은 파일명에 spec이란 단어를 넣거나 폴더를 만든다

const assert = require('assert') //node 기본 모듈
const should = require('should') 
const request = require('supertest')
const app = require('./express') //express 파일에서 가져옴

describe('GET /users', () => {
    it('배열을 반환한다', (done) => {
        request(app)
            .get('/users')
            .end((err, res) => {
                res.body.should.be.instanceof(Array) //응답값이 배열이여야한다
                res.body.forEach(user => {
                    user.should.have.property('name') //응답값안에 name이라는 객체를 가지고있어야한다.
                })
                //console.log(res.body)
            done()       
            })
    })
})