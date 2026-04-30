const http = require('http');
const fs = require('fs');


const port = 3000;


const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;
    console.log(name);

    if(!name) {
        fs.readFile('index.html', (err, data) => {  
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }else
    {
        fs.writeFile('name.txt', name, (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo:', err); }
        }); 

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(name)
        return res.end();
    }

});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
}); 