// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  // Outros campos relevantes para o pedido, se necessário
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
