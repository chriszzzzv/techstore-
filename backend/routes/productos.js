const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// GET /api/productos → lista todos los productos
router.get('/', async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

// POST /api/productos → crea un producto nuevo
router.post('/', async (req, res) => {
  try {
    const producto = new Producto(req.body);
    const guardado = await producto.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
