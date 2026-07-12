import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import productos from './data/productos.json';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [busqueda, setBusqueda] = useState('');

  const agregarAlCarrito = () => {
    setCartCount(cartCount + 1);
  };

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Header cartCount={cartCount} busqueda={busqueda} onBuscar={setBusqueda} />
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
