require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rutasProductos = require('./routes/productos');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/productos', rutasProductos);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(process.env.PUERTO, () => {
      console.log(`Servidor corriendo en http://localhost:${process.env.PUERTO}`);
    });
  })
  .catch((error) => console.error('Error de conexión:', error.message));
