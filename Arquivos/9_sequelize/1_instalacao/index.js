const express = require('express');
const { engine } = require('express-handlebars');
const conn = require('./db/conn');
const app = express();

app.use(
    express.urlencoded({extended: true}
));

app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.post('/users/create', (req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    const newsletter = req.body.newsletter;
    console.log(name, occupation, newsletter);
    res.redirect('/');
});


app.get('/users/create', (req, res) => {
    res.render('adduser');
});


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}); 