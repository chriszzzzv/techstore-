import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const agregarAlCarrito = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <Navbar />
      <Banner />
      <div className="contenido">
        <Sidebar />
        <ProductList onAgregar={agregarAlCarrito} />
      </div>
      <Footer />
    </div>
  );
}

export default App;