const express = require('express');
const exphbs = require('express-handlebars');
const app = express();


const hbs = exphbs.create({
    defaultLayout: 'main', // Especifica el layout predeterminado
    layoutsDir: __dirname + '/views/layouts', // Directorio de los layouts
    partialsDir: __dirname + '/views/partials' // Directorio de los partials
});

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.static('public'));

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

app.get('/blog', (req, res) => {
    const posts = [
        {
            id: 1,
            title: 'Meu primeiro post',
            category: 'JavaScript',
            body: 'Este é o conteúdo do meu post',
            comments: 4,
            date: '2026-05-02'
        },
        {
            id: 2,
            title: 'Meu segundo post',
            category: 'Node.js',
            body: 'Este é o conteúdo do meu segundo post',
            comments: 2,
            date: '2026-05-01'
        },
        {
            id: 3,
            title: 'Meu terceiro post',
            category: 'Express',
            body: 'Este é o conteúdo do meu terceiro post',
            comments: 0,
            date: '2026-04-30'
        }
    ];

    res.render('blog', { posts });
});

app.get("/blog/:id", (req, res) => {
    const post = [  
        {
            id: 1,
            title: 'Meu primeiro post',
            category: 'JavaScript',
            body: 'Este é o conteúdo do meu post',
            comments: 4
        },
        {
            id: 2,
            title: 'Meu segundo post',
            category: 'Node.js',
            body: 'Este é o conteúdo do meu segundo post',
            comments: 2
        },
        {
            id: 3,
            title: 'Meu terceiro post',
            category: 'Express',
            body: 'Este é o conteúdo do meu terceiro post',
            comments: 0
        }


    ]

    res.render('blog', { post: post[req.params.id - 1] });

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


