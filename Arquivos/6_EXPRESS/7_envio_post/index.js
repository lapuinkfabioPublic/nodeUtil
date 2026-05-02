 const express = require('express');
const app = express();
const path = require('path');
const basePath = path.join(__dirname, 'templates');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'index.html'));
});


/*Algumas rotas padrões para criar um CRUD de usuários*/
app.get('/users/add', (req, res) => {
    res.sendFile(path.join(basePath, 'userform.html'));
});

app.post('/users/save', (req, res) => {
  
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);
    res.sendFile(path.join(basePath, 'userform.html'));

});





app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}); 
    