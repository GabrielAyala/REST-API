const knex = require('knex');
const configuration = require('../../knexfile');

//Selecionar a conexao de desenvolvimento
const connection = knex(configuration.development);

//Exportar a conexao com o banco de dados
module.exports = connection;