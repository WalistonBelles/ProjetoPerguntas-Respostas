const Sequelize = require('sequelize');
const connection = require('./database');

// Estrutura da tabela a ser criada
const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// Confere se a tabela já existe, se existir não cria novamente.
Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;