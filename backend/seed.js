require('dotenv').config();
const mongoose = require('mongoose');
const Producto = require('./models/Producto');
const productos = require('../src/data/productos.json');

async function cargarProductos() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB');

    // Vacía la colección para no duplicar productos si se ejecuta de nuevo
    await Producto.deleteMany();

    const insertados = await Producto.insertMany(productos);
    console.log(`${insertados.length} productos cargados en la base de datos`);
  } catch (error) {
    console.error('Error al cargar productos:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

cargarProductos();
