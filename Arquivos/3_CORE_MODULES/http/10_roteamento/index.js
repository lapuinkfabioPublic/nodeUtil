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
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Not Found</h1>');
            return res.end();
        }
    }
    else{

         res.writeHead(404, { 'Content-Type': 'text/html' });
         res.write('<h1>404 Not Found</h1>');
         return res.end();
    }

}
