const http = require('http');  //노드에서 기본적으로 제공해줌 기본모듈을 가져옴

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
    else if (req.url === '/users'){
        const users = [
            {name: 'Alice'},
            {name : 'Beck'},
        ]
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    }
});

server.listen(port, hostname, () => {
    console.log("server running");
})