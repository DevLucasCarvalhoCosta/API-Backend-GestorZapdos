// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/orders', orderController.createOrder);
router.put('/orders/:orderId', orderController.updateOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);
router.get('/orders', orderController.getAllOrders);

module.exports = router;
