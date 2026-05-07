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


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});