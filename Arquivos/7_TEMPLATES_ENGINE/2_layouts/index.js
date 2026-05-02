const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main', // Especifica el layout predeterminado
    layoutsDir: __dirname + '/views/layouts' // Directorio de los layouts
})) ;

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


