const express = require('express')
const app = express()
var request = require('request')
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '20143231',
    database: 'fintech',
    port: "3306"
});
connection.connect(); //DB연동


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public')); //정적파일 사용 
app.use(express.json()); //post방식에서 json 파싱
app.use(express.urlencoded({ extended: false })); //post방식




app.post('/message', function(req, res) { //메세지 보내는 페이지


    console.log(" 메세지를 성공적으로 받았습니다");

    var address = req.body.data;

    console.log(address);



    let template_objectObj = {
        object_type: 'text',
        text: address,
        'link': {
            web_url: 'https://developers.kakao.com',
            mobile_web_url: 'https://developers.kakao.com'
        }
    };

    let template_objectStr = JSON.stringify(template_objectObj);
    let options = {
        url: 'https://kapi.kakao.com/v2/api/talk/memo/default/send',
        method: 'POST',
        headers: {
            'Authorization': 'Bearer k_sQjwXFL7Rh9riyFHyaDnsVRXlVnIGF2eB4KQo9dGkAAAFxXZvNwg',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        form: {
            template_object: template_objectStr,
        }
    };

    function callback(error, response, body) {
        console.log(response.statusCode);
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
    request(options, callback);








})



app.get('/book', function(req, res) { //책 api 연습

    res.render('book');
})



app.get('/token', function(req, res) { //회원가입 페이지

    var authCode = req.query.code; // oauth2.0 토큰 받아온거


})


app.get('/signup', function(req, res) { //회원가입 페이지
    res.render('signup');
})

app.get('/map', function(req, res) {
    res.render('map');
})

app.get('/test', function(req, res) {
    res.render('test');
})


app.get('/test2', function(req, res) {
    res.render('test2');
})

app.get('/map2', function(req, res) {
    res.render('map2');
})


app.listen(3000)