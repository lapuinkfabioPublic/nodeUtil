const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true);

    const name = urlInfo.query.name ;

    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(!name) {
        res.end('<h1>Preencha  o seu  nome:</h1> <form method="GET" action="/"> <input type="text" name="name" placeholder="Digite seu nome"> <button type="submit">Enviar</button> </form>');
    } else {
        res.end(`<h1>Oi HTTP</h1><p>Olá, ${name}! Bem-vindo ao servidor HTTP!</p>`);
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
}); 
