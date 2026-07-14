const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  valoracion: { type: Number, min: 1, max: 5, default: 3 },
  imagen: { type: String, default: '' }
});

module.exports = mongoose.model('Producto', productoSchema);
