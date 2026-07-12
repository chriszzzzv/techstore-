import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
function App() {
  return (
    <div>
      <Header cartCount={0} />
      <Navbar />
      <Banner />
      <ProductList /> 
    </div>
  );
}

export default App;
