// 노드는 기본적을 비동기로 동작함

// readFileSync()

const fs = require('fs') //기본모듈

const file =fs.readFileSync('test.txt', {encoding : 'utf8'})

console.log(file);


// readFile()
// 문서에 보면 readfile은 세번째 인자로 callback 함수를 넣어주게 되있음  비동기적으로 일을 처리하고 callback 함수를 호출하게 되있음.
// 이벤트루프가 파일을 읽어라 라는 명령을 받았을때 워커한테 파일읽는 작업을 위임을 하고 이벤트루프가 다른 이벤트를 수신하고 있을 때 워커는 계속 그파일을 읽고 있다가 워커가 파일을 다읽으면 콜백함수로 메인루프에게 알려줌

const callback = (err, data) => {
    console.log(data);
}
fs.reafFile('text.txt', {encoding : 'utf8'}, callback);


