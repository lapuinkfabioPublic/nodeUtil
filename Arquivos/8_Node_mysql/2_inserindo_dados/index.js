const express = require('express');
const { engine } = require('express-handlebars');
const mysql = require('mysql2');
const app = express();

// Configuração do Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Configuração para servir arquivos estáticos
app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuarios_db'
}); 
// Rota para a página inicial
app.get('/', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar usuários');
            return;
        }
        res.render('home', { usuarios: results });
    });
});

// Iniciar servidor
const PORT = process.argv[3] || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 