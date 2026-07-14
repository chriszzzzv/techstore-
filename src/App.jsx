import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import productos from './data/productos.json';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [toast, setToast] = useState('');

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setToast(`✓ ${producto.nombre} agregado al carrito`);
    setTimeout(() => setToast(''), 2000);
  };

  const quitarDelCarrito = (indice) => {
    setCarrito(carrito.filter((_, i) => i !== indice));
  };

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Header
        cartCount={carrito.length}
        busqueda={busqueda}
        onBuscar={setBusqueda}
        onToggleCarrito={() => setMostrarCarrito(!mostrarCarrito)}
      />
      {mostrarCarrito && (
        <Cart carrito={carrito} onQuitar={quitarDelCarrito} />
      )}
      {toast && <div className="toast">{toast}</div>}
      <Navbar />
      <Banner />
      <div className="contenido">
        <Sidebar />
        <ProductList productos={productosFiltrados} onAgregar={agregarAlCarrito} />
      </div>
      <Footer />
    </div>
  );
}

export default App;