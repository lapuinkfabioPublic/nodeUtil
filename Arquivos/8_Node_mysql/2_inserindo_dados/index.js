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

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'usuarios_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4',
    timezone: 'Z'
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

    pool.query(sql, params, (err, results) => {
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
        pool.query('SELECT * FROM usuarios', (err, results) => {
            return res.render('home', {
                usuarios: err ? [] : results,
                error: 'Nome e email são obrigatórios'
            });
        });
        return;
    }

    // Query para inserir usuário
    const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
    pool.query(sql, [nome, email], (err, result) => {
        if (err) {
            console.error('Erro ao inserir usuário:', err);
            // Buscar usuários existentes para mostrar na página
            pool.query('SELECT * FROM usuarios', (err2, results) => {
                return res.render('home', {
                    usuarios: err2 ? [] : results,
                    error: 'Erro ao cadastrar usuário. Tente novamente.'
                });
            });
            return;
        }

        console.log('Usuário cadastrado com sucesso! ID:', result.insertId);

        // Buscar usuários atualizados e mostrar mensagem de sucesso
        pool.query('SELECT * FROM usuarios', (err, results) => {
            return res.render('home', {
                usuarios: err ? [] : results,
                success: 'Usuário cadastrado com sucesso!'
            });
        });
    });
});

// Rota para página de edição
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuário para edição:', err);
            return res.status(500).send('Erro ao buscar usuário para edição');
        }

        if (!results.length) {
            return res.status(404).send('Usuário não encontrado');
        }

        res.render('edit', { usuario: results[0] });
    });
});

// Rota para atualizar usuário
app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    if (!nome || !email) {
        pool.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
            return res.render('edit', {
                usuario: results && results[0] ? results[0] : { id, nome, email },
                error: 'Nome e email são obrigatórios'
            });
        });
        return;
    }

    const sql = 'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?';
    pool.query(sql, [nome, email, id], (err) => {
        if (err) {
            console.error('Erro ao atualizar usuário:', err);
            pool.query('SELECT * FROM usuarios WHERE id = ?', [id], (err2, results) => {
                return res.render('edit', {
                    usuario: results && results[0] ? results[0] : { id, nome, email },
                    error: 'Erro ao atualizar usuário. Tente novamente.'
                });
            });
            return;
        }

        pool.query('SELECT * FROM usuarios ORDER BY nome ASC', (err, results) => {
            return res.render('home', {
                usuarios: err ? [] : results,
                success: 'Usuário atualizado com sucesso!'
            });
        });
    });
});

// Rota para excluir usuário
app.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('Erro ao excluir usuário:', err);
            pool.query('SELECT * FROM usuarios ORDER BY nome ASC', (err2, results) => {
                return res.render('home', {
                    usuarios: err2 ? [] : results,
                    error: 'Erro ao excluir usuário. Tente novamente.'
                });
            });
            return;
        }

        pool.query('SELECT * FROM usuarios ORDER BY nome ASC', (err2, results) => {
            return res.render('home', {
                usuarios: err2 ? [] : results,
                success: 'Usuário excluído com sucesso!'
            });
        });
    });
});

const PORT = process.argv[3] || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 