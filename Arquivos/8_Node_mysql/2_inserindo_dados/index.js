const express = require('express');
const { engine } = require('express-handlebars');
const mysql = require('mysql2');
const app = express();

// Configuração do Handlebars
app.engine('handlebars', engine({
    helpers: {
        gt: (a, b) => a > b,
        eq: (a, b) => a === b
    }
}));
app.set('view engine', 'handlebars');

// Configuração para servir arquivos estáticos
app.use(express.static('public'));

// Middleware para receber dados do formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuarios_db'
}); 
// Rota para a página inicial
app.get('/', (req, res) => {
    const search = req.query.search || '';

    let sql = 'SELECT * FROM usuarios';
    let params = [];

    // Se há busca, adicionar filtro
    if (search.trim()) {
        sql += ' WHERE nome LIKE ?';
        params.push(`%${search.trim()}%`);
    }

    sql += ' ORDER BY nome ASC';

    connection.query(sql, params, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar usuários');
            return;
        }

        res.render('home', {
            usuarios: results,
            search: search.trim()
        });
    });
});

// Rota para adicionar usuário
app.post('/add', (req, res) => {
    const { nome, email } = req.body;

    // Validação básica
    if (!nome || !email) {
        // Buscar usuários existentes para mostrar na página
        connection.query('SELECT * FROM usuarios', (err, results) => {
            return res.render('home', {
                usuarios: err ? [] : results,
                error: 'Nome e email são obrigatórios'
            });
        });
        return;
    }

    // Query para inserir usuário
    const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
    connection.query(sql, [nome, email], (err, result) => {
        if (err) {
            console.error('Erro ao inserir usuário:', err);
            // Buscar usuários existentes para mostrar na página
            connection.query('SELECT * FROM usuarios', (err2, results) => {
                return res.render('home', {
                    usuarios: err2 ? [] : results,
                    error: 'Erro ao cadastrar usuário. Tente novamente.'
                });
            });
            return;
        }

        console.log('Usuário cadastrado com sucesso! ID:', result.insertId);

        // Buscar usuários atualizados e mostrar mensagem de sucesso
        connection.query('SELECT * FROM usuarios', (err, results) => {
            return res.render('home', {
                usuarios: err ? [] : results,
                success: 'Usuário cadastrado com sucesso!'
            });
        });
    });
});
const PORT = process.argv[3] || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 