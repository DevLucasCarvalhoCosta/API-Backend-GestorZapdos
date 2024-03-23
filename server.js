const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); // Importe o módulo 'path' para lidar com caminhos de arquivos

const { MONGODB_URI } = require('./backend/config/config');

// Importar rotas
const authRoutes = require('./backend/routes/authRoutes');
const userRoutes = require('./backend/routes/userRoutes');
const serviceRoutes = require('./backend/routes/serviceRoutes');
const orderRoutes = require('./backend/routes/orderRoutes');

// Inicializar o aplicativo Express
const app = express();

// Configuração do middleware para análise de solicitações JSON
app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas do backend
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/', serviceRoutes);
app.use('/', orderRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor rodando');
});


// Configuração do servidor para escutar na porta 5000
const PORT = process.env.PORT || 3000; // Altere a porta conforme necessário
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
