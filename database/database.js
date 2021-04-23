const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '060698', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;