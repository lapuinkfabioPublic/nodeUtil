const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const user = {
        name: 'João',   
        surname: 'Silva',
        age: 30
    };
    res.render('home', { layout: false });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


