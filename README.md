# TechStore Chile

Página principal de una tienda virtual de tecnología, desarrollada como proyecto final para la asignatura **Programación Front-End** Ingeniería en Informática, INACAP.

## Integrantes

- Christopher velasquez

## Objetivo

Construir la página principal de una tienda tecnológica aplicando los fundamentos de React: componentes funcionales reutilizables, manejo de estado con `useState`, comunicación entre componentes mediante props y renderizado dinámico de datos cargados desde un archivo JSON. El proyecto incluye además un backend básico con Node.js, Express y MongoDB como base para futuras funcionalidades (autenticación, carrito persistente y pagos).

## Tecnologías utilizadas

**Frontend**

- React 19 (componentes funcionales y hooks)
- Vite (entorno de desarrollo y empaquetado)
- HTML5 / CSS3 (Flexbox, Grid, media queries, animaciones)
- JavaScript ES6 (arrow functions, `map`, `filter`, `reduce`, `sort`, spread, template strings)

**Backend**

- Node.js + Express.js
- MongoDB Community Server
- Mongoose

**Herramientas**

- Visual Studio Code / Cursor
- Git y GitHub
- MongoDB Compass

## Estructura del proyecto

```
techstore/
  backend/               → API REST (Express + Mongoose), ver backend/README.md
    models/Producto.js
    routes/productos.js
    seed.js
    server.js
  public/
    img/                 → imágenes de los productos
  src/
    components/
      Banner.jsx         → banner principal con imagen y botón "Ver ofertas"
      Cart.jsx           → panel del carrito con lista, miniaturas y total
      Footer.jsx         → barra de garantías + datos de contacto
      Header.jsx         → barra superior (logo, buscador, sesión, carrito, redes)
      Navbar.jsx         → menú de navegación con efecto hover
      ProductCard.jsx    → tarjeta individual de producto
      ProductList.jsx    → grilla de productos con ordenamiento por precio
      SearchBar.jsx      → input controlado del buscador
      Sidebar.jsx        → barra lateral de beneficios
    css/                 → un archivo CSS por componente
    data/
      productos.json     → catálogo de 10 productos
    App.jsx              → componente raíz: estado global (carrito, búsqueda, toast)
    main.jsx             → punto de entrada de React
```

## Instrucciones de instalación

### Frontend

```bash
git clone https://github.com/chriszzzzv/techstore-.git
cd techstore
npm install
npm run dev
```

Abrir `http://localhost:5173` en el navegador.

### Publicar en GitHub Pages

El proyecto está configurado para desplegarse en:

**https://chriszzzzv.github.io/techstore-/**

```bash
npm run deploy
```

Esto ejecuta `vite build` y sube la carpeta `dist` a la rama `gh-pages` con el paquete `gh-pages`.

En GitHub: **Settings → Pages → Source: Deploy from branch → gh-pages / root**.

Las imágenes de `public/img/` usan rutas relativas y `import.meta.env.BASE_URL` para funcionar tanto en local como en la subcarpeta de GitHub Pages (`base: '/techstore-/'` en `vite.config.js`).

### Backend (opcional)

Requiere MongoDB Community Server corriendo localmente.

```bash
cd backend
npm install
```

Crear un archivo `backend/.env` con:

```
MONGO_URI=mongodb://127.0.0.1:27017/techstore
PUERTO=3000
```

Luego:

```bash
node seed.js      # carga los 10 productos del JSON en MongoDB (una vez)
node server.js    # levanta la API en http://localhost:3000
```

Rutas disponibles: `GET /api/productos` y `POST /api/productos` (detalle en `backend/README.md`).

## Funcionalidades

- **Buscador en tiempo real**: filtra los productos con `filter()` e `includes()` mientras se escribe (`onChange`).
- **Carrito**: al presionar "Agregar al carrito" aumenta el contador de la barra superior (`useState`); el ícono abre un panel con los productos, sus miniaturas, opción de eliminar y el total calculado con `reduce()`.
- **Productos desde JSON**: el catálogo se carga desde `src/data/productos.json`, nunca escrito dentro de los componentes.

**Bonificaciones implementadas**

- Toast de confirmación al agregar productos
- Ordenar por precio (menor/mayor) con `sort()`
- Diseño responsive (media queries para tablet y móvil)
- Animaciones CSS (hover en tarjetas y menú, entrada del toast)

## Capturas de pantalla

[COMPLETAR: insertar capturas en una carpeta `capturas/` y referenciarlas aquí]

```
![Página principal](capturas/escritorio.png)
![Vista móvil](capturas/movil.png)
![Buscador filtrando](capturas/buscador.png)
![Carrito abierto](capturas/carrito.png)
![Base de datos en Compass](capturas/compass.png)
```
## Prompt 


## Dificultades encontradas

- **Nombres de archivos de imágenes**: al descargar las imágenes de productos quedaron con doble extensión (`notebook.jpg.png`) porque Windows oculta la extensión real; las rutas del JSON no coincidían y las imágenes no cargaban. Se resolvió renombrando los archivos y aprendiendo que las rutas son exactas, incluyendo extensión y mayúsculas.
- **Convención de nombres en componentes**: algunos componentes se crearon con minúscula inicial (`productCard.jsx`); en Windows funcionaba, pero se corrigió a PascalCase con `git mv` porque en servidores Linux los imports fallarían.
- **Caché del servidor de desarrollo**: tras renombrar archivos, Vite mantuvo referencias antiguas y los cambios no se reflejaban en el navegador; se resolvió reiniciando el servidor.
- **Flujo de Git**: comprender que `git commit` solo guarda lo preparado con `git add`, y que `git add .` opera desde la carpeta actual hacia abajo.
- **Comunicación entre componentes lejanos**: el botón "Agregar al carrito" está en `ProductCard` y el contador en `Header`; se resolvió subiendo el estado al ancestro común (`App`) y repartiendo el valor y la función modificadora por props (lifting state up).

## Conclusiones

El proyecto permitió aplicar de forma integrada los conceptos centrales de React: la división de una interfaz en componentes reutilizables, el flujo unidireccional de datos (los datos bajan por props, los eventos suben mediante funciones) y el renderizado dinámico a partir de datos externos. La separación entre datos (`productos.json`) y componentes demostró su valor al agregar funcionalidades como el buscador y el ordenamiento sin modificar las tarjetas. Finalmente, la construcción del backend con Express y Mongoose mostró cómo se estructura una API REST y dejó la base lista para conectar el frontend a una base de datos real en una siguiente etapa.

## capturas 
image.png