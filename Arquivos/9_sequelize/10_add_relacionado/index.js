const express = require('express');
const { engine } = require('express-handlebars');
const conn = require('./db/conn');
const User = require('./models/User');
const Address = require('./models/Address');
const { User: UserAssoc, Address: AddressAssoc } = require('./models/Association');
const app = express();

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
    let newsletter = req.body.newsletter === 'on' ? true : false;
    
    await User.create({name, occupation, newsletter});
    res.redirect('/');
});

app.post('/users/update/:id', async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter === 'on' ? true : false;
    
    await User.update({name, occupation, newsletter}, {where: {id: id}});
    res.redirect('/');
});


app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({include: Address, where: {id: id}});
    res.render('edituser', {user: user.get({plain: true})});
});


app.post('/addresses/create', async (req, res) => {
    const UserId = req.body.userId;
    const street = req.body.street;
    const number = req.body.number;
    const city = req.body.city;
    
    await Address.create({UserId, street, number, city});
    res.redirect('/');
});

app.post('/addresses/update/:id', async (req, res) => {
    const id = req.params.id;
    const street = req.body.street;
    const number = req.body.number;
    const city = req.body.city;
    
    await Address.update({street, number, city}, {where: {id: id}});
    res.redirect('/');
});


app.get('/users/create',  (req, res) => {
    res.render('adduser');
});


app.get('/', async (req, res) => {
    const users = await User.findAll({include: Address});
    res.render('home', {users});
});

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id;
    await User.destroy({where: {id: id}});
    res.redirect('/');
});

app.post('/addresses/delete/:id', async (req, res) => {
    const id = req.params.id;
    await Address.destroy({where: {id: id}});
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});