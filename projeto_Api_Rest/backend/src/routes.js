const express = require('express');
const routes = express.Router();

const produtosController = require('./controllers/produtosController');

const connection = require('./database/connection');

routes.get('/produtos', produtosController.listagem);
routes.post('/produtos', produtosController.cadastro);
routes.delete('/produtos/:id', produtosController.deletar);
routes.put('/produtos/:id', produtosController.atualizar);

module.exports = routes;

//Usar o async e o await desta forma, vai fazer o node esperar o codigo ser finalizado para so entao retornar a response
