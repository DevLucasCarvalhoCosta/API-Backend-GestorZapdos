// controllers/serviceController.js
const Service = require('../models/Service');

exports.createService = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const service = new Service({ name, description, price });
    await service.save();
    res.json({ message: 'Serviço criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar serviço:', error);
    res.status(500).json({ message: 'Erro ao criar serviço' });
  }
};

exports.updateService = async (req, res) => {
  const { serviceId } = req.params;
  const { name, description, price } = req.body;

  try {
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }

    if (name) service.name = name;
    if (description) service.description = description;
    if (price) service.price = price;

    await service.save();
    res.json({ message: 'Serviço atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error);
    res.status(500).json({ message: 'Erro ao atualizar serviço' });
  }
};

exports.deleteService = async (req, res) => {
  const { serviceId } = req.params;

  try {
    const service = await Service.findByIdAndDelete(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }

    res.json({ message: 'Serviço excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir serviço:', error);
    res.status(500).json({ message: 'Erro ao excluir serviço' });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error('Erro ao buscar serviços:', error);
    res.status(500).json({ message: 'Erro ao buscar serviços' });
  }
};
