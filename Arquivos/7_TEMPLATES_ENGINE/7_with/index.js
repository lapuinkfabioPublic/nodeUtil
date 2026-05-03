const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main', // Especifica el layout predeterminado
    layoutsDir: __dirname + '/views/layouts' // Directorio de los layouts
})) ;

app.set('view engine', 'handlebars');


app.get('/post', (req, res) => {
  const post = {
    title: 'Meu primeiro post',
    category: 'JavaScript',
    body: 'Este é o conteúdo do meu post',
    comments: 4
  };
    res.render('blogpost', { post: post });


});

app.post('/post', (req, res) => {
  const post = {
    title: 'Meu primeiro post',
    category: 'JavaScript',
    body: 'Este é o conteúdo do meu post',
    comments: 4
  };
    res.render('blogpost', { post: post });


});



app.get("/dashboard", (req, res) => {
    const user = {
        name: 'João',
        surname: 'Silva',
        age: 30,
        city: 'São Paulo'
    };
    const auth = true;

    const items = ['1', '2', '3', '4'];



    res.render('dashboard', { user: user, auth: auth ,  items: items   });
});

app.get('/', (req, res) => {
    const user = {
        name: 'João',
        surname: 'Silva',
        age: 30,
        city: 'São Paulo'
    };

    const auth = true
    const palavra = 'Ouro e Prata';
    res.render('home', { user : user , palavra : palavra, auth: auth});
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/contact/:id', (req, res) => {
    const id = req.params.id;
    res.render('contact', { id: id });
  
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


