import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div>
      <Header cartCount={0} />
      <Navbar />
      <Banner />
      <ProductList /> 
      <Sidebar />
    </div>
  );
}

export default App;
