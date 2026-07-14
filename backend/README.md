# TechStore Chile — Backend

API REST construida con **Node.js + Express** y conexión a **MongoDB** mediante **Mongoose**. Sirve de base para futuras funcionalidades de la tienda (autenticación, carrito persistente, pagos).

## Requisitos

- Node.js 18 o superior
- MongoDB Community Server corriendo en el equipo (servicio `MongoDB` en Windows)

## Instalación

```bash
cd backend
npm install
```

## Configuración

Crear un archivo `.env` en la carpeta `backend` con:

```
MONGO_URI=mongodb://127.0.0.1:27017/techstore
PUERTO=3000
```

`MONGO_URI` es la cadena de conexión a MongoDB (local en este caso) y `techstore` el nombre de la base de datos, que se crea automáticamente al insertar el primer documento.

## Uso

**Levantar el servidor:**

```bash
node server.js
```

Debe imprimir `Conectado a MongoDB` y `Servidor corriendo en http://localhost:3000`.

**Cargar el catálogo inicial** (lee los 10 productos de `../src/data/productos.json` y los inserta en la base de datos; puede ejecutarse más de una vez, vacía la colección antes de insertar):

```bash
node seed.js
```

## Rutas disponibles

| Método | Ruta               | Descripción                  |
| ------ | ------------------ | ---------------------------- |
| GET    | `/api/productos`   | Lista todos los productos    |
| POST   | `/api/productos`   | Crea un producto nuevo       |

**Ejemplo GET** (navegador o consola):

```
http://localhost:3000/api/productos
```

**Ejemplo POST** (PowerShell):

```powershell
Invoke-RestMethod -Uri http://localhost:3000/api/productos -Method Post -ContentType "application/json" -Body '{"nombre":"Mouse Gamer","precio":19990,"valoracion":5}'
```

Respuesta: el producto creado con su `_id` generado por MongoDB (código 201). Si faltan campos obligatorios (`nombre`, `precio`), responde código 400 con el detalle del error.

## Estructura

```
backend/
  models/
    Producto.js    → esquema de Mongoose (nombre, precio, valoracion, imagen)
  routes/
    productos.js   → rutas GET y POST de /api/productos
  seed.js          → script de carga inicial del catálogo
  server.js        → punto de entrada: Express + conexión a MongoDB
  .env             → configuración (no se sube al repositorio)
```

## Notas

- El frontend (React + Vite) actualmente lee los productos desde `src/data/productos.json`. Este backend queda preparado para que en el futuro el frontend consuma `GET /api/productos` con `fetch`.
- `cors` está habilitado para permitir esas peticiones desde el frontend cuando se conecten.
