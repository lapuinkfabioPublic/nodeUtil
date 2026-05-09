const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('nodesequelize2', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
});

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados realizada com sucesso!');

        // Sincronizar as tabelas
        //await sequelize.sync(true);
        await sequelize.sync();
        console.log('Tabelas sincronizadas com sucesso!');

    } catch(error) {
        console.log('Não foi possível conectar ao banco de dados: ', error);
    }
}

connect();

module.exports = sequelize;
