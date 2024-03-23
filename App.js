const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MONGODB_URI } = require('./backend/config/config');
const path = require('path');
const cors = require('cors'); // Importe o pacote CORS

// Importar rotas
const authRoutes = require('./backend/routes/authRoutes');
const userRoutes = require('./backend/routes/userRoutes');
const serviceRoutes = require('./backend/routes/serviceRoutes');
const orderRoutes = require('./backend/routes/orderRoutes');

// Inicializar o aplicativo Express
const app = express();

// Configuração do middleware para análise de solicitações JSON
app.use(bodyParser.json());

// Adicione o middleware CORS à sua aplicação
app.use(cors());

// Conectar ao banco de dados MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Servir os arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Rotas do backend
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/', serviceRoutes);
app.use('/', orderRoutes);

// Rota para a página principal

app.get('/auth/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'login.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'home.html'));
});

// Configuração do servidor para escutar na porta 3000
const PORT = process.env.PORT || 3000; // Altere a porta conforme necessário
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
