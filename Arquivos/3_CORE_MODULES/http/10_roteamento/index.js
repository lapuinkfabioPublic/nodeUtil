//O Codigo pode ser feito com ajuda de A.I mais tem q ser Clean para Humanos darem manutenção depois, 
// e o mais importante é que o codigo tem q ser funcional, 
// ou seja, tem q rodar sem erros, e tem q ser facil de entender para outros programadores 


const http = require('http');
const fs = require('fs');
const url = require('url');





const port = 3000;


const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true);
    const filename = q.pathname.substring(1);

    lerArquivo(res, filename);



});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
}); 



// que possam trabalhar no projeto depois.
//Realiza a Leitura de um Arquivo
function lerArquivo(res, filename) {
    
    if(filename.includes('.html')) {

        if(fs.existsSync(filename)) {

            fs.readFile(filename, (err, data) => {  
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();       
            }); 
        }
        else {
            PaginaNaoEncontrada(res);
        }
    }
    else{

          PaginaNaoEncontrada(res);
    }

}

function PaginaNaoEncontrada(res) {

    fs.readFile('404.html', (err, data) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();       
    } );    
}