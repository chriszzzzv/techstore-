import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header cartCount={0} />
      <Navbar />
      <Banner />
      <div className="contenido">
        <Sidebar />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
