const connection = require('../database/connection');

module.exports = {
    
//Listagem de produtos
    async listagem(request, response){
        const produtos  = await connection('produtos').select('*');
    
        return response.json(produtos);
    },

//Cadastro de produtos    
    async cadastro(request, response) {
        const { nome } = request.body;

    await connection('produtos').insert({
        nome
    });

    return response.json({ nome });
    },

//Deletar um produto
    async deletar(request, response){
        const { id } = request.params; //pegando o ":id" que foi colocado no routes

    await connection('produtos').where('id', id).delete();

    return response.status(204).send();
    },
    
//Atualizar um produto    
   async atualizar (request, response) {
  
    const { id } = request.params;
    const { nome } = request.body;

    await connection('produtos').where('id', id).update({
        nome
    });

    return response.json({ nome });
   } 
};

