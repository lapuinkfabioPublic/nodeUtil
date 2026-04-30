const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Oi HTTP');
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
}); 
