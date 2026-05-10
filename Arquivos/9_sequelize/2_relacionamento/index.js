const express = require('express');
const { engine } = require('express-handlebars');
const conn = require('./db/conn');
const User = require('./models/User');
const app = express();

const Address = require('./models/Address');

app.use(
    express.urlencoded({extended: true}
));

app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.post('/users/create', async (req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;
    console.log('aqui');
    if(newsletter === 'on') {
        newsletter = true;
    } else {
        newsletter = false;
    }

    console.log(req.body);
    await User.create({name, occupation, newsletter});
    res.redirect('/');
});


app.get('/users/create',  (req, res) => {
    res.render('adduser');
});


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});