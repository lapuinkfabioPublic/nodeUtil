 const express = require('express');
const app = express();
const path = require('path');
const basePath = path.join(__dirname, 'templates');
/*
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

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    if(id === '1') {
        console.log('Usuário 1 encontrado');
    }
    //leitura do banco de dados resgatar o usuário com aquele id
    console.log(`O id do usuário é ${id}`);
     res.sendFile(path.join(basePath, 'users.html'));
   
});

app.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'index.html'));
});
*/

/*Algumas rotas padrões para criar um CRUD de usuários*/
app.get('/users/add', (req, res) => {
    res.sendFile(path.join(basePath, 'userform.html'));
});

app.post('/users/save', (req, res) => {
    console.log('Salvando usuário...');
    res.send('Usuário salvo com sucesso!');
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}); 
    