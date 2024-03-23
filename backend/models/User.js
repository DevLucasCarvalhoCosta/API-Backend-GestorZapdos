// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Outros campos relevantes para o usuário, se necessário
});

const User = mongoose.model('User', userSchema);

module.exports = User;
