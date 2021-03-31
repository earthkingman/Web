//테스트파일은 파일명에 spec이란 단어를 넣거나 폴더를 만든다

const assert = require('assert') //node 기본 모듈
const should = require('should')
const request = require('supertest')
const app = require('.') //express 파일에서 가져옴

describe('GET /users', () => {
    describe('성공', () => {
        it('성공', done => {
            request(app)
            .get('/users')
            .end((err, res) => {
                res.body.should.be.instanceof(Array)
                res.body.forEach(user => {
                    user.should.have.property('name')
                })
            })
            done()
        })
        it('최대 limit 갯수만큼 응답한다.', done => {
            request(app)
            .get('/users?limit=2')
            .end((err, res) => {
                res.body.should.have.lengthOf(2)
            })
            done()
        })
    })
    describe('실패', ()=> {
        it('limit이 정수가 아니면 400을 응답한다', done => {
            request(app)
                .get('/users?limit==two')
                .expect(400)
                .end(done)
        })
    })
})

describe('GET /users:id', () => {
    describe('성공', () => {
        it('유저 객체를 반환한다', done => {
            request(app)
            .get('/users/1')
            .end((err,res) => {
                res.body.should.have.property('id', 1)
                done()
            }) 
        })
    })
    describe('실패', () => {
        it('id가 숫자가 아닐경우 400 응답', done =>{
            request(app)
            .get('/users/one')
            .expect(400)
            .end(done)
        })
        it('찾을수 없는 id일 경우 404 응답', done =>{
            request(app)
            .get('/users/9')
            .expect(404)
            .end(done)
        })
    })
})

