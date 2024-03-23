// config/config.js
const crypto = require('crypto');

// Função para gerar uma string aleatória de 32 bytes
const generateRandomString = () => {
  return crypto.randomBytes(32).toString('hex');
};

module.exports = {
    MONGODB_URI: 'mongodb+srv://lucascarvalho:99655445@gestorzapdos.a1kfknt.mongodb.net/', // URL do seu banco de dados MongoDB
    JWT_SECRET: 'seu-segredo-jwt' // String aleatória para assinar tokens JWT
  };
  