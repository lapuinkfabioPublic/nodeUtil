const express = require('express');
const app = express();
const path = require('path');
const basePath = path.join(__dirname, 'templates');

const checkAuth = (req, res, next) => {
    req.authStatus = true;
    if (req.authStatus) {
        console.log('Está autenticado, pode continuar');
        next();
    }   
    else {
        console.log('Não está autenticado, faça login para continuar');
        res.send('Faça login para continuar');
    }
}; 

app.use(checkAuth);
app.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'index.html'));
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}); 
    