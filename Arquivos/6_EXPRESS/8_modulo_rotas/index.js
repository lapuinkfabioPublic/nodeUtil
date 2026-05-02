const express = require('express');
const app = express();
const path = require('path');
const basePath = path.join(__dirname, 'templates');

const users = require('./users');

app.use('/users', users);




app.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'index.html'));
});






app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}); 
    