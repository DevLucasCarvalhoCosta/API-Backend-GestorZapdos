// routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/services', serviceController.createService);
router.put('/services/:serviceId', serviceController.updateService);
router.delete('/services/:serviceId', serviceController.deleteService);
router.get('/allservices', serviceController.getAllServices); 

module.exports = router;
