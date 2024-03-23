// controllers/orderController.js
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { userId, serviceId } = req.body;

  try {
    const order = new Order({ user: userId, service: serviceId });
    await order.save();
    res.json({ message: 'Pedido criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ message: 'Erro ao criar pedido' });
  }
};

exports.updateOrder = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    res.json({ message: 'Pedido atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar pedido:', error);
    res.status(500).json({ message: 'Erro ao atualizar pedido' });
  }
};

exports.deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findByIdAndDelete(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    res.json({ message: 'Pedido excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir pedido:', error);
    res.status(500).json({ message: 'Erro ao excluir pedido' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    res.status(500).json({ message: 'Erro ao buscar pedidos' });
  }
};
