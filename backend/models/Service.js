// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  // Outros campos relevantes para o serviço, se necessário
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
